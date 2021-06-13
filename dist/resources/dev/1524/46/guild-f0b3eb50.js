import{a as t}from"./addCommas-8af578e2.js"
import{g as e,p as n,aH as s,bD as a,H as o,D as i,i as c,d as r,m as l,B as f,h as u,I as d,S as m,E as p,b as h,ac as b,a4 as g,o as j,u as N,t as C,v as S,s as L,bF as v,f as y,_ as $,n as k,b1 as w,bB as T,a as x,aU as M,bh as H,P as A,T as B,c as E,bG as R,F as D,y as I,bH as G}from"./calfSystem-d3f0a380.js"
import{g as P,c as _}from"./colouredDots-326f71c6.js"
import{l as F}from"./onlineDot-78db5edc.js"
import{s as V}from"./setTipped-c38098a5.js"
import{c as X}from"./closestTr-fd5f5074.js"
import{i as U}from"./intValue-19726e4b.js"
import{s as O}from"./sum-f3d60567.js"
import z from"./compressBio-129e97bb.js"
import{c as J}from"./createStyle-65a2dcef.js"
import{c as Q}from"./currentGuildId-574c8e9f.js"
import{a as W,g as Z,c as q,b as K}from"./levelHighlight-fb88b6db.js"
import{b as Y}from"./batch-7c0362d6.js"
import{o as tt}from"./openQuickBuffByName-62f56024.js"
import{d as et}from"./dataRows-fb96d443.js"
import{c as nt}from"./createInput-816cd771.js"
import{c as st}from"./createUl-79bfff16.js"
import{s as at,g as ot}from"./idb-13440348.js"
import{i as it}from"./insertElementAfterBegin-7b87afd6.js"
import{b as ct}from"./simpleCheckbox-7afb7f1a.js"
import{c as rt}from"./createTBody-c50c240b.js"
import{c as lt}from"./createTable-4508e0e9.js"
import{f as ft}from"./formatLocalDateTime-bd13d3cb.js"
import{u as ut,l as dt,v as mt,c as pt,m as ht,a as bt,g as gt}from"./indexConstants-ab4ff94e.js"
import{c as jt,t as Nt}from"./toggleVisibilty-1be13790.js"
import{c as Ct}from"./createButton-41f57afe.js"
import{c as St}from"./createTextArea-c0f9ef8c.js"
import{d as Lt}from"./dialogMsg-16959bc2.js"
import{p as vt}from"./playerName-9d5fb2c2.js"
import{c as yt}from"./createSpan-6440fa04.js"
import{h as $t}from"./hideElement-452544d4.js"
import"./closest-d38ca7fc.js"
import"./createLabel-c64b35fa.js"
import"./insertElementBefore-c2bb9234.js"
import"./asInt-c5f8ce87.js"
import"./valueText-2dd1b1b5.js"
import"./fshOpen-4e911fa6.js"
import"./isChecked-e1880947.js"
import"./isDate-c10883b5.js"
import"./numberIsNaN-c0e87dea.js"
import"./padZ-aa6c487e.js"
function kt(t,e){const n=a.exec(e.dataset.tipped)
return F({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function wt(){const a=e("b",n).find(s("Members"))
if(a){const e=P(),n=function(t){return t.reduce(kt,[0,0])}(e)
a.classList.add("tip-static"),V(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,a)}}const Tt=t=>U(o(X(t).cells[4]))
function xt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function Mt(e){const n=e.dataset.tipped,s=xt(n,/XP Lock: <b>(\d*)/),a=xt(n,/XP: <b>(\d*)/)
c(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`),console.log(t(P().map(Tt).reduce(O,0)))}function Ht(){const t=i('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&Mt(t)}let At,Bt
function Et(t){return At&&t>=W()&&t<=Z()}function Rt(t){return Bt&&t>=q()&&t<=K()}const Dt=t=>[t,a.exec(t.dataset.tipped)[1]],It=([,t])=>t<7,Gt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Pt=([t,e])=>[t.parentNode.parentNode.rowIndex,Et(e),Rt(e)]
const _t=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Ft(){const t=p('#pCC a[data-tipped*="<td>VL:</td>"]').map(Dt).filter(It).map(Gt).map(Pt),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${_t(t)} {background-color: #4671C8;}`
u(document.body,J(e))}}(e),function(t){if(t.length){const e=`${_t(t)} {background-color: #FF9900;}`
u(document.body,J(e))}}(s),function(t,e){if(t.length+e.length){const t=h(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function Vt(){Number(m("guild_id"))!==Q()&&(At||Bt)&&Ft()}function Xt(){At=d("highlightPlayersNearMyLvl"),Bt=d("highlightGvGPlayersNearMyLvl"),Vt(),d("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],s=l({id:"profile-bio",innerHTML:t.innerHTML})
f("",t),u(t,s),z()}()}function Ut(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function Ot(t){"smallLink"===t.target.className&&tt(t.target.previousElementSibling.text)}function zt(){const t=b(`#pCC a[href^="${g}"]`)
Y([5,3,t,0,Ut]),j(n,Ot)}function Jt(t){return N({cmd:"guild",subcmd:"conflicts",page:t})}function Qt(t,e){f(e,t.insertCell(-1))}function Wt(t,e,n){const s=t.insertRow(t.rows.length-2)
Qt(s,e),Qt(s,n)}function Zt(t,e){Wt(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function qt(t,e,n){1===e&&function(t){Wt(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),et(t.rows,7,0).forEach(C(Zt,n))}function Kt(t,e){const n=S(e),s=i('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=i("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&qt(s,e,n)}(n,a,t.node),o>a&&function(t,e,n){Jt(t+1).then(C(e,n))}(a,Kt,t)}function Yt(t){const e=t.rows[6].cells[0].children[0]
e&&Jt(1).then(C(Kt,{node:e}))}function te(t){t.target.id===v&&$(v,!d(v))}let ee,ne,se,ae,oe,ie,ce,re,le,fe,ue,de,me
function pe(t,e){return`${t}<option value="${e}">${e}</option>`}function he(t){return M(t)?"#DEF":t.toLocaleString()}function be(t,e,n){return`${e}<tr><td>${ft(new Date(1e3*n[ut]))}</td><td>${t}</td><td class="fshRight">${he(n[dt])}</td><td class="fshRight">${he(n[mt])}</td><td class="fshRight">${he(n[pt])}</td><td class="fshRight">${he(n[ht])}</td><td class="fshRight">${Math.floor(n[pt]/n[ht]*100)}</td><td class="fshRight">${n[bt]}</td><td class="fshRight">${he(n[gt])}</td></tr>`}function ge(t,e){return function(t){return ne&&"- All -"!==ne&&ne!==t}(e)?t:t+oe[e].reduce(C(be,e),"")}function je(){oe&&f(w(oe).reduce(ge,""),ee),se.classList.remove("fshSpinner")}function Ne(){se.classList.add("fshSpinner"),x(3,je)}function Ce(t){ne=t.target.value,Ne()}function Se(t){t&&(oe=t,f(`<select name="member"><option value="- All -" selected>- All -</option>${w(t).sort(T).reduce(pe,"")}</select>`,ae),Ne())}function Le(){const t=k("th",{textContent:"Member"})
return ae=l(),u(t,ae),t}function ve(){const t=lt({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
c(e,"<th>Date</th>")
const n=Le()
u(e,n),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){ee=rt(),u(t,ee)}(t),y(t,"change",Ce),se=l({className:"tgCont fshSpinner64"}),u(se,t),se}function ye(t){ie.value=t,le.classList.remove("fshSpinner")}function $e(){ie.value='{"lastUpdate": 0, "members": {}}'}function ke(t){Lt("Update successful"),Se(t.members)}function we(){const t=H(ie.value)
at("fsh_guildActivity",t).then(C(ke,t)).catch(Lt)}function Te(t,e){const n=Ct({className:"custombutton",textContent:t})
return j(n,e),n}function xe(){return le=l({id:"io",className:"fshSpinner64"}),ie=St(),ie.setAttribute("autocapitalize","off"),ie.setAttribute("autocomplete","off"),ie.setAttribute("autocorrect","off"),ie.setAttribute("spellcheck","false"),ce=Te("Save",we),re=Te("Reset",$e),u(le,ie),u(le,jt()),u(le,ce),u(le,re),le}function Me(){return!ue.checked}function He(t){ue.checked&&"Escape"===t.code&&(ue.checked=!1)}function Ae(t){Me()&&(t.style.transform=null)}function Be(){B("guildTracker","updateRawData"),fe&&function(t){t&&(le.classList.add("fshSpinner"),x(4,ye,[t]))}(fe)}function Ee(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return me=nt({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),A(me,"change",Be),u(t,me),t}(),e=st({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return u(t,e),R(e,t),t}function Re(){const t=Ee(),e=function(){const t=l({className:"fsh-dialog-content"})
return u(t,ve()),u(t,xe()),t}()
u(t,e),y(ue,"change",C(Ae,t)),u(de,t)}function De(t){t&&(fe=JSON.stringify(t),Se(t.members))}function Ie(){B("guildTracker","openDialog"),ot("fsh_guildActivity").then(De),E.dialogIsClosed=Me,c(de,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Re()}function Ge(){!function(){const t=i("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=l({className:"fsh-tracker"}),s=l({innerHTML:`${ct(v)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(s,"change",te),u(n,t),u(n,s),it(e,n)}(),ue=nt({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),A(ue,"change",Ie),de=l({className:"fsh-dialog"}),u(de,ue),y(document.body,"keydown",He),u(document.body,de)}let Pe,_e
function Fe(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ve(){_e?_e.disabled=!Pe:function(){const t=h(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=p(D,e).map(Fe).join("\n")
_e=u(document.body,J(s)).sheet}()}function Xe(){Pe=!Pe,$("enableStamBars",Pe),Ve(),B("guildManage","StamBars")}function Ue(){!function(){const t=i("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=u(e,l({className:"fshCenter",innerHTML:ct("enableStamBars")}))
y(n,"change",Xe)}(),Pe=d("enableStamBars"),Pe&&Ve()}function Oe(t,e,n){const s=function(t){return yt({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(n)
u(t,function(t){const e=yt({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return u(e,t),c(e,"&nbsp;]"),e}(s)),e.id=n,d(n)&&$t(e),j(s,Nt)}function ze(t){Oe(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Je(t){const e=t.rows[4].cells[1].children[0]
f(e.innerHTML.trim(),e),Oe(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Qe(t){Oe(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function We(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
f(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,a)}function Ze(t){const e=h("li",t)
if(!e||!e.length)return
const n=e[e.length-1].parentNode
c(n,`<li><a href="${G}${vt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function qe(t,e){x(3,e,[t])}function Ke(){if(!n)return
const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[ze,Je,Qe,We,Ze].forEach(C(qe,t))}(t),x(3,zt),function(t){I()||(d("detailedConflictInfo")&&x(3,Yt,[t]),x(4,Ge))}(t),Ue()}function Ye(){const t=i('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function tn(){x(3,_),x(3,Ye),x(3,Ht),x(3,wt),"manage"===E.subcmd&&Ke(),"view"===E.subcmd&&Xt()}export default tn
//# sourceMappingURL=guild-f0b3eb50.js.map
