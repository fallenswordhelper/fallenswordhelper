import{m as n,v as t,p as e,f as i,o as s,L as o,z as r,I as a,af as c,ae as u,j as f}from"./calfSystem-740ec4d2.js"
import{c as m}from"./createInput-e6e1d6b3.js"
import{i as l}from"./insertTextBeforeEnd-438d4add.js"
import{i as p}from"./insertElementBefore-d3961941.js"
import{c as d}from"./createSpan-b29fd959.js"
import{j as v,o as b}from"./jsonFail-b37bbca2.js"
import{c as h}from"./createAnchor-a59e97c0.js"
import{x as j}from"./xPath-1110f440.js"
function g(n){return function(n){return t({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}(n)}let C,I,y
function N(n){var t
v(n,y)||b((t=n.r).item?`<span class="fshGreen">You successfully invented the item [${t.item.n}].</span>`:'<span class="fshRed">You have failed to invent the item.</span>',y)}function $(n){r(n,I),r("",y)}function w(){const n=Number(C.value)
if(!n)return void $("")
const t=o('input[name="recipe_id"]').value
$(`Inventing ${String(n)} Items`)
for(let e=0;e<n;e+=1)g(t).then(N)}function x(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function E(t){var e
y=n("ol",e),i(t,y)}function S(n){!function(n){I=d(),i(n,I)}(n),E(n)}function _(n){var t
t=x(n),l(t,"Select how many to quick invent"),C=m({className:"custominput fshNumberInput",min:0,type:"number",value:1}),i(t,C),function(n){const t=m({className:"custombutton",type:"button",value:"Quick invent items"})
i(n,t),s(t,w)}(x(n)),S(x(n))}function k(n){return`${c}items${u}view&item_id=${n}`}function B(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return h({href:k(n),target:"_blank"})}(e)
p(s,n),i(s,n)}function R(n){B(n,n)}function T(){!function(){const n=j('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
B(o("#pCC b"),n)}(),a('#pCC img[src*="/items/"]').forEach(R)}export default function(){f()&&(T(),_(e.lastElementChild))}
//# sourceMappingURL=inventing-22321fd1.js.map