import{c as e}from"./createAnchor-cd488ad7.js"
import{c as a}from"./createSpan-256b26cd.js"
import{g as t}from"./getArrayByClassName-8fef58fe.js"
import{g as r}from"./getTitle-4ba90f46.js"
import{E as s,p as n,aK as o,h as i,D as c,bF as f,bG as m,I as d,a6 as p,_ as l,aJ as h,C as u}from"./calfSystem-1d588248.js"
import{i as b}from"./insertElementBefore-23d4e956.js"
import{i as g}from"./insertHtmlAfterEnd-8414b2b7.js"
import{p as C}from"./parseDateAsTimestamp-a6762fb7.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function T(){d("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,E(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
g(a,E(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default T
//# sourceMappingURL=news-4efe8e3e.js.map
