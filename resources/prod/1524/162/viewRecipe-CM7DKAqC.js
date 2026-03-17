import { t as e } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import { t } from "./system-De1jBRGa.js";
import { G as n, nt as r } from "./constants-C54mky4_.js";
import { t as i } from "./querySelector-qkBBhiGH.js";
import { A as a, B as o, F as s, I as c, J as l, L as u, N as d, O as ee, R as f, W as p, X as m, _ as h, _t as g, d as _, dt as v, et as y, f as b, gt as x, j as S, nt as C, o as w, ut as T, x as E } from "./disclose-version-CVZFuhb0.js";
import { r as D } from "./transition-C_SSi9-e.js";
import { t as O } from "./layout-Bapa39KM.js";
import { t as k } from "./sendEvent-bwvhd4A-.js";
import { t as A } from "./insertElement-DtUB7uKq.js";
import { t as j } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import { t as M } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as N } from "./infoBox-BqL_tRSH.js";
import { t as P } from "./querySelectorArray-BZbNvND7.js";
import { t as F } from "./jQueryPresent-BHusVK29.js";
import { t as I } from "./createAnchor-DH9dG-LN.js";
import { t as L } from "./insertElementBefore-B-ZBDHwR.js";
import { t as R } from "./itemIdFromImg-C_nHsO4c.js";
import { t as z } from "./LinkBtn-BGsXfdDi.js";
import "./formToUrl-BROd6YBE.js";
import { t as B } from "./interceptSubmit-0losboil.js";
import { t as V } from "./xPath-C7ziTKGg.js";
import { t as H } from "./inventing-B62jZ61D.js";
//#region src/modules/inventing/viewRecipe/parseRecipe.js
function U(t) {
	let [n, r] = e(i("tr:nth-child(2) td", t)).split("/").map((e) => parseInt(e, 10));
	return {
		have: n,
		need: r
	};
}
function W() {
	return P(`#pCC td[background^="${t}ui/inventory/"]`).map((e) => e.parentElement.parentElement).map(U);
}
function G() {
	return W().reduce((e, t) => Math.min(e, Math.floor(t.have / t.need)), Infinity);
}
//#endregion
//#region src/modules/app/inventing/doinvent.js
function K(e) {
	return H({
		subcmd: "doinvent",
		recipe_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daDoInvent.js
function q(e) {
	let t = N(e);
	return t.includes("successfully") ? {
		r: { item: {} },
		s: !0
	} : {
		e: { message: t },
		s: !1
	};
}
async function J(e) {
	let t = await M({
		cmd: "inventing",
		subcmd: "doinvent",
		recipe_id: e
	});
	return t ? q(t) : { s: !1 };
}
function Y(e) {
	return j(K, J, e);
}
//#endregion
//#region src/modules/inventing/viewRecipe/QuickInvent.svelte
var X = s("<div class=\"qi-error-container svelte-dv75vr\"><div class=\"qi-error-heading svelte-dv75vr\">INFORMATION</div> <div> </div></div>"), Z = s("<div class=\"qi-container svelte-dv75vr\"><label for=\"quick-invent-amount\">Select how many to quick invent</label> <input class=\"custominput svelte-dv75vr\" min=\"1\" required=\"\" step=\"1\" type=\"number\"/> <!> <button class=\"custombutton svelte-dv75vr\" type=\"button\">Quick Invent</button> <div><!> <div class=\"composing-progress svelte-dv75vr\"><div class=\"composing-progress-bar svelte-dv75vr\"></div> <p class=\"svelte-dv75vr\"> </p></div> <div class=\"qi-results-container svelte-dv75vr\"><div class=\"qi-result qi-result-success svelte-dv75vr\"> </div> <div class=\"qi-result qi-result-failure svelte-dv75vr\"> </div></div></div></div>");
function Q(e, t) {
	v(t, !0);
	let n = C(void 0), r = C(1), i = C(0), a = C(0), s = C(0), u = C("");
	function O() {
		y(i, 0), y(a, 0), y(s, 0), y(u, "");
	}
	function A() {
		y(r, t.max, !0), k("inventing", "maxInventButton");
	}
	async function j(e, t) {
		let n = await e;
		if (!n || n.s === !0) {
			let e = await Y(t);
			return e?.s ? e.r.success_count > 0 ? y(i, o(i) + 1) : y(a, o(a) + 1) : y(u, e?.e?.message ?? "Server Error", !0), y(s, 100 * ((o(i) + o(a)) / o(r))), e;
		}
		return n;
	}
	function M() {
		if (!o(n).checkValidity()) {
			o(n).reportValidity();
			return;
		}
		k("inventing", "quickInvent"), O(), Array(o(r)).fill(t.recipeID).reduce(j, Promise.resolve());
	}
	var N = Z(), P = m(l(N), 2);
	b(P), w(P, (e) => y(n, e), () => o(n));
	var F = m(P, 2);
	z(F, {
		onclick: A,
		children: (e, t) => {
			x(), d(e, c("(max)"));
		},
		$$slots: { default: !0 }
	});
	var I = m(F, 2), L = m(I, 2), R = l(L), B = (e) => {
		var t = X(), n = m(l(t), 2), r = l(n, !0);
		g(n), g(t), p(() => S(r, o(u))), E(3, t, () => D), d(e, t);
	};
	ee(R, (e) => {
		o(u) && e(B);
	});
	var V = m(R, 2), H = l(V), U = m(H, 2), W = l(U);
	g(U), g(V);
	var G = m(V, 2), K = l(G), q = l(K);
	g(K);
	var J = m(K, 2), Q = l(J);
	g(J), g(G), g(L), g(N), p(() => {
		h(H, `width: ${o(s) ?? ""}%;`), S(W, `${o(i) + o(a)} / ${o(r) ?? ""}`), S(q, `Successes: ${o(i) ?? ""}`), S(Q, `Failures: ${o(a) ?? ""}`);
	}), _(P, () => o(r), (e) => y(r, e)), f("click", I, M), d(e, N), T();
}
u(["click"]);
//#endregion
//#region src/modules/inventing/viewRecipe/injectInvent.js
function te() {
	let e = i("input[name=\"recipe_id\"]");
	e && a(Q, {
		props: {
			max: G(),
			recipeID: e.value
		},
		target: O()
	});
}
//#endregion
//#region src/modules/inventing/viewRecipe/injectViewRecipe.js
function ne(e) {
	return `${r}items${n}view&item_id=${e}`;
}
function re(e) {
	return I({
		href: ne(e),
		target: "_blank"
	});
}
function $(e, t) {
	let n = R(t);
	if (!n) return;
	let r = re(n);
	L(r, e), A(r, e);
}
function ie(e) {
	$(e, e);
}
function ae() {
	let e = V(".//b[.=\"Target Invention\"]/../../following-sibling::*[1]//img");
	$(i("#pCC b"), e);
}
function oe() {
	P("#pCC img[src*=\"/items/\"]").forEach(ie);
}
function se() {
	ae(), oe();
	let e = i("#pCC input[value=\"Invent\"]")?.form;
	e && B(e);
}
//#endregion
//#region src/modules/inventing/viewRecipe/viewRecipe.js
function ce() {
	F() && (se(), te());
}
//#endregion
export { ce as default };

//# sourceMappingURL=viewRecipe-CM7DKAqC.js.map