import { t as e } from "./getText-BqjgTHLv.js";
import { t } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as n } from "./replaceDoubleSpace-CeATU0oi.js";
import { t as r } from "./toLowerCase-Cpm0Ikhj.js";
import { t as i } from "./escapeHtml-WWxg1ScF.js";
import { t as a } from "./getValue-DMlY7SSn.js";
import { t as o } from "./setValue-D-C74rTg.js";
import { t as s } from "./shouldBeArray-DntyGKXO.js";
import { n as c, t as l } from "./getIsOwnGuild-CPgvrNx5.js";
import { n as u } from "./profile-um_cFuJl.js";
// src/modules/profile/profileInjectGuildRel.js
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
	let t = s(e);
	return t ? t.map(n).map(r) : [];
}
function m(e) {
	let t = f.map(([e, t]) => [p(e), t]), i = n(r(e)), a = t.find(([e]) => e.includes(i));
	if (a) return a[1];
}
function h(t) {
	return l() ? (o("guildSelf", e(t)), "self") : m(e(t));
}
function g(e, n) {
	let [, r, o] = d.find(([e]) => e === n);
	e.parentNode.classList.add(r);
	let s = a(o);
	s && s.length > 0 && t(e.parentNode, `<br>${i(s)}`);
}
function _(e) {
	let t = h(e);
	t && g(e, t);
}
function v() {
	let e = c();
	e ? _(e) : u() && o("guildSelf", "");
}
export { v as default };

//# sourceMappingURL=profileInjectGuildRel-CAq864O4.js.map