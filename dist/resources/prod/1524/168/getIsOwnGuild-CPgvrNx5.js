import { t as e } from "./currentGuildId-Bpd4l1O8.js";
import { n as t } from "./isUndefined-CH45qJXY.js";
import { t as n } from "./regExpFirstCapture-D_QeHFEY.js";
import { it as r, ot as i } from "./constants-CenxlFMY.js";
import { t as a } from "./hrefStartsWith-BYndfmMf.js";
import { t as o } from "./querySelectorArray-C70U47NF.js";
// src/modules/profile/getGuildALink.js
var s = 0, c = 0;
function l() {
	return s ||= (c = o("#pCC a").find(a(i)), !0), c;
}
// src/modules/profile/getIsOwnGuild.js
var u = null;
function d() {
	let e = l();
	if (e) {
		let t = n(r, e.href);
		if (t) return Number(t);
	}
}
function f() {
	return t(u) && (u = d() === e()), u;
}
export { l as n, f as t };

//# sourceMappingURL=getIsOwnGuild-CPgvrNx5.js.map