import{m as t,h as n,t as e,av as a,c as r,A as s,ak as o,P as i,bF as c,i as f,bG as d,e as m,ba as u,j as l,H as h,p,o as b,l as j,Z as k,V as $,z as g}from"./calfSystem-c91a5c89.js"
import{c as L}from"./createTBody-35153757.js"
import{c as y}from"./createTable-443d89cd.js"
import{m as w}from"./makeFolderSpan-b480081f.js"
import{a as E}from"./stringSort-f5226b74.js"
import{d as A}from"./daLoadInventory-fe55ce10.js"
import{u as x,e as C}from"./useItem-46b50a05.js"
import{e as H}from"./eventHandler5-85cb7214.js"
import{c as I}from"./createInput-a2c87173.js"
import{c as S}from"./createLabel-fec7fd21.js"
import{c as v}from"./createLi-d3fe747f.js"
import{c as N}from"./createUl-64bfcfb0.js"
import{p as P,a as Q}from"./pubsub-cee1f4f0.js"
import{h as W}from"./hasClasses-517577fc.js"
import{i as q}from"./isArray-91e28808.js"
import{j as U}from"./jConfirm-c05e8e6a.js"
import{s as M}from"./selfIdIs-9b30ab28.js"
import{b as T}from"./simpleCheckbox-f69d12f9.js"
import{t as F}from"./toggleForce-6831dfcc.js"
import"./alpha-187fa6c5.js"
import"./toLowerCase-abb30c3b.js"
import"./dialog-fd1181f5.js"
import"./dialogMsg-fcad563e.js"
import"./indexAjaxJson-6b76870e.js"
import"./daUseItem-ce6006de.js"
import"./errorDialog-998604da.js"
import"./isChecked-622b73bf.js"
function O(t,n,e){const a=t.insertRow(-1)
e.dom=a
let r="fshEq ",i="fshUse "
e.t<9?r+="smallLink":r+="notLink",i+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(e),s(`<td class="fshCenter"><span class="${r}" data-itemid="${e.a}">Wear</span>&nbsp;|&nbsp;<span class="${i}" data-itemid="${e.a}">Use/Ext</span></td><td><img src="${function(t){let n=o
return 13699===t.b?n+=`composing/${t.extra.design}_${t.extra.color}.png`:n+=`items/${t.b}.gif`,n}(e)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e.b}&amp;inv_id=${e.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${e.n}</td>`,a)}function B(t){return w(String(t.id),t.name)}function _(t){return w("0","All")+t.r.map(B).join("")}function D(t,n,a){a.items.sort(E).forEach(e(O,t,n))}function G(t){const s=y({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),o=L()
return n(s,o),r.sortBy="n",r.sortAsc=!0,t.r.forEach(e(D,o,a())),s}function Z(e){const a=G(e),r=t()
return n(r,a),r}const z=(t,n)=>t+String(n)
function J(t,n,e){return I({checked:0===e,id:z(t,e),name:t,type:"radio"})}function R(t,e,a,r){const s=v({className:"ui-state-default ui-corner-top"})
return n(s,S({htmlFor:z(t,r),innerHTML:a})),0!==r&&i(s,"click",(()=>{P(z(t,r),e[r])})),s}const V=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function K(a,r,o){const i=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=e(n,i)
r.map(e(J,o)).forEach(c)
const f=r.map(V)
P(z(o,0),f[0])
const d=function(t,a,r){const s=N({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(e(R,a,r)).forEach(e(n,s)),s}(r,o,f)
P(`${o}-header`,d),n(i,d),f.forEach(c),s("",a),n(a,i)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(e(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function et(t){return X(t.searchname,t.nickname)}function at(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(et).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(at).map(rt).join("")}(t)}</tbody></table>`}function ot(t,n,e){n===e.searchname&&(e.found=!0,t[n].nicknameList.indexOf(e.nickname)<0&&t[n].nicknameList.push(e.nickname))}function it(t,n,a){const r=a.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(e(ot,t,r))}function ct(t,n,a){a.items.forEach(e(it,t,n))}function ft(n){const a={},r=c("quickSearchList")||[]
n.r.forEach(e(ct,a,r))
const s=t()
return f(s,st(a,r)),s}let dt,mt
function ut(t,n,e){0===e.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function lt(t,n,a){$("QuickWear",`doAction - ${a}`),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(e(ut,t,a))}function ht(t){lt(t,x,"Used")}function pt(t){dt?ht(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",e(ht,t))}function bt(t){lt(t,C,"Worn")}function jt(t,n,e){const a=e.dom
if("0"===t)a.classList.remove("fshHide")
else{const e=t!==n.toString()
F(a,e)}}function kt(t,n){const a=n.id
n.items.forEach(e(jt,t,a))}function $t(t){const n=t.dataset.folder
mt.r.forEach(e(kt,n))}function gt(){dt=!dt,k("disableQuickWearPrompts",dt)}function Lt(e){n(e,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,e,a){n(a,t(e))}function wt(t,n){Q("qwtab-header",Lt),Q("qwtab0",e(yt,Z,n)),Q("qwtab1",e(yt,ft,n)),K(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,H([[e(W,["smallLink","fshEq"]),bt],[e(W,["smallLink","fshUse"]),pt],[e(j,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&q(t.r)})(n)&&(mt=n,wt(t,n))}function At(t){l()&&function(t){const n=t||p
n&&(f(n,"Getting item list from backpack..."),A().then(e(Et,n)),dt=h("disableQuickWearPrompts"))}(t)}export default At
//# sourceMappingURL=quickWear-ede4e8eb.js.map
