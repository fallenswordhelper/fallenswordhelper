import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
//#region src/modules/common/playerName.js
var n = null;
function r() {
	let n = e("statbar-character");
	return n && t(n);
}
var i = () => typeof window.self == "string" && window.self, a = () => r() || i();
function o() {
	if (!n) {
		let e = a();
		e && (n = e);
	}
	return n;
}
//#endregion
export { o as t };

//# sourceMappingURL=playerName-BXAa_cHJ.js.map