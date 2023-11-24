import{g as a}from"./guildMembers-TX9z2VMS.js"
import{a as t}from"./all-TTLWag-d.js"
import{d8 as s,f as e,C as r,bH as m,bk as n}from"./calfSystem-ZGMc097r.js"
import{f as o}from"./formatUtcDateTime-nEhiH8fM.js"
import{k as i}from"./keys-fO1nQfVO.js"
import{g as p,s as c}from"./idb-Asb6LweF.js"
import{p as f}from"./padZ-zYXZ2AFi.js"
const l=0,u=1,d=2,b=3,g=4,y=5,j=6,U="fsh_guildActivity"
async function $(){return await p(U)??{lastUpdate:0,members:{}}}const w=a=>o(new Date(1e3*a)),M=a=>[a[0],a[1],a[2],a[3],w(a[4]),a[5],a[6]]
function v(a){const{lastUpdate:t,members:s}=a
var e
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${r(s).flatMap((e=w(t),([a,t])=>t.map(M).map((t=>[e,a,...t].join(","))))).join("\n")}`}const D=a=>`${a[0]}${a[1]}${a[2]}${a[3]}${a[4]}${a[5]}`,S=[a=>a.getFullYear().toString(),a=>a.getMonth()+1,a=>a.getDate(),a=>a.getHours(),a=>a.getMinutes(),a=>a.getSeconds()],k=a=>t=>t(a)
async function L(a,t){const e=await $()
if(!e.lastUpdate||!e.members)return
const r=a(e),m=new Blob([r],{type:t}),n=`${D(S.map(k(new Date)).map(f))}_GuildTracker.${t.split("/")[1]}`
s(m,n)}async function h(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:e(r(t.members).filter((([t])=>t!==a)))}
c(U,s)}async function T(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:e(r(t.members).map((([t,s])=>[t,s.filter((t=>t[4]>a))])))}
c(U,s)}async function x(){const[s,e]=await t([$(),a(m())]),r=e.map((({username:a})=>a))
return i(s.members).filter((a=>t=>!a.find((a=>a===t)))(r)).sort(n)}export{l as a,j as b,u as c,L as d,h as e,U as f,$ as g,v as h,d as l,b as m,T as p,x as r,g as u,y as v}
//# sourceMappingURL=utils-bE6Dui_C.js.map
