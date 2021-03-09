import{c as e}from"./createAnchor-3f632df9.js"
import{c as a}from"./createSpan-9738bb01.js"
import{g as t}from"./getArrayByClassName-abf6bba3.js"
import{g as r}from"./getTitle-1d9132b2.js"
import{D as s,p as n,aD as o,h as i,C as c,bD as f,bE as m,H as d,a5 as p,_ as l,aC as h,B as u}from"./calfSystem-c07e3259.js"
import{i as b}from"./insertElementBefore-9e5d02cd.js"
import{i as C}from"./insertHtmlAfterEnd-3b1fe1ac.js"
import{p as g}from"./parseDateAsTimestamp-63b9246e.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>g(u(e.children[2]))
function D(){d("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
C(e,E(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
C(a,E(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default D
//# sourceMappingURL=news-d4b7663e.js.map
