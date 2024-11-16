import{G as n,$ as t,S as o,L as a,M as i,Z as s,O as e,R as c,U as r,X as u,b5 as l,am as f,P as m,T as p,a2 as d,V as g,W as h,ag as b,dL as x,aC as j,s as k,dM as w,g as S,c as G}from"./calfSystem-Blt4DbaE.js"
import{h as J}from"./await_block-Bf7EOqQ9.js"
import{g as T}from"./guildGroups-N0LSUuYp.js"
import{a as z}from"./all-YfMtr2SN.js"
import{d as v}from"./daViewGroups-BuRscLuJ.js"
import"./guild-hKlLzHll.js"
function y(n){return T({subcmd2:"joinall",group:n})}function C(t){return n({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t})}function M(n){return z(n.map(C))}function L(n){let t,o,a,i,s,l,f
return{c(){t=r("p"),o=r("button"),a=g("Join all attack groups"),i=g(n[2]),s=g("."),u(o,"type","button"),u(o,"class","svelte-44dw92"),u(t,"class","notification-content")},m(e,r){c(e,t,r),p(t,o),p(o,a),p(o,i),p(o,s),l||(f=d(o,"click",n[4],{once:!0}),l=!0)},p(n,t){4&t&&m(i,n[2])},d(n){n&&e(t),l=!1,f()}}}function V(n){let t,o={ctx:n,current:null,token:null,hasCatch:!1,pending:A,then:_,catch:$}
return J(n[3](),o),{c(){t=f(),o.block.c()},m(n,a){c(n,t,a),o.block.m(n,o.anchor=a),o.mount=()=>t.parentNode,o.anchor=t},p(t,o){n=t},d(n){n&&e(t),o.block.d(n),o.token=null,o=null}}}function $(n){return{c:s,m:s,d:s}}function _(n){let t
return{c(){t=r("p"),t.textContent="Joined.",u(t,"class","notification-content"),l(t,"line-height","32px")},m(n,o){c(n,t,o)},d(n){n&&e(t)}}}function A(n){let t
return{c(){t=r("span"),u(t,"class","notification-content fshSpinner fix-classic-theme svelte-44dw92")},m(n,o){c(n,t,o)},d(n){n&&e(t)}}}function D(n){let t,o,a
function i(n,t){return n[0]?V:L}let l=i(n),f=l(n)
return{c(){t=r("a"),o=r("span"),a=h(),f.c(),u(o,"id","notification-icon-guild-group"),u(o,"class","notification-icon"),u(t,"href",n[1])},m(n,i){c(n,t,i),p(t,o),p(t,a),f.m(t,null)},p(n,[o]){l===(l=i(n))&&f?f.p(n,o):(f.d(1),f=l(n),f&&(f.c(),f.m(t,null))),2&o&&u(t,"href",n[1])},i:s,o:s,d(n){n&&e(t),f.d()}}}function N(n,o,a){const i=n=>!b.enableMaxGroupSizeToJoin||n.members.length<b.maxGroupSizeToJoin,s=n=>n.name===j(),e=n=>!n.members.find(s),c=n=>n.id
let r=0,u=x,l=""
async function f(n){const o=n.r.filter(i).filter(e).map(c)
var a
o.length&&await(a=o,t(y,M,a))}return b.enableMaxGroupSizeToJoin&&(u=w,l=` less than size ${b.maxGroupSizeToJoin}`),[r,u,l,async function(){const n=await v()
n?.s&&await f(n)},function(n){n.preventDefault(),k("notification","Join All"),a(0,r=1)}]}class O extends o{constructor(n){super(),a(this,n,N,D,i,{})}}function P(){const n=S("notification-guild-group")
n&&function(n){G("",n),new O({target:n})}(n)}export{P as default}
//# sourceMappingURL=injectJoinAllLink-BSTyS8wi.js.map
