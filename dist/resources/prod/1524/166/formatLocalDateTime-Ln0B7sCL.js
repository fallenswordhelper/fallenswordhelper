import { t as e } from "./padZ-HTo14JN-.js";
import { n as t, t as n } from "./isDate-C9mCzK2j.js";
// src/modules/common/formatLocalDateTime.js
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
export { a as t };

//# sourceMappingURL=formatLocalDateTime-Ln0B7sCL.js.map