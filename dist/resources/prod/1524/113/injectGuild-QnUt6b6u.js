import{g as t,c as n}from"./colouredDots-xGnG8MgF.js"
import{x as e,p as s,bS as o,r as a,cM as i,q as r,v as c,bG as l,m as f,d as u,i as d,ad as p,a5 as m,bH as g,k as h,au as b,cN as j,I as C,bj as N,o as L,s as w,E as S,F as k,c as M,bX as y,aT as H,g as $,D as x,a9 as T,l as v,b as E,cO as G,cP as I,aL as P,w as B,cQ as X,ax as R,a3 as A,ab as O}from"./calfSystem-VUa7wwu1.js"
import{l as V}from"./lastActivity-SSyND1j3.js"
import{s as D}from"./setTipped-G-gV03my.js"
import{a as F}from"./addCommas-olJWnOGa.js"
import{c as Q}from"./createStyle-RLyU9kJv.js"
import{a as _,g as q,c as U,b as W}from"./levelHighlight-9qo1ycLz.js"
import Y from"./compressBio-cN1kySUb.js"
import{b as z}from"./batch-FSQCcN8K.js"
import{g as J}from"./getPlayerId-xJ0j4Os1.js"
import{o as K}from"./openQuickBuffById-XivPrE3T.js"
import{d as Z}from"./dataRows-THNgirxe.js"
import{c as tt}from"./createSpan-3W4T-7NF.js"
import{h as nt}from"./hideElement-RABq1RME.js"
import{s as et}from"./simpleCheckbox-8yANFw8B.js"
import{r as st}from"./regExpGroups-Qkm3EIP8.js"
import{c as ot}from"./createButton-jRLKoafr.js"
import"./onlineDot-BYFicYeL.js"
import"./now-pQzGw6vd.js"
import"./asInt-X0f7ehmu.js"
import"./valueText-13w7MOtM.js"
import"./intValue-JHhLnq8V.js"
import"./createInput-NNh8Iaam.js"
import"./createLabel-8iz0jsGz.js"
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
function mt(t){return dt&&t>=_()&&t<=q()}function gt(t){return pt&&t>=U()&&t<=W()}const ht=t=>[t,V(t.dataset.tipped).days],bt=([,t])=>t<7,jt=([t])=>[t,Number(a(j,t.dataset.tipped))],Ct=([t,n])=>[t.parentNode.parentNode.rowIndex,mt(n),gt(n)]
const Nt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Lt(t,n){if(t.length){const e=`${Nt(t)} {background-color: #${n};}`
d(document.body,Q(e))}}function wt(){const t=h('#pCC a[data-tipped*="<td>VL:</td>"]').map(ht).filter(bt).map(jt).map(Ct),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Lt(n,"4671C8"),Lt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=b(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function St(){Number(m("guild_id"))!==g()&&(dt||pt)&&wt()}function kt(){dt=p("highlightPlayersNearMyLvl"),pt=p("highlightGvGPlayersNearMyLvl"),St(),p("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],o=f({id:"profile-bio",innerHTML:n.innerHTML})
u("",n),d(n,o),Y()}()}function Mt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function yt(t){"smallLink"===t.target.className&&(w("guild","buffLinks"),K(J(t.target.previousElementSibling.href)))}function Ht(){const t=C(`#pCC a[href^="${N}"]`)
z([3,t,0,Mt]),L(s(),yt)}function $t(t){return S({cmd:"guild",subcmd:"conflicts",page:t})}function xt(t,n){u(n,t.insertCell(-1))}function Tt(t,n,e){const s=t.insertRow(t.rows.length-2)
return xt(s,n),xt(s,e),s}function vt(t,n){Tt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Et(t,n,e){1===n&&function(t){const n=Tt(t,`<a href="${y}conflicts">Active Conflicts</a>`,"Score")
L(n,(t=>{"A"===t.target.tagName&&w("guildManage","conflictHeader")}))}(e),Z(t,7,0).forEach(M(vt,e))}function Gt(t,n){const e=k(n),s=r('#pCC input[name="page"]',e)
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
return d(n,t),c(n,"&nbsp;]"),n}(s)),n.id=e,p(e)&&nt(n),L(s,Pt)}function Xt(t){Bt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Rt(t){const n=t.rows[4].cells[1].children[0]
u(H(n.innerHTML),n),Bt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function At(t){const n=t.rows[15]?.cells[1].children[0]
n&&Bt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Ot=0
function Vt(t){const n=function(t){const{stam:n,max:e}=st(i,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Dt(t){Ot?Ot.disabled=!t:function(){const t=b(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=h(v,n).map(Vt).join("\n")
Ot=d(document.body,Q(e)).sheet}()}const Ft="enableStamBars"
let Qt=0
function _t(){Qt=!Qt,T(Ft,Qt),Dt(Qt),w("guildManage","StamBars")}function qt(){!function(){if(!r("#pCC img.guild_openGuildStore"))return
const t=d(s(),f({innerHTML:et(Ft),style:{marginLeft:"66%"}}))
E(t,"change",_t)}(),Qt=p(Ft),Qt&&Dt(Qt)}function Ut(t){t.target.id===G&&(w("Guild Tracker","togglePref"),T(G,t.target.checked))}function Wt(){w("Guild Tracker","showTracker"),I()}function Yt(){const t=r("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${et(G)}&nbsp;`})
E(e,"change",Ut)
const s=ot({textContent:"Show"})
L(s,Wt),d(e,s),d(n,e)}function zt(t){const n=e("b",t).filter(o("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
u(`[ <a href="${y}reliclist">Control</a> ]&nbsp;`,s),L(s,(t=>{"A"===t.target.tagName&&w("guildManage","relic control")}))}function Jt(t){const n=b("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
c(e,`<li><a href="${X}${R()}">Self Recall</a></li>`),L(e,(t=>{"Self Recall"===A(t.target)&&w("guildManage","Self Recall")}))}function Kt(t,n){P(3,n,[t])}function Zt(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Xt,Rt,At,zt,Jt].forEach(M(Kt,t))}(t),p("showBuffLinks")&&P(3,Ht),function(t){B()||(p("detailedConflictInfo")&&P(3,It,[t]),P(4,Yt))}(t),qt())}function tn(){P(3,n),P(3,ut),P(3,ct),["-","manage"].includes(O.subcmd)&&Zt(),"view"===O.subcmd&&kt()}export{tn as default}
//# sourceMappingURL=injectGuild-QnUt6b6u.js.map
