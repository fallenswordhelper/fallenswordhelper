import{z as t,E as n,aD as e,l as a,C as o,m as s,h as r,B as i}from"./calfSystem-1d588248.js"
import{t as c}from"./toggleForce-aa6abab1.js"
function l(t,n){const e=n.nextElementSibling.children[0]
8===e.children.length&&(!function(t,n){const e=o(n.children[7]),a=s({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${e}`})
r(t,a)}(t,e),function(t,n){const e=n.children[3].innerHTML,a=t.children[0]
i(`Online: ${e}`,a)}(t,e),c(n.parentNode,!0))}function d(){const o=t("topbanner-stats"),s=n("#pCR h3").find(e("Game Stats"));(function(t,n){return!(t&&a("topbanner-stats-hidden",t))&&n})(o,s)&&l(o,s)}export default d
//# sourceMappingURL=injectServerNode-d037f04f.js.map
