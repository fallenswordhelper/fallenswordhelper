import{c as a}from"./createAnchor-0fa218c7.js"
import{c as e}from"./createSpan-a6b61f47.js"
import{g as t}from"./getArrayByClassName-039bb6c6.js"
import{g as r}from"./getTitle-64888b8a.js"
import{E as s,p as n,aO as o,h as i,D as c,bK as f,bL as m,I as p,a6 as l,_ as d,aN as h,C as u}from"./calfSystem-6a3c85e0.js"
import{i as b}from"./insertElementBefore-c442a2a7.js"
import{i as g}from"./insertHtmlAfterEnd-219827a9.js"
import{p as C}from"./parseDateAsTimestamp-12363058.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function j(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:j(t),target:"_blank"})
b(s,e),i(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function L(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=_(j(e[2]),e[2]),e[4]=_((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function k(a){const t=e({innerHTML:L(a)})
a.replaceChild(t,a.firstChild)}const A=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const E=a=>h("PvP Ladder",a.children[1]),v=a=>C(u(a.children[2]))
function T(){p("pageTwoLinks")&&function(){const a=c(`#pCC a[href="${f}"]`)
if(!a)return
g(a,A(f,"Updates"))
const e=c(`#pCC a[href="${m}"]`)
g(e,A(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),p("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(E).map(v),e=Math.max.apply(null,a)
e>p(l)&&d(l,e)}()}export default T
//# sourceMappingURL=news-1c253f5c.js.map
