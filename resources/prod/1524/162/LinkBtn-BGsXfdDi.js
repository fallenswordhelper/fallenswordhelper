import { C as e, F as t, J as n, L as r, N as i, R as a, W as o, _t as s, r as c, yt as l } from "./disclose-version-CVZFuhb0.js";
//#region src/modules/common/LinkBtn.svelte
var u = t("<button type=\"button\" class=\"svelte-1o6o1uz\"><!></button>");
function d(t, r) {
	let d = c(r, "disabled", 3, 0);
	var f = u();
	e(n(f), () => r.children ?? l), s(f), o(() => f.disabled = d()), a("click", f, function(...e) {
		r.onclick?.apply(this, e);
	}), i(t, f);
}
r(["click"]);
//#endregion
export { d as t };

//# sourceMappingURL=LinkBtn-BGsXfdDi.js.map