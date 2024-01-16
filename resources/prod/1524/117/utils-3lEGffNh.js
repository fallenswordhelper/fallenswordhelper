import{g as a}from"./guildMembers-4GuRAnc8.js"
import{a as t}from"./all-TTLWag-d.js"
import{aO as s,dA as e,f as r,C as m,aQ as n,bP as o,bs as i}from"./calfSystem-G1dN925O.js"
import{f as c}from"./formatUtcDateTime-nEhiH8fM.js"
import{k as p}from"./keys-fO1nQfVO.js"
import{p as f}from"./padZ-zYXZ2AFi.js"
const l=0,u=1,d=2,b=3,g=4,y=5,j=6,U="fsh_guildActivity"
async function $(){return await s(U)??{lastUpdate:0,members:{}}}const w=a=>c(new Date(1e3*a)),M=a=>[a[0],a[1],a[2],a[3],w(a[4]),a[5],a[6]]
function v(a){const{lastUpdate:t,members:s}=a
var e
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${m(s).flatMap((e=w(t),([a,t])=>t.map(M).map((t=>[e,a,...t].join(","))))).join("\n")}`}const D=a=>`${a[0]}${a[1]}${a[2]}${a[3]}${a[4]}${a[5]}`,S=[a=>a.getFullYear().toString(),a=>a.getMonth()+1,a=>a.getDate(),a=>a.getHours(),a=>a.getMinutes(),a=>a.getSeconds()],L=a=>t=>t(a)
async function h(a,t){const s=await $()
if(!s.lastUpdate||!s.members)return
const r=a(s),m=new Blob([r],{type:t}),n=`${D(S.map(L(new Date)).map(f))}_GuildTracker.${t.split("/")[1]}`
e(m,n)}async function k(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:r(m(t.members).filter((([t])=>t!==a)))}
n(U,s)}async function A(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:r(m(t.members).map((([t,s])=>[t,s.filter((t=>t[4]>a))])))}
n(U,s)}async function T(){const[s,e]=await t([$(),a(o())]),r=e.map((({username:a})=>a))
return p(s.members).filter((a=>t=>!a.find((a=>a===t)))(r)).sort(i)}export{j as a,l as b,u as c,h as d,k as e,U as f,$ as g,v as h,d as l,b as m,A as p,T as r,g as u,y as v}
//# sourceMappingURL=utils-3lEGffNh.js.map
