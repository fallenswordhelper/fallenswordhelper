import{ao as t,s as n,d as s,bl as e,aq as o,aV as f,p as a,ad as u,aX as c,du as r,cO as i,aL as l,G as d,e as p,g as b,F as g}from"./calfSystem-BldO1y8X.js"
import{a as m}from"./roundToString-C-FKTMJy.js"
function h(s){"-"===t.subcmd&&n("profile",s)}const k=[[t=>t.fsp>0,t=>`${m(t.fsp,2)} FSP`],[t=>t.fsp>0&&t.k>0,()=>" and "],[t=>t.k>0,t=>`${t.k} k`],[t=>t.stam>0&&(t.fsp>0||t.k>0),()=>" and "],[t=>t.stam>0,t=>`${t.stam} Stam(${m(t.stam/25,1)}fsp)`],[t=>t.unknown>0,t=>` (${t.unknown} buff(s) with unknown cost)`]]
function $(t,n){return n[0](t)?n[1](t):""}const w=[[t=>!t.includes("{buffs}"),(t,n)=>`${t} ${n}`],[t=>!t.includes("{cost}"),(t,n)=>t.replace(/{buffs}/g,`\`~${n}~\``)],[()=>!0,(t,n,s)=>t.replace(/{buffs}/g,`\`~${n}~\``).replace(/{cost}/g,s.buffCostTotalText)]]
function B(t,n){return n[0](t)}function T(t){h("formatBuffsToBuy")
const n=function(){let t=f("h1",a())
return t=0!==t.length?u(t[0]):c(),t}()
let i=e(o("buyBuffsGreeting"))
i=i.replace(/{playername}/g,n),i=function(t,n){return w.find(s(B,t))[1](t,r(n.buffs).join(", "),n)}(i,t),window.openQuickMsgDialog(n,i,"")}const S=/[^a-zA-Z0-9.,+\- ]/g
let x=0
const C=["(?<k>[+-]?[.\\d]{1,10} {0,10}k)","(?<fsp>[+-]?[.\\d]{1,10} {0,10}fsp)","(?<stam>[+-]?[.\\d]{1,10} {0,10}stam)"]
function j(t){return t&&"BR"!==t.nodeName}function y(t){return i((x||(x=new RegExp(C.join("|"))),x),l(t.replace(S,"")))}function L(t){let n=function(t){let n="",s=t
for(;j(s);){const t=u(s)
s=s.nextSibling,n+=t}return y(n)}(t)
return n||(n=function(t){let n="",s=t
for(;j(s);){const t=u(s)
s=s.previousSibling,n=t+n}return y(n)}(t)),n}const v={count:0,buffs:{}}
function N(t){return`<tr><td>${t[0]}</td><td>: ${t[1][0]}${t[1][1]}</td></tr>`}function F(t,n){return t[n[1][1]]+=n[1][0],t}function R(){const t=g(v.buffs),n=(e=t.reduce(F,{k:0,fsp:0,stam:0,unknown:0}),k.map(s($,e)).join(""))
var e
p(`<span class="tip-static" data-tipped="This is an estimated cost based on how the script finds the cost associated with buffs from viewing bio. It can be incorrect, please use with discretion.<br><hr><table border=0>${t.map(N).join("")}</table><b>Total: ${n}</b>">Estimated Cost: <b>${n}</b></span>`,b("buffCost")),v.buffCostTotalText=n}function A(t){h("toggleBuffsToBuy")
const n=d("fshBlue",t)
t.classList.toggle("fshBlue"),t.classList.toggle("fshYellow")
const s=u(t)
n?function(t){const n=L(t)
let s="unknown",e="1"
n&&(s=function(t){return t[0].includes("k")?"k":t[0].includes("f")?"fsp":"stam"}(n),[e]=i(/[+-]?[.\d]+/,n[0])),v.buffs[u(t)]=[parseFloat(e),s],v.count+=1}(t):(v.count-=1,delete v.buffs[s]),v.count>0?R():(p("&nbsp;",b("buffCost")),v.buffCostTotalText="")}function M(t){return t.tagName&&"SPAN"!==t.tagName?M(t.parentNode):t}function E(t){if("fshSendBuffMsg"===t.target.id)return void function(t){t.count>0&&T(t)}(v)
const n=M(t.target);(function(t){return t.classList&&d("buffLink",t)})(n)&&A(n)}function G(t,n,s){return t.replace(n,`<span id="fshBuff${s}" class="buffLink fshBlue">${n.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,"")}</span>`)}function O(t){let n=t.replace(/\{b\}/g,"`~").replace(/\{\/b\}/g,"~`")
const s=n.match(/`~([^~]|~(?!`))*~`/g)
if(s)return n=s.reduce(G,n),n.indexOf("[cmd]")<0&&(n+="[cmd]"),n=n.replace("[cmd]",'<br><input id="fshSendBuffMsg" class="custombutton" type="button" value="Ask For Buffs"><br><span id="buffCost" class="fshRed">&nbsp;</span>'),n}export{E as b,O as r}
//# sourceMappingURL=render-DDFzlLQY.js.map
