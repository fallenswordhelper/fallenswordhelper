import{C as V,E as N,F as w,O as C,U as O,V as P,W as Y,Z as Q,aa as c,ba as m,e as p,j as v,ja as R,k as h,ka as B,l as y,la as F,m as k,ma as j,na as I,oa as S,v as T,w as K,y as L}from"./chunk-OPUFCVBO.js";import{a as J}from"./chunk-DARUUDAY.js";import{a as D}from"./chunk-4P22QABU.js";function Z(l,e,i){if(e)e.$set(l);else return new i({props:l,target:document.body});return e}function $(l){let e,i,n,s,a=l[2].default,t=v(a,l,l[1],null);return{c(){e=L("div"),t&&t.c(),w(e,"class","svelte-1q03gqd"),C(e,"visible",l[0])},m(o,r){T(o,e,r),t&&t.m(e,null),i=!0,n||(s=V(e,"click",N(l[3])),n=!0)},p(o,[r]){t&&t.p&&(!i||r&2)&&y(t,a,o,o[1],i?h(a,o[1],r,null):k(o[1]),null),(!i||r&1)&&C(e,"visible",o[0])},i(o){i||(c(t,o),i=!0)},o(o){m(t,o),i=!1},d(o){o&&K(e),t&&t.d(o),n=!1,s()}}}function M(l,e,i){let{$$slots:n={},$$scope:s}=e,{visible:a=!0}=e,t,o,r;function _(){document.body.classList.contains("noscroll")||(t=!0,o=window.scrollY,r=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${o}px`)}function b(){t&&(document.body.classList.remove("noscroll"),document.body.style.top=r||"",window.scrollTo(0,o))}function g(f){P.call(this,l,f)}return l.$$set=f=>{"visible"in f&&i(0,a=f.visible),"$$scope"in f&&i(1,s=f.$$scope)},l.$$.update=()=>{if(l.$$.dirty&1){e:a?_():b()}},[a,s,n,g]}var z=class extends S{constructor(e){super(),I(this,e,M,$,p,{visible:0})}},U=z;function x(l){let e,i,n,s,a=l[7].default,t=v(a,l,l[6],null);return{c(){e=L("div"),t&&t.c(),w(e,"class","ui-dialog svelte-3ibgr0"),w(e,"role","dialog"),w(e,"aria-modal","true"),C(e,"modalVisible",l[1])},m(o,r){T(o,e,r),t&&t.m(e,null),l[8](e),i=!0,n||(s=V(window,"keydown",l[2]),n=!0)},p(o,[r]){t&&t.p&&(!i||r&64)&&y(t,a,o,o[6],i?h(a,o[6],r,null):k(o[6]),null),(!i||r&2)&&C(e,"modalVisible",o[1])},i(o){i||(c(t,o),i=!0)},o(o){m(t,o),i=!1},d(o){o&&K(e),t&&t.d(o),l[8](null),n=!1,s()}}}var A;function ee(l,e,i){let n,{$$slots:s={},$$scope:a}=e,{modal:t}=e,{visible:o=!0}=e,r=O(),_=()=>r("close"),b,g;function f(u){if(o){if(u.key==="Escape"&&A===t){_();return}if(u.key==="Tab"){let E=J("*",t).filter(X=>X.tabIndex>=0),q=E.indexOf(document.activeElement);q===-1&&u.shiftKey&&(q=0),q+=E.length+(u.shiftKey?-1:1),q%=E.length,E[q].focus(),u.preventDefault()}}}function d(u){Y[u?"unshift":"push"](()=>{t=u,i(0,t)})}return l.$$set=u=>{"modal"in u&&i(0,t=u.modal),"visible"in u&&i(3,o=u.visible),"$$scope"in u&&i(6,a=u.$$scope)},l.$$.update=()=>{if(l.$$.dirty&8){e:i(1,n=o)}if(l.$$.dirty&9){e:t&&o&&(i(5,g=A),A=t)}if(l.$$.dirty&41){e:t&&!o&&(A=g)}if(l.$$.dirty&24){e:o?i(4,b=document?.activeElement):b?.focus()}},[t,n,f,o,b,g,a,s,d]}var G=class extends S{constructor(e){super(),I(this,e,ee,x,p,{modal:0,visible:3})}},W=G;function te(l){let e,i=l[3].default,n=v(i,l,l[5],null);return{c(){n&&n.c()},m(s,a){n&&n.m(s,a),e=!0},p(s,a){n&&n.p&&(!e||a&32)&&y(n,i,s,s[5],e?h(i,s[5],a,null):k(s[5]),null)},i(s){e||(c(n,s),e=!0)},o(s){m(n,s),e=!1},d(s){n&&n.d(s)}}}function le(l){let e,i,n;function s(t){l[4](t)}let a={visible:l[1],$$slots:{default:[te]},$$scope:{ctx:l}};return l[0]!==void 0&&(a.modal=l[0]),e=new W({props:a}),Y.push(()=>R(e,"modal",s)),e.$on("close",l[2]),{c(){B(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},p(t,o){let r={};o&2&&(r.visible=t[1]),o&32&&(r.$$scope={dirty:o,ctx:t}),!i&&o&1&&(i=!0,r.modal=t[0],Q(()=>i=!1)),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function oe(l){let e,i;return e=new U({props:{visible:l[1],$$slots:{default:[le]},$$scope:{ctx:l}}}),e.$on("click",l[2]),{c(){B(e.$$.fragment)},m(n,s){F(e,n,s),i=!0},p(n,[s]){let a={};s&2&&(a.visible=n[1]),s&35&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){i||(c(e.$$.fragment,n),i=!0)},o(n){m(e.$$.fragment,n),i=!1},d(n){j(e,n)}}}function ie(l,e,i){let{$$slots:n={},$$scope:s}=e,{modal:a}=e,{visible:t=!0}=e,o=O(),r=()=>o("close"),_;function b(){D.dialogIsClosed&&(_=D.dialogIsClosed),D.dialogIsClosed=()=>!t}function g(){_&&(D.dialogIsClosed=_)}function f(d){a=d,i(0,a)}return l.$$set=d=>{"modal"in d&&i(0,a=d.modal),"visible"in d&&i(1,t=d.visible),"$$scope"in d&&i(5,s=d.$$scope)},l.$$.update=()=>{if(l.$$.dirty&2){e:t?b():g()}},[a,t,r,n,f,s]}var H=class extends S{constructor(e){super(),I(this,e,ie,oe,p,{modal:0,visible:1})}},Ce=H;export{Z as a,Ce as b};
//# sourceMappingURL=chunk-BG57XN7Y.js.map
