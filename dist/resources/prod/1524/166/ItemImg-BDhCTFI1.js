import { t as e } from "./system-CNA0YLOa.js";
import { B as t, H as n, T as r, Z as i, ft as a, pt as o, r as s, y as c } from "./disclose-version-gxrYovMN.js";
import { t as l } from "./playerId-C1UyEKeb.js";
// src/modules/common/ItemImg.svelte
var u = n("<img/>");
function d(n, d) {
	o(d, !0);
	let f = s(d, "item", 3, 0), p = s(d, "small", 3, 0), m = s(d, "t", 3, 0), h = (t) => `${e}composing/${t.x.d}_${t.x.c}.png`, g = (t) => `${e}items/${t.b}.gif`, _ = (e) => e.b === 13699 ? h(e) : g(e), v = (e) => `fetchitem.php?item_id=${e.b}&inv_id=${e.a}&t=${m()}&p=${l()}`;
	var y = u();
	let b;
	i((e, t) => {
		c(y, "alt", f().n), b = r(y, 1, "tip-dynamic svelte-17ckqu1", null, b, { small: p() }), c(y, "data-tipped", e), c(y, "src", t);
	}, [() => v(f()), () => _(f())]), t(n, y), a();
}
export { d as t };

//# sourceMappingURL=ItemImg-BDhCTFI1.js.map