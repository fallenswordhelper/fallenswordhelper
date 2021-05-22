import{a as t}from"./addCommas-aab57e5e.js"
import{g as e,p as n,aD as s,bx as a,D as o,i,d as c,m as r,B as l,h as f,I as u,R as d,E as m,b as p,ab as h,a3 as b,o as g,u as j,t as N,v as C,s as L,bz as S,f as v,Z as y,n as $,aW as k,a as w,aQ as x,bb as M,P as T,S as A,c as B,bA as H,F as R,y as E,bB as D}from"./calfSystem-6ad077b7.js"
import{g as I,c as P}from"./colouredDots-bf23923d.js"
import{l as G}from"./onlineDot-465a2c69.js"
import{s as V}from"./setTipped-92acd4eb.js"
import X from"./compressBio-71b4ceb1.js"
import{c as _}from"./createStyle-ed624664.js"
import{c as F}from"./currentGuildId-e0011880.js"
import{a as U,g as z,c as O,b as Q}from"./levelHighlight-e7f75506.js"
import{b as W}from"./batch-9878d42e.js"
import{o as Z}from"./openQuickBuffByName-f16a58eb.js"
import{d as J}from"./dataRows-34f45ad8.js"
import{c as q}from"./createInput-75a73ea8.js"
import{c as K}from"./createUl-b85756c5.js"
import{s as Y,g as tt}from"./idb-9caca870.js"
import{i as et}from"./insertElementAfterBegin-28d006b9.js"
import{b as nt}from"./simpleCheckbox-71eaccce.js"
import{a as st}from"./alpha-7ee6a1b8.js"
import{c as at}from"./createTBody-6145b77d.js"
import{c as ot}from"./createTable-edb24c5b.js"
import{f as it}from"./formatLocalDateTime-c295cb3e.js"
import{u as ct,l as rt,v as lt,c as ft,m as ut,a as dt,g as mt}from"./indexConstants-101e0ad8.js"
import{c as pt,t as ht}from"./toggleVisibilty-8d681f78.js"
import{c as bt}from"./createButton-4c9b3216.js"
import{c as gt}from"./createTextArea-b5918fbd.js"
import{d as jt}from"./dialogMsg-227939ed.js"
import{p as Nt}from"./playerName-7e6569ce.js"
import{c as Ct}from"./createSpan-b08aa35e.js"
import{h as Lt}from"./hideElement-3be61495.js"
import"./createLabel-8668dc6c.js"
import"./insertElementBefore-7c440c87.js"
import"./asInt-4b3cfe31.js"
import"./intValue-66f66ba9.js"
import"./valueText-febd3894.js"
import"./fshOpen-d480412d.js"
import"./isChecked-5630e19a.js"
import"./toLowerCase-c964d32b.js"
import"./isDate-00b71016.js"
import"./numberIsNaN-11f99b26.js"
import"./padZ-634214b3.js"
function St(t,e){const n=a.exec(e.dataset.tipped)
return G({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function vt(){const a=e("b",n).find(s("Members"))
if(a){const e=I(),n=function(t){return t.reduce(St,[0,0])}(e)
a.classList.add("tip-static"),V(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,a)}}function yt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function $t(e){const n=e.dataset.tipped,s=yt(n,/XP Lock: <b>(\d*)/),a=yt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`)}function kt(){const t=o('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&$t(t)}let wt,xt
function Mt(t){return wt&&t>=U()&&t<=z()}function Tt(t){return xt&&t>=O()&&t<=Q()}const At=t=>[t,a.exec(t.dataset.tipped)[1]],Bt=([,t])=>t<7,Ht=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Rt=([t,e])=>[t.parentNode.parentNode.rowIndex,Mt(e),Tt(e)]
const Et=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Dt(){const t=m('#pCC a[data-tipped*="<td>VL:</td>"]').map(At).filter(Bt).map(Ht).map(Rt),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Et(t)} {background-color: #4671C8;}`
f(document.body,_(e))}}(e),function(t){if(t.length){const e=`${Et(t)} {background-color: #FF9900;}`
f(document.body,_(e))}}(s),function(t,e){if(t.length+e.length){const t=p(c,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function It(){Number(d("guild_id"))!==F()&&(wt||xt)&&Dt()}function Pt(){wt=u("highlightPlayersNearMyLvl"),xt=u("highlightGvGPlayersNearMyLvl"),It(),u("enableHistoryCompressor")&&function(){const t=e(c,n).slice(-2,-1)[0].rows[0].cells[0],s=r({id:"profile-bio",innerHTML:t.innerHTML})
l("",t),f(t,s),X()}()}function Gt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function Vt(t){"smallLink"===t.target.className&&Z(t.target.previousElementSibling.text)}function Xt(){const t=h(`#pCC a[href^="${b}"]`)
W([5,3,t,0,Gt]),g(n,Vt)}function _t(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function Ft(t,e){l(e,t.insertCell(-1))}function Ut(t,e,n){const s=t.insertRow(t.rows.length-2)
Ft(s,e),Ft(s,n)}function zt(t,e){Ut(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ot(t,e,n){1===e&&function(t){Ut(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),J(t.rows,7,0).forEach(N(zt,n))}function Qt(t,e){const n=C(e),s=o('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=o("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Ot(s,e,n)}(n,a,t.node),i>a&&function(t,e,n){_t(t+1).then(N(e,n))}(a,Qt,t)}function Wt(t){const e=t.rows[6].cells[0].children[0]
e&&_t(1).then(N(Qt,{node:e}))}function Zt(t){t.target.id===S&&y(S,!u(S))}let Jt,qt,Kt,Yt,te,ee,ne,se,ae,oe,ie,ce,re
function le(t,e){return`${t}<option value="${e}">${e}</option>`}function fe(t){return x(t)?"#DEF":t.toLocaleString()}function ue(t,e,n){return`${e}<tr><td>${it(new Date(1e3*n[ct]))}</td><td>${t}</td><td class="fshRight">${fe(n[rt])}</td><td class="fshRight">${fe(n[lt])}</td><td class="fshRight">${fe(n[ft])}</td><td class="fshRight">${fe(n[ut])}</td><td class="fshRight">${Math.floor(n[ft]/n[ut]*100)}</td><td class="fshRight">${n[dt]}</td><td class="fshRight">${fe(n[mt])}</td></tr>`}function de(t,e){return function(t){return qt&&"- All -"!==qt&&qt!==t}(e)?t:t+te[e].reduce(N(ue,e),"")}function me(){te&&l(k(te).reduce(de,""),Jt),Kt.classList.remove("fshSpinner")}function pe(){Kt.classList.add("fshSpinner"),w(3,me)}function he(t){qt=t.target.value,pe()}function be(t){t&&(te=t,l(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(st).reduce(le,"")}</select>`,Yt),pe())}function ge(){const t=$("th",{textContent:"Member"})
return Yt=r(),f(t,Yt),t}function je(){const t=ot({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=ge()
f(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Jt=at(),f(t,Jt)}(t),v(t,"change",he),Kt=r({className:"tgCont fshSpinner64"}),f(Kt,t),Kt}function Ne(t){ee.value=t,ae.classList.remove("fshSpinner")}function Ce(){ee.value='{"lastUpdate": 0, "members": {}}'}function Le(t){jt("Update successful"),be(t.members)}function Se(){const t=M(ee.value)
Y("fsh_guildActivity",t).then(N(Le,t)).catch(jt)}function ve(t,e){const n=bt({className:"custombutton",textContent:t})
return g(n,e),n}function ye(){return ae=r({id:"io",className:"fshSpinner64"}),ee=gt(),ee.setAttribute("autocapitalize","off"),ee.setAttribute("autocomplete","off"),ee.setAttribute("autocorrect","off"),ee.setAttribute("spellcheck","false"),ne=ve("Save",Se),se=ve("Reset",Ce),f(ae,ee),f(ae,pt()),f(ae,ne),f(ae,se),ae}function $e(){return!ie.checked}function ke(t){ie.checked&&"Escape"===t.code&&(ie.checked=!1)}function we(t){$e()&&(t.style.transform=null)}function xe(){A("guildTracker","updateRawData"),oe&&function(t){t&&(ae.classList.add("fshSpinner"),w(4,Ne,[t]))}(oe)}function Me(){const t=function(){const t=r({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return re=q({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),T(re,"change",xe),f(t,re),t}(),e=K({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return f(t,e),H(e,t),t}function Te(){const t=Me(),e=function(){const t=r({className:"fsh-dialog-content"})
return f(t,je()),f(t,ye()),t}()
f(t,e),v(ie,"change",N(we,t)),f(ce,t)}function Ae(t){t&&(oe=JSON.stringify(t),be(t.members))}function Be(){A("guildTracker","openDialog"),tt("fsh_guildActivity").then(Ae),B.dialogIsClosed=$e,i(ce,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Te()}function He(){!function(){const t=o("#pCC img.guild_openGuildStore"),e=t.parentNode,n=r({className:"fsh-tracker"}),s=r({innerHTML:`${nt(S)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(s,"change",Zt),f(n,t),f(n,s),et(e,n)}(),ie=q({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),T(ie,"change",Be),ce=r({className:"fsh-dialog"}),f(ce,ie),v(document.body,"keydown",ke),f(document.body,ce)}let Re,Ee
function De(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ie(){Ee?Ee.disabled=!Re:function(){const t=p(c,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=m(R,e).map(De).join("\n")
Ee=f(document.body,_(s)).sheet}()}function Pe(){Re=!Re,y("enableStamBars",Re),Ie(),A("guildManage","StamBars")}function Ge(){!function(){const t=o("#pCC img.guild_openGuildStore").parentNode,e=f(t,r({className:"fshCenter",innerHTML:nt("enableStamBars")}))
v(e,"change",Pe)}(),Re=u("enableStamBars"),Re&&Ie()}function Ve(t,e,n){const s=function(t){return Ct({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(n)
f(t,function(t){const e=Ct({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return f(e,t),i(e,"&nbsp;]"),e}(s)),e.id=n,u(n)&&Lt(e),g(s,ht)}function Xe(t){Ve(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function _e(t){const e=t.rows[4].cells[1].children[0]
l(e.innerHTML.trim(),e),Ve(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Fe(t){Ve(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ue(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
l(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,a)}function ze(t){const e=p("li",t),n=e[e.length-1].parentNode
i(n,`<li><a href="${D}${Nt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function Oe(t,e){w(3,e,[t])}function Qe(){if(!n)return
const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Xe,_e,Fe,Ue,ze].forEach(N(Oe,t))}(t),w(3,Xt),function(t){E()||(u("detailedConflictInfo")&&w(3,Wt,[t]),w(4,He))}(t),Ge()}function We(){const t=o('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Ze(){w(3,P),w(3,We),w(3,kt),w(3,vt),"manage"===B.subcmd&&Qe(),"view"===B.subcmd&&Pt()}export default Ze
//# sourceMappingURL=guild-525da523.js.map
