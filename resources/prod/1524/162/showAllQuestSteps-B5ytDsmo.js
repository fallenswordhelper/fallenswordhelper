import { t as e } from "./getElementById-PlRCtyBA.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./getValue-CCThXEzy.js";
import { t as n } from "./querySelectorArray-BZbNvND7.js";
//#region src/modules/guide/showAllQuestSteps.js
function r(e) {
	e.style.display = "block";
}
function i() {
	if (!t("showNextQuestSteps")) return;
	let i = e("next_stage_button");
	i && (n("div[id^=\"stage\"]").forEach(r), i.style.display = "none");
}
//#endregion
export { i as default };

//# sourceMappingURL=showAllQuestSteps-B5ytDsmo.js.map