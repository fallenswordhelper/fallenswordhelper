import{m as t,h as n,t as a,ay as e,c as r,B as s,an as o,Q as i,bI as c,i as d,bJ as f,e as m,bc as u,j as h,I as l,R as p,p as b,o as j,l as k,a0 as $,X as g,A as L}from"./calfSystem-eeb1d862.js"
import{c as y}from"./createTBody-6a9d523a.js"
import{c as w}from"./createTable-6575caa9.js"
import{m as E}from"./makeFolderSpan-7699e2dd.js"
import{a as I}from"./stringSort-b2f65eeb.js"
import{d as x}from"./daLoadInventory-dd21a50f.js"
import{u as A,e as C}from"./useItem-1692c1c2.js"
import{e as S}from"./eventHandler5-2b58fcfe.js"
import{c as H}from"./createInput-c963dc21.js"
import{c as N}from"./createLabel-7969394e.js"
import{c as v}from"./createLi-f6e99087.js"
import{c as Q}from"./createUl-b4c1441e.js"
import{p as W,a as q}from"./pubsub-96585994.js"
import{h as P}from"./hasClasses-11851d22.js"
import{j as U}from"./jConfirm-c31eceb8.js"
import{s as M}from"./selfIdIs-12760c69.js"
import{b as T}from"./simpleCheckbox-91ea73d5.js"
import{t as B}from"./toggleForce-a73479b0.js"
import"./alpha-a79afe3b.js"
import"./toLowerCase-fa335220.js"
import"./dialog-92c3ed6b.js"
import"./dialogMsg-716cf657.js"
import"./indexAjaxJson-2deb257d.js"
import"./daUseItem-44d35487.js"
import"./errorDialog-db13a69a.js"
import"./isChecked-d75e63a5.js"
function F(t,n,a){const e=t.insertRow(-1)
a.dom=e
let r="fshEq ",i="fshUse "
a.t<9?r+="smallLink":r+="notLink",i+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),s(`<td class="fshCenter"><span class="${r}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${i}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=o
return 13699===t.b?n+=`composing/${t.x.d}_${t.x.c}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,e)}function O(t){return E(String(t.id),t.name)}function _(t){return E("0","All")+t.r.map(O).join("")}function D(t,n,e){e.items.sort(I).forEach(a(F,t,n))}function J(t){const s=w({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${_(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),o=y()
return n(s,o),r.sortBy="n",r.sortAsc=!0,t.r.forEach(a(D,o,e())),s}function R(a){const e=J(a),r=t()
return n(r,e),r}const G=(t,n)=>t+String(n)
function X(t,n,a){return H({checked:0===a,id:G(t,a),name:t,type:"radio"})}function Z(t,a,e,r){const s=v({className:"ui-state-default ui-corner-top"})
return n(s,N({htmlFor:G(t,r),innerHTML:e})),0!==r&&i(s,"click",(()=>{W(G(t,r),a[r])})),s}const z=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function K(e,r,o){const i=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=a(n,i)
r.map(a(X,o)).forEach(c)
const d=r.map(z)
W(G(o,0),d[0])
const f=function(t,e,r){const s=Q({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(a(Z,e,r)).forEach(a(n,s)),s}(r,o,d)
W(`${o}-header`,f),n(i,f),d.forEach(c),s("",e),n(e,i)}function V(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(a(V,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return V(t.searchname,t.nickname)}function et(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${f}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${f}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(et).map(rt).join("")}(t)}</tbody></table>`}function ot(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function it(t,n,e){const r=e.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(a(ot,t,r))}function ct(t,n,e){e.items.forEach(a(it,t,n))}function dt(n){const e={},r=c("quickSearchList")||[]
n.r.forEach(a(ct,e,r))
const s=t()
return d(s,st(e,r)),s}let ft,mt
function ut(t,n,a){0===a.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function ht(t,n,e){g("QuickWear",`doAction - ${e}`),L("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(a(ut,t,e))}function lt(t){ht(t,A,"Used")}function pt(t){ft?lt(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",a(lt,t))}function bt(t){ht(t,C,"Worn")}function jt(t,n,a){const e=a.dom
if("0"===t)e.classList.remove("fshHide")
else{const a=t!==n.toString()
B(e,a)}}function kt(t,n){const e=n.id
n.items.forEach(a(jt,t,e))}function $t(t){const n=t.dataset.folder
mt.r.forEach(a(kt,n))}function gt(){ft=!ft,$("disableQuickWearPrompts",ft)}function Lt(a){n(a,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,a,e){n(e,t(a))}function wt(t,n){q("qwtab-header",Lt),q("qwtab0",a(yt,R,n)),q("qwtab1",a(yt,dt,n)),K(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),j(t,S([[a(P,["smallLink","fshEq"]),bt],[a(P,["smallLink","fshUse"]),pt],[a(k,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&p(t.r)})(n)&&(mt=n,wt(t,n))}function It(t){h()&&function(t){const n=t||b
n&&(d(n,"Getting item list from backpack..."),x().then(a(Et,n)),ft=l("disableQuickWearPrompts"))}(t)}export default It
//# sourceMappingURL=quickWear-87e04068.js.map
