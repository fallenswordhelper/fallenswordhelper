import{c as e}from"./createAnchor-9cd6b523.js"
import{c as a}from"./createSpan-f56cc9ef.js"
import{g as t}from"./getArrayByClassName-fd115cb0.js"
import{g as r}from"./getTitle-f39367a1.js"
import{E as s,p as n,aM as o,h as c,D as i,bH as f,bI as m,I as d,a5 as p,Z as l,aL as h,C as u}from"./calfSystem-a8d582b6.js"
import{i as b}from"./insertElementBefore-7c440c87.js"
import{i as g}from"./insertHtmlAfterEnd-7c6126dc.js"
import{p as C}from"./parseDateAsTimestamp-e85e174f.js"
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
//# sourceMappingURL=news-2c9ac2df.js.map
