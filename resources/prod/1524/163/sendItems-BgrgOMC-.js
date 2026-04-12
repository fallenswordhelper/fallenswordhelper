import { t as e } from "./trade-DdfFUtA_.js";
import { t } from "./indexAjaxData-yJPb4vet.js";
import { t as n } from "./htmlResult-Dc_vf-tW.js";
//#region src/modules/app/trade/senditems.js
function r(t, n) {
	return e({
		subcmd: "senditems",
		xc: window.ajaxXC,
		target_username: t,
		items: n
	});
}
//#endregion
//#region src/modules/_dataAccess/fallbacks/sendItems.js
async function i(e, r) {
	return n(await t({
		cmd: "trade",
		subcmd: "senditems",
		xc: window.ajaxXC,
		target_username: e,
		sendItemList: r
	}));
}
//#endregion
export { r as n, i as t };

//# sourceMappingURL=sendItems-BgrgOMC-.js.map