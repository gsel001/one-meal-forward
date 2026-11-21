"""One-time repository bootstrap. Never overwrite a live mission catalogue.

Requires GitHub CLI with an authenticated repository-owner account for --apply.
Safe by default: without --apply, neither network requests nor writes occur.
"""
import argparse
import json
import subprocess
from pathlib import Path

REPO = "gsel001/one-meal-forward"
REPOSITORY_ROOT = Path(__file__).resolve().parents[1]
MANIFEST = Path("site/data/missions.json")
LAUNCH_TASKS = Path("scripts/launch-issues.json")

LABELS = {
    "good first issue": "7057ff", "help wanted": "008672",
    "documentation": "0075ca", "translation": "a2eeef",
    "design": "d4c5f9", "accessibility": "0e8a16",
    "bug": "d73a4a", "enhancement": "a2eeef",
    "security": "b60205", "research": "fbca04",
    "mission submission": "c2e0c6", "pending verification": "fef2c0"
}
MILESTONES = (
    ("Community launch", "Accessible onboarding, research, and independent review."),
    ("First verified organization mission", "Consent, public evidence, safeguards, expiry, and a reviewed request; no promised date.")
)


def api(endpoint, method="GET", data=None):
    args = ["gh", "api", "--hostname", "github.com", endpoint, "--method", method]
    if data is not None:
        args += ["--input", "-"]
    response = subprocess.run(
        args, input=json.dumps(data) if data is not None else None,
        text=True, capture_output=True, check=True
    )
    return json.loads(response.stdout) if response.stdout.strip() else None


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__, allow_abbrev=False)
    parser.add_argument(
        "--apply", action="store_true",
        help="Perform one-time GitHub initialization only if mission data does not exist."
    )
    args = parser.parse_args(argv)

    if not args.apply:
        print("DRY RUN: No GitHub API calls or file modifications. "
              "Use --apply only for first-time setup in an empty repository.")
        return 0

    # Verify launch conditions before any authenticated GitHub API requests.
    if Path.cwd() != REPOSITORY_ROOT:
        parser.error("Run from the OneMealForward repository root containing this script.")
    try:
        MANIFEST.lstat()
    except FileNotFoundError:
        pass
    except OSError as error:
        parser.error("Unable to inspect the mission catalogue: " + str(error))
    else:
        print("EXISTING SITE PRESERVED: " + str(MANIFEST) +
              " already exists. No GitHub API calls or local writes were made.")
        return 0
    package_path = Path("package.json")
    if not package_path.is_file() or not LAUNCH_TASKS.is_file():
        parser.error("Run from the OneMealForward repository root, with launch task data present.")
    try:
        package = json.loads(package_path.read_text(encoding="utf-8"))
    except (ValueError, OSError) as error:
        parser.error("Unable to inspect package.json: " + str(error))
    if not isinstance(package, dict) or package.get("name") != "one-meal-forward":
        parser.error("Refusing to modify GitHub from a different project.")

    try:
        tasks = json.loads(LAUNCH_TASKS.read_text(encoding="utf-8"))
    except (ValueError, OSError) as error:
        parser.error("Unable to read the launch task manifest: " + str(error))
    if not isinstance(tasks, list) or not tasks:
        parser.error("Launch task manifest must be a nonempty list.")
    for index, task in enumerate(tasks, start=1):
        if not isinstance(task, dict):
            parser.error(f"Launch task {index} must be an object.")
        for field in ("title", "body"):
            value = task.get(field)
            if not isinstance(value, str) or not value.strip():
                parser.error(f"Launch task {index} must have a nonempty {field} string.")
        labels = task.get("labels")
        if not isinstance(labels, list) or any(
            not isinstance(label, str) or not label.strip() for label in labels
        ):
            parser.error(f"Launch task {index} labels must be a list of nonempty strings.")

    user = api("user")
    if user.get("login", "").lower() != "gsel001":
        parser.error("Authenticated GitHub CLI user is not the expected repository owner.")

    # Public issue titles and contents are not proof of provenance or review.
    # Never adopt existing issues, even if they appear to match launch tasks.
    # One result is enough to reject a nonempty repository; no pagination needed.
    existing_items = api("repos/" + REPO + "/issues?state=all&per_page=1")
    if not isinstance(existing_items, list):
        parser.error("Unable to confirm that the repository has no issues or pull requests.")
    if existing_items:
        parser.error("Repository already has issues or pull requests. "
                     "No changes made; use reviewed pull requests for maintenance.")

    existing_labels = {label["name"] for label in api("repos/" + REPO + "/labels?per_page=100")}
    milestones = {
        milestone["title"]: milestone["number"]
        for milestone in api("repos/" + REPO + "/milestones?state=all&per_page=100")
    }
    for name, color in LABELS.items():
        if name not in existing_labels:
            api("repos/" + REPO + "/labels", "POST", {
                "name": name, "color": color, "description": name.capitalize()
            })
    for title, description in MILESTONES:
        if title not in milestones:
            milestone = api("repos/" + REPO + "/milestones", "POST", {
                "title": title, "description": description
            })
            milestones[title] = milestone["number"]
    milestone_id = milestones["Community launch"]

    for task in tasks:
        api("repos/" + REPO + "/issues", "POST", {
            "title": task["title"], "body": task["body"],
            "labels": task["labels"], "milestone": milestone_id
        })

    # Issue creation is not verification. Never fabricate review dates or
    # automatically publish tasks; a maintainer must review additions via PR.
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    with MANIFEST.open("x", encoding="utf-8") as output:
        json.dump([], output, indent=2)
        output.write("\n")
    print("One-time setup completed; mission board starts empty. "
          "Add reviewed tasks through pull requests, not bootstrap.")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
