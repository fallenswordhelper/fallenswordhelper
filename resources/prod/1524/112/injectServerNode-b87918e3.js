import{g as t,j as n,bT as e,D as s,a3 as a,l as i,i as o,s as r}from"./calfSystem-4830a18d.js"
function c(t,n){const e=n.nextElementSibling.children[0]
8===e.children.length&&(!function(t,n){const e=a(n.children[7]),s=i({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${e}`})
o(t,s)}(t,e),function(t,n){const e=n.children[3].innerHTML,s=t.children[0]
r(`Online: ${e}`,s)}(t,e),n.parentNode.classList.add("fshInvisible"))}function l(){const a=t("topbanner-stats"),i=n("#pCR h3").find(e("Game Stats"));(function(t,n){return!(t&&s("topbanner-stats-hidden",t))&&n})(a,i)&&c(a,i)}export{l as default}
//# sourceMappingURL=injectServerNode-b87918e3.js.map
