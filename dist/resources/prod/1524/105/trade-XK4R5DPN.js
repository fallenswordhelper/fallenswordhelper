import{a as j,b as T}from"./chunk-7AJTIWAO.js";import{a as z}from"./chunk-7VACKZS2.js";import"./chunk-IHL2UW6R.js";import"./chunk-4CIDA5KU.js";import"./chunk-2OJ3BCNF.js";import"./chunk-VVW6WQOK.js";import"./chunk-K72XMP4C.js";import"./chunk-X4F6QEH6.js";import"./chunk-7FPLNTO3.js";import{a as U}from"./chunk-6RNWJDUW.js";import{a as B}from"./chunk-TGFHLCXE.js";import"./chunk-MHE6IB75.js";import{a as k}from"./chunk-4QY6SPTZ.js";import{a as y}from"./chunk-PVXVA62G.js";import"./chunk-URWUNVTF.js";import"./chunk-RN6NICJ7.js";import"./chunk-EHOD6CNQ.js";import"./chunk-3XG27UWS.js";import{a as v}from"./chunk-YQ625XVJ.js";import"./chunk-VMCLSOZO.js";import"./chunk-PBUQY6G2.js";import{a as J}from"./chunk-GUJMNTXY.js";import"./chunk-JJ7LU6FF.js";import{a as Q}from"./chunk-QCO5J3CK.js";import"./chunk-3R32ULME.js";import"./chunk-KTI2IMEY.js";import"./chunk-GXOFVYKC.js";import"./chunk-LGNFNBOW.js";import"./chunk-A6LP6MUS.js";import"./chunk-E62N6RI5.js";import"./chunk-7VIXIIBV.js";import{a as r}from"./chunk-Y5EGDMIB.js";import{D as S,X as b,Y as g,a as h,d as u,fa as I,ga as d,ha as p,ia as G,ja as Z,t as W,u as f,w as Y,x as R}from"./chunk-TVNPLL64.js";import"./chunk-SNNJRQSX.js";import"./chunk-5YAX7RCO.js";import"./chunk-Z5JYB3FL.js";import"./chunk-SY2OGTK4.js";import"./chunk-MHWHHESW.js";import"./chunk-DLFQE7QF.js";import"./chunk-B7LKBV3M.js";import"./chunk-IUVEXKRJ.js";import"./chunk-WVO4VYA4.js";import"./chunk-C63Q3HN7.js";import"./chunk-NRW7AT6T.js";import"./chunk-DPECAWNM.js";import"./chunk-NIOVFM2M.js";import"./chunk-6ZCA6D63.js";import"./chunk-YXAOTQ2S.js";import"./chunk-V45UJIF2.js";import"./chunk-64PLTPQD.js";import"./chunk-OHAOQZFW.js";import"./chunk-PJWDCLVE.js";import{b as F}from"./chunk-Q3ULPWYK.js";import{a as X}from"./chunk-SY4ES3W2.js";import"./chunk-S7AF3SZF.js";import"./chunk-TFKKNJKY.js";import"./chunk-ZFTJPJLX.js";import"./chunk-R7J7NY4A.js";import"./chunk-5ELKH2XV.js";import"./chunk-5ORZS6IQ.js";import"./chunk-BRQN5OZB.js";import{a as H}from"./chunk-BZJZQFW2.js";import"./chunk-QCTVAEOV.js";import"./chunk-VQDTHLUC.js";function A(n,t){return v(j,T,n,t)}function tt(n){let t;return{c(){t=R("OneByOne")},m(e,l){W(e,t,l)},d(e){e&&f(t)}}}function et(n){let t,e,l;return e=new U({props:{disabled:n[0],$$slots:{default:[tt]},$$scope:{ctx:n}}}),e.$on("click",n[1]),{c(){t=Y("span"),I(e.$$.fragment),S(t,"class","svelte-erebu9")},m(c,o){W(c,t,o),d(e,t,null),l=!0},p(c,[o]){let a={};o&1&&(a.disabled=c[0]),o&8192&&(a.$$scope={dirty:o,ctx:c}),e.$set(a)},i(c){l||(b(e.$$.fragment,c),l=!0)},o(c){g(e.$$.fragment,c),l=!1},d(c){c&&f(t),p(e)}}}function nt(n,t,e){let l=0,c=J({className:"fshSpinner fshRelative",style:{height:"90px"}}),o=s=>Q(s.children[0]),a=s=>s.id.split("-").at(-1),$=()=>Promise.resolve({s:1}),L=()=>k("trade-create-selected"),_=()=>document.forms.sendItemForm.elements.target_username.value;function P(s,i){i.s?(jQuery(c.parentElement).qtip("disable"),c.parentElement.removeAttribute("class"),c.remove()):(c.replaceWith(s),o(s))}async function O(s,i,m){let x=await i;if(x?.s){o(m),m.replaceWith(c);let C=await A(s,[a(m)]);return C&&P(m,C),C}return x}let E=()=>H(O,_()),M=s=>s.reduce(E(),$());function D(s){s.s?B("Items sent successfully!"):B(s.e.message)}async function q(){let s=L();if(!s.length)return;r("Trade","oneByOne"),e(0,l=1);let i=await M(s);i&&(D(i),e(0,l=0))}return[l,q]}var V=class extends Z{constructor(t){super(),G(this,t,nt,et,u,{})}},K=V;function ct(n){let t,e;return t=new z({props:{wantsTagged:"1"}}),t.$on("perf",n[0]),t.$on("select",n[1]),t.$on("toggle",n[2]),{c(){I(t.$$.fragment)},m(l,c){d(t,l,c),e=!0},p:h,i(l){e||(b(t.$$.fragment,l),e=!0)},o(l){g(t.$$.fragment,l),e=!1},d(l){p(t,l)}}}function lt(n){return[()=>r("Trade","doPerf"),c=>r("Trade","doSelect",c.detail),()=>r("Trade","toggleSelectST")]}var N=class extends Z{constructor(t){super(),G(this,t,lt,ct,u,{})}},w=N;var st=n=>new K({target:n.parentNode});function ot(){let n=X("send-items");n&&st(n)}var it=()=>new w({target:F()});function rt(){X("trade-items")&&(y(3,ot),it())}export{rt as default};
//# sourceMappingURL=trade-XK4R5DPN.js.map