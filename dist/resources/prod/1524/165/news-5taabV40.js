import { t as e } from "./getText-BqjgTHLv.js";
import { t } from "./regExpExec-JYUpFNim.js";
import { t as n } from "./regExpFirstCapture-D_QeHFEY.js";
import { Pt as r, T as i, a, mt as o, nt as s } from "./constants-CenxlFMY.js";
import { t as c } from "./getValue-Aap0zlcO.js";
import { t as l } from "./setValue-B2O8DHLF.js";
import { t as u } from "./arrayFrom-CKk6qt2j.js";
import { t as d } from "./partial-Bo20zBni.js";
import { t as f } from "./layout-B2Q1UoM2.js";
import { t as p } from "./sendEvent-DkxfZozg.js";
import { t as m } from "./getElementsByClassName-DQB1YOHi.js";
import { t as h } from "./getArrayByClassName-RPqCUmVz.js";
import { t as g } from "./containsText-BpUZGVhy.js";
import { t as _ } from "./onclick-nv-Fl1th.js";
import { t as v } from "./querySelectorArray-C70U47NF.js";
import { t as y } from "./hrefIs-BYc01uXZ.js";
import { t as b } from "./createAnchor-BMaWUfMc.js";
import { t as x } from "./parseDateAsTimestamp-CdtzIDN9.js";
import { t as S } from "./insertHtmlAfterEnd-DMHOI0WH.js";
import { n as C, t as w } from "./ufsgMonsterLink-HaSuIuny.js";
// src/modules/news/addUfsgLinks.js
var T = /(?<a> titan has been spotted in )(?<b>[^!]+)(?<c>!)/, E = (e) => `${s}realms&search_name=${encodeURIComponent(e)}`, D = (e) => b({
	href: `${E(e)}`,
	textContent: e,
	target: "_blank"
});
function O(e) {
	return T.test(e.lastChild.nodeValue);
}
function k(e) {
	return o.test(e.dataset.tipped);
}
function A(e) {
	let [, n, r] = u(e.childNodes), i = t(T, r.nodeValue), a = D(i[2]);
	e.replaceChildren(n, i[1], a), _(a, () => p("news", "Titan location link"));
}
function j() {
	v(".news_body img[src*=\"/creatures/\"]").forEach(d(w, "news")), v(".news_body a[data-tipped*=\"/creatures/\"],.news_body_tavern a[data-tipped*=\"/creatures/\"]").filter(k).forEach((e) => {
		let t = n(o, e.dataset.tipped);
		C("news", t, e);
	}), h("news_body_tavern", f()).filter(O).forEach(A);
}
// src/modules/news/injectHomePageTwoLink.js
var M = "News", N = "Updates", P = (e) => `View ${e} Page 2`, F = (e, t) => `&nbsp;<a href="${e}&page=2">${P(t)}</a>`, I = (e) => v("#pCC a").find(y(e));
function L() {
	let t = I(r);
	if (!t) return;
	S(t, F(r, N));
	let n = I(a);
	S(n, F(a, M));
	let i = m("news_left_column");
	i.length === 1 && _(i[0], (t) => {
		e(t.target) === P(N) && p(M, P(N)), e(t.target) === P(M) && p(M, P(M));
	});
}
// src/modules/news/lookForPvPLadder.js
var R = (e) => g("PvP Ladder", e.children[1]), z = (t) => x(e(t.children[2]));
function B() {
	let e = h("news_head_tavern", f()).filter(R).map(z), t = Math.max.apply(null, e);
	t > c("lastLadderReset") && l(i, t);
}
// src/modules/news/news.js
function V() {
	c("pageTwoLinks") && L(), c("addUfsgLinks") && j(), c("trackLadderReset") && B();
}
export { V as default };

//# sourceMappingURL=news-5taabV40.js.map