import{n as a,ap as e,p as t,v as s,b6 as n,C as r,i as o,o as i,s as c,bk as f,aH as l,cO as d,q as p,dX as m,dY as h,be as u,aa as g,d8 as _,ao as b,aj as k,aA as w}from"./calfSystem-BGOTz8de.js"
import{g as C}from"./getTitle-C1xil_UC.js"
import{i as $}from"./insertHtmlAfterEnd-CjhYSrOa.js"
import{p as j}from"./parseDateAsTimestamp-DRgS21SE.js"
import"./dateUtc-DrUNGodL.js"
const U=a=>`${n}creatures&search_name=${encodeURIComponent(a)}`,v=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,L=a=>`${n}realms&search_name=${encodeURIComponent(a)}`,T=a=>s({href:`${L(a)}`,textContent:a,target:"_blank"})
function y(a){const e=C(a)
if(!e)return
const t=s({href:U(e.split("(")[0].trim()),target:"_blank"})
r(t,a),o(t,a),i(t,(()=>c("news","Ufsg Link")))}function x(a){return v.test(a.lastChild.nodeValue)}function A(a){const[,e,t]=f(a.childNodes)
e.href=U(l(e)),e.target="_blank"
const s=d(v,t.nodeValue),n=T(s[2])
a.replaceChildren(e,s[1],n),i(e,(()=>c("news","Titan link"))),i(n,(()=>c("news","Titan location link")))}const E="News",P="Updates",R=a=>`View ${a} Page 2`,V=(a,e)=>`&nbsp;<a href="${a}&page=2">${R(e)}</a>`
const H=a=>_("PvP Ladder",a.children[1]),I=a=>j(g(a.children[2]))
function N(){b("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
$(a,V(m,P))
const e=p(`#pCC a[href="${h}"]`)
$(e,V(h,E))
const t=u("news_left_column")
1===t.length&&i(t[0],(a=>{g(a.target)===R(P)&&c(E,R(P)),g(a.target)===R(E)&&c(E,R(E))}))}(),b("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(y),e("news_body_tavern",t()).filter(x).forEach(A)),b("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(H).map(I),s=Math.max.apply(null,a)
s>b(w)&&k(w,s)}()}export{N as default}
//# sourceMappingURL=news-UuVHzyko.js.map
