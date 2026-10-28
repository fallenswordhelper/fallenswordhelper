import { t as e } from "./calf-SqS2SeU4.js";
import { $ as t, A as n, B as r, G as i, H as a, K as o, Q as s, T as c, V as l, W as u, Z as d, et as f, f as p, ft as m, lt as h, pt as g, q as _, r as v, st as y, tt as b, ut as x, xt as S, yt as C } from "./disclose-version-gxrYovMN.js";
import { t as w } from "./querySelectorArray-C70U47NF.js";
// src/modules/modal/ModalBackground.svelte
var T = a("<div><!></div>");
function E(e, t) {
	g(t, !0);
	let a = v(t, "visible", 3, !0), o = h(void 0), l, u, b;
	function x() {
		document.body.classList.contains("noscroll") || (l = !0, u = window.scrollY, b = document.body.style.top, document.body.classList.add("noscroll"), document.body.style.top = `-${u}px`);
	}
	function w() {
		l && (document.body.classList.remove("noscroll"), document.body.style.top = b || "", window.scrollTo(0, u));
	}
	function E(e) {
		e.target === _(o) && t.close();
	}
	s(() => {
		a() ? x() : w();
	});
	var D = T();
	let O;
	var k = f(D);
	n(k, () => t.children ?? S), C(D), p(D, (e) => y(o, e), () => _(o)), d(() => O = c(D, 1, "svelte-1joucfc", null, O, { visible: a() })), i("click", D, E), r(e, D), m();
}
u(["click"]);
// src/modules/modal/ModalDialog.svelte
var D, O = a("<div role=\"dialog\" aria-modal=\"true\"><!></div>");
function k(e, i) {
	g(i, !0);
	let a = v(i, "modal", 15), l = v(i, "visible", 3, !0), u = x(l), b = h(void 0), T = h(void 0), E = (e) => e.tabIndex >= 0 && e.offsetWidth > 0 && e.offsetHeight > 0 && !e.disabled;
	function k(e) {
		if (l()) {
			if (e.key === "Escape" && D === a()) i.close();
			else if (e.key === "Tab") {
				let t = w("*", a()).filter(E), n = t.indexOf(document.activeElement);
				n === -1 && e.shiftKey && (n = 0), n += t.length + (e.shiftKey ? -1 : 1), n %= t.length, t[n].focus(), e.preventDefault();
			}
		}
	}
	s(() => {
		l() ? (y(b, document?.activeElement, !0), a() && (y(T, D, !0), D = a())) : (_(b)?.focus(), a() && (D = _(T)));
	});
	var A = O();
	o("keydown", t, k);
	let j;
	var M = f(A);
	n(M, () => i.children ?? S), C(A), p(A, (e) => a(e), () => a()), d(() => j = c(A, 1, "ui-dialog svelte-h5colk", null, j, { modalVisible: _(u) })), r(e, A), m();
}
// src/modules/modal/Modal.svelte
function A(t, i) {
	g(i, !0);
	let a = v(i, "modal", 15), o = v(i, "visible", 3, !0), c;
	s(() => {
		o() ? (e.dialogIsClosed && (c = e.dialogIsClosed), e.dialogIsClosed = () => !o()) : c && (e.dialogIsClosed = c);
	}), E(t, {
		get close() {
			return i.close;
		},
		get visible() {
			return o();
		},
		children: (e, t) => {
			k(e, {
				get close() {
					return i.close;
				},
				get visible() {
					return o();
				},
				get modal() {
					return a();
				},
				set modal(e) {
					a(e);
				},
				children: (e, t) => {
					var a = l(), o = b(a);
					n(o, () => i.children ?? S), r(e, a);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), m();
}
export { A as t };

//# sourceMappingURL=Modal-C8pcYvaS.js.map