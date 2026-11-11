import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getText-BqjgTHLv.js";
// src/modules/common/playerName.js
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
export { o as t };

//# sourceMappingURL=playerName-DbmV53SI.js.map