import{a as t}from"./addCommas-aab57e5e.js"
import{g as e,p as n,aF as a,bA as s,D as o,i,d as c,m as r,B as l,h as d,I as f,R as u,E as m,b as p,ab as h,a3 as b,o as g,u as j,t as N,v as C,s as S,bC as L,f as v,Z as y,n as $,aY as k,a as w,aS as x,bd as M,P as T,S as A,c as E,bD as H,F as R,y as B,bE as D}from"./calfSystem-a8d582b6.js"
import{g as I,c as P}from"./colouredDots-9f3a15ef.js"
import{l as G}from"./onlineDot-76ee782e.js"
import{s as F}from"./setTipped-92acd4eb.js"
import V from"./compressBio-bd5edafc.js"
import{c as X}from"./createStyle-d4f6dc05.js"
import{c as _}from"./currentGuildId-6d2e1d9d.js"
import{a as U,g as O,c as Z,b as z}from"./levelHighlight-d117282b.js"
import{b as J}from"./batch-b787972d.js"
import{o as Q}from"./openQuickBuffByName-05198165.js"
import{d as W}from"./dataRows-25616e3d.js"
import{c as Y}from"./createInput-8922c2cd.js"
import{c as q}from"./createUl-39044721.js"
import{s as K,g as tt}from"./idb-d8c9a883.js"
import{i as et}from"./insertElementAfterBegin-f2f74df6.js"
import{b as nt}from"./simpleCheckbox-3dcaad11.js"
import{a as at}from"./alpha-7ee6a1b8.js"
import{c as st}from"./createTBody-5ee81bbb.js"
import{c as ot}from"./createTable-3028e219.js"
import{f as it}from"./formatLocalDateTime-c295cb3e.js"
import{u as ct,l as rt,v as lt,c as dt,m as ft,a as ut,g as mt}from"./indexConstants-101e0ad8.js"
import{c as pt,t as ht}from"./toggleVisibilty-adba66d5.js"
import{c as bt}from"./createButton-ae7066ba.js"
import{c as gt}from"./createTextArea-fdb5def7.js"
import{d as jt}from"./dialogMsg-227939ed.js"
import{p as Nt}from"./playerName-9ba8ea6b.js"
import{c as Ct}from"./createSpan-f56cc9ef.js"
import{h as St}from"./hideElement-3be61495.js"
import"./createLabel-68fb1b3a.js"
import"./insertElementBefore-7c440c87.js"
import"./asInt-ed8ceed1.js"
import"./intValue-66f66ba9.js"
import"./valueText-27359b90.js"
import"./fshOpen-d480412d.js"
import"./isChecked-5630e19a.js"
import"./toLowerCase-c964d32b.js"
import"./isDate-00b71016.js"
import"./numberIsNaN-11f99b26.js"
import"./padZ-634214b3.js"
function Lt(t,e){const n=s.exec(e.dataset.tipped)
return G({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function vt(){const s=e("b",n).find(a("Members"))
if(s){const e=I(),n=function(t){return t.reduce(Lt,[0,0])}(e)
s.classList.add("tip-static"),F(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,s)}}function yt(t,e){let n
const a=t.replace(/,/g,"").match(e)
return n=a?parseInt(a[1],10):0,n}function $t(e){const n=e.dataset.tipped,a=yt(n,/XP Lock: <b>(\d*)/),s=yt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let a=""
return e>n&&(a="+"),a+t(e-n)}(s,a)}</b>)`)}function kt(){const t=o('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&$t(t)}let wt,xt
function Mt(t){return wt&&t>=U()&&t<=O()}function Tt(t){return xt&&t>=Z()&&t<=z()}const At=t=>[t,s.exec(t.dataset.tipped)[1]],Et=([,t])=>t<7,Ht=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Rt=([t,e])=>[t.parentNode.parentNode.rowIndex,Mt(e),Tt(e)]
const Bt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Dt(){const t=m('#pCC a[data-tipped*="<td>VL:</td>"]').map(At).filter(Et).map(Ht).map(Rt),e=t.filter((([,t])=>t)),a=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Bt(t)} {background-color: #4671C8;}`
d(document.body,X(e))}}(e),function(t){if(t.length){const e=`${Bt(t)} {background-color: #FF9900;}`
d(document.body,X(e))}}(a),function(t,e){if(t.length+e.length){const t=p(c,n)
t[t.length-1].classList.add("fshHighlight")}}(e,a)}function It(){Number(u("guild_id"))!==_()&&(wt||xt)&&Dt()}function Pt(){wt=f("highlightPlayersNearMyLvl"),xt=f("highlightGvGPlayersNearMyLvl"),It(),f("enableHistoryCompressor")&&function(){const t=e(c,n).slice(-2,-1)[0].rows[0].cells[0],a=r({id:"profile-bio",innerHTML:t.innerHTML})
l("",t),d(t,a),V()}()}function Gt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function Ft(t){"smallLink"===t.target.className&&Q(t.target.previousElementSibling.text)}function Vt(){const t=h(`#pCC a[href^="${b}"]`)
J([5,3,t,0,Gt]),g(n,Ft)}function Xt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function _t(t,e){l(e,t.insertCell(-1))}function Ut(t,e,n){const a=t.insertRow(t.rows.length-2)
_t(a,e),_t(a,n)}function Ot(t,e){Ut(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Zt(t,e,n){1===e&&function(t){Ut(t,`<a href="${S}conflicts">Active Conflicts</a>`,"Score")}(n),W(t.rows,7,0).forEach(N(Ot,n))}function zt(t,e){const n=C(e),a=o('#pCC input[name="page"]',n)
if(!a)return
const s=Number(a.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(a)
!function(t,e,n){const a=o("#pCC > table > tbody > tr > td > table",t)
a&&a.rows.length>3&&Zt(a,e,n)}(n,s,t.node),i>s&&function(t,e,n){Xt(t+1).then(N(e,n))}(s,zt,t)}function Jt(t){const e=t.rows[6].cells[0].children[0]
e&&Xt(1).then(N(zt,{node:e}))}function Qt(t){t.target.id===L&&y(L,!f(L))}let Wt,Yt,qt,Kt,te,ee,ne,ae,se,oe,ie,ce,re
function le(t,e){return`${t}<option value="${e}">${e}</option>`}function de(t){return x(t)?"#DEF":t.toLocaleString()}function fe(t,e,n){return`${e}<tr><td>${it(new Date(1e3*n[ct]))}</td><td>${t}</td><td class="fshRight">${de(n[rt])}</td><td class="fshRight">${de(n[lt])}</td><td class="fshRight">${de(n[dt])}</td><td class="fshRight">${de(n[ft])}</td><td class="fshRight">${Math.floor(n[dt]/n[ft]*100)}</td><td class="fshRight">${n[ut]}</td><td class="fshRight">${de(n[mt])}</td></tr>`}function ue(t,e){return function(t){return Yt&&"- All -"!==Yt&&Yt!==t}(e)?t:t+te[e].reduce(N(fe,e),"")}function me(){te&&l(k(te).reduce(ue,""),Wt),qt.classList.remove("fshSpinner")}function pe(){qt.classList.add("fshSpinner"),w(3,me)}function he(t){Yt=t.target.value,pe()}function be(t){t&&(te=t,l(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(at).reduce(le,"")}</select>`,Kt),pe())}function ge(){const t=$("th",{textContent:"Member"})
return Kt=r(),d(t,Kt),t}function je(){const t=ot({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=ge()
d(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Wt=st(),d(t,Wt)}(t),v(t,"change",he),qt=r({className:"tgCont fshSpinner64"}),d(qt,t),qt}function Ne(t){ee.value=t,se.classList.remove("fshSpinner")}function Ce(){ee.value='{"lastUpdate": 0, "members": {}}'}function Se(t){jt("Update successful"),be(t.members)}function Le(){const t=M(ee.value)
K("fsh_guildActivity",t).then(N(Se,t)).catch(jt)}function ve(t,e){const n=bt({className:"custombutton",textContent:t})
return g(n,e),n}function ye(){return se=r({id:"io",className:"fshSpinner64"}),ee=gt(),ee.setAttribute("autocapitalize","off"),ee.setAttribute("autocomplete","off"),ee.setAttribute("autocorrect","off"),ee.setAttribute("spellcheck","false"),ne=ve("Save",Le),ae=ve("Reset",Ce),d(se,ee),d(se,pt()),d(se,ne),d(se,ae),se}function $e(){return!ie.checked}function ke(t){ie.checked&&"Escape"===t.code&&(ie.checked=!1)}function we(t){$e()&&(t.style.transform=null)}function xe(){A("guildTracker","updateRawData"),oe&&function(t){t&&(se.classList.add("fshSpinner"),w(4,Ne,[t]))}(oe)}function Me(){const t=function(){const t=r({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return re=Y({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),T(re,"change",xe),d(t,re),t}(),e=q({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return d(t,e),H(e,t),t}function Te(){const t=Me(),e=function(){const t=r({className:"fsh-dialog-content"})
return d(t,je()),d(t,ye()),t}()
d(t,e),v(ie,"change",N(we,t)),d(ce,t)}function Ae(t){t&&(oe=JSON.stringify(t),be(t.members))}function Ee(){A("guildTracker","openDialog"),tt("fsh_guildActivity").then(Ae),E.dialogIsClosed=$e,i(ce,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Te()}function He(){!function(){const t=o("#pCC img.guild_openGuildStore"),e=t.parentNode,n=r({className:"fsh-tracker"}),a=r({innerHTML:`${nt(L)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(a,"change",Qt),d(n,t),d(n,a),et(e,n)}(),ie=Y({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),T(ie,"change",Ee),ce=r({className:"fsh-dialog"}),d(ce,ie),v(document.body,"keydown",ke),d(document.body,ce)}let Re,Be
function De(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ie(){Be?Be.disabled=!Re:function(){const t=p(c,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const a=m(R,e).map(De).join("\n")
Be=d(document.body,X(a)).sheet}()}function Pe(){Re=!Re,y("enableStamBars",Re),Ie(),A("guildManage","StamBars")}function Ge(){!function(){const t=o("#pCC img.guild_openGuildStore").parentNode,e=d(t,r({className:"fshCenter",innerHTML:nt("enableStamBars")}))
v(e,"change",Pe)}(),Re=f("enableStamBars"),Re&&Ie()}function Fe(t,e,n){const a=function(t){return Ct({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(n)
d(t,function(t){const e=Ct({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(e,t),i(e,"&nbsp;]"),e}(a)),e.id=n,f(n)&&St(e),g(a,ht)}function Ve(t){Fe(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xe(t){const e=t.rows[4].cells[1].children[0]
l(e.innerHTML.trim(),e),Fe(e,t.rows[6].cells[0].children[0],"statisticsControl")}function _e(t){Fe(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ue(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
l(`[ <a href="${S}reliclist">Control</a> ]&nbsp;`,s)}function Oe(t){const e=p("li",t),n=e[e.length-1].parentNode
i(n,`<li><a href="${D}${Nt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function Ze(t,e){w(3,e,[t])}function ze(){if(!n)return
const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Ve,Xe,_e,Ue,Oe].forEach(N(Ze,t))}(t),w(3,Vt),function(t){B()||(f("detailedConflictInfo")&&w(3,Jt,[t]),w(4,He))}(t),Ge()}function Je(){const t=o('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Qe(){w(3,P),w(3,Je),w(3,kt),w(3,vt),"manage"===E.subcmd&&ze(),"view"===E.subcmd&&Pt()}export default Qe
//# sourceMappingURL=guild-4fc8de56.js.map
