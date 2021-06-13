import{m as t,h as n,t as e,aG as r,c as a,B as s,aw as i,P as o,bI as c,i as d,bJ as f,e as m,bj as u,j as h,I as l,p,o as b,l as j,Z as k,S as $,A as g}from"./calfSystem-7991d843.js"
import{c as L}from"./createTBody-e75ce5bc.js"
import{c as y}from"./createTable-2a310c28.js"
import{m as w}from"./makeFolderSpan-f07e48c9.js"
import{a as E}from"./stringSort-6b18b0ab.js"
import{d as I}from"./daLoadInventory-f3c3257c.js"
import{u as A,e as S}from"./useItem-d17d0e54.js"
import{e as x}from"./eventHandler5-3de99d0b.js"
import{c as C}from"./createInput-e6426c85.js"
import{c as H}from"./createLabel-3f94634a.js"
import{c as N}from"./createLi-36d441f8.js"
import{c as v}from"./createUl-21e973ea.js"
import{p as P,a as Q}from"./pubsub-4df0d771.js"
import{h as W}from"./hasClasses-db187de4.js"
import{i as q}from"./isArray-e47504c9.js"
import{j as U}from"./jConfirm-3bbeb29a.js"
import{s as M}from"./selfIdIs-2c5f6b25.js"
import{b as T}from"./simpleCheckbox-e5b19e25.js"
import{t as B}from"./toggleForce-70762365.js"
import"./dialog-16fed349.js"
import"./dialogMsg-16959bc2.js"
import"./indexAjaxJson-2cb21664.js"
import"./daUseItem-1efe0355.js"
import"./errorDialog-2e0e2853.js"
import"./isChecked-e1880947.js"
function F(t,n,e){const r=t.insertRow(-1)
e.dom=r
let a="fshEq ",o="fshUse "
e.t<9?a+="smallLink":a+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(e),s(`<td class="fshCenter"><span class="${a}" data-itemid="${e.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${e.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(e)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e.b}&amp;inv_id=${e.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${e.n}</td>`,r)}function O(t){return w(String(t.id),t.name)}function _(t){return w("0","All")+t.r.map(O).join("")}function D(t,n,r){r.items.sort(E).forEach(e(F,t,n))}function G(t){const s=y({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),i=L()
return n(s,i),a.sortBy="n",a.sortAsc=!0,t.r.forEach(e(D,i,r())),s}function J(e){const r=G(e),a=t()
return n(a,r),a}const Z=(t,n)=>t+String(n)
function R(t,n,e){return C({checked:0===e,id:Z(t,e),name:t,type:"radio"})}function z(t,e,r,a){const s=N({className:"ui-state-default ui-corner-top"})
return n(s,H({htmlFor:Z(t,a),innerHTML:r})),0!==a&&o(s,"click",(()=>{P(Z(t,a),e[a])})),s}const K=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function V(r,a,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=e(n,o)
a.map(e(R,i)).forEach(c)
const d=a.map(K)
P(Z(i,0),d[0])
const f=function(t,r,a){const s=v({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(e(z,r,a)).forEach(e(n,s)),s}(a,i,d)
P(`${i}-header`,f),n(o,f),d.forEach(c),s("",r),n(r,o)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(e(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function et(t){return X(t.searchname,t.nickname)}function rt(t){return 0===t[1].nicknameList.length}function at(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${f}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(et).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${f}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(rt).map(at).join("")}(t)}</tbody></table>`}function it(t,n,e){n===e.searchname&&(e.found=!0,t[n].nicknameList.indexOf(e.nickname)<0&&t[n].nicknameList.push(e.nickname))}function ot(t,n,r){const a=r.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,a),n.forEach(e(it,t,a))}function ct(t,n,r){r.items.forEach(e(ot,t,n))}function dt(n){const r={},a=c("quickSearchList")||[]
n.r.forEach(e(ct,r,a))
const s=t()
return d(s,st(r,a)),s}let ft,mt
function ut(t,n,e){0===e.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,n,r){$("QuickWear",`doAction - ${r}`),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(e(ut,t,r))}function lt(t){ht(t,A,"Used")}function pt(t){ft?lt(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",e(lt,t))}function bt(t){ht(t,S,"Worn")}function jt(t,n,e){const r=e.dom
if("0"===t)r.classList.remove("fshHide")
else{const e=t!==n.toString()
B(r,e)}}function kt(t,n){const r=n.id
n.items.forEach(e(jt,t,r))}function $t(t){const n=t.dataset.folder
mt.r.forEach(e(kt,n))}function gt(){ft=!ft,k("disableQuickWearPrompts",ft)}function Lt(e){n(e,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,e,r){n(r,t(e))}function wt(t,n){Q("qwtab-header",Lt),Q("qwtab0",e(yt,J,n)),Q("qwtab1",e(yt,dt,n)),V(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,x([[e(W,["smallLink","fshEq"]),bt],[e(W,["smallLink","fshUse"]),pt],[e(j,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&q(t.r)})(n)&&(mt=n,wt(t,n))}function It(t){h()&&function(t){const n=t||p
n&&(d(n,"Getting item list from backpack..."),I().then(e(Et,n)),ft=l("disableQuickWearPrompts"))}(t)}export default It
//# sourceMappingURL=quickWear-6d0e9bd4.js.map
