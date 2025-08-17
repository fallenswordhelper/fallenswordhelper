import{h as a,aA as e,p as t,Y as s,bg as n,a4 as r,i as o,o as i,s as c,bu as l,aR as f,c_ as d,q as p,dZ as m,d_ as h,bo as u,l as g,db as _,az as b,au as w,aK as C}from"./calfSystem-CT1aM4VG.js"
import{g as $}from"./getTitle-C1xil_UC.js"
import{i as k}from"./insertHtmlAfterEnd-gTgXAdJt.js"
import{p as U}from"./parseDateAsTimestamp-B5Csql9l.js"
import"./dateUtc-Bgvvwji4.js"
const j=a=>`${n}creatures&search_name=${encodeURIComponent(a)}`,L=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,T=a=>`${n}realms&search_name=${encodeURIComponent(a)}`,y=a=>s({href:`${T(a)}`,textContent:a,target:"_blank"})
function A(a){const e=$(a)
if(!e)return
const t=s({href:j(e.split("(")[0].trim()),target:"_blank"})
r(t,a),o(t,a),i(t,(()=>c("news","Ufsg Link")))}function R(a){return L.test(a.lastChild.nodeValue)}function v(a){const[,e,t]=l(a.childNodes)
e.href=j(f(e)),e.target="_blank"
const s=d(L,t.nodeValue),n=y(s[2])
a.replaceChildren(e,s[1],n),i(e,(()=>c("news","Titan link"))),i(n,(()=>c("news","Titan location link")))}const x="News",E="Updates",P=a=>`View ${a} Page 2`,V=(a,e)=>`&nbsp;<a href="${a}&page=2">${P(e)}</a>`
const I=a=>_("PvP Ladder",a.children[1]),N=a=>U(g(a.children[2]))
function q(){b("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
k(a,V(m,E))
const e=p(`#pCC a[href="${h}"]`)
k(e,V(h,x))
const t=u("news_left_column")
1===t.length&&i(t[0],(a=>{g(a.target)===P(E)&&c(x,P(E)),g(a.target)===P(x)&&c(x,P(x))}))}(),b("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(A),e("news_body_tavern",t()).filter(R).forEach(v)),b("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(I).map(N),s=Math.max.apply(null,a)
s>b(C)&&w(C,s)}()}export{q as default}
//# sourceMappingURL=news-DnZWhRKa.js.map
