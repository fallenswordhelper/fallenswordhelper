import{a as N,b as R}from"./chunk-IYFLXSEC.js";import{a as D}from"./chunk-JEDRRKXC.js";import{a as A}from"./chunk-VANJ6SBK.js";import{a as M}from"./chunk-PL75PSML.js";import{a as L}from"./chunk-KAC23OZK.js";import{a as q}from"./chunk-JSLIXZ26.js";import{a as h}from"./chunk-LOMTR7UR.js";import{a as y}from"./chunk-FFTGEYJL.js";import{a as l}from"./chunk-OJEUV2SM.js";import"./chunk-QNQ62I2N.js";import{a as E}from"./chunk-NRO5M5RP.js";import{a as B}from"./chunk-KJXK3QHT.js";import"./chunk-H5JQREIR.js";import"./chunk-6WQKPU62.js";import{a as m}from"./chunk-NU3FAJPR.js";import{a as n}from"./chunk-B7B6FEDD.js";import"./chunk-D2JB7FXL.js";import{a as T}from"./chunk-4INAK7SH.js";import"./chunk-DKRWTGPA.js";import{a as x}from"./chunk-OY6KZ2QA.js";import"./chunk-NTPHAESD.js";import"./chunk-2BNSEFB2.js";import"./chunk-3SKGW6OG.js";import"./chunk-KQSUJNSJ.js";import"./chunk-4WC2EWBK.js";import{a as Q}from"./chunk-4E2HVB33.js";import{a as v}from"./chunk-5PMW5STL.js";import{b as c}from"./chunk-4JW3DRCH.js";import{a as f}from"./chunk-D3KONKYS.js";import{a as b}from"./chunk-RC2D6Q5A.js";import"./chunk-527CNM4N.js";import{a as I}from"./chunk-6IX4R32K.js";import{a}from"./chunk-UG5BYLND.js";import"./chunk-N3S7NELN.js";import"./chunk-BQVMUFJ3.js";import"./chunk-XANH2KUG.js";import"./chunk-JEWY3LVF.js";import{a as C}from"./chunk-E3DVO4DM.js";import"./chunk-QNTIOO4O.js";import"./chunk-KI4LHW6W.js";import"./chunk-47PUSJEZ.js";import"./chunk-MWERZPAU.js";import{i as g}from"./chunk-3GR2FESE.js";import"./chunk-DKU5TE64.js";function S(t){return y({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}function F(t){let e=t.filter(o=>o.r===0),i=t.filter(o=>o.r!==0);return e.length>0?{r:e.map(o=>({id:o.temp_id})),s:!0}:i.length>0?{e:{message:i[0].m},s:!1}:{e:{message:t[0].m},s:!1}}function u(t){return A(t.map(S),F)}function p(t){return B({cmd:"tempinv",subcmd:"takeitems",item:t})}function d(t){return E(p,u,t)}function H(t,e,i){let o=M({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${e}`});return l(o,i),o}function O(t,e){let i=e.children[0],{tipped:o}=i.dataset,r=g.exec(o);if(!r)return t;let s=r[1],k=r[2];return t[s]?t[s].invIds.push(k):t[s]={invIds:[k],tipped:o.replace(/&extra=\d/,""),src:i.src},t}function _(){return m({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'})}function j(t){let e=m(),i=L();return n(e,i),n(t,e),i}function w(t,e){let i=e[1],o=m(),r=m({innerHTML:`<img src="${i.src}" class="tip-dynamic" data-tipped="${i.tipped}">`});n(o,r);let s=m({innerHTML:`<button class="fshBl fshBls" data-id="${e[0]}">Take All ${i.invIds.length}</button>`});n(o,s),n(t,o)}function z(t,e){I(e).forEach(a(w,t))}function G(t){let e=$(`#temp-inv-img-${t}`).qtip("api");e&&e.destroy(!0)}function J(t){G(t.id);let e=b(`temp-inv-${t.id}`);e&&f("",e)}function P(t,e){e.r.forEach(J),N(`${e.r.length.toString()} item(s) taken.`,t)}function U(t,e){R(e,t)||T(e.r)&&P(t,e)}function K(t,e){d(e).then(a(U,t))}function V(t,e,i){let o=i.dataset.id,{invIds:r}=t[o];f(`taking all ${r.length} items`,i.parentNode),D(40,r).forEach(a(K,e))}function W(t,e,i){v("fshBls",i.target)&&V(t,e,i.target)}function X(t,e,i){let o=m({className:"fshTakeGrid"});z(o,t),n(e,o),C(o,a(W,t,i))}function Y(t){let e=_(),i=j(e);n(e,m()),X(t,e,i),n(c,e)}function Z(t,e){H("qtOn","Mailbox",e);let i=t.reduce(O,{});Y(i)}function tt(t,e){let i=q({id:"fshQuickTake",type:"checkbox"});l(i,e),h(i,"change",a(Z,t,e))}function et(){if(Q()||!c)return;let t=x("a",c);if(t.length===0)return;let e=c.lastElementChild;tt(t,e),H("qtOff","Quick Take",e)}export{et as default};
//# sourceMappingURL=mailbox-LWYHNLSY.js.map
