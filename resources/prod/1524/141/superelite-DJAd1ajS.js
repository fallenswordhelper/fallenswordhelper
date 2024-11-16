import{i as e}from"./Modal-D6I5F6g9.js"
import{S as t,L as n,M as s,O as r,R as l,V as i,X as a,a2 as c,U as o,N as d,P as u,T as m,W as f,b9 as p,db as v,dc as g,a4 as A,bf as h,bg as b,bj as x,bk as $,am as k,s as E,Y as w,Z as q,b5 as T,bx as y,ad as S,bo as C,be as H,bh as U,bi as j,_ as M,dk as L}from"./calfSystem-Blt4DbaE.js"
import{M as B}from"./ModalTitled-DCrh-JGN.js"
import{f as I}from"./formatUtcTimestamp-t57AV4Fr.js"
import{t as N,p as Y,s as Q}from"./trackerPrefStore-Da3PKx5-.js"
import{u as R}from"./uniq-D422dDMJ.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./isArray-eVldfhw1.js"
function F(e,t,n){const s=e.slice()
return s[3]=t[n][0],s[4]=t[n][1],s}function G(e){let t,n,s
function i(e,t){return e[1]?O:J}let d=i(e),u=d(e)
return{c(){t=o("button"),u.c(),a(t,"aria-expanded",e[1]),a(t,"type","button"),a(t,"class","svelte-1rxsxdp")},m(r,i){l(r,t,i),u.m(t,null),n||(s=c(t,"click",e[2]),n=!0)},p(e,n){d!==(d=i(e))&&(u.d(1),u=d(e),u&&(u.c(),u.m(t,null))),2&n&&a(t,"aria-expanded",e[1])},d(e){e&&r(t),u.d(),n=!1,s()}}}function J(e){let t
return{c(){t=i(">")},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}function O(e){let t
return{c(){t=i("∨")},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}function V(e){let t,n,s,i=d(e[0][3]),c=[]
for(let t=0;t<i.length;t+=1)c[t]=W(F(e,i,t))
return{c(){t=o("div")
for(let e=0;e<c.length;e+=1)c[e].c()
a(t,"class","wide svelte-1rxsxdp")},m(e,n){l(e,t,n)
for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,null)
s=!0},p(e,n){if(1&n){let s
for(i=d(e[0][3]),s=0;s<i.length;s+=1){const r=F(e,i,s)
c[s]?c[s].p(r,n):(c[s]=W(r),c[s].c(),c[s].m(t,null))}for(;s<c.length;s+=1)c[s].d(1)
c.length=i.length}},i(e){s||(e&&A((()=>{s&&(n||(n=v(t,g,{duration:300},!0)),n.run(1))})),s=!0)},o(e){e&&(n||(n=v(t,g,{duration:300},!1)),n.run(0)),s=!1},d(e){e&&r(t),p(c,e),e&&n&&n.end()}}}function W(e){let t,n,s,c,d,p,v,g,A,h=I(e[3])+"",b=e[4]+""
return{c(){t=o("div"),n=f(),s=o("div"),c=f(),d=o("div"),p=i(h),v=f(),g=o("div"),A=i(b),a(d,"class","last-kill svelte-1rxsxdp")},m(e,r){l(e,t,r),l(e,n,r),l(e,s,r),l(e,c,r),l(e,d,r),m(d,p),l(e,v,r),l(e,g,r),m(g,A)},p(e,t){1&t&&h!==(h=I(e[3])+"")&&u(p,h),1&t&&b!==(b=e[4]+"")&&u(A,b)},d(e){e&&(r(t),r(n),r(s),r(c),r(d),r(v),r(g))}}}function P(e){let t,n,s,c,d,p,v,g,A,E,w,q,T=e[0][0].replaceAll("_"," ")+"",y=I(e[0][1])+"",S=e[0][2]+"",C=e[0][3].length&&G(e),H=e[1]&&V(e)
return{c(){t=o("div"),C&&C.c(),n=f(),s=o("div"),c=i(T),d=f(),p=o("div"),v=i(y),g=f(),A=o("div"),E=i(S),w=f(),H&&H.c(),q=k(),a(t,"class","expando svelte-1rxsxdp"),a(p,"class","last-kill svelte-1rxsxdp")},m(e,r){l(e,t,r),C&&C.m(t,null),l(e,n,r),l(e,s,r),m(s,c),l(e,d,r),l(e,p,r),m(p,v),l(e,g,r),l(e,A,r),m(A,E),l(e,w,r),H&&H.m(e,r),l(e,q,r)},p(e,[n]){e[0][3].length?C?C.p(e,n):(C=G(e),C.c(),C.m(t,null)):C&&(C.d(1),C=null),1&n&&T!==(T=e[0][0].replaceAll("_"," ")+"")&&u(c,T),1&n&&y!==(y=I(e[0][1])+"")&&u(v,y),1&n&&S!==(S=e[0][2]+"")&&u(E,S),e[1]?H?(H.p(e,n),2&n&&b(H,1)):(H=V(e),H.c(),b(H,1),H.m(q.parentNode,q)):H&&(x(),h(H,1,1,(()=>{H=null})),$())},i(e){b(H)},o(e){h(H)},d(e){e&&(r(t),r(n),r(s),r(d),r(p),r(g),r(A),r(w),r(q)),C&&C.d(),H&&H.d(e)}}}function Z(e,t,n){let{entry:s}=t,r=!1
return e.$$set=e=>{"entry"in e&&n(0,s=e.entry)},[s,r,()=>{E("SE Tracker","Expand Row"),n(1,r=!r)}]}class D extends t{constructor(e){super(),n(this,e,Z,P,s,{entry:0})}}function K(e){let t,n,s,d,u,p,v,g,A
return{c(){t=o("span"),n=f(),s=o("label"),d=i("Enable SE Tracker [ \n  "),u=o("div"),u.innerHTML='?\n    <div class="tooltiptext svelte-1hf4bli"><span class="tooltiptitle svelte-1hf4bli">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/>\n        This is DIFFERENT from the usual FSH network activity.<br/>\n        When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/>\n        You do not need auto-refresh for this to work.</div></div>',p=i("\n   ]:\n  "),v=o("input"),a(t,"class","network svelte-1hf4bli"),T(t,"background-image",e[1]),a(u,"class","tooltip svelte-1hf4bli"),a(v,"type","checkbox"),a(v,"class","svelte-1hf4bli")},m(r,i){l(r,t,i),l(r,n,i),l(r,s,i),m(s,d),m(s,u),m(s,p),m(s,v),v.checked=e[0],g||(A=[c(v,"change",e[3]),c(v,"click",e[2])],g=!0)},p(e,[t]){1&t&&(v.checked=e[0])},i:q,o:q,d(e){e&&(r(t),r(n),r(s)),g=!1,w(A)}}}function X(e,t,n){let s
y(e,N,(e=>n(0,s=e)))
return[s,'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")',function(e){E("SE Tracker","Toggle Pref"),S("enableSeTracker",e.target.checked)},function(){s=this.checked,N.set(s)}]}class _ extends t{constructor(e){super(),n(this,e,X,K,s,{})}}const z=C([N,Q],(([e,t],n)=>{t&&e?function(e,t){const n=Y(e)
t(R(n.map((([,e])=>e))).map((e=>[e,n.filter((([,t])=>t===e)).map((([e,,,t])=>[e,t]))])).map((([e,t])=>[e,t[0][0],t[0][1],t.slice(1)])))}(t,n):n()}))
function ee(e,t,n){const s=e.slice()
return s[1]=t[n],s}function te(e){let t,n,s,i,a,c,u,m,p,v,g=[],A=new Map,E=d(e[0])
const w=e=>e[1][0]
for(let t=0;t<E.length;t+=1){let n=ee(e,E,t),s=w(n)
A.set(s,g[t]=ne(s,n))}return{c(){t=o("div"),t.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9"> </div>',n=f(),s=o("div"),s.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Creature</div>',i=f(),a=o("div"),a.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Last Kill</div>',c=f(),u=o("div"),u.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Location</div>',m=f()
for(let e=0;e<g.length;e+=1)g[e].c()
p=k()},m(e,r){l(e,t,r),l(e,n,r),l(e,s,r),l(e,i,r),l(e,a,r),l(e,c,r),l(e,u,r),l(e,m,r)
for(let t=0;t<g.length;t+=1)g[t]&&g[t].m(e,r)
l(e,p,r),v=!0},p(e,t){1&t&&(E=d(e[0]),x(),g=M(g,t,w,1,e,E,A,p.parentNode,L,ne,p,ee),$())},i(e){if(!v){for(let e=0;e<E.length;e+=1)b(g[e])
v=!0}},o(e){for(let e=0;e<g.length;e+=1)h(g[e])
v=!1},d(e){e&&(r(t),r(n),r(s),r(i),r(a),r(c),r(u),r(m),r(p))
for(let t=0;t<g.length;t+=1)g[t].d(e)}}}function ne(e,t){let n,s,i
return s=new D({props:{entry:t[1]}}),{key:e,first:null,c(){n=k(),j(s.$$.fragment),this.first=n},m(e,t){l(e,n,t),U(s,e,t),i=!0},p(e,n){t=e
const r={}
1&n&&(r.entry=t[1]),s.$set(r)},i(e){i||(b(s.$$.fragment,e),i=!0)},o(e){h(s.$$.fragment,e),i=!1},d(e){e&&r(n),H(s,e)}}}function se(e){let t,n,s,i,c,d
s=new _({})
let u=e[0]&&te(e)
return{c(){t=o("div"),n=o("div"),j(s.$$.fragment),i=f(),c=o("div"),u&&u.c(),a(n,"class","top svelte-1dqxqm9"),a(c,"class","tracker-table svelte-1dqxqm9"),a(t,"class","container svelte-1dqxqm9")},m(e,r){l(e,t,r),m(t,n),U(s,n,null),m(t,i),m(t,c),u&&u.m(c,null),d=!0},p(e,[t]){e[0]?u?(u.p(e,t),1&t&&b(u,1)):(u=te(e),u.c(),b(u,1),u.m(c,null)):u&&(x(),h(u,1,1,(()=>{u=null})),$())},i(e){d||(b(s.$$.fragment,e),b(u),d=!0)},o(e){h(s.$$.fragment,e),h(u),d=!1},d(e){e&&r(t),H(s),u&&u.d()}}}function re(e,t,n){let s
return y(e,z,(e=>n(0,s=e))),[s]}class le extends t{constructor(e){super(),n(this,e,re,se,s,{})}}function ie(e){let t,n
return t=new le({}),{c(){j(t.$$.fragment)},m(e,s){U(t,e,s),n=!0},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){H(t,e)}}}function ae(e){let t
return{c(){t=i("Super Elite Tracker")},m(e,n){l(e,t,n)},d(e){e&&r(t)}}}function ce(e){let t,n
return t=new B({props:{visible:e[0],$$slots:{title:[ae],default:[ie]},$$scope:{ctx:e}}}),t.$on("close",e[1]),{c(){j(t.$$.fragment)},m(e,s){U(t,e,s),n=!0},p(e,[n]){const s={}
1&n&&(s.visible=e[0]),4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){H(t,e)}}}function oe(e,t,n){let{visible:s=!0}=t
return e.$$set=e=>{"visible"in e&&n(0,s=e.visible)},[s,function(){E("SE Tracker","close"),n(0,s=!1)}]}class de extends t{constructor(e){super(),n(this,e,oe,ce,s,{visible:0})}}const ue={visible:!0}
let me=0
function fe(){me=e(ue,me,de)}export{fe as default}
//# sourceMappingURL=superelite-DJAd1ajS.js.map
