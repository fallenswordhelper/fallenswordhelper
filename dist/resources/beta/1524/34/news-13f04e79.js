import{c as e}from"./createAnchor-f3eb99a7.js"
import{c as a}from"./createSpan-5e073e7a.js"
import{g as t}from"./getArrayByClassName-30ef3369.js"
import{g as r}from"./getTitle-1d9132b2.js"
import{D as s,p as n,aC as o,h as i,C as c,bC as f,bD as m,H as d,a4 as p,Z as l,aB as h,B as u}from"./calfSystem-dfa26790.js"
import{i as C}from"./insertElementBefore-9e5d02cd.js"
import{i as g}from"./insertHtmlAfterEnd-1adfe0ea.js"
import{p as b}from"./parseDateAsTimestamp-5cae868a.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
C(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const L=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const v=e=>h("PvP Ladder",e.children[1]),B=e=>b(u(e.children[2]))
function E(){d("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,L(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
g(a,L(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(v).map(B),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default E
//# sourceMappingURL=news-13f04e79.js.map
