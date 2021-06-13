import{c as e}from"./createAnchor-ea3ce034.js"
import{c as a}from"./createSpan-88103101.js"
import{g as t}from"./getArrayByClassName-84652cc1.js"
import{g as r}from"./getTitle-64888b8a.js"
import{E as s,p as n,aN as o,h as c,D as i,bJ as f,bK as m,I as p,a5 as l,Z as d,aM as h,C as u}from"./calfSystem-ae2e69af.js"
import{i as b}from"./insertElementBefore-c442a2a7.js"
import{i as g}from"./insertHtmlAfterEnd-f90eb1fc.js"
import{p as C}from"./parseDateAsTimestamp-b35c4088.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
b(s,a),c(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function T(){p("pageTwoLinks")&&function(){const e=i(`#pCC a[href="${f}"]`)
if(!e)return
g(e,E(f,"Updates"))
const a=i(`#pCC a[href="${m}"]`)
g(a,E(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),p("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>p(l)&&d(l,a)}()}export default T
//# sourceMappingURL=news-0817c303.js.map
