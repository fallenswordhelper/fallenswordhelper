import { K as e } from "./constants-CIKidKvt.js";
import { t } from "./on-afIPYx-0.js";
import { t as n } from "./getElementsByTagName-CkoUUI_g.js";
import { t as r } from "./layout-6CPY-bfq.js";
import { t as i } from "./sendEvent-DFQy5lFi.js";
import { t as a } from "./formToUrl-Ddokm5n9.js";
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

//# sourceMappingURL=globalQuest-3TOh1LPT.js.map