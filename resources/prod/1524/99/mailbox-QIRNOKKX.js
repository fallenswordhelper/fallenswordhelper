import{a as S}from"./chunk-S56GVATQ.js";import{a as N}from"./chunk-AURYFU33.js";import{a as A}from"./chunk-3GDZ2KGR.js";import{a as H}from"./chunk-5HABVWHF.js";import{a as L}from"./chunk-ENJPFQDL.js";import{a as u}from"./chunk-DT4L6H53.js";import{a as y}from"./chunk-FLBDELZS.js";import{a as R}from"./chunk-WEOKG4DE.js";import{a as b}from"./chunk-3U2KFVE3.js";import"./chunk-FLANWCWH.js";import{a as m}from"./chunk-A3YSMN3P.js";import{a as n}from"./chunk-WEH2BEPF.js";import"./chunk-S4LJSUOM.js";import{a as T}from"./chunk-V4X4HJXK.js";import{b as f}from"./chunk-MVLZ5DIF.js";import{a as l}from"./chunk-TBDAY7IJ.js";import{a as h}from"./chunk-RLMEWYFJ.js";import{a as M}from"./chunk-XOISOZY7.js";import{a as C}from"./chunk-NWDGTVVH.js";import{a as v}from"./chunk-BNXETKRM.js";import"./chunk-ZYSUV7P2.js";import"./chunk-MCKCLPTM.js";import"./chunk-3M4JV256.js";import"./chunk-3VGCM7V6.js";import{a as I}from"./chunk-5AMVPEUS.js";import{a as B}from"./chunk-U2RDL7AF.js";import"./chunk-YERAUQ3J.js";import"./chunk-OC2AAQPF.js";import{a as Q}from"./chunk-KDMA4L6I.js";import{g as x}from"./chunk-LGYGKPKS.js";import{a as q}from"./chunk-XJTFL7TK.js";import"./chunk-SAUPNLY3.js";import{a as E}from"./chunk-W6WYHSG7.js";import"./chunk-VX5V3MQE.js";import"./chunk-U5QRCCLA.js";import"./chunk-C4N36YS5.js";import{a as s}from"./chunk-DG6P646J.js";import"./chunk-HN4Q5DUC.js";import"./chunk-WWWWNWRL.js";function p(t){return q({cmd:"tempinv",subcmd:"takeitems",item:t})}function F(t){return R({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}function G(t){let e=t.filter(r=>r.r===0),i=t.filter(r=>r.r!==0);return e.length>0?{r:e.map(r=>({id:r.temp_id})),s:!0}:i.length>0?{e:{message:i[0].m},s:!1}:{e:{message:t[0].m},s:!1}}async function d(t){let e=await M(t.map(F));return G(e)}function k(t){return L(p,d,t)}function c(t,e){b(e,`<li class="fshNbrList">${t}</li>`)}var D;function O(t){return!t.s&&D!==t.e.message}function g(t,e){if(!t||(O(t)&&(D=t.e.message,c(t.e.message,e)),!t.s))return!0}function w(t,e,i){let r=N({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${e}`});return u(r,i),r}function _(t,e){let i=e.children[0],{tipped:r}=i.dataset,{itemId:o,invId:a}=C(x,r);return!o||!a||(t[o]?t[o].invIds.push(a):t[o]={invIds:[a],tipped:r.replace(/&extra=\d/,""),src:i.src}),t}function z(){return m({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'})}function J(){let t=m(),e=H();return n(t,e),{takeContainer:t,takeResult:e}}function P(t,e){let i=e[1],r=m(),o=m({innerHTML:`<img src="${i.src}" class="tip-dynamic" data-tipped="${i.tipped}">`});n(r,o);let a=m({innerHTML:`<button class="fshBl fshBls" data-id="${e[0]}">Take All ${i.invIds.length}</button>`});n(r,a),n(t,r)}function U(t,e){I(e).forEach(s(P,t))}function K(t){let e=$(`#temp-inv-img-${t}`).qtip("api");e&&e.destroy(!0)}function V(t){K(t.id);let e=h(`temp-inv-${t.id}`);e&&l("",e)}function W(t,e){e.r.forEach(V),c(`${e.r.length.toString()} item(s) taken.`,t)}function X(t,e){g(e,t)||T(e.r)&&W(t,e)}async function Y(t,e){let i=await k(e);X(t,i)}function Z(t,e,i){let r=i.dataset.id,{invIds:o}=t[r];l(`taking all ${o.length} items`,i.parentNode),S(40,o).forEach(s(Y,e))}function j(t,e,i){y("fshBls",i.target)&&Z(t,e,i.target)}function tt(t,e,i){let r=m({className:"fshTakeGrid"});U(r,t),n(e,r),Q(r,s(j,t,i))}function et(t){let e=z(),{takeContainer:i,takeResult:r}=J();tt(t,e,r),n(e,m()),n(e,i),n(f(),e)}function it(t,e){w("qtOn","Mailbox",e);let i=t.reduce(_,{});et(i)}function rt(t,e){let i=A({id:"fshQuickTake",type:"checkbox"});u(i,e),E(i,"change",s(it,t,e))}function ot(){if(B()||!f())return;let t=v("a",f());if(t.length===0)return;let e=f().lastElementChild;rt(t,e),w("qtOff","Quick Take",e)}export{ot as default};
//# sourceMappingURL=mailbox-QIRNOKKX.js.map
