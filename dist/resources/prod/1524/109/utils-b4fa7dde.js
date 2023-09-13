import{g as a}from"./guildMembers-1ceac4c8.js"
import{a as t}from"./all-414e0607.js"
import{d7 as s,f as e,C as r,bL as m,bq as n}from"./calfSystem-2f15e074.js"
import{f as o}from"./formatUtcDateTime-1099acf4.js"
import{k as i}from"./keys-ae03eaa2.js"
import{g as p,s as c}from"./idb-28aa7d4a.js"
import{p as f}from"./padZ-e55b66a2.js"
const l=0,u=1,d=2,b=3,g=4,y=5,U=6,j="fsh_guildActivity"
async function $(){return await p(j)??{lastUpdate:0,members:{}}}const w=a=>o(new Date(1e3*a)),L=a=>[a[0],a[1],a[2],a[3],w(a[4]),a[5],a[6]]
function M(a){const{lastUpdate:t,members:s}=a
var e
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${r(s).flatMap((e=w(t),([a,t])=>t.map(L).map((t=>[e,a,...t].join(","))))).join("\n")}`}const v=a=>`${a[0]}${a[1]}${a[2]}${a[3]}${a[4]}${a[5]}`,D=[a=>a.getFullYear().toString(),a=>a.getMonth()+1,a=>a.getDate(),a=>a.getHours(),a=>a.getMinutes(),a=>a.getSeconds()],S=a=>t=>t(a)
async function h(a,t){const e=await $()
if(!e.lastUpdate||!e.members)return
const r=a(e),m=new Blob([r],{type:t}),n=`${v(D.map(S(new Date)).map(f))}_GuildTracker.${t.split("/")[1]}`
s(m,n)}async function k(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:e(r(t.members).filter((([t])=>t!==a)))}
c(j,s)}async function x(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:e(r(t.members).map((([t,s])=>[t,s.filter((t=>t[4]>a))])))}
c(j,s)}async function A(){const[s,e]=await t([$(),a(m())]),r=e.map((({username:a})=>a))
return i(s.members).filter((a=>t=>!a.find((a=>a===t)))(r)).sort(n)}export{l as a,U as b,u as c,h as d,k as e,j as f,$ as g,M as h,d as l,b as m,x as p,A as r,g as u,y as v}
//# sourceMappingURL=utils-b4fa7dde.js.map
