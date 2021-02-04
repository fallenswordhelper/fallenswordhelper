import{c as n}from"./createInput-ef7d744f.js"
import{n as t,w as e,p as i,h as s,o,C as r,A as a,D as c,aD as u,ar as f,j as m}from"./calfSystem-37f70deb.js"
import{c as l}from"./createSpan-821c0562.js"
import{i as p}from"./insertTextBeforeEnd-6d828e17.js"
import{j as d,o as v}from"./jsonFail-b76b323b.js"
import{c as b}from"./createAnchor-4d90b079.js"
import{i as h}from"./insertElementBefore-0a7f2602.js"
import{x as j}from"./xPath-269cd9bc.js"
function g(n){return function(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}(n)}let C,w,y
function I(n){var t
d(n,y)||v((t=n.r).item?`<span class="fshGreen">You successfully invented the item [${t.item.n}].</span>`:'<span class="fshRed">You have failed to invent the item.</span>',y)}function N(n){a(n,w),a("",y)}function $(){const n=Number(C.value)
if(!n)return void N("")
const t=r('input[name="recipe_id"]').value
N(`Inventing ${String(n)} Items`)
for(let e=0;e<n;e+=1)g(t).then(I)}function x(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function E(n){var e
y=t("ol",e),s(n,y)}function S(n){!function(n){w=l(),s(n,w)}(n),E(n)}function _(t){var e
e=x(t),p(e,"Select how many to quick invent"),C=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),s(e,C),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
s(t,e),o(e,$)}(x(t)),S(x(t))}function k(n){return`${u}items${f}view&item_id=${n}`}function A(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const i=function(n){return b({href:k(n),target:"_blank"})}(e)
h(i,n),s(i,n)}function B(n){A(n,n)}function D(){!function(){const n=j('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
A(r("#pCC b"),n)}(),c('#pCC img[src*="/items/"]').forEach(B)}function R(){m()&&(D(),_(i.lastElementChild))}export default R
//# sourceMappingURL=inventing-118e1cf3.js.map
