import { B as e, F as t, G as n, H as r, L as i, M as a, R as o, U as s, V as c, W as l, Z as u, et as d, ft as f, it as p, lt as m, nt as h, pt as g, q as _, r as v, rt as y, st as b, tt as x, vt as S, y as C, yt as w } from "./disclose-version-Cj0Bwtvz.js";
import { t as T } from "./sendEvent-Co2_qySS.js";
import { n as E, t as D } from "./view-WveloYqS.js";
import { t as O } from "./ModalTitled-Czm45j3-.js";
import { r as k } from "./now-B3pCBQja.js";
import { t as A } from "./addCommas-Bv8TEVoY.js";
import { t as j } from "./system-CNA0YLOa.js";
// src/modules/app/guild/mercs/accept.js
function M() {
	return E({ subcmd2: "acceptoffer" });
}
// src/modules/app/guild/mercs/decline.js
function N() {
	return E({ subcmd2: "declineoffer" });
}
// src/modules/app/guild/mercs/disband.js
function P(e) {
	return E({
		subcmd2: "disband",
		merc_id: e
	});
}
// src/modules/app/guild/mercs/search.js
function F() {
	return E({ subcmd2: "search" });
}
// src/modules/notepad/mercs/Mercs.svelte
var I = r("<button class=\"custombutton svelte-prywca\" type=\"button\"> </button>"), L = r("<button class=\"custombutton svelte-prywca\" type=\"button\">Accept Offer</button> &nbsp; <button class=\"custombutton svelte-prywca\" type=\"button\">Decline Offer</button>", 1), ee = r("<div class=\"merc svelte-prywca\"><div><b> </b></div> <div><img alt=\"alt\" height=\"125\" width=\"125\"/></div> <div class=\"offer svelte-prywca\"><div class=\"svelte-prywca\">Hire Price:</div> <div class=\"svelte-prywca\"><b> </b> <img alt=\"Gold\" class=\"gold svelte-prywca\"/></div> <div class=\"svelte-prywca\">Hire Time:</div> <div class=\"svelte-prywca\"><b> </b> hour(s)</div> <div class=\"svelte-prywca\">Offer Time Left:</div> <div class=\"svelte-prywca\"><b> </b> hour(s) <b> </b> min(s)</div></div></div> <div class=\"attribs svelte-prywca\"><div>Level:</div> <div> </div> <div>Classification:</div> <div> </div> <div>Type:</div> <div> </div> <div>Attack:</div> <div> </div> <div>Defense:</div> <div> </div> <div>Armor:</div> <div> </div> <div>HP:</div> <div> </div> <div>Damage:</div> <div> </div></div>", 1), R = r("<div class=\"no-offer svelte-prywca\">Your expedition returned without finding any mercenaries.</div>"), z = r("<div class=\"active-merc svelte-prywca\"><div><b> </b></div> <div><img alt=\"alt\" class=\"tip-static\" height=\"125\" width=\"125\"/></div> <div>Time Remaining</div> <div><b> </b> hour(s) <b> </b> min(s)</div> <div class=\"disband svelte-prywca\"><button class=\"custombutton svelte-prywca\" type=\"button\">Disband</button></div></div>"), B = r("<div class=\"no-active svelte-prywca\">[ no active mercenaries ]</div>"), V = r("<div class=\"merc-hunter svelte-prywca\"><div class=\"top-div svelte-prywca\">(<b> </b> available for hire)</div> <div class=\"button-div svelte-prywca\"><!></div> <div class=\"result-div svelte-prywca\"><div class=\"cols svelte-prywca\"><!> <!> <div class=\"auto-decline svelte-prywca\"></div></div></div> <div class=\"active-title svelte-prywca\"><b>Active Mercenaries</b></div> <div class=\"lower-div svelte-prywca\"><div class=\"active svelte-prywca\"><!></div></div></div>");
function H(r, i) {
	g(i, !0);
	let l = [
		"Normal",
		"Champion",
		"Elite",
		"Super Elite",
		"Titan",
		"Legendary"
	], E = [
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
	], H = v(i, "visible", 15, !0), U = m(1), W = m(0), G = m(0), K = m("?"), q = m("?"), J = m(p([]));
	function Y() {
		T("mercs", "close"), H(!1);
	}
	function X() {
		b(W, 0), b(G, 1), b(U, 0);
	}
	async function Z() {
		T("mercs", "doDecline"), b(U, 1), await N(), b(W, 0), b(U, 0);
	}
	function Q(e) {
		let t = Math.floor((e - k()) / 60), n = Math.floor(t / 60);
		return t %= 60, {
			hours: n,
			mins: t
		};
	}
	let $ = (e) => ({
		...e,
		...Q(e.expires)
	});
	async function te() {
		T("mercs", "doAccept"), b(U, 1);
		let e = await M();
		b(J, [..._(J), $({
			..._(W),
			expires: e.r.expires
		})], !0), b(K, e.r.mercs_available.toString(), !0), b(W, 0), b(U, 0);
	}
	function ne(e) {
		b(W, $(e.r), !0), b(U, 0);
	}
	async function re() {
		T("mercs", "getOffer"), b(U, 1), b(G, 0);
		let e = await F();
		e.r ? ne(e) : X();
	}
	async function ie(e) {
		T("mercs", "doDisband"), b(U, 1), await P(e), b(J, _(J).filter(({ id: t }) => t !== e), !0), b(U, 0);
	}
	async function ae() {
		let e = await D();
		b(J, e.r.mercs?.map($) || [], !0), b(K, e.r.mercs_available.toString(), !0), b(q, e.r.gold.toString(), !0), e.r.offer ? ne({ r: e.r.offer }) : b(U, 0);
	}
	ae(), O(r, {
		close: Y,
		get visible() {
			return H();
		},
		title: (t) => {
			S();
			var n = s("Merc Hunter");
			e(t, n);
		},
		children: (r, i) => {
			var s = V(), f = d(s), p = y(d(f)), m = h(p, !0);
			S(), w(f);
			var g = y(f, 2), v = d(g), b = (t) => {
				var r = I(), i = h(r);
				u(() => {
					r.disabled = _(U), o(i, `Send Expedition (${_(q) ?? ""}g)`);
				}), n("click", r, re), e(t, r);
			}, T = (t) => {
				var r = L(), i = x(r), a = y(i, 2);
				u(() => {
					i.disabled = _(U), a.disabled = _(U);
				}), n("click", i, te), n("click", a, Z), e(t, r);
			};
			t(v, (e) => {
				_(W) ? e(T, -1) : e(b);
			}), w(g);
			var D = y(g, 2), O = d(D), k = d(O), M = (t) => {
				var n = ee(), r = x(n), i = d(r), a = d(i), s = h(a, !0);
				w(i);
				var c = y(i, 2), f = h(c), p = y(c, 2), m = y(d(p), 2), g = d(m), v = h(g, !0), b = y(g, 2);
				w(m);
				var T = y(m, 4), D = d(T), O = h(D, !0);
				S(), w(T);
				var k = y(T, 4), M = d(k), N = h(M, !0), P = y(M, 2), F = h(P, !0);
				S(), w(k), w(p), w(r);
				var I = y(r, 2), L = y(d(I), 2), R = h(L, !0), z = y(L, 4), B = h(z, !0), V = y(z, 4), H = h(V, !0), U = y(V, 4), G = h(U, !0), K = y(U, 4), q = h(K, !0), J = y(K, 4), Y = h(J, !0), X = y(J, 4), Z = h(X, !0), Q = y(X, 4), $ = h(Q, !0);
				w(I), u((e) => {
					o(s, _(W).name), C(f, "src", `${j ?? ""}mercs/${_(W).id ?? ""}.png`), o(v, e), C(b, "src", `${j ?? ""}currency/0.png`), o(O, _(W).hire_time / 3600), o(N, _(W).hours), o(F, _(W).mins), o(R, _(W).level), o(B, E[_(W).class]), o(H, l[_(W).type]), o(G, _(W).attributes[0].value), o(q, _(W).attributes[1].value), o(Y, _(W).attributes[2].value), o(Z, _(W).attributes[3].value), o($, _(W).attributes[4].value);
				}, [() => A(_(W).gold)]), e(t, n);
			};
			t(k, (e) => {
				_(W) && e(M);
			});
			var N = y(k, 2), P = (t) => {
				var n = R();
				e(t, n);
			};
			t(N, (e) => {
				_(G) && e(P);
			}), S(2), w(O), w(D);
			var F = y(D, 4), H = d(F), Y = d(H), X = (t) => {
				var r = c(), i = x(r);
				a(i, 17, () => _(J), ({ attributes: e, class: t, id: n, level: r, name: i, type: a, hours: o, mins: s }) => n, (t, r) => {
					let i = () => _(r).attributes, a = () => _(r).class, s = () => _(r).id, c = () => _(r).level, f = () => _(r).name, p = () => _(r).type, m = () => _(r).hours, g = () => _(r).mins;
					var v = z(), b = d(v), x = d(b), T = h(x, !0);
					w(b);
					var D = y(b, 2), O = h(D), k = y(D, 4), A = d(k), M = h(A, !0), N = y(A, 2), P = h(N, !0);
					S(), w(k);
					var F = y(k, 2), I = h(F);
					w(v), u(() => {
						o(T, f()), C(O, "data-tipped", `<div style="column-gap: 2px; display: grid;
                    grid-template-columns: repeat(2, 1fr);">
                    <div>Name:</div><div>${f() ?? ""}</div>
                      <div>Level:</div><div>${c() ?? ""}</div>
                      <div>Classification:</div><div>${E[a()] ?? ""}</div>
                      <div>Type:</div><div>${l[p()] ?? ""}</div>
                      <div>Attack:</div><div>${i()[0].value ?? ""}</div>
                      <div>Defense:</div><div>${i()[1].value ?? ""}</div>
                      <div>Armor:</div><div>${i()[2].value ?? ""}</div>
                      <div>HP:</div><div>${i()[3].value ?? ""}</div>
                      <div>Damage:</div><div>${i()[4].value ?? ""}</div>
                      </div>`), C(O, "src", `${j ?? ""}mercs/${s() ?? ""}.png`), o(M, m()), o(P, g()), I.disabled = _(U);
					}), n("click", I, () => ie(s())), e(t, v);
				}), e(t, r);
			}, Q = (t) => {
				var n = B();
				e(t, n);
			};
			t(Y, (e) => {
				_(J).length ? e(X) : e(Q, -1);
			}), w(H), w(F), w(s), u(() => o(m, _(K))), e(r, s);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), f();
}
l(["click"]);
// src/modules/notepad/mercs/mountMercs.svelte.js
var U = p({ visible: !0 }), W = 0;
function G() {
	W ? U.visible = !0 : W = i(H, {
		props: U,
		target: document.body
	});
}
export { G as default };

//# sourceMappingURL=mountMercs.svelte-CvzcAw8f.js.map