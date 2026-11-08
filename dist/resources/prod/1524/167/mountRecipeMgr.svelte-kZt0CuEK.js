import { B as e, F as t, G as n, H as r, I as i, L as a, M as o, N as s, P as c, R as l, St as u, U as d, V as f, W as p, Z as m, et as h, ft as g, gt as _, it as v, lt as y, nt as b, pt as x, q as S, r as C, rt as w, st as T, tt as E, ut as D, vt as O, w as k, y as A, yt as j } from "./disclose-version-Cj0Bwtvz.js";
import { t as M } from "./daComponents-Bhc6hphf.js";
import { t as N } from "./daLoadInventory-CwrdDsg7.js";
import { t as P } from "./flattenItems-CdGE-Amk.js";
import { t as F } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as I } from "./sendEvent-Co2_qySS.js";
import { t as L } from "./all-D5SlTl7_.js";
import { t as R } from "./alpha-BRx-EQ4u.js";
import { t as z } from "./arrayFrom-CKk6qt2j.js";
import { t as ee } from "./csvSplit-C5BboO-R.js";
import { t as te } from "./fromEntries-BytjDDMx.js";
import { t as B } from "./getTextTrim-CvXe85fp.js";
import { t as ne } from "./isArray-jaX-hZZq.js";
import { t as re } from "./LinkBtn-DI1FRuvk.js";
import { t as ie } from "./LinkBtnBracketed-C70NVX79.js";
import { t as ae } from "./querySelector-C6ReNysW.js";
import { t as oe } from "./querySelectorAll-D_a7rcw0.js";
import { t as V } from "./querySelectorArray-C70U47NF.js";
import { t as se } from "./toLowerCase-Cpm0Ikhj.js";
import { t as ce } from "./uniq-DgWt7KlP.js";
import { t as le } from "./ModalTitled-Czm45j3-.js";
import "./constants-CenxlFMY.js";
import { t as ue } from "./getValue-vrUqpo0a.js";
import { n as de, r as fe } from "./idb-D8xqEbs-.js";
import { t as H } from "./system-CNA0YLOa.js";
// src/modules/notepad/recipeMgr/RecipeMgr.svelte
var pe = r("Recipe Manager <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1), me = r(" <br/>", 1), he = r("<div class=\"progress-log svelte-1vk75w6\"></div>"), U = r("<div><div class=\"small-image tip-dynamic svelte-1vk75w6\"></div> <div> </div></div>"), ge = r("<div class=\"item-container svelte-1vk75w6\"><a class=\"svelte-1vk75w6\"><div class=\"image svelte-1vk75w6\"></div></a></div> <div class=\"item-container svelte-1vk75w6\"><a class=\"svelte-1vk75w6\"> </a></div> <div class=\"item-container svelte-1vk75w6\"></div> <div class=\"item-container svelte-1vk75w6\"></div> <div class=\"item-container svelte-1vk75w6\"><div class=\"image tip-dynamic svelte-1vk75w6\"></div></div>", 1), _e = r("<div class=\"recipes ui-widget-content svelte-1vk75w6\"><div class=\"innerColumnHeader item-container svelte-1vk75w6\">Recipe</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\"><svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Items</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Components</div> <div class=\"innerColumnHeader item-container svelte-1vk75w6\">Target</div> <!></div>"), ve = r("<p style=\"color: red\"> </p>");
function W(r, a) {
	x(a, !0);
	let p = C(a, "visible", 15, !0), W = y(v({})), G = y(v({})), K = y(v([])), q = y(v([])), J = 1;
	function Y(e) {
		I("Recipe Manager", e);
	}
	function ye() {
		Y("close"), p(!1);
	}
	let X = (e = -1, t = 0) => F({
		cmd: "inventing",
		folder_id: e,
		page: t
	}), be = ([, e], [, t]) => J * R(e, t);
	function xe() {
		Y("sort by name"), T(q, S(q).slice().sort(be), !0), J *= -1;
	}
	function Z(e) {
		T(K, e.concat(S(K)), !0);
	}
	let Q = (e, t) => V(`#pCC td[background*="${t}"]`, e).map((e) => [e.children[0].children[0].dataset.tipped.split(/[?&=]/), e.parentNode.nextElementSibling]).map(([e, t]) => [
		e[2],
		e[10],
		...t ? [Number(B(t).split("/")[1])] : []
	]);
	async function Se([e, t, n]) {
		let r = await F({
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
	let Ce = (e) => (t) => [t, e.filter((e) => e === t).length], $ = (e) => te(ce(e).map(Ce(e)));
	async function we() {
		Z(["Updating inventory."]);
		let e = await N();
		if (e?.s) {
			let t = P(e.r).map(({ b: e }) => e);
			T(G, $(t), !0);
		} else Z("No inventory.");
	}
	async function Te() {
		Z(["Updating components."]);
		let e = await M();
		if (ne(e.r)) {
			let t = e.r.map(({ b: e }) => e);
			T(W, $(t), !0);
		} else Z("No components.");
	}
	async function Ee() {
		await L([we(), Te()]), T(K, [], !0);
	}
	async function De(e) {
		T(q, await L(e.map(Se)), !0), fe("fsh_recipeMgr", _(S(q))), Ee();
	}
	async function Oe([e, t]) {
		let n = e.split("=").at(-1), r = await X(n);
		return Z([`Parsing folder "${t}"...`]), [n, r];
	}
	let ke = (e) => e, Ae = (e) => z(oe("#pCC a[href*=\"&recipe_id=\"]", e)), je = (e) => [
		e.href.split("=").at(-1),
		B(e),
		e.parentNode.previousElementSibling.children[0].src.split("/").at(-1)
	], Me = (e) => (t) => t === e, Ne = (e, t) => e.some(Me(t)), Pe = (e) => ([, t]) => Ne(e, t), Fe = (e) => ([, t]) => !Ne(e, t), Ie = (e) => e.map(([, e]) => `Skipping blueprint "${e}" as it is hidden.`), Le = (e) => e.map(([, e]) => `Found blueprint "${e}".`);
	function Re(e) {
		let t = ee(ue("hideRecipeNames")), n = e.filter(ke).flatMap(Ae).map(je);
		Z(Ie(n.filter(Pe(t))));
		let r = n.filter(Fe(t));
		Z(Le(r)), De(r);
	}
	let ze = ([, e]) => e, Be = ([e, t]) => [e, z(ae("#pCC select[name=\"page\"]", t).options).slice(1).map((e) => e.value)], Ve = ([, e]) => e.length, He = ([e, t]) => t.map((t) => [e, t]), Ue = ([e, t]) => X(e, t);
	async function We(e) {
		let t = await L(e), n = t.filter(ze).map(Be).filter(Ve).flatMap(He).map(Ue), r = await L(n);
		Re(t.map(([, e]) => e).concat(r));
	}
	let Ge = (e) => se(e).includes("quest"), Ke = ([, e]) => Ge(e), qe = (e) => e.filter(Ke).map(([, e]) => `Skipping folder "${e}" as it has the word "quest" in folder name.`), Je = ([, e]) => !Ge(e), Ye = ([e, t]) => [e.previousElementSibling.children[0].href, t];
	function Xe(e) {
		Z(["Parsing folder \"Unassigned\"..."]);
		let t = V("div[id^=\"folder_name_\"]", e).map((e) => [e, B(e)]);
		Z(qe(t));
		let n = t.filter(Je).map(Ye).map(Oe);
		We([["-1", e], ...n]);
	}
	async function Ze() {
		T(K, ["Parsing inventing screen ..."], !0);
		let e = await X();
		e ? Xe(e) : Z(["Server Error."]);
	}
	async function Qe() {
		let e = await de("fsh_recipeMgr");
		e || Ze(), T(q, e, !0), Ee();
	}
	function $e() {
		Y("Navigate to recipe");
	}
	function et() {
		Y("refresh button"), Ze();
	}
	le(r, {
		close: ye,
		get visible() {
			return p();
		},
		title: (t) => {
			O();
			var n = pe(), r = w(E(n));
			c(r, () => ({
				"--button-color": "#494437",
				"--button-size": "10px"
			})), ie(r.lastChild, {
				onclick: et,
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
			i(g, Qe, null, (r) => {
				var i = f(), a = E(i), p = (t) => {
					var n = he();
					o(n, 21, () => S(K), s, (t, n) => {
						O();
						var r = me(), i = E(r);
						O(), m(() => l(i, `${S(n) ?? ""} `)), e(t, r);
					}), j(n), e(t, n);
				}, g = (t) => {
					var r = _e(), i = w(h(r), 2), a = h(i);
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
					o(f, 17, () => S(q), s, (t, r) => {
						var i = D(() => u(S(r), 6)), a = D(() => u(S(i)[5], 2));
						let c = () => S(i)[0], d = () => S(i)[1], f = () => S(i)[2], p = () => S(i)[3], g = () => S(i)[4], _ = () => S(a)[0], v = () => S(a)[1];
						var y = ge(), x = E(y), C = h(x), T = h(C);
						let O;
						j(C), j(x);
						var M = w(x, 2), N = h(M), P = b(N, !0);
						j(M);
						var F = w(M, 2);
						o(F, 21, p, s, (t, n) => {
							var r = D(() => u(S(n), 3));
							let i = () => S(r)[0], a = () => S(r)[1], o = () => S(r)[2];
							var s = U(), c = h(s);
							let d;
							var f = w(c, 2), p = b(f);
							j(s), m(() => {
								A(c, "data-tipped", `fetchitem.php?item_id=${i() ?? ""}&t=2&vcode=${a() ?? ""}`), d = k(c, "", d, { "background-image": `url('${H ?? ""}items/${i() ?? ""}.gif')` }), l(p, `${S(G)[i()] ?? 0 ?? ""}/${o() ?? ""}`);
							}), e(t, s);
						}), j(F);
						var I = w(F, 2);
						o(I, 21, g, s, (t, n) => {
							var r = D(() => u(S(n), 3));
							let i = () => S(r)[0], a = () => S(r)[1], o = () => S(r)[2];
							var s = U(), c = h(s);
							let d;
							var f = w(c, 2), p = b(f);
							j(s), m(() => {
								A(c, "data-tipped", `fetchitem.php?item_id=${i() ?? ""}&t=2&vcode=${a() ?? ""}`), d = k(c, "", d, { "background-image": `url('${H ?? ""}items/${i() ?? ""}.gif')` }), l(p, `${S(W)[i()] ?? 0 ?? ""}/${o() ?? ""}`);
							}), e(t, s);
						}), j(I);
						var L = w(I, 2), R = h(L);
						let z;
						j(L), m(() => {
							A(C, "href", `index.php?cmd=inventing&subcmd=viewrecipe&recipe_id=${c() ?? ""}`), O = k(T, "", O, { "background-image": `url('${H ?? ""}recipes/${f() ?? ""}')` }), A(N, "href", `index.php?cmd=inventing&subcmd=viewrecipe&recipe_id=${c() ?? ""}`), l(P, d()), A(R, "data-tipped", `fetchitem.php?item_id=${_() ?? ""}&t=2&vcode=${v() ?? ""}`), z = k(R, "", z, { "background-image": `url('${H ?? ""}items/${_() ?? ""}.gif')` });
						}), n("click", C, $e), n("click", N, $e), e(t, y);
					}), j(r), e(t, r);
				};
				t(a, (e) => {
					S(K).length ? e(p) : S(q) && e(g, 1);
				}), e(r, i);
			}, (t, n) => {
				var r = ve(), i = b(r, !0);
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
var G = v({ visible: !0 }), K = 0;
function q() {
	K ? G.visible = !0 : K = a(W, {
		props: G,
		target: document.body
	});
}
export { q as default };

//# sourceMappingURL=mountRecipeMgr.svelte-kZt0CuEK.js.map