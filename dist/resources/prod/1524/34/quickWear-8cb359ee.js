import{m as t,h as n,t as a,at as r,c as e,A as s,ai as i,P as o,bC as c,i as f,bD as d,e as m,b8 as u,j as l,H as h,p,o as b,l as j,Z as k,V as $,z as g}from"./calfSystem-793da633.js"
import{c as L}from"./createTBody-e7728195.js"
import{c as y}from"./createTable-1ddc44c4.js"
import{m as w}from"./makeFolderSpan-f033be17.js"
import{a as E}from"./stringSort-943e88a1.js"
import{d as A}from"./daLoadInventory-1a48942f.js"
import{u as C,e as x}from"./useItem-617271d2.js"
import{e as H}from"./eventHandler5-dd5f5b88.js"
import{c as I}from"./createInput-9733446a.js"
import{c as S}from"./createLabel-c606cd5f.js"
import{c as N}from"./createLi-b0b9466b.js"
import{c as v}from"./createUl-870923e1.js"
import{p as P,a as Q}from"./pubsub-f5c6f8c9.js"
import{h as W}from"./hasClasses-ef43cc6b.js"
import{i as q}from"./isArray-3d9d6e31.js"
import{j as U}from"./jConfirm-5d6088c6.js"
import{s as M}from"./selfIdIs-732ebff1.js"
import{b as T}from"./simpleCheckbox-7834ef28.js"
import{t as F}from"./toggleForce-f376374b.js"
import"./alpha-18b53f44.js"
import"./toLowerCase-82b2a5d7.js"
import"./dialog-a123f46e.js"
import"./dialogMsg-2f52cc12.js"
import"./indexAjaxJson-bfa28533.js"
import"./daUseItem-88aa4daf.js"
import"./errorDialog-da819f92.js"
import"./isChecked-d96c8dec.js"
function O(t,n,a){const r=t.insertRow(-1)
a.dom=r
let e="fshEq ",o="fshUse "
a.t<9?e+="smallLink":e+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),s(`<td class="fshCenter"><span class="${e}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.extra.design}_${t.extra.color}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,r)}function B(t){return w(String(t.id),t.name)}function D(t){return w("0","All")+t.r.map(B).join("")}function _(t,n,r){r.items.sort(E).forEach(a(O,t,n))}function Z(t){const s=y({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${D(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),i=L()
return n(s,i),e.sortBy="n",e.sortAsc=!0,t.r.forEach(a(_,i,r())),s}function z(a){const r=Z(a),e=t()
return n(e,r),e}const G=(t,n)=>t+String(n)
function J(t,n,a){return I({checked:0===a,id:G(t,a),name:t,type:"radio"})}function R(t,a,r,e){const s=N({className:"ui-state-default ui-corner-top"})
return n(s,S({htmlFor:G(t,e),innerHTML:r})),0!==e&&o(s,"click",(()=>{P(G(t,e),a[e])})),s}const V=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function K(r,e,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=a(n,o)
e.map(a(J,i)).forEach(c)
const f=e.map(V)
P(G(i,0),f[0])
const d=function(t,r,e){const s=v({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(a(R,r,e)).forEach(a(n,s)),s}(e,i,f)
P(`${i}-header`,d),n(o,d),f.forEach(c),s("",r),n(r,o)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(a(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return X(t.searchname,t.nickname)}function rt(t){return 0===t[1].nicknameList.length}function et(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(rt).map(et).join("")}(t)}</tbody></table>`}function it(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function ot(t,n,r){const e=r.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,e),n.forEach(a(it,t,e))}function ct(t,n,r){r.items.forEach(a(ot,t,n))}function ft(n){const r={},e=c("quickSearchList")||[]
n.r.forEach(a(ct,r,e))
const s=t()
return f(s,st(r,e)),s}let dt,mt
function ut(t,n,a){0===a.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function lt(t,n,r){$("QuickWear",`doAction - ${r}`),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(a(ut,t,r))}function ht(t){lt(t,C,"Used")}function pt(t){dt?ht(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",a(ht,t))}function bt(t){lt(t,x,"Worn")}function jt(t,n,a){const r=a.dom
if("0"===t)r.classList.remove("fshHide")
else{const a=t!==n.toString()
F(r,a)}}function kt(t,n){const r=n.id
n.items.forEach(a(jt,t,r))}function $t(t){const n=t.dataset.folder
mt.r.forEach(a(kt,n))}function gt(){dt=!dt,k("disableQuickWearPrompts",dt)}function Lt(a){n(a,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,a,r){n(r,t(a))}function wt(t,n){Q("qwtab-header",Lt),Q("qwtab0",a(yt,z,n)),Q("qwtab1",a(yt,ft,n)),K(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,H([[a(W,["smallLink","fshEq"]),bt],[a(W,["smallLink","fshUse"]),pt],[a(j,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&q(t.r)})(n)&&(mt=n,wt(t,n))}function At(t){l()&&function(t){const n=t||p
n&&(f(n,"Getting item list from backpack..."),A().then(a(Et,n)),dt=h("disableQuickWearPrompts"))}(t)}export default At
//# sourceMappingURL=quickWear-8cb359ee.js.map
