import { t as e } from "./getText-BqjgTHLv.js";
import { t } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as n } from "./getArrayByTagName-Dyx_AQto.js";
// src/modules/common/currentGuildId.js
var r = 0;
function i(n) {
	let i = t(/\sguildId: (?<id>\d{1,6}),/, e(n));
	i && (r = Number(i));
}
function a() {
	return r || n("script", document.body).forEach(i), r;
}
export { a as t };

//# sourceMappingURL=currentGuildId-WKn2jVcy.js.map