import{g as t,c as n}from"./colouredDots-C7OWUwMT.js"
import{x as e,p as s,c3 as o,r as a,d1 as i,aB as r,bV as c,ai as l,i as f,m as u,b as d,s as p,ae as m,q as g,v as h,d as b,aa as C,bW as N,k as j,d2 as L,K as k,bt as w,o as M,G as S,H as y,c as x,c8 as T,b1 as H,bM as $,g as v,D as B,l as P,d3 as R,d4 as G,aV as I,w as A,d5 as E,aD as X,a8 as V,ag as D}from"./calfSystem-DKih1pr1.js"
import{l as _}from"./lastActivity-B9dWGMXL.js"
import{s as F}from"./setTipped-_gKWzwad.js"
import{a as O}from"./addCommas-C_h2HN8s.js"
import{c as W}from"./closestTable-BpwC4ZYl.js"
import{s as q}from"./simpleCheckbox-Cd5715L9.js"
import{c as K}from"./createStyle-jI9LXehj.js"
import{a as Q,g as Y,c as z,b as J}from"./levelHighlight-f_dkWKmS.js"
import U from"./compressBio-CrmhpqUO.js"
import{b as Z}from"./batch-mrnrvHBt.js"
import{g as tt}from"./getPlayerId--i8h5tnr.js"
import{o as nt}from"./openQuickBuffById-BmTGeK5F.js"
import{d as et}from"./dataRows-pIOsvCP1.js"
import{c as st}from"./createSpan-CQ7ABMtY.js"
import{r as ot}from"./regExpGroups-BwTAtkeC.js"
import{c as at}from"./createButton-CRrI1WBX.js"
import"./onlineDot-DfWhjgNs.js"
import"./isChecked-D_0do7nT.js"
import"./asInt-IcDDYOt_.js"
import"./valueText-jeQmVqbY.js"
import"./intValue-C7nTQec1.js"
import"./createInput-VVeCYc9A.js"
import"./createLabel-D7FcuNQk.js"
import"./fshOpen-AuKioUPF.js"
const it=0,rt=1
function ct(t,n){const{mins:e}=_(n.dataset.tipped)
return e<44640&&(t[it]+=1,t[rt]+=Number(a(i,n.dataset.tipped))),t}function lt(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ct,[0,0])}(e)
n.classList.add("tip-static"),F(`Active: ${s[it]}/${e.length}<br>Stamina: ${O(s[rt])}`,n)}}const ft="compactRanks"
let ut=0,dt=0
function pt(){dt.classList.toggle("compact-ranks",ut)}function mt(){p("guild","compactRanks"),ut=!ut,m(ft,ut),pt()}function gt(){if(!s())return
const t=r(c,s())
dt=t[t.length-1],dt&&(!function(){const t=f(W(dt.parentNode).parentNode,u({innerHTML:q(ft),style:{textAlign:"center"}}))
d(t,"change",mt)}(),ut=l(ft),ut&&pt())}function ht(t,n){const e=a(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function bt(t){const n=t.dataset.tipped,e=ht(n,/XP Lock: <b>(?<lockXp>\d*)/),s=ht(n,/XP: <b>(?<realXp>\d*)/)
h(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+O(t-n)}(s,e)}</b>)`)}function Ct(){const t=g('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&bt(t)}let Nt=0,jt=0
function Lt(t){return Nt&&t>=Q()&&t<=Y()}function kt(t){return jt&&t>=z()&&t<=J()}const wt=t=>[t,_(t.dataset.tipped).days],Mt=([,t])=>t<7,St=([t])=>[t,Number(a(L,t.dataset.tipped))],yt=([t,n])=>[t.parentNode.parentNode.rowIndex,Lt(n),kt(n)]
const xt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Tt(t,n){if(t.length){const e=`${xt(t)} {background-color: #${n};}`
f(document.body,K(e))}}function Ht(){const t=j('#pCC a[data-tipped*="<td>VL:</td>"]').map(wt).filter(Mt).map(St).map(yt),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Tt(n,"4671C8"),Tt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=r(c,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function $t(){Number(C("guild_id"))!==N()&&(Nt||jt)&&Ht()}function vt(){Nt=l("highlightPlayersNearMyLvl"),jt=l("highlightGvGPlayersNearMyLvl"),$t(),l("enableHistoryCompressor")&&function(){const t=e(c,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=u({id:"profile-bio",innerHTML:n.innerHTML})
b("",n),f(n,o),U()}()}function Bt(t){h(t.parentNode,' <span class="smallLink">[b]</span>')}function Pt(t){"smallLink"===t.target.className&&(p("guild","buffLinks"),nt(tt(t.target.previousElementSibling.href)))}function Rt(){const t=k(`#pCC a[href^="${w}"]`)
Z([3,t,0,Bt]),M(s(),Pt)}function Gt(t){return S({cmd:"guild",subcmd:"conflicts",page:t})}function It(t,n){b(n,t.insertCell(-1))}function At(t,n,e){const s=t.insertRow(t.rows.length-2)
return It(s,n),It(s,e),s}function Et(t,n){At(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Xt(t,n,e){1===n&&function(t){const n=At(t,`<a href="${T}conflicts">Active Conflicts</a>`,"Score")
M(n,(t=>{"A"===t.target.tagName&&p("guildManage","conflictHeader")}))}(e),et(t,7,0).forEach(x(Et,e))}function Vt(t,n){const e=y(n),s=g('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=g("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Xt(s,n,e)}(e,o,t.node),a>o&&async function(t,n,e){n(e,await Gt(t+1))}(o,Vt,t)}async function Dt(t){const[n]=t.rows[6].cells[0].children
if(n){Vt({node:n},await Gt(1))}}function _t(t){const n=t.target.dataset.linkto
p("guildManage","toggleVisibilty",n)
const e=v(n)
if(!e)return
const s=B("fshHide",e)
e.classList.toggle("fshHide"),m(n,s?"":"ON")}function Ft(t,n,e){const s=function(t){return st({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
f(t,function(t){const n=st({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return f(n,t),h(n,"&nbsp;]"),n}(s)),n.id=e,l(e)&&$(n),M(s,_t)}function Ot(t){Ft(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Wt(t){const n=t.rows[4].cells[1].children[0]
b(H(n.innerHTML),n),Ft(n,t.rows[6].cells[0].children[0],"statisticsControl")}function qt(t){const n=t.rows[15]?.cells[1].children[0]
n&&Ft(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Kt=0
function Qt(t){const n=function(t){const{stam:n,max:e}=ot(i,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Yt(t){Kt?Kt.disabled=!t:function(){const t=r(c,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=j(P,n).map(Qt).join("\n")
Kt=f(document.body,K(e)).sheet}()}const zt="enableStamBars"
let Jt=0
function Ut(){Jt=!Jt,m(zt,Jt),Yt(Jt),p("guildManage","StamBars")}function Zt(){!function(){if(!g("#pCC img.guild_openGuildStore"))return
const t=r(c,s()),n=t[t.length-1],e=f(W(n.parentNode).parentNode,u({innerHTML:q(zt),style:{marginBottom:"5px",textAlign:"center"}}))
d(e,"change",Ut)}(),Jt=l(zt),Jt&&Yt(Jt)}function tn(t){t.target.id===R&&(p("Guild Tracker","togglePref"),m(R,t.target.checked))}function nn(){p("Guild Tracker","showTracker"),G()}function en(){const t=g("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=u({className:"fsh-tracker",innerHTML:`${q(R)}&nbsp;`})
d(e,"change",tn)
const s=at({textContent:"Show"})
M(s,nn),f(e,s),f(n,e)}function sn(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
b(`[ <a href="${T}reliclist">Control</a> ]&nbsp;`,s),M(s,(t=>{"A"===t.target.tagName&&p("guildManage","relic control")}))}function on(t){const n=r("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
h(e,`<li><a href="${E}${X()}">Self Recall</a></li>`),M(e,(t=>{"Self Recall"===V(t.target)&&p("guildManage","Self Recall")}))}function an(t,n){I(3,n,[t])}function rn(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Ot,Wt,qt,sn,on].forEach(x(an,t))}(t),l("showBuffLinks")&&I(3,Rt),function(t){A()||(l("detailedConflictInfo")&&I(3,Dt,[t]),I(4,en))}(t),Zt())}function cn(){I(3,n),I(3,Ct),I(3,lt),I(3,gt),["-","manage"].includes(D.subcmd)&&rn(),"view"===D.subcmd&&vt()}export{cn as default}
//# sourceMappingURL=injectGuild-BGF8f-Ie.js.map
