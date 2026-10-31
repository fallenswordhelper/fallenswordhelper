import "./calfSystem-CH6jB11R.js";
import { t as e } from "./system-CNA0YLOa.js";
import { At as t, Dt as n, at as r, l as i } from "./constants-CenxlFMY.js";
import { t as a } from "./getValue-sxwJaOE3.js";
import { t as o } from "./querySelector-C6ReNysW.js";
import { t as s } from "./calf-SqS2SeU4.js";
import { t as c } from "./getUrlParameter-DQUJPuXf.js";
import { B as l, F as u, G as d, H as f, L as p, W as m, Z as h, d as g, et as _, ft as v, pt as y, q as b, rt as x, ut as S, w as C, y as w, yt as T } from "./disclose-version-gxrYovMN.js";
import { t as E } from "./sendEvent-yx1DwCDA.js";
import { t as D } from "./currentGuildId-WKn2jVcy.js";
import { t as O } from "./navigateTo-CS33u2a7.js";
import { t as k } from "./joinGroups-GBYwLGHq.js";
import { t as A } from "./openQuickBuffById-B66eBgWb.js";
import { t as j } from "./playerId-C1UyEKeb.js";
import { t as M } from "./getPlayerName-CJ5mkGKc.js";
import { t as N } from "./getIsOwnGuild-BHv-WLKL.js";
// src/modules/profile/profileInjectQuickButton/QuickButtons.svelte
var P = f("<button class=\"fshTempleThree svelte-1a8agm3\" type=\"button\">&nbsp;</button>"), F = f("<button type=\"button\" class=\"svelte-1a8agm3\">&nbsp;</button>"), I = f("<div class=\"svelte-1a8agm3\"><button class=\"fshQuickBuff svelte-1a8agm3\" type=\"button\">&nbsp;</button> <button class=\"fshJoin svelte-1a8agm3\" type=\"button\">&nbsp;</button> <button class=\"fshGold svelte-1a8agm3\" type=\"button\">&nbsp;</button> <button class=\"fshTempleTwo svelte-1a8agm3\" type=\"button\">&nbsp;</button> <!> <!></div>");
function L(o, f) {
	y(f, !1);
	let p = s.enableMaxGroupSizeToJoin ? ` < ${s.maxGroupSizeToJoin} Members` : "", m = N(), L = c("player_id") || j(), R = M();
	function z(e) {
		E("profile", "quick button", e);
	}
	function B(e) {
		e.target.blur(), z("quickbuff"), A(L);
	}
	function V() {
		z("join groups"), k();
	}
	function H() {
		z("auctions"), O(`${i}&type=-3&tid=${L}`);
	}
	function U() {
		z("secure trade"), O(`${t}${R}`);
	}
	function W() {
		z("recall items"), O(`${n}${R}`);
	}
	function G() {
		z("rank"), O(`${r}members&subcmd2=changerank&member_id=${L}`);
	}
	g();
	var K = I(), q = _(K), J = x(q, 2), Y = x(J, 2), X = x(Y, 2), Z = x(X, 2), Q = (e) => {
		var t = P();
		h(() => w(t, "data-tooltip", `Recall items from ${R ?? ""}`)), d("click", t, W), l(e, t);
	};
	u(Z, (e) => {
		m && e(Q);
	});
	var $ = x(Z, 2), ee = (t) => {
		var n = F();
		h((t) => {
			C(n, `background-image: url('${e ?? ""}guilds/${t ?? ""}_mini.png');`), w(n, "data-tooltip", `Rank ${R ?? ""}`);
		}, [() => D()]), d("click", n, G), l(t, n);
	}, te = S(() => m && a("showAdmin"));
	u($, (e) => {
		b(te) && e(ee);
	}), T(K), h(() => {
		w(q, "data-tooltip", `Buff ${R ?? ""}`), w(J, "data-tooltip", `Join All Groups${p}`), w(Y, "data-tooltip", `Go to ${R ?? ""}'s auctions`), w(X, "data-tooltip", `Create Secure Trade to ${R ?? ""}`);
	}), d("click", q, B), d("click", J, V), d("click", Y, H), d("click", X, U), l(o, K), v();
}
m(["click"]);
// src/modules/profile/profileInjectQuickButton/profileInjectQuickButton.js
function R(e, t) {
	return p(L, {
		anchor: e,
		target: t
	});
}
function z() {
	let e = o("#profileLeftColumn img[src*=\"/avatars/\"][width=\"200\"]");
	e && (e.parentNode.classList.add("fshRelative"), R(e.nextElementSibling, e.parentNode));
}
export { z as default };

//# sourceMappingURL=profileInjectQuickButton-Bf3ywg13.js.map