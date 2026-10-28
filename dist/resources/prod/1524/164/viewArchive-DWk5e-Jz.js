import { t as e } from "./getText-BqjgTHLv.js";
import { K as t, T as n } from "./constants-CenxlFMY.js";
import { t as r } from "./getValue-Aap0zlcO.js";
import { t as i } from "./setValue-B1MbQwxn.js";
import { t as a } from "./getElementsByTagName-B8gMqefB.js";
import { t as o } from "./layout-B2Q1UoM2.js";
import { t as s } from "./containsText-BpUZGVhy.js";
import { t as c } from "./parseDateAsTimestamp-CdtzIDN9.js";
import { n as l, t as u } from "./setupPref-BZx0Lqaf.js";
// src/modules/news/viewArchive.js
var d = 0, f = 0;
function p(t) {
	if (f && s("PvP Ladder", t.children[1].children[0])) {
		let r = c(e(t.children[1].children[2]).replace("Posted: ", ""));
		r > d && (i(n, r), d = r);
	}
}
var m = (e) => e > 1;
function h() {
	d = r(n), f = r("trackLadderReset");
	let e = "collapseNewsArchive", i = a(t, o());
	i.length > 2 && (u(e, i[0].rows[1].cells[0]), l({
		prefName: e,
		theTable: i[2],
		headInd: 7,
		articleTest: m,
		extraFn: p
	}));
}
export { h as default };

//# sourceMappingURL=viewArchive-DWk5e-Jz.js.map