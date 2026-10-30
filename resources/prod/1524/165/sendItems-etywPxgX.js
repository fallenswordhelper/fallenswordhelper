import { t as e } from "./trade-D-aRHkiE.js";
import { t } from "./indexAjaxData-BcvK7Oaz.js";
import { t as n } from "./htmlResult-ChzxOgJl.js";
// src/modules/app/trade/senditems.js
function r(t, n) {
	return e({
		subcmd: "senditems",
		xc: window.ajaxXC,
		target_username: t,
		items: n
	});
}
// src/modules/_dataAccess/fallbacks/sendItems.js
async function i(e, r) {
	let i = await t({
		cmd: "trade",
		subcmd: "senditems",
		xc: window.ajaxXC,
		target_username: e,
		sendItemList: r
	});
	return n(i);
}
export { r as n, i as t };

//# sourceMappingURL=sendItems-etywPxgX.js.map