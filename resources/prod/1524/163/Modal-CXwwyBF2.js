import { t as e } from "./calf-DxCOTxVt.js";
import { B as t, C as n, F as r, G as i, J as a, L as o, N as s, P as c, R as l, W as u, Y as d, _t as f, dt as p, et as m, nt as h, o as g, q as _, r as v, rt as y, ut as b, v as x, yt as S, z as C } from "./disclose-version-Bvjv4_yw.js";
import { t as w } from "./querySelectorArray-Bdj4peIm.js";
//#region src/modules/modal/ModalBackground.svelte
var T = r("<div><!></div>");
function E(e, r) {
	p(r, !0);
	let o = v(r, "visible", 3, !0), c = h(void 0), d, _, y;
	function C() {
		document.body.classList.contains("noscroll") || (d = !0, _ = window.scrollY, y = document.body.style.top, document.body.classList.add("noscroll"), document.body.style.top = `-${_}px`);
	}
	function w() {
		d && (document.body.classList.remove("noscroll"), document.body.style.top = y || "", window.scrollTo(0, _));
	}
	function E(e) {
		e.target === t(c) && r.close();
	}
	i(() => {
		o() ? C() : w();
	});
	var D = T();
	let O;
	n(a(D), () => r.children ?? S), f(D), g(D, (e) => m(c, e), () => t(c)), u(() => O = x(D, 1, "svelte-1joucfc", null, O, { visible: o() })), l("click", D, E), s(e, D), b();
}
o(["click"]);
//#endregion
//#region src/modules/modal/ModalDialog.svelte
var D, O = r("<div role=\"dialog\" aria-modal=\"true\"><!></div>");
function k(e, r) {
	p(r, !0);
	let o = v(r, "modal", 15), c = v(r, "visible", 3, !0), l = y(c), d = h(void 0), T = h(void 0), E = (e) => e.tabIndex >= 0 && e.offsetWidth > 0 && e.offsetHeight > 0 && !e.disabled;
	function k(e) {
		if (c()) {
			if (e.key === "Escape" && D === o()) {
				r.close();
				return;
			}
			if (e.key === "Tab") {
				let t = w("*", o()).filter(E), n = t.indexOf(document.activeElement);
				n === -1 && e.shiftKey && (n = 0), n += t.length + (e.shiftKey ? -1 : 1), n %= t.length, t[n].focus(), e.preventDefault();
			}
		}
	}
	i(() => {
		c() ? (m(d, document?.activeElement, !0), o() && (m(T, D, !0), D = o())) : (t(d)?.focus(), o() && (D = t(T)));
	});
	var A = O();
	C("keydown", _, k);
	let j;
	n(a(A), () => r.children ?? S), f(A), g(A, (e) => o(e), () => o()), u(() => j = x(A, 1, "ui-dialog svelte-h5colk", null, j, { modalVisible: t(l) })), s(e, A), b();
}
//#endregion
//#region src/modules/modal/Modal.svelte
function A(t, r) {
	p(r, !0);
	let a = v(r, "modal", 15), o = v(r, "visible", 3, !0), l;
	i(() => {
		o() ? (e.dialogIsClosed && (l = e.dialogIsClosed), e.dialogIsClosed = () => !o()) : l && (e.dialogIsClosed = l);
	}), E(t, {
		get close() {
			return r.close;
		},
		get visible() {
			return o();
		},
		children: (e, t) => {
			k(e, {
				get close() {
					return r.close;
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
					var i = c();
					n(d(i), () => r.children ?? S), s(e, i);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}), b();
}
//#endregion
export { A as t };

//# sourceMappingURL=Modal-CXwwyBF2.js.map