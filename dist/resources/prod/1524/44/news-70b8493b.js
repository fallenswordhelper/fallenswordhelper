import{c as a}from"./createAnchor-c5a7440e.js"
import{c as e}from"./createSpan-b08aa35e.js"
import{g as t}from"./getArrayByClassName-a6fe264a.js"
import{g as r}from"./getTitle-f39367a1.js"
import{E as s,p as n,aK as o,h as i,D as c,bE as f,bF as m,I as p,a5 as l,Z as d,aJ as h,C as u}from"./calfSystem-6ad077b7.js"
import{i as g}from"./insertElementBefore-7c440c87.js"
import{i as C}from"./insertHtmlAfterEnd-0792ac6e.js"
import{p as b}from"./parseDateAsTimestamp-512975e0.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function _(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:_(t),target:"_blank"})
g(s,e),i(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function E(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=j(_(e[2]),e[2]),e[4]=j((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function k(a){const t=e({innerHTML:E(a)})
a.replaceChild(t,a.firstChild)}const A=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const L=a=>h("PvP Ladder",a.children[1]),v=a=>b(u(a.children[2]))
function T(){p("pageTwoLinks")&&function(){const a=c(`#pCC a[href="${f}"]`)
if(!a)return
C(a,A(f,"Updates"))
const e=c(`#pCC a[href="${m}"]`)
C(e,A(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),p("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(L).map(v),e=Math.max.apply(null,a)
e>p(l)&&d(l,e)}()}export default T
//# sourceMappingURL=news-70b8493b.js.map
