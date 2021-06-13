import{bv as n,$ as t,T as e,t as o,Q as r,B as c,h as s,i as a,az as i,aJ as u,m as l,af as d,A as m,u as p,w as f,M as h,z as b,g as N,k as g,C,D as y,o as T,bS as $,X as j,cd as D,R as v}from"./calfSystem-6a3c85e0.js"
import{c as k}from"./createSpan-a6b61f47.js"
import{c as E}from"./createTBody-55670960.js"
import{c as B}from"./createTable-e4a467a3.js"
import{i as x}from"./insertTextBeforeEnd-50a2be9f.js"
import{a as S}from"./allthen-b379c12a.js"
import{c as A}from"./chunk-82057567.js"
import{e as Q}from"./errorDialog-0a862506.js"
import{g as w}from"./getArrayByClassName-039bb6c6.js"
import{h as L}from"./hideElement-53ec58d4.js"
import"./all-47be5400.js"
import"./dialogMsg-f24b55b1.js"
function O(){return n({subcmd:"loadcomponents"})}let R,_,q
function z(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function I(n,t){return`${n}<tr><td><img src="${i}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${u()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function M(n){const t=E()
return function(n){R=n.r.reduce(z,{})}(n),a(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(R).reduce(I,"")}`),t}function J(n,t){const e=function(n){const t=n.insertRow(-1)
a(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
s(e,function(n){const t=n.r.length,e=k()
return c(t,e),e}(t)),x(e," / TODO")}function V(n,t){if(!r(t.r))return
const e=n.parentNode
e&&(c("",e),s(e,function(n){const t=B({className:"fshTblCenter",id:"fshTally"})
return s(t,M(n)),J(t,n),t}(t)))}function X(n){const t=l(),e=k({className:`sendLink ${d(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),s(t,e),a(t,"]"),t}function F(t){return n({subcmd:"destroycomponent",removeIndex:t})}function G(n,t){const e=f(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function H(n){return p({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(G,n))}function K(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function P(n){return S(n.map(H),K)}function U(n){return t(F,P,n)}function W(){if(!_){const n=h("inventory-table",b("profileRightColumn"))
2===n.length&&([,_]=n)}return _}function Y(n,t){return n[t.dataset.tipped.match(g)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&c("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!q){const n=N("img",W())
q=n.reduce(Y,{})}return q}()))}function tn(n){const t=W().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(C(r))
c-=n,m(c,r)}function en(n){n.s&&r(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return U(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=y(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(C(e))-1
m(o,e)}(t),tn(1),n.parentNode&&c("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return s(n,X(t)),n}function un(n){a(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const ln=[["quick-extract-components",function(){e("components","insertQuickExtract"),j(D)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
L(t)
const o=t.parentNode
s(o,X("Delete All Visible")),N("img",W()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
w("compDelBtn",t).forEach(v)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(g),r=e[1]
U([e[2]]).then(Q).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(V,n))}],["compDelType",function(n){const t=R[n.dataset.compid].del,e=n.parentNode
!function(n){c("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${i}ui/misc/spinner.gif')`}(e)
const r=A(30,t).map(rn)
S(r,o(on,e))}]]
function dn(n){const t=n.parentNode
s(t,sn.reduce(an,l({className:"fshCenter"}))),T(t,$(ln))}function mn(){const n=W()
n&&dn(n)}export default mn
//# sourceMappingURL=components-d06930c5.js.map
