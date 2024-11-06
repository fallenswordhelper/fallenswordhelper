import{i as e}from"./Modal-Dxm27BSi.js"
import{S as t,L as n,M as s,O as l,P as r,a4 as a,am as i,Q as c,T as o,U as d,a5 as u,be as m,bf as f,bh as p,bg as v,a1 as g,X as A,N as h,R as b,dc as x,dd as $,b6 as k,s as E,b5 as w,a0 as q,a2 as T,bx as y,ae as S,bo as C,bj as H,bk as U,bl as j,Z as M,dl as L}from"./calfSystem-BhNMi9iJ.js"
import{M as B}from"./ModalTitled-BeMGBD-d.js"
import{f as I}from"./formatUtcTimestamp-t57AV4Fr.js"
import{t as N,s as Q,p as R}from"./trackerPrefStore--KSgIPKI.js"
import{u as Y}from"./uniq-_3HXbZK6.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./isArray-eVldfhw1.js"
function F(e,t,n){const s=e.slice()
return s[3]=t[n][0],s[4]=t[n][1],s}function G(e){let t,n,s
function r(e,t){return e[1]?O:J}let a=r(e),i=a(e)
return{c(){t=l("button"),i.c(),c(t,"aria-expanded",e[1]),c(t,"type","button"),c(t,"class","svelte-1rxsxdp")},m(l,r){o(l,t,r),i.m(t,null),n||(s=A(t,"click",e[2]),n=!0)},p(e,n){a!==(a=r(e))&&(i.d(1),i=a(e),i&&(i.c(),i.m(t,null))),2&n&&c(t,"aria-expanded",e[1])},d(e){e&&g(t),i.d(),n=!1,s()}}}function J(e){let t
return{c(){t=a(">")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function O(e){let t
return{c(){t=a("∨")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function P(e){let t,n,s,r=h(e[0][3]),a=[]
for(let t=0;t<r.length;t+=1)a[t]=V(F(e,r,t))
return{c(){t=l("div")
for(let e=0;e<a.length;e+=1)a[e].c()
c(t,"class","wide svelte-1rxsxdp")},m(e,n){o(e,t,n)
for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(t,null)
s=!0},p(e,n){if(1&n){let s
for(r=h(e[0][3]),s=0;s<r.length;s+=1){const l=F(e,r,s)
a[s]?a[s].p(l,n):(a[s]=V(l),a[s].c(),a[s].m(t,null))}for(;s<a.length;s+=1)a[s].d(1)
a.length=r.length}},i(e){s||(e&&b((()=>{s&&(n||(n=x(t,$,{duration:300},!0)),n.run(1))})),s=!0)},o(e){e&&(n||(n=x(t,$,{duration:300},!1)),n.run(0)),s=!1},d(e){e&&g(t),k(a,e),e&&n&&n.end()}}}function V(e){let t,n,s,i,m,f,p,v,A,h=I(e[3])+"",b=e[4]+""
return{c(){t=l("div"),n=r(),s=l("div"),i=r(),m=l("div"),f=a(h),p=r(),v=l("div"),A=a(b),c(m,"class","last-kill svelte-1rxsxdp")},m(e,l){o(e,t,l),o(e,n,l),o(e,s,l),o(e,i,l),o(e,m,l),d(m,f),o(e,p,l),o(e,v,l),d(v,A)},p(e,t){1&t&&h!==(h=I(e[3])+"")&&u(f,h),1&t&&b!==(b=e[4]+"")&&u(A,b)},d(e){e&&(g(t),g(n),g(s),g(i),g(m),g(p),g(v))}}}function W(e){let t,n,s,A,h,b,x,$,k,E,w,q,T=e[0][0].replaceAll("_"," ")+"",y=I(e[0][1])+"",S=e[0][2]+"",C=e[0][3].length&&G(e),H=e[1]&&P(e)
return{c(){t=l("div"),C&&C.c(),n=r(),s=l("div"),A=a(T),h=r(),b=l("div"),x=a(y),$=r(),k=l("div"),E=a(S),w=r(),H&&H.c(),q=i(),c(t,"class","expando svelte-1rxsxdp"),c(b,"class","last-kill svelte-1rxsxdp")},m(e,l){o(e,t,l),C&&C.m(t,null),o(e,n,l),o(e,s,l),d(s,A),o(e,h,l),o(e,b,l),d(b,x),o(e,$,l),o(e,k,l),d(k,E),o(e,w,l),H&&H.m(e,l),o(e,q,l)},p(e,[n]){e[0][3].length?C?C.p(e,n):(C=G(e),C.c(),C.m(t,null)):C&&(C.d(1),C=null),1&n&&T!==(T=e[0][0].replaceAll("_"," ")+"")&&u(A,T),1&n&&y!==(y=I(e[0][1])+"")&&u(x,y),1&n&&S!==(S=e[0][2]+"")&&u(E,S),e[1]?H?(H.p(e,n),2&n&&m(H,1)):(H=P(e),H.c(),m(H,1),H.m(q.parentNode,q)):H&&(f(),p(H,1,1,(()=>{H=null})),v())},i(e){m(H)},o(e){p(H)},d(e){e&&(g(t),g(n),g(s),g(h),g(b),g($),g(k),g(w),g(q)),C&&C.d(),H&&H.d(e)}}}function Z(e,t,n){let{entry:s}=t,l=!1
return e.$$set=e=>{"entry"in e&&n(0,s=e.entry)},[s,l,()=>{E("SE Tracker","Expand Row"),n(1,l=!l)}]}class D extends t{constructor(e){super(),n(this,e,Z,W,s,{entry:0})}}function K(e){let t,n,s,i,u,m,f,p,v
return{c(){t=l("span"),n=r(),s=l("label"),i=a("Enable SE Tracker [ \n  "),u=l("div"),u.innerHTML='?\n    <div class="tooltiptext svelte-1hf4bli"><span class="tooltiptitle svelte-1hf4bli">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/>\n        This is DIFFERENT from the usual FSH network activity.<br/>\n        When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/>\n        You do not need auto-refresh for this to work.</div></div>',m=a("\n   ]:\n  "),f=l("input"),c(t,"class","network svelte-1hf4bli"),w(t,"background-image",e[1]),c(u,"class","tooltip svelte-1hf4bli"),c(f,"type","checkbox"),c(f,"class","svelte-1hf4bli")},m(l,r){o(l,t,r),o(l,n,r),o(l,s,r),d(s,i),d(s,u),d(s,m),d(s,f),f.checked=e[0],p||(v=[A(f,"change",e[3]),A(f,"click",e[2])],p=!0)},p(e,[t]){1&t&&(f.checked=e[0])},i:q,o:q,d(e){e&&(g(t),g(n),g(s)),p=!1,T(v)}}}function X(e,t,n){let s
y(e,N,(e=>n(0,s=e)))
return[s,'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")',function(e){E("SE Tracker","Toggle Pref"),S("enableSeTracker",e.target.checked)},function(){s=this.checked,N.set(s)}]}class _ extends t{constructor(e){super(),n(this,e,X,K,s,{})}}const z=C([N,Q],(([e,t],n)=>{t&&e?function(e,t){const n=R(e)
t(Y(n.map((([,e])=>e))).map((e=>[e,n.filter((([,t])=>t===e)).map((([e,,,t])=>[e,t]))])).map((([e,t])=>[e,t[0][0],t[0][1],t.slice(1)])))}(t,n):n()}))
function ee(e,t,n){const s=e.slice()
return s[1]=t[n],s}function te(e){let t,n,s,a,c,d,u,A,b,x,$=[],k=new Map,E=h(e[0])
const w=e=>e[1][0]
for(let t=0;t<E.length;t+=1){let n=ee(e,E,t),s=w(n)
k.set(s,$[t]=ne(s,n))}return{c(){t=l("div"),t.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9"> </div>',n=r(),s=l("div"),s.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Creature</div>',a=r(),c=l("div"),c.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Last Kill</div>',d=r(),u=l("div"),u.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Location</div>',A=r()
for(let e=0;e<$.length;e+=1)$[e].c()
b=i()},m(e,l){o(e,t,l),o(e,n,l),o(e,s,l),o(e,a,l),o(e,c,l),o(e,d,l),o(e,u,l),o(e,A,l)
for(let t=0;t<$.length;t+=1)$[t]&&$[t].m(e,l)
o(e,b,l),x=!0},p(e,t){1&t&&(E=h(e[0]),f(),$=M($,t,w,1,e,E,k,b.parentNode,L,ne,b,ee),v())},i(e){if(!x){for(let e=0;e<E.length;e+=1)m($[e])
x=!0}},o(e){for(let e=0;e<$.length;e+=1)p($[e])
x=!1},d(e){e&&(g(t),g(n),g(s),g(a),g(c),g(d),g(u),g(A),g(b))
for(let t=0;t<$.length;t+=1)$[t].d(e)}}}function ne(e,t){let n,s,l
return s=new D({props:{entry:t[1]}}),{key:e,first:null,c(){n=i(),H(s.$$.fragment),this.first=n},m(e,t){o(e,n,t),U(s,e,t),l=!0},p(e,n){t=e
const l={}
1&n&&(l.entry=t[1]),s.$set(l)},i(e){l||(m(s.$$.fragment,e),l=!0)},o(e){p(s.$$.fragment,e),l=!1},d(e){e&&g(n),j(s,e)}}}function se(e){let t,n,s,a,i,u
s=new _({})
let A=e[0]&&te(e)
return{c(){t=l("div"),n=l("div"),H(s.$$.fragment),a=r(),i=l("div"),A&&A.c(),c(n,"class","top svelte-1dqxqm9"),c(i,"class","tracker-table svelte-1dqxqm9"),c(t,"class","container svelte-1dqxqm9")},m(e,l){o(e,t,l),d(t,n),U(s,n,null),d(t,a),d(t,i),A&&A.m(i,null),u=!0},p(e,[t]){e[0]?A?(A.p(e,t),1&t&&m(A,1)):(A=te(e),A.c(),m(A,1),A.m(i,null)):A&&(f(),p(A,1,1,(()=>{A=null})),v())},i(e){u||(m(s.$$.fragment,e),m(A),u=!0)},o(e){p(s.$$.fragment,e),p(A),u=!1},d(e){e&&g(t),j(s),A&&A.d()}}}function le(e,t,n){let s
return y(e,z,(e=>n(0,s=e))),[s]}class re extends t{constructor(e){super(),n(this,e,le,se,s,{})}}function ae(e){let t,n
return t=new re({}),{c(){H(t.$$.fragment)},m(e,s){U(t,e,s),n=!0},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}function ie(e){let t
return{c(){t=a("Super Elite Tracker")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function ce(e){let t,n
return t=new B({props:{visible:e[0],$$slots:{title:[ie],default:[ae]},$$scope:{ctx:e}}}),t.$on("close",e[1]),{c(){H(t.$$.fragment)},m(e,s){U(t,e,s),n=!0},p(e,[n]){const s={}
1&n&&(s.visible=e[0]),4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}function oe(e,t,n){let{visible:s=!0}=t
return e.$$set=e=>{"visible"in e&&n(0,s=e.visible)},[s,function(){E("SE Tracker","close"),n(0,s=!1)}]}class de extends t{constructor(e){super(),n(this,e,oe,ce,s,{visible:0})}}const ue={visible:!0}
let me=0
function fe(){me=e(ue,me,de)}export{fe as default}
//# sourceMappingURL=superelite-CMU7Ykwv.js.map
