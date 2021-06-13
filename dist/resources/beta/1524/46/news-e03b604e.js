import{c as e}from"./createAnchor-a363f8a1.js"
import{c as a}from"./createSpan-14225166.js"
import{g as t}from"./getArrayByClassName-f5e2f789.js"
import{g as r}from"./getTitle-758bebf8.js"
import{E as s,p as n,aN as o,h as i,D as f,bJ as c,bK as m,I as p,a5 as d,Z as l,aM as h,C as u}from"./calfSystem-cbf77dd7.js"
import{i as b}from"./insertElementBefore-c2bb9234.js"
import{i as g}from"./insertHtmlAfterEnd-b5f0b3bc.js"
import{p as C}from"./parseDateAsTimestamp-9ad12f39.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function T(){p("pageTwoLinks")&&function(){const e=f(`#pCC a[href="${c}"]`)
if(!e)return
g(e,E(c,"Updates"))
const a=f(`#pCC a[href="${m}"]`)
g(a,E(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),p("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>p(d)&&l(d,a)}()}export default T
//# sourceMappingURL=news-e03b604e.js.map
