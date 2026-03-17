import { t as e } from "./trade-DO4DknNi.js";
import { t } from "./indexAjaxData-CqOTihOX.js";
import { t as n } from "./htmlResult-VSGrcENv.js";
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

//# sourceMappingURL=sendItems-TAu70_Eh.js.map