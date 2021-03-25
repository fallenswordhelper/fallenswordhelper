import{a as t}from"./addCommas-fc2f471e.js"
import{g as e,p as n,au as a,E as s,bx as o,D as i,i as c,d as r,m as l,B as f,h as u,I as d,S as m,b as p,ac as h,a4 as b,o as g,u as j,t as C,v as N,s as L,bA as S,f as v,_ as y,n as $,aP as k,a as w,aJ as x,b4 as M,Q as T,W as A,c as B,bB as H,F as E,y as R,bC as D}from"./calfSystem-4a40365f.js"
import{l as I}from"./onlineDot-75e133f9.js"
import{s as P}from"./setTipped-4c2abd3e.js"
import{c as G}from"./colouredDots-b9091678.js"
import _ from"./compressBio-12595956.js"
import{c as V}from"./createStyle-2f461311.js"
import{c as X}from"./currentGuildId-014a0323.js"
import{a as F,g as U,c as J,b as O}from"./levelHighlight-d16d2f68.js"
import{b as Q}from"./batch-7e6fa7bc.js"
import{o as z}from"./openQuickBuffByName-c23c62ee.js"
import{d as W}from"./dataRows-ef9a1a0a.js"
import{c as Z}from"./createInput-7fa974b4.js"
import{c as q}from"./createUl-3aa80487.js"
import{s as K,g as Y}from"./idb-2c15fd0c.js"
import{i as tt}from"./insertElementAfterBegin-b3eb6927.js"
import{b as et}from"./simpleCheckbox-54e3f875.js"
import{a as nt}from"./alpha-a79afe3b.js"
import{c as at}from"./createTBody-8ce4a516.js"
import{c as st}from"./createTable-ece7c4e9.js"
import{f as ot}from"./formatLocalDateTime-013f4621.js"
import{u as it,l as ct,v as rt,c as lt,m as ft,a as ut,g as dt}from"./indexConstants-d9e5e5ed.js"
import{c as mt,t as pt}from"./toggleVisibilty-d40cfa0e.js"
import{c as ht}from"./createButton-546eb789.js"
import{c as bt}from"./createTextArea-2f679fd8.js"
import{d as gt}from"./dialogMsg-716cf657.js"
import{p as jt}from"./playerName-9305cfda.js"
import{c as Ct}from"./createSpan-3ab35394.js"
import{h as Nt}from"./hideElement-f0e898f0.js"
import"./createLabel-7a009fa9.js"
import"./insertElementBefore-42a90ba9.js"
import"./intValue-ca51a3c0.js"
import"./valueText-1577f4a8.js"
import"./fshOpen-6a6a1b65.js"
import"./isChecked-d75e63a5.js"
import"./toLowerCase-fa335220.js"
import"./isDate-4b559eff.js"
import"./numberIsNaN-891c59d9.js"
import"./padZ-0374e903.js"
function Lt(t,e){const n=o.exec(e.dataset.tipped)
return I({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function St(){const o=e("b",n).find(a("Members"))
if(o){const e=s('#pCC a[data-tipped*="Last Activity"]'),n=function(t){return t.reduce(Lt,[0,0])}(e)
o.classList.add("tip-static"),P(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,o)}}function vt(t,e){let n
const a=t.replace(/,/g,"").match(e)
return n=a?parseInt(a[1],10):0,n}function yt(e){const n=e.dataset.tipped,a=vt(n,/XP Lock: <b>(\d*)/),s=vt(n,/XP: <b>(\d*)/)
c(e.parentNode.nextElementSibling,` (<b>${function(e,n){let a=""
return e>n&&(a="+"),a+t(e-n)}(s,a)}</b>)`)}function $t(){const t=i('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&yt(t)}let kt,wt
function xt(t){return kt&&t>=F()&&t<=U()}function Mt(t){return wt&&t>=J()&&t<=O()}const Tt=t=>[t,o.exec(t.dataset.tipped)[1]],At=([,t])=>t<7,Bt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Ht=([t,e])=>[t.parentNode.parentNode.rowIndex,xt(e),Mt(e)]
const Et=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Rt(){const t=s('#pCC a[data-tipped*="<td>VL:</td>"]').map(Tt).filter(At).map(Bt).map(Ht),e=t.filter((([,t])=>t)),a=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Et(t)} {background-color: #4671C8;}`
u(document.body,V(e))}}(e),function(t){if(t.length){const e=`${Et(t)} {background-color: #FF9900;}`
u(document.body,V(e))}}(a),function(t,e){if(t.length+e.length){const t=p(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,a)}function Dt(){Number(m("guild_id"))!==X()&&(kt||wt)&&Rt()}function It(){kt=d("highlightPlayersNearMyLvl"),wt=d("highlightGvGPlayersNearMyLvl"),Dt(),d("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],a=l({id:"profile-bio",innerHTML:t.innerHTML})
f("",t),u(t,a),_()}()}function Pt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function Gt(t){"smallLink"===t.target.className&&z(t.target.previousElementSibling.text)}function _t(){const t=h(`#pCC a[href^="${b}"]`)
Q([5,3,t,0,Pt]),g(n,Gt)}function Vt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function Xt(t,e){f(e,t.insertCell(-1))}function Ft(t,e,n){const a=t.insertRow(t.rows.length-2)
Xt(a,e),Xt(a,n)}function Ut(t,e){Ft(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Jt(t,e,n){1===e&&function(t){Ft(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),W(t.rows,7,0).forEach(C(Ut,n))}function Ot(t,e){const n=N(e),a=i('#pCC input[name="page"]',n)
if(!a)return
const s=Number(a.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(a)
!function(t,e,n){const a=i("#pCC > table > tbody > tr > td > table",t)
a&&a.rows.length>3&&Jt(a,e,n)}(n,s,t.node),o>s&&function(t,e,n){Vt(t+1).then(C(e,n))}(s,Ot,t)}function Qt(t){const e=t.rows[6].cells[0].children[0]
e&&Vt(1).then(C(Ot,{node:e}))}function zt(t){t.target.id===S&&y(S,!d(S))}let Wt,Zt,qt,Kt,Yt,te,ee,ne,ae,se,oe,ie,ce
function re(t,e){return`${t}<option value="${e}">${e}</option>`}function le(t){return x(t)?"#DEF":t.toLocaleString()}function fe(t,e,n){return`${e}<tr><td>${ot(new Date(1e3*n[it]))}</td><td>${t}</td><td class="fshRight">${le(n[ct])}</td><td class="fshRight">${le(n[rt])}</td><td class="fshRight">${le(n[lt])}</td><td class="fshRight">${le(n[ft])}</td><td class="fshRight">${Math.floor(n[lt]/n[ft]*100)}</td><td class="fshRight">${n[ut]}</td><td class="fshRight">${le(n[dt])}</td></tr>`}function ue(t,e){return function(t){return Zt&&"- All -"!==Zt&&Zt!==t}(e)?t:t+Yt[e].reduce(C(fe,e),"")}function de(){Yt&&f(k(Yt).reduce(ue,""),Wt),qt.classList.remove("fshSpinner")}function me(){qt.classList.add("fshSpinner"),w(3,de)}function pe(t){Zt=t.target.value,me()}function he(t){t&&(Yt=t,f(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(nt).reduce(re,"")}</select>`,Kt),me())}function be(){const t=$("th",{textContent:"Member"})
return Kt=l(),u(t,Kt),t}function ge(){const t=st({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
c(e,"<th>Date</th>")
const n=be()
u(e,n),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Wt=at(),u(t,Wt)}(t),v(t,"change",pe),qt=l({className:"tgCont fshSpinner64"}),u(qt,t),qt}function je(t){te.value=t,ae.classList.remove("fshSpinner")}function Ce(){te.value='{"lastUpdate": 0, "members": {}}'}function Ne(t){gt("Update successful"),he(t.members)}function Le(){const t=M(te.value)
K("fsh_guildActivity",t).then(C(Ne,t)).catch(gt)}function Se(t,e){const n=ht({className:"custombutton",textContent:t})
return g(n,e),n}function ve(){return ae=l({id:"io",className:"fshSpinner64"}),te=bt(),te.setAttribute("autocapitalize","off"),te.setAttribute("autocomplete","off"),te.setAttribute("autocorrect","off"),te.setAttribute("spellcheck","false"),ee=Se("Save",Le),ne=Se("Reset",Ce),u(ae,te),u(ae,mt()),u(ae,ee),u(ae,ne),ae}function ye(){return!oe.checked}function $e(t){oe.checked&&"Escape"===t.code&&(oe.checked=!1)}function ke(t){ye()&&(t.style.transform=null)}function we(){A("guildTracker","updateRawData"),se&&function(t){t&&(ae.classList.add("fshSpinner"),w(4,je,[t]))}(se)}function xe(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return ce=Z({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),T(ce,"change",we),u(t,ce),t}(),e=q({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return u(t,e),H(e,t),t}function Me(){const t=xe(),e=function(){const t=l({className:"fsh-dialog-content"})
return u(t,ge()),u(t,ve()),t}()
u(t,e),v(oe,"change",C(ke,t)),u(ie,t)}function Te(t){t&&(se=JSON.stringify(t),he(t.members))}function Ae(){A("guildTracker","openDialog"),Y("fsh_guildActivity").then(Te),B.dialogIsClosed=ye,c(ie,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Me()}function Be(){!function(){const t=i("#pCC img.guild_openGuildStore"),e=t.parentNode,n=l({className:"fsh-tracker"}),a=l({innerHTML:`${et(S)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(a,"change",zt),u(n,t),u(n,a),tt(e,n)}(),oe=Z({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),T(oe,"change",Ae),ie=l({className:"fsh-dialog"}),u(ie,oe),v(document.body,"keydown",$e),u(document.body,ie)}let He,Ee
function Re(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function De(){Ee?Ee.disabled=!He:function(){const t=p(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const a=s(E,e).map(Re).join("\n")
Ee=u(document.body,V(a)).sheet}()}function Ie(){He=!He,y("enableStamBars",He),De(),A("guildManage","StamBars")}function Pe(){!function(){const t=i("#pCC img.guild_openGuildStore").parentNode,e=u(t,l({className:"fshCenter",innerHTML:et("enableStamBars")}))
v(e,"change",Ie)}(),He=d("enableStamBars"),He&&De()}function Ge(t,e,n){const a=function(t){return Ct({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
u(t,function(t){const e=Ct({innerHTML:"[&nbsp;"})
return u(e,t),c(e,"&nbsp;]"),e}(a)),e.id=n,d(n)&&Nt(e),g(a,pt)}function _e(t){Ge(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Ve(t){const e=t.rows[4].cells[1].children[0]
f(e.innerHTML.trim(),e),Ge(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Xe(t){Ge(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Fe(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
f(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,s)}function Ue(t){const e=p("li",t),n=e[e.length-1].parentNode
c(n,`<li><a href="${D}${jt()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Je(t,e){w(3,e,[t])}function Oe(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[_e,Ve,Xe,Fe,Ue].forEach(C(Je,t))}(t),w(3,_t),function(t){R()||(d("detailedConflictInfo")&&w(3,Qt,[t]),w(4,Be))}(t),Pe()}function Qe(){const t=i('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function ze(){w(3,G),w(3,Qe),w(3,$t),w(3,St),"manage"===B.subcmd&&Oe(),"view"===B.subcmd&&It()}export default ze
//# sourceMappingURL=guild-68580478.js.map
