import { B as e, G as t, H as n, I as r, L as i, M as a, R as o, W as s, Z as c, _ as l, et as u, ft as d, it as f, pt as p, q as m, r as h, rt as g, v as _, w as v, y, yt as b } from "./disclose-version-Cj0Bwtvz.js";
import { t as x } from "./closestTable-B73T3rIi.js";
import { t as S } from "./getId-Ccs5W7A1.js";
import { t as C } from "./getTextTrim-CvXe85fp.js";
import { t as w } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as T } from "./querySelector-C6ReNysW.js";
import { t as E } from "./querySelectorArray-C70U47NF.js";
import { t as D } from "./layout-B2Q1UoM2.js";
import { t as O } from "./intValue-DGRimvm1.js";
import { t as k } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as A } from "./getApp-xCmcyAG-.js";
import { t as j } from "./infoBox-QJxiDGQb.js";
import { t as M } from "./_dataAccess-BLVLQyDJ.js";
import { t as N } from "./dynamicAlert-xklxr5Wl.js";
import { t as P } from "./sendEvent-Co2_qySS.js";
import { t as F } from "./addCommas-Bv8TEVoY.js";
import { t as I } from "./system-CNA0YLOa.js";
// src/modules/app/potionbazaar/buyitem.js
function L(e, t) {
	return A({
		cmd: "potionbazaar",
		subcmd: "buyitem",
		item_id: e,
		quantity: t
	});
}
// src/modules/_dataAccess/daBazaarBuy.js
async function R(e, t) {
	let n = await k({
		cmd: "potionbazaar",
		subcmd: "buyitem",
		item_id: e,
		quantity: t
	});
	if (!n) return { s: !1 };
	let r = j(n);
	return r === "You purchased the item!" ? {
		r: Array(t),
		s: !0
	} : {
		e: { message: r },
		s: !1
	};
}
function z(e, t) {
	return M(L, R, e, t);
}
// src/modules/bazaar/Bazaar.svelte
var B = n("<button type=\"button\" class=\"custombutton\">Buy</button>"), V = n("<span class=\"fshSpinner fshSpinner12\"></span>"), H = n("<div class=\"potion svelte-1hjhr0k\"><img class=\"potion-img tip-dynamic svelte-1hjhr0k\" alt=\"Potion\"/> <div class=\"prices svelte-1hjhr0k\"> <img alt=\"Gold\" title=\"Gold\"/> x <input type=\"number\" min=\"1\" max=\"100\" class=\"svelte-1hjhr0k\"/> <br/> <img alt=\"Gold\" title=\"Gold\"/></div> <div class=\"btn-container svelte-1hjhr0k\"><!></div></div>"), U = n("<div id=\"bazaar\" class=\"svelte-1hjhr0k\"></div>");
function W(n, i) {
	p(i, !0);
	let s = h(i, "potions", 19, () => []), x = f(s());
	async function S(e) {
		P("bazaar", "buyButton"), e.promise = z(e.id, e.count);
		let t = await e.promise;
		t?.s ? N(`You successfully purchased ${e.count} potion${e.count > 1 ? "s" : ""}`) : t?.e && N(t.e.message);
	}
	var C = U();
	a(C, 21, () => x, (e) => e.id, (n, i, a) => {
		var s = H(), d = u(s), f = g(d, 2), p = u(f), h = g(p), x = g(h, 2);
		_(x);
		var C = g(x, 3), w = g(C);
		b(f);
		var T = g(f, 2), E = u(T);
		r(E, () => m(i).promise, (t) => {
			var n = V();
			e(t, n);
		}, (n) => {
			var r = B();
			t("click", r, () => {
				S(m(i));
			}), e(n, r);
		}), b(T), b(s), c((e, t) => {
			v(d, `background: url('${I ?? ""}ui/inventory/2x3.png')`), y(d, "src", m(i).img), y(d, "data-tipped", m(i).fetch), o(p, `${e ?? ""} `), y(h, "src", `${I ?? ""}currency/0.png`), o(C, ` = ${t ?? ""} `), y(w, "src", `${I ?? ""}currency/0.png`);
		}, [() => F(m(i).price), () => F(m(i).price * m(i).count)]), l(x, () => m(i).count, (e) => m(i).count = e), e(n, s);
	}), b(C), e(n, C), d();
}
s(["click"]);
// src/modules/bazaar/bazaar.js
var G = (e) => ({
	p: e,
	ccy: T("img[src*=\"/currency/\"]", x(e).nextElementSibling)
}), K = ({ p: e, ccy: t }) => ({
	id: Number(S(e)),
	img: e.children[0].src,
	fetch: e.firstChild.dataset.tipped,
	price: O(C(t.parentElement.previousElementSibling)),
	count: 1,
	promise: Promise.resolve()
});
function q(e) {
	let t = e.map(G);
	if (t.some(({ ccy: e }) => !e)) return;
	let n = t.map(K);
	i(W, {
		target: D(),
		props: { potions: n }
	}), x(x(e[0]).parentElement).remove();
}
function J() {
	if (!D() || w()) return;
	let e = E("a[href*=\"&subcmd=buyitem&\"][onclick]", D());
	e.length && q(e);
}
export { J as default };

//# sourceMappingURL=bazaar-PEilqO6H.js.map