import{q as e,t as n,u as t,l as o,e as a,s as i}from"./calfSystem-CQOGdqPv.js"
import{c as r}from"./createInput-CL-XaKKe.js"
const s=()=>Number(e("#pCC #page").value)
let c=s()
const p=o(e("#pCC input[value=Go]").parentNode.previousElementSibling).replace(/\D/g,""),l=e("#pCC #page").closest("tr"),u=(n=document)=>e("#pCC input[value=Go]",n).closest("tr")
const d=function(){const e=t()
return e.style.cssText="\n    animation: fshSpinner 0.6s linear infinite;\n    border: 2px solid #ccc;\n    border-radius: 50%;\n    border-top-color: #07d;\n    height: 8px;\n    width: 8px;\n    margin: 0px 4px;\n    display: none;\n  ",e}()
async function f(n){if(n===c)return
c=n,l.querySelector("#page").value=n,d.style.display="inline-block"
const t=await a({cmd:"arena",subcmd:"completed",page:c})
u(t).replaceWith(l),e("#pCC").replaceWith(e("#pCC",t)),d.style.display="none"}function m(){i("arena completed","gotoFirstPage"),f(1)}function C(){i("arena completed","gotoLastPage"),f(p)}function g(){f(Math.max(1,c-1))}function h(){f(Math.min(c+1,p))}function y(e,n){return r({value:e,onclick:n,type:"button"})}function b(){u().children[1].replaceWith(function(){const e=n("td")
return e.append(y("Go",()=>f(s())),y("<<",m)," ",y("<",g)," ",y(">",h)," ",y(">>",C)),e}())
const t=e("#pCC #page").closest("td")
t.insertBefore(d,t.firstChild)}export{b as default}
//# sourceMappingURL=completedArenas-BooEha5x.js.map
