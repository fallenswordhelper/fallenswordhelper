import { F as e, J as t, L as n, N as r, R as i, W as a, X as o, Y as s, _t as c, dt as l, j as u, r as d, ut as f } from "./disclose-version-Bvjv4_yw.js";
import { t as p } from "./Modal-CXwwyBF2.js";
//#region src/modules/modal/ModalConfirm.svelte
var m = e("<div class=\"svelte-2mrn1o\"> </div> <div class=\"svelte-2mrn1o\"><button type=\"button\" class=\"svelte-2mrn1o\">Yes</button> <button type=\"button\" class=\"svelte-2mrn1o\">No</button></div>", 1);
function h(e, n) {
	l(n, !0);
	let h = d(n, "msg", 3, "Are you sure?"), g = d(n, "visible", 15, !0);
	function _() {
		g(!1), n.resolve(!1);
	}
	function v() {
		g(!1), n.resolve(!0);
	}
	p(e, {
		close: _,
		get visible() {
			return g();
		},
		children: (e, n) => {
			var l = m(), d = s(l), f = t(d, !0);
			c(d);
			var p = o(d, 2), g = t(p), y = o(g, 2);
			c(p), a(() => u(f, h())), i("click", g, v), i("click", y, _), r(e, l);
		},
		$$slots: { default: !0 }
	}), f();
}
n(["click"]);
//#endregion
export { h as t };

//# sourceMappingURL=ModalConfirm-D-kuSlNB.js.map