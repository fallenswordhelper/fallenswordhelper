import { t as e } from "./getText-BybFkJV6.js";
import { K as t, T as n } from "./constants-CIKidKvt.js";
import { t as r } from "./getValue-j5JjE6f3.js";
import { t as i } from "./setValue-31jE_mRr.js";
import { t as a } from "./getElementsByTagName-CkoUUI_g.js";
import { t as o } from "./layout-6CPY-bfq.js";
import { t as s } from "./containsText-DYGH6hdF.js";
import { t as c } from "./parseDateAsTimestamp-DjNjeXQc.js";
import { n as l, t as u } from "./setupPref-m6kQ29tn.js";
//#region src/modules/news/viewArchive.js
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
//#endregion
export { h as default };

//# sourceMappingURL=viewArchive-CXnrSWjW.js.map