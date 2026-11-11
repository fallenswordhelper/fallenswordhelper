import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./guildInventory-Cb6J3fhR.js";
import { t as n } from "./getTextTrim-CvXe85fp.js";
import { t as r } from "./querySelectorArray-C70U47NF.js";
import { t as i } from "./itemId-d9adhb0C.js";
import { t as a } from "./_dataAccess-BLVLQyDJ.js";
// src/modules/app/guild/inventory/report.js
function o() {
	return t({ subcmd2: "report" });
}
// src/modules/_dataAccess/daGuildReport.js
function s(e) {
	if (!e.children[0].href) return {
		a: -1,
		n: "-1",
		t: -1
	};
	let t = Number(i(e.children[0].href)), r = n(e.previousElementSibling), a = { a: t };
	return r.endsWith(" (Potion)") ? (a.n = r.slice(0, -9), a.t = 15) : (a.n = r, a.t = -1), a;
}
function c(e) {
	return e ? {
		r: r("#pCC table table td:nth-of-type(3n)", e).map(s),
		s: !0
	} : { s: !1 };
}
async function l() {
	return c(await e({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "report"
	}));
}
function u() {
	return a(o, l);
}
export { u as t };

//# sourceMappingURL=daGuildReport-i6VvPcLw.js.map