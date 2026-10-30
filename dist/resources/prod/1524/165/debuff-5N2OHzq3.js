import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getCustomUrlParameter-C5vi2hsN.js";
import { t as n } from "./partial-Bo20zBni.js";
import { t as r } from "./sendEvent-DkxfZozg.js";
import { t as i } from "./setInnerHtml-f0MFRJnQ.js";
import { t as a } from "./_dataAccess-BLVLQyDJ.js";
import { t as o } from "./aGenericFallback-C6VAMq13.js";
import { t as s } from "./navigateTo-CS33u2a7.js";
import { t as c } from "./profile-BZrU9oa_.js";
import { t as l } from "./onclick-nv-Fl1th.js";
import { t as u } from "./hideQTip-BN4jwVBE.js";
import { t as d } from "./errorDialog-CK0T_lOR.js";
// src/modules/app/profile/removeskill.js
function f(e) {
	return c({
		subcmd: "removeskill",
		skill_id: e
	});
}
// src/modules/_dataAccess/daRemoveSkill.js
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
// src/modules/profile/ifSelf/debuff.js
function h(e, t) {
	t?.s && i("", e.parentNode);
}
async function g(e, n) {
	if (e) {
		r("profile", "doDebuff");
		let e = await m(t(n.href, "skill_id"));
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
export { b as default };

//# sourceMappingURL=debuff-5N2OHzq3.js.map