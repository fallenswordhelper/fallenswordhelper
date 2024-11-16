import{n as a,l as e,aL as t,y as s,i as n,e as r,s as o,aj as i,p as c,b0 as l,as as f,cc as d,q as p,de as m,df as h,aW as u,a8 as g,cE as _,ai as b,an as w,ad as $}from"./calfSystem-Blt4DbaE.js"
import{g as k}from"./getTitle-C1xil_UC.js"
import{i as C}from"./insertHtmlAfterEnd-ZY7WoHPS.js"
import{p as j}from"./parseDateAsTimestamp-CKw0dWec.js"
import"./dateUtc-Cc3l2wc4.js"
const L=a=>`${t}creatures&search_name=${encodeURIComponent(a)}`,U=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,y=a=>`${t}realms&search_name=${encodeURIComponent(a)}`,T=a=>e({href:`${y(a)}`,textContent:a,target:"_blank"})
function E(a){const t=k(a)
if(!t)return
const i=e({href:L(t.split("(")[0].trim()),target:"_blank"})
s(i,a),n(i,a),r(i,(()=>o("news","Ufsg Link")))}function v(a){return U.test(a.lastChild.nodeValue)}function x(a){const[,e,t]=l(a.childNodes)
e.href=L(f(e)),e.target="_blank"
const s=d(U,t.nodeValue),n=T(s[2])
a.replaceChildren(e,s[1],n),r(e,(()=>o("news","Titan link"))),r(n,(()=>o("news","Titan location link")))}const P="News",R="Updates",V=a=>`View ${a} Page 2`,A=(a,e)=>`&nbsp;<a href="${a}&page=2">${V(e)}</a>`
const I=a=>_("PvP Ladder",a.children[1]),N=a=>j(g(a.children[2]))
function q(){b("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
C(a,A(m,R))
const e=p(`#pCC a[href="${h}"]`)
C(e,A(h,P))
const t=u("news_left_column")
1===t.length&&r(t[0],(a=>{g(a.target)===V(R)&&o(P,V(R)),g(a.target)===V(P)&&o(P,V(P))}))}(),b("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(E),i("news_body_tavern",c()).filter(v).forEach(x)),b("trackLadderReset")&&function(){const a=i("news_head_tavern",c()).filter(I).map(N),e=Math.max.apply(null,a)
e>b(w)&&$(w,e)}()}export{q as default}
//# sourceMappingURL=news-DaHmuS2l.js.map
