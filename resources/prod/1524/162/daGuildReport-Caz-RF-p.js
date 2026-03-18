import { t as e } from "./getTextTrim-Wj82yPPN.js";
import { t } from "./_dataAccess-tuhLVrPW.js";
import { t as n } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as r } from "./querySelectorArray-BZbNvND7.js";
import { t as i } from "./guildInventory-BO2v5nuo.js";
import { t as a } from "./itemId-Cw5TvBrf.js";
//#region src/modules/app/guild/inventory/report.js
function o() {
	return i({ subcmd2: "report" });
}
//#endregion
//#region src/modules/_dataAccess/daGuildReport.js
function s(t) {
	if (!t.children[0].href) return {
		a: -1,
		n: "-1",
		t: -1
	};
	let n = Number(a(t.children[0].href)), r = e(t.previousElementSibling), i = { a: n };
	return r.endsWith(" (Potion)") ? (i.n = r.slice(0, -9), i.t = 15) : (i.n = r, i.t = -1), i;
}
function c(e) {
	return e ? {
		r: r("#pCC table table td:nth-of-type(3n)", e).map(s),
		s: !0
	} : { s: !1 };
}
async function l() {
	return c(await n({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "report"
	}));
}
function u() {
	return t(o, l);
}
//#endregion
export { u as t };

//# sourceMappingURL=daGuildReport-Caz-RF-p.js.map