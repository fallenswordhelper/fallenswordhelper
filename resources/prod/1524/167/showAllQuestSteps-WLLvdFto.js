import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./querySelectorArray-C70U47NF.js";
import { t as n } from "./getValue-vrUqpo0a.js";
// src/modules/guide/showAllQuestSteps.js
function r(e) {
	e.style.display = "block";
}
function i() {
	if (!n("showNextQuestSteps")) return;
	let i = e("next_stage_button");
	i && (t("div[id^=\"stage\"]").forEach(r), i.style.display = "none");
}
export { i as default };

//# sourceMappingURL=showAllQuestSteps-WLLvdFto.js.map