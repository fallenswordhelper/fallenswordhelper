import { t as e } from "./jQueryPresent-DUWNBls9.js";
import { B as t, F as n, G as r, H as i, L as a, O as ee, R as o, U as s, W as c, Z as l, _ as u, et as d, f, ft as te, lt as p, nt as m, pt as h, q as g, rt as _, st as v, v as y, vt as b, w as x, yt as S } from "./disclose-version-Cj0Bwtvz.js";
import { t as C } from "./querySelector-C6ReNysW.js";
import { t as w } from "./layout-B2Q1UoM2.js";
import { t as T } from "./getText-BqjgTHLv.js";
import { t as E } from "./querySelectorArray-C70U47NF.js";
import { t as D } from "./system-CNA0YLOa.js";
import { r as O } from "./transition-BXnU-feh.js";
import { t as k } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as A } from "./inventing-KjxfBKSF.js";
import { t as j } from "./infoBox-QJxiDGQb.js";
import { t as M } from "./_dataAccess-BLVLQyDJ.js";
import { t as N } from "./sendEvent-DdWrU3DL.js";
import { t as P } from "./LinkBtn-DI1FRuvk.js";
import { t as F } from "./createAnchor-HiREQnLZ.js";
import { t as I } from "./insertElement-6ZBKaryO.js";
import { t as L } from "./insertElementBefore-CaihVZse.js";
import { t as R } from "./interceptSubmit-QT2t7a5u.js";
import { t as z } from "./itemIdFromImg-O3uB0Iqa.js";
import { t as B } from "./xPath-op5z6uT2.js";
import { G as V, nt as H } from "./constants-CenxlFMY.js";
// src/modules/inventing/viewRecipe/parseRecipe.js
function U(e) {
	let [t, n] = T(C("tr:nth-child(2) td", e)).split("/").map((e) => parseInt(e, 10));
	return {
		have: t,
		need: n
	};
}
function W() {
	return E(`#pCC td[background^="${D}ui/inventory/"]`).map((e) => e.parentElement.parentElement).map(U);
}
function G() {
	return W().reduce((e, t) => Math.min(e, Math.floor(t.have / t.need)), Infinity);
}
// src/modules/app/inventing/doinvent.js
function K(e) {
	return A({
		subcmd: "doinvent",
		recipe_id: e
	});
}
// src/modules/_dataAccess/daDoInvent.js
function q(e) {
	let t = j(e);
	return t.includes("successfully") ? {
		r: { item: {} },
		s: !0
	} : {
		e: { message: t },
		s: !1
	};
}
async function J(e) {
	let t = await k({
		cmd: "inventing",
		subcmd: "doinvent",
		recipe_id: e
	});
	return t ? q(t) : { s: !1 };
}
function Y(e) {
	return M(K, J, e);
}
// src/modules/inventing/viewRecipe/QuickInvent.svelte
var X = i("<div class=\"qi-error-container svelte-dv75vr\"><div class=\"qi-error-heading svelte-dv75vr\">INFORMATION</div> <div> </div></div>"), Z = i("<div class=\"qi-container svelte-dv75vr\"><label for=\"quick-invent-amount\">Select how many to quick invent</label> <input class=\"custominput svelte-dv75vr\" min=\"1\" required=\"\" step=\"1\" type=\"number\"/> <!> <button class=\"custombutton svelte-dv75vr\" type=\"button\">Quick Invent</button> <div><!> <div class=\"composing-progress svelte-dv75vr\"><div class=\"composing-progress-bar svelte-dv75vr\"></div> <p class=\"svelte-dv75vr\"> </p></div> <div class=\"qi-results-container svelte-dv75vr\"><div class=\"qi-result qi-result-success svelte-dv75vr\"> </div> <div class=\"qi-result qi-result-failure svelte-dv75vr\"> </div></div></div></div>");
function Q(e, i) {
	h(i, !0);
	let a = p(void 0), c = p(1), C = p(0), w = p(0), T = p(0), E = p("");
	function D() {
		v(C, 0), v(w, 0), v(T, 0), v(E, "");
	}
	function k() {
		v(c, i.max, !0), N("inventing", "maxInventButton");
	}
	async function A(e, t) {
		let n = await e;
		if (!n || n.s === !0) {
			let e = await Y(t);
			return e?.s ? e.r.success_count > 0 ? v(C, g(C) + 1) : v(w, g(w) + 1) : v(E, e?.e?.message ?? "Server Error", !0), v(T, 100 * ((g(C) + g(w)) / g(c))), e;
		}
		return n;
	}
	function j() {
		g(a).checkValidity() ? (N("inventing", "quickInvent"), D(), Array(g(c)).fill(i.recipeID).reduce(A, Promise.resolve())) : g(a).reportValidity();
	}
	var M = Z(), F = _(d(M), 2);
	y(F), f(F, (e) => v(a, e), () => g(a));
	var I = _(F, 2);
	P(I, {
		onclick: k,
		children: (e, n) => {
			b();
			var r = s("(max)");
			t(e, r);
		},
		$$slots: { default: !0 }
	});
	var L = _(I, 2), R = _(L, 2), z = d(R), B = (e) => {
		var n = X(), r = _(d(n), 2), i = m(r, !0);
		S(n), l(() => o(i, g(E))), ee(3, n, () => O), t(e, n);
	};
	n(z, (e) => {
		g(E) && e(B);
	});
	var V = _(z, 2), H = d(V), U = _(H, 2), W = m(U);
	S(V);
	var G = _(V, 2), K = d(G), q = m(K), J = _(K, 2), Q = m(J);
	S(G), S(R), S(M), l(() => {
		x(H, `width: ${g(T) ?? ""}%;`), o(W, `${g(C) + g(w)} / ${g(c) ?? ""}`), o(q, `Successes: ${g(C) ?? ""}`), o(Q, `Failures: ${g(w) ?? ""}`);
	}), u(F, () => g(c), (e) => v(c, e)), r("click", L, j), t(e, M), te();
}
c(["click"]);
// src/modules/inventing/viewRecipe/injectInvent.js
function ne() {
	let e = C("input[name=\"recipe_id\"]");
	if (!e) return;
	let t = G();
	a(Q, {
		props: {
			max: t,
			recipeID: e.value
		},
		target: w()
	});
}
// src/modules/inventing/viewRecipe/injectViewRecipe.js
function re(e) {
	return `${H}items${V}view&item_id=${e}`;
}
function ie(e) {
	return F({
		href: re(e),
		target: "_blank"
	});
}
function $(e, t) {
	let n = z(t);
	if (!n) return;
	let r = ie(n);
	L(r, e), I(r, e);
}
function ae(e) {
	$(e, e);
}
function oe() {
	let e = B(".//b[.=\"Target Invention\"]/../../following-sibling::*[1]//img");
	$(C("#pCC b"), e);
}
function se() {
	E("#pCC img[src*=\"/items/\"]").forEach(ae);
}
function ce() {
	oe(), se();
	let e = C("#pCC input[value=\"Invent\"]")?.form;
	e && R(e);
}
// src/modules/inventing/viewRecipe/viewRecipe.js
function le() {
	e() && (ce(), ne());
}
export { le as default };

//# sourceMappingURL=viewRecipe-DyK0sQ8m.js.map