import{k as a,aj as e,p as t,n as s,y as n,i as r,o,s as c,b0 as i,as as f,cc as l,aN as d,q as p,de as m,df as h,aW as u,a8 as g,ai as _,an as k,ae as w,cE as $}from"./calfSystem-CUgWHLtG.js"
import{g as b}from"./getTitle-C1xil_UC.js"
import{i as C}from"./insertHtmlAfterEnd-B42mjcck.js"
import{p as j}from"./parseDateAsTimestamp-B9qDmuSc.js"
import"./dateUtc-DXZGXWHW.js"
const U=a=>`${d}creatures&search_name=${encodeURIComponent(a)}`,y=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,L=a=>`${d}realms&search_name=${encodeURIComponent(a)}`,T=a=>s({href:`${L(a)}`,textContent:a,target:"_blank"})
function E(a){const e=b(a)
if(!e)return
const t=s({href:U(e.split("(")[0].trim()),target:"_blank"})
n(t,a),r(t,a),o(t,(()=>c("news","Ufsg Link")))}function v(a){return y.test(a.lastChild.nodeValue)}function x(a){const[,e,t]=i(a.childNodes)
e.href=U(f(e)),e.target="_blank"
const s=l(y,t.nodeValue),n=T(s[2])
a.replaceChildren(e,s[1],n),o(e,(()=>c("news","Titan link"))),o(n,(()=>c("news","Titan location link")))}const N="News",P="Updates",R=a=>`View ${a} Page 2`,V=(a,e)=>`&nbsp;<a href="${a}&page=2">${R(e)}</a>`
const A=a=>$("PvP Ladder",a.children[1]),I=a=>j(g(a.children[2]))
function q(){_("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
C(a,V(m,P))
const e=p(`#pCC a[href="${h}"]`)
C(e,V(h,N))
const t=u("news_left_column")
1===t.length&&o(t[0],(a=>{g(a.target)===R(P)&&c(N,R(P)),g(a.target)===R(N)&&c(N,R(N))}))}(),_("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(E),e("news_body_tavern",t()).filter(v).forEach(x)),_("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(A).map(I),s=Math.max.apply(null,a)
s>_(k)&&w(k,s)}()}export{q as default}
//# sourceMappingURL=news-BbtH_NpI.js.map
