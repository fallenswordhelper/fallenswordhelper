import{g as t,c as n}from"./colouredDots-DchJRC_Z.js"
import{a4 as e,p as s,cE as a,aM as o,db as i,r as c,dF as r,b5 as l,ct as u,aA as d,i as f,u as g,b as p,s as m,av as h,q as b,a2 as N,d as C,ar as L,cu as k,h as w,dG as M,aj as y,c2 as S,o as H,aT as $,aU as j,e as T,aY as x,c as v,cL as G,bw as P,cl as R,aQ as A,g as B,ab as E,Y as I,a7 as X,aq as q,dH as F,dI as Y,bn as _,a3 as D,dJ as V,b7 as J,l as O,ay as Q}from"./calfSystem-79LsojAC.js"
import{s as U}from"./setTipped-_gKWzwad.js"
import{c as W}from"./closestTable-BuyyntoH.js"
import{s as z}from"./simpleCheckbox-GIXRLUIF.js"
import{c as K}from"./createStyle-BdMrx8ah.js"
import{a as Z,g as tt,c as nt,b as et}from"./levelHighlight-DiLR0cOI.js"
import st from"./compressBio-DFTbIewa.js"
import{b as at}from"./batch-BGPP456i.js"
import"./onlineDot-XDIE_fQc.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-7MlQDlWD.js"
import"./createLabel-CFBkgauW.js"
function ot(t,n){const{mins:e}=i(n.dataset.tipped)
return e<44640&&(t[0]+=1,t[1]+=Number(c(r,n.dataset.tipped))),t}function it(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ot,[0,0])}(e)
n.classList.add("tip-static"),U(`Active: ${s[0]}/${e.length}<br>Stamina: ${o(s[1])}`,n)}}const ct="compactRanks"
let rt=0,lt=0
function ut(){lt.classList.toggle("compact-ranks",rt)}function dt(){m("guild","compactRanks"),rt=!rt,h(ct,rt),ut()}function ft(){if(!s())return
const t=l(u,s())
lt=t[t.length-1],lt&&(!function(){const t=f(W(lt.parentNode).parentNode,g({innerHTML:z(ct),style:{textAlign:"center"}}))
p(t,"change",dt)}(),rt=d(ct),rt&&ut())}function gt(t,n){const e=c(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function pt(t){const n=t.dataset.tipped,e=gt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=gt(n,/XP: <b>(?<realXp>\d*)/)
N(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+o(t-n)}(s,e)}</b>)`)}function mt(){const t=b('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&pt(t)}let ht=0,bt=0
function Nt(t){return ht&&t>=Z()&&t<=tt()}function Ct(t){return bt&&t>=nt()&&t<=et()}const Lt=t=>[t,i(t.dataset.tipped).days],kt=([,t])=>t<7,wt=([t])=>[t,Number(c(M,t.dataset.tipped))],Mt=([t,n])=>[t.parentNode.parentNode.rowIndex,Nt(n),Ct(n)]
function yt(t,n){if(t.length){const s=`${e=t,e.map(([t])=>`.fshHighlight tr:nth-child(${t+1})`).join(",")} {background-color: #${n};}`
f(document.body,K(s))}var e}function St(){const t=w('#pCC a[data-tipped*="<td>VL:</td>"]').map(Lt).filter(kt).map(wt).map(Mt),n=t.filter(([,t])=>t),e=t.filter(([,t,n])=>!t&&n)
yt(n,"4671C8"),yt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=l(u,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function Ht(){Number(L("guild_id"))!==k()&&(ht||bt)&&St()}function $t(){ht=d("highlightPlayersNearMyLvl"),bt=d("highlightGvGPlayersNearMyLvl"),Ht(),d("enableHistoryCompressor")&&function(){const t=e(u,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=g({id:"profile-bio",innerHTML:n.innerHTML})
C("",n),f(n,a),st()}()}function jt(t){N(t.parentNode,' <span class="smallLink">[b]</span>')}function Tt(t){"smallLink"===t.target.className&&(m("guild","buffLinks"),$(j(t.target.previousElementSibling.href)))}function xt(){const t=y(`#pCC a[href^="${S}"]`)
at([3,t,0,jt]),H(s(),Tt)}function vt(t){return T({cmd:"guild",subcmd:"conflicts",page:t})}function Gt(t,n){C(n,t.insertCell(-1))}function Pt(t,n,e){const s=t.insertRow(t.rows.length-2)
return Gt(s,n),Gt(s,e),s}function Rt(t,n){Pt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function At(t,n,e){1===n&&function(t){const n=Pt(t,`<a href="${G}conflicts">Active Conflicts</a>`,"Score")
H(n,t=>{"A"===t.target.tagName&&m("guildManage","conflictHeader")})}(e),x(t,7,0).forEach(v(Rt,e))}function Bt(t,n){const e=b('#pCC input[name="page"]',n)
if(!e)return
const s=Number(e.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(e)
!function(t,n,e){const s=b("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&At(s,n,e)}(n,s,t.node),a>s&&async function(t,n,e){n(e,await vt(t+1))}(s,Bt,t)}async function Et(t){const[n]=t.rows[6].cells[0].children
if(n){Bt({node:n},await vt(1))}}function It(t){const n=t.target.dataset.linkto
m("guildManage","toggleVisibilty",n)
const e=B(n)
if(!e)return
const s=E("fshHide",e)
e.classList.toggle("fshHide"),h(n,s?"":"ON")}function Xt(t,n,e){const s=function(t){return A({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
f(t,function(t){const n=A({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return f(n,t),N(n,"&nbsp;]"),n}(s)),n.id=e,d(e)&&R(n),H(s,It)}function qt(t){Xt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Ft(t){const n=t.rows[4].cells[1].children[0]
C(P(n.innerHTML),n),Xt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Yt(t){const n=t.rows[15]?.cells[1].children[0]
n&&Xt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let _t=0
function Dt(t){const n=function(t){const{stam:n,max:e}=X(r,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Vt(t){_t?_t.disabled=!t:function(){const t=l(u,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=w(I,n).map(Dt).join("\n")
_t=f(document.body,K(e)).sheet}()}const Jt="enableStamBars"
let Ot=0
function Qt(){Ot=!Ot,h(Jt,Ot),Vt(Ot),m("guildManage","StamBars")}function Ut(){!function(){if(!b("#pCC img.guild_openGuildStore"))return
const t=l(u,s()),n=t[t.length-1],e=f(W(n.parentNode).parentNode,g({innerHTML:z(Jt),style:{marginBottom:"5px",textAlign:"center"}}))
p(e,"change",Qt)}(),Ot=d(Jt),Ot&&Vt(Ot)}function Wt(t){t.target.id===F&&(m("Guild Tracker","togglePref"),h(F,t.target.checked))}function zt(){m("Guild Tracker","showTracker"),Y()}function Kt(){const t=b("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=g({className:"fsh-tracker",innerHTML:`${z(F)}&nbsp;`})
p(e,"change",Wt)
const s=q({textContent:"Show"})
H(s,zt),f(e,s),f(n,e)}function Zt(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
C(`[ <a href="${G}reliclist">Control</a> ]&nbsp;`,s),H(s,t=>{"A"===t.target.tagName&&m("guildManage","relic control")})}function tn(t){const n=l("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
N(e,`<li><a href="${V}${J()}">Self Recall</a></li>`),H(e,t=>{"Self Recall"===O(t.target)&&m("guildManage","Self Recall")})}function nn(t,n){_(3,n,[t])}function en(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[qt,Ft,Yt,Zt,tn].forEach(v(nn,t))}(t),d("showBuffLinks")&&_(3,xt),function(t){D()||(d("detailedConflictInfo")&&_(3,Et,[t]),_(4,Kt))}(t),Ut())}function sn(){_(3,n),_(3,mt),_(3,it),_(3,ft),["-","manage"].includes(Q.subcmd)&&en(),"view"===Q.subcmd&&$t()}export{sn as default}
//# sourceMappingURL=injectGuild-21LA98t1.js.map
