import{t,I as n,b1 as s,c as e,T as f,b as o,p as a,C as u,af as c,l as r,B as i,z as l,e as p}from"./calfSystem-6a3c85e0.js"
import{r as b}from"./roundToString-0b0f4906.js"
import{p as d}from"./playerName-338c35a7.js"
const m=[[t=>t.fsp>0,t=>`${b(t.fsp,2)} FSP`],[t=>t.fsp>0&&t.k>0,()=>" and "],[t=>t.k>0,t=>`${t.k} k`],[t=>t.stam>0&&(t.fsp>0||t.k>0),()=>" and "],[t=>t.stam>0,t=>`${t.stam} Stam(${b(t.stam/25,1)}fsp)`],[t=>t.unknown>0,t=>` (${t.unknown} buff(s) with unknown cost)`]]
function g(t,n){return n[0](t)?n[1](t):""}const h=[[t=>!t.includes("{buffs}"),(t,n)=>`${t} ${n}`],[t=>!t.includes("{cost}"),(t,n)=>t.replace(/{buffs}/g,`\`~${n}~\``)],[()=>!0,(t,n,s)=>t.replace(/{buffs}/g,`\`~${n}~\``).replace(/{cost}/g,s.buffCostTotalText)]]
function k(t,n){return n[0](t)}function $(c){"-"===e.subcmd&&f("profile","formatBuffsToBuy")
const r=function(){let t=o("h1",a)
return t=0!==t.length?u(t[0]):d(),t}()
let i=n("buyBuffsGreeting").trim()
i=i.replace(/{playername}/g,r),i=function(n,e){return h.find(t(k,n))[1](n,s(e.buffs).join(", "),e)}(i,c),window.openQuickMsgDialog(r,i,"")}const w=/[^a-zA-Z0-9.,+\- ]/g,B=/([+-]{0,1}[.\d]+ *k)|([+-]{0,1}[.\d]+ *fsp)|([+-]{0,1}[.\d]+ *stam)/
function T(t){return t&&"BR"!==t.nodeName}function S(t){return c(t.replace(w,"")).match(B)}function C(t){let n=function(t){let n="",s=t
for(;T(s);){const t=u(s)
s=s.nextSibling,n+=t}return S(n)}(t)
return n||(n=function(t){let n="",s=t
for(;T(s);){const t=u(s)
s=s.previousSibling,n=t+n}return S(n)}(t)),n}const j={count:0,buffs:{}}
function x(t){return`<tr><td>${t[0]}</td><td>: ${t[1][0]}${t[1][1]}</td></tr>`}function y(t,n){return t[n[1][1]]+=n[1][0],t}function N(){const n=p(j.buffs),s=(e=n.reduce(y,{k:0,fsp:0,stam:0,unknown:0}),m.map(t(g,e)).join(""))
var e
i(`<span class="tip-static" data-tipped="This is an estimated cost based on how the script finds the cost associated with buffs from viewing bio. It can be incorrect, please use with discretion.<br><hr><table border=0>${n.map(x).join("")}</table><b>Total: ${s}</b>">Estimated Cost: <b>${s}</b></span>`,l("buffCost")),j.buffCostTotalText=s}function v(t){const n=r("fshBlue",t)
t.classList.toggle("fshBlue"),t.classList.toggle("fshYellow")
const s=u(t)
n?function(t){const n=C(t)
let s,e
n?(s=function(t){return t[0].includes("k")?"k":t[0].includes("f")?"fsp":"stam"}(n),[e]=n[0].match(/([+-]?[.\d]+)/)):(s="unknown",e="1"),j.buffs[u(t)]=[parseFloat(e),s],j.count+=1}(t):(j.count-=1,delete j.buffs[s]),j.count>0?N():(i("&nbsp;",l("buffCost")),j.buffCostTotalText="")}function L(t){return t.tagName&&"SPAN"!==t.tagName?L(t.parentNode):t}function A(t){if("fshSendBuffMsg"===t.target.id)return void function(t){t.count>0&&$(t)}(j)
const n=L(t.target);(function(t){return t.classList&&r("buffLink",t)})(n)&&v(n)}function F(t,n,s){return t.replace(n,`<span id="fshBuff${s}" class="buffLink fshBlue">${n.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,"")}</span>`)}function M(t){let n=t.replace(/\{b\}/g,"`~").replace(/\{\/b\}/g,"~`")
const s=n.match(/`~([^~]|~(?!`))*~`/g)
if(s)return n=s.reduce(F,n),n.indexOf("[cmd]")<0&&(n+="[cmd]"),n=n.replace("[cmd]",'<br><input id="fshSendBuffMsg" class="custombutton" type="button" value="Ask For Buffs"><br><span id="buffCost" class="fshRed">&nbsp;</span>'),n}export{A as b,M as r}
//# sourceMappingURL=render-630e3c04.js.map
