import { C as e, F as t, J as n, N as r, P as i, X as a, Y as o, _t as s, gt as c, yt as l } from "./disclose-version-CVZFuhb0.js";
import { t as u } from "./LinkBtn-BGsXfdDi.js";
//#region src/modules/common/LinkBtnBracketed.svelte
var d = t("<span class=\"svelte-1sxqwyk\">[<!>]</span>");
function f(t, f) {
	var p = d();
	u(a(n(p)), {
		get onclick() {
			return f.onclick;
		},
		children: (t, n) => {
			var a = i();
			e(o(a), () => f.children ?? l), r(t, a);
		},
		$$slots: { default: !0 }
	}), c(), s(p), r(t, p);
}
//#endregion
export { f as t };

//# sourceMappingURL=LinkBtnBracketed-Rc3cBj0A.js.map