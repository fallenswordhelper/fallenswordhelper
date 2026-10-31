import { t as e } from "./system-CNA0YLOa.js";
import { t } from "./querySelector-C6ReNysW.js";
import { B as n, G as r, H as i, I as a, L as o, M as s, R as c, W as l, Z as u, _ as d, et as f, ft as p, it as m, pt as h, q as g, r as _, rt as v, v as y, w as b, y as x, yt as S } from "./disclose-version-gxrYovMN.js";
import { t as C } from "./dynamicAlert-BnFmov1Z.js";
import { t as w } from "./getTextTrim-CvXe85fp.js";
import { t as T } from "./layout-B2Q1UoM2.js";
import { t as E } from "./sendEvent-yx1DwCDA.js";
import { t as D } from "./getApp-ClZXM9Yf.js";
import { t as O } from "./_dataAccess-BLVLQyDJ.js";
import { t as k } from "./indexAjaxDoc-WR96kHce.js";
import { t as A } from "./infoBox-QJxiDGQb.js";
import { t as j } from "./querySelectorArray-C70U47NF.js";
import { t as M } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as N } from "./intValue-DGRimvm1.js";
import { t as P } from "./addCommas-Bv8TEVoY.js";
import { t as F } from "./closestTable-B73T3rIi.js";
import { t as I } from "./getId-Ccs5W7A1.js";
// src/modules/app/potionbazaar/buyitem.js
function L(e, t) {
	return D({
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
	let r = A(n);
	return r === "You purchased the item!" ? {
		r: Array(t),
		s: !0
	} : {
		e: { message: r },
		s: !1
	};
}
function z(e, t) {
	return O(L, R, e, t);
}
// src/modules/bazaar/Bazaar.svelte
var B = i("<button type=\"button\" class=\"custombutton\">Buy</button>"), V = i("<span class=\"fshSpinner fshSpinner12\"></span>"), H = i("<div class=\"potion svelte-1hjhr0k\"><img class=\"potion-img tip-dynamic svelte-1hjhr0k\" alt=\"Potion\"/> <div class=\"prices svelte-1hjhr0k\"> <img alt=\"Gold\" title=\"Gold\"/> x <input type=\"number\" min=\"1\" max=\"100\" class=\"svelte-1hjhr0k\"/> <br/> <img alt=\"Gold\" title=\"Gold\"/></div> <div class=\"btn-container svelte-1hjhr0k\"><!></div></div>"), U = i("<div id=\"bazaar\" class=\"svelte-1hjhr0k\"></div>");
function W(t, i) {
	h(i, !0);
	let o = _(i, "potions", 19, () => []), l = m(o());
	async function w(e) {
		E("bazaar", "buyButton"), e.promise = z(e.id, e.count);
		let t = await e.promise;
		t?.s ? C(`You successfully purchased ${e.count} potion${e.count > 1 ? "s" : ""}`) : t?.e && C(t.e.message);
	}
	var T = U();
	s(T, 21, () => l, (e) => e.id, (t, i, o) => {
		var s = H(), l = f(s), p = v(l, 2), m = f(p), h = v(m), _ = v(h, 2);
		y(_);
		var C = v(_, 3), T = v(C);
		S(p);
		var E = v(p, 2), D = f(E);
		a(D, () => g(i).promise, (e) => {
			var t = V();
			n(e, t);
		}, (e) => {
			var t = B();
			r("click", t, () => {
				w(g(i));
			}), n(e, t);
		}), S(E), S(s), u((t, n) => {
			b(l, `background: url('${e ?? ""}ui/inventory/2x3.png')`), x(l, "src", g(i).img), x(l, "data-tipped", g(i).fetch), c(m, `${t ?? ""} `), x(h, "src", `${e ?? ""}currency/0.png`), c(C, ` = ${n ?? ""} `), x(T, "src", `${e ?? ""}currency/0.png`);
		}, [() => P(g(i).price), () => P(g(i).price * g(i).count)]), d(_, () => g(i).count, (e) => g(i).count = e), n(t, s);
	}), S(T), n(t, T), p();
}
l(["click"]);
// src/modules/bazaar/bazaar.js
var G = (e) => ({
	p: e,
	ccy: t("img[src*=\"/currency/\"]", F(e).nextElementSibling)
}), K = ({ p: e, ccy: t }) => ({
	id: Number(I(e)),
	img: e.children[0].src,
	fetch: e.firstChild.dataset.tipped,
	price: N(w(t.parentElement.previousElementSibling)),
	count: 1,
	promise: Promise.resolve()
});
function q(e) {
	let t = e.map(G);
	if (t.some(({ ccy: e }) => !e)) return;
	let n = t.map(K);
	o(W, {
		target: T(),
		props: { potions: n }
	}), F(F(e[0]).parentElement).remove();
}
function J() {
	if (!T() || M()) return;
	let e = j("a[href*=\"&subcmd=buyitem&\"][onclick]", T());
	e.length && q(e);
}
export { J as default };

//# sourceMappingURL=bazaar-8EFqLzZD.js.map