import{z as t,E as n,as as e,l as s,C as a,m as i,h as r,B as o}from"./calfSystem-e7bde0c3.js"
import{t as c}from"./toggleForce-a73479b0.js"
function l(t,n){const e=n.nextElementSibling.children[0]
8===e.children.length&&(!function(t,n){const e=a(n.children[7]),s=i({className:"tip-static",dataset:{tipped:"Server"},textContent:`Server: ${e}`})
r(t,s)}(t,e),function(t,n){const e=n.children[3].innerHTML,s=t.children[0]
o(`Online: ${e}`,s)}(t,e),c(n.parentNode,!0))}function d(){const a=t("topbanner-stats"),i=n("#pCR h3").find(e("Game Stats"));(function(t,n){return!(t&&s("topbanner-stats-hidden",t))&&n})(a,i)&&l(a,i)}export default d
//# sourceMappingURL=injectServerNode-262b8bca.js.map