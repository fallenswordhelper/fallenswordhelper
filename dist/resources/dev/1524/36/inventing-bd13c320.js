import{c as n}from"./createInput-c963dc21.js"
import{n as t,x as e,u as s,w as i,$ as o,p as c,h as a,o as r,D as u,B as m,E as f,aE as l,at as p,j as d}from"./calfSystem-eeb1d862.js"
import{c as v}from"./createSpan-c8cd4d0e.js"
import{i as b}from"./insertTextBeforeEnd-1e1caba8.js"
import{j as h,o as g}from"./jsonFail-cc8f0e1a.js"
import{c as j}from"./createAnchor-2744b759.js"
import{i as C}from"./insertElementBefore-42a90ba9.js"
import{x as y}from"./xPath-3abb3301.js"
function E(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}function $(n){const t=i(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function w(n){return s({cmd:"inventing",subcmd:"doinvent",recipe_id:n}).then($)}let x,I,N
function _(n){var t
h(n,N)||g((t=n.r).item?`<span class="fshGreen">You successfully invented the item [${t.item.n}].</span>`:'<span class="fshRed">You have failed to invent the item.</span>',N)}function S(n){m(n,I),m("",N)}function k(){const n=Number(x.value)
if(!n)return void S("")
const t=u('input[name="recipe_id"]').value
S(`Inventing ${String(n)} Items`)
for(let s=0;s<n;s+=1)(e=t,o(E,w,e)).then(_)
var e}function B(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function R(n){var e
N=t("ol",e),a(n,N)}function T(n){!function(n){I=v(),a(n,I)}(n),R(n)}function Y(t){var e
e=B(t),b(e,"Select how many to quick invent"),x=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),a(e,x),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
a(t,e),r(e,k)}(B(t)),T(B(t))}function q(n){return`${l}items${p}view&item_id=${n}`}function A(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return j({href:q(n),target:"_blank"})}(e)
C(s,n),a(s,n)}function D(n){A(n,n)}function F(){!function(){const n=y('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
A(u("#pCC b"),n)}(),f('#pCC img[src*="/items/"]').forEach(D)}function G(){d()&&(F(),Y(c.lastElementChild))}export default G
//# sourceMappingURL=inventing-bd13c320.js.map
