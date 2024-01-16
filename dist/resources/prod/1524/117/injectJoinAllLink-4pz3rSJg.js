import{G as n,$ as t,S as a,L as o,M as i,O as e,P as s,Q as c,T as r,U as l,_ as u,a0 as p,ag as f,dB as m,dC as d,s as g,a3 as h,X as x,a4 as b,am as j,b3 as k,aC as S,g as G}from"./calfSystem-G1dN925O.js"
import{h as J}from"./await_block-nr-x0DeQ.js"
import{g as w}from"./guildGroups-sePQlzpt.js"
import{a as T}from"./all-TTLWag-d.js"
import{d as y}from"./daViewGroups-YuwhlzDy.js"
import"./guild-a4pzzzAR.js"
function z(n){return w({subcmd2:"joinall",group:n})}function C(t){return n({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t})}function v(n){return T(n.map(C))}function M(n){let t,a,o,i,s,u
return{c(){t=e("p"),a=h("Join all attack groups"),o=h(n[2]),i=h("."),c(t,"class","notification-content"),c(t,"style",n[3])},m(e,c){r(e,t,c),l(t,a),l(t,o),l(t,i),s||(u=x(t,"click",n[5],{once:!0}),s=!0)},p(n,a){4&a&&b(o,n[2]),8&a&&c(t,"style",n[3])},d(n){n&&p(t),s=!1,u()}}}function N(n){let t,a={ctx:n,current:null,token:null,hasCatch:!1,pending:$,then:E,catch:_}
return J(n[4](),a),{c(){t=j(),a.block.c()},m(n,o){r(n,t,o),a.block.m(n,a.anchor=o),a.mount=()=>t.parentNode,a.anchor=t},p(t,a){n=t},d(n){n&&p(t),a.block.d(n),a.token=null,a=null}}}function _(n){return{c:u,m:u,d:u}}function E(n){let t
return{c(){t=e("p"),t.textContent="Joined.",c(t,"class","notification-content"),k(t,"line-height","32px")},m(n,a){r(n,t,a)},d(n){n&&p(t)}}}function $(n){let t,a
return{c(){t=e("span"),a=h("'"),c(t,"class","notification-content fshSpinner fshRelative")},m(n,o){r(n,t,o),r(n,a,o)},d(n){n&&(p(t),p(a))}}}function A(n){let t,a,o,i
function f(n,t){return n[0]?N:M}let m=f(n),d=m(n)
return{c(){t=e("li"),a=e("a"),o=e("span"),i=s(),d.c(),c(o,"class","notification-icon"),c(a,"href",n[1]),c(t,"class","notification")},m(n,e){r(n,t,e),l(t,a),l(a,o),l(a,i),d.m(a,null)},p(n,[t]){m===(m=f(n))&&d?d.p(n,t):(d.d(1),d=m(n),d&&(d.c(),d.m(a,null))),2&t&&c(a,"href",n[1])},i:u,o:u,d(n){n&&p(t),d.d()}}}function B(n,a,o){const i=n=>!f.enableMaxGroupSizeToJoin||n.members.length<f.maxGroupSizeToJoin,e=n=>n.name===S(),s=n=>!n.members.find(e),c=n=>n.id
let r=0,l=m,u="",p="height: 24px; padding: 6px 2px 10px;"
async function h(n){const a=n.r.filter(i).filter(s).map(c)
var o
a.length&&await(o=a,t(z,v,o))}return f.enableMaxGroupSizeToJoin&&(l=d,u=` less than size ${f.maxGroupSizeToJoin}`,p="height: 35px; padding: 3px 2px 2px;"),[r,l,u,p,async function(){const n=await y()
n?.s&&await h(n)},function(n){n.preventDefault(),g("notification","Join All"),o(0,r=1)}]}class D extends a{constructor(n){super(),o(this,n,B,A,i,{})}}function L(){const n=G("notification-guild-group")
n&&function(n){new D({anchor:n.nextElementSibling,target:n.parentNode})}(n)}export{L as default}
//# sourceMappingURL=injectJoinAllLink-4pz3rSJg.js.map
