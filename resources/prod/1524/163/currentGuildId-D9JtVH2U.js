import { t as e } from "./getText-BybFkJV6.js";
import { t } from "./regExpFirstCapture-Bi32xMqS.js";
import { t as n } from "./getArrayByTagName-QRr9ypcm.js";
//#region src/modules/common/currentGuildId.js
var r = 0;
function i(n) {
	let i = t(/\sguildId: (?<id>\d{1,6}),/, e(n));
	i && (r = Number(i));
}
function a() {
	return r || n("script", document.body).forEach(i), r;
}
//#endregion
export { a as t };

//# sourceMappingURL=currentGuildId-D9JtVH2U.js.map