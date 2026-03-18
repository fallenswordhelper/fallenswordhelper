import { t as e } from "./getElementById-PlRCtyBA.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./layout-Bapa39KM.js";
import { t as n } from "./insertElement-DtUB7uKq.js";
import "./indexAjax-BXHvJ2Y7.js";
import { t as r } from "./jQueryPresent-BHusVK29.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./backpackOk-D61pwOdg.js";
import { t as i } from "./daLoadInventory-CNPYoxt-.js";
import { t as a } from "./createStyle-tF7Gye70.js";
import { t as o } from "./flattenItems-CQAcRQtd.js";
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

//# sourceMappingURL=hellforge-DD0m5cpJ.js.map