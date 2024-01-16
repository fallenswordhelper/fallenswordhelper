import{k as a,aj as e,p as t,n as s,y as n,i as r,o,s as i,a_ as c,aq as l,c7 as f,aM as d,q as p,d8 as m,d9 as h,aU as u,a8 as g,ai as _,an as w,ae as k,cw as $}from"./calfSystem-G1dN925O.js"
import{g as C}from"./getTitle-KOgbTbIb.js"
import{i as b}from"./insertHtmlAfterEnd-s8cbAmD-.js"
import{p as U}from"./parseDateAsTimestamp-XLvjzemG.js"
import"./dateUtc-7iQbgp_T.js"
const j=a=>`${d}creatures&search_name=${encodeURIComponent(a)}`,y=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,L=a=>`${d}realms&search_name=${encodeURIComponent(a)}`,T=a=>s({href:`${L(a)}`,textContent:a,target:"_blank"})
function v(a){const e=C(a)
if(!e)return
const t=s({href:j(e.split("(")[0].trim()),target:"_blank"})
n(t,a),r(t,a),o(t,(()=>i("news","Ufsg Link")))}function x(a){return y.test(a.lastChild.nodeValue)}function E(a){const[,e,t]=c(a.childNodes)
e.href=j(l(e)),e.target="_blank"
const s=f(y,t.nodeValue),n=T(s[2])
a.replaceChildren(e,s[1],n),o(e,(()=>i("news","Titan link"))),o(n,(()=>i("news","Titan location link")))}const P="News",R="Updates",V=a=>`View ${a} Page 2`,q=(a,e)=>`&nbsp;<a href="${a}&page=2">${V(e)}</a>`
const A=a=>$("PvP Ladder",a.children[1]),I=a=>U(g(a.children[2]))
function M(){_("pageTwoLinks")&&function(){const a=p(`#pCC a[href="${m}"]`)
if(!a)return
b(a,q(m,R))
const e=p(`#pCC a[href="${h}"]`)
b(e,q(h,P))
const t=u("news_left_column")
1===t.length&&o(t[0],(a=>{g(a.target)===V(R)&&i(P,V(R)),g(a.target)===V(P)&&i(P,V(P))}))}(),_("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(v),e("news_body_tavern",t()).filter(x).forEach(E)),_("trackLadderReset")&&function(){const a=e("news_head_tavern",t()).filter(A).map(I),s=Math.max.apply(null,a)
s>_(w)&&k(w,s)}()}export{M as default}
//# sourceMappingURL=news-LGPd21bv.js.map
