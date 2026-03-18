import { t as e } from "./getText-rCJDurvG.js";
import { t } from "./regExpExec-6_Ntf_JM.js";
import { t as n } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { Pt as r, T as i, a, mt as o, nt as s } from "./constants-C54mky4_.js";
import { t as c } from "./getValue-CCThXEzy.js";
import { t as l } from "./setValue-Cb0PYC7t.js";
import { t as u } from "./querySelector-qkBBhiGH.js";
import { t as d } from "./arrayFrom-LpiPmbFE.js";
import { t as f } from "./partial-goh6HOls.js";
import { t as p } from "./layout-Bapa39KM.js";
import { t as m } from "./sendEvent-bwvhd4A-.js";
import { t as h } from "./getElementsByClassName-CXrxjAkB.js";
import { t as g } from "./getArrayByClassName-BzDfah40.js";
import { t as _ } from "./containsText-s1xoTwSh.js";
import { t as v } from "./onclick-9iRduoOH.js";
import { t as y } from "./querySelectorArray-BZbNvND7.js";
import { t as b } from "./createAnchor-DH9dG-LN.js";
import "./dateUtc-CzlnFLKV.js";
import { t as x } from "./parseDateAsTimestamp-BNkjD7hF.js";
import { t as S } from "./insertHtmlAfterEnd-UBfyVLKA.js";
import { n as C, t as w } from "./ufsgMonsterLink-B1-WpdeV.js";
//#region src/modules/news/addUfsgLinks.js
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
	let [, n, r] = d(e.childNodes), i = t(T, r.nodeValue), a = D(i[2]);
	e.replaceChildren(n, i[1], a), v(a, () => m("news", "Titan location link"));
}
function j() {
	y(".news_body img[src*=\"/creatures/\"]").forEach(f(w, "news")), y(".news_body a[data-tipped*=\"/creatures/\"],.news_body_tavern a[data-tipped*=\"/creatures/\"]").filter(k).forEach((e) => {
		C("news", n(o, e.dataset.tipped), e);
	}), g("news_body_tavern", p()).filter(O).forEach(A);
}
//#endregion
//#region src/modules/news/injectHomePageTwoLink.js
var M = "News", N = "Updates", P = (e) => `View ${e} Page 2`, F = (e, t) => `&nbsp;<a href="${e}&page=2">${P(t)}</a>`;
function I() {
	let t = u(`#pCC a[href="${r}"]`);
	if (!t) return;
	S(t, F(r, N)), S(u(`#pCC a[href="${a}"]`), F(a, M));
	let n = h("news_left_column");
	n.length === 1 && v(n[0], (t) => {
		e(t.target) === P(N) && m(M, P(N)), e(t.target) === P(M) && m(M, P(M));
	});
}
//#endregion
//#region src/modules/news/lookForPvPLadder.js
var L = (e) => _("PvP Ladder", e.children[1]), R = (t) => x(e(t.children[2]));
function z() {
	let e = g("news_head_tavern", p()).filter(L).map(R), t = Math.max.apply(null, e);
	t > c("lastLadderReset") && l(i, t);
}
//#endregion
//#region src/modules/news/news.js
function B() {
	c("pageTwoLinks") && I(), c("addUfsgLinks") && j(), c("trackLadderReset") && z();
}
//#endregion
export { B as default };

//# sourceMappingURL=news-CJYSFTtU.js.map