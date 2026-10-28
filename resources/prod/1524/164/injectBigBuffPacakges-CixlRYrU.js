import "./calfSystem-C11day6U.js";
import { t as e } from "./getText-BqjgTHLv.js";
import { t } from "./querySelector-C6ReNysW.js";
import { B as n, F as r, H as i, K as a, L as o, M as s, R as c, Y as l, Z as u, _ as d, d as f, et as p, ft as m, g as h, m as g, nt as _, ot as v, pt as y, q as b, r as x, rt as S, st as C, tt as w, v as T, y as E, yt as D } from "./disclose-version-gxrYovMN.js";
import { t as O } from "./sendEvent-DkxfZozg.js";
import { t as k } from "./createDiv-XU2XBEIv.js";
import { t as A } from "./insertElement-6ZBKaryO.js";
import { t as j } from "./_dataAccess-BLVLQyDJ.js";
import { t as M } from "./aGenericFallback-C6VAMq13.js";
import { t as N } from "./navigateTo-CS33u2a7.js";
import { t as P } from "./onclick-nv-Fl1th.js";
import { t as F } from "./querySelectorArray-C70U47NF.js";
import { t as I } from "./Modal-C8pcYvaS.js";
import { t as L } from "./createInput-DPgk9mYC.js";
import { t as R } from "./buffmarket-BS-yFB7t.js";
// src/modules/app/buffmarket/doAdd.js
function z(e) {
	return R({
		subcmd: "doadd",
		...e
	});
}
// src/modules/_dataAccess/daBuffMarketDoAdd.js
function B(e) {
	return M({
		cmd: "buffmarket",
		subcmd: "doadd",
		...e
	}, "Buff Package added!");
}
function V(e) {
	return j(z, B, e);
}
// src/modules/buffmarket/add/BigBuffPackages.svelte
var H = i("<div class=\"buff svelte-17vzwqd\"><label class=\"svelte-17vzwqd\"><input type=\"checkbox\" class=\"svelte-17vzwqd\"/> <img width=\"25\" height=\"25\" class=\"svelte-17vzwqd\"/> <span class=\"svelte-17vzwqd\"> </span></label></div>"), U = i("<div id=\"spinner\" class=\"svelte-17vzwqd\"></div>"), W = i("<div id=\"button-div\" class=\"svelte-17vzwqd\"><input type=\"button\" class=\"awesome green\" value=\"Create Buff Packages\" style=\"color: black;\"/> <input type=\"button\" value=\"Cancel\"/></div>"), G = i("<div id=\"error-message\" class=\"svelte-17vzwqd\"> </div>"), K = i("<p class=\"fshBold svelte-17vzwqd\">Create Bulk Buff Pacakges</p> <p class=\"svelte-17vzwqd\">Individual buff packages will be made for each selected skill using the same\n    cost and number of casts.</p> <div id=\"input-table\" class=\"svelte-17vzwqd\"><label for=\"gold-cost\" class=\"svelte-17vzwqd\">Gold Cost</label> <input type=\"text\" name=\"gold-cost\" id=\"gold-cost\" class=\"svelte-17vzwqd\"/> <label for=\"point-cost\" class=\"svelte-17vzwqd\">Fallen Sword Point Cost</label> <input type=\"text\" name=\"point-cost\" id=\"point-cost\" class=\"svelte-17vzwqd\"/> <label for=\"casts\" class=\"svelte-17vzwqd\">Casts</label> <input type=\"text\" name=\"casts\" id=\"casts\" class=\"svelte-17vzwqd\"/></div> <p class=\"svelte-17vzwqd\">Selected buffs will be cast at their respective max levels.</p> <div style=\"columns: 4\"></div> <!> <!>", 1);
function q(e, t) {
	y(t, !1);
	let i = [], o = x(t, "buffList", 8), k = v(!0);
	function A() {
		C(k, !0);
	}
	let j = () => {
		C(z, ""), C(k, !1);
	}, M = v(), P = v(), F = v(), L = v([]), R = v(!1), z = v();
	function B(e) {
		return V({
			gold_cost: b(M),
			point_cost: b(P),
			casts: b(F),
			package_name: e.name,
			buff_type_0: e.value,
			buff_level_0: e.max_level
		});
	}
	async function q(e, t) {
		let n = await e;
		if (!n || n.s === !0) {
			let e = await B(t);
			return e?.s || C(z, e?.e?.message ?? "Server Error"), e;
		}
		return n;
	}
	async function J() {
		C(R, !0), C(z, ""), O("buffmarket", "bulkadd"), (await b(L).map((e) => o()[e]).reduce(q, Promise.resolve()))?.s ? N("https://www.fallensword.com/index.php?cmd=buffmarket&subcmd=manage&m=1") : C(R, !1);
	}
	var Y = { show: A };
	return f(), I(e, {
		close: j,
		get visible() {
			return b(k);
		},
		children: (e, t) => {
			var f = K(), m = S(w(f), 4), g = S(p(m), 2);
			T(g);
			var v = S(g, 4);
			T(v);
			var y = S(v, 4);
			T(y), D(m);
			var x = S(m, 4);
			s(x, 7, o, (e) => e.value, (e, t, r) => {
				var a = H(), o = p(a), s = p(o);
				T(s);
				var d, f = S(s, 2), m = S(f, 2), g = _(m, !0);
				D(o), D(a), u(() => {
					d !== (d = b(r)) && (s.value = (s.__value = d) ?? ""), E(f, "src", `https://cdn2.fallensword.com/skills/${b(t), l(() => b(t).value) ?? ""}.png`), E(f, "alt", (b(t), l(() => b(t).name))), c(g, (b(t), l(() => b(t).name)));
				}), h(i, [], s, () => (b(r), b(L)), (e) => C(L, e)), n(e, a);
			}), D(x);
			var O = S(x, 2), k = (e) => {
				var t = U();
				n(e, t);
			}, A = (e) => {
				var t = W(), r = p(t), i = S(r, 2);
				D(t), a("click", r, J), a("click", i, j), n(e, t);
			};
			r(O, (e) => {
				b(R) ? e(k) : e(A, -1);
			});
			var N = S(O, 2), I = (e) => {
				var t = G(), r = _(t, !0);
				u(() => c(r, b(z))), n(e, t);
			};
			r(N, (e) => {
				b(z) && e(I);
			}), d(g, () => b(M), (e) => C(M, e)), d(v, () => b(P), (e) => C(P, e)), d(y, () => b(F), (e) => C(F, e)), n(e, f);
		},
		$$slots: { default: !0 }
	}), g(t, "show", A), m(Y);
}
// src/modules/buffmarket/add/injectBigBuffPacakges.js
var J = 0;
function Y() {
	return F("select[name=buff_type_0] option").map((t) => {
		let n = e(t).match(/^(.+) \[Max (\d+)\]/);
		return {
			value: t.value,
			name: n[1],
			max_level: n[2]
		};
	});
}
function X() {
	let e = t("#pCC form"), n = k({ className: "fshCenter" }), r = L({
		value: "Create Bulk Package",
		type: "button",
		className: "awesome large"
	});
	r.style.margin = "12px", P(r, Z), A(n, r), e.after(" ", n);
}
function Z() {
	return J ? J.show() : J = o(q, {
		target: t("body"),
		props: { buffList: Y() }
	}), J;
}
function Q() {
	X();
}
export { Q as default };

//# sourceMappingURL=injectBigBuffPacakges-CixlRYrU.js.map