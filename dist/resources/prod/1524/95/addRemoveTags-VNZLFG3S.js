import{a as K}from"./chunk-YNTW4354.js";import{a as z}from"./chunk-6ZU6DFW2.js";import"./chunk-L5ICZKO4.js";import{a as u,b as X}from"./chunk-MTWCR7W4.js";import"./chunk-FYU6LCOJ.js";import"./chunk-2CBVY6E4.js";import{a as W}from"./chunk-JKVCLQ72.js";import{a as J}from"./chunk-Y3RIZDPO.js";import"./chunk-JJLX6LRM.js";import{a as L}from"./chunk-KHMDWVJX.js";import{a as m}from"./chunk-RQBBVJME.js";import{a as h}from"./chunk-ZZFUN4A2.js";import{a as P}from"./chunk-CGAPMKV2.js";import"./chunk-FRAHKESU.js";import{a as v}from"./chunk-KUOLYR64.js";import{a as T}from"./chunk-KXOD4Y3N.js";import"./chunk-24UDG3FH.js";import"./chunk-GP5AV6MD.js";import{a as p}from"./chunk-TWHHUG4E.js";import{a as w}from"./chunk-TS424CY5.js";import"./chunk-QT54IR6F.js";import"./chunk-MPTLNWVC.js";import"./chunk-EB645W7R.js";import{a as b}from"./chunk-DU4LUWGY.js";import"./chunk-N4PCIVE3.js";import{a as G}from"./chunk-P3IWSBOB.js";import"./chunk-5AWGL262.js";import{a as F}from"./chunk-2C6JLCJG.js";import{a as H}from"./chunk-D4AVXNRB.js";import"./chunk-W5AN4HHX.js";import{b as l}from"./chunk-FJXTYPNU.js";import{a as g}from"./chunk-RVP3BZF7.js";import"./chunk-EOFOSJFM.js";import{a as s}from"./chunk-4GU2HJD7.js";import"./chunk-BMHVDIFE.js";import{a as _}from"./chunk-XNL3JTED.js";import"./chunk-HNXEOKKJ.js";import"./chunk-PJX66I2Y.js";import"./chunk-WLWXTJVR.js";import"./chunk-YYW2XVVC.js";import"./chunk-LGXHSUMA.js";import"./chunk-DZSOBYW3.js";import{a as D}from"./chunk-HCQKHTWX.js";import"./chunk-WRPLKSBT.js";import"./chunk-WLL45D4I.js";import"./chunk-OPUFCVBO.js";import"./chunk-S5SWZJQ4.js";import"./chunk-MEWLLVXN.js";import{a as j}from"./chunk-RIAQP6AM.js";import{a}from"./chunk-DARUUDAY.js";import"./chunk-2T7366JB.js";import"./chunk-RGSHZW7Q.js";import"./chunk-232WRRJZ.js";import{a as i}from"./chunk-OQC4RYIZ.js";import"./chunk-WGISVX7D.js";import"./chunk-PC7TOLHT.js";import"./chunk-NVWIQHSW.js";import"./chunk-AVWEVNGS.js";import"./chunk-6C22U5JX.js";import{a as q}from"./chunk-VSTJBSW7.js";import"./chunk-3DLQUZR2.js";import"./chunk-BUBKPU26.js";import{a as N}from"./chunk-4P22QABU.js";function k(t){return u({subcmd2:"takeitem",guildstore_id:t})}function U(t){return t.r===0?{s:!0}:{e:{message:t.m},s:!1}}function I(t){return X(t).then(U)}function y(t){return p(k,I,t)}function x(t,o){return u({subcmd2:t,tagIndex:o})}function A(t,o){return _({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:o}).then(W)}function c(t,o){return p(x,A,t,o)}function f(){return s('[name="subcmd2"]').value}var V=t=>s("input",m(t)),O=t=>T("div",t).dataset.invId;function Y(){a('#pCC input[name="tagIndex[]"]').forEach(v)}function Z(t,o){let e=O(o),[,,n,d]=t.find(([,r])=>r===e);t.filter(([,,r,R])=>r===n&&R===d).filter(([r])=>document.body.contains(r)).map(([r])=>r).forEach(v)}function tt(t){let o=h({className:t.className.replace("-btn","")});t.replaceWith(o)}function ot(t){a("button:not(.tag-bp-btn)",t).forEach(tt)}function et(t,o){let e=h({className:`tag-${t} fshSpinner fshSpinner12`});return o.replaceWith(e),ot(T("div",e)),e}async function $(t,o,e,n){let d=O(n);V(n)?.remove();let r=et(t,n);(await o(d)).s&&(r.classList.remove("fshSpinner"),G(e,r))}function M(t){return c(f(),[t])}function nt(t){return[["tag-all-custom",Y],["tag-bp-btn",i($,"bp",y,"Taken")],["tag-all-btn",i(Z,t)],["tag-add-btn",i($,"add",M,"Tagged")],["tag-remove-btn",i($,"remove",M,"Removed")]]}function C(t){D(l(),w(nt(t)))}var rt=()=>a('[name="tagIndex[]"]:checked');async function it(t,o){let e=await c(t,o.map(n=>n.value));e.s?o.forEach(K):z(e.e.message)}function at(t){t.preventDefault(),L(25,rt()).forEach(i(it,f())),j("addRemoveTags","Tag by AJAX")}function S(){q(document.forms[0],"submit",at)}var E=()=>N.subcmd2==="addtags",mt=t=>s("img",m(t)).src.split("/").at(-1).split(".")[0],st=t=>H(m(t).cells[2]),Q=(t,o)=>`<button class="${t}" type="button">${o}</button>`,ct=t=>F(t).split(" ").at(-1),ft=t=>`tag-${ct(t)}-btn`,B=t=>`[${Q(ft(t),t)}]`,lt=t=>t>1?`${B("Check All")}&nbsp;`:"",pt=()=>E()?"Add":"Remove",ut=()=>B(`Fast ${pt()}`),dt=()=>B("Fast BP"),gt=(t,o)=>`<div class="btn-div" data-inv-id="${t}">${o}</div>`,bt=(t,o)=>gt(t,`&nbsp;${lt(o)}${ut()}&nbsp;${dt()}`);function vt([t,o,,,e]){let n=m(t).cells[2];b(n,bt(o,e))}function Tt(t){return[t,t.value,mt(t),st(t)]}function ht(t){return t.map(o=>[...o,t.filter(([,,e,n])=>e===o[2]&&n===o[3]).length])}function kt(){let o=a('input[name="tagIndex[]"]',l()).map(Tt);return ht(o)}function It(t){let o=t.parentNode;E()&&(o=m(t).insertCell(-1)),b(o,Q("tag-all-custom custombutton","Check&nbsp;All"))}function yt(t){if(!E())return;let o=J(t);o.className="add-remove-tags"}function xt(){let t=kt();if(!t.length)return;let o=g("tagging_cost");yt(o),It(o),t.forEach(vt),C(t),S()}function At(){g("tagging_cost")?xt():P()}export{At as default};
//# sourceMappingURL=addRemoveTags-VNZLFG3S.js.map