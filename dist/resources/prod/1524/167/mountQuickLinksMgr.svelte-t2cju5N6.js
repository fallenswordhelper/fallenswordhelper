import { B as e, G as t, H as n, K as r, L as i, M as a, N as o, R as s, T as c, W as l, Z as u, _ as d, dt as f, et as p, f as m, ft as h, h as g, it as _, lt as v, nt as y, pt as b, q as x, r as S, rt as C, st as w, tt as T, v as E, vt as D, yt as O } from "./disclose-version-Cj0Bwtvz.js";
import { t as k } from "./sendEvent-Co2_qySS.js";
import { t as A } from "./ModalTabbed-C_0hI67S.js";
import { t as j } from "./getValueJSON-B9u-UqpA.js";
import { t as M } from "./setValueJSON-DUS_AbBk.js";
import { t as N } from "./isArray-jaX-hZZq.js";
import { t as P } from "./jsonParse-CTM1cd4F.js";
import { t as F } from "./getValue-vrUqpo0a.js";
import { t as I } from "./setValue-D-C74rTg.js";
// src/modules/notepad/quickLinksManager/QuickLinksManager.svelte
var L = n("<div class=\"svelte-8od2gi\"> </div> <div class=\"svelte-8od2gi\"> </div> <div class=\"centered svelte-8od2gi\"><input disabled=\"\" type=\"checkbox\"/></div> <div class=\"buttons centered svelte-8od2gi\">[ <button type=\"button\" class=\"svelte-8od2gi\">Del</button> ]</div>", 1), R = n("<div class=\"container svelte-8od2gi\"><div class=\"grid headings svelte-8od2gi\"><div class=\"svelte-8od2gi\">Name</div> <div class=\"svelte-8od2gi\">URL</div> <div class=\"centered svelte-8od2gi\">New <div class=\"wrapper svelte-8od2gi\">[ <div class=\"tooltip svelte-8od2gi\"><span class=\"tooltip-bottom-right\" data-tooltip=\"Open page in a new window/tab\">?</span></div> ]</div></div> <div class=\"centered svelte-8od2gi\">Action</div></div> <div class=\"grid items svelte-8od2gi\"></div> <div class=\"grid add svelte-8od2gi\"><div><input placeholder=\"Log\" required=\"\" type=\"text\"/></div> <div><input placeholder=\"?cmd=log\" required=\"\" type=\"text\"/></div> <div class=\"centered svelte-8od2gi\"><input type=\"checkbox\"/></div> <div class=\"buttons centered svelte-8od2gi\">[ <button type=\"button\" class=\"svelte-8od2gi\">Add</button> ]</div></div></div>");
function z(n, i) {
	b(i, !0);
	let l = v(0), d = v(0), f = v(0), S = v(0), A = v(0), N = v(_(j("quickLinks") || []));
	function P() {
		M("quickLinks", x(N));
	}
	function F(e) {
		k("Quick Links Manager", "Delete Item"), w(N, x(N).toSpliced(e, 1), !0), P();
	}
	function I() {
		k("Quick Links Manager", "Add Item"), x(d) || x(S) || (w(N, [...x(N), {
			name: x(l).value,
			url: x(f).value,
			newWindow: x(A).checked
		}], !0), x(l).value = "", x(f).value = "", x(A).checked = 0, P());
	}
	var z = R(), B = C(p(z), 2);
	a(B, 21, () => x(N), o, (n, r, i) => {
		let a = () => x(r).name, o = () => x(r).url;
		var c = L(), l = T(c), d = y(l, !0), f = C(l, 2), m = y(f, !0), h = C(f, 2), _ = p(h);
		E(_), O(h);
		var v = C(h, 2), b = C(p(v));
		D(), O(v), u(() => {
			s(d, a()), s(m, o());
		}), g(_, () => x(N)[i].newWindow, (e) => x(N)[i].newWindow = e), t("click", b, () => F(i)), e(n, c);
	}), O(B);
	var V = C(B, 2), H = p(V), U = p(H);
	let W;
	m(U, (e) => w(l, e), () => x(l)), O(H);
	var G = C(H, 2), K = p(G);
	let q;
	m(K, (e) => w(f, e), () => x(f)), O(G);
	var J = C(G, 2), Y = p(J);
	m(Y, (e) => w(A, e), () => x(A)), O(J);
	var X = C(J, 2), Z = C(p(X));
	D(), O(X), O(V), O(z), u(() => {
		W = c(U, 1, "svelte-8od2gi", null, W, { invalid: x(d) }), q = c(K, 1, "svelte-8od2gi", null, q, { invalid: x(S) });
	}), r("blur", U, () => {
		w(d, x(l).validity.valueMissing, !0);
	}), r("focus", U, () => {
		w(d, 0);
	}), r("blur", K, () => {
		w(S, x(f).validity.valueMissing, !0);
	}), r("focus", K, () => {
		w(S, 0);
	}), t("click", Z, I), e(n, z), h();
}
l(["click"]);
// src/modules/notepad/quickLinksManager/QuickLinksRaw.svelte
var B = n("<div class=\"container svelte-xl4cmh\"><div class=\"textContainer svelte-xl4cmh\"><textarea></textarea></div> <div class=\"bottom svelte-xl4cmh\"><button type=\"button\">Save</button> <button type=\"button\">Reset</button></div></div>");
function V(n, i) {
	b(i, !0);
	let a = v(_(F("quickLinks"))), o = v(0), s = () => N(P(x(a))), l = () => !s(), m = () => I("quickLinks", x(a).trim());
	function g() {
		k("Quick Links Raw Editor", "Save"), s() ? m() : w(o, 1);
	}
	function y() {
		k("Quick Links Raw Editor", "Reset"), w(a, "[]"), w(o, 0), m();
	}
	var S = B(), T = p(S), E = p(T);
	f(E);
	let D;
	O(T);
	var A = C(T, 2), j = p(A), M = C(j, 2);
	O(A), O(S), u(() => D = c(E, 1, "svelte-xl4cmh", null, D, { invalid: x(o) })), r("blur", E, () => {
		w(o, l(), !0);
	}), r("focus", E, () => {
		w(o, 0);
	}), d(E, () => x(a), (e) => w(a, e)), t("click", j, g), t("click", M, y), e(n, S), h();
}
l(["click"]);
// src/modules/notepad/quickLinksManager/QuickLinksModal.svelte
function H(e, t) {
	b(t, !0);
	let n = S(t, "visible", 15, !0);
	function r() {
		k("Quick Links Manager", "close"), n(!1);
	}
	let i = [{
		component: z,
		label: "Quick Links"
	}, {
		component: V,
		label: "Raw Editor"
	}];
	A(e, {
		close: r,
		get tabs() {
			return i;
		},
		get visible() {
			return n();
		}
	}), h();
}
// src/modules/notepad/quickLinksManager/mountQuickLinksMgr.svelte.js
var U = _({ visible: !0 }), W = 0;
function G() {
	W ? U.visible = !0 : W = i(H, {
		props: U,
		target: document.body
	});
}
export { G as default };

//# sourceMappingURL=mountQuickLinksMgr.svelte-t2cju5N6.js.map