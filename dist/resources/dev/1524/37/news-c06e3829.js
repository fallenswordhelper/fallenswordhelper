import{c as a}from"./createAnchor-3a3a67e7.js"
import{c as e}from"./createSpan-6854a1c4.js"
import{g as t}from"./getArrayByClassName-b9fdeb7c.js"
import{g as r}from"./getTitle-3cd96f7d.js"
import{E as s,p as n,aE as o,h as c,D as i,bG as f,bH as m,I as d,a7 as p,a0 as l,aD as h,C as u}from"./calfSystem-5d0c721b.js"
import{i as b}from"./insertElementBefore-656c48d5.js"
import{i as g}from"./insertHtmlAfterEnd-4539e835.js"
import{p as C}from"./parseDateAsTimestamp-fab4c5a9.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function _(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:_(t),target:"_blank"})
b(s,e),c(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function E(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=j(_(e[2]),e[2]),e[4]=j((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function k(a){const t=e({innerHTML:E(a)})
a.replaceChild(t,a.firstChild)}const A=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const L=a=>h("PvP Ladder",a.children[1]),v=a=>C(u(a.children[2]))
function T(){d("pageTwoLinks")&&function(){const a=i(`#pCC a[href="${f}"]`)
if(!a)return
g(a,A(f,"Updates"))
const e=i(`#pCC a[href="${m}"]`)
g(e,A(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),d("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(L).map(v),e=Math.max.apply(null,a)
e>d(p)&&l(p,e)}()}export default T
//# sourceMappingURL=news-c06e3829.js.map
