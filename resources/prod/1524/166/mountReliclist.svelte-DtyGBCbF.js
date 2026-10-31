import "./constants-CenxlFMY.js";
import { t as e } from "./getValue-sxwJaOE3.js";
import { t } from "./isArray-jaX-hZZq.js";
import { B as n, F as r, G as i, H as a, I as o, L as s, M as c, N as l, R as u, U as d, V as f, W as p, Z as m, et as h, ft as g, it as _, lt as v, nt as y, pt as b, q as x, r as S, rt as C, st as w, tt as T, vt as E, y as D, yt as O } from "./disclose-version-gxrYovMN.js";
import { t as k } from "./ModalTitled-DHl8Exkm.js";
import { t as A } from "./sendEvent-yx1DwCDA.js";
import { t as j } from "./alpha-BRx-EQ4u.js";
import { t as M } from "./splitTime-DV8R5tbN.js";
import { t as N } from "./padZ-HTo14JN-.js";
import { t as P } from "./LinkBtn-IEOqMqOr.js";
import { t as F } from "./reliclist-B7j2MRyL.js";
// src/modules/notepad/reliclist/Reliclist.svelte
var ee = a("<a> </a>"), te = a("<div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"><a> </a></div> <div class=\"svelte-s68cg2\"><!></div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"> </div> <div class=\"svelte-s68cg2\"><!></div>", 1), I = a("<div class=\"content grid svelte-s68cg2\"><div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <div class=\"innerColumnHeader svelte-s68cg2\"><!></div> <!></div>"), L = a("<div class=\"content svelte-s68cg2\"> </div>"), R = a(" <br/>", 1), z = a("<div class=\"content svelte-s68cg2\"></div>");
function B(e, a) {
	b(a, !0);
	let s = S(a, "visible", 15, !0), p = v(_([])), B = v(_([])), V = -1, H = "";
	function U(e) {
		A("Relic List", e);
	}
	function ne() {
		U("close"), s(!1);
	}
	function W(e) {
		w(B, e.concat(x(B)), !0);
	}
	let re = (e) => (t) => t.id === e, G = (e, t) => e?.attributes?.find(re(t)), K = (e, t) => G(e, t)?.value ?? "", ie = (e) => G(e, 6), ae = (e, t) => V * (e.time - t.time), q = (e, t) => G(e, t)?.value ?? 0, J = (e) => (t, n) => V * (q(t, e) - q(n, e)), oe = (e, t) => V * j(e.guild?.name ?? "", t.guild?.name ?? ""), se = (e, t) => V * j(e.name, t.name), Y = (e) => e.location.realm.min_level, X = (e, t) => V * (Y(e) - Y(t));
	function Z(e, t) {
		V = H === e ? V * -1 : 1, w(p, x(p).slice().sort(t), !0), H = e;
	}
	function Q(e, t) {
		U(e), Z(e, t);
	}
	async function $(e = 0, t = 100) {
		W([`offset ${e}`]);
		let n = await F(null, e, t);
		if (n?.s) return n.r.remaining_relics ? n.r.relics.concat(await $(e + n.r.relics.length, Math.min(100, n.r.remaining_relics))) : n.r.relics;
	}
	async function ce() {
		W(["Loading..."]);
		let e = await $();
		t(e) && (w(p, e.filter(ie), !0), Z("sort by level", X));
	}
	function le(e) {
		let [t, n, r, i] = M(e);
		return `${t}d ${N(n)}h ${N(r)}m ${N(i)}s`;
	}
	let ue = v(_(Promise.resolve()));
	w(ue, ce(), !0), k(e, {
		close: ne,
		get visible() {
			return s();
		},
		title: (e) => {
			E();
			var t = d("Relic List");
			n(e, t);
		},
		children: (e, t) => {
			var a = f(), s = T(a);
			o(s, () => x(ue), (e) => {
				var t = z();
				c(t, 21, () => x(B), l, (e, t) => {
					E();
					var r = R(), i = T(r);
					E(), m(() => u(i, `${x(t) ?? ""} `)), n(e, r);
				}), O(t), n(e, t);
			}, (e) => {
				var t = I(), a = h(t), o = h(a);
				P(o, {
					onclick: () => {
						Q("sort by level", X);
					},
					children: (e, t) => {
						E();
						var r = d("Level");
						n(e, r);
					},
					$$slots: { default: !0 }
				}), O(a);
				var s = C(a, 2), l = h(s);
				P(l, {
					onclick: () => {
						Q("sort by name", se);
					},
					children: (e, t) => {
						E();
						var r = d("Name");
						n(e, r);
					},
					$$slots: { default: !0 }
				}), O(s);
				var f = C(s, 2), g = h(f);
				P(g, {
					onclick: () => {
						Q("sort by guild", oe);
					},
					children: (e, t) => {
						E();
						var r = d("Guild");
						n(e, r);
					},
					$$slots: { default: !0 }
				}), O(f);
				var _ = C(f, 2), v = h(_);
				P(v, {
					onclick: () => {
						Q("sort by stam gain", J(6));
					},
					children: (e, t) => {
						E();
						var r = d("Stam Gain");
						n(e, r);
					},
					$$slots: { default: !0 }
				}), O(_);
				var b = C(_, 2), S = h(b);
				P(S, {
					onclick: () => {
						Q("sort by attack", J(0));
					},
					children: (e, t) => {
						E();
						var r = d("Atk");
						n(e, r);
					},
					$$slots: { default: !0 }
				}), O(b);
				var w = C(b, 2), k = h(w);
				P(k, {
					onclick: () => {
						Q("sort by damage", J(4));
					},
					children: (e, t) => {
						E();
						var r = d("Dmg");
						n(e, r);
					},
					$$slots: { default: !0 }
				}), O(w);
				var A = C(w, 2), j = h(A);
				P(j, {
					onclick: () => {
						Q("sort by stamina", J(5));
					},
					children: (e, t) => {
						E();
						var r = d("Stam");
						n(e, r);
					},
					$$slots: { default: !0 }
				}), O(A);
				var M = C(A, 2), N = h(M);
				P(N, {
					onclick: () => {
						Q("sort by gold gain", J(7));
					},
					children: (e, t) => {
						E();
						var r = d("Gold Gain");
						n(e, r);
					},
					$$slots: { default: !0 }
				}), O(M);
				var F = C(M, 2), L = h(F);
				P(L, {
					onclick: () => {
						Q("sort by xp gain", J(8));
					},
					children: (e, t) => {
						E();
						var r = d("XP Gain");
						n(e, r);
					},
					$$slots: { default: !0 }
				}), O(F);
				var R = C(F, 2), z = h(R);
				P(z, {
					onclick: () => {
						Q("sort by time", ae);
					},
					children: (e, t) => {
						E();
						var r = d("Time");
						n(e, r);
					},
					$$slots: { default: !0 }
				}), O(R);
				var B = C(R, 2);
				c(B, 17, () => x(p), (e) => e.id, (e, t) => {
					var a = te(), o = T(a), s = y(o, !0), c = C(o, 2), l = h(c), f = y(l, !0);
					O(c);
					var p = C(c, 2), g = h(p), _ = (e) => {
						var r = ee(), a = y(r, !0);
						m(() => {
							D(r, "href", `index.php?cmd=guild&subcmd=view&guild_id=${x(t).guild.id ?? ""}`), u(a, x(t).guild.name);
						}), i("click", r, () => U("view guild")), n(e, r);
					};
					r(g, (e) => {
						x(t).guild && e(_);
					}), O(p);
					var v = C(p, 2), b = y(v, !0), S = C(v, 2), w = y(S, !0), E = C(S, 2), k = y(E, !0), A = C(E, 2), j = y(A, !0), M = C(A, 2), N = y(M, !0), P = C(M, 2), F = y(P, !0), I = C(P, 2), L = h(I), R = (e) => {
						var r = d();
						m((e) => u(r, e), [() => le(x(t).time)]), n(e, r);
					};
					r(L, (e) => {
						x(t).time && e(R);
					}), O(I), m((e, n, r, i, a, o) => {
						u(s, x(t).location.realm.min_level), D(l, "href", `https://guide.fallensword.com/index.php?cmd=relics&subcmd=view&relic_id=${x(t).id ?? ""}`), u(f, x(t).name), u(b, e), u(w, n), u(k, r), u(j, i), u(N, a), u(F, o);
					}, [
						() => K(x(t), 6),
						() => K(x(t), 0),
						() => K(x(t), 4),
						() => K(x(t), 5),
						() => K(x(t), 7),
						() => K(x(t), 8)
					]), i("click", l, () => U("view relic on UFSG")), n(e, a);
				}), O(t), n(e, t);
			}, (e, t) => {
				var r = L(), i = y(r, !0);
				m(() => u(i, x(t).message)), n(e, r);
			}), n(e, a);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), g();
}
p(["click"]);
// src/modules/notepad/reliclist/mountReliclist.svelte.js
var V = _({ visible: !0 }), H = 0;
function U() {
	e("betaOptIn") && (H ? V.visible = !0 : H = s(B, {
		props: V,
		target: document.body
	}));
}
export { U as default };

//# sourceMappingURL=mountReliclist.svelte-DtyGBCbF.js.map