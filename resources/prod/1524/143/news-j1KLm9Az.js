import{k as a,ap as e,p as t,n as s,z as n,i as r,o,s as c,bj as i,aF as l,cU as f,b3 as d,q as p,dI as m,dJ as h,bd as u,ac as g,ao as _,aw as b,aj as w,c$ as $}from"./calfSystem-ChzN4Q-P.js"
import{g as k}from"./getTitle-C1xil_UC.js"
import{i as C}from"./insertHtmlAfterEnd-DEdxHibR.js"
import{p as j}from"./parseDateAsTimestamp-iO7Ig_Pa.js"
import"./dateUtc-BYrZxQ0M.js"
const U=a=>`${d}creatures&search_name=${encodeURIComponent(a)}`,L=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,T=a=>`${d}realms&search_name=${encodeURIComponent(a)}`,y=a=>s({href:`${T(a)}`,textContent:a,target:"_blank"})
function E(a){const e=k(a)
if(!e)return
const t=s({href:U(e.split("(")[0].trim()),target:"_blank"})
n(t,a),r(t,a),o(t,(()=>c("news","Ufsg Link")))}function v(a){return L.test(a.lastChild.nodeValue)}function x(a){const[,e,t]=i(a.childNodes)
e.href=U(l(e)),e.target="_blank"
const s=f(L,t.nodeValue),n=y(s[2])
a.replaceChildren(e,s[1],n),o(e,(()=>c("news","Titan link"))),o(n,(()=>c("news","Titan location link")))}const I="News",P="Updates",R=a=>`View ${a} Page 2`,V=(a,e)=>`&nbsp;<a href="${a}&page=2">${R(e)}</a>`
const A=a=>$("PvP Ladder",a.children[1]),F=a=>j(g(a.children[2]))
function N(){_("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
C(a,V(m,P))
const e=p(`#pCC a[href="${h}"]`)
C(e,V(h,I))
const t=u("news_left_column")
1===t.length&&o(t[0],(a=>{g(a.target)===R(P)&&c(I,R(P)),g(a.target)===R(I)&&c(I,R(I))}))}(),_("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(E),e("news_body_tavern",t()).filter(v).forEach(x)),_("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(A).map(F),s=Math.max.apply(null,a)
s>_(b)&&w(b,s)}()}export{N as default}
//# sourceMappingURL=news-j1KLm9Az.js.map
