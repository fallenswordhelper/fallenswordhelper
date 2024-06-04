import{g as t,c as n}from"./colouredDots-DmxXrKj6.js"
import{x as e,p as s,b$ as o,r as a,cW as i,ai as r,az as c,bP as l,i as u,m as f,b as d,s as p,ae as m,q as g,v as h,d as b,aa as C,bQ as N,k as j,cX as L,K as k,br as w,o as y,G as M,H as S,c as $,c4 as H,a$ as T,bH as x,g as v,D as B,l as P,cY as R,cZ as G,aT as I,w as E,c_ as X,aC as A,a8 as _,ag as D}from"./calfSystem-wTzwei3t.js"
import{l as F}from"./lastActivity-BAN2lPMa.js"
import{s as V}from"./setTipped-_gKWzwad.js"
import{a as O}from"./addCommas-C_h2HN8s.js"
import{c as W}from"./closestTable-D1tzatJG.js"
import{s as Q}from"./simpleCheckbox-o27N70bG.js"
import{c as Z}from"./createStyle-XikBtHtE.js"
import{a as q,g as z,c as K,b as U}from"./levelHighlight--LzzvzYB.js"
import Y from"./compressBio-0tBPn__h.js"
import{b as J}from"./batch-B2xhIuNE.js"
import{g as tt}from"./getPlayerId-DXzgWTxI.js"
import{o as nt}from"./openQuickBuffById-BBtUx2eO.js"
import{d as et}from"./dataRows-DqF7itiP.js"
import{c as st}from"./createSpan-D9J62kLX.js"
import{r as ot}from"./regExpGroups-B8v1pE-x.js"
import{c as at}from"./createButton-BsFpPtX8.js"
import"./onlineDot-Cp1ex2F9.js"
import"./now-Cx4PsKjI.js"
import"./isChecked-D_0do7nT.js"
import"./asInt-DcpIJRg8.js"
import"./valueText-CDmZqpbc.js"
import"./intValue-C7nTQec1.js"
import"./createInput-CrpQJ-TY.js"
import"./createLabel-CDsTno_0.js"
import"./fshOpen-AuKioUPF.js"
const it=0,rt=1
function ct(t,n){const{mins:e}=F(n.dataset.tipped)
return e<44640&&(t[it]+=1,t[rt]+=Number(a(i,n.dataset.tipped))),t}function lt(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ct,[0,0])}(e)
n.classList.add("tip-static"),V(`Active: ${s[it]}/${e.length}<br>Stamina: ${O(s[rt])}`,n)}}const ut="compactRanks"
let ft=0
function dt(){const t=c(l,s())
t[t.length-1].classList.toggle("compact-ranks",ft)}function pt(){p("guild","compactRanks"),ft=!ft,m(ut,ft),dt()}function mt(){s()&&(!function(){const t=c(l,s()),n=t[t.length-1],e=u(W(n.parentNode).parentNode,f({innerHTML:Q(ut),style:{textAlign:"center"}}))
d(e,"change",pt)}(),ft=r(ut),ft&&dt())}function gt(t,n){const e=a(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function ht(t){const n=t.dataset.tipped,e=gt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=gt(n,/XP: <b>(?<realXp>\d*)/)
h(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+O(t-n)}(s,e)}</b>)`)}function bt(){const t=g('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&ht(t)}let Ct=0,Nt=0
function jt(t){return Ct&&t>=q()&&t<=z()}function Lt(t){return Nt&&t>=K()&&t<=U()}const kt=t=>[t,F(t.dataset.tipped).days],wt=([,t])=>t<7,yt=([t])=>[t,Number(a(L,t.dataset.tipped))],Mt=([t,n])=>[t.parentNode.parentNode.rowIndex,jt(n),Lt(n)]
const St=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function $t(t,n){if(t.length){const e=`${St(t)} {background-color: #${n};}`
u(document.body,Z(e))}}function Ht(){const t=j('#pCC a[data-tipped*="<td>VL:</td>"]').map(kt).filter(wt).map(yt).map(Mt),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
$t(n,"4671C8"),$t(e,"FF9900"),function(t,n){if(t.length+n.length){const t=c(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function Tt(){Number(C("guild_id"))!==N()&&(Ct||Nt)&&Ht()}function xt(){Ct=r("highlightPlayersNearMyLvl"),Nt=r("highlightGvGPlayersNearMyLvl"),Tt(),r("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
b("",n),u(n,o),Y()}()}function vt(t){h(t.parentNode,' <span class="smallLink">[b]</span>')}function Bt(t){"smallLink"===t.target.className&&(p("guild","buffLinks"),nt(tt(t.target.previousElementSibling.href)))}function Pt(){const t=k(`#pCC a[href^="${w}"]`)
J([3,t,0,vt]),y(s(),Bt)}function Rt(t){return M({cmd:"guild",subcmd:"conflicts",page:t})}function Gt(t,n){b(n,t.insertCell(-1))}function It(t,n,e){const s=t.insertRow(t.rows.length-2)
return Gt(s,n),Gt(s,e),s}function Et(t,n){It(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Xt(t,n,e){1===n&&function(t){const n=It(t,`<a href="${H}conflicts">Active Conflicts</a>`,"Score")
y(n,(t=>{"A"===t.target.tagName&&p("guildManage","conflictHeader")}))}(e),et(t,7,0).forEach($(Et,e))}function At(t,n){const e=S(n),s=g('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=g("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Xt(s,n,e)}(e,o,t.node),a>o&&async function(t,n,e){n(e,await Rt(t+1))}(o,At,t)}async function _t(t){const[n]=t.rows[6].cells[0].children
if(n){At({node:n},await Rt(1))}}function Dt(t){const n=t.target.dataset.linkto
p("guildManage","toggleVisibilty",n)
const e=v(n)
if(!e)return
const s=B("fshHide",e)
e.classList.toggle("fshHide"),m(n,s?"":"ON")}function Ft(t,n,e){const s=function(t){return st({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
u(t,function(t){const n=st({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return u(n,t),h(n,"&nbsp;]"),n}(s)),n.id=e,r(e)&&x(n),y(s,Dt)}function Vt(t){Ft(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Ot(t){const n=t.rows[4].cells[1].children[0]
b(T(n.innerHTML),n),Ft(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Wt(t){const n=t.rows[15]?.cells[1].children[0]
n&&Ft(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Qt=0
function Zt(t){const n=function(t){const{stam:n,max:e}=ot(i,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function qt(t){Qt?Qt.disabled=!t:function(){const t=c(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=j(P,n).map(Zt).join("\n")
Qt=u(document.body,Z(e)).sheet}()}const zt="enableStamBars"
let Kt=0
function Ut(){Kt=!Kt,m(zt,Kt),qt(Kt),p("guildManage","StamBars")}function Yt(){!function(){if(!g("#pCC img.guild_openGuildStore"))return
const t=c(l,s()),n=t[t.length-1],e=u(W(n.parentNode).parentNode,f({innerHTML:Q(zt),style:{marginBottom:"5px",textAlign:"center"}}))
d(e,"change",Ut)}(),Kt=r(zt),Kt&&qt(Kt)}function Jt(t){t.target.id===R&&(p("Guild Tracker","togglePref"),m(R,t.target.checked))}function tn(){p("Guild Tracker","showTracker"),G()}function nn(){const t=g("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${Q(R)}&nbsp;`})
d(e,"change",Jt)
const s=at({textContent:"Show"})
y(s,tn),u(e,s),u(n,e)}function en(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
b(`[ <a href="${H}reliclist">Control</a> ]&nbsp;`,s),y(s,(t=>{"A"===t.target.tagName&&p("guildManage","relic control")}))}function sn(t){const n=c("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
h(e,`<li><a href="${X}${A()}">Self Recall</a></li>`),y(e,(t=>{"Self Recall"===_(t.target)&&p("guildManage","Self Recall")}))}function on(t,n){I(3,n,[t])}function an(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Vt,Ot,Wt,en,sn].forEach($(on,t))}(t),r("showBuffLinks")&&I(3,Pt),function(t){E()||(r("detailedConflictInfo")&&I(3,_t,[t]),I(4,nn))}(t),Yt())}function rn(){I(3,n),I(3,bt),I(3,lt),I(3,mt),["-","manage"].includes(D.subcmd)&&an(),"view"===D.subcmd&&xt()}export{rn as default}
//# sourceMappingURL=injectGuild-CnPwy9Ua.js.map
