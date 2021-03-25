import{c as e}from"./createAnchor-8d3e76da.js"
import{c as a}from"./createSpan-3ab35394.js"
import{g as t}from"./getArrayByClassName-22f3bd68.js"
import{g as r}from"./getTitle-feb3d41a.js"
import{E as s,p as n,aD as o,h as i,D as c,bF as f,bG as m,I as d,a6 as p,_ as l,aC as h,C as u}from"./calfSystem-4a40365f.js"
import{i as b}from"./insertElementBefore-42a90ba9.js"
import{i as C}from"./insertHtmlAfterEnd-4956925e.js"
import{p as g}from"./parseDateAsTimestamp-b15d0c3e.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>g(u(e.children[2]))
function T(){d("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
C(e,E(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
C(a,E(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default T
//# sourceMappingURL=news-e84f2cb4.js.map
