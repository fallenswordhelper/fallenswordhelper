import{z as t,E as n,au as e,l as s,C as a,m as i,h as r,B as o}from"./calfSystem-71efcdd9.js"
import{t as c}from"./toggleForce-6fbd75e0.js"
function d(t,n){const e=n.nextElementSibling.children[0]
8===e.children.length&&(!function(t,n){const e=a(n.children[7]),s=i({className:"tip-static",dataset:{tipped:"Server"},textContent:`Server: ${e}`})
r(t,s)}(t,e),function(t,n){const e=n.children[3].innerHTML,s=t.children[0]
o(`Online: ${e}`,s)}(t,e),c(n.parentNode,!0))}function l(){const a=t("topbanner-stats"),i=n("#pCR h3").find(e("Game Stats"));(function(t,n){return!(t&&s("topbanner-stats-hidden",t))&&n})(a,i)&&d(a,i)}export default l
//# sourceMappingURL=injectServerNode-22d9f250.js.map