import{bs as n,$ as t,S as e,t as o,B as r,h as c,i as s,ax as a,aH as i,m as u,A as d,u as m,w as l,M as p,z as f,g as h,k as b,C as N,D as g,o as C,bP as y,W as j,ca as $,Q as D}from"./calfSystem-a8d582b6.js"
import{c as T}from"./createSpan-f56cc9ef.js"
import{c as k}from"./createTBody-5ee81bbb.js"
import{c as v}from"./createTable-3028e219.js"
import{i as E}from"./insertTextBeforeEnd-fdca4ae8.js"
import{i as x}from"./isArray-e57269b2.js"
import{t as B}from"./toLowerCase-c964d32b.js"
import{a as A}from"./allthen-c5cfa8a4.js"
import{c as S}from"./chunk-d354fb99.js"
import{e as w}from"./errorDialog-48630d52.js"
import{g as L}from"./getArrayByClassName-fd115cb0.js"
import{h as Q}from"./hideElement-3be61495.js"
import"./all-8d04560c.js"
import"./dialogMsg-227939ed.js"
function O(){return n({subcmd:"loadcomponents"})}let _,q,I
function M(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function R(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function z(n){const t=k()
return function(n){_=n.r.reduce(M,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(_).reduce(R,"")}`),t}function H(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=T()
return r(t,e),e}(t)),E(e," / TODO")}function P(n,t){if(!x(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=v({className:"fshTblCenter",id:"fshTally"})
return c(t,z(n)),H(t,n),t}(t)))}function V(n){const t=u(),e=T({className:`sendLink ${B(n).replace(/ /g,"-")}`,textContent:n})
return d("[",t),c(t,e),s(t,"]"),t}function W(t){return n({subcmd:"destroycomponent",removeIndex:t})}function F(n,t){const e=l(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function G(n){return m({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(F,n))}function J(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function K(n){return A(n.map(G),J)}function U(n){return t(W,K,n)}function X(){if(!q){const n=p("inventory-table",f("profileRightColumn"))
2===n.length&&([,q]=n)}return q}function Y(n,t){return n[t.dataset.tipped.match(b)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!I){const n=h("img",X())
I=n.reduce(Y,{})}return I}()))}function tn(n){const t=X().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(N(r))
c-=n,d(c,r)}function en(n){n.s&&x(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return U(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=g(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(N(e))-1
d(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return c(n,V(t)),n}function un(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const dn=[["quick-extract-components",function(){e("components","insertQuickExtract"),j($)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
Q(t)
const o=t.parentNode
c(o,V("Delete All Visible")),h("img",X()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(D)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(b),r=e[1]
U([e[2]]).then(w).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(P,n))}],["compDelType",function(n){const t=_[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(e)
const c=S(30,t).map(rn)
A(c,o(on,e))}]]
function mn(n){const t=n.parentNode
c(t,sn.reduce(an,u({className:"fshCenter"}))),C(t,y(dn))}function ln(){const n=X()
n&&mn(n)}export default ln
//# sourceMappingURL=components-5c3bbd5d.js.map
