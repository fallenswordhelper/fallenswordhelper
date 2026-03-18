import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t as n } from "./partial-goh6HOls.js";
import { t as r } from "./sendEvent-bwvhd4A-.js";
import { t as i } from "./setInnerHtml-ClDKp0Zh.js";
import { t as a } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import { t as o } from "./aGenericFallback-uC2pHFMR.js";
import { t as s } from "./navigateTo-CDpyk-TN.js";
import { t as c } from "./profile-DwNdicRm.js";
import { t as l } from "./onclick-9iRduoOH.js";
import { t as u } from "./hideQTip-DvP2VIxD.js";
import { t as d } from "./errorDialog-B7xXYZmL.js";
//#region src/modules/app/profile/removeskill.js
function f(e) {
	return c({
		subcmd: "removeskill",
		skill_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daRemoveSkill.js
function p(e) {
	return o({
		cmd: "profile",
		subcmd: "removeskill",
		skill_id: e
	}, "Skill de-activated successfully.");
}
function m(e) {
	return a(f, p, e);
}
//#endregion
//#region src/modules/profile/ifSelf/debuff.js
function h(e, t) {
	t?.s && i("", e.parentNode);
}
async function g(e, n) {
	if (e) {
		r("profile", "doDebuff");
		let e = await m(t(/d=(?<id>\d{1,3})$/, n.href));
		d(e), h(n, e);
	} else s(n.href);
}
function _(e) {
	let t = e;
	return t.tagName === "IMG" && (u(e), t = t.parentNode), t;
}
function v(e) {
	e.eventPhase === 1 && e.stopPropagation();
}
function y(e, t) {
	if (!t.returnValue) return;
	let n = _(t.target);
	n.tagName === "A" && (v(t), t.preventDefault(), g(e, n));
}
function b(t, r) {
	let i = e("profileRightColumn");
	i && l(i.lastElementChild, n(y, t), r);
}
//#endregion
export { b as default };

//# sourceMappingURL=debuff-ChCA4-NS.js.map