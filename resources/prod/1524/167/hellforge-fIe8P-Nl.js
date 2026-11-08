import { t as e } from "./daLoadInventory-CwrdDsg7.js";
import { t } from "./flattenItems-CdGE-Amk.js";
import { t as n } from "./createStyle-DG3VYLtp.js";
import { t as r } from "./getElementById-C08-3H-C.js";
import { t as i } from "./insertElement-6ZBKaryO.js";
import { t as a } from "./jQueryPresent-DUWNBls9.js";
import { t as o } from "./layout-B2Q1UoM2.js";
// src/modules/hellforge.js
var s = ({ a: e }) => `div[id$="-highlight-${e}"] {
  background-color: rgba(255, 255, 0, 0.3);
}`;
async function c() {
	let r = await e();
	if (!r?.s) return;
	let a = t(r.r).filter(({ hf: e }) => e !== 5).filter(({ cf: e }) => e === 0).map(s).join("\n");
	i(o(), n(a));
}
function l() {
	let e = r("hellforge-items");
	a() && e && c();
}
export { l as default };

//# sourceMappingURL=hellforge-fIe8P-Nl.js.map