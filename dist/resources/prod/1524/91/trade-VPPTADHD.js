import{a as T}from"./chunk-ZK64WTSK.js";import{a as D,b as J}from"./chunk-I7PP47FE.js";import"./chunk-LUKDQ2HK.js";import{a as W}from"./chunk-BC4Z7YMF.js";import"./chunk-UH2OYRUK.js";import"./chunk-F7NRMTDD.js";import"./chunk-WFLVKGKV.js";import"./chunk-EKAZLGXT.js";import"./chunk-62KAVJLB.js";import"./chunk-3ZTEFNMQ.js";import"./chunk-KQYOMPW6.js";import{a as Q}from"./chunk-2PJJIGCS.js";import"./chunk-I22EDT74.js";import{a as R}from"./chunk-J7MD2KWN.js";import"./chunk-Q3GHEBJN.js";import"./chunk-MJJQFX2W.js";import"./chunk-VV4Q3N2E.js";import{a as F}from"./chunk-L4KRSPGL.js";import"./chunk-JD2UY4F4.js";import{a as O}from"./chunk-A7L7OPQH.js";import"./chunk-XMXBPRPQ.js";import{a as A}from"./chunk-BQ22HYN5.js";import{a as x}from"./chunk-GM6FB5OC.js";import"./chunk-DCYW4AFF.js";import"./chunk-J5PO4CUK.js";import"./chunk-RUMS66DZ.js";import"./chunk-QDNGMOF4.js";import{b as E}from"./chunk-2K77RJ6H.js";import{a as y}from"./chunk-TA6AFEKU.js";import"./chunk-NF5UIKV7.js";import"./chunk-BTRHHESW.js";import"./chunk-QKZE4S7D.js";import"./chunk-KXOTQ6FX.js";import"./chunk-MJTY2SNM.js";import"./chunk-SNUUUJ2J.js";import"./chunk-3OWYIURB.js";import"./chunk-JRO7QTDC.js";import"./chunk-L2YJ66JH.js";import"./chunk-WVJXETLD.js";import"./chunk-CIXFZBIO.js";import"./chunk-YV475WB4.js";import"./chunk-3A3FUFV2.js";import"./chunk-VBLJ4QNC.js";import"./chunk-COADUIVU.js";import{D as j,X as d,Y as p,a as C,e as f,fa as u,ga as g,ha as $,ia as _,ja as h,t as v,u as S,w as N,x as P}from"./chunk-BGHXTXB3.js";import"./chunk-4JMLF5JM.js";import"./chunk-G7U3SZPH.js";import{a as i}from"./chunk-SLXSHGYV.js";import"./chunk-IS4DNI73.js";import"./chunk-QTCHKF65.js";import"./chunk-B5FNPBUP.js";import"./chunk-VWHQXFZ5.js";import"./chunk-YXQFDIA6.js";import{a as q}from"./chunk-FNUCRPZA.js";import"./chunk-WFGYEXIY.js";import"./chunk-Y4WR2IKW.js";import"./chunk-MS5TR5HI.js";import"./chunk-WULU2HSE.js";import"./chunk-GCBAZDNZ.js";import"./chunk-UVAAI4KD.js";import"./chunk-KOVMYOV5.js";import"./chunk-SC26BEBT.js";import"./chunk-AXUZC3IG.js";function k(n,e){return F(D,J,n,e)}function ee(n){let e;return{c(){e=P("OneByOne")},m(t,o){v(t,e,o)},d(t){t&&S(e)}}}function te(n){let e,t,o;return t=new Q({props:{disabled:n[0],$$slots:{default:[ee]},$$scope:{ctx:n}}}),t.$on("click",n[1]),{c(){e=N("span"),u(t.$$.fragment),j(e,"class","svelte-erebu9")},m(r,a){v(r,e,a),g(t,e,null),o=!0},p(r,[a]){let c={};a&1&&(c.disabled=r[0]),a&8192&&(c.$$scope={dirty:a,ctx:r}),t.$set(c)},i(r){o||(d(t.$$.fragment,r),o=!0)},o(r){p(t.$$.fragment,r),o=!1},d(r){r&&S(e),$(t)}}}function ne(n,e,t){let o=0,r=x({className:"fshSpinner fshRelative",style:{height:"90px"}}),a=s=>R(s.children[0]),c=s=>s.id.split("-").at(-1),G=()=>Promise.resolve({s:1}),H=()=>A("trade-create-selected"),K=()=>document.forms.sendItemForm.elements.target_username.value;function M(s,m){m.s?(jQuery(r.parentElement).qtip("disable"),r.parentElement.removeAttribute("class"),r.remove()):(r.replaceWith(s),a(s))}async function U(s,m,l){let w=await m;if(w.s){a(l),l.replaceWith(r);let B=await k(s,[c(l)]);return M(l,B),B}return w}let V=()=>q(U,K()),X=s=>s.reduce(V(),G());function Y(s){s.s?T("Items sent successfully!"):T(s.e.message)}async function Z(){let s=H();if(!s.length)return;i("Trade","oneByOne"),t(0,o=1);let m=await X(s);Y(m),t(0,o=0)}return[o,Z]}var I=class extends h{constructor(e){super(),_(this,e,ne,te,f,{})}},L=I;function re(n){let e,t;return e=new W({props:{wantsTagged:"1"}}),e.$on("perf",n[0]),e.$on("select",n[1]),e.$on("toggle",n[2]),{c(){u(e.$$.fragment)},m(o,r){g(e,o,r),t=!0},p:C,i(o){t||(d(e.$$.fragment,o),t=!0)},o(o){p(e.$$.fragment,o),t=!1},d(o){$(e,o)}}}function oe(n){return[()=>i("Trade","doPerf"),r=>i("Trade","doSelect",r.detail),()=>i("Trade","toggleSelectST")]}var b=class extends h{constructor(e){super(),_(this,e,oe,re,f,{})}},z=b;var se=n=>new L({target:n.parentNode});function ae(){let n=y("send-items");n&&se(n)}var ie=()=>new z({target:E()});function ce(){!y("trade-items")||(O(3,ae),ie())}export{ce as default};
//# sourceMappingURL=trade-VPPTADHD.js.map