import{c as e}from"./createAnchor-ca5c18d9.js"
import{c as a}from"./createSpan-2b0536e4.js"
import{g as t}from"./getArrayByClassName-0e6e45d9.js"
import{g as r}from"./getTitle-3cd96f7d.js"
import{E as s,p as n,aB as o,h as c,D as i,bC as f,bD as m,I as d,a6 as p,_ as l,aA as h,C as u}from"./calfSystem-60c20ae9.js"
import{i as C}from"./insertElementBefore-656c48d5.js"
import{i as b}from"./insertHtmlAfterEnd-ccf5624b.js"
import{p as g}from"./parseDateAsTimestamp-dd780cb6.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
C(s,a),c(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function A(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:A(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>g(u(e.children[2]))
function T(){d("pageTwoLinks")&&function(){const e=i(`#pCC a[href="${f}"]`)
if(!e)return
b(e,E(f,"Updates"))
const a=i(`#pCC a[href="${m}"]`)
b(a,E(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default T
//# sourceMappingURL=news-20d859d3.js.map
