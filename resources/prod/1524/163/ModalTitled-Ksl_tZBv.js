import { t as e } from "./on-afIPYx-0.js";
import { B as t, C as n, F as r, J as i, L as a, N as o, R as s, X as c, Y as l, _t as u, dt as d, et as f, n as p, nt as m, o as h, r as g, ut as _, yt as v } from "./disclose-version-Bvjv4_yw.js";
import { t as y } from "./partial-CYzPXpZP.js";
import { t as b } from "./once-CDCBWIEZ.js";
import { t as x } from "./Modal-CXwwyBF2.js";
//#region src/modules/common/off.js
function S(e, t, n, r) {
	e instanceof EventTarget && e.removeEventListener(t, n, r);
}
//#endregion
//#region src/modules/common/draggable.js
var C = 0, w = 0, T = 0, E = 0, D = 0, O = 0;
function k(e, t) {
	C = e || t.target;
}
function A(e) {
	w = e.clientX, T = e.clientY;
}
function j(e) {
	if (e === "none") return [0, 0];
	let t = e.split(/[()]/)[1].split(", ");
	return [Number(t[4]), Number(t[5])];
}
function M() {
	let e = j(window.getComputedStyle(C, null).transform);
	E = e[0] - w, D = e[1] - T;
}
function N(e) {
	(e.clientX !== w || e.clientY !== T) && (C.style.transform = `matrix(1, 0, 0, 1, ${(e.clientX + E).toString()}, ${(e.clientY + D).toString()})`, A(e));
}
function P(e) {
	let t = performance.now();
	t - O > 16 && (N(e), O = t);
}
function F(e) {
	return P(e), e.preventDefault(), !1;
}
function I(e) {
	return N(e), S(document.body, "dragover", F), e.preventDefault(), !1;
}
function L(e) {
	let t = new Image();
	t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=", e.dataTransfer.setDragImage(t, 0, 0);
}
function R(t, n) {
	k(t, n), L(n), A(n), M(), O = 0, n.dataTransfer.setData("text/plain", ""), e(document.body, "dragover", F), b(document.body, "drop", I);
}
function z(t, n) {
	t.draggable = !0, e(t, "dragstart", y(R, n));
}
//#endregion
//#region src/modules/modal/ModalCloseButton.svelte
var B = r("<button class=\"modal-close svelte-1dt59d4\" type=\"button\">×</button>");
function V(e, t) {
	var n = B();
	s("click", n, function(...e) {
		t.close?.apply(this, e);
	}), o(e, n);
}
a(["click"]);
//#endregion
//#region src/modules/modal/ModalTitled.svelte
var H = r("<div class=\"modal-title svelte-1ftnqia\"><!> <!></div> <div class=\"modal-content svelte-1ftnqia\"><!></div>", 1);
function U(e, r) {
	d(r, !0);
	let a = g(r, "visible", 3, !0), s = m(void 0), y = m(void 0);
	p(() => {
		z(t(y), t(s));
	}), x(e, {
		get close() {
			return r.close;
		},
		get visible() {
			return a();
		},
		get modal() {
			return t(s);
		},
		set modal(e) {
			f(s, e, !0);
		},
		children: (e, a) => {
			var s = H(), d = l(s), p = i(d);
			n(p, () => r.title ?? v), V(c(p, 2), { get close() {
				return r.close;
			} }), u(d), h(d, (e) => f(y, e), () => t(y));
			var m = c(d, 2);
			n(i(m), () => r.children ?? v), u(m), o(e, s);
		},
		$$slots: { default: !0 }
	}), _();
}
//#endregion
export { z as n, U as t };

//# sourceMappingURL=ModalTitled-Ksl_tZBv.js.map