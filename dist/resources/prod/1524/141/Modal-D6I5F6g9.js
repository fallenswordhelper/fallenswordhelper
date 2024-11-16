import{S as s,L as e,M as t,cf as l,O as o,bf as i,bg as n,cg as c,ch as a,ci as d,cj as $,R as u,a2 as r,a3 as f,U as m,X as p,ck as b,bl as v,n as y,cl as g,cm as h,be as x,cn as w,bh as k,bi as I,ag as C}from"./calfSystem-Blt4DbaE.js"
function L(s,e,t){return e?(e.$set(s),e):new t({props:s,target:document.body})}function q(s){let e,t,b,v
const y=s[2].default,g=l(y,s,s[1],null)
return{c(){e=m("div"),g&&g.c(),p(e,"class","svelte-1ssqf7q"),$(e,"visible",s[0])},m(l,o){u(l,e,o),g&&g.m(e,null),t=!0,b||(v=r(e,"click",f(s[3])),b=!0)},p(s,[l]){g&&g.p&&(!t||2&l)&&c(g,y,s,s[1],t?d(y,s[1],l,null):a(s[1]),null),(!t||1&l)&&$(e,"visible",s[0])},i(s){t||(n(g,s),t=!0)},o(s){i(g,s),t=!1},d(s){s&&o(e),g&&g.d(s),b=!1,v()}}}function E(s,e,t){let l,o,i,{$$slots:n={},$$scope:c}=e,{visible:a=!0}=e
return s.$$set=s=>{"visible"in s&&t(0,a=s.visible),"$$scope"in s&&t(1,c=s.$$scope)},s.$$.update=()=>{1&s.$$.dirty&&(a?document.body.classList.contains("noscroll")||(l=!0,o=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${o}px`):l&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,o)))},[a,c,n,function(e){b.call(this,s,e)}]}class j extends s{constructor(s){super(),e(this,s,E,q,t,{visible:0})}}function K(s){let e,t,f,b
const v=s[7].default,y=l(v,s,s[6],null)
return{c(){e=m("div"),y&&y.c(),p(e,"class","ui-dialog svelte-61qae0"),p(e,"role","dialog"),p(e,"aria-modal","true"),$(e,"modalVisible",s[1])},m(l,o){u(l,e,o),y&&y.m(e,null),s[8](e),t=!0,f||(b=r(window,"keydown",s[2]),f=!0)},p(s,[l]){y&&y.p&&(!t||64&l)&&c(y,v,s,s[6],t?d(v,s[6],l,null):a(s[6]),null),(!t||2&l)&&$(e,"modalVisible",s[1])},i(s){t||(n(y,s),t=!0)},o(s){i(y,s),t=!1},d(t){t&&o(e),y&&y.d(t),s[8](null),f=!1,b()}}}let M
function O(s,e,t){let l,{$$slots:o={},$$scope:i}=e,{modal:n}=e,{visible:c=!0}=e
const a=v()
let d,$
const u=s=>s.tabIndex>=0&&s.offsetWidth>0&&s.offsetHeight>0&&!s.disabled
return s.$$set=s=>{"modal"in s&&t(0,n=s.modal),"visible"in s&&t(3,c=s.visible),"$$scope"in s&&t(6,i=s.$$scope)},s.$$.update=()=>{8&s.$$.dirty&&t(1,l=c),9&s.$$.dirty&&n&&c&&(t(5,$=M),M=n),41&s.$$.dirty&&n&&!c&&(M=$),24&s.$$.dirty&&(c?t(4,d=document?.activeElement):d?.focus())},[n,l,function(s){if(c)if("Escape"!==s.key||M!==n){if("Tab"===s.key){const e=y("*",n).filter(u)
let t=e.indexOf(document.activeElement);-1===t&&s.shiftKey&&(t=0),t+=e.length+(s.shiftKey?-1:1),t%=e.length,e[t].focus(),s.preventDefault()}}else a("close")},c,d,$,i,o,function(s){g[s?"unshift":"push"]((()=>{n=s,t(0,n)}))}]}class S extends s{constructor(s){super(),e(this,s,O,K,t,{modal:0,visible:3})}}function T(s){let e
const t=s[3].default,o=l(t,s,s[6],null)
return{c(){o&&o.c()},m(s,t){o&&o.m(s,t),e=!0},p(s,l){o&&o.p&&(!e||64&l)&&c(o,t,s,s[6],e?d(t,s[6],l,null):a(s[6]),null)},i(s){e||(n(o,s),e=!0)},o(s){i(o,s),e=!1},d(s){o&&o.d(s)}}}function V(s){let e,t,l
function o(e){s[4](e)}let c={visible:s[1],$$slots:{default:[T]},$$scope:{ctx:s}}
return void 0!==s[0]&&(c.modal=s[0]),e=new S({props:c}),g.push((()=>h(e,"modal",o))),e.$on("close",s[5]),{c(){I(e.$$.fragment)},m(s,t){k(e,s,t),l=!0},p(s,l){const o={}
2&l&&(o.visible=s[1]),64&l&&(o.$$scope={dirty:l,ctx:s}),!t&&1&l&&(t=!0,o.modal=s[0],w((()=>t=!1))),e.$set(o)},i(s){l||(n(e.$$.fragment,s),l=!0)},o(s){i(e.$$.fragment,s),l=!1},d(s){x(e,s)}}}function D(s){let e,t
return e=new j({props:{visible:s[1],$$slots:{default:[V]},$$scope:{ctx:s}}}),e.$on("click",s[2]),{c(){I(e.$$.fragment)},m(s,l){k(e,s,l),t=!0},p(s,[t]){const l={}
2&t&&(l.visible=s[1]),67&t&&(l.$$scope={dirty:t,ctx:s}),e.$set(l)},i(s){t||(n(e.$$.fragment,s),t=!0)},o(s){i(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function H(s,e,t){let{$$slots:l={},$$scope:o}=e,{modal:i}=e,{visible:n=!0}=e
const c=v()
let a
return s.$$set=s=>{"modal"in s&&t(0,i=s.modal),"visible"in s&&t(1,n=s.visible),"$$scope"in s&&t(6,o=s.$$scope)},s.$$.update=()=>{2&s.$$.dirty&&(n?(C.dialogIsClosed&&(a=C.dialogIsClosed),C.dialogIsClosed=()=>!n):a&&(C.dialogIsClosed=a))},[i,n,()=>c("close"),l,function(s){i=s,t(0,i)},function(e){b.call(this,s,e)},o]}class R extends s{constructor(s){super(),e(this,s,H,D,t,{modal:0,visible:1})}}export{R as M,L as i}
//# sourceMappingURL=Modal-D6I5F6g9.js.map
