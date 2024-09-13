import{k as a,aj as e,p as t,n as s,y as n,i as r,o,s as c,b0 as i,as as f,cc as l,aO as d,q as p,de as m,df as h,aW as u,a8 as g,ai as _,an as k,ae as w,cE as $}from"./calfSystem-Dr91xfiU.js"
import{g as b}from"./getTitle-C1xil_UC.js"
import{i as C}from"./insertHtmlAfterEnd-DoBDVByE.js"
import{p as j}from"./parseDateAsTimestamp-8RGd28bT.js"
import"./dateUtc-CLs3Glz6.js"
const U=a=>`${d}creatures&search_name=${encodeURIComponent(a)}`,y=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,L=a=>`${d}realms&search_name=${encodeURIComponent(a)}`,T=a=>s({href:`${L(a)}`,textContent:a,target:"_blank"})
function E(a){const e=b(a)
if(!e)return
const t=s({href:U(e.split("(")[0].trim()),target:"_blank"})
n(t,a),r(t,a),o(t,(()=>c("news","Ufsg Link")))}function v(a){return y.test(a.lastChild.nodeValue)}function x(a){const[,e,t]=i(a.childNodes)
e.href=U(f(e)),e.target="_blank"
const s=l(y,t.nodeValue),n=T(s[2])
a.replaceChildren(e,s[1],n),o(e,(()=>c("news","Titan link"))),o(n,(()=>c("news","Titan location link")))}const P="News",R="Updates",V=a=>`View ${a} Page 2`,A=(a,e)=>`&nbsp;<a href="${a}&page=2">${V(e)}</a>`
const I=a=>$("PvP Ladder",a.children[1]),N=a=>j(g(a.children[2]))
function q(){_("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
C(a,A(m,R))
const e=p(`#pCC a[href="${h}"]`)
C(e,A(h,P))
const t=u("news_left_column")
1===t.length&&o(t[0],(a=>{g(a.target)===V(R)&&c(P,V(R)),g(a.target)===V(P)&&c(P,V(P))}))}(),_("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(E),e("news_body_tavern",t()).filter(v).forEach(x)),_("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(I).map(N),s=Math.max.apply(null,a)
s>_(k)&&w(k,s)}()}export{q as default}
//# sourceMappingURL=news-BswpUw3J.js.map
