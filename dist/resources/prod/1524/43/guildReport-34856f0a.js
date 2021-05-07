import{o as t,bM as n,b as e,p as o,t as a,bZ as r,B as s,au as i,T as c,bu as u,aD as l,m as p,aU as f,Q as m,h as d,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a5 as x,ac as C,C as $,c as I,a4 as v,S as H,E as T,aB as N,aH as R,y as S}from"./calfSystem-9942149b.js"
import{c as k}from"./currentGuildId-71878d37.js"
import{e as w}from"./useItem-850b93fa.js"
import{a as E}from"./queue-ea2a593b.js"
import{g as A}from"./getMembrList-e6e94af7.js"
import{b as B}from"./batch-0f6a856b.js"
import{e as D}from"./eventHandler5-e7aa5fb9.js"
import{i as G}from"./isChecked-987a8a1c.js"
import{s as F}from"./selfIdIs-7e904820.js"
import{a as W}from"./alpha-b51f7102.js"
import{t as P}from"./testRange-4d13512e.js"
import{c as _}from"./createInput-9941d334.js"
import{c as q}from"./createSelect-c42f624a.js"
import{c as J}from"./createTable-4b731acb.js"
import{c as Q}from"./createTr-186f9103.js"
import{g as U,s as Y}from"./idb-6116f2a7.js"
import{o as Z}from"./onlineDot-62998a2d.js"
import"./dialog-de7a7b58.js"
import"./dialogMsg-3c26aecb.js"
import"./indexAjaxJson-21b8f9a5.js"
import"./daUseItem-46bcfe13.js"
import"./errorDialog-0f2ff56e.js"
import"./htmlResult-667ec4a3.js"
import"./takeItem-f882e262.js"
import"./guild-da1d82bb.js"
import"./cmdExport-ded2df3e.js"
import"./toLowerCase-999f3196.js"
import"./numberIsNaN-885a5556.js"
function z(t){return t.match(/&id=(\d+)/)[1]}const K=`<span class="guildReportSpinner" style="background-image: url('${i}ui/misc/spinner.gif');"></span>`
function O(t){s('<span class="fastWorn">Worn</span>',t)}function V(t){return t.match(u)[1]}function X(t,n,e){1!==e.r&&("recall"===t?function(t){s('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):O(n))}function tt(t,n,e,o){E(z(n),V(n),e,o).then(a(X,o,t))}function nt(t,n,e){tt(t,n,e,"recall")}const et=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),nt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),nt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(V(n))===l()?w(z(n)).then(a(O,t)):tt(t,n,0,"wear")}]]
const ot=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(et.find(a(r,t))[1](n,e),s(K,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const at='<span class="sendLink fast-bp">Fast BP</span> | ',rt='<span class="sendLink fast-gs">Fast GS</span>',st=' | <span class="sendLink fast-wear">Fast Wear</span>'
let it,ct,ut,lt,pt
const ft=[[!0,!0,function(){return lt||(lt=p({innerHTML:at+rt+st})),lt.cloneNode(!0)}],[!0,!1,function(){return pt||(pt=p({innerHTML:rt+st})),pt.cloneNode(!0)}],[!1,!0,function(){return ut||(ut=p({innerHTML:at+rt})),ut.cloneNode(!0)}],[!1,!1,function(){return ct||(ct=p({innerHTML:rt})),ct.cloneNode(!0)}]]
function mt(t,n,e){return e[0]===t&&e[1]===n}function dt(t){const n=!(it||(it=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),it).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return ft.find(a(mt,n,e))[2]()}function bt(t,n,e){return n[e]=t[e],n}function gt(t){return f(t).sort(W).reduce(a(bt,t),{})}let ht,yt,Mt
function jt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function Lt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function xt(t,n){c("potReport","drawInventory")
const e=gt(f(n).reduce(a(jt,t,n),{}))
s(`<table><tbody>${f(e).reduce(a(Lt,t,e),"")}</tbody></table>`,ht)}function Ct(){const t=Q()
return t.insertCell(-1),t.insertCell(-1),t}function $t(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function It(t,n){d(t,$t(n[0]))}function vt(){if(!Mt){Mt=Ct()
const t=q({style:{width:"130px"}})
Mt.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',d(Mt.cells[1],t)}return Mt.cloneNode(!0)}function Ht(t,n){const e=vt()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
d(o,$t(n[1])),[o.name,o.value]=n,d(t.tBodies[0],e)}function Tt(t,n,e){const o=_({id:n,type:"button",value:e})
d(t.cells[1],o)}function Nt(t){const n=Ct()
Tt(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),Tt(n,"fshReset","Reset"),d(t.tBodies[0],n)}function Rt(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
s("",e),d(e,$t("Ignore")),y(t).forEach(a(It,e)),e.value=o}}function St(t){c("potReport","drawMapping")
const n=J({innerHTML:"<tbody></tbody>"})
yt.replaceChild(n,yt.children[0]),g(yt,"mousedown",a(Rt,t.myMap)),h(3,B,[[5,3,y(t.myMap),0,a(Ht,n),a(Nt,n)]])}const kt="fsh_potMap",wt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function Et(t,n){t.myMap[n]||(t.myMap[n]=n)}function At(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,Y(kt,t),xt(t,n))}function Bt(t,n,e){return n[e]=t?"Ignore":e,n}function Dt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(Bt,e),{})}(t,n,e),Y(kt,t),St(t),xt(t,n)}function Gt(t){return/^pottab\d$/.test(t.id)}function Ft(t,n){t[n.id]=n.checked,Y(kt,t)}function Wt(t,n,e){const o=e.target.id,a=P(e.target.value,0,999)
a&&(t[o]=a,Y(kt,t),xt(t,n))}function Pt(n,e,o){g(o,"change",a(At,n,e)),t(o,D(function(t,n){return[[F("fshIgnoreAll"),a(Dt,t,n,!0)],[F("fshReset"),a(Dt,t,n,null)],[Gt,a(Ft,t)]]}(n,e))),g(o,"input",a(Wt,n,e))}function _t(t,n){const e=function(t){return p({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${G(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${G(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${G(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=p({id:"panels"})
d(e,r),function(t,n,e){ht=p({id:"inventory"}),t.pottab1?xt(t,n):m(e.parentNode.children[0],"change",a(xt,t,n)),d(e,ht)}(t,n,r),function(t,n){yt=p({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?St(t):m(n.parentNode.children[2],"change",a(St,t)),d(n,yt)}(t,r),function(t,n){const e=p({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
d(n,e)}(t,r),d(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Pt(t,n,e),e}(t,n),e)}function qt(t,n){const e=L({},wt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(Et,t)),gt(t.myMap)}(e,t),Y(kt,e),_t(e,t)}function Jt(t){o&&U(kt).then(a(qt,t))}let Qt,Ut,Yt,Zt,zt
function Kt(t,n){const e=Ut[n]
d(e,t)}function Ot(t){Qt.push(dt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Yt[n]=(Yt[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Vt(){B([5,3,Qt,0,Kt,a(Jt,Yt)])}function Xt(){Ut=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Yt={},Qt=[],B([5,3,Ut,0,Ot,Vt])}function tn(t){const n=$(t)
I.membrList[n]&&s(function(t){return`${Z({last_login:I.membrList[t].last_login})}<a href="${v}${I.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function nn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
B([5,3,t,0,tn])}function en(t){t.children[0].hasAttribute("bgcolor")&&(zt=R(Zt,t.children[0].children[0])),zt||(t.className="fshHide")}function on(){if(Zt=H("user"),!Zt)return
if(!T('#pCC table table td[bgcolor="#DAA534"] b').some(N(Zt)))return
const t=C("#pCC table table tr")
B([5,2,t,0,en])}function an(){!S()&&k()&&(!async function(){await A(!1),h(3,nn)}(),h(2,on),h(3,Xt),t(e("table",o)[1],n(ot)))}export default an
//# sourceMappingURL=guildReport-34856f0a.js.map
