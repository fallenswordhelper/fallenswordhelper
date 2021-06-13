import{m as t,h as n,t as e,aJ as a,c as r,B as s,az as i,P as o,bM as c,i as f,bN as d,e as m,bn as u,j as h,I as l,Q as p,p as b,o as k,l as j,_ as $,T as g,A as L}from"./calfSystem-6a3c85e0.js"
import{c as y}from"./createTBody-55670960.js"
import{c as w}from"./createTable-e4a467a3.js"
import{m as E}from"./makeFolderSpan-6b78b283.js"
import{a as I}from"./stringSort-31ef37de.js"
import{d as x}from"./daLoadInventory-50bb82ee.js"
import{u as A,e as S}from"./useItem-40f33c0d.js"
import{e as C}from"./eventHandler5-1c980055.js"
import{c as H}from"./createInput-9bf3eee1.js"
import{c as N}from"./createLabel-c7919725.js"
import{c as v}from"./createLi-85fedf56.js"
import{c as Q}from"./createUl-5382febe.js"
import{p as P,a as W}from"./pubsub-dbf16b11.js"
import{h as q}from"./hasClasses-3e442ec1.js"
import{j as M}from"./jConfirm-53e724e5.js"
import{s as T}from"./selfIdIs-b2865a8a.js"
import{b as U}from"./simpleCheckbox-9a762acc.js"
import{t as B}from"./toggleForce-537064ea.js"
import"./dialog-25c9de65.js"
import"./dialogMsg-f24b55b1.js"
import"./indexAjaxJson-c7dd57d3.js"
import"./daUseItem-d30513f8.js"
import"./errorDialog-0a862506.js"
import"./isChecked-1aa3d1a2.js"
function F(t,n,e){const a=t.insertRow(-1)
e.dom=a
let r="fshEq ",o="fshUse "
e.t<9?r+="smallLink":r+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(e),s(`<td class="fshCenter"><span class="${r}" data-itemid="${e.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${e.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(e)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e.b}&amp;inv_id=${e.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${e.n}</td>`,a)}function O(t){return E(String(t.id),t.name)}function _(t){return E("0","All")+t.r.map(O).join("")}function D(t,n,a){a.items.sort(I).forEach(e(F,t,n))}function J(t){const s=w({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),i=y()
return n(s,i),r.sortBy="n",r.sortAsc=!0,t.r.forEach(e(D,i,a())),s}function z(e){const a=J(e),r=t()
return n(r,a),r}const G=(t,n)=>t+String(n)
function R(t,n,e){return H({checked:0===e,id:G(t,e),name:t,type:"radio"})}function Z(t,e,a,r){const s=v({className:"ui-state-default ui-corner-top"})
return n(s,N({htmlFor:G(t,r),innerHTML:a})),0!==r&&o(s,"click",(()=>{P(G(t,r),e[r])})),s}const K=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function V(a,r,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=e(n,o)
r.map(e(R,i)).forEach(c)
const f=r.map(K)
P(G(i,0),f[0])
const d=function(t,a,r){const s=Q({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(e(Z,a,r)).forEach(e(n,s)),s}(r,i,f)
P(`${i}-header`,d),n(o,d),f.forEach(c),s("",a),n(a,o)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(e(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function et(t){return X(t.searchname,t.nickname)}function at(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(et).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(at).map(rt).join("")}(t)}</tbody></table>`}function it(t,n,e){n===e.searchname&&(e.found=!0,t[n].nicknameList.indexOf(e.nickname)<0&&t[n].nicknameList.push(e.nickname))}function ot(t,n,a){const r=a.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(e(it,t,r))}function ct(t,n,a){a.items.forEach(e(ot,t,n))}function ft(n){const a={},r=c("quickSearchList")||[]
n.r.forEach(e(ct,a,r))
const s=t()
return f(s,st(a,r)),s}let dt,mt
function ut(t,n,e){0===e.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,n,a){g("QuickWear",`doAction - ${a}`),L("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(e(ut,t,a))}function lt(t){ht(t,A,"Used")}function pt(t){dt?lt(t):M("Use/Extract Item","Are you sure you want to use/extract the item?",e(lt,t))}function bt(t){ht(t,S,"Worn")}function kt(t,n,e){const a=e.dom
if("0"===t)a.classList.remove("fshHide")
else{const e=t!==n.toString()
B(a,e)}}function jt(t,n){const a=n.id
n.items.forEach(e(kt,t,a))}function $t(t){const n=t.dataset.folder
mt.r.forEach(e(jt,n))}function gt(){dt=!dt,$("disableQuickWearPrompts",dt)}function Lt(e){n(e,t({className:"qwPref",innerHTML:U("disableQuickWearPrompts")}))}function yt(t,e,a){n(a,t(e))}function wt(t,n){W("qwtab-header",Lt),W("qwtab0",e(yt,z,n)),W("qwtab1",e(yt,ft,n)),V(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),k(t,C([[e(q,["smallLink","fshEq"]),bt],[e(q,["smallLink","fshUse"]),pt],[e(j,"fshFolder"),$t],[T("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&p(t.r)})(n)&&(mt=n,wt(t,n))}function It(t){h()&&function(t){const n=t||b
n&&(f(n,"Getting item list from backpack..."),x().then(e(Et,n)),dt=l("disableQuickWearPrompts"))}(t)}export default It
//# sourceMappingURL=quickWear-1417e737.js.map
