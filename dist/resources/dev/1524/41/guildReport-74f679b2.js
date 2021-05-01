import{o as t,bQ as n,b as e,p as o,t as a,c1 as r,B as i,ax as s,X as c,by as p,aG as u,m as l,aZ as f,Q as m,h as d,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a6 as x,ad as C,C as $,c as I,a5 as v,T as N,E as T,aE as E,aK as H,y as R}from"./calfSystem-817ceb25.js"
import{e as k}from"./useItem-f10f655c.js"
import{a as S}from"./queue-3e5eaf33.js"
import{g as w}from"./getMembrList-40c897e6.js"
import{b as A}from"./batch-cdbfc7ea.js"
import{e as G}from"./eventHandler5-7002c8d4.js"
import{i as B}from"./isChecked-0eb4a700.js"
import{s as D}from"./selfIdIs-8ecf14b7.js"
import{a as F}from"./alpha-32b3f9dc.js"
import{t as W}from"./testRange-62d4ec93.js"
import{c as P}from"./createInput-b20906d4.js"
import{c as _}from"./createSelect-cc3a9931.js"
import{c as Q}from"./createTable-6b1ca09a.js"
import{c as q}from"./createTr-596ae85b.js"
import{g as J,s as K}from"./idb-104727d0.js"
import{o as U}from"./onlineDot-9e87e4ee.js"
import"./dialog-1254e587.js"
import"./dialogMsg-0570b3b3.js"
import"./indexAjaxJson-50c9cfe2.js"
import"./daUseItem-09700284.js"
import"./errorDialog-864e4ba8.js"
import"./htmlResult-98602483.js"
import"./takeItem-bfa43297.js"
import"./guild-90cfec83.js"
import"./currentGuildId-0741b5a4.js"
import"./cmdExport-a8921dc9.js"
import"./toLowerCase-39a6c297.js"
import"./numberIsNaN-9d4c441b.js"
function X(t){return t.match(/&id=(\d+)/)[1]}const Y=`<span class="guildReportSpinner" style="background-image: url('${s}ui/misc/spinner.gif');"></span>`
function Z(t){i('<span class="fastWorn">Worn</span>',t)}function z(t){return t.match(p)[1]}function O(t,n,e){1!==e.r&&("recall"===t?function(t){i('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):Z(n))}function V(t,n,e,o){S(X(n),z(n),e,o).then(a(O,o,t))}function tt(t,n,e){V(t,n,e,"recall")}const nt=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),tt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),tt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(z(n))===u()?k(X(n)).then(a(Z,t)):V(t,n,0,"wear")}]]
const et=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(nt.find(a(r,t))[1](n,e),i(Y,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const ot='<span class="sendLink fast-bp">Fast BP</span> | ',at='<span class="sendLink fast-gs">Fast GS</span>',rt=' | <span class="sendLink fast-wear">Fast Wear</span>'
let it,st,ct,pt,ut
const lt=[[!0,!0,function(){return pt||(pt=l({innerHTML:ot+at+rt})),pt.cloneNode(!0)}],[!0,!1,function(){return ut||(ut=l({innerHTML:at+rt})),ut.cloneNode(!0)}],[!1,!0,function(){return ct||(ct=l({innerHTML:ot+at})),ct.cloneNode(!0)}],[!1,!1,function(){return st||(st=l({innerHTML:at})),st.cloneNode(!0)}]]
function ft(t,n,e){return e[0]===t&&e[1]===n}function mt(t){const n=!(it||(it=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),it).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return lt.find(a(ft,n,e))[2]()}function dt(t,n,e){return n[e]=t[e],n}function bt(t){return f(t).sort(F).reduce(a(dt,t),{})}let gt,ht,yt
function Mt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function jt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function Lt(t,n){c("potReport","drawInventory")
const e=bt(f(n).reduce(a(Mt,t,n),{}))
i(`<table><tbody>${f(e).reduce(a(jt,t,e),"")}</tbody></table>`,gt)}function xt(){const t=q()
return t.insertCell(-1),t.insertCell(-1),t}function Ct(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function $t(t,n){d(t,Ct(n[0]))}function It(){if(!yt){yt=xt()
const t=_({className:"tip-static",dataset:{tipped:'Set to "Ignore" to exclude from report'},style:{width:"130px"}})
d(yt.cells[1],t)}return yt.cloneNode(!0)}function vt(t,n){const e=It()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
d(o,Ct(n[1])),[o.name,o.value]=n,d(t.tBodies[0],e)}function Nt(t,n,e){const o=P({id:n,type:"button",value:e})
d(t.cells[1],o)}function Tt(t){const n=xt()
Nt(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),Nt(n,"fshReset","Reset"),d(t.tBodies[0],n)}function Et(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
i("",e),d(e,Ct("Ignore")),y(t).forEach(a($t,e)),e.value=o}}function Ht(t){c("potReport","drawMapping")
const n=Q({innerHTML:"<tbody></tbody>"})
ht.replaceChild(n,ht.children[0]),g(ht,"mousedown",a(Et,t.myMap)),h(3,A,[[5,3,y(t.myMap),0,a(vt,n),a(Tt,n)]])}const Rt="fsh_potMap",kt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function St(t,n){t.myMap[n]||(t.myMap[n]=n)}function wt(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,K(Rt,t),Lt(t,n))}function At(t,n,e){return n[e]=t?"Ignore":e,n}function Gt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(At,e),{})}(t,n,e),K(Rt,t),Ht(t),Lt(t,n)}function Bt(t){return/^pottab\d$/.test(t.id)}function Dt(t,n){t[n.id]=n.checked,K(Rt,t)}function Ft(t,n,e){const o=e.target.id,a=W(e.target.value,0,999)
a&&(t[o]=a,K(Rt,t),Lt(t,n))}function Wt(n,e,o){g(o,"change",a(wt,n,e)),t(o,G(function(t,n){return[[D("fshIgnoreAll"),a(Gt,t,n,!0)],[D("fshReset"),a(Gt,t,n,null)],[Bt,a(Dt,t)]]}(n,e))),g(o,"input",a(Ft,n,e))}function Pt(t,n){const e=function(t){return l({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${B(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${B(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${B(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=l({id:"panels"})
d(e,r),function(t,n,e){gt=l({id:"inventory"}),t.pottab1?Lt(t,n):m(e.parentNode.children[0],"change",a(Lt,t,n)),d(e,gt)}(t,n,r),function(t,n){ht=l({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?Ht(t):m(n.parentNode.children[2],"change",a(Ht,t)),d(n,ht)}(t,r),function(t,n){const e=l({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
d(n,e)}(t,r),d(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Wt(t,n,e),e}(t,n),e)}function _t(t,n){const e=L({},kt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(St,t)),bt(t.myMap)}(e,t),K(Rt,e),Pt(e,t)}function Qt(t){J(Rt).then(a(_t,t))}let qt,Jt,Kt,Ut,Xt
function Yt(t,n){const e=Jt[n]
d(e,t)}function Zt(t){qt.push(mt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Kt[n]=(Kt[n]||0)+1}}(t.previousElementSibling.innerHTML)}function zt(){A([5,3,qt,0,Yt,a(Qt,Kt)])}function Ot(){Jt=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Kt={},qt=[],A([5,3,Jt,0,Zt,zt])}function Vt(t){const n=$(t)
I.membrList[n]&&i(function(t){return`${U({last_login:I.membrList[t].last_login})}<a href="${v}${I.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function tn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
A([5,3,t,0,Vt])}function nn(t){t.children[0].hasAttribute("bgcolor")&&(Xt=H(Ut,t.children[0].children[0])),Xt||(t.className="fshHide")}function en(){if(Ut=N("user"),!Ut)return
if(!T('#pCC table table td[bgcolor="#DAA534"] b').some(E(Ut)))return
const t=C("#pCC table table tr")
A([5,2,t,0,nn])}function on(){h(3,tn)}function an(){R()||(w(!1).then(on),h(2,en),h(3,Ot),t(e("table",o)[1],n(et)))}export default an
//# sourceMappingURL=guildReport-74f679b2.js.map