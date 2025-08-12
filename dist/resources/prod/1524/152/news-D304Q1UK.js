import{k as a,aC as e,p as t,_ as s,bf as n,a6 as r,i as o,o as i,s as c,bt as f,aP as l,d1 as d,q as p,e2 as m,e3 as h,bn as u,n as g,de as _,aB as b,aw as w,aM as k}from"./calfSystem-BlPuMQGT.js"
import{g as C}from"./getTitle-C1xil_UC.js"
import{i as $}from"./insertHtmlAfterEnd-DO_1O_2f.js"
import{p as U}from"./parseDateAsTimestamp-DDAzvT6k.js"
import"./dateUtc-CCrQ3NXB.js"
const j=a=>`${n}creatures&search_name=${encodeURIComponent(a)}`,L=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,T=a=>`${n}realms&search_name=${encodeURIComponent(a)}`,y=a=>s({href:`${T(a)}`,textContent:a,target:"_blank"})
function P(a){const e=C(a)
if(!e)return
const t=s({href:j(e.split("(")[0].trim()),target:"_blank"})
r(t,a),o(t,a),i(t,(()=>c("news","Ufsg Link")))}function v(a){return L.test(a.lastChild.nodeValue)}function x(a){const[,e,t]=f(a.childNodes)
e.href=j(l(e)),e.target="_blank"
const s=d(L,t.nodeValue),n=y(s[2])
a.replaceChildren(e,s[1],n),i(e,(()=>c("news","Titan link"))),i(n,(()=>c("news","Titan location link")))}const A="News",E="Updates",R=a=>`View ${a} Page 2`,V=(a,e)=>`&nbsp;<a href="${a}&page=2">${R(e)}</a>`
const B=a=>_("PvP Ladder",a.children[1]),I=a=>U(g(a.children[2]))
function M(){b("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
$(a,V(m,E))
const e=p(`#pCC a[href="${h}"]`)
$(e,V(h,A))
const t=u("news_left_column")
1===t.length&&i(t[0],(a=>{g(a.target)===R(E)&&c(A,R(E)),g(a.target)===R(A)&&c(A,R(A))}))}(),b("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(P),e("news_body_tavern",t()).filter(v).forEach(x)),b("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(B).map(I),s=Math.max.apply(null,a)
s>b(k)&&w(k,s)}()}export{M as default}
//# sourceMappingURL=news-D304Q1UK.js.map
