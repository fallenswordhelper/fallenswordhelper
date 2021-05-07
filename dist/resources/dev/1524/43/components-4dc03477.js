import{br as n,$ as t,U as e,t as o,R as r,B as c,h as s,i as a,ax as i,aG as u,m as d,A as m,u as l,w as p,M as f,z as h,g as b,k as N,C as g,D as C,o as y,bQ as j,Y as $,cc as D,S as T}from"./calfSystem-3cb2f93e.js"
import{c as k}from"./createSpan-95e4d2e5.js"
import{c as v}from"./createTBody-a08d0cf8.js"
import{c as E}from"./createTable-4f507d36.js"
import{i as x}from"./insertTextBeforeEnd-8999c581.js"
import{t as B}from"./toLowerCase-999f3196.js"
import{a as S}from"./allthen-0f84efe6.js"
import{c as A}from"./chunk-4bfbd415.js"
import{e as w}from"./errorDialog-0f2ff56e.js"
import{g as L}from"./getArrayByClassName-b128b43c.js"
import{h as Q}from"./hideElement-0d0f9065.js"
import"./all-0d44a747.js"
import"./dialogMsg-3c26aecb.js"
function O(){return n({subcmd:"loadcomponents"})}let R,_,q
function I(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function M(n,t){return`${n}<tr><td><img src="${i}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${u()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function z(n){const t=v()
return function(n){R=n.r.reduce(I,{})}(n),a(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(R).reduce(M,"")}`),t}function G(n,t){const e=function(n){const t=n.insertRow(-1)
a(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
s(e,function(n){const t=n.r.length,e=k()
return c(t,e),e}(t)),x(e," / TODO")}function U(n,t){if(!r(t.r))return
const e=n.parentNode
e&&(c("",e),s(e,function(n){const t=E({className:"fshTblCenter",id:"fshTally"})
return s(t,z(n)),G(t,n),t}(t)))}function V(n){const t=d(),e=k({className:`sendLink ${B(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),s(t,e),a(t,"]"),t}function Y(t){return n({subcmd:"destroycomponent",removeIndex:t})}function F(n,t){const e=p(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function H(n){return l({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(F,n))}function J(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function K(n){return S(n.map(H),J)}function P(n){return t(Y,K,n)}function W(){if(!_){const n=f("inventory-table",h("profileRightColumn"))
2===n.length&&([,_]=n)}return _}function X(n,t){return n[t.dataset.tipped.match(N)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&c("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!q){const n=b("img",W())
q=n.reduce(X,{})}return q}()))}function tn(n){const t=W().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(g(r))
c-=n,m(c,r)}function en(n){n.s&&r(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return P(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=C(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(g(e))-1
m(o,e)}(t),tn(1),n.parentNode&&c("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return s(n,V(t)),n}function un(n){a(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const dn=[["quick-extract-components",function(){e("components","insertQuickExtract"),$(D)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
Q(t)
const o=t.parentNode
s(o,V("Delete All Visible")),b("img",W()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(T)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(N),r=e[1]
P([e[2]]).then(w).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(U,n))}],["compDelType",function(n){const t=R[n.dataset.compid].del,e=n.parentNode
!function(n){c("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${i}ui/misc/spinner.gif')`}(e)
const r=A(30,t).map(rn)
S(r,o(on,e))}]]
function mn(n){const t=n.parentNode
s(t,sn.reduce(an,d({className:"fshCenter"}))),y(t,j(dn))}function ln(){const n=W()
n&&mn(n)}export default ln
//# sourceMappingURL=components-4dc03477.js.map
