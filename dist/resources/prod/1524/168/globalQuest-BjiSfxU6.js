import { t as e } from "./sendEvent-DdWrU3DL.js";
import { t } from "./formToUrl-DUfR906g.js";
import { t as n } from "./getElementsByTagName-B8gMqefB.js";
import { t as r } from "./on-DfyX3AS4.js";
import { K as i } from "./constants-CenxlFMY.js";
import { t as a } from "./layout-B2Q1UoM2.js";
// src/modules/topRated/globalQuest.js
function o(n) {
	e("toprated", "globalQuestAllowBack"), t({ target: n.target.form });
}
function s(e) {
	let [t] = n("select", e);
	$(t).off(), r(a(), "change", o);
}
function c() {
	if (!a()) return;
	let e = n(i, a());
	e.length < 4 || s(e[3]);
}
export { c as default };

//# sourceMappingURL=globalQuest-BjiSfxU6.js.map