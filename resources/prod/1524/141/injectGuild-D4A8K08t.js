import{g as t,c as n}from"./colouredDots-C78onBfn.js"
import{x as e,p as s,c3 as o,r as a,d1 as i,aB as r,bV as c,i as l,k as u,o as f,s as d,ad as p,ai as m,q as g,v as h,c as b,aa as C,bW as N,n as j,d2 as L,K as k,bt as w,e as M,G as y,J as S,c8 as x,b as T,bM as $,g as H,D as v,b1 as B,t as G,d3 as P,d4 as R,d5 as A,aC as I,a8 as E,aV as V,w as X,ag as D}from"./calfSystem-Blt4DbaE.js"
import{l as Q}from"./lastActivity-E8nkj_ho.js"
import{s as _}from"./setTipped-_gKWzwad.js"
import{a as F}from"./addCommas-C_h2HN8s.js"
import{c as K}from"./closestTable-Ddgm5m0P.js"
import{s as O}from"./simpleCheckbox-CjFtWivg.js"
import{c as W}from"./createStyle-C5mK_M_l.js"
import{a as q,g as z,c as J,b as U}from"./levelHighlight-DkyDPktg.js"
import Y from"./compressBio-CM6ySoRG.js"
import{b as Z}from"./batch-C_j5R0ng.js"
import{g as tt}from"./getPlayerId-Ck17Fcst.js"
import{o as nt}from"./openQuickBuffById-AG7prqnJ.js"
import{d as et}from"./dataRows-B6_VtVvQ.js"
import{c as st}from"./createSpan-qOSQqjTl.js"
import{r as ot}from"./regExpGroups-B7iOxfb4.js"
import{c as at}from"./createButton-BLPmyJcZ.js"
import"./onlineDot-KmDOLCpD.js"
import"./isChecked-D_0do7nT.js"
import"./asInt-CnZ3Wv3g.js"
import"./valueText-CRDZBw-0.js"
import"./intValue-C7nTQec1.js"
import"./createInput-CZBTxG_u.js"
import"./createLabel-Ci_22opB.js"
import"./fshOpen-AuKioUPF.js"
const it=0,rt=1
function ct(t,n){const{mins:e}=Q(n.dataset.tipped)
return e<44640&&(t[it]+=1,t[rt]+=Number(a(i,n.dataset.tipped))),t}function lt(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ct,[0,0])}(e)
n.classList.add("tip-static"),_(`Active: ${s[it]}/${e.length}<br>Stamina: ${F(s[rt])}`,n)}}const ut="compactRanks"
let ft=0,dt=0
function pt(){dt.classList.toggle("compact-ranks",ft)}function mt(){d("guild","compactRanks"),ft=!ft,p(ut,ft),pt()}function gt(){if(!s())return
const t=r(c,s())
dt=t[t.length-1],dt&&(!function(){const t=l(K(dt.parentNode).parentNode,u({innerHTML:O(ut),style:{textAlign:"center"}}))
f(t,"change",mt)}(),ft=m(ut),ft&&pt())}function ht(t,n){const e=a(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function bt(t){const n=t.dataset.tipped,e=ht(n,/XP Lock: <b>(?<lockXp>\d*)/),s=ht(n,/XP: <b>(?<realXp>\d*)/)
h(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+F(t-n)}(s,e)}</b>)`)}function Ct(){const t=g('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&bt(t)}let Nt=0,jt=0
function Lt(t){return Nt&&t>=q()&&t<=z()}function kt(t){return jt&&t>=J()&&t<=U()}const wt=t=>[t,Q(t.dataset.tipped).days],Mt=([,t])=>t<7,yt=([t])=>[t,Number(a(L,t.dataset.tipped))],St=([t,n])=>[t.parentNode.parentNode.rowIndex,Lt(n),kt(n)]
const xt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Tt(t,n){if(t.length){const e=`${xt(t)} {background-color: #${n};}`
l(document.body,W(e))}}function $t(){const t=j('#pCC a[data-tipped*="<td>VL:</td>"]').map(wt).filter(Mt).map(yt).map(St),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Tt(n,"4671C8"),Tt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=r(c,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function Ht(){Number(C("guild_id"))!==N()&&(Nt||jt)&&$t()}function vt(){Nt=m("highlightPlayersNearMyLvl"),jt=m("highlightGvGPlayersNearMyLvl"),Ht(),m("enableHistoryCompressor")&&function(){const t=e(c,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=u({id:"profile-bio",innerHTML:n.innerHTML})
b("",n),l(n,o),Y()}()}function Bt(t){h(t.parentNode,' <span class="smallLink">[b]</span>')}function Gt(t){"smallLink"===t.target.className&&(d("guild","buffLinks"),nt(tt(t.target.previousElementSibling.href)))}function Pt(){const t=k(`#pCC a[href^="${w}"]`)
Z([3,t,0,Bt]),M(s(),Gt)}function Rt(t){return y({cmd:"guild",subcmd:"conflicts",page:t})}function At(t,n){b(n,t.insertCell(-1))}function It(t,n,e){const s=t.insertRow(t.rows.length-2)
return At(s,n),At(s,e),s}function Et(t,n){It(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Vt(t,n,e){1===n&&function(t){const n=It(t,`<a href="${x}conflicts">Active Conflicts</a>`,"Score")
M(n,(t=>{"A"===t.target.tagName&&d("guildManage","conflictHeader")}))}(e),et(t,7,0).forEach(T(Et,e))}function Xt(t,n){const e=S(n),s=g('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=g("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Vt(s,n,e)}(e,o,t.node),a>o&&async function(t,n,e){n(e,await Rt(t+1))}(o,Xt,t)}async function Dt(t){const[n]=t.rows[6].cells[0].children
if(n){Xt({node:n},await Rt(1))}}function Qt(t){const n=t.target.dataset.linkto
d("guildManage","toggleVisibilty",n)
const e=H(n)
if(!e)return
const s=v("fshHide",e)
e.classList.toggle("fshHide"),p(n,s?"":"ON")}function _t(t,n,e){const s=function(t){return st({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
l(t,function(t){const n=st({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return l(n,t),h(n,"&nbsp;]"),n}(s)),n.id=e,m(e)&&$(n),M(s,Qt)}function Ft(t){_t(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Kt(t){const n=t.rows[4].cells[1].children[0]
b(B(n.innerHTML),n),_t(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Ot(t){const n=t.rows[15]?.cells[1].children[0]
n&&_t(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Wt=0
function qt(t){const n=function(t){const{stam:n,max:e}=ot(i,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function zt(t){Wt?Wt.disabled=!t:function(){const t=r(c,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=j(G,n).map(qt).join("\n")
Wt=l(document.body,W(e)).sheet}()}const Jt="enableStamBars"
let Ut=0
function Yt(){Ut=!Ut,p(Jt,Ut),zt(Ut),d("guildManage","StamBars")}function Zt(){!function(){if(!g("#pCC img.guild_openGuildStore"))return
const t=r(c,s()),n=t[t.length-1],e=l(K(n.parentNode).parentNode,u({innerHTML:O(Jt),style:{marginBottom:"5px",textAlign:"center"}}))
f(e,"change",Yt)}(),Ut=m(Jt),Ut&&zt(Ut)}function tn(t){t.target.id===P&&(d("Guild Tracker","togglePref"),p(P,t.target.checked))}function nn(){d("Guild Tracker","showTracker"),R()}function en(){const t=g("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=u({className:"fsh-tracker",innerHTML:`${O(P)}&nbsp;`})
f(e,"change",tn)
const s=at({textContent:"Show"})
M(s,nn),l(e,s),l(n,e)}function sn(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
b(`[ <a href="${x}reliclist">Control</a> ]&nbsp;`,s),M(s,(t=>{"A"===t.target.tagName&&d("guildManage","relic control")}))}function on(t){const n=r("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
h(e,`<li><a href="${A}${I()}">Self Recall</a></li>`),M(e,(t=>{"Self Recall"===E(t.target)&&d("guildManage","Self Recall")}))}function an(t,n){V(3,n,[t])}function rn(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Ft,Kt,Ot,sn,on].forEach(T(an,t))}(t),m("showBuffLinks")&&V(3,Pt),function(t){X()||(m("detailedConflictInfo")&&V(3,Dt,[t]),V(4,en))}(t),Zt())}function cn(){V(3,n),V(3,Ct),V(3,lt),V(3,gt),["-","manage"].includes(D.subcmd)&&rn(),"view"===D.subcmd&&vt()}export{cn as default}
//# sourceMappingURL=injectGuild-D4A8K08t.js.map
