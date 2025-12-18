import{g as t,c as n}from"./colouredDots-C2Y_m1RP.js"
import{a5 as e,p as s,cH as a,aw as o,aN as i,dg as c,r,dB as l,b6 as u,cx as f,aA as d,i as g,v as p,b as m,s as h,av as b,q as C,a3 as N,d as L,ar as w,aC as k,h as y,dC as H,aj as M,c2 as S,o as $,aU as j,aV as x,e as T,aZ as v,c as G,cM as R,bA as A,cl as B,aR as E,g as P,ac as I,Z as X,m as q,bH as D,dD as F,dE as O,dF as V,aq as _,dG as Z,dH as J,dI as K,dJ as U,br as W,a4 as z,dK as Q,b8 as Y,ay as tt}from"./calfSystem-Cs6CSxoU.js"
import{s as nt}from"./setTipped-_gKWzwad.js"
import{c as et}from"./closestTable-CWRa1z_C.js"
import{s as st}from"./simpleCheckbox-C-dxZ6vG.js"
import{c as at}from"./createStyle-SGEMbHV8.js"
import{a as ot,g as it,c as ct,b as rt}from"./levelHighlight-CfrLxVu5.js"
import lt from"./compressBio-BEzgle9F.js"
import{b as ut}from"./batch-BtMyX_wP.js"
import"./onlineDot-DmNFHAz9.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-DJIEghIX.js"
import"./createLabel-B6VVZZLi.js"
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
return t>n&&(e="+"),e+i(t-n)}(s,e)}</b>)`)}function wt(){const t=C('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&Lt(t)}let kt=0,yt=0
function Ht(t){return kt&&t>=ot()&&t<=it()}function Mt(t){return yt&&t>=ct()&&t<=rt()}const St=t=>[t,c(t.dataset.tipped).days],$t=([,t])=>t<7,jt=([t])=>[t,Number(r(H,t.dataset.tipped))],xt=([t,n])=>[t.parentNode.parentNode.rowIndex,Ht(n),Mt(n)]
function Tt(t,n){if(t.length){const s=`${e=t,e.map(([t])=>`.fshHighlight tr:nth-child(${t+1})`).join(",")} {background-color: #${n};}`
g(document.body,at(s))}var e}function vt(){const t=y('#pCC a[data-tipped*="<td>VL:</td>"]').map(St).filter($t).map(jt).map(xt),n=t.filter(([,t])=>t),e=t.filter(([,t,n])=>!t&&n)
Tt(n,"4671C8"),Tt(e,"FF9900"),function(t,n){if(t.length+n.length){const t=u(f,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function Gt(){Number(w("guild_id"))!==k()&&(kt||yt)&&vt()}function Rt(){kt=d("highlightPlayersNearMyLvl"),yt=d("highlightGvGPlayersNearMyLvl"),Gt(),d("enableHistoryCompressor")&&function(){const t=e(f,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=p({id:"profile-bio",innerHTML:n.innerHTML})
L("",n),g(n,a),lt()}()}function At(t){N(t.parentNode,' <span class="smallLink">[b]</span>')}function Bt(t){"smallLink"===t.target.className&&(h("guild","buffLinks"),j(x(t.target.previousElementSibling.href)))}function Et(){const t=M(`#pCC a[href^="${S}"]`)
ut([3,t,0,At]),$(s(),Bt)}function Pt(t){return T({cmd:"guild",subcmd:"conflicts",page:t})}function It(t,n){L(n,t.insertCell(-1))}function Xt(t,n,e){const s=t.insertRow(t.rows.length-2)
return It(s,n),It(s,e),s}function qt(t,n){Xt(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Dt(t,n,e){1===n&&function(t){const n=Xt(t,`<a href="${R}conflicts">Active Conflicts</a>`,"Score")
$(n,t=>{"A"===t.target.tagName&&h("guildManage","conflictHeader")})}(e),v(t,7,0).forEach(G(qt,e))}function Ft(t,n){const e=C('#pCC input[name="page"]',n)
if(!e)return
const s=Number(e.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(e)
!function(t,n,e){const s=C("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Dt(s,n,e)}(n,s,t.node),a>s&&async function(t,n,e){n(e,await Pt(t+1))}(s,Ft,t)}async function Ot(t){const[n]=t.rows[6].cells[0].children
if(n){Ft({node:n},await Pt(1))}}function Vt(t){const n=t.target.dataset.linkto
h("guildManage","toggleVisibilty",n)
const e=P(n)
if(!e)return
const s=I("fshHide",e)
e.classList.toggle("fshHide"),b(n,s?"":"ON")}function _t(t,n,e){const s=function(t){return E({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
g(t,function(t){const n=E({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return g(n,t),N(n,"&nbsp;]"),n}(s)),n.id=e,d(e)&&B(n),$(s,Vt)}function Zt(t){_t(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Jt(t){const n=t.rows[4].cells[1].children[0]
L(A(n.innerHTML),n),_t(n,t.rows[6].cells[0].children[0],"statisticsControl")}function Kt(t){const n=t.rows[15]?.cells[1].children[0]
n&&_t(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Ut=0,Wt=null
function zt(t){const n=function(t){const n=q(t),e=Wt?.[n]
return e?Math.min(Math.round(e.current/e.max*100),100):0}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}async function Qt(){await async function(){const t=await D(F)
if(t?.members){Wt={}
for(const[n,e]of Object.entries(t.members))if(e.length>0){const t=e.at(-1)
Wt[n]={current:t[V],max:t[O]}}}}()
const t=u(f,s()),n=t[t.length-1],e=y(X,n)
if(!e.length)return
const a=e.filter(t=>{const n=q(t)
return Wt?.[n]})
if(!a.length)return
n.classList.add("fshProgressBar")
const o=a.map(zt).join("\n")
Ut=g(document.body,at(o)).sheet}async function Yt(t){Ut?Ut.disabled=!t:await Qt()}const tn="enableStamBars"
let nn=0
function en(){nn=!nn,b(tn,nn),Yt(nn),h("guildManage","StamBars")}function sn(){!function(){if(!C("#pCC img.guild_openGuildStore"))return
const t=u(f,s()),n=t[t.length-1],e=g(et(n.parentNode).parentNode,p({innerHTML:st(tn),style:{marginBottom:"5px",textAlign:"center"}}))
m(e,"change",en)}(),nn=d(tn),nn&&Yt(nn)}function an(t){t.target.id===Z&&(h("Guild Tracker","togglePref"),b(Z,t.target.checked),t.target.checked?J():U())}function on(){h("Guild Tracker","showTracker"),K()}function cn(){const t=C("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=p({className:"fsh-tracker",innerHTML:`${st(Z)}&nbsp;`})
m(e,"change",an)
const s=_({textContent:"Show"})
$(s,on),g(e,s),g(n,e)}function rn(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
L(`[ <a href="${R}reliclist">Control</a> ]&nbsp;`,s),$(s,t=>{"A"===t.target.tagName&&h("guildManage","relic control")})}function ln(t){const n=u("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
N(e,`<li><a href="${Q}${Y()}">Self Recall</a></li>`),$(e,t=>{"Self Recall"===q(t.target)&&h("guildManage","Self Recall")})}function un(t,n){W(3,n,[t])}function fn(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Zt,Jt,Kt,rn,ln].forEach(G(un,t))}(t),d("showBuffLinks")&&W(3,Et),function(t){z()||(d("detailedConflictInfo")&&W(3,Ot,[t]),W(4,cn))}(t),sn())}function dn(){W(3,n),W(3,wt),W(3,dt),W(3,Ct),["-","manage"].includes(tt.subcmd)&&fn(),"view"===tt.subcmd&&Rt()}export{dn as default}
//# sourceMappingURL=injectGuild-BdZMDT4D.js.map
