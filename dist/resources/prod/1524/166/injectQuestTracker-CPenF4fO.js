import { t as e } from "./getText-BqjgTHLv.js";
import { t } from "./getValue-sxwJaOE3.js";
import { t as n } from "./getUrlParameter-DQUJPuXf.js";
import { t as r } from "./getElementsByTagName-B8gMqefB.js";
import { t as i } from "./layout-B2Q1UoM2.js";
import { t as a } from "./onclick-nv-Fl1th.js";
import { t as o } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { n as s, t as c } from "./questEvent-DCyjceDT.js";
// src/modules/questbook/injectQuestTracker.js
function l() {
	let e = t("lastActiveQuestPage");
	e.length > 0 && (r("a", i())[0].href = e);
}
function u(t) {
	let n = r("font", t);
	return n.length === 2 ? e(n[1]).replace(/"/g, "") : "";
}
function d() {
	let e = r("td", i())[0];
	o(e, s(n("quest_id"), u(e))), a(e, c("Quest Tracker"));
}
function f() {
	i() && (l(), d());
}
export { f as default };

//# sourceMappingURL=injectQuestTracker-CPenF4fO.js.map