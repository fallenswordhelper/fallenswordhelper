import "./posthog-C2Vh_0Hn.js";
import { t as e } from "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./querySelector-qkBBhiGH.js";
import { A as n, B as r, F as i, J as a, L as o, N as s, R as c, T as l, W as u, X as d, Z as f, _ as p, _t as m, d as h, dt as g, f as _, j as v, k as y, p as b, r as x, ut as S } from "./disclose-version-CVZFuhb0.js";
import "./index-client-BaeBki7R.js";
import { t as C } from "./dynamicAlert-dINSPEx3.js";
import { t as w } from "./getTextTrim-Wj82yPPN.js";
import { t as T } from "./layout-Bapa39KM.js";
import { t as E } from "./sendEvent-bwvhd4A-.js";
import { t as D } from "./getApp-B7uFgqYY.js";
import { t as O } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import { t as k } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as A } from "./infoBox-BqL_tRSH.js";
import { t as j } from "./querySelectorArray-BZbNvND7.js";
import { t as M } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as N } from "./intValue-NIZZTFPF.js";
import { t as P } from "./addCommas-Ca7d_KBz.js";
import { t as F } from "./closestTable-Dfg3mstY.js";
import { t as I } from "./getId-CYwWkshr.js";
//#region src/modules/app/potionbazaar/buyitem.js
function L(e, t) {
	return D({
		cmd: "potionbazaar",
		subcmd: "buyitem",
		item_id: e,
		quantity: t
	});
}
//#endregion
//#region src/modules/_dataAccess/daBazaarBuy.js
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
//#endregion
//#region src/modules/bazaar/Bazaar.svelte
var B = i("<button type=\"button\" class=\"custombutton\">Buy</button>"), V = i("<span class=\"fshSpinner fshSpinner12\"></span>"), H = i("<div class=\"potion svelte-1hjhr0k\"><img class=\"potion-img tip-dynamic svelte-1hjhr0k\" alt=\"Potion\"/> <div class=\"prices svelte-1hjhr0k\"> <img alt=\"Gold\" title=\"Gold\"/> x <input type=\"number\" min=\"1\" max=\"100\" class=\"svelte-1hjhr0k\"/> <br/> <img alt=\"Gold\" title=\"Gold\"/></div> <div class=\"btn-container svelte-1hjhr0k\"><!></div></div>"), U = i("<div id=\"bazaar\" class=\"svelte-1hjhr0k\"></div>");
function W(t, n) {
	g(n, !0);
	let i = f(x(n, "potions", 19, () => [])());
	async function o(e) {
		E("bazaar", "buyButton"), e.promise = z(e.id, e.count);
		let t = await e.promise;
		t?.s ? C(`You successfully purchased ${e.count} potion${e.count > 1 ? "s" : ""}`) : t?.e && C(t.e.message);
	}
	var w = U();
	l(w, 21, () => i, (e) => e.id, (t, n, i) => {
		var l = H(), f = a(l), g = d(f, 2), x = a(g), S = d(x), C = d(S, 2);
		_(C);
		var w = d(C, 3), T = d(w);
		m(g);
		var E = d(g, 2);
		y(a(E), () => r(n).promise, (e) => {
			s(e, V());
		}, (e) => {
			var t = B();
			c("click", t, () => {
				o(r(n));
			}), s(e, t);
		}), m(E), m(l), u((t, i) => {
			p(f, `background: url('${e ?? ""}ui/inventory/2x3.png')`), b(f, "src", r(n).img), b(f, "data-tipped", r(n).fetch), v(x, `${t ?? ""} `), b(S, "src", `${e ?? ""}currency/0.png`), v(w, ` = ${i ?? ""} `), b(T, "src", `${e ?? ""}currency/0.png`);
		}, [() => P(r(n).price), () => P(r(n).price * r(n).count)]), h(C, () => r(n).count, (e) => r(n).count = e), s(t, l);
	}), m(w), s(t, w), S();
}
o(["click"]);
//#endregion
//#region src/modules/bazaar/bazaar.js
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
	let r = t.map(K);
	n(W, {
		target: T(),
		props: { potions: r }
	}), F(F(e[0]).parentElement).remove();
}
function J() {
	if (!T() || M()) return;
	let e = j("a[href*=\"&subcmd=buyitem&\"][onclick]", T());
	e.length && q(e);
}
//#endregion
export { J as default };

//# sourceMappingURL=bazaar-C7KfzxeT.js.map