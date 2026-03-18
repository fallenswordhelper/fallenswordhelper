import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import "./sendEvent-bwvhd4A-.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import "./closestTable-Dfg3mstY.js";
import { t as e } from "./ajaxifyBank-D8UCIDuy.js";
//#region src/modules/bank/injectGuildBank.js
function t() {
	e({
		headSelector: "#pCC b",
		headText: "Guild Bank",
		appLink: !1,
		depoPos: 3,
		balPos: 2,
		data: {
			cmd: "guild",
			subcmd: "bank",
			subcmd2: "transaction"
		},
		initWithdraw: "1"
	});
}
//#endregion
export { t as default };

//# sourceMappingURL=injectGuildBank-Cm5HBRd6.js.map