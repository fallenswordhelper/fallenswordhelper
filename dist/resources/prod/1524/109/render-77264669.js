import{ad as t,n,c as s,aX as e,af as o,aw as f,p as a,a5 as u,aA as c,c3 as r,ao as i,D as l,s as p,g as d,C as b}from"./calfSystem-2f15e074.js"
import{a as m}from"./roundToString-b56b87fd.js"
import{k as g}from"./keys-ae03eaa2.js"
function k(s){"-"===t.subcmd&&n("profile",s)}const h=[[t=>t.fsp>0,t=>`${m(t.fsp,2)} FSP`],[t=>t.fsp>0&&t.k>0,()=>" and "],[t=>t.k>0,t=>`${t.k} k`],[t=>t.stam>0&&(t.fsp>0||t.k>0),()=>" and "],[t=>t.stam>0,t=>`${t.stam} Stam(${m(t.stam/25,1)}fsp)`],[t=>t.unknown>0,t=>` (${t.unknown} buff(s) with unknown cost)`]]
function $(t,n){return n[0](t)?n[1](t):""}const w=[[t=>!t.includes("{buffs}"),(t,n)=>`${t} ${n}`],[t=>!t.includes("{cost}"),(t,n)=>t.replace(/{buffs}/g,`\`~${n}~\``)],[()=>!0,(t,n,s)=>t.replace(/{buffs}/g,`\`~${n}~\``).replace(/{cost}/g,s.buffCostTotalText)]]
function B(t,n){return n[0](t)}function T(t){k("formatBuffsToBuy")
const n=function(){let t=f("h1",a())
return t=0!==t.length?u(t[0]):c(),t}()
let r=e(o("buyBuffsGreeting"))
r=r.replace(/{playername}/g,n),r=function(t,n){return w.find(s(B,t))[1](t,g(n.buffs).join(", "),n)}(r,t),window.openQuickMsgDialog(n,r,"")}const S=/[^a-zA-Z0-9.,+\- ]/g
let C=0
const j=["(?<k>[+-]?[.\\d]{1,10} {0,10}k)","(?<fsp>[+-]?[.\\d]{1,10} {0,10}fsp)","(?<stam>[+-]?[.\\d]{1,10} {0,10}stam)"]
function x(t){return t&&"BR"!==t.nodeName}function y(t){return r((C||(C=new RegExp(j.join("|"))),C),i(t.replace(S,"")))}function v(t){let n=function(t){let n="",s=t
for(;x(s);){const t=u(s)
s=s.nextSibling,n+=t}return y(n)}(t)
return n||(n=function(t){let n="",s=t
for(;x(s);){const t=u(s)
s=s.previousSibling,n=t+n}return y(n)}(t)),n}const L={count:0,buffs:{}}
function N(t){return`<tr><td>${t[0]}</td><td>: ${t[1][0]}${t[1][1]}</td></tr>`}function A(t,n){return t[n[1][1]]+=n[1][0],t}function F(){const t=b(L.buffs),n=(e=t.reduce(A,{k:0,fsp:0,stam:0,unknown:0}),h.map(s($,e)).join(""))
var e
p(`<span class="tip-static" data-tipped="This is an estimated cost based on how the script finds the cost associated with buffs from viewing bio. It can be incorrect, please use with discretion.<br><hr><table border=0>${t.map(N).join("")}</table><b>Total: ${n}</b>">Estimated Cost: <b>${n}</b></span>`,d("buffCost")),L.buffCostTotalText=n}function M(t){k("toggleBuffsToBuy")
const n=l("fshBlue",t)
t.classList.toggle("fshBlue"),t.classList.toggle("fshYellow")
const s=u(t)
n?function(t){const n=v(t)
let s="unknown",e="1"
n&&(s=function(t){return t[0].includes("k")?"k":t[0].includes("f")?"fsp":"stam"}(n),[e]=r(/[+-]?[.\d]+/,n[0])),L.buffs[u(t)]=[parseFloat(e),s],L.count+=1}(t):(L.count-=1,delete L.buffs[s]),L.count>0?F():(p("&nbsp;",d("buffCost")),L.buffCostTotalText="")}function R(t){return t.tagName&&"SPAN"!==t.tagName?R(t.parentNode):t}function D(t){if("fshSendBuffMsg"===t.target.id)return void function(t){t.count>0&&T(t)}(L)
const n=R(t.target);(function(t){return t.classList&&l("buffLink",t)})(n)&&M(n)}function E(t,n,s){return t.replace(n,`<span id="fshBuff${s}" class="buffLink fshBlue">${n.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,"")}</span>`)}function G(t){let n=t.replace(/\{b\}/g,"`~").replace(/\{\/b\}/g,"~`")
const s=n.match(/`~([^~]|~(?!`))*~`/g)
if(s)return n=s.reduce(E,n),n.indexOf("[cmd]")<0&&(n+="[cmd]"),n=n.replace("[cmd]",'<br><input id="fshSendBuffMsg" class="custombutton" type="button" value="Ask For Buffs"><br><span id="buffCost" class="fshRed">&nbsp;</span>'),n}export{D as b,G as r}
//# sourceMappingURL=render-77264669.js.map