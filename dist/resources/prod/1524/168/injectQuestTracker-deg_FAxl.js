import { t as e } from "./getElementsByTagName-B8gMqefB.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as r } from "./onclick-nv-Fl1th.js";
import { t as i } from "./layout-B2Q1UoM2.js";
import { t as a } from "./getUrlParameter--C3_Eqez.js";
import { t as o } from "./getValue-DMlY7SSn.js";
import { n as s, t as c } from "./questEvent-ChTyL9Xu.js";
// src/modules/questbook/injectQuestTracker.js
function l() {
	let t = o("lastActiveQuestPage");
	t.length > 0 && (e("a", i())[0].href = t);
}
function u(n) {
	let r = e("font", n);
	return r.length === 2 ? t(r[1]).replace(/"/g, "") : "";
}
function d() {
	let t = e("td", i())[0];
	n(t, s(a("quest_id"), u(t))), r(t, c("Quest Tracker"));
}
function f() {
	i() && (l(), d());
}
export { f as default };

//# sourceMappingURL=injectQuestTracker-deg_FAxl.js.map