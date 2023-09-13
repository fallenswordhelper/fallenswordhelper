import{G as n,$ as t,S as a,L as o,M as i,N as e,O as s,P as c,R as r,T as l,Y as u,Z as p,ad as f,dq as m,dr as d,n as h,a1 as g,W as x,a2 as b,aj as j,a$ as k,aA as S,g as G}from"./calfSystem-34913441.js"
import{h as J}from"./await_block-d58cecee.js"
import{g as w}from"./guildGroups-fb9b4371.js"
import{a as T}from"./all-414e0607.js"
import{d as y}from"./daViewGroups-277b3166.js"
import"./guild-014ef050.js"
function z(n){return w({subcmd2:"joinall",group:n})}function v(t){return n({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t})}function M(n){return T(n.map(v))}function N(n){let t,a,o,i,s,u
return{c(){t=e("p"),a=g("Join all attack groups"),o=g(n[2]),i=g("."),c(t,"class","notification-content"),c(t,"style",n[3])},m(e,c){r(e,t,c),l(t,a),l(t,o),l(t,i),s||(u=x(t,"click",n[5],{once:!0}),s=!0)},p(n,a){4&a&&b(o,n[2]),8&a&&c(t,"style",n[3])},d(n){n&&p(t),s=!1,u()}}}function $(n){let t,a={ctx:n,current:null,token:null,hasCatch:!1,pending:R,then:C,catch:A}
return J(n[4](),a),{c(){t=j(),a.block.c()},m(n,o){r(n,t,o),a.block.m(n,a.anchor=o),a.mount=()=>t.parentNode,a.anchor=t},p(t,a){n=t},d(n){n&&p(t),a.block.d(n),a.token=null,a=null}}}function A(n){return{c:u,m:u,d:u}}function C(n){let t
return{c(){t=e("p"),t.textContent="Joined.",c(t,"class","notification-content"),k(t,"line-height","32px")},m(n,a){r(n,t,a)},d(n){n&&p(t)}}}function R(n){let t,a
return{c(){t=e("span"),a=g("'"),c(t,"class","notification-content fshSpinner fshRelative")},m(n,o){r(n,t,o),r(n,a,o)},d(n){n&&(p(t),p(a))}}}function Z(n){let t,a,o,i
function f(n,t){return n[0]?$:N}let m=f(n),d=m(n)
return{c(){t=e("li"),a=e("a"),o=e("span"),i=s(),d.c(),c(o,"class","notification-icon"),c(a,"href",n[1]),c(t,"class","notification")},m(n,e){r(n,t,e),l(t,a),l(a,o),l(a,i),d.m(a,null)},p(n,[t]){m===(m=f(n))&&d?d.p(n,t):(d.d(1),d=m(n),d&&(d.c(),d.m(a,null))),2&t&&c(a,"href",n[1])},i:u,o:u,d(n){n&&p(t),d.d()}}}function _(n,a,o){const i=n=>!f.enableMaxGroupSizeToJoin||n.members.length<f.maxGroupSizeToJoin,e=n=>n.name===S(),s=n=>!n.members.find(e),c=n=>n.id
let r=0,l=m,u="",p="height: 24px; padding: 6px 2px 10px;"
async function g(n){const a=n.r.filter(i).filter(s).map(c)
var o
a.length&&await(o=a,t(z,M,o))}return f.enableMaxGroupSizeToJoin&&(l=d,u=` less than size ${f.maxGroupSizeToJoin}`,p="height: 35px; padding: 3px 2px 2px;"),[r,l,u,p,async function(){const n=await y()
n?.s&&await g(n)},function(n){n.preventDefault(),h("notification","Join All"),o(0,r=1)}]}class q extends a{constructor(n){super(),o(this,n,_,Z,i,{})}}function D(){const n=G("notification-guild-group")
n&&function(n){new q({anchor:n.nextElementSibling,target:n.parentNode})}(n)}export{D as default}
//# sourceMappingURL=injectJoinAllLink-6ec17e4b.js.map
