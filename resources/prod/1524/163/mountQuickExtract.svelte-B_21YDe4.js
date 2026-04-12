import { r as e } from "./sendException-ezSEAahU.js";
import { t } from "./system-DeHfCtq2.js";
import { m as n } from "./constants-CIKidKvt.js";
import { t as r } from "./getValue-j5JjE6f3.js";
import { t as i } from "./setValue-31jE_mRr.js";
import { t as a } from "./isArray-FpVoUujB.js";
import { A as o, B as s, E as c, F as l, G as u, I as d, J as f, L as p, N as m, O as h, P as g, R as _, T as v, W as y, X as b, Y as x, Z as S, _ as C, _t as w, dt as T, et as E, f as D, gt as O, j as k, k as A, l as j, nt as M, p as N, r as P, rt as ee, ut as F, v as I } from "./disclose-version-Bvjv4_yw.js";
import { t as L } from "./ModalTitled-Ksl_tZBv.js";
import { t as R } from "./sendEvent-DFQy5lFi.js";
import { t as te } from "./alpha-Dzfd-64M.js";
import { t as z } from "./uniq-BIFd13I0.js";
import { t as ne } from "./confirm.svelte-D_ae9rxv.js";
import { t as re } from "./all-Csir9X7x.js";
import { t as ie } from "./LinkBtn-lhxAFeIb.js";
import { t as ae } from "./LinkBtnBracketed-gMsPs3Lo.js";
import { t as oe } from "./daUseItem-CgmzU7AU.js";
import { t as se } from "./inventory-xTOYFfMN.js";
import { t as ce } from "./SelectInST-DAJkjXd-.js";
//#region src/modules/notepad/quickExtract/processResult.js
function B(e) {
	return `${e.amount} x ${n[e.type]}`;
}
var V = [
	[(e) => e.components?.length, (e) => `You successfully extracted 1 '${e.components?.[0].n}' component(s) from 1 resource(s).`],
	[(e) => e.frags, (e) => `You gained ${e.frags.map(B).join(", ")} Fragments by opening the Fragment Stash.`],
	[(e) => e.mailbox_items?.length, (e) => `You received 1 x '${e.mailbox_items?.[0].n}' from the container.`],
	[() => 1, () => "<You failed to extract any components from resource(s)."]
];
function H(e) {
	return V.find(([t]) => t(e))[1](e);
}
//#endregion
//#region src/modules/notepad/quickExtract/rollupExtractable.js
var U = (e, t, n) => `fetchitem.php?item_id=${t}&inv_id=${n}&t=1&p=${e}`, W = (e) => `background-image: url(${t}items/${e}.gif)`;
function le(e, t) {
	return z(t, "item_name").map((n) => ({
		...n,
		count: t.filter((e) => e.item_name === n.item_name).length,
		delPending: !1,
		extractIds: t.filter((e) => e.item_name === n.item_name).map((e) => e.inv_id),
		style: W(n.item_id),
		tip: U(e, n.item_id, n.inv_id)
	}));
}
//#endregion
//#region src/modules/notepad/quickExtract/QuickExtract.svelte
var ue = l("<span class=\"fshRed\"> </span>"), de = l("<li class=\"svelte-13gbaa4\"><!></li>"), fe = l("<span class=\"fshSpinner fshSpinner12\"></span>"), pe = l("<tr><td><!></td><td class=\"imgCol svelte-13gbaa4\"><span class=\"imgSpan tip-dynamic svelte-13gbaa4\"></span></td><td> </td></tr>"), me = l("<tr><td colspan=\"3\"><p style=\"color: red\"> </p></td></tr>"), he = l("<div class=\"svelte-13gbaa4\">Select which type of plants you wish to extract all of. Only select\n    extractable resources. <br/> <!>&nbsp; <label><input type=\"checkbox\" class=\"svelte-13gbaa4\"/> Main Folder Only</label>&nbsp; <label><input type=\"checkbox\" class=\"svelte-13gbaa4\"/> Disable Prompts</label>&nbsp; <!> <br/> <table class=\"svelte-13gbaa4\"><thead><tr><th class=\"actionCol svelte-13gbaa4\">Actions</th><th colspan=\"2\">Items</th></tr></thead><tbody><tr><td colspan=\"3\"><ol></ol></td></tr><!></tbody></table></div>");
function G(e, t) {
	T(t, !0);
	let n = P(t, "visible", 15, !0), o = "selectMain", l = "disableQuickExtractPrompts", p = M(null), z = null, B = M(null), V = M(S(r(o))), U = M(S(r(l))), W = null, G = M(null), K = M(S([])), q = (e) => e.item_name === "Zombie Coffin" || e.type === 12 || e.type === 16, J = (e, t) => te(e.item_name, t.item_name), Y = (e) => s(B) || !e.is_in_st, ge = (e) => !s(V) || e.folder_id === -1;
	function _e() {
		R("quickExtract", "close"), n(!1);
	}
	function X() {
		E(G, a(W) && le(z, W.filter(Y).filter(ge)), !0);
	}
	function ve() {
		R("quickExtract", "toggleSelectST"), X();
	}
	function Z() {
		R("quickExtract", "toggleSelectMain"), i(o, s(V)), X();
	}
	function ye() {
		R("quickExtract", "togglePrompts"), i(l, s(U));
	}
	async function Q() {
		let e = await se();
		z = e?.player_id, W = e?.items?.filter(q).sort(J), X();
	}
	function be() {
		R("quickExtract", "refresh"), E(K, [], !0), E(p, Q(), !0);
	}
	u(() => {
		n() && (E(K, [], !0), E(p, Q(), !0));
	});
	let $;
	function xe(e) {
		return !e?.s && $ !== e?.e?.message && ($ = e?.e?.message, E(K, [...s(K), e?.e?.message], !0)), e?.s;
	}
	async function Se(e) {
		let t = await oe(e);
		xe(t) && (E(K, [...s(K), H(t.r)], !0), W = W.filter((t) => t.inv_id !== e));
	}
	async function Ce(e) {
		R("quickExtract", "extract", s(U)), (s(U) || await ne("Are you sure you want to extract all similar items?")) && (s(G)[e].delPending = !0, await re(s(G)[e].extractIds.map(Se)), s(G)[e]?.count && (s(G)[e].count = 0));
	}
	L(e, {
		close: _e,
		get visible() {
			return n();
		},
		title: (e) => {
			O(), m(e, d("Quick Extract"));
		},
		children: (e, t) => {
			var n = he(), r = b(f(n), 3);
			ce(r, {
				dispatchToggle: ve,
				get inSt() {
					return s(B);
				},
				set inSt(e) {
					E(B, e, !0);
				}
			});
			var i = b(r, 2), a = f(i);
			D(a), O(), w(i);
			var o = b(i, 2), l = f(o);
			D(l), O(), w(o);
			var u = b(o, 2);
			ae(u, {
				onclick: be,
				children: (e, t) => {
					O(), m(e, d("Refresh"));
				},
				$$slots: { default: !0 }
			});
			var S = b(u, 4), T = b(f(S)), M = f(T), P = f(M), F = f(P);
			v(F, 21, () => s(K), c, (e, t) => {
				var n = de(), r = f(n), i = (e) => {
					var n = ue(), r = f(n, !0);
					w(n), y((e) => k(r, e), [() => s(t).slice(1)]), m(e, n);
				}, a = ee(() => s(t).startsWith("<")), o = (e) => {
					var n = d();
					y(() => k(n, s(t))), m(e, n);
				};
				h(r, (e) => {
					s(a) ? e(i) : e(o, -1);
				}), w(n), m(e, n);
			}), w(F), w(P), w(M), A(b(M), () => s(p), null, (e) => {
				var t = g();
				v(x(t), 17, () => s(G), c, (e, t, n) => {
					let r = () => s(t).count, i = () => s(t).delPending, a = () => s(t).item_name, o = () => s(t).style, c = () => s(t).tip;
					var l = pe(), u = f(l);
					let p;
					var _ = f(u), v = (e) => {
						var t = g(), a = x(t), o = (e) => {
							m(e, fe());
						}, s = (e) => {
							ie(e, {
								onclick: () => Ce(n),
								children: (e, t) => {
									O();
									var n = d();
									y(() => k(n, `Extract ${r() ?? ""}`)), m(e, n);
								},
								$$slots: { default: !0 }
							});
						};
						h(a, (e) => {
							i() ? e(o) : e(s, -1);
						}), m(e, t);
					}, S = (e) => {
						m(e, d("Done"));
					};
					h(_, (e) => {
						r() ? e(v) : e(S, -1);
					}), w(u);
					var T = b(u), E = f(T);
					w(T);
					var D = b(T), A = f(D, !0);
					w(D), w(l), y(() => {
						p = I(u, 1, "svelte-13gbaa4", null, p, { delPending: i() }), N(E, "data-tipped", c()), C(E, o()), k(A, a());
					}), m(e, l);
				}), m(e, t);
			}, (e, t) => {
				var n = me(), r = f(n), i = f(r), a = f(i, !0);
				w(i), w(r), w(n), y(() => k(a, s(t).message)), m(e, n);
			}), w(T), w(S), w(n), _("change", a, Z), j(a, () => s(V), (e) => E(V, e)), _("change", l, ye), j(l, () => s(U), (e) => E(U, e)), m(e, n);
		},
		$$slots: {
			title: !0,
			default: !0
		}
	}), F();
}
p(["change"]);
//#endregion
//#region src/modules/notepad/quickExtract/mountQuickExtract.svelte.js
var K = /* @__PURE__ */ e({ default: () => Y }), q = S({ visible: !0 }), J = 0;
function Y() {
	J ? q.visible = !0 : J = o(G, {
		props: q,
		target: document.body
	});
}
//#endregion
export { K as t };

//# sourceMappingURL=mountQuickExtract.svelte-B_21YDe4.js.map