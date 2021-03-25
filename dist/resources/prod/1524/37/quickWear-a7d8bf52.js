import{m as t,h as n,t as a,av as r,c as e,B as s,ak as i,Q as o,bE as c,i as d,bF as f,e as m,b9 as u,j as h,I as l,p,o as b,l as j,_ as k,W as $,A as g}from"./calfSystem-60c20ae9.js"
import{c as L}from"./createTBody-45ccd1f1.js"
import{c as y}from"./createTable-551bbe25.js"
import{m as w}from"./makeFolderSpan-a509b620.js"
import{a as E}from"./stringSort-d44548fb.js"
import{d as A}from"./daLoadInventory-d1494929.js"
import{u as I,e as x}from"./useItem-6c0169ea.js"
import{e as C}from"./eventHandler5-c1f997bc.js"
import{c as S}from"./createInput-aabb8b6b.js"
import{c as H}from"./createLabel-12bc6589.js"
import{c as v}from"./createLi-201f1732.js"
import{c as N}from"./createUl-d26917ff.js"
import{p as Q,a as W}from"./pubsub-8675a888.js"
import{h as q}from"./hasClasses-8dce94d3.js"
import{i as P}from"./isArray-dcd15679.js"
import{j as U}from"./jConfirm-7a2de4b4.js"
import{s as M}from"./selfIdIs-1aa7dfaf.js"
import{b as T}from"./simpleCheckbox-14129290.js"
import{t as F}from"./toggleForce-465fdd4f.js"
import"./alpha-3d8909e7.js"
import"./toLowerCase-9d38da0b.js"
import"./dialog-8dd3ba22.js"
import"./dialogMsg-f2f50c63.js"
import"./indexAjaxJson-6bb34fec.js"
import"./daUseItem-45c213b7.js"
import"./errorDialog-dd9ceb95.js"
import"./isChecked-7bdba1ab.js"
function B(t,n,a){const r=t.insertRow(-1)
a.dom=r
let e="fshEq ",o="fshUse "
a.t<9?e+="smallLink":e+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),s(`<td class="fshCenter"><span class="${e}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,r)}function O(t){return w(String(t.id),t.name)}function _(t){return w("0","All")+t.r.map(O).join("")}function D(t,n,r){r.items.sort(E).forEach(a(B,t,n))}function G(t){const s=y({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),i=L()
return n(s,i),e.sortBy="n",e.sortAsc=!0,t.r.forEach(a(D,i,r())),s}function J(a){const r=G(a),e=t()
return n(e,r),e}const R=(t,n)=>t+String(n)
function Z(t,n,a){return S({checked:0===a,id:R(t,a),name:t,type:"radio"})}function z(t,a,r,e){const s=v({className:"ui-state-default ui-corner-top"})
return n(s,H({htmlFor:R(t,e),innerHTML:r})),0!==e&&o(s,"click",(()=>{Q(R(t,e),a[e])})),s}const K=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function V(r,e,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=a(n,o)
e.map(a(Z,i)).forEach(c)
const d=e.map(K)
Q(R(i,0),d[0])
const f=function(t,r,e){const s=N({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(a(z,r,e)).forEach(a(n,s)),s}(e,i,d)
Q(`${i}-header`,f),n(o,f),d.forEach(c),s("",r),n(r,o)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(a(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return X(t.searchname,t.nickname)}function rt(t){return 0===t[1].nicknameList.length}function et(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${f}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${f}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(rt).map(et).join("")}(t)}</tbody></table>`}function it(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function ot(t,n,r){const e=r.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,e),n.forEach(a(it,t,e))}function ct(t,n,r){r.items.forEach(a(ot,t,n))}function dt(n){const r={},e=c("quickSearchList")||[]
n.r.forEach(a(ct,r,e))
const s=t()
return d(s,st(r,e)),s}let ft,mt
function ut(t,n,a){0===a.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,n,r){$("QuickWear",`doAction - ${r}`),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(a(ut,t,r))}function lt(t){ht(t,I,"Used")}function pt(t){ft?lt(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",a(lt,t))}function bt(t){ht(t,x,"Worn")}function jt(t,n,a){const r=a.dom
if("0"===t)r.classList.remove("fshHide")
else{const a=t!==n.toString()
F(r,a)}}function kt(t,n){const r=n.id
n.items.forEach(a(jt,t,r))}function $t(t){const n=t.dataset.folder
mt.r.forEach(a(kt,n))}function gt(){ft=!ft,k("disableQuickWearPrompts",ft)}function Lt(a){n(a,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,a,r){n(r,t(a))}function wt(t,n){W("qwtab-header",Lt),W("qwtab0",a(yt,J,n)),W("qwtab1",a(yt,dt,n)),V(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,C([[a(q,["smallLink","fshEq"]),bt],[a(q,["smallLink","fshUse"]),pt],[a(j,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&P(t.r)})(n)&&(mt=n,wt(t,n))}function At(t){h()&&function(t){const n=t||p
n&&(d(n,"Getting item list from backpack..."),A().then(a(Et,n)),ft=l("disableQuickWearPrompts"))}(t)}export default At
//# sourceMappingURL=quickWear-a7d8bf52.js.map
