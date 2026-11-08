import { B as e, F as t, G as n, H as r, I as i, L as a, M as o, N as s, R as c, U as l, V as u, W as d, Z as f, et as p, ft as m, it as h, lt as g, nt as _, pt as v, q as y, r as b, rt as x, st as S, tt as C, vt as w, y as T, yt as E } from "./disclose-version-Cj0Bwtvz.js";
import { t as D } from "./getValue-vrUqpo0a.js";
import { t as O } from "./sendEvent-Co2_qySS.js";
import { t as k } from "./reliclist-CVPPUSFV.js";
import { t as A } from "./alpha-BRx-EQ4u.js";
import { t as j } from "./isArray-jaX-hZZq.js";
import { t as M } from "./LinkBtn-DI1FRuvk.js";
import { t as N } from "./splitTime-DV8R5tbN.js";
import { t as P } from "./ModalTitled-Czm45j3-.js";
import "./constants-CenxlFMY.js";
import { t as F } from "./padZ-HTo14JN-.js";
// src/modules/notepad/reliclist/Reliclist.svelte
var ee = r("<a> </a>"), te = r("<div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"><a> </a></div> <div class=\"svelte-s68cg2\"><!></div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"><!></div>", 1), I = r("<div class=\"content grid svelte-s68cg2\"><div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <!></div>"), L = r("<div class=\"content svelte-s68cg2\"> </div>"), R = r(" <br/>", 1), z = r("<div class=\"content svelte-s68cg2\"></div>");
function B(r, a) {
	v(a, !0);
	let d = b(a, "visible", 15, !0), D = g(h([])), B = g(h([])), V = -1, H = "";
	function U(e) {
		O("Relic List", e);
	}
	function ne() {
		U("close"), d(!1);
	}
	function W(e) {
		S(B, e.concat(y(B)), !0);
	}
	let re = (e) => (t) => t.id === e, G = (e, t) => e?.attributes?.find(re(t)), K = (e, t) => G(e, t)?.value ?? "", ie = (e) => G(e, 6), ae = (e, t) => V * (e.time - t.time), q = (e, t) => G(e, t)?.value ?? 0, J = (e) => (t, n) => V * (q(t, e) - q(n, e)), oe = (e, t) => V * A(e.guild?.name ?? "", t.guild?.name ?? ""), se = (e, t) => V * A(e.name, t.name), Y = (e) => e.location.realm.min_level, X = (e, t) => V * (Y(e) - Y(t));
	function Z(e, t) {
		V = H === e ? V * -1 : 1, S(D, y(D).slice().sort(t), !0), H = e;
	}
	function Q(e, t) {
		U(e), Z(e, t);
	}
	async function $(e = 0, t = 100) {
		W([`offset ${e}`]);
		let n = await k(null, e, t);
		if (n?.s) return n.r.remaining_relics ? n.r.relics.concat(await $(e + n.r.relics.length, Math.min(100, n.r.remaining_relics))) : n.r.relics;
	}
	async function ce() {
		W(["Loading..."]);
		let e = await $();
		j(e) && (S(D, e.filter(ie), !0), Z("sort by level", X));
	}
	function le(e) {
		let [t, n, r, i] = N(e);
		return `${t}d ${F(n)}h ${F(r)}m ${F(i)}s`;
	}
	let ue = g(h(Promise.resolve()));
	S(ue, ce(), !0), P(r, {
		close: ne,
		get visible() {
			return d();
		},
		title: (t) => {
			w();
			var n = l("Relic List");
			e(t, n);
		},
		children: (r, a) => {
			var d = u(), m = C(d);
			i(m, () => y(ue), (t) => {
				var n = z();
				o(n, 21, () => y(B), s, (t, n) => {
					w();
					var r = R(), i = C(r);
					w(), f(() => c(i, `${y(n) ?? ""} `)), e(t, r);
				}), E(n), e(t, n);
			}, (r) => {
				var i = I(), a = p(i), s = p(a);
				M(s, {
					onclick: () => {
						Q("sort by level", X);
					},
					children: (t, n) => {
						w();
						var r = l("Level");
						e(t, r);
					},
					$$slots: { default: !0 }
				}), E(a);
				var u = x(a, 2), d = p(u);
				M(d, {
					onclick: () => {
						Q("sort by name", se);
					},
					children: (t, n) => {
						w();
						var r = l("Name");
						e(t, r);
					},
					$$slots: { default: !0 }
				}), E(u);
				var m = x(u, 2), h = p(m);
				M(h, {
					onclick: () => {
						Q("sort by guild", oe);
					},
					children: (t, n) => {
						w();
						var r = l("Guild");
						e(t, r);
					},
					$$slots: { default: !0 }
				}), E(m);
				var g = x(m, 2), v = p(g);
				M(v, {
					onclick: () => {
						Q("sort by stam gain", J(6));
					},
					children: (t, n) => {
						w();
						var r = l("Stam Gain");
						e(t, r);
					},
					$$slots: { default: !0 }
				}), E(g);
				var b = x(g, 2), S = p(b);
				M(S, {
					onclick: () => {
						Q("sort by attack", J(0));
					},
					children: (t, n) => {
						w();
						var r = l("Atk");
						e(t, r);
					},
					$$slots: { default: !0 }
				}), E(b);
				var O = x(b, 2), k = p(O);
				M(k, {
					onclick: () => {
						Q("sort by damage", J(4));
					},
					children: (t, n) => {
						w();
						var r = l("Dmg");
						e(t, r);
					},
					$$slots: { default: !0 }
				}), E(O);
				var A = x(O, 2), j = p(A);
				M(j, {
					onclick: () => {
						Q("sort by stamina", J(5));
					},
					children: (t, n) => {
						w();
						var r = l("Stam");
						e(t, r);
					},
					$$slots: { default: !0 }
				}), E(A);
				var N = x(A, 2), P = p(N);
				M(P, {
					onclick: () => {
						Q("sort by gold gain", J(7));
					},
					children: (t, n) => {
						w();
						var r = l("Gold Gain");
						e(t, r);
					},
					$$slots: { default: !0 }
				}), E(N);
				var F = x(N, 2), L = p(F);
				M(L, {
					onclick: () => {
						Q("sort by xp gain", J(8));
					},
					children: (t, n) => {
						w();
						var r = l("XP Gain");
						e(t, r);
					},
					$$slots: { default: !0 }
				}), E(F);
				var R = x(F, 2), z = p(R);
				M(z, {
					onclick: () => {
						Q("sort by time", ae);
					},
					children: (t, n) => {
						w();
						var r = l("Time");
						e(t, r);
					},
					$$slots: { default: !0 }
				}), E(R);
				var B = x(R, 2);
				o(B, 17, () => y(D), (e) => e.id, (r, i) => {
					var a = te(), o = C(a), s = _(o, !0), u = x(o, 2), d = p(u), m = _(d, !0);
					E(u);
					var h = x(u, 2), g = p(h), v = (t) => {
						var r = ee(), a = _(r, !0);
						f(() => {
							T(r, "href", `index.php?cmd=guild&subcmd=view&guild_id=${y(i).guild.id ?? ""}`), c(a, y(i).guild.name);
						}), n("click", r, () => U("view guild")), e(t, r);
					};
					t(g, (e) => {
						y(i).guild && e(v);
					}), E(h);
					var b = x(h, 2), S = _(b, !0), w = x(b, 2), D = _(w, !0), O = x(w, 2), k = _(O, !0), A = x(O, 2), j = _(A, !0), M = x(A, 2), N = _(M, !0), P = x(M, 2), F = _(P, !0), I = x(P, 2), L = p(I), R = (t) => {
						var n = l();
						f((e) => c(n, e), [() => le(y(i).time)]), e(t, n);
					};
					t(L, (e) => {
						y(i).time && e(R);
					}), E(I), f((e, t, n, r, a, o) => {
						c(s, y(i).location.realm.min_level), T(d, "href", `https://guide.fallensword.com/index.php?cmd=relics&subcmd=view&relic_id=${y(i).id ?? ""}`), c(m, y(i).name), c(S, e), c(D, t), c(k, n), c(j, r), c(N, a), c(F, o);
					}, [
						() => K(y(i), 6),
						() => K(y(i), 0),
						() => K(y(i), 4),
						() => K(y(i), 5),
						() => K(y(i), 7),
						() => K(y(i), 8)
					]), n("click", d, () => U("view relic on UFSG")), e(r, a);
				}), E(i), e(r, i);
			}, (t, n) => {
				var r = L(), i = _(r, !0);
				f(() => c(i, y(n).message)), e(t, r);
			}), e(r, d);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), m();
}
d(["click"]);
// src/modules/notepad/reliclist/mountReliclist.svelte.js
var V = h({ visible: !0 }), H = 0;
function U() {
	D("betaOptIn") && (H ? V.visible = !0 : H = a(B, {
		props: V,
		target: document.body
	}));
}
export { U as default };

//# sourceMappingURL=mountReliclist.svelte-DK3KcGt-.js.map