import{o as t,bQ as n,b as e,p as o,t as a,c1 as r,B as i,an as s,X as c,bx as p,ay as u,m as l,aS as f,Q as d,h as m,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a6 as x,ad as C,C as $,c as v,a5 as I,T as N,E as T,av as H,aD as R,y as S}from"./calfSystem-eeb1d862.js"
import{e as k}from"./useItem-1692c1c2.js"
import{a as E}from"./queue-e6c6df06.js"
import{g as w}from"./getMembrList-8d90010d.js"
import{b as A}from"./batch-7ea0272b.js"
import{e as B}from"./eventHandler5-2b58fcfe.js"
import{i as D}from"./isChecked-d75e63a5.js"
import{s as G}from"./selfIdIs-12760c69.js"
import{a as F}from"./alpha-a79afe3b.js"
import{t as W}from"./testRange-7cadf27e.js"
import{c as P}from"./createInput-c963dc21.js"
import{c as _}from"./createSelect-8010a0a9.js"
import{c as Q}from"./createTable-6575caa9.js"
import{c as q}from"./createTr-7e2ba72e.js"
import{g as J,s as U}from"./idb-874d144e.js"
import{o as X}from"./onlineDot-b33fd599.js"
import"./dialog-92c3ed6b.js"
import"./dialogMsg-716cf657.js"
import"./indexAjaxJson-2deb257d.js"
import"./daUseItem-44d35487.js"
import"./errorDialog-db13a69a.js"
import"./htmlResult-541e86c4.js"
import"./takeItem-a62140ee.js"
import"./guild-9a62ed17.js"
import"./currentGuildId-5370ff7a.js"
import"./cmdExport-7e823e95.js"
import"./toLowerCase-fa335220.js"
import"./numberIsNaN-891c59d9.js"
function Y(t){return t.match(/&id=(\d+)/)[1]}const z=`<span class="guildReportSpinner" style="background-image: url('${s}ui/misc/spinner.gif');"></span>`
function K(t){i('<span class="fastWorn">Worn</span>',t)}function O(t){return t.match(p)[1]}function V(t,n,e){1!==e.r&&("recall"===t?function(t){i('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):K(n))}function Z(t,n,e,o){E(Y(n),O(n),e,o).then(a(V,o,t))}function tt(t,n,e){Z(t,n,e,"recall")}const nt=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),tt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),tt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(O(n))===u()?k(Y(n)).then(a(K,t)):Z(t,n,0,"wear")}]]
const et=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(nt.find(a(r,t))[1](n,e),i(z,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const ot='<span class="sendLink fast-bp">Fast BP</span> | ',at='<span class="sendLink fast-gs">Fast GS</span>',rt=' | <span class="sendLink fast-wear">Fast Wear</span>'
let it,st,ct,pt,ut
const lt=[[!0,!0,function(){return pt||(pt=l({innerHTML:ot+at+rt})),pt.cloneNode(!0)}],[!0,!1,function(){return ut||(ut=l({innerHTML:at+rt})),ut.cloneNode(!0)}],[!1,!0,function(){return ct||(ct=l({innerHTML:ot+at})),ct.cloneNode(!0)}],[!1,!1,function(){return st||(st=l({innerHTML:at})),st.cloneNode(!0)}]]
function ft(t,n,e){return e[0]===t&&e[1]===n}function dt(t){const n=!(it||(it=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),it).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return lt.find(a(ft,n,e))[2]()}function mt(t,n,e){return n[e]=t[e],n}function bt(t){return f(t).sort(F).reduce(a(mt,t),{})}let gt,ht,yt
function Mt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function jt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function Lt(t,n){c("potReport","drawInventory")
const e=bt(f(n).reduce(a(Mt,t,n),{}))
i(`<table><tbody>${f(e).reduce(a(jt,t,e),"")}</tbody></table>`,gt)}function xt(){const t=q()
return t.insertCell(-1),t.insertCell(-1),t}function Ct(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function $t(t,n){m(t,Ct(n[0]))}function vt(){if(!yt){yt=xt()
const t=_({className:"tip-static",dataset:{tipped:'Set to "Ignore" to exclude from report'},style:{width:"130px"}})
m(yt.cells[1],t)}return yt.cloneNode(!0)}function It(t,n){const e=vt()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
m(o,Ct(n[1])),[o.name,o.value]=n,m(t.tBodies[0],e)}function Nt(t,n,e){const o=P({id:n,type:"button",value:e})
m(t.cells[1],o)}function Tt(t){const n=xt()
Nt(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),Nt(n,"fshReset","Reset"),m(t.tBodies[0],n)}function Ht(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
i("",e),m(e,Ct("Ignore")),y(t).forEach(a($t,e)),e.value=o}}function Rt(t){c("potReport","drawMapping")
const n=Q({innerHTML:"<tbody></tbody>"})
ht.replaceChild(n,ht.children[0]),g(ht,"mousedown",a(Ht,t.myMap)),h(3,A,[[5,3,y(t.myMap),0,a(It,n),a(Tt,n)]])}const St="fsh_potMap",kt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function Et(t,n){t.myMap[n]||(t.myMap[n]=n)}function wt(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,U(St,t),Lt(t,n))}function At(t,n,e){return n[e]=t?"Ignore":e,n}function Bt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(At,e),{})}(t,n,e),U(St,t),Rt(t),Lt(t,n)}function Dt(t){return/^pottab\d$/.test(t.id)}function Gt(t,n){t[n.id]=n.checked,U(St,t)}function Ft(t,n,e){const o=e.target.id,a=W(e.target.value,0,999)
a&&(t[o]=a,U(St,t),Lt(t,n))}function Wt(n,e,o){g(o,"change",a(wt,n,e)),t(o,B(function(t,n){return[[G("fshIgnoreAll"),a(Bt,t,n,!0)],[G("fshReset"),a(Bt,t,n,null)],[Dt,a(Gt,t)]]}(n,e))),g(o,"input",a(Ft,n,e))}function Pt(t,n){const e=function(t){return l({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${D(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${D(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${D(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=l({id:"panels"})
m(e,r),function(t,n,e){gt=l({id:"inventory"}),t.pottab1?Lt(t,n):d(e.parentNode.children[0],"change",a(Lt,t,n)),m(e,gt)}(t,n,r),function(t,n){ht=l({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?Rt(t):d(n.parentNode.children[2],"change",a(Rt,t)),m(n,ht)}(t,r),function(t,n){const e=l({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
m(n,e)}(t,r),m(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Wt(t,n,e),e}(t,n),e)}function _t(t,n){const e=L({},kt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(Et,t)),bt(t.myMap)}(e,t),U(St,e),Pt(e,t)}function Qt(t){J(St).then(a(_t,t))}let qt,Jt,Ut,Xt,Yt
function zt(t,n){const e=Jt[n]
m(e,t)}function Kt(t){qt.push(dt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Ut[n]=(Ut[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Ot(){A([5,3,qt,0,zt,a(Qt,Ut)])}function Vt(){Jt=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Ut={},qt=[],A([5,3,Jt,0,Kt,Ot])}function Zt(t){const n=$(t)
v.membrList[n]&&i(function(t){return`${X({last_login:v.membrList[t].last_login})}<a href="${I}${v.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function tn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
A([5,3,t,0,Zt])}function nn(t){t.children[0].hasAttribute("bgcolor")&&(Yt=R(Xt,t.children[0].children[0])),Yt||(t.className="fshHide")}function en(){if(Xt=N("user"),!Xt)return
if(!T('#pCC table table td[bgcolor="#DAA534"] b').some(H(Xt)))return
const t=C("#pCC table table tr")
A([5,2,t,0,nn])}function on(){h(3,tn)}function an(){S()||(w(!1).then(on),h(2,en),h(3,Vt),t(e("table",o)[1],n(et)))}export default an
//# sourceMappingURL=guildReport-3bc08e16.js.map
