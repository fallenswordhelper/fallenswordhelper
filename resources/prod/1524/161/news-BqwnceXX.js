import{h as a,c as e,r as t,cT as s,aB as n,p as r,bz as o,cY as c,_ as i,o as d,s as p,bb as f,q as l,dU as m,dV as u,bt as h,m as _,da as b,aA as w,av as g,aM as C}from"./calfSystem-Cs6CSxoU.js"
import{u as $,a as k}from"./ufsgMonsterLink-D3_86c6q.js"
import{i as v}from"./insertHtmlAfterEnd-B3hI-1FY.js"
import{p as y}from"./parseDateAsTimestamp-DIsrnFMo.js"
const E=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,L=a=>`${f}realms&search_name=${encodeURIComponent(a)}`
function j(a){return E.test(a.lastChild.nodeValue)}function A(a){return s.test(a.dataset.tipped)}function T(a){const[,e,t]=o(a.childNodes),s=c(E,t.nodeValue),n=(r=s[2],i({href:`${L(r)}`,textContent:r,target:"_blank"}))
var r
a.replaceChildren(e,s[1],n),d(n,()=>p("news","Titan location link"))}const U="News",V="Updates",x=a=>`View ${a} Page 2`,M=(a,e)=>`&nbsp;<a href="${a}&page=2">${x(e)}</a>`
const P=a=>b("PvP Ladder",a.children[1]),D=a=>y(_(a.children[2]))
function N(){w("pageTwoLinks")&&function(){const a=l(`#pCC a[href="${m}"]`)
if(!a)return
v(a,M(m,V))
const e=l(`#pCC a[href="${u}"]`)
v(e,M(u,U))
const t=h("news_left_column")
1===t.length&&d(t[0],a=>{_(a.target)===x(V)&&p(U,x(V)),_(a.target)===x(U)&&p(U,x(U))})}(),w("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(e($,"news")),a('.news_body a[data-tipped*="/creatures/"],.news_body_tavern a[data-tipped*="/creatures/"]').filter(A).forEach(a=>{const e=t(s,a.dataset.tipped)
k("news",e,a)}),n("news_body_tavern",r()).filter(j).forEach(T)),w("trackLadderReset")&&function(){const a=n("news_head_tavern",r()).filter(P).map(D),e=Math.max.apply(null,a)
e>w(C)&&g(C,e)}()}export{N as default}
//# sourceMappingURL=news-BqwnceXX.js.map
