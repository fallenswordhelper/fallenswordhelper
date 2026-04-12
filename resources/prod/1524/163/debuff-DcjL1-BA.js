import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./regExpFirstCapture-Bi32xMqS.js";
import { t as n } from "./partial-CYzPXpZP.js";
import { t as r } from "./sendEvent-DFQy5lFi.js";
import { t as i } from "./setInnerHtml-Dh9y9Se-.js";
import { t as a } from "./_dataAccess-Cm9xXxBc.js";
import { t as o } from "./aGenericFallback-hK73Fv-s.js";
import { t as s } from "./navigateTo-DSpjkQ0R.js";
import { t as c } from "./profile-DolCHxvz.js";
import { t as l } from "./onclick-8ZwMJyqI.js";
import { t as u } from "./hideQTip-C_38AHJv.js";
import { t as d } from "./errorDialog-CwxmqjPI.js";
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

//# sourceMappingURL=debuff-DcjL1-BA.js.map