import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import "./sendEvent-bwvhd4A-.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import "./closestTable-Dfg3mstY.js";
import { t as e } from "./ajaxifyBank-D8UCIDuy.js";
//#region src/modules/bank/injectBank.js
function t() {
	e({
		headSelector: "#pCC h2",
		headText: "Bank",
		appLink: !0,
		depoPos: 1,
		balPos: 0,
		data: {
			cmd: "bank",
			subcmd: "transaction"
		},
		initWithdraw: ""
	});
}
//#endregion
export { t as default };

//# sourceMappingURL=injectBank-vhqXGicF.js.map