import{a as t}from"./addCommas-8af578e2.js"
import{g as e,p as n,aG as s,bC as a,D as o,i,d as c,m as r,B as l,h as f,I as u,R as d,E as m,b as p,ab as h,a3 as b,o as g,u as j,t as N,v as C,s as S,bE as L,f as v,Z as y,n as $,aZ as k,bA as w,a as x,aT as T,be as M,P as A,S as E,c as H,bF as R,F as B,y as D,bG as I}from"./calfSystem-cbf77dd7.js"
import{g as G,c as P}from"./colouredDots-9edfaf4c.js"
import{l as F}from"./onlineDot-25d2c122.js"
import{s as V}from"./setTipped-c38098a5.js"
import X from"./compressBio-fc563f0f.js"
import{c as _}from"./createStyle-334f83f9.js"
import{c as U}from"./currentGuildId-96726c8f.js"
import{a as Z,g as O,c as z,b as J}from"./levelHighlight-40138177.js"
import{b as Q}from"./batch-996e914c.js"
import{o as W}from"./openQuickBuffByName-41d9e99c.js"
import{d as q}from"./dataRows-bf7d7651.js"
import{c as K}from"./createInput-64e90ab9.js"
import{c as Y}from"./createUl-25ea51fb.js"
import{s as tt,g as et}from"./idb-82a91df1.js"
import{i as nt}from"./insertElementAfterBegin-7e75dc58.js"
import{b as st}from"./simpleCheckbox-27261aa3.js"
import{c as at}from"./createTBody-f9661356.js"
import{c as ot}from"./createTable-8b9596d0.js"
import{f as it}from"./formatLocalDateTime-bd13d3cb.js"
import{u as ct,l as rt,v as lt,c as ft,m as ut,a as dt,g as mt}from"./indexConstants-ab4ff94e.js"
import{c as pt,t as ht}from"./toggleVisibilty-eaf93e8a.js"
import{c as bt}from"./createButton-f5865f3f.js"
import{c as gt}from"./createTextArea-aeda090f.js"
import{d as jt}from"./dialogMsg-16959bc2.js"
import{p as Nt}from"./playerName-448aa7ca.js"
import{c as Ct}from"./createSpan-14225166.js"
import{h as St}from"./hideElement-452544d4.js"
import"./createLabel-b5f69c1e.js"
import"./insertElementBefore-c2bb9234.js"
import"./asInt-f1541708.js"
import"./intValue-19726e4b.js"
import"./valueText-068fe53f.js"
import"./fshOpen-4e911fa6.js"
import"./isChecked-e1880947.js"
import"./isDate-c10883b5.js"
import"./numberIsNaN-c0e87dea.js"
import"./padZ-aa6c487e.js"
function Lt(t,e){const n=a.exec(e.dataset.tipped)
return F({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function vt(){const a=e("b",n).find(s("Members"))
if(a){const e=G(),n=function(t){return t.reduce(Lt,[0,0])}(e)
a.classList.add("tip-static"),V(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,a)}}function yt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function $t(e){const n=e.dataset.tipped,s=yt(n,/XP Lock: <b>(\d*)/),a=yt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`)}function kt(){const t=o('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&$t(t)}let wt,xt
function Tt(t){return wt&&t>=Z()&&t<=O()}function Mt(t){return xt&&t>=z()&&t<=J()}const At=t=>[t,a.exec(t.dataset.tipped)[1]],Et=([,t])=>t<7,Ht=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Rt=([t,e])=>[t.parentNode.parentNode.rowIndex,Tt(e),Mt(e)]
const Bt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Dt(){const t=m('#pCC a[data-tipped*="<td>VL:</td>"]').map(At).filter(Et).map(Ht).map(Rt),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Bt(t)} {background-color: #4671C8;}`
f(document.body,_(e))}}(e),function(t){if(t.length){const e=`${Bt(t)} {background-color: #FF9900;}`
f(document.body,_(e))}}(s),function(t,e){if(t.length+e.length){const t=p(c,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function It(){Number(d("guild_id"))!==U()&&(wt||xt)&&Dt()}function Gt(){wt=u("highlightPlayersNearMyLvl"),xt=u("highlightGvGPlayersNearMyLvl"),It(),u("enableHistoryCompressor")&&function(){const t=e(c,n).slice(-2,-1)[0].rows[0].cells[0],s=r({id:"profile-bio",innerHTML:t.innerHTML})
l("",t),f(t,s),X()}()}function Pt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function Ft(t){"smallLink"===t.target.className&&W(t.target.previousElementSibling.text)}function Vt(){const t=h(`#pCC a[href^="${b}"]`)
Q([5,3,t,0,Pt]),g(n,Ft)}function Xt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function _t(t,e){l(e,t.insertCell(-1))}function Ut(t,e,n){const s=t.insertRow(t.rows.length-2)
_t(s,e),_t(s,n)}function Zt(t,e){Ut(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ot(t,e,n){1===e&&function(t){Ut(t,`<a href="${S}conflicts">Active Conflicts</a>`,"Score")}(n),q(t.rows,7,0).forEach(N(Zt,n))}function zt(t,e){const n=C(e),s=o('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=o("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Ot(s,e,n)}(n,a,t.node),i>a&&function(t,e,n){Xt(t+1).then(N(e,n))}(a,zt,t)}function Jt(t){const e=t.rows[6].cells[0].children[0]
e&&Xt(1).then(N(zt,{node:e}))}function Qt(t){t.target.id===L&&y(L,!u(L))}let Wt,qt,Kt,Yt,te,ee,ne,se,ae,oe,ie,ce,re
function le(t,e){return`${t}<option value="${e}">${e}</option>`}function fe(t){return T(t)?"#DEF":t.toLocaleString()}function ue(t,e,n){return`${e}<tr><td>${it(new Date(1e3*n[ct]))}</td><td>${t}</td><td class="fshRight">${fe(n[rt])}</td><td class="fshRight">${fe(n[lt])}</td><td class="fshRight">${fe(n[ft])}</td><td class="fshRight">${fe(n[ut])}</td><td class="fshRight">${Math.floor(n[ft]/n[ut]*100)}</td><td class="fshRight">${n[dt]}</td><td class="fshRight">${fe(n[mt])}</td></tr>`}function de(t,e){return function(t){return qt&&"- All -"!==qt&&qt!==t}(e)?t:t+te[e].reduce(N(ue,e),"")}function me(){te&&l(k(te).reduce(de,""),Wt),Kt.classList.remove("fshSpinner")}function pe(){Kt.classList.add("fshSpinner"),x(3,me)}function he(t){qt=t.target.value,pe()}function be(t){t&&(te=t,l(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(w).reduce(le,"")}</select>`,Yt),pe())}function ge(){const t=$("th",{textContent:"Member"})
return Yt=r(),f(t,Yt),t}function je(){const t=ot({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=ge()
f(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Wt=at(),f(t,Wt)}(t),v(t,"change",he),Kt=r({className:"tgCont fshSpinner64"}),f(Kt,t),Kt}function Ne(t){ee.value=t,ae.classList.remove("fshSpinner")}function Ce(){ee.value='{"lastUpdate": 0, "members": {}}'}function Se(t){jt("Update successful"),be(t.members)}function Le(){const t=M(ee.value)
tt("fsh_guildActivity",t).then(N(Se,t)).catch(jt)}function ve(t,e){const n=bt({className:"custombutton",textContent:t})
return g(n,e),n}function ye(){return ae=r({id:"io",className:"fshSpinner64"}),ee=gt(),ee.setAttribute("autocapitalize","off"),ee.setAttribute("autocomplete","off"),ee.setAttribute("autocorrect","off"),ee.setAttribute("spellcheck","false"),ne=ve("Save",Le),se=ve("Reset",Ce),f(ae,ee),f(ae,pt()),f(ae,ne),f(ae,se),ae}function $e(){return!ie.checked}function ke(t){ie.checked&&"Escape"===t.code&&(ie.checked=!1)}function we(t){$e()&&(t.style.transform=null)}function xe(){E("guildTracker","updateRawData"),oe&&function(t){t&&(ae.classList.add("fshSpinner"),x(4,Ne,[t]))}(oe)}function Te(){const t=function(){const t=r({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return re=K({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),A(re,"change",xe),f(t,re),t}(),e=Y({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return f(t,e),R(e,t),t}function Me(){const t=Te(),e=function(){const t=r({className:"fsh-dialog-content"})
return f(t,je()),f(t,ye()),t}()
f(t,e),v(ie,"change",N(we,t)),f(ce,t)}function Ae(t){t&&(oe=JSON.stringify(t),be(t.members))}function Ee(){E("guildTracker","openDialog"),et("fsh_guildActivity").then(Ae),H.dialogIsClosed=$e,i(ce,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Me()}function He(){!function(){const t=o("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=r({className:"fsh-tracker"}),s=r({innerHTML:`${st(L)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(s,"change",Qt),f(n,t),f(n,s),nt(e,n)}(),ie=K({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),A(ie,"change",Ee),ce=r({className:"fsh-dialog"}),f(ce,ie),v(document.body,"keydown",ke),f(document.body,ce)}let Re,Be
function De(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ie(){Be?Be.disabled=!Re:function(){const t=p(c,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=m(B,e).map(De).join("\n")
Be=f(document.body,_(s)).sheet}()}function Ge(){Re=!Re,y("enableStamBars",Re),Ie(),E("guildManage","StamBars")}function Pe(){!function(){const t=o("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=f(e,r({className:"fshCenter",innerHTML:st("enableStamBars")}))
v(n,"change",Ge)}(),Re=u("enableStamBars"),Re&&Ie()}function Fe(t,e,n){const s=function(t){return Ct({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(n)
f(t,function(t){const e=Ct({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return f(e,t),i(e,"&nbsp;]"),e}(s)),e.id=n,u(n)&&St(e),g(s,ht)}function Ve(t){Fe(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xe(t){const e=t.rows[4].cells[1].children[0]
l(e.innerHTML.trim(),e),Fe(e,t.rows[6].cells[0].children[0],"statisticsControl")}function _e(t){Fe(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ue(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
l(`[ <a href="${S}reliclist">Control</a> ]&nbsp;`,a)}function Ze(t){const e=p("li",t)
if(!e||!e.length)return
const n=e[e.length-1].parentNode
i(n,`<li><a href="${I}${Nt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function Oe(t,e){x(3,e,[t])}function ze(){if(!n)return
const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Ve,Xe,_e,Ue,Ze].forEach(N(Oe,t))}(t),x(3,Vt),function(t){D()||(u("detailedConflictInfo")&&x(3,Jt,[t]),x(4,He))}(t),Pe()}function Je(){const t=o('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Qe(){x(3,P),x(3,Je),x(3,kt),x(3,vt),"manage"===H.subcmd&&ze(),"view"===H.subcmd&&Gt()}export default Qe
//# sourceMappingURL=guild-4b41f567.js.map
