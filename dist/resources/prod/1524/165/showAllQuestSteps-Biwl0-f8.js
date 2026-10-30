import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getValue-Aap0zlcO.js";
import { t as n } from "./querySelectorArray-C70U47NF.js";
// src/modules/guide/showAllQuestSteps.js
function r(e) {
	e.style.display = "block";
}
function i() {
	if (!t("showNextQuestSteps")) return;
	let i = e("next_stage_button");
	i && (n("div[id^=\"stage\"]").forEach(r), i.style.display = "none");
}
export { i as default };

//# sourceMappingURL=showAllQuestSteps-Biwl0-f8.js.map