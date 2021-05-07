import{o as t,bQ as n,b as e,p as o,t as a,c1 as r,B as s,ax as i,U as c,by as l,aG as u,m as p,aZ as f,Q as m,h as d,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a6 as x,ad as C,C as $,c as I,a5 as v,T,E,aE as H,aK as N,y as R}from"./calfSystem-3cb2f93e.js"
import{c as k}from"./currentGuildId-a71d60fb.js"
import{e as w}from"./useItem-5aa705ad.js"
import{a as S}from"./queue-723ff6c4.js"
import{g as A}from"./getMembrList-8c54d666.js"
import{b as G}from"./batch-60e4331a.js"
import{e as B}from"./eventHandler5-23991525.js"
import{i as D}from"./isChecked-987a8a1c.js"
import{s as F}from"./selfIdIs-64452eaa.js"
import{a as W}from"./alpha-b51f7102.js"
import{t as P}from"./testRange-4d13512e.js"
import{c as _}from"./createInput-c2872ef0.js"
import{c as Q}from"./createSelect-89f4b773.js"
import{c as q}from"./createTable-4f507d36.js"
import{c as J}from"./createTr-e2aab541.js"
import{g as U,s as K}from"./idb-c9ce87e3.js"
import{o as Y}from"./onlineDot-6491af90.js"
import"./dialog-de7a7b58.js"
import"./dialogMsg-3c26aecb.js"
import"./indexAjaxJson-a55a7596.js"
import"./daUseItem-2c7c16fb.js"
import"./errorDialog-0f2ff56e.js"
import"./htmlResult-4d7038ac.js"
import"./takeItem-c30d4506.js"
import"./guild-dbaee521.js"
import"./cmdExport-7784a81f.js"
import"./toLowerCase-999f3196.js"
import"./numberIsNaN-885a5556.js"
function Z(t){return t.match(/&id=(\d+)/)[1]}const z=`<span class="guildReportSpinner" style="background-image: url('${i}ui/misc/spinner.gif');"></span>`
function O(t){s('<span class="fastWorn">Worn</span>',t)}function V(t){return t.match(l)[1]}function X(t,n,e){1!==e.r&&("recall"===t?function(t){s('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):O(n))}function tt(t,n,e,o){S(Z(n),V(n),e,o).then(a(X,o,t))}function nt(t,n,e){tt(t,n,e,"recall")}const et=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),nt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),nt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(V(n))===u()?w(Z(n)).then(a(O,t)):tt(t,n,0,"wear")}]]
const ot=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(et.find(a(r,t))[1](n,e),s(z,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const at='<span class="sendLink fast-bp">Fast BP</span> | ',rt='<span class="sendLink fast-gs">Fast GS</span>',st=' | <span class="sendLink fast-wear">Fast Wear</span>'
let it,ct,lt,ut,pt
const ft=[[!0,!0,function(){return ut||(ut=p({innerHTML:at+rt+st})),ut.cloneNode(!0)}],[!0,!1,function(){return pt||(pt=p({innerHTML:rt+st})),pt.cloneNode(!0)}],[!1,!0,function(){return lt||(lt=p({innerHTML:at+rt})),lt.cloneNode(!0)}],[!1,!1,function(){return ct||(ct=p({innerHTML:rt})),ct.cloneNode(!0)}]]
function mt(t,n,e){return e[0]===t&&e[1]===n}function dt(t){const n=!(it||(it=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),it).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return ft.find(a(mt,n,e))[2]()}function bt(t,n,e){return n[e]=t[e],n}function gt(t){return f(t).sort(W).reduce(a(bt,t),{})}let ht,yt,Mt
function jt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function Lt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function xt(t,n){c("potReport","drawInventory")
const e=gt(f(n).reduce(a(jt,t,n),{}))
s(`<table><tbody>${f(e).reduce(a(Lt,t,e),"")}</tbody></table>`,ht)}function Ct(){const t=J()
return t.insertCell(-1),t.insertCell(-1),t}function $t(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function It(t,n){d(t,$t(n[0]))}function vt(){if(!Mt){Mt=Ct()
const t=Q({style:{width:"130px"}})
Mt.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',d(Mt.cells[1],t)}return Mt.cloneNode(!0)}function Tt(t,n){const e=vt()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
d(o,$t(n[1])),[o.name,o.value]=n,d(t.tBodies[0],e)}function Et(t,n,e){const o=_({id:n,type:"button",value:e})
d(t.cells[1],o)}function Ht(t){const n=Ct()
Et(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),Et(n,"fshReset","Reset"),d(t.tBodies[0],n)}function Nt(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
s("",e),d(e,$t("Ignore")),y(t).forEach(a(It,e)),e.value=o}}function Rt(t){c("potReport","drawMapping")
const n=q({innerHTML:"<tbody></tbody>"})
yt.replaceChild(n,yt.children[0]),g(yt,"mousedown",a(Nt,t.myMap)),h(3,G,[[5,3,y(t.myMap),0,a(Tt,n),a(Ht,n)]])}const kt="fsh_potMap",wt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function St(t,n){t.myMap[n]||(t.myMap[n]=n)}function At(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,K(kt,t),xt(t,n))}function Gt(t,n,e){return n[e]=t?"Ignore":e,n}function Bt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(Gt,e),{})}(t,n,e),K(kt,t),Rt(t),xt(t,n)}function Dt(t){return/^pottab\d$/.test(t.id)}function Ft(t,n){t[n.id]=n.checked,K(kt,t)}function Wt(t,n,e){const o=e.target.id,a=P(e.target.value,0,999)
a&&(t[o]=a,K(kt,t),xt(t,n))}function Pt(n,e,o){g(o,"change",a(At,n,e)),t(o,B(function(t,n){return[[F("fshIgnoreAll"),a(Bt,t,n,!0)],[F("fshReset"),a(Bt,t,n,null)],[Dt,a(Ft,t)]]}(n,e))),g(o,"input",a(Wt,n,e))}function _t(t,n){const e=function(t){return p({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${D(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${D(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${D(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=p({id:"panels"})
d(e,r),function(t,n,e){ht=p({id:"inventory"}),t.pottab1?xt(t,n):m(e.parentNode.children[0],"change",a(xt,t,n)),d(e,ht)}(t,n,r),function(t,n){yt=p({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?Rt(t):m(n.parentNode.children[2],"change",a(Rt,t)),d(n,yt)}(t,r),function(t,n){const e=p({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
d(n,e)}(t,r),d(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Pt(t,n,e),e}(t,n),e)}function Qt(t,n){const e=L({},wt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(St,t)),gt(t.myMap)}(e,t),K(kt,e),_t(e,t)}function qt(t){o&&U(kt).then(a(Qt,t))}let Jt,Ut,Kt,Yt,Zt
function zt(t,n){const e=Ut[n]
d(e,t)}function Ot(t){Jt.push(dt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Kt[n]=(Kt[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Vt(){G([5,3,Jt,0,zt,a(qt,Kt)])}function Xt(){Ut=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Kt={},Jt=[],G([5,3,Ut,0,Ot,Vt])}function tn(t){const n=$(t)
I.membrList[n]&&s(function(t){return`${Y({last_login:I.membrList[t].last_login})}<a href="${v}${I.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function nn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
G([5,3,t,0,tn])}function en(t){t.children[0].hasAttribute("bgcolor")&&(Zt=N(Yt,t.children[0].children[0])),Zt||(t.className="fshHide")}function on(){if(Yt=T("user"),!Yt)return
if(!E('#pCC table table td[bgcolor="#DAA534"] b').some(H(Yt)))return
const t=C("#pCC table table tr")
G([5,2,t,0,en])}function an(){!R()&&k()&&(!async function(){await A(!1),h(3,nn)}(),h(2,on),h(3,Xt),t(e("table",o)[1],n(ot)))}export default an
//# sourceMappingURL=guildReport-579eb34c.js.map
