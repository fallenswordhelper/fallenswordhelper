import{a as S}from"./chunk-HMTHQTYW.js";import{a as N}from"./chunk-57RWRL5T.js";import{a as A}from"./chunk-JQAELPMM.js";import{a as y}from"./chunk-K6RV6BG4.js";import{a as H}from"./chunk-GYV54B7W.js";import{a as b}from"./chunk-7WQ5UNSS.js";import"./chunk-4IQVGLAY.js";import{a as R}from"./chunk-IAPLFRFL.js";import{a as L}from"./chunk-DQJLU6BH.js";import"./chunk-7YTTTE44.js";import{a as l}from"./chunk-VDABUAVV.js";import{a as m}from"./chunk-RK5HVFU5.js";import{a as C}from"./chunk-RAPV3KZQ.js";import{a as E}from"./chunk-OSU72WF2.js";import{a as n}from"./chunk-DSQHKKZ4.js";import"./chunk-IETC7J5T.js";import{a as T}from"./chunk-L4YLDFIV.js";import{b as f}from"./chunk-DLFJWHV6.js";import{a as u}from"./chunk-MT75LODT.js";import{a as h}from"./chunk-6SYTCZ5G.js";import{a as q}from"./chunk-ADLGCSQK.js";import{a as M}from"./chunk-SUBR6HFY.js";import"./chunk-APLZF2FC.js";import"./chunk-NIE6URWE.js";import{a as v}from"./chunk-VDZHRZJL.js";import"./chunk-KU5JAIEB.js";import"./chunk-BGM7VCLD.js";import"./chunk-ZOICBMHG.js";import"./chunk-EL33JOKC.js";import{a as I}from"./chunk-EOP2LXLP.js";import"./chunk-CEFYYGFM.js";import{a as s}from"./chunk-ARPRWHND.js";import{a as B}from"./chunk-3SG23KH5.js";import"./chunk-J3H3UK4G.js";import"./chunk-LAQFFA4M.js";import{a as Q}from"./chunk-TTNOFDP6.js";import{g as x}from"./chunk-B3TUML6P.js";import"./chunk-KXXSC5XL.js";import"./chunk-34VPQFZA.js";function p(t){return L({cmd:"tempinv",subcmd:"takeitems",item:t})}function F(t){return C({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}function G(t){let e=t.filter(r=>r.r===0),i=t.filter(r=>r.r!==0);return e.length>0?{r:e.map(r=>({id:r.temp_id})),s:!0}:i.length>0?{e:{message:i[0].m},s:!1}:{e:{message:t[0].m},s:!1}}async function d(t){let e=await q(t.map(F));return G(e)}function k(t){return R(p,d,t)}function c(t,e){b(e,`<li class="fshNbrList">${t}</li>`)}var D;function O(t){return!t.s&&D!==t.e.message}function g(t,e){if(!t||(O(t)&&(D=t.e.message,c(t.e.message,e)),!t.s))return!0}function w(t,e,i){let r=N({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${e}`});return l(r,i),r}function _(t,e){let i=e.children[0],{tipped:r}=i.dataset,{itemId:o,invId:a}=M(x,r);return!o||!a||(t[o]?t[o].invIds.push(a):t[o]={invIds:[a],tipped:r.replace(/&extra=\d/,""),src:i.src}),t}function z(){return m({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'})}function J(){let t=m(),e=H();return n(t,e),{takeContainer:t,takeResult:e}}function P(t,e){let i=e[1],r=m(),o=m({innerHTML:`<img src="${i.src}" class="tip-dynamic" data-tipped="${i.tipped}">`});n(r,o);let a=m({innerHTML:`<button class="fshBl fshBls" data-id="${e[0]}">Take All ${i.invIds.length}</button>`});n(r,a),n(t,r)}function U(t,e){I(e).forEach(s(P,t))}function K(t){let e=$(`#temp-inv-img-${t}`).qtip("api");e&&e.destroy(!0)}function V(t){K(t.id);let e=h(`temp-inv-${t.id}`);e&&u("",e)}function W(t,e){e.r.forEach(V),c(`${e.r.length.toString()} item(s) taken.`,t)}function X(t,e){g(e,t)||T(e.r)&&W(t,e)}async function Y(t,e){let i=await k(e);X(t,i)}function Z(t,e,i){let r=i.dataset.id,{invIds:o}=t[r];u(`taking all ${o.length} items`,i.parentNode),S(40,o).forEach(s(Y,e))}function j(t,e,i){y("fshBls",i.target)&&Z(t,e,i.target)}function tt(t,e,i){let r=m({className:"fshTakeGrid"});U(r,t),n(e,r),Q(r,s(j,t,i))}function et(t){let e=z(),{takeContainer:i,takeResult:r}=J();tt(t,e,r),n(e,m()),n(e,i),n(f(),e)}function it(t,e){w("qtOn","Mailbox",e);let i=t.reduce(_,{});et(i)}function rt(t,e){let i=A({id:"fshQuickTake",type:"checkbox"});l(i,e),E(i,"change",s(it,t,e))}function ot(){if(B()||!f())return;let t=v("a",f());if(t.length===0)return;let e=f().lastElementChild;rt(t,e),w("qtOff","Quick Take",e)}export{ot as default};
//# sourceMappingURL=mailbox-QPENWSKL.js.map
