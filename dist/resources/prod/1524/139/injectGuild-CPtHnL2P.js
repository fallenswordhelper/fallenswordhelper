import{g as t,c as n}from"./colouredDots-DAmwta2S.js"
import{x as e,p as s,c3 as o,r as a,d1 as i,aB as r,bV as c,ai as l,i as u,m as f,b as d,s as p,ae as m,q as g,v as h,d as b,aa as C,bW as N,k as j,d2 as L,K as k,bt as w,o as M,G as y,H as S,c as x,c8 as H,b1 as T,bM as $,g as v,D as B,l as G,d3 as P,d4 as R,aV as A,w as I,d5 as E,aC as V,a8 as X,ag as D}from"./calfSystem-B_VkFJhM.js"
import{l as Q}from"./lastActivity-DivsWk_X.js"
import{s as _}from"./setTipped-_gKWzwad.js"
import{a as F}from"./addCommas-C_h2HN8s.js"
import{c as K}from"./closestTable-BxBXuATP.js"
import{s as O}from"./simpleCheckbox-BfC19IlW.js"
import{c as W}from"./createStyle-DRbkdPrg.js"
import{a as q,g as z,c as U,b as Y}from"./levelHighlight-JfL6ZYAj.js"
import J from"./compressBio-DhIKQ2uV.js"
import{b as Z}from"./batch-BvxFKdw5.js"
import{g as tt}from"./getPlayerId-pYa4oQOK.js"
import{o as nt}from"./openQuickBuffById-DWitabpA.js"
import{d as et}from"./dataRows-CqEIMTFB.js"
import{c as st}from"./createSpan-s_SpXH45.js"
import{r as ot}from"./regExpGroups-BcqTkRdL.js"
import{c as at}from"./createButton-BRLkkjaw.js"
import"./onlineDot-B1ly2VXn.js"
import"./isChecked-D_0do7nT.js"
import"./asInt-CypzCRLi.js"
import"./valueText-ChzwPMf9.js"
import"./intValue-C7nTQec1.js"
import"./createInput-Bt-Lww4D.js"
import"./createLabel-Bc4eGR-b.js"
import"./fshOpen-AuKioUPF.js"
const it=0,rt=1
function ct(t,n){const{mins:e}=Q(n.dataset.tipped)
return e<44640&&(t[it]+=1,t[rt]+=Number(a(i,n.dataset.tipped))),t}function lt(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ct,[0,0])}(e)
n.classList.add("tip-static"),_(`Active: ${s[it]}/${e.length}<br>Stamina: ${F(s[rt])}`,n)}}const ut="compactRanks"
let ft=0,dt=0
function pt(){dt.classList.toggle("compact-ranks",ft)}function mt(){p("guild","compactRanks"),ft=!ft,m(ut,ft),pt()}function gt(){if(!s())return
const t=r(c,s())
dt=t[t.length-1],dt&&(!function(){const t=u(K(dt.parentNode).parentNode,f({innerHTML:O(ut),style:{textAlign:"center"}}))
d(t,"change",mt)}(),ft=l(ut),ft&&pt())}function ht(t,n){const e=a(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function bt(t){const n=t.dataset.tipped,e=ht(n,/XP Lock: <b>(?<lockXp>\d*)/),s=ht(n,/XP: <b>(?<realXp>\d*)/)
h(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+F(t-n)}(s,e)}</b>)`)}function Ct(){const t=g('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&bt(t)}let Nt=0,jt=0
function Lt(t){return Nt&&t>=q()&&t<=z()}function kt(t){return jt&&t>=U()&&t<=Y()}const wt=t=>[t,Q(t.dataset.tipped).days],Mt=([,t])=>t<7,yt=([t])=>[t,Number(a(L,t.dataset.tipped))],St=([t,n])=>[t.parentNode.parentNode.rowIndex,Lt(n),kt(n)]
const xt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Ht(t,n){if(t.length){const e=`${xt(t)} {background-color: #${n};}`
u(document.body,W(e))}}function Tt(){const t=j('#pCC a[data-tipped*="<td>VL:</td>"]').map(wt).filter(Mt).map(yt).map(St),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Ht(n,"4671C8"),Ht(e,"FF9900"),function(t,n){if(t.length+n.length){const t=r(c,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function $t(){Number(C("guild_id"))!==N()&&(Nt||jt)&&Tt()}function vt(){Nt=l("highlightPlayersNearMyLvl"),jt=l("highlightGvGPlayersNearMyLvl"),$t(),l("enableHistoryCompressor")&&function(){const t=e(c,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
b("",n),u(n,o),J()}()}function Bt(t){h(t.parentNode,' <span class="smallLink">[b]</span>')}function Gt(t){"smallLink"===t.target.className&&(p("guild","buffLinks"),nt(tt(t.target.previousElementSibling.href)))}function Pt(){const t=k(`#pCC a[href^="${w}"]`)
Z([3,t,0,Bt]),M(s(),Gt)}function Rt(t){return y({cmd:"guild",subcmd:"conflicts",page:t})}function At(t,n){b(n,t.insertCell(-1))}function It(t,n,e){const s=t.insertRow(t.rows.length-2)
return At(s,n),At(s,e),s}function Et(t,n){It(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Vt(t,n,e){1===n&&function(t){const n=It(t,`<a href="${H}conflicts">Active Conflicts</a>`,"Score")
M(n,(t=>{"A"===t.target.tagName&&p("guildManage","conflictHeader")}))}(e),et(t,7,0).forEach(x(Et,e))}function Xt(t,n){const e=S(n),s=g('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=g("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Vt(s,n,e)}(e,o,t.node),a>o&&async function(t,n,e){n(e,await Rt(t+1))}(o,Xt,t)}async function Dt(t){const[n]=t.rows[6].cells[0].children
if(n){Xt({node:n},await Rt(1))}}function Qt(t){const n=t.target.dataset.linkto
p("guildManage","toggleVisibilty",n)
const e=v(n)
if(!e)return
const s=B("fshHide",e)
e.classList.toggle("fshHide"),m(n,s?"":"ON")}function _t(t,n,e){const s=function(t){return st({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
u(t,function(t){const n=st({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return u(n,t),h(n,"&nbsp;]"),n}(s)),n.id=e,l(e)&&$(n),M(s,Qt)}function Ft(t){_t(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Kt(t){const n=t.rows[4].cells[1].children[0]
b(T(n.innerHTML),n),_t(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Ot(t){const n=t.rows[15]?.cells[1].children[0]
n&&_t(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Wt=0
function qt(t){const n=function(t){const{stam:n,max:e}=ot(i,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function zt(t){Wt?Wt.disabled=!t:function(){const t=r(c,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=j(G,n).map(qt).join("\n")
Wt=u(document.body,W(e)).sheet}()}const Ut="enableStamBars"
let Yt=0
function Jt(){Yt=!Yt,m(Ut,Yt),zt(Yt),p("guildManage","StamBars")}function Zt(){!function(){if(!g("#pCC img.guild_openGuildStore"))return
const t=r(c,s()),n=t[t.length-1],e=u(K(n.parentNode).parentNode,f({innerHTML:O(Ut),style:{marginBottom:"5px",textAlign:"center"}}))
d(e,"change",Jt)}(),Yt=l(Ut),Yt&&zt(Yt)}function tn(t){t.target.id===P&&(p("Guild Tracker","togglePref"),m(P,t.target.checked))}function nn(){p("Guild Tracker","showTracker"),R()}function en(){const t=g("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${O(P)}&nbsp;`})
d(e,"change",tn)
const s=at({textContent:"Show"})
M(s,nn),u(e,s),u(n,e)}function sn(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
b(`[ <a href="${H}reliclist">Control</a> ]&nbsp;`,s),M(s,(t=>{"A"===t.target.tagName&&p("guildManage","relic control")}))}function on(t){const n=r("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
h(e,`<li><a href="${E}${V()}">Self Recall</a></li>`),M(e,(t=>{"Self Recall"===X(t.target)&&p("guildManage","Self Recall")}))}function an(t,n){A(3,n,[t])}function rn(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Ft,Kt,Ot,sn,on].forEach(x(an,t))}(t),l("showBuffLinks")&&A(3,Pt),function(t){I()||(l("detailedConflictInfo")&&A(3,Dt,[t]),A(4,en))}(t),Zt())}function cn(){A(3,n),A(3,Ct),A(3,lt),A(3,gt),["-","manage"].includes(D.subcmd)&&rn(),"view"===D.subcmd&&vt()}export{cn as default}
//# sourceMappingURL=injectGuild-CPtHnL2P.js.map
