import { B as e, F as t, G as n, H as r, L as i, W as a, Z as o, d as s, et as ee, ft as c, pt as l, q as u, rt as d, ut as f, w as p, y as m, yt as h } from "./disclose-version-Cj0Bwtvz.js";
import { t as g } from "./querySelector-C6ReNysW.js";
import "./calfSystem-oFfthDb1.js";
import { t as _ } from "./sendEvent-DdWrU3DL.js";
import { t as v } from "./currentGuildId-Bpd4l1O8.js";
import { t as y } from "./joinGroups-DeMjdEwk.js";
import { t as b } from "./navigateTo-CS33u2a7.js";
import { t as x } from "./openQuickBuffById-C25RQjPG.js";
import { t as S } from "./playerId-C1UyEKeb.js";
import { t as C } from "./calf-SqS2SeU4.js";
import { At as w, Dt as T, at as E, l as D } from "./constants-CenxlFMY.js";
import { t as O } from "./getUrlParameter--C3_Eqez.js";
import { t as k } from "./getValue-DMlY7SSn.js";
import { t as A } from "./system-CNA0YLOa.js";
import { t as j } from "./getIsOwnGuild-CPgvrNx5.js";
import { t as M } from "./getPlayerName-4cwBFEhT.js";
// src/modules/profile/profileInjectQuickButton/QuickButtons.svelte
var N = r("<button class=\"fshTempleThree svelte-1a8agm3\" type=\"button\">&nbsp;</button>"), P = r("<button type=\"button\" class=\"svelte-1a8agm3\">&nbsp;</button>"), F = r("<div class=\"svelte-1a8agm3\"><button class=\"fshQuickBuff svelte-1a8agm3\" type=\"button\">&nbsp;</button> <button class=\"fshJoin svelte-1a8agm3\" type=\"button\">&nbsp;</button> <button class=\"fshGold svelte-1a8agm3\" type=\"button\">&nbsp;</button> <button class=\"fshTempleTwo svelte-1a8agm3\" type=\"button\">&nbsp;</button> <!> <!></div>");
function I(r, i) {
	l(i, !1);
	let a = C.enableMaxGroupSizeToJoin ? ` < ${C.maxGroupSizeToJoin} Members` : "", g = j(), I = O("player_id") || S(), L = M();
	function R(e) {
		_("profile", "quick button", e);
	}
	function z(e) {
		e.target.blur(), R("quickbuff"), x(I);
	}
	function B() {
		R("join groups"), y();
	}
	function V() {
		R("auctions"), b(`${D}&type=-3&tid=${I}`);
	}
	function H() {
		R("secure trade"), b(`${w}${L}`);
	}
	function U() {
		R("recall items"), b(`${T}${L}`);
	}
	function W() {
		R("rank"), b(`${E}members&subcmd2=changerank&member_id=${I}`);
	}
	s();
	var G = F(), K = ee(G), q = d(K, 2), J = d(q, 2), Y = d(J, 2), X = d(Y, 2), Z = (t) => {
		var r = N();
		o(() => m(r, "data-tooltip", `Recall items from ${L ?? ""}`)), n("click", r, U), e(t, r);
	};
	t(X, (e) => {
		g && e(Z);
	});
	var Q = d(X, 2), $ = (t) => {
		var r = P();
		o((e) => {
			p(r, `background-image: url('${A ?? ""}guilds/${e ?? ""}_mini.png');`), m(r, "data-tooltip", `Rank ${L ?? ""}`);
		}, [() => v()]), n("click", r, W), e(t, r);
	}, te = f(() => g && k("showAdmin"));
	t(Q, (e) => {
		u(te) && e($);
	}), h(G), o(() => {
		m(K, "data-tooltip", `Buff ${L ?? ""}`), m(q, "data-tooltip", `Join All Groups${a}`), m(J, "data-tooltip", `Go to ${L ?? ""}'s auctions`), m(Y, "data-tooltip", `Create Secure Trade to ${L ?? ""}`);
	}), n("click", K, z), n("click", q, B), n("click", J, V), n("click", Y, H), e(r, G), c();
}
a(["click"]);
// src/modules/profile/profileInjectQuickButton/profileInjectQuickButton.js
function L(e, t) {
	return i(I, {
		anchor: e,
		target: t
	});
}
function R() {
	let e = g("#profileLeftColumn img[src*=\"/avatars/\"][width=\"200\"]");
	e && (e.parentNode.classList.add("fshRelative"), L(e.nextElementSibling, e.parentNode));
}
export { R as default };

//# sourceMappingURL=profileInjectQuickButton-LOyiQYqg.js.map