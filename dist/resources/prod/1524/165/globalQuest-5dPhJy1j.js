import { K as e } from "./constants-CenxlFMY.js";
import { t } from "./on-DfyX3AS4.js";
import { t as n } from "./getElementsByTagName-B8gMqefB.js";
import { t as r } from "./layout-B2Q1UoM2.js";
import { t as i } from "./sendEvent-DkxfZozg.js";
import { t as a } from "./formToUrl-DUfR906g.js";
// src/modules/topRated/globalQuest.js
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
export { c as default };

//# sourceMappingURL=globalQuest-5dPhJy1j.js.map