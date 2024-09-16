import{S as s,L as e,M as l,cf as t,O as o,Q as i,cg as n,T as c,X as a,Y as d,ch as $,ci as u,cj as r,be as f,bh as m,a0 as p,ck as b,bi as v,k as y,cl as g,bj as h,bk as x,bl as w,cm as k,cn as I,ag as C}from"./calfSystem-CyLCrHqa.js"
function L(s){let e,l,b,v
const y=s[2].default,g=t(y,s,s[1],null)
return{c(){e=o("div"),g&&g.c(),i(e,"class","svelte-6wd0xo"),n(e,"visible",s[0])},m(t,o){c(t,e,o),g&&g.m(e,null),l=!0,b||(v=a(e,"click",d(s[3])),b=!0)},p(s,[t]){g&&g.p&&(!l||2&t)&&$(g,y,s,s[1],l?r(y,s[1],t,null):u(s[1]),null),(!l||1&t)&&n(e,"visible",s[0])},i(s){l||(f(g,s),l=!0)},o(s){m(g,s),l=!1},d(s){s&&p(e),g&&g.d(s),b=!1,v()}}}function j(s,e,l){let t,o,i,{$$slots:n={},$$scope:c}=e,{visible:a=!0}=e
return s.$$set=s=>{"visible"in s&&l(0,a=s.visible),"$$scope"in s&&l(1,c=s.$$scope)},s.$$.update=()=>{1&s.$$.dirty&&(a?document.body.classList.contains("noscroll")||(t=!0,o=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${o}px`):t&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,o)))},[a,c,n,function(e){b.call(this,s,e)}]}class E extends s{constructor(s){super(),e(this,s,j,L,l,{visible:0})}}function T(s){let e,l,d,b
const v=s[7].default,y=t(v,s,s[6],null)
return{c(){e=o("div"),y&&y.c(),i(e,"class","ui-dialog svelte-61qae0"),i(e,"role","dialog"),i(e,"aria-modal","true"),n(e,"modalVisible",s[1])},m(t,o){c(t,e,o),y&&y.m(e,null),s[8](e),l=!0,d||(b=a(window,"keydown",s[2]),d=!0)},p(s,[t]){y&&y.p&&(!l||64&t)&&$(y,v,s,s[6],l?r(v,s[6],t,null):u(s[6]),null),(!l||2&t)&&n(e,"modalVisible",s[1])},i(s){l||(f(y,s),l=!0)},o(s){m(y,s),l=!1},d(l){l&&p(e),y&&y.d(l),s[8](null),d=!1,b()}}}let K
function M(s,e,l){let t,{$$slots:o={},$$scope:i}=e,{modal:n}=e,{visible:c=!0}=e
const a=v()
let d,$
const u=s=>s.tabIndex>=0&&s.offsetWidth>0&&s.offsetHeight>0&&!s.disabled
return s.$$set=s=>{"modal"in s&&l(0,n=s.modal),"visible"in s&&l(3,c=s.visible),"$$scope"in s&&l(6,i=s.$$scope)},s.$$.update=()=>{8&s.$$.dirty&&l(1,t=c),9&s.$$.dirty&&n&&c&&(l(5,$=K),K=n),41&s.$$.dirty&&n&&!c&&(K=$),24&s.$$.dirty&&(c?l(4,d=document?.activeElement):d?.focus())},[n,t,function(s){if(c)if("Escape"!==s.key||K!==n){if("Tab"===s.key){const e=y("*",n).filter(u)
let l=e.indexOf(document.activeElement);-1===l&&s.shiftKey&&(l=0),l+=e.length+(s.shiftKey?-1:1),l%=e.length,e[l].focus(),s.preventDefault()}}else a("close")},c,d,$,i,o,function(s){g[s?"unshift":"push"]((()=>{n=s,l(0,n)}))}]}class O extends s{constructor(s){super(),e(this,s,M,T,l,{modal:0,visible:3})}}function S(s){let e
const l=s[3].default,o=t(l,s,s[6],null)
return{c(){o&&o.c()},m(s,l){o&&o.m(s,l),e=!0},p(s,t){o&&o.p&&(!e||64&t)&&$(o,l,s,s[6],e?r(l,s[6],t,null):u(s[6]),null)},i(s){e||(f(o,s),e=!0)},o(s){m(o,s),e=!1},d(s){o&&o.d(s)}}}function V(s){let e,l,t
function o(e){s[4](e)}let i={visible:s[1],$$slots:{default:[S]},$$scope:{ctx:s}}
return void 0!==s[0]&&(i.modal=s[0]),e=new O({props:i}),g.push((()=>k(e,"modal",o))),e.$on("close",s[5]),{c(){h(e.$$.fragment)},m(s,l){x(e,s,l),t=!0},p(s,t){const o={}
2&t&&(o.visible=s[1]),64&t&&(o.$$scope={dirty:t,ctx:s}),!l&&1&t&&(l=!0,o.modal=s[0],I((()=>l=!1))),e.$set(o)},i(s){t||(f(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){w(e,s)}}}function Y(s){let e,l
return e=new E({props:{visible:s[1],$$slots:{default:[V]},$$scope:{ctx:s}}}),e.$on("click",s[2]),{c(){h(e.$$.fragment)},m(s,t){x(e,s,t),l=!0},p(s,[l]){const t={}
2&l&&(t.visible=s[1]),67&l&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){l||(f(e.$$.fragment,s),l=!0)},o(s){m(e.$$.fragment,s),l=!1},d(s){w(e,s)}}}function q(s,e,l){let{$$slots:t={},$$scope:o}=e,{modal:i}=e,{visible:n=!0}=e
const c=v()
let a
return s.$$set=s=>{"modal"in s&&l(0,i=s.modal),"visible"in s&&l(1,n=s.visible),"$$scope"in s&&l(6,o=s.$$scope)},s.$$.update=()=>{2&s.$$.dirty&&(n?(C.dialogIsClosed&&(a=C.dialogIsClosed),C.dialogIsClosed=()=>!n):a&&(C.dialogIsClosed=a))},[i,n,()=>c("close"),t,function(s){i=s,l(0,i)},function(e){b.call(this,s,e)},o]}class D extends s{constructor(s){super(),e(this,s,q,Y,l,{modal:0,visible:1})}}export{D as M}
//# sourceMappingURL=Modal-CK6EKYne.js.map
