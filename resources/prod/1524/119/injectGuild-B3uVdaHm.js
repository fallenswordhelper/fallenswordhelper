import{g as t,c as n}from"./colouredDots-CbB6pxg8.js"
import{x as e,p as s,b_ as o,r as a,cX as i,q as r,v as c,bO as l,m as f,d as u,i as d,ai as p,aa as m,bP as g,k as h,az as b,cY as C,K as j,br as N,o as L,s as w,G as k,H as S,c as M,c3 as $,a$ as y,g as T,D as H,ae as x,l as v,b as P,cZ as G,c_ as B,aT as E,w as I,c$ as R,aC as X,a8 as _,ag as A}from"./calfSystem-Bit7wh4p.js"
import{l as F}from"./lastActivity-MmXMGhBe.js"
import{s as O}from"./setTipped-_gKWzwad.js"
import{a as V}from"./addCommas-C_h2HN8s.js"
import{c as D}from"./createStyle-DpQOQW1V.js"
import{a as W,g as Z,c as q,b as z}from"./levelHighlight-DtT9TXBN.js"
import K from"./compressBio-F-8mH-nE.js"
import{b as Q}from"./batch-DXm8fBED.js"
import{g as U}from"./getPlayerId-kZSkwpWB.js"
import{o as Y}from"./openQuickBuffById-CejqyxyX.js"
import{d as J}from"./dataRows-B3xlTlPD.js"
import{c as tt}from"./createSpan-Ctesn2Q0.js"
import{h as nt}from"./hideElement--vKgDzDU.js"
import{s as et}from"./simpleCheckbox-B_EbohVT.js"
import{r as st}from"./regExpGroups-B2dSaIn_.js"
import{c as ot}from"./createButton-G25vRD8t.js"
import"./onlineDot-BBzPFxBZ.js"
import"./now-Cx4PsKjI.js"
import"./asInt-ChOO1BWT.js"
import"./valueText-BctNKhqv.js"
import"./intValue-C7nTQec1.js"
import"./createInput-Bw3IEiqp.js"
import"./createLabel-CcGPYvi1.js"
import"./fshOpen-AuKioUPF.js"
import"./isChecked-D_0do7nT.js"
const at=0,it=1
function rt(t,n){const{mins:e}=F(n.dataset.tipped)
return e<44640&&(t[at]+=1,t[it]+=Number(a(i,n.dataset.tipped))),t}function ct(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(rt,[0,0])}(e)
n.classList.add("tip-static"),O(`Active: ${s[at]}/${e.length}<br>Stamina: ${V(s[it])}`,n)}}function lt(t,n){const e=a(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function ft(t){const n=t.dataset.tipped,e=lt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=lt(n,/XP: <b>(?<realXp>\d*)/)
c(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+V(t-n)}(s,e)}</b>)`)}function ut(){const t=r('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&ft(t)}let dt=0,pt=0
function mt(t){return dt&&t>=W()&&t<=Z()}function gt(t){return pt&&t>=q()&&t<=z()}const ht=t=>[t,F(t.dataset.tipped).days],bt=([,t])=>t<7,Ct=([t])=>[t,Number(a(C,t.dataset.tipped))],jt=([t,n])=>[t.parentNode.parentNode.rowIndex,mt(n),gt(n)]
const Nt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Lt(t,n){if(t.length){const e=`${Nt(t)} {background-color: #${n};}`
d(document.body,D(e))}}function wt(){const t=h('#pCC a[data-tipped*="<td>VL:</td>"]').map(ht).filter(bt).map(Ct).map(jt),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Lt(n,"4671C8"),Lt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=b(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function kt(){Number(m("guild_id"))!==g()&&(dt||pt)&&wt()}function St(){dt=p("highlightPlayersNearMyLvl"),pt=p("highlightGvGPlayersNearMyLvl"),kt(),p("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
u("",n),d(n,o),K()}()}function Mt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function $t(t){"smallLink"===t.target.className&&(w("guild","buffLinks"),Y(U(t.target.previousElementSibling.href)))}function yt(){const t=j(`#pCC a[href^="${N}"]`)
Q([3,t,0,Mt]),L(s(),$t)}function Tt(t){return k({cmd:"guild",subcmd:"conflicts",page:t})}function Ht(t,n){u(n,t.insertCell(-1))}function xt(t,n,e){const s=t.insertRow(t.rows.length-2)
return Ht(s,n),Ht(s,e),s}function vt(t,n){xt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Pt(t,n,e){1===n&&function(t){const n=xt(t,`<a href="${$}conflicts">Active Conflicts</a>`,"Score")
L(n,(t=>{"A"===t.target.tagName&&w("guildManage","conflictHeader")}))}(e),J(t,7,0).forEach(M(vt,e))}function Gt(t,n){const e=S(n),s=r('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=r("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Pt(s,n,e)}(e,o,t.node),a>o&&async function(t,n,e){n(e,await Tt(t+1))}(o,Gt,t)}async function Bt(t){const[n]=t.rows[6].cells[0].children
if(n){Gt({node:n},await Tt(1))}}function Et(t){const n=t.target.dataset.linkto
w("guildManage","toggleVisibilty",n)
const e=T(n)
if(!e)return
const s=H("fshHide",e)
e.classList.toggle("fshHide"),x(n,s?"":"ON")}function It(t,n,e){const s=function(t){return tt({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=tt({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),c(n,"&nbsp;]"),n}(s)),n.id=e,p(e)&&nt(n),L(s,Et)}function Rt(t){It(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xt(t){const n=t.rows[4].cells[1].children[0]
u(y(n.innerHTML),n),It(n,t.rows[6].cells[0].children[0],"statisticsControl")}function _t(t){const n=t.rows[15]?.cells[1].children[0]
n&&It(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let At=0
function Ft(t){const n=function(t){const{stam:n,max:e}=st(i,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Ot(t){At?At.disabled=!t:function(){const t=b(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=h(v,n).map(Ft).join("\n")
At=d(document.body,D(e)).sheet}()}const Vt="enableStamBars"
let Dt=0
function Wt(){Dt=!Dt,x(Vt,Dt),Ot(Dt),w("guildManage","StamBars")}function Zt(){!function(){if(!r("#pCC img.guild_openGuildStore"))return
const t=d(s(),f({innerHTML:et(Vt),style:{marginLeft:"66%"}}))
P(t,"change",Wt)}(),Dt=p(Vt),Dt&&Ot(Dt)}function qt(t){t.target.id===G&&(w("Guild Tracker","togglePref"),x(G,t.target.checked))}function zt(){w("Guild Tracker","showTracker"),B()}function Kt(){const t=r("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${et(G)}&nbsp;`})
P(e,"change",qt)
const s=ot({textContent:"Show"})
L(s,zt),d(e,s),d(n,e)}function Qt(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
u(`[ <a href="${$}reliclist">Control</a> ]&nbsp;`,s),L(s,(t=>{"A"===t.target.tagName&&w("guildManage","relic control")}))}function Ut(t){const n=b("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
c(e,`<li><a href="${R}${X()}">Self Recall</a></li>`),L(e,(t=>{"Self Recall"===_(t.target)&&w("guildManage","Self Recall")}))}function Yt(t,n){E(3,n,[t])}function Jt(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Rt,Xt,_t,Qt,Ut].forEach(M(Yt,t))}(t),p("showBuffLinks")&&E(3,yt),function(t){I()||(p("detailedConflictInfo")&&E(3,Bt,[t]),E(4,Kt))}(t),Zt())}function tn(){E(3,n),E(3,ut),E(3,ct),["-","manage"].includes(A.subcmd)&&Jt(),"view"===A.subcmd&&St()}export{tn as default}
//# sourceMappingURL=injectGuild-B3uVdaHm.js.map
