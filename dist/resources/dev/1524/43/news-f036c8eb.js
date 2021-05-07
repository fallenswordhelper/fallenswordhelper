import{c as e}from"./createAnchor-827e3832.js"
import{c as a}from"./createSpan-95e4d2e5.js"
import{g as t}from"./getArrayByClassName-b128b43c.js"
import{g as r}from"./getTitle-4ba90f46.js"
import{E as s,p as n,aL as o,h as i,D as c,bG as f,bH as m,I as p,a7 as d,a0 as l,aK as h,C as u}from"./calfSystem-3cb2f93e.js"
import{i as b}from"./insertElementBefore-23d4e956.js"
import{i as g}from"./insertHtmlAfterEnd-782307fa.js"
import{p as C}from"./parseDateAsTimestamp-a448aedf.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function L(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:L(e)})
e.replaceChild(t,e.firstChild)}const A=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const E=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function T(){p("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,A(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
g(a,A(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),p("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(E).map(v),a=Math.max.apply(null,e)
a>p(d)&&l(d,a)}()}export default T
//# sourceMappingURL=news-f036c8eb.js.map
