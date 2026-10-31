import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./partial-Bo20zBni.js";
import { t as n } from "./layout-B2Q1UoM2.js";
import { t as r } from "./sendEvent-yx1DwCDA.js";
import { t as i } from "./createDiv-XU2XBEIv.js";
import { t as a } from "./getArrayByClassName-RPqCUmVz.js";
import { t as o } from "./insertElement-6ZBKaryO.js";
import { t as s } from "./clickThis-UHuK6eKQ.js";
import { t as c } from "./onclick-nv-Fl1th.js";
import { t as l } from "./fromEntries-BytjDDMx.js";
import { t as u } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as d } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as f } from "./daLoadInventory-Cd8q-qGB.js";
import { t as p } from "./flattenItems-CdGE-Amk.js";
import { t as m } from "./skipGamePrompts-C2gSoGiV.js";
import { t as h } from "./prefCheckbox-D0O_cml6.js";
// src/modules/common/perfFilter.js
var g = 0, _ = 0;
function v(e) {
	let t = e.id.replace(`${_}-item-`, "");
	g[t] && s(e);
}
function y(t) {
	r("perfFilter", t), a("selectable-item", e(`${_}-items`)).forEach(v);
}
function b(e) {
	let r = i({ className: "fshAC" });
	d(r, "<button class=\"fshBl\">Perfect</button>"), o(n(), r), c(r, t(y, e));
}
async function x(e) {
	if (u()) return;
	_ = e;
	let t = await f();
	t?.s && (g = l(p(t.r).filter(({ cf: e }) => e === 0).map(({ a: e }) => [e, 1])), b(e));
}
// src/modules/composing/breakdown/breakdown.js
var S = "disableBreakdownPrompts", C = [/^Are you sure you wish to break down the selected items\?$/];
function w() {
	let e = i({ className: "fshCenter" });
	o(e, h(S)), o(n(), e);
}
function T() {
	u() || e("breakdown-selected-items") && (x("composing"), m(S, C), w());
}
export { T as default };

//# sourceMappingURL=breakdown-0bsHEw05.js.map