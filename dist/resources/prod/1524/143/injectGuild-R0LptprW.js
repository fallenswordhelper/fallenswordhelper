import{g as t,c as n}from"./colouredDots-CLArNr5X.js"
import{y as e,p as s,cw as a,d3 as o,r as i,du as c,aS as r,cl as l,ao as u,i as d,m as f,b as p,s as g,aj as m,q as h,w as b,d as N,ae as C,cm as L,k as w,dv as k,N as S,bS as M,o as j,aG as y,aH as H,J as $,K as x,c as T,cC as v,bk as R,cb as B,aD as G,g as P,F as A,l as E,B as X,ab as I,dw as D,dx as F,bb as _,x as q,dy as O,aU as V,ac as J,am as K}from"./calfSystem-ChzN4Q-P.js"
import{s as Q}from"./setTipped-_gKWzwad.js"
import{a as U}from"./addCommas-C_h2HN8s.js"
import{c as W}from"./closestTable-DvVVJKGM.js"
import{s as z}from"./simpleCheckbox-CwefujnB.js"
import{c as Y}from"./createStyle-DDJmETKK.js"
import{a as Z,g as tt,c as nt,b as et}from"./levelHighlight-DCaL97MF.js"
import st from"./compressBio-D7eO2VNP.js"
import{b as at}from"./batch-CcQbYj5o.js"
import{d as ot}from"./dataRows-wal17PRE.js"
import"./onlineDot-mqfQV1WG.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-DC6X1nzh.js"
import"./createLabel-DQ3CQiAH.js"
const it=0,ct=1
function rt(t,n){const{mins:e}=o(n.dataset.tipped)
return e<44640&&(t[it]+=1,t[ct]+=Number(i(c,n.dataset.tipped))),t}function lt(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(rt,[0,0])}(e)
n.classList.add("tip-static"),Q(`Active: ${s[it]}/${e.length}<br>Stamina: ${U(s[ct])}`,n)}}const ut="compactRanks"
let dt=0,ft=0
function pt(){ft.classList.toggle("compact-ranks",dt)}function gt(){g("guild","compactRanks"),dt=!dt,m(ut,dt),pt()}function mt(){if(!s())return
const t=r(l,s())
ft=t[t.length-1],ft&&(!function(){const t=d(W(ft.parentNode).parentNode,f({innerHTML:z(ut),style:{textAlign:"center"}}))
p(t,"change",gt)}(),dt=u(ut),dt&&pt())}function ht(t,n){const e=i(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function bt(t){const n=t.dataset.tipped,e=ht(n,/XP Lock: <b>(?<lockXp>\d*)/),s=ht(n,/XP: <b>(?<realXp>\d*)/)
b(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+U(t-n)}(s,e)}</b>)`)}function Nt(){const t=h('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&bt(t)}let Ct=0,Lt=0
function wt(t){return Ct&&t>=Z()&&t<=tt()}function kt(t){return Lt&&t>=nt()&&t<=et()}const St=t=>[t,o(t.dataset.tipped).days],Mt=([,t])=>t<7,jt=([t])=>[t,Number(i(k,t.dataset.tipped))],yt=([t,n])=>[t.parentNode.parentNode.rowIndex,wt(n),kt(n)]
const Ht=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function $t(t,n){if(t.length){const e=`${Ht(t)} {background-color: #${n};}`
d(document.body,Y(e))}}function xt(){const t=w('#pCC a[data-tipped*="<td>VL:</td>"]').map(St).filter(Mt).map(jt).map(yt),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
$t(n,"4671C8"),$t(e,"FF9900"),function(t,n){if(t.length+n.length){const t=r(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function Tt(){Number(C("guild_id"))!==L()&&(Ct||Lt)&&xt()}function vt(){Ct=u("highlightPlayersNearMyLvl"),Lt=u("highlightGvGPlayersNearMyLvl"),Tt(),u("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=f({id:"profile-bio",innerHTML:n.innerHTML})
N("",n),d(n,a),st()}()}function Rt(t){b(t.parentNode,' <span class="smallLink">[b]</span>')}function Bt(t){"smallLink"===t.target.className&&(g("guild","buffLinks"),y(H(t.target.previousElementSibling.href)))}function Gt(){const t=S(`#pCC a[href^="${M}"]`)
at([3,t,0,Rt]),j(s(),Bt)}function Pt(t){return $({cmd:"guild",subcmd:"conflicts",page:t})}function At(t,n){N(n,t.insertCell(-1))}function Et(t,n,e){const s=t.insertRow(t.rows.length-2)
return At(s,n),At(s,e),s}function Xt(t,n){Et(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function It(t,n,e){1===n&&function(t){const n=Et(t,`<a href="${v}conflicts">Active Conflicts</a>`,"Score")
j(n,(t=>{"A"===t.target.tagName&&g("guildManage","conflictHeader")}))}(e),ot(t,7,0).forEach(T(Xt,e))}function Dt(t,n){const e=x(n),s=h('#pCC input[name="page"]',e)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=h("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&It(s,n,e)}(e,a,t.node),o>a&&async function(t,n,e){n(e,await Pt(t+1))}(a,Dt,t)}async function Ft(t){const[n]=t.rows[6].cells[0].children
if(n){Dt({node:n},await Pt(1))}}function _t(t){const n=t.target.dataset.linkto
g("guildManage","toggleVisibilty",n)
const e=P(n)
if(!e)return
const s=A("fshHide",e)
e.classList.toggle("fshHide"),m(n,s?"":"ON")}function qt(t,n,e){const s=function(t){return G({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=G({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),b(n,"&nbsp;]"),n}(s)),n.id=e,u(e)&&B(n),j(s,_t)}function Ot(t){qt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Vt(t){const n=t.rows[4].cells[1].children[0]
N(R(n.innerHTML),n),qt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Jt(t){const n=t.rows[15]?.cells[1].children[0]
n&&qt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Kt=0
function Qt(t){const n=function(t){const{stam:n,max:e}=X(c,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Ut(t){Kt?Kt.disabled=!t:function(){const t=r(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=w(E,n).map(Qt).join("\n")
Kt=d(document.body,Y(e)).sheet}()}const Wt="enableStamBars"
let zt=0
function Yt(){zt=!zt,m(Wt,zt),Ut(zt),g("guildManage","StamBars")}function Zt(){!function(){if(!h("#pCC img.guild_openGuildStore"))return
const t=r(l,s()),n=t[t.length-1],e=d(W(n.parentNode).parentNode,f({innerHTML:z(Wt),style:{marginBottom:"5px",textAlign:"center"}}))
p(e,"change",Yt)}(),zt=u(Wt),zt&&Ut(zt)}function tn(t){t.target.id===D&&(g("Guild Tracker","togglePref"),m(D,t.target.checked))}function nn(){g("Guild Tracker","showTracker"),F()}function en(){const t=h("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${z(D)}&nbsp;`})
p(e,"change",tn)
const s=I({textContent:"Show"})
j(s,nn),d(e,s),d(n,e)}function sn(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
N(`[ <a href="${v}reliclist">Control</a> ]&nbsp;`,s),j(s,(t=>{"A"===t.target.tagName&&g("guildManage","relic control")}))}function an(t){const n=r("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
b(e,`<li><a href="${O}${V()}">Self Recall</a></li>`),j(e,(t=>{"Self Recall"===J(t.target)&&g("guildManage","Self Recall")}))}function on(t,n){_(3,n,[t])}function cn(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Ot,Vt,Jt,sn,an].forEach(T(on,t))}(t),u("showBuffLinks")&&_(3,Gt),function(t){q()||(u("detailedConflictInfo")&&_(3,Ft,[t]),_(4,en))}(t),Zt())}function rn(){_(3,n),_(3,Nt),_(3,lt),_(3,mt),["-","manage"].includes(K.subcmd)&&cn(),"view"===K.subcmd&&vt()}export{rn as default}
//# sourceMappingURL=injectGuild-R0LptprW.js.map
