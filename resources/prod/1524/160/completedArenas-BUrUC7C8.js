import{p as e,q as n,u as t,v as a,m as o,e as i,s as r}from"./calfSystem-HVCiy-VV.js"
import{c as s}from"./createInput-343o8t4v.js"
const c=()=>Number(n("#pCC #page").value)
let p=c()
const l=o(n("#pCC input[value=Go]").parentNode.previousElementSibling).replace(/\D/g,""),u=n("#pCC #page").closest("tr"),d=(e=document)=>n("#pCC input[value=Go]",e).closest("tr")
const f=function(){const e=a()
return e.style.cssText="\n    animation: fshSpinner 0.6s linear infinite;\n    border: 2px solid #ccc;\n    border-radius: 50%;\n    border-top-color: #07d;\n    height: 8px;\n    width: 8px;\n    margin: 0px 4px;\n    display: none;\n  ",e}()
async function m(e){if(e===p)return
p=e,u.querySelector("#page").value=e,f.style.display="inline-block"
const t=await i({cmd:"arena",subcmd:"completed",page:p})
d(t).replaceWith(u),n("#pCC").replaceWith(n("#pCC",t)),f.style.display="none"}function C(){r("arena completed","gotoFirstPage"),m(1)}function g(){r("arena completed","gotoLastPage"),m(l)}function h(){m(Math.max(1,p-1))}function y(){m(Math.min(p+1,l))}function b(e,n){return s({value:e,onclick:n,type:"button"})}function x(){if(!e()||!n("#page"))return
d().children[1].replaceWith(function(){const e=t("td")
return e.append(b("Go",()=>m(c())),b("<<",C)," ",b("<",h)," ",b(">",y)," ",b(">>",g)),e}())
const a=n("#pCC #page").closest("td")
a.insertBefore(f,a.firstChild)}export{x as default}
//# sourceMappingURL=completedArenas-BUrUC7C8.js.map
