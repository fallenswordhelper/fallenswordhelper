import { B as e, D as t, F as n, H as r, I as i, M as a, N as o, P as s, R as c, St as l, U as u, V as d, Z as f, _ as p, et as m, ft as h, lt as g, nt as _, pt as v, q as y, r as b, rt as x, st as S, tt as C, ut as ee, v as w, vt as T, yt as E } from "./disclose-version-Cj0Bwtvz.js";
import { t as D } from "./inventory-BG4i9XuW.js";
import { t as O } from "./calf-SqS2SeU4.js";
import { t as k } from "./dataObj-C5vpOZlx.js";
import { t as A } from "./getValue-vrUqpo0a.js";
import { t as j } from "./jsonParse-CTM1cd4F.js";
import { t as M } from "./createStyle-DG3VYLtp.js";
import { t as N } from "./clickThis-UHuK6eKQ.js";
import { t as P } from "./entries-PXiXtjwA.js";
import { t as F } from "./fromEntries-BytjDDMx.js";
import { t as te } from "./insertElement-6ZBKaryO.js";
import { t as I } from "./LinkBtn-DI1FRuvk.js";
import { t as ne } from "./numberIsNaN-DNn4rI1u.js";
import { t as re } from "./partial-Bo20zBni.js";
import { t as L } from "./querySelectorArray-C70U47NF.js";
import { t as R } from "./SelectInST-BktddaGR.js";
// src/modules/common/arrayfromList.js
function z(e) {
	return j(`[${e}]`);
}
// src/modules/common/QuickSelectClasses.svelte
var B = r("<div class=\"svelte-177lc40\">Select: <!> <!> <!> <!> How many:<input class=\"custominput svelte-177lc40\" type=\"text\"/></div> <div class=\"svelte-177lc40\"><!></div> <div class=\"svelte-177lc40\"><svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div>", 1), V = r("<p style=\"color: red\">Server Error</p>"), H = r("<p style=\"color: red\"> </p>");
function U(r, j) {
	v(j, !0);
	let U = b(j, "wantsTagged", 3, 0), W = g(null), G = g(null), K = g(null);
	S(W, "all");
	async function q() {
		let e = await D();
		e?.items && S(K, { items: F(e?.items.map((e) => [e.inv_id, e])) }, !0);
	}
	function J() {
		return z(A("sendClasses")) ?? z(k.sendClasses);
	}
	let Y = [
		[(e) => e === -1, () => !0],
		[(e) => e === -2, (e, [, t]) => t.type === 12],
		[(e) => e === -3, (e, [, t]) => t.guild_tag >= 0],
		[(e) => e === -99, (e, [, t]) => t?.craft === "Perfect"],
		[() => !0, (e, [, t]) => e === t?.item_id]
	];
	function ie() {
		L("[class$=\"-create-selected\"] div, .backpack-manage-selected .selectable-item").forEach(N);
	}
	function ae() {
		let e = parseInt(y(W), 10);
		return ne(e) && (e = P(y(K).items).length), O.subcmd === "createsecure" ? Math.min(100, e) : e;
	}
	let oe = (e) => [e, y(K).items[e.id.split("-").at(-1)]], se = ([, e]) => y(G) || !e.is_in_st, ce = ([e]) => e;
	function le(e, t) {
		let n = Number(e), [, r] = Y.find(([e]) => e(n));
		t.map(oe).filter(re(r, n)).filter(se).slice(0, ae()).map(ce).forEach(N);
	}
	function X(e) {
		let t = L(".selectable-item");
		t.length && (ie(), le(e, t));
	}
	function Z(e) {
		j.dispatchSelect(e), X(e);
	}
	function ue() {
		j.dispatchPerf(), X("-99");
	}
	let Q = ([, e]) => e.is_in_st, de = ([, e]) => `div[id$="-highlight-${e.inv_id}"]:not([class$="-create-selected"], .backpack-manage-selected) {
    background-color: rgba(255, 0, 0, 0.3);
  }`, fe = () => M(P(y(K).items).filter(Q).map(de).join("\n"));
	function pe(e) {
		y(K).items.fshHasST && te(e, fe());
	}
	var $ = d(), me = C($);
	i(me, q, null, (r) => {
		var i = d(), h = C(i), g = (r) => {
			var i = B(), d = C(i), h = x(m(d));
			I(h, {
				onclick: () => Z("-1"),
				children: (t, n) => {
					T();
					var r = u("All Items");
					e(t, r);
				},
				$$slots: { default: !0 }
			});
			var g = x(h, 2);
			I(g, {
				onclick: () => Z("-2"),
				children: (t, n) => {
					T();
					var r = u("All Resources");
					e(t, r);
				},
				$$slots: { default: !0 }
			});
			var _ = x(g, 2), v = (t) => {
				I(t, {
					onclick: () => Z("-3"),
					children: (t, n) => {
						T();
						var r = u("Guild Tagged");
						e(t, r);
					},
					$$slots: { default: !0 }
				});
			};
			n(_, (e) => {
				U() && e(v);
			});
			var b = x(_, 2);
			a(b, 17, J, o, (t, n) => {
				var r = ee(() => l(y(n), 2));
				let i = () => y(r)[0], a = () => y(r)[1];
				I(t, {
					onclick: () => Z(a()),
					children: (t, n) => {
						T();
						var r = u();
						f(() => c(r, i())), e(t, r);
					},
					$$slots: { default: !0 }
				});
			});
			var D = x(b, 2);
			w(D), E(d);
			var O = x(d, 2), k = m(O);
			R(k, {
				get dispatchToggle() {
					return j.dispatchToggle;
				},
				get inSt() {
					return y(G);
				},
				set inSt(e) {
					S(G, e, !0);
				}
			}), E(O), t(O, (e) => pe?.(e));
			var A = x(O, 2), M = m(A);
			s(M, () => ({ "--button-color": "blue" })), I(M.lastChild, {
				onclick: ue,
				children: (t, n) => {
					T();
					var r = u("Perfect");
					e(t, r);
				},
				$$slots: { default: !0 }
			}), E(M), E(A), p(D, () => y(W), (e) => S(W, e)), e(r, i);
		}, _ = (t) => {
			var n = V();
			e(t, n);
		};
		n(h, (e) => {
			y(K)?.items ? e(g) : e(_, -1);
		}), e(r, i);
	}, (t, n) => {
		var r = H(), i = _(r, !0);
		f(() => c(i, y(n).message)), e(t, r);
	}), e(r, $), h();
}
export { U as t };

//# sourceMappingURL=QuickSelectClasses-B84y8ap8.js.map