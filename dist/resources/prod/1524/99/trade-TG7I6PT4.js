import{a as D,b as J}from"./chunk-DLSZOOUS.js";import"./chunk-ZFZOAJ2A.js";import{a as W}from"./chunk-YZ2MAKK2.js";import"./chunk-ZKVLRAVK.js";import"./chunk-6BS3WSSC.js";import"./chunk-E7YUAWIB.js";import"./chunk-GQ6RKUQM.js";import"./chunk-5VW74BYB.js";import{a as Q}from"./chunk-K3NFH5JU.js";import{a as T}from"./chunk-IFTBDNSS.js";import"./chunk-TVGUT3OG.js";import"./chunk-DRVHXDBX.js";import"./chunk-C7MTA3UG.js";import{a as R}from"./chunk-OYR5PIJR.js";import"./chunk-GS6VXPUV.js";import"./chunk-2PJZ6D5W.js";import"./chunk-P5TR4C7O.js";import{a as F}from"./chunk-ENJPFQDL.js";import"./chunk-3JIGWNI6.js";import{a as O}from"./chunk-JQSGGOG4.js";import"./chunk-WEOKG4DE.js";import{a as j}from"./chunk-X6X25TQC.js";import{a as P}from"./chunk-A3YSMN3P.js";import"./chunk-WEH2BEPF.js";import"./chunk-S4LJSUOM.js";import"./chunk-V4X4HJXK.js";import"./chunk-BPVT7FNM.js";import{b as N}from"./chunk-MVLZ5DIF.js";import{a as y}from"./chunk-RLMEWYFJ.js";import"./chunk-IIEBWM3L.js";import"./chunk-V6KZDOYH.js";import"./chunk-R27ZUPLV.js";import"./chunk-Q4ISSEWQ.js";import"./chunk-N3BAHO2U.js";import"./chunk-MCKCLPTM.js";import"./chunk-3M4JV256.js";import"./chunk-3VGCM7V6.js";import"./chunk-5AMVPEUS.js";import"./chunk-BSRRLYDA.js";import"./chunk-EEOI3QHS.js";import"./chunk-E5RHLETX.js";import"./chunk-XKHKWWUO.js";import"./chunk-BKQ5B4GS.js";import"./chunk-DRO6BEBO.js";import"./chunk-OC2AAQPF.js";import"./chunk-5IFOIBKY.js";import"./chunk-LGYGKPKS.js";import"./chunk-5P222UOI.js";import{F as A,a as q,aa as d,ba as p,e as f,ka as u,la as g,ma as $,na as _,oa as h,v,w as S,y as E,z as x}from"./chunk-FYI3FYOY.js";import"./chunk-XJTFL7TK.js";import"./chunk-SAUPNLY3.js";import{a as i}from"./chunk-5SYR2ZZN.js";import"./chunk-A4HY7BPZ.js";import"./chunk-XR4XHCV2.js";import"./chunk-VX5V3MQE.js";import"./chunk-U5QRCCLA.js";import"./chunk-C4N36YS5.js";import{a as C}from"./chunk-DG6P646J.js";import"./chunk-K4LSLGQK.js";import"./chunk-MC4TDBQ5.js";import"./chunk-OXVY43H4.js";import"./chunk-HN4Q5DUC.js";import"./chunk-QDZWRTTK.js";import"./chunk-WWWWNWRL.js";function k(n,e){return F(D,J,n,e)}function ee(n){let e;return{c(){e=x("OneByOne")},m(t,o){v(t,e,o)},d(t){t&&S(e)}}}function te(n){let e,t,o;return t=new Q({props:{disabled:n[0],$$slots:{default:[ee]},$$scope:{ctx:n}}}),t.$on("click",n[1]),{c(){e=E("span"),u(t.$$.fragment),A(e,"class","svelte-erebu9")},m(r,a){v(r,e,a),g(t,e,null),o=!0},p(r,[a]){let c={};a&1&&(c.disabled=r[0]),a&8192&&(c.$$scope={dirty:a,ctx:r}),t.$set(c)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){r&&S(e),$(t)}}}function ne(n,e,t){let o=0,r=P({className:"fshSpinner fshRelative",style:{height:"90px"}}),a=s=>R(s.children[0]),c=s=>s.id.split("-").at(-1),G=()=>Promise.resolve({s:1}),H=()=>j("trade-create-selected"),K=()=>document.forms.sendItemForm.elements.target_username.value;function M(s,m){m.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(s),a(s))}async function U(s,m,l){let w=await m;if(w.s){a(l),l.replaceWith(r);let B=await k(s,[c(l)]);return M(l,B),B}return w}let V=()=>C(U,K()),X=s=>s.reduce(V(),G());function Y(s){s.s?T("Items sent successfully!"):T(s.e.message)}async function Z(){let s=H();if(!s.length)return;i("Trade","oneByOne"),t(0,o=1);let m=await X(s);Y(m),t(0,o=0)}return[o,Z]}var I=class extends h{constructor(e){super(),_(this,e,ne,te,f,{})}},L=I;function re(n){let e,t;return e=new W({props:{wantsTagged:"1"}}),e.$on("perf",n[0]),e.$on("select",n[1]),e.$on("toggle",n[2]),{c(){u(e.$$.fragment)},m(o,r){g(e,o,r),t=!0},p:q,i(o){t||(d(e.$$.fragment,o),t=!0)},o(o){p(e.$$.fragment,o),t=!1},d(o){$(e,o)}}}function oe(n){return[()=>i("Trade","doPerf"),r=>i("Trade","doSelect",r.detail),()=>i("Trade","toggleSelectST")]}var b=class extends h{constructor(e){super(),_(this,e,oe,re,f,{})}},z=b;var se=n=>new L({target:n.parentNode});function ae(){let n=y("send-items");n&&se(n)}var ie=()=>new z({target:N()});function ce(){y("trade-items")&&(O(3,ae),ie())}export{ce as default};
//# sourceMappingURL=trade-TG7I6PT4.js.map