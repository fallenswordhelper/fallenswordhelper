import{c as e}from"./createAnchor-e48d6052.js"
import{c as a}from"./createSpan-2b6fe10e.js"
import{g as t}from"./getArrayByClassName-ea5b14c8.js"
import{g as r}from"./getTitle-1d9132b2.js"
import{D as s,p as n,aA as o,h as i,C as c,bz as f,bA as m,H as d,a4 as p,Z as l,az as h,B as u}from"./calfSystem-793da633.js"
import{i as b}from"./insertElementBefore-9e5d02cd.js"
import{i as g}from"./insertHtmlAfterEnd-7508c2c1.js"
import{p as C}from"./parseDateAsTimestamp-b0577af9.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function A(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
b(s,a),i(s,a)}function w(e){return $.test(e.firstChild.nodeValue)}function y(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:y(e)})
e.replaceChild(t,e.firstChild)}const L=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const v=e=>h("PvP Ladder",e.children[1]),E=e=>C(u(e.children[2]))
function T(){d("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,L(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
g(a,L(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(A),t("news_body_tavern",n).filter(w).forEach(k)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(v).map(E),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default T
//# sourceMappingURL=news-5ea0b784.js.map
