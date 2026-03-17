import { r as e } from "./now-DpYjGucP.js";
import { dt as t } from "./constants-C54mky4_.js";
import { t as n } from "./regExpGroups-TjYD4DOT.js";
//#region src/modules/common/lastActivity.js
function r(r) {
	let { d: i, h: a, m: o, s } = n(t, r), c = Number(i), l = Number(a) + c * 24, u = Number(o) + l * 60, d = Number(s) + u * 60;
	return {
		day: i,
		days: c,
		hour: a,
		hours: l,
		min: o,
		mins: u,
		sec: s,
		secs: d,
		timestamp: e() - d
	};
}
//#endregion
export { r as t };

//# sourceMappingURL=lastActivity-CUAo9jGH.js.map