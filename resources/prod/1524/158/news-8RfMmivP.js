import{h as a,c as e,r as t,cV as s,aA as n,p as r,bw as o,cZ as c,Z as i,o as d,s as p,b9 as f,q as l,dP as u,dQ as m,bq as h,l as w,d9 as _,az as b,au as g,aL as C}from"./calfSystem-CIuUjh4H.js"
import{u as $,a as k}from"./ufsgMonsterLink-CSsHS1re.js"
import{i as y}from"./insertHtmlAfterEnd-BNBx3698.js"
import{p as L}from"./parseDateAsTimestamp-hdeGukFZ.js"
const v=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,j=a=>`${f}realms&search_name=${encodeURIComponent(a)}`
function E(a){return v.test(a.lastChild.nodeValue)}function P(a){return s.test(a.dataset.tipped)}function V(a){const[,e,t]=o(a.childNodes),s=c(v,t.nodeValue),n=(r=s[2],i({href:`${j(r)}`,textContent:r,target:"_blank"}))
var r
a.replaceChildren(e,s[1],n),d(n,()=>p("news","Titan location link"))}const x="News",A="Updates",T=a=>`View ${a} Page 2`,U=(a,e)=>`&nbsp;<a href="${a}&page=2">${T(e)}</a>`
const q=a=>_("PvP Ladder",a.children[1]),z=a=>L(w(a.children[2]))
function D(){b("pageTwoLinks")&&function(){const a=l(`#pCC a[href="${u}"]`)
if(!a)return
y(a,U(u,A))
const e=l(`#pCC a[href="${m}"]`)
y(e,U(m,x))
const t=h("news_left_column")
1===t.length&&d(t[0],a=>{w(a.target)===T(A)&&p(x,T(A)),w(a.target)===T(x)&&p(x,T(x))})}(),b("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(e($,"news")),a('.news_body a[data-tipped*="/creatures/"],.news_body_tavern a[data-tipped*="/creatures/"]').filter(P).forEach(a=>{const e=t(s,a.dataset.tipped)
k("news",e,a)}),n("news_body_tavern",r()).filter(E).forEach(V)),b("trackLadderReset")&&function(){const a=n("news_head_tavern",r()).filter(q).map(z),e=Math.max.apply(null,a)
e>b(C)&&g(C,e)}()}export{D as default}
//# sourceMappingURL=news-8RfMmivP.js.map
