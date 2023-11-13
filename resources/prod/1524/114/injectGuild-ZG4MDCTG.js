import{g as t,c as n}from"./colouredDots-DXYXLxko.js"
import{x as e,p as s,bS as o,r as a,cL as i,q as r,v as c,bG as l,m as f,d as u,i as d,ad as p,a5 as m,bH as g,k as h,au as b,cM as j,I as C,bj as L,o as N,s as w,E as S,F as k,c as M,bX as y,aT as H,g as $,D as x,a9 as T,l as v,b as E,cN as G,cO as I,aL as P,w as B,cP as X,ax as R,a3 as A,ab as O}from"./calfSystem-rn9Rc_nF.js"
import{l as V}from"./lastActivity-LZrHkUax.js"
import{s as D}from"./setTipped-G-gV03my.js"
import{a as F}from"./addCommas-olJWnOGa.js"
import{c as _}from"./createStyle-y4k9B6vH.js"
import{a as Q,g as q,c as U,b as W}from"./levelHighlight-fOCuROyg.js"
import Y from"./compressBio-s4jHwQuc.js"
import{b as z}from"./batch-Xe3JA1CU.js"
import{g as J}from"./getPlayerId-kFPa1sEG.js"
import{o as K}from"./openQuickBuffById-shBuZQr_.js"
import{d as Z}from"./dataRows-whWgu9nK.js"
import{c as tt}from"./createSpan-Q4CQr4i_.js"
import{h as nt}from"./hideElement-RABq1RME.js"
import{s as et}from"./simpleCheckbox-lyJmzCW_.js"
import{r as st}from"./regExpGroups-aNVGlRVi.js"
import{c as ot}from"./createButton-5RuoZ2dv.js"
import"./onlineDot-uch9xx6a.js"
import"./now-pQzGw6vd.js"
import"./asInt-NFaqrHrG.js"
import"./valueText-CeLZBdVf.js"
import"./intValue-JHhLnq8V.js"
import"./createInput-OE8Qn26K.js"
import"./createLabel-a0sZYpfq.js"
import"./fshOpen-16hNCxKt.js"
import"./isChecked-k2ijSL8v.js"
const at=0,it=1
function rt(t,n){const{mins:e}=V(n.dataset.tipped)
return e<44640&&(t[at]+=1,t[it]+=Number(a(i,n.dataset.tipped))),t}function ct(){const n=e("b",s()).find(o("Members"))
if(n){const e=t(),s=function(t){return t.reduce(rt,[0,0])}(e)
n.classList.add("tip-static"),D(`Active: ${s[at]}/${e.length}<br>Stamina: ${F(s[it])}`,n)}}function lt(t,n){const e=a(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function ft(t){const n=t.dataset.tipped,e=lt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=lt(n,/XP: <b>(?<realXp>\d*)/)
c(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+F(t-n)}(s,e)}</b>)`)}function ut(){const t=r('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&ft(t)}let dt=0,pt=0
function mt(t){return dt&&t>=Q()&&t<=q()}function gt(t){return pt&&t>=U()&&t<=W()}const ht=t=>[t,V(t.dataset.tipped).days],bt=([,t])=>t<7,jt=([t])=>[t,Number(a(j,t.dataset.tipped))],Ct=([t,n])=>[t.parentNode.parentNode.rowIndex,mt(n),gt(n)]
const Lt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Nt(t,n){if(t.length){const e=`${Lt(t)} {background-color: #${n};}`
d(document.body,_(e))}}function wt(){const t=h('#pCC a[data-tipped*="<td>VL:</td>"]').map(ht).filter(bt).map(jt).map(Ct),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Nt(n,"4671C8"),Nt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=b(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function St(){Number(m("guild_id"))!==g()&&(dt||pt)&&wt()}function kt(){dt=p("highlightPlayersNearMyLvl"),pt=p("highlightGvGPlayersNearMyLvl"),St(),p("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
u("",n),d(n,o),Y()}()}function Mt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function yt(t){"smallLink"===t.target.className&&(w("guild","buffLinks"),K(J(t.target.previousElementSibling.href)))}function Ht(){const t=C(`#pCC a[href^="${L}"]`)
z([3,t,0,Mt]),N(s(),yt)}function $t(t){return S({cmd:"guild",subcmd:"conflicts",page:t})}function xt(t,n){u(n,t.insertCell(-1))}function Tt(t,n,e){const s=t.insertRow(t.rows.length-2)
return xt(s,n),xt(s,e),s}function vt(t,n){Tt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Et(t,n,e){1===n&&function(t){const n=Tt(t,`<a href="${y}conflicts">Active Conflicts</a>`,"Score")
N(n,(t=>{"A"===t.target.tagName&&w("guildManage","conflictHeader")}))}(e),Z(t,7,0).forEach(M(vt,e))}function Gt(t,n){const e=k(n),s=r('#pCC input[name="page"]',e)
if(!s)return
const o=Number(s.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=r("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Et(s,n,e)}(e,o,t.node),a>o&&async function(t,n,e){n(e,await $t(t+1))}(o,Gt,t)}async function It(t){const[n]=t.rows[6].cells[0].children
if(n){Gt({node:n},await $t(1))}}function Pt(t){const n=t.target.dataset.linkto
w("guildManage","toggleVisibilty",n)
const e=$(n)
if(!e)return
const s=x("fshHide",e)
e.classList.toggle("fshHide"),T(n,s?"":"ON")}function Bt(t,n,e){const s=function(t){return tt({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=tt({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),c(n,"&nbsp;]"),n}(s)),n.id=e,p(e)&&nt(n),N(s,Pt)}function Xt(t){Bt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Rt(t){const n=t.rows[4].cells[1].children[0]
u(H(n.innerHTML),n),Bt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function At(t){const n=t.rows[15]?.cells[1].children[0]
n&&Bt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Ot=0
function Vt(t){const n=function(t){const{stam:n,max:e}=st(i,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Dt(t){Ot?Ot.disabled=!t:function(){const t=b(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=h(v,n).map(Vt).join("\n")
Ot=d(document.body,_(e)).sheet}()}const Ft="enableStamBars"
let _t=0
function Qt(){_t=!_t,T(Ft,_t),Dt(_t),w("guildManage","StamBars")}function qt(){!function(){if(!r("#pCC img.guild_openGuildStore"))return
const t=d(s(),f({innerHTML:et(Ft),style:{marginLeft:"66%"}}))
E(t,"change",Qt)}(),_t=p(Ft),_t&&Dt(_t)}function Ut(t){t.target.id===G&&(w("Guild Tracker","togglePref"),T(G,t.target.checked))}function Wt(){w("Guild Tracker","showTracker"),I()}function Yt(){const t=r("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${et(G)}&nbsp;`})
E(e,"change",Ut)
const s=ot({textContent:"Show"})
N(s,Wt),d(e,s),d(n,e)}function zt(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
u(`[ <a href="${y}reliclist">Control</a> ]&nbsp;`,s),N(s,(t=>{"A"===t.target.tagName&&w("guildManage","relic control")}))}function Jt(t){const n=b("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
c(e,`<li><a href="${X}${R()}">Self Recall</a></li>`),N(e,(t=>{"Self Recall"===A(t.target)&&w("guildManage","Self Recall")}))}function Kt(t,n){P(3,n,[t])}function Zt(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Xt,Rt,At,zt,Jt].forEach(M(Kt,t))}(t),p("showBuffLinks")&&P(3,Ht),function(t){B()||(p("detailedConflictInfo")&&P(3,It,[t]),P(4,Yt))}(t),qt())}function tn(){P(3,n),P(3,ut),P(3,ct),["-","manage"].includes(O.subcmd)&&Zt(),"view"===O.subcmd&&kt()}export{tn as default}
//# sourceMappingURL=injectGuild-ZG4MDCTG.js.map
