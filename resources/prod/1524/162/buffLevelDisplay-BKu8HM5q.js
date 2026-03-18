import { t as e } from "./regExpFirstCapture-CdTmAP5x.js";
import { t } from "./querySelectorArray-BZbNvND7.js";
import { t as n } from "./insertHtmlAfterBegin-DMAq9MK3.js";
//#region src/modules/profile/buffLevelDisplay.js
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
//#endregion
export { a as default };

//# sourceMappingURL=buffLevelDisplay-BKu8HM5q.js.map