import { t as e } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./getValue-CCThXEzy.js";
import { t as n } from "./getUrlParameter-qxOiipWG.js";
import { t as r } from "./getElementsByTagName-BUN1mNPF.js";
import { t as i } from "./layout-Bapa39KM.js";
import "./sendEvent-bwvhd4A-.js";
import { t as a } from "./onclick-9iRduoOH.js";
import { t as o } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { n as s, t as c } from "./questEvent-t7v2VPgP.js";
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

//# sourceMappingURL=injectQuestTracker-DRdXZwvB.js.map