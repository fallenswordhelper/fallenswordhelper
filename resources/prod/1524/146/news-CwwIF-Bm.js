import{l as a,ar as e,p as t,t as s,b6 as n,A as r,i as o,o as i,s as c,bk as l,aH as d,cO as f,q as p,dP as m,dQ as h,be as u,ad as g,d6 as _,aq as b,al as k,aB as w}from"./calfSystem-DiXGAkgN.js"
import{g as C}from"./getTitle-C1xil_UC.js"
import{i as $}from"./insertHtmlAfterEnd-BQWVlorq.js"
import{p as U}from"./parseDateAsTimestamp-DjTMzBBD.js"
import"./dateUtc-BdqYyWwx.js"
const j=a=>`${n}creatures&search_name=${encodeURIComponent(a)}`,L=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,T=a=>`${n}realms&search_name=${encodeURIComponent(a)}`,y=a=>s({href:`${T(a)}`,textContent:a,target:"_blank"})
function P(a){const e=C(a)
if(!e)return
const t=s({href:j(e.split("(")[0].trim()),target:"_blank"})
r(t,a),o(t,a),i(t,(()=>c("news","Ufsg Link")))}function v(a){return L.test(a.lastChild.nodeValue)}function x(a){const[,e,t]=l(a.childNodes)
e.href=j(d(e)),e.target="_blank"
const s=f(L,t.nodeValue),n=y(s[2])
a.replaceChildren(e,s[1],n),i(e,(()=>c("news","Titan link"))),i(n,(()=>c("news","Titan location link")))}const A="News",E="Updates",R=a=>`View ${a} Page 2`,V=(a,e)=>`&nbsp;<a href="${a}&page=2">${R(e)}</a>`
const q=a=>_("PvP Ladder",a.children[1]),B=a=>U(g(a.children[2]))
function D(){b("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
$(a,V(m,E))
const e=p(`#pCC a[href="${h}"]`)
$(e,V(h,A))
const t=u("news_left_column")
1===t.length&&i(t[0],(a=>{g(a.target)===R(E)&&c(A,R(E)),g(a.target)===R(A)&&c(A,R(A))}))}(),b("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(P),e("news_body_tavern",t()).filter(v).forEach(x)),b("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(q).map(B),s=Math.max.apply(null,a)
s>b(w)&&k(w,s)}()}export{D as default}
//# sourceMappingURL=news-CwwIF-Bm.js.map
