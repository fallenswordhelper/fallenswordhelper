import { B as e, F as t, G as n, H as r, I as i, L as a, M as o, N as s, P as c, R as l, St as u, U as d, V as f, W as p, Z as m, et as h, ft as g, it as _, lt as v, nt as y, pt as b, q as x, r as S, rt as C, st as w, tt as T, ut as E, vt as D, w as ee, y as te, yt as O } from "./disclose-version-Cj0Bwtvz.js";
import { t as k } from "./sendEvent-DdWrU3DL.js";
import { t as A } from "./alpha-BRx-EQ4u.js";
import { t as j } from "./entries-PXiXtjwA.js";
import { t as M } from "./LinkBtnBracketed-C70NVX79.js";
import { t as N } from "./confirm.svelte-BFUGCzDS.js";
import { t as P } from "./ModalTitled-Czm45j3-.js";
import { t as ne } from "./addCommas-Bv8TEVoY.js";
import { n as F, r as I } from "./idb-D8xqEbs-.js";
import { t as L } from "./system-CNA0YLOa.js";
// src/modules/notepad/creatureLog/CreatureLog.svelte
var re = r("<div class=\"enhancements svelte-ktle3y\"> </div>"), R = r("<div class=\"missing svelte-ktle3y\">**Missing**</div>"), ie = r("<div class=\"entity svelte-ktle3y\"><div class=\"image tip-static svelte-ktle3y\"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>", 1), z = r("<div class=\"data grid svelte-ktle3y\"></div>"), B = r("<div class=\"no-mobs svelte-ktle3y\">No monster information! Please enable creature log and travel a bit to\n        see the world</div>"), V = r("<div class=\"title svelte-ktle3y\"><span class=\"bold svelte-ktle3y\">Entity Information</span> <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div> <div class=\"grid headings svelte-ktle3y\"><div><button class=\"sortable svelte-ktle3y\" type=\"button\">Entity</button></div> <div><button class=\"sortable svelte-ktle3y\" type=\"button\">Class</button></div> <div><button class=\"sortable svelte-ktle3y\" type=\"button\">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>", 1);
function H(r, a) {
	b(a, !0);
	let p = S(a, "visible", 15, !0);
	function H() {
		k("Creature Log", "close"), p(!1);
	}
	let U = v(_([])), W = 1, G = "", K = ([e], [t]) => W * A(e, t), q = ([, e], [, t]) => W * A(e, t), J = ([, , e], [, , t]) => W * (e - t);
	function Y(e, t) {
		W = G === t ? W : 1, w(U, x(U).slice().sort(e), !0), G = t, W *= -1;
	}
	function X() {
		k("Creature Log", "sort by entity"), Y(K, "entity");
	}
	function Z() {
		k("Creature Log", "sort by class"), Y(q, "class");
	}
	function Q() {
		k("Creature Log", "sort by level"), Y(J, "level");
	}
	async function $() {
		let e = await F("fsh_monsterLog");
		e && (w(U, j(e).map(([e, t]) => [
			e,
			t.creature_class,
			t.level,
			t.attack,
			t.defense,
			t.armor,
			t.damage,
			t.hp,
			t.enhancements ? j(t.enhancements) : 0,
			t.image_id
		]), !0), Y(J, "level"));
	}
	async function ae() {
		k("Creature Log", "clear storage"), await N("Are you sure you want to clear your log?") && (w(U, [], !0), I("fsh_monsterLog", ""));
	}
	P(r, {
		close: H,
		get visible() {
			return p();
		},
		title: (t) => {
			D();
			var n = d("Creature Log");
			e(t, n);
		},
		children: (r, a) => {
			var p = V(), g = T(p), _ = C(h(g), 2);
			c(_, () => ({
				"--button-color": "white",
				"--button-width": "2.8em"
			})), M(_.lastChild, {
				onclick: ae,
				children: (t, n) => {
					D();
					var r = d("Clear");
					e(t, r);
				},
				$$slots: { default: !0 }
			}), O(_), O(g);
			var v = C(g, 2), b = h(v), S = y(b), w = C(b, 2), k = y(w), A = C(w, 2), j = y(A);
			D(12), O(v);
			var N = C(v, 2);
			i(N, $, null, (n) => {
				var r = f(), i = T(r), a = (n) => {
					var r = z();
					o(r, 21, () => x(U), s, (n, r) => {
						var i = E(() => u(x(r), 10));
						let a = () => x(i)[0], c = () => x(i)[1], d = () => x(i)[2], p = () => x(i)[3], g = () => x(i)[4], _ = () => x(i)[5], v = () => x(i)[6], b = () => x(i)[7], S = () => x(i)[8], w = () => x(i)[9];
						var D = ie(), k = T(D), A = h(k);
						let j;
						var M = C(A, 2), N = y(M, !0);
						O(k);
						var P = C(k, 2), F = y(P, !0), I = C(P, 2), z = y(I, !0), B = C(I, 2), V = y(B), H = C(B, 2), U = y(H), W = C(H, 2), G = y(W), K = C(W, 2), q = y(K), J = C(K, 2), Y = y(J), X = C(J, 2), Z = h(X), Q = (t) => {
							var n = f(), r = T(n);
							o(r, 17, S, s, (t, n, r, i) => {
								var a = E(() => u(x(n), 2));
								let o = () => x(a)[0], s = () => x(a)[1].min, c = () => x(a)[1].max;
								var d = re(), f = y(d);
								m(() => l(f, `${o() ?? ""}: ${s() ?? ""} - ${c() ?? ""}`)), e(t, d);
							}), e(t, n);
						}, $ = (t) => {
							var n = R();
							e(t, n);
						};
						t(Z, (e) => {
							S() ? e(Q) : e($, -1);
						}), O(X), m((e) => {
							te(A, "data-tipped", `<img height=200 src='${L ?? ""}creatures/${w() ?? ""}.png' width=200>`), j = ee(A, "", j, { "background-image": `url('${L ?? ""}creatures/${w() ?? ""}.png')` }), l(N, a()), l(F, c()), l(z, e), l(V, `${p().min ?? ""} - ${p().max ?? ""}`), l(U, `${g().min ?? ""} - ${g().max ?? ""}`), l(G, `${_().min ?? ""} - ${_().max ?? ""}`), l(q, `${v().min ?? ""} - ${v().max ?? ""}`), l(Y, `${b().min ?? ""} - ${b().max ?? ""}`);
						}, [() => ne(d())]), e(n, D);
					}), O(r), e(n, r);
				}, c = (t) => {
					var n = B();
					e(t, n);
				};
				t(i, (e) => {
					x(U).length ? e(a) : e(c, -1);
				}), e(n, r);
			}), n("click", S, X), n("click", k, Z), n("click", j, Q), e(r, p);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), g();
}
p(["click"]);
// src/modules/notepad/creatureLog/mountCreatureLog.svelte.js
var U = _({ visible: !0 }), W = 0;
function G() {
	W ? U.visible = !0 : W = a(H, {
		props: U,
		target: document.body
	});
}
export { G as default };

//# sourceMappingURL=mountCreatureLog.svelte-DlVbud-D.js.map