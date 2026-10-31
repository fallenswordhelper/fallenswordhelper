import { B as e, F as t, G as n, H as r, L as i, O as a, Q as o, R as s, V as c, W as l, Z as u, a as d, et as f, ft as p, lt as m, nt as h, o as g, pt as _, q as v, r as y, s as b, st as x, t as S, tt as C, u as w, w as T, yt as E } from "./disclose-version-gxrYovMN.js";
import "./index-client-DagsW5bk.js";
import { n as D } from "./transition-DafJFO4v.js";
// src/modules/alert/alert.js
var O = w(""), k = r("<div role=\"alert\" class=\"svelte-8uspok\"><p class=\"svelte-8uspok\"> </p></div>");
function A(r, i) {
	_(i, !0);
	let l = () => g(O, "$alert", w), [w, A] = d(), j = y(i, "ms", 3, 3e3), M = m(!1), N = 0, P = m("");
	async function F() {
		let e = window.visualViewport, t = e.offsetLeft + e.width - window.innerWidth;
		x(P, `translate(${t}px, ${e.offsetTop}px)`), x(M, !0);
	}
	let I = (e, t) => {
		clearTimeout(N), e ? (F(), t > 0 && (N = setTimeout(() => {
			x(M, !1), b(O, "");
		}, t))) : x(M, !1);
	};
	o(() => {
		I(l(), j());
	}), S(() => clearTimeout(N));
	var L = c(), R = C(L), z = (t) => {
		var r = k();
		let i;
		var o = f(r), c = h(o, !0);
		E(r), u(() => {
			i = T(r, "", i, { transform: v(P) }), s(c, l());
		}), n("click", r, () => {
			x(M, !1);
		}), a(3, r, () => D, () => ({
			delay: 250,
			duration: 300,
			x: 0,
			y: -100,
			opacity: .5
		})), e(t, r);
	};
	t(R, (e) => {
		v(M) && e(z);
	}), e(r, L), p(), A();
}
l(["click"]);
// src/modules/alert/dynamicAlert.js
var j = !1;
function M() {
	j || (j = !0, i(A, { target: document.body }));
}
function N(e) {
	e && (M(), O.set(e));
}
export { N as t };

//# sourceMappingURL=dynamicAlert-BnFmov1Z.js.map