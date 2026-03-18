import { r as e } from "./sendException-s1csWDQs.js";
import { t } from "./isArray-oWM-Qp9j.js";
import { A as n, B as r, E as i, F as a, I as o, J as s, L as c, N as l, O as u, P as d, R as f, T as p, W as m, X as h, Y as g, Z as _, _ as v, _t as y, d as b, dt as x, et as S, f as C, g as ee, gt as w, j as T, k as E, l as D, m as te, mt as O, nt as k, p as ne, r as A, ut as j } from "./disclose-version-CVZFuhb0.js";
import { t as M } from "./ModalTitled-DUBQ6MwC.js";
import { t as N } from "./sendEvent-bwvhd4A-.js";
import { t as P } from "./alpha-gvIHBiw7.js";
import { t as F } from "./uniq-SYQgNgys.js";
import { n as I, r as re } from "./idb-sdcp-8vV.js";
import { t as ie } from "./all-Dy4LjBGw.js";
import { n as ae, t as oe } from "./deepClone-BT7PN_0l.js";
import { t as se } from "./daGuildReport-Caz-RF-p.js";
//#region src/modules/notepad/potReport/perc2color.js
var L = (e) => Math.max(Math.min(e, 100), 0), R = (e) => `000000${e.toString(16)}`.slice(-6);
function ce(e, t, n) {
	let r = L((e - t) / (n - t) * 100), i = 255, a = 255;
	return r < 50 ? a = Math.round(5.1 * r) : i = Math.round(510 - 5.1 * r), `#${R(i * 65536 + a * 256 + 0)}`;
}
//#endregion
//#region src/modules/notepad/potReport/PotReport.svelte
var le = a("<div class=\"svelte-1eys1iq\"> </div> <div class=\"svelte-1eys1iq\"> </div>", 1), ue = a("<div class=\"inventory svelte-1eys1iq\"><div class=\"inventory-grid-container svelte-1eys1iq\"></div></div>"), de = a("<option> </option>"), fe = a("<option> </option>"), z = a("<div class=\"svelte-1eys1iq\"> </div> <div class=\"svelte-1eys1iq\"><select class=\"svelte-1eys1iq\"><!></select></div> <div class=\"svelte-1eys1iq\"><input title=\"Ignore\" type=\"checkbox\" class=\"svelte-1eys1iq\"/></div>", 1), B = a("<div class=\"mapping svelte-1eys1iq\"><div class=\"mapping-grid-container svelte-1eys1iq\"><!> <div class=\"svelte-1eys1iq\"></div> <div class=\"svelte-1eys1iq\"><button class=\"custombutton svelte-1eys1iq\" type=\"button\">Ignore All</button> <button class=\"custombutton svelte-1eys1iq\" type=\"button\">Reset</button></div></div></div>"), V = a("<div class=\"thresholds svelte-1eys1iq\">Min: <input max=\"999\" min=\"0\" type=\"number\" class=\"svelte-1eys1iq\"/> Max: <input max=\"999\" min=\"0\" type=\"number\" class=\"svelte-1eys1iq\"/></div>"), pe = a("<div class=\"filters svelte-1eys1iq\"><label class=\"svelte-1eys1iq\"><input type=\"checkbox\"/> Member Backpacks</label> <label class=\"svelte-1eys1iq\"><input type=\"checkbox\"/> Guild Store</label></div> <div class=\"pot-report svelte-1eys1iq\"><input class=\"tab-ctrl svelte-1eys1iq\" id=\"pr-inv\" type=\"checkbox\"/> <label for=\"pr-inv\" class=\"svelte-1eys1iq\">Composed Potion Inventory</label> <input class=\"tab-ctrl svelte-1eys1iq\" id=\"pr-map\" type=\"checkbox\"/> <label for=\"pr-map\" class=\"svelte-1eys1iq\">Mapping</label> <input class=\"tab-ctrl svelte-1eys1iq\" id=\"pr-levels\" type=\"checkbox\"/> <label for=\"pr-levels\" class=\"svelte-1eys1iq\">Thresholds</label> <div class=\"panels svelte-1eys1iq\"><!> <!> <!></div></div>", 1), me = a("<p style=\"color: red\"> </p>"), he = a("<div class=\"main svelte-1eys1iq\"><!></div>");
function H(e, n) {
	x(n, !0);
	let a = "fsh_potReport", c = {
		inventory: !1,
		mapping: !1,
		thresholds: !1,
		potMap: [],
		minpoint: 20,
		maxpoint: 30,
		backpack: !0,
		guildstore: !0
	}, L = A(n, "visible", 15, !0), R = k(null), H = k(!1), U = k(!1), W = k(!1), G = k(_([])), K = [], q = k(_([])), ge = ({ b: e }) => e === 13699, _e = (e) => ce(e, r(R).minpoint, r(R).maxpoint), ve = ({ ignore: e }) => !e, J = (e) => ({ name: t }) => t === e, ye = (e, t) => P(e.n, t.n), be = ({ r: e }) => e, Y = (e) => N("pot-report", e), xe = ({ player: e, n: t }) => ({
		loc: e ? 1 : 2,
		n: t
	}), X = () => re(a, O(r(R))), Se = (e) => e.flatMap(be).filter(ge).map(xe).sort(ye), Ce = (e) => ({ mapped: t }) => ({
		name: t,
		count: e.filter(({ mapped: e }) => e === t).length
	}), we = (e) => ({ n: t }) => e.some(J(t)), Te = (e) => ({ loc: t, n }) => ({
		loc: t,
		mapped: e.find(J(n)).mapped,
		n
	}), Z = (e) => K.filter(we(e)).filter(({ loc: e }) => r(R).backpack || e !== 1).filter(({ loc: e }) => r(R).guildstore || e !== 2).map(Te(e)), Ee = (e) => F(e, "n").map(({ n: e }) => ({
		name: e,
		mapped: r(R)?.potMap?.find(J(e))?.mapped || e,
		ignore: r(R)?.potMap?.find(J(e))?.ignore ?? !1
	}));
	function De() {
		let e = r(R).potMap.filter(ve), t = Z(e);
		return F(e, "mapped").map(Ce(t)).sort((e, t) => P(e.name, t.name));
	}
	function Q() {
		X(), S(G, De(), !0), S(q, r(R).potMap.map((e) => ({
			...e,
			waiting: !0
		})), !0);
	}
	function $() {
		r(R).potMap = r(q).map(({ ignore: e, mapped: t, name: n }) => ({
			ignore: e,
			mapped: t,
			name: n
		})), Q();
	}
	function Oe() {
		r(R).potMap = r(R).potMap.map((e) => ({
			...e,
			ignore: !0
		})), Q();
	}
	function ke() {
		r(R).potMap = r(R).potMap.map((e) => ({
			...e,
			mapped: e.name,
			ignore: !1
		})), Q();
	}
	async function Ae() {
		S(R, await I(a) || oe(c), !0), S(H, r(R).inventory, !0), S(U, r(R).mapping, !0), S(W, r(R).thresholds, !0), r(R).backpack = r(R).backpack ?? c.backpack, r(R).guildstore = r(R).guildstore ?? c.guildstore;
	}
	async function je() {
		Ae();
		let e = await ie([ae(), se()]);
		if (!t(e[0]?.r) || !t(e[1]?.r)) throw Error("Server Error");
		K = Se(e), r(R).potMap = Ee(K), Q();
	}
	function Me() {
		Y("close"), L(!1);
	}
	M(e, {
		close: Me,
		get visible() {
			return L();
		},
		title: (e) => {
			w(), l(e, o("Pot Report"));
		},
		children: (e, t) => {
			var n = he();
			E(s(n), je, (e) => {
				l(e, o("Loading..."));
			}, (e) => {
				var t = pe(), n = g(t), a = s(n), o = s(a);
				C(o), w(), y(a);
				var c = h(a, 2), _ = s(c);
				C(_), w(), y(c), y(n);
				var x = h(n, 2), E = s(x);
				C(E);
				var O = h(E, 4);
				C(O);
				var k = h(O, 4);
				C(k);
				var A = h(k, 4), j = s(A), M = (e) => {
					var t = ue(), n = s(t);
					p(n, 21, () => r(G), i, (e, t) => {
						let n = () => r(t).name, i = () => r(t).count;
						var a = le(), o = g(a), c = s(o, !0);
						y(o);
						var u = h(o, 2);
						let d;
						var f = s(u, !0);
						y(u), m((e) => {
							T(c, n()), d = v(u, "", d, e), T(f, i());
						}, [() => ({ "background-color": _e(i()) })]), l(e, a);
					}), y(n), y(t), l(e, t);
				};
				u(j, (e) => {
					r(H) && e(M);
				});
				var N = h(j, 2), P = (e) => {
					var t = B(), n = s(t), a = s(n);
					p(a, 17, () => r(q), i, (e, t, n) => {
						let a = () => r(t).name, o = () => r(t).mapped, c = () => r(t).waiting;
						var _ = z(), v = g(_), b = s(v, !0);
						y(v);
						var x = h(v, 2), S = s(x), w = s(S), E = (e) => {
							var t = de(), n = s(t, !0);
							y(t);
							var r = {};
							m(() => {
								T(n, o()), r !== (r = o()) && (t.__value = o());
							}), l(e, t);
						}, O = (e) => {
							var t = d();
							p(g(t), 17, () => r(q), i, (e, t) => {
								let n = () => r(t).name;
								var i = fe(), a = s(i, !0);
								y(i);
								var c = {};
								m(() => {
									te(i, o() === n()), T(a, n()), c !== (c = n()) && (i.__value = n());
								}), l(e, i);
							}), l(e, t);
						};
						u(w, (e) => {
							c() ? e(E) : e(O, -1);
						}), y(S), y(x);
						var k = h(x, 2), A = s(k);
						C(A), y(k), m(() => {
							T(b, a()), ne(S, "name", a());
						}), f("change", S, () => {
							Y("mapped"), $();
						}), f("mousedown", S, () => {
							r(q)[n].waiting = !1;
						}), ee(S, () => r(q)[n].mapped, (e) => r(q)[n].mapped = e), f("change", A, () => {
							Y("ignore"), $();
						}), f("click", A, (e) => e.target.blur()), D(A, () => r(q)[n].ignore, (e) => r(q)[n].ignore = e), l(e, _);
					});
					var o = h(a, 4), c = s(o), _ = h(c, 2);
					y(o), y(n), y(t), f("click", c, () => {
						Y("ignore-all"), Oe();
					}), f("click", _, () => {
						Y("reset"), ke();
					}), l(e, t);
				};
				u(N, (e) => {
					r(U) && e(P);
				});
				var F = h(N, 2), I = (e) => {
					var t = V(), n = h(s(t));
					C(n);
					var i = h(n, 2);
					C(i), y(t), f("input", n, () => {
						Y("minpoint"), Q();
					}), b(n, () => r(R).minpoint, (e) => r(R).minpoint = e), f("input", i, () => {
						Y("maxpoint"), Q();
					}), b(i, () => r(R).maxpoint, (e) => r(R).maxpoint = e), l(e, t);
				};
				u(F, (e) => {
					r(W) && e(I);
				}), y(A), y(x), f("change", o, () => {
					Y("backpack"), X(), Q();
				}), D(o, () => r(R).backpack, (e) => r(R).backpack = e), f("change", _, () => {
					Y("guildstore"), X(), Q();
				}), D(_, () => r(R).guildstore, (e) => r(R).guildstore = e), f("change", E, () => {
					Y("inventory"), X();
				}), f("click", E, () => {
					r(H) || S(H, !0);
				}), D(E, () => r(R).inventory, (e) => r(R).inventory = e), f("change", O, () => {
					Y("mapping"), X();
				}), f("click", O, () => {
					r(U) || S(U, !0);
				}), D(O, () => r(R).mapping, (e) => r(R).mapping = e), f("change", k, () => {
					Y("thresholds"), X();
				}), f("click", k, () => {
					r(W) || S(W, !0);
				}), D(k, () => r(R).thresholds, (e) => r(R).thresholds = e), l(e, t);
			}, (e, t) => {
				var n = me(), i = s(n, !0);
				y(n), m(() => T(i, r(t).message)), l(e, n);
			}), y(n), l(e, n);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), j();
}
c([
	"change",
	"click",
	"mousedown",
	"input"
]);
//#endregion
//#region src/modules/notepad/potReport/mountPotReport.svelte.js
var U = /* @__PURE__ */ e({ default: () => K }), W = _({ visible: !0 }), G = 0;
function K() {
	G ? W.visible = !0 : G = n(H, {
		props: W,
		target: document.body
	});
}
//#endregion
export { U as t };

//# sourceMappingURL=mountPotReport.svelte-CGa7cPWW.js.map