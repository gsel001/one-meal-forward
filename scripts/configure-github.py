"""Idempotent setup; uses gh's credential store, never writes credentials."""
import json, subprocess
from pathlib import Path
REPO='gsel001/one-meal-forward'
def api(endpoint,method='GET',data=None):
 args=['gh','api',endpoint,'--method',method]
 if data is not None: args+=['--input','-']
 r=subprocess.run(args,input=json.dumps(data) if data is not None else None,text=True,capture_output=True,check=True)
 return json.loads(r.stdout) if r.stdout.strip() else None
labels={'good first issue':'7057ff','help wanted':'008672','documentation':'0075ca','translation':'a2eeef','design':'d4c5f9','accessibility':'0e8a16','bug':'d73a4a','enhancement':'a2eeef','security':'b60205','research':'fbca04','mission submission':'c2e0c6','pending verification':'fef2c0'}
existing={x['name'] for x in api(f'repos/{REPO}/labels?per_page=100')}
for name,color in labels.items():
 if name not in existing: api(f'repos/{REPO}/labels','POST',{'name':name,'color':color,'description':name.capitalize()})
milestones=api(f'repos/{REPO}/milestones?state=all')
for title,description in [('Community launch','Accessible onboarding, research, and independent review.'),('First verified organization mission','Consent, public evidence, safeguards, expiry, and a reviewed request; no promised date.')]:
 if not any(m['title']==title for m in milestones): api(f'repos/{REPO}/milestones','POST',{'title':title,'description':description})
mid=next(m['number'] for m in api(f'repos/{REPO}/milestones') if m['title']=='Community launch')
existing={x['title']:x for x in api(f'repos/{REPO}/issues?state=all&per_page=100')}
missions=[]
for task in json.loads(Path('scripts/launch-issues.json').read_text()):
 issue=existing.get(task['title']) or api(f'repos/{REPO}/issues','POST',{k:task[k] for k in ['title','body','labels']}|{'milestone':mid})
 missions.append({'id':f"project-{issue['number']}",'title':task['title'],'description':task['body'].split('## Acceptance criteria\n')[1].split('\n\n')[0].replace('- [ ] ','').replace('\n',' '),'organization':'OneMealForward','kind':'project','location':'Worldwide','languages':['English'],'skill':task['skill'],'mode':'Online','effort':task['effort'],'status':'verified','verifiedAt':'2026-11-18','expiresAt':'2027-02-16','url':issue['html_url'],'evidence':issue['html_url'],'example':False})
Path('site/data/missions.json').write_text(json.dumps(missions,indent=2,ensure_ascii=False)+'\n')
print(f'Configured labels and milestones; {len(missions)} genuine beginner issues recorded.')
