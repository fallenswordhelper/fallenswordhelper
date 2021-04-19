import{c as e}from"./createAnchor-1d68225c.js"
import{c as a}from"./createSpan-2c557b8b.js"
import{g as t}from"./getArrayByClassName-ccc42006.js"
import{g as r}from"./getTitle-1f65d471.js"
import{E as s,p as n,aJ as o,h as c,D as i,bF as f,bG as m,I as p,a6 as d,_ as l,aI as h,C as u}from"./calfSystem-26fbeaeb.js"
import{i as b}from"./insertElementBefore-68b894c4.js"
import{i as g}from"./insertHtmlAfterEnd-078c7745.js"
import{p as C}from"./parseDateAsTimestamp-eeab87a4.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
b(s,a),c(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function T(){p("pageTwoLinks")&&function(){const e=i(`#pCC a[href="${f}"]`)
if(!e)return
g(e,E(f,"Updates"))
const a=i(`#pCC a[href="${m}"]`)
g(a,E(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),p("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>p(d)&&l(d,a)}()}export default T
//# sourceMappingURL=news-082ef561.js.map
