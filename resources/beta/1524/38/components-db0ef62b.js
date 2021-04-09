import{bp as n,$ as t,W as e,t as o,B as r,h as c,i as s,am as a,ax as i,m as d,A as u,u as m,w as p,K as l,z as f,g as h,k as b,C as N,D as g,o as C,bP as y,X as j,cb as $,R as D}from"./calfSystem-71efcdd9.js"
import{c as T}from"./createSpan-cad7f112.js"
import{c as k}from"./createTBody-f6c1c6de.js"
import{c as v}from"./createTable-86c6176d.js"
import{i as E}from"./insertTextBeforeEnd-4cca731a.js"
import{i as x}from"./isArray-6eab9c89.js"
import{t as B}from"./toLowerCase-b0c4634d.js"
import{a as A}from"./allthen-8480e63e.js"
import{c as S}from"./chunk-f19f9471.js"
import{e as w}from"./errorDialog-f60f17b2.js"
import{g as L}from"./getArrayByClassName-0e4564de.js"
import{h as O}from"./hideElement-9b8f5190.js"
import"./all-edb79f43.js"
import"./dialogMsg-a0c49d9a.js"
function Q(){return n({subcmd:"loadcomponents"})}let R,_,q
function I(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function z(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function K(n){const t=k()
return function(n){R=n.r.reduce(I,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(R).reduce(z,"")}`),t}function M(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=T()
return r(t,e),e}(t)),E(e," / TODO")}function P(n,t){if(!x(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=v({className:"fshTblCenter",id:"fshTally"})
return c(t,K(n)),M(t,n),t}(t)))}function V(n){const t=d(),e=T({className:`sendLink ${B(n).replace(/ /g,"-")}`,textContent:n})
return u("[",t),c(t,e),s(t,"]"),t}function W(t){return n({subcmd:"destroycomponent",removeIndex:t})}function X(n,t){const e=p(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function F(n){return m({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(X,n))}function G(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function H(n){return A(n.map(F),G)}function J(n){return t(W,H,n)}function U(){if(!_){const n=l("inventory-table",f("profileRightColumn"))
2===n.length&&([,_]=n)}return _}function Y(n,t){return n[t.dataset.tipped.match(b)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!q){const n=h("img",U())
q=n.reduce(Y,{})}return q}()))}function tn(n){const t=U().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(N(r))
c-=n,u(c,r)}function en(n){n.s&&x(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return J(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=g(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(N(e))-1
u(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return c(n,V(t)),n}function dn(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const un=[["quick-extract-components",function(){e("components","insertQuickExtract"),j($)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
O(t)
const o=t.parentNode
c(o,V("Delete All Visible")),h("img",U()).forEach(dn)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(D)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(b),r=e[1]
J([e[2]]).then(w).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(Q).then(o(P,n))}],["compDelType",function(n){const t=R[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(e)
const c=S(30,t).map(rn)
A(c,o(on,e))}]]
function mn(n){const t=n.parentNode
c(t,sn.reduce(an,d({className:"fshCenter"}))),C(t,y(un))}function pn(){const n=U()
n&&mn(n)}export default pn
//# sourceMappingURL=components-db0ef62b.js.map
