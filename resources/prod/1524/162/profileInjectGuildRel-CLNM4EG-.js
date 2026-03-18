import { t as e } from "./getText-rCJDurvG.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./getValue-CCThXEzy.js";
import { t as n } from "./setValue-Cb0PYC7t.js";
import { t as r } from "./toLowerCase-uMYD5EVv.js";
import { t as i } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as a } from "./shouldBeArray-DPM-qLb4.js";
import { t as o } from "./getIsSelf-9nFrsqqO.js";
import { t as s } from "./replaceDoubleSpace-DW7D0zX8.js";
import { n as c, t as l } from "./getIsOwnGuild-CESy6qvi.js";
//#region src/modules/system/escapeHtml.js
function u(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
//#endregion
//#region src/modules/profile/profileInjectGuildRel.js
var d = [
	[
		"self",
		"fshGreen",
		"guildSelfMessage"
	],
	[
		"friendly",
		"fshOliveDrab",
		"guildFrndMessage"
	],
	[
		"old",
		"fshDarkCyan",
		"guildPastMessage"
	],
	[
		"enemy",
		"fshRed",
		"guildEnmyMessage"
	]
], f = [
	["guildFrnd", "friendly"],
	["guildPast", "old"],
	["guildEnmy", "enemy"]
];
function p(e) {
	let t = a(e);
	return t ? t.map(s).map(r) : [];
}
function m(e) {
	let t = f.map(([e, t]) => [p(e), t]), n = s(r(e)), i = t.find(([e]) => e.includes(n));
	if (i) return i[1];
}
function h(t) {
	return l() ? (n("guildSelf", e(t)), "self") : m(e(t));
}
function g(e, n) {
	let [, r, a] = d.find(([e]) => e === n);
	e.parentNode.classList.add(r);
	let o = t(a);
	o && o.length > 0 && i(e.parentNode, `<br>${u(o)}`);
}
function _(e) {
	let t = h(e);
	t && g(e, t);
}
function v() {
	let e = c();
	e ? _(e) : o() && n("guildSelf", "");
}
//#endregion
export { v as default };

//# sourceMappingURL=profileInjectGuildRel-CLNM4EG-.js.map