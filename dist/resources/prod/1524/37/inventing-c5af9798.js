import{c as n}from"./createInput-aabb8b6b.js"
import{n as t,x as e,u as s,w as i,$ as o,p as c,h as a,o as r,D as u,B as f,E as m,aB as l,aq as p,j as d}from"./calfSystem-60c20ae9.js"
import{c as v}from"./createSpan-2b0536e4.js"
import{i as b}from"./insertTextBeforeEnd-26bd7036.js"
import{j as h,o as g}from"./jsonFail-6d446a04.js"
import{c as j}from"./createAnchor-ca5c18d9.js"
import{i as C}from"./insertElementBefore-656c48d5.js"
import{x as y}from"./xPath-37f9d64a.js"
function _(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}function w(n){const t=i(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function x(n){return s({cmd:"inventing",subcmd:"doinvent",recipe_id:n}).then(w)}let E,I,N
function $(n){h(n,N)||g(n.r.success_count>0?'<span class="fshGreen">You successfully invented.</span>':'<span class="fshRed">You have failed to invent.</span>',N)}function B(n){f(n,I),f("",N)}function S(){const n=Number(E.value)
if(!n)return void B("")
const t=u('input[name="recipe_id"]').value
B(`Inventing ${String(n)} Items`)
for(let s=0;s<n;s+=1)(e=t,o(_,x,e)).then($)
var e}function k(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function q(n){var e
N=t("ol",e),a(n,N)}function R(n){!function(n){I=v(),a(n,I)}(n),q(n)}function T(t){var e
e=k(t),b(e,"Select how many to quick invent"),E=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),a(e,E),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
a(t,e),r(e,S)}(k(t)),R(k(t))}function Y(n){return`${l}items${p}view&item_id=${n}`}function A(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return j({href:Y(n),target:"_blank"})}(e)
C(s,n),a(s,n)}function D(n){A(n,n)}function F(){!function(){const n=y('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
A(u("#pCC b"),n)}(),m('#pCC img[src*="/items/"]').forEach(D)}function G(){d()&&(F(),T(c.lastElementChild))}export default G
//# sourceMappingURL=inventing-c5af9798.js.map
