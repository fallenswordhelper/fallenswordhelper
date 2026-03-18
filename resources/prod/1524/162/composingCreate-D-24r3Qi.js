import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import { t as n } from "./on-f-HmOL0n.js";
import { t as r } from "./sendEvent-bwvhd4A-.js";
import { t as i } from "./onclick-9iRduoOH.js";
//#region src/modules/composing/create/composingCreate.js
function a() {
	r("composingCreate", "setMaxVal");
	let n = e("composing-skill-level-input");
	n && (n.value = t(e("composing-skill-level-max")));
}
function o() {
	i(e("composing-add-skill"), a), n(e("composing-skill-select"), "change", a);
}
//#endregion
export { o as default };

//# sourceMappingURL=composingCreate-D-24r3Qi.js.map