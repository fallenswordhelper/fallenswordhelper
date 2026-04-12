import { t as e } from "./getElementById-DgC-_E5u.js";
import { A as t, a as n, dt as r, ut as i } from "./disclose-version-Bvjv4_yw.js";
import { t as a } from "./layout-6CPY-bfq.js";
import { t as o } from "./sendEvent-DFQy5lFi.js";
import "./legacy-DUan0FaP.js";
import { t as s } from "./QuickSelectClasses-gaYkQJ2b.js";
//#region src/modules/auctionHouse/QuickCreate.svelte
function c(e, t) {
	r(t, !1), n(), s(e, {
		dispatchPerf: () => o("ahQuickCreate", "doPerf"),
		dispatchSelect: (e) => o("ahQuickCreate", "doSelect", e),
		dispatchToggle: () => o("ahQuickCreate", "toggleSelectST")
	}), i();
}
//#endregion
//#region src/modules/auctionHouse/quickCreate.js
var l = () => t(c, { target: a() });
function u() {
	e("auction-items") && l();
}
//#endregion
export { u as default };

//# sourceMappingURL=quickCreate-hJPRBGeT.js.map