import{a as K}from"./chunk-WUIHK66Y.js";import{a as z}from"./chunk-MKSJBD5L.js";import"./chunk-4YYFE2MV.js";import{a as u,b as X}from"./chunk-OYGDKAZ6.js";import"./chunk-VQBG5QK7.js";import"./chunk-ND7BVOEA.js";import{a as W}from"./chunk-RARVWW6F.js";import{a as J}from"./chunk-ZMOYYY2M.js";import"./chunk-5XMAQBJZ.js";import{a as L}from"./chunk-GZE7D6UK.js";import{a as m}from"./chunk-TCSZ6BRF.js";import{a as h}from"./chunk-3H6GCVB5.js";import{a as P}from"./chunk-RUQJ4FTZ.js";import"./chunk-52V2CNK7.js";import{a as v}from"./chunk-APWD7TKF.js";import{a as T}from"./chunk-2L2WLAM3.js";import"./chunk-7D3IJODM.js";import"./chunk-QWA6EHRV.js";import{a as p}from"./chunk-UDLQXSUI.js";import{a as H}from"./chunk-ESMSV2L7.js";import"./chunk-VL55L6QG.js";import"./chunk-ZK36QI5P.js";import"./chunk-OSXVP6O7.js";import{a as b}from"./chunk-HF6D2UFB.js";import"./chunk-KJYHCQ2M.js";import{a as G}from"./chunk-5ZMPYFCQ.js";import"./chunk-UYTG5BIE.js";import{a as F}from"./chunk-CPH7EA52.js";import{a as q}from"./chunk-S2OM6JJX.js";import"./chunk-X6TTU562.js";import{b as l}from"./chunk-B4VPWMSY.js";import{a as g}from"./chunk-EQGONDX6.js";import"./chunk-NFZ5236K.js";import{a as s}from"./chunk-DTVBVYDR.js";import"./chunk-TLSBW6NW.js";import{a as _}from"./chunk-VOZNQMDZ.js";import"./chunk-FWKC5QHK.js";import"./chunk-NWPELAGL.js";import"./chunk-PQNRX7KL.js";import"./chunk-3HA3LGRS.js";import"./chunk-PQQEFJJP.js";import"./chunk-PG53AESD.js";import{a as D}from"./chunk-MQXWBXAI.js";import"./chunk-SBWIHXTD.js";import"./chunk-YHRTQMZ2.js";import"./chunk-IOH4FTYG.js";import"./chunk-YP7572QL.js";import"./chunk-7CJIGO53.js";import{a as w}from"./chunk-56KYPMCN.js";import{a as i}from"./chunk-Y2VHEFD6.js";import"./chunk-IVQP43UK.js";import"./chunk-L3JPR2OA.js";import"./chunk-BOKRD7MF.js";import{a}from"./chunk-OX4LUTGU.js";import"./chunk-APL2ZPH4.js";import"./chunk-DUYXF4AP.js";import"./chunk-2AE3RW75.js";import"./chunk-4VOC3Y22.js";import"./chunk-EBYAAPUH.js";import{a as j}from"./chunk-OORPHTKR.js";import"./chunk-7FWLR7VA.js";import"./chunk-CQMSXQA7.js";import{a as N}from"./chunk-YZRZJRAF.js";function k(t){return u({subcmd2:"takeitem",guildstore_id:t})}function U(t){return t.r===0?{s:!0}:{e:{message:t.m},s:!1}}async function I(t){let o=await X(t);return U(o)}function y(t){return p(k,I,t)}function x(t,o){return u({subcmd2:t,tagIndex:o})}async function A(t,o){let e=await _({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:o});return W(e)}function c(t,o){return p(x,A,t,o)}function f(){return s('[name="subcmd2"]').value}var V=t=>s("input",m(t)),O=t=>T("div",t).dataset.invId;function Y(){i('#pCC input[name="tagIndex[]"]').forEach(v)}function Z(t,o){let e=O(o),[,,n,d]=t.find(([,r])=>r===e);t.filter(([,,r,R])=>r===n&&R===d).filter(([r])=>document.body.contains(r)).map(([r])=>r).forEach(v)}function tt(t){let o=h({className:t.className.replace("-btn","")});t.replaceWith(o)}function ot(t){i("button:not(.tag-bp-btn)",t).forEach(tt)}function et(t,o){let e=h({className:`tag-${t} fshSpinner fshSpinner12`});return o.replaceWith(e),ot(T("div",e)),e}async function $(t,o,e,n){let d=O(n);V(n)?.remove();let r=et(t,n);(await o(d)).s&&(r.classList.remove("fshSpinner"),G(e,r))}function M(t){return c(f(),[t])}function nt(t){return[["tag-all-custom",Y],["tag-bp-btn",a($,"bp",y,"Taken")],["tag-all-btn",a(Z,t)],["tag-add-btn",a($,"add",M,"Tagged")],["tag-remove-btn",a($,"remove",M,"Removed")]]}function C(t){D(l(),H(nt(t)))}var rt=()=>i('[name="tagIndex[]"]:checked');async function at(t,o){let e=await c(t,o.map(n=>n.value));e.s?o.forEach(K):z(e.e.message)}function it(t){t.preventDefault(),L(25,rt()).forEach(a(at,f())),w("addRemoveTags","Tag by AJAX")}function S(){j(document.forms[0],"submit",it)}var E=()=>N.subcmd2==="addtags",mt=t=>s("img",m(t)).src.split("/").at(-1).split(".")[0],st=t=>q(m(t).cells[2]),Q=(t,o)=>`<button class="${t}" type="button">${o}</button>`,ct=t=>F(t).split(" ").at(-1),ft=t=>`tag-${ct(t)}-btn`,B=t=>`[${Q(ft(t),t)}]`,lt=t=>t>1?`${B("Check All")}&nbsp;`:"",pt=()=>E()?"Add":"Remove",ut=()=>B(`Fast ${pt()}`),dt=()=>B("Fast BP"),gt=(t,o)=>`<div class="btn-div" data-inv-id="${t}">${o}</div>`,bt=(t,o)=>gt(t,`&nbsp;${lt(o)}${ut()}&nbsp;${dt()}`);function vt([t,o,,,e]){let n=m(t).cells[2];b(n,bt(o,e))}function Tt(t){return[t,t.value,mt(t),st(t)]}function ht(t){return t.map(o=>[...o,t.filter(([,,e,n])=>e===o[2]&&n===o[3]).length])}function kt(){let o=i('input[name="tagIndex[]"]',l()).map(Tt);return ht(o)}function It(t){let o=t.parentNode;E()&&(o=m(t).insertCell(-1)),b(o,Q("tag-all-custom custombutton","Check&nbsp;All"))}function yt(t){if(!E())return;let o=J(t);o.className="add-remove-tags"}function xt(){let t=kt();if(!t.length)return;let o=g("tagging_cost");yt(o),It(o),t.forEach(vt),C(t),S()}function At(){g("tagging_cost")?xt():P()}export{At as default};
//# sourceMappingURL=addRemoveTags-JWX4G725.js.map
