import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { nt as e, ot as t } from "./constants-C54mky4_.js";
import { t as n } from "./getValue-CCThXEzy.js";
import { t as r } from "./isArray-oWM-Qp9j.js";
import { A as i, B as a, E as o, F as s, I as c, J as l, L as u, N as d, O as f, P as p, R as m, T as h, W as g, X as _, Y as v, Z as y, _t as b, dt as x, et as S, gt as C, j as w, k as T, nt as E, p as D, r as O, ut as k } from "./disclose-version-CVZFuhb0.js";
import { t as A } from "./ModalTitled-DUBQ6MwC.js";
import { t as j } from "./sendEvent-bwvhd4A-.js";
import { t as M } from "./alpha-gvIHBiw7.js";
import { t as N } from "./splitTime-Cpk4foX_.js";
import { t as P } from "./padZ-Cypg_I1Q.js";
import "./Modal-QdM-bPCT.js";
import { t as F } from "./LinkBtn-BGsXfdDi.js";
import { t as I } from "./reliclist-BPteOzYG.js";
//#region src/modules/notepad/reliclist/Reliclist.svelte
var ee = s("<a> </a>"), te = s("<div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"><a> </a></div> <div class=\"svelte-s68cg2\"><!></div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"><!></div>", 1), L = s("<div class=\"content grid svelte-s68cg2\"><div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <!></div>"), R = s("<div class=\"content svelte-s68cg2\"> </div>"), z = s(" <br/>", 1), ne = s("<div class=\"content svelte-s68cg2\"></div>");
function B(n, i) {
	x(i, !0);
	let s = O(i, "visible", 15, !0), u = E(y([])), B = E(y([])), V = -1, H = "";
	function U(e) {
		j("Relic List", e);
	}
	function re() {
		U("close"), s(!1);
	}
	function W(e) {
		S(B, e.concat(a(B)), !0);
	}
	let ie = (e) => (t) => t.id === e, G = (e, t) => e?.attributes?.find(ie(t)), K = (e, t) => G(e, t)?.value ?? "", ae = (e) => G(e, 6), oe = (e, t) => V * (e.time - t.time), q = (e, t) => G(e, t)?.value ?? 0, J = (e) => (t, n) => V * (q(t, e) - q(n, e)), se = (e, t) => V * M(e.guild?.name ?? "", t.guild?.name ?? ""), ce = (e, t) => V * M(e.name, t.name), Y = (e) => e.location.realm.min_level, X = (e, t) => V * (Y(e) - Y(t));
	function Z(e, t) {
		V = H === e ? V * -1 : 1, S(u, a(u).slice().sort(t), !0), H = e;
	}
	function Q(e, t) {
		U(e), Z(e, t);
	}
	async function $(e = 0, t = 100) {
		W([`offset ${e}`]);
		let n = await I(null, e, t);
		if (n?.s) return n.r.remaining_relics ? n.r.relics.concat(await $(e + n.r.relics.length, Math.min(100, n.r.remaining_relics))) : n.r.relics;
	}
	async function le() {
		W(["Loading..."]);
		let e = await $();
		r(e) && (S(u, e.filter(ae), !0), Z("sort by level", X));
	}
	function ue(e) {
		let [t, n, r, i] = N(e);
		return `${t}d ${P(n)}h ${P(r)}m ${P(i)}s`;
	}
	let de = E(y(Promise.resolve()));
	S(de, le(), !0), A(n, {
		close: re,
		get visible() {
			return s();
		},
		title: (e) => {
			C(), d(e, c("Relic List"));
		},
		children: (n, r) => {
			var i = p();
			T(v(i), () => a(de), (e) => {
				var t = ne();
				h(t, 21, () => a(B), o, (e, t) => {
					C();
					var n = z(), r = v(n);
					C(), g(() => w(r, `${a(t) ?? ""} `)), d(e, n);
				}), b(t), d(e, t);
			}, (n) => {
				var r = L(), i = l(r);
				F(l(i), {
					onclick: () => {
						Q("sort by level", X);
					},
					children: (e, t) => {
						C(), d(e, c("Level"));
					},
					$$slots: { default: !0 }
				}), b(i);
				var o = _(i, 2);
				F(l(o), {
					onclick: () => {
						Q("sort by name", ce);
					},
					children: (e, t) => {
						C(), d(e, c("Name"));
					},
					$$slots: { default: !0 }
				}), b(o);
				var s = _(o, 2);
				F(l(s), {
					onclick: () => {
						Q("sort by guild", se);
					},
					children: (e, t) => {
						C(), d(e, c("Guild"));
					},
					$$slots: { default: !0 }
				}), b(s);
				var p = _(s, 2);
				F(l(p), {
					onclick: () => {
						Q("sort by stam gain", J(6));
					},
					children: (e, t) => {
						C(), d(e, c("Stam Gain"));
					},
					$$slots: { default: !0 }
				}), b(p);
				var y = _(p, 2);
				F(l(y), {
					onclick: () => {
						Q("sort by attack", J(0));
					},
					children: (e, t) => {
						C(), d(e, c("Atk"));
					},
					$$slots: { default: !0 }
				}), b(y);
				var x = _(y, 2);
				F(l(x), {
					onclick: () => {
						Q("sort by damage", J(4));
					},
					children: (e, t) => {
						C(), d(e, c("Dmg"));
					},
					$$slots: { default: !0 }
				}), b(x);
				var S = _(x, 2);
				F(l(S), {
					onclick: () => {
						Q("sort by stamina", J(5));
					},
					children: (e, t) => {
						C(), d(e, c("Stam"));
					},
					$$slots: { default: !0 }
				}), b(S);
				var T = _(S, 2);
				F(l(T), {
					onclick: () => {
						Q("sort by gold gain", J(7));
					},
					children: (e, t) => {
						C(), d(e, c("Gold Gain"));
					},
					$$slots: { default: !0 }
				}), b(T);
				var E = _(T, 2);
				F(l(E), {
					onclick: () => {
						Q("sort by xp gain", J(8));
					},
					children: (e, t) => {
						C(), d(e, c("XP Gain"));
					},
					$$slots: { default: !0 }
				}), b(E);
				var O = _(E, 2);
				F(l(O), {
					onclick: () => {
						Q("sort by time", oe);
					},
					children: (e, t) => {
						C(), d(e, c("Time"));
					},
					$$slots: { default: !0 }
				}), b(O), h(_(O, 2), 17, () => a(u), (e) => e.id, (n, r) => {
					var i = te(), o = v(i), s = l(o, !0);
					b(o);
					var u = _(o, 2), p = l(u), h = l(p, !0);
					b(p), b(u);
					var y = _(u, 2), x = l(y), S = (e) => {
						var n = ee(), i = l(n, !0);
						b(n), g(() => {
							D(n, "href", `${t ?? ""}${a(r).guild.id ?? ""}`), w(i, a(r).guild.name);
						}), m("click", n, () => U("view guild")), d(e, n);
					};
					f(x, (e) => {
						a(r).guild && e(S);
					}), b(y);
					var C = _(y, 2), T = l(C, !0);
					b(C);
					var E = _(C, 2), O = l(E, !0);
					b(E);
					var k = _(E, 2), A = l(k, !0);
					b(k);
					var j = _(k, 2), M = l(j, !0);
					b(j);
					var N = _(j, 2), P = l(N, !0);
					b(N);
					var F = _(N, 2), I = l(F, !0);
					b(F);
					var L = _(F, 2), R = l(L), z = (e) => {
						var t = c();
						g((e) => w(t, e), [() => ue(a(r).time)]), d(e, t);
					};
					f(R, (e) => {
						a(r).time && e(z);
					}), b(L), g((t, n, i, o, c, l) => {
						w(s, a(r).location.realm.min_level), D(p, "href", `${e ?? ""}relics&subcmd=view&relic_id=${a(r).id ?? ""}`), w(h, a(r).name), w(T, t), w(O, n), w(A, i), w(M, o), w(P, c), w(I, l);
					}, [
						() => K(a(r), 6),
						() => K(a(r), 0),
						() => K(a(r), 4),
						() => K(a(r), 5),
						() => K(a(r), 7),
						() => K(a(r), 8)
					]), m("click", p, () => U("view relic on UFSG")), d(n, i);
				}), b(r), d(n, r);
			}, (e, t) => {
				var n = R(), r = l(n, !0);
				b(n), g(() => w(r, a(t).message)), d(e, n);
			}), d(n, i);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), k();
}
u(["click"]);
//#endregion
//#region src/modules/notepad/reliclist/mountReliclist.svelte.js
var V = y({ visible: !0 }), H = 0;
function U() {
	n("betaOptIn") && (H ? V.visible = !0 : H = i(B, {
		props: V,
		target: document.body
	}));
}
//#endregion
export { U as default };

//# sourceMappingURL=mountReliclist.svelte-DBlUo4bF.js.map