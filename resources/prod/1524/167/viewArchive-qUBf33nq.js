import { n as e, t } from "./setupPref-DCbFtdBT.js";
import { t as n } from "./containsText-BpUZGVhy.js";
import { t as r } from "./getElementsByTagName-B8gMqefB.js";
import { t as i } from "./getText-BqjgTHLv.js";
import { K as a, T as o } from "./constants-CenxlFMY.js";
import { t as s } from "./layout-B2Q1UoM2.js";
import { t as c } from "./getValue-vrUqpo0a.js";
import { t as l } from "./parseDateAsTimestamp-CdtzIDN9.js";
import { t as u } from "./setValue-D-C74rTg.js";
// src/modules/news/viewArchive.js
var d = 0, f = 0;
function p(e) {
	if (f && n("PvP Ladder", e.children[1].children[0])) {
		let t = l(i(e.children[1].children[2]).replace("Posted: ", ""));
		t > d && (u(o, t), d = t);
	}
}
var m = (e) => e > 1;
function h() {
	d = c(o), f = c("trackLadderReset");
	let n = "collapseNewsArchive", i = r(a, s());
	i.length > 2 && (t(n, i[0].rows[1].cells[0]), e({
		prefName: n,
		theTable: i[2],
		headInd: 7,
		articleTest: m,
		extraFn: p
	}));
}
export { h as default };

//# sourceMappingURL=viewArchive-qUBf33nq.js.map