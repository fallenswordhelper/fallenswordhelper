import { A as e, B as t, G as n, H as r, W as i, et as a, f as o, ft as s, lt as c, n as l, pt as u, q as d, r as f, rt as p, st as m, tt as h, xt as g, yt as _ } from "./disclose-version-Cj0Bwtvz.js";
import { t as v } from "./on-DfyX3AS4.js";
import { t as y } from "./once-D8BIpjVX.js";
import { t as b } from "./partial-Bo20zBni.js";
import { t as x } from "./Modal-BNtBeZyQ.js";
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
function R(e, t) {
	k(e, t), L(t), A(t), M(), O = 0, t.dataTransfer.setData("text/plain", ""), v(document.body, "dragover", F), y(document.body, "drop", I);
}
function z(e, t) {
	e.draggable = !0, v(e, "dragstart", b(R, t));
}
// src/modules/modal/ModalCloseButton.svelte
var B = r("<button class=\"modal-close svelte-1dt59d4\" type=\"button\">×</button>");
function V(e, r) {
	var i = B();
	n("click", i, function(...e) {
		r.close?.apply(this, e);
	}), t(e, i);
}
i(["click"]);
// src/modules/modal/ModalTitled.svelte
var H = r("<div class=\"modal-title svelte-1ftnqia\"><!> <!></div> <div class=\"modal-content svelte-1ftnqia\"><!></div>", 1);
function U(n, r) {
	u(r, !0);
	let i = f(r, "visible", 3, !0), v = c(void 0), y = c(void 0);
	l(() => {
		z(d(y), d(v));
	}), x(n, {
		get close() {
			return r.close;
		},
		get visible() {
			return i();
		},
		get modal() {
			return d(v);
		},
		set modal(e) {
			m(v, e, !0);
		},
		children: (n, i) => {
			var s = H(), c = h(s), l = a(c);
			e(l, () => r.title ?? g), V(p(l, 2), { get close() {
				return r.close;
			} }), _(c), o(c, (e) => m(y, e), () => d(y));
			var u = p(c, 2), f = a(u);
			e(f, () => r.children ?? g), _(u), t(n, s);
		},
		$$slots: { default: !0 }
	}), s();
}
export { z as n, U as t };

//# sourceMappingURL=ModalTitled-Czm45j3-.js.map