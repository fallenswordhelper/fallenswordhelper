import { r as e } from "./now-CA_NVGr7.js";
import { t } from "./system-DeHfCtq2.js";
import { A as n, B as r, F as i, I as a, J as o, L as s, N as c, O as l, P as u, R as d, T as f, W as p, X as m, Y as h, Z as g, _t as _, dt as v, et as y, gt as b, j as x, nt as S, p as C, r as w, ut as T } from "./disclose-version-Bvjv4_yw.js";
import { t as E } from "./ModalTitled-Ksl_tZBv.js";
import { t as D } from "./sendEvent-DFQy5lFi.js";
import { t as O } from "./addCommas-BgpPUQrd.js";
import { n as k, t as A } from "./view-D7rOIO2S.js";
//#region src/modules/app/guild/mercs/accept.js
function j() {
	return k({ subcmd2: "acceptoffer" });
}
//#endregion
//#region src/modules/app/guild/mercs/decline.js
function M() {
	return k({ subcmd2: "declineoffer" });
}
//#endregion
//#region src/modules/app/guild/mercs/disband.js
function N(e) {
	return k({
		subcmd2: "disband",
		merc_id: e
	});
}
//#endregion
//#region src/modules/app/guild/mercs/search.js
function P() {
	return k({ subcmd2: "search" });
}
//#endregion
//#region src/modules/notepad/mercs/Mercs.svelte
var F = i("<button class=\"custombutton svelte-prywca\" type=\"button\"> </button>"), I = i("<button class=\"custombutton svelte-prywca\" type=\"button\">Accept Offer</button> &nbsp; <button class=\"custombutton svelte-prywca\" type=\"button\">Decline Offer</button>", 1), ee = i("<div class=\"merc svelte-prywca\"><div><b> </b></div> <div><img alt=\"alt\" height=\"125\" width=\"125\"/></div> <div class=\"offer svelte-prywca\"><div class=\"svelte-prywca\">Hire Price:</div> <div class=\"svelte-prywca\"><b> </b> <img alt=\"Gold\" class=\"gold svelte-prywca\"/></div> <div class=\"svelte-prywca\">Hire Time:</div> <div class=\"svelte-prywca\"><b> </b> hour(s)</div> <div class=\"svelte-prywca\">Offer Time Left:</div> <div class=\"svelte-prywca\"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class=\"attribs svelte-prywca\"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>", 1), L = i("<div class=\"no-offer svelte-prywca\">Your expedition returned without finding any mercenaries.</div>"), R = i("<div class=\"active-merc svelte-prywca\"><div><b> </b></div> <div><img alt=\"alt\" class=\"tip-static\" height=\"125\" width=\"125\"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class=\"disband svelte-prywca\"><button class=\"custombutton svelte-prywca\" type=\"button\">Disband</button></div></div>"), z = i("<div class=\"no-active svelte-prywca\">[ no active mercenaries ]</div>"), B = i("<div class=\"merc-hunter svelte-prywca\"><div class=\"top-div svelte-prywca\">(<b> </b> available for hire)</div> <div class=\"button-div svelte-prywca\"><!></div> <div class=\"result-div svelte-prywca\"><div class=\"cols svelte-prywca\"><!> <!> <div class=\"auto-decline svelte-prywca\"></div></div></div> <div class=\"active-title svelte-prywca\"><b>Active Mercenaries</b></div> <div class=\"lower-div svelte-prywca\"><div class=\"active svelte-prywca\"><!></div></div></div>");
function V(n, i) {
	v(i, !0);
	let s = [
		"Normal",
		"Champion",
		"Elite",
		"Super Elite",
		"Titan",
		"Legendary"
	], k = [
		"Human",
		"Vermin",
		"Undead",
		"Dragon",
		"Greenskin",
		"Demon",
		"Golem",
		"Dwarf",
		"Feline",
		"Elf",
		"Avian",
		"Aquatic",
		"Plant",
		"Canine",
		"Reptile",
		"Beast",
		"Mechanical",
		"Mounted",
		"Magical"
	], V = w(i, "visible", 15, !0), H = S(1), U = S(0), W = S(0), G = S("?"), K = S("?"), q = S(g([]));
	function J() {
		D("mercs", "close"), V(!1);
	}
	function Y() {
		y(U, 0), y(W, 1), y(H, 0);
	}
	async function X() {
		D("mercs", "doDecline"), y(H, 1), await M(), y(U, 0), y(H, 0);
	}
	function Z(t) {
		let n = Math.floor((t - e()) / 60), r = Math.floor(n / 60);
		return n %= 60, {
			hours: r,
			mins: n
		};
	}
	let Q = (e) => ({
		...e,
		...Z(e.expires)
	});
	async function te() {
		D("mercs", "doAccept"), y(H, 1);
		let e = await j();
		y(q, [...r(q), Q({
			...r(U),
			expires: e.r.expires
		})], !0), y(G, e.r.mercs_available.toString(), !0), y(U, 0), y(H, 0);
	}
	function $(e) {
		y(U, Q(e.r), !0), y(H, 0);
	}
	async function ne() {
		D("mercs", "getOffer"), y(H, 1), y(W, 0);
		let e = await P();
		e.r ? $(e) : Y();
	}
	async function re(e) {
		D("mercs", "doDisband"), y(H, 1), await N(e), y(q, r(q).filter(({ id: t }) => t !== e), !0), y(H, 0);
	}
	async function ie() {
		let e = await A();
		y(q, e.r.mercs?.map(Q) || [], !0), y(G, e.r.mercs_available.toString(), !0), y(K, e.r.gold.toString(), !0), e.r.offer ? $({ r: e.r.offer }) : y(H, 0);
	}
	ie(), E(n, {
		close: J,
		get visible() {
			return V();
		},
		title: (e) => {
			b(), c(e, a("Merc Hunter"));
		},
		children: (e, n) => {
			var i = B(), a = o(i), g = m(o(a)), v = o(g, !0);
			_(g), b(), _(a);
			var y = m(a, 2), S = o(y), w = (e) => {
				var t = F(), n = o(t);
				_(t), p(() => {
					t.disabled = r(H), x(n, `Send Expedition (${r(K) ?? ""}g)`);
				}), d("click", t, ne), c(e, t);
			}, T = (e) => {
				var t = I(), n = h(t), i = m(n, 2);
				p(() => {
					n.disabled = r(H), i.disabled = r(H);
				}), d("click", n, te), d("click", i, X), c(e, t);
			};
			l(S, (e) => {
				r(U) ? e(T, -1) : e(w);
			}), _(y);
			var E = m(y, 2), D = o(E), A = o(D), j = (e) => {
				var n = ee(), i = h(n), a = o(i), l = o(a), u = o(l, !0);
				_(l), _(a);
				var d = m(a, 2), f = o(d);
				_(d);
				var g = m(d, 2), v = m(o(g), 2), y = o(v), S = o(y, !0);
				_(y);
				var w = m(y, 2);
				_(v);
				var T = m(v, 4), E = o(T), D = o(E, !0);
				_(E), b(), _(T);
				var A = m(T, 4), j = o(A), M = o(j, !0);
				_(j);
				var N = m(j, 2), P = o(N, !0);
				_(N), b(), _(A), _(g), _(i);
				var F = m(i, 2), I = m(o(F), 2), L = o(I, !0);
				_(I);
				var R = m(I, 4), z = o(R, !0);
				_(R);
				var B = m(R, 4), V = o(B, !0);
				_(B);
				var H = m(B, 4), W = o(H, !0);
				_(H);
				var G = m(H, 4), K = o(G, !0);
				_(G);
				var q = m(G, 4), J = o(q, !0);
				_(q);
				var Y = m(q, 4), X = o(Y, !0);
				_(Y);
				var Z = m(Y, 4), Q = o(Z, !0);
				_(Z), _(F), p((e) => {
					x(u, r(U).name), C(f, "src", `${t ?? ""}mercs/${r(U).id ?? ""}.png`), x(S, e), C(w, "src", `${t ?? ""}currency/0.png`), x(D, r(U).hire_time / 3600), x(M, r(U).hours), x(P, r(U).mins), x(L, r(U).level), x(z, k[r(U).class]), x(V, s[r(U).type]), x(W, r(U).attributes[0].value), x(K, r(U).attributes[1].value), x(J, r(U).attributes[2].value), x(X, r(U).attributes[3].value), x(Q, r(U).attributes[4].value);
				}, [() => O(r(U).gold)]), c(e, n);
			};
			l(A, (e) => {
				r(U) && e(j);
			});
			var M = m(A, 2), N = (e) => {
				c(e, L());
			};
			l(M, (e) => {
				r(W) && e(N);
			}), b(2), _(D), _(E);
			var P = m(E, 4), V = o(P), J = o(V), Y = (e) => {
				var n = u();
				f(h(n), 17, () => r(q), ({ attributes: e, class: t, id: n, level: r, name: i, type: a, hours: o, mins: s }) => n, (e, n) => {
					let i = () => r(n).attributes, a = () => r(n).class, l = () => r(n).id, u = () => r(n).level, f = () => r(n).name, h = () => r(n).type, g = () => r(n).hours, v = () => r(n).mins;
					var y = R(), S = o(y), w = o(S), T = o(w, !0);
					_(w), _(S);
					var E = m(S, 2), D = o(E);
					_(E);
					var O = m(E, 4), A = o(O), j = o(A, !0);
					_(A);
					var M = m(A, 2), N = o(M, !0);
					_(M), b(), _(O);
					var P = m(O, 2), F = o(P);
					_(P), _(y), p(() => {
						x(T, f()), C(D, "data-tipped", `<div style="column-gap: 2px; display: grid;
                    grid-template-columns: repeat(2, 1fr);">
                    <div>Name:</div><div>${f() ?? ""}</div>
                      <div>Level:</div><div>${u() ?? ""}</div>
                      <div>Classification:</div><div>${k[a()] ?? ""}</div>
                      <div>Type:</div><div>${s[h()] ?? ""}</div>
                      <div>Attack:</div><div>${i()[0].value ?? ""}</div>
                      <div>Defense:</div><div>${i()[1].value ?? ""}</div>
                      <div>Armor:</div><div>${i()[2].value ?? ""}</div>
                      <div>HP:</div><div>${i()[3].value ?? ""}</div>
                      <div>Damage:</div><div>${i()[4].value ?? ""}</div>
                      </div>`), C(D, "src", `${t ?? ""}mercs/${l() ?? ""}.png`), x(j, g()), x(N, v()), F.disabled = r(H);
					}), d("click", F, () => re(l())), c(e, y);
				}), c(e, n);
			}, Z = (e) => {
				c(e, z());
			};
			l(J, (e) => {
				r(q).length ? e(Y) : e(Z, -1);
			}), _(V), _(P), _(i), p(() => x(v, r(G))), c(e, i);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), T();
}
s(["click"]);
//#endregion
//#region src/modules/notepad/mercs/mountMercs.svelte.js
var H = g({ visible: !0 }), U = 0;
function W() {
	U ? H.visible = !0 : U = n(V, {
		props: H,
		target: document.body
	});
}
//#endregion
export { W as default };

//# sourceMappingURL=mountMercs.svelte-Cqc9Rd0P.js.map