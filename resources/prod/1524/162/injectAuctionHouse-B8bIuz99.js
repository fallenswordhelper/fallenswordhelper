import "./sendException-s1csWDQs.js";
import { t as e } from "./getElementById-PlRCtyBA.js";
import "./posthog-C2Vh_0Hn.js";
import { t } from "./system-De1jBRGa.js";
import { St as n } from "./constants-C54mky4_.js";
import { t as r } from "./getValue-CCThXEzy.js";
import { t as i } from "./getCustomUrlParameter-CFd8fvHs.js";
import { t as a } from "./layout-Bapa39KM.js";
import { t as o } from "./sendEvent-bwvhd4A-.js";
import { t as s } from "./getArrayByClassName-BzDfah40.js";
import { t as c } from "./getApp-B7uFgqYY.js";
import { t as l } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import { t as u } from "./indexAjaxData-CqOTihOX.js";
import { t as d } from "./clickThis-CZdkFZtj.js";
import { t as f } from "./onclick-9iRduoOH.js";
import { t as p } from "./querySelectorArray-BZbNvND7.js";
import { t as m } from "./closestTr-C0LB9ALA.js";
import "./idb-sdcp-8vV.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import "./profile-BWfgrKDA.js";
import { t as h } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as g } from "./createSpan-DpSRnwEQ.js";
import "./myStats-Basm1Ltz.js";
import { t as _ } from "./all-Dy4LjBGw.js";
import { t as v } from "./insertElementAfterBegin-D7gF3V2Y.js";
import { t as y } from "./insertHtmlAfterBegin-DMAq9MK3.js";
import { t as b } from "./doStatTotal-ASjvWJGO.js";
import { t as x } from "./relatePlayer-C7y5izo3.js";
import "./guildMembers-CZU-uLr9.js";
import "./getMembrList-B5emVD6O.js";
//#region src/modules/app/auctionhouse/auctionhouse.js
function S(e) {
	return c({
		cmd: "auctionhouse",
		...e
	});
}
//#endregion
//#region src/modules/app/auctionhouse/cancel.js
function C(e) {
	return S({
		subcmd: "cancel",
		auction_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daAuctionCancel.js
function w(e) {
	return u({
		cmd: "auctionhouse",
		subcmd: "cancel",
		auction_id: e
	});
}
function T(e) {
	return l(C, w, e);
}
//#endregion
//#region src/modules/auctionHouse/colourPlayerNames.js
var E = () => p(n, e("resultRows")).filter((e) => !e.href.endsWith("=null")), D = async (e) => (await _(e.map(x))).filter(([, e]) => e), O = {
	guild: "fshGreen",
	ally: "fshBlue",
	enemy: "fshRed"
};
async function k() {
	let e = E();
	if (!e.length) return;
	let t = await D(e);
	t.length && t.forEach(([e, t]) => {
		e.classList.add(O[t]);
	});
}
async function A() {
	await k(), $(document).ajaxSuccess((e, t, n) => {
		n.url.endsWith("=ajaxsearch") && k();
	});
}
//#endregion
//#region src/modules/auctionHouse/injectAuctionHouse.js
function j() {
	d(e("refresh"));
}
function M(e) {
	let [n] = e.parentNode.parentNode.children[0].children;
	return e.outerHTML = `<img src="${t}ui/misc/spinner.gif" width="14" height="14">`, T(i(n.dataset.tipped, "inv_id"));
}
async function N() {
	o("AH", "cancelAllAH");
	let t = s("auctionCancel", e("resultRows"));
	t.length !== 0 && (await _(t.map(M)), j());
}
function P() {
	let t = m(e("fill"))?.nextElementSibling?.children?.[0];
	if (!t) return;
	let n = g({
		className: "smallLink",
		textContent: "Cancel All"
	});
	t.classList.add("fshCenter"), y(t, "]"), v(t, n), y(t, "["), f(n, N);
}
function F() {
	r("autoFillMinBidPrice") && d(e("auto-fill"));
}
function I() {
	h() || !a() || (P(), F(), b(), A());
}
//#endregion
export { I as default };

//# sourceMappingURL=injectAuctionHouse-B8bIuz99.js.map