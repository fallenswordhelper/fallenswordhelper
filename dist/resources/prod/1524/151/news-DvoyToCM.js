import{k as a,aC as e,p as t,_ as s,bi as n,a6 as r,i as o,o as i,s as c,bw as l,aT as f,d3 as d,q as p,e3 as m,e4 as h,bq as u,n as g,dg as _,aB as w,aw as b,aM as k}from"./calfSystem-C1X5YxJZ.js"
import{g as C}from"./getTitle-C1xil_UC.js"
import{i as $}from"./insertHtmlAfterEnd-Dw44WurJ.js"
import{p as T}from"./parseDateAsTimestamp-D6JycNAq.js"
import"./dateUtc-BAc__vAC.js"
const U=a=>`${n}creatures&search_name=${encodeURIComponent(a)}`,j=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,L=a=>`${n}realms&search_name=${encodeURIComponent(a)}`,y=a=>s({href:`${L(a)}`,textContent:a,target:"_blank"})
function v(a){const e=C(a)
if(!e)return
const t=s({href:U(e.split("(")[0].trim()),target:"_blank"})
r(t,a),o(t,a),i(t,(()=>c("news","Ufsg Link")))}function x(a){return j.test(a.lastChild.nodeValue)}function A(a){const[,e,t]=l(a.childNodes)
e.href=U(f(e)),e.target="_blank"
const s=d(j,t.nodeValue),n=y(s[2])
a.replaceChildren(e,s[1],n),i(e,(()=>c("news","Titan link"))),i(n,(()=>c("news","Titan location link")))}const E="News",P="Updates",R=a=>`View ${a} Page 2`,V=(a,e)=>`&nbsp;<a href="${a}&page=2">${R(e)}</a>`
const q=a=>_("PvP Ladder",a.children[1]),B=a=>T(g(a.children[2]))
function I(){w("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
$(a,V(m,P))
const e=p(`#pCC a[href="${h}"]`)
$(e,V(h,E))
const t=u("news_left_column")
1===t.length&&i(t[0],(a=>{g(a.target)===R(P)&&c(E,R(P)),g(a.target)===R(E)&&c(E,R(E))}))}(),w("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(v),e("news_body_tavern",t()).filter(x).forEach(A)),w("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(q).map(B),s=Math.max.apply(null,a)
s>w(k)&&b(k,s)}()}export{I as default}
//# sourceMappingURL=news-DvoyToCM.js.map
