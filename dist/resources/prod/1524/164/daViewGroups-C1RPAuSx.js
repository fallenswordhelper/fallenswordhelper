import "./constants-CenxlFMY.js";
import { t as e } from "./getValue-Aap0zlcO.js";
import { t } from "./setValue-B1MbQwxn.js";
import { t as n } from "./getCustomUrlParameter-C5vi2hsN.js";
import { t as r } from "./trim-CU-eMahN.js";
import { t as i } from "./sendEvent-DkxfZozg.js";
import { t as a } from "./trade-D-aRHkiE.js";
import { t as o } from "./_dataAccess-BLVLQyDJ.js";
import { t as s } from "./indexAjaxDoc-WR96kHce.js";
import { t as c } from "./aGenericFallback-C6VAMq13.js";
import { t as l } from "./querySelectorArray-C70U47NF.js";
import { t as u } from "./closestTr-BGwSv-6S.js";
import { t as d } from "./guildGroups-D1tVaVYo.js";
// src/modules/app/trade/sendgold.js
function f(e, t) {
	return a({
		subcmd: "sendgold",
		xc: window.ajaxXC,
		target_username: e,
		gold_amount: t
	});
}
// src/modules/_dataAccess/daTradeSendGold.js
function p(e, t) {
	return c({
		cmd: "trade",
		subcmd: "sendgold",
		xc: window.ajaxXC,
		target_username: e,
		gold_amount: t
	}, "You successfully sent gold!");
}
function m(e, t) {
	return o(f, p, e, t);
}
// src/modules/world/newMap/sendGoldPref.js
var h = 0, g = () => h;
function _() {
	h = e("sendGoldonWorld");
}
// src/modules/world/newMap/doSendGold.js
function v() {
	t("currentGoldSentTotal", parseInt(e("currentGoldSentTotal"), 10) + parseInt(e("goldAmount"), 10)), GameData.fetch(1);
}
async function y() {
	g() && (i("NewMap", "doSendGold"), (await m($("#HelperSendTo").html(), $("#HelperSendAmt").html().replace(/[^\d]/g, ""))).s && v());
}
// src/modules/app/guild/groups/view.js
function b() {
	return d({ subcmd2: "view" });
}
// src/modules/_dataAccess/daViewGroups.js
var x = (e) => l("#pCC img[src$=\"/icon_action_view.png\"]", e), S = (e) => Number(n(e.parentElement.href, "group_id")), C = (e) => u(e).cells[0].children[0].textContent, w = (e) => e.split(",").map(r).filter(Boolean), T = (e) => u(e).cells[1].firstChild.textContent, E = (e) => w(T(e)).map((e) => ({ name: e })), D = (e) => [{ name: C(e) }, ...E(e)], O = (e) => ({
	id: S(e),
	members: D(e)
}), k = (e) => x(e).map(O);
function A(e) {
	return e ? {
		r: k(e),
		s: !0
	} : { s: !1 };
}
async function j() {
	return A(await s({
		cmd: "guild",
		subcmd: "groups"
	}));
}
function M() {
	return o(b, j);
}
export { _ as i, y as n, g as r, M as t };

//# sourceMappingURL=daViewGroups-C1RPAuSx.js.map