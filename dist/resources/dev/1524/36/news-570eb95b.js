import{c as e}from"./createAnchor-2744b759.js"
import{c as a}from"./createSpan-c8cd4d0e.js"
import{g as t}from"./getArrayByClassName-23419047.js"
import{g as r}from"./getTitle-feb3d41a.js"
import{E as s,p as n,aE as o,h as i,D as c,bG as f,bH as m,I as d,a7 as p,a0 as l,aD as h,C as u}from"./calfSystem-eeb1d862.js"
import{i as b}from"./insertElementBefore-42a90ba9.js"
import{i as g}from"./insertHtmlAfterEnd-2ce9b6d9.js"
import{p as C}from"./parseDateAsTimestamp-00baed52.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function E(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:E(e)})
e.replaceChild(t,e.firstChild)}const A=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function T(){d("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,A(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
g(a,A(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default T
//# sourceMappingURL=news-570eb95b.js.map
