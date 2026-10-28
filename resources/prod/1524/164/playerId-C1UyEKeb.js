import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./regExpFirstCapture-D_QeHFEY.js";
// src/modules/common/playerId.js
var r = null;
function i() {
	let i = e("holdtext");
	if (i && !r) {
		let e = n(/fallensword.com\/\?ref=(?<id>\d+)/, t(i));
		e && (r = Number(e));
	}
	return r;
}
export { i as t };

//# sourceMappingURL=playerId-C1UyEKeb.js.map