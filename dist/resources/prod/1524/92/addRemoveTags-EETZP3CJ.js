import{a as K}from"./chunk-T3URONYC.js";import{a as z}from"./chunk-DZRO2VFW.js";import"./chunk-ZS6UHCXU.js";import{a as u,b as X}from"./chunk-Y7IO2EOD.js";import"./chunk-SSUSN6JO.js";import"./chunk-A2I533SU.js";import{a as W}from"./chunk-HJ4E6JLN.js";import{a as J}from"./chunk-NHWXBEDB.js";import"./chunk-4AGIFBOY.js";import{a as L}from"./chunk-ZQDERVVJ.js";import{a as m}from"./chunk-STS5MBDW.js";import{a as h}from"./chunk-FO5AIT2P.js";import{a as P}from"./chunk-5JNXNECZ.js";import"./chunk-BV4DJGU4.js";import{a as v}from"./chunk-CXJHL2KO.js";import{a as T}from"./chunk-QTSQHPKK.js";import"./chunk-4U7T7HTS.js";import"./chunk-EVIGSOCH.js";import{a as p}from"./chunk-ZK3AGOF2.js";import{a as w}from"./chunk-RDHUTGMZ.js";import"./chunk-M6LUOG2I.js";import"./chunk-GQTCWOPY.js";import"./chunk-WRHTWSD6.js";import{a as b}from"./chunk-LFZPKT47.js";import"./chunk-OR5BPR4B.js";import{a as G}from"./chunk-A77NZCEP.js";import"./chunk-AOZMZP5H.js";import{a as F}from"./chunk-VT3LH7JR.js";import{a as H}from"./chunk-6NBL4CEJ.js";import"./chunk-UECO6BBS.js";import{b as l}from"./chunk-MY4OO5AP.js";import{a as g}from"./chunk-DI3XCMNE.js";import"./chunk-2FAPNSRX.js";import{a as s}from"./chunk-7H5ET4BP.js";import"./chunk-WCTHIQU3.js";import{a as _}from"./chunk-WA4H3QPQ.js";import"./chunk-DKWH62CP.js";import"./chunk-2IOAHVVN.js";import"./chunk-GALQGYEO.js";import"./chunk-T4ZSWDX2.js";import"./chunk-WE2GCAKX.js";import"./chunk-N3ED3R2T.js";import{a as D}from"./chunk-DGZXYCCD.js";import"./chunk-KO7VAH62.js";import"./chunk-JKEV6NM2.js";import"./chunk-OB44S7IV.js";import"./chunk-OI7KRNQS.js";import"./chunk-C7L2X63R.js";import{a as j}from"./chunk-WTCWPEJX.js";import{a}from"./chunk-H2ANYIFW.js";import"./chunk-KUIVOAMB.js";import"./chunk-O6E23IRT.js";import"./chunk-TLAXHTSP.js";import{a as i}from"./chunk-RUEPLNRL.js";import"./chunk-O7K3SHEW.js";import"./chunk-EZQ2GDBH.js";import"./chunk-GVTRKM2F.js";import"./chunk-EZ536MXS.js";import"./chunk-LVBWHS3E.js";import{a as q}from"./chunk-OR37OWF3.js";import"./chunk-FQGZN2JL.js";import"./chunk-BYAZQWO5.js";import{a as N}from"./chunk-MR322WHU.js";function k(t){return u({subcmd2:"takeitem",guildstore_id:t})}function U(t){return t.r===0?{s:!0}:{e:{message:t.m},s:!1}}function I(t){return X(t).then(U)}function y(t){return p(k,I,t)}function x(t,o){return u({subcmd2:t,tagIndex:o})}function A(t,o){return _({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:o}).then(W)}function c(t,o){return p(x,A,t,o)}function f(){return s('[name="subcmd2"]').value}var V=t=>s("input",m(t)),O=t=>T("div",t).dataset.invId;function Y(){a('#pCC input[name="tagIndex[]"]').forEach(v)}function Z(t,o){let e=O(o),[,,n,d]=t.find(([,r])=>r===e);t.filter(([,,r,R])=>r===n&&R===d).filter(([r])=>document.body.contains(r)).map(([r])=>r).forEach(v)}function tt(t){let o=h({className:t.className.replace("-btn","")});t.replaceWith(o)}function ot(t){a("button:not(.tag-bp-btn)",t).forEach(tt)}function et(t,o){let e=h({className:`tag-${t} fshSpinner fshSpinner12`});return o.replaceWith(e),ot(T("div",e)),e}async function $(t,o,e,n){let d=O(n);V(n)?.remove();let r=et(t,n);(await o(d)).s&&(r.classList.remove("fshSpinner"),G(e,r))}function M(t){return c(f(),[t])}function nt(t){return[["tag-all-custom",Y],["tag-bp-btn",i($,"bp",y,"Taken")],["tag-all-btn",i(Z,t)],["tag-add-btn",i($,"add",M,"Tagged")],["tag-remove-btn",i($,"remove",M,"Removed")]]}function C(t){D(l(),w(nt(t)))}var rt=()=>a('[name="tagIndex[]"]:checked');async function it(t,o){let e=await c(t,o.map(n=>n.value));e.s?o.forEach(K):z(e.e.message)}function at(t){t.preventDefault(),L(25,rt()).forEach(i(it,f())),j("addRemoveTags","Tag by AJAX")}function S(){q(document.forms[0],"submit",at)}var E=()=>N.subcmd2==="addtags",mt=t=>s("img",m(t)).src.split("/").at(-1).split(".")[0],st=t=>H(m(t).cells[2]),Q=(t,o)=>`<button class="${t}" type="button">${o}</button>`,ct=t=>F(t).split(" ").at(-1),ft=t=>`tag-${ct(t)}-btn`,B=t=>`[${Q(ft(t),t)}]`,lt=t=>t>1?`${B("Check All")}&nbsp;`:"",pt=()=>E()?"Add":"Remove",ut=()=>B(`Fast ${pt()}`),dt=()=>B("Fast BP"),gt=(t,o)=>`<div class="btn-div" data-inv-id="${t}">${o}</div>`,bt=(t,o)=>gt(t,`&nbsp;${lt(o)}${ut()}&nbsp;${dt()}`);function vt([t,o,,,e]){let n=m(t).cells[2];b(n,bt(o,e))}function Tt(t){return[t,t.value,mt(t),st(t)]}function ht(t){return t.map(o=>[...o,t.filter(([,,e,n])=>e===o[2]&&n===o[3]).length])}function kt(){let o=a('input[name="tagIndex[]"]',l()).map(Tt);return ht(o)}function It(t){let o=t.parentNode;E()&&(o=m(t).insertCell(-1)),b(o,Q("tag-all-custom custombutton","Check&nbsp;All"))}function yt(t){if(!E())return;let o=J(t);o.className="add-remove-tags"}function xt(){let t=kt();if(!t.length)return;let o=g("tagging_cost");yt(o),It(o),t.forEach(vt),C(t),S()}function At(){g("tagging_cost")?xt():P()}export{At as default};
//# sourceMappingURL=addRemoveTags-EETZP3CJ.js.map