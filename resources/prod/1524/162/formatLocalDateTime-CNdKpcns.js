import { t as e } from "./padZ-Cypg_I1Q.js";
import { n as t, t as n } from "./isDate-DqgqIE2M.js";
//#region src/modules/common/formatLocalDateTime.js
function r(t) {
	return [
		t.getMonth() + 1,
		t.getDate(),
		t.getHours(),
		t.getMinutes(),
		t.getSeconds()
	].map(e);
}
function i(e) {
	return [e.getFullYear().toString()].concat(r(e));
}
function a(e) {
	if (n(e)) return t(i(e));
}
//#endregion
export { a as t };

//# sourceMappingURL=formatLocalDateTime-CNdKpcns.js.map