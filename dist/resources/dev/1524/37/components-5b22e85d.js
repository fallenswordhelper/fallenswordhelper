import{bq as n,$ as t,X as e,t as o,R as r,B as c,h as s,i as a,an as i,ay as d,m as u,A as m,u as l,w as p,K as f,z as h,g as b,k as g,C as N,D as C,o as y,bQ as $,Y as j,cc as D,S as T}from"./calfSystem-5d0c721b.js"
import{c as k}from"./createSpan-6854a1c4.js"
import{c as v}from"./createTBody-6649c7c9.js"
import{c as E}from"./createTable-e2634048.js"
import{i as B}from"./insertTextBeforeEnd-74c6d79b.js"
import{t as x}from"./toLowerCase-9d38da0b.js"
import{a as S}from"./allthen-e710674d.js"
import{c as A}from"./chunk-eb7f7c4d.js"
import{e as w}from"./errorDialog-dd9ceb95.js"
import{g as L}from"./getArrayByClassName-b9fdeb7c.js"
import{h as Q}from"./hideElement-4575b6b4.js"
import"./all-d206e4b9.js"
import"./dialogMsg-f2f50c63.js"
function q(){return n({subcmd:"loadcomponents"})}let R,_,I
function z(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function K(n,t){return`${n}<tr><td><img src="${i}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${d()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function M(n){const t=v()
return function(n){R=n.r.reduce(z,{})}(n),a(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(R).reduce(K,"")}`),t}function O(n,t){const e=function(n){const t=n.insertRow(-1)
a(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
s(e,function(n){const t=n.r.length,e=k()
return c(t,e),e}(t)),B(e,` / ${t.h.cm.toString()}`)}function V(n,t){if(!r(t.r))return
const e=n.parentNode
e&&(c("",e),s(e,function(n){const t=E({className:"fshTblCenter",id:"fshTally"})
return s(t,M(n)),O(t,n),t}(t)))}function X(n){const t=u(),e=k({className:`sendLink ${x(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),s(t,e),a(t,"]"),t}function Y(t){return n({subcmd:"destroycomponent",removeIndex:t})}function F(n,t){const e=p(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function G(n){return l({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(F,n))}function H(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function J(n){return S(n.map(G),H)}function P(n){return t(Y,J,n)}function U(){if(!_){const n=f("inventory-table",h("profileRightColumn"))
2===n.length&&([,_]=n)}return _}function W(n,t){return n[t.dataset.tipped.match(g)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&c("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!I){const n=b("img",U())
I=n.reduce(W,{})}return I}()))}function tn(n){const t=U().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if("TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(N(r))
c-=n,m(c,r)}function en(n){n.s&&r(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return P(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=C(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(N(e))-1
m(o,e)}(t),tn(1),n.parentNode&&c("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return s(n,X(t)),n}function dn(n){a(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const un=[["quick-extract-components",function(){e("components","insertQuickExtract"),j(D)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
Q(t)
const o=t.parentNode
s(o,X("Delete All Visible")),b("img",U()).forEach(dn)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(T)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(g),r=e[1]
P([e[2]]).then(w).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(q).then(o(V,n))}],["compDelType",function(n){const t=R[n.dataset.compid].del,e=n.parentNode
!function(n){c("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${i}ui/misc/spinner.gif')`}(e)
const r=A(30,t).map(rn)
S(r,o(on,e))}]]
function mn(n){const t=n.parentNode
s(t,sn.reduce(an,u({className:"fshCenter"}))),y(t,$(un))}function ln(){const n=U()
n&&mn(n)}export default ln
//# sourceMappingURL=components-5b22e85d.js.map
