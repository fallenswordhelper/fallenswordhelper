import{c as a}from"./createAnchor-3ef30c4e.js"
import{c as e}from"./createSpan-1160b622.js"
import{g as t}from"./getArrayByClassName-17a8a2fa.js"
import{g as r}from"./getTitle-1f65d471.js"
import{E as s,p as n,aK as o,h as i,D as c,bG as f,bH as m,I as p,a7 as d,a0 as l,aJ as h,C as u}from"./calfSystem-b31aba65.js"
import{i as b}from"./insertElementBefore-68b894c4.js"
import{i as g}from"./insertHtmlAfterEnd-692199f9.js"
import{p as C}from"./parseDateAsTimestamp-be4f39d6.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function _(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:_(t),target:"_blank"})
b(s,e),i(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function k(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=j(_(e[2]),e[2]),e[4]=j((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function A(a){const t=e({innerHTML:k(a)})
a.replaceChild(t,a.firstChild)}const E=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const L=a=>h("PvP Ladder",a.children[1]),v=a=>C(u(a.children[2]))
function T(){p("pageTwoLinks")&&function(){const a=c(`#pCC a[href="${f}"]`)
if(!a)return
g(a,E(f,"Updates"))
const e=c(`#pCC a[href="${m}"]`)
g(e,E(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),p("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(L).map(v),e=Math.max.apply(null,a)
e>p(d)&&l(d,e)}()}export default T
//# sourceMappingURL=news-f5e4f79a.js.map
