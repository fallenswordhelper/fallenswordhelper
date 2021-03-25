import{a as t}from"./addCommas-fc2f471e.js"
import{g as e,p as n,av as a,E as s,by as o,D as i,i as c,d as r,m as l,B as f,h as d,I as u,T as m,b as p,ad as h,a5 as b,o as g,u as j,t as C,v as N,s as L,bB as S,f as v,a0 as y,n as $,aS as k,a as w,aK as x,b6 as T,Q as M,X as A,c as B,bC as H,F as E,y as R,bD as D}from"./calfSystem-eeb1d862.js"
import{l as I}from"./onlineDot-b33fd599.js"
import{s as G}from"./setTipped-4c2abd3e.js"
import{c as P}from"./colouredDots-3eba177f.js"
import X from"./compressBio-9151ddcf.js"
import{c as V}from"./createStyle-c3852d42.js"
import{c as _}from"./currentGuildId-5370ff7a.js"
import{a as F,g as U,c as O,b as Q}from"./levelHighlight-06de42a0.js"
import{b as z}from"./batch-7ea0272b.js"
import{o as J}from"./openQuickBuffByName-d4740e2d.js"
import{d as K}from"./dataRows-79831c64.js"
import{c as Z}from"./createInput-c963dc21.js"
import{c as q}from"./createUl-b4c1441e.js"
import{s as W,g as Y}from"./idb-874d144e.js"
import{i as tt}from"./insertElementAfterBegin-f3c5ddc0.js"
import{b as et}from"./simpleCheckbox-91ea73d5.js"
import{a as nt}from"./alpha-a79afe3b.js"
import{c as at}from"./createTBody-6a9d523a.js"
import{c as st}from"./createTable-6575caa9.js"
import{f as ot}from"./formatLocalDateTime-013f4621.js"
import{u as it,l as ct,v as rt,c as lt,m as ft,a as dt,g as ut}from"./indexConstants-d9e5e5ed.js"
import{c as mt,t as pt}from"./toggleVisibilty-be6fa950.js"
import{c as ht}from"./createButton-033e413f.js"
import{c as bt}from"./createTextArea-da285171.js"
import{d as gt}from"./dialogMsg-716cf657.js"
import{p as jt}from"./playerName-018cf18c.js"
import{c as Ct}from"./createSpan-c8cd4d0e.js"
import{h as Nt}from"./hideElement-f0e898f0.js"
import"./createLabel-7969394e.js"
import"./insertElementBefore-42a90ba9.js"
import"./intValue-ca51a3c0.js"
import"./valueText-7c11f0d0.js"
import"./fshOpen-6a6a1b65.js"
import"./isChecked-d75e63a5.js"
import"./toLowerCase-fa335220.js"
import"./isDate-4b559eff.js"
import"./numberIsNaN-891c59d9.js"
import"./padZ-0374e903.js"
function Lt(t,e){const n=o.exec(e.dataset.tipped)
return I({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function St(){const o=e("b",n).find(a("Members"))
if(o){const e=s('#pCC a[data-tipped*="Last Activity"]'),n=function(t){return t.reduce(Lt,[0,0])}(e)
o.classList.add("tip-static"),G(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,o)}}function vt(t,e){let n
const a=t.replace(/,/g,"").match(e)
return n=a?parseInt(a[1],10):0,n}function yt(e){const n=e.dataset.tipped,a=vt(n,/XP Lock: <b>(\d*)/),s=vt(n,/XP: <b>(\d*)/)
c(e.parentNode.nextElementSibling,` (<b>${function(e,n){let a=""
return e>n&&(a="+"),a+t(e-n)}(s,a)}</b>)`)}function $t(){const t=i('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&yt(t)}let kt,wt
function xt(t){return kt&&t>=F()&&t<=U()}function Tt(t){return wt&&t>=O()&&t<=Q()}const Mt=t=>[t,o.exec(t.dataset.tipped)[1]],At=([,t])=>t<7,Bt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Ht=([t,e])=>[t.parentNode.parentNode.rowIndex,xt(e),Tt(e)]
const Et=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Rt(){const t=s('#pCC a[data-tipped*="<td>VL:</td>"]').map(Mt).filter(At).map(Bt).map(Ht),e=t.filter((([,t])=>t)),a=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Et(t)} {background-color: #4671C8;}`
d(document.body,V(e))}}(e),function(t){if(t.length){const e=`${Et(t)} {background-color: #FF9900;}`
d(document.body,V(e))}}(a),function(t,e){if(t.length+e.length){const t=p(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,a)}function Dt(){Number(m("guild_id"))!==_()&&(kt||wt)&&Rt()}function It(){kt=u("highlightPlayersNearMyLvl"),wt=u("highlightGvGPlayersNearMyLvl"),Dt(),u("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],a=l({id:"profile-bio",innerHTML:t.innerHTML})
f("",t),d(t,a),X()}()}function Gt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function Pt(t){"smallLink"===t.target.className&&J(t.target.previousElementSibling.text)}function Xt(){const t=h(`#pCC a[href^="${b}"]`)
z([5,3,t,0,Gt]),g(n,Pt)}function Vt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function _t(t,e){f(e,t.insertCell(-1))}function Ft(t,e,n){const a=t.insertRow(t.rows.length-2)
_t(a,e),_t(a,n)}function Ut(t,e){Ft(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ot(t,e,n){1===e&&function(t){Ft(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),K(t.rows,7,0).forEach(C(Ut,n))}function Qt(t,e){const n=N(e),a=i('#pCC input[name="page"]',n)
if(!a)return
const s=Number(a.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(a)
!function(t,e,n){const a=i("#pCC > table > tbody > tr > td > table",t)
a&&a.rows.length>3&&Ot(a,e,n)}(n,s,t.node),o>s&&function(t,e,n){Vt(t+1).then(C(e,n))}(s,Qt,t)}function zt(t){const e=t.rows[6].cells[0].children[0]
e&&Vt(1).then(C(Qt,{node:e}))}function Jt(t){t.target.id===S&&y(S,!u(S))}let Kt,Zt,qt,Wt,Yt,te,ee,ne,ae,se,oe,ie,ce
function re(t,e){return`${t}<option value="${e}">${e}</option>`}function le(t){return x(t)?"#DEF":t.toLocaleString()}function fe(t,e,n){return`${e}<tr><td>${ot(new Date(1e3*n[it]))}</td><td>${t}</td><td class="fshRight">${le(n[ct])}</td><td class="fshRight">${le(n[rt])}</td><td class="fshRight">${le(n[lt])}</td><td class="fshRight">${le(n[ft])}</td><td class="fshRight">${Math.floor(n[lt]/n[ft]*100)}</td><td class="fshRight">${n[dt]}</td><td class="fshRight">${le(n[ut])}</td></tr>`}function de(t,e){return function(t){return Zt&&"- All -"!==Zt&&Zt!==t}(e)?t:t+Yt[e].reduce(C(fe,e),"")}function ue(){Yt&&f(k(Yt).reduce(de,""),Kt),qt.classList.remove("fshSpinner")}function me(){qt.classList.add("fshSpinner"),w(3,ue)}function pe(t){Zt=t.target.value,me()}function he(t){t&&(Yt=t,f(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(nt).reduce(re,"")}</select>`,Wt),me())}function be(){const t=$("th",{textContent:"Member"})
return Wt=l(),d(t,Wt),t}function ge(){const t=st({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
c(e,"<th>Date</th>")
const n=be()
d(e,n),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Kt=at(),d(t,Kt)}(t),v(t,"change",pe),qt=l({className:"tgCont fshSpinner64"}),d(qt,t),qt}function je(t){te.value=t,ae.classList.remove("fshSpinner")}function Ce(){te.value='{"lastUpdate": 0, "members": {}}'}function Ne(t){gt("Update successful"),he(t.members)}function Le(){const t=T(te.value)
W("fsh_guildActivity",t).then(C(Ne,t)).catch(gt)}function Se(t,e){const n=ht({className:"custombutton",textContent:t})
return g(n,e),n}function ve(){return ae=l({id:"io",className:"fshSpinner64"}),te=bt(),te.setAttribute("autocapitalize","off"),te.setAttribute("autocomplete","off"),te.setAttribute("autocorrect","off"),te.setAttribute("spellcheck","false"),ee=Se("Save",Le),ne=Se("Reset",Ce),d(ae,te),d(ae,mt()),d(ae,ee),d(ae,ne),ae}function ye(){return!oe.checked}function $e(t){oe.checked&&"Escape"===t.code&&(oe.checked=!1)}function ke(t){ye()&&(t.style.transform=null)}function we(){A("guildTracker","updateRawData"),se&&function(t){t&&(ae.classList.add("fshSpinner"),w(4,je,[t]))}(se)}function xe(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return ce=Z({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),M(ce,"change",we),d(t,ce),t}(),e=q({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return d(t,e),H(e,t),t}function Te(){const t=xe(),e=function(){const t=l({className:"fsh-dialog-content"})
return d(t,ge()),d(t,ve()),t}()
d(t,e),v(oe,"change",C(ke,t)),d(ie,t)}function Me(t){t&&(se=JSON.stringify(t),he(t.members))}function Ae(){A("guildTracker","openDialog"),Y("fsh_guildActivity").then(Me),B.dialogIsClosed=ye,c(ie,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Te()}function Be(){!function(){const t=i("#pCC img.guild_openGuildStore"),e=t.parentNode,n=l({className:"fsh-tracker"}),a=l({innerHTML:`${et(S)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(a,"change",Jt),d(n,t),d(n,a),tt(e,n)}(),oe=Z({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),M(oe,"change",Ae),ie=l({className:"fsh-dialog"}),d(ie,oe),v(document.body,"keydown",$e),d(document.body,ie)}let He,Ee
function Re(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function De(){Ee?Ee.disabled=!He:function(){const t=p(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const a=s(E,e).map(Re).join("\n")
Ee=d(document.body,V(a)).sheet}()}function Ie(){He=!He,y("enableStamBars",He),De(),A("guildManage","StamBars")}function Ge(){!function(){const t=i("#pCC img.guild_openGuildStore").parentNode,e=d(t,l({className:"fshCenter",innerHTML:et("enableStamBars")}))
v(e,"change",Ie)}(),He=u("enableStamBars"),He&&De()}function Pe(t,e,n){const a=function(t){return Ct({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
d(t,function(t){const e=Ct({innerHTML:"[&nbsp;"})
return d(e,t),c(e,"&nbsp;]"),e}(a)),e.id=n,u(n)&&Nt(e),g(a,pt)}function Xe(t){Pe(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Ve(t){const e=t.rows[4].cells[1].children[0]
f(e.innerHTML.trim(),e),Pe(e,t.rows[6].cells[0].children[0],"statisticsControl")}function _e(t){Pe(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Fe(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
f(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,s)}function Ue(t){const e=p("li",t),n=e[e.length-1].parentNode
c(n,`<li><a href="${D}${jt()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Oe(t,e){w(3,e,[t])}function Qe(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Xe,Ve,_e,Fe,Ue].forEach(C(Oe,t))}(t),w(3,Xt),function(t){R()||(u("detailedConflictInfo")&&w(3,zt,[t]),w(4,Be))}(t),Ge()}function ze(){const t=i('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Je(){w(3,P),w(3,ze),w(3,$t),w(3,St),"manage"===B.subcmd&&Qe(),"view"===B.subcmd&&It()}export default Je
//# sourceMappingURL=guild-b9078b18.js.map
