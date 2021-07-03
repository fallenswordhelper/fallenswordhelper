import{m as t,h as n,t as e,aK as a,c as r,B as s,aA as i,P as o,bM as c,i as d,bN as f,e as m,bm as u,j as h,I as l,p,o as b,l as j,Z as k,S as $,A as g}from"./calfSystem-db2edbef.js"
import{c as L}from"./createTBody-362e9800.js"
import{c as y}from"./createTable-4c650454.js"
import{m as w}from"./makeFolderSpan-e7682381.js"
import{a as A}from"./stringSort-9c64c0cd.js"
import{d as E}from"./daLoadInventory-aacb55de.js"
import{u as I,e as S}from"./useItem-d34e48f5.js"
import{e as x}from"./eventHandler5-9df31290.js"
import{c as C}from"./createInput-93c1d447.js"
import{c as H}from"./createLabel-213b60f2.js"
import{c as N}from"./createLi-acb237c7.js"
import{c as v}from"./createUl-32b5e5b9.js"
import{p as P,a as Q}from"./pubsub-a432416b.js"
import{h as W}from"./hasClasses-28ee19c6.js"
import{i as q}from"./isArray-fb536e29.js"
import{j as M}from"./jConfirm-864ac151.js"
import{s as U}from"./selfIdIs-3bfbb5f2.js"
import{b as T}from"./simpleCheckbox-0c10ca3c.js"
import{t as B}from"./toggleForce-41b0f4ee.js"
import"./dialog-a4dfa31d.js"
import"./dialogMsg-edbc265b.js"
import"./indexAjaxJson-acd1a794.js"
import"./daUseItem-126bd318.js"
import"./errorDialog-1238d963.js"
import"./isChecked-5c7617f4.js"
function F(t,n,e){const a=t.insertRow(-1)
e.dom=a
let r="fshEq ",o="fshUse "
e.t<9?r+="smallLink":r+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(e),s(`<td class="fshCenter"><span class="${r}" data-itemid="${e.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${e.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(e)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e.b}&amp;inv_id=${e.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${e.n}</td>`,a)}function O(t){return w(String(t.id),t.name)}function _(t){return w("0","All")+t.r.map(O).join("")}function D(t,n,a){a.items.sort(A).forEach(e(F,t,n))}function Z(t){const s=y({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),i=L()
return n(s,i),r.sortBy="n",r.sortAsc=!0,t.r.forEach(e(D,i,a())),s}function G(e){const a=Z(e),r=t()
return n(r,a),r}const J=(t,n)=>t+String(n)
function K(t,n,e){return C({checked:0===e,id:J(t,e),name:t,type:"radio"})}function R(t,e,a,r){const s=N({className:"ui-state-default ui-corner-top"})
return n(s,H({htmlFor:J(t,r),innerHTML:a})),0!==r&&o(s,"click",(()=>{P(J(t,r),e[r])})),s}const z=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function V(a,r,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=e(n,o)
r.map(e(K,i)).forEach(c)
const d=r.map(z)
P(J(i,0),d[0])
const f=function(t,a,r){const s=v({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(e(R,a,r)).forEach(e(n,s)),s}(r,i,d)
P(`${i}-header`,f),n(o,f),d.forEach(c),s("",a),n(a,o)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(e(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function et(t){return X(t.searchname,t.nickname)}function at(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${f}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(et).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${f}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(at).map(rt).join("")}(t)}</tbody></table>`}function it(t,n,e){n===e.searchname&&(e.found=!0,t[n].nicknameList.indexOf(e.nickname)<0&&t[n].nicknameList.push(e.nickname))}function ot(t,n,a){const r=a.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(e(it,t,r))}function ct(t,n,a){a.items.forEach(e(ot,t,n))}function dt(n){const a={},r=c("quickSearchList")||[]
n.r.forEach(e(ct,a,r))
const s=t()
return d(s,st(a,r)),s}let ft,mt
function ut(t,n,e){0===e.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,n,a){$("QuickWear",`doAction - ${a}`),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(e(ut,t,a))}function lt(t){ht(t,I,"Used")}function pt(t){ft?lt(t):M("Use/Extract Item","Are you sure you want to use/extract the item?",e(lt,t))}function bt(t){ht(t,S,"Worn")}function jt(t,n,e){const a=e.dom
if("0"===t)a.classList.remove("fshHide")
else{const e=t!==n.toString()
B(a,e)}}function kt(t,n){const a=n.id
n.items.forEach(e(jt,t,a))}function $t(t){const n=t.dataset.folder
mt.r.forEach(e(kt,n))}function gt(){ft=!ft,k("disableQuickWearPrompts",ft)}function Lt(e){n(e,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,e,a){n(a,t(e))}function wt(t,n){Q("qwtab-header",Lt),Q("qwtab0",e(yt,G,n)),Q("qwtab1",e(yt,dt,n)),V(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,x([[e(W,["smallLink","fshEq"]),bt],[e(W,["smallLink","fshUse"]),pt],[e(j,"fshFolder"),$t],[U("disableQuickWearPrompts"),gt]]))}function At(t,n){(function(t){return t&&t.s&&q(t.r)})(n)&&(mt=n,wt(t,n))}function Et(t){h()&&function(t){const n=t||p
n&&(d(n,"Getting item list from backpack..."),E().then(e(At,n)),ft=l("disableQuickWearPrompts"))}(t)}export default Et
//# sourceMappingURL=quickWear-8bacc953.js.map