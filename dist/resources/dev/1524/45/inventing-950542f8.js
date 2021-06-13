import{c as n}from"./createInput-9bf3eee1.js"
import{n as t,x as e,u as s,w as i,$ as o,p as a,h as c,o as r,D as u,B as f,E as m,aO as l,aF as p,j as v}from"./calfSystem-6a3c85e0.js"
import{c as d}from"./createSpan-a6b61f47.js"
import{i as h}from"./insertTextBeforeEnd-50a2be9f.js"
import{j as b,o as g}from"./jsonFail-842915aa.js"
import{c as j}from"./createAnchor-0fa218c7.js"
import{i as C}from"./insertElementBefore-c442a2a7.js"
import{x as y}from"./xPath-a08105fc.js"
function _(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}function w(n){const t=i(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function x(n){return s({cmd:"inventing",subcmd:"doinvent",recipe_id:n}).then(w)}let E,I,N
function $(n){b(n,N)||g(n.r.success_count>0?'<span class="fshGreen">You successfully invented.</span>':'<span class="fshRed">You have failed to invent.</span>',N)}function S(n){f(n,I),f("",N)}function k(){const n=Number(E.value)
if(!n)return void S("")
const t=u('input[name="recipe_id"]').value
S(`Inventing ${String(n)} Items`)
for(let s=0;s<n;s+=1)(e=t,o(_,x,e)).then($)
var e}function B(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function F(n){var e
N=t("ol",e),c(n,N)}function R(n){!function(n){I=d(),c(n,I)}(n),F(n)}function T(t){var e
e=B(t),h(e,"Select how many to quick invent"),E=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),c(e,E),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
c(t,e),r(e,k)}(B(t)),R(B(t))}function Y(n){return`${l}items${p}view&item_id=${n}`}function q(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return j({href:Y(n),target:"_blank"})}(e)
C(s,n),c(s,n)}function A(n){q(n,n)}function D(){!function(){const n=y('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
q(u("#pCC b"),n)}(),m('#pCC img[src*="/items/"]').forEach(A)}function G(){v()&&(D(),T(a.lastElementChild))}export default G
//# sourceMappingURL=inventing-950542f8.js.map
