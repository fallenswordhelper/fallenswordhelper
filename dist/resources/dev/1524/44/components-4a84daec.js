import{bt as n,$ as t,T as e,t as o,Q as r,B as c,h as s,i as a,ay as i,aI as u,m as d,A as m,u as l,w as p,M as f,z as h,g as b,k as N,C as g,D as C,o as y,bQ as j,X as T,cb as $,R as D}from"./calfSystem-f7cf24f6.js"
import{c as k}from"./createSpan-0636b0fd.js"
import{c as v}from"./createTBody-0d88485f.js"
import{c as E}from"./createTable-fea82781.js"
import{i as B}from"./insertTextBeforeEnd-60f92d3f.js"
import{t as x}from"./toLowerCase-c964d32b.js"
import{a as A}from"./allthen-c5cfa8a4.js"
import{c as Q}from"./chunk-d354fb99.js"
import{e as S}from"./errorDialog-48630d52.js"
import{g as w}from"./getArrayByClassName-f4491c81.js"
import{h as L}from"./hideElement-3be61495.js"
import"./all-8d04560c.js"
import"./dialogMsg-227939ed.js"
function I(){return n({subcmd:"loadcomponents"})}let O,R,_
function q(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function M(n,t){return`${n}<tr><td><img src="${i}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${u()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function z(n){const t=v()
return function(n){O=n.r.reduce(q,{})}(n),a(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(O).reduce(M,"")}`),t}function V(n,t){const e=function(n){const t=n.insertRow(-1)
a(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
s(e,function(n){const t=n.r.length,e=k()
return c(t,e),e}(t)),B(e," / TODO")}function X(n,t){if(!r(t.r))return
const e=n.parentNode
e&&(c("",e),s(e,function(n){const t=E({className:"fshTblCenter",id:"fshTally"})
return s(t,z(n)),V(t,n),t}(t)))}function F(n){const t=d(),e=k({className:`sendLink ${x(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),s(t,e),a(t,"]"),t}function G(t){return n({subcmd:"destroycomponent",removeIndex:t})}function H(n,t){const e=p(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function J(n){return l({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(H,n))}function K(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function P(n){return A(n.map(J),K)}function U(n){return t(G,P,n)}function W(){if(!R){const n=f("inventory-table",h("profileRightColumn"))
2===n.length&&([,R]=n)}return R}function Y(n,t){return n[t.dataset.tipped.match(N)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&c("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!_){const n=b("img",W())
_=n.reduce(Y,{})}return _}()))}function tn(n){const t=W().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(g(r))
c-=n,m(c,r)}function en(n){n.s&&r(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return U(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=C(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(g(e))-1
m(o,e)}(t),tn(1),n.parentNode&&c("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return s(n,F(t)),n}function un(n){a(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const dn=[["quick-extract-components",function(){e("components","insertQuickExtract"),T($)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
L(t)
const o=t.parentNode
s(o,F("Delete All Visible")),b("img",W()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
w("compDelBtn",t).forEach(D)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(N),r=e[1]
U([e[2]]).then(S).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(I).then(o(X,n))}],["compDelType",function(n){const t=O[n.dataset.compid].del,e=n.parentNode
!function(n){c("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${i}ui/misc/spinner.gif')`}(e)
const r=Q(30,t).map(rn)
A(r,o(on,e))}]]
function mn(n){const t=n.parentNode
s(t,sn.reduce(an,d({className:"fshCenter"}))),y(t,j(dn))}function ln(){const n=W()
n&&mn(n)}export default ln
//# sourceMappingURL=components-4a84daec.js.map
