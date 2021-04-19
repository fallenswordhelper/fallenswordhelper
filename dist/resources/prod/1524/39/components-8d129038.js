import{bn as n,$ as t,W as e,t as o,B as r,h as c,i as s,at as a,aC as i,m as u,A as m,u as d,w as l,K as p,z as f,g as h,k as b,C as N,D as g,o as C,bM as y,X as j,c9 as $,R as D}from"./calfSystem-fe534823.js"
import{c as T}from"./createSpan-9895a3a7.js"
import{c as k}from"./createTBody-654f7c76.js"
import{c as v}from"./createTable-b974998c.js"
import{i as E}from"./insertTextBeforeEnd-a099c62a.js"
import{i as B}from"./isArray-f324e0ac.js"
import{t as x}from"./toLowerCase-179aa35f.js"
import{a as A}from"./allthen-b65a93f3.js"
import{c as S}from"./chunk-f573f88c.js"
import{e as w}from"./errorDialog-e19553de.js"
import{g as L}from"./getArrayByClassName-ab8b7067.js"
import{h as O}from"./hideElement-d197c06b.js"
import"./all-2b32eb82.js"
import"./dialogMsg-a960ad1e.js"
function Q(){return n({subcmd:"loadcomponents"})}let R,_,q
function I(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function M(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function z(n){const t=k()
return function(n){R=n.r.reduce(I,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(R).reduce(M,"")}`),t}function K(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=T()
return r(t,e),e}(t)),E(e," / TODO")}function V(n,t){if(!B(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=v({className:"fshTblCenter",id:"fshTally"})
return c(t,z(n)),K(t,n),t}(t)))}function W(n){const t=u(),e=T({className:`sendLink ${x(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),c(t,e),s(t,"]"),t}function X(t){return n({subcmd:"destroycomponent",removeIndex:t})}function F(n,t){const e=l(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function G(n){return d({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(F,n))}function H(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function J(n){return A(n.map(G),H)}function P(n){return t(X,J,n)}function U(){if(!_){const n=p("inventory-table",f("profileRightColumn"))
2===n.length&&([,_]=n)}return _}function Y(n,t){return n[t.dataset.tipped.match(b)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!q){const n=h("img",U())
q=n.reduce(Y,{})}return q}()))}function tn(n){const t=U().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(N(r))
c-=n,m(c,r)}function en(n){n.s&&B(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return P(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=g(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(N(e))-1
m(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return c(n,W(t)),n}function un(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const mn=[["quick-extract-components",function(){e("components","insertQuickExtract"),j($)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
O(t)
const o=t.parentNode
c(o,W("Delete All Visible")),h("img",U()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(D)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(b),r=e[1]
P([e[2]]).then(w).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(Q).then(o(V,n))}],["compDelType",function(n){const t=R[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(e)
const c=S(30,t).map(rn)
A(c,o(on,e))}]]
function dn(n){const t=n.parentNode
c(t,sn.reduce(an,u({className:"fshCenter"}))),C(t,y(mn))}function ln(){const n=U()
n&&dn(n)}export default ln
//# sourceMappingURL=components-8d129038.js.map
