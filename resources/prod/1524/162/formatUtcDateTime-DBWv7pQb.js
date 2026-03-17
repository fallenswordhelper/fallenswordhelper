import { t as e } from "./padZ-Cypg_I1Q.js";
import { n as t, t as n } from "./isDate-DqgqIE2M.js";
//#region src/modules/common/formatUtcDateTime.js
function r(t) {
	return [
		t.getUTCMonth() + 1,
		t.getUTCDate(),
		t.getUTCHours(),
		t.getUTCMinutes(),
		t.getUTCSeconds()
	].map(e);
}
function i(e) {
	return [e.getUTCFullYear().toString()].concat(r(e));
}
function a(e) {
	if (n(e)) return t(i(e));
}
//#endregion
export { a as t };

//# sourceMappingURL=formatUtcDateTime-DBWv7pQb.js.map