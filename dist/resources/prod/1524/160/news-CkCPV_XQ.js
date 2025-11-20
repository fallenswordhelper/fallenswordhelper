import{h as a,c as e,r as s,cV as t,aB as n,p as r,by as o,c_ as c,_ as i,o as d,s as p,bb as f,q as l,dU as m,dV as u,bs as h,m as _,d9 as b,aA as w,av as g,aM as C}from"./calfSystem-HVCiy-VV.js"
import{u as $,a as y}from"./ufsgMonsterLink-BdB1quqf.js"
import{i as k}from"./insertHtmlAfterEnd-BcWzXtSx.js"
import{p as v}from"./parseDateAsTimestamp-BU-Z3fV9.js"
const L=/(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/,V=a=>`${f}realms&search_name=${encodeURIComponent(a)}`
function j(a){return L.test(a.lastChild.nodeValue)}function E(a){return t.test(a.dataset.tipped)}function U(a){const[,e,s]=o(a.childNodes),t=c(L,s.nodeValue),n=(r=t[2],i({href:`${V(r)}`,textContent:r,target:"_blank"}))
var r
a.replaceChildren(e,t[1],n),d(n,()=>p("news","Titan location link"))}const x="News",A="Updates",M=a=>`View ${a} Page 2`,P=(a,e)=>`&nbsp;<a href="${a}&page=2">${M(e)}</a>`
const T=a=>b("PvP Ladder",a.children[1]),D=a=>v(_(a.children[2]))
function N(){w("pageTwoLinks")&&function(){const a=l(`#pCC a[href="${m}"]`)
if(!a)return
k(a,P(m,A))
const e=l(`#pCC a[href="${u}"]`)
k(e,P(u,x))
const s=h("news_left_column")
1===s.length&&d(s[0],a=>{_(a.target)===M(A)&&p(x,M(A)),_(a.target)===M(x)&&p(x,M(x))})}(),w("addUfsgLinks")&&(a('.news_body img[src*="/creatures/"]').forEach(e($,"news")),a('.news_body a[data-tipped*="/creatures/"],.news_body_tavern a[data-tipped*="/creatures/"]').filter(E).forEach(a=>{const e=s(t,a.dataset.tipped)
y("news",e,a)}),n("news_body_tavern",r()).filter(j).forEach(U)),w("trackLadderReset")&&function(){const a=n("news_head_tavern",r()).filter(T).map(D),e=Math.max.apply(null,a)
e>w(C)&&g(C,e)}()}export{N as default}
//# sourceMappingURL=news-CkCPV_XQ.js.map
