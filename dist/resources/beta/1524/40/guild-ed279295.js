import{a as t}from"./addCommas-6123a9f9.js"
import{g as e,p as n,aC as a,bx as s,D as o,i,d as c,m as r,B as l,h as f,I as u,S as d,E as m,b as p,ac as h,a4 as b,o as g,u as j,t as C,v as N,s as L,bz as S,f as v,_ as y,n as $,aV as k,a as w,aP as x,ba as M,Q as T,W as A,c as B,bA as H,F as E,y as R,bB as D}from"./calfSystem-ab393688.js"
import{g as I,c as P}from"./colouredDots-3fcd5994.js"
import{l as G}from"./onlineDot-c57058d1.js"
import{s as V}from"./setTipped-c42cf871.js"
import _ from"./compressBio-3853c14f.js"
import{c as X}from"./createStyle-804cbecc.js"
import{c as F}from"./currentGuildId-0cbe4e98.js"
import{a as U,g as z,c as O,b as Q}from"./levelHighlight-99f5b27b.js"
import{b as J}from"./batch-389838cb.js"
import{o as W}from"./openQuickBuffByName-a32a2b4a.js"
import{d as Z}from"./dataRows-52e3a5bd.js"
import{c as q}from"./createInput-c427de8f.js"
import{c as K}from"./createUl-ae9ba982.js"
import{s as Y,g as tt}from"./idb-4a088c10.js"
import{i as et}from"./insertElementAfterBegin-925be257.js"
import{b as nt}from"./simpleCheckbox-116c09bb.js"
import{a as at}from"./alpha-9ef10f70.js"
import{c as st}from"./createTBody-01a827bc.js"
import{c as ot}from"./createTable-fc2f2ae0.js"
import{f as it}from"./formatLocalDateTime-7acb75ce.js"
import{u as ct,l as rt,v as lt,c as ft,m as ut,a as dt,g as mt}from"./indexConstants-eecdd98e.js"
import{c as pt,t as ht}from"./toggleVisibilty-5dfaebc0.js"
import{c as bt}from"./createButton-07230ca6.js"
import{c as gt}from"./createTextArea-9875ccdd.js"
import{d as jt}from"./dialogMsg-3d2031b8.js"
import{p as Ct}from"./playerName-17cbc946.js"
import{c as Nt}from"./createSpan-12f0c446.js"
import{h as Lt}from"./hideElement-512851a2.js"
import"./createLabel-d7c4f0d0.js"
import"./insertElementBefore-6e80e0ff.js"
import"./intValue-e485889b.js"
import"./valueText-d39824a3.js"
import"./fshOpen-9656868c.js"
import"./isChecked-a9c3c9fe.js"
import"./toLowerCase-d053e281.js"
import"./isDate-497a3429.js"
import"./numberIsNaN-2764ce9c.js"
import"./padZ-827c036e.js"
function St(t,e){const n=s.exec(e.dataset.tipped)
return G({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function vt(){const s=e("b",n).find(a("Members"))
if(s){const e=I(),n=function(t){return t.reduce(St,[0,0])}(e)
s.classList.add("tip-static"),V(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,s)}}function yt(t,e){let n
const a=t.replace(/,/g,"").match(e)
return n=a?parseInt(a[1],10):0,n}function $t(e){const n=e.dataset.tipped,a=yt(n,/XP Lock: <b>(\d*)/),s=yt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let a=""
return e>n&&(a="+"),a+t(e-n)}(s,a)}</b>)`)}function kt(){const t=o('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&$t(t)}let wt,xt
function Mt(t){return wt&&t>=U()&&t<=z()}function Tt(t){return xt&&t>=O()&&t<=Q()}const At=t=>[t,s.exec(t.dataset.tipped)[1]],Bt=([,t])=>t<7,Ht=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Et=([t,e])=>[t.parentNode.parentNode.rowIndex,Mt(e),Tt(e)]
const Rt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Dt(){const t=m('#pCC a[data-tipped*="<td>VL:</td>"]').map(At).filter(Bt).map(Ht).map(Et),e=t.filter((([,t])=>t)),a=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Rt(t)} {background-color: #4671C8;}`
f(document.body,X(e))}}(e),function(t){if(t.length){const e=`${Rt(t)} {background-color: #FF9900;}`
f(document.body,X(e))}}(a),function(t,e){if(t.length+e.length){const t=p(c,n)
t[t.length-1].classList.add("fshHighlight")}}(e,a)}function It(){Number(d("guild_id"))!==F()&&(wt||xt)&&Dt()}function Pt(){wt=u("highlightPlayersNearMyLvl"),xt=u("highlightGvGPlayersNearMyLvl"),It(),u("enableHistoryCompressor")&&function(){const t=e(c,n).slice(-2,-1)[0].rows[0].cells[0],a=r({id:"profile-bio",innerHTML:t.innerHTML})
l("",t),f(t,a),_()}()}function Gt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function Vt(t){"smallLink"===t.target.className&&W(t.target.previousElementSibling.text)}function _t(){const t=h(`#pCC a[href^="${b}"]`)
J([5,3,t,0,Gt]),g(n,Vt)}function Xt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function Ft(t,e){l(e,t.insertCell(-1))}function Ut(t,e,n){const a=t.insertRow(t.rows.length-2)
Ft(a,e),Ft(a,n)}function zt(t,e){Ut(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ot(t,e,n){1===e&&function(t){Ut(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),Z(t.rows,7,0).forEach(C(zt,n))}function Qt(t,e){const n=N(e),a=o('#pCC input[name="page"]',n)
if(!a)return
const s=Number(a.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(a)
!function(t,e,n){const a=o("#pCC > table > tbody > tr > td > table",t)
a&&a.rows.length>3&&Ot(a,e,n)}(n,s,t.node),i>s&&function(t,e,n){Xt(t+1).then(C(e,n))}(s,Qt,t)}function Jt(t){const e=t.rows[6].cells[0].children[0]
e&&Xt(1).then(C(Qt,{node:e}))}function Wt(t){t.target.id===S&&y(S,!u(S))}let Zt,qt,Kt,Yt,te,ee,ne,ae,se,oe,ie,ce,re
function le(t,e){return`${t}<option value="${e}">${e}</option>`}function fe(t){return x(t)?"#DEF":t.toLocaleString()}function ue(t,e,n){return`${e}<tr><td>${it(new Date(1e3*n[ct]))}</td><td>${t}</td><td class="fshRight">${fe(n[rt])}</td><td class="fshRight">${fe(n[lt])}</td><td class="fshRight">${fe(n[ft])}</td><td class="fshRight">${fe(n[ut])}</td><td class="fshRight">${Math.floor(n[ft]/n[ut]*100)}</td><td class="fshRight">${n[dt]}</td><td class="fshRight">${fe(n[mt])}</td></tr>`}function de(t,e){return function(t){return qt&&"- All -"!==qt&&qt!==t}(e)?t:t+te[e].reduce(C(ue,e),"")}function me(){te&&l(k(te).reduce(de,""),Zt),Kt.classList.remove("fshSpinner")}function pe(){Kt.classList.add("fshSpinner"),w(3,me)}function he(t){qt=t.target.value,pe()}function be(t){t&&(te=t,l(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(at).reduce(le,"")}</select>`,Yt),pe())}function ge(){const t=$("th",{textContent:"Member"})
return Yt=r(),f(t,Yt),t}function je(){const t=ot({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=ge()
f(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Zt=st(),f(t,Zt)}(t),v(t,"change",he),Kt=r({className:"tgCont fshSpinner64"}),f(Kt,t),Kt}function Ce(t){ee.value=t,se.classList.remove("fshSpinner")}function Ne(){ee.value='{"lastUpdate": 0, "members": {}}'}function Le(t){jt("Update successful"),be(t.members)}function Se(){const t=M(ee.value)
Y("fsh_guildActivity",t).then(C(Le,t)).catch(jt)}function ve(t,e){const n=bt({className:"custombutton",textContent:t})
return g(n,e),n}function ye(){return se=r({id:"io",className:"fshSpinner64"}),ee=gt(),ee.setAttribute("autocapitalize","off"),ee.setAttribute("autocomplete","off"),ee.setAttribute("autocorrect","off"),ee.setAttribute("spellcheck","false"),ne=ve("Save",Se),ae=ve("Reset",Ne),f(se,ee),f(se,pt()),f(se,ne),f(se,ae),se}function $e(){return!ie.checked}function ke(t){ie.checked&&"Escape"===t.code&&(ie.checked=!1)}function we(t){$e()&&(t.style.transform=null)}function xe(){A("guildTracker","updateRawData"),oe&&function(t){t&&(se.classList.add("fshSpinner"),w(4,Ce,[t]))}(oe)}function Me(){const t=function(){const t=r({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return re=q({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),T(re,"change",xe),f(t,re),t}(),e=K({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return f(t,e),H(e,t),t}function Te(){const t=Me(),e=function(){const t=r({className:"fsh-dialog-content"})
return f(t,je()),f(t,ye()),t}()
f(t,e),v(ie,"change",C(we,t)),f(ce,t)}function Ae(t){t&&(oe=JSON.stringify(t),be(t.members))}function Be(){A("guildTracker","openDialog"),tt("fsh_guildActivity").then(Ae),B.dialogIsClosed=$e,i(ce,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Te()}function He(){!function(){const t=o("#pCC img.guild_openGuildStore"),e=t.parentNode,n=r({className:"fsh-tracker"}),a=r({innerHTML:`${nt(S)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(a,"change",Wt),f(n,t),f(n,a),et(e,n)}(),ie=q({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),T(ie,"change",Be),ce=r({className:"fsh-dialog"}),f(ce,ie),v(document.body,"keydown",ke),f(document.body,ce)}let Ee,Re
function De(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ie(){Re?Re.disabled=!Ee:function(){const t=p(c,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const a=m(E,e).map(De).join("\n")
Re=f(document.body,X(a)).sheet}()}function Pe(){Ee=!Ee,y("enableStamBars",Ee),Ie(),A("guildManage","StamBars")}function Ge(){!function(){const t=o("#pCC img.guild_openGuildStore").parentNode,e=f(t,r({className:"fshCenter",innerHTML:nt("enableStamBars")}))
v(e,"change",Pe)}(),Ee=u("enableStamBars"),Ee&&Ie()}function Ve(t,e,n){const a=function(t){return Nt({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
f(t,function(t){const e=Nt({innerHTML:"[&nbsp;"})
return f(e,t),i(e,"&nbsp;]"),e}(a)),e.id=n,u(n)&&Lt(e),g(a,ht)}function _e(t){Ve(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xe(t){const e=t.rows[4].cells[1].children[0]
l(e.innerHTML.trim(),e),Ve(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Fe(t){Ve(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ue(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
l(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,s)}function ze(t){const e=p("li",t),n=e[e.length-1].parentNode
i(n,`<li><a href="${D}${Ct()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Oe(t,e){w(3,e,[t])}function Qe(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[_e,Xe,Fe,Ue,ze].forEach(C(Oe,t))}(t),w(3,_t),function(t){R()||(u("detailedConflictInfo")&&w(3,Jt,[t]),w(4,He))}(t),Ge()}function Je(){const t=o('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function We(){w(3,P),w(3,Je),w(3,kt),w(3,vt),"manage"===B.subcmd&&Qe(),"view"===B.subcmd&&Pt()}export default We
//# sourceMappingURL=guild-ed279295.js.map