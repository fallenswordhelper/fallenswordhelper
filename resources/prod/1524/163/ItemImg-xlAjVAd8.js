import { t as e } from "./system-DeHfCtq2.js";
import { F as t, N as n, W as r, dt as i, p as a, r as o, ut as s, v as c } from "./disclose-version-Bvjv4_yw.js";
import { t as l } from "./playerId-CffVNjD0.js";
//#region src/modules/common/ItemImg.svelte
var u = t("<img/>");
function d(t, d) {
	i(d, !0);
	let f = o(d, "item", 3, 0), p = o(d, "small", 3, 0), m = o(d, "t", 3, 0), h = (t) => `${e}composing/${t.x.d}_${t.x.c}.png`, g = (t) => `${e}items/${t.b}.gif`, _ = (e) => e.b === 13699 ? h(e) : g(e), v = (e) => `fetchitem.php?item_id=${e.b}&inv_id=${e.a}&t=${m()}&p=${l()}`;
	var y = u();
	let b;
	r((e, t) => {
		a(y, "alt", f().n), b = c(y, 1, "tip-dynamic svelte-17ckqu1", null, b, { small: p() }), a(y, "data-tipped", e), a(y, "src", t);
	}, [() => v(f()), () => _(f())]), n(t, y), s();
}
//#endregion
export { d as t };

//# sourceMappingURL=ItemImg-xlAjVAd8.js.map