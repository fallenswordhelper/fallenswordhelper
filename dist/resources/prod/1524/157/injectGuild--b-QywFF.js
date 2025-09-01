import{g as t,c as n}from"./colouredDots-DDnPWAna.js"
import{a4 as e,p as s,cI as a,aw as i,aN as o,de as r,r as c,dH as l,b6 as u,cy as f,aA as d,i as p,u as g,b as m,s as h,av as b,q as C,a2 as N,d as L,ar as k,aC as w,h as y,dI as M,aj as S,c4 as $,o as H,aU as j,aV as T,e as x,aZ as v,c as P,cP as R,by as A,cn as B,aR as G,g as I,ab as E,Y as X,a7 as D,aq as V,dJ as _,dK as q,bp as F,a3 as J,dL as K,b8 as O,l as U,ay as W}from"./calfSystem-CQOGdqPv.js"
import{s as Y}from"./setTipped-_gKWzwad.js"
import{c as Z}from"./closestTable-Cs7gyt8-.js"
import{s as z}from"./simpleCheckbox-BcIXGyya.js"
import{c as Q}from"./createStyle--h4yDzB1.js"
import{a as tt,g as nt,c as et,b as st}from"./levelHighlight-CBP5Y6cR.js"
import at from"./compressBio-D_HcaCTR.js"
import{b as it}from"./batch-ZfzqhoeD.js"
import"./onlineDot-DGI5IYJJ.js"
import"./isChecked-D_0do7nT.js"
import"./createInput-CL-XaKKe.js"
import"./createLabel-EkLn6Kxi.js"
function ot(t,n){const{mins:e}=r(n.dataset.tipped)
return e<44640&&(t[0]+=1,t[1]+=Number(c(l,n.dataset.tipped))),t}function rt(){const n=e("b",s()).find(a("Members"))
if(n){const e=t(),s=function(t){return t.reduce(ot,[0,0])}(e)
n.classList.add("tip-static")
const a=i(s[1])?"":`<br>Stamina: ${o(s[1])}`
Y(`Active: ${s[0]}/${e.length}${a}`,n)}}const ct="compactRanks"
let lt=0,ut=0
function ft(){ut.classList.toggle("compact-ranks",lt)}function dt(){h("guild","compactRanks"),lt=!lt,b(ct,lt),ft()}function pt(){if(!s())return
const t=u(f,s())
ut=t[t.length-1],ut&&(!function(){const t=p(Z(ut.parentNode).parentNode,g({innerHTML:z(ct),style:{textAlign:"center"}}))
m(t,"change",dt)}(),lt=d(ct),lt&&ft())}function gt(t,n){const e=c(n,t.replace(/,/g,""))
return e?parseInt(e,10):0}function mt(t){const n=t.dataset.tipped,e=gt(n,/XP Lock: <b>(?<lockXp>\d*)/),s=gt(n,/XP: <b>(?<realXp>\d*)/)
N(t.parentNode.nextElementSibling,` (<b>${function(t,n){let e=""
return t>n&&(e="+"),e+o(t-n)}(s,e)}</b>)`)}function ht(){const t=C('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&mt(t)}let bt=0,Ct=0
function Nt(t){return bt&&t>=tt()&&t<=nt()}function Lt(t){return Ct&&t>=et()&&t<=st()}const kt=t=>[t,r(t.dataset.tipped).days],wt=([,t])=>t<7,yt=([t])=>[t,Number(c(M,t.dataset.tipped))],Mt=([t,n])=>[t.parentNode.parentNode.rowIndex,Nt(n),Lt(n)]
function St(t,n){if(t.length){const s=`${e=t,e.map(([t])=>`.fshHighlight tr:nth-child(${t+1})`).join(",")} {background-color: #${n};}`
p(document.body,Q(s))}var e}function $t(){const t=y('#pCC a[data-tipped*="<td>VL:</td>"]').map(kt).filter(wt).map(yt).map(Mt),n=t.filter(([,t])=>t),e=t.filter(([,t,n])=>!t&&n)
St(n,"4671C8"),St(e,"FF9900"),function(t,n){if(t.length+n.length){const t=u(f,s())
t[t.length-1].classList.add("fshHighlight")}}(n,e)}function Ht(){Number(k("guild_id"))!==w()&&(bt||Ct)&&$t()}function jt(){bt=d("highlightPlayersNearMyLvl"),Ct=d("highlightGvGPlayersNearMyLvl"),Ht(),d("enableHistoryCompressor")&&function(){const t=e(f,s()).slice(-2,-1)[0]
if(!t)return
const n=t.rows[0].cells[0],a=g({id:"profile-bio",innerHTML:n.innerHTML})
L("",n),p(n,a),at()}()}function Tt(t){N(t.parentNode,' <span class="smallLink">[b]</span>')}function xt(t){"smallLink"===t.target.className&&(h("guild","buffLinks"),j(T(t.target.previousElementSibling.href)))}function vt(){const t=S(`#pCC a[href^="${$}"]`)
it([3,t,0,Tt]),H(s(),xt)}function Pt(t){return x({cmd:"guild",subcmd:"conflicts",page:t})}function Rt(t,n){L(n,t.insertCell(-1))}function At(t,n,e){const s=t.insertRow(t.rows.length-2)
return Rt(s,n),Rt(s,e),s}function Bt(t,n){At(t,n.cells[0].innerHTML,`<b>${n.cells[6].innerHTML}</b>`)}function Gt(t,n,e){1===n&&function(t){const n=At(t,`<a href="${R}conflicts">Active Conflicts</a>`,"Score")
H(n,t=>{"A"===t.target.tagName&&h("guildManage","conflictHeader")})}(e),v(t,7,0).forEach(P(Bt,e))}function It(t,n){const e=C('#pCC input[name="page"]',n)
if(!e)return
const s=Number(e.value),a=function(t){return Number(t.nextSibling.textContent.split(" ")[2])}(e)
!function(t,n,e){const s=C("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Gt(s,n,e)}(n,s,t.node),a>s&&async function(t,n,e){n(e,await Pt(t+1))}(s,It,t)}async function Et(t){const[n]=t.rows[6].cells[0].children
if(n){It({node:n},await Pt(1))}}function Xt(t){const n=t.target.dataset.linkto
h("guildManage","toggleVisibilty",n)
const e=I(n)
if(!e)return
const s=E("fshHide",e)
e.classList.toggle("fshHide"),b(n,s?"":"ON")}function Dt(t,n,e){const s=function(t){return G({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(e)
p(t,function(t){const n=G({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return p(n,t),N(n,"&nbsp;]"),n}(s)),n.id=e,d(e)&&B(n),H(s,Xt)}function Vt(t){Dt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function _t(t){const n=t.rows[4].cells[1].children[0]
L(A(n.innerHTML),n),Dt(n,t.rows[6].cells[0].children[0],"statisticsControl")}function qt(t){const n=t.rows[15]?.cells[1].children[0]
n&&Dt(n,t.rows[17].cells[0].children[0],"guildStructureControl")}let Ft=0
function Jt(t){const n=function(t){const{stam:n,max:e}=D(l,t.dataset.tipped)
return Math.min(Math.round(Number(n)/Number(e)*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${n}%, transparent ${n+1}%)}`}function Kt(t){Ft?Ft.disabled=!t:function(){const t=u(f,s()),n=t[t.length-1],e=y(X,n)
if(!e.length)return
const a=e.filter(t=>l.test(t.dataset.tipped))
if(!a.length)return
n.classList.add("fshProgressBar")
const i=a.map(Jt).join("\n")
Ft=p(document.body,Q(i)).sheet}()}const Ot="enableStamBars"
let Ut=0
function Wt(){Ut=!Ut,b(Ot,Ut),Kt(Ut),h("guildManage","StamBars")}function Yt(){!function(){if(!C("#pCC img.guild_openGuildStore"))return
const t=u(f,s()),n=t[t.length-1],e=p(Z(n.parentNode).parentNode,g({innerHTML:z(Ot),style:{marginBottom:"5px",textAlign:"center"}}))
m(e,"change",Wt)}(),Ut=d(Ot),Ut&&Kt(Ut)}function Zt(t){t.target.id===_&&(h("Guild Tracker","togglePref"),b(_,t.target.checked))}function zt(){h("Guild Tracker","showTracker"),q()}function Qt(){const t=C("#pCC img.guild_openGuildStore")
if(!t)return
const n=t.parentNode
n.classList.add("fshRelative")
const e=g({className:"fsh-tracker",innerHTML:`${z(_)}&nbsp;`})
m(e,"change",Zt)
const s=V({textContent:"Show"})
H(s,zt),p(e,s),p(n,e)}function tn(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
L(`[ <a href="${R}reliclist">Control</a> ]&nbsp;`,s),H(s,t=>{"A"===t.target.tagName&&h("guildManage","relic control")})}function nn(t){const n=u("li",t)
if(!n?.length)return
const e=n[n.length-1].parentNode
N(e,`<li><a href="${K}${O()}">Self Recall</a></li>`),H(e,t=>{"Self Recall"===U(t.target)&&h("guildManage","Self Recall")})}function en(t,n){F(3,n,[t])}function sn(){if(!s())return
const t=s().lastElementChild.rows?.[2]?.cells[0].children[0]
t&&(!function(t){[Vt,_t,qt,tn,nn].forEach(P(en,t))}(t),d("showBuffLinks")&&F(3,vt),function(t){J()||(d("detailedConflictInfo")&&F(3,Et,[t]),F(4,Qt))}(t),Yt())}function an(){F(3,n),F(3,ht),F(3,rt),F(3,pt),["-","manage"].includes(W.subcmd)&&sn(),"view"===W.subcmd&&jt()}export{an as default}
//# sourceMappingURL=injectGuild--b-QywFF.js.map
