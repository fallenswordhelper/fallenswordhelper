import { t as e } from "./getText-BqjgTHLv.js";
import { t } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as n } from "./replaceDoubleSpace-CeATU0oi.js";
import { t as r } from "./toLowerCase-Cpm0Ikhj.js";
import { t as i } from "./getValue-vrUqpo0a.js";
import { t as a } from "./setValue-D-C74rTg.js";
import { t as o } from "./shouldBeArray-uD2_g9Cb.js";
import { n as s, t as c } from "./getIsOwnGuild-CPgvrNx5.js";
import { n as l } from "./profile-B6aWhZZf.js";
// src/modules/system/escapeHtml.js
function u(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
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
	let t = o(e);
	return t ? t.map(n).map(r) : [];
}
function m(e) {
	let t = f.map(([e, t]) => [p(e), t]), i = n(r(e)), a = t.find(([e]) => e.includes(i));
	if (a) return a[1];
}
function h(t) {
	return c() ? (a("guildSelf", e(t)), "self") : m(e(t));
}
function g(e, n) {
	let [, r, a] = d.find(([e]) => e === n);
	e.parentNode.classList.add(r);
	let o = i(a);
	o && o.length > 0 && t(e.parentNode, `<br>${u(o)}`);
}
function _(e) {
	let t = h(e);
	t && g(e, t);
}
function v() {
	let e = s();
	e ? _(e) : l() && a("guildSelf", "");
}
export { v as default };

//# sourceMappingURL=profileInjectGuildRel-ftnTXcMJ.js.map