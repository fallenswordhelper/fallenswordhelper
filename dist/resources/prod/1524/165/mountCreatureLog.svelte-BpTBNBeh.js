import { t as e } from "./system-CNA0YLOa.js";
import { B as t, F as n, G as r, H as i, I as a, L as o, M as s, N as c, P as l, R as u, St as d, U as f, V as p, W as m, Z as h, et as g, ft as _, it as v, lt as y, nt as b, pt as x, q as S, r as C, rt as w, st as T, tt as E, ut as D, vt as O, w as ee, y as te, yt as k } from "./disclose-version-gxrYovMN.js";
import { t as A } from "./ModalTitled-DHl8Exkm.js";
import { t as j } from "./sendEvent-DkxfZozg.js";
import { t as M } from "./entries-PXiXtjwA.js";
import { t as N } from "./alpha-BRx-EQ4u.js";
import { n as P, r as F } from "./idb-D8xqEbs-.js";
import { t as I } from "./confirm.svelte-OuIdvYRA.js";
import { t as L } from "./LinkBtnBracketed-C2pSnAm8.js";
import { t as ne } from "./addCommas-Bv8TEVoY.js";
// src/modules/notepad/creatureLog/CreatureLog.svelte
var re = i("<div class=\"enhancements svelte-ktle3y\"> </div>"), ie = i("<div class=\"missing svelte-ktle3y\">**Missing**</div>"), R = i("<div class=\"entity svelte-ktle3y\"><div class=\"image tip-static svelte-ktle3y\"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>", 1), z = i("<div class=\"data grid svelte-ktle3y\"></div>"), B = i("<div class=\"no-mobs svelte-ktle3y\">No monster information! Please enable creature log and travel a bit to\n        see the world</div>"), V = i("<div class=\"title svelte-ktle3y\"><span class=\"bold svelte-ktle3y\">Entity Information</span> <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div> <div class=\"grid headings svelte-ktle3y\"><div><button class=\"sortable svelte-ktle3y\" type=\"button\">Entity</button></div> <div><button class=\"sortable svelte-ktle3y\" type=\"button\">Class</button></div> <div><button class=\"sortable svelte-ktle3y\" type=\"button\">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>", 1);
function H(i, o) {
	x(o, !0);
	let m = C(o, "visible", 15, !0);
	function H() {
		j("Creature Log", "close"), m(!1);
	}
	let U = y(v([])), W = 1, G = "", K = ([e], [t]) => W * N(e, t), q = ([, e], [, t]) => W * N(e, t), J = ([, , e], [, , t]) => W * (e - t);
	function Y(e, t) {
		W = G === t ? W : 1, T(U, S(U).slice().sort(e), !0), G = t, W *= -1;
	}
	function X() {
		j("Creature Log", "sort by entity"), Y(K, "entity");
	}
	function Z() {
		j("Creature Log", "sort by class"), Y(q, "class");
	}
	function Q() {
		j("Creature Log", "sort by level"), Y(J, "level");
	}
	async function $() {
		let e = await P("fsh_monsterLog");
		e && (T(U, M(e).map(([e, t]) => [
			e,
			t.creature_class,
			t.level,
			t.attack,
			t.defense,
			t.armor,
			t.damage,
			t.hp,
			t.enhancements ? M(t.enhancements) : 0,
			t.image_id
		]), !0), Y(J, "level"));
	}
	async function ae() {
		j("Creature Log", "clear storage"), await I("Are you sure you want to clear your log?") && (T(U, [], !0), F("fsh_monsterLog", ""));
	}
	A(i, {
		close: H,
		get visible() {
			return m();
		},
		title: (e) => {
			O();
			var n = f("Creature Log");
			t(e, n);
		},
		children: (i, o) => {
			var m = V(), _ = E(m), v = w(g(_), 2);
			l(v, () => ({
				"--button-color": "white",
				"--button-width": "2.8em"
			})), L(v.lastChild, {
				onclick: ae,
				children: (e, n) => {
					O();
					var r = f("Clear");
					t(e, r);
				},
				$$slots: { default: !0 }
			}), k(v), k(_);
			var y = w(_, 2), x = g(y), C = b(x), T = w(x, 2), A = b(T), j = w(T, 2), M = b(j);
			O(12), k(y);
			var N = w(y, 2);
			a(N, $, null, (r) => {
				var i = p(), a = E(i), o = (r) => {
					var i = z();
					s(i, 21, () => S(U), c, (r, i) => {
						var a = D(() => d(S(i), 10));
						let o = () => S(a)[0], l = () => S(a)[1], f = () => S(a)[2], m = () => S(a)[3], _ = () => S(a)[4], v = () => S(a)[5], y = () => S(a)[6], x = () => S(a)[7], C = () => S(a)[8], T = () => S(a)[9];
						var O = R(), A = E(O), j = g(A);
						let M;
						var N = w(j, 2), P = b(N, !0);
						k(A);
						var F = w(A, 2), I = b(F, !0), L = w(F, 2), z = b(L, !0), B = w(L, 2), V = b(B), H = w(B, 2), U = b(H), W = w(H, 2), G = b(W), K = w(W, 2), q = b(K), J = w(K, 2), Y = b(J), X = w(J, 2), Z = g(X), Q = (e) => {
							var n = p(), r = E(n);
							s(r, 17, C, c, (e, n, r, i) => {
								var a = D(() => d(S(n), 2));
								let o = () => S(a)[0], s = () => S(a)[1].min, c = () => S(a)[1].max;
								var l = re(), f = b(l);
								h(() => u(f, `${o() ?? ""}: ${s() ?? ""} - ${c() ?? ""}`)), t(e, l);
							}), t(e, n);
						}, $ = (e) => {
							var n = ie();
							t(e, n);
						};
						n(Z, (e) => {
							C() ? e(Q) : e($, -1);
						}), k(X), h((t) => {
							te(j, "data-tipped", `<img height=200 src='${e ?? ""}creatures/${T() ?? ""}.png' width=200>`), M = ee(j, "", M, { "background-image": `url('${e ?? ""}creatures/${T() ?? ""}.png')` }), u(P, o()), u(I, l()), u(z, t), u(V, `${m().min ?? ""} - ${m().max ?? ""}`), u(U, `${_().min ?? ""} - ${_().max ?? ""}`), u(G, `${v().min ?? ""} - ${v().max ?? ""}`), u(q, `${y().min ?? ""} - ${y().max ?? ""}`), u(Y, `${x().min ?? ""} - ${x().max ?? ""}`);
						}, [() => ne(f())]), t(r, O);
					}), k(i), t(r, i);
				}, l = (e) => {
					var n = B();
					t(e, n);
				};
				n(a, (e) => {
					S(U).length ? e(o) : e(l, -1);
				}), t(r, i);
			}), r("click", C, X), r("click", A, Z), r("click", M, Q), t(i, m);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), _();
}
m(["click"]);
// src/modules/notepad/creatureLog/mountCreatureLog.svelte.js
var U = v({ visible: !0 }), W = 0;
function G() {
	W ? U.visible = !0 : W = o(H, {
		props: U,
		target: document.body
	});
}
export { G as default };

//# sourceMappingURL=mountCreatureLog.svelte-BpTBNBeh.js.map