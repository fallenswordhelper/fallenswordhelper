import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getValue-j5JjE6f3.js";
import { t as n } from "./querySelectorArray-Bdj4peIm.js";
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

//# sourceMappingURL=showAllQuestSteps-2NjvnGWy.js.map