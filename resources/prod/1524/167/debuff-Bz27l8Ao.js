import { t as e } from "./profile-By-S2hRI.js";
import { t } from "./_dataAccess-BLVLQyDJ.js";
import { t as n } from "./aGenericFallback-6foHv24I.js";
import { t as r } from "./sendEvent-Co2_qySS.js";
import { t as i } from "./errorDialog-CK0T_lOR.js";
import { t as a } from "./getElementById-C08-3H-C.js";
import { t as o } from "./hideQTip-BN4jwVBE.js";
import { t as s } from "./onclick-nv-Fl1th.js";
import { t as c } from "./skipGamePrompts-DWjM_T46.js";
import { t as l } from "./setInnerHtml-f0MFRJnQ.js";
import { t as u } from "./getCustomUrlParameter-C5vi2hsN.js";
// src/modules/app/profile/removeskill.js
function d(t) {
	return e({
		subcmd: "removeskill",
		skill_id: t
	});
}
// src/modules/_dataAccess/daRemoveSkill.js
function f(e) {
	return n({
		cmd: "profile",
		subcmd: "removeskill",
		skill_id: e
	}, "Skill de-activated successfully.");
}
function p(e) {
	return t(d, f, e);
}
// src/modules/profile/ifSelf/debuff.js
var m = [/^Are you sure you wish to remove the .+ skill\?$/];
function h(e, t) {
	t?.s && l("", e.parentNode);
}
async function g(e) {
	r("profile", "doDebuff");
	let t = await p(u(e.href, "skill_id"));
	i(t), h(e, t);
}
function _(e) {
	return e.tagName === "IMG" ? (o(e), e.parentNode) : e;
}
var v = (e) => !("confirm" in e.dataset) || !!window.jQuery?.(e).data("fsConfirmed");
function y(e) {
	if (e.defaultPrevented) return;
	let t = _(e.target);
	t.tagName === "A" && v(t) && (e.preventDefault(), g(t));
}
function b(e, t) {
	t && c("disableDeactivatePrompts", m);
	let n = a("profileRightColumn");
	e && n && s(n.lastElementChild, y);
}
export { b as default };

//# sourceMappingURL=debuff-Bz27l8Ao.js.map