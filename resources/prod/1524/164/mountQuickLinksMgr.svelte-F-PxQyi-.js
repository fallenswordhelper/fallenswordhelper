import { t as e } from "./getValue-Aap0zlcO.js";
import { t } from "./setValue-B1MbQwxn.js";
import { t as n } from "./jsonParse-CTM1cd4F.js";
import { t as r } from "./isArray-jaX-hZZq.js";
import { B as i, G as a, H as o, K as s, L as c, M as l, N as u, R as d, T as f, W as p, Z as m, _ as h, dt as g, et as _, f as v, ft as y, h as b, it as x, lt as S, nt as C, pt as w, q as T, r as E, rt as D, st as O, tt as k, v as A, vt as j, yt as M } from "./disclose-version-gxrYovMN.js";
import { t as N } from "./sendEvent-DkxfZozg.js";
import { t as P } from "./setValueJSON-yIVjeinK.js";
import { t as F } from "./getValueJSON-KYouMySE.js";
import { t as I } from "./ModalTabbed-DBcYFU8s.js";
// src/modules/notepad/quickLinksManager/QuickLinksManager.svelte
var L = o("<div class=\"svelte-8od2gi\"> </div> <div class=\"svelte-8od2gi\"> </div> <div class=\"centered svelte-8od2gi\"><input disabled=\"\" type=\"checkbox\"/></div> <div class=\"buttons centered svelte-8od2gi\">[ <button type=\"button\" class=\"svelte-8od2gi\">Del</button> ]</div>", 1), R = o("<div class=\"container svelte-8od2gi\"><div class=\"grid headings svelte-8od2gi\"><div class=\"svelte-8od2gi\">Name</div> <div class=\"svelte-8od2gi\">URL</div> <div class=\"centered svelte-8od2gi\">New <div class=\"wrapper svelte-8od2gi\">[ <div class=\"tooltip svelte-8od2gi\"><span class=\"tooltip-bottom-right\" data-tooltip=\"Open page in a new window/tab\">?</span></div> ]</div></div> <div class=\"centered svelte-8od2gi\">Action</div></div> <div class=\"grid items svelte-8od2gi\"></div> <div class=\"grid add svelte-8od2gi\"><div><input placeholder=\"Log\" required=\"\" type=\"text\"/></div> <div><input placeholder=\"?cmd=log\" required=\"\" type=\"text\"/></div> <div class=\"centered svelte-8od2gi\"><input type=\"checkbox\"/></div> <div class=\"buttons centered svelte-8od2gi\">[ <button type=\"button\" class=\"svelte-8od2gi\">Add</button> ]</div></div></div>");
function z(e, t) {
	w(t, !0);
	let n = S(0), r = S(0), o = S(0), c = S(0), p = S(0), h = S(x(F("quickLinks") || []));
	function g() {
		P("quickLinks", T(h));
	}
	function E(e) {
		N("Quick Links Manager", "Delete Item"), O(h, T(h).toSpliced(e, 1), !0), g();
	}
	function I() {
		N("Quick Links Manager", "Add Item"), !(T(r) || T(c)) && (O(h, [...T(h), {
			name: T(n).value,
			url: T(o).value,
			newWindow: T(p).checked
		}], !0), T(n).value = "", T(o).value = "", T(p).checked = 0, g());
	}
	var z = R(), B = D(_(z), 2);
	l(B, 21, () => T(h), u, (e, t, n) => {
		let r = () => T(t).name, o = () => T(t).url;
		var s = L(), c = k(s), l = C(c, !0), u = D(c, 2), f = C(u, !0), p = D(u, 2), g = _(p);
		A(g), M(p);
		var v = D(p, 2), y = D(_(v));
		j(), M(v), m(() => {
			d(l, r()), d(f, o());
		}), b(g, () => T(h)[n].newWindow, (e) => T(h)[n].newWindow = e), a("click", y, () => E(n)), i(e, s);
	}), M(B);
	var V = D(B, 2), H = _(V), U = _(H);
	let W;
	v(U, (e) => O(n, e), () => T(n)), M(H);
	var G = D(H, 2), K = _(G);
	let q;
	v(K, (e) => O(o, e), () => T(o)), M(G);
	var J = D(G, 2), Y = _(J);
	v(Y, (e) => O(p, e), () => T(p)), M(J);
	var X = D(J, 2), Z = D(_(X));
	j(), M(X), M(V), M(z), m(() => {
		W = f(U, 1, "svelte-8od2gi", null, W, { invalid: T(r) }), q = f(K, 1, "svelte-8od2gi", null, q, { invalid: T(c) });
	}), s("blur", U, () => {
		O(r, T(n).validity.valueMissing, !0);
	}), s("focus", U, () => {
		O(r, 0);
	}), s("blur", K, () => {
		O(c, T(o).validity.valueMissing, !0);
	}), s("focus", K, () => {
		O(c, 0);
	}), a("click", Z, I), i(e, z), y();
}
p(["click"]);
// src/modules/notepad/quickLinksManager/QuickLinksRaw.svelte
var B = o("<div class=\"container svelte-xl4cmh\"><div class=\"textContainer svelte-xl4cmh\"><textarea></textarea></div> <div class=\"bottom svelte-xl4cmh\"><button type=\"button\">Save</button> <button type=\"button\">Reset</button></div></div>");
function V(o, c) {
	w(c, !0);
	let l = S(x(e("quickLinks"))), u = S(0), d = () => r(n(T(l))), p = () => !d(), v = () => t("quickLinks", T(l).trim());
	function b() {
		N("Quick Links Raw Editor", "Save"), d() ? v() : O(u, 1);
	}
	function C() {
		N("Quick Links Raw Editor", "Reset"), O(l, "[]"), O(u, 0), v();
	}
	var E = B(), k = _(E), A = _(k);
	g(A);
	let j;
	M(k);
	var P = D(k, 2), F = _(P), I = D(F, 2);
	M(P), M(E), m(() => j = f(A, 1, "svelte-xl4cmh", null, j, { invalid: T(u) })), s("blur", A, () => {
		O(u, p(), !0);
	}), s("focus", A, () => {
		O(u, 0);
	}), h(A, () => T(l), (e) => O(l, e)), a("click", F, b), a("click", I, C), i(o, E), y();
}
p(["click"]);
// src/modules/notepad/quickLinksManager/QuickLinksModal.svelte
function H(e, t) {
	w(t, !0);
	let n = E(t, "visible", 15, !0);
	function r() {
		N("Quick Links Manager", "close"), n(!1);
	}
	let i = [{
		component: z,
		label: "Quick Links"
	}, {
		component: V,
		label: "Raw Editor"
	}];
	I(e, {
		close: r,
		get tabs() {
			return i;
		},
		get visible() {
			return n();
		}
	}), y();
}
// src/modules/notepad/quickLinksManager/mountQuickLinksMgr.svelte.js
var U = x({ visible: !0 }), W = 0;
function G() {
	W ? U.visible = !0 : W = c(H, {
		props: U,
		target: document.body
	});
}
export { G as default };

//# sourceMappingURL=mountQuickLinksMgr.svelte-F-PxQyi-.js.map