import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getCustomUrlParameter-C5vi2hsN.js";
import { t as n } from "./sendEvent-yx1DwCDA.js";
import { t as r } from "./setInnerHtml-f0MFRJnQ.js";
import { t as i } from "./_dataAccess-BLVLQyDJ.js";
import { t as a } from "./aGenericFallback-C6VAMq13.js";
import { t as o } from "./profile-BZrU9oa_.js";
import { t as s } from "./onclick-nv-Fl1th.js";
import { t as c } from "./hideQTip-BN4jwVBE.js";
import { t as l } from "./skipGamePrompts-C2gSoGiV.js";
import { t as u } from "./errorDialog-CK0T_lOR.js";
// src/modules/app/profile/removeskill.js
function d(e) {
	return o({
		subcmd: "removeskill",
		skill_id: e
	});
}
// src/modules/_dataAccess/daRemoveSkill.js
function f(e) {
	return a({
		cmd: "profile",
		subcmd: "removeskill",
		skill_id: e
	}, "Skill de-activated successfully.");
}
function p(e) {
	return i(d, f, e);
}
// src/modules/profile/ifSelf/debuff.js
var m = [/^Are you sure you wish to remove the .+ skill\?$/];
function h(e, t) {
	t?.s && r("", e.parentNode);
}
async function g(e) {
	n("profile", "doDebuff");
	let r = await p(t(e.href, "skill_id"));
	u(r), h(e, r);
}
function _(e) {
	return e.tagName === "IMG" ? (c(e), e.parentNode) : e;
}
var v = (e) => !("confirm" in e.dataset) || !!window.jQuery?.(e).data("fsConfirmed");
function y(e) {
	if (e.defaultPrevented) return;
	let t = _(e.target);
	t.tagName === "A" && v(t) && (e.preventDefault(), g(t));
}
function b(t, n) {
	n && l("disableDeactivatePrompts", m);
	let r = e("profileRightColumn");
	t && r && s(r.lastElementChild, y);
}
export { b as default };

//# sourceMappingURL=debuff-gmaUKNsh.js.map