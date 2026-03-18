import { t as e } from "./getValue-CCThXEzy.js";
import { t } from "./setValue-Cb0PYC7t.js";
import { F as n, J as r, L as i, N as a, R as o, _t as s, dt as c, f as l, gt as u, l as d, r as f, ut as p } from "./disclose-version-CVZFuhb0.js";
//#region src/modules/common/SelectInST.svelte
var m = n("<label><input type=\"checkbox\" class=\"svelte-1f42rtn\"/> Select items in ST</label>");
function h(n, i) {
	c(i, !0);
	let h = f(i, "inSt", 15, null), g = "selectST";
	h(e(g));
	function _() {
		t(g, h()), i.dispatchToggle();
	}
	var v = m(), y = r(v);
	l(y), u(), s(v), o("change", y, _), d(y, h), a(n, v), p();
}
i(["change"]);
//#endregion
export { h as t };

//# sourceMappingURL=SelectInST-B7dJQZbj.js.map