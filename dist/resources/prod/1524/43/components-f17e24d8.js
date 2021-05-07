import{bo as n,$ as t,T as e,t as o,B as r,h as c,i as s,au as a,aD as i,m as u,A as m,u as d,w as l,M as p,z as f,g as h,k as b,C as N,D as g,o as C,bM as y,X as j,c9 as D,R as T}from"./calfSystem-9942149b.js"
import{c as $}from"./createSpan-84310061.js"
import{c as k}from"./createTBody-77039f6a.js"
import{c as v}from"./createTable-4b731acb.js"
import{i as E}from"./insertTextBeforeEnd-c85738b7.js"
import{i as B}from"./isArray-a3f24c76.js"
import{t as x}from"./toLowerCase-999f3196.js"
import{a as A}from"./allthen-0f84efe6.js"
import{c as S}from"./chunk-4bfbd415.js"
import{e as w}from"./errorDialog-0f2ff56e.js"
import{g as L}from"./getArrayByClassName-2c97d5ec.js"
import{h as M}from"./hideElement-0d0f9065.js"
import"./all-0d44a747.js"
import"./dialogMsg-3c26aecb.js"
function O(){return n({subcmd:"loadcomponents"})}let Q,R,_
function q(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function I(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function z(n){const t=k()
return function(n){Q=n.r.reduce(q,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(Q).reduce(I,"")}`),t}function V(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=$()
return r(t,e),e}(t)),E(e," / TODO")}function X(n,t){if(!B(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=v({className:"fshTblCenter",id:"fshTally"})
return c(t,z(n)),V(t,n),t}(t)))}function F(n){const t=u(),e=$({className:`sendLink ${x(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),c(t,e),s(t,"]"),t}function G(t){return n({subcmd:"destroycomponent",removeIndex:t})}function H(n,t){const e=l(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function J(n){return d({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(H,n))}function K(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function P(n){return A(n.map(J),K)}function U(n){return t(G,P,n)}function W(){if(!R){const n=p("inventory-table",f("profileRightColumn"))
2===n.length&&([,R]=n)}return R}function Y(n,t){return n[t.dataset.tipped.match(b)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!_){const n=h("img",W())
_=n.reduce(Y,{})}return _}()))}function tn(n){const t=W().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(N(r))
c-=n,m(c,r)}function en(n){n.s&&B(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return U(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=g(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(N(e))-1
m(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return c(n,F(t)),n}function un(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const mn=[["quick-extract-components",function(){e("components","insertQuickExtract"),j(D)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
M(t)
const o=t.parentNode
c(o,F("Delete All Visible")),h("img",W()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(T)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(b),r=e[1]
U([e[2]]).then(w).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(X,n))}],["compDelType",function(n){const t=Q[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(e)
const c=S(30,t).map(rn)
A(c,o(on,e))}]]
function dn(n){const t=n.parentNode
c(t,sn.reduce(an,u({className:"fshCenter"}))),C(t,y(mn))}function ln(){const n=W()
n&&dn(n)}export default ln
//# sourceMappingURL=components-f17e24d8.js.map
