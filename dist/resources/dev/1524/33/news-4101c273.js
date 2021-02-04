import{c as e}from"./createAnchor-4d90b079.js"
import{c as a}from"./createSpan-821c0562.js"
import{g as t}from"./getArrayByClassName-6d0c056d.js"
import{g as r}from"./getTitle-f6c227d8.js"
import{D as s,p as n,aD as o,h as i,C as c,bD as f,bE as m,H as d,a5 as p,_ as l,aC as h,B as u}from"./calfSystem-37f70deb.js"
import{i as C}from"./insertElementBefore-0a7f2602.js"
import{i as g}from"./insertHtmlAfterEnd-12ac228e.js"
import{p as b}from"./parseDateAsTimestamp-9ffa0af6.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
C(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>b(u(e.children[2]))
function D(){d("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,E(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
g(a,E(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default D
//# sourceMappingURL=news-4101c273.js.map
