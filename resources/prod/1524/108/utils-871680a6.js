import{g as a}from"./guildMembers-3d3812de.js"
import{a as t}from"./all-414e0607.js"
import{d7 as s,f as e,C as m,bL as r,bq as n}from"./calfSystem-34913441.js"
import{f as o}from"./formatUtcDateTime-1099acf4.js"
import{k as i}from"./keys-ae03eaa2.js"
import{g as p,s as c}from"./idb-ec5d6344.js"
import{p as f}from"./padZ-e55b66a2.js"
const l=0,u=1,d=2,b=3,g=4,y=5,j=6,U="fsh_guildActivity"
async function $(){return await p(U)??{lastUpdate:0,members:{}}}const w=a=>o(new Date(1e3*a)),M=a=>[a[0],a[1],a[2],a[3],w(a[4]),a[5],a[6]]
function v(a){const{lastUpdate:t,members:s}=a
var e
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${m(s).flatMap((e=w(t),([a,t])=>t.map(M).map((t=>[e,a,...t].join(","))))).join("\n")}`}const D=a=>`${a[0]}${a[1]}${a[2]}${a[3]}${a[4]}${a[5]}`,L=[a=>a.getFullYear().toString(),a=>a.getMonth()+1,a=>a.getDate(),a=>a.getHours(),a=>a.getMinutes(),a=>a.getSeconds()],S=a=>t=>t(a)
async function k(a,t){const e=await $()
if(!e.lastUpdate||!e.members)return
const m=a(e),r=new Blob([m],{type:t}),n=`${D(L.map(S(new Date)).map(f))}_GuildTracker.${t.split("/")[1]}`
s(r,n)}async function h(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:e(m(t.members).filter((([t])=>t!==a)))}
c(U,s)}async function T(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:e(m(t.members).map((([t,s])=>[t,s.filter((t=>t[4]>a))])))}
c(U,s)}async function x(){const[s,e]=await t([$(),a(r())]),m=e.map((({username:a})=>a))
return i(s.members).filter((a=>t=>!a.find((a=>a===t)))(m)).sort(n)}export{l as a,j as b,u as c,k as d,h as e,U as f,$ as g,v as h,d as l,b as m,T as p,x as r,g as u,y as v}
//# sourceMappingURL=utils-871680a6.js.map
