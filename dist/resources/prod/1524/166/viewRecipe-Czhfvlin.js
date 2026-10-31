import { t as e } from "./getText-BqjgTHLv.js";
import { t } from "./system-CNA0YLOa.js";
import { G as n, nt as r } from "./constants-CenxlFMY.js";
import { t as i } from "./querySelector-C6ReNysW.js";
import { B as a, F as o, G as ee, H as s, L as c, O as l, R as u, U as d, W as f, Z as p, _ as m, et as h, f as g, ft as _, lt as v, nt as y, pt as b, q as x, rt as S, st as C, v as te, vt as w, w as T, yt as E } from "./disclose-version-gxrYovMN.js";
import { r as D } from "./transition-DafJFO4v.js";
import { t as O } from "./layout-B2Q1UoM2.js";
import { t as k } from "./sendEvent-yx1DwCDA.js";
import { t as A } from "./insertElement-6ZBKaryO.js";
import { t as j } from "./_dataAccess-BLVLQyDJ.js";
import { t as M } from "./indexAjaxDoc-WR96kHce.js";
import { t as N } from "./infoBox-QJxiDGQb.js";
import { t as P } from "./querySelectorArray-C70U47NF.js";
import { t as F } from "./jQueryPresent-DUWNBls9.js";
import { t as I } from "./createAnchor-BMaWUfMc.js";
import { t as L } from "./insertElementBefore-CaihVZse.js";
import { t as R } from "./itemIdFromImg-O3uB0Iqa.js";
import { t as ne } from "./LinkBtn-IEOqMqOr.js";
import { t as z } from "./interceptSubmit-vIdFdaaM.js";
import { t as B } from "./xPath-op5z6uT2.js";
import { t as V } from "./inventing-Rn2nY9pc.js";
// src/modules/inventing/viewRecipe/parseRecipe.js
function H(t) {
	let [n, r] = e(i("tr:nth-child(2) td", t)).split("/").map((e) => parseInt(e, 10));
	return {
		have: n,
		need: r
	};
}
function U() {
	return P(`#pCC td[background^="${t}ui/inventory/"]`).map((e) => e.parentElement.parentElement).map(H);
}
function W() {
	return U().reduce((e, t) => Math.min(e, Math.floor(t.have / t.need)), Infinity);
}
// src/modules/app/inventing/doinvent.js
function G(e) {
	return V({
		subcmd: "doinvent",
		recipe_id: e
	});
}
// src/modules/_dataAccess/daDoInvent.js
function K(e) {
	let t = N(e);
	return t.includes("successfully") ? {
		r: { item: {} },
		s: !0
	} : {
		e: { message: t },
		s: !1
	};
}
async function q(e) {
	let t = await M({
		cmd: "inventing",
		subcmd: "doinvent",
		recipe_id: e
	});
	return t ? K(t) : { s: !1 };
}
function J(e) {
	return j(G, q, e);
}
// src/modules/inventing/viewRecipe/QuickInvent.svelte
var Y = s("<div class=\"qi-error-container svelte-dv75vr\"><div class=\"qi-error-heading svelte-dv75vr\">INFORMATION</div> <div> </div></div>"), X = s("<div class=\"qi-container svelte-dv75vr\"><label for=\"quick-invent-amount\">Select how many to quick invent</label> <input class=\"custominput svelte-dv75vr\" min=\"1\" required=\"\" step=\"1\" type=\"number\"/> <!> <button class=\"custombutton svelte-dv75vr\" type=\"button\">Quick Invent</button> <div><!> <div class=\"composing-progress svelte-dv75vr\"><div class=\"composing-progress-bar svelte-dv75vr\"></div> <p class=\"svelte-dv75vr\"> </p></div> <div class=\"qi-results-container svelte-dv75vr\"><div class=\"qi-result qi-result-success svelte-dv75vr\"> </div> <div class=\"qi-result qi-result-failure svelte-dv75vr\"> </div></div></div></div>");
function Z(e, t) {
	b(t, !0);
	let n = v(void 0), r = v(1), i = v(0), s = v(0), c = v(0), f = v("");
	function O() {
		C(i, 0), C(s, 0), C(c, 0), C(f, "");
	}
	function A() {
		C(r, t.max, !0), k("inventing", "maxInventButton");
	}
	async function j(e, t) {
		let n = await e;
		if (!n || n.s === !0) {
			let e = await J(t);
			return e?.s ? e.r.success_count > 0 ? C(i, x(i) + 1) : C(s, x(s) + 1) : C(f, e?.e?.message ?? "Server Error", !0), C(c, 100 * ((x(i) + x(s)) / x(r))), e;
		}
		return n;
	}
	function M() {
		x(n).checkValidity() ? (k("inventing", "quickInvent"), O(), Array(x(r)).fill(t.recipeID).reduce(j, Promise.resolve())) : x(n).reportValidity();
	}
	var N = X(), P = S(h(N), 2);
	te(P), g(P, (e) => C(n, e), () => x(n));
	var F = S(P, 2);
	ne(F, {
		onclick: A,
		children: (e, t) => {
			w();
			var n = d("(max)");
			a(e, n);
		},
		$$slots: { default: !0 }
	});
	var I = S(F, 2), L = S(I, 2), R = h(L), z = (e) => {
		var t = Y(), n = S(h(t), 2), r = y(n, !0);
		E(t), p(() => u(r, x(f))), l(3, t, () => D), a(e, t);
	};
	o(R, (e) => {
		x(f) && e(z);
	});
	var B = S(R, 2), V = h(B), H = S(V, 2), U = y(H);
	E(B);
	var W = S(B, 2), G = h(W), K = y(G), q = S(G, 2), Z = y(q);
	E(W), E(L), E(N), p(() => {
		T(V, `width: ${x(c) ?? ""}%;`), u(U, `${x(i) + x(s)} / ${x(r) ?? ""}`), u(K, `Successes: ${x(i) ?? ""}`), u(Z, `Failures: ${x(s) ?? ""}`);
	}), m(P, () => x(r), (e) => C(r, e)), ee("click", I, M), a(e, N), _();
}
f(["click"]);
// src/modules/inventing/viewRecipe/injectInvent.js
function Q() {
	let e = i("input[name=\"recipe_id\"]");
	if (!e) return;
	let t = W();
	c(Z, {
		props: {
			max: t,
			recipeID: e.value
		},
		target: O()
	});
}
// src/modules/inventing/viewRecipe/injectViewRecipe.js
function re(e) {
	return `${r}items${n}view&item_id=${e}`;
}
function ie(e) {
	return I({
		href: re(e),
		target: "_blank"
	});
}
function $(e, t) {
	let n = R(t);
	if (!n) return;
	let r = ie(n);
	L(r, e), A(r, e);
}
function ae(e) {
	$(e, e);
}
function oe() {
	let e = B(".//b[.=\"Target Invention\"]/../../following-sibling::*[1]//img");
	$(i("#pCC b"), e);
}
function se() {
	P("#pCC img[src*=\"/items/\"]").forEach(ae);
}
function ce() {
	oe(), se();
	let e = i("#pCC input[value=\"Invent\"]")?.form;
	e && z(e);
}
// src/modules/inventing/viewRecipe/viewRecipe.js
function le() {
	F() && (ce(), Q());
}
export { le as default };

//# sourceMappingURL=viewRecipe-Czhfvlin.js.map