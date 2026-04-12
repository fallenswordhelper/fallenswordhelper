import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./task-DenRcgws.js";
import { A as n, B as r, F as i, I as a, J as o, L as s, N as c, O as l, R as u, X as d, Y as f, _t as p, a as m, dt as h, et as g, gt as _, nt as v, rt as y, ut as b } from "./disclose-version-Bvjv4_yw.js";
import { t as x } from "./dynamicAlert-DtHqMIea.js";
import { t as S } from "./partial-CYzPXpZP.js";
import { t as C } from "./layout-6CPY-bfq.js";
import { t as w } from "./sendEvent-DFQy5lFi.js";
import { t as T } from "./createDiv-CH3rNL4c.js";
import { t as E } from "./getArrayByClassName-9tzft1UU.js";
import { t as D } from "./_dataAccess-Cm9xXxBc.js";
import { t as O } from "./clickThis-5GuZiKOQ.js";
import "./legacy-DUan0FaP.js";
import { t as k } from "./LinkBtn-lhxAFeIb.js";
import { t as A } from "./QuickSelectClasses-gaYkQJ2b.js";
import { n as j, t as M } from "./sendItems-BgrgOMC-.js";
//#region src/modules/_dataAccess/daSendItems.js
function N(e, t) {
	return D(j, M, e, t);
}
//#endregion
//#region src/modules/trade/OneByOne.svelte
var P = i("<span class=\"svelte-pnxsk9\"><!></span>");
function F(e, t) {
	h(t, !0);
	let n = v(0), i = T({
		className: "fshSpinner fshRelative",
		style: { height: "90px" }
	}), s = (e) => O(e.children[0]), l = (e) => e.id.split("-").at(-1), u = () => Promise.resolve({ s: 1 }), d = () => E("trade-create-selected"), f = () => document.forms.sendItemForm.elements.target_username.value;
	function m(e, t) {
		t.s ? (jQuery(i.parentElement).qtip("disable"), i.parentElement.removeAttribute("class"), i.remove()) : (i.replaceWith(e), s(e));
	}
	async function y(e, t, n) {
		let r = await t;
		if (r?.s) {
			s(n), n.replaceWith(i);
			let t = await N(e, [l(n)]);
			return t && m(n, t), t;
		}
		return r;
	}
	let C = () => S(y, f()), D = (e) => e.reduce(C(), u());
	function A(e) {
		e.s ? x("Items sent successfully!") : x(e.e.message);
	}
	async function j() {
		let e = d();
		if (!e.length) return;
		w("Trade", "oneByOne"), g(n, 1);
		let t = await D(e);
		t && (A(t), g(n, 0));
	}
	var M = P();
	k(o(M), {
		get disabled() {
			return r(n);
		},
		onclick: j,
		children: (e, t) => {
			_(), c(e, a("OneByOne"));
		},
		$$slots: { default: !0 }
	}), p(M), c(e, M), b();
}
//#endregion
//#region src/modules/trade/Trade.svelte
var I = i("<div class=\"svelte-1vt9lok\"><button class=\"custombutton svelte-1vt9lok\" type=\"button\">Send</button></div>"), L = i("<!> <!>", 1);
function R(t, n) {
	h(n, !1);
	function i() {
		w("Trade", "doSend"), O(e("send-items"));
	}
	m();
	var a = L(), s = f(a), g = (e) => {
		var t = I(), n = o(t);
		p(t), u("click", n, i), c(e, t);
	}, _ = y(() => e("send-items"));
	l(s, (e) => {
		r(_) && e(g);
	}), A(d(s, 2), {
		dispatchPerf: () => w("Trade", "doPerf"),
		dispatchSelect: (e) => w("Trade", "doSelect", e),
		dispatchToggle: () => w("Trade", "toggleSelectST"),
		wantsTagged: "1"
	}), c(t, a), b();
}
s(["click"]);
//#endregion
//#region src/modules/trade/trade.js
var z = (e) => n(F, { target: e.parentNode });
function B() {
	let t = e("send-items");
	t && z(t);
}
var V = () => n(R, { target: C() });
function H() {
	e("trade-items") && (t(3, B), V());
}
//#endregion
export { H as default };

//# sourceMappingURL=trade-B0xsNoWP.js.map