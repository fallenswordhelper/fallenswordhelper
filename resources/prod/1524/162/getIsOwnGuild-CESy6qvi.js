import { t as e } from "./regExpFirstCapture-CdTmAP5x.js";
import { n as t } from "./isUndefined-B3VLlmfL.js";
import { it as n, ot as r } from "./constants-C54mky4_.js";
import { t as i } from "./querySelector-qkBBhiGH.js";
import { t as a } from "./currentGuildId-Br10wzx3.js";
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

//# sourceMappingURL=getIsOwnGuild-CESy6qvi.js.map