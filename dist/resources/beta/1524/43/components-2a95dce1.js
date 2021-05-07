import{bq as n,$ as t,T as e,t as o,B as r,h as c,i as s,aw as a,aF as i,m as d,A as u,u as m,w as f,M as l,z as p,g as h,k as b,C as N,D as g,o as C,bP as y,X as j,cb as T,R as $}from"./calfSystem-1d588248.js"
import{c as D}from"./createSpan-256b26cd.js"
import{c as k}from"./createTBody-03d360c4.js"
import{c as v}from"./createTable-70d127ad.js"
import{i as E}from"./insertTextBeforeEnd-62568d2a.js"
import{i as B}from"./isArray-a3f24c76.js"
import{t as x}from"./toLowerCase-999f3196.js"
import{a as A}from"./allthen-0f84efe6.js"
import{c as w}from"./chunk-4bfbd415.js"
import{e as S}from"./errorDialog-0f2ff56e.js"
import{g as L}from"./getArrayByClassName-8fef58fe.js"
import{h as q}from"./hideElement-0d0f9065.js"
import"./all-0d44a747.js"
import"./dialogMsg-3c26aecb.js"
function O(){return n({subcmd:"loadcomponents"})}let Q,R,_
function I(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function M(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function z(n){const t=k()
return function(n){Q=n.r.reduce(I,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(Q).reduce(M,"")}`),t}function F(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=D()
return r(t,e),e}(t)),E(e," / TODO")}function P(n,t){if(!B(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=v({className:"fshTblCenter",id:"fshTally"})
return c(t,z(n)),F(t,n),t}(t)))}function V(n){const t=d(),e=D({className:`sendLink ${x(n).replace(/ /g,"-")}`,textContent:n})
return u("[",t),c(t,e),s(t,"]"),t}function X(t){return n({subcmd:"destroycomponent",removeIndex:t})}function G(n,t){const e=f(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function H(n){return m({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(G,n))}function J(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function K(n){return A(n.map(H),J)}function U(n){return t(X,K,n)}function W(){if(!R){const n=l("inventory-table",p("profileRightColumn"))
2===n.length&&([,R]=n)}return R}function Y(n,t){return n[t.dataset.tipped.match(b)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!_){const n=h("img",W())
_=n.reduce(Y,{})}return _}()))}function tn(n){const t=W().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(N(r))
c-=n,u(c,r)}function en(n){n.s&&B(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return U(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=g(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(N(e))-1
u(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return c(n,V(t)),n}function dn(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const un=[["quick-extract-components",function(){e("components","insertQuickExtract"),j(T)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
q(t)
const o=t.parentNode
c(o,V("Delete All Visible")),h("img",W()).forEach(dn)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach($)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(b),r=e[1]
U([e[2]]).then(S).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(P,n))}],["compDelType",function(n){const t=Q[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(e)
const c=w(30,t).map(rn)
A(c,o(on,e))}]]
function mn(n){const t=n.parentNode
c(t,sn.reduce(an,d({className:"fshCenter"}))),C(t,y(un))}function fn(){const n=W()
n&&mn(n)}export default fn
//# sourceMappingURL=components-2a95dce1.js.map
