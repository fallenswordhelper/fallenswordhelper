import{t,I as n,aN as s,c as e,W as o,b as f,p as a,C as u,l as c,B as r,z as i,e as l}from"./calfSystem-60c20ae9.js"
import{r as p}from"./roundToString-17a19d90.js"
import{p as b}from"./playerName-c88ee86b.js"
import{t as d}from"./toLowerCase-9d38da0b.js"
const m=[[t=>t.fsp>0,t=>`${p(t.fsp,2)} FSP`],[t=>t.fsp>0&&t.k>0,()=>" and "],[t=>t.k>0,t=>`${t.k} k`],[t=>t.stam>0&&(t.fsp>0||t.k>0),()=>" and "],[t=>t.stam>0,t=>`${t.stam} Stam(${p(t.stam/25,1)}fsp)`],[t=>t.unknown>0,t=>` (${t.unknown} buff(s) with unknown cost)`]]
function g(t,n){return n[0](t)?n[1](t):""}const h=[[t=>!t.includes("{buffs}"),(t,n)=>`${t} ${n}`],[t=>!t.includes("{cost}"),(t,n)=>t.replace(/{buffs}/g,`\`~${n}~\``)],[()=>!0,(t,n,s)=>t.replace(/{buffs}/g,`\`~${n}~\``).replace(/{cost}/g,s.buffCostTotalText)]]
function k(t,n){return n[0](t)}function $(c){"-"===e.subcmd&&o("profile","formatBuffsToBuy")
const r=function(){let t=f("h1",a)
return t=0!==t.length?u(t[0]):b(),t}()
let i=n("buyBuffsGreeting").trim()
i=i.replace(/{playername}/g,r),i=function(n,e){return h.find(t(k,n))[1](n,s(e.buffs).join(", "),e)}(i,c),window.openQuickMsgDialog(r,i,"")}const w=/[^a-zA-Z0-9.,+\- ]/g,B=/([+-]{0,1}[.\d]+ *k)|([+-]{0,1}[.\d]+ *fsp)|([+-]{0,1}[.\d]+ *stam)/
function T(t){return t&&"BR"!==t.nodeName}function C(t){return d(t.replace(w,"")).match(B)}function S(t){let n=function(t){let n="",s=t
for(;T(s);){const t=u(s)
s=s.nextSibling,n+=t}return C(n)}(t)
return n||(n=function(t){let n="",s=t
for(;T(s);){const t=u(s)
s=s.previousSibling,n=t+n}return C(n)}(t)),n}const j={count:0,buffs:{}}
function N(t){return`<tr><td>${t[0]}</td><td>: ${t[1][0]}${t[1][1]}</td></tr>`}function x(t,n){return t[n[1][1]]+=n[1][0],t}function y(){const n=l(j.buffs),s=(e=n.reduce(x,{k:0,fsp:0,stam:0,unknown:0}),m.map(t(g,e)).join(""))
var e
r(`<span class="tip-static" data-tipped="This is an estimated cost based on how the script finds the cost associated with buffs from viewing bio. It can be incorrect, please use with discretion.<br><hr><table border=0>${n.map(N).join("")}</table><b>Total: ${s}</b>">Estimated Cost: <b>${s}</b></span>`,i("buffCost")),j.buffCostTotalText=s}function L(t){const n=c("fshBlue",t)
t.classList.toggle("fshBlue"),t.classList.toggle("fshYellow")
const s=u(t)
n?function(t){const n=S(t)
let s,e
n?(s=function(t){return t[0].includes("k")?"k":t[0].includes("f")?"fsp":"stam"}(n),[e]=n[0].match(/([+-]?[.\d]+)/)):(s="unknown",e="1"),j.buffs[u(t)]=[parseFloat(e),s],j.count+=1}(t):(j.count-=1,delete j.buffs[s]),j.count>0?y():(r("&nbsp;",i("buffCost")),j.buffCostTotalText="")}function v(t){return t.tagName&&"SPAN"!==t.tagName?v(t.parentNode):t}function A(t){if("fshSendBuffMsg"===t.target.id)return void function(t){t.count>0&&$(t)}(j)
const n=v(t.target);(function(t){return t.classList&&c("buffLink",t)})(n)&&L(n)}function F(t,n,s){return t.replace(n,`<span id="fshBuff${s}" class="buffLink fshBlue">${n.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g,"")}</span>`)}function M(t){let n=t.replace(/\{b\}/g,"`~").replace(/\{\/b\}/g,"~`")
const s=n.match(/`~([^~]|~(?!`))*~`/g)
if(s)return n=s.reduce(F,n),n.indexOf("[cmd]")<0&&(n+="[cmd]"),n=n.replace("[cmd]",'<br><input id="fshSendBuffMsg" class="custombutton" type="button" value="Ask For Buffs"><br><span id="buffCost" class="fshRed">&nbsp;</span>'),n}export{A as b,M as r}
//# sourceMappingURL=render-528b9baf.js.map
