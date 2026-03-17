import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import { t as n } from "./regExpFirstCapture-CdTmAP5x.js";
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

//# sourceMappingURL=playerId-KKJEdV6P.js.map