import { t as e } from "./sendException-BQ7Cj-s_.js";
import { t } from "./regExpExec-JYUpFNim.js";
import { t as n } from "./getTextTrim-CvXe85fp.js";
import { t as r } from "./querySelectorArray-C70U47NF.js";
import { t as i } from "./buffObj-BqB_LPan.js";
// src/modules/common/getBuff.js
function a(e) {
	return i.find((t) => t.name === e);
}
// src/modules/notepad/buffLog/buffReportParser.js
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
export { a as n, u as t };

//# sourceMappingURL=buffReportParser-C2pUg2ME.js.map