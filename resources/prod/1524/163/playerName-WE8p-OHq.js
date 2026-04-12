import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
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

//# sourceMappingURL=playerName-WE8p-OHq.js.map