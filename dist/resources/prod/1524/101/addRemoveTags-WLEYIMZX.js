import{a as K}from"./chunk-CZK23ES5.js";import{a as u,b as z}from"./chunk-PZDAPDMJ.js";import"./chunk-7Y4YWH2Z.js";import"./chunk-CWQ2N2YK.js";import{a as J}from"./chunk-6WHX4ZOR.js";import{a as P}from"./chunk-OQROBCFM.js";import{a as W}from"./chunk-CZWDZKMV.js";import{a as m}from"./chunk-3KNMYXHR.js";import{a as h}from"./chunk-KD2TQDC2.js";import{a as X}from"./chunk-RTE6UYLX.js";import{a as q}from"./chunk-EMWKBIAY.js";import"./chunk-INXAI5WY.js";import"./chunk-5RXP5SSK.js";import"./chunk-CDGBAOPB.js";import{a as v}from"./chunk-MONJV5HR.js";import{a as T}from"./chunk-CXZY7U5K.js";import"./chunk-A7LJ5JA4.js";import"./chunk-EZTMMSK6.js";import{a as p}from"./chunk-24YCXMN5.js";import{a as D}from"./chunk-IHWMGVXT.js";import"./chunk-NXICAQZL.js";import"./chunk-GFSCFFLZ.js";import"./chunk-E5JJQSAN.js";import{a as b}from"./chunk-SX7NSJWL.js";import"./chunk-EMGUCCKH.js";import{a as _}from"./chunk-53EP5EG2.js";import"./chunk-P6DVXZYM.js";import{a as L}from"./chunk-S7CCC3M2.js";import{a as w}from"./chunk-XZESHS3Q.js";import"./chunk-7RUZO2DE.js";import{b as l}from"./chunk-P4Q4L6W3.js";import{a as g}from"./chunk-37F6LHIG.js";import"./chunk-YU6SRFCQ.js";import{a as s}from"./chunk-XR4F2JTY.js";import"./chunk-TIZNFP3C.js";import{a as F}from"./chunk-NL5G2PXF.js";import"./chunk-UMRLEZUY.js";import"./chunk-AXBARIP4.js";import"./chunk-HOUKHWMK.js";import"./chunk-27OJ4RCD.js";import"./chunk-SBMEJVSZ.js";import"./chunk-HI42KIAI.js";import{a as G}from"./chunk-LNXUNYCS.js";import"./chunk-3TICXWSZ.js";import"./chunk-SMRTR7WB.js";import"./chunk-CDDBOQZU.js";import"./chunk-ZYUPJWLY.js";import"./chunk-OKHRNXU6.js";import"./chunk-VN5AHXMX.js";import{a as H}from"./chunk-E6PDYOYJ.js";import{a as i}from"./chunk-YJLZLU4M.js";import"./chunk-Y7AIRXY2.js";import"./chunk-EORP6S4E.js";import"./chunk-AICREXKX.js";import{a}from"./chunk-XVK7UPUF.js";import"./chunk-5BQBSHRD.js";import"./chunk-J7LGFPI5.js";import"./chunk-LEA2LHIQ.js";import{a as j}from"./chunk-IHQ4NUVX.js";import{a as N}from"./chunk-YHV3XLCG.js";import"./chunk-MZSOSQQ4.js";function k(t){return u({subcmd2:"takeitem",guildstore_id:t})}function U(t){return t.r===0?{s:!0}:{e:{message:t.m},s:!1}}async function I(t){let o=await z(t);return U(o)}function y(t){return p(k,I,t)}function x(t,o){return u({subcmd2:t,tagIndex:o})}async function A(t,o){let e=await F({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:o});return J(e)}function c(t,o){return p(x,A,t,o)}function f(){return s('[name="subcmd2"]').value}var V=t=>s("input",m(t)),O=t=>T("div",t).dataset.invId;function Y(){i('#pCC input[name="tagIndex[]"]').forEach(v)}function Z(t,o){let e=O(o),[,,n,d]=t.find(([,r])=>r===e);t.filter(([,,r,R])=>r===n&&R===d).filter(([r])=>document.body.contains(r)).map(([r])=>r).forEach(v)}function tt(t){let o=h({className:t.className.replace("-btn","")});t.replaceWith(o)}function ot(t){i("button:not(.tag-bp-btn)",t).forEach(tt)}function et(t,o){let e=h({className:`tag-${t} fshSpinner fshSpinner12`});return o.replaceWith(e),ot(T("div",e)),e}async function $(t,o,e,n){let d=O(n);V(n)?.remove();let r=et(t,n);(await o(d)).s&&(r.classList.remove("fshSpinner"),_(e,r))}function M(t){return c(f(),[t])}function nt(t){return[["tag-all-custom",Y],["tag-bp-btn",a($,"bp",y,"Taken")],["tag-all-btn",a(Z,t)],["tag-add-btn",a($,"add",M,"Tagged")],["tag-remove-btn",a($,"remove",M,"Removed")]]}function C(t){G(l(),D(nt(t)))}var rt=()=>i('[name="tagIndex[]"]:checked');async function at(t,o){let e=await c(t,o.map(n=>n.value));e.s?o.forEach(K):q(e.e.message)}function it(t){t.preventDefault(),W(25,rt()).forEach(a(at,f())),H("addRemoveTags","Tag by AJAX")}function S(){j(document.forms[0],"submit",it)}var E=()=>N.subcmd2==="addtags",mt=t=>s("img",m(t)).src.split("/").at(-1).split(".")[0],st=t=>w(m(t).cells[2]),Q=(t,o)=>`<button class="${t}" type="button">${o}</button>`,ct=t=>L(t).split(" ").at(-1),ft=t=>`tag-${ct(t)}-btn`,B=t=>`[${Q(ft(t),t)}]`,lt=t=>t>1?`${B("Check All")}&nbsp;`:"",pt=()=>E()?"Add":"Remove",ut=()=>B(`Fast ${pt()}`),dt=()=>B("Fast BP"),gt=(t,o)=>`<div class="btn-div" data-inv-id="${t}">${o}</div>`,bt=(t,o)=>gt(t,`&nbsp;${lt(o)}${ut()}&nbsp;${dt()}`);function vt([t,o,,,e]){let n=m(t).cells[2];b(n,bt(o,e))}function Tt(t){return[t,t.value,mt(t),st(t)]}function ht(t){return t.map(o=>[...o,t.filter(([,,e,n])=>e===o[2]&&n===o[3]).length])}function kt(){let o=i('input[name="tagIndex[]"]',l()).map(Tt);return ht(o)}function It(t){let o=t.parentNode;E()&&(o=m(t).insertCell(-1)),b(o,Q("tag-all-custom custombutton","Check&nbsp;All"))}function yt(t){if(!E())return;let o=P(t);o.className="add-remove-tags"}function xt(){let t=kt();if(!t.length)return;let o=g("tagging_cost");yt(o),It(o),t.forEach(vt),C(t),S()}function At(){g("tagging_cost")?xt():X()}export{At as default};
//# sourceMappingURL=addRemoveTags-WLEYIMZX.js.map