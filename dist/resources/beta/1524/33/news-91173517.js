import{c as e}from"./createAnchor-b30b9e53.js"
import{c as a}from"./createSpan-1ad5cfdb.js"
import{g as t}from"./getArrayByClassName-23f3f49c.js"
import{g as r}from"./getTitle-f6c227d8.js"
import{D as s,p as n,aC as o,h as c,C as i,bC as f,bD as m,H as d,a4 as p,Z as l,aB as h,B as u}from"./calfSystem-c91a5c89.js"
import{i as C}from"./insertElementBefore-0a7f2602.js"
import{i as b}from"./insertHtmlAfterEnd-3d170c1c.js"
import{p as g}from"./parseDateAsTimestamp-25c3e576.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
C(s,a),c(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const L=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const v=e=>h("PvP Ladder",e.children[1]),B=e=>g(u(e.children[2]))
function E(){d("pageTwoLinks")&&function(){const e=i(`#pCC a[href="${f}"]`)
if(!e)return
b(e,L(f,"Updates"))
const a=i(`#pCC a[href="${m}"]`)
b(a,L(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(v).map(B),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default E
//# sourceMappingURL=news-91173517.js.map
