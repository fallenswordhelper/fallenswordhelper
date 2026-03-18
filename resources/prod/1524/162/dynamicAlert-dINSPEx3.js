import { A as e, B as t, F as n, G as r, J as i, L as a, N as o, O as s, P as c, R as l, W as u, Y as d, _ as f, _t as p, at as m, dt as h, et as g, it as _, j as v, lt as y, nt as b, ot as x, r as S, t as C, ut as w, x as T } from "./disclose-version-CVZFuhb0.js";
import { n as E } from "./transition-C_SSi9-e.js";
//#region src/modules/alert/alert.js
var D = y(""), O = n("<div role=\"alert\" class=\"svelte-8uspok\"><p class=\"svelte-8uspok\"> </p></div>");
function k(e, n) {
	h(n, !0);
	let a = () => m(D, "$alert", y), [y, k] = _(), A = S(n, "ms", 3, 3e3), j = b(!1), M = 0, N = b("");
	async function P() {
		let e = window.visualViewport;
		g(N, `translate(${e.offsetLeft + e.width - window.innerWidth}px, ${e.offsetTop}px)`), g(j, !0);
	}
	let F = (e, t) => {
		clearTimeout(M), e ? (P(), t > 0 && (M = setTimeout(() => {
			g(j, !1), x(D, "");
		}, t))) : g(j, !1);
	};
	r(() => {
		F(a(), A());
	}), C(() => clearTimeout(M));
	var I = c(), L = d(I), R = (e) => {
		var n = O();
		let r;
		var s = i(n), c = i(s, !0);
		p(s), p(n), u(() => {
			r = f(n, "", r, { transform: t(N) }), v(c, a());
		}), l("click", n, () => {
			g(j, !1);
		}), T(3, n, () => E, () => ({
			delay: 250,
			duration: 300,
			x: 0,
			y: -100,
			opacity: .5
		})), o(e, n);
	};
	s(L, (e) => {
		t(j) && e(R);
	}), o(e, I), w(), k();
}
a(["click"]);
//#endregion
//#region src/modules/alert/dynamicAlert.js
var A = !1;
function j() {
	A || (A = !0, e(k, { target: document.body }));
}
function M(e) {
	e && (j(), D.set(e));
}
//#endregion
export { M as t };

//# sourceMappingURL=dynamicAlert-dINSPEx3.js.map