import { B as e, H as t, T as n, Z as r, ft as i, pt as a, r as o, y as s } from "./disclose-version-Cj0Bwtvz.js";
import { t as c } from "./system-CNA0YLOa.js";
import { t as l } from "./playerId-C1UyEKeb.js";
// src/modules/common/ItemImg.svelte
var u = t("<img/>");
function d(t, d) {
	a(d, !0);
	let f = o(d, "item", 3, 0), p = o(d, "small", 3, 0), m = o(d, "t", 3, 0), h = (e) => `${c}composing/${e.x.d}_${e.x.c}.png`, g = (e) => `${c}items/${e.b}.gif`, _ = (e) => e.b === 13699 ? h(e) : g(e), v = (e) => `fetchitem.php?item_id=${e.b}&inv_id=${e.a}&t=${m()}&p=${l()}`;
	var y = u();
	let b;
	r((e, t) => {
		s(y, "alt", f().n), b = n(y, 1, "tip-dynamic svelte-17ckqu1", null, b, { small: p() }), s(y, "data-tipped", e), s(y, "src", t);
	}, [() => v(f()), () => _(f())]), e(t, y), i();
}
export { d as t };

//# sourceMappingURL=ItemImg-fagUY5Wo.js.map