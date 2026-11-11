import { t as e } from "./createDiv-B84RqGfo.js";
import { t } from "./getElementById-C08-3H-C.js";
import { t as n } from "./insertElement-6ZBKaryO.js";
import { t as r } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as i } from "./daLoadInventory-CwrdDsg7.js";
import { t as a } from "./flattenItems-CdGE-Amk.js";
import { t as o } from "./sendEvent-DdWrU3DL.js";
import { t as s } from "./layout-B2Q1UoM2.js";
import { t as c } from "./clickThis-UHuK6eKQ.js";
import { t as l } from "./fromEntries-BytjDDMx.js";
import { t as u } from "./getArrayByClassName-RPqCUmVz.js";
import { t as d } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as f } from "./onclick-nv-Fl1th.js";
import { t as p } from "./partial-Bo20zBni.js";
import { t as m } from "./skipGamePrompts-D9xKiZPn.js";
import { t as h } from "./prefCheckbox-CKE70AA0.js";
// src/modules/common/perfFilter.js
var g = 0, _ = 0;
function v(e) {
	let t = e.id.replace(`${_}-item-`, "");
	g[t] && c(e);
}
function y(e) {
	o("perfFilter", e), u("selectable-item", t(`${_}-items`)).forEach(v);
}
function b(t) {
	let r = e({ className: "fshAC" });
	d(r, "<button class=\"fshBl\">Perfect</button>"), n(s(), r), f(r, p(y, t));
}
async function x(e) {
	if (r()) return;
	_ = e;
	let t = await i();
	t?.s && (g = l(a(t.r).filter(({ cf: e }) => e === 0).map(({ a: e }) => [e, 1])), b(e));
}
// src/modules/composing/breakdown/breakdown.js
var S = "disableBreakdownPrompts", C = [/^Are you sure you wish to break down the selected items\?$/];
function w() {
	let t = e({ className: "fshCenter" });
	n(t, h(S)), n(s(), t);
}
function T() {
	r() || t("breakdown-selected-items") && (x("composing"), m(S, C), w());
}
export { T as default };

//# sourceMappingURL=breakdown-DZijqVCF.js.map