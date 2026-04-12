import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./layout-6CPY-bfq.js";
import { t as n } from "./insertElement-C_6uFPNr.js";
import { t as r } from "./jQueryPresent-BeJtq5OB.js";
import { t as i } from "./daLoadInventory-D2duLSdE.js";
import { t as a } from "./createStyle-Qs_9mDCV.js";
import { t as o } from "./flattenItems-D6g9OapM.js";
//#region src/modules/hellforge.js
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
//#endregion
export { l as default };

//# sourceMappingURL=hellforge-D_pVaVk0.js.map