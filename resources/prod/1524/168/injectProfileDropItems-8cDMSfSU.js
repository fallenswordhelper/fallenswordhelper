import { L as e, d as t, ft as n, pt as r } from "./disclose-version-Cj0Bwtvz.js";
import { t as i } from "./querySelector-C6ReNysW.js";
import { t as a } from "./layout-B2Q1UoM2.js";
import "./calfSystem-oFfthDb1.js";
import { t as o } from "./sendEvent-DdWrU3DL.js";
import { t as s } from "./QuickSelectClasses-DQe3HmUg.js";
import { t as c } from "./getElementById-C08-3H-C.js";
import { t as l } from "./insertElementAfter-Bc9YFj76.js";
import { t as u } from "./skipGamePrompts-D9xKiZPn.js";
import { t as d } from "./prefCheckbox-CKE70AA0.js";
// src/modules/profile/dropitems/DropItems.svelte
function f(e, i) {
	r(i, !1), t(), s(e, {
		dispatchPerf: () => o("drop-items", "doPerf"),
		dispatchSelect: (e) => o("drop-items", "doSelect", e),
		dispatchToggle: () => o("drop-items", "toggleSelectST")
	}), n();
}
// src/modules/profile/dropitems/skipDestroyPrompts.js
var p = "disableDestroyPrompts", m = [/^Are you absolutely sure you wish to destroy the selected items\?$/, /^Are you sure you want to destroy (this item|all items of this type)\?$/];
function h() {
	u(p, m);
	let e = c("drop-selected-items");
	if (!e) return;
	let t = d(p);
	t.classList.add("fshDestroyPref"), l(t, e);
}
// src/modules/profile/dropitems/injectProfileDropItems.js
function g() {
	i(".backpack-manage-container") && (e(f, { target: a() }), h());
}
export { g as default };

//# sourceMappingURL=injectProfileDropItems-8cDMSfSU.js.map