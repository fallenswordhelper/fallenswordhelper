import { t as e } from "./getValue-j5JjE6f3.js";
import { t } from "./setValue-31jE_mRr.js";
import { t as n } from "./jsonParse-C99pLn1W.js";
import { t as r } from "./isArray-FpVoUujB.js";
import { A as i, B as a, E as o, F as s, J as c, K as l, L as u, N as d, R as f, T as p, W as m, X as h, Y as g, Z as _, _t as v, d as y, dt as b, et as x, f as S, gt as C, j as w, l as T, nt as E, o as D, r as O, ut as k, v as A, z as j } from "./disclose-version-Bvjv4_yw.js";
import { t as M } from "./sendEvent-DFQy5lFi.js";
import { t as N } from "./setValueJSON-DxCApg-9.js";
import { t as P } from "./getValueJSON-B96nfhpL.js";
import { t as F } from "./ModalTabbed-BnVneRbl.js";
//#region src/modules/notepad/quickLinksManager/QuickLinksManager.svelte
var I = s("<div class=\"svelte-8od2gi\"> </div> <div class=\"svelte-8od2gi\"> </div> <div class=\"centered svelte-8od2gi\"><input disabled=\"\" type=\"checkbox\"/></div> <div class=\"buttons centered svelte-8od2gi\">[ <button type=\"button\" class=\"svelte-8od2gi\">Del</button> ]</div>", 1), L = s("<div class=\"container svelte-8od2gi\"><div class=\"grid headings svelte-8od2gi\"><div class=\"svelte-8od2gi\">Name</div> <div class=\"svelte-8od2gi\">URL</div> <div class=\"centered svelte-8od2gi\">New <div class=\"wrapper svelte-8od2gi\">[ <div class=\"tooltip svelte-8od2gi\"><span class=\"tooltip-bottom-right\" data-tooltip=\"Open page in a new window/tab\">?</span></div> ]</div></div> <div class=\"centered svelte-8od2gi\">Action</div></div> <div class=\"grid items svelte-8od2gi\"></div> <div class=\"grid add svelte-8od2gi\"><div><input placeholder=\"Log\" required=\"\" type=\"text\"/></div> <div><input placeholder=\"?cmd=log\" required=\"\" type=\"text\"/></div> <div class=\"centered svelte-8od2gi\"><input type=\"checkbox\"/></div> <div class=\"buttons centered svelte-8od2gi\">[ <button type=\"button\" class=\"svelte-8od2gi\">Add</button> ]</div></div></div>");
function R(e, t) {
	b(t, !0);
	let n = E(0), r = E(0), i = E(0), s = E(0), l = E(0), u = E(_(P("quickLinks") || []));
	function y() {
		N("quickLinks", a(u));
	}
	function O(e) {
		M("Quick Links Manager", "Delete Item"), x(u, a(u).toSpliced(e, 1), !0), y();
	}
	function F() {
		M("Quick Links Manager", "Add Item"), !(a(r) || a(s)) && (x(u, [...a(u), {
			name: a(n).value,
			url: a(i).value,
			newWindow: a(l).checked
		}], !0), a(n).value = "", a(i).value = "", a(l).checked = 0, y());
	}
	var R = L(), z = h(c(R), 2);
	p(z, 21, () => a(u), o, (e, t, n) => {
		let r = () => a(t).name, i = () => a(t).url;
		var o = I(), s = g(o), l = c(s, !0);
		v(s);
		var p = h(s, 2), _ = c(p, !0);
		v(p);
		var y = h(p, 2), b = c(y);
		S(b), v(y);
		var x = h(y, 2), E = h(c(x));
		C(), v(x), m(() => {
			w(l, r()), w(_, i());
		}), T(b, () => a(u)[n].newWindow, (e) => a(u)[n].newWindow = e), f("click", E, () => O(n)), d(e, o);
	}), v(z);
	var B = h(z, 2), V = c(B), H = c(V);
	let U;
	D(H, (e) => x(n, e), () => a(n)), v(V);
	var W = h(V, 2), G = c(W);
	let K;
	D(G, (e) => x(i, e), () => a(i)), v(W);
	var q = h(W, 2);
	D(c(q), (e) => x(l, e), () => a(l)), v(q);
	var J = h(q, 2), Y = h(c(J));
	C(), v(J), v(B), v(R), m(() => {
		U = A(H, 1, "svelte-8od2gi", null, U, { invalid: a(r) }), K = A(G, 1, "svelte-8od2gi", null, K, { invalid: a(s) });
	}), j("blur", H, () => {
		x(r, a(n).validity.valueMissing, !0);
	}), j("focus", H, () => {
		x(r, 0);
	}), j("blur", G, () => {
		x(s, a(i).validity.valueMissing, !0);
	}), j("focus", G, () => {
		x(s, 0);
	}), f("click", Y, F), d(e, R), k();
}
u(["click"]);
//#endregion
//#region src/modules/notepad/quickLinksManager/QuickLinksRaw.svelte
var z = s("<div class=\"container svelte-xl4cmh\"><div class=\"textContainer svelte-xl4cmh\"><textarea></textarea></div> <div class=\"bottom svelte-xl4cmh\"><button type=\"button\">Save</button> <button type=\"button\">Reset</button></div></div>");
function B(i, o) {
	b(o, !0);
	let s = E(_(e("quickLinks"))), u = E(0), p = () => r(n(a(s))), g = () => !p(), S = () => t("quickLinks", a(s).trim());
	function C() {
		M("Quick Links Raw Editor", "Save"), p() ? S() : x(u, 1);
	}
	function w() {
		M("Quick Links Raw Editor", "Reset"), x(s, "[]"), x(u, 0), S();
	}
	var T = z(), D = c(T), O = c(D);
	l(O);
	let N;
	v(D);
	var P = h(D, 2), F = c(P), I = h(F, 2);
	v(P), v(T), m(() => N = A(O, 1, "svelte-xl4cmh", null, N, { invalid: a(u) })), j("blur", O, () => {
		x(u, g(), !0);
	}), j("focus", O, () => {
		x(u, 0);
	}), y(O, () => a(s), (e) => x(s, e)), f("click", F, C), f("click", I, w), d(i, T), k();
}
u(["click"]);
//#endregion
//#region src/modules/notepad/quickLinksManager/QuickLinksModal.svelte
function V(e, t) {
	b(t, !0);
	let n = O(t, "visible", 15, !0);
	function r() {
		M("Quick Links Manager", "close"), n(!1);
	}
	let i = [{
		component: R,
		label: "Quick Links"
	}, {
		component: B,
		label: "Raw Editor"
	}];
	F(e, {
		close: r,
		get tabs() {
			return i;
		},
		get visible() {
			return n();
		}
	}), k();
}
//#endregion
//#region src/modules/notepad/quickLinksManager/mountQuickLinksMgr.svelte.js
var H = _({ visible: !0 }), U = 0;
function W() {
	U ? H.visible = !0 : U = i(V, {
		props: H,
		target: document.body
	});
}
//#endregion
export { W as default };

//# sourceMappingURL=mountQuickLinksMgr.svelte-ZG4bNYuE.js.map