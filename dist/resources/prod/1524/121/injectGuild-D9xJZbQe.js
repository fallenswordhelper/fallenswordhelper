import{g as t,c as n}from"./colouredDots-BHWRDT2U.js"
import{x as e,p as s,b$ as o,r as a,cW as i,q as r,v as c,bP as l,m as f,d as u,i as d,ai as p,aa as m,bQ as g,k as h,az as b,cX as C,K as j,br as N,o as L,s as w,G as k,H as S,c as y,c4 as M,a$ as $,bH as H,g as T,D as x,ae as v,l as P,b as B,cY as G,cZ as E,aT as I,w as R,c_ as X,aC as A,a8 as _,ag as D}from"./calfSystem-BtgQSp8m.js"
import{l as F}from"./lastActivity-lRDWjF63.js"
import{s as V}from"./setTipped-_gKWzwad.js"
import{a as O}from"./addCommas-C_h2HN8s.js"
import{c as W}from"./createStyle-BYPeZ66Y.js"
import{a as Q,g as Z,c as q,b as z}from"./levelHighlight-DkmEzbac.js"
import K from"./compressBio-D0t2SCyM.js"
import{b as U}from"./batch-CfE5wARI.js"
import{g as Y}from"./getPlayerId-Ca7Vz2Mq.js"
import{o as J}from"./openQuickBuffById-CUYQAkj1.js"
import{d as tt}from"./dataRows-COCTBM12.js"
import{c as nt}from"./createSpan-BNuEMmn6.js"
import{s as et}from"./simpleCheckbox-Dk5zgKhX.js"
import{r as st}from"./regExpGroups-UYEi9658.js"
import{c as ot}from"./createButton-YviCBxxu.js"
import"./onlineDot-BQqsyz3I.js"
import"./now-Cx4PsKjI.js"
import"./asInt-DAijoojz.js"
import"./valueText-DbyxEUl6.js"
import"./intValue-C7nTQec1.js"
import"./createInput-Dx_Y4XL_.js"
import"./createLabel-Cfy9uCOr.js"
import"./fshOpen-AuKioUPF.js"
import"./isChecked-D_0do7nT.js"
const at=0,it=1
function rt(t,n){const{mins:e}=F(n.dataset.tipped)
return e<44640&&(t[at]+=1,t[it]+=Number(a(i,n.dataset.tipped))),t}function ct(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(rt,[0,0])}(e)
n.classList.add("tip-static"),V(`Active: ${s[at]}/${e.length}<br>Stamina: ${O(s[it])}`,n)}}function lt(t,n){const e=a(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function ft(t){const n=t.dataset.tipped,e=lt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=lt(n,/XP: <b>(?<realXp>\d*)/)
c(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+O(t-n)}(s,e)}</b>)`)}function ut(){const t=r('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&ft(t)}let dt=0,pt=0
function mt(t){return dt&&t>=Q()&&t<=Z()}function gt(t){return pt&&t>=q()&&t<=z()}const ht=t=>[t,F(t.dataset.tipped).days],bt=([,t])=>t<7,Ct=([t])=>[t,Number(a(C,t.dataset.tipped))],jt=([t,n])=>[t.parentNode.parentNode.rowIndex,mt(n),gt(n)]
const Nt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Lt(t,n){if(t.length){const e=`${Nt(t)} {background-color: #${n};}`
d(document.body,W(e))}}function wt(){const t=h('#pCC a[data-tipped*="<td>VL:</td>"]').map(ht).filter(bt).map(Ct).map(jt),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Lt(n,"4671C8"),Lt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=b(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function kt(){Number(m("guild_id"))!==g()&&(dt||pt)&&wt()}function St(){dt=p("highlightPlayersNearMyLvl"),pt=p("highlightGvGPlayersNearMyLvl"),kt(),p("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
u("",n),d(n,o),K()}()}function yt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function Mt(t){"smallLink"===t.target.className&&(w("guild","buffLinks"),J(Y(t.target.previousElementSibling.href)))}function $t(){const t=j(`#pCC a[href^="${N}"]`)
U([3,t,0,yt]),L(s(),Mt)}function Ht(t){return k({cmd:"guild",subcmd:"conflicts",page:t})}function Tt(t,n){u(n,t.insertCell(-1))}function xt(t,n,e){const s=t.insertRow(t.rows.length-2)
return Tt(s,n),Tt(s,e),s}function vt(t,n){xt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Pt(t,n,e){1===n&&function(t){const n=xt(t,`<a href="${M}conflicts">Active Conflicts</a>`,"Score")
L(n,(t=>{"A"===t.target.tagName&&w("guildManage","conflictHeader")}))}(e),tt(t,7,0).forEach(y(vt,e))}function Bt(t,n){const e=S(n),s=r('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=r("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Pt(s,n,e)}(e,o,t.node),a>o&&async function(t,n,e){n(e,await Ht(t+1))}(o,Bt,t)}async function Gt(t){const[n]=t.rows[6].cells[0].children
if(n){Bt({node:n},await Ht(1))}}function Et(t){const n=t.target.dataset.linkto
w("guildManage","toggleVisibilty",n)
const e=T(n)
if(!e)return
const s=x("fshHide",e)
e.classList.toggle("fshHide"),v(n,s?"":"ON")}function It(t,n,e){const s=function(t){return nt({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=nt({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),c(n,"&nbsp;]"),n}(s)),n.id=e,p(e)&&H(n),L(s,Et)}function Rt(t){It(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xt(t){const n=t.rows[4].cells[1].children[0]
u($(n.innerHTML),n),It(n,t.rows[6].cells[0].children[0],"statisticsControl")}function At(t){const n=t.rows[15]?.cells[1].children[0]
n&&It(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let _t=0
function Dt(t){const n=function(t){const{stam:n,max:e}=st(i,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Ft(t){_t?_t.disabled=!t:function(){const t=b(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=h(P,n).map(Dt).join("\n")
_t=d(document.body,W(e)).sheet}()}const Vt="enableStamBars"
let Ot=0
function Wt(){Ot=!Ot,v(Vt,Ot),Ft(Ot),w("guildManage","StamBars")}function Qt(){!function(){if(!r("#pCC img.guild_openGuildStore"))return
const t=d(s(),f({innerHTML:et(Vt),style:{marginLeft:"66%"}}))
B(t,"change",Wt)}(),Ot=p(Vt),Ot&&Ft(Ot)}function Zt(t){t.target.id===G&&(w("Guild Tracker","togglePref"),v(G,t.target.checked))}function qt(){w("Guild Tracker","showTracker"),E()}function zt(){const t=r("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${et(G)}&nbsp;`})
B(e,"change",Zt)
const s=ot({textContent:"Show"})
L(s,qt),d(e,s),d(n,e)}function Kt(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
u(`[ <a href="${M}reliclist">Control</a> ]&nbsp;`,s),L(s,(t=>{"A"===t.target.tagName&&w("guildManage","relic control")}))}function Ut(t){const n=b("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
c(e,`<li><a href="${X}${A()}">Self Recall</a></li>`),L(e,(t=>{"Self Recall"===_(t.target)&&w("guildManage","Self Recall")}))}function Yt(t,n){I(3,n,[t])}function Jt(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Rt,Xt,At,Kt,Ut].forEach(y(Yt,t))}(t),p("showBuffLinks")&&I(3,$t),function(t){R()||(p("detailedConflictInfo")&&I(3,Gt,[t]),I(4,zt))}(t),Qt())}function tn(){I(3,n),I(3,ut),I(3,ct),["-","manage"].includes(D.subcmd)&&Jt(),"view"===D.subcmd&&St()}export{tn as default}
//# sourceMappingURL=injectGuild-D9xJZbQe.js.map
