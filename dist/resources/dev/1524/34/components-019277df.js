import{bp as n,W as t,t as e,Q as o,A as r,h as c,i as a,al as s,aw as i,m as d,z as u,J as l,y as p,g as m,k as f,B as b,C as h,o as N,bO as g,X as C,cb as j,R as y}from"./calfSystem-c07e3259.js"
import{c as $}from"./createSpan-9738bb01.js"
import{c as T}from"./createTBody-a8d08f84.js"
import{c as D}from"./createTable-b1dbea45.js"
import{i as k}from"./insertTextBeforeEnd-3127a0cf.js"
import{t as v}from"./toLowerCase-82b2a5d7.js"
import{a as E}from"./allthen-9dd15411.js"
import{c as B}from"./chunk-5d7e6f3a.js"
import{e as x}from"./errorDialog-da819f92.js"
import{g as S}from"./getArrayByClassName-abf6bba3.js"
import{h as A}from"./hideElement-7b9c883f.js"
import"./all-3246a95f.js"
import"./dialogMsg-2f52cc12.js"
function w(){return n({subcmd:"loadcomponents"})}let L,Q,R
function q(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function I(n,t){return`${n}<tr><td><img src="${s}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function O(n){const t=T()
return function(n){L=n.r.reduce(q,{})}(n),a(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(L).reduce(I,"")}`),t}function _(n,t){const e=function(n){const t=n.insertRow(-1)
a(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=$()
return r(t,e),e}(t)),k(e,` / ${t.h.cm.toString()}`)}function z(n,t){if(!o(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=D({className:"fshTblCenter",id:"fshTally"})
return c(t,O(n)),_(t,n),t}(t)))}function J(n){const t=d(),e=$({className:`sendLink ${v(n).replace(/ /g,"-")}`,textContent:n})
return u("[",t),c(t,e),a(t,"]"),t}function M(t){return function(t){return n({subcmd:"destroycomponent",removeIndex:t})}(t)}function V(){if(!Q){const n=l("inventory-table",p("profileRightColumn"))
2===n.length&&([,Q]=n)}return Q}function W(n,t){return n[t.dataset.tipped.match(f)[2]]=t.parentNode.parentNode,n}function X(n,t){n[t]&&r("",n[t])}function F(n){n.forEach(e(X,function(){if(!R){const n=m("img",V())
R=n.reduce(W,{})}return R}()))}function G(n){const t=V().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if("TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(b(r))
c-=n,u(c,r)}function H(n){n.s&&o(n.r)&&(F(n.r),G(n.r.length))}function K(n){n.parentNode.remove()}function P(n){return M(n).then(H)}function U(n,t,e){e.s&&(!function(n){const t=h(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(b(e))-1
u(o,e)}(t),G(1),n.parentNode&&r("",n.parentNode))}const Y=["Enable Quick Del","Count Components","Quick Extract Components"]
function Z(n,t){return c(n,J(t)),n}function nn(n){a(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const tn=[["quick-extract-components",function(){t("components","insertQuickExtract"),C(j)}],["enable-quick-del",function(n){t("components","enableDelComponent")
const e=n.parentNode
A(e)
const o=e.parentNode
c(o,J("Delete All Visible")),m("img",V()).forEach(nn)}],["delete-all-visible",function(n){t("components","delAllComponent")
const e=n.parentNode.parentNode.parentNode.children[0]
S("compDelBtn",e).forEach(y)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,o=t.match(f),r=o[1]
M([o[2]]).then(x).then(e(U,n,r))}],["count-components",function(n){t("components","countComponent"),w().then(e(z,n))}],["compDelType",function(n){const t=L[n.dataset.compid].del,o=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${s}ui/misc/spinner.gif')`}(o)
const c=B(30,t).map(P)
E(c,e(K,o))}]]
function en(n){const t=n.parentNode
c(t,Y.reduce(Z,d({className:"fshCenter"}))),N(t,g(tn))}function on(){const n=V()
n&&en(n)}export default on
//# sourceMappingURL=components-019277df.js.map
