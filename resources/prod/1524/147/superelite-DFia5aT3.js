import{S as e,P as t,Q as n,U as l,bD as s,bE as r,a8 as a,bF as i,bG as c,_ as o,a0 as d,a3 as u,a4 as f,a9 as m,ax as p,a5 as v,a1 as g,R as A,bq as h,dN as b,a6 as x,s as $,dO as k,T as w,V as E,bp as q,b_ as T,al as y,em as S,bO as C,en as H,eo as U,bu as L,bJ as M,bK as B,bL as I,W as Q,dW as R,dR as Y}from"./calfSystem-BAeDn21M.js"
import{M as G}from"./ModalTitled-BSDwuZlT.js"
import{f as J}from"./formatUtcTimestamp-1EKg_myC.js"
function N(e,t,n){const l=e.slice()
return l[3]=t[n][0],l[4]=t[n][1],l}function O(e){let t,n,s
function r(e,t){return e[1]?F:W}let a=r(e),i=a(e)
return{c(){t=u("button"),i.c(),v(t,"aria-expanded",e[1]),v(t,"type","button"),v(t,"class","svelte-1rxsxdp")},m(l,r){o(l,t,r),i.m(t,null),n||(s=g(t,"click",e[2]),n=!0)},p(e,n){a!==(a=r(e))&&(i.d(1),i=a(e),i&&(i.c(),i.m(t,null))),2&n&&v(t,"aria-expanded",e[1])},d(e){e&&l(t),i.d(),n=!1,s()}}}function W(e){let t
return{c(){t=m(">")},m(e,n){o(e,t,n)},d(e){e&&l(t)}}}function F(e){let t
return{c(){t=m("∨")},m(e,n){o(e,t,n)},d(e){e&&l(t)}}}function V(e){let t,n,s,r=A(e[0][3]),a=[]
for(let t=0;t<r.length;t+=1)a[t]=j(N(e,r,t))
return{c(){t=u("div")
for(let e=0;e<a.length;e+=1)a[e].c()
v(t,"class","wide svelte-1rxsxdp")},m(e,n){o(e,t,n)
for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(t,null)
s=!0},p(e,n){if(1&n){let l
for(r=A(e[0][3]),l=0;l<r.length;l+=1){const s=N(e,r,l)
a[l]?a[l].p(s,n):(a[l]=j(s),a[l].c(),a[l].m(t,null))}for(;l<a.length;l+=1)a[l].d(1)
a.length=r.length}},i(e){s||(e&&x((()=>{s&&(n||(n=b(t,k,{duration:300},!0)),n.run(1))})),s=!0)},o(e){e&&(n||(n=b(t,k,{duration:300},!1)),n.run(0)),s=!1},d(e){e&&l(t),h(a,e),e&&n&&n.end()}}}function j(e){let t,n,s,r,i,c,p,g,A,h=J(e[3])+"",b=e[4]+""
return{c(){t=u("div"),n=f(),s=u("div"),r=f(),i=u("div"),c=m(h),p=f(),g=u("div"),A=m(b),v(i,"class","last-kill svelte-1rxsxdp")},m(e,l){o(e,t,l),o(e,n,l),o(e,s,l),o(e,r,l),o(e,i,l),d(i,c),o(e,p,l),o(e,g,l),d(g,A)},p(e,t){1&t&&h!==(h=J(e[3])+"")&&a(c,h),1&t&&b!==(b=e[4]+"")&&a(A,b)},d(e){e&&(l(t),l(n),l(s),l(r),l(i),l(p),l(g))}}}function K(e){let t,n,g,A,h,b,x,$,k,w,E,q,T=e[0][0].replaceAll("_"," ")+"",y=J(e[0][1])+"",S=e[0][2]+"",C=e[0][3].length&&O(e),H=e[1]&&V(e)
return{c(){t=u("div"),C&&C.c(),n=f(),g=u("div"),A=m(T),h=f(),b=u("div"),x=m(y),$=f(),k=u("div"),w=m(S),E=f(),H&&H.c(),q=p(),v(t,"class","expando svelte-1rxsxdp"),v(b,"class","last-kill svelte-1rxsxdp")},m(e,l){o(e,t,l),C&&C.m(t,null),o(e,n,l),o(e,g,l),d(g,A),o(e,h,l),o(e,b,l),d(b,x),o(e,$,l),o(e,k,l),d(k,w),o(e,E,l),H&&H.m(e,l),o(e,q,l)},p(e,[n]){e[0][3].length?C?C.p(e,n):(C=O(e),C.c(),C.m(t,null)):C&&(C.d(1),C=null),1&n&&T!==(T=e[0][0].replaceAll("_"," ")+"")&&a(A,T),1&n&&y!==(y=J(e[0][1])+"")&&a(x,y),1&n&&S!==(S=e[0][2]+"")&&a(w,S),e[1]?H?(H.p(e,n),2&n&&r(H,1)):(H=V(e),H.c(),r(H,1),H.m(q.parentNode,q)):H&&(i(),s(H,1,1,(()=>{H=null})),c())},i(e){r(H)},o(e){s(H)},d(e){e&&(l(t),l(n),l(g),l(h),l(b),l($),l(k),l(E),l(q)),C&&C.d(),H&&H.d(e)}}}function P(e,t,n){let{entry:l}=t,s=!1
return e.$$set=e=>{"entry"in e&&n(0,l=e.entry)},[l,s,()=>{$("SE Tracker","Expand Row"),n(1,s=!s)}]}class D extends e{constructor(e){super(),t(this,e,P,K,n,{entry:0})}}function Z(e){let t,n,s,r,a,i,c,p,A
return{c(){t=u("span"),n=f(),s=u("label"),r=m("Enable SE Tracker [ \n  "),a=u("div"),a.innerHTML='?\n    <div class="tooltiptext svelte-1hf4bli"><span class="tooltiptitle svelte-1hf4bli">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/>\n        This is DIFFERENT from the usual FSH network activity.<br/>\n        When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/>\n        You do not need auto-refresh for this to work.</div></div>',i=m("\n   ]:\n  "),c=u("input"),v(t,"class","network svelte-1hf4bli"),q(t,"background-image",e[1]),v(a,"class","tooltip svelte-1hf4bli"),v(c,"type","checkbox"),v(c,"class","svelte-1hf4bli")},m(l,u){o(l,t,u),o(l,n,u),o(l,s,u),d(s,r),d(s,a),d(s,i),d(s,c),c.checked=e[0],p||(A=[g(c,"change",e[3]),g(c,"click",e[2])],p=!0)},p(e,[t]){1&t&&(c.checked=e[0])},i:w,o:w,d(e){e&&(l(t),l(n),l(s)),p=!1,E(A)}}}function _(e,t,n){let l
T(e,S,(e=>n(0,l=e)))
return[l,'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")',function(e){$("SE Tracker","Toggle Pref"),y("enableSeTracker",e.target.checked)},function(){l=this.checked,S.set(l)}]}class X extends e{constructor(e){super(),t(this,e,_,Z,n,{})}}const z=C([S,H],(([e,t],n)=>{t&&e?function(e,t){const n=U(e)
t(L(n.map((([,e])=>e))).map((e=>[e,n.filter((([,t])=>t===e)).map((([e,,,t])=>[e,t]))])).map((([e,t])=>[e,t[0][0],t[0][1],t.slice(1)])))}(t,n):n()}))
function ee(e,t,n){const l=e.slice()
return l[1]=t[n],l}function te(e){let t,n,a,d,m,v,g,h,b,x,$=[],k=new Map,w=A(e[0])
const E=e=>e[1][0]
for(let t=0;t<w.length;t+=1){let n=ee(e,w,t),l=E(n)
k.set(l,$[t]=ne(l,n))}return{c(){t=u("div"),t.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9"> </div>',n=f(),a=u("div"),a.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Creature</div>',d=f(),m=u("div"),m.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Last Kill</div>',v=f(),g=u("div"),g.innerHTML='<div class="innerColumnHeader svelte-1dqxqm9">Location</div>',h=f()
for(let e=0;e<$.length;e+=1)$[e].c()
b=p()},m(e,l){o(e,t,l),o(e,n,l),o(e,a,l),o(e,d,l),o(e,m,l),o(e,v,l),o(e,g,l),o(e,h,l)
for(let t=0;t<$.length;t+=1)$[t]&&$[t].m(e,l)
o(e,b,l),x=!0},p(e,t){1&t&&(w=A(e[0]),i(),$=Q($,t,E,1,e,w,k,b.parentNode,R,ne,b,ee),c())},i(e){if(!x){for(let e=0;e<w.length;e+=1)r($[e])
x=!0}},o(e){for(let e=0;e<$.length;e+=1)s($[e])
x=!1},d(e){e&&(l(t),l(n),l(a),l(d),l(m),l(v),l(g),l(h),l(b))
for(let t=0;t<$.length;t+=1)$[t].d(e)}}}function ne(e,t){let n,a,i
return a=new D({props:{entry:t[1]}}),{key:e,first:null,c(){n=p(),I(a.$$.fragment),this.first=n},m(e,t){o(e,n,t),B(a,e,t),i=!0},p(e,n){t=e
const l={}
1&n&&(l.entry=t[1]),a.$set(l)},i(e){i||(r(a.$$.fragment,e),i=!0)},o(e){s(a.$$.fragment,e),i=!1},d(e){e&&l(n),M(a,e)}}}function le(e){let t,n,a,m,p,g
a=new X({})
let A=e[0]&&te(e)
return{c(){t=u("div"),n=u("div"),I(a.$$.fragment),m=f(),p=u("div"),A&&A.c(),v(n,"class","top svelte-1dqxqm9"),v(p,"class","tracker-table svelte-1dqxqm9"),v(t,"class","container svelte-1dqxqm9")},m(e,l){o(e,t,l),d(t,n),B(a,n,null),d(t,m),d(t,p),A&&A.m(p,null),g=!0},p(e,[t]){e[0]?A?(A.p(e,t),1&t&&r(A,1)):(A=te(e),A.c(),r(A,1),A.m(p,null)):A&&(i(),s(A,1,1,(()=>{A=null})),c())},i(e){g||(r(a.$$.fragment,e),r(A),g=!0)},o(e){s(a.$$.fragment,e),s(A),g=!1},d(e){e&&l(t),M(a),A&&A.d()}}}function se(e,t,n){let l
return T(e,z,(e=>n(0,l=e))),[l]}class re extends e{constructor(e){super(),t(this,e,se,le,n,{})}}function ae(e){let t,n
return t=new re({}),{c(){I(t.$$.fragment)},m(e,l){B(t,e,l),n=!0},i(e){n||(r(t.$$.fragment,e),n=!0)},o(e){s(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function ie(e){let t
return{c(){t=m("Super Elite Tracker")},m(e,n){o(e,t,n)},d(e){e&&l(t)}}}function ce(e){let t,n
return t=new G({props:{visible:e[0],$$slots:{title:[ie],default:[ae]},$$scope:{ctx:e}}}),t.$on("close",e[1]),{c(){I(t.$$.fragment)},m(e,l){B(t,e,l),n=!0},p(e,[n]){const l={}
1&n&&(l.visible=e[0]),4&n&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){n||(r(t.$$.fragment,e),n=!0)},o(e){s(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function oe(e,t,n){let{visible:l=!0}=t
return e.$$set=e=>{"visible"in e&&n(0,l=e.visible)},[l,function(){$("SE Tracker","close"),n(0,l=!1)}]}class de extends e{constructor(e){super(),t(this,e,oe,ce,n,{visible:0})}}const ue={visible:!0}
let fe=0
function me(){fe=Y(ue,fe,de)}export{me as default}
//# sourceMappingURL=superelite-DFia5aT3.js.map
