import{c as e}from"./createAnchor-100284b8.js"
import{c as a}from"./createSpan-3083d966.js"
import{g as t}from"./getArrayByClassName-a297542c.js"
import{g as r}from"./getTitle-f6c227d8.js"
import{D as s,p as n,aA as o,h as i,C as c,bz as f,bA as m,H as p,a4 as d,Z as l,az as h,B as u}from"./calfSystem-0708a9bb.js"
import{i as b}from"./insertElementBefore-0a7f2602.js"
import{i as g}from"./insertHtmlAfterEnd-409ee96b.js"
import{p as C}from"./parseDateAsTimestamp-5250bd8e.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function A(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
b(s,a),i(s,a)}function w(e){return $.test(e.firstChild.nodeValue)}function y(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:y(e)})
e.replaceChild(t,e.firstChild)}const L=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const v=e=>h("PvP Ladder",e.children[1]),E=e=>C(u(e.children[2]))
function T(){p("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,L(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
g(a,L(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(A),t("news_body_tavern",n).filter(w).forEach(k)),p("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(v).map(E),a=Math.max.apply(null,e)
a>p(d)&&l(d,a)}()}export default T
//# sourceMappingURL=news-60c38479.js.map
