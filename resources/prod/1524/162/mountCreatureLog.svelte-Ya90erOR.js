import "./posthog-C2Vh_0Hn.js";
import { t as e } from "./system-De1jBRGa.js";
import { A as t, B as n, D as r, E as i, F as a, I as o, J as s, L as c, N as l, O as u, P as d, R as f, T as p, W as m, X as h, Y as g, Z as _, _ as ee, _t as v, bt as y, dt as b, et as x, gt as S, j as C, k as w, nt as T, p as te, r as E, rt as D, ut as O } from "./disclose-version-CVZFuhb0.js";
import { t as k } from "./ModalTitled-DUBQ6MwC.js";
import { t as A } from "./sendEvent-bwvhd4A-.js";
import { t as j } from "./entries-BPLrbAVw.js";
import { t as M } from "./alpha-gvIHBiw7.js";
import { n as N, r as P } from "./idb-sdcp-8vV.js";
import "./Modal-QdM-bPCT.js";
import "./ModalConfirm-DbhWxcda.js";
import { t as F } from "./confirm.svelte-Bk-fgsnJ.js";
import "./LinkBtn-BGsXfdDi.js";
import { t as I } from "./LinkBtnBracketed-Rc3cBj0A.js";
import { t as L } from "./addCommas-Ca7d_KBz.js";
//#region src/modules/notepad/creatureLog/CreatureLog.svelte
var R = a("<div class=\"enhancements svelte-ktle3y\"> </div>"), ne = a("<div class=\"missing svelte-ktle3y\">**Missing**</div>"), re = a("<div class=\"entity svelte-ktle3y\"><div class=\"image tip-static svelte-ktle3y\"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>", 1), z = a("<div class=\"data grid svelte-ktle3y\"></div>"), B = a("<div class=\"no-mobs svelte-ktle3y\">No monster information! Please enable creature log and travel a bit to\n        see the world</div>"), V = a("<div class=\"title svelte-ktle3y\"><span class=\"bold svelte-ktle3y\">Entity Information</span> <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div> <div class=\"grid headings svelte-ktle3y\"><div><button class=\"sortable svelte-ktle3y\" type=\"button\">Entity</button></div> <div><button class=\"sortable svelte-ktle3y\" type=\"button\">Class</button></div> <div><button class=\"sortable svelte-ktle3y\" type=\"button\">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>", 1);
function H(t, a) {
	b(a, !0);
	let c = E(a, "visible", 15, !0);
	function H() {
		A("Creature Log", "close"), c(!1);
	}
	let U = T(_([])), W = 1, G = "", K = ([e], [t]) => W * M(e, t), q = ([, e], [, t]) => W * M(e, t), J = ([, , e], [, , t]) => W * (e - t);
	function Y(e, t) {
		W = G === t ? W : 1, x(U, n(U).slice().sort(e), !0), G = t, W *= -1;
	}
	function X() {
		A("Creature Log", "sort by entity"), Y(K, "entity");
	}
	function Z() {
		A("Creature Log", "sort by class"), Y(q, "class");
	}
	function Q() {
		A("Creature Log", "sort by level"), Y(J, "level");
	}
	async function $() {
		let e = await N("fsh_monsterLog");
		e && (x(U, j(e).map(([e, t]) => [
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
	async function ie() {
		A("Creature Log", "clear storage"), await F("Are you sure you want to clear your log?") && (x(U, [], !0), P("fsh_monsterLog", ""));
	}
	k(t, {
		close: H,
		get visible() {
			return c();
		},
		title: (e) => {
			S(), l(e, o("Creature Log"));
		},
		children: (t, a) => {
			var c = V(), _ = g(c), b = h(s(_), 2);
			r(b, () => ({
				"--button-color": "white",
				"--button-width": "2.8em"
			})), I(b.lastChild, {
				onclick: ie,
				children: (e, t) => {
					S(), l(e, o("Clear"));
				},
				$$slots: { default: !0 }
			}), v(b), v(_);
			var x = h(_, 2), T = s(x), E = s(T);
			v(T);
			var O = h(T, 2), k = s(O);
			v(O);
			var A = h(O, 2), j = s(A);
			v(A), S(12), v(x), w(h(x, 2), $, null, (t) => {
				var r = d(), a = g(r), o = (t) => {
					var r = z();
					p(r, 21, () => n(U), i, (t, r) => {
						var a = D(() => y(n(r), 10));
						let o = () => n(a)[0], c = () => n(a)[1], f = () => n(a)[2], _ = () => n(a)[3], b = () => n(a)[4], x = () => n(a)[5], S = () => n(a)[6], w = () => n(a)[7], T = () => n(a)[8], E = () => n(a)[9];
						var O = re(), k = g(O), A = s(k);
						let j;
						var M = h(A, 2), N = s(M, !0);
						v(M), v(k);
						var P = h(k, 2), F = s(P, !0);
						v(P);
						var I = h(P, 2), z = s(I, !0);
						v(I);
						var B = h(I, 2), V = s(B);
						v(B);
						var H = h(B, 2), U = s(H);
						v(H);
						var W = h(H, 2), G = s(W);
						v(W);
						var K = h(W, 2), q = s(K);
						v(K);
						var J = h(K, 2), Y = s(J);
						v(J);
						var X = h(J, 2), Z = s(X), Q = (e) => {
							var t = d();
							p(g(t), 17, T, i, (e, t, r, i) => {
								var a = D(() => y(n(t), 2));
								let o = () => n(a)[0], c = () => n(a)[1].min, u = () => n(a)[1].max;
								var d = R(), f = s(d);
								v(d), m(() => C(f, `${o() ?? ""}: ${c() ?? ""} - ${u() ?? ""}`)), l(e, d);
							}), l(e, t);
						}, $ = (e) => {
							l(e, ne());
						};
						u(Z, (e) => {
							T() ? e(Q) : e($, -1);
						}), v(X), m((t) => {
							te(A, "data-tipped", `<img height=200 src='${e ?? ""}creatures/${E() ?? ""}.png' width=200>`), j = ee(A, "", j, { "background-image": `url('${e ?? ""}creatures/${E() ?? ""}.png')` }), C(N, o()), C(F, c()), C(z, t), C(V, `${_().min ?? ""} - ${_().max ?? ""}`), C(U, `${b().min ?? ""} - ${b().max ?? ""}`), C(G, `${x().min ?? ""} - ${x().max ?? ""}`), C(q, `${S().min ?? ""} - ${S().max ?? ""}`), C(Y, `${w().min ?? ""} - ${w().max ?? ""}`);
						}, [() => L(f())]), l(t, O);
					}), v(r), l(t, r);
				}, c = (e) => {
					l(e, B());
				};
				u(a, (e) => {
					n(U).length ? e(o) : e(c, -1);
				}), l(t, r);
			}), f("click", E, X), f("click", k, Z), f("click", j, Q), l(t, c);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), O();
}
c(["click"]);
//#endregion
//#region src/modules/notepad/creatureLog/mountCreatureLog.svelte.js
var U = _({ visible: !0 }), W = 0;
function G() {
	W ? U.visible = !0 : W = t(H, {
		props: U,
		target: document.body
	});
}
//#endregion
export { G as default };

//# sourceMappingURL=mountCreatureLog.svelte-Ya90erOR.js.map