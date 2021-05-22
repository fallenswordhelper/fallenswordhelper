import{c as n}from"./createInput-8f2d1a63.js"
import{n as t,x as e,u as s,w as i,$ as o,p as c,h as r,o as a,D as u,B as f,E as m,aN as l,aE as d,j as p}from"./calfSystem-f7cf24f6.js"
import{c as v}from"./createSpan-0636b0fd.js"
import{i as h}from"./insertTextBeforeEnd-60f92d3f.js"
import{j as b,o as g}from"./jsonFail-0d019cc7.js"
import{c as j}from"./createAnchor-9a10de91.js"
import{i as C}from"./insertElementBefore-7c440c87.js"
import{x as y}from"./xPath-65d0469c.js"
function E(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}function N(n){const t=i(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function _(n){return s({cmd:"inventing",subcmd:"doinvent",recipe_id:n}).then(N)}let w,x,I
function $(n){b(n,I)||g(n.r.success_count>0?'<span class="fshGreen">You successfully invented.</span>':'<span class="fshRed">You have failed to invent.</span>',I)}function S(n){f(n,x),f("",I)}function k(){const n=Number(w.value)
if(!n)return void S("")
const t=u('input[name="recipe_id"]').value
S(`Inventing ${String(n)} Items`)
for(let s=0;s<n;s+=1)(e=t,o(E,_,e)).then($)
var e}function B(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function R(n){var e
I=t("ol",e),r(n,I)}function T(n){!function(n){x=v(),r(n,x)}(n),R(n)}function Y(t){var e
e=B(t),h(e,"Select how many to quick invent"),w=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),r(e,w),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
r(t,e),a(e,k)}(B(t)),T(B(t))}function q(n){return`${l}items${d}view&item_id=${n}`}function A(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return j({href:q(n),target:"_blank"})}(e)
C(s,n),r(s,n)}function D(n){A(n,n)}function F(){!function(){const n=y('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
A(u("#pCC b"),n)}(),m('#pCC img[src*="/items/"]').forEach(D)}function G(){p()&&(F(),Y(c.lastElementChild))}export default G
//# sourceMappingURL=inventing-9429372e.js.map
