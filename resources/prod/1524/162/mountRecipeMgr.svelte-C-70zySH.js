import "./posthog-C2Vh_0Hn.js";
import { t as e } from "./system-De1jBRGa.js";
import { Ft as t } from "./constants-C54mky4_.js";
import { t as n } from "./getValue-CCThXEzy.js";
import { t as r } from "./querySelector-qkBBhiGH.js";
import { t as i } from "./isArray-oWM-Qp9j.js";
import { A as a, B as o, D as s, E as c, F as l, I as u, J as d, L as f, N as p, O as m, P as h, R as g, T as _, W as v, X as y, Y as b, Z as x, _ as S, _t as C, bt as w, dt as T, et as E, gt as D, j as O, k, mt as A, nt as j, p as M, r as N, rt as P, ut as F } from "./disclose-version-CVZFuhb0.js";
import { t as I } from "./arrayFrom-LpiPmbFE.js";
import { t as L } from "./getTextTrim-Wj82yPPN.js";
import { t as R } from "./ModalTitled-DUBQ6MwC.js";
import { t as z } from "./sendEvent-bwvhd4A-.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import { t as B } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as ee } from "./toLowerCase-uMYD5EVv.js";
import { t as te } from "./alpha-gvIHBiw7.js";
import { t as ne } from "./querySelectorAll-6sjy8RXa.js";
import { t as V } from "./querySelectorArray-BZbNvND7.js";
import { t as re } from "./uniq-SYQgNgys.js";
import { n as ie, r as ae } from "./idb-sdcp-8vV.js";
import "./indexAjaxJson-DuDMsKRC.js";
import { t as oe } from "./fromEntries-Bc4U4usg.js";
import { t as se } from "./csvSplit-Dg-U97MN.js";
import "./Modal-QdM-bPCT.js";
import { t as H } from "./all-Dy4LjBGw.js";
import { t as ce } from "./LinkBtn-BGsXfdDi.js";
import { t as le } from "./LinkBtnBracketed-Rc3cBj0A.js";
import "./backpackOk-D61pwOdg.js";
import { t as ue } from "./daLoadInventory-CNPYoxt-.js";
import { t as de } from "./flattenItems-CQAcRQtd.js";
import { t as fe } from "./daComponents-u7OOQCCt.js";
//#region src/modules/notepad/recipeMgr/RecipeMgr.svelte
var pe = l("Recipe Manager <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1), me = l(" <br/>", 1), he = l("<div class=\"progress-log svelte-1vk75w6\"></div>"), ge = l("<div><div class=\"small-image tip-dynamic svelte-1vk75w6\"></div> <div> </div></div>"), _e = l("<div><div class=\"small-image tip-dynamic svelte-1vk75w6\"></div> <div> </div></div>"), ve = l("<div class=\"item-container svelte-1vk75w6\"><a class=\"svelte-1vk75w6\"><div class=\"image svelte-1vk75w6\"></div></a></div> <div class=\"item-container svelte-1vk75w6\"><a class=\"svelte-1vk75w6\"> </a></div> <div class=\"item-container svelte-1vk75w6\"></div> <div class=\"item-container svelte-1vk75w6\"></div> <div class=\"item-container svelte-1vk75w6\"><div class=\"image tip-dynamic svelte-1vk75w6\"></div></div>", 1), ye = l("<div class=\"recipes ui-widget-content svelte-1vk75w6\"><div class=\"innerColumnHeader item-container svelte-1vk75w6\">Recipe</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\"><svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Items</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Components</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Target</div> <!></div>"), be = l("<p style=\"color: red\"> </p>");
function U(a, l) {
	T(l, !0);
	let f = N(l, "visible", 15, !0), U = j(x({})), W = j(x({})), G = j(x([])), K = j(x([])), q = 1;
	function J(e) {
		z("Recipe Manager", e);
	}
	function xe() {
		J("close"), f(!1);
	}
	let Y = (e = -1, t = 0) => B({
		cmd: "inventing",
		folder_id: e,
		page: t
	}), Se = ([, e], [, t]) => q * te(e, t);
	function Ce() {
		J("sort by name"), E(K, o(K).slice().sort(Se), !0), q *= -1;
	}
	function X(e) {
		E(G, e.concat(o(G)), !0);
	}
	let Z = (e, t) => V(`#pCC td[background*="${t}"]`, e).map((e) => [e.children[0].children[0].dataset.tipped.split(/[?&=]/), e.parentNode.nextElementSibling]).map(([e, t]) => [
		e[2],
		e[10],
		...t ? [Number(L(t).split("/")[1])] : []
	]);
	async function we([e, t, n]) {
		let r = await B({
			cmd: "inventing",
			subcmd: "viewrecipe",
			recipe_id: e
		});
		return X([`Parsing blueprint ${t}...`]), r ? [
			e,
			t,
			n,
			Z(r, "/inventory/2x3."),
			Z(r, "/inventory/1x1mini."),
			...Z(r, "/hellforge/2x3.")
		] : [
			e,
			t,
			n
		];
	}
	let Te = (e) => (t) => [t, e.filter((e) => e === t).length], Q = (e) => oe(re(e).map(Te(e)));
	async function Ee() {
		X(["Updating inventory."]);
		let e = await ue();
		e?.s ? E(W, Q(de(e.r).map(({ b: e }) => e)), !0) : X("No inventory.");
	}
	async function De() {
		X(["Updating components."]);
		let e = await fe();
		i(e.r) ? E(U, Q(e.r.map(({ b: e }) => e)), !0) : X("No components.");
	}
	async function $() {
		await H([Ee(), De()]), E(G, [], !0);
	}
	async function Oe(e) {
		E(K, await H(e.map(we)), !0), ae("fsh_recipeMgr", A(o(K))), $();
	}
	async function ke([e, t]) {
		let n = e.split("=").at(-1), r = await Y(n);
		return X([`Parsing folder "${t}"...`]), [n, r];
	}
	let Ae = (e) => e, je = (e) => I(ne("#pCC a[href*=\"&recipe_id=\"]", e)), Me = (e) => [
		e.href.split("=").at(-1),
		L(e),
		e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)
	], Ne = (e) => (t) => t === e, Pe = (e, t) => e.some(Ne(t)), Fe = (e) => ([, t]) => Pe(e, t), Ie = (e) => ([, t]) => !Pe(e, t), Le = (e) => e.map(([, e]) => `Skipping blueprint "${e}" as it is hidden.`), Re = (e) => e.map(([, e]) => `Found blueprint "${e}".`);
	function ze(e) {
		let t = se(n("hideRecipeNames")), r = e.filter(Ae).flatMap(je).map(Me);
		X(Le(r.filter(Fe(t))));
		let i = r.filter(Ie(t));
		X(Re(i)), Oe(i);
	}
	let Be = ([, e]) => e, Ve = ([e, t]) => [e, I(r("#pCC select[name=\"page\"]", t).options).slice(1).map((e) => e.value)], He = ([, e]) => e.length, Ue = ([e, t]) => t.map((t) => [e, t]), We = ([e, t]) => Y(e, t);
	async function Ge(e) {
		let t = await H(e), n = await H(t.filter(Be).map(Ve).filter(He).flatMap(Ue).map(We));
		ze(t.map(([, e]) => e).concat(n));
	}
	let Ke = (e) => ee(e).includes("quest"), qe = ([, e]) => Ke(e), Je = (e) => e.filter(qe).map(([, e]) => `Skipping folder "${e}" as it has the word "quest" in folder name.`), Ye = ([, e]) => !Ke(e), Xe = ([e, t]) => [e.previousElementSibling.children[0].href, t];
	function Ze(e) {
		X(["Parsing folder \"Unassigned\"..."]);
		let t = V("div[id^=\"folder_name_\"]", e).map((e) => [e, L(e)]);
		X(Je(t));
		let n = t.filter(Ye).map(Xe).map(ke);
		Ge([["-1", e], ...n]);
	}
	async function Qe() {
		E(G, ["Parsing inventing screen ..."], !0);
		let e = await Y();
		e ? Ze(e) : X(["Server Error."]);
	}
	async function $e() {
		let e = await ie("fsh_recipeMgr");
		e || Qe(), E(K, e, !0), $();
	}
	function et() {
		J("Navigate to recipe");
	}
	function tt() {
		J("refresh button"), Qe();
	}
	R(a, {
		close: xe,
		get visible() {
			return f();
		},
		title: (e) => {
			D();
			var t = pe(), n = y(b(t));
			s(n, () => ({
				"--button-color": "#494437",
				"--button-size": "10px"
			})), le(n.lastChild, {
				onclick: tt,
				children: (e, t) => {
					D(), p(e, u("Refresh"));
				},
				$$slots: { default: !0 }
			}), C(n), p(e, t);
		},
		children: (n, r) => {
			var i = h();
			k(b(i), $e, null, (n) => {
				var r = h(), i = b(r), a = (e) => {
					var t = he();
					_(t, 21, () => o(G), c, (e, t) => {
						D();
						var n = me(), r = b(n);
						D(), v(() => O(r, `${o(t) ?? ""} `)), p(e, n);
					}), C(t), p(e, t);
				}, l = (n) => {
					var r = ye(), i = y(d(r), 2), a = d(i);
					s(a, () => ({ "--button-color": "#383838" })), ce(a.lastChild, {
						onclick: Ce,
						children: (e, t) => {
							D(), p(e, u("Name"));
						},
						$$slots: { default: !0 }
					}), C(a), C(i), _(y(i, 8), 17, () => o(K), c, (n, r) => {
						var i = P(() => w(o(r), 6)), a = P(() => w(o(i)[5], 2));
						let s = () => o(i)[0], l = () => o(i)[1], u = () => o(i)[2], f = () => o(i)[3], m = () => o(i)[4], h = () => o(a)[0], x = () => o(a)[1];
						var T = ve(), E = b(T), D = d(E), k = d(D);
						let A;
						C(D), C(E);
						var j = y(E, 2), N = d(j), F = d(N, !0);
						C(N), C(j);
						var I = y(j, 2);
						_(I, 21, f, c, (t, n) => {
							var r = P(() => w(o(n), 3));
							let i = () => o(r)[0], a = () => o(r)[1], s = () => o(r)[2];
							var c = ge(), l = d(c);
							let u;
							var f = y(l, 2), m = d(f);
							C(f), C(c), v(() => {
								M(l, "data-tipped", `fetchitem.php?item_id=${i() ?? ""}&t=2&vcode=${a() ?? ""}`), u = S(l, "", u, { "background-image": `url('${e ?? ""}items/${i() ?? ""}.gif')` }), O(m, `${o(W)[i()] ?? 0 ?? ""}/${s() ?? ""}`);
							}), p(t, c);
						}), C(I);
						var L = y(I, 2);
						_(L, 21, m, c, (t, n) => {
							var r = P(() => w(o(n), 3));
							let i = () => o(r)[0], a = () => o(r)[1], s = () => o(r)[2];
							var c = _e(), l = d(c);
							let u;
							var f = y(l, 2), m = d(f);
							C(f), C(c), v(() => {
								M(l, "data-tipped", `fetchitem.php?item_id=${i() ?? ""}&t=2&vcode=${a() ?? ""}`), u = S(l, "", u, { "background-image": `url('${e ?? ""}items/${i() ?? ""}.gif')` }), O(m, `${o(U)[i()] ?? 0 ?? ""}/${s() ?? ""}`);
							}), p(t, c);
						}), C(L);
						var R = y(L, 2), z = d(R);
						let B;
						C(R), v(() => {
							M(D, "href", `${t ?? ""}${s() ?? ""}`), A = S(k, "", A, { "background-image": `url('${e ?? ""}recipes/${u() ?? ""}')` }), M(N, "href", `${t ?? ""}${s() ?? ""}`), O(F, l()), M(z, "data-tipped", `fetchitem.php?item_id=${h() ?? ""}&t=2&vcode=${x() ?? ""}`), B = S(z, "", B, { "background-image": `url('${e ?? ""}items/${h() ?? ""}.gif')` });
						}), g("click", D, et), g("click", N, et), p(n, T);
					}), C(r), p(n, r);
				};
				m(i, (e) => {
					o(G).length ? e(a) : o(K) && e(l, 1);
				}), p(n, r);
			}, (e, t) => {
				var n = be(), r = d(n, !0);
				C(n), v(() => O(r, o(t).message)), p(e, n);
			}), p(n, i);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), F();
}
f(["click"]);
//#endregion
//#region src/modules/notepad/recipeMgr/mountRecipeMgr.svelte.js
var W = x({ visible: !0 }), G = 0;
function K() {
	G ? W.visible = !0 : G = a(U, {
		props: W,
		target: document.body
	});
}
//#endregion
export { K as default };

//# sourceMappingURL=mountRecipeMgr.svelte-C-70zySH.js.map