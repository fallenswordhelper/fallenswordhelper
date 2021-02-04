import{m as t,h as n,t as a,aw as e,c as r,A as s,al as o,P as i,bG as c,i as f,bH as d,e as m,bb as u,j as l,H as h,Q as p,p as b,o as j,l as k,_ as $,W as g,z as L}from"./calfSystem-37f70deb.js"
import{c as y}from"./createTBody-e4d0123c.js"
import{c as w}from"./createTable-16e51d18.js"
import{m as E}from"./makeFolderSpan-b480081f.js"
import{a as H}from"./stringSort-19c5e617.js"
import{d as x}from"./daLoadInventory-dc026e88.js"
import{u as A,e as C}from"./useItem-9bbc3b4b.js"
import{e as I}from"./eventHandler5-fbb70c55.js"
import{c as S}from"./createInput-ef7d744f.js"
import{c as N}from"./createLabel-03f0c770.js"
import{c as v}from"./createLi-b464541b.js"
import{c as Q}from"./createUl-961da871.js"
import{p as W,a as P}from"./pubsub-2fda279a.js"
import{h as q}from"./hasClasses-e21c6f4b.js"
import{j as U}from"./jConfirm-a69694e1.js"
import{s as M}from"./selfIdIs-392f9b4d.js"
import{b as T}from"./simpleCheckbox-329b4550.js"
import{t as F}from"./toggleForce-6831dfcc.js"
import"./alpha-187fa6c5.js"
import"./toLowerCase-abb30c3b.js"
import"./dialog-fd1181f5.js"
import"./dialogMsg-fcad563e.js"
import"./indexAjaxJson-82f32240.js"
import"./daUseItem-ad5be037.js"
import"./errorDialog-998604da.js"
import"./isChecked-622b73bf.js"
function O(t,n,a){const e=t.insertRow(-1)
a.dom=e
let r="fshEq ",i="fshUse "
a.t<9?r+="smallLink":r+="notLink",i+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(a),s(`<td class="fshCenter"><span class="${r}" data-itemid="${a.a}">Wear</span>&nbsp;|&nbsp;<span class="${i}" data-itemid="${a.a}">Use/Ext</span></td><td><img src="${function(t){let n=o
return 13699===t.b?n+=`composing/${t.extra.design}_${t.extra.color}.png`:n+=`items/${t.b}.gif`,n}(a)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${a.b}&amp;inv_id=${a.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${a.n}</td>`,e)}function _(t){return E(String(t.id),t.name)}function B(t){return E("0","All")+t.r.map(_).join("")}function D(t,n,e){e.items.sort(H).forEach(a(O,t,n))}function G(t){const s=w({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${B(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),o=y()
return n(s,o),r.sortBy="n",r.sortAsc=!0,t.r.forEach(a(D,o,e())),s}function z(a){const e=G(a),r=t()
return n(r,e),r}const J=(t,n)=>t+String(n)
function R(t,n,a){return S({checked:0===a,id:J(t,a),name:t,type:"radio"})}function Z(t,a,e,r){const s=v({className:"ui-state-default ui-corner-top"})
return n(s,N({htmlFor:J(t,r),innerHTML:e})),0!==r&&i(s,"click",(()=>{W(J(t,r),a[r])})),s}const K=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function V(e,r,o){const i=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=a(n,i)
r.map(a(R,o)).forEach(c)
const f=r.map(K)
W(J(o,0),f[0])
const d=function(t,e,r){const s=Q({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(a(Z,e,r)).forEach(a(n,s)),s}(r,o,f)
W(`${o}-header`,d),n(i,d),f.forEach(c),s("",e),n(e,i)}function X(t,n){return`<a href="${u}${t}">${n}</a>`}function Y(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(a(X,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function at(t){return X(t.searchname,t.nickname)}function et(t){return 0===t[1].nicknameList.length}function rt(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(Y).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(at).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(et).map(rt).join("")}(t)}</tbody></table>`}function ot(t,n,a){n===a.searchname&&(a.found=!0,t[n].nicknameList.indexOf(a.nickname)<0&&t[n].nicknameList.push(a.nickname))}function it(t,n,e){const r=e.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,r),n.forEach(a(ot,t,r))}function ct(t,n,e){e.items.forEach(a(it,t,n))}function ft(n){const e={},r=c("quickSearchList")||[]
n.r.forEach(a(ct,e,r))
const s=t()
return f(s,st(e,r)),s}let dt,mt
function ut(t,n,a){0===a.r&&s(`<span class="fastWorn">${n}</span>`,t.parentNode)}function lt(t,n,e){g("QuickWear",`doAction - ${e}`),L("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),n(t.dataset.itemid).then(a(ut,t,e))}function ht(t){lt(t,A,"Used")}function pt(t){dt?ht(t):U("Use/Extract Item","Are you sure you want to use/extract the item?",a(ht,t))}function bt(t){lt(t,C,"Worn")}function jt(t,n,a){const e=a.dom
if("0"===t)e.classList.remove("fshHide")
else{const a=t!==n.toString()
F(e,a)}}function kt(t,n){const e=n.id
n.items.forEach(a(jt,t,e))}function $t(t){const n=t.dataset.folder
mt.r.forEach(a(kt,n))}function gt(){dt=!dt,$("disableQuickWearPrompts",dt)}function Lt(a){n(a,t({className:"qwPref",innerHTML:T("disableQuickWearPrompts")}))}function yt(t,a,e){n(e,t(a))}function wt(t,n){P("qwtab-header",Lt),P("qwtab0",a(yt,z,n)),P("qwtab1",a(yt,ft,n)),V(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),j(t,I([[a(q,["smallLink","fshEq"]),bt],[a(q,["smallLink","fshUse"]),pt],[a(k,"fshFolder"),$t],[M("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&p(t.r)})(n)&&(mt=n,wt(t,n))}function Ht(t){l()&&function(t){const n=t||b
n&&(f(n,"Getting item list from backpack..."),x().then(a(Et,n)),dt=h("disableQuickWearPrompts"))}(t)}export default Ht
//# sourceMappingURL=quickWear-a4d0e6de.js.map
