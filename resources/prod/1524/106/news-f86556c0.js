import{j as a,ag as e,p as t,m as n,y as s,i as r,aK as o,c4 as c,q as i,c$ as f,d0 as l,af as d,ak as m,ab as p,cu as h,a5 as u}from"./calfSystem-076d7a01.js"
import{c as g}from"./createSpan-3211c164.js"
import{g as C}from"./getTitle-979b8fc1.js"
import{i as $}from"./insertHtmlAfterEnd-69c1ccf1.js"
import{p as _}from"./parseDateAsTimestamp-950daf66.js"
import"./dateUtc-ef343dff.js"
const b=a=>`${o}creatures&search_name=${encodeURIComponent(a)}`,j=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,k=a=>`<a href="${(a=>`${o}realms&search_name=${encodeURIComponent(a)}`)(a)}" target="_blank">${a}</a>`
function w(a){const e=C(a)
if(!e)return
const t=n({href:b(e.split("(")[0].trim()),target:"_blank"})
s(t,a),r(t,a)}function y(a){return j.test(a.lastChild.nodeValue)}function L(a){const e=c(j,a.lastChild.nodeValue)
return e[2]=k(e[2]),e.slice(1).join("")}function U(a){!function(a){const e=a.children[0]
e.href=b(e.textContent),e.target="_blank"}(a)
const e=g({innerHTML:L(a)})
a.replaceChild(e,a.lastChild)}const T=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const v=a=>h("PvP Ladder",a.children[1]),x=a=>_(u(a.children[2]))
function E(){d("pageTwoLinks")&&function(){const a=i(`#pCC a[href="${f}"]`)
if(!a)return
$(a,T(f,"Updates"))
const e=i(`#pCC a[href="${l}"]`)
$(e,T(l,"News"))}(),d("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(w),e("news_body_tavern",t()).filter(y).forEach(U)),d("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(v).map(x),n=Math.max.apply(null,a)
n>d(m)&&p(m,n)}()}export{E as default}
//# sourceMappingURL=news-f86556c0.js.map
