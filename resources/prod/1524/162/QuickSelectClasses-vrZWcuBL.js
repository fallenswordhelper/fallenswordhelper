import { t as e } from "./dataObj-Ce-YIkKa.js";
import { t } from "./getValue-CCThXEzy.js";
import { t as n } from "./jsonParse-CHQNrrub.js";
import { t as r } from "./calf-OM11NjAU.js";
import { B as i, D as a, E as ee, F as o, I as s, J as c, N as l, O as u, P as d, T as f, W as p, X as m, Y as h, _t as g, b as _, bt as v, d as te, dt as y, et as b, f as x, gt as S, j as C, k as w, nt as T, r as E, rt as D, ut as O } from "./disclose-version-CVZFuhb0.js";
import { t as k } from "./partial-goh6HOls.js";
import { t as A } from "./entries-BPLrbAVw.js";
import { t as j } from "./insertElement-DtUB7uKq.js";
import { t as M } from "./clickThis-CZdkFZtj.js";
import { t as N } from "./querySelectorArray-BZbNvND7.js";
import { t as ne } from "./fromEntries-Bc4U4usg.js";
import { t as re } from "./numberIsNaN-D2-MBtSw.js";
import { t as P } from "./LinkBtn-BGsXfdDi.js";
import { t as F } from "./inventory-DgY8Lj8t.js";
import { t as I } from "./SelectInST-B7dJQZbj.js";
import { t as L } from "./createStyle-tF7Gye70.js";
//#region src/modules/common/arrayfromList.js
function R(e) {
	return n(`[${e}]`);
}
//#endregion
//#region src/modules/common/QuickSelectClasses.svelte
var z = o("<div class=\"svelte-177lc40\">Select: <!> <!> <!> <!> How many:<input class=\"custominput svelte-177lc40\" type=\"text\"/></div> <div class=\"svelte-177lc40\"><!></div> <div class=\"svelte-177lc40\"><svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper></div>", 1), B = o("<p style=\"color: red\">Server Error</p>"), V = o("<p style=\"color: red\"> </p>");
function H(n, o) {
	y(o, !0);
	let H = E(o, "wantsTagged", 3, 0), U = T(null), W = T(null), G = T(null);
	b(U, "all");
	async function K() {
		let e = await F();
		e?.items && b(G, { items: ne(e?.items.map((e) => [e.inv_id, e])) }, !0);
	}
	function q() {
		return R(t("sendClasses")) ?? R(e.sendClasses);
	}
	let J = [
		[(e) => e === -1, () => !0],
		[(e) => e === -2, (e, [, t]) => t.type === 12],
		[(e) => e === -3, (e, [, t]) => t.guild_tag >= 0],
		[(e) => e === -99, (e, [, t]) => t?.craft === "Perfect"],
		[() => !0, (e, [, t]) => e === t?.item_id]
	];
	function Y() {
		N("[class$=\"-create-selected\"] div").forEach(M);
	}
	function ie() {
		let e = parseInt(i(U), 10);
		return re(e) && (e = A(i(G).items).length), r.subcmd === "createsecure" ? Math.min(100, e) : e;
	}
	let ae = (e) => [e, i(G).items[e.id.split("-").at(-1)]], oe = ([, e]) => i(W) || !e.is_in_st, se = ([e]) => e;
	function ce(e, t) {
		let n = Number(e), [, r] = J.find(([e]) => e(n));
		t.map(ae).filter(k(r, n)).filter(oe).slice(0, ie()).map(se).forEach(M);
	}
	function X(e) {
		let t = N(".selectable-item");
		t.length && (Y(), ce(e, t));
	}
	function Z(e) {
		o.dispatchSelect(e), X(e);
	}
	function le() {
		o.dispatchPerf(), X("-99");
	}
	let ue = ([, e]) => e.is_in_st, Q = ([, e]) => `div[id$="-highlight-${e.inv_id}"]:not([class$="-create-selected"]) {
    background-color: rgba(255, 0, 0, 0.3);
  }`, de = () => L(A(i(G).items).filter(ue).map(Q).join("\n"));
	function fe(e) {
		i(G).items.fshHasST && j(e, de());
	}
	var $ = d();
	w(h($), K, null, (e) => {
		var t = d(), n = h(t), r = (e) => {
			var t = z(), n = h(t), r = m(c(n));
			P(r, {
				onclick: () => Z("-1"),
				children: (e, t) => {
					S(), l(e, s("All Items"));
				},
				$$slots: { default: !0 }
			});
			var d = m(r, 2);
			P(d, {
				onclick: () => Z("-2"),
				children: (e, t) => {
					S(), l(e, s("All Resources"));
				},
				$$slots: { default: !0 }
			});
			var y = m(d, 2), w = (e) => {
				P(e, {
					onclick: () => Z("-3"),
					children: (e, t) => {
						S(), l(e, s("Guild Tagged"));
					},
					$$slots: { default: !0 }
				});
			};
			u(y, (e) => {
				H() && e(w);
			});
			var T = m(y, 2);
			f(T, 17, q, ee, (e, t) => {
				var n = D(() => v(i(t), 2));
				let r = () => i(n)[0], a = () => i(n)[1];
				P(e, {
					onclick: () => Z(a()),
					children: (e, t) => {
						S();
						var n = s();
						p(() => C(n, r())), l(e, n);
					},
					$$slots: { default: !0 }
				});
			});
			var E = m(T, 2);
			x(E), g(n);
			var O = m(n, 2);
			I(c(O), {
				get dispatchToggle() {
					return o.dispatchToggle;
				},
				get inSt() {
					return i(W);
				},
				set inSt(e) {
					b(W, e, !0);
				}
			}), g(O), _(O, (e) => fe?.(e));
			var k = m(O, 2), A = c(k);
			a(A, () => ({ "--button-color": "blue" })), P(A.lastChild, {
				onclick: le,
				children: (e, t) => {
					S(), l(e, s("Perfect"));
				},
				$$slots: { default: !0 }
			}), g(A), g(k), te(E, () => i(U), (e) => b(U, e)), l(e, t);
		}, y = (e) => {
			l(e, B());
		};
		u(n, (e) => {
			i(G)?.items ? e(r) : e(y, -1);
		}), l(e, t);
	}, (e, t) => {
		var n = V(), r = c(n, !0);
		g(n), p(() => C(r, i(t).message)), l(e, n);
	}), l(n, $), O();
}
//#endregion
export { H as t };

//# sourceMappingURL=QuickSelectClasses-vrZWcuBL.js.map