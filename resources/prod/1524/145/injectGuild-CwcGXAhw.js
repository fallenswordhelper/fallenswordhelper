import{g as t,c as n}from"./colouredDots-C-EPKG_P.js"
import{y as e,p as s,cw as a,d3 as o,r as i,du as c,aS as r,cl as l,ao as u,i as d,m as f,b as p,s as g,aj as m,q as h,w as b,d as C,ae as N,cm as L,k as w,dv as k,N as M,bS as S,o as j,aG as y,aH as H,J as $,K as x,c as T,cC as v,bk as R,cb as B,aD as P,g as G,F as E,l as A,B as X,ab as I,dw as D,dx as F,bb as _,x as O,dy as V,aU as q,ac as J,am as K}from"./calfSystem-CvwhhJv4.js"
import{s as U}from"./setTipped-_gKWzwad.js"
import{a as W}from"./addCommas-C_h2HN8s.js"
import{c as z}from"./closestTable-DA5PEIxg.js"
import{s as Q}from"./simpleCheckbox-n2TKkJvn.js"
import{c as Y}from"./createStyle-C59SxshO.js"
import{a as Z,g as tt,c as nt,b as et}from"./levelHighlight-BCIkKawI.js"
import st from"./compressBio-B9wHNVMV.js"
import{b as at}from"./batch-CmNsoLM6.js"
import{d as ot}from"./dataRows-DV8H12Ga.js"
import"./onlineDot-BuW2-RLs.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-DheNsgVc.js"
import"./createLabel-BAHYMagq.js"
const it=0,ct=1
function rt(t,n){const{mins:e}=o(n.dataset.tipped)
return e<44640&&(t[it]+=1,t[ct]+=Number(i(c,n.dataset.tipped))),t}function lt(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(rt,[0,0])}(e)
n.classList.add("tip-static"),U(`Active: ${s[it]}/${e.length}<br>Stamina: ${W(s[ct])}`,n)}}const ut="compactRanks"
let dt=0,ft=0
function pt(){ft.classList.toggle("compact-ranks",dt)}function gt(){g("guild","compactRanks"),dt=!dt,m(ut,dt),pt()}function mt(){if(!s())return
const t=r(l,s())
ft=t[t.length-1],ft&&(!function(){const t=d(z(ft.parentNode).parentNode,f({innerHTML:Q(ut),style:{textAlign:"center"}}))
p(t,"change",gt)}(),dt=u(ut),dt&&pt())}function ht(t,n){const e=i(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function bt(t){const n=t.dataset.tipped,e=ht(n,/XP Lock: <b>(?<lockXp>\d*)/),s=ht(n,/XP: <b>(?<realXp>\d*)/)
b(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+W(t-n)}(s,e)}</b>)`)}function Ct(){const t=h('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&bt(t)}let Nt=0,Lt=0
function wt(t){return Nt&&t>=Z()&&t<=tt()}function kt(t){return Lt&&t>=nt()&&t<=et()}const Mt=t=>[t,o(t.dataset.tipped).days],St=([,t])=>t<7,jt=([t])=>[t,Number(i(k,t.dataset.tipped))],yt=([t,n])=>[t.parentNode.parentNode.rowIndex,wt(n),kt(n)]
const Ht=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function $t(t,n){if(t.length){const e=`${Ht(t)} {background-color: #${n};}`
d(document.body,Y(e))}}function xt(){const t=w('#pCC a[data-tipped*="<td>VL:</td>"]').map(Mt).filter(St).map(jt).map(yt),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
$t(n,"4671C8"),$t(e,"FF9900"),function(t,n){if(t.length+n.length){const t=r(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function Tt(){Number(N("guild_id"))!==L()&&(Nt||Lt)&&xt()}function vt(){Nt=u("highlightPlayersNearMyLvl"),Lt=u("highlightGvGPlayersNearMyLvl"),Tt(),u("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=f({id:"profile-bio",innerHTML:n.innerHTML})
C("",n),d(n,a),st()}()}function Rt(t){b(t.parentNode,' <span class="smallLink">[b]</span>')}function Bt(t){"smallLink"===t.target.className&&(g("guild","buffLinks"),y(H(t.target.previousElementSibling.href)))}function Pt(){const t=M(`#pCC a[href^="${S}"]`)
at([3,t,0,Rt]),j(s(),Bt)}function Gt(t){return $({cmd:"guild",subcmd:"conflicts",page:t})}function Et(t,n){C(n,t.insertCell(-1))}function At(t,n,e){const s=t.insertRow(t.rows.length-2)
return Et(s,n),Et(s,e),s}function Xt(t,n){At(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function It(t,n,e){1===n&&function(t){const n=At(t,`<a href="${v}conflicts">Active Conflicts</a>`,"Score")
j(n,(t=>{"A"===t.target.tagName&&g("guildManage","conflictHeader")}))}(e),ot(t,7,0).forEach(T(Xt,e))}function Dt(t,n){const e=x(n),s=h('#pCC input[name="page"]',e)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(s)
!function(t,n,e){const s=h("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&It(s,n,e)}(e,a,t.node),o>a&&async function(t,n,e){n(e,await Gt(t+1))}(a,Dt,t)}async function Ft(t){const[n]=t.rows[6].cells[0].children
if(n){Dt({node:n},await Gt(1))}}function _t(t){const n=t.target.dataset.linkto
g("guildManage","toggleVisibilty",n)
const e=G(n)
if(!e)return
const s=E("fshHide",e)
e.classList.toggle("fshHide"),m(n,s?"":"ON")}function Ot(t,n,e){const s=function(t){return P({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=P({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),b(n,"&nbsp;]"),n}(s)),n.id=e,u(e)&&B(n),j(s,_t)}function Vt(t){Ot(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function qt(t){const n=t.rows[4].cells[1].children[0]
C(R(n.innerHTML),n),Ot(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Jt(t){const n=t.rows[15]?.cells[1].children[0]
n&&Ot(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Kt=0
function Ut(t){const n=function(t){const{stam:n,max:e}=X(c,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Wt(t){Kt?Kt.disabled=!t:function(){const t=r(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=w(A,n).map(Ut).join("\n")
Kt=d(document.body,Y(e)).sheet}()}const zt="enableStamBars"
let Qt=0
function Yt(){Qt=!Qt,m(zt,Qt),Wt(Qt),g("guildManage","StamBars")}function Zt(){!function(){if(!h("#pCC img.guild_openGuildStore"))return
const t=r(l,s()),n=t[t.length-1],e=d(z(n.parentNode).parentNode,f({innerHTML:Q(zt),style:{marginBottom:"5px",textAlign:"center"}}))
p(e,"change",Yt)}(),Qt=u(zt),Qt&&Wt(Qt)}function tn(t){t.target.id===D&&(g("Guild Tracker","togglePref"),m(D,t.target.checked))}function nn(){g("Guild Tracker","showTracker"),F()}function en(){const t=h("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${Q(D)}&nbsp;`})
p(e,"change",tn)
const s=I({textContent:"Show"})
j(s,nn),d(e,s),d(n,e)}function sn(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
C(`[ <a href="${v}reliclist">Control</a> ]&nbsp;`,s),j(s,(t=>{"A"===t.target.tagName&&g("guildManage","relic control")}))}function an(t){const n=r("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
b(e,`<li><a href="${V}${q()}">Self Recall</a></li>`),j(e,(t=>{"Self Recall"===J(t.target)&&g("guildManage","Self Recall")}))}function on(t,n){_(3,n,[t])}function cn(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Vt,qt,Jt,sn,an].forEach(T(on,t))}(t),u("showBuffLinks")&&_(3,Pt),function(t){O()||(u("detailedConflictInfo")&&_(3,Ft,[t]),_(4,en))}(t),Zt())}function rn(){_(3,n),_(3,Ct),_(3,lt),_(3,mt),["-","manage"].includes(K.subcmd)&&cn(),"view"===K.subcmd&&vt()}export{rn as default}
//# sourceMappingURL=injectGuild-CwcGXAhw.js.map
