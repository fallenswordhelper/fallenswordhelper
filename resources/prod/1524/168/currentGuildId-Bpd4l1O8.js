import { t as e } from "./getArrayByTagName-Dyx_AQto.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./regExpFirstCapture-D_QeHFEY.js";
// src/modules/common/currentGuildId.js
var r = 0;
function i(e) {
	let i = n(/\sguildId: (?<id>\d{1,6}),/, t(e));
	i && (r = Number(i));
}
function a() {
	return r || e("script", document.body).forEach(i), r;
}
export { a as t };

//# sourceMappingURL=currentGuildId-Bpd4l1O8.js.map