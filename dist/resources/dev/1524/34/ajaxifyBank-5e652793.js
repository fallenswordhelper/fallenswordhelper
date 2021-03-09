import{j as t,s as n,t as e,u as o,v as a,d as i}from"./calfSystem-c07e3259.js"
const s="#pCC b"
function p(t,n){return $("#pH #statbar-gold-tooltip-general dd",t).eq(n).text()}function u(t,n,e){return $(s,t).slice(n).eq(e).text()}function c(t,n,o){var a
!function(t){const n=$("#pCC #info-msg")
0===n.length?$("#pCC").prepend(t.closest(i)):n.closest(i).replaceWith(t.closest(i))}(o),function(t){$("#pH #statbar-gold").text($("#pH #statbar-gold",t).text()),$("#pH #statbar-gold-tooltip-general dd").text(e(p,t))}(n),function(t,n){$(s).slice(n).text(e(u,t,n))}(n,t.balPos),a=t.depoPos,"0"===$(s).eq(a).text()&&$('#pCC input[value="Deposit"]').prop("disabled",!0),function(t,n){"1"!==t.data.amount?$("#pCC #deposit_amount").val($("#pCC #deposit_amount",n).val()):$("#pCC #deposit_amount").val("1")}(t,n),$("#pCC #withdraw_amount").val(t.initWithdraw)}function d(t,n){const e=a(n),o=$("#pCC #info-msg",e)
0!==o.length&&c(t,e,o)}function l(t){o(t.data).then(e(d,t))}function r(t,n){n.preventDefault()
const e=$("#pCC #deposit_amount").val();(function(t,n){return"0"===$(s).eq(t.depoPos).text()||!$.isNumeric(n)||n<1})(t,e)||(t.data.mode="deposit",t.data.amount=e,l(t))}function f(t,n){n.preventDefault()
const e=$("#pCC #withdraw_amount").val()
!$.isNumeric(e)||e<1||(t.data.mode="withdraw",t.data.amount=e,l(t))}function C(t,o){!function(t,e){t.appLink&&e.after(`<div class="fshCenter"><a href="${n}bank">Go to Guild Bank</a></div>`)}(t,o)
const a=$('#pCC input[value="Deposit"]')
if(1!==a.length)return
const i=$('#pCC input[value="Withdraw"]')
1===i.length&&function(t,n,o){"0"===$(s).eq(t.depoPos).text()?n.prop("disabled",!0):n.on("click",e(r,t)),o.on("click",e(f,t))}(t,a,i)}function m(n){t()&&function(t){const n=$(t.headSelector)
0!==n.length&&n.eq(0).text()===t.headText&&C(t,n)}(n)}export{m as a}
//# sourceMappingURL=ajaxifyBank-5e652793.js.map
