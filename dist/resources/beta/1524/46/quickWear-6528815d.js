import{m as t,h as n,t as e,aI as a,c as r,B as s,ay as i,P as o,bL as c,i as f,bM as d,e as m,bl as u,j as l,I as h,p,o as b,l as j,Z as k,S as $,A as g}from"./calfSystem-cbf77dd7.js"
import{c as L}from"./createTBody-f9661356.js"
import{c as y}from"./createTable-8b9596d0.js"
import{m as w}from"./makeFolderSpan-f07e48c9.js"
import{a as E}from"./stringSort-ff11b8c2.js"
import{d as I}from"./daLoadInventory-357283d7.js"
import{u as A,e as S}from"./useItem-8923ece9.js"
import{e as x}from"./eventHandler5-ef6565de.js"
import{c as C}from"./createInput-64e90ab9.js"
import{c as H}from"./createLabel-b5f69c1e.js"
import{c as N}from"./createLi-27a476bf.js"
import{c as v}from"./createUl-25ea51fb.js"
import{p as P,a as Q}from"./pubsub-9a562591.js"
import{h as W}from"./hasClasses-418bf717.js"
import{i as q}from"./isArray-e47504c9.js"
import{j as M}from"./jConfirm-55e22f63.js"
import{s as U}from"./selfIdIs-dbeabb41.js"
import{b as T}from"./simpleCheckbox-27261aa3.js"
import{t as B}from"./toggleForce-70762365.js"
import"./dialog-16fed349.js"
import"./dialogMsg-16959bc2.js"
import"./indexAjaxJson-167a69fe.js"
import"./daUseItem-8440dbe6.js"
import"./errorDialog-2e0e2853.js"
import"./isChecked-e1880947.js"
function F(t,n,e){const a=t.insertRow(-1)
e.dom=a
let r="fshEq ",o="fshUse "
e.t<9?r+="smallLink":r+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(e),s(`<td class="fshCenter"><span class="${r}" data-itemid="${e.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${e.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(e)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e.b}&amp;inv_id=${e.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${e.n}</td>`,a)}function O(t){return w(String(t.id),t.name)}function _(t){return w("0","All")+t.r.map(O).join("")}function D(t,n,a){a.items.sort(E).forEach(e(F,t,n))}function Z(t){const s=y({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),i=L()
return n(s,i),r.sortBy="n",r.sortAsc=!0,t.r.forEach(e(D,i,a())),s}function G(e){const a=Z(e),r=t()
return n(r,a),r}const J=(t,n)=>t+String(n)
function R(t,n,e){return C({checked:0===e,id:J(t,e),name:t,type:"radio"})}function z(t,e,a,r){const s=N({className:"ui-state-default ui-corner-top"})
return n(s,H({htmlFor:J(t,r),innerHTML:a})),0!==r&&o(s,"click",(()=>{P(J(t,r),e[r])})),s}const K=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function V(a,r,i){const o=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=e(n,o)
r.map(e(R,i)).forEach(c)
const f=r.map(K)
P(J(i,0),f[0])
const d=function(t,a,r){const s=v({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(e(z,a,r)).forEach(e(n,s)),s}(r,i,f)
P(`${i}-header`,d),n(o,d),f.forEach(c),s("",a),n(a,o)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(e(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function et(t){return X(t.searchname,t.nickname)}function at(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(et).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(at).map(rt).join("")}(t)}</tbody></table>`}function it(t,n,e){n===e.searchname&&(e.found=!0,t[n].nicknameList.indexOf(e.nickname)<0&&t[n].nicknameList.push(e.nickname))}function ot(t,n,a){const r=a.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(e(it,t,r))}function ct(t,n,a){a.items.forEach(e(ot,t,n))}function ft(n){const a={},r=c("quickSearchList")||[]
n.r.forEach(e(ct,a,r))
const s=t()
return f(s,st(a,r)),s}let dt,mt
function ut(t,n,e){0===e.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function lt(t,n,a){$("QuickWear",`doAction - ${a}`),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(e(ut,t,a))}function ht(t){lt(t,A,"Used")}function pt(t){dt?ht(t):M("Use/Extract Item","Are you sure you want to use/extract the item?",e(ht,t))}function bt(t){lt(t,S,"Worn")}function jt(t,n,e){const a=e.dom
if("0"===t)a.classList.remove("fshHide")
else{const e=t!==n.toString()
B(a,e)}}function kt(t,n){const a=n.id
n.items.forEach(e(jt,t,a))}function $t(t){const n=t.dataset.folder
mt.r.forEach(e(kt,n))}function gt(){dt=!dt,k("disableQuickWearPrompts",dt)}function Lt(e){n(e,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,e,a){n(a,t(e))}function wt(t,n){Q("qwtab-header",Lt),Q("qwtab0",e(yt,G,n)),Q("qwtab1",e(yt,ft,n)),V(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,x([[e(W,["smallLink","fshEq"]),bt],[e(W,["smallLink","fshUse"]),pt],[e(j,"fshFolder"),$t],[U("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&q(t.r)})(n)&&(mt=n,wt(t,n))}function It(t){l()&&function(t){const n=t||p
n&&(f(n,"Getting item list from backpack..."),I().then(e(Et,n)),dt=h("disableQuickWearPrompts"))}(t)}export default It
//# sourceMappingURL=quickWear-6528815d.js.map
