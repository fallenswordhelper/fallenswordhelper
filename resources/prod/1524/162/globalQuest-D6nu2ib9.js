import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { K as e } from "./constants-C54mky4_.js";
import { t } from "./on-f-HmOL0n.js";
import { t as n } from "./getElementsByTagName-BUN1mNPF.js";
import { t as r } from "./layout-Bapa39KM.js";
import { t as i } from "./sendEvent-bwvhd4A-.js";
import { t as a } from "./formToUrl-BROd6YBE.js";
//#region src/modules/topRated/globalQuest.js
function o(e) {
	i("toprated", "globalQuestAllowBack"), a({ target: e.target.form });
}
function s(e) {
	let [i] = n("select", e);
	$(i).off(), t(r(), "change", o);
}
function c() {
	if (!r()) return;
	let t = n(e, r());
	t.length < 4 || s(t[3]);
}
//#endregion
export { c as default };

//# sourceMappingURL=globalQuest-D6nu2ib9.js.map