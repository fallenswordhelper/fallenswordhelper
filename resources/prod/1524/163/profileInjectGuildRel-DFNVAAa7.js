import { t as e } from "./getText-BybFkJV6.js";
import { t } from "./getValue-j5JjE6f3.js";
import { t as n } from "./setValue-31jE_mRr.js";
import { t as r } from "./toLowerCase-8GoRkIKu.js";
import { t as i } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as a } from "./shouldBeArray-BzdR7PDL.js";
import { t as o } from "./getIsSelf-DI8DXIi8.js";
import { t as s } from "./replaceDoubleSpace-NbBEMkD8.js";
import { n as c, t as l } from "./getIsOwnGuild-Bq1tRG4B.js";
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

//# sourceMappingURL=profileInjectGuildRel-DFNVAAa7.js.map