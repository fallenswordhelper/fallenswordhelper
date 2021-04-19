import{c as n}from"./createInput-d7f942e4.js"
import{n as t,x as e,u as s,w as i,$ as o,p as c,h as r,o as a,D as u,B as f,E as m,aK as l,aB as p,j as d}from"./calfSystem-b31aba65.js"
import{c as v}from"./createSpan-1160b622.js"
import{i as b}from"./insertTextBeforeEnd-ab2c16f7.js"
import{j as h,o as g}from"./jsonFail-d9e58a04.js"
import{c as j}from"./createAnchor-3ef30c4e.js"
import{i as C}from"./insertElementBefore-68b894c4.js"
import{x as y}from"./xPath-895a892d.js"
function _(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}function w(n){const t=i(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function x(n){return s({cmd:"inventing",subcmd:"doinvent",recipe_id:n}).then(w)}let E,I,N
function $(n){h(n,N)||g(n.r.success_count>0?'<span class="fshGreen">You successfully invented.</span>':'<span class="fshRed">You have failed to invent.</span>',N)}function B(n){f(n,I),f("",N)}function S(){const n=Number(E.value)
if(!n)return void B("")
const t=u('input[name="recipe_id"]').value
B(`Inventing ${String(n)} Items`)
for(let s=0;s<n;s+=1)(e=t,o(_,x,e)).then($)
var e}function k(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function R(n){var e
N=t("ol",e),r(n,N)}function T(n){!function(n){I=v(),r(n,I)}(n),R(n)}function Y(t){var e
e=k(t),b(e,"Select how many to quick invent"),E=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),r(e,E),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
r(t,e),a(e,S)}(k(t)),T(k(t))}function q(n){return`${l}items${p}view&item_id=${n}`}function A(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return j({href:q(n),target:"_blank"})}(e)
C(s,n),r(s,n)}function D(n){A(n,n)}function F(){!function(){const n=y('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
A(u("#pCC b"),n)}(),m('#pCC img[src*="/items/"]').forEach(D)}function G(){d()&&(F(),Y(c.lastElementChild))}export default G
//# sourceMappingURL=inventing-0a333efc.js.map
