import{o as t,bP as n,b as e,p as o,t as a,c0 as r,B as i,am as s,W as c,bw as p,ax as u,m as l,aP as f,Q as m,h as d,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a5 as x,ac as C,C as $,c as I,a4 as v,S as N,E as H,au as R,aC as S,y as T}from"./calfSystem-71efcdd9.js"
import{e as k}from"./useItem-4b08379e.js"
import{a as w}from"./queue-b016773e.js"
import{g as E}from"./getMembrList-5c2b0d79.js"
import{b as A}from"./batch-55e783d3.js"
import{e as B}from"./eventHandler5-68e83640.js"
import{i as G}from"./isChecked-16fc7684.js"
import{s as P}from"./selfIdIs-6c585b59.js"
import{a as W}from"./alpha-f430aa22.js"
import{t as D}from"./testRange-7cba6d07.js"
import{c as F}from"./createInput-b623eea7.js"
import{c as _}from"./createSelect-128a7a04.js"
import{c as q}from"./createTable-86c6176d.js"
import{c as J}from"./createTr-a80fc2af.js"
import{g as Q,s as U}from"./idb-3de49256.js"
import{o as Y}from"./onlineDot-f8821c97.js"
import"./dialog-e89b7ecf.js"
import"./dialogMsg-a0c49d9a.js"
import"./indexAjaxJson-9e9c7404.js"
import"./daUseItem-f2e72443.js"
import"./errorDialog-f60f17b2.js"
import"./htmlResult-ff6e4729.js"
import"./takeItem-6e1e0a3d.js"
import"./guild-99bab939.js"
import"./currentGuildId-feae79ca.js"
import"./cmdExport-29c620b8.js"
import"./toLowerCase-b0c4634d.js"
import"./numberIsNaN-30cde299.js"
function z(t){return t.match(/&id=(\d+)/)[1]}const K=`<span class="guildReportSpinner" style="background-image: url('${s}ui/misc/spinner.gif');"></span>`
function O(t){i('<span class="fastWorn">Worn</span>',t)}function V(t){return t.match(p)[1]}function X(t,n,e){1!==e.r&&("recall"===t?function(t){i('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):O(n))}function Z(t,n,e,o){w(z(n),V(n),e,o).then(a(X,o,t))}function tt(t,n,e){Z(t,n,e,"recall")}const nt=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),tt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),tt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(V(n))===u()?k(z(n)).then(a(O,t)):Z(t,n,0,"wear")}]]
const et=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(nt.find(a(r,t))[1](n,e),i(K,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const ot='<span class="sendLink fast-bp">Fast BP</span> | ',at='<span class="sendLink fast-gs">Fast GS</span>',rt=' | <span class="sendLink fast-wear">Fast Wear</span>'
let it,st,ct,pt,ut
const lt=[[!0,!0,function(){return pt||(pt=l({innerHTML:ot+at+rt})),pt.cloneNode(!0)}],[!0,!1,function(){return ut||(ut=l({innerHTML:at+rt})),ut.cloneNode(!0)}],[!1,!0,function(){return ct||(ct=l({innerHTML:ot+at})),ct.cloneNode(!0)}],[!1,!1,function(){return st||(st=l({innerHTML:at})),st.cloneNode(!0)}]]
function ft(t,n,e){return e[0]===t&&e[1]===n}function mt(t){const n=!(it||(it=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),it).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return lt.find(a(ft,n,e))[2]()}function dt(t,n,e){return n[e]=t[e],n}function bt(t){return f(t).sort(W).reduce(a(dt,t),{})}let gt,ht,yt
function Mt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function jt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function Lt(t,n){c("potReport","drawInventory")
const e=bt(f(n).reduce(a(Mt,t,n),{}))
i(`<table><tbody>${f(e).reduce(a(jt,t,e),"")}</tbody></table>`,gt)}function xt(){const t=J()
return t.insertCell(-1),t.insertCell(-1),t}function Ct(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function $t(t,n){d(t,Ct(n[0]))}function It(){if(!yt){yt=xt()
const t=_({className:"tip-static",dataset:{tipped:'Set to "Ignore" to exclude from report'},style:{width:"130px"}})
d(yt.cells[1],t)}return yt.cloneNode(!0)}function vt(t,n){const e=It()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
d(o,Ct(n[1])),[o.name,o.value]=n,d(t.tBodies[0],e)}function Nt(t,n,e){const o=F({id:n,type:"button",value:e})
d(t.cells[1],o)}function Ht(t){const n=xt()
Nt(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),Nt(n,"fshReset","Reset"),d(t.tBodies[0],n)}function Rt(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
i("",e),d(e,Ct("Ignore")),y(t).forEach(a($t,e)),e.value=o}}function St(t){c("potReport","drawMapping")
const n=q({innerHTML:"<tbody></tbody>"})
ht.replaceChild(n,ht.children[0]),g(ht,"mousedown",a(Rt,t.myMap)),h(3,A,[[5,3,y(t.myMap),0,a(vt,n),a(Ht,n)]])}const Tt="fsh_potMap",kt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function wt(t,n){t.myMap[n]||(t.myMap[n]=n)}function Et(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,U(Tt,t),Lt(t,n))}function At(t,n,e){return n[e]=t?"Ignore":e,n}function Bt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(At,e),{})}(t,n,e),U(Tt,t),St(t),Lt(t,n)}function Gt(t){return/^pottab\d$/.test(t.id)}function Pt(t,n){t[n.id]=n.checked,U(Tt,t)}function Wt(t,n,e){const o=e.target.id,a=D(e.target.value,0,999)
a&&(t[o]=a,U(Tt,t),Lt(t,n))}function Dt(n,e,o){g(o,"change",a(Et,n,e)),t(o,B(function(t,n){return[[P("fshIgnoreAll"),a(Bt,t,n,!0)],[P("fshReset"),a(Bt,t,n,null)],[Gt,a(Pt,t)]]}(n,e))),g(o,"input",a(Wt,n,e))}function Ft(t,n){const e=function(t){return l({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${G(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${G(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${G(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=l({id:"panels"})
d(e,r),function(t,n,e){gt=l({id:"inventory"}),t.pottab1?Lt(t,n):m(e.parentNode.children[0],"change",a(Lt,t,n)),d(e,gt)}(t,n,r),function(t,n){ht=l({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?St(t):m(n.parentNode.children[2],"change",a(St,t)),d(n,ht)}(t,r),function(t,n){const e=l({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
d(n,e)}(t,r),d(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Dt(t,n,e),e}(t,n),e)}function _t(t,n){const e=L({},kt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(wt,t)),bt(t.myMap)}(e,t),U(Tt,e),Ft(e,t)}function qt(t){Q(Tt).then(a(_t,t))}let Jt,Qt,Ut,Yt,zt
function Kt(t,n){const e=Qt[n]
d(e,t)}function Ot(t){Jt.push(mt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Ut[n]=(Ut[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Vt(){A([5,3,Jt,0,Kt,a(qt,Ut)])}function Xt(){Qt=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Ut={},Jt=[],A([5,3,Qt,0,Ot,Vt])}function Zt(t){const n=$(t)
I.membrList[n]&&i(function(t){return`${Y({last_login:I.membrList[t].last_login})}<a href="${v}${I.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function tn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
A([5,3,t,0,Zt])}function nn(t){t.children[0].hasAttribute("bgcolor")&&(zt=S(Yt,t.children[0].children[0])),zt||(t.className="fshHide")}function en(){if(Yt=N("user"),!Yt)return
if(!H('#pCC table table td[bgcolor="#DAA534"] b').some(R(Yt)))return
const t=C("#pCC table table tr")
A([5,2,t,0,nn])}function on(){h(3,tn)}function an(){T()||(E(!1).then(on),h(2,en),h(3,Xt),t(e("table",o)[1],n(et)))}export default an
//# sourceMappingURL=guildReport-bdba89cc.js.map