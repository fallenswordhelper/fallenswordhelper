import { t as e } from "./regExpFirstCapture-Bi32xMqS.js";
import { n as t } from "./isUndefined-Dfbc1KRP.js";
import { it as n, ot as r } from "./constants-CIKidKvt.js";
import { t as i } from "./querySelector-8FH1hhUv.js";
import { t as a } from "./currentGuildId-D9JtVH2U.js";
//#region src/modules/profile/getGuildALink.js
var o = 0, s = 0;
function c() {
	return o ||= (s = i(`#pCC a[href^="${r}"]`), !0), s;
}
//#endregion
//#region src/modules/profile/getIsOwnGuild.js
var l = null;
function u() {
	let t = c();
	if (t) {
		let r = e(n, t.href);
		if (r) return Number(r);
	}
}
function d() {
	return t(l) && (l = u() === a()), l;
}
//#endregion
export { c as n, d as t };

//# sourceMappingURL=getIsOwnGuild-Bq1tRG4B.js.map