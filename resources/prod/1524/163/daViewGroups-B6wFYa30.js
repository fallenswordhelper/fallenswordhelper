import "./constants-CIKidKvt.js";
import { t as e } from "./getValue-j5JjE6f3.js";
import { t } from "./setValue-31jE_mRr.js";
import { t as n } from "./getCustomUrlParameter-Dna1URkG.js";
import { t as r } from "./trim-C3qdDCs0.js";
import { t as i } from "./sendEvent-DFQy5lFi.js";
import { t as a } from "./trade-DdfFUtA_.js";
import { t as o } from "./_dataAccess-Cm9xXxBc.js";
import { t as s } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as c } from "./aGenericFallback-hK73Fv-s.js";
import { t as l } from "./querySelectorArray-Bdj4peIm.js";
import { t as u } from "./closestTr-DTXY0qkG.js";
import { t as d } from "./guildGroups-DmUYYeHO.js";
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

//# sourceMappingURL=daViewGroups-B6wFYa30.js.map