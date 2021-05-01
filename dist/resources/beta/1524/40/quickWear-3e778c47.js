import{m as t,h as n,t as a,aE as e,c as r,B as s,av as i,Q as o,bG as c,i as f,bH as d,e as m,bh as u,j as h,I as l,p,o as b,l as j,_ as k,W as $,A as g}from"./calfSystem-ab393688.js"
import{c as L}from"./createTBody-01a827bc.js"
import{c as y}from"./createTable-fc2f2ae0.js"
import{m as w}from"./makeFolderSpan-b092137d.js"
import{a as E}from"./stringSort-cf993953.js"
import{d as A}from"./daLoadInventory-9a46c651.js"
import{u as I,e as x}from"./useItem-3d7fa70b.js"
import{e as C}from"./eventHandler5-56775d0c.js"
import{c as H}from"./createInput-c427de8f.js"
import{c as S}from"./createLabel-d7c4f0d0.js"
import{c as v}from"./createLi-c5794633.js"
import{c as N}from"./createUl-ae9ba982.js"
import{p as Q,a as W}from"./pubsub-7375cff4.js"
import{h as q}from"./hasClasses-83079c8c.js"
import{i as P}from"./isArray-4f4e9312.js"
import{j as U}from"./jConfirm-99b16cb3.js"
import{s as M}from"./selfIdIs-70806dca.js"
import{b as T}from"./simpleCheckbox-116c09bb.js"
import{t as B}from"./toggleForce-4ff42c01.js"
import"./alpha-9ef10f70.js"
import"./toLowerCase-d053e281.js"
import"./dialog-17ce66e6.js"
import"./dialogMsg-3d2031b8.js"
import"./indexAjaxJson-e927e360.js"
import"./daUseItem-6360da18.js"
import"./errorDialog-58b05366.js"
import"./isChecked-a9c3c9fe.js"
function F(t,n,a){const e=t.insertRow(-1)
a.dom=e
let r="fshEq ",o="fshUse "
a.t<9?r+="smallLink":r+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),s(`<td class="fshCenter"><span class="${r}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,e)}function O(t){return w(String(t.id),t.name)}function _(t){return w("0","All")+t.r.map(O).join("")}function D(t,n,e){e.items.sort(E).forEach(a(F,t,n))}function G(t){const s=y({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),i=L()
return n(s,i),r.sortBy="n",r.sortAsc=!0,t.r.forEach(a(D,i,e())),s}function J(a){const e=G(a),r=t()
return n(r,e),r}const R=(t,n)=>t+String(n)
function Z(t,n,a){return H({checked:0===a,id:R(t,a),name:t,type:"radio"})}function z(t,a,e,r){const s=v({className:"ui-state-default ui-corner-top"})
return n(s,S({htmlFor:R(t,r),innerHTML:e})),0!==r&&o(s,"click",(()=>{Q(R(t,r),a[r])})),s}const K=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function V(e,r,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=a(n,o)
r.map(a(Z,i)).forEach(c)
const f=r.map(K)
Q(R(i,0),f[0])
const d=function(t,e,r){const s=N({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(a(z,e,r)).forEach(a(n,s)),s}(r,i,f)
Q(`${i}-header`,d),n(o,d),f.forEach(c),s("",e),n(e,o)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(a(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return X(t.searchname,t.nickname)}function et(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(et).map(rt).join("")}(t)}</tbody></table>`}function it(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function ot(t,n,e){const r=e.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(a(it,t,r))}function ct(t,n,e){e.items.forEach(a(ot,t,n))}function ft(n){const e={},r=c("quickSearchList")||[]
n.r.forEach(a(ct,e,r))
const s=t()
return f(s,st(e,r)),s}let dt,mt
function ut(t,n,a){0===a.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,n,e){$("QuickWear",`doAction - ${e}`),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(a(ut,t,e))}function lt(t){ht(t,I,"Used")}function pt(t){dt?lt(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",a(lt,t))}function bt(t){ht(t,x,"Worn")}function jt(t,n,a){const e=a.dom
if("0"===t)e.classList.remove("fshHide")
else{const a=t!==n.toString()
B(e,a)}}function kt(t,n){const e=n.id
n.items.forEach(a(jt,t,e))}function $t(t){const n=t.dataset.folder
mt.r.forEach(a(kt,n))}function gt(){dt=!dt,k("disableQuickWearPrompts",dt)}function Lt(a){n(a,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,a,e){n(e,t(a))}function wt(t,n){W("qwtab-header",Lt),W("qwtab0",a(yt,J,n)),W("qwtab1",a(yt,ft,n)),V(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,C([[a(q,["smallLink","fshEq"]),bt],[a(q,["smallLink","fshUse"]),pt],[a(j,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&P(t.r)})(n)&&(mt=n,wt(t,n))}function At(t){h()&&function(t){const n=t||p
n&&(f(n,"Getting item list from backpack..."),A().then(a(Et,n)),dt=l("disableQuickWearPrompts"))}(t)}export default At
//# sourceMappingURL=quickWear-3e778c47.js.map