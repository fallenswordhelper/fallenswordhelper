import { t as e } from "./sendException-ezSEAahU.js";
import { t } from "./regExpExec-K8DninYn.js";
import { t as n } from "./getTextTrim-hYBF-bdh.js";
import { t as r } from "./querySelectorArray-Bdj4peIm.js";
import { t as i } from "./buffObj-Bw3gqrZP.js";
//#region src/modules/common/getBuff.js
function a(e) {
	return i.find((t) => t.name === e);
}
//#endregion
//#region src/modules/notepad/buffLog/buffReportParser.js
var o = 0, s = [
	"Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'",
	"The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'",
	"Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them\\.",
	"Player '\\w*' could not be found to buff\\.",
	"You do not have enough stamina remaining\\.",
	"Unable to cast skill\\(s\\) on '\\w*' due to their preferences\\."
];
function c() {
	return o ||= new RegExp(s.join("|")), o;
}
function l(n) {
	let r = t(c(), n);
	return r || e(`unmatched buffReportParser - ${n}`), r;
}
function u(e) {
	return r("#quickbuff-report font:not(font *)", e).map(n).map(l).filter((e) => e);
}
//#endregion
export { a as n, u as t };

//# sourceMappingURL=buffReportParser-ByxH88BP.js.map