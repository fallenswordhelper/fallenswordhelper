import{i as e}from"./instantiate-upFtXRx7.js"
import{S as t,L as n,M as s,O as l,P as r,a3 as i,am as a,Q as c,T as o,U as u,a4 as d,bc as f,bd as m,bf as p,be as v,a0 as g,X as A,N as h,R as b,d3 as $,d4 as k,b4 as x,s as y,b3 as w,_ as E,a1 as T,bt as j,ae as S,bm as C,bh as H,bi as M,bj as U,Z as L,dc as B}from"./calfSystem-DCvZki7i.js"
import{M as I}from"./ModalTitled-yH0MF38Q.js"
import{f as N}from"./formatUtcTimestamp-t57AV4Fr.js"
import{t as Q,s as q,p as R}from"./trackerPrefStore-DbIzJOZY.js"
import{u as Y}from"./uniq-DnLgxB9I.js"
import"./Modal-8CjozIrn.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./now-Cx4PsKjI.js"
import"./isArray-eVldfhw1.js"
function G(e,t,n){const s=e.slice()
return s[3]=t[n][0],s[4]=t[n][1],s}function J(e){let t,n,s
function r(e,t){return e[1]?F:O}let i=r(e),a=i(e)
return{c(){t=l("button"),a.c(),c(t,"aria-expanded",e[1]),c(t,"type","button"),c(t,"class","svelte-jlyyil")},m(l,r){o(l,t,r),a.m(t,null),n||(s=A(t,"click",e[2]),n=!0)},p(e,n){i!==(i=r(e))&&(a.d(1),a=i(e),a&&(a.c(),a.m(t,null))),2&n&&c(t,"aria-expanded",e[1])},d(e){e&&g(t),a.d(),n=!1,s()}}}function O(e){let t
return{c(){t=i(">")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function F(e){let t
return{c(){t=i("∨")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function P(e){let t,n,s,r=h(e[0][3]),i=[]
for(let t=0;t<r.length;t+=1)i[t]=V(G(e,r,t))
return{c(){t=l("div")
for(let e=0;e<i.length;e+=1)i[e].c()
c(t,"class","wide svelte-jlyyil")},m(e,n){o(e,t,n)
for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null)
s=!0},p(e,n){if(1&n){let s
for(r=h(e[0][3]),s=0;s<r.length;s+=1){const l=G(e,r,s)
i[s]?i[s].p(l,n):(i[s]=V(l),i[s].c(),i[s].m(t,null))}for(;s<i.length;s+=1)i[s].d(1)
i.length=r.length}},i(e){s||(e&&b((()=>{s&&(n||(n=$(t,k,{duration:300},!0)),n.run(1))})),s=!0)},o(e){e&&(n||(n=$(t,k,{duration:300},!1)),n.run(0)),s=!1},d(e){e&&g(t),x(i,e),e&&n&&n.end()}}}function V(e){let t,n,s,a,f,m,p,v,A,h=N(e[3])+"",b=e[4]+""
return{c(){t=l("div"),t.innerHTML="",n=r(),s=l("div"),s.innerHTML="",a=r(),f=l("div"),m=i(h),p=r(),v=l("div"),A=i(b),c(f,"class","last-kill svelte-jlyyil")},m(e,l){o(e,t,l),o(e,n,l),o(e,s,l),o(e,a,l),o(e,f,l),u(f,m),o(e,p,l),o(e,v,l),u(v,A)},p(e,t){1&t&&h!==(h=N(e[3])+"")&&d(m,h),1&t&&b!==(b=e[4]+"")&&d(A,b)},d(e){e&&(g(t),g(n),g(s),g(a),g(f),g(p),g(v))}}}function W(e){let t,n,s,A,h,b,$,k,x,y,w,E,T=e[0][0].replaceAll("_"," ")+"",j=N(e[0][1])+"",S=e[0][2]+"",C=e[0][3].length&&J(e),H=e[1]&&P(e)
return{c(){t=l("div"),C&&C.c(),n=r(),s=l("div"),A=i(T),h=r(),b=l("div"),$=i(j),k=r(),x=l("div"),y=i(S),w=r(),H&&H.c(),E=a(),c(t,"class","expando svelte-jlyyil"),c(b,"class","last-kill svelte-jlyyil")},m(e,l){o(e,t,l),C&&C.m(t,null),o(e,n,l),o(e,s,l),u(s,A),o(e,h,l),o(e,b,l),u(b,$),o(e,k,l),o(e,x,l),u(x,y),o(e,w,l),H&&H.m(e,l),o(e,E,l)},p(e,[n]){e[0][3].length?C?C.p(e,n):(C=J(e),C.c(),C.m(t,null)):C&&(C.d(1),C=null),1&n&&T!==(T=e[0][0].replaceAll("_"," ")+"")&&d(A,T),1&n&&j!==(j=N(e[0][1])+"")&&d($,j),1&n&&S!==(S=e[0][2]+"")&&d(y,S),e[1]?H?(H.p(e,n),2&n&&f(H,1)):(H=P(e),H.c(),f(H,1),H.m(E.parentNode,E)):H&&(m(),p(H,1,1,(()=>{H=null})),v())},i(e){f(H)},o(e){p(H)},d(e){e&&(g(t),g(n),g(s),g(h),g(b),g(k),g(x),g(w),g(E)),C&&C.d(),H&&H.d(e)}}}function Z(e,t,n){let{entry:s}=t,l=!1
return e.$$set=e=>{"entry"in e&&n(0,s=e.entry)},[s,l,()=>{y("SE Tracker","Expand Row"),n(1,l=!l)}]}class D extends t{constructor(e){super(),n(this,e,Z,W,s,{entry:0})}}function K(e){let t,n,s,a,d,f,m,p,v
return{c(){t=l("span"),n=r(),s=l("label"),a=i("Enable SE Tracker\n  [ "),d=l("div"),d.innerHTML='?\n    <div class="tooltiptext svelte-o8t6pc"><span class="tooltiptitle svelte-o8t6pc">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/>\n        This is DIFFERENT from the usual FSH network activity.<br/>\n        When this is enabled, if you have ANY game page open in a browser tab it will scan the SE\n        Log every 10 minutes.<br/>\n        You do not need auto-refresh for this to work.</div></div>',f=i(" ]:\n  "),m=l("input"),c(t,"class","network svelte-o8t6pc"),w(t,"background-image",e[1]),c(d,"class","tooltip svelte-o8t6pc"),c(m,"type","checkbox"),c(m,"class","svelte-o8t6pc")},m(l,r){o(l,t,r),o(l,n,r),o(l,s,r),u(s,a),u(s,d),u(s,f),u(s,m),m.checked=e[0],p||(v=[A(m,"change",e[3]),A(m,"click",e[2])],p=!0)},p(e,[t]){1&t&&(m.checked=e[0])},i:E,o:E,d(e){e&&(g(t),g(n),g(s)),p=!1,T(v)}}}function X(e,t,n){let s
j(e,Q,(e=>n(0,s=e)))
return[s,'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")',function(e){y("SE Tracker","Toggle Pref"),S("enableSeTracker",e.target.checked)},function(){s=this.checked,Q.set(s)}]}class _ extends t{constructor(e){super(),n(this,e,X,K,s,{})}}const z=C([Q,q],(([e,t],n)=>{t&&e?function(e,t){const n=R(e)
t(Y(n.map((([,e])=>e))).map((e=>[e,n.filter((([,t])=>t===e)).map((([e,,,t])=>[e,t]))])).map((([e,t])=>[e,t[0][0],t[0][1],t.slice(1)])))}(t,n):n()}))
function ee(e,t,n){const s=e.slice()
return s[1]=t[n],s}function te(e){let t,n,s,i,c,u,d,A,b,$,k=[],x=new Map,y=h(e[0])
const w=e=>e[1][0]
for(let t=0;t<y.length;t+=1){let n=ee(e,y,t),s=w(n)
x.set(s,k[t]=ne(s,n))}return{c(){t=l("div"),t.innerHTML='<div class="innerColumnHeader svelte-n6fxgn"> </div>',n=r(),s=l("div"),s.innerHTML='<div class="innerColumnHeader svelte-n6fxgn">Creature</div>',i=r(),c=l("div"),c.innerHTML='<div class="innerColumnHeader svelte-n6fxgn">Last Kill</div>',u=r(),d=l("div"),d.innerHTML='<div class="innerColumnHeader svelte-n6fxgn">Location</div>',A=r()
for(let e=0;e<k.length;e+=1)k[e].c()
b=a()},m(e,l){o(e,t,l),o(e,n,l),o(e,s,l),o(e,i,l),o(e,c,l),o(e,u,l),o(e,d,l),o(e,A,l)
for(let t=0;t<k.length;t+=1)k[t]&&k[t].m(e,l)
o(e,b,l),$=!0},p(e,t){1&t&&(y=h(e[0]),m(),k=L(k,t,w,1,e,y,x,b.parentNode,B,ne,b,ee),v())},i(e){if(!$){for(let e=0;e<y.length;e+=1)f(k[e])
$=!0}},o(e){for(let e=0;e<k.length;e+=1)p(k[e])
$=!1},d(e){e&&(g(t),g(n),g(s),g(i),g(c),g(u),g(d),g(A),g(b))
for(let t=0;t<k.length;t+=1)k[t].d(e)}}}function ne(e,t){let n,s,l
return s=new D({props:{entry:t[1]}}),{key:e,first:null,c(){n=a(),H(s.$$.fragment),this.first=n},m(e,t){o(e,n,t),M(s,e,t),l=!0},p(e,n){t=e
const l={}
1&n&&(l.entry=t[1]),s.$set(l)},i(e){l||(f(s.$$.fragment,e),l=!0)},o(e){p(s.$$.fragment,e),l=!1},d(e){e&&g(n),U(s,e)}}}function se(e){let t,n,s,i,a,d
s=new _({})
let A=e[0]&&te(e)
return{c(){t=l("div"),n=l("div"),H(s.$$.fragment),i=r(),a=l("div"),A&&A.c(),c(n,"class","top svelte-n6fxgn"),c(a,"class","tracker-table svelte-n6fxgn"),c(t,"class","container svelte-n6fxgn")},m(e,l){o(e,t,l),u(t,n),M(s,n,null),u(t,i),u(t,a),A&&A.m(a,null),d=!0},p(e,[t]){e[0]?A?(A.p(e,t),1&t&&f(A,1)):(A=te(e),A.c(),f(A,1),A.m(a,null)):A&&(m(),p(A,1,1,(()=>{A=null})),v())},i(e){d||(f(s.$$.fragment,e),f(A),d=!0)},o(e){p(s.$$.fragment,e),p(A),d=!1},d(e){e&&g(t),U(s),A&&A.d()}}}function le(e,t,n){let s
return j(e,z,(e=>n(0,s=e))),[s]}class re extends t{constructor(e){super(),n(this,e,le,se,s,{})}}function ie(e){let t,n
return t=new re({}),{c(){H(t.$$.fragment)},m(e,s){M(t,e,s),n=!0},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function ae(e){let t
return{c(){t=i("Super Elite Tracker")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function ce(e){let t,n
return t=new I({props:{visible:e[0],$$slots:{title:[ae],default:[ie]},$$scope:{ctx:e}}}),t.$on("close",e[1]),{c(){H(t.$$.fragment)},m(e,s){M(t,e,s),n=!0},p(e,[n]){const s={}
1&n&&(s.visible=e[0]),4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function oe(e,t,n){let{visible:s=!0}=t
return e.$$set=e=>{"visible"in e&&n(0,s=e.visible)},[s,function(){y("SE Tracker","close"),n(0,s=!1)}]}var ue=class extends t{constructor(e){super(),n(this,e,oe,ce,s,{visible:0})}}
const de={visible:!0}
let fe=0
function me(){fe=e(de,fe,ue)}export{me as default}
//# sourceMappingURL=superelite-D06Wji1n.js.map
