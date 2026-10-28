import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./layout-B2Q1UoM2.js";
import { t as n } from "./insertElement-6ZBKaryO.js";
import { t as r } from "./jQueryPresent-DUWNBls9.js";
import { t as i } from "./daLoadInventory-Cd8q-qGB.js";
import { t as a } from "./createStyle-CbdGPpS5.js";
import { t as o } from "./flattenItems-CdGE-Amk.js";
// src/modules/hellforge.js
var s = ({ a: e }) => `div[id$="-highlight-${e}"] {
  background-color: rgba(255, 255, 0, 0.3);
}`;
async function c() {
	let e = await i();
	if (!e?.s) return;
	let r = o(e.r).filter(({ hf: e }) => e !== 5).filter(({ cf: e }) => e === 0).map(s).join("\n");
	n(t(), a(r));
}
function l() {
	let t = e("hellforge-items");
	r() && t && c();
}
export { l as default };

//# sourceMappingURL=hellforge-nOejETdX.js.map