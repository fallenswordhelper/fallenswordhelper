import{g as t,c as n}from"./colouredDots-Bv_n_RhI.js"
import{a5 as e,p as s,cI as a,aw as o,aN as i,df as c,r,dB as l,b6 as u,cy as f,aA as d,i as g,v as p,b as m,s as h,av as b,q as C,a3 as N,d as L,ar as k,aC as w,h as y,dC as M,aj as S,c1 as $,o as j,aU as H,aV as x,e as T,aZ as v,c as R,cO as B,bz as E,cn as G,aR as P,g as A,ac as I,Z as X,m as F,bK as q,dD as D,dE as O,dF as V,aq as _,dG as K,dH as Z,dI as z,dJ as J,bq as U,a4 as W,dK as Q,b8 as Y,ay as tt}from"./calfSystem-HVCiy-VV.js"
import{s as nt}from"./setTipped-_gKWzwad.js"
import{c as et}from"./closestTable-Cl0v-0VU.js"
import{s as st}from"./simpleCheckbox-CEHi-xtc.js"
import{c as at}from"./createStyle-u6QR1rZp.js"
import{a as ot,g as it,c as ct,b as rt}from"./levelHighlight-CKxWO6YR.js"
import lt from"./compressBio-B-xDaim8.js"
import{b as ut}from"./batch-DqKzBoJR.js"
import"./onlineDot-Dmf4LgP_.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-343o8t4v.js"
import"./createLabel-C7UFXjFF.js"
function ft(t,n){const{mins:e}=c(n.dataset.tipped)
return e<44640&&(t[0]+=1,t[1]+=Number(r(l,n.dataset.tipped))),t}function dt(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ft,[0,0])}(e)
n.classList.add("tip-static")
const a=o(s[1])?"":`<br>Stamina: ${i(s[1])}`
nt(`Active: ${s[0]}/${e.length}${a}`,n)}}const gt="compactRanks"
let pt=0,mt=0
function ht(){mt.classList.toggle("compact-ranks",pt)}function bt(){h("guild","compactRanks"),pt=!pt,b(gt,pt),ht()}function Ct(){if(!s())return
const t=u(f,s())
mt=t[t.length-1],mt&&(!function(){const t=g(et(mt.parentNode).parentNode,p({innerHTML:st(gt),style:{textAlign:"center"}}))
m(t,"change",bt)}(),pt=d(gt),pt&&ht())}function Nt(t,n){const e=r(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function Lt(t){const n=t.dataset.tipped,e=Nt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=Nt(n,/XP: <b>(?<realXp>\d*)/)
N(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+i(t-n)}(s,e)}</b>)`)}function kt(){const t=C('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&Lt(t)}let wt=0,yt=0
function Mt(t){return wt&&t>=ot()&&t<=it()}function St(t){return yt&&t>=ct()&&t<=rt()}const $t=t=>[t,c(t.dataset.tipped).days],jt=([,t])=>t<7,Ht=([t])=>[t,Number(r(M,t.dataset.tipped))],xt=([t,n])=>[t.parentNode.parentNode.rowIndex,Mt(n),St(n)]
function Tt(t,n){if(t.length){const s=`${e=t,e.map(([t])=>`.fshHighlight tr:nth-child(${t+1})`).join(",")} {background-color: #${n};}`
g(document.body,at(s))}var e}function vt(){const t=y('#pCC a[data-tipped*="<td>VL:</td>"]').map($t).filter(jt).map(Ht).map(xt),n=t.filter(([,t])=>t),e=t.filter(([,t,n])=>!t&&n)
Tt(n,"4671C8"),Tt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=u(f,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function Rt(){Number(k("guild_id"))!==w()&&(wt||yt)&&vt()}function Bt(){wt=d("highlightPlayersNearMyLvl"),yt=d("highlightGvGPlayersNearMyLvl"),Rt(),d("enableHistoryCompressor")&&function(){const t=e(f,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=p({id:"profile-bio",innerHTML:n.innerHTML})
L("",n),g(n,a),lt()}()}function Et(t){N(t.parentNode,' <span class="smallLink">[b]</span>')}function Gt(t){"smallLink"===t.target.className&&(h("guild","buffLinks"),H(x(t.target.previousElementSibling.href)))}function Pt(){const t=S(`#pCC a[href^="${$}"]`)
ut([3,t,0,Et]),j(s(),Gt)}function At(t){return T({cmd:"guild",subcmd:"conflicts",page:t})}function It(t,n){L(n,t.insertCell(-1))}function Xt(t,n,e){const s=t.insertRow(t.rows.length-2)
return It(s,n),It(s,e),s}function Ft(t,n){Xt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function qt(t,n,e){1===n&&function(t){const n=Xt(t,`<a href="${B}conflicts">Active Conflicts</a>`,"Score")
j(n,t=>{"A"===t.target.tagName&&h("guildManage","conflictHeader")})}(e),v(t,7,0).forEach(R(Ft,e))}function Dt(t,n){const e=C('#pCC input[name="page"]',n)
if(!e)return
const s=Number(e.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(e)
!function(t,n,e){const s=C("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&qt(s,n,e)}(n,s,t.node),a>s&&async function(t,n,e){n(e,await At(t+1))}(s,Dt,t)}async function Ot(t){const[n]=t.rows[6].cells[0].children
if(n){Dt({node:n},await At(1))}}function Vt(t){const n=t.target.dataset.linkto
h("guildManage","toggleVisibilty",n)
const e=A(n)
if(!e)return
const s=I("fshHide",e)
e.classList.toggle("fshHide"),b(n,s?"":"ON")}function _t(t,n,e){const s=function(t){return P({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
g(t,function(t){const n=P({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return g(n,t),N(n,"&nbsp;]"),n}(s)),n.id=e,d(e)&&G(n),j(s,Vt)}function Kt(t){_t(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Zt(t){const n=t.rows[4].cells[1].children[0]
L(E(n.innerHTML),n),_t(n,t.rows[6].cells[0].children[0],"statisticsControl")}function zt(t){const n=t.rows[15]?.cells[1].children[0]
n&&_t(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Jt=0,Ut=null
function Wt(t){const n=function(t){const n=F(t),e=Ut?.[n]
return e?Math.min(Math.round(e.current/e.max*100),100):0}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}async function Qt(){await async function(){const t=await q(D)
if(t?.members){Ut={}
for(const[n,e]of Object.entries(t.members))if(e.length>0){const t=e.at(-1)
Ut[n]={current:t[V],max:t[O]}}}}()
const t=u(f,s()),n=t[t.length-1],e=y(X,n)
if(!e.length)return
const a=e.filter(t=>{const n=F(t)
return Ut?.[n]})
if(!a.length)return
n.classList.add("fshProgressBar")
const o=a.map(Wt).join("\n")
Jt=g(document.body,at(o)).sheet}async function Yt(t){Jt?Jt.disabled=!t:await Qt()}const tn="enableStamBars"
let nn=0
function en(){nn=!nn,b(tn,nn),Yt(nn),h("guildManage","StamBars")}function sn(){!function(){if(!C("#pCC img.guild_openGuildStore"))return
const t=u(f,s()),n=t[t.length-1],e=g(et(n.parentNode).parentNode,p({innerHTML:st(tn),style:{marginBottom:"5px",textAlign:"center"}}))
m(e,"change",en)}(),nn=d(tn),nn&&Yt(nn)}function an(t){t.target.id===K&&(h("Guild Tracker","togglePref"),b(K,t.target.checked),t.target.checked?Z():J())}function on(){h("Guild Tracker","showTracker"),z()}function cn(){const t=C("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=p({className:"fsh-tracker",innerHTML:`${st(K)}&nbsp;`})
m(e,"change",an)
const s=_({textContent:"Show"})
j(s,on),g(e,s),g(n,e)}function rn(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
L(`[ <a href="${B}reliclist">Control</a> ]&nbsp;`,s),j(s,t=>{"A"===t.target.tagName&&h("guildManage","relic control")})}function ln(t){const n=u("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
N(e,`<li><a href="${Q}${Y()}">Self Recall</a></li>`),j(e,t=>{"Self Recall"===F(t.target)&&h("guildManage","Self Recall")})}function un(t,n){U(3,n,[t])}function fn(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Kt,Zt,zt,rn,ln].forEach(R(un,t))}(t),d("showBuffLinks")&&U(3,Pt),function(t){W()||(d("detailedConflictInfo")&&U(3,Ot,[t]),U(4,cn))}(t),sn())}function dn(){U(3,n),U(3,kt),U(3,dt),U(3,Ct),["-","manage"].includes(tt.subcmd)&&fn(),"view"===tt.subcmd&&Bt()}export{dn as default}
//# sourceMappingURL=injectGuild-_B0eGgn3.js.map
