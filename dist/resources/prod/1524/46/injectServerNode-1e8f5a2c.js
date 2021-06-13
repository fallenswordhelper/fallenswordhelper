import{z as t,E as n,aE as e,l as o,C as s,m as a,h as r,B as i}from"./calfSystem-7991d843.js"
import{t as c}from"./toggleForce-70762365.js"
function l(t,n){const e=n.nextElementSibling.children[0]
8===e.children.length&&(!function(t,n){const e=s(n.children[7]),o=a({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${e}`})
r(t,o)}(t,e),function(t,n){const e=n.children[3].innerHTML,o=t.children[0]
i(`Online: ${e}`,o)}(t,e),c(n.parentNode,!0))}function d(){const s=t("topbanner-stats"),a=n("#pCR h3").find(e("Game Stats"));(function(t,n){return!(t&&o("topbanner-stats-hidden",t))&&n})(s,a)&&l(s,a)}export default d
//# sourceMappingURL=injectServerNode-1e8f5a2c.js.map
