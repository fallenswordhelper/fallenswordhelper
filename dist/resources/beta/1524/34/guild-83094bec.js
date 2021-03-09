import{a as t}from"./addCommas-4b913655.js"
import{g as e,p as n,as as a,D as s,bw as o,C as i,i as c,d as r,m as l,A as d,h as f,H as u,R as m,b as p,aa as h,a2 as b,o as g,u as j,t as C,v as N,s as L,bx as S,f as v,Z as y,n as $,aO as w,a as k,aI as x,b3 as M,P as T,V as A,c as H,by as R,E,x as B,bz as D}from"./calfSystem-dfa26790.js"
import{l as I}from"./onlineDot-d83b55b4.js"
import{s as P}from"./setTipped-bbdd0d20.js"
import{c as G}from"./colouredDots-4ad39f6b.js"
import V from"./compressBio-52134185.js"
import{c as X}from"./createStyle-bdad4a3a.js"
import{c as _}from"./currentGuildId-8fb4e32d.js"
import{a as F,g as O,c as U,b as z}from"./levelHighlight-c2200957.js"
import{b as Z}from"./batch-1e22305c.js"
import{o as J}from"./openQuickBuffByName-b13feb07.js"
import{d as Q}from"./dataRows-fbdbdd02.js"
import{c as q}from"./createInput-5893fb83.js"
import{c as K}from"./createUl-4a0ba666.js"
import{s as W,g as Y}from"./idb-93f11a94.js"
import{i as tt}from"./insertElementAfterBegin-549a1b31.js"
import{b as et}from"./simpleCheckbox-a076d904.js"
import{a as nt}from"./alpha-18b53f44.js"
import{c as at}from"./createTBody-032c337d.js"
import{c as st}from"./createTable-daece6d2.js"
import{f as ot}from"./formatLocalDateTime-b4df9eb2.js"
import{u as it,l as ct,v as rt,c as lt,m as dt,a as ft,g as ut}from"./indexConstants-98423412.js"
import{c as mt,t as pt}from"./toggleVisibilty-30929811.js"
import{c as ht}from"./createButton-1c897a50.js"
import{c as bt}from"./createTextArea-4b586577.js"
import{d as gt}from"./dialogMsg-2f52cc12.js"
import{p as jt}from"./playerName-b7be03d7.js"
import{c as Ct}from"./createSpan-5e073e7a.js"
import{h as Nt}from"./hideElement-7b9c883f.js"
import"./createLabel-f7e750ad.js"
import"./insertElementBefore-9e5d02cd.js"
import"./intValue-d2a6f461.js"
import"./valueText-6c17ddd6.js"
import"./fshOpen-49538a62.js"
import"./isChecked-d96c8dec.js"
import"./toLowerCase-82b2a5d7.js"
import"./isDate-1383728c.js"
import"./numberIsNaN-738f2a3f.js"
import"./padZ-d4e02992.js"
function Lt(t,e){const n=o.exec(e.dataset.tipped)
return I({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function St(){const o=e("b",n).find(a("Members"))
if(o){const e=s('#pCC a[data-tipped*="Last Activity"]'),n=function(t){return t.reduce(Lt,[0,0])}(e)
o.classList.add("tip-static"),P(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,o)}}function vt(t,e){let n
const a=t.replace(/,/g,"").match(e)
return n=a?parseInt(a[1],10):0,n}function yt(e){const n=e.dataset.tipped,a=vt(n,/XP Lock: <b>(\d*)/),s=vt(n,/XP: <b>(\d*)/)
c(e.parentNode.nextElementSibling,` (<b>${function(e,n){let a=""
return e>n&&(a="+"),a+t(e-n)}(s,a)}</b>)`)}function $t(){const t=i('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&yt(t)}let wt,kt
function xt(t){return wt&&t>=F()&&t<=O()}function Mt(t){return kt&&t>=U()&&t<=z()}const Tt=t=>[t,o.exec(t.dataset.tipped)[1]],At=([,t])=>t<7,Ht=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Rt=([t,e])=>[t.parentNode.parentNode.rowIndex,xt(e),Mt(e)]
const Et=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Bt(){const t=s('#pCC a[data-tipped*="<td>VL:</td>"]').map(Tt).filter(At).map(Ht).map(Rt),e=t.filter((([,t])=>t)),a=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Et(t)} {background-color: #4671C8;}`
f(document.body,X(e))}}(e),function(t){if(t.length){const e=`${Et(t)} {background-color: #FF9900;}`
f(document.body,X(e))}}(a),function(t,e){if(t.length+e.length){const t=p(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,a)}function Dt(){Number(m("guild_id"))!==_()&&(wt||kt)&&Bt()}function It(){wt=u("highlightPlayersNearMyLvl"),kt=u("highlightGvGPlayersNearMyLvl"),Dt(),u("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],a=l({id:"profile-bio",innerHTML:t.innerHTML})
d("",t),f(t,a),V()}()}function Pt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function Gt(t){"smallLink"===t.target.className&&J(t.target.previousElementSibling.text)}function Vt(){const t=h(`#pCC a[href^="${b}"]`)
Z([5,3,t,0,Pt]),g(n,Gt)}function Xt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function _t(t,e){d(e,t.insertCell(-1))}function Ft(t,e,n){const a=t.insertRow(t.rows.length-2)
_t(a,e),_t(a,n)}function Ot(t,e){Ft(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ut(t,e,n){1===e&&function(t){Ft(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),Q(t.rows,7,0).forEach(C(Ot,n))}function zt(t,e){const n=N(e),a=i('#pCC input[name="page"]',n)
if(!a)return
const s=Number(a.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(a)
!function(t,e,n){const a=i("#pCC > table > tbody > tr > td > table",t)
a&&a.rows.length>3&&Ut(a,e,n)}(n,s,t.node),o>s&&function(t,e,n){Xt(t+1).then(C(e,n))}(s,zt,t)}function Zt(t){const e=t.rows[6].cells[0].children[0]
e&&Xt(1).then(C(zt,{node:e}))}function Jt(t){t.target.id===S&&y(S,!u(S))}let Qt,qt,Kt,Wt,Yt,te,ee,ne,ae,se,oe,ie,ce
function re(t,e){return`${t}<option value="${e}">${e}</option>`}function le(t){return x(t)?"#DEF":t.toLocaleString()}function de(t,e,n){return`${e}<tr><td>${ot(new Date(1e3*n[it]))}</td><td>${t}</td><td class="fshRight">${le(n[ct])}</td><td class="fshRight">${le(n[rt])}</td><td class="fshRight">${le(n[lt])}</td><td class="fshRight">${le(n[dt])}</td><td class="fshRight">${Math.floor(n[lt]/n[dt]*100)}</td><td class="fshRight">${n[ft]}</td><td class="fshRight">${le(n[ut])}</td></tr>`}function fe(t,e){return function(t){return qt&&"- All -"!==qt&&qt!==t}(e)?t:t+Yt[e].reduce(C(de,e),"")}function ue(){Yt&&d(w(Yt).reduce(fe,""),Qt),Kt.classList.remove("fshSpinner")}function me(){Kt.classList.add("fshSpinner"),k(3,ue)}function pe(t){qt=t.target.value,me()}function he(t){t&&(Yt=t,d(`<select name="member"><option value="- All -" selected>- All -</option>${w(t).sort(nt).reduce(re,"")}</select>`,Wt),me())}function be(){const t=$("th",{textContent:"Member"})
return Wt=l(),f(t,Wt),t}function ge(){const t=st({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
c(e,"<th>Date</th>")
const n=be()
f(e,n),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Qt=at(),f(t,Qt)}(t),v(t,"change",pe),Kt=l({className:"tgCont fshSpinner64"}),f(Kt,t),Kt}function je(t){te.value=t,ae.classList.remove("fshSpinner")}function Ce(){te.value='{"lastUpdate": 0, "members": {}}'}function Ne(t){gt("Update successful"),he(t.members)}function Le(){const t=M(te.value)
W("fsh_guildActivity",t).then(C(Ne,t)).catch(gt)}function Se(t,e){const n=ht({className:"custombutton",textContent:t})
return g(n,e),n}function ve(){return ae=l({id:"io",className:"fshSpinner64"}),te=bt(),te.setAttribute("autocapitalize","off"),te.setAttribute("autocomplete","off"),te.setAttribute("autocorrect","off"),te.setAttribute("spellcheck","false"),ee=Se("Save",Le),ne=Se("Reset",Ce),f(ae,te),f(ae,mt()),f(ae,ee),f(ae,ne),ae}function ye(){return!oe.checked}function $e(t){oe.checked&&"Escape"===t.code&&(oe.checked=!1)}function we(t){ye()&&(t.style.transform=null)}function ke(){A("guildTracker","updateRawData"),se&&function(t){t&&(ae.classList.add("fshSpinner"),k(4,je,[t]))}(se)}function xe(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return ce=q({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),T(ce,"change",ke),f(t,ce),t}(),e=K({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return f(t,e),R(e,t),t}function Me(){const t=xe(),e=function(){const t=l({className:"fsh-dialog-content"})
return f(t,ge()),f(t,ve()),t}()
f(t,e),v(oe,"change",C(we,t)),f(ie,t)}function Te(t){t&&(se=JSON.stringify(t),he(t.members))}function Ae(){A("guildTracker","openDialog"),Y("fsh_guildActivity").then(Te),H.dialogIsClosed=ye,c(ie,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Me()}function He(){!function(){const t=i("#pCC img.guild_openGuildStore"),e=t.parentNode,n=l({className:"fsh-tracker"}),a=l({innerHTML:`${et(S)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(a,"change",Jt),f(n,t),f(n,a),tt(e,n)}(),oe=q({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),T(oe,"change",Ae),ie=l({className:"fsh-dialog"}),f(ie,oe),v(document.body,"keydown",$e),f(document.body,ie)}let Re,Ee
function Be(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function De(){Ee?Ee.disabled=!Re:function(){const t=p(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const a=s(E,e).map(Be).join("\n")
Ee=f(document.body,X(a)).sheet}()}function Ie(){Re=!Re,y("enableStamBars",Re),De(),A("guildManage","StamBars")}function Pe(){!function(){const t=i("#pCC img.guild_openGuildStore").parentNode,e=f(t,l({className:"fshCenter",innerHTML:et("enableStamBars")}))
v(e,"change",Ie)}(),Re=u("enableStamBars"),Re&&De()}function Ge(t,e,n){const a=function(t){return Ct({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
f(t,function(t){const e=Ct({innerHTML:"[&nbsp;"})
return f(e,t),c(e,"&nbsp;]"),e}(a)),e.id=n,u(n)&&Nt(e),g(a,pt)}function Ve(t){Ge(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xe(t){const e=t.rows[4].cells[1].children[0]
d(e.innerHTML.trim(),e),Ge(e,t.rows[6].cells[0].children[0],"statisticsControl")}function _e(t){Ge(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Fe(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
d(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,s)}function Oe(t){const e=p("li",t),n=e[e.length-1].parentNode
c(n,`<li><a href="${D}${jt()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Ue(t,e){k(3,e,[t])}function ze(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Ve,Xe,_e,Fe,Oe].forEach(C(Ue,t))}(t),k(3,Vt),function(t){B()||(u("detailedConflictInfo")&&k(3,Zt,[t]),k(4,He))}(t),Pe()}function Ze(){const t=i('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Je(){k(3,G),k(3,Ze),k(3,$t),k(3,St),"manage"===H.subcmd&&ze(),"view"===H.subcmd&&It()}export default Je
//# sourceMappingURL=guild-83094bec.js.map
