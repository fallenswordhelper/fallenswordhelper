import{i as e}from"./instantiate-880b172e.js"
import{S as t,L as n,M as r,N as s,O as l,a1 as a,aj as i,P as c,R as o,T as u,a2 as f,ba as d,bb as m,bd as p,bc as v,Z as g,W as A,Q as h,cZ as b,c_ as $,b0 as k,n as x,a$ as w,Y as E,_ as T,br as S,ab as y,bk as C,bf as H,bg as j,bh as L}from"./calfSystem-34913441.js"
import{M}from"./ModalTitled-945b0136.js"
import{e as U,u as B,o as I}from"./each-6f7f5a14.js"
import{f as Y}from"./formatUtcDateTime-1099acf4.js"
import{t as N,s as Q,p as q}from"./trackerPrefStore-7e77e94c.js"
import{u as R}from"./uniq-a7375dfa.js"
import"./Modal-108b3dd4.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
import"./numberIsNaN-a40c3bbb.js"
import"./now-6f22aec9.js"
import"./idb-ec5d6344.js"
function G(e){return Y(new Date(1e3*e))}function J(e,t,n){const r=e.slice()
return r[3]=t[n][0],r[4]=t[n][1],r}function O(e){let t,n,r
function l(e,t){return e[1]?Z:W}let a=l(e),i=a(e)
return{c(){t=s("button"),i.c(),c(t,"aria-expanded",e[1]),c(t,"type","button"),c(t,"class","svelte-455rff")},m(s,l){o(s,t,l),i.m(t,null),n||(r=A(t,"click",e[2]),n=!0)},p(e,n){a!==(a=l(e))&&(i.d(1),i=a(e),i&&(i.c(),i.m(t,null))),2&n&&c(t,"aria-expanded",e[1])},d(e){e&&g(t),i.d(),n=!1,r()}}}function W(e){let t
return{c(){t=a(">")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function Z(e){let t
return{c(){t=a("∨")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function D(e){let t,n,r,l=U(e[0][3]),a=[]
for(let t=0;t<l.length;t+=1)a[t]=F(J(e,l,t))
return{c(){t=s("div")
for(let e=0;e<a.length;e+=1)a[e].c()
c(t,"class","wide svelte-455rff")},m(e,n){o(e,t,n)
for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(t,null)
r=!0},p(e,n){if(1&n){let r
for(l=U(e[0][3]),r=0;r<l.length;r+=1){const s=J(e,l,r)
a[r]?a[r].p(s,n):(a[r]=F(s),a[r].c(),a[r].m(t,null))}for(;r<a.length;r+=1)a[r].d(1)
a.length=l.length}},i(e){r||(e&&h((()=>{r&&(n||(n=b(t,$,{duration:300},!0)),n.run(1))})),r=!0)},o(e){e&&(n||(n=b(t,$,{duration:300},!1)),n.run(0)),r=!1},d(e){e&&g(t),k(a,e),e&&n&&n.end()}}}function F(e){let t,n,r,i,d,m,p,v,A,h=G(e[3])+"",b=e[4]+""
return{c(){t=s("div"),t.innerHTML="",n=l(),r=s("div"),r.innerHTML="",i=l(),d=s("div"),m=a(h),p=l(),v=s("div"),A=a(b),c(d,"class","last-kill svelte-455rff")},m(e,s){o(e,t,s),o(e,n,s),o(e,r,s),o(e,i,s),o(e,d,s),u(d,m),o(e,p,s),o(e,v,s),u(v,A)},p(e,t){1&t&&h!==(h=G(e[3])+"")&&f(m,h),1&t&&b!==(b=e[4]+"")&&f(A,b)},d(e){e&&(g(t),g(n),g(r),g(i),g(d),g(p),g(v))}}}function P(e){let t,n,r,A,h,b,$,k,x,w,E,T,S=e[0][0].replaceAll("_"," ")+"",y=G(e[0][1])+"",C=e[0][2]+"",H=e[0][3].length&&O(e),j=e[1]&&D(e)
return{c(){t=s("div"),H&&H.c(),n=l(),r=s("div"),A=a(S),h=l(),b=s("div"),$=a(y),k=l(),x=s("div"),w=a(C),E=l(),j&&j.c(),T=i(),c(t,"class","expando svelte-455rff"),c(b,"class","last-kill svelte-455rff")},m(e,s){o(e,t,s),H&&H.m(t,null),o(e,n,s),o(e,r,s),u(r,A),o(e,h,s),o(e,b,s),u(b,$),o(e,k,s),o(e,x,s),u(x,w),o(e,E,s),j&&j.m(e,s),o(e,T,s)},p(e,[n]){e[0][3].length?H?H.p(e,n):(H=O(e),H.c(),H.m(t,null)):H&&(H.d(1),H=null),1&n&&S!==(S=e[0][0].replaceAll("_"," ")+"")&&f(A,S),1&n&&y!==(y=G(e[0][1])+"")&&f($,y),1&n&&C!==(C=e[0][2]+"")&&f(w,C),e[1]?j?(j.p(e,n),2&n&&d(j,1)):(j=D(e),j.c(),d(j,1),j.m(T.parentNode,T)):j&&(m(),p(j,1,1,(()=>{j=null})),v())},i(e){d(j)},o(e){p(j)},d(e){e&&(g(t),g(n),g(r),g(h),g(b),g(k),g(x),g(E),g(T)),H&&H.d(),j&&j.d(e)}}}function V(e,t,n){let{entry:r}=t,s=!1
return e.$$set=e=>{"entry"in e&&n(0,r=e.entry)},[r,s,()=>{x("SE Tracker","Expand Row"),n(1,s=!s)}]}class K extends t{constructor(e){super(),n(this,e,V,P,r,{entry:0})}}function _(e){let t,n,r,i,f,d,m,p,v
return{c(){t=s("span"),n=l(),r=s("label"),i=a("Enable SE Tracker\n  [ "),f=s("div"),f.innerHTML='?\n    <div class="tooltiptext svelte-o8t6pc"><span class="tooltiptitle svelte-o8t6pc">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/>\n        This is DIFFERENT from the usual FSH network activity.<br/>\n        When this is enabled, if you have ANY game page open in a browser tab it will scan the SE\n        Log every 10 minutes.<br/>\n        You do not need auto-refresh for this to work.</div></div>',d=a(" ]:\n  "),m=s("input"),c(t,"class","network svelte-o8t6pc"),w(t,"background-image",e[1]),c(f,"class","tooltip svelte-o8t6pc"),c(m,"type","checkbox"),c(m,"class","svelte-o8t6pc")},m(s,l){o(s,t,l),o(s,n,l),o(s,r,l),u(r,i),u(r,f),u(r,d),u(r,m),m.checked=e[0],p||(v=[A(m,"change",e[3]),A(m,"click",e[2])],p=!0)},p(e,[t]){1&t&&(m.checked=e[0])},i:E,o:E,d(e){e&&(g(t),g(n),g(r)),p=!1,T(v)}}}function X(e,t,n){let r
S(e,N,(e=>n(0,r=e)))
return[r,'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")',function(e){x("SE Tracker","Toggle Pref"),y("enableSeTracker",e.target.checked)},function(){r=this.checked,N.set(r)}]}class z extends t{constructor(e){super(),n(this,e,X,_,r,{})}}const ee=C([N,Q],(([e,t],n)=>{t&&e?function(e,t){const n=q(e)
t(R(n.map((([,e])=>e))).map((e=>[e,n.filter((([,t])=>t===e)).map((([e,,,t])=>[e,t]))])).map((([e,t])=>[e,t[0][0],t[0][1],t.slice(1)])))}(t,n):n()}))
function te(e,t,n){const r=e.slice()
return r[1]=t[n],r}function ne(e){let t,n,r,a,c,u,f,A,h,b,$=[],k=new Map,x=U(e[0])
const w=e=>e[1][0]
for(let t=0;t<x.length;t+=1){let n=te(e,x,t),r=w(n)
k.set(r,$[t]=re(r,n))}return{c(){t=s("div"),t.innerHTML='<div class="innerColumnHeader svelte-n6fxgn"> </div>',n=l(),r=s("div"),r.innerHTML='<div class="innerColumnHeader svelte-n6fxgn">Creature</div>',a=l(),c=s("div"),c.innerHTML='<div class="innerColumnHeader svelte-n6fxgn">Last Kill</div>',u=l(),f=s("div"),f.innerHTML='<div class="innerColumnHeader svelte-n6fxgn">Location</div>',A=l()
for(let e=0;e<$.length;e+=1)$[e].c()
h=i()},m(e,s){o(e,t,s),o(e,n,s),o(e,r,s),o(e,a,s),o(e,c,s),o(e,u,s),o(e,f,s),o(e,A,s)
for(let t=0;t<$.length;t+=1)$[t]&&$[t].m(e,s)
o(e,h,s),b=!0},p(e,t){1&t&&(x=U(e[0]),m(),$=B($,t,w,1,e,x,k,h.parentNode,I,re,h,te),v())},i(e){if(!b){for(let e=0;e<x.length;e+=1)d($[e])
b=!0}},o(e){for(let e=0;e<$.length;e+=1)p($[e])
b=!1},d(e){e&&(g(t),g(n),g(r),g(a),g(c),g(u),g(f),g(A),g(h))
for(let t=0;t<$.length;t+=1)$[t].d(e)}}}function re(e,t){let n,r,s
return r=new K({props:{entry:t[1]}}),{key:e,first:null,c(){n=i(),H(r.$$.fragment),this.first=n},m(e,t){o(e,n,t),j(r,e,t),s=!0},p(e,n){t=e
const s={}
1&n&&(s.entry=t[1]),r.$set(s)},i(e){s||(d(r.$$.fragment,e),s=!0)},o(e){p(r.$$.fragment,e),s=!1},d(e){e&&g(n),L(r,e)}}}function se(e){let t,n,r,a,i,f
r=new z({})
let A=e[0]&&ne(e)
return{c(){t=s("div"),n=s("div"),H(r.$$.fragment),a=l(),i=s("div"),A&&A.c(),c(n,"class","top svelte-n6fxgn"),c(i,"class","tracker-table svelte-n6fxgn"),c(t,"class","container svelte-n6fxgn")},m(e,s){o(e,t,s),u(t,n),j(r,n,null),u(t,a),u(t,i),A&&A.m(i,null),f=!0},p(e,[t]){e[0]?A?(A.p(e,t),1&t&&d(A,1)):(A=ne(e),A.c(),d(A,1),A.m(i,null)):A&&(m(),p(A,1,1,(()=>{A=null})),v())},i(e){f||(d(r.$$.fragment,e),d(A),f=!0)},o(e){p(r.$$.fragment,e),p(A),f=!1},d(e){e&&g(t),L(r),A&&A.d()}}}function le(e,t,n){let r
return S(e,ee,(e=>n(0,r=e))),[r]}class ae extends t{constructor(e){super(),n(this,e,le,se,r,{})}}function ie(e){let t,n
return t=new ae({}),{c(){H(t.$$.fragment)},m(e,r){j(t,e,r),n=!0},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ce(e){let t
return{c(){t=a("Super Elite Tracker")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function oe(e){let t,n
return t=new M({props:{visible:e[0],$$slots:{title:[ce],default:[ie]},$$scope:{ctx:e}}}),t.$on("close",e[1]),{c(){H(t.$$.fragment)},m(e,r){j(t,e,r),n=!0},p(e,[n]){const r={}
1&n&&(r.visible=e[0]),4&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ue(e,t,n){let{visible:r=!0}=t
return e.$$set=e=>{"visible"in e&&n(0,r=e.visible)},[r,function(){x("SE Tracker","close"),n(0,r=!1)}]}var fe=class extends t{constructor(e){super(),n(this,e,ue,oe,r,{visible:0})}}
const de={visible:!0}
let me=0
function pe(){me=e(de,me,fe)}export{pe as default}
//# sourceMappingURL=superelite-93eef421.js.map
