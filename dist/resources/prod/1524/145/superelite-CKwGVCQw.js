import{i as e}from"./Modal-Cc9OeAYd.js"
import{S as t,O as n,P as l,R as s,T as r,a7 as a,av as i,U as c,W as o,X as d,a8 as u,bA as f,bB as m,bD as p,bC as v,a4 as g,_ as A,Q as b,V as h,dG as x,dH as $,bp as k,s as w,bo as E,a3 as q,a5 as T,bX as y,ed as C,aj as H,bL as S,ee as U,ef as L,bu as M,bF as B,bG as I,bH as Q,a1 as G,dP as R}from"./calfSystem-CvwhhJv4.js"
import{M as Y}from"./ModalTitled-BuRy86X7.js"
import{f as j}from"./formatUtcTimestamp-7TjX2rlx.js"
function F(e,t,n){const l=e.slice()
return l[3]=t[n][0],l[4]=t[n][1],l}function J(e){let t,n,l
function r(e,t){return e[1]?O:N}let a=r(e),i=a(e)
return{c(){t=s("button"),i.c(),c(t,"aria-expanded",e[1]),c(t,"type","button"),c(t,"class","svelte-1rxsxdp")},m(s,r){o(s,t,r),i.m(t,null),n||(l=A(t,"click",e[2]),n=!0)},p(e,n){a!==(a=r(e))&&(i.d(1),i=a(e),i&&(i.c(),i.m(t,null))),2&n&&c(t,"aria-expanded",e[1])},d(e){e&&g(t),i.d(),n=!1,l()}}}function N(e){let t
return{c(){t=a(">")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function O(e){let t
return{c(){t=a("∨")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function V(e){let t,n,l,r=b(e[0][3]),a=[]
for(let t=0;t<r.length;t+=1)a[t]=W(F(e,r,t))
return{c(){t=s("div")
for(let e=0;e<a.length;e+=1)a[e].c()
c(t,"class","wide svelte-1rxsxdp")},m(e,n){o(e,t,n)
for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(t,null)
l=!0},p(e,n){if(1&n){let l
for(r=b(e[0][3]),l=0;l<r.length;l+=1){const s=F(e,r,l)
a[l]?a[l].p(s,n):(a[l]=W(s),a[l].c(),a[l].m(t,null))}for(;l<a.length;l+=1)a[l].d(1)
a.length=r.length}},i(e){l||(e&&h((()=>{l&&(n||(n=x(t,$,{duration:300},!0)),n.run(1))})),l=!0)},o(e){e&&(n||(n=x(t,$,{duration:300},!1)),n.run(0)),l=!1},d(e){e&&g(t),k(a,e),e&&n&&n.end()}}}function W(e){let t,n,l,i,f,m,p,v,A,b=j(e[3])+"",h=e[4]+""
return{c(){t=s("div"),n=r(),l=s("div"),i=r(),f=s("div"),m=a(b),p=r(),v=s("div"),A=a(h),c(f,"class","last-kill svelte-1rxsxdp")},m(e,s){o(e,t,s),o(e,n,s),o(e,l,s),o(e,i,s),o(e,f,s),d(f,m),o(e,p,s),o(e,v,s),d(v,A)},p(e,t){1&t&&b!==(b=j(e[3])+"")&&u(m,b),1&t&&h!==(h=e[4]+"")&&u(A,h)},d(e){e&&(g(t),g(n),g(l),g(i),g(f),g(p),g(v))}}}function P(e){let t,n,l,A,b,h,x,$,k,w,E,q,T=e[0][0].replaceAll("_"," ")+"",y=j(e[0][1])+"",C=e[0][2]+"",H=e[0][3].length&&J(e),S=e[1]&&V(e)
return{c(){t=s("div"),H&&H.c(),n=r(),l=s("div"),A=a(T),b=r(),h=s("div"),x=a(y),$=r(),k=s("div"),w=a(C),E=r(),S&&S.c(),q=i(),c(t,"class","expando svelte-1rxsxdp"),c(h,"class","last-kill svelte-1rxsxdp")},m(e,s){o(e,t,s),H&&H.m(t,null),o(e,n,s),o(e,l,s),d(l,A),o(e,b,s),o(e,h,s),d(h,x),o(e,$,s),o(e,k,s),d(k,w),o(e,E,s),S&&S.m(e,s),o(e,q,s)},p(e,[n]){e[0][3].length?H?H.p(e,n):(H=J(e),H.c(),H.m(t,null)):H&&(H.d(1),H=null),1&n&&T!==(T=e[0][0].replaceAll("_"," ")+"")&&u(A,T),1&n&&y!==(y=j(e[0][1])+"")&&u(x,y),1&n&&C!==(C=e[0][2]+"")&&u(w,C),e[1]?S?(S.p(e,n),2&n&&f(S,1)):(S=V(e),S.c(),f(S,1),S.m(q.parentNode,q)):S&&(m(),p(S,1,1,(()=>{S=null})),v())},i(e){f(S)},o(e){p(S)},d(e){e&&(g(t),g(n),g(l),g(b),g(h),g($),g(k),g(E),g(q)),H&&H.d(),S&&S.d(e)}}}function X(e,t,n){let{entry:l}=t,s=!1
return e.$$set=e=>{"entry"in e&&n(0,l=e.entry)},[l,s,()=>{w("SE Tracker","Expand Row"),n(1,s=!s)}]}class D extends t{constructor(e){super(),n(this,e,X,P,l,{entry:0})}}function K(e){let t,n,l,i,u,f,m,p,v
return{c(){t=s("span"),n=r(),l=s("label"),i=a("Enable SE Tracker [ \n  "),u=s("div"),u.innerHTML='?\n    <div class="tooltiptext svelte-1hf4bli"><span class="tooltiptitle svelte-1hf4bli">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/>\n        This is DIFFERENT from the usual FSH network activity.<br/>\n        When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/>\n        You do not need auto-refresh for this to work.</div></div>',f=a("\n   ]:\n  "),m=s("input"),c(t,"class","network svelte-1hf4bli"),E(t,"background-image",e[1]),c(u,"class","tooltip svelte-1hf4bli"),c(m,"type","checkbox"),c(m,"class","svelte-1hf4bli")},m(s,r){o(s,t,r),o(s,n,r),o(s,l,r),d(l,i),d(l,u),d(l,f),d(l,m),m.checked=e[0],p||(v=[A(m,"change",e[3]),A(m,"click",e[2])],p=!0)},p(e,[t]){1&t&&(m.checked=e[0])},i:q,o:q,d(e){e&&(g(t),g(n),g(l)),p=!1,T(v)}}}function Z(e,t,n){let l
y(e,C,(e=>n(0,l=e)))
return[l,'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")',function(e){w("SE Tracker","Toggle Pref"),H("enableSeTracker",e.target.checked)},function(){l=this.checked,C.set(l)}]}class _ extends t{constructor(e){super(),n(this,e,Z,K,l,{})}}const z=S([C,U],(([e,t],n)=>{t&&e?function(e,t){const n=L(e)
t(M(n.map((([,e])=>e))).map((e=>[e,n.filter((([,t])=>t===e)).map((([e,,,t])=>[e,t]))])).map((([e,t])=>[e,t[0][0],t[0][1],t.slice(1)])))}(t,n):n()}))
function ee(e,t,n){const l=e.slice()
return l[1]=t[n],l}function te(e){let t,n,l,a,c,d,u,A,h,x,$=[],k=new Map,w=b(e[0])
const E=e=>e[1][0]
for(let t=0;t<w.length;t+=1){let n=ee(e,w,t),l=E(n)
k.set(l,$[t]=ne(l,n))}return{c(){t=s("div"),t.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9"> </div>',n=r(),l=s("div"),l.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Creature</div>',a=r(),c=s("div"),c.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Last Kill</div>',d=r(),u=s("div"),u.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Location</div>',A=r()
for(let e=0;e<$.length;e+=1)$[e].c()
h=i()},m(e,s){o(e,t,s),o(e,n,s),o(e,l,s),o(e,a,s),o(e,c,s),o(e,d,s),o(e,u,s),o(e,A,s)
for(let t=0;t<$.length;t+=1)$[t]&&$[t].m(e,s)
o(e,h,s),x=!0},p(e,t){1&t&&(w=b(e[0]),m(),$=G($,t,E,1,e,w,k,h.parentNode,R,ne,h,ee),v())},i(e){if(!x){for(let e=0;e<w.length;e+=1)f($[e])
x=!0}},o(e){for(let e=0;e<$.length;e+=1)p($[e])
x=!1},d(e){e&&(g(t),g(n),g(l),g(a),g(c),g(d),g(u),g(A),g(h))
for(let t=0;t<$.length;t+=1)$[t].d(e)}}}function ne(e,t){let n,l,s
return l=new D({props:{entry:t[1]}}),{key:e,first:null,c(){n=i(),B(l.$$.fragment),this.first=n},m(e,t){o(e,n,t),I(l,e,t),s=!0},p(e,n){t=e
const s={}
1&n&&(s.entry=t[1]),l.$set(s)},i(e){s||(f(l.$$.fragment,e),s=!0)},o(e){p(l.$$.fragment,e),s=!1},d(e){e&&g(n),Q(l,e)}}}function le(e){let t,n,l,a,i,u
l=new _({})
let A=e[0]&&te(e)
return{c(){t=s("div"),n=s("div"),B(l.$$.fragment),a=r(),i=s("div"),A&&A.c(),c(n,"class","top svelte-1dqxqm9"),c(i,"class","tracker-table svelte-1dqxqm9"),c(t,"class","container svelte-1dqxqm9")},m(e,s){o(e,t,s),d(t,n),I(l,n,null),d(t,a),d(t,i),A&&A.m(i,null),u=!0},p(e,[t]){e[0]?A?(A.p(e,t),1&t&&f(A,1)):(A=te(e),A.c(),f(A,1),A.m(i,null)):A&&(m(),p(A,1,1,(()=>{A=null})),v())},i(e){u||(f(l.$$.fragment,e),f(A),u=!0)},o(e){p(l.$$.fragment,e),p(A),u=!1},d(e){e&&g(t),Q(l),A&&A.d()}}}function se(e,t,n){let l
return y(e,z,(e=>n(0,l=e))),[l]}class re extends t{constructor(e){super(),n(this,e,se,le,l,{})}}function ae(e){let t,n
return t=new re({}),{c(){B(t.$$.fragment)},m(e,l){I(t,e,l),n=!0},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function ie(e){let t
return{c(){t=a("Super Elite Tracker")},m(e,n){o(e,t,n)},d(e){e&&g(t)}}}function ce(e){let t,n
return t=new Y({props:{visible:e[0],$$slots:{title:[ie],default:[ae]},$$scope:{ctx:e}}}),t.$on("close",e[1]),{c(){B(t.$$.fragment)},m(e,l){I(t,e,l),n=!0},p(e,[n]){const l={}
1&n&&(l.visible=e[0]),4&n&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){n||(f(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function oe(e,t,n){let{visible:l=!0}=t
return e.$$set=e=>{"visible"in e&&n(0,l=e.visible)},[l,function(){w("SE Tracker","close"),n(0,l=!1)}]}class de extends t{constructor(e){super(),n(this,e,oe,ce,l,{visible:0})}}const ue={visible:!0}
let fe=0
function me(){fe=e(ue,fe,de)}export{me as default}
//# sourceMappingURL=superelite-CKwGVCQw.js.map
