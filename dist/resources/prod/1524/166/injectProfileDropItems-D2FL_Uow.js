import "./calfSystem-CH6jB11R.js";
import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./querySelector-C6ReNysW.js";
import { L as n, d as r, ft as i, pt as a } from "./disclose-version-gxrYovMN.js";
import { t as o } from "./layout-B2Q1UoM2.js";
import { t as s } from "./sendEvent-yx1DwCDA.js";
import { t as c } from "./insertElementAfter-Bc9YFj76.js";
import { t as l } from "./QuickSelectClasses-mpgtpvvT.js";
import { t as u } from "./skipGamePrompts-C2gSoGiV.js";
import { t as d } from "./prefCheckbox-D0O_cml6.js";
// src/modules/profile/dropitems/DropItems.svelte
function f(e, t) {
	a(t, !1), r(), l(e, {
		dispatchPerf: () => s("drop-items", "doPerf"),
		dispatchSelect: (e) => s("drop-items", "doSelect", e),
		dispatchToggle: () => s("drop-items", "toggleSelectST")
	}), i();
}
// src/modules/profile/dropitems/skipDestroyPrompts.js
var p = "disableDestroyPrompts", m = [/^Are you absolutely sure you wish to destroy the selected items\?$/, /^Are you sure you want to destroy (this item|all items of this type)\?$/];
function h() {
	u(p, m);
	let t = e("drop-selected-items");
	if (!t) return;
	let n = d(p);
	n.classList.add("fshDestroyPref"), c(n, t);
}
// src/modules/profile/dropitems/injectProfileDropItems.js
function g() {
	t(".backpack-manage-container") && (n(f, { target: o() }), h());
}
export { g as default };

//# sourceMappingURL=injectProfileDropItems-D2FL_Uow.js.map