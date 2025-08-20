import{g as t,c as n}from"./colouredDots-CinmGFx6.js"
import{a3 as e,p as s,cD as a,aL as o,di as i,r as c,dM as r,b4 as l,cs as u,az as d,i as f,u as g,b as p,s as m,au as h,q as b,a1 as N,d as C,aq as L,ct as k,h as M,dN as w,ai as S,c1 as $,o as j,aS as y,aT as H,e as T,aX as x,c as v,cK as P,bv as R,ck as X,aP as A,g as B,aa as G,X as E,a6 as I,ap as D,dO as _,dP as q,bm as F,a2 as O,dQ as V,b6 as z,l as K,ax as Q}from"./calfSystem-KFszEm2S.js"
import{s as W}from"./setTipped-_gKWzwad.js"
import{c as J}from"./closestTable-D_vJ9Njb.js"
import{s as U}from"./simpleCheckbox-C7oDqkXH.js"
import{c as Y}from"./createStyle-DZTKavCB.js"
import{a as Z,g as tt,c as nt,b as et}from"./levelHighlight-DlRQlvAB.js"
import st from"./compressBio-CsCQht5s.js"
import{b as at}from"./batch-CLh2C2gx.js"
import"./onlineDot-hLWANonx.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-D4knQ_SJ.js"
import"./createLabel-ln3WV5Ep.js"
function ot(t,n){const{mins:e}=i(n.dataset.tipped)
return e<44640&&(t[0]+=1,t[1]+=Number(c(r,n.dataset.tipped))),t}function it(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ot,[0,0])}(e)
n.classList.add("tip-static"),W(`Active: ${s[0]}/${e.length}<br>Stamina: ${o(s[1])}`,n)}}const ct="compactRanks"
let rt=0,lt=0
function ut(){lt.classList.toggle("compact-ranks",rt)}function dt(){m("guild","compactRanks"),rt=!rt,h(ct,rt),ut()}function ft(){if(!s())return
const t=l(u,s())
lt=t[t.length-1],lt&&(!function(){const t=f(J(lt.parentNode).parentNode,g({innerHTML:U(ct),style:{textAlign:"center"}}))
p(t,"change",dt)}(),rt=d(ct),rt&&ut())}function gt(t,n){const e=c(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function pt(t){const n=t.dataset.tipped,e=gt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=gt(n,/XP: <b>(?<realXp>\d*)/)
N(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+o(t-n)}(s,e)}</b>)`)}function mt(){const t=b('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&pt(t)}let ht=0,bt=0
function Nt(t){return ht&&t>=Z()&&t<=tt()}function Ct(t){return bt&&t>=nt()&&t<=et()}const Lt=t=>[t,i(t.dataset.tipped).days],kt=([,t])=>t<7,Mt=([t])=>[t,Number(c(w,t.dataset.tipped))],wt=([t,n])=>[t.parentNode.parentNode.rowIndex,Nt(n),Ct(n)]
function St(t,n){if(t.length){const s=`${e=t,e.map(([t])=>`.fshHighlight tr:nth-child(${t+1})`).join(",")} {background-color: #${n};}`
f(document.body,Y(s))}var e}function $t(){const t=M('#pCC a[data-tipped*="<td>VL:</td>"]').map(Lt).filter(kt).map(Mt).map(wt),n=t.filter(([,t])=>t),e=t.filter(([,t,n])=>!t&&n)
St(n,"4671C8"),St(e,"FF9900"),function(t,n){if(t.length+n.length){const t=l(u,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function jt(){Number(L("guild_id"))!==k()&&(ht||bt)&&$t()}function yt(){ht=d("highlightPlayersNearMyLvl"),bt=d("highlightGvGPlayersNearMyLvl"),jt(),d("enableHistoryCompressor")&&function(){const t=e(u,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=g({id:"profile-bio",innerHTML:n.innerHTML})
C("",n),f(n,a),st()}()}function Ht(t){N(t.parentNode,' <span class="smallLink">[b]</span>')}function Tt(t){"smallLink"===t.target.className&&(m("guild","buffLinks"),y(H(t.target.previousElementSibling.href)))}function xt(){const t=S(`#pCC a[href^="${$}"]`)
at([3,t,0,Ht]),j(s(),Tt)}function vt(t){return T({cmd:"guild",subcmd:"conflicts",page:t})}function Pt(t,n){C(n,t.insertCell(-1))}function Rt(t,n,e){const s=t.insertRow(t.rows.length-2)
return Pt(s,n),Pt(s,e),s}function Xt(t,n){Rt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function At(t,n,e){1===n&&function(t){const n=Rt(t,`<a href="${P}conflicts">Active Conflicts</a>`,"Score")
j(n,t=>{"A"===t.target.tagName&&m("guildManage","conflictHeader")})}(e),x(t,7,0).forEach(v(Xt,e))}function Bt(t,n){const e=b('#pCC input[name="page"]',n)
if(!e)return
const s=Number(e.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(e)
!function(t,n,e){const s=b("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&At(s,n,e)}(n,s,t.node),a>s&&async function(t,n,e){n(e,await vt(t+1))}(s,Bt,t)}async function Gt(t){const[n]=t.rows[6].cells[0].children
if(n){Bt({node:n},await vt(1))}}function Et(t){const n=t.target.dataset.linkto
m("guildManage","toggleVisibilty",n)
const e=B(n)
if(!e)return
const s=G("fshHide",e)
e.classList.toggle("fshHide"),h(n,s?"":"ON")}function It(t,n,e){const s=function(t){return A({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
f(t,function(t){const n=A({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return f(n,t),N(n,"&nbsp;]"),n}(s)),n.id=e,d(e)&&X(n),j(s,Et)}function Dt(t){It(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function _t(t){const n=t.rows[4].cells[1].children[0]
C(R(n.innerHTML),n),It(n,t.rows[6].cells[0].children[0],"statisticsControl")}function qt(t){const n=t.rows[15]?.cells[1].children[0]
n&&It(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Ft=0
function Ot(t){const n=function(t){const{stam:n,max:e}=I(r,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Vt(t){Ft?Ft.disabled=!t:function(){const t=l(u,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=M(E,n).map(Ot).join("\n")
Ft=f(document.body,Y(e)).sheet}()}const zt="enableStamBars"
let Kt=0
function Qt(){Kt=!Kt,h(zt,Kt),Vt(Kt),m("guildManage","StamBars")}function Wt(){!function(){if(!b("#pCC img.guild_openGuildStore"))return
const t=l(u,s()),n=t[t.length-1],e=f(J(n.parentNode).parentNode,g({innerHTML:U(zt),style:{marginBottom:"5px",textAlign:"center"}}))
p(e,"change",Qt)}(),Kt=d(zt),Kt&&Vt(Kt)}function Jt(t){t.target.id===_&&(m("Guild Tracker","togglePref"),h(_,t.target.checked))}function Ut(){m("Guild Tracker","showTracker"),q()}function Yt(){const t=b("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=g({className:"fsh-tracker",innerHTML:`${U(_)}&nbsp;`})
p(e,"change",Jt)
const s=D({textContent:"Show"})
j(s,Ut),f(e,s),f(n,e)}function Zt(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
C(`[ <a href="${P}reliclist">Control</a> ]&nbsp;`,s),j(s,t=>{"A"===t.target.tagName&&m("guildManage","relic control")})}function tn(t){const n=l("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
N(e,`<li><a href="${V}${z()}">Self Recall</a></li>`),j(e,t=>{"Self Recall"===K(t.target)&&m("guildManage","Self Recall")})}function nn(t,n){F(3,n,[t])}function en(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Dt,_t,qt,Zt,tn].forEach(v(nn,t))}(t),d("showBuffLinks")&&F(3,xt),function(t){O()||(d("detailedConflictInfo")&&F(3,Gt,[t]),F(4,Yt))}(t),Wt())}function sn(){F(3,n),F(3,mt),F(3,it),F(3,ft),["-","manage"].includes(Q.subcmd)&&en(),"view"===Q.subcmd&&yt()}export{sn as default}
//# sourceMappingURL=injectGuild-DlMiQpuR.js.map
