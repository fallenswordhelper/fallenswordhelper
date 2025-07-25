import{q as e,v as n,w as t,n as a,j as o,s as i}from"./calfSystem-C1X5YxJZ.js"
import{c as r}from"./createInput-LMpmIneO.js"
let s=e("#pCC #page").value
const c=a(e("#pCC input[value=Go]").parentNode.previousElementSibling).replace(/\D/g,""),p=e("#pCC #page").closest("tr"),l=(n=document)=>e("#pCC input[value=Go]",n).closest("tr")
const u=function(){const e=t()
return e.style.cssText="\n    animation: fshSpinner 0.6s linear infinite;\n    border: 2px solid #ccc;\n    border-radius: 50%;\n    border-top-color: #07d;\n    height: 8px;\n    width: 8px;\n    margin: 0px 4px;\n    display: none;\n  ",e}()
async function d(n){if(n===s)return
s=n,p.querySelector("#page").value=n,u.style.display="inline-block"
const t=await o({cmd:"arena",subcmd:"completed",page:s})
l(t).replaceWith(p),e("#pCC").replaceWith(e("#pCC",t)),u.style.display="none"}function f(){i("arena completed","gotoFirstPage"),d(1)}function m(){i("arena completed","gotoLastPage"),d(c)}function C(){d(Math.max(1,s-1))}function g(){d(Math.min(s+1,c))}function h(e,n){return r({value:e,onclick:n,type:"button"})}function y(){l().children[1].replaceWith(function(){const t=n("td")
return t.append(h("Go",(()=>d(e("#page").value)))," ",h("<<",f)," ",h("<",C)," ",h(">",g)," ",h(">>",m)),t}())
const t=e("#pCC #page").closest("td")
t.insertBefore(u,t.firstChild)}export{y as default}
//# sourceMappingURL=completedArenas-ChV35Yi4.js.map
