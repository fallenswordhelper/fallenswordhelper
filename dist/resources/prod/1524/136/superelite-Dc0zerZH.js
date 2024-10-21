import{i as e}from"./instantiate-upFtXRx7.js"
import{S as t,L as n,M as s,O as r,P as l,a3 as i,am as a,Q as c,T as o,U as d,a4 as u,be as m,bf as f,bh as p,bg as v,a0 as g,X as A,N as h,R as b,dc as x,dd as $,b6 as k,s as w,b5 as E,_ as q,a1 as T,bx as y,ae as S,bo as C,bj as H,bk as j,bl as U,Z as M,dl as B}from"./calfSystem-CUgWHLtG.js"
import{M as L}from"./ModalTitled-DwG8wP1C.js"
import{f as I}from"./formatUtcTimestamp-t57AV4Fr.js"
import{t as N,s as Q,p as R}from"./trackerPrefStore-BMTmIFC2.js"
import{u as Y}from"./uniq-Dzsj1uso.js"
import"./Modal-BIzCdrcz.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./isArray-eVldfhw1.js"
function G(e,t,n){const s=e.slice()
return s[3]=t[n][0],s[4]=t[n][1],s}function J(e){let t,n,s
function l(e,t){return e[1]?F:O}let i=l(e),a=i(e)
return{c(){t=r("button"),a.c(),c(t,"aria-expanded",e[1]),c(t,"type","button"),c(t,"class","svelte-1rxsxdp")},m(r,l){o(r,t,l),a.m(t,null),n||(s=A(t,"click",e[2]),n=!0)},p(e,n){i!==(i=l(e))&&(a.d(1),a=i(e),a&&(a.c(),a.m(t,null))),2&n&&c(t,"aria-expanded",e[1])},d(e){e&&g(t),a.d(),n=!1,s()}}}function O(e){let t
return{c(){t=i(">")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function F(e){let t
return{c(){t=i("∨")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function P(e){let t,n,s,l=h(e[0][3]),i=[]
for(let t=0;t<l.length;t+=1)i[t]=V(G(e,l,t))
return{c(){t=r("div")
for(let e=0;e<i.length;e+=1)i[e].c()
c(t,"class","wide svelte-1rxsxdp")},m(e,n){o(e,t,n)
for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null)
s=!0},p(e,n){if(1&n){let s
for(l=h(e[0][3]),s=0;s<l.length;s+=1){const r=G(e,l,s)
i[s]?i[s].p(r,n):(i[s]=V(r),i[s].c(),i[s].m(t,null))}for(;s<i.length;s+=1)i[s].d(1)
i.length=l.length}},i(e){s||(e&&b((()=>{s&&(n||(n=x(t,$,{duration:300},!0)),n.run(1))})),s=!0)},o(e){e&&(n||(n=x(t,$,{duration:300},!1)),n.run(0)),s=!1},d(e){e&&g(t),k(i,e),e&&n&&n.end()}}}function V(e){let t,n,s,a,m,f,p,v,A,h=I(e[3])+"",b=e[4]+""
return{c(){t=r("div"),n=l(),s=r("div"),a=l(),m=r("div"),f=i(h),p=l(),v=r("div"),A=i(b),c(m,"class","last-kill svelte-1rxsxdp")},m(e,r){o(e,t,r),o(e,n,r),o(e,s,r),o(e,a,r),o(e,m,r),d(m,f),o(e,p,r),o(e,v,r),d(v,A)},p(e,t){1&t&&h!==(h=I(e[3])+"")&&u(f,h),1&t&&b!==(b=e[4]+"")&&u(A,b)},d(e){e&&(g(t),g(n),g(s),g(a),g(m),g(p),g(v))}}}function W(e){let t,n,s,A,h,b,x,$,k,w,E,q,T=e[0][0].replaceAll("_"," ")+"",y=I(e[0][1])+"",S=e[0][2]+"",C=e[0][3].length&&J(e),H=e[1]&&P(e)
return{c(){t=r("div"),C&&C.c(),n=l(),s=r("div"),A=i(T),h=l(),b=r("div"),x=i(y),$=l(),k=r("div"),w=i(S),E=l(),H&&H.c(),q=a(),c(t,"class","expando svelte-1rxsxdp"),c(b,"class","last-kill svelte-1rxsxdp")},m(e,r){o(e,t,r),C&&C.m(t,null),o(e,n,r),o(e,s,r),d(s,A),o(e,h,r),o(e,b,r),d(b,x),o(e,$,r),o(e,k,r),d(k,w),o(e,E,r),H&&H.m(e,r),o(e,q,r)},p(e,[n]){e[0][3].length?C?C.p(e,n):(C=J(e),C.c(),C.m(t,null)):C&&(C.d(1),C=null),1&n&&T!==(T=e[0][0].replaceAll("_"," ")+"")&&u(A,T),1&n&&y!==(y=I(e[0][1])+"")&&u(x,y),1&n&&S!==(S=e[0][2]+"")&&u(w,S),e[1]?H?(H.p(e,n),2&n&&m(H,1)):(H=P(e),H.c(),m(H,1),H.m(q.parentNode,q)):H&&(f(),p(H,1,1,(()=>{H=null})),v())},i(e){m(H)},o(e){p(H)},d(e){e&&(g(t),g(n),g(s),g(h),g(b),g($),g(k),g(E),g(q)),C&&C.d(),H&&H.d(e)}}}function Z(e,t,n){let{entry:s}=t,r=!1
return e.$$set=e=>{"entry"in e&&n(0,s=e.entry)},[s,r,()=>{w("SE Tracker","Expand Row"),n(1,r=!r)}]}class D extends t{constructor(e){super(),n(this,e,Z,W,s,{entry:0})}}function K(e){let t,n,s,a,u,m,f,p,v
return{c(){t=r("span"),n=l(),s=r("label"),a=i("Enable SE Tracker [ \n  "),u=r("div"),u.innerHTML='?\n    <div class="tooltiptext svelte-1hf4bli"><span class="tooltiptitle svelte-1hf4bli">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/>\n        This is DIFFERENT from the usual FSH network activity.<br/>\n        When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/>\n        You do not need auto-refresh for this to work.</div></div>',m=i("\n   ]:\n  "),f=r("input"),c(t,"class","network svelte-1hf4bli"),E(t,"background-image",e[1]),c(u,"class","tooltip svelte-1hf4bli"),c(f,"type","checkbox"),c(f,"class","svelte-1hf4bli")},m(r,l){o(r,t,l),o(r,n,l),o(r,s,l),d(s,a),d(s,u),d(s,m),d(s,f),f.checked=e[0],p||(v=[A(f,"change",e[3]),A(f,"click",e[2])],p=!0)},p(e,[t]){1&t&&(f.checked=e[0])},i:q,o:q,d(e){e&&(g(t),g(n),g(s)),p=!1,T(v)}}}function X(e,t,n){let s
y(e,N,(e=>n(0,s=e)))
return[s,'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")',function(e){w("SE Tracker","Toggle Pref"),S("enableSeTracker",e.target.checked)},function(){s=this.checked,N.set(s)}]}class _ extends t{constructor(e){super(),n(this,e,X,K,s,{})}}const z=C([N,Q],(([e,t],n)=>{t&&e?function(e,t){const n=R(e)
t(Y(n.map((([,e])=>e))).map((e=>[e,n.filter((([,t])=>t===e)).map((([e,,,t])=>[e,t]))])).map((([e,t])=>[e,t[0][0],t[0][1],t.slice(1)])))}(t,n):n()}))
function ee(e,t,n){const s=e.slice()
return s[1]=t[n],s}function te(e){let t,n,s,i,c,d,u,A,b,x,$=[],k=new Map,w=h(e[0])
const E=e=>e[1][0]
for(let t=0;t<w.length;t+=1){let n=ee(e,w,t),s=E(n)
k.set(s,$[t]=ne(s,n))}return{c(){t=r("div"),t.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9"> </div>',n=l(),s=r("div"),s.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Creature</div>',i=l(),c=r("div"),c.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Last Kill</div>',d=l(),u=r("div"),u.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Location</div>',A=l()
for(let e=0;e<$.length;e+=1)$[e].c()
b=a()},m(e,r){o(e,t,r),o(e,n,r),o(e,s,r),o(e,i,r),o(e,c,r),o(e,d,r),o(e,u,r),o(e,A,r)
for(let t=0;t<$.length;t+=1)$[t]&&$[t].m(e,r)
o(e,b,r),x=!0},p(e,t){1&t&&(w=h(e[0]),f(),$=M($,t,E,1,e,w,k,b.parentNode,B,ne,b,ee),v())},i(e){if(!x){for(let e=0;e<w.length;e+=1)m($[e])
x=!0}},o(e){for(let e=0;e<$.length;e+=1)p($[e])
x=!1},d(e){e&&(g(t),g(n),g(s),g(i),g(c),g(d),g(u),g(A),g(b))
for(let t=0;t<$.length;t+=1)$[t].d(e)}}}function ne(e,t){let n,s,r
return s=new D({props:{entry:t[1]}}),{key:e,first:null,c(){n=a(),H(s.$$.fragment),this.first=n},m(e,t){o(e,n,t),j(s,e,t),r=!0},p(e,n){t=e
const r={}
1&n&&(r.entry=t[1]),s.$set(r)},i(e){r||(m(s.$$.fragment,e),r=!0)},o(e){p(s.$$.fragment,e),r=!1},d(e){e&&g(n),U(s,e)}}}function se(e){let t,n,s,i,a,u
s=new _({})
let A=e[0]&&te(e)
return{c(){t=r("div"),n=r("div"),H(s.$$.fragment),i=l(),a=r("div"),A&&A.c(),c(n,"class","top svelte-1dqxqm9"),c(a,"class","tracker-table svelte-1dqxqm9"),c(t,"class","container svelte-1dqxqm9")},m(e,r){o(e,t,r),d(t,n),j(s,n,null),d(t,i),d(t,a),A&&A.m(a,null),u=!0},p(e,[t]){e[0]?A?(A.p(e,t),1&t&&m(A,1)):(A=te(e),A.c(),m(A,1),A.m(a,null)):A&&(f(),p(A,1,1,(()=>{A=null})),v())},i(e){u||(m(s.$$.fragment,e),m(A),u=!0)},o(e){p(s.$$.fragment,e),p(A),u=!1},d(e){e&&g(t),U(s),A&&A.d()}}}function re(e,t,n){let s
return y(e,z,(e=>n(0,s=e))),[s]}class le extends t{constructor(e){super(),n(this,e,re,se,s,{})}}function ie(e){let t,n
return t=new le({}),{c(){H(t.$$.fragment)},m(e,s){j(t,e,s),n=!0},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function ae(e){let t
return{c(){t=i("Super Elite Tracker")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function ce(e){let t,n
return t=new L({props:{visible:e[0],$$slots:{title:[ae],default:[ie]},$$scope:{ctx:e}}}),t.$on("close",e[1]),{c(){H(t.$$.fragment)},m(e,s){j(t,e,s),n=!0},p(e,[n]){const s={}
1&n&&(s.visible=e[0]),4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function oe(e,t,n){let{visible:s=!0}=t
return e.$$set=e=>{"visible"in e&&n(0,s=e.visible)},[s,function(){w("SE Tracker","close"),n(0,s=!1)}]}class de extends t{constructor(e){super(),n(this,e,oe,ce,s,{visible:0})}}const ue={visible:!0}
let me=0
function fe(){me=e(ue,me,de)}export{fe as default}
//# sourceMappingURL=superelite-Dc0zerZH.js.map
