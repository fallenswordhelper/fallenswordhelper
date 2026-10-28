import "./calfSystem-C11day6U.js";
import { t as e } from "./getElementById-C08-3H-C.js";
import { L as t, d as n, ft as r, pt as i } from "./disclose-version-gxrYovMN.js";
import { t as a } from "./layout-B2Q1UoM2.js";
import { t as o } from "./sendEvent-DkxfZozg.js";
import { t as s } from "./QuickSelectClasses-PMJ_IJfE.js";
// src/modules/auctionHouse/QuickCreate.svelte
function c(e, t) {
	i(t, !1), n(), s(e, {
		dispatchPerf: () => o("ahQuickCreate", "doPerf"),
		dispatchSelect: (e) => o("ahQuickCreate", "doSelect", e),
		dispatchToggle: () => o("ahQuickCreate", "toggleSelectST")
	}), r();
}
// src/modules/auctionHouse/quickCreate.js
var l = () => t(c, { target: a() });
function u() {
	e("auction-items") && l();
}
export { u as default };

//# sourceMappingURL=quickCreate-CPKHCbJc.js.map