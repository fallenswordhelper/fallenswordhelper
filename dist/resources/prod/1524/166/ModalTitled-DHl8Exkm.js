import { t as e } from "./on-DfyX3AS4.js";
import { A as t, B as n, G as r, H as i, W as a, et as o, f as s, ft as c, lt as l, n as u, pt as d, q as f, r as p, rt as m, st as h, tt as g, xt as _, yt as v } from "./disclose-version-gxrYovMN.js";
import { t as y } from "./partial-Bo20zBni.js";
import { t as b } from "./once-D8BIpjVX.js";
import { t as x } from "./Modal-C8pcYvaS.js";
// src/modules/common/off.js
function S(e, t, n, r) {
	e instanceof EventTarget && e.removeEventListener(t, n, r);
}
// src/modules/common/draggable.js
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
// src/modules/modal/ModalCloseButton.svelte
var B = i("<button class=\"modal-close svelte-1dt59d4\" type=\"button\">×</button>");
function V(e, t) {
	var i = B();
	r("click", i, function(...e) {
		t.close?.apply(this, e);
	}), n(e, i);
}
a(["click"]);
// src/modules/modal/ModalTitled.svelte
var H = i("<div class=\"modal-title svelte-1ftnqia\"><!> <!></div> <div class=\"modal-content svelte-1ftnqia\"><!></div>", 1);
function U(e, r) {
	d(r, !0);
	let i = p(r, "visible", 3, !0), a = l(void 0), y = l(void 0);
	u(() => {
		z(f(y), f(a));
	}), x(e, {
		get close() {
			return r.close;
		},
		get visible() {
			return i();
		},
		get modal() {
			return f(a);
		},
		set modal(e) {
			h(a, e, !0);
		},
		children: (e, i) => {
			var a = H(), c = g(a), l = o(c);
			t(l, () => r.title ?? _), V(m(l, 2), { get close() {
				return r.close;
			} }), v(c), s(c, (e) => h(y, e), () => f(y));
			var u = m(c, 2), d = o(u);
			t(d, () => r.children ?? _), v(u), n(e, a);
		},
		$$slots: { default: !0 }
	}), c();
}
export { z as n, U as t };

//# sourceMappingURL=ModalTitled-DHl8Exkm.js.map