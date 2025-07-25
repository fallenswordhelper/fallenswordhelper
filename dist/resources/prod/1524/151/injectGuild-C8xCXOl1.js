import{g as t,c as n}from"./colouredDots-Cilnw8M4.js"
import{a5 as e,p as s,cH as a,aN as o,dm as i,r as c,dR as r,b6 as l,cw as u,aB as f,i as d,w as g,b as p,s as m,aw as h,q as b,a3 as N,e as C,as as L,cx as k,k as w,dS as M,ak as S,c3 as j,o as H,aU as $,aV as x,j as y,aZ as T,c as v,cO as R,bx as B,cm as P,aR as G,g as A,ac as E,Z as X,a8 as I,ar as V,dT as _,dU as z,bo as D,a4 as F,dV as O,b8 as U,n as Z,az as q}from"./calfSystem-C1X5YxJZ.js"
import{s as K}from"./setTipped-_gKWzwad.js"
import{c as W}from"./closestTable-STrxtv_E.js"
import{s as J}from"./simpleCheckbox-nwywzlgZ.js"
import{c as Q}from"./createStyle-B0zF0e_c.js"
import{a as Y,g as tt,c as nt,b as et}from"./levelHighlight-DXwvwD_Y.js"
import st from"./compressBio-BLBylLzx.js"
import{b as at}from"./batch-BNBFzvJw.js"
import"./onlineDot-D8QnVOid.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-LMpmIneO.js"
import"./createLabel-BN2NWsP1.js"
const ot=0,it=1
function ct(t,n){const{mins:e}=i(n.dataset.tipped)
return e<44640&&(t[ot]+=1,t[it]+=Number(c(r,n.dataset.tipped))),t}function rt(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ct,[0,0])}(e)
n.classList.add("tip-static"),K(`Active: ${s[ot]}/${e.length}<br>Stamina: ${o(s[it])}`,n)}}const lt="compactRanks"
let ut=0,ft=0
function dt(){ft.classList.toggle("compact-ranks",ut)}function gt(){m("guild","compactRanks"),ut=!ut,h(lt,ut),dt()}function pt(){if(!s())return
const t=l(u,s())
ft=t[t.length-1],ft&&(!function(){const t=d(W(ft.parentNode).parentNode,g({innerHTML:J(lt),style:{textAlign:"center"}}))
p(t,"change",gt)}(),ut=f(lt),ut&&dt())}function mt(t,n){const e=c(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function ht(t){const n=t.dataset.tipped,e=mt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=mt(n,/XP: <b>(?<realXp>\d*)/)
N(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+o(t-n)}(s,e)}</b>)`)}function bt(){const t=b('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&ht(t)}let Nt=0,Ct=0
function Lt(t){return Nt&&t>=Y()&&t<=tt()}function kt(t){return Ct&&t>=nt()&&t<=et()}const wt=t=>[t,i(t.dataset.tipped).days],Mt=([,t])=>t<7,St=([t])=>[t,Number(c(M,t.dataset.tipped))],jt=([t,n])=>[t.parentNode.parentNode.rowIndex,Lt(n),kt(n)]
const Ht=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function $t(t,n){if(t.length){const e=`${Ht(t)} {background-color: #${n};}`
d(document.body,Q(e))}}function xt(){const t=w('#pCC a[data-tipped*="<td>VL:</td>"]').map(wt).filter(Mt).map(St).map(jt),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
$t(n,"4671C8"),$t(e,"FF9900"),function(t,n){if(t.length+n.length){const t=l(u,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function yt(){Number(L("guild_id"))!==k()&&(Nt||Ct)&&xt()}function Tt(){Nt=f("highlightPlayersNearMyLvl"),Ct=f("highlightGvGPlayersNearMyLvl"),yt(),f("enableHistoryCompressor")&&function(){const t=e(u,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=g({id:"profile-bio",innerHTML:n.innerHTML})
C("",n),d(n,a),st()}()}function vt(t){N(t.parentNode,' <span class="smallLink">[b]</span>')}function Rt(t){"smallLink"===t.target.className&&(m("guild","buffLinks"),$(x(t.target.previousElementSibling.href)))}function Bt(){const t=S(`#pCC a[href^="${j}"]`)
at([3,t,0,vt]),H(s(),Rt)}function Pt(t){return y({cmd:"guild",subcmd:"conflicts",page:t})}function Gt(t,n){C(n,t.insertCell(-1))}function At(t,n,e){const s=t.insertRow(t.rows.length-2)
return Gt(s,n),Gt(s,e),s}function Et(t,n){At(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Xt(t,n,e){1===n&&function(t){const n=At(t,`<a href="${R}conflicts">Active Conflicts</a>`,"Score")
H(n,(t=>{"A"===t.target.tagName&&m("guildManage","conflictHeader")}))}(e),T(t,7,0).forEach(v(Et,e))}function It(t,n){const e=b('#pCC input[name="page"]',n)
if(!e)return
const s=Number(e.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(e)
!function(t,n,e){const s=b("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Xt(s,n,e)}(n,s,t.node),a>s&&async function(t,n,e){n(e,await Pt(t+1))}(s,It,t)}async function Vt(t){const[n]=t.rows[6].cells[0].children
if(n){It({node:n},await Pt(1))}}function _t(t){const n=t.target.dataset.linkto
m("guildManage","toggleVisibilty",n)
const e=A(n)
if(!e)return
const s=E("fshHide",e)
e.classList.toggle("fshHide"),h(n,s?"":"ON")}function zt(t,n,e){const s=function(t){return G({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=G({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),N(n,"&nbsp;]"),n}(s)),n.id=e,f(e)&&P(n),H(s,_t)}function Dt(t){zt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Ft(t){const n=t.rows[4].cells[1].children[0]
C(B(n.innerHTML),n),zt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Ot(t){const n=t.rows[15]?.cells[1].children[0]
n&&zt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Ut=0
function Zt(t){const n=function(t){const{stam:n,max:e}=I(r,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function qt(t){Ut?Ut.disabled=!t:function(){const t=l(u,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=w(X,n).map(Zt).join("\n")
Ut=d(document.body,Q(e)).sheet}()}const Kt="enableStamBars"
let Wt=0
function Jt(){Wt=!Wt,h(Kt,Wt),qt(Wt),m("guildManage","StamBars")}function Qt(){!function(){if(!b("#pCC img.guild_openGuildStore"))return
const t=l(u,s()),n=t[t.length-1],e=d(W(n.parentNode).parentNode,g({innerHTML:J(Kt),style:{marginBottom:"5px",textAlign:"center"}}))
p(e,"change",Jt)}(),Wt=f(Kt),Wt&&qt(Wt)}function Yt(t){t.target.id===_&&(m("Guild Tracker","togglePref"),h(_,t.target.checked))}function tn(){m("Guild Tracker","showTracker"),z()}function nn(){const t=b("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=g({className:"fsh-tracker",innerHTML:`${J(_)}&nbsp;`})
p(e,"change",Yt)
const s=V({textContent:"Show"})
H(s,tn),d(e,s),d(n,e)}function en(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
C(`[ <a href="${R}reliclist">Control</a> ]&nbsp;`,s),H(s,(t=>{"A"===t.target.tagName&&m("guildManage","relic control")}))}function sn(t){const n=l("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
N(e,`<li><a href="${O}${U()}">Self Recall</a></li>`),H(e,(t=>{"Self Recall"===Z(t.target)&&m("guildManage","Self Recall")}))}function an(t,n){D(3,n,[t])}function on(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Dt,Ft,Ot,en,sn].forEach(v(an,t))}(t),f("showBuffLinks")&&D(3,Bt),function(t){F()||(f("detailedConflictInfo")&&D(3,Vt,[t]),D(4,nn))}(t),Qt())}function cn(){D(3,n),D(3,bt),D(3,rt),D(3,pt),["-","manage"].includes(q.subcmd)&&on(),"view"===q.subcmd&&Tt()}export{cn as default}
//# sourceMappingURL=injectGuild-C8xCXOl1.js.map
