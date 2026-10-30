import "./calfSystem-BrOFwh3f.js";
import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./task-kqK4S00s.js";
import { B as n, F as r, G as i, H as a, L as o, U as s, W as c, d as l, et as u, ft as d, lt as f, nt as p, pt as m, q as h, rt as g, st as _, tt as v, ut as y, vt as b, yt as x } from "./disclose-version-gxrYovMN.js";
import { t as S } from "./dynamicAlert-BnFmov1Z.js";
import { t as C } from "./partial-Bo20zBni.js";
import { t as w } from "./layout-B2Q1UoM2.js";
import { t as T } from "./sendEvent-DkxfZozg.js";
import { t as E } from "./createDiv-XU2XBEIv.js";
import { t as D } from "./getArrayByClassName-RPqCUmVz.js";
import { t as O } from "./_dataAccess-BLVLQyDJ.js";
import { t as k } from "./clickThis-UHuK6eKQ.js";
import { t as A } from "./LinkBtn-IEOqMqOr.js";
import { t as j } from "./QuickSelectClasses-CxyK0T8Z.js";
import { n as M, t as N } from "./sendItems-etywPxgX.js";
// src/modules/_dataAccess/daSendItems.js
function P(e, t) {
	return O(M, N, e, t);
}
// src/modules/trade/OneByOne.svelte
var F = a("<span class=\"svelte-pnxsk9\"><!></span>");
function I(e, t) {
	m(t, !0);
	let r = f(0), i = E({
		className: "fshSpinner fshRelative",
		style: { height: "90px" }
	}), a = (e) => k(e.children[0]), o = (e) => e.id.split("-").at(-1), c = () => Promise.resolve({ s: 1 }), l = () => D("trade-create-selected"), p = () => document.forms.sendItemForm.elements.target_username.value;
	function g(e, t) {
		t.s ? (jQuery(i.parentElement).qtip("disable"), i.parentElement.removeAttribute("class"), i.remove()) : (i.replaceWith(e), a(e));
	}
	async function v(e, t, n) {
		let r = await t;
		if (r?.s) {
			a(n), n.replaceWith(i);
			let t = await P(e, [o(n)]);
			return t && g(n, t), t;
		}
		return r;
	}
	let y = () => C(v, p()), w = (e) => e.reduce(y(), c());
	function O(e) {
		e.s ? S("Items sent successfully!") : S(e.e.message);
	}
	async function j() {
		let e = l();
		if (!e.length) return;
		T("Trade", "oneByOne"), _(r, 1);
		let t = await w(e);
		t && (O(t), _(r, 0));
	}
	var M = F(), N = u(M);
	A(N, {
		get disabled() {
			return h(r);
		},
		onclick: j,
		children: (e, t) => {
			b();
			var r = s("OneByOne");
			n(e, r);
		},
		$$slots: { default: !0 }
	}), x(M), n(e, M), d();
}
// src/modules/trade/Trade.svelte
var L = a("<div class=\"svelte-1vt9lok\"><button class=\"custombutton svelte-1vt9lok\" type=\"button\">Send</button></div>"), R = a("<!> <!>", 1);
function z(t, a) {
	m(a, !1);
	function o() {
		T("Trade", "doSend"), k(e("send-items"));
	}
	l();
	var s = R(), c = v(s), u = (e) => {
		var t = L(), r = p(t);
		i("click", r, o), n(e, t);
	}, f = y(() => e("send-items"));
	r(c, (e) => {
		h(f) && e(u);
	});
	var _ = g(c, 2);
	j(_, {
		dispatchPerf: () => T("Trade", "doPerf"),
		dispatchSelect: (e) => T("Trade", "doSelect", e),
		dispatchToggle: () => T("Trade", "toggleSelectST"),
		wantsTagged: "1"
	}), n(t, s), d();
}
c(["click"]);
// src/modules/trade/trade.js
var B = (e) => o(I, { target: e.parentNode });
function V() {
	let t = e("send-items");
	t && B(t);
}
var H = () => o(z, { target: w() });
function U() {
	e("trade-items") && (t(3, V), H());
}
export { U as default };

//# sourceMappingURL=trade-DstI8dGc.js.map