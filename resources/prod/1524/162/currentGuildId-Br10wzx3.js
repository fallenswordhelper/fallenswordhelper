import { t as e } from "./getText-rCJDurvG.js";
import { t } from "./regExpFirstCapture-CdTmAP5x.js";
import { t as n } from "./getArrayByTagName-L2qWyNZV.js";
//#region src/modules/common/currentGuildId.js
var r = 0;
function i(n) {
	let i = t(/\sguildId: (?<id>\d{1,6}),/, e(n));
	i && (r = Number(i));
}
function a() {
	return r || n("script", document.body).forEach(i), r;
}
//#endregion
export { a as t };

//# sourceMappingURL=currentGuildId-Br10wzx3.js.map