import{bp as n,W as t,t as e,Q as o,A as c,h as r,i as s,al as a,aw as i,m as d,z as u,J as l,y as p,g as m,k as f,B as h,C as b,o as N,bO as g,X as C,cb as j,R as y}from"./calfSystem-37f70deb.js"
import{c as $}from"./createSpan-821c0562.js"
import{c as T}from"./createTBody-e4d0123c.js"
import{c as D}from"./createTable-16e51d18.js"
import{i as k}from"./insertTextBeforeEnd-6d828e17.js"
import{t as v}from"./toLowerCase-abb30c3b.js"
import{a as E}from"./allthen-259c1952.js"
import{c as B}from"./chunk-c6dcf4eb.js"
import{e as x}from"./errorDialog-998604da.js"
import{g as S}from"./getArrayByClassName-6d0c056d.js"
import{h as A}from"./hideElement-eb117e0e.js"
import"./all-978030c9.js"
import"./dialogMsg-fcad563e.js"
function w(){return n({subcmd:"loadcomponents"})}let L,Q,R
function q(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function I(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function O(n){const t=T()
return function(n){L=n.r.reduce(q,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(L).reduce(I,"")}`),t}function _(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
r(e,function(n){const t=n.r.length,e=$()
return c(t,e),e}(t)),k(e,` / ${t.h.cm.toString()}`)}function z(n,t){if(!o(t.r))return
const e=n.parentNode
e&&(c("",e),r(e,function(n){const t=D({className:"fshTblCenter",id:"fshTally"})
return r(t,O(n)),_(t,n),t}(t)))}function J(n){const t=d(),e=$({className:`sendLink ${v(n).replace(/ /g,"-")}`,textContent:n})
return u("[",t),r(t,e),s(t,"]"),t}function M(t){return function(t){return n({subcmd:"destroycomponent",removeIndex:t})}(t)}function V(){if(!Q){const n=l("inventory-table",p("profileRightColumn"))
2===n.length&&([,Q]=n)}return Q}function W(n,t){return n[t.dataset.tipped.match(f)[2]]=t.parentNode.parentNode,n}function X(n,t){n[t]&&c("",n[t])}function F(n){n.forEach(e(X,function(){if(!R){const n=m("img",V())
R=n.reduce(W,{})}return R}()))}function G(n){const t=V().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if("TABLE"!==e.tagName)return
const o=e.rows,c=o[o.length-1].cells[1].children[0]
let r=Number(h(c))
r-=n,u(r,c)}function H(n){n.s&&o(n.r)&&(F(n.r),G(n.r.length))}function K(n){n.parentNode.remove()}function P(n){return M(n).then(H)}function U(n,t,e){e.s&&(!function(n){const t=b(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(h(e))-1
u(o,e)}(t),G(1),n.parentNode&&c("",n.parentNode))}const Y=["Enable Quick Del","Count Components","Quick Extract Components"]
function Z(n,t){return r(n,J(t)),n}function nn(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const tn=[["quick-extract-components",function(){t("components","insertQuickExtract"),C(j)}],["enable-quick-del",function(n){t("components","enableDelComponent")
const e=n.parentNode
A(e)
const o=e.parentNode
r(o,J("Delete All Visible")),m("img",V()).forEach(nn)}],["delete-all-visible",function(n){t("components","delAllComponent")
const e=n.parentNode.parentNode.parentNode.children[0]
S("compDelBtn",e).forEach(y)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,o=t.match(f),c=o[1]
M([o[2]]).then(x).then(e(U,n,c))}],["count-components",function(n){t("components","countComponent"),w().then(e(z,n))}],["compDelType",function(n){const t=L[n.dataset.compid].del,o=n.parentNode
!function(n){c("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(o)
const r=B(30,t).map(P)
E(r,e(K,o))}]]
function en(n){const t=n.parentNode
r(t,Y.reduce(Z,d({className:"fshCenter"}))),N(t,g(tn))}function on(){const n=V()
n&&en(n)}export default on
//# sourceMappingURL=components-343a3576.js.map
