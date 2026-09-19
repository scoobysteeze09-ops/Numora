<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Numora - USA Online Jobs</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:system-ui,sans-serif}
body{background:#f6f7fb;color:#111}
.top{background:#fff;border-bottom:1px solid #eee;padding:12px;display:flex;gap:10px;align-items:center;position:sticky;top:0;z-index:10}
.logo{font-weight:900;font-size:20px;cursor:pointer}
.logo span{color:#2563eb}
.search{flex:1;background:#f1f5f9;padding:10px 12px;border-radius:10px;display:flex;gap:8px}
.search input{border:0;background:transparent;outline:none;width:100%;font-size:13px}
.page{display:none;padding-bottom:80px}
.page.on{display:block}
.hero{margin:12px;background:linear-gradient(135deg,#111,#2563eb);color:#fff;padding:20px;border-radius:16px}
.hero h2{font-size:22px}
.grid{padding:12px;display:grid;grid-template-columns:1fr;gap:10px}
.card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:14px;display:flex;gap:12px;cursor:pointer}
.iconBox{width:48px;height:48px;background:#eff6ff;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.info{flex:1}
.jobTitle{font-weight:700;font-size:13px}
.company{font-size:11px;color:#666;margin-top:2px}
.tags{margin-top:6px;display:flex;gap:6px;flex-wrap:wrap}
.tag{font-size:10px;background:#f1f5f9;padding:3px 7px;border-radius:20px}
.salary{font-weight:800;color:#2563eb;font-size:12px}
.btn{width:100%;padding:12px;border:0;border-radius:10px;font-weight:700;margin-top:10px;cursor:pointer}
.btn-dark{background:#111;color:#fff}
.btn-light{background:#eee}
.btn-blue{background:#2563eb;color:#fff}
.inp{width:100%;padding:12px;border:1px solid #ddd;border-radius:10px;margin-top:10px}
.cardForm{background:#fff;border:1px solid #eee;border-radius:16px;padding:20px;margin:16px}
.bottom{position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:1px solid #eee;display:flex;justify-content:space-around;padding:8px 0}
.bottom div{text-align:center;font-size:10px;color:#888;position:relative;cursor:pointer}
.bottom div.on{color:#111}
.bottom span{font-size:18px;display:block}
.badge{background:#2563eb;color:#fff;font-size:9px;padding:2px 5px;border-radius:10px;position:absolute;top:-5px;right:5px}
</style>
</head>
<body>

<div class="top">
<div class="logo" onclick="go('home')">num<span>ora</span></div>
<div class="search">🔍<input id="q" placeholder="Search USA jobs..." oninput="render()"></div>
<div id="auth"></div>
</div>

<div id="home" class="page on">
<div class="hero">
<div style="font-size:11px;opacity:.8">🇺🇸 TRUSTED BY 12K+ USA JOB SEEKERS</div>
<h2 style="margin-top:6px">Find USA Remote Jobs<br>Apply Today</h2>
<div id="wel" style="font-size:12px;opacity:.7;margin-top:8px">Create account & get hired fast</div>
</div>
<div id="grid" class="grid"></div>
</div>

<div id="view" class="page">
<div style="background:#fff;padding:16px">
<div style="display:flex;gap:12px;align-items:center">
<div id="vIcon" style="width:60px;height:60px;background:#eff6ff;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:28px"></div>
<div><div id="vTitle" style="font-weight:800;font-size:16px"></div><div id="vCompany" style="font-size:12px;color:#666;margin-top:2px"></div></div>
</div>
<div style="margin-top:16px;display:flex;gap:8px">
<div id="vSalary" style="background:#111;color:#fff;padding:6px 12px;border-radius:20px;font-size:12px;font-weight:700"></div>
<div id="vType" style="background:#eff6ff;color:#2563eb;padding:6px 12px;border-radius:20px;font-size:12px"></div>
</div>
<div style="margin-top:16px;font-size:13px;line-height:1.5;color:#444">
<b>Job Description:</b><br>
Work remotely for USA company. No experience needed. Training provided. Weekly pay via PayPal/Bank. Must have smartphone/laptop + internet.
<br><br>
<b>Requirements:</b><br>
• 18+ years old<br>
• Basic English<br>
• Can work 2-4 hrs daily
</div>
<button class="btn btn-blue" onclick="applyJob()">Apply Now - USA Job</button>
<button class="btn btn-light" onclick="go('home')">Back to Jobs</button>
</div>
</div>

<div id="saved" class="page">
<div style="padding:16px"><h3>Saved & Applied Jobs</h3><div id="savedList" style="margin-top:10px"></div><button class="btn btn-light" onclick="go('home')">Find More Jobs</button></div>
</div>

<div id="login" class="page">
<div class="cardForm"><h3>Login to Apply USA Jobs</h3><input id="le" class="inp" placeholder="Email"><input id="lp" class="inp" type="password" placeholder="Password"><button class="btn btn-dark" onclick="login()">Login</button><p style="text-align:center;margin-top:10px;font-size:13px" onclick="go('signup')"><u>Create account</u></p></div>
</div>

<div id="signup" class="page">
<div class="cardForm"><h3>Create Account - USA Jobs</h3><input id="sn" class="inp" placeholder="Full name"><input id="se" class="inp" placeholder="Email"><input id="sp" class="inp" type="password" placeholder="Password"><button class="btn btn-dark" onclick="signup()">Create Account</button><p style="text-align:center;margin-top:10px;font-size:13px" onclick="go('login')"><u>Already have account? Login</u></p></div>
</div>

<div id="admin" class="page">
<div class="cardForm"><h3>Post New USA Job (Admin)</h3><input id="an" class="inp" placeholder="Job Title e.g. Remote Data Entry USA"><input id="ac" class="inp" placeholder="Company"><input id="as" class="inp" placeholder="Salary e.g. $20/hr"><input id="al" class="inp" placeholder="Location e.g. USA Remote"><button class="btn btn-dark" onclick="addJob()">Post Job</button><button class="btn btn-light" onclick="go('home')">Home</button></div>
</div>

<div class="bottom">
<div class="on" onclick="go('home')"><span>🏠</span>Jobs</div>
<div onclick="go('saved')" style="position:relative"><span>💼</span>Applied<div id="bc" class="badge" style="display:none">0</div></div>
<div onclick="go('admin')"><span>➕</span>Post</div>
<div onclick="you()"><span>👤</span>You</div>
</div>

<script>
var fallbackJobs=[
{id:1,title:"Remote Customer Support - USA",company:"Amazon USA",salary:"$18/hr",type:"Remote",location:"USA Remote",icon:"💼"},
{id:2,title:"Data Entry Specialist",company:"US Tech Corp",salary:"$22/hr",type:"Part-time",location:"USA Remote",icon:"⌨️"},
{id:3,title:"Virtual Assistant USA",company:"HireUSA",salary:"$25/hr",type:"Full-time",location:"USA Remote",icon:"🧑‍💻"},
{id:4,title:"Online Chat Support",company:"Support LLC",salary:"$20/hr",type:"Remote",location:"USA",icon:"💬"},
{id:5,title:"Remote Sales Agent",company:"USA Sales Pro",salary:"$30/hr",type:"Remote",location:"USA Remote",icon:"📞"}
];
var cur=null;
var jobsCache=[];
async function fetchJobs(){
try{
var r=await fetch('/api/jobs');
if(r.ok){ jobsCache=await r.json(); return jobsCache; }
}catch(e){}
var local=localStorage.getItem('numora_jobs');
if(local){ try{ jobsCache=JSON.parse(local); return jobsCache; }catch(e){} }
jobsCache=fallbackJobs;
return jobsCache;
}
function getSaved(){try{var s=localStorage.getItem('saved');if(s)return JSON.parse(s)}catch(e){}return[]}
function go(id){document.querySelectorAll('.page').forEach(function(x){x.classList.remove('on')});document.getElementById(id).classList.add('on');if(id==='saved')showSaved();window.scrollTo(0,0)}
async function render(){
var q=document.getElementById('q').value.toLowerCase();
var list=await fetchJobs();
if(q)list=list.filter(function(x){return x.title.toLowerCase().indexOf(q)!==-1||x.company.toLowerCase().indexOf(q)!==-1});
var h='';
for(var i=0;i<list.length;i++){
var j=list[i];
h+='<div class="card" onclick="openJob('+j.id+')"><div class="iconBox">'+j.icon+'</div><div class="info"><div class="jobTitle">'+j.title+'</div><div class="company">'+j.company+' • '+j.location+'</div><div class="tags"><span class="tag">'+j.type+'</span><span class="tag">'+j.salary+'</span></div></div><div class="salary">'+j.salary+'</div></div>';
}
document.getElementById('grid').innerHTML=h;
}
function openJob(id){
for(var i=0;i<jobsCache.length;i++){
if(jobsCache[i].id===id){
var j=jobsCache[i];cur=j;
document.getElementById('vIcon').textContent=j.icon;
document.getElementById('vTitle').textContent=j.title;
document.getElementById('vCompany').textContent=j.company+' • '+j.location;
document.getElementById('vSalary').textContent=j.salary;
document.getElementById('vType').textContent=j.type;
go('view');return;
}
}
}
function applyJob(){
if(!localStorage.getItem('u')){go('login');alert('Login to apply USA jobs');return}
var s=getSaved();
if(!s.find(function(x){return x.id===cur.id})){s.push(cur);localStorage.setItem('saved',JSON.stringify(s))}
ui();alert('Applied! Company will contact you via email (USA Job)');
}
function showSaved(){
var s=getSaved();
var box=document.getElementById('savedList');
if(s.length===0){box.innerHTML='<div style="color:#888;font-size:13px">No applications yet. Apply to USA jobs!</div>';return}
var h='';
for(var i=0;i<s.length;i++){
var j=s[i];
h+='<div style="background:#fff;border:1px solid #eee;padding:12px;border-radius:12px;margin-top:8px;display:flex;gap:10px"><div style="font-size:20px">'+j.icon+'</div><div><div style="font-weight:700;font-size:12px">'+j.title+'</div><div style="font-size:11px;color:#666">'+j.company+' • '+j.salary+'</div><div style="font-size:10px;color:green;margin-top:4px">✓ Applied - Waiting for USA employer</div></div></div>';
}
box.innerHTML=h;
}
function signup(){
var n=document.getElementById('sn').value.trim();
var e=document.getElementById('se').value.trim();
var p=document.getElementById('sp').value.trim();
if(!n||!e||!p){alert('Fill all');return}
var users=[];try{var s=localStorage.getItem('users');if(s)users=JSON.parse(s)}catch(err){}
users.push({n:n,e:e,p:p});localStorage.setItem('users',JSON.stringify(users));localStorage.setItem('u',JSON.stringify({name:n,email:e}));go('home');ui();
}
function login(){
var e=document.getElementById('le').value.trim();
var p=document.getElementById('lp').value.trim();
var users=[];try{var s=localStorage.getItem('users');if(s)users=JSON.parse(s)}catch(err){}
for(var i=0;i<users.length;i++){if(users[i].e===e&&users[i].p===p){localStorage.setItem('u',JSON.stringify({name:users[i].n,email:e}));go('home');ui();return}}
alert