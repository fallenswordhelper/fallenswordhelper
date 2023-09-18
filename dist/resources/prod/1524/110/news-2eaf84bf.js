import{j as a,af as e,p as t,m as n,y as s,i as r,aI as o,c1 as c,q as i,c_ as f,c$ as l,ae as p,aj as d,aa as m,cr as h,a4 as u}from"./calfSystem-929ac228.js"
import{c as g}from"./createSpan-6761e587.js"
import{g as C}from"./getTitle-979b8fc1.js"
import{i as $}from"./insertHtmlAfterEnd-cbb15ee8.js"
import{p as _}from"./parseDateAsTimestamp-c49e9bdc.js"
import"./dateUtc-0fede27f.js"
const j=a=>`${o}creatures&search_name=${encodeURIComponent(a)}`,b=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,k=a=>`<a href="${(a=>`${o}realms&search_name=${encodeURIComponent(a)}`)(a)}" target="_blank">${a}</a>`
function w(a){const e=C(a)
if(!e)return
const t=n({href:j(e.split("(")[0].trim()),target:"_blank"})
s(t,a),r(t,a)}function y(a){return b.test(a.lastChild.nodeValue)}function L(a){const e=c(b,a.lastChild.nodeValue)
return e[2]=k(e[2]),e.slice(1).join("")}function U(a){!function(a){const e=a.children[0]
e.href=j(e.textContent),e.target="_blank"}(a)
const e=g({innerHTML:L(a)})
a.replaceChild(e,a.lastChild)}const T=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const v=a=>h("PvP Ladder",a.children[1]),x=a=>_(u(a.children[2]))
function E(){p("pageTwoLinks")&&function(){const a=i(`#pCC a[href="${f}"]`)
if(!a)return
$(a,T(f,"Updates"))
const e=i(`#pCC a[href="${l}"]`)
$(e,T(l,"News"))}(),p("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(w),e("news_body_tavern",t()).filter(y).forEach(U)),p("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(v).map(x),n=Math.max.apply(null,a)
n>p(d)&&m(d,n)}()}export{E as default}
//# sourceMappingURL=news-2eaf84bf.js.map
