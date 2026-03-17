import "./posthog-C2Vh_0Hn.js";
import { t as e } from "./system-De1jBRGa.js";
import { At as t, Dt as n, at as r, l as i } from "./constants-C54mky4_.js";
import { t as a } from "./getValue-CCThXEzy.js";
import { t as o } from "./querySelector-qkBBhiGH.js";
import { t as s } from "./calf-OM11NjAU.js";
import { t as c } from "./getUrlParameter-qxOiipWG.js";
import { A as l, B as u, F as d, J as f, L as p, N as m, O as h, R as g, W as _, X as v, _ as y, _t as b, a as x, dt as S, p as C, rt as w, ut as T } from "./disclose-version-CVZFuhb0.js";
import { t as E } from "./sendEvent-bwvhd4A-.js";
import { t as D } from "./currentGuildId-Br10wzx3.js";
import { t as O } from "./navigateTo-CDpyk-TN.js";
import { t as k } from "./joinGroups-BT87TJLW.js";
import { t as A } from "./openQuickBuffById-DJAK7mhj.js";
import "./legacy-TVNYOKqu.js";
import { t as j } from "./playerId-KKJEdV6P.js";
import { t as M } from "./getPlayerName-DuwadrZb.js";
import { t as N } from "./getIsOwnGuild-CESy6qvi.js";
//#region src/modules/profile/profileInjectQuickButton/QuickButtons.svelte
var P = d("<button class=\"fshTempleThree svelte-1a8agm3\" type=\"button\">&nbsp;</button>"), F = d("<button type=\"button\" class=\"svelte-1a8agm3\">&nbsp;</button>"), I = d("<div class=\"svelte-1a8agm3\"><button class=\"fshQuickBuff svelte-1a8agm3\" type=\"button\">&nbsp;</button> <button class=\"fshJoin svelte-1a8agm3\" type=\"button\">&nbsp;</button> <button class=\"fshGold svelte-1a8agm3\" type=\"button\">&nbsp;</button> <button class=\"fshTempleTwo svelte-1a8agm3\" type=\"button\">&nbsp;</button> <!> <!></div>");
function L(o, l) {
	S(l, !1);
	let d = s.enableMaxGroupSizeToJoin ? ` < ${s.maxGroupSizeToJoin} Members` : "", p = N(), L = c("player_id") || j(), R = M();
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
	x();
	var K = I(), q = f(K), J = v(q, 2), Y = v(J, 2), X = v(Y, 2), Z = v(X, 2), Q = (e) => {
		var t = P();
		_(() => C(t, "data-tooltip", `Recall items from ${R ?? ""}`)), g("click", t, W), m(e, t);
	};
	h(Z, (e) => {
		p && e(Q);
	});
	var $ = v(Z, 2), ee = (t) => {
		var n = F();
		_((t) => {
			y(n, `background-image: url('${e ?? ""}guilds/${t ?? ""}_mini.png');`), C(n, "data-tooltip", `Rank ${R ?? ""}`);
		}, [D]), g("click", n, G), m(t, n);
	}, te = w(() => p && a("showAdmin"));
	h($, (e) => {
		u(te) && e(ee);
	}), b(K), _(() => {
		C(q, "data-tooltip", `Buff ${R ?? ""}`), C(J, "data-tooltip", `Join All Groups${d}`), C(Y, "data-tooltip", `Go to ${R ?? ""}'s auctions`), C(X, "data-tooltip", `Create Secure Trade to ${R ?? ""}`);
	}), g("click", q, B), g("click", J, V), g("click", Y, H), g("click", X, U), m(o, K), T();
}
p(["click"]);
//#endregion
//#region src/modules/profile/profileInjectQuickButton/profileInjectQuickButton.js
function R(e, t) {
	return l(L, {
		anchor: e,
		target: t
	});
}
function z() {
	let e = o("#profileLeftColumn img[src*=\"/avatars/\"][width=\"200\"]");
	e && (e.parentNode.classList.add("fshRelative"), R(e.nextElementSibling, e.parentNode));
}
//#endregion
export { z as default };

//# sourceMappingURL=profileInjectQuickButton-C0K5Y1ao.js.map