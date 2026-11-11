import { t as e } from "./createInput-x6h3QT7P.js";
import { t } from "./createDiv-B84RqGfo.js";
import { t as n } from "./querySelector-C6ReNysW.js";
import { t as r } from "./querySelectorArray-C70U47NF.js";
import { t as i } from "./onclick-nv-Fl1th.js";
import { t as a } from "./getText-BqjgTHLv.js";
import { t as o } from "./insertElement-6ZBKaryO.js";
import { B as s, F as c, H as l, K as u, L as d, M as f, R as p, Y as m, Z as h, _ as g, d as _, et as v, ft as y, g as b, m as x, nt as S, ot as C, pt as w, q as T, r as E, rt as D, st as O, tt as k, v as A, y as j, yt as M } from "./disclose-version-Cj0Bwtvz.js";
import "./calfSystem-oFfthDb1.js";
import { t as N } from "./sendEvent-DdWrU3DL.js";
import { t as P } from "./Modal-BNtBeZyQ.js";
import { t as F } from "./buffmarket-CtSovNfq.js";
import { t as I } from "./_dataAccess-BLVLQyDJ.js";
import { t as L } from "./aGenericFallback-6foHv24I.js";
import { t as R } from "./navigateTo-CS33u2a7.js";
// src/modules/app/buffmarket/doAdd.js
function z(e) {
	return F({
		subcmd: "doadd",
		...e
	});
}
// src/modules/_dataAccess/daBuffMarketDoAdd.js
function B(e) {
	return L({
		cmd: "buffmarket",
		subcmd: "doadd",
		...e
	}, "Buff Package added!");
}
function V(e) {
	return I(z, B, e);
}
// src/modules/buffmarket/add/BigBuffPackages.svelte
var H = l("<div class=\"buff svelte-17vzwqd\"><label class=\"svelte-17vzwqd\"><input type=\"checkbox\" class=\"svelte-17vzwqd\"/> <img width=\"25\" height=\"25\" class=\"svelte-17vzwqd\"/> <span class=\"svelte-17vzwqd\"> </span></label></div>"), U = l("<div id=\"spinner\" class=\"svelte-17vzwqd\"></div>"), W = l("<div id=\"button-div\" class=\"svelte-17vzwqd\"><input type=\"button\" class=\"awesome green\" value=\"Create Buff Packages\" style=\"color: black;\"/> <input type=\"button\" value=\"Cancel\"/></div>"), G = l("<div id=\"error-message\" class=\"svelte-17vzwqd\"> </div>"), K = l("<p class=\"fshBold svelte-17vzwqd\">Create Bulk Buff Pacakges</p> <p class=\"svelte-17vzwqd\">Individual buff packages will be made for each selected skill using the same\n    cost and number of casts.</p> <div id=\"input-table\" class=\"svelte-17vzwqd\"><label for=\"gold-cost\" class=\"svelte-17vzwqd\">Gold Cost</label> <input type=\"text\" name=\"gold-cost\" id=\"gold-cost\" class=\"svelte-17vzwqd\"/> <label for=\"point-cost\" class=\"svelte-17vzwqd\">Fallen Sword Point Cost</label> <input type=\"text\" name=\"point-cost\" id=\"point-cost\" class=\"svelte-17vzwqd\"/> <label for=\"casts\" class=\"svelte-17vzwqd\">Casts</label> <input type=\"text\" name=\"casts\" id=\"casts\" class=\"svelte-17vzwqd\"/></div> <p class=\"svelte-17vzwqd\">Selected buffs will be cast at their respective max levels.</p> <div style=\"columns: 4\"></div> <!> <!>", 1);
function q(e, t) {
	w(t, !1);
	let n = [], r = E(t, "buffList", 8), i = C(!0);
	function a() {
		O(i, !0);
	}
	let o = () => {
		O(z, ""), O(i, !1);
	}, l = C(), d = C(), F = C(), I = C([]), L = C(!1), z = C();
	function B(e) {
		return V({
			gold_cost: T(l),
			point_cost: T(d),
			casts: T(F),
			package_name: e.name,
			buff_type_0: e.value,
			buff_level_0: e.max_level
		});
	}
	async function q(e, t) {
		let n = await e;
		if (!n || n.s === !0) {
			let e = await B(t);
			return e?.s || O(z, e?.e?.message ?? "Server Error"), e;
		}
		return n;
	}
	async function J() {
		O(L, !0), O(z, ""), N("buffmarket", "bulkadd"), (await T(I).map((e) => r()[e]).reduce(q, Promise.resolve()))?.s ? R("https://www.fallensword.com/index.php?cmd=buffmarket&subcmd=manage&m=1") : O(L, !1);
	}
	var Y = { show: a };
	return _(), P(e, {
		close: o,
		get visible() {
			return T(i);
		},
		children: (e, t) => {
			var i = K(), a = D(k(i), 4), _ = D(v(a), 2);
			A(_);
			var y = D(_, 4);
			A(y);
			var x = D(y, 4);
			A(x), M(a);
			var C = D(a, 4);
			f(C, 7, r, (e) => e.value, (e, t, r) => {
				var i = H(), a = v(i), o = v(a);
				A(o);
				var c, l = D(o, 2), u = D(l, 2), d = S(u, !0);
				M(a), M(i), h(() => {
					c !== (c = T(r)) && (o.value = (o.__value = c) ?? ""), j(l, "src", `https://cdn2.fallensword.com/skills/${T(t), m(() => T(t).value) ?? ""}.png`), j(l, "alt", (T(t), m(() => T(t).name))), p(d, (T(t), m(() => T(t).name)));
				}), b(n, [], o, () => (T(r), T(I)), (e) => O(I, e)), s(e, i);
			}), M(C);
			var w = D(C, 2), E = (e) => {
				var t = U();
				s(e, t);
			}, N = (e) => {
				var t = W(), n = v(t), r = D(n, 2);
				M(t), u("click", n, J), u("click", r, o), s(e, t);
			};
			c(w, (e) => {
				T(L) ? e(E) : e(N, -1);
			});
			var P = D(w, 2), R = (e) => {
				var t = G(), n = S(t, !0);
				h(() => p(n, T(z))), s(e, t);
			};
			c(P, (e) => {
				T(z) && e(R);
			}), g(_, () => T(l), (e) => O(l, e)), g(y, () => T(d), (e) => O(d, e)), g(x, () => T(F), (e) => O(F, e)), s(e, i);
		},
		$$slots: { default: !0 }
	}), x(t, "show", a), y(Y);
}
// src/modules/buffmarket/add/injectBigBuffPacakges.js
var J = 0;
function Y() {
	return r("select[name=buff_type_0] option").map((e) => {
		let t = a(e).match(/^(.+) \[Max (\d+)\]/);
		return {
			value: e.value,
			name: t[1],
			max_level: t[2]
		};
	});
}
function X() {
	let r = n("#pCC form"), a = t({ className: "fshCenter" }), s = e({
		value: "Create Bulk Package",
		type: "button",
		className: "awesome large"
	});
	s.style.margin = "12px", i(s, Z), o(a, s), r.after(" ", a);
}
function Z() {
	return J ? J.show() : J = d(q, {
		target: n("body"),
		props: { buffList: Y() }
	}), J;
}
function Q() {
	X();
}
export { Q as default };

//# sourceMappingURL=injectBigBuffPacakges-JZXzTVmG.js.map