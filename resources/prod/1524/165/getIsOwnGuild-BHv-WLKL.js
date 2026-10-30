import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
import { n as t } from "./isUndefined-CH45qJXY.js";
import { it as n, ot as r } from "./constants-CenxlFMY.js";
import { t as i } from "./currentGuildId-WKn2jVcy.js";
import { t as a } from "./querySelectorArray-C70U47NF.js";
import { t as o } from "./hrefStartsWith-BYndfmMf.js";
// src/modules/profile/getGuildALink.js
var s = 0, c = 0;
function l() {
	return s ||= (c = a("#pCC a").find(o(r)), !0), c;
}
// src/modules/profile/getIsOwnGuild.js
var u = null;
function d() {
	let t = l();
	if (t) {
		let r = e(n, t.href);
		if (r) return Number(r);
	}
}
function f() {
	return t(u) && (u = d() === i()), u;
}
export { l as n, f as t };

//# sourceMappingURL=getIsOwnGuild-BHv-WLKL.js.map