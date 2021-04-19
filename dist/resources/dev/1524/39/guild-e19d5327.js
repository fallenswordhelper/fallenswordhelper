import{a as t}from"./addCommas-37fb94e0.js"
import{g as e,p as n,aD as s,by as a,H as o,D as c,i,d as r,m as l,B as f,h as d,I as u,T as m,E as p,b as h,ad as b,a5 as g,o as j,u as C,t as N,v as L,s as S,bB as y,f as v,a0 as $,n as k,aY as w,a as T,aQ as x,bc as M,Q as A,X as H,c as B,bC as E,F as R,y as D,bD as I}from"./calfSystem-b31aba65.js"
import{g as G,c as P}from"./colouredDots-a508d2d8.js"
import{l as X}from"./onlineDot-fc24824d.js"
import{s as V}from"./setTipped-70cff648.js"
import{c as _}from"./closestTr-51be90ef.js"
import{i as F}from"./intValue-f6303c59.js"
import{s as Q}from"./sum-48ca1ce6.js"
import U from"./compressBio-9c8667a3.js"
import{c as O}from"./createStyle-e43c0e19.js"
import{c as z}from"./currentGuildId-c379e204.js"
import{a as J,g as Y,c as Z,b as q}from"./levelHighlight-71ef41d8.js"
import{b as K}from"./batch-4b6ac500.js"
import{o as W}from"./openQuickBuffByName-0d9ce298.js"
import{d as tt}from"./dataRows-06ae4778.js"
import{c as et}from"./createInput-d7f942e4.js"
import{c as nt}from"./createUl-e0e9c30c.js"
import{s as st,g as at}from"./idb-71729176.js"
import{i as ot}from"./insertElementAfterBegin-1439c9a9.js"
import{b as ct}from"./simpleCheckbox-d91d951a.js"
import{a as it}from"./alpha-9f4f77c3.js"
import{c as rt}from"./createTBody-b267490f.js"
import{c as lt}from"./createTable-9dc26997.js"
import{f as ft}from"./formatLocalDateTime-2385e9c5.js"
import{u as dt,l as ut,v as mt,c as pt,m as ht,a as bt,g as gt}from"./indexConstants-91c1487d.js"
import{c as jt,t as Ct}from"./toggleVisibilty-9dcd7a7b.js"
import{c as Nt}from"./createButton-c21ee6ca.js"
import{c as Lt}from"./createTextArea-c38dd5ec.js"
import{d as St}from"./dialogMsg-a960ad1e.js"
import{p as yt}from"./playerName-68c14b2a.js"
import{c as vt}from"./createSpan-1160b622.js"
import{h as $t}from"./hideElement-d197c06b.js"
import"./closest-97a04dcf.js"
import"./createLabel-0603163a.js"
import"./insertElementBefore-68b894c4.js"
import"./valueText-bc9c083f.js"
import"./fshOpen-bc09bf81.js"
import"./isChecked-6d3ab351.js"
import"./toLowerCase-179aa35f.js"
import"./isDate-cef09439.js"
import"./numberIsNaN-d0e4b349.js"
import"./padZ-5c8671fc.js"
function kt(t,e){const n=a.exec(e.dataset.tipped)
return X({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function wt(){const a=e("b",n).find(s("Members"))
if(a){const e=G(),n=function(t){return t.reduce(kt,[0,0])}(e)
a.classList.add("tip-static"),V(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,a)}}const Tt=t=>F(o(_(t).cells[4]))
function xt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function Mt(e){const n=e.dataset.tipped,s=xt(n,/XP Lock: <b>(\d*)/),a=xt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`),console.log(t(G().map(Tt).reduce(Q,0)))}function At(){const t=c('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&Mt(t)}let Ht,Bt
function Et(t){return Ht&&t>=J()&&t<=Y()}function Rt(t){return Bt&&t>=Z()&&t<=q()}const Dt=t=>[t,a.exec(t.dataset.tipped)[1]],It=([,t])=>t<7,Gt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Pt=([t,e])=>[t.parentNode.parentNode.rowIndex,Et(e),Rt(e)]
const Xt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Vt(){const t=p('#pCC a[data-tipped*="<td>VL:</td>"]').map(Dt).filter(It).map(Gt).map(Pt),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Xt(t)} {background-color: #4671C8;}`
d(document.body,O(e))}}(e),function(t){if(t.length){const e=`${Xt(t)} {background-color: #FF9900;}`
d(document.body,O(e))}}(s),function(t,e){if(t.length+e.length){const t=h(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function _t(){Number(m("guild_id"))!==z()&&(Ht||Bt)&&Vt()}function Ft(){Ht=u("highlightPlayersNearMyLvl"),Bt=u("highlightGvGPlayersNearMyLvl"),_t(),u("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],s=l({id:"profile-bio",innerHTML:t.innerHTML})
f("",t),d(t,s),U()}()}function Qt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function Ut(t){"smallLink"===t.target.className&&W(t.target.previousElementSibling.text)}function Ot(){const t=b(`#pCC a[href^="${g}"]`)
K([5,3,t,0,Qt]),j(n,Ut)}function zt(t){return C({cmd:"guild",subcmd:"conflicts",page:t})}function Jt(t,e){f(e,t.insertCell(-1))}function Yt(t,e,n){const s=t.insertRow(t.rows.length-2)
Jt(s,e),Jt(s,n)}function Zt(t,e){Yt(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function qt(t,e,n){1===e&&function(t){Yt(t,`<a href="${S}conflicts">Active Conflicts</a>`,"Score")}(n),tt(t.rows,7,0).forEach(N(Zt,n))}function Kt(t,e){const n=L(e),s=c('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=c("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&qt(s,e,n)}(n,a,t.node),o>a&&function(t,e,n){zt(t+1).then(N(e,n))}(a,Kt,t)}function Wt(t){const e=t.rows[6].cells[0].children[0]
e&&zt(1).then(N(Kt,{node:e}))}function te(t){t.target.id===y&&$(y,!u(y))}let ee,ne,se,ae,oe,ce,ie,re,le,fe,de,ue,me
function pe(t,e){return`${t}<option value="${e}">${e}</option>`}function he(t){return x(t)?"#DEF":t.toLocaleString()}function be(t,e,n){return`${e}<tr><td>${ft(new Date(1e3*n[dt]))}</td><td>${t}</td><td class="fshRight">${he(n[ut])}</td><td class="fshRight">${he(n[mt])}</td><td class="fshRight">${he(n[pt])}</td><td class="fshRight">${he(n[ht])}</td><td class="fshRight">${Math.floor(n[pt]/n[ht]*100)}</td><td class="fshRight">${n[bt]}</td><td class="fshRight">${he(n[gt])}</td></tr>`}function ge(t,e){return function(t){return ne&&"- All -"!==ne&&ne!==t}(e)?t:t+oe[e].reduce(N(be,e),"")}function je(){oe&&f(w(oe).reduce(ge,""),ee),se.classList.remove("fshSpinner")}function Ce(){se.classList.add("fshSpinner"),T(3,je)}function Ne(t){ne=t.target.value,Ce()}function Le(t){t&&(oe=t,f(`<select name="member"><option value="- All -" selected>- All -</option>${w(t).sort(it).reduce(pe,"")}</select>`,ae),Ce())}function Se(){const t=k("th",{textContent:"Member"})
return ae=l(),d(t,ae),t}function ye(){const t=lt({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=Se()
d(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){ee=rt(),d(t,ee)}(t),v(t,"change",Ne),se=l({className:"tgCont fshSpinner64"}),d(se,t),se}function ve(t){ce.value=t,le.classList.remove("fshSpinner")}function $e(){ce.value='{"lastUpdate": 0, "members": {}}'}function ke(t){St("Update successful"),Le(t.members)}function we(){const t=M(ce.value)
st("fsh_guildActivity",t).then(N(ke,t)).catch(St)}function Te(t,e){const n=Nt({className:"custombutton",textContent:t})
return j(n,e),n}function xe(){return le=l({id:"io",className:"fshSpinner64"}),ce=Lt(),ce.setAttribute("autocapitalize","off"),ce.setAttribute("autocomplete","off"),ce.setAttribute("autocorrect","off"),ce.setAttribute("spellcheck","false"),ie=Te("Save",we),re=Te("Reset",$e),d(le,ce),d(le,jt()),d(le,ie),d(le,re),le}function Me(){return!de.checked}function Ae(t){de.checked&&"Escape"===t.code&&(de.checked=!1)}function He(t){Me()&&(t.style.transform=null)}function Be(){H("guildTracker","updateRawData"),fe&&function(t){t&&(le.classList.add("fshSpinner"),T(4,ve,[t]))}(fe)}function Ee(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return me=et({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),A(me,"change",Be),d(t,me),t}(),e=nt({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return d(t,e),E(e,t),t}function Re(){const t=Ee(),e=function(){const t=l({className:"fsh-dialog-content"})
return d(t,ye()),d(t,xe()),t}()
d(t,e),v(de,"change",N(He,t)),d(ue,t)}function De(t){t&&(fe=JSON.stringify(t),Le(t.members))}function Ie(){H("guildTracker","openDialog"),at("fsh_guildActivity").then(De),B.dialogIsClosed=Me,i(ue,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Re()}function Ge(){!function(){const t=c("#pCC img.guild_openGuildStore"),e=t.parentNode,n=l({className:"fsh-tracker"}),s=l({innerHTML:`${ct(y)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(s,"change",te),d(n,t),d(n,s),ot(e,n)}(),de=et({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),A(de,"change",Ie),ue=l({className:"fsh-dialog"}),d(ue,de),v(document.body,"keydown",Ae),d(document.body,ue)}let Pe,Xe
function Ve(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function _e(){Xe?Xe.disabled=!Pe:function(){const t=h(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=p(R,e).map(Ve).join("\n")
Xe=d(document.body,O(s)).sheet}()}function Fe(){Pe=!Pe,$("enableStamBars",Pe),_e(),H("guildManage","StamBars")}function Qe(){!function(){const t=c("#pCC img.guild_openGuildStore").parentNode,e=d(t,l({className:"fshCenter",innerHTML:ct("enableStamBars")}))
v(e,"change",Fe)}(),Pe=u("enableStamBars"),Pe&&_e()}function Ue(t,e,n){const s=function(t){return vt({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
d(t,function(t){const e=vt({innerHTML:"[&nbsp;"})
return d(e,t),i(e,"&nbsp;]"),e}(s)),e.id=n,u(n)&&$t(e),j(s,Ct)}function Oe(t){Ue(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function ze(t){const e=t.rows[4].cells[1].children[0]
f(e.innerHTML.trim(),e),Ue(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Je(t){Ue(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ye(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
f(`[ <a href="${S}reliclist">Control</a> ]&nbsp;`,a)}function Ze(t){const e=h("li",t),n=e[e.length-1].parentNode
i(n,`<li><a href="${I}${yt()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function qe(t,e){T(3,e,[t])}function Ke(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Oe,ze,Je,Ye,Ze].forEach(N(qe,t))}(t),T(3,Ot),function(t){D()||(u("detailedConflictInfo")&&T(3,Wt,[t]),T(4,Ge))}(t),Qe()}function We(){const t=c('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function tn(){T(3,P),T(3,We),T(3,At),T(3,wt),"manage"===B.subcmd&&Ke(),"view"===B.subcmd&&Ft()}export default tn
//# sourceMappingURL=guild-e19d5327.js.map
