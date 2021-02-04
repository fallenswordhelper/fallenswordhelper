import{y as t,D as n,as as e,l as s,B as a,m as c,h as i,A as r}from"./calfSystem-c91a5c89.js"
import{t as o}from"./toggleForce-6831dfcc.js"
function l(t,n){const e=n.nextElementSibling.children[0]
8===e.children.length&&(!function(t,n){const e=a(n.children[7]),s=c({className:"tip-static",dataset:{tipped:"Server"},textContent:`Server: ${e}`})
i(t,s)}(t,e),function(t,n){const e=n.children[3].innerHTML,s=t.children[0]
r(`Online: ${e}`,s)}(t,e),o(n.parentNode,!0))}function d(){const a=t("topbanner-stats"),c=n("#pCR h3").find(e("Game Stats"));(function(t,n){return!(t&&s("topbanner-stats-hidden",t))&&n})(a,c)&&l(a,c)}export default d
//# sourceMappingURL=injectServerNode-aae479c7.js.map
