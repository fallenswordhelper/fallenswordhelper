import{o as t,bO as n,b as e,p as o,t as a,af as r,B as i,aw as s,S as c,by as u,aG as l,m as p,aX as f,bx as d,P as m,h as b,n as g,f as h,a as y,e as M,A as j,i as x,q as L,a4 as $,ab as C,C as I,c as v,a3 as R,R as E,E as H,aE as N,aK as S,y as T}from"./calfSystem-7991d843.js"
import{c as k}from"./currentGuildId-abfe3237.js"
import{e as w}from"./useItem-d17d0e54.js"
import{a as A}from"./queue-81db23d9.js"
import{g as G}from"./getMembrList-479139ba.js"
import{b as B}from"./batch-44f9cf79.js"
import{e as D}from"./eventHandler5-3de99d0b.js"
import{i as F}from"./isChecked-e1880947.js"
import{s as P}from"./selfIdIs-2c5f6b25.js"
import{t as W}from"./testRange-e7fa6436.js"
import{c as _}from"./createInput-e6426c85.js"
import{c as q}from"./createSelect-c31e6ee4.js"
import{c as J}from"./createTable-2a310c28.js"
import{c as K}from"./createTr-78cd56c3.js"
import{g as O,s as Q}from"./idb-89606f1a.js"
import{o as U}from"./onlineDot-de1b774d.js"
import"./dialog-16fed349.js"
import"./dialogMsg-16959bc2.js"
import"./indexAjaxJson-2cb21664.js"
import"./daUseItem-1efe0355.js"
import"./errorDialog-2e0e2853.js"
import"./htmlResult-691831e7.js"
import"./takeItem-185d1fe3.js"
import"./guild-a6c2c23e.js"
import"./cmdExport-07db8246.js"
import"./numberIsNaN-c0e87dea.js"
function X(t){return t.match(/&id=(\d+)/)[1]}const Y=`<span class="guildReportSpinner" style="background-image: url('${s}ui/misc/spinner.gif');"></span>`
function z(t){i('<span class="fastWorn">Worn</span>',t)}function V(t){return t.match(u)[1]}function Z(t,n,e){1!==e.r&&("recall"===t?function(t){i('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):z(n))}function tt(t,n,e,o){A(X(n),V(n),e,o).then(a(Z,o,t))}function nt(t,n,e){tt(t,n,e,"recall")}const et=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),nt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),nt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(V(n))===l()?w(X(n)).then(a(z,t)):tt(t,n,0,"wear")}]]
const ot=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(et.find(a(r,t))[1](n,e),i(Y,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const at='<span class="sendLink fast-bp">Fast BP</span> | ',rt='<span class="sendLink fast-gs">Fast GS</span>',it=' | <span class="sendLink fast-wear">Fast Wear</span>'
let st,ct,ut,lt,pt
const ft=[[!0,!0,function(){return lt||(lt=p({innerHTML:at+rt+it})),lt.cloneNode(!0)}],[!0,!1,function(){return pt||(pt=p({innerHTML:rt+it})),pt.cloneNode(!0)}],[!1,!0,function(){return ut||(ut=p({innerHTML:at+rt})),ut.cloneNode(!0)}],[!1,!1,function(){return ct||(ct=p({innerHTML:rt})),ct.cloneNode(!0)}]]
function dt(t,n,e){return e[0]===t&&e[1]===n}function mt(t){const n=!(st||(st=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),st).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return ft.find(a(dt,n,e))[2]()}function bt(t,n,e){return n[e]=t[e],n}function gt(t){return f(t).sort(d).reduce(a(bt,t),{})}let ht,yt,Mt
function jt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function xt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function Lt(t,n){c("potReport","drawInventory")
const e=gt(f(n).reduce(a(jt,t,n),{}))
i(`<table><tbody>${f(e).reduce(a(xt,t,e),"")}</tbody></table>`,ht)}function $t(){const t=K()
return t.insertCell(-1),t.insertCell(-1),t}function Ct(t){const n=g("option",e)
var e
return n.value=t,n.text=t,n}function It(t,n){b(t,Ct(n[0]))}function vt(){if(!Mt){Mt=$t()
const t=q({style:{width:"130px"}})
Mt.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',b(Mt.cells[1],t)}return Mt.cloneNode(!0)}function Rt(t,n){const e=vt()
j(n[0],e.cells[0])
const o=e.cells[1].children[0]
b(o,Ct(n[1])),[o.name,o.value]=n,b(t.tBodies[0],e)}function Et(t,n,e){const o=_({id:n,type:"button",value:e})
b(t.cells[1],o)}function Ht(t){const n=$t()
Et(n,"fshIgnoreAll","Ignore All"),x(n.cells[1],"&nbsp;"),Et(n,"fshReset","Reset"),b(t.tBodies[0],n)}function Nt(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
i("",e),b(e,Ct("Ignore")),M(t).forEach(a(It,e)),e.value=o}}function St(t){c("potReport","drawMapping")
const n=J({innerHTML:"<tbody></tbody>"})
yt.replaceChild(n,yt.children[0]),h(yt,"mousedown",a(Nt,t.myMap)),y(3,B,[[5,3,M(t.myMap),0,a(Rt,n),a(Ht,n)]])}const Tt="fsh_potMap",kt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function wt(t,n){t.myMap[n]||(t.myMap[n]=n)}function At(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,Q(Tt,t),Lt(t,n))}function Gt(t,n,e){return n[e]=t?"Ignore":e,n}function Bt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(Gt,e),{})}(t,n,e),Q(Tt,t),St(t),Lt(t,n)}function Dt(t){return/^pottab\d$/.test(t.id)}function Ft(t,n){t[n.id]=n.checked,Q(Tt,t)}function Pt(t,n,e){const o=e.target.id,a=W(e.target.value,0,999)
a&&(t[o]=a,Q(Tt,t),Lt(t,n))}function Wt(n,e,o){h(o,"change",a(At,n,e)),t(o,D(function(t,n){return[[P("fshIgnoreAll"),a(Bt,t,n,!0)],[P("fshReset"),a(Bt,t,n,null)],[Dt,a(Ft,t)]]}(n,e))),h(o,"input",a(Pt,n,e))}function _t(t,n){const e=function(t){return p({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${F(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${F(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${F(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=p({id:"panels"})
b(e,r),function(t,n,e){ht=p({id:"inventory"}),t.pottab1?Lt(t,n):m(e.parentNode.children[0],"change",a(Lt,t,n)),b(e,ht)}(t,n,r),function(t,n){yt=p({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?St(t):m(n.parentNode.children[2],"change",a(St,t)),b(n,yt)}(t,r),function(t,n){const e=p({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
b(n,e)}(t,r),b(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Wt(t,n,e),e}(t,n),e)}function qt(t,n){const e=L({},kt)
L(e,$(n,{})),e.myMap=function(t,n){return f(n).forEach(a(wt,t)),gt(t.myMap)}(e,t),Q(Tt,e),_t(e,t)}function Jt(t){o&&O(Tt).then(a(qt,t))}let Kt,Ot,Qt,Ut,Xt
function Yt(t,n){const e=Ot[n]
b(e,t)}function zt(t){Kt.push(mt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Qt[n]=(Qt[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Vt(){B([5,3,Kt,0,Yt,a(Jt,Qt)])}function Zt(){Ot=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Qt={},Kt=[],B([5,3,Ot,0,zt,Vt])}function tn(t){const n=I(t)
v.membrList[n]&&i(function(t){return`${U({last_login:v.membrList[t].last_login})}<a href="${R}${v.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function nn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
B([5,3,t,0,tn])}function en(t){t.children[0].hasAttribute("bgcolor")&&(Xt=S(Ut,t.children[0].children[0])),Xt||(t.className="fshHide")}function on(){if(Ut=E("user"),!Ut)return
if(!H('#pCC table table td[bgcolor="#DAA534"] b').some(N(Ut)))return
const t=C("#pCC table table tr")
B([5,2,t,0,en])}function an(){!T()&&k()&&(!async function(){await G(!1),y(3,nn)}(),y(2,on),y(3,Zt),t(e("table",o)[1],n(ot)))}export default an
//# sourceMappingURL=guildReport-ce7d32a6.js.map
