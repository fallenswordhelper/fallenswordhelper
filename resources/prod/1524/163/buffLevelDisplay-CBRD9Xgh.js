import { t as e } from "./regExpFirstCapture-Bi32xMqS.js";
import { t } from "./querySelectorArray-Bdj4peIm.js";
import { t as n } from "./insertHtmlAfterBegin-B7TFwEJg.js";
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

//# sourceMappingURL=buffLevelDisplay-CBRD9Xgh.js.map