import{g as t,c as n}from"./colouredDots-eBcyl-KU.js"
import{x as e,p as s,b_ as o,r as a,cX as i,q as r,v as c,bO as l,m as f,d as u,i as d,ai as p,aa as m,bP as g,k as h,az as b,cY as C,K as j,br as N,o as L,s as w,G as S,H as k,c as M,c3 as $,a$ as y,g as H,D as T,ae as x,l as v,b as B,cZ as E,c_ as P,aT as G,w as I,c$ as R,aC as X,a8 as A,ag as _}from"./calfSystem-G1dN925O.js"
import{l as D}from"./lastActivity-AD7TXVQF.js"
import{s as O}from"./setTipped-G-gV03my.js"
import{a as V}from"./addCommas-olJWnOGa.js"
import{c as F}from"./createStyle-kdSx2xlE.js"
import{a as Q,g as W,c as Y,b as Z}from"./levelHighlight-WJ2CNHUv.js"
import q from"./compressBio-1rcmWPeN.js"
import{b as z}from"./batch-0zyYgCi-.js"
import{g as K}from"./getPlayerId-E_vX5Gmd.js"
import{o as U}from"./openQuickBuffById-thDk1sOL.js"
import{d as J}from"./dataRows-o1cWPBFh.js"
import{c as tt}from"./createSpan-E64hPGZD.js"
import{h as nt}from"./hideElement-RABq1RME.js"
import{s as et}from"./simpleCheckbox-8V_A9jhn.js"
import{r as st}from"./regExpGroups-4702yhMp.js"
import{c as ot}from"./createButton-LCF-b91n.js"
import"./onlineDot-BePpx2CP.js"
import"./now-pQzGw6vd.js"
import"./asInt-PKKHs1-a.js"
import"./valueText-890HKMma.js"
import"./intValue-JHhLnq8V.js"
import"./createInput-3jwazPKd.js"
import"./createLabel-LvV0YfxP.js"
import"./fshOpen-16hNCxKt.js"
import"./isChecked-k2ijSL8v.js"
const at=0,it=1
function rt(t,n){const{mins:e}=D(n.dataset.tipped)
return e<44640&&(t[at]+=1,t[it]+=Number(a(i,n.dataset.tipped))),t}function ct(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(rt,[0,0])}(e)
n.classList.add("tip-static"),O(`Active: ${s[at]}/${e.length}<br>Stamina: ${V(s[it])}`,n)}}function lt(t,n){const e=a(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function ft(t){const n=t.dataset.tipped,e=lt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=lt(n,/XP: <b>(?<realXp>\d*)/)
c(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+V(t-n)}(s,e)}</b>)`)}function ut(){const t=r('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&ft(t)}let dt=0,pt=0
function mt(t){return dt&&t>=Q()&&t<=W()}function gt(t){return pt&&t>=Y()&&t<=Z()}const ht=t=>[t,D(t.dataset.tipped).days],bt=([,t])=>t<7,Ct=([t])=>[t,Number(a(C,t.dataset.tipped))],jt=([t,n])=>[t.parentNode.parentNode.rowIndex,mt(n),gt(n)]
const Nt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Lt(t,n){if(t.length){const e=`${Nt(t)} {background-color: #${n};}`
d(document.body,F(e))}}function wt(){const t=h('#pCC a[data-tipped*="<td>VL:</td>"]').map(ht).filter(bt).map(Ct).map(jt),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Lt(n,"4671C8"),Lt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=b(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function St(){Number(m("guild_id"))!==g()&&(dt||pt)&&wt()}function kt(){dt=p("highlightPlayersNearMyLvl"),pt=p("highlightGvGPlayersNearMyLvl"),St(),p("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
u("",n),d(n,o),q()}()}function Mt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function $t(t){"smallLink"===t.target.className&&(w("guild","buffLinks"),U(K(t.target.previousElementSibling.href)))}function yt(){const t=j(`#pCC a[href^="${N}"]`)
z([3,t,0,Mt]),L(s(),$t)}function Ht(t){return S({cmd:"guild",subcmd:"conflicts",page:t})}function Tt(t,n){u(n,t.insertCell(-1))}function xt(t,n,e){const s=t.insertRow(t.rows.length-2)
return Tt(s,n),Tt(s,e),s}function vt(t,n){xt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Bt(t,n,e){1===n&&function(t){const n=xt(t,`<a href="${$}conflicts">Active Conflicts</a>`,"Score")
L(n,(t=>{"A"===t.target.tagName&&w("guildManage","conflictHeader")}))}(e),J(t,7,0).forEach(M(vt,e))}function Et(t,n){const e=k(n),s=r('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=r("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Bt(s,n,e)}(e,o,t.node),a>o&&async function(t,n,e){n(e,await Ht(t+1))}(o,Et,t)}async function Pt(t){const[n]=t.rows[6].cells[0].children
if(n){Et({node:n},await Ht(1))}}function Gt(t){const n=t.target.dataset.linkto
w("guildManage","toggleVisibilty",n)
const e=H(n)
if(!e)return
const s=T("fshHide",e)
e.classList.toggle("fshHide"),x(n,s?"":"ON")}function It(t,n,e){const s=function(t){return tt({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=tt({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),c(n,"&nbsp;]"),n}(s)),n.id=e,p(e)&&nt(n),L(s,Gt)}function Rt(t){It(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xt(t){const n=t.rows[4].cells[1].children[0]
u(y(n.innerHTML),n),It(n,t.rows[6].cells[0].children[0],"statisticsControl")}function At(t){const n=t.rows[15]?.cells[1].children[0]
n&&It(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let _t=0
function Dt(t){const n=function(t){const{stam:n,max:e}=st(i,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Ot(t){_t?_t.disabled=!t:function(){const t=b(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=h(v,n).map(Dt).join("\n")
_t=d(document.body,F(e)).sheet}()}const Vt="enableStamBars"
let Ft=0
function Qt(){Ft=!Ft,x(Vt,Ft),Ot(Ft),w("guildManage","StamBars")}function Wt(){!function(){if(!r("#pCC img.guild_openGuildStore"))return
const t=d(s(),f({innerHTML:et(Vt),style:{marginLeft:"66%"}}))
B(t,"change",Qt)}(),Ft=p(Vt),Ft&&Ot(Ft)}function Yt(t){t.target.id===E&&(w("Guild Tracker","togglePref"),x(E,t.target.checked))}function Zt(){w("Guild Tracker","showTracker"),P()}function qt(){const t=r("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${et(E)}&nbsp;`})
B(e,"change",Yt)
const s=ot({textContent:"Show"})
L(s,Zt),d(e,s),d(n,e)}function zt(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
u(`[ <a href="${$}reliclist">Control</a> ]&nbsp;`,s),L(s,(t=>{"A"===t.target.tagName&&w("guildManage","relic control")}))}function Kt(t){const n=b("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
c(e,`<li><a href="${R}${X()}">Self Recall</a></li>`),L(e,(t=>{"Self Recall"===A(t.target)&&w("guildManage","Self Recall")}))}function Ut(t,n){G(3,n,[t])}function Jt(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Rt,Xt,At,zt,Kt].forEach(M(Ut,t))}(t),p("showBuffLinks")&&G(3,yt),function(t){I()||(p("detailedConflictInfo")&&G(3,Pt,[t]),G(4,qt))}(t),Wt())}function tn(){G(3,n),G(3,ut),G(3,ct),["-","manage"].includes(_.subcmd)&&Jt(),"view"===_.subcmd&&kt()}export{tn as default}
//# sourceMappingURL=injectGuild-bnAoEAG4.js.map
