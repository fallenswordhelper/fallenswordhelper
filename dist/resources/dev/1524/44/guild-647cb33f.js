import{a as t}from"./addCommas-aab57e5e.js"
import{g as e,p as n,aG as s,bB as a,H as o,D as i,i as c,d as r,m as l,B as f,h as u,I as d,S as m,E as p,b as h,ac as b,a4 as g,o as j,u as N,t as C,v as L,s as S,bD as v,f as y,_ as $,n as k,a$ as w,a as T,aT as x,bf as M,P as A,T as H,c as B,bE as E,F as R,y as D,bF as I}from"./calfSystem-f7cf24f6.js"
import{g as G,c as P}from"./colouredDots-35e61ff1.js"
import{l as _}from"./onlineDot-0a71eb09.js"
import{s as F}from"./setTipped-92acd4eb.js"
import{c as V}from"./closestTr-6cca472b.js"
import{i as X}from"./intValue-66f66ba9.js"
import{s as U}from"./sum-17ba0b43.js"
import O from"./compressBio-d91e7011.js"
import{c as z}from"./createStyle-8458ea8e.js"
import{c as J}from"./currentGuildId-d5258e6c.js"
import{a as Q,g as W,c as Z,b as q}from"./levelHighlight-a0715d99.js"
import{b as K}from"./batch-a8223d61.js"
import{o as Y}from"./openQuickBuffByName-85f930d9.js"
import{d as tt}from"./dataRows-17c980fd.js"
import{c as et}from"./createInput-8f2d1a63.js"
import{c as nt}from"./createUl-4041441e.js"
import{s as st,g as at}from"./idb-62b65e66.js"
import{i as ot}from"./insertElementAfterBegin-b6d22612.js"
import{b as it}from"./simpleCheckbox-92565e2b.js"
import{a as ct}from"./alpha-7ee6a1b8.js"
import{c as rt}from"./createTBody-0d88485f.js"
import{c as lt}from"./createTable-fea82781.js"
import{f as ft}from"./formatLocalDateTime-c295cb3e.js"
import{u as ut,l as dt,v as mt,c as pt,m as ht,a as bt,g as gt}from"./indexConstants-101e0ad8.js"
import{c as jt,t as Nt}from"./toggleVisibilty-368e3910.js"
import{c as Ct}from"./createButton-8f3d8326.js"
import{c as Lt}from"./createTextArea-5b275d40.js"
import{d as St}from"./dialogMsg-227939ed.js"
import{p as vt}from"./playerName-c3c6c732.js"
import{c as yt}from"./createSpan-0636b0fd.js"
import{h as $t}from"./hideElement-3be61495.js"
import"./closest-7cf61e52.js"
import"./createLabel-bff122d0.js"
import"./insertElementBefore-7c440c87.js"
import"./asInt-1c5cca46.js"
import"./valueText-ea28f9e0.js"
import"./fshOpen-d480412d.js"
import"./isChecked-5630e19a.js"
import"./toLowerCase-c964d32b.js"
import"./isDate-00b71016.js"
import"./numberIsNaN-11f99b26.js"
import"./padZ-634214b3.js"
function kt(t,e){const n=a.exec(e.dataset.tipped)
return _({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function wt(){const a=e("b",n).find(s("Members"))
if(a){const e=G(),n=function(t){return t.reduce(kt,[0,0])}(e)
a.classList.add("tip-static"),F(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,a)}}const Tt=t=>X(o(V(t).cells[4]))
function xt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function Mt(e){const n=e.dataset.tipped,s=xt(n,/XP Lock: <b>(\d*)/),a=xt(n,/XP: <b>(\d*)/)
c(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`),console.log(t(G().map(Tt).reduce(U,0)))}function At(){const t=i('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&Mt(t)}let Ht,Bt
function Et(t){return Ht&&t>=Q()&&t<=W()}function Rt(t){return Bt&&t>=Z()&&t<=q()}const Dt=t=>[t,a.exec(t.dataset.tipped)[1]],It=([,t])=>t<7,Gt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Pt=([t,e])=>[t.parentNode.parentNode.rowIndex,Et(e),Rt(e)]
const _t=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Ft(){const t=p('#pCC a[data-tipped*="<td>VL:</td>"]').map(Dt).filter(It).map(Gt).map(Pt),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${_t(t)} {background-color: #4671C8;}`
u(document.body,z(e))}}(e),function(t){if(t.length){const e=`${_t(t)} {background-color: #FF9900;}`
u(document.body,z(e))}}(s),function(t,e){if(t.length+e.length){const t=h(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function Vt(){Number(m("guild_id"))!==J()&&(Ht||Bt)&&Ft()}function Xt(){Ht=d("highlightPlayersNearMyLvl"),Bt=d("highlightGvGPlayersNearMyLvl"),Vt(),d("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],s=l({id:"profile-bio",innerHTML:t.innerHTML})
f("",t),u(t,s),O()}()}function Ut(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function Ot(t){"smallLink"===t.target.className&&Y(t.target.previousElementSibling.text)}function zt(){const t=b(`#pCC a[href^="${g}"]`)
K([5,3,t,0,Ut]),j(n,Ot)}function Jt(t){return N({cmd:"guild",subcmd:"conflicts",page:t})}function Qt(t,e){f(e,t.insertCell(-1))}function Wt(t,e,n){const s=t.insertRow(t.rows.length-2)
Qt(s,e),Qt(s,n)}function Zt(t,e){Wt(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function qt(t,e,n){1===e&&function(t){Wt(t,`<a href="${S}conflicts">Active Conflicts</a>`,"Score")}(n),tt(t.rows,7,0).forEach(C(Zt,n))}function Kt(t,e){const n=L(e),s=i('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=i("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&qt(s,e,n)}(n,a,t.node),o>a&&function(t,e,n){Jt(t+1).then(C(e,n))}(a,Kt,t)}function Yt(t){const e=t.rows[6].cells[0].children[0]
e&&Jt(1).then(C(Kt,{node:e}))}function te(t){t.target.id===v&&$(v,!d(v))}let ee,ne,se,ae,oe,ie,ce,re,le,fe,ue,de,me
function pe(t,e){return`${t}<option value="${e}">${e}</option>`}function he(t){return x(t)?"#DEF":t.toLocaleString()}function be(t,e,n){return`${e}<tr><td>${ft(new Date(1e3*n[ut]))}</td><td>${t}</td><td class="fshRight">${he(n[dt])}</td><td class="fshRight">${he(n[mt])}</td><td class="fshRight">${he(n[pt])}</td><td class="fshRight">${he(n[ht])}</td><td class="fshRight">${Math.floor(n[pt]/n[ht]*100)}</td><td class="fshRight">${n[bt]}</td><td class="fshRight">${he(n[gt])}</td></tr>`}function ge(t,e){return function(t){return ne&&"- All -"!==ne&&ne!==t}(e)?t:t+oe[e].reduce(C(be,e),"")}function je(){oe&&f(w(oe).reduce(ge,""),ee),se.classList.remove("fshSpinner")}function Ne(){se.classList.add("fshSpinner"),T(3,je)}function Ce(t){ne=t.target.value,Ne()}function Le(t){t&&(oe=t,f(`<select name="member"><option value="- All -" selected>- All -</option>${w(t).sort(ct).reduce(pe,"")}</select>`,ae),Ne())}function Se(){const t=k("th",{textContent:"Member"})
return ae=l(),u(t,ae),t}function ve(){const t=lt({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
c(e,"<th>Date</th>")
const n=Se()
u(e,n),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){ee=rt(),u(t,ee)}(t),y(t,"change",Ce),se=l({className:"tgCont fshSpinner64"}),u(se,t),se}function ye(t){ie.value=t,le.classList.remove("fshSpinner")}function $e(){ie.value='{"lastUpdate": 0, "members": {}}'}function ke(t){St("Update successful"),Le(t.members)}function we(){const t=M(ie.value)
st("fsh_guildActivity",t).then(C(ke,t)).catch(St)}function Te(t,e){const n=Ct({className:"custombutton",textContent:t})
return j(n,e),n}function xe(){return le=l({id:"io",className:"fshSpinner64"}),ie=Lt(),ie.setAttribute("autocapitalize","off"),ie.setAttribute("autocomplete","off"),ie.setAttribute("autocorrect","off"),ie.setAttribute("spellcheck","false"),ce=Te("Save",we),re=Te("Reset",$e),u(le,ie),u(le,jt()),u(le,ce),u(le,re),le}function Me(){return!ue.checked}function Ae(t){ue.checked&&"Escape"===t.code&&(ue.checked=!1)}function He(t){Me()&&(t.style.transform=null)}function Be(){H("guildTracker","updateRawData"),fe&&function(t){t&&(le.classList.add("fshSpinner"),T(4,ye,[t]))}(fe)}function Ee(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return me=et({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),A(me,"change",Be),u(t,me),t}(),e=nt({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return u(t,e),E(e,t),t}function Re(){const t=Ee(),e=function(){const t=l({className:"fsh-dialog-content"})
return u(t,ve()),u(t,xe()),t}()
u(t,e),y(ue,"change",C(He,t)),u(de,t)}function De(t){t&&(fe=JSON.stringify(t),Le(t.members))}function Ie(){H("guildTracker","openDialog"),at("fsh_guildActivity").then(De),B.dialogIsClosed=Me,c(de,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Re()}function Ge(){!function(){const t=i("#pCC img.guild_openGuildStore"),e=t.parentNode,n=l({className:"fsh-tracker"}),s=l({innerHTML:`${it(v)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(s,"change",te),u(n,t),u(n,s),ot(e,n)}(),ue=et({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),A(ue,"change",Ie),de=l({className:"fsh-dialog"}),u(de,ue),y(document.body,"keydown",Ae),u(document.body,de)}let Pe,_e
function Fe(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ve(){_e?_e.disabled=!Pe:function(){const t=h(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=p(R,e).map(Fe).join("\n")
_e=u(document.body,z(s)).sheet}()}function Xe(){Pe=!Pe,$("enableStamBars",Pe),Ve(),H("guildManage","StamBars")}function Ue(){!function(){const t=i("#pCC img.guild_openGuildStore").parentNode,e=u(t,l({className:"fshCenter",innerHTML:it("enableStamBars")}))
y(e,"change",Xe)}(),Pe=d("enableStamBars"),Pe&&Ve()}function Oe(t,e,n){const s=function(t){return yt({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(n)
u(t,function(t){const e=yt({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return u(e,t),c(e,"&nbsp;]"),e}(s)),e.id=n,d(n)&&$t(e),j(s,Nt)}function ze(t){Oe(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Je(t){const e=t.rows[4].cells[1].children[0]
f(e.innerHTML.trim(),e),Oe(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Qe(t){Oe(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function We(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
f(`[ <a href="${S}reliclist">Control</a> ]&nbsp;`,a)}function Ze(t){const e=h("li",t),n=e[e.length-1].parentNode
c(n,`<li><a href="${I}${vt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function qe(t,e){T(3,e,[t])}function Ke(){if(!n)return
const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[ze,Je,Qe,We,Ze].forEach(C(qe,t))}(t),T(3,zt),function(t){D()||(d("detailedConflictInfo")&&T(3,Yt,[t]),T(4,Ge))}(t),Ue()}function Ye(){const t=i('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function tn(){T(3,P),T(3,Ye),T(3,At),T(3,wt),"manage"===B.subcmd&&Ke(),"view"===B.subcmd&&Xt()}export default tn
//# sourceMappingURL=guild-647cb33f.js.map
