import{ax as t,s as n,c as s,bx as e,az as f,b5 as o,p as a,l as u,b7 as c,dv as r,cZ as i,aW as l,ab as b,d as p,g as d,aa as g}from"./calfSystem-CIuUjh4H.js"
import{a as m}from"./roundToString-HX3cLryI.js"
function h(s){"-"===t.subcmd&&n("profile",s)}const k=[[t=>t.fsp>0,t=>`${m(t.fsp,2)} FSP`],[t=>t.fsp>0&&t.k>0,()=>" and "],[t=>t.k>0,t=>`${t.k} k`],[t=>t.stam>0&&(t.fsp>0||t.k>0),()=>" and "],[t=>t.stam>0,t=>`${t.stam} Stam(${m(t.stam/25,1)}fsp)`],[t=>t.unknown>0,t=>` (${t.unknown} buff(s) with unknown cost)`]]
function $(t,n){return n[0](t)?n[1](t):""}const w=[[t=>!t.includes("{buffs}"),(t,n)=>`${t} ${n}`],[t=>!t.includes("{cost}"),(t,n)=>t.replace(/{buffs}/g,`\`~${n}~\``)],[()=>!0,(t,n,s)=>t.replace(/{buffs}/g,`\`~${n}~\``).replace(/{cost}/g,s.buffCostTotalText)]]
function B(t,n){return n[0](t)}function T(t){h("formatBuffsToBuy")
const n=function(){let t=o("h1",a())
return t=0!==t.length?u(t[0]):c(),t}()
let i=e(f("buyBuffsGreeting"))
i=i.replace(/{playername}/g,n),i=function(t,n){return w.find(s(B,t))[1](t,r(n.buffs).join(", "),n)}(i,t),window.openQuickMsgDialog(n,i,"")}const x=/[^a-zA-Z0-9.,+\- ]/g
let S=0
const C=["(?<k>[+-]?[.\\d]{1,10} {0,10}k)","(?<fsp>[+-]?[.\\d]{1,10} {0,10}fsp)","(?<stam>[+-]?[.\\d]{1,10} {0,10}stam)"]
function j(t){return t&&"BR"!==t.nodeName}function v(t){return i((S||(S=new RegExp(C.join("|"))),S),l(t.replace(x,"")))}function y(t){let n=function(t){let n="",s=t
for(;j(s);){const t=u(s)
s=s.nextSibling,n+=t}return v(n)}(t)
return n||(n=function(t){let n="",s=t
for(;j(s);){const t=u(s)
s=s.previousSibling,n=t+n}return v(n)}(t)),n}const L={count:0,buffs:{}}
function N(t){return`<tr><td>${t[0]}</td><td>: ${t[1][0]}${t[1][1]}</td></tr>`}function R(t,n){return t[n[1][1]]+=n[1][0],t}function A(){const t=g(L.buffs),n=(e=t.reduce(R,{k:0,fsp:0,stam:0,unknown:0}),k.map(s($,e)).join(""))
var e
p(`<span class="tip-static" data-tipped="This is an estimated cost based on how the script finds the cost associated with buffs from viewing bio. It can be incorrect, please use with discretion.<br><hr><table border=0>${t.map(N).join("")}</table><b>Total: ${n}</b>">Estimated Cost: <b>${n}</b></span>`,d("buffCost")),L.buffCostTotalText=n}function F(t){h("toggleBuffsToBuy")
const n=b("fshBlue",t)
t.classList.toggle("fshBlue"),t.classList.toggle("fshYellow")
const s=u(t)
n?function(t){const n=y(t)
let s="unknown",e="1"
n&&(s=function(t){return t[0].includes("k")?"k":t[0].includes("f")?"fsp":"stam"}(n),[e]=i(/[+-]?[.\d]+/,n[0])),L.buffs[u(t)]=[parseFloat(e),s],L.count+=1}(t):(L.count-=1,delete L.buffs[s]),L.count>0?A():(p("&nbsp;",d("buffCost")),L.buffCostTotalText="")}function M(t){return t.tagName&&"SPAN"!==t.tagName?M(t.parentNode):t}function z(t){if("fshSendBuffMsg"===t.target.id)return void function(t){t.count>0&&T(t)}(L)
const n=M(t.target);(function(t){return t.classList&&b("buffLink",t)})(n)&&F(n)}function E(t,n,s){return t.replace(n,`<span id="fshBuff${s}" class="buffLink fshBlue">${n.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,"")}</span>`)}function P(t){let n=t.replace(/\{b\}/g,"`~").replace(/\{\/b\}/g,"~`")
const s=n.match(/`~([^~]|~(?!`))*~`/g)
if(s)return n=s.reduce(E,n),n.indexOf("[cmd]")<0&&(n+="[cmd]"),n=n.replace("[cmd]",'<br><input id="fshSendBuffMsg" class="custombutton" type="button" value="Ask For Buffs"><br><span id="buffCost" class="fshRed">&nbsp;</span>'),n}export{z as b,P as r}
//# sourceMappingURL=render-C1IaD8Aj.js.map
