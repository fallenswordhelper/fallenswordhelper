import{a as d}from"./chunk-UWKUUDVQ.js";import{a as p}from"./chunk-WPRJK6Q2.js";import{a as l}from"./chunk-PJ32ASZ7.js";import{D as c,sa as r}from"./chunk-YNXRNCRL.js";import{a as n}from"./chunk-DEDCEYVR.js";var s="#pH #statbar-gold",f="#pH #statbar-gold-tooltip-general dd",i="#pCC b",m="#pCC #info-msg",x="#pCC #withdraw_amount",u="#pCC #deposit_amount",h="disabled",C='#pCC input[value="Deposit"]';function w(t){let o=$(m);o.length===0?$("#pCC").prepend(t.closest(r)):o.closest(r).replaceWith(t.closest(r))}function D(t,o){return $(f,t).eq(o).text()}function B(t){$(s).text($(s,t).text()),$(f).text(n(D,t))}function j(t,o,e){return $(i,t).slice(o).eq(e).text()}function q(t,o){$(i).slice(o).text(n(j,t,o))}function A(t){$(i).eq(t).text()==="0"&&$(C).prop(h,!0)}function G(t,o){t.data.amount!=="1"?$(u).val($(u,o).val()):$(u).val("1")}function y(t,o,e){w(e),B(o),q(o,t.balPos),A(t.depoPos),G(t,o),$(x).val(t.initWithdraw)}function P(t,o){let e=p(o),a=$(m,e);a.length!==0&&y(t,e,a)}function T(t,o){return $(i).eq(t.depoPos).text()==="0"||!$.isNumeric(o)||o<1}function v(t){l(t.data).then(n(P,t))}function W(t,o){o.preventDefault();let e=$(u).val();T(t,e)||(t.data.mode="deposit",t.data.amount=e,v(t))}function H(t,o){o.preventDefault();let e=$(x).val();!$.isNumeric(e)||e<1||(t.data.mode="withdraw",t.data.amount=e,v(t))}function L(t,o){t.appLink&&o.after(`<div class="fshCenter"><a href="${c}bank">Go to Guild Bank</a></div>`)}function N(t,o,e){$(i).eq(t.depoPos).text()==="0"?o.prop(h,!0):o.on("click",n(W,t)),e.on("click",n(H,t))}function Q(t,o){L(t,o);let e=$(C);if(e.length!==1)return;let a=$('#pCC input[value="Withdraw"]');a.length===1&&N(t,e,a)}function V(t){let o=$(t.headSelector);o.length!==0&&o.eq(0).text()===t.headText&&Q(t,o)}function _(t){d()&&V(t)}export{_ as a};
//# sourceMappingURL=chunk-6EC7WBBO.js.map
