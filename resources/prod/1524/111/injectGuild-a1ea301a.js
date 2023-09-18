import{g as t,c as n}from"./colouredDots-c4afc6e5.js"
import{x as e,p as s,bU as o,r as i,cM as a,q as r,v as c,bI as l,l as f,s as u,i as d,ae as p,a6 as m,bJ as h,j as g,av as b,cN as C,J as j,bl as N,o as L,F as w,G as k,c as y,bZ as S,g as $,D as M,aa as v,aV as x,k as H,b as T,n as B,cO as E,cP as P,aN as G,w as I,cQ as R,ay as X,ac as V}from"./calfSystem-abb16b0d.js"
import{l as D}from"./lastActivity-dd91c076.js"
import{s as F}from"./setTipped-cc91a1bc.js"
import{a as O}from"./addCommas-47d6aaa1.js"
import{c as _}from"./createStyle-deebe923.js"
import{a as A,g as Q,c as U,b as q}from"./levelHighlight-9297ab2e.js"
import J from"./compressBio-ad0ea156.js"
import{b as W}from"./batch-49be00bd.js"
import{g as Z}from"./getPlayerId-10b4174c.js"
import{o as z}from"./openQuickBuffById-d429c2bc.js"
import{d as K}from"./dataRows-bd1bd3ba.js"
import{c as Y}from"./createSpan-b6e6b8c0.js"
import{h as tt}from"./hideElement-85f33001.js"
import{s as nt}from"./simpleCheckbox-937a8f73.js"
import{r as et}from"./regExpGroups-40baae8f.js"
import{c as st}from"./createButton-f5aa29a3.js"
import"./onlineDot-3da6ec33.js"
import"./now-6f22aec9.js"
import"./asInt-030fcf94.js"
import"./valueText-fc266edc.js"
import"./intValue-e1798d0a.js"
import"./createInput-c5f39cca.js"
import"./createLabel-bcf82bdb.js"
import"./fshOpen-c0e91392.js"
import"./isChecked-3968d2ec.js"
const ot=0,it=1
function at(t,n){const{mins:e}=D(n.dataset.tipped)
return e<44640&&(t[ot]+=1,t[it]+=Number(i(a,n.dataset.tipped))),t}function rt(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(at,[0,0])}(e)
n.classList.add("tip-static"),F(`Active: ${s[ot]}/${e.length}<br>Stamina: ${O(s[it])}`,n)}}function ct(t,n){const e=i(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function lt(t){const n=t.dataset.tipped,e=ct(n,/XP Lock: <b>(?<lockXp>\d*)/),s=ct(n,/XP: <b>(?<realXp>\d*)/)
c(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+O(t-n)}(s,e)}</b>)`)}function ft(){const t=r('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&lt(t)}let ut=0,dt=0
function pt(t){return ut&&t>=A()&&t<=Q()}function mt(t){return dt&&t>=U()&&t<=q()}const ht=t=>[t,D(t.dataset.tipped).days],gt=([,t])=>t<7,bt=([t])=>[t,Number(i(C,t.dataset.tipped))],Ct=([t,n])=>[t.parentNode.parentNode.rowIndex,pt(n),mt(n)]
const jt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Nt(t,n){if(t.length){const e=`${jt(t)} {background-color: #${n};}`
d(document.body,_(e))}}function Lt(){const t=g('#pCC a[data-tipped*="<td>VL:</td>"]').map(ht).filter(gt).map(bt).map(Ct),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Nt(n,"4671C8"),Nt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=b(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function wt(){Number(m("guild_id"))!==h()&&(ut||dt)&&Lt()}function kt(){ut=p("highlightPlayersNearMyLvl"),dt=p("highlightGvGPlayersNearMyLvl"),wt(),p("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
u("",n),d(n,o),J()}()}function yt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function St(t){"smallLink"===t.target.className&&z(Z(t.target.previousElementSibling.href))}function $t(){const t=j(`#pCC a[href^="${N}"]`)
W([3,t,0,yt]),L(s(),St)}function Mt(t){return w({cmd:"guild",subcmd:"conflicts",page:t})}function vt(t,n){u(n,t.insertCell(-1))}function xt(t,n,e){const s=t.insertRow(t.rows.length-2)
vt(s,n),vt(s,e)}function Ht(t,n){xt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Tt(t,n,e){1===n&&function(t){xt(t,`<a href="${S}conflicts">Active Conflicts</a>`,"Score")}(e),K(t,7,0).forEach(y(Ht,e))}function Bt(t,n){const e=k(n),s=r('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),i=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=r("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Tt(s,n,e)}(e,o,t.node),i>o&&async function(t,n,e){n(e,await Mt(t+1))}(o,Bt,t)}async function Et(t){const[n]=t.rows[6].cells[0].children
if(n){Bt({node:n},await Mt(1))}}function Pt(t){const n=t.target.dataset.linkto,e=$(n)
if(!e)return
const s=M("fshHide",e)
e.classList.toggle("fshHide"),v(n,s?"":"ON")}function Gt(t,n,e){const s=function(t){return Y({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=Y({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),c(n,"&nbsp;]"),n}(s)),n.id=e,p(e)&&tt(n),L(s,Pt)}function It(t){Gt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Rt(t){const n=t.rows[4].cells[1].children[0]
u(x(n.innerHTML),n),Gt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Xt(t){const n=t.rows[15]?.cells[1].children[0]
n&&Gt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Vt=0
function Dt(t){const n=function(t){const{stam:n,max:e}=et(a,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Ft(t){Vt?Vt.disabled=!t:function(){const t=b(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=g(H,n).map(Dt).join("\n")
Vt=d(document.body,_(e)).sheet}()}const Ot="enableStamBars"
let _t=0
function At(){_t=!_t,v(Ot,_t),Ft(_t),B("guildManage","StamBars")}function Qt(){!function(){if(!r("#pCC img.guild_openGuildStore"))return
const t=d(s(),f({innerHTML:nt(Ot),style:{marginLeft:"66%"}}))
T(t,"change",At)}(),_t=p(Ot),_t&&Ft(_t)}function Ut(t){t.target.id===E&&(B("Guild Tracker","togglePref"),v(E,t.target.checked))}function qt(){B("Guild Tracker","showTracker"),P()}function Jt(){const t=r("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${nt(E)}&nbsp;`})
T(e,"change",Ut)
const s=st({textContent:"Show"})
L(s,qt),d(e,s),d(n,e)}function Wt(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
u(`[ <a href="${S}reliclist">Control</a> ]&nbsp;`,s)}function Zt(t){const n=b("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
c(e,`<li><a href="${R}${X()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function zt(t,n){G(3,n,[t])}function Kt(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[It,Rt,Xt,Wt,Zt].forEach(y(zt,t))}(t),p("showBuffLinks")&&G(3,$t),function(t){I()||(p("detailedConflictInfo")&&G(3,Et,[t]),G(4,Jt))}(t),Qt())}function Yt(){G(3,n),G(3,ft),G(3,rt),["-","manage"].includes(V.subcmd)&&Kt(),"view"===V.subcmd&&kt()}export{Yt as default}
//# sourceMappingURL=injectGuild-a1ea301a.js.map
