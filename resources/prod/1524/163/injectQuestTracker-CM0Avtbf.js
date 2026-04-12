import { t as e } from "./getText-BybFkJV6.js";
import { t } from "./getValue-j5JjE6f3.js";
import { t as n } from "./getUrlParameter-OG9FsMwx.js";
import { t as r } from "./getElementsByTagName-CkoUUI_g.js";
import { t as i } from "./layout-6CPY-bfq.js";
import { t as a } from "./onclick-8ZwMJyqI.js";
import { t as o } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { n as s, t as c } from "./questEvent-CZxB4NjL.js";
//#region src/modules/questbook/injectQuestTracker.js
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
//#endregion
export { f as default };

//# sourceMappingURL=injectQuestTracker-CM0Avtbf.js.map