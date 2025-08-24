import{h as a,r as e,d7 as t,aB as s,p as n,a5 as r,i as o,Z as c,bh as i,o as d,s as f,bv as p,cV as l,q as u,dV as h,dW as m,bp as _,l as b,d6 as w,aA as g,av as $,aL as v}from"./calfSystem-79LsojAC.js"
import{i as C}from"./insertHtmlAfterEnd-Cc8z8uuA.js"
import{p as k}from"./parseDateAsTimestamp-CfPUfnnR.js"
const y=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,L=a=>`${i}realms&search_name=${encodeURIComponent(a)}`
function V(a,e){return e||(e=c({})),e.href=`${i}creatures&subcmd=view&creature_id=${a}`,e.target="_blank",d(e,()=>f("news","Ufsg link")),e}function E(a){const s=e(t,a.src)
if(!s)return
const n=V(s)
r(n,a),o(n,a)}function U(a){return y.test(a.lastChild.nodeValue)}function j(a){return t.test(a.dataset.tipped)}function x(a){const[,e,t]=p(a.childNodes),s=l(y,t.nodeValue),n=(r=s[2],c({href:`${L(r)}`,textContent:r,target:"_blank"}))
var r
a.replaceChildren(e,s[1],n),d(n,()=>f("news","Titan location link"))}const A="News",P="Updates",T=a=>`View ${a} Page 2`,N=(a,e)=>`&nbsp;<a href="${a}&page=2">${T(e)}</a>`
const R=a=>w("PvP Ladder",a.children[1]),q=a=>k(b(a.children[2]))
function z(){g("pageTwoLinks")&&function(){const a=u(`#pCC a[href="${h}"]`)
if(!a)return
C(a,N(h,P))
const e=u(`#pCC a[href="${m}"]`)
C(e,N(m,A))
const t=_("news_left_column")
1===t.length&&d(t[0],a=>{b(a.target)===T(P)&&f(A,T(P)),b(a.target)===T(A)&&f(A,T(A))})}(),g("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(E),a('.news_body a[data-tipped*="/creatures/"],.news_body_tavern a[data-tipped*="/creatures/"]').filter(j).forEach(a=>{V(e(t,a.dataset.tipped),a)}),s("news_body_tavern",n()).filter(U).forEach(x)),g("trackLadderReset")&&function(){const a=s("news_head_tavern",n()).filter(R).map(q),e=Math.max.apply(null,a)
e>g(v)&&$(v,e)}()}export{z as default}
//# sourceMappingURL=news-BHbeS4A_.js.map
