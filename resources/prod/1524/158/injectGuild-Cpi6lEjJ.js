import{g as t,c as n}from"./colouredDots-BfpJMcdJ.js"
import{a4 as e,p as s,cH as a,av as i,aM as o,dd as c,r,dA as l,b5 as u,cx as d,az as f,i as p,u as g,b as m,s as h,au as b,q as C,a2 as N,d as L,aq as k,aB as M,h as w,dB as S,ai as $,c3 as x,o as H,aT as j,aU as y,e as T,aY as v,c as B,cO as E,bx as P,cm as R,aQ as A,g as G,ab as X,Y as I,a7 as D,ap as _,dC as q,dD as F,bo as O,a3 as V,dE as Y,b7 as z,l as Q,ax as U}from"./calfSystem-CIuUjh4H.js"
import{s as W}from"./setTipped-_gKWzwad.js"
import{c as J}from"./closestTable-CAaKFM8t.js"
import{s as K}from"./simpleCheckbox-D1e9ej5E.js"
import{c as Z}from"./createStyle-Co3Q_8M9.js"
import{a as tt,g as nt,c as et,b as st}from"./levelHighlight-qcL3fFVb.js"
import at from"./compressBio-D8pQQikM.js"
import{b as it}from"./batch-BqkctEiX.js"
import"./onlineDot-ixY_oy9C.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-ESh6G5it.js"
import"./createLabel-CKsPg3Zr.js"
function ot(t,n){const{mins:e}=c(n.dataset.tipped)
return e<44640&&(t[0]+=1,t[1]+=Number(r(l,n.dataset.tipped))),t}function ct(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ot,[0,0])}(e)
n.classList.add("tip-static")
const a=i(s[1])?"":`<br>Stamina: ${o(s[1])}`
W(`Active: ${s[0]}/${e.length}${a}`,n)}}const rt="compactRanks"
let lt=0,ut=0
function dt(){ut.classList.toggle("compact-ranks",lt)}function ft(){h("guild","compactRanks"),lt=!lt,b(rt,lt),dt()}function pt(){if(!s())return
const t=u(d,s())
ut=t[t.length-1],ut&&(!function(){const t=p(J(ut.parentNode).parentNode,g({innerHTML:K(rt),style:{textAlign:"center"}}))
m(t,"change",ft)}(),lt=f(rt),lt&&dt())}function gt(t,n){const e=r(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function mt(t){const n=t.dataset.tipped,e=gt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=gt(n,/XP: <b>(?<realXp>\d*)/)
N(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+o(t-n)}(s,e)}</b>)`)}function ht(){const t=C('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&mt(t)}let bt=0,Ct=0
function Nt(t){return bt&&t>=tt()&&t<=nt()}function Lt(t){return Ct&&t>=et()&&t<=st()}const kt=t=>[t,c(t.dataset.tipped).days],Mt=([,t])=>t<7,wt=([t])=>[t,Number(r(S,t.dataset.tipped))],St=([t,n])=>[t.parentNode.parentNode.rowIndex,Nt(n),Lt(n)]
function $t(t,n){if(t.length){const s=`${e=t,e.map(([t])=>`.fshHighlight tr:nth-child(${t+1})`).join(",")} {background-color: #${n};}`
p(document.body,Z(s))}var e}function xt(){const t=w('#pCC a[data-tipped*="<td>VL:</td>"]').map(kt).filter(Mt).map(wt).map(St),n=t.filter(([,t])=>t),e=t.filter(([,t,n])=>!t&&n)
$t(n,"4671C8"),$t(e,"FF9900"),function(t,n){if(t.length+n.length){const t=u(d,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function Ht(){Number(k("guild_id"))!==M()&&(bt||Ct)&&xt()}function jt(){bt=f("highlightPlayersNearMyLvl"),Ct=f("highlightGvGPlayersNearMyLvl"),Ht(),f("enableHistoryCompressor")&&function(){const t=e(d,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=g({id:"profile-bio",innerHTML:n.innerHTML})
L("",n),p(n,a),at()}()}function yt(t){N(t.parentNode,' <span class="smallLink">[b]</span>')}function Tt(t){"smallLink"===t.target.className&&(h("guild","buffLinks"),j(y(t.target.previousElementSibling.href)))}function vt(){const t=$(`#pCC a[href^="${x}"]`)
it([3,t,0,yt]),H(s(),Tt)}function Bt(t){return T({cmd:"guild",subcmd:"conflicts",page:t})}function Et(t,n){L(n,t.insertCell(-1))}function Pt(t,n,e){const s=t.insertRow(t.rows.length-2)
return Et(s,n),Et(s,e),s}function Rt(t,n){Pt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function At(t,n,e){1===n&&function(t){const n=Pt(t,`<a href="${E}conflicts">Active Conflicts</a>`,"Score")
H(n,t=>{"A"===t.target.tagName&&h("guildManage","conflictHeader")})}(e),v(t,7,0).forEach(B(Rt,e))}function Gt(t,n){const e=C('#pCC input[name="page"]',n)
if(!e)return
const s=Number(e.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(e)
!function(t,n,e){const s=C("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&At(s,n,e)}(n,s,t.node),a>s&&async function(t,n,e){n(e,await Bt(t+1))}(s,Gt,t)}async function Xt(t){const[n]=t.rows[6].cells[0].children
if(n){Gt({node:n},await Bt(1))}}function It(t){const n=t.target.dataset.linkto
h("guildManage","toggleVisibilty",n)
const e=G(n)
if(!e)return
const s=X("fshHide",e)
e.classList.toggle("fshHide"),b(n,s?"":"ON")}function Dt(t,n,e){const s=function(t){return A({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
p(t,function(t){const n=A({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return p(n,t),N(n,"&nbsp;]"),n}(s)),n.id=e,f(e)&&R(n),H(s,It)}function _t(t){Dt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function qt(t){const n=t.rows[4].cells[1].children[0]
L(P(n.innerHTML),n),Dt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Ft(t){const n=t.rows[15]?.cells[1].children[0]
n&&Dt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Ot=0
function Vt(t){const n=function(t){const{stam:n,max:e}=D(l,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Yt(t){Ot?Ot.disabled=!t:function(){const t=u(d,s()),n=t[t.length-1],e=w(I,n)
if(!e.length)return
const a=e.filter(t=>l.test(t.dataset.tipped))
if(!a.length)return
n.classList.add("fshProgressBar")
const i=a.map(Vt).join("\n")
Ot=p(document.body,Z(i)).sheet}()}const zt="enableStamBars"
let Qt=0
function Ut(){Qt=!Qt,b(zt,Qt),Yt(Qt),h("guildManage","StamBars")}function Wt(){!function(){if(!C("#pCC img.guild_openGuildStore"))return
const t=u(d,s()),n=t[t.length-1],e=p(J(n.parentNode).parentNode,g({innerHTML:K(zt),style:{marginBottom:"5px",textAlign:"center"}}))
m(e,"change",Ut)}(),Qt=f(zt),Qt&&Yt(Qt)}function Jt(t){t.target.id===q&&(h("Guild Tracker","togglePref"),b(q,t.target.checked))}function Kt(){h("Guild Tracker","showTracker"),F()}function Zt(){const t=C("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=g({className:"fsh-tracker",innerHTML:`${K(q)}&nbsp;`})
m(e,"change",Jt)
const s=_({textContent:"Show"})
H(s,Kt),p(e,s),p(n,e)}function tn(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
L(`[ <a href="${E}reliclist">Control</a> ]&nbsp;`,s),H(s,t=>{"A"===t.target.tagName&&h("guildManage","relic control")})}function nn(t){const n=u("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
N(e,`<li><a href="${Y}${z()}">Self Recall</a></li>`),H(e,t=>{"Self Recall"===Q(t.target)&&h("guildManage","Self Recall")})}function en(t,n){O(3,n,[t])}function sn(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[_t,qt,Ft,tn,nn].forEach(B(en,t))}(t),f("showBuffLinks")&&O(3,vt),function(t){V()||(f("detailedConflictInfo")&&O(3,Xt,[t]),O(4,Zt))}(t),Wt())}function an(){O(3,n),O(3,ht),O(3,ct),O(3,pt),["-","manage"].includes(U.subcmd)&&sn(),"view"===U.subcmd&&jt()}export{an as default}
//# sourceMappingURL=injectGuild-Cpi6lEjJ.js.map
