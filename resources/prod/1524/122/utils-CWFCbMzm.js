import{g as a}from"./guildMembers-DLy8NRhL.js"
import{a as t}from"./all-YfMtr2SN.js"
import{aO as s,dD as e,f as r,C as m,aQ as n,bQ as o,bs as i}from"./calfSystem-C4gAE-9q.js"
import{f as c}from"./formatUtcDateTime-DUH5p_s6.js"
import{k as p}from"./keys-CFr_h3Bx.js"
import{p as f}from"./padZ-DFV6JBPu.js"
const l=0,u=1,d=2,b=3,g=4,y=5,U=6,$="fsh_guildActivity"
async function j(){return await s($)??{lastUpdate:0,members:{}}}const w=a=>c(new Date(1e3*a)),D=a=>[a[0],a[1],a[2],a[3],w(a[4]),a[5],a[6]]
function M(a){const{lastUpdate:t,members:s}=a
var e
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${m(s).flatMap((e=w(t),([a,t])=>t.map(D).map((t=>[e,a,...t].join(","))))).join("\n")}`}const v=a=>`${a[0]}${a[1]}${a[2]}${a[3]}${a[4]}${a[5]}`,S=[a=>a.getFullYear().toString(),a=>a.getMonth()+1,a=>a.getDate(),a=>a.getHours(),a=>a.getMinutes(),a=>a.getSeconds()],k=a=>t=>t(a)
async function L(a,t){const s=await j()
if(!s.lastUpdate||!s.members)return
const r=a(s),m=new Blob([r],{type:t}),n=`${v(S.map(k(new Date)).map(f))}_GuildTracker.${t.split("/")[1]}`
e(m,n)}async function h(a){const t=await j(),s={lastUpdate:t.lastUpdate,members:r(m(t.members).filter((([t])=>t!==a)))}
n($,s)}async function x(a){const t=await j(),s={lastUpdate:t.lastUpdate,members:r(m(t.members).map((([t,s])=>[t,s.filter((t=>t[4]>a))])))}
n($,s)}async function A(){const[s,e]=await t([j(),a(o())]),r=e.map((({username:a})=>a))
return p(s.members).filter((a=>t=>!a.find((a=>a===t)))(r)).sort(i)}export{U as a,l as b,u as c,L as d,h as e,$ as f,j as g,M as h,d as l,b as m,x as p,A as r,g as u,y as v}
//# sourceMappingURL=utils-CWFCbMzm.js.map
