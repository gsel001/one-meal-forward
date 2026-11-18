"""One-time repository bootstrap. Never overwrite a live mission catalogue.

Requires GitHub CLI with an authenticated repository-owner account for --apply.
Safe by default: without --apply, neither network requests nor writes occur.
"""
import argparse
import json
import subprocess
from pathlib import Path

REPO = "gsel001/one-meal-forward"
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
    args = ["gh", "api", endpoint, "--method", method]
    if data is not None:
        args += ["--input", "-"]
    response = subprocess.run(
        args, input=json.dumps(data) if data is not None else None,
        text=True, capture_output=True, check=True
    )
    return json.loads(response.stdout) if response.stdout.strip() else None


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
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
    if MANIFEST.exists():
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
    if package.get("name") != "one-meal-forward":
        parser.error("Refusing to modify GitHub from a different project.")

    user = api("user")
    if user.get("login", "").lower() != "gsel001":
        parser.error("Authenticated GitHub CLI user is not the expected repository owner.")

    tasks = json.loads(LAUNCH_TASKS.read_text(encoding="utf-8"))
    if not isinstance(tasks, list) or not tasks:
        parser.error("Launch task manifest must be a nonempty list.")

    existing_labels = {label["name"] for label in api("repos/" + REPO + "/labels?per_page=100")}
    for name, color in LABELS.items():
        if name not in existing_labels:
            api("repos/" + REPO + "/labels", "POST", {
                "name": name, "color": color, "description": name.capitalize()
            })
    milestones = api("repos/" + REPO + "/milestones?state=all&per_page=100")
    for title, description in MILESTONES:
        if not any(m["title"] == title for m in milestones):
            milestones.append(api("repos/" + REPO + "/milestones", "POST", {
                "title": title, "description": description
            }))
    milestone_id = next(m["number"] for m in milestones if m["title"] == "Community launch")

    existing_issues = {
        issue["title"]: issue
        for issue in api("repos/" + REPO + "/issues?state=all&per_page=100")
        if "pull_request" not in issue
    }
    missions = []
    for task in tasks:
        issue = existing_issues.get(task["title"])
        if issue is None:
            issue = api("repos/" + REPO + "/issues", "POST", {
                "title": task["title"], "body": task["body"],
                "labels": task["labels"], "milestone": milestone_id
            })
        criteria = task["body"].split("## Acceptance criteria\n", 1)
        if len(criteria) != 2:
            raise ValueError("Launch task lacks acceptance criteria: " + task["title"])
        description = criteria[1].split("\n\n", 1)[0].replace("- [ ] ", "").replace("\n", " ")
        missions.append({
            "id": "project-" + str(issue["number"]),
            "title": task["title"], "description": description,
            "organization": "OneMealForward", "kind": "project",
            "location": "Worldwide", "languages": ["English"],
            "skill": task["skill"], "mode": "Online", "effort": task["effort"],
            "status": "verified", "verifiedAt": "2026-11-18",
            "expiresAt": "2027-02-16", "url": issue["html_url"],
            "evidence": issue["html_url"], "example": False
        })

    # x prevents overwriting even if a manifest appears while the script is running.
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    with MANIFEST.open("x", encoding="utf-8") as output:
        json.dump(missions, output, indent=2, ensure_ascii=False)
        output.write("\n")
    print("One-time bootstrap completed; review generated records before committing.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
