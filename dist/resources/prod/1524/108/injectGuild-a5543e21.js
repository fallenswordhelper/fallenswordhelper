import{g as t,c as n}from"./colouredDots-13be7fed.js"
import{x as e,p as s,bW as o,r as i,cJ as a,q as r,v as c,bK as l,l as f,s as u,i as d,af as p,a7 as m,bL as h,j as g,aw as b,cL as C,K as j,bp as L,o as N,G as w,H as k,c as S,b$ as $,g as y,D as H,ab as M,aX as x,k as T,b as v,n as G,cQ as P,cR as B,aP as E,w as I,cS as R,aA as X,ad as A}from"./calfSystem-34913441.js"
import{l as V}from"./lastActivity-75095e08.js"
import{s as D}from"./setTipped-cc91a1bc.js"
import{a as F}from"./addCommas-47d6aaa1.js"
import{c as O}from"./createStyle-e8b661d2.js"
import{a as Q,g as W,c as _,b as q}from"./levelHighlight-530526cf.js"
import K from"./compressBio-57941e53.js"
import{b as J}from"./batch-868086f2.js"
import{g as U}from"./getPlayerId-dc3d799c.js"
import{o as z}from"./openQuickBuffById-3914df94.js"
import{d as Y}from"./dataRows-380aff49.js"
import{c as Z}from"./createSpan-d7c936c3.js"
import{h as tt}from"./hideElement-baffa60f.js"
import{s as nt}from"./simpleCheckbox-7fbdc790.js"
import{r as et}from"./regExpGroups-e9c1f885.js"
import{c as st}from"./createButton-ae13c659.js"
import"./onlineDot-82a20501.js"
import"./now-6f22aec9.js"
import"./asInt-f990b3d0.js"
import"./valueText-238d2284.js"
import"./intValue-e1798d0a.js"
import"./createInput-4ae8777b.js"
import"./createLabel-91e7de95.js"
import"./fshOpen-c0e91392.js"
import"./isChecked-3968d2ec.js"
const ot=0,it=1
function at(t,n){const{mins:e}=V(n.dataset.tipped)
return e<44640&&(t[ot]+=1,t[it]+=Number(i(a,n.dataset.tipped))),t}function rt(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(at,[0,0])}(e)
n.classList.add("tip-static"),D(`Active: ${s[ot]}/${e.length}<br>Stamina: ${F(s[it])}`,n)}}function ct(t,n){const e=i(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function lt(t){const n=t.dataset.tipped,e=ct(n,/XP Lock: <b>(?<lockXp>\d*)/),s=ct(n,/XP: <b>(?<realXp>\d*)/)
c(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+F(t-n)}(s,e)}</b>)`)}function ft(){const t=r('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&lt(t)}let ut=0,dt=0
function pt(t){return ut&&t>=Q()&&t<=W()}function mt(t){return dt&&t>=_()&&t<=q()}const ht=t=>[t,V(t.dataset.tipped).days],gt=([,t])=>t<7,bt=([t])=>[t,Number(i(C,t.dataset.tipped))],Ct=([t,n])=>[t.parentNode.parentNode.rowIndex,pt(n),mt(n)]
const jt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Lt(t,n){if(t.length){const e=`${jt(t)} {background-color: #${n};}`
d(document.body,O(e))}}function Nt(){const t=g('#pCC a[data-tipped*="<td>VL:</td>"]').map(ht).filter(gt).map(bt).map(Ct),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Lt(n,"4671C8"),Lt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=b(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function wt(){Number(m("guild_id"))!==h()&&(ut||dt)&&Nt()}function kt(){ut=p("highlightPlayersNearMyLvl"),dt=p("highlightGvGPlayersNearMyLvl"),wt(),p("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
u("",n),d(n,o),K()}()}function St(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function $t(t){"smallLink"===t.target.className&&z(U(t.target.previousElementSibling.href))}function yt(){const t=j(`#pCC a[href^="${L}"]`)
J([3,t,0,St]),N(s(),$t)}function Ht(t){return w({cmd:"guild",subcmd:"conflicts",page:t})}function Mt(t,n){u(n,t.insertCell(-1))}function xt(t,n,e){const s=t.insertRow(t.rows.length-2)
Mt(s,n),Mt(s,e)}function Tt(t,n){xt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function vt(t,n,e){1===n&&function(t){xt(t,`<a href="${$}conflicts">Active Conflicts</a>`,"Score")}(e),Y(t,7,0).forEach(S(Tt,e))}function Gt(t,n){const e=k(n),s=r('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),i=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=r("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&vt(s,n,e)}(e,o,t.node),i>o&&async function(t,n,e){n(e,await Ht(t+1))}(o,Gt,t)}async function Pt(t){const[n]=t.rows[6].cells[0].children
if(n){Gt({node:n},await Ht(1))}}function Bt(t){const n=t.target.dataset.linkto,e=y(n)
if(!e)return
const s=H("fshHide",e)
e.classList.toggle("fshHide"),M(n,s?"":"ON")}function Et(t,n,e){const s=function(t){return Z({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=Z({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),c(n,"&nbsp;]"),n}(s)),n.id=e,p(e)&&tt(n),N(s,Bt)}function It(t){Et(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Rt(t){const n=t.rows[4].cells[1].children[0]
u(x(n.innerHTML),n),Et(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Xt(t){const n=t.rows[15]?.cells[1].children[0]
n&&Et(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let At=0
function Vt(t){const n=function(t){const{stam:n,max:e}=et(a,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Dt(t){At?At.disabled=!t:function(){const t=b(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=g(T,n).map(Vt).join("\n")
At=d(document.body,O(e)).sheet}()}const Ft="enableStamBars"
let Ot=0
function Qt(){Ot=!Ot,M(Ft,Ot),Dt(Ot),G("guildManage","StamBars")}function Wt(){!function(){if(!r("#pCC img.guild_openGuildStore"))return
const t=d(s(),f({innerHTML:nt(Ft),style:{marginLeft:"66%"}}))
v(t,"change",Qt)}(),Ot=p(Ft),Ot&&Dt(Ot)}function _t(t){t.target.id===P&&(G("Guild Tracker","togglePref"),M(P,t.target.checked))}function qt(){G("Guild Tracker","showTracker"),B()}function Kt(){const t=r("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${nt(P)}&nbsp;`})
v(e,"change",_t)
const s=st({textContent:"Show"})
N(s,qt),d(e,s),d(n,e)}function Jt(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
u(`[ <a href="${$}reliclist">Control</a> ]&nbsp;`,s)}function Ut(t){const n=b("li",t)
if(!n||!n.length)return
const e=n[n.length-1].parentNode
c(e,`<li><a href="${R}${X()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function zt(t,n){E(3,n,[t])}function Yt(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[It,Rt,Xt,Jt,Ut].forEach(S(zt,t))}(t),p("showBuffLinks")&&E(3,yt),function(t){I()||(p("detailedConflictInfo")&&E(3,Pt,[t]),E(4,Kt))}(t),Wt())}function Zt(){E(3,n),E(3,ft),E(3,rt),["-","manage"].includes(A.subcmd)&&Yt(),"view"===A.subcmd&&kt()}export{Zt as default}
//# sourceMappingURL=injectGuild-a5543e21.js.map
