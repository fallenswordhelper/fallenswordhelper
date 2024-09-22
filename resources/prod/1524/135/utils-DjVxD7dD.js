import{g as a}from"./guildMembers-B7ko5RTl.js"
import{a as t}from"./all-YfMtr2SN.js"
import{aQ as s,dK as e,f as r,C as m,aS as n,bW as o,bu as i}from"./calfSystem-B-q5dZfX.js"
import{f as c}from"./formatUtcDateTime-DUH5p_s6.js"
import{k as p}from"./keys-CFr_h3Bx.js"
import{p as f}from"./padZ-DFV6JBPu.js"
const l=0,u=1,d=2,b=3,g=4,U=5,y=6,j="fsh_guildActivity"
async function $(){return await s(j)??{lastUpdate:0,members:{}}}const w=a=>c(new Date(1e3*a)),M=a=>[a[0],a[1],a[2],a[3],w(a[4]),a[5],a[6]]
function S(a){const{lastUpdate:t,members:s}=a
var e
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${m(s).flatMap((e=w(t),([a,t])=>t.map(M).map((t=>[e,a,...t].join(","))))).join("\n")}`}const v=a=>`${a[0]}${a[1]}${a[2]}${a[3]}${a[4]}${a[5]}`,D=[a=>a.getFullYear().toString(),a=>a.getMonth()+1,a=>a.getDate(),a=>a.getHours(),a=>a.getMinutes(),a=>a.getSeconds()],L=a=>t=>t(a)
async function h(a,t){const s=await $()
if(!s.lastUpdate||!s.members)return
const r=a(s),m=new Blob([r],{type:t}),n=`${v(D.map(L(new Date)).map(f))}_GuildTracker.${t.split("/")[1]}`
e(m,n)}async function k(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:r(m(t.members).filter((([t])=>t!==a)))}
n(j,s)}async function x(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:r(m(t.members).map((([t,s])=>[t,s.filter((t=>t[4]>a))])))}
n(j,s)}async function A(){const[s,e]=await t([$(),a(o())]),r=e.map((({username:a})=>a))
return p(s.members).filter((a=>t=>!a.find((a=>a===t)))(r)).sort(i)}export{y as a,l as b,u as c,h as d,k as e,j as f,$ as g,S as h,d as l,b as m,x as p,A as r,g as u,U as v}
//# sourceMappingURL=utils-DjVxD7dD.js.map
