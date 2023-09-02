import{g as t,c as n}from"./colouredDots-9496dfbc.js"
import{x as e,p as s,bW as o,r as i,cJ as a,q as r,v as c,bK as l,l as f,s as u,i as d,af as p,a7 as m,bL as h,j as g,aw as b,cL as C,K as j,bp as L,o as N,G as w,H as S,c as k,c0 as y,g as $,D as H,ab as M,aX as T,k as x,b as v,n as P,cQ as G,cR as B,aP as I,w as E,cS as R,aA as X,ad as A}from"./calfSystem-2fff342b.js"
import{l as W}from"./lastActivity-051eff5d.js"
import{s as D}from"./setTipped-cc91a1bc.js"
import{a as F}from"./addCommas-47d6aaa1.js"
import{c as O}from"./createStyle-c9b61b3f.js"
import{a as V,g as _,c as J,b as K}from"./levelHighlight-4b8c8c52.js"
import Q from"./compressBio-534abd37.js"
import{b as q}from"./batch-02a48250.js"
import{g as z}from"./getPlayerId-1e376753.js"
import{o as Y}from"./openQuickBuffById-a2b81ae2.js"
import{d as U}from"./dataRows-1cc13a27.js"
import{c as Z}from"./createSpan-6e19e4f0.js"
import{h as tt}from"./hideElement-baffa60f.js"
import{s as nt}from"./simpleCheckbox-539999e2.js"
import{r as et}from"./regExpGroups-2038386a.js"
import{c as st}from"./createButton-485879f7.js"
import"./onlineDot-0b9da3a6.js"
import"./now-6f22aec9.js"
import"./asInt-45536bb6.js"
import"./valueText-77aa5799.js"
import"./intValue-e1798d0a.js"
import"./createInput-9528c659.js"
import"./createLabel-c0441204.js"
import"./fshOpen-c0e91392.js"
import"./isChecked-3968d2ec.js"
const ot=0,it=1
function at(t,n){const{mins:e}=W(n.dataset.tipped)
return e<44640&&(t[ot]+=1,t[it]+=Number(i(a,n.dataset.tipped))),t}function rt(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(at,[0,0])}(e)
n.classList.add("tip-static"),D(`Active: ${s[ot]}/${e.length}<br>Stamina: ${F(s[it])}`,n)}}function ct(t,n){const e=i(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function lt(t){const n=t.dataset.tipped,e=ct(n,/XP Lock: <b>(?<lockXp>\d*)/),s=ct(n,/XP: <b>(?<realXp>\d*)/)
c(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+F(t-n)}(s,e)}</b>)`)}function ft(){const t=r('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&lt(t)}let ut=0,dt=0
function pt(t){return ut&&t>=V()&&t<=_()}function mt(t){return dt&&t>=J()&&t<=K()}const ht=t=>[t,W(t.dataset.tipped).days],gt=([,t])=>t<7,bt=([t])=>[t,Number(i(C,t.dataset.tipped))],Ct=([t,n])=>[t.parentNode.parentNode.rowIndex,pt(n),mt(n)]
const jt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Lt(t,n){if(t.length){const e=`${jt(t)} {background-color: #${n};}`
d(document.body,O(e))}}function Nt(){const t=g('#pCC a[data-tipped*="<td>VL:</td>"]').map(ht).filter(gt).map(bt).map(Ct),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Lt(n,"4671C8"),Lt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=b(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function wt(){Number(m("guild_id"))!==h()&&(ut||dt)&&Nt()}function St(){ut=p("highlightPlayersNearMyLvl"),dt=p("highlightGvGPlayersNearMyLvl"),wt(),p("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
u("",n),d(n,o),Q()}()}function kt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function yt(t){"smallLink"===t.target.className&&Y(z(t.target.previousElementSibling.href))}function $t(){const t=j(`#pCC a[href^="${L}"]`)
q([3,t,0,kt]),N(s(),yt)}function Ht(t){return w({cmd:"guild",subcmd:"conflicts",page:t})}function Mt(t,n){u(n,t.insertCell(-1))}function Tt(t,n,e){const s=t.insertRow(t.rows.length-2)
Mt(s,n),Mt(s,e)}function xt(t,n){Tt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function vt(t,n,e){1===n&&function(t){Tt(t,`<a href="${y}conflicts">Active Conflicts</a>`,"Score")}(e),U(t,7,0).forEach(k(xt,e))}function Pt(t,n){const e=S(n),s=r('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),i=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=r("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&vt(s,n,e)}(e,o,t.node),i>o&&async function(t,n,e){n(e,await Ht(t+1))}(o,Pt,t)}async function Gt(t){const[n]=t.rows[6].cells[0].children
if(n){Pt({node:n},await Ht(1))}}function Bt(t){const n=t.target.dataset.linkto,e=$(n)
if(!e)return
const s=H("fshHide",e)
e.classList.toggle("fshHide"),M(n,s?"":"ON")}function It(t,n,e){const s=function(t){return Z({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=Z({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),c(n,"&nbsp;]"),n}(s)),n.id=e,p(e)&&tt(n),N(s,Bt)}function Et(t){It(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Rt(t){const n=t.rows[4].cells[1].children[0]
u(T(n.innerHTML),n),It(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Xt(t){const n=t.rows[15]?.cells[1].children[0]
n&&It(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let At=0
function Wt(t){const n=function(t){const{stam:n,max:e}=et(a,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Dt(t){At?At.disabled=!t:function(){const t=b(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=g(x,n).map(Wt).join("\n")
At=d(document.body,O(e)).sheet}()}const Ft="enableStamBars"
let Ot=0
function Vt(){Ot=!Ot,M(Ft,Ot),Dt(Ot),P("guildManage","StamBars")}function _t(){!function(){if(!r("#pCC img.guild_openGuildStore"))return
const t=d(s(),f({innerHTML:nt(Ft),style:{marginLeft:"66%"}}))
v(t,"change",Vt)}(),Ot=p(Ft),Ot&&Dt(Ot)}function Jt(t){t.target.id===G&&(P("Guild Tracker","togglePref"),M(G,t.target.checked))}function Kt(){P("Guild Tracker","showTracker"),B()}function Qt(){const t=r("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${nt(G)}&nbsp;`})
v(e,"change",Jt)
const s=st({textContent:"Show"})
N(s,Kt),d(e,s),d(n,e)}function qt(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
u(`[ <a href="${y}reliclist">Control</a> ]&nbsp;`,s)}function zt(t){const n=b("li",t)
if(!n||!n.length)return
const e=n[n.length-1].parentNode
c(e,`<li><a href="${R}${X()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function Yt(t,n){I(3,n,[t])}function Ut(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Et,Rt,Xt,qt,zt].forEach(k(Yt,t))}(t),p("showBuffLinks")&&I(3,$t),function(t){E()||(p("detailedConflictInfo")&&I(3,Gt,[t]),I(4,Qt))}(t),_t())}function Zt(){I(3,n),I(3,ft),I(3,rt),["-","manage"].includes(A.subcmd)&&Ut(),"view"===A.subcmd&&St()}export{Zt as default}
//# sourceMappingURL=injectGuild-2c36bf65.js.map
