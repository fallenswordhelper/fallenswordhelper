import { r as e } from "./now-B3pCBQja.js";
import { t } from "./system-CNA0YLOa.js";
import { B as n, F as r, G as i, H as a, L as o, M as s, R as c, U as l, V as u, W as d, Z as f, et as p, ft as m, it as h, lt as g, nt as _, pt as v, q as y, r as b, rt as x, st as S, tt as C, vt as w, y as T, yt as E } from "./disclose-version-gxrYovMN.js";
import { t as D } from "./ModalTitled-DHl8Exkm.js";
import { t as O } from "./sendEvent-yx1DwCDA.js";
import { t as k } from "./addCommas-Bv8TEVoY.js";
import { n as A, t as j } from "./view-Bb_8P0rO.js";
// src/modules/app/guild/mercs/accept.js
function M() {
	return A({ subcmd2: "acceptoffer" });
}
// src/modules/app/guild/mercs/decline.js
function N() {
	return A({ subcmd2: "declineoffer" });
}
// src/modules/app/guild/mercs/disband.js
function P(e) {
	return A({
		subcmd2: "disband",
		merc_id: e
	});
}
// src/modules/app/guild/mercs/search.js
function F() {
	return A({ subcmd2: "search" });
}
// src/modules/notepad/mercs/Mercs.svelte
var I = a("<button class=\"custombutton svelte-prywca\" type=\"button\"> </button>"), L = a("<button class=\"custombutton svelte-prywca\" type=\"button\">Accept Offer</button> &nbsp; <button class=\"custombutton svelte-prywca\" type=\"button\">Decline Offer</button>", 1), ee = a("<div class=\"merc svelte-prywca\"><div><b> </b></div> <div><img alt=\"alt\" height=\"125\" width=\"125\"/></div> <div class=\"offer svelte-prywca\"><div class=\"svelte-prywca\">Hire Price:</div> <div class=\"svelte-prywca\"><b> </b> <img alt=\"Gold\" class=\"gold svelte-prywca\"/></div> <div class=\"svelte-prywca\">Hire Time:</div> <div class=\"svelte-prywca\"><b> </b> hour(s)</div> <div class=\"svelte-prywca\">Offer Time Left:</div> <div class=\"svelte-prywca\"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class=\"attribs svelte-prywca\"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>", 1), R = a("<div class=\"no-offer svelte-prywca\">Your expedition returned without finding any mercenaries.</div>"), z = a("<div class=\"active-merc svelte-prywca\"><div><b> </b></div> <div><img alt=\"alt\" class=\"tip-static\" height=\"125\" width=\"125\"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class=\"disband svelte-prywca\"><button class=\"custombutton svelte-prywca\" type=\"button\">Disband</button></div></div>"), B = a("<div class=\"no-active svelte-prywca\">[ no active mercenaries ]</div>"), V = a("<div class=\"merc-hunter svelte-prywca\"><div class=\"top-div svelte-prywca\">(<b> </b> available for hire)</div> <div class=\"button-div svelte-prywca\"><!></div> <div class=\"result-div svelte-prywca\"><div class=\"cols svelte-prywca\"><!> <!> <div class=\"auto-decline svelte-prywca\"></div></div></div> <div class=\"active-title svelte-prywca\"><b>Active Mercenaries</b></div> <div class=\"lower-div svelte-prywca\"><div class=\"active svelte-prywca\"><!></div></div></div>");
function H(a, o) {
	v(o, !0);
	let d = [
		"Normal",
		"Champion",
		"Elite",
		"Super Elite",
		"Titan",
		"Legendary"
	], A = [
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
	], H = b(o, "visible", 15, !0), U = g(1), W = g(0), G = g(0), K = g("?"), q = g("?"), J = g(h([]));
	function Y() {
		O("mercs", "close"), H(!1);
	}
	function X() {
		S(W, 0), S(G, 1), S(U, 0);
	}
	async function Z() {
		O("mercs", "doDecline"), S(U, 1), await N(), S(W, 0), S(U, 0);
	}
	function Q(t) {
		let n = Math.floor((t - e()) / 60), r = Math.floor(n / 60);
		return n %= 60, {
			hours: r,
			mins: n
		};
	}
	let $ = (e) => ({
		...e,
		...Q(e.expires)
	});
	async function te() {
		O("mercs", "doAccept"), S(U, 1);
		let e = await M();
		S(J, [...y(J), $({
			...y(W),
			expires: e.r.expires
		})], !0), S(K, e.r.mercs_available.toString(), !0), S(W, 0), S(U, 0);
	}
	function ne(e) {
		S(W, $(e.r), !0), S(U, 0);
	}
	async function re() {
		O("mercs", "getOffer"), S(U, 1), S(G, 0);
		let e = await F();
		e.r ? ne(e) : X();
	}
	async function ie(e) {
		O("mercs", "doDisband"), S(U, 1), await P(e), S(J, y(J).filter(({ id: t }) => t !== e), !0), S(U, 0);
	}
	async function ae() {
		let e = await j();
		S(J, e.r.mercs?.map($) || [], !0), S(K, e.r.mercs_available.toString(), !0), S(q, e.r.gold.toString(), !0), e.r.offer ? ne({ r: e.r.offer }) : S(U, 0);
	}
	ae(), D(a, {
		close: Y,
		get visible() {
			return H();
		},
		title: (e) => {
			w();
			var t = l("Merc Hunter");
			n(e, t);
		},
		children: (e, a) => {
			var o = V(), l = p(o), m = x(p(l)), h = _(m, !0);
			w(), E(l);
			var g = x(l, 2), v = p(g), b = (e) => {
				var t = I(), r = _(t);
				f(() => {
					t.disabled = y(U), c(r, `Send Expedition (${y(q) ?? ""}g)`);
				}), i("click", t, re), n(e, t);
			}, S = (e) => {
				var t = L(), r = C(t), a = x(r, 2);
				f(() => {
					r.disabled = y(U), a.disabled = y(U);
				}), i("click", r, te), i("click", a, Z), n(e, t);
			};
			r(v, (e) => {
				y(W) ? e(S, -1) : e(b);
			}), E(g);
			var D = x(g, 2), O = p(D), j = p(O), M = (e) => {
				var r = ee(), i = C(r), a = p(i), o = p(a), s = _(o, !0);
				E(a);
				var l = x(a, 2), u = _(l), m = x(l, 2), h = x(p(m), 2), g = p(h), v = _(g, !0), b = x(g, 2);
				E(h);
				var S = x(h, 4), D = p(S), O = _(D, !0);
				w(), E(S);
				var j = x(S, 4), M = p(j), N = _(M, !0), P = x(M, 2), F = _(P, !0);
				w(), E(j), E(m), E(i);
				var I = x(i, 2), L = x(p(I), 2), R = _(L, !0), z = x(L, 4), B = _(z, !0), V = x(z, 4), H = _(V, !0), U = x(V, 4), G = _(U, !0), K = x(U, 4), q = _(K, !0), J = x(K, 4), Y = _(J, !0), X = x(J, 4), Z = _(X, !0), Q = x(X, 4), $ = _(Q, !0);
				E(I), f((e) => {
					c(s, y(W).name), T(u, "src", `${t ?? ""}mercs/${y(W).id ?? ""}.png`), c(v, e), T(b, "src", `${t ?? ""}currency/0.png`), c(O, y(W).hire_time / 3600), c(N, y(W).hours), c(F, y(W).mins), c(R, y(W).level), c(B, A[y(W).class]), c(H, d[y(W).type]), c(G, y(W).attributes[0].value), c(q, y(W).attributes[1].value), c(Y, y(W).attributes[2].value), c(Z, y(W).attributes[3].value), c($, y(W).attributes[4].value);
				}, [() => k(y(W).gold)]), n(e, r);
			};
			r(j, (e) => {
				y(W) && e(M);
			});
			var N = x(j, 2), P = (e) => {
				var t = R();
				n(e, t);
			};
			r(N, (e) => {
				y(G) && e(P);
			}), w(2), E(O), E(D);
			var F = x(D, 4), H = p(F), Y = p(H), X = (e) => {
				var r = u(), a = C(r);
				s(a, 17, () => y(J), ({ attributes: e, class: t, id: n, level: r, name: i, type: a, hours: o, mins: s }) => n, (e, r) => {
					let a = () => y(r).attributes, o = () => y(r).class, s = () => y(r).id, l = () => y(r).level, u = () => y(r).name, m = () => y(r).type, h = () => y(r).hours, g = () => y(r).mins;
					var v = z(), b = p(v), S = p(b), C = _(S, !0);
					E(b);
					var D = x(b, 2), O = _(D), k = x(D, 4), j = p(k), M = _(j, !0), N = x(j, 2), P = _(N, !0);
					w(), E(k);
					var F = x(k, 2), I = _(F);
					E(v), f(() => {
						c(C, u()), T(O, "data-tipped", `<div style="column-gap: 2px; display: grid;
                    grid-template-columns: repeat(2, 1fr);">
                    <div>Name:</div><div>${u() ?? ""}</div>
                      <div>Level:</div><div>${l() ?? ""}</div>
                      <div>Classification:</div><div>${A[o()] ?? ""}</div>
                      <div>Type:</div><div>${d[m()] ?? ""}</div>
                      <div>Attack:</div><div>${a()[0].value ?? ""}</div>
                      <div>Defense:</div><div>${a()[1].value ?? ""}</div>
                      <div>Armor:</div><div>${a()[2].value ?? ""}</div>
                      <div>HP:</div><div>${a()[3].value ?? ""}</div>
                      <div>Damage:</div><div>${a()[4].value ?? ""}</div>
                      </div>`), T(O, "src", `${t ?? ""}mercs/${s() ?? ""}.png`), c(M, h()), c(P, g()), I.disabled = y(U);
					}), i("click", I, () => ie(s())), n(e, v);
				}), n(e, r);
			}, Q = (e) => {
				var t = B();
				n(e, t);
			};
			r(Y, (e) => {
				y(J).length ? e(X) : e(Q, -1);
			}), E(H), E(F), E(o), f(() => c(h, y(K))), n(e, o);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), m();
}
d(["click"]);
// src/modules/notepad/mercs/mountMercs.svelte.js
var U = h({ visible: !0 }), W = 0;
function G() {
	W ? U.visible = !0 : W = o(H, {
		props: U,
		target: document.body
	});
}
export { G as default };

//# sourceMappingURL=mountMercs.svelte-Cjor3nO5.js.map