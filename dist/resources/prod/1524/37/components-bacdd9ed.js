import{bn as n,$ as t,W as e,t as o,B as r,h as c,i as s,ak as a,av as i,m as d,A as u,u as m,w as l,K as p,z as f,g as h,k as b,C as g,D as N,o as C,bM as y,X as j,c9 as $,R as D}from"./calfSystem-60c20ae9.js"
import{c as T}from"./createSpan-2b0536e4.js"
import{c as k}from"./createTBody-45ccd1f1.js"
import{c as v}from"./createTable-551bbe25.js"
import{i as E}from"./insertTextBeforeEnd-26bd7036.js"
import{i as B}from"./isArray-dcd15679.js"
import{t as x}from"./toLowerCase-9d38da0b.js"
import{a as A}from"./allthen-e710674d.js"
import{c as S}from"./chunk-eb7f7c4d.js"
import{e as w}from"./errorDialog-dd9ceb95.js"
import{g as L}from"./getArrayByClassName-0e6e45d9.js"
import{h as Q}from"./hideElement-4575b6b4.js"
import"./all-d206e4b9.js"
import"./dialogMsg-f2f50c63.js"
function R(){return n({subcmd:"loadcomponents"})}let _,q,I
function M(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function z(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function K(n){const t=k()
return function(n){_=n.r.reduce(M,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(_).reduce(z,"")}`),t}function O(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=T()
return r(t,e),e}(t)),E(e,` / ${t.h.cm.toString()}`)}function V(n,t){if(!B(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=v({className:"fshTblCenter",id:"fshTally"})
return c(t,K(n)),O(t,n),t}(t)))}function W(n){const t=d(),e=T({className:`sendLink ${x(n).replace(/ /g,"-")}`,textContent:n})
return u("[",t),c(t,e),s(t,"]"),t}function X(t){return n({subcmd:"destroycomponent",removeIndex:t})}function F(n,t){const e=l(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function G(n){return m({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(F,n))}function H(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function J(n){return A(n.map(G),H)}function P(n){return t(X,J,n)}function U(){if(!q){const n=p("inventory-table",f("profileRightColumn"))
2===n.length&&([,q]=n)}return q}function Y(n,t){return n[t.dataset.tipped.match(b)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!I){const n=h("img",U())
I=n.reduce(Y,{})}return I}()))}function tn(n){const t=U().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if("TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(g(r))
c-=n,u(c,r)}function en(n){n.s&&B(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return P(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=N(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(g(e))-1
u(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return c(n,W(t)),n}function dn(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const un=[["quick-extract-components",function(){e("components","insertQuickExtract"),j($)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
Q(t)
const o=t.parentNode
c(o,W("Delete All Visible")),h("img",U()).forEach(dn)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(D)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(b),r=e[1]
P([e[2]]).then(w).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(R).then(o(V,n))}],["compDelType",function(n){const t=_[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(e)
const c=S(30,t).map(rn)
A(c,o(on,e))}]]
function mn(n){const t=n.parentNode
c(t,sn.reduce(an,d({className:"fshCenter"}))),C(t,y(un))}function ln(){const n=U()
n&&mn(n)}export default ln
//# sourceMappingURL=components-bacdd9ed.js.map
