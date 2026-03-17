import { t as e } from "./getValue-CCThXEzy.js";
import { t } from "./setValue-Cb0PYC7t.js";
import { t as n } from "./getCustomUrlParameter-CFd8fvHs.js";
import { t as r } from "./trim-BIFcpoD2.js";
import { t as i } from "./sendEvent-bwvhd4A-.js";
import { t as a } from "./trade-DO4DknNi.js";
import { t as o } from "./_dataAccess-tuhLVrPW.js";
import { t as s } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as c } from "./aGenericFallback-uC2pHFMR.js";
import { t as l } from "./querySelectorArray-BZbNvND7.js";
import { t as u } from "./closestTr-C0LB9ALA.js";
import { t as d } from "./guildGroups-x1CpLch7.js";
//#region src/modules/app/trade/sendgold.js
function f(e, t) {
	return a({
		subcmd: "sendgold",
		xc: window.ajaxXC,
		target_username: e,
		gold_amount: t
	});
}
//#endregion
//#region src/modules/_dataAccess/daTradeSendGold.js
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
//#endregion
//#region src/modules/world/newMap/sendGoldPref.js
var h = 0, g = () => h;
function _() {
	h = e("sendGoldonWorld");
}
//#endregion
//#region src/modules/world/newMap/doSendGold.js
function v() {
	t("currentGoldSentTotal", parseInt(e("currentGoldSentTotal"), 10) + parseInt(e("goldAmount"), 10)), GameData.fetch(1);
}
async function y() {
	g() && (i("NewMap", "doSendGold"), (await m($("#HelperSendTo").html(), $("#HelperSendAmt").html().replace(/[^\d]/g, ""))).s && v());
}
//#endregion
//#region src/modules/app/guild/groups/view.js
function b() {
	return d({ subcmd2: "view" });
}
//#endregion
//#region src/modules/_dataAccess/daViewGroups.js
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
//#endregion
export { _ as i, y as n, g as r, M as t };

//# sourceMappingURL=daViewGroups-4NiZrl0i.js.map