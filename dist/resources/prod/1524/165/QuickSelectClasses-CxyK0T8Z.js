import { t as e } from "./dataObj-CHZygbS1.js";
import { t } from "./getValue-Aap0zlcO.js";
import { t as n } from "./jsonParse-CTM1cd4F.js";
import { t as r } from "./calf-SqS2SeU4.js";
import { B as i, D as a, F as o, H as s, I as c, M as l, N as u, P as d, R as f, St as p, U as m, V as h, Z as g, _, et as v, ft as y, lt as b, nt as x, pt as S, q as C, r as w, rt as T, st as E, tt as D, ut as O, v as ee, vt as k, yt as A } from "./disclose-version-gxrYovMN.js";
import { t as j } from "./partial-Bo20zBni.js";
import { t as M } from "./entries-PXiXtjwA.js";
import { t as N } from "./insertElement-6ZBKaryO.js";
import { t as P } from "./clickThis-UHuK6eKQ.js";
import { t as F } from "./querySelectorArray-C70U47NF.js";
import { t as te } from "./fromEntries-BytjDDMx.js";
import { t as ne } from "./numberIsNaN-DNn4rI1u.js";
import { t as I } from "./LinkBtn-IEOqMqOr.js";
import { t as L } from "./inventory-BxKMawFk.js";
import { t as R } from "./SelectInST-DpxRCIvp.js";
import { t as z } from "./createStyle-CbdGPpS5.js";
// src/modules/common/arrayfromList.js
function B(e) {
	return n(`[${e}]`);
}
// src/modules/common/QuickSelectClasses.svelte
var V = s("<div class=\"svelte-177lc40\">Select: <!> <!> <!> <!> How many:<input class=\"custominput svelte-177lc40\" type=\"text\"/></div> <div class=\"svelte-177lc40\"><!></div> <div class=\"svelte-177lc40\"><svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div>", 1), H = s("<p style=\"color: red\">Server Error</p>"), U = s("<p style=\"color: red\"> </p>");
function W(n, s) {
	S(s, !0);
	let W = w(s, "wantsTagged", 3, 0), G = b(null), K = b(null), q = b(null);
	E(G, "all");
	async function J() {
		let e = await L();
		e?.items && E(q, { items: te(e?.items.map((e) => [e.inv_id, e])) }, !0);
	}
	function Y() {
		return B(t("sendClasses")) ?? B(e.sendClasses);
	}
	let X = [
		[(e) => e === -1, () => !0],
		[(e) => e === -2, (e, [, t]) => t.type === 12],
		[(e) => e === -3, (e, [, t]) => t.guild_tag >= 0],
		[(e) => e === -99, (e, [, t]) => t?.craft === "Perfect"],
		[() => !0, (e, [, t]) => e === t?.item_id]
	];
	function re() {
		F("[class$=\"-create-selected\"] div").forEach(P);
	}
	function ie() {
		let e = parseInt(C(G), 10);
		return ne(e) && (e = M(C(q).items).length), r.subcmd === "createsecure" ? Math.min(100, e) : e;
	}
	let ae = (e) => [e, C(q).items[e.id.split("-").at(-1)]], oe = ([, e]) => C(K) || !e.is_in_st, se = ([e]) => e;
	function ce(e, t) {
		let n = Number(e), [, r] = X.find(([e]) => e(n));
		t.map(ae).filter(j(r, n)).filter(oe).slice(0, ie()).map(se).forEach(P);
	}
	function Z(e) {
		let t = F(".selectable-item");
		t.length && (re(), ce(e, t));
	}
	function Q(e) {
		s.dispatchSelect(e), Z(e);
	}
	function le() {
		s.dispatchPerf(), Z("-99");
	}
	let ue = ([, e]) => e.is_in_st, de = ([, e]) => `div[id$="-highlight-${e.inv_id}"]:not([class$="-create-selected"]) {
    background-color: rgba(255, 0, 0, 0.3);
  }`, fe = () => z(M(C(q).items).filter(ue).map(de).join("\n"));
	function pe(e) {
		C(q).items.fshHasST && N(e, fe());
	}
	var $ = h(), me = D($);
	c(me, J, null, (e) => {
		var t = h(), n = D(t), r = (e) => {
			var t = V(), n = D(t), r = T(v(n));
			I(r, {
				onclick: () => Q("-1"),
				children: (e, t) => {
					k();
					var n = m("All Items");
					i(e, n);
				},
				$$slots: { default: !0 }
			});
			var c = T(r, 2);
			I(c, {
				onclick: () => Q("-2"),
				children: (e, t) => {
					k();
					var n = m("All Resources");
					i(e, n);
				},
				$$slots: { default: !0 }
			});
			var h = T(c, 2), y = (e) => {
				I(e, {
					onclick: () => Q("-3"),
					children: (e, t) => {
						k();
						var n = m("Guild Tagged");
						i(e, n);
					},
					$$slots: { default: !0 }
				});
			};
			o(h, (e) => {
				W() && e(y);
			});
			var b = T(h, 2);
			l(b, 17, Y, u, (e, t) => {
				var n = O(() => p(C(t), 2));
				let r = () => C(n)[0], a = () => C(n)[1];
				I(e, {
					onclick: () => Q(a()),
					children: (e, t) => {
						k();
						var n = m();
						g(() => f(n, r())), i(e, n);
					},
					$$slots: { default: !0 }
				});
			});
			var x = T(b, 2);
			ee(x), A(n);
			var S = T(n, 2), w = v(S);
			R(w, {
				get dispatchToggle() {
					return s.dispatchToggle;
				},
				get inSt() {
					return C(K);
				},
				set inSt(e) {
					E(K, e, !0);
				}
			}), A(S), a(S, (e) => pe?.(e));
			var j = T(S, 2), M = v(j);
			d(M, () => ({ "--button-color": "blue" })), I(M.lastChild, {
				onclick: le,
				children: (e, t) => {
					k();
					var n = m("Perfect");
					i(e, n);
				},
				$$slots: { default: !0 }
			}), A(M), A(j), _(x, () => C(G), (e) => E(G, e)), i(e, t);
		}, c = (e) => {
			var t = H();
			i(e, t);
		};
		o(n, (e) => {
			C(q)?.items ? e(r) : e(c, -1);
		}), i(e, t);
	}, (e, t) => {
		var n = U(), r = x(n, !0);
		g(() => f(r, C(t).message)), i(e, n);
	}), i(n, $), y();
}
export { W as t };

//# sourceMappingURL=QuickSelectClasses-CxyK0T8Z.js.map