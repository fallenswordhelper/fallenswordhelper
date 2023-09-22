import{g as t,c as n}from"./colouredDots-ee35ff24.js"
import{x as e,p as s,bT as o,r as i,cM as a,q as r,v as c,bH as l,l as f,s as u,i as d,ad as p,a5 as m,bI as h,j as g,au as b,cN as C,I as j,bk as N,o as L,E as w,F as k,c as S,bY as $,g as y,D as M,a9 as x,aU as H,k as T,b as v,n as E,cO as I,cP as P,aM as B,w as G,cQ as R,ax as X,ab as F}from"./calfSystem-4830a18d.js"
import{l as O}from"./lastActivity-1c838a76.js"
import{s as V}from"./setTipped-cc91a1bc.js"
import{a as A}from"./addCommas-47d6aaa1.js"
import{c as D}from"./createStyle-79b7cdab.js"
import{a as Q,g as _,c as U,b as W}from"./levelHighlight-193b24b6.js"
import q from"./compressBio-8a15aaf9.js"
import{b as z}from"./batch-54067b0c.js"
import{g as Y}from"./getPlayerId-283e8a7a.js"
import{o as J}from"./openQuickBuffById-8cca49b4.js"
import{d as K}from"./dataRows-ab26c2ce.js"
import{c as Z}from"./createSpan-0da7a190.js"
import{h as tt}from"./hideElement-85f33001.js"
import{s as nt}from"./simpleCheckbox-ed7e63fb.js"
import{r as et}from"./regExpGroups-9a4124f3.js"
import{c as st}from"./createButton-30c5ecee.js"
import"./onlineDot-64ef932a.js"
import"./now-6f22aec9.js"
import"./asInt-e2e2488f.js"
import"./valueText-ddd10c6c.js"
import"./intValue-e1798d0a.js"
import"./createInput-08b5e815.js"
import"./createLabel-3172b889.js"
import"./fshOpen-c0e91392.js"
import"./isChecked-3968d2ec.js"
const ot=0,it=1
function at(t,n){const{mins:e}=O(n.dataset.tipped)
return e<44640&&(t[ot]+=1,t[it]+=Number(i(a,n.dataset.tipped))),t}function rt(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(at,[0,0])}(e)
n.classList.add("tip-static"),V(`Active: ${s[ot]}/${e.length}<br>Stamina: ${A(s[it])}`,n)}}function ct(t,n){const e=i(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function lt(t){const n=t.dataset.tipped,e=ct(n,/XP Lock: <b>(?<lockXp>\d*)/),s=ct(n,/XP: <b>(?<realXp>\d*)/)
c(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+A(t-n)}(s,e)}</b>)`)}function ft(){const t=r('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&lt(t)}let ut=0,dt=0
function pt(t){return ut&&t>=Q()&&t<=_()}function mt(t){return dt&&t>=U()&&t<=W()}const ht=t=>[t,O(t.dataset.tipped).days],gt=([,t])=>t<7,bt=([t])=>[t,Number(i(C,t.dataset.tipped))],Ct=([t,n])=>[t.parentNode.parentNode.rowIndex,pt(n),mt(n)]
const jt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Nt(t,n){if(t.length){const e=`${jt(t)} {background-color: #${n};}`
d(document.body,D(e))}}function Lt(){const t=g('#pCC a[data-tipped*="<td>VL:</td>"]').map(ht).filter(gt).map(bt).map(Ct),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Nt(n,"4671C8"),Nt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=b(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function wt(){Number(m("guild_id"))!==h()&&(ut||dt)&&Lt()}function kt(){ut=p("highlightPlayersNearMyLvl"),dt=p("highlightGvGPlayersNearMyLvl"),wt(),p("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
u("",n),d(n,o),q()}()}function St(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function $t(t){"smallLink"===t.target.className&&J(Y(t.target.previousElementSibling.href))}function yt(){const t=j(`#pCC a[href^="${N}"]`)
z([3,t,0,St]),L(s(),$t)}function Mt(t){return w({cmd:"guild",subcmd:"conflicts",page:t})}function xt(t,n){u(n,t.insertCell(-1))}function Ht(t,n,e){const s=t.insertRow(t.rows.length-2)
xt(s,n),xt(s,e)}function Tt(t,n){Ht(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function vt(t,n,e){1===n&&function(t){Ht(t,`<a href="${$}conflicts">Active Conflicts</a>`,"Score")}(e),K(t,7,0).forEach(S(Tt,e))}function Et(t,n){const e=k(n),s=r('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),i=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=r("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&vt(s,n,e)}(e,o,t.node),i>o&&async function(t,n,e){n(e,await Mt(t+1))}(o,Et,t)}async function It(t){const[n]=t.rows[6].cells[0].children
if(n){Et({node:n},await Mt(1))}}function Pt(t){const n=t.target.dataset.linkto,e=y(n)
if(!e)return
const s=M("fshHide",e)
e.classList.toggle("fshHide"),x(n,s?"":"ON")}function Bt(t,n,e){const s=function(t){return Z({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=Z({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),c(n,"&nbsp;]"),n}(s)),n.id=e,p(e)&&tt(n),L(s,Pt)}function Gt(t){Bt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Rt(t){const n=t.rows[4].cells[1].children[0]
u(H(n.innerHTML),n),Bt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Xt(t){const n=t.rows[15]?.cells[1].children[0]
n&&Bt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Ft=0
function Ot(t){const n=function(t){const{stam:n,max:e}=et(a,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Vt(t){Ft?Ft.disabled=!t:function(){const t=b(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=g(T,n).map(Ot).join("\n")
Ft=d(document.body,D(e)).sheet}()}const At="enableStamBars"
let Dt=0
function Qt(){Dt=!Dt,x(At,Dt),Vt(Dt),E("guildManage","StamBars")}function _t(){!function(){if(!r("#pCC img.guild_openGuildStore"))return
const t=d(s(),f({innerHTML:nt(At),style:{marginLeft:"66%"}}))
v(t,"change",Qt)}(),Dt=p(At),Dt&&Vt(Dt)}function Ut(t){t.target.id===I&&(E("Guild Tracker","togglePref"),x(I,t.target.checked))}function Wt(){E("Guild Tracker","showTracker"),P()}function qt(){const t=r("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${nt(I)}&nbsp;`})
v(e,"change",Ut)
const s=st({textContent:"Show"})
L(s,Wt),d(e,s),d(n,e)}function zt(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
u(`[ <a href="${$}reliclist">Control</a> ]&nbsp;`,s)}function Yt(t){const n=b("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
c(e,`<li><a href="${R}${X()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function Jt(t,n){B(3,n,[t])}function Kt(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Gt,Rt,Xt,zt,Yt].forEach(S(Jt,t))}(t),p("showBuffLinks")&&B(3,yt),function(t){G()||(p("detailedConflictInfo")&&B(3,It,[t]),B(4,qt))}(t),_t())}function Zt(){B(3,n),B(3,ft),B(3,rt),["-","manage"].includes(F.subcmd)&&Kt(),"view"===F.subcmd&&kt()}export{Zt as default}
//# sourceMappingURL=injectGuild-0f6b90ad.js.map
