import{o as t,bM as n,b as e,p as o,t as a,ae as r,B as s,av as i,S as c,bw as l,aF as u,m as p,aW as f,P as d,h as m,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a4 as x,ab as C,C as $,c as v,a3 as I,R,E as w,aD as H,aJ as N,y as S}from"./calfSystem-6ad077b7.js"
import{c as T}from"./currentGuildId-e0011880.js"
import{e as k}from"./useItem-60ef5581.js"
import{a as E}from"./queue-74ee4350.js"
import{g as A}from"./getMembrList-c96ccda8.js"
import{b as B}from"./batch-9878d42e.js"
import{e as D}from"./eventHandler5-d64d204e.js"
import{i as F}from"./isChecked-5630e19a.js"
import{s as G}from"./selfIdIs-add1b811.js"
import{a as W}from"./alpha-7ee6a1b8.js"
import{t as P}from"./testRange-2941bddb.js"
import{c as _}from"./createInput-75a73ea8.js"
import{c as J}from"./createSelect-86f5c8e2.js"
import{c as q}from"./createTable-edb24c5b.js"
import{c as Q}from"./createTr-c031a985.js"
import{g as U,s as Y}from"./idb-9caca870.js"
import{o as z}from"./onlineDot-465a2c69.js"
import"./dialog-e5c57349.js"
import"./dialogMsg-227939ed.js"
import"./indexAjaxJson-d462ea95.js"
import"./daUseItem-2f8bc6fc.js"
import"./errorDialog-48630d52.js"
import"./htmlResult-548498f9.js"
import"./takeItem-4024bed4.js"
import"./guild-b59f329b.js"
import"./cmdExport-f73a707b.js"
import"./toLowerCase-c964d32b.js"
import"./numberIsNaN-11f99b26.js"
function K(t){return t.match(/&id=(\d+)/)[1]}const O=`<span class="guildReportSpinner" style="background-image: url('${i}ui/misc/spinner.gif');"></span>`
function V(t){s('<span class="fastWorn">Worn</span>',t)}function X(t){return t.match(l)[1]}function Z(t,n,e){1!==e.r&&("recall"===t?function(t){s('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):V(n))}function tt(t,n,e,o){E(K(n),X(n),e,o).then(a(Z,o,t))}function nt(t,n,e){tt(t,n,e,"recall")}const et=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),nt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),nt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(X(n))===u()?k(K(n)).then(a(V,t)):tt(t,n,0,"wear")}]]
const ot=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(et.find(a(r,t))[1](n,e),s(O,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const at='<span class="sendLink fast-bp">Fast BP</span> | ',rt='<span class="sendLink fast-gs">Fast GS</span>',st=' | <span class="sendLink fast-wear">Fast Wear</span>'
let it,ct,lt,ut,pt
const ft=[[!0,!0,function(){return ut||(ut=p({innerHTML:at+rt+st})),ut.cloneNode(!0)}],[!0,!1,function(){return pt||(pt=p({innerHTML:rt+st})),pt.cloneNode(!0)}],[!1,!0,function(){return lt||(lt=p({innerHTML:at+rt})),lt.cloneNode(!0)}],[!1,!1,function(){return ct||(ct=p({innerHTML:rt})),ct.cloneNode(!0)}]]
function dt(t,n,e){return e[0]===t&&e[1]===n}function mt(t){const n=!(it||(it=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),it).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return ft.find(a(dt,n,e))[2]()}function bt(t,n,e){return n[e]=t[e],n}function gt(t){return f(t).sort(W).reduce(a(bt,t),{})}let ht,yt,Mt
function jt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function Lt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function xt(t,n){c("potReport","drawInventory")
const e=gt(f(n).reduce(a(jt,t,n),{}))
s(`<table><tbody>${f(e).reduce(a(Lt,t,e),"")}</tbody></table>`,ht)}function Ct(){const t=Q()
return t.insertCell(-1),t.insertCell(-1),t}function $t(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function vt(t,n){m(t,$t(n[0]))}function It(){if(!Mt){Mt=Ct()
const t=J({style:{width:"130px"}})
Mt.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',m(Mt.cells[1],t)}return Mt.cloneNode(!0)}function Rt(t,n){const e=It()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
m(o,$t(n[1])),[o.name,o.value]=n,m(t.tBodies[0],e)}function wt(t,n,e){const o=_({id:n,type:"button",value:e})
m(t.cells[1],o)}function Ht(t){const n=Ct()
wt(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),wt(n,"fshReset","Reset"),m(t.tBodies[0],n)}function Nt(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
s("",e),m(e,$t("Ignore")),y(t).forEach(a(vt,e)),e.value=o}}function St(t){c("potReport","drawMapping")
const n=q({innerHTML:"<tbody></tbody>"})
yt.replaceChild(n,yt.children[0]),g(yt,"mousedown",a(Nt,t.myMap)),h(3,B,[[5,3,y(t.myMap),0,a(Rt,n),a(Ht,n)]])}const Tt="fsh_potMap",kt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function Et(t,n){t.myMap[n]||(t.myMap[n]=n)}function At(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,Y(Tt,t),xt(t,n))}function Bt(t,n,e){return n[e]=t?"Ignore":e,n}function Dt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(Bt,e),{})}(t,n,e),Y(Tt,t),St(t),xt(t,n)}function Ft(t){return/^pottab\d$/.test(t.id)}function Gt(t,n){t[n.id]=n.checked,Y(Tt,t)}function Wt(t,n,e){const o=e.target.id,a=P(e.target.value,0,999)
a&&(t[o]=a,Y(Tt,t),xt(t,n))}function Pt(n,e,o){g(o,"change",a(At,n,e)),t(o,D(function(t,n){return[[G("fshIgnoreAll"),a(Dt,t,n,!0)],[G("fshReset"),a(Dt,t,n,null)],[Ft,a(Gt,t)]]}(n,e))),g(o,"input",a(Wt,n,e))}function _t(t,n){const e=function(t){return p({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${F(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${F(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${F(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=p({id:"panels"})
m(e,r),function(t,n,e){ht=p({id:"inventory"}),t.pottab1?xt(t,n):d(e.parentNode.children[0],"change",a(xt,t,n)),m(e,ht)}(t,n,r),function(t,n){yt=p({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?St(t):d(n.parentNode.children[2],"change",a(St,t)),m(n,yt)}(t,r),function(t,n){const e=p({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
m(n,e)}(t,r),m(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Pt(t,n,e),e}(t,n),e)}function Jt(t,n){const e=L({},kt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(Et,t)),gt(t.myMap)}(e,t),Y(Tt,e),_t(e,t)}function qt(t){o&&U(Tt).then(a(Jt,t))}let Qt,Ut,Yt,zt,Kt
function Ot(t,n){const e=Ut[n]
m(e,t)}function Vt(t){Qt.push(mt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Yt[n]=(Yt[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Xt(){B([5,3,Qt,0,Ot,a(qt,Yt)])}function Zt(){Ut=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Yt={},Qt=[],B([5,3,Ut,0,Vt,Xt])}function tn(t){const n=$(t)
v.membrList[n]&&s(function(t){return`${z({last_login:v.membrList[t].last_login})}<a href="${I}${v.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function nn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
B([5,3,t,0,tn])}function en(t){t.children[0].hasAttribute("bgcolor")&&(Kt=N(zt,t.children[0].children[0])),Kt||(t.className="fshHide")}function on(){if(zt=R("user"),!zt)return
if(!w('#pCC table table td[bgcolor="#DAA534"] b').some(H(zt)))return
const t=C("#pCC table table tr")
B([5,2,t,0,en])}function an(){!S()&&T()&&(!async function(){await A(!1),h(3,nn)}(),h(2,on),h(3,Zt),t(e("table",o)[1],n(ot)))}export default an
//# sourceMappingURL=guildReport-ff0ec053.js.map
