import { L as e, d as t, ft as n, pt as r } from "./disclose-version-Cj0Bwtvz.js";
import { t as i } from "./getElementById-C08-3H-C.js";
import { t as a } from "./layout-B2Q1UoM2.js";
import "./calfSystem-oFfthDb1.js";
import { t as o } from "./sendEvent-DdWrU3DL.js";
import { t as s } from "./QuickSelectClasses-DQe3HmUg.js";
// src/modules/auctionHouse/QuickCreate.svelte
function c(e, i) {
	r(i, !1), t(), s(e, {
		dispatchPerf: () => o("ahQuickCreate", "doPerf"),
		dispatchSelect: (e) => o("ahQuickCreate", "doSelect", e),
		dispatchToggle: () => o("ahQuickCreate", "toggleSelectST")
	}), n();
}
// src/modules/auctionHouse/quickCreate.js
var l = () => e(c, { target: a() });
function u() {
	i("auction-items") && l();
}
export { u as default };

//# sourceMappingURL=quickCreate-DSGRbpCE.js.map