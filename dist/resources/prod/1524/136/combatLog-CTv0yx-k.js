import{i as t}from"./instantiate-upFtXRx7.js"
import{S as s,L as a,M as e,bj as n,bk as o,be as c,bh as l,bl as i,am as r,T as u,a0 as m,a3 as f,s as b,aQ as p,aS as d,cl as $,_ as h,O as v,P as j,ah as k,Q as g,U as y,X as x,a1 as C}from"./calfSystem-CUgWHLtG.js"
import{h as L,u as w}from"./await_block-DpKGh93y.js"
import{c as M}from"./confirm-BtUrOpyM.js"
import{M as S}from"./ModalTitled-DwG8wP1C.js"
import"./Modal-BIzCdrcz.js"
function _(t){return{c:h,m:h,p:h,d:h}}function A(t){let s,a,e,n,o,c,l,i,r,f
return{c(){s=v("div"),a=v("textarea"),n=j(),o=v("div"),c=v("button"),c.textContent="Select All",l=j(),i=v("button"),i.textContent="Clear",a.readOnly=!0,a.value=e=k(t[1]),g(a,"class","svelte-1ikjp3j"),g(s,"class","textContainer svelte-1ikjp3j"),g(c,"type","button"),g(i,"type","button"),g(o,"class","bottom svelte-1ikjp3j")},m(e,m){u(e,s,m),y(s,a),t[7](a),u(e,n,m),u(e,o,m),y(o,c),y(o,l),y(o,i),r||(f=[x(c,"click",t[4]),x(i,"click",t[6])],r=!0)},p(t,s){2&s&&e!==(e=k(t[1]))&&(a.value=e)},d(a){a&&(m(s),m(n),m(o)),t[7](null),r=!1,C(f)}}}function O(t){return{c:h,m:h,p:h,d:h}}function Q(t){let s,a={ctx:t,current:null,token:null,hasCatch:!1,pending:O,then:A,catch:_}
return L(t[5](),a),{c(){s=r(),a.block.c()},m(t,e){u(t,s,e),a.block.m(t,a.anchor=e),a.mount=()=>s.parentNode,a.anchor=s},p(s,e){w(a,t=s,e)},d(t){t&&m(s),a.block.d(t),a.token=null,a=null}}}function T(t){let s
return{c(){s=f("Combat Log")},m(t,a){u(t,s,a)},d(t){t&&m(s)}}}function N(t){let s,a
return s=new S({props:{visible:t[0],$$slots:{title:[T],default:[Q]},$$scope:{ctx:t}}}),s.$on("close",t[3]),{c(){n(s.$$.fragment)},m(t,e){o(s,t,e),a=!0},p(t,[a]){const e={}
1&a&&(e.visible=t[0]),262&a&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){a||(c(s.$$.fragment,t),a=!0)},o(t){l(s.$$.fragment,t),a=!1},d(t){i(s,t)}}}function P(t,s,a){let{visible:e=!0}=s,n=[],o=0
return t.$$set=t=>{"visible"in t&&a(0,e=t.visible)},[e,n,o,function(){b("Combat Log","close"),a(0,e=!1)},function(){o.focus(),o.select()},async function(){a(1,n=await p("fsh_combatLog")??[])},async function(){b("Combat Log","clear storage"),await M("Are you sure you want to clear your log?")&&(a(1,n=[]),d("fsh_combatLog",n))},function(t){$[t?"unshift":"push"]((()=>{o=t,a(2,o)}))}]}class U extends s{constructor(t){super(),a(this,t,P,N,e,{visible:0})}}const X={visible:!0}
let q=0
function z(){q=t(X,q,U)}export{z as default}
//# sourceMappingURL=combatLog-CTv0yx-k.js.map
