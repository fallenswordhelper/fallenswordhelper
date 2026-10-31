import { t as e } from "./system-CNA0YLOa.js";
import "./constants-CenxlFMY.js";
import { t } from "./getValue-sxwJaOE3.js";
import { t as n } from "./querySelector-C6ReNysW.js";
import { t as r } from "./isArray-jaX-hZZq.js";
import { B as i, F as a, G as o, H as s, I as c, L as l, M as u, N as d, P as f, R as p, St as m, U as h, V as g, W as _, Z as v, et as y, ft as b, gt as x, it as S, lt as C, nt as w, pt as T, q as E, r as D, rt as O, st as k, tt as A, ut as j, vt as M, w as N, y as P, yt as F } from "./disclose-version-gxrYovMN.js";
import { t as I } from "./arrayFrom-CKk6qt2j.js";
import { t as L } from "./getTextTrim-CvXe85fp.js";
import { t as R } from "./ModalTitled-DHl8Exkm.js";
import { t as z } from "./sendEvent-yx1DwCDA.js";
import { t as B } from "./indexAjaxDoc-WR96kHce.js";
import { t as ee } from "./toLowerCase-Cpm0Ikhj.js";
import { t as te } from "./alpha-BRx-EQ4u.js";
import { t as ne } from "./querySelectorAll-D_a7rcw0.js";
import { t as V } from "./querySelectorArray-C70U47NF.js";
import { t as re } from "./uniq-DgWt7KlP.js";
import { n as ie, r as ae } from "./idb-D8xqEbs-.js";
import { t as oe } from "./fromEntries-BytjDDMx.js";
import { t as se } from "./csvSplit-C5BboO-R.js";
import { t as H } from "./all-D5SlTl7_.js";
import { t as ce } from "./LinkBtn-IEOqMqOr.js";
import { t as le } from "./LinkBtnBracketed-C2pSnAm8.js";
import { t as ue } from "./daLoadInventory-Cd8q-qGB.js";
import { t as de } from "./flattenItems-CdGE-Amk.js";
import { t as fe } from "./daComponents-DehANla-.js";
// src/modules/notepad/recipeMgr/RecipeMgr.svelte
var pe = s("Recipe Manager <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1), me = s(" <br/>", 1), he = s("<div class=\"progress-log svelte-1vk75w6\"></div>"), U = s("<div><div class=\"small-image tip-dynamic svelte-1vk75w6\"></div> <div> </div></div>"), ge = s("<div class=\"item-container svelte-1vk75w6\"><a class=\"svelte-1vk75w6\"><div class=\"image svelte-1vk75w6\"></div></a></div> <div class=\"item-container svelte-1vk75w6\"><a class=\"svelte-1vk75w6\"> </a></div> <div class=\"item-container svelte-1vk75w6\"></div> <div class=\"item-container svelte-1vk75w6\"></div> <div class=\"item-container svelte-1vk75w6\"><div class=\"image tip-dynamic svelte-1vk75w6\"></div></div>", 1), _e = s("<div class=\"recipes ui-widget-content svelte-1vk75w6\"><div class=\"innerColumnHeader item-container svelte-1vk75w6\">Recipe</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\"><svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Items</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Components</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Target</div> <!></div>"), ve = s("<p style=\"color: red\"> </p>");
function W(s, l) {
	T(l, !0);
	let _ = D(l, "visible", 15, !0), W = C(S({})), G = C(S({})), K = C(S([])), q = C(S([])), J = 1;
	function Y(e) {
		z("Recipe Manager", e);
	}
	function ye() {
		Y("close"), _(!1);
	}
	let X = (e = -1, t = 0) => B({
		cmd: "inventing",
		folder_id: e,
		page: t
	}), be = ([, e], [, t]) => J * te(e, t);
	function xe() {
		Y("sort by name"), k(q, E(q).slice().sort(be), !0), J *= -1;
	}
	function Z(e) {
		k(K, e.concat(E(K)), !0);
	}
	let Q = (e, t) => V(`#pCC td[background*="${t}"]`, e).map((e) => [e.children[0].children[0].dataset.tipped.split(/[?&=]/), e.parentNode.nextElementSibling]).map(([e, t]) => [
		e[2],
		e[10],
		...t ? [Number(L(t).split("/")[1])] : []
	]);
	async function Se([e, t, n]) {
		let r = await B({
			cmd: "inventing",
			subcmd: "viewrecipe",
			recipe_id: e
		});
		return Z([`Parsing blueprint ${t}...`]), r ? [
			e,
			t,
			n,
			Q(r, "/inventory/2x3."),
			Q(r, "/inventory/1x1mini."),
			...Q(r, "/hellforge/2x3.")
		] : [
			e,
			t,
			n
		];
	}
	let Ce = (e) => (t) => [t, e.filter((e) => e === t).length], $ = (e) => oe(re(e).map(Ce(e)));
	async function we() {
		Z(["Updating inventory."]);
		let e = await ue();
		if (e?.s) {
			let t = de(e.r).map(({ b: e }) => e);
			k(G, $(t), !0);
		} else Z("No inventory.");
	}
	async function Te() {
		Z(["Updating components."]);
		let e = await fe();
		if (r(e.r)) {
			let t = e.r.map(({ b: e }) => e);
			k(W, $(t), !0);
		} else Z("No components.");
	}
	async function Ee() {
		await H([we(), Te()]), k(K, [], !0);
	}
	async function De(e) {
		k(q, await H(e.map(Se)), !0), ae("fsh_recipeMgr", x(E(q))), Ee();
	}
	async function Oe([e, t]) {
		let n = e.split("=").at(-1), r = await X(n);
		return Z([`Parsing folder "${t}"...`]), [n, r];
	}
	let ke = (e) => e, Ae = (e) => I(ne("#pCC a[href*=\"&recipe_id=\"]", e)), je = (e) => [
		e.href.split("=").at(-1),
		L(e),
		e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)
	], Me = (e) => (t) => t === e, Ne = (e, t) => e.some(Me(t)), Pe = (e) => ([, t]) => Ne(e, t), Fe = (e) => ([, t]) => !Ne(e, t), Ie = (e) => e.map(([, e]) => `Skipping blueprint "${e}" as it is hidden.`), Le = (e) => e.map(([, e]) => `Found blueprint "${e}".`);
	function Re(e) {
		let n = se(t("hideRecipeNames")), r = e.filter(ke).flatMap(Ae).map(je);
		Z(Ie(r.filter(Pe(n))));
		let i = r.filter(Fe(n));
		Z(Le(i)), De(i);
	}
	let ze = ([, e]) => e, Be = ([e, t]) => [e, I(n("#pCC select[name=\"page\"]", t).options).slice(1).map((e) => e.value)], Ve = ([, e]) => e.length, He = ([e, t]) => t.map((t) => [e, t]), Ue = ([e, t]) => X(e, t);
	async function We(e) {
		let t = await H(e), n = t.filter(ze).map(Be).filter(Ve).flatMap(He).map(Ue), r = await H(n);
		Re(t.map(([, e]) => e).concat(r));
	}
	let Ge = (e) => ee(e).includes("quest"), Ke = ([, e]) => Ge(e), qe = (e) => e.filter(Ke).map(([, e]) => `Skipping folder "${e}" as it has the word "quest" in folder name.`), Je = ([, e]) => !Ge(e), Ye = ([e, t]) => [e.previousElementSibling.children[0].href, t];
	function Xe(e) {
		Z(["Parsing folder \"Unassigned\"..."]);
		let t = V("div[id^=\"folder_name_\"]", e).map((e) => [e, L(e)]);
		Z(qe(t));
		let n = t.filter(Je).map(Ye).map(Oe);
		We([["-1", e], ...n]);
	}
	async function Ze() {
		k(K, ["Parsing inventing screen ..."], !0);
		let e = await X();
		e ? Xe(e) : Z(["Server Error."]);
	}
	async function Qe() {
		let e = await ie("fsh_recipeMgr");
		e || Ze(), k(q, e, !0), Ee();
	}
	function $e() {
		Y("Navigate to recipe");
	}
	function et() {
		Y("refresh button"), Ze();
	}
	R(s, {
		close: ye,
		get visible() {
			return _();
		},
		title: (e) => {
			M();
			var t = pe(), n = O(A(t));
			f(n, () => ({
				"--button-color": "#494437",
				"--button-size": "10px"
			})), le(n.lastChild, {
				onclick: et,
				children: (e, t) => {
					M();
					var n = h("Refresh");
					i(e, n);
				},
				$$slots: { default: !0 }
			}), F(n), i(e, t);
		},
		children: (t, n) => {
			var r = g(), s = A(r);
			c(s, Qe, null, (t) => {
				var n = g(), r = A(n), s = (e) => {
					var t = he();
					u(t, 21, () => E(K), d, (e, t) => {
						M();
						var n = me(), r = A(n);
						M(), v(() => p(r, `${E(t) ?? ""} `)), i(e, n);
					}), F(t), i(e, t);
				}, c = (t) => {
					var n = _e(), r = O(y(n), 2), a = y(r);
					f(a, () => ({ "--button-color": "#383838" })), ce(a.lastChild, {
						onclick: xe,
						children: (e, t) => {
							M();
							var n = h("Name");
							i(e, n);
						},
						$$slots: { default: !0 }
					}), F(a), F(r);
					var s = O(r, 8);
					u(s, 17, () => E(q), d, (t, n) => {
						var r = j(() => m(E(n), 6)), a = j(() => m(E(r)[5], 2));
						let s = () => E(r)[0], c = () => E(r)[1], l = () => E(r)[2], f = () => E(r)[3], h = () => E(r)[4], g = () => E(a)[0], _ = () => E(a)[1];
						var b = ge(), x = A(b), S = y(x), C = y(S);
						let T;
						F(S), F(x);
						var D = O(x, 2), k = y(D), M = w(k, !0);
						F(D);
						var I = O(D, 2);
						u(I, 21, f, d, (t, n) => {
							var r = j(() => m(E(n), 3));
							let a = () => E(r)[0], o = () => E(r)[1], s = () => E(r)[2];
							var c = U(), l = y(c);
							let u;
							var d = O(l, 2), f = w(d);
							F(c), v(() => {
								P(l, "data-tipped", `fetchitem.php?item_id=${a() ?? ""}&t=2&vcode=${o() ?? ""}`), u = N(l, "", u, { "background-image": `url('${e ?? ""}items/${a() ?? ""}.gif')` }), p(f, `${E(G)[a()] ?? 0 ?? ""}/${s() ?? ""}`);
							}), i(t, c);
						}), F(I);
						var L = O(I, 2);
						u(L, 21, h, d, (t, n) => {
							var r = j(() => m(E(n), 3));
							let a = () => E(r)[0], o = () => E(r)[1], s = () => E(r)[2];
							var c = U(), l = y(c);
							let u;
							var d = O(l, 2), f = w(d);
							F(c), v(() => {
								P(l, "data-tipped", `fetchitem.php?item_id=${a() ?? ""}&t=2&vcode=${o() ?? ""}`), u = N(l, "", u, { "background-image": `url('${e ?? ""}items/${a() ?? ""}.gif')` }), p(f, `${E(W)[a()] ?? 0 ?? ""}/${s() ?? ""}`);
							}), i(t, c);
						}), F(L);
						var R = O(L, 2), z = y(R);
						let B;
						F(R), v(() => {
							P(S, "href", `index.php?cmd=inventing&subcmd=viewrecipe&recipe_id=${s() ?? ""}`), T = N(C, "", T, { "background-image": `url('${e ?? ""}recipes/${l() ?? ""}')` }), P(k, "href", `index.php?cmd=inventing&subcmd=viewrecipe&recipe_id=${s() ?? ""}`), p(M, c()), P(z, "data-tipped", `fetchitem.php?item_id=${g() ?? ""}&t=2&vcode=${_() ?? ""}`), B = N(z, "", B, { "background-image": `url('${e ?? ""}items/${g() ?? ""}.gif')` });
						}), o("click", S, $e), o("click", k, $e), i(t, b);
					}), F(n), i(t, n);
				};
				a(r, (e) => {
					E(K).length ? e(s) : E(q) && e(c, 1);
				}), i(t, n);
			}, (e, t) => {
				var n = ve(), r = w(n, !0);
				v(() => p(r, E(t).message)), i(e, n);
			}), i(t, r);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), b();
}
_(["click"]);
// src/modules/notepad/recipeMgr/mountRecipeMgr.svelte.js
var G = S({ visible: !0 }), K = 0;
function q() {
	K ? G.visible = !0 : K = l(W, {
		props: G,
		target: document.body
	});
}
export { q as default };

//# sourceMappingURL=mountRecipeMgr.svelte-BmkBIMzE.js.map