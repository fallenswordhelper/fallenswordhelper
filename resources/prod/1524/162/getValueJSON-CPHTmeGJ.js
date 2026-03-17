import { t as e } from "./regExpExec-6_Ntf_JM.js";
import { t } from "./getValue-CCThXEzy.js";
import { t as n } from "./jsonParse-CHQNrrub.js";
//#region src/modules/system/getValueJSON.js
function r(t, n) {
	if (typeof n == "string") {
		let t = e(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/, n);
		if (t) return new Date(Date.UTC(Number(t[1]), Number(t[2]) - 1, Number(t[3]), Number(t[4]), Number(t[5]), Number(t[6])));
	}
	return n;
}
function i(e) {
	let i = t(e);
	if (i) return n(i, r);
}
//#endregion
export { i as t };

//# sourceMappingURL=getValueJSON-CPHTmeGJ.js.map