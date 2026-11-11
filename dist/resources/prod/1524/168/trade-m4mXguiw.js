import { B as e, F as t, G as n, H as r, L as i, U as a, W as o, d as s, et as c, ft as l, lt as u, nt as d, pt as f, q as p, rt as m, st as h, tt as g, ut as _, vt as v, yt as y } from "./disclose-version-Cj0Bwtvz.js";
import { t as b } from "./getElementById-C08-3H-C.js";
import { t as x } from "./layout-B2Q1UoM2.js";
import { t as S } from "./task-CUnrVZDS.js";
import { n as C, t as w } from "./sendItems-BiRlhCoE.js";
import { t as T } from "./_dataAccess-BLVLQyDJ.js";
import { t as E } from "./dynamicAlert-xklxr5Wl.js";
import { t as D } from "./sendEvent-DdWrU3DL.js";
import { t as O } from "./createDiv-B84RqGfo.js";
import { t as k } from "./clickThis-UHuK6eKQ.js";
import { t as A } from "./getArrayByClassName-RPqCUmVz.js";
import { t as j } from "./LinkBtn-DI1FRuvk.js";
import { t as M } from "./partial-Bo20zBni.js";
import "./calfSystem-oFfthDb1.js";
import { t as N } from "./QuickSelectClasses-DQe3HmUg.js";
// src/modules/_dataAccess/daSendItems.js
function P(e, t) {
	return T(C, w, e, t);
}
// src/modules/trade/OneByOne.svelte
var F = r("<span class=\"svelte-pnxsk9\"><!></span>");
function I(t, n) {
	f(n, !0);
	let r = u(0), i = O({
		className: "fshSpinner fshRelative",
		style: { height: "90px" }
	}), o = (e) => k(e.children[0]), s = (e) => e.id.split("-").at(-1), d = () => Promise.resolve({ s: 1 }), m = () => A("trade-create-selected"), g = () => document.forms.sendItemForm.elements.target_username.value;
	function _(e, t) {
		t.s ? (jQuery(i.parentElement).qtip("disable"), i.parentElement.removeAttribute("class"), i.remove()) : (i.replaceWith(e), o(e));
	}
	async function b(e, t, n) {
		let r = await t;
		if (r?.s) {
			o(n), n.replaceWith(i);
			let t = await P(e, [s(n)]);
			return t && _(n, t), t;
		}
		return r;
	}
	let x = () => M(b, g()), S = (e) => e.reduce(x(), d());
	function C(e) {
		e.s ? E("Items sent successfully!") : E(e.e.message);
	}
	async function w() {
		let e = m();
		if (!e.length) return;
		D("Trade", "oneByOne"), h(r, 1);
		let t = await S(e);
		t && (C(t), h(r, 0));
	}
	var T = F(), N = c(T);
	j(N, {
		get disabled() {
			return p(r);
		},
		onclick: w,
		children: (t, n) => {
			v();
			var r = a("OneByOne");
			e(t, r);
		},
		$$slots: { default: !0 }
	}), y(T), e(t, T), l();
}
// src/modules/trade/Trade.svelte
var L = r("<div class=\"svelte-1vt9lok\"><button class=\"custombutton svelte-1vt9lok\" type=\"button\">Send</button></div>"), R = r("<!> <!>", 1);
function z(r, i) {
	f(i, !1);
	function a() {
		D("Trade", "doSend"), k(b("send-items"));
	}
	s();
	var o = R(), c = g(o), u = (t) => {
		var r = L(), i = d(r);
		n("click", i, a), e(t, r);
	}, h = _(() => b("send-items"));
	t(c, (e) => {
		p(h) && e(u);
	});
	var v = m(c, 2);
	N(v, {
		dispatchPerf: () => D("Trade", "doPerf"),
		dispatchSelect: (e) => D("Trade", "doSelect", e),
		dispatchToggle: () => D("Trade", "toggleSelectST"),
		wantsTagged: "1"
	}), e(r, o), l();
}
o(["click"]);
// src/modules/trade/trade.js
var B = (e) => i(I, { target: e.parentNode });
function V() {
	let e = b("send-items");
	e && B(e);
}
var H = () => i(z, { target: x() });
function U() {
	b("trade-items") && (S(3, V), H());
}
export { U as default };

//# sourceMappingURL=trade-m4mXguiw.js.map