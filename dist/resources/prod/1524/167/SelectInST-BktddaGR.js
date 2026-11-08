import { B as e, G as t, H as n, W as r, et as i, ft as a, h as o, pt as s, r as c, v as l, vt as u, yt as d } from "./disclose-version-Cj0Bwtvz.js";
import { t as f } from "./getValue-vrUqpo0a.js";
import { t as p } from "./setValue-D-C74rTg.js";
// src/modules/common/SelectInST.svelte
var m = n("<label><input type=\"checkbox\" class=\"svelte-1f42rtn\"/> Select items in ST</label>");
function h(n, r) {
	s(r, !0);
	let h = c(r, "inSt", 15, null), g = "selectST";
	h(f(g));
	function _() {
		p(g, h()), r.dispatchToggle();
	}
	var v = m(), y = i(v);
	l(y), u(), d(v), t("change", y, _), o(y, h), e(n, v), a();
}
r(["change"]);
export { h as t };

//# sourceMappingURL=SelectInST-BktddaGR.js.map