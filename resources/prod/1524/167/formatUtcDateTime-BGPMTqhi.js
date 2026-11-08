import { t as e } from "./padZ-HTo14JN-.js";
import { n as t, t as n } from "./isDate-C9mCzK2j.js";
// src/modules/common/formatUtcDateTime.js
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
export { a as t };

//# sourceMappingURL=formatUtcDateTime-BGPMTqhi.js.map