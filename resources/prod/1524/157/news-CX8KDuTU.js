import{h as a,c as e,r as t,cW as s,aB as n,p as r,bx as o,c_ as c,Z as i,o as d,s as p,ba as f,q as l,dW as m,dX as u,br as h,l as _,da as w,aA as b,av as g,aM as C}from"./calfSystem-CQOGdqPv.js"
import{u as $,a as y}from"./ufsgMonsterLink-B9Ds8rc0.js"
import{i as k}from"./insertHtmlAfterEnd-BB5pBx1-.js"
import{p as v}from"./parseDateAsTimestamp-D__SFnGT.js"
const L=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,j=a=>`${f}realms&search_name=${encodeURIComponent(a)}`
function x(a){return L.test(a.lastChild.nodeValue)}function E(a){return s.test(a.dataset.tipped)}function A(a){const[,e,t]=o(a.childNodes),s=c(L,t.nodeValue),n=(r=s[2],i({href:`${j(r)}`,textContent:r,target:"_blank"}))
var r
a.replaceChildren(e,s[1],n),d(n,()=>p("news","Titan location link"))}const M="News",P="Updates",T=a=>`View ${a} Page 2`,U=(a,e)=>`&nbsp;<a href="${a}&page=2">${T(e)}</a>`
const V=a=>w("PvP Ladder",a.children[1]),B=a=>v(_(a.children[2]))
function N(){b("pageTwoLinks")&&function(){const a=l(`#pCC a[href="${m}"]`)
if(!a)return
k(a,U(m,P))
const e=l(`#pCC a[href="${u}"]`)
k(e,U(u,M))
const t=h("news_left_column")
1===t.length&&d(t[0],a=>{_(a.target)===T(P)&&p(M,T(P)),_(a.target)===T(M)&&p(M,T(M))})}(),b("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(e($,"news")),a('.news_body a[data-tipped*="/creatures/"],.news_body_tavern a[data-tipped*="/creatures/"]').filter(E).forEach(a=>{const e=t(s,a.dataset.tipped)
y("news",e,a)}),n("news_body_tavern",r()).filter(x).forEach(A)),b("trackLadderReset")&&function(){const a=n("news_head_tavern",r()).filter(V).map(B),e=Math.max.apply(null,a)
e>b(C)&&g(C,e)}()}export{N as default}
//# sourceMappingURL=news-CX8KDuTU.js.map
