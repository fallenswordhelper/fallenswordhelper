import{S as s,J as e,K as t,c2 as l,L as o,N as i,c3 as n,P as c,U as a,V as d,c4 as $,c5 as u,c6 as r,b4 as f,b7 as m,X as p,c7 as b,b8 as v,k as y,c8 as h,b9 as g,ba as x,bb as w,c9 as k,ca as I,ab as C}from"./calfSystem-ZGMc097r.js"
function L(s){let e,t,b,v
const y=s[2].default,h=l(y,s,s[1],null)
return{c(){e=o("div"),h&&h.c(),i(e,"class","svelte-1b9thhk"),n(e,"visible",s[0])},m(l,o){c(l,e,o),h&&h.m(e,null),t=!0,b||(v=a(e,"click",d(s[3])),b=!0)},p(s,[l]){h&&h.p&&(!t||2&l)&&$(h,y,s,s[1],t?r(y,s[1],l,null):u(s[1]),null),(!t||1&l)&&n(e,"visible",s[0])},i(s){t||(f(h,s),t=!0)},o(s){m(h,s),t=!1},d(s){s&&p(e),h&&h.d(s),b=!1,v()}}}function E(s,e,t){let l,o,i,{$$slots:n={},$$scope:c}=e,{visible:a=!0}=e
return s.$$set=s=>{"visible"in s&&t(0,a=s.visible),"$$scope"in s&&t(1,c=s.$$scope)},s.$$.update=()=>{1&s.$$.dirty&&(a?document.body.classList.contains("noscroll")||(l=!0,o=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${o}px`):l&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,o)))},[a,c,n,function(e){b.call(this,s,e)}]}class K extends s{constructor(s){super(),e(this,s,E,L,t,{visible:0})}}function V(s){let e,t,d,b
const v=s[7].default,y=l(v,s,s[6],null)
return{c(){e=o("div"),y&&y.c(),i(e,"class","ui-dialog svelte-61qae0"),i(e,"role","dialog"),i(e,"aria-modal","true"),n(e,"modalVisible",s[1])},m(l,o){c(l,e,o),y&&y.m(e,null),s[8](e),t=!0,d||(b=a(window,"keydown",s[2]),d=!0)},p(s,[l]){y&&y.p&&(!t||64&l)&&$(y,v,s,s[6],t?r(v,s[6],l,null):u(s[6]),null),(!t||2&l)&&n(e,"modalVisible",s[1])},i(s){t||(f(y,s),t=!0)},o(s){m(y,s),t=!1},d(t){t&&p(e),y&&y.d(t),s[8](null),d=!1,b()}}}let S
function T(s,e,t){let l,{$$slots:o={},$$scope:i}=e,{modal:n}=e,{visible:c=!0}=e
const a=v()
let d,$
const u=s=>s.tabIndex>=0&&s.offsetWidth>0&&s.offsetHeight>0&&!s.disabled
return s.$$set=s=>{"modal"in s&&t(0,n=s.modal),"visible"in s&&t(3,c=s.visible),"$$scope"in s&&t(6,i=s.$$scope)},s.$$.update=()=>{8&s.$$.dirty&&t(1,l=c),9&s.$$.dirty&&n&&c&&(t(5,$=S),S=n),41&s.$$.dirty&&n&&!c&&(S=$),24&s.$$.dirty&&(c?t(4,d=document?.activeElement):d?.focus())},[n,l,function(s){if(c)if("Escape"!==s.key||S!==n){if("Tab"===s.key){const e=y("*",n).filter(u)
let t=e.indexOf(document.activeElement);-1===t&&s.shiftKey&&(t=0),t+=e.length+(s.shiftKey?-1:1),t%=e.length,e[t].focus(),s.preventDefault()}}else a("close")},c,d,$,i,o,function(s){h[s?"unshift":"push"]((()=>{n=s,t(0,n)}))}]}class j extends s{constructor(s){super(),e(this,s,T,V,t,{modal:0,visible:3})}}function q(s){let e
const t=s[3].default,o=l(t,s,s[6],null)
return{c(){o&&o.c()},m(s,t){o&&o.m(s,t),e=!0},p(s,l){o&&o.p&&(!e||64&l)&&$(o,t,s,s[6],e?r(t,s[6],l,null):u(s[6]),null)},i(s){e||(f(o,s),e=!0)},o(s){m(o,s),e=!1},d(s){o&&o.d(s)}}}function D(s){let e,t,l
function o(e){s[4](e)}let i={visible:s[1],$$slots:{default:[q]},$$scope:{ctx:s}}
return void 0!==s[0]&&(i.modal=s[0]),e=new j({props:i}),h.push((()=>k(e,"modal",o))),e.$on("close",s[5]),{c(){g(e.$$.fragment)},m(s,t){x(e,s,t),l=!0},p(s,l){const o={}
2&l&&(o.visible=s[1]),64&l&&(o.$$scope={dirty:l,ctx:s}),!t&&1&l&&(t=!0,o.modal=s[0],I((()=>t=!1))),e.$set(o)},i(s){l||(f(e.$$.fragment,s),l=!0)},o(s){m(e.$$.fragment,s),l=!1},d(s){w(e,s)}}}function H(s){let e,t
return e=new K({props:{visible:s[1],$$slots:{default:[D]},$$scope:{ctx:s}}}),e.$on("click",s[2]),{c(){g(e.$$.fragment)},m(s,l){x(e,s,l),t=!0},p(s,[t]){const l={}
2&t&&(l.visible=s[1]),67&t&&(l.$$scope={dirty:t,ctx:s}),e.$set(l)},i(s){t||(f(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){w(e,s)}}}function J(s,e,t){let{$$slots:l={},$$scope:o}=e,{modal:i}=e,{visible:n=!0}=e
const c=v()
let a
return s.$$set=s=>{"modal"in s&&t(0,i=s.modal),"visible"in s&&t(1,n=s.visible),"$$scope"in s&&t(6,o=s.$$scope)},s.$$.update=()=>{2&s.$$.dirty&&(n?(C.dialogIsClosed&&(a=C.dialogIsClosed),C.dialogIsClosed=()=>!n):a&&(C.dialogIsClosed=a))},[i,n,()=>c("close"),l,function(s){i=s,t(0,i)},function(e){b.call(this,s,e)},o]}class M extends s{constructor(s){super(),e(this,s,J,H,t,{modal:0,visible:1})}}export{M}
//# sourceMappingURL=Modal-kYRuawAb.js.map
