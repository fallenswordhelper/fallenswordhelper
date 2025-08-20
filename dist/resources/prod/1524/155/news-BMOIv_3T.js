import{h as a,aA as e,p as t,Y as s,bg as n,a4 as r,i as o,o as i,s as c,bu as l,aR as f,c$ as d,q as p,d_ as m,d$ as h,bo as u,l as g,dc as _,az as $,au as b,aK as w}from"./calfSystem-UyQ_FKFu.js"
import{g as C}from"./getTitle-C1xil_UC.js"
import{i as k}from"./insertHtmlAfterEnd-CRyhSC3a.js"
import{p as U}from"./parseDateAsTimestamp-uKlPe52O.js"
import"./dateUtc-DP8sjtiR.js"
const j=a=>`${n}creatures&search_name=${encodeURIComponent(a)}`,L=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,T=a=>`${n}realms&search_name=${encodeURIComponent(a)}`
function v(a){const e=C(a)
if(!e)return
const t=s({href:j(e.split("(")[0].trim()),target:"_blank"})
r(t,a),o(t,a),i(t,()=>c("news","Ufsg Link"))}function y(a){return L.test(a.lastChild.nodeValue)}function R(a){const[,e,t]=l(a.childNodes)
e.href=j(f(e)),e.target="_blank"
const n=d(L,t.nodeValue),r=(o=n[2],s({href:`${T(o)}`,textContent:o,target:"_blank"}))
var o
a.replaceChildren(e,n[1],r),i(e,()=>c("news","Titan link")),i(r,()=>c("news","Titan location link"))}const x="News",A="Updates",E=a=>`View ${a} Page 2`,P=(a,e)=>`&nbsp;<a href="${a}&page=2">${E(e)}</a>`
const V=a=>_("PvP Ladder",a.children[1]),D=a=>U(g(a.children[2]))
function I(){$("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
k(a,P(m,A))
const e=p(`#pCC a[href="${h}"]`)
k(e,P(h,x))
const t=u("news_left_column")
1===t.length&&i(t[0],a=>{g(a.target)===E(A)&&c(x,E(A)),g(a.target)===E(x)&&c(x,E(x))})}(),$("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(v),e("news_body_tavern",t()).filter(y).forEach(R)),$("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(V).map(D),s=Math.max.apply(null,a)
s>$(w)&&b(w,s)}()}export{I as default}
//# sourceMappingURL=news-BMOIv_3T.js.map
