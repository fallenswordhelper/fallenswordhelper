import{c as e}from"./createAnchor-e6c6de33.js"
import{c as a}from"./createSpan-462a14d2.js"
import{g as t}from"./getArrayByClassName-7f937df4.js"
import{g as r}from"./getTitle-758bebf8.js"
import{E as s,p as n,aL as o,h as c,D as i,bG as f,bH as m,I as d,a5 as p,Z as l,aK as h,C as u}from"./calfSystem-7991d843.js"
import{i as b}from"./insertElementBefore-c2bb9234.js"
import{i as g}from"./insertHtmlAfterEnd-c8c22cfb.js"
import{p as C}from"./parseDateAsTimestamp-d924ca8d.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
b(s,a),c(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function L(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:L(e)})
e.replaceChild(t,e.firstChild)}const A=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const E=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function T(){d("pageTwoLinks")&&function(){const e=i(`#pCC a[href="${f}"]`)
if(!e)return
g(e,A(f,"Updates"))
const a=i(`#pCC a[href="${m}"]`)
g(a,A(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(E).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default T
//# sourceMappingURL=news-33e9a4e8.js.map
