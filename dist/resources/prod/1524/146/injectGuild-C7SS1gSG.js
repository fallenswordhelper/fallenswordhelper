import{g as t,c as n}from"./colouredDots-ElBo08F7.js"
import{z as e,p as s,cz as a,da as o,r as i,dA as c,aV as r,co as l,aq as u,i as d,n as f,c as p,s as g,al as m,q as h,x as b,e as N,af as C,cp as L,l as k,dB as w,O as M,bV as y,o as S,aI as $,aJ as j,h as H,aN as x,d as T,cF as v,bl as B,ce as G,aF as P,g as R,G as A,m as E,C as X,ac as I,dC as F,dD as V,bc as D,y as _,dE as q,aX as z,ad as O,ao as J}from"./calfSystem-DiXGAkgN.js"
import{s as K}from"./setTipped-_gKWzwad.js"
import{a as W}from"./addCommas-C_h2HN8s.js"
import{c as Q}from"./closestTable-CvmnyUCu.js"
import{s as U}from"./simpleCheckbox-DsxHxozG.js"
import{c as Y}from"./createStyle-D_fU25GK.js"
import{a as Z,g as tt,c as nt,b as et}from"./levelHighlight-ypQRutyL.js"
import st from"./compressBio-Cf69sGfv.js"
import{b as at}from"./batch-C8ATbTx-.js"
import"./onlineDot-B7LbfKGR.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-DJ1ccan-.js"
import"./createLabel-C6hN0H50.js"
const ot=0,it=1
function ct(t,n){const{mins:e}=o(n.dataset.tipped)
return e<44640&&(t[ot]+=1,t[it]+=Number(i(c,n.dataset.tipped))),t}function rt(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ct,[0,0])}(e)
n.classList.add("tip-static"),K(`Active: ${s[ot]}/${e.length}<br>Stamina: ${W(s[it])}`,n)}}const lt="compactRanks"
let ut=0,dt=0
function ft(){dt.classList.toggle("compact-ranks",ut)}function pt(){g("guild","compactRanks"),ut=!ut,m(lt,ut),ft()}function gt(){if(!s())return
const t=r(l,s())
dt=t[t.length-1],dt&&(!function(){const t=d(Q(dt.parentNode).parentNode,f({innerHTML:U(lt),style:{textAlign:"center"}}))
p(t,"change",pt)}(),ut=u(lt),ut&&ft())}function mt(t,n){const e=i(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function ht(t){const n=t.dataset.tipped,e=mt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=mt(n,/XP: <b>(?<realXp>\d*)/)
b(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+W(t-n)}(s,e)}</b>)`)}function bt(){const t=h('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&ht(t)}let Nt=0,Ct=0
function Lt(t){return Nt&&t>=Z()&&t<=tt()}function kt(t){return Ct&&t>=nt()&&t<=et()}const wt=t=>[t,o(t.dataset.tipped).days],Mt=([,t])=>t<7,yt=([t])=>[t,Number(i(w,t.dataset.tipped))],St=([t,n])=>[t.parentNode.parentNode.rowIndex,Lt(n),kt(n)]
const $t=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function jt(t,n){if(t.length){const e=`${$t(t)} {background-color: #${n};}`
d(document.body,Y(e))}}function Ht(){const t=k('#pCC a[data-tipped*="<td>VL:</td>"]').map(wt).filter(Mt).map(yt).map(St),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
jt(n,"4671C8"),jt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=r(l,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function xt(){Number(C("guild_id"))!==L()&&(Nt||Ct)&&Ht()}function Tt(){Nt=u("highlightPlayersNearMyLvl"),Ct=u("highlightGvGPlayersNearMyLvl"),xt(),u("enableHistoryCompressor")&&function(){const t=e(l,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=f({id:"profile-bio",innerHTML:n.innerHTML})
N("",n),d(n,a),st()}()}function vt(t){b(t.parentNode,' <span class="smallLink">[b]</span>')}function Bt(t){"smallLink"===t.target.className&&(g("guild","buffLinks"),$(j(t.target.previousElementSibling.href)))}function Gt(){const t=M(`#pCC a[href^="${y}"]`)
at([3,t,0,vt]),S(s(),Bt)}function Pt(t){return H({cmd:"guild",subcmd:"conflicts",page:t})}function Rt(t,n){N(n,t.insertCell(-1))}function At(t,n,e){const s=t.insertRow(t.rows.length-2)
return Rt(s,n),Rt(s,e),s}function Et(t,n){At(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Xt(t,n,e){1===n&&function(t){const n=At(t,`<a href="${v}conflicts">Active Conflicts</a>`,"Score")
S(n,(t=>{"A"===t.target.tagName&&g("guildManage","conflictHeader")}))}(e),x(t,7,0).forEach(T(Et,e))}function It(t,n){const e=h('#pCC input[name="page"]',n)
if(!e)return
const s=Number(e.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(e)
!function(t,n,e){const s=h("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Xt(s,n,e)}(n,s,t.node),a>s&&async function(t,n,e){n(e,await Pt(t+1))}(s,It,t)}async function Ft(t){const[n]=t.rows[6].cells[0].children
if(n){It({node:n},await Pt(1))}}function Vt(t){const n=t.target.dataset.linkto
g("guildManage","toggleVisibilty",n)
const e=R(n)
if(!e)return
const s=A("fshHide",e)
e.classList.toggle("fshHide"),m(n,s?"":"ON")}function Dt(t,n,e){const s=function(t){return P({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=P({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),b(n,"&nbsp;]"),n}(s)),n.id=e,u(e)&&G(n),S(s,Vt)}function _t(t){Dt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function qt(t){const n=t.rows[4].cells[1].children[0]
N(B(n.innerHTML),n),Dt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function zt(t){const n=t.rows[15]?.cells[1].children[0]
n&&Dt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Ot=0
function Jt(t){const n=function(t){const{stam:n,max:e}=X(c,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Kt(t){Ot?Ot.disabled=!t:function(){const t=r(l,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=k(E,n).map(Jt).join("\n")
Ot=d(document.body,Y(e)).sheet}()}const Wt="enableStamBars"
let Qt=0
function Ut(){Qt=!Qt,m(Wt,Qt),Kt(Qt),g("guildManage","StamBars")}function Yt(){!function(){if(!h("#pCC img.guild_openGuildStore"))return
const t=r(l,s()),n=t[t.length-1],e=d(Q(n.parentNode).parentNode,f({innerHTML:U(Wt),style:{marginBottom:"5px",textAlign:"center"}}))
p(e,"change",Ut)}(),Qt=u(Wt),Qt&&Kt(Qt)}function Zt(t){t.target.id===F&&(g("Guild Tracker","togglePref"),m(F,t.target.checked))}function tn(){g("Guild Tracker","showTracker"),V()}function nn(){const t=h("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=f({className:"fsh-tracker",innerHTML:`${U(F)}&nbsp;`})
p(e,"change",Zt)
const s=I({textContent:"Show"})
S(s,tn),d(e,s),d(n,e)}function en(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
N(`[ <a href="${v}reliclist">Control</a> ]&nbsp;`,s),S(s,(t=>{"A"===t.target.tagName&&g("guildManage","relic control")}))}function sn(t){const n=r("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
b(e,`<li><a href="${q}${z()}">Self Recall</a></li>`),S(e,(t=>{"Self Recall"===O(t.target)&&g("guildManage","Self Recall")}))}function an(t,n){D(3,n,[t])}function on(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[_t,qt,zt,en,sn].forEach(T(an,t))}(t),u("showBuffLinks")&&D(3,Gt),function(t){_()||(u("detailedConflictInfo")&&D(3,Ft,[t]),D(4,nn))}(t),Yt())}function cn(){D(3,n),D(3,bt),D(3,rt),D(3,gt),["-","manage"].includes(J.subcmd)&&on(),"view"===J.subcmd&&Tt()}export{cn as default}
//# sourceMappingURL=injectGuild-C7SS1gSG.js.map
