import { t as e } from "./getText-BybFkJV6.js";
import { t } from "./querySelector-8FH1hhUv.js";
import { $ as n, A as r, B as i, F as a, H as o, J as s, N as c, O as l, T as u, W as d, X as f, Y as p, _t as m, a as h, c as g, d as _, dt as v, et as y, f as b, j as x, p as S, r as C, u as w, ut as T, z as E } from "./disclose-version-Bvjv4_yw.js";
import { t as D } from "./sendEvent-DFQy5lFi.js";
import { t as O } from "./createDiv-CH3rNL4c.js";
import { t as k } from "./insertElement-C_6uFPNr.js";
import { t as A } from "./_dataAccess-Cm9xXxBc.js";
import { t as j } from "./aGenericFallback-hK73Fv-s.js";
import { t as M } from "./navigateTo-DSpjkQ0R.js";
import { t as N } from "./onclick-8ZwMJyqI.js";
import { t as P } from "./querySelectorArray-Bdj4peIm.js";
import { t as F } from "./Modal-CXwwyBF2.js";
import "./legacy-DUan0FaP.js";
import { t as I } from "./createInput-dXzC1oHv.js";
import { t as L } from "./buffmarket-CK0i6obF.js";
//#region src/modules/app/buffmarket/doAdd.js
function R(e) {
	return L({
		subcmd: "doadd",
		...e
	});
}
//#endregion
//#region src/modules/_dataAccess/daBuffMarketDoAdd.js
function z(e) {
	return j({
		cmd: "buffmarket",
		subcmd: "doadd",
		...e
	}, "Buff Package added!");
}
function B(e) {
	return A(R, z, e);
}
//#endregion
//#region src/modules/buffmarket/add/BigBuffPackages.svelte
var V = a("<div class=\"buff svelte-17vzwqd\"><label class=\"svelte-17vzwqd\"><input type=\"checkbox\" class=\"svelte-17vzwqd\"/> <img width=\"25\" height=\"25\" class=\"svelte-17vzwqd\"/> <span class=\"svelte-17vzwqd\"> </span></label></div>"), H = a("<div id=\"spinner\" class=\"svelte-17vzwqd\"></div>"), U = a("<div id=\"button-div\" class=\"svelte-17vzwqd\"><input type=\"button\" class=\"awesome green\" value=\"Create Buff Packages\" style=\"color: black;\"/> <input type=\"button\" value=\"Cancel\"/></div>"), W = a("<div id=\"error-message\" class=\"svelte-17vzwqd\"> </div>"), G = a("<p class=\"fshBold svelte-17vzwqd\">Create Bulk Buff Pacakges</p> <p class=\"svelte-17vzwqd\">Individual buff packages will be made for each selected skill using the same cost and number of casts.</p> <div id=\"input-table\" class=\"svelte-17vzwqd\"><label for=\"gold-cost\" class=\"svelte-17vzwqd\">Gold Cost</label> <input type=\"text\" name=\"gold-cost\" id=\"gold-cost\" class=\"svelte-17vzwqd\"/> <label for=\"point-cost\" class=\"svelte-17vzwqd\">Fallen Sword Point Cost</label> <input type=\"text\" name=\"point-cost\" id=\"point-cost\" class=\"svelte-17vzwqd\"/> <label for=\"casts\" class=\"svelte-17vzwqd\">Casts</label> <input type=\"text\" name=\"casts\" id=\"casts\" class=\"svelte-17vzwqd\"/></div> <p class=\"svelte-17vzwqd\">Selected buffs will be cast at their respective max levels.</p> <div style=\"columns: 4\"></div> <!> <!>", 1);
function K(e, t) {
	v(t, !1);
	let r = [], a = C(t, "buffList", 8), O = n(!0);
	function k() {
		y(O, !0);
	}
	let A = () => {
		y(R, ""), y(O, !1);
	}, j = n(), N = n(), P = n(), I = n([]), L = n(!1), R = n();
	function z(e) {
		return B({
			gold_cost: i(j),
			point_cost: i(N),
			casts: i(P),
			package_name: e.name,
			buff_type_0: e.value,
			buff_level_0: e.max_level
		});
	}
	async function K(e, t) {
		let n = await e;
		if (!n || n.s === !0) {
			let e = await z(t);
			return e?.s || y(R, e?.e?.message ?? "Server Error"), e;
		}
		return n;
	}
	async function q() {
		y(L, !0), y(R, ""), D("buffmarket", "bulkadd"), (await i(I).map((e) => a()[e]).reduce(K, Promise.resolve()))?.s ? M("https://www.fallensword.com/index.php?cmd=buffmarket&subcmd=manage&m=1") : y(L, !1);
	}
	var J = { show: k };
	return h(), F(e, {
		close: A,
		get visible() {
			return i(O);
		},
		children: (e, t) => {
			var n = G(), h = f(p(n), 4), g = f(s(h), 2);
			b(g);
			var v = f(g, 4);
			b(v);
			var C = f(v, 4);
			b(C), m(h);
			var T = f(h, 4);
			u(T, 7, a, (e) => e.value, (e, t, n) => {
				var a = V(), l = s(a), u = s(l);
				b(u);
				var p, h = f(u, 2), g = f(h, 2), _ = s(g, !0);
				m(g), m(l), m(a), d(() => {
					p !== (p = i(n)) && (u.value = (u.__value = i(n)) ?? ""), S(h, "src", `https://cdn2.fallensword.com/skills/${(i(t), o(() => i(t).value)) ?? ""}.png`), S(h, "alt", (i(t), o(() => i(t).name))), x(_, (i(t), o(() => i(t).name)));
				}), w(r, [], u, () => (i(n), i(I)), (e) => y(I, e)), c(e, a);
			}), m(T);
			var D = f(T, 2), O = (e) => {
				c(e, H());
			}, k = (e) => {
				var t = U(), n = s(t), r = f(n, 2);
				m(t), E("click", n, q), E("click", r, A), c(e, t);
			};
			l(D, (e) => {
				i(L) ? e(O) : e(k, -1);
			});
			var M = f(D, 2), F = (e) => {
				var t = W(), n = s(t, !0);
				m(t), d(() => x(n, i(R))), c(e, t);
			};
			l(M, (e) => {
				i(R) && e(F);
			}), _(g, () => i(j), (e) => y(j, e)), _(v, () => i(N), (e) => y(N, e)), _(C, () => i(P), (e) => y(P, e)), c(e, n);
		},
		$$slots: { default: !0 }
	}), g(t, "show", k), T(J);
}
//#endregion
//#region src/modules/buffmarket/add/injectBigBuffPacakges.js
var q = 0;
function J() {
	return P("select[name=buff_type_0] option").map((t) => {
		let n = e(t).match(/^(.+) \[Max (\d+)\]/);
		return {
			value: t.value,
			name: n[1],
			max_level: n[2]
		};
	});
}
function Y() {
	let e = t("#pCC form"), n = O({ className: "fshCenter" }), r = I({
		value: "Create Bulk Package",
		type: "button",
		className: "awesome large"
	});
	r.style.margin = "12px", N(r, X), k(n, r), e.after(" ", n);
}
function X() {
	return q ? q.show() : q = r(K, {
		target: t("body"),
		props: { buffList: J() }
	}), q;
}
function Z() {
	Y();
}
//#endregion
export { Z as default };

//# sourceMappingURL=injectBigBuffPacakges-Ds14FaQY.js.map