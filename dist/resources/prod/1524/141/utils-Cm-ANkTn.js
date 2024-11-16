import{g as a}from"./guildMembers-B5MxM4J7.js"
import{a as t}from"./all-YfMtr2SN.js"
import{aQ as s,bW as e,bw as r,dK as m,C as n,f as o,aS as i}from"./calfSystem-Blt4DbaE.js"
import{f as c}from"./formatUtcDateTime-DUH5p_s6.js"
import{k as p}from"./keys-CFr_h3Bx.js"
import{p as f}from"./padZ-DFV6JBPu.js"
const l=0,u=1,d=2,b=3,g=4,y=5,w=6,U="fsh_guildActivity"
async function $(){return await s(U)??{lastUpdate:0,members:{}}}const j=a=>c(new Date(1e3*a)),S=a=>[a[0],a[1],a[2],a[3],j(a[4]),a[5],a[6]]
function M(a){const{lastUpdate:t,members:s}=a
var e
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${n(s).flatMap((e=j(t),([a,t])=>t.map(S).map((t=>[e,a,...t].join(","))))).join("\n")}`}const v=a=>`${a[0]}${a[1]}${a[2]}${a[3]}${a[4]}${a[5]}`,D=[a=>a.getFullYear().toString(),a=>a.getMonth()+1,a=>a.getDate(),a=>a.getHours(),a=>a.getMinutes(),a=>a.getSeconds()],L=a=>t=>t(a)
async function h(a,t){const s=await $()
if(!s.lastUpdate||!s.members)return
const e=a(s),r=new Blob([e],{type:t}),n=`${v(D.map(L(new Date)).map(f))}_GuildTracker.${t.split("/")[1]}`
m(r,n)}async function k(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:o(n(t.members).filter((([t])=>t!==a)))}
i(U,s)}async function x(a){const t=await $(),s={lastUpdate:t.lastUpdate,members:o(n(t.members).map((([t,s])=>[t,s.filter((t=>t[4]>a))])))}
i(U,s)}async function A(){const[s,m]=await t([$(),a(e())]),n=m.map((({username:a})=>a))
return p(s.members).filter((a=>t=>!a.find((a=>a===t)))(n)).sort(r)}export{w as a,l as b,u as c,h as d,M as e,U as f,$ as g,k as h,d as l,b as m,x as p,A as r,g as u,y as v}
//# sourceMappingURL=utils-Cm-ANkTn.js.map
