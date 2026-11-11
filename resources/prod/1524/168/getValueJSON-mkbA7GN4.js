import { t as e } from "./jsonParse-CTM1cd4F.js";
import { t } from "./regExpExec-JYUpFNim.js";
import { t as n } from "./getValue-DMlY7SSn.js";
// src/modules/system/getValueJSON.js
function r(e, n) {
	if (typeof n == "string") {
		let e = t(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/, n);
		if (e) return new Date(Date.UTC(Number(e[1]), Number(e[2]) - 1, Number(e[3]), Number(e[4]), Number(e[5]), Number(e[6])));
	}
	return n;
}
function i(t) {
	let i = n(t);
	if (i) return e(i, r);
}
export { i as t };

//# sourceMappingURL=getValueJSON-mkbA7GN4.js.map