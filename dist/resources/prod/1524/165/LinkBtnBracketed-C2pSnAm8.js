import { A as e, B as t, H as n, V as r, et as i, rt as a, tt as o, vt as s, xt as c, yt as l } from "./disclose-version-gxrYovMN.js";
import { t as u } from "./LinkBtn-IEOqMqOr.js";
// src/modules/common/LinkBtnBracketed.svelte
var d = n("<span class=\"svelte-1sxqwyk\">[<!>]</span>");
function f(n, f) {
	var p = d(), m = a(i(p));
	u(m, {
		get onclick() {
			return f.onclick;
		},
		children: (n, i) => {
			var a = r(), s = o(a);
			e(s, () => f.children ?? c), t(n, a);
		},
		$$slots: { default: !0 }
	}), s(), l(p), t(n, p);
}
export { f as t };

//# sourceMappingURL=LinkBtnBracketed-C2pSnAm8.js.map