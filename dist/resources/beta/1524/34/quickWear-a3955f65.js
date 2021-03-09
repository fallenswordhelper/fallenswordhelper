import{m as t,h as n,t as a,av as e,c as r,A as s,ak as o,P as i,bF as c,i as f,bG as d,e as m,ba as u,j as l,H as h,p,o as b,l as j,Z as k,V as $,z as g}from"./calfSystem-dfa26790.js"
import{c as L}from"./createTBody-032c337d.js"
import{c as y}from"./createTable-daece6d2.js"
import{m as w}from"./makeFolderSpan-f033be17.js"
import{a as E}from"./stringSort-a1f762a7.js"
import{d as A}from"./daLoadInventory-8c3d7aac.js"
import{u as x,e as C}from"./useItem-b408b695.js"
import{e as H}from"./eventHandler5-2f9b746a.js"
import{c as I}from"./createInput-5893fb83.js"
import{c as S}from"./createLabel-f7e750ad.js"
import{c as v}from"./createLi-2ae6a63d.js"
import{c as N}from"./createUl-4a0ba666.js"
import{p as P,a as Q}from"./pubsub-7f64a5da.js"
import{h as W}from"./hasClasses-7f1c1dcb.js"
import{i as q}from"./isArray-3d9d6e31.js"
import{j as U}from"./jConfirm-7b093472.js"
import{s as M}from"./selfIdIs-54e4a3f8.js"
import{b as T}from"./simpleCheckbox-a076d904.js"
import{t as F}from"./toggleForce-f376374b.js"
import"./alpha-18b53f44.js"
import"./toLowerCase-82b2a5d7.js"
import"./dialog-a123f46e.js"
import"./dialogMsg-2f52cc12.js"
import"./indexAjaxJson-3825eadb.js"
import"./daUseItem-cce892af.js"
import"./errorDialog-da819f92.js"
import"./isChecked-d96c8dec.js"
function O(t,n,a){const e=t.insertRow(-1)
a.dom=e
let r="fshEq ",i="fshUse "
a.t<9?r+="smallLink":r+="notLink",i+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),s(`<td class="fshCenter"><span class="${r}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${i}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=o
return 13699===t.b?n+=`composing/${t.extra.design}_${t.extra.color}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,e)}function B(t){return w(String(t.id),t.name)}function _(t){return w("0","All")+t.r.map(B).join("")}function D(t,n,e){e.items.sort(E).forEach(a(O,t,n))}function G(t){const s=y({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),o=L()
return n(s,o),r.sortBy="n",r.sortAsc=!0,t.r.forEach(a(D,o,e())),s}function Z(a){const e=G(a),r=t()
return n(r,e),r}const z=(t,n)=>t+String(n)
function J(t,n,a){return I({checked:0===a,id:z(t,a),name:t,type:"radio"})}function R(t,a,e,r){const s=v({className:"ui-state-default ui-corner-top"})
return n(s,S({htmlFor:z(t,r),innerHTML:e})),0!==r&&i(s,"click",(()=>{P(z(t,r),a[r])})),s}const V=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function K(e,r,o){const i=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=a(n,i)
r.map(a(J,o)).forEach(c)
const f=r.map(V)
P(z(o,0),f[0])
const d=function(t,e,r){const s=N({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(a(R,e,r)).forEach(a(n,s)),s}(r,o,f)
P(`${o}-header`,d),n(i,d),f.forEach(c),s("",e),n(e,i)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(a(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return X(t.searchname,t.nickname)}function et(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(et).map(rt).join("")}(t)}</tbody></table>`}function ot(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function it(t,n,e){const r=e.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(a(ot,t,r))}function ct(t,n,e){e.items.forEach(a(it,t,n))}function ft(n){const e={},r=c("quickSearchList")||[]
n.r.forEach(a(ct,e,r))
const s=t()
return f(s,st(e,r)),s}let dt,mt
function ut(t,n,a){0===a.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function lt(t,n,e){$("QuickWear",`doAction - ${e}`),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(a(ut,t,e))}function ht(t){lt(t,x,"Used")}function pt(t){dt?ht(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",a(ht,t))}function bt(t){lt(t,C,"Worn")}function jt(t,n,a){const e=a.dom
if("0"===t)e.classList.remove("fshHide")
else{const a=t!==n.toString()
F(e,a)}}function kt(t,n){const e=n.id
n.items.forEach(a(jt,t,e))}function $t(t){const n=t.dataset.folder
mt.r.forEach(a(kt,n))}function gt(){dt=!dt,k("disableQuickWearPrompts",dt)}function Lt(a){n(a,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,a,e){n(e,t(a))}function wt(t,n){Q("qwtab-header",Lt),Q("qwtab0",a(yt,Z,n)),Q("qwtab1",a(yt,ft,n)),K(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,H([[a(W,["smallLink","fshEq"]),bt],[a(W,["smallLink","fshUse"]),pt],[a(j,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&q(t.r)})(n)&&(mt=n,wt(t,n))}function At(t){l()&&function(t){const n=t||p
n&&(f(n,"Getting item list from backpack..."),A().then(a(Et,n)),dt=h("disableQuickWearPrompts"))}(t)}export default At
//# sourceMappingURL=quickWear-a3955f65.js.map
