import{bt as n,$ as t,S as e,t as o,B as r,h as c,i as s,ay as a,aI as i,m as d,ae as u,A as m,u as l,w as p,M as f,z as h,g as b,k as N,C as g,D as y,o as C,bR as j,W as $,cc as D,Q as T}from"./calfSystem-cbf77dd7.js"
import{c as k}from"./createSpan-14225166.js"
import{c as v}from"./createTBody-f9661356.js"
import{c as E}from"./createTable-8b9596d0.js"
import{i as B}from"./insertTextBeforeEnd-2a7d91d5.js"
import{i as x}from"./isArray-e47504c9.js"
import{a as A}from"./allthen-34d3fc07.js"
import{c as S}from"./chunk-4d4ecad3.js"
import{e as Q}from"./errorDialog-2e0e2853.js"
import{g as w}from"./getArrayByClassName-f5e2f789.js"
import{h as I}from"./hideElement-452544d4.js"
import"./all-3768003b.js"
import"./dialogMsg-16959bc2.js"
function L(){return n({subcmd:"loadcomponents"})}let O,R,_
function q(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function M(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function z(n){const t=v()
return function(n){O=n.r.reduce(q,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(O).reduce(M,"")}`),t}function V(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=k()
return r(t,e),e}(t)),B(e," / TODO")}function W(n,t){if(!x(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=E({className:"fshTblCenter",id:"fshTally"})
return c(t,z(n)),V(t,n),t}(t)))}function F(n){const t=d(),e=k({className:`sendLink ${u(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),c(t,e),s(t,"]"),t}function G(t){return n({subcmd:"destroycomponent",removeIndex:t})}function H(n,t){const e=p(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function J(n){return l({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(H,n))}function K(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function P(n){return A(n.map(J),K)}function U(n){return t(G,P,n)}function X(){if(!R){const n=f("inventory-table",h("profileRightColumn"))
2===n.length&&([,R]=n)}return R}function Y(n,t){return n[t.dataset.tipped.match(N)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!_){const n=b("img",X())
_=n.reduce(Y,{})}return _}()))}function tn(n){const t=X().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(g(r))
c-=n,m(c,r)}function en(n){n.s&&x(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return U(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=y(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(g(e))-1
m(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return c(n,F(t)),n}function dn(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const un=[["quick-extract-components",function(){e("components","insertQuickExtract"),$(D)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
I(t)
const o=t.parentNode
c(o,F("Delete All Visible")),b("img",X()).forEach(dn)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
w("compDelBtn",t).forEach(T)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(N),r=e[1]
U([e[2]]).then(Q).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(L).then(o(W,n))}],["compDelType",function(n){const t=O[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(e)
const c=S(30,t).map(rn)
A(c,o(on,e))}]]
function mn(n){const t=n.parentNode
c(t,sn.reduce(an,d({className:"fshCenter"}))),C(t,j(un))}function ln(){const n=X()
n&&mn(n)}export default ln
//# sourceMappingURL=components-b548c5ac.js.map
