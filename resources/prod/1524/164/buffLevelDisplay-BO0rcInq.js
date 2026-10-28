import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
import { t } from "./querySelectorArray-C70U47NF.js";
import { t as n } from "./insertHtmlAfterBegin-NUXc07IC.js";
// src/modules/profile/buffLevelDisplay.js
var r = "#profileRightColumn img[src*=\"/skills/\"]";
function i(t) {
	let r = e(/Level: (?<lvl>\d+)/, t.dataset.tipped);
	if (!r) return;
	let i = t.nextElementSibling;
	t.nextElementSibling || (i = t.parentNode.nextElementSibling), n(i, `<b>(${r})</b><br>`);
}
function a() {
	t(r).forEach(i);
}
export { a as default };

//# sourceMappingURL=buffLevelDisplay-BO0rcInq.js.map