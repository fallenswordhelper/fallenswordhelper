import{E as n,$ as t,S as a,J as o,K as i,L as e,M as s,N as c,P as r,Q as l,W as u,X as p,ab as f,dr as m,ds as d,s as h,_ as g,U as x,a0 as b,ah as J,aX as S,ax as j,g as k}from"./calfSystem-dEoRVG2S.js"
import{h as w}from"./await_block-LFXQ2_nx.js"
import{g as G}from"./guildGroups-8h_UKzve.js"
import{a as y}from"./all-TTLWag-d.js"
import{d as z}from"./daViewGroups-VeX6XpjE.js"
import"./guild-_7IrY2U_.js"
function T(n){return G({subcmd2:"joinall",group:n})}function v(t){return n({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t})}function M(n){return y(n.map(v))}function N(n){let t,a,o,i,s,u
return{c(){t=e("p"),a=g("Join all attack groups"),o=g(n[2]),i=g("."),c(t,"class","notification-content"),c(t,"style",n[3])},m(e,c){r(e,t,c),l(t,a),l(t,o),l(t,i),s||(u=x(t,"click",n[5],{once:!0}),s=!0)},p(n,a){4&a&&b(o,n[2]),8&a&&c(t,"style",n[3])},d(n){n&&p(t),s=!1,u()}}}function $(n){let t,a={ctx:n,current:null,token:null,hasCatch:!1,pending:E,then:C,catch:_}
return w(n[4](),a),{c(){t=J(),a.block.c()},m(n,o){r(n,t,o),a.block.m(n,a.anchor=o),a.mount=()=>t.parentNode,a.anchor=t},p(t,a){n=t},d(n){n&&p(t),a.block.d(n),a.token=null,a=null}}}function _(n){return{c:u,m:u,d:u}}function C(n){let t
return{c(){t=e("p"),t.textContent="Joined.",c(t,"class","notification-content"),S(t,"line-height","32px")},m(n,a){r(n,t,a)},d(n){n&&p(t)}}}function E(n){let t,a
return{c(){t=e("span"),a=g("'"),c(t,"class","notification-content fshSpinner fshRelative")},m(n,o){r(n,t,o),r(n,a,o)},d(n){n&&(p(t),p(a))}}}function X(n){let t,a,o,i
function f(n,t){return n[0]?$:N}let m=f(n),d=m(n)
return{c(){t=e("li"),a=e("a"),o=e("span"),i=s(),d.c(),c(o,"class","notification-icon"),c(a,"href",n[1]),c(t,"class","notification")},m(n,e){r(n,t,e),l(t,a),l(a,o),l(a,i),d.m(a,null)},p(n,[t]){m===(m=f(n))&&d?d.p(n,t):(d.d(1),d=m(n),d&&(d.c(),d.m(a,null))),2&t&&c(a,"href",n[1])},i:u,o:u,d(n){n&&p(t),d.d()}}}function A(n,a,o){const i=n=>!f.enableMaxGroupSizeToJoin||n.members.length<f.maxGroupSizeToJoin,e=n=>n.name===j(),s=n=>!n.members.find(e),c=n=>n.id
let r=0,l=m,u="",p="height: 24px; padding: 6px 2px 10px;"
async function g(n){const a=n.r.filter(i).filter(s).map(c)
var o
a.length&&await(o=a,t(T,M,o))}return f.enableMaxGroupSizeToJoin&&(l=d,u=` less than size ${f.maxGroupSizeToJoin}`,p="height: 35px; padding: 3px 2px 2px;"),[r,l,u,p,async function(){const n=await z()
n?.s&&await g(n)},function(n){n.preventDefault(),h("notification","Join All"),o(0,r=1)}]}class D extends a{constructor(n){super(),o(this,n,A,X,i,{})}}function K(){const n=k("notification-guild-group")
n&&function(n){new D({anchor:n.nextElementSibling,target:n.parentNode})}(n)}export{K as default}
//# sourceMappingURL=injectJoinAllLink-tL7QftRo.js.map