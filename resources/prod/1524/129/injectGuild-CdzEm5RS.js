import{g as t,c as n}from"./colouredDots-ib5-6Jcx.js"
import{x as e,p as s,bZ as o,r as a,cU as i,az as r,bP as c,ai as l,i as u,m as f,b as d,s as p,ae as m,q as g,v as h,d as b,aa as N,bQ as C,k as j,cV as L,K as k,br as w,o as y,G as M,H as S,c as H,c2 as T,a$ as $,bH as x,g as v,D as B,l as P,cW as R,cX as G,aT as I,w as E,cY as X,aB as A,a8 as V,ag as D}from"./calfSystem-B3Rc3sVt.js"
import{l as F}from"./lastActivity-BgsKIp89.js"
import{s as _}from"./setTipped-_gKWzwad.js"
import{a as O}from"./addCommas-C_h2HN8s.js"
import{c as W}from"./closestTable-B05V59ae.js"
import{s as Q}from"./simpleCheckbox-GbncCCAy.js"
import{c as U}from"./createStyle-CVX4cKSa.js"
import{a as Z,g as q,c as z,b as K}from"./levelHighlight-B2sCSPLC.js"
import Y from"./compressBio-8pjdBYlr.js"
import{b as J}from"./batch-CfGkHlVT.js"
import{g as tt}from"./getPlayerId-eaIUoNVO.js"
import{o as nt}from"./openQuickBuffById-DvUp3MEg.js"
import{d as et}from"./dataRows-C8bVqiN8.js"
import{c as st}from"./createSpan-BijJLylv.js"
import{r as ot}from"./regExpGroups-FpltS5mc.js"
import{c as at}from"./createButton-C6yMeDuh.js"
import"./onlineDot-BW5panV2.js"
import"./now-Cx4PsKjI.js"
import"./isChecked-D_0do7nT.js"
import"./asInt-Ba7iwPlc.js"
import"./valueText-DQH4h23_.js"
import"./intValue-C7nTQec1.js"
import"./createInput-Cnq0MlYd.js"
import"./createLabel-CFILWV_T.js"
import"./fshOpen-AuKioUPF.js"
const it=0,rt=1
function ct(t,n){const{mins:e}=F(n.dataset.tipped)
return e<44640&&(t[it]+=1,t[rt]+=Number(a(i,n.dataset.tipped))),t}function lt(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ct,[0,0])}(e)
n.classList.add("tip-static"),_(`Active: ${s[it]}/${e.length}<br>Stamina: ${O(s[rt])}`,n)}}const ut="compactRanks"
let ft=0,dt=0
function pt(){dt.classList.toggle("compact-ranks",ft)}function mt(){p("guild","compactRanks"),ft=!ft,m(ut,ft),pt()}function gt(){if(!s())return
const t=r(c,s())
dt=t[t.length-1],dt&&(!function(){const t=u(W(dt.parentNode).parentNode,f({innerHTML:Q(ut),style:{textAlign:"center"}}))
d(t,"change",mt)}(),ft=l(ut),ft&&pt())}function ht(t,n){const e=a(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function bt(t){const n=t.dataset.tipped,e=ht(n,/XP Lock: <b>(?<lockXp>\d*)/),s=ht(n,/XP: <b>(?<realXp>\d*)/)
h(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+O(t-n)}(s,e)}</b>)`)}function Nt(){const t=g('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&bt(t)}let Ct=0,jt=0
function Lt(t){return Ct&&t>=Z()&&t<=q()}function kt(t){return jt&&t>=z()&&t<=K()}const wt=t=>[t,F(t.dataset.tipped).days],yt=([,t])=>t<7,Mt=([t])=>[t,Number(a(L,t.dataset.tipped))],St=([t,n])=>[t.parentNode.parentNode.rowIndex,Lt(n),kt(n)]
const Ht=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Tt(t,n){if(t.length){const e=`${Ht(t)} {background-color: #${n};}`
u(document.body,U(e))}}function $t(){const t=j('#pCC a[data-tipped*="<td>VL:</td>"]').map(wt).filter(yt).map(Mt).map(St),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Tt(n,"4671C8"),Tt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=r(c,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function xt(){Number(N("guild_id"))!==C()&&(Ct||jt)&&$t()}function vt(){Ct=l("highlightPlayersNearMyLvl"),jt=l("highlightGvGPlayersNearMyLvl"),xt(),l("enableHistoryCompressor")&&function(){const t=e(c,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
b("",n),u(n,o),Y()}()}function Bt(t){h(t.parentNode,' <span class="smallLink">[b]</span>')}function Pt(t){"smallLink"===t.target.className&&(p("guild","buffLinks"),nt(tt(t.target.previousElementSibling.href)))}function Rt(){const t=k(`#pCC a[href^="${w}"]`)
J([3,t,0,Bt]),y(s(),Pt)}function Gt(t){return M({cmd:"guild",subcmd:"conflicts",page:t})}function It(t,n){b(n,t.insertCell(-1))}function Et(t,n,e){const s=t.insertRow(t.rows.length-2)
return It(s,n),It(s,e),s}function Xt(t,n){Et(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function At(t,n,e){1===n&&function(t){const n=Et(t,`<a href="${T}conflicts">Active Conflicts</a>`,"Score")
y(n,(t=>{"A"===t.target.tagName&&p("guildManage","conflictHeader")}))}(e),et(t,7,0).forEach(H(Xt,e))}function Vt(t,n){const e=S(n),s=g('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=g("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&At(s,n,e)}(e,o,t.node),a>o&&async function(t,n,e){n(e,await Gt(t+1))}(o,Vt,t)}async function Dt(t){const[n]=t.rows[6].cells[0].children
if(n){Vt({node:n},await Gt(1))}}function Ft(t){const n=t.target.dataset.linkto
p("guildManage","toggleVisibilty",n)
const e=v(n)
if(!e)return
const s=B("fshHide",e)
e.classList.toggle("fshHide"),m(n,s?"":"ON")}function _t(t,n,e){const s=function(t){return st({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
u(t,function(t){const n=st({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return u(n,t),h(n,"&nbsp;]"),n}(s)),n.id=e,l(e)&&x(n),y(s,Ft)}function Ot(t){_t(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Wt(t){const n=t.rows[4].cells[1].children[0]
b($(n.innerHTML),n),_t(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Qt(t){const n=t.rows[15]?.cells[1].children[0]
n&&_t(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Ut=0
function Zt(t){const n=function(t){const{stam:n,max:e}=ot(i,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function qt(t){Ut?Ut.disabled=!t:function(){const t=r(c,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=j(P,n).map(Zt).join("\n")
Ut=u(document.body,U(e)).sheet}()}const zt="enableStamBars"
let Kt=0
function Yt(){Kt=!Kt,m(zt,Kt),qt(Kt),p("guildManage","StamBars")}function Jt(){!function(){if(!g("#pCC img.guild_openGuildStore"))return
const t=r(c,s()),n=t[t.length-1],e=u(W(n.parentNode).parentNode,f({innerHTML:Q(zt),style:{marginBottom:"5px",textAlign:"center"}}))
d(e,"change",Yt)}(),Kt=l(zt),Kt&&qt(Kt)}function tn(t){t.target.id===R&&(p("Guild Tracker","togglePref"),m(R,t.target.checked))}function nn(){p("Guild Tracker","showTracker"),G()}function en(){const t=g("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${Q(R)}&nbsp;`})
d(e,"change",tn)
const s=at({textContent:"Show"})
y(s,nn),u(e,s),u(n,e)}function sn(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
b(`[ <a href="${T}reliclist">Control</a> ]&nbsp;`,s),y(s,(t=>{"A"===t.target.tagName&&p("guildManage","relic control")}))}function on(t){const n=r("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
h(e,`<li><a href="${X}${A()}">Self Recall</a></li>`),y(e,(t=>{"Self Recall"===V(t.target)&&p("guildManage","Self Recall")}))}function an(t,n){I(3,n,[t])}function rn(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Ot,Wt,Qt,sn,on].forEach(H(an,t))}(t),l("showBuffLinks")&&I(3,Rt),function(t){E()||(l("detailedConflictInfo")&&I(3,Dt,[t]),I(4,en))}(t),Jt())}function cn(){I(3,n),I(3,Nt),I(3,lt),I(3,gt),["-","manage"].includes(D.subcmd)&&rn(),"view"===D.subcmd&&vt()}export{cn as default}
//# sourceMappingURL=injectGuild-CdzEm5RS.js.map
