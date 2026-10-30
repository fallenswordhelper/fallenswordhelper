import { B as e, G as t, H as n, R as r, W as i, Z as a, et as o, ft as s, nt as c, pt as l, r as u, rt as d, tt as f, yt as p } from "./disclose-version-gxrYovMN.js";
import { t as m } from "./Modal-C8pcYvaS.js";
// src/modules/modal/ModalConfirm.svelte
var h = n("<div class=\"svelte-2mrn1o\"> </div> <div class=\"svelte-2mrn1o\"><button type=\"button\" class=\"svelte-2mrn1o\">Yes</button> <button type=\"button\" class=\"svelte-2mrn1o\">No</button></div>", 1);
function g(n, i) {
	l(i, !0);
	let g = u(i, "msg", 3, "Are you sure?"), _ = u(i, "visible", 15, !0);
	function v() {
		_(!1), i.resolve(!1);
	}
	function y() {
		_(!1), i.resolve(!0);
	}
	m(n, {
		close: v,
		get visible() {
			return _();
		},
		children: (n, i) => {
			var s = h(), l = f(s), u = c(l, !0), m = d(l, 2), _ = o(m), b = d(_, 2);
			p(m), a(() => r(u, g())), t("click", _, y), t("click", b, v), e(n, s);
		},
		$$slots: { default: !0 }
	}), s();
}
i(["click"]);
export { g as t };

//# sourceMappingURL=ModalConfirm-Bsubvc_X.js.map