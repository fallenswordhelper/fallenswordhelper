import{c as e}from"./createAnchor-84b8b49d.js"
import{c as a}from"./createSpan-6440fa04.js"
import{g as t}from"./getArrayByClassName-aab7cb65.js"
import{g as r}from"./getTitle-758bebf8.js"
import{E as s,p as n,aO as o,h as i,D as c,bK as f,bL as m,I as p,a6 as d,_ as l,aN as h,C as u}from"./calfSystem-d3f0a380.js"
import{i as b}from"./insertElementBefore-c2bb9234.js"
import{i as g}from"./insertHtmlAfterEnd-1764e701.js"
import{p as C}from"./parseDateAsTimestamp-8de82a90.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function L(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:L(e)})
e.replaceChild(t,e.firstChild)}const A=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const E=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function T(){p("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,A(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
g(a,A(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),p("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(E).map(v),a=Math.max.apply(null,e)
a>p(d)&&l(d,a)}()}export default T
//# sourceMappingURL=news-18ad821e.js.map
