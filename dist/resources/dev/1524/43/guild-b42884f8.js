import{a as t}from"./addCommas-5b74e836.js"
import{g as e,p as n,aE as s,bz as a,H as o,D as i,i as c,d as r,m as l,B as f,h as d,I as u,T as m,E as p,b as h,ad as b,a5 as g,o as j,u as N,t as C,v as L,s as S,bB as v,f as y,a0 as $,n as k,aZ as w,a as T,aR as x,bd as M,Q as A,U as H,c as B,bC as E,F as R,y as D,bD as I}from"./calfSystem-3cb2f93e.js"
import{g as G,c as P}from"./colouredDots-f88b6d7e.js"
import{l as V}from"./onlineDot-6491af90.js"
import{s as X}from"./setTipped-2c9c4c64.js"
import{c as _}from"./closestTr-0cdbb46f.js"
import{i as F}from"./intValue-fefb28df.js"
import{s as U}from"./sum-74db34ec.js"
import z from"./compressBio-0e33a578.js"
import{c as O}from"./createStyle-28cd040a.js"
import{c as Q}from"./currentGuildId-a71d60fb.js"
import{a as Z,g as J,c as W,b as q}from"./levelHighlight-59ab7a56.js"
import{b as K}from"./batch-60e4331a.js"
import{o as Y}from"./openQuickBuffByName-71252a1d.js"
import{d as tt}from"./dataRows-3f26b8dc.js"
import{c as et}from"./createInput-c2872ef0.js"
import{c as nt}from"./createUl-86698d23.js"
import{s as st,g as at}from"./idb-c9ce87e3.js"
import{i as ot}from"./insertElementAfterBegin-1d9bd581.js"
import{b as it}from"./simpleCheckbox-11592a14.js"
import{a as ct}from"./alpha-b51f7102.js"
import{c as rt}from"./createTBody-a08d0cf8.js"
import{c as lt}from"./createTable-4f507d36.js"
import{f as ft}from"./formatLocalDateTime-737a2c06.js"
import{u as dt,l as ut,v as mt,c as pt,m as ht,a as bt,g as gt}from"./indexConstants-772a333b.js"
import{c as jt,t as Nt}from"./toggleVisibilty-e9797157.js"
import{c as Ct}from"./createButton-6bfd938b.js"
import{c as Lt}from"./createTextArea-0c68af7a.js"
import{d as St}from"./dialogMsg-3c26aecb.js"
import{p as vt}from"./playerName-9a988c39.js"
import{c as yt}from"./createSpan-95e4d2e5.js"
import{h as $t}from"./hideElement-0d0f9065.js"
import"./closest-bc1fafe7.js"
import"./createLabel-0200ecaf.js"
import"./insertElementBefore-23d4e956.js"
import"./asInt-4d75089c.js"
import"./valueText-fbd879dc.js"
import"./fshOpen-72d27290.js"
import"./isChecked-987a8a1c.js"
import"./toLowerCase-999f3196.js"
import"./isDate-52df43b3.js"
import"./numberIsNaN-885a5556.js"
import"./padZ-7f619ae9.js"
function kt(t,e){const n=a.exec(e.dataset.tipped)
return V({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function wt(){const a=e("b",n).find(s("Members"))
if(a){const e=G(),n=function(t){return t.reduce(kt,[0,0])}(e)
a.classList.add("tip-static"),X(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,a)}}const Tt=t=>F(o(_(t).cells[4]))
function xt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function Mt(e){const n=e.dataset.tipped,s=xt(n,/XP Lock: <b>(\d*)/),a=xt(n,/XP: <b>(\d*)/)
c(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`),console.log(t(G().map(Tt).reduce(U,0)))}function At(){const t=i('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&Mt(t)}let Ht,Bt
function Et(t){return Ht&&t>=Z()&&t<=J()}function Rt(t){return Bt&&t>=W()&&t<=q()}const Dt=t=>[t,a.exec(t.dataset.tipped)[1]],It=([,t])=>t<7,Gt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Pt=([t,e])=>[t.parentNode.parentNode.rowIndex,Et(e),Rt(e)]
const Vt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Xt(){const t=p('#pCC a[data-tipped*="<td>VL:</td>"]').map(Dt).filter(It).map(Gt).map(Pt),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Vt(t)} {background-color: #4671C8;}`
d(document.body,O(e))}}(e),function(t){if(t.length){const e=`${Vt(t)} {background-color: #FF9900;}`
d(document.body,O(e))}}(s),function(t,e){if(t.length+e.length){const t=h(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function _t(){Number(m("guild_id"))!==Q()&&(Ht||Bt)&&Xt()}function Ft(){Ht=u("highlightPlayersNearMyLvl"),Bt=u("highlightGvGPlayersNearMyLvl"),_t(),u("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],s=l({id:"profile-bio",innerHTML:t.innerHTML})
f("",t),d(t,s),z()}()}function Ut(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function zt(t){"smallLink"===t.target.className&&Y(t.target.previousElementSibling.text)}function Ot(){const t=b(`#pCC a[href^="${g}"]`)
K([5,3,t,0,Ut]),j(n,zt)}function Qt(t){return N({cmd:"guild",subcmd:"conflicts",page:t})}function Zt(t,e){f(e,t.insertCell(-1))}function Jt(t,e,n){const s=t.insertRow(t.rows.length-2)
Zt(s,e),Zt(s,n)}function Wt(t,e){Jt(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function qt(t,e,n){1===e&&function(t){Jt(t,`<a href="${S}conflicts">Active Conflicts</a>`,"Score")}(n),tt(t.rows,7,0).forEach(C(Wt,n))}function Kt(t,e){const n=L(e),s=i('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=i("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&qt(s,e,n)}(n,a,t.node),o>a&&function(t,e,n){Qt(t+1).then(C(e,n))}(a,Kt,t)}function Yt(t){const e=t.rows[6].cells[0].children[0]
e&&Qt(1).then(C(Kt,{node:e}))}function te(t){t.target.id===v&&$(v,!u(v))}let ee,ne,se,ae,oe,ie,ce,re,le,fe,de,ue,me
function pe(t,e){return`${t}<option value="${e}">${e}</option>`}function he(t){return x(t)?"#DEF":t.toLocaleString()}function be(t,e,n){return`${e}<tr><td>${ft(new Date(1e3*n[dt]))}</td><td>${t}</td><td class="fshRight">${he(n[ut])}</td><td class="fshRight">${he(n[mt])}</td><td class="fshRight">${he(n[pt])}</td><td class="fshRight">${he(n[ht])}</td><td class="fshRight">${Math.floor(n[pt]/n[ht]*100)}</td><td class="fshRight">${n[bt]}</td><td class="fshRight">${he(n[gt])}</td></tr>`}function ge(t,e){return function(t){return ne&&"- All -"!==ne&&ne!==t}(e)?t:t+oe[e].reduce(C(be,e),"")}function je(){oe&&f(w(oe).reduce(ge,""),ee),se.classList.remove("fshSpinner")}function Ne(){se.classList.add("fshSpinner"),T(3,je)}function Ce(t){ne=t.target.value,Ne()}function Le(t){t&&(oe=t,f(`<select name="member"><option value="- All -" selected>- All -</option>${w(t).sort(ct).reduce(pe,"")}</select>`,ae),Ne())}function Se(){const t=k("th",{textContent:"Member"})
return ae=l(),d(t,ae),t}function ve(){const t=lt({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
c(e,"<th>Date</th>")
const n=Se()
d(e,n),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){ee=rt(),d(t,ee)}(t),y(t,"change",Ce),se=l({className:"tgCont fshSpinner64"}),d(se,t),se}function ye(t){ie.value=t,le.classList.remove("fshSpinner")}function $e(){ie.value='{"lastUpdate": 0, "members": {}}'}function ke(t){St("Update successful"),Le(t.members)}function we(){const t=M(ie.value)
st("fsh_guildActivity",t).then(C(ke,t)).catch(St)}function Te(t,e){const n=Ct({className:"custombutton",textContent:t})
return j(n,e),n}function xe(){return le=l({id:"io",className:"fshSpinner64"}),ie=Lt(),ie.setAttribute("autocapitalize","off"),ie.setAttribute("autocomplete","off"),ie.setAttribute("autocorrect","off"),ie.setAttribute("spellcheck","false"),ce=Te("Save",we),re=Te("Reset",$e),d(le,ie),d(le,jt()),d(le,ce),d(le,re),le}function Me(){return!de.checked}function Ae(t){de.checked&&"Escape"===t.code&&(de.checked=!1)}function He(t){Me()&&(t.style.transform=null)}function Be(){H("guildTracker","updateRawData"),fe&&function(t){t&&(le.classList.add("fshSpinner"),T(4,ye,[t]))}(fe)}function Ee(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return me=et({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),A(me,"change",Be),d(t,me),t}(),e=nt({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return d(t,e),E(e,t),t}function Re(){const t=Ee(),e=function(){const t=l({className:"fsh-dialog-content"})
return d(t,ve()),d(t,xe()),t}()
d(t,e),y(de,"change",C(He,t)),d(ue,t)}function De(t){t&&(fe=JSON.stringify(t),Le(t.members))}function Ie(){H("guildTracker","openDialog"),at("fsh_guildActivity").then(De),B.dialogIsClosed=Me,c(ue,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Re()}function Ge(){!function(){const t=i("#pCC img.guild_openGuildStore"),e=t.parentNode,n=l({className:"fsh-tracker"}),s=l({innerHTML:`${it(v)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(s,"change",te),d(n,t),d(n,s),ot(e,n)}(),de=et({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),A(de,"change",Ie),ue=l({className:"fsh-dialog"}),d(ue,de),y(document.body,"keydown",Ae),d(document.body,ue)}let Pe,Ve
function Xe(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function _e(){Ve?Ve.disabled=!Pe:function(){const t=h(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=p(R,e).map(Xe).join("\n")
Ve=d(document.body,O(s)).sheet}()}function Fe(){Pe=!Pe,$("enableStamBars",Pe),_e(),H("guildManage","StamBars")}function Ue(){!function(){const t=i("#pCC img.guild_openGuildStore").parentNode,e=d(t,l({className:"fshCenter",innerHTML:it("enableStamBars")}))
y(e,"change",Fe)}(),Pe=u("enableStamBars"),Pe&&_e()}function ze(t,e,n){const s=function(t){return yt({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(n)
d(t,function(t){const e=yt({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return d(e,t),c(e,"&nbsp;]"),e}(s)),e.id=n,u(n)&&$t(e),j(s,Nt)}function Oe(t){ze(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Qe(t){const e=t.rows[4].cells[1].children[0]
f(e.innerHTML.trim(),e),ze(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Ze(t){ze(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Je(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
f(`[ <a href="${S}reliclist">Control</a> ]&nbsp;`,a)}function We(t){const e=h("li",t),n=e[e.length-1].parentNode
c(n,`<li><a href="${I}${vt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function qe(t,e){T(3,e,[t])}function Ke(){if(!n)return
const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Oe,Qe,Ze,Je,We].forEach(C(qe,t))}(t),T(3,Ot),function(t){D()||(u("detailedConflictInfo")&&T(3,Yt,[t]),T(4,Ge))}(t),Ue()}function Ye(){const t=i('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function tn(){T(3,P),T(3,Ye),T(3,At),T(3,wt),"manage"===B.subcmd&&Ke(),"view"===B.subcmd&&Ft()}export default tn
//# sourceMappingURL=guild-b42884f8.js.map
