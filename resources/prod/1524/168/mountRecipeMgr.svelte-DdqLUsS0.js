import { B as e, F as t, G as n, H as r, I as i, L as a, M as o, N as s, P as c, R as l, St as u, U as d, V as f, W as p, Z as m, et as h, ft as g, gt as _, it as v, lt as y, nt as b, pt as x, q as S, r as C, rt as w, st as T, tt as E, ut as D, vt as O, w as k, y as A, yt as j } from "./disclose-version-Cj0Bwtvz.js";
import { t as M } from "./profile-By-S2hRI.js";
import { t as N } from "./_dataAccess-BLVLQyDJ.js";
import { t as P } from "./profileComponents-CBOIDqRY.js";
import { t as F } from "./daLoadInventory-CwrdDsg7.js";
import { t as I } from "./flattenItems-CdGE-Amk.js";
import { t as L } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as R } from "./sendEvent-DdWrU3DL.js";
import { t as z } from "./all-D5SlTl7_.js";
import { t as B } from "./alpha-BRx-EQ4u.js";
import { t as V } from "./arrayFrom-CKk6qt2j.js";
import { t as ee } from "./csvSplit-C5BboO-R.js";
import { t as te } from "./fromEntries-BytjDDMx.js";
import { t as H } from "./getTextTrim-CvXe85fp.js";
import { t as ne } from "./isArray-jaX-hZZq.js";
import { t as re } from "./LinkBtn-DI1FRuvk.js";
import { t as ie } from "./LinkBtnBracketed-C70NVX79.js";
import { t as ae } from "./querySelector-C6ReNysW.js";
import { t as oe } from "./querySelectorAll-D_a7rcw0.js";
import { t as U } from "./querySelectorArray-C70U47NF.js";
import { t as se } from "./toLowerCase-Cpm0Ikhj.js";
import { t as ce } from "./uniq-DgWt7KlP.js";
import { t as le } from "./ModalTitled-Czm45j3-.js";
import "./constants-CenxlFMY.js";
import { t as W } from "./getCustomUrlParameter-OUJUdwqs.js";
import { t as ue } from "./getValue-DMlY7SSn.js";
import { n as de, r as fe } from "./idb-D8xqEbs-.js";
import { t as G } from "./system-CNA0YLOa.js";
// src/modules/app/profile/loadcomponents.js
function K() {
	return M({ subcmd: "loadcomponents" });
}
// src/modules/_dataAccess/daComponents.js
function pe() {
	return N(K, P);
}
// src/modules/notepad/recipeMgr/RecipeMgr.svelte
var me = r("Recipe Manager <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1), he = r(" <br/>", 1), ge = r("<div class=\"progress-log svelte-1vk75w6\"></div>"), q = r("<div><div class=\"small-image tip-dynamic svelte-1vk75w6\"></div> <div> </div></div>"), _e = r("<div class=\"item-container svelte-1vk75w6\"><a class=\"svelte-1vk75w6\"><div class=\"image svelte-1vk75w6\"></div></a></div> <div class=\"item-container svelte-1vk75w6\"><a class=\"svelte-1vk75w6\"> </a></div> <div class=\"item-container svelte-1vk75w6\"></div> <div class=\"item-container svelte-1vk75w6\"></div> <div class=\"item-container svelte-1vk75w6\"><div class=\"image tip-dynamic svelte-1vk75w6\"></div></div>", 1), ve = r("<div class=\"recipes ui-widget-content svelte-1vk75w6\"><div class=\"innerColumnHeader item-container svelte-1vk75w6\">Recipe</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\"><svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Items</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Components</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Target</div> <!></div>"), ye = r("<p style=\"color: red\"> </p>");
function J(r, a) {
	x(a, !0);
	let p = C(a, "visible", 15, !0), M = y(v({})), N = y(v({})), P = y(v([])), K = y(v([])), J = 1;
	function Y(e) {
		R("Recipe Manager", e);
	}
	function X() {
		Y("close"), p(!1);
	}
	let Z = (e = -1, t = 0) => L({
		cmd: "inventing",
		folder_id: e,
		page: t
	}), be = ([, e], [, t]) => J * B(e, t);
	function xe() {
		Y("sort by name"), T(K, S(K).slice().sort(be), !0), J *= -1;
	}
	function Q(e) {
		T(P, e.concat(S(P)), !0);
	}
	let $ = (e, t) => U(`#pCC td[background*="${t}"]`, e).map((e) => [e.children[0].children[0].dataset.tipped.split(/[?&=]/), e.parentNode.nextElementSibling]).map(([e, t]) => [
		e[2],
		e[10],
		...t ? [Number(H(t).split("/")[1])] : []
	]);
	async function Se([e, t, n]) {
		let r = await L({
			cmd: "inventing",
			subcmd: "viewrecipe",
			recipe_id: e
		});
		return Q([`Parsing blueprint ${t}...`]), r ? [
			e,
			t,
			n,
			$(r, "/inventory/2x3."),
			$(r, "/inventory/1x1mini."),
			...$(r, "/hellforge/2x3.")
		] : [
			e,
			t,
			n
		];
	}
	let Ce = (e) => (t) => [t, e.filter((e) => e === t).length], we = (e) => te(ce(e).map(Ce(e)));
	async function Te() {
		Q(["Updating inventory."]);
		let e = await F();
		if (e?.s) {
			let t = I(e.r).map(({ b: e }) => e);
			T(N, we(t), !0);
		} else Q("No inventory.");
	}
	async function Ee() {
		Q(["Updating components."]);
		let e = await pe();
		if (ne(e.r)) {
			let t = e.r.map(({ b: e }) => e);
			T(M, we(t), !0);
		} else Q("No components.");
	}
	async function De() {
		await z([Te(), Ee()]), T(P, [], !0);
	}
	async function Oe(e) {
		T(K, await z(e.map(Se)), !0), fe("fsh_recipeMgr", _(S(K))), De();
	}
	async function ke([e, t]) {
		let n = W(e, "folder_id"), r = await Z(n);
		return Q([`Parsing folder "${t}"...`]), [n, r];
	}
	let Ae = (e) => e, je = (e) => V(oe("#pCC a[href*=\"&recipe_id=\"]", e)), Me = (e) => [
		W(e.href, "recipe_id"),
		H(e),
		e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)
	], Ne = (e) => (t) => t === e, Pe = (e, t) => e.some(Ne(t)), Fe = (e) => ([, t]) => Pe(e, t), Ie = (e) => ([, t]) => !Pe(e, t), Le = (e) => e.map(([, e]) => `Skipping blueprint "${e}" as it is hidden.`), Re = (e) => e.map(([, e]) => `Found blueprint "${e}".`);
	function ze(e) {
		let t = ee(ue("hideRecipeNames")), n = e.filter(Ae).flatMap(je).map(Me);
		Q(Le(n.filter(Fe(t))));
		let r = n.filter(Ie(t));
		Q(Re(r)), Oe(r);
	}
	let Be = ([, e]) => e, Ve = ([e, t]) => [e, V(ae("#pCC select[name=\"page\"]", t).options).slice(1).map((e) => e.value)], He = ([, e]) => e.length, Ue = ([e, t]) => t.map((t) => [e, t]), We = ([e, t]) => Z(e, t);
	async function Ge(e) {
		let t = await z(e), n = t.filter(Be).map(Ve).filter(He).flatMap(Ue).map(We), r = await z(n);
		ze(t.map(([, e]) => e).concat(r));
	}
	let Ke = (e) => se(e).includes("quest"), qe = ([, e]) => Ke(e), Je = (e) => e.filter(qe).map(([, e]) => `Skipping folder "${e}" as it has the word "quest" in folder name.`), Ye = ([, e]) => !Ke(e), Xe = ([e, t]) => [e.previousElementSibling.children[0].href, t];
	function Ze(e) {
		Q(["Parsing folder \"Unassigned\"..."]);
		let t = U("div[id^=\"folder_name_\"]", e).map((e) => [e, H(e)]);
		Q(Je(t));
		let n = t.filter(Ye).map(Xe).map(ke);
		Ge([["-1", e], ...n]);
	}
	async function Qe() {
		T(P, ["Parsing inventing screen ..."], !0);
		let e = await Z();
		e ? Ze(e) : Q(["Server Error."]);
	}
	async function $e() {
		let e = await de("fsh_recipeMgr");
		e || Qe(), T(K, e, !0), De();
	}
	function et() {
		Y("Navigate to recipe");
	}
	function tt() {
		Y("refresh button"), Qe();
	}
	le(r, {
		close: X,
		get visible() {
			return p();
		},
		title: (t) => {
			O();
			var n = me(), r = w(E(n));
			c(r, () => ({
				"--button-color": "#494437",
				"--button-size": "10px"
			})), ie(r.lastChild, {
				onclick: tt,
				children: (t, n) => {
					O();
					var r = d("Refresh");
					e(t, r);
				},
				$$slots: { default: !0 }
			}), j(r), e(t, n);
		},
		children: (r, a) => {
			var p = f(), g = E(p);
			i(g, $e, null, (r) => {
				var i = f(), a = E(i), p = (t) => {
					var n = ge();
					o(n, 21, () => S(P), s, (t, n) => {
						O();
						var r = he(), i = E(r);
						O(), m(() => l(i, `${S(n) ?? ""} `)), e(t, r);
					}), j(n), e(t, n);
				}, g = (t) => {
					var r = ve(), i = w(h(r), 2), a = h(i);
					c(a, () => ({ "--button-color": "#383838" })), re(a.lastChild, {
						onclick: xe,
						children: (t, n) => {
							O();
							var r = d("Name");
							e(t, r);
						},
						$$slots: { default: !0 }
					}), j(a), j(i);
					var f = w(i, 8);
					o(f, 17, () => S(K), s, (t, r) => {
						var i = D(() => u(S(r), 6)), a = D(() => u(S(i)[5], 2));
						let c = () => S(i)[0], d = () => S(i)[1], f = () => S(i)[2], p = () => S(i)[3], g = () => S(i)[4], _ = () => S(a)[0], v = () => S(a)[1];
						var y = _e(), x = E(y), C = h(x), T = h(C);
						let O;
						j(C), j(x);
						var P = w(x, 2), F = h(P), I = b(F, !0);
						j(P);
						var L = w(P, 2);
						o(L, 21, p, s, (t, n) => {
							var r = D(() => u(S(n), 3));
							let i = () => S(r)[0], a = () => S(r)[1], o = () => S(r)[2];
							var s = q(), c = h(s);
							let d;
							var f = w(c, 2), p = b(f);
							j(s), m(() => {
								A(c, "data-tipped", `fetchitem.php?item_id=${i() ?? ""}&t=2&vcode=${a() ?? ""}`), d = k(c, "", d, { "background-image": `url('${G ?? ""}items/${i() ?? ""}.gif')` }), l(p, `${S(N)[i()] ?? 0 ?? ""}/${o() ?? ""}`);
							}), e(t, s);
						}), j(L);
						var R = w(L, 2);
						o(R, 21, g, s, (t, n) => {
							var r = D(() => u(S(n), 3));
							let i = () => S(r)[0], a = () => S(r)[1], o = () => S(r)[2];
							var s = q(), c = h(s);
							let d;
							var f = w(c, 2), p = b(f);
							j(s), m(() => {
								A(c, "data-tipped", `fetchitem.php?item_id=${i() ?? ""}&t=2&vcode=${a() ?? ""}`), d = k(c, "", d, { "background-image": `url('${G ?? ""}items/${i() ?? ""}.gif')` }), l(p, `${S(M)[i()] ?? 0 ?? ""}/${o() ?? ""}`);
							}), e(t, s);
						}), j(R);
						var z = w(R, 2), B = h(z);
						let V;
						j(z), m(() => {
							A(C, "href", `index.php?cmd=inventing&subcmd=viewrecipe&recipe_id=${c() ?? ""}`), O = k(T, "", O, { "background-image": `url('${G ?? ""}recipes/${f() ?? ""}')` }), A(F, "href", `index.php?cmd=inventing&subcmd=viewrecipe&recipe_id=${c() ?? ""}`), l(I, d()), A(B, "data-tipped", `fetchitem.php?item_id=${_() ?? ""}&t=2&vcode=${v() ?? ""}`), V = k(B, "", V, { "background-image": `url('${G ?? ""}items/${_() ?? ""}.gif')` });
						}), n("click", C, et), n("click", F, et), e(t, y);
					}), j(r), e(t, r);
				};
				t(a, (e) => {
					S(P).length ? e(p) : S(K) && e(g, 1);
				}), e(r, i);
			}, (t, n) => {
				var r = ye(), i = b(r, !0);
				m(() => l(i, S(n).message)), e(t, r);
			}), e(r, p);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), g();
}
p(["click"]);
// src/modules/notepad/recipeMgr/mountRecipeMgr.svelte.js
var Y = v({ visible: !0 }), X = 0;
function Z() {
	X ? Y.visible = !0 : X = a(J, {
		props: Y,
		target: document.body
	});
}
export { Z as default };

//# sourceMappingURL=mountRecipeMgr.svelte-DdqLUsS0.js.map