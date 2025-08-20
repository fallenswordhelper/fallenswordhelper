import{g as t,c as n}from"./colouredDots-B_REpQ9x.js"
import{a3 as e,p as s,cB as a,aL as o,dh as i,r as c,dL as r,b4 as l,cq as u,az as f,i as d,u as g,b as p,s as m,au as h,q as b,a1 as N,d as C,aq as L,cr as k,h as w,dM as M,ai as S,c1 as $,o as y,aS as H,aT as T,e as j,aX as x,c as v,cI as P,bv as B,ck as R,aP as X,g as A,aa as G,X as E,a6 as I,ap as q,dN as _,dO as D,bm as F,a2 as O,dP as V,b6 as z,l as W,ax as J}from"./calfSystem-CT1aM4VG.js"
import{s as K}from"./setTipped-_gKWzwad.js"
import{c as Q}from"./closestTable-C24mp168.js"
import{s as U}from"./simpleCheckbox-DX3v3qR1.js"
import{c as Y}from"./createStyle-BtTqlvMl.js"
import{a as Z,g as tt,c as nt,b as et}from"./levelHighlight-w_oY2gIP.js"
import st from"./compressBio-CNlVeh9f.js"
import{b as at}from"./batch-CVoa0La2.js"
import"./onlineDot-rvpUtCt8.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-CTW03HuX.js"
import"./createLabel-CJEqIp3q.js"
const ot=0,it=1
function ct(t,n){const{mins:e}=i(n.dataset.tipped)
return e<44640&&(t[ot]+=1,t[it]+=Number(c(r,n.dataset.tipped))),t}function rt(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ct,[0,0])}(e)
n.classList.add("tip-static"),K(`Active: ${s[ot]}/${e.length}<br>Stamina: ${o(s[it])}`,n)}}const lt="compactRanks"
let ut=0,ft=0
function dt(){ft.classList.toggle("compact-ranks",ut)}function gt(){m("guild","compactRanks"),ut=!ut,h(lt,ut),dt()}function pt(){if(!s())return
const t=l(u,s())
ft=t[t.length-1],ft&&(!function(){const t=d(Q(ft.parentNode).parentNode,g({innerHTML:U(lt),style:{textAlign:"center"}}))
p(t,"change",gt)}(),ut=f(lt),ut&&dt())}function mt(t,n){const e=c(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function ht(t){const n=t.dataset.tipped,e=mt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=mt(n,/XP: <b>(?<realXp>\d*)/)
N(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+o(t-n)}(s,e)}</b>)`)}function bt(){const t=b('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&ht(t)}let Nt=0,Ct=0
function Lt(t){return Nt&&t>=Z()&&t<=tt()}function kt(t){return Ct&&t>=nt()&&t<=et()}const wt=t=>[t,i(t.dataset.tipped).days],Mt=([,t])=>t<7,St=([t])=>[t,Number(c(M,t.dataset.tipped))],$t=([t,n])=>[t.parentNode.parentNode.rowIndex,Lt(n),kt(n)]
const yt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Ht(t,n){if(t.length){const e=`${yt(t)} {background-color: #${n};}`
d(document.body,Y(e))}}function Tt(){const t=w('#pCC a[data-tipped*="<td>VL:</td>"]').map(wt).filter(Mt).map(St).map($t),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
Ht(n,"4671C8"),Ht(e,"FF9900"),function(t,n){if(t.length+n.length){const t=l(u,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function jt(){Number(L("guild_id"))!==k()&&(Nt||Ct)&&Tt()}function xt(){Nt=f("highlightPlayersNearMyLvl"),Ct=f("highlightGvGPlayersNearMyLvl"),jt(),f("enableHistoryCompressor")&&function(){const t=e(u,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=g({id:"profile-bio",innerHTML:n.innerHTML})
C("",n),d(n,a),st()}()}function vt(t){N(t.parentNode,' <span class="smallLink">[b]</span>')}function Pt(t){"smallLink"===t.target.className&&(m("guild","buffLinks"),H(T(t.target.previousElementSibling.href)))}function Bt(){const t=S(`#pCC a[href^="${$}"]`)
at([3,t,0,vt]),y(s(),Pt)}function Rt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function Xt(t,n){C(n,t.insertCell(-1))}function At(t,n,e){const s=t.insertRow(t.rows.length-2)
return Xt(s,n),Xt(s,e),s}function Gt(t,n){At(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Et(t,n,e){1===n&&function(t){const n=At(t,`<a href="${P}conflicts">Active Conflicts</a>`,"Score")
y(n,(t=>{"A"===t.target.tagName&&m("guildManage","conflictHeader")}))}(e),x(t,7,0).forEach(v(Gt,e))}function It(t,n){const e=b('#pCC input[name="page"]',n)
if(!e)return
const s=Number(e.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(e)
!function(t,n,e){const s=b("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Et(s,n,e)}(n,s,t.node),a>s&&async function(t,n,e){n(e,await Rt(t+1))}(s,It,t)}async function qt(t){const[n]=t.rows[6].cells[0].children
if(n){It({node:n},await Rt(1))}}function _t(t){const n=t.target.dataset.linkto
m("guildManage","toggleVisibilty",n)
const e=A(n)
if(!e)return
const s=G("fshHide",e)
e.classList.toggle("fshHide"),h(n,s?"":"ON")}function Dt(t,n,e){const s=function(t){return X({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=X({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),N(n,"&nbsp;]"),n}(s)),n.id=e,f(e)&&R(n),y(s,_t)}function Ft(t){Dt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Ot(t){const n=t.rows[4].cells[1].children[0]
C(B(n.innerHTML),n),Dt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Vt(t){const n=t.rows[15]?.cells[1].children[0]
n&&Dt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let zt=0
function Wt(t){const n=function(t){const{stam:n,max:e}=I(r,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Jt(t){zt?zt.disabled=!t:function(){const t=l(u,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=w(E,n).map(Wt).join("\n")
zt=d(document.body,Y(e)).sheet}()}const Kt="enableStamBars"
let Qt=0
function Ut(){Qt=!Qt,h(Kt,Qt),Jt(Qt),m("guildManage","StamBars")}function Yt(){!function(){if(!b("#pCC img.guild_openGuildStore"))return
const t=l(u,s()),n=t[t.length-1],e=d(Q(n.parentNode).parentNode,g({innerHTML:U(Kt),style:{marginBottom:"5px",textAlign:"center"}}))
p(e,"change",Ut)}(),Qt=f(Kt),Qt&&Jt(Qt)}function Zt(t){t.target.id===_&&(m("Guild Tracker","togglePref"),h(_,t.target.checked))}function tn(){m("Guild Tracker","showTracker"),D()}function nn(){const t=b("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=g({className:"fsh-tracker",innerHTML:`${U(_)}&nbsp;`})
p(e,"change",Zt)
const s=q({textContent:"Show"})
y(s,tn),d(e,s),d(n,e)}function en(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
C(`[ <a href="${P}reliclist">Control</a> ]&nbsp;`,s),y(s,(t=>{"A"===t.target.tagName&&m("guildManage","relic control")}))}function sn(t){const n=l("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
N(e,`<li><a href="${V}${z()}">Self Recall</a></li>`),y(e,(t=>{"Self Recall"===W(t.target)&&m("guildManage","Self Recall")}))}function an(t,n){F(3,n,[t])}function on(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Ft,Ot,Vt,en,sn].forEach(v(an,t))}(t),f("showBuffLinks")&&F(3,Bt),function(t){O()||(f("detailedConflictInfo")&&F(3,qt,[t]),F(4,nn))}(t),Yt())}function cn(){F(3,n),F(3,bt),F(3,rt),F(3,pt),["-","manage"].includes(J.subcmd)&&on(),"view"===J.subcmd&&xt()}export{cn as default}
//# sourceMappingURL=injectGuild-CJqD-Hrd.js.map
