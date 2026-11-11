import { $ as e, A as t, B as n, G as r, H as i, K as a, Q as o, T as s, V as c, W as l, Z as u, et as d, f, ft as p, lt as m, pt as h, q as g, r as _, st as v, tt as y, ut as b, xt as x, yt as S } from "./disclose-version-Cj0Bwtvz.js";
import { t as C } from "./calf-SqS2SeU4.js";
import { t as w } from "./querySelectorArray-C70U47NF.js";
// src/modules/modal/ModalBackground.svelte
var T = i("<div><!></div>");
function E(e, i) {
	h(i, !0);
	let a = _(i, "visible", 3, !0), c = m(void 0), l, y, b;
	function C() {
		document.body.classList.contains("noscroll") || (l = !0, y = window.scrollY, b = document.body.style.top, document.body.classList.add("noscroll"), document.body.style.top = `-${y}px`);
	}
	function w() {
		l && (document.body.classList.remove("noscroll"), document.body.style.top = b || "", window.scrollTo(0, y));
	}
	function E(e) {
		e.target === g(c) && i.close();
	}
	o(() => {
		a() ? C() : w();
	});
	var D = T();
	let O;
	var k = d(D);
	t(k, () => i.children ?? x), S(D), f(D, (e) => v(c, e), () => g(c)), u(() => O = s(D, 1, "svelte-1joucfc", null, O, { visible: a() })), r("click", D, E), n(e, D), p();
}
l(["click"]);
// src/modules/modal/ModalDialog.svelte
var D, O = i("<div role=\"dialog\" aria-modal=\"true\"><!></div>");
function k(r, i) {
	h(i, !0);
	let c = _(i, "modal", 15), l = _(i, "visible", 3, !0), y = b(l), C = m(void 0), T = m(void 0), E = (e) => e.tabIndex >= 0 && e.offsetWidth > 0 && e.offsetHeight > 0 && !e.disabled;
	function k(e) {
		if (l()) {
			if (e.key === "Escape" && D === c()) i.close();
			else if (e.key === "Tab") {
				let t = w("*", c()).filter(E), n = t.indexOf(document.activeElement);
				n === -1 && e.shiftKey && (n = 0), n += t.length + (e.shiftKey ? -1 : 1), n %= t.length, t[n].focus(), e.preventDefault();
			}
		}
	}
	o(() => {
		l() ? (v(C, document?.activeElement, !0), c() && (v(T, D, !0), D = c())) : (g(C)?.focus(), c() && (D = g(T)));
	});
	var A = O();
	a("keydown", e, k);
	let j;
	var M = d(A);
	t(M, () => i.children ?? x), S(A), f(A, (e) => c(e), () => c()), u(() => j = s(A, 1, "ui-dialog svelte-h5colk", null, j, { modalVisible: g(y) })), n(r, A), p();
}
// src/modules/modal/Modal.svelte
function A(e, r) {
	h(r, !0);
	let i = _(r, "modal", 15), a = _(r, "visible", 3, !0), s;
	o(() => {
		a() ? (C.dialogIsClosed && (s = C.dialogIsClosed), C.dialogIsClosed = () => !a()) : s && (C.dialogIsClosed = s);
	}), E(e, {
		get close() {
			return r.close;
		},
		get visible() {
			return a();
		},
		children: (e, o) => {
			k(e, {
				get close() {
					return r.close;
				},
				get visible() {
					return a();
				},
				get modal() {
					return i();
				},
				set modal(e) {
					i(e);
				},
				children: (e, i) => {
					var a = c(), o = y(a);
					t(o, () => r.children ?? x), n(e, a);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), p();
}
export { A as t };

//# sourceMappingURL=Modal-BNtBeZyQ.js.map