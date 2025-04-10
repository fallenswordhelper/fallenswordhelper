import{g as t,c as n}from"./colouredDots-BUHZ6q5t.js"
import{B as e,p as s,cy as a,aB as o,de as i,r as c,dJ as r,aW as l,cm as u,ao as f,i as d,u as g,c as p,s as m,aj as h,q as b,z as N,h as C,ac as L,cn as k,n as w,dK as M,Q as S,bV as y,o as $,aI as j,aJ as H,k as x,aN as T,e as v,cG as B,bl as A,cc as E,aF as G,g as P,I as R,t as I,E as X,a9 as F,dL as V,dM as _,bc as z,A as D,dN as J,aY as W,aa as Y,am as q}from"./calfSystem-BGOTz8de.js"
import{s as K}from"./setTipped-_gKWzwad.js"
import{c as O}from"./closestTable-DjvmqHiL.js"
import{s as Q}from"./simpleCheckbox-BSi4KRpL.js"
import{c as U}from"./createStyle-dPu6vqqt.js"
import{a as Z,g as tt,c as nt,b as et}from"./levelHighlight-CtyOXs57.js"
import st from"./compressBio-ATeGSxdj.js"
import{b as at}from"./batch-DnPGAgm3.js"
import"./onlineDot-K2TYhqz6.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-DtY3IfhY.js"
import"./createLabel-CXJLPSQT.js"
const ot=0,it=1
function ct(t,n){const{mins:e}=i(n.dataset.tipped)
return e<44640&&(t[ot]+=1,t[it]+=Number(c(r,n.dataset.tipped))),t}function rt(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ct,[0,0])}(e)
n.classList.add("tip-static"),K(`Active: ${s[ot]}/${e.length}<br>Stamina: ${o(s[it])}`,n)}}const lt="compactRanks"
let ut=0,ft=0
function dt(){ft.classList.toggle("compact-ranks",ut)}function gt(){m("guild","compactRanks"),ut=!ut,h(lt,ut),dt()}function pt(){if(!s())return
const t=l(u,s())
ft=t[t.length-1],ft&&(!function(){const t=d(O(ft.parentNode).parentNode,g({innerHTML:Q(lt),style:{textAlign:"center"}}))
p(t,"change",gt)}(),ut=f(lt),ut&&dt())}function mt(t,n){const e=c(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function ht(t){const n=t.dataset.tipped,e=mt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=mt(n,/XP: <b>(?<realXp>\d*)/)
N(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+o(t-n)}(s,e)}</b>)`)}function bt(){const t=b('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&ht(t)}let Nt=0,Ct=0
function Lt(t){return Nt&&t>=Z()&&t<=tt()}function kt(t){return Ct&&t>=nt()&&t<=et()}const wt=t=>[t,i(t.dataset.tipped).days],Mt=([,t])=>t<7,St=([t])=>[t,Number(c(M,t.dataset.tipped))],yt=([t,n])=>[t.parentNode.parentNode.rowIndex,Lt(n),kt(n)]
const $t=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function jt(t,n){if(t.length){const e=`${$t(t)} {background-color: #${n};}`
d(document.body,U(e))}}function Ht(){const t=w('#pCC a[data-tipped*="<td>VL:</td>"]').map(wt).filter(Mt).map(St).map(yt),n=t.filter((([,t])=>t)),e=t.filter((([,t,n])=>!t&&n))
jt(n,"4671C8"),jt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=l(u,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function xt(){Number(L("guild_id"))!==k()&&(Nt||Ct)&&Ht()}function Tt(){Nt=f("highlightPlayersNearMyLvl"),Ct=f("highlightGvGPlayersNearMyLvl"),xt(),f("enableHistoryCompressor")&&function(){const t=e(u,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=g({id:"profile-bio",innerHTML:n.innerHTML})
C("",n),d(n,a),st()}()}function vt(t){N(t.parentNode,' <span class="smallLink">[b]</span>')}function Bt(t){"smallLink"===t.target.className&&(m("guild","buffLinks"),j(H(t.target.previousElementSibling.href)))}function At(){const t=S(`#pCC a[href^="${y}"]`)
at([3,t,0,vt]),$(s(),Bt)}function Et(t){return x({cmd:"guild",subcmd:"conflicts",page:t})}function Gt(t,n){C(n,t.insertCell(-1))}function Pt(t,n,e){const s=t.insertRow(t.rows.length-2)
return Gt(s,n),Gt(s,e),s}function Rt(t,n){Pt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function It(t,n,e){1===n&&function(t){const n=Pt(t,`<a href="${B}conflicts">Active Conflicts</a>`,"Score")
$(n,(t=>{"A"===t.target.tagName&&m("guildManage","conflictHeader")}))}(e),T(t,7,0).forEach(v(Rt,e))}function Xt(t,n){const e=b('#pCC input[name="page"]',n)
if(!e)return
const s=Number(e.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(e)
!function(t,n,e){const s=b("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&It(s,n,e)}(n,s,t.node),a>s&&async function(t,n,e){n(e,await Et(t+1))}(s,Xt,t)}async function Ft(t){const[n]=t.rows[6].cells[0].children
if(n){Xt({node:n},await Et(1))}}function Vt(t){const n=t.target.dataset.linkto
m("guildManage","toggleVisibilty",n)
const e=P(n)
if(!e)return
const s=R("fshHide",e)
e.classList.toggle("fshHide"),h(n,s?"":"ON")}function _t(t,n,e){const s=function(t){return G({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
d(t,function(t){const n=G({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(n,t),N(n,"&nbsp;]"),n}(s)),n.id=e,f(e)&&E(n),$(s,Vt)}function zt(t){_t(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Dt(t){const n=t.rows[4].cells[1].children[0]
C(A(n.innerHTML),n),_t(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Jt(t){const n=t.rows[15]?.cells[1].children[0]
n&&_t(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Wt=0
function Yt(t){const n=function(t){const{stam:n,max:e}=X(r,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function qt(t){Wt?Wt.disabled=!t:function(){const t=l(u,s()),n=t[t.length-1]
n.classList.add("fshProgressBar")
const e=w(I,n).map(Yt).join("\n")
Wt=d(document.body,U(e)).sheet}()}const Kt="enableStamBars"
let Ot=0
function Qt(){Ot=!Ot,h(Kt,Ot),qt(Ot),m("guildManage","StamBars")}function Ut(){!function(){if(!b("#pCC img.guild_openGuildStore"))return
const t=l(u,s()),n=t[t.length-1],e=d(O(n.parentNode).parentNode,g({innerHTML:Q(Kt),style:{marginBottom:"5px",textAlign:"center"}}))
p(e,"change",Qt)}(),Ot=f(Kt),Ot&&qt(Ot)}function Zt(t){t.target.id===V&&(m("Guild Tracker","togglePref"),h(V,t.target.checked))}function tn(){m("Guild Tracker","showTracker"),_()}function nn(){const t=b("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=g({className:"fsh-tracker",innerHTML:`${Q(V)}&nbsp;`})
p(e,"change",Zt)
const s=F({textContent:"Show"})
$(s,tn),d(e,s),d(n,e)}function en(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
C(`[ <a href="${B}reliclist">Control</a> ]&nbsp;`,s),$(s,(t=>{"A"===t.target.tagName&&m("guildManage","relic control")}))}function sn(t){const n=l("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
N(e,`<li><a href="${J}${W()}">Self Recall</a></li>`),$(e,(t=>{"Self Recall"===Y(t.target)&&m("guildManage","Self Recall")}))}function an(t,n){z(3,n,[t])}function on(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[zt,Dt,Jt,en,sn].forEach(v(an,t))}(t),f("showBuffLinks")&&z(3,At),function(t){D()||(f("detailedConflictInfo")&&z(3,Ft,[t]),z(4,nn))}(t),Ut())}function cn(){z(3,n),z(3,bt),z(3,rt),z(3,pt),["-","manage"].includes(q.subcmd)&&on(),"view"===q.subcmd&&Tt()}export{cn as default}
//# sourceMappingURL=injectGuild-B7hVFu-L.js.map
