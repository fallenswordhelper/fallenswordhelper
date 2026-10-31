import { t as e } from "./getValue-sxwJaOE3.js";
import { t } from "./setValue-B2O8DHLF.js";
import { B as n, G as r, H as i, W as a, et as o, ft as s, h as c, pt as l, r as u, v as d, vt as f, yt as p } from "./disclose-version-gxrYovMN.js";
// src/modules/common/SelectInST.svelte
var m = i("<label><input type=\"checkbox\" class=\"svelte-1f42rtn\"/> Select items in ST</label>");
function h(i, a) {
	l(a, !0);
	let h = u(a, "inSt", 15, null), g = "selectST";
	h(e(g));
	function _() {
		t(g, h()), a.dispatchToggle();
	}
	var v = m(), y = o(v);
	d(y), f(), p(v), r("change", y, _), c(y, h), n(i, v), s();
}
a(["change"]);
export { h as t };

//# sourceMappingURL=SelectInST-qpB1VbFr.js.map