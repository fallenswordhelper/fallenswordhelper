import { t as e } from "./sendException-s1csWDQs.js";
import { t } from "./regExpExec-6_Ntf_JM.js";
import { t as n } from "./getTextTrim-Wj82yPPN.js";
import { t as r } from "./querySelectorArray-BZbNvND7.js";
import { t as i } from "./buffObj-BcP2E5eH.js";
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

//# sourceMappingURL=buffReportParser-CWfaADse.js.map