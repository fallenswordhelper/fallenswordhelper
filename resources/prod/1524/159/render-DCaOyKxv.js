import{ay as t,s as n,c as s,bz as e,aA as o,b6 as f,p as a,m as u,b8 as c,c_ as r,aX as i,ac as l,d as b,g as p,ab as d}from"./calfSystem-CIdPz3EO.js"
import{a as m}from"./roundToString-BsfZkzT8.js"
import{k as g}from"./keys-CFr_h3Bx.js"
function k(s){"-"===t.subcmd&&n("profile",s)}const h=[[t=>t.fsp>0,t=>`${m(t.fsp,2)} FSP`],[t=>t.fsp>0&&t.k>0,()=>" and "],[t=>t.k>0,t=>`${t.k} k`],[t=>t.stam>0&&(t.fsp>0||t.k>0),()=>" and "],[t=>t.stam>0,t=>`${t.stam} Stam(${m(t.stam/25,1)}fsp)`],[t=>t.unknown>0,t=>` (${t.unknown} buff(s) with unknown cost)`]]
function $(t,n){return n[0](t)?n[1](t):""}const w=[[t=>!t.includes("{buffs}"),(t,n)=>`${t} ${n}`],[t=>!t.includes("{cost}"),(t,n)=>t.replace(/{buffs}/g,`\`~${n}~\``)],[()=>!0,(t,n,s)=>t.replace(/{buffs}/g,`\`~${n}~\``).replace(/{cost}/g,s.buffCostTotalText)]]
function B(t,n){return n[0](t)}function T(t){k("formatBuffsToBuy")
const n=function(){let t=f("h1",a())
return t=0!==t.length?u(t[0]):c(),t}()
let r=e(o("buyBuffsGreeting"))
r=r.replace(/{playername}/g,n),r=function(t,n){return w.find(s(B,t))[1](t,g(n.buffs).join(", "),n)}(r,t),window.openQuickMsgDialog(n,r,"")}const S=/[^a-zA-Z0-9.,+\- ]/g
let y=0
const j=["(?<k>[+-]?[.\\d]{1,10} {0,10}k)","(?<fsp>[+-]?[.\\d]{1,10} {0,10}fsp)","(?<stam>[+-]?[.\\d]{1,10} {0,10}stam)"]
function x(t){return t&&"BR"!==t.nodeName}function C(t){return r((y||(y=new RegExp(j.join("|"))),y),i(t.replace(S,"")))}function v(t){let n=function(t){let n="",s=t
for(;x(s);){const t=u(s)
s=s.nextSibling,n+=t}return C(n)}(t)
return n||(n=function(t){let n="",s=t
for(;x(s);){const t=u(s)
s=s.previousSibling,n=t+n}return C(n)}(t)),n}const L={count:0,buffs:{}}
function N(t){return`<tr><td>${t[0]}</td><td>: ${t[1][0]}${t[1][1]}</td></tr>`}function A(t,n){return t[n[1][1]]+=n[1][0],t}function R(){const t=d(L.buffs),n=(e=t.reduce(A,{k:0,fsp:0,stam:0,unknown:0}),h.map(s($,e)).join(""))
var e
b(`<span class="tip-static" data-tipped="This is an estimated cost based on how the script finds the cost associated with buffs from viewing bio. It can be incorrect, please use with discretion.<br><hr><table border=0>${t.map(N).join("")}</table><b>Total: ${n}</b>">Estimated Cost: <b>${n}</b></span>`,p("buffCost")),L.buffCostTotalText=n}function F(t){k("toggleBuffsToBuy")
const n=l("fshBlue",t)
t.classList.toggle("fshBlue"),t.classList.toggle("fshYellow")
const s=u(t)
n?function(t){const n=v(t)
let s="unknown",e="1"
n&&(s=function(t){return t[0].includes("k")?"k":t[0].includes("f")?"fsp":"stam"}(n),[e]=r(/[+-]?[.\d]+/,n[0])),L.buffs[u(t)]=[parseFloat(e),s],L.count+=1}(t):(L.count-=1,delete L.buffs[s]),L.count>0?R():(b("&nbsp;",p("buffCost")),L.buffCostTotalText="")}function M(t){return t.tagName&&"SPAN"!==t.tagName?M(t.parentNode):t}function z(t){if("fshSendBuffMsg"===t.target.id)return void function(t){t.count>0&&T(t)}(L)
const n=M(t.target);(function(t){return t.classList&&l("buffLink",t)})(n)&&F(n)}function E(t,n,s){return t.replace(n,`<span id="fshBuff${s}" class="buffLink fshBlue">${n.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,"")}</span>`)}function P(t){let n=t.replace(/\{b\}/g,"`~").replace(/\{\/b\}/g,"~`")
const s=n.match(/`~([^~]|~(?!`))*~`/g)
if(s)return n=s.reduce(E,n),n.indexOf("[cmd]")<0&&(n+="[cmd]"),n=n.replace("[cmd]",'<br><input id="fshSendBuffMsg" class="custombutton" type="button" value="Ask For Buffs"><br><span id="buffCost" class="fshRed">&nbsp;</span>'),n}export{z as b,P as r}
//# sourceMappingURL=render-DCaOyKxv.js.map
