import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
import { t as n } from "./regExpFirstCapture-Bi32xMqS.js";
//#region src/modules/common/playerId.js
var r = null;
function i() {
	let i = e("holdtext");
	if (i && !r) {
		let e = n(/fallensword.com\/\?ref=(?<id>\d+)/, t(i));
		e && (r = Number(e));
	}
	return r;
}
//#endregion
export { i as t };

//# sourceMappingURL=playerId-CffVNjD0.js.map