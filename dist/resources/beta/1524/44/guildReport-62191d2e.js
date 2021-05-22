import{o as t,bP as n,b as e,p as o,t as a,ae as r,B as s,ax as i,S as c,bz as l,aH as u,m as p,aY as f,P as d,h as m,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a4 as x,ab as C,C as $,c as I,a3 as v,R as H,E as R,aF as N,aL as S,y as T}from"./calfSystem-a8d582b6.js"
import{c as k}from"./currentGuildId-6d2e1d9d.js"
import{e as w}from"./useItem-77f9bd97.js"
import{a as E}from"./queue-3f7ae5b8.js"
import{g as A}from"./getMembrList-ba181b15.js"
import{b as B}from"./batch-b787972d.js"
import{e as F}from"./eventHandler5-6afdc1e7.js"
import{i as G}from"./isChecked-5630e19a.js"
import{s as P}from"./selfIdIs-c093665f.js"
import{a as D}from"./alpha-7ee6a1b8.js"
import{t as W}from"./testRange-2941bddb.js"
import{c as _}from"./createInput-8922c2cd.js"
import{c as q}from"./createSelect-d0f9b707.js"
import{c as J}from"./createTable-3028e219.js"
import{c as Y}from"./createTr-0a0982d7.js"
import{g as z,s as Q}from"./idb-d8c9a883.js"
import{o as U}from"./onlineDot-76ee782e.js"
import"./dialog-e5c57349.js"
import"./dialogMsg-227939ed.js"
import"./indexAjaxJson-f3656c2a.js"
import"./daUseItem-aa7b1f89.js"
import"./errorDialog-48630d52.js"
import"./htmlResult-1c39a82b.js"
import"./takeItem-6c44f04f.js"
import"./guild-7b16d85c.js"
import"./cmdExport-70bb9819.js"
import"./toLowerCase-c964d32b.js"
import"./numberIsNaN-11f99b26.js"
function K(t){return t.match(/&id=(\d+)/)[1]}const O=`<span class="guildReportSpinner" style="background-image: url('${i}ui/misc/spinner.gif');"></span>`
function V(t){s('<span class="fastWorn">Worn</span>',t)}function X(t){return t.match(l)[1]}function Z(t,n,e){1!==e.r&&("recall"===t?function(t){s('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):V(n))}function tt(t,n,e,o){E(K(n),X(n),e,o).then(a(Z,o,t))}function nt(t,n,e){tt(t,n,e,"recall")}const et=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),nt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),nt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(X(n))===u()?w(K(n)).then(a(V,t)):tt(t,n,0,"wear")}]]
const ot=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(et.find(a(r,t))[1](n,e),s(O,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const at='<span class="sendLink fast-bp">Fast BP</span> | ',rt='<span class="sendLink fast-gs">Fast GS</span>',st=' | <span class="sendLink fast-wear">Fast Wear</span>'
let it,ct,lt,ut,pt
const ft=[[!0,!0,function(){return ut||(ut=p({innerHTML:at+rt+st})),ut.cloneNode(!0)}],[!0,!1,function(){return pt||(pt=p({innerHTML:rt+st})),pt.cloneNode(!0)}],[!1,!0,function(){return lt||(lt=p({innerHTML:at+rt})),lt.cloneNode(!0)}],[!1,!1,function(){return ct||(ct=p({innerHTML:rt})),ct.cloneNode(!0)}]]
function dt(t,n,e){return e[0]===t&&e[1]===n}function mt(t){const n=!(it||(it=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),it).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return ft.find(a(dt,n,e))[2]()}function bt(t,n,e){return n[e]=t[e],n}function gt(t){return f(t).sort(D).reduce(a(bt,t),{})}let ht,yt,Mt
function jt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function Lt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function xt(t,n){c("potReport","drawInventory")
const e=gt(f(n).reduce(a(jt,t,n),{}))
s(`<table><tbody>${f(e).reduce(a(Lt,t,e),"")}</tbody></table>`,ht)}function Ct(){const t=Y()
return t.insertCell(-1),t.insertCell(-1),t}function $t(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function It(t,n){m(t,$t(n[0]))}function vt(){if(!Mt){Mt=Ct()
const t=q({style:{width:"130px"}})
Mt.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',m(Mt.cells[1],t)}return Mt.cloneNode(!0)}function Ht(t,n){const e=vt()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
m(o,$t(n[1])),[o.name,o.value]=n,m(t.tBodies[0],e)}function Rt(t,n,e){const o=_({id:n,type:"button",value:e})
m(t.cells[1],o)}function Nt(t){const n=Ct()
Rt(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),Rt(n,"fshReset","Reset"),m(t.tBodies[0],n)}function St(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
s("",e),m(e,$t("Ignore")),y(t).forEach(a(It,e)),e.value=o}}function Tt(t){c("potReport","drawMapping")
const n=J({innerHTML:"<tbody></tbody>"})
yt.replaceChild(n,yt.children[0]),g(yt,"mousedown",a(St,t.myMap)),h(3,B,[[5,3,y(t.myMap),0,a(Ht,n),a(Nt,n)]])}const kt="fsh_potMap",wt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function Et(t,n){t.myMap[n]||(t.myMap[n]=n)}function At(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,Q(kt,t),xt(t,n))}function Bt(t,n,e){return n[e]=t?"Ignore":e,n}function Ft(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(Bt,e),{})}(t,n,e),Q(kt,t),Tt(t),xt(t,n)}function Gt(t){return/^pottab\d$/.test(t.id)}function Pt(t,n){t[n.id]=n.checked,Q(kt,t)}function Dt(t,n,e){const o=e.target.id,a=W(e.target.value,0,999)
a&&(t[o]=a,Q(kt,t),xt(t,n))}function Wt(n,e,o){g(o,"change",a(At,n,e)),t(o,F(function(t,n){return[[P("fshIgnoreAll"),a(Ft,t,n,!0)],[P("fshReset"),a(Ft,t,n,null)],[Gt,a(Pt,t)]]}(n,e))),g(o,"input",a(Dt,n,e))}function _t(t,n){const e=function(t){return p({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${G(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${G(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${G(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=p({id:"panels"})
m(e,r),function(t,n,e){ht=p({id:"inventory"}),t.pottab1?xt(t,n):d(e.parentNode.children[0],"change",a(xt,t,n)),m(e,ht)}(t,n,r),function(t,n){yt=p({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?Tt(t):d(n.parentNode.children[2],"change",a(Tt,t)),m(n,yt)}(t,r),function(t,n){const e=p({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
m(n,e)}(t,r),m(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Wt(t,n,e),e}(t,n),e)}function qt(t,n){const e=L({},wt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(Et,t)),gt(t.myMap)}(e,t),Q(kt,e),_t(e,t)}function Jt(t){o&&z(kt).then(a(qt,t))}let Yt,zt,Qt,Ut,Kt
function Ot(t,n){const e=zt[n]
m(e,t)}function Vt(t){Yt.push(mt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Qt[n]=(Qt[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Xt(){B([5,3,Yt,0,Ot,a(Jt,Qt)])}function Zt(){zt=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Qt={},Yt=[],B([5,3,zt,0,Vt,Xt])}function tn(t){const n=$(t)
I.membrList[n]&&s(function(t){return`${U({last_login:I.membrList[t].last_login})}<a href="${v}${I.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function nn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
B([5,3,t,0,tn])}function en(t){t.children[0].hasAttribute("bgcolor")&&(Kt=S(Ut,t.children[0].children[0])),Kt||(t.className="fshHide")}function on(){if(Ut=H("user"),!Ut)return
if(!R('#pCC table table td[bgcolor="#DAA534"] b').some(N(Ut)))return
const t=C("#pCC table table tr")
B([5,2,t,0,en])}function an(){!T()&&k()&&(!async function(){await A(!1),h(3,nn)}(),h(2,on),h(3,Zt),t(e("table",o)[1],n(ot)))}export default an
//# sourceMappingURL=guildReport-62191d2e.js.map
