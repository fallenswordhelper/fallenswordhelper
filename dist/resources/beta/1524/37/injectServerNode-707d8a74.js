import{z as t,E as n,au as e,l as a,C as s,m as i,h as r,B as o}from"./calfSystem-cb2a6f39.js"
import{t as c}from"./toggleForce-465fdd4f.js"
function d(t,n){const e=n.nextElementSibling.children[0]
8===e.children.length&&(!function(t,n){const e=s(n.children[7]),a=i({className:"tip-static",dataset:{tipped:"Server"},textContent:`Server: ${e}`})
r(t,a)}(t,e),function(t,n){const e=n.children[3].innerHTML,a=t.children[0]
o(`Online: ${e}`,a)}(t,e),c(n.parentNode,!0))}function l(){const s=t("topbanner-stats"),i=n("#pCR h3").find(e("Game Stats"));(function(t,n){return!(t&&a("topbanner-stats-hidden",t))&&n})(s,i)&&d(s,i)}export default l
//# sourceMappingURL=injectServerNode-707d8a74.js.map
