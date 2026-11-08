import { t as e } from "./getValue-vrUqpo0a.js";
import { t } from "./sendEvent-Co2_qySS.js";
import { t as n } from "./arrayFrom-CKk6qt2j.js";
import { t as r } from "./createAnchor-HiREQnLZ.js";
import { t as i } from "./getArrayByClassName-RPqCUmVz.js";
import { t as a } from "./onclick-nv-Fl1th.js";
import { t as o } from "./partial-Bo20zBni.js";
import { t as s } from "./querySelectorArray-C70U47NF.js";
import { t as c } from "./regExpExec-JYUpFNim.js";
import { t as l } from "./regExpFirstCapture-D_QeHFEY.js";
import { n as u, t as d } from "./ufsgMonsterLink-ClmR8IRr.js";
import { Pt as f, T as p, a as m, mt as h, nt as g } from "./constants-CenxlFMY.js";
import { t as _ } from "./layout-B2Q1UoM2.js";
import { t as v } from "./getElementsByClassName-DQB1YOHi.js";
import { t as y } from "./getText-BqjgTHLv.js";
import { t as b } from "./hrefIs-BYc01uXZ.js";
import { t as x } from "./insertHtmlAfterEnd-DMHOI0WH.js";
import { t as S } from "./containsText-BpUZGVhy.js";
import { t as C } from "./parseDateAsTimestamp-CdtzIDN9.js";
import { t as w } from "./setValue-D-C74rTg.js";
// src/modules/news/addUfsgLinks.js
var T = /(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/, E = (e) => `${g}realms&search_name=${encodeURIComponent(e)}`, D = (e) => r({
	href: `${E(e)}`,
	textContent: e,
	target: "_blank"
});
function O(e) {
	return T.test(e.lastChild.nodeValue);
}
function k(e) {
	return h.test(e.dataset.tipped);
}
function A(e) {
	let [, r, i] = n(e.childNodes), o = c(T, i.nodeValue), s = D(o[2]);
	e.replaceChildren(r, o[1], s), a(s, () => t("news", "Titan location link"));
}
function j() {
	s(".news_body img[src*=\"/creatures/\"]").forEach(o(d, "news")), s(".news_body a[data-tipped*=\"/creatures/\"],.news_body_tavern a[data-tipped*=\"/creatures/\"]").filter(k).forEach((e) => {
		let t = l(h, e.dataset.tipped);
		u("news", t, e);
	}), i("news_body_tavern", _()).filter(O).forEach(A);
}
// src/modules/news/injectHomePageTwoLink.js
var M = "News", N = "Updates", P = (e) => `View ${e} Page 2`, F = (e, t) => `&nbsp;<a href="${e}&page=2">${P(t)}</a>`, I = (e) => s("#pCC a").find(b(e));
function L() {
	let e = I(f);
	if (!e) return;
	x(e, F(f, N));
	let n = I(m);
	x(n, F(m, M));
	let r = v("news_left_column");
	r.length === 1 && a(r[0], (e) => {
		y(e.target) === P(N) && t(M, P(N)), y(e.target) === P(M) && t(M, P(M));
	});
}
// src/modules/news/lookForPvPLadder.js
var R = (e) => S("PvP Ladder", e.children[1]), z = (e) => C(y(e.children[2]));
function B() {
	let t = i("news_head_tavern", _()).filter(R).map(z), n = Math.max.apply(null, t);
	n > e("lastLadderReset") && w(p, n);
}
// src/modules/news/news.js
function V() {
	e("pageTwoLinks") && L(), e("addUfsgLinks") && j(), e("trackLadderReset") && B();
}
export { V as default };

//# sourceMappingURL=news-BjExTB_R.js.map