import { t as e } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { K as t, T as n } from "./constants-C54mky4_.js";
import { t as r } from "./getValue-CCThXEzy.js";
import { t as i } from "./setValue-Cb0PYC7t.js";
import { t as a } from "./getElementsByTagName-BUN1mNPF.js";
import { t as o } from "./layout-Bapa39KM.js";
import "./sendEvent-bwvhd4A-.js";
import { t as s } from "./containsText-s1xoTwSh.js";
import "./dateUtc-CzlnFLKV.js";
import { t as c } from "./parseDateAsTimestamp-BNkjD7hF.js";
import "./simpleCheckbox-D5o0QaTA.js";
import { n as l, t as u } from "./setupPref-D37JOyGS.js";
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

//# sourceMappingURL=viewArchive-CDISUIH_.js.map