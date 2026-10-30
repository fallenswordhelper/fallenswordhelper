import { t as e } from "./sendException-DStaKIsB.js";
import { t } from "./playerName-DbmV53SI.js";
import { t as n } from "./isObject-BL3L1f85.js";
import { t as r } from "./jsonStringify-DbCVtu3B.js";
import { t as i } from "./getTextTrim-CvXe85fp.js";
import { t as a } from "./currentGuildId-WKn2jVcy.js";
import { t as o } from "./entries-PXiXtjwA.js";
import { t as s } from "./myStats-HD1oSI27.js";
import { t as c } from "./all-D5SlTl7_.js";
import { t as l } from "./getMembrList-D7ixdxPX.js";
// src/modules/logs/playerLogWidgets/isAllyEnemy.js
var u = (e) => e.username, d = null;
async function f() {
	let n = await s(!1);
	return n?.username === t() ? (n._allies && n._enemies || e(`myStats returned ${r(n)}`), {
		...n._allies && { _allies: n._allies.map(u) },
		...n._enemies && { _enemies: n._enemies.map(u) }
	}) : {};
}
function p() {
	return d ||= f(), d;
}
async function m(e) {
	return (await p())._allies?.includes(e);
}
async function h(e) {
	return (await p())._enemies?.includes(e);
}
// src/modules/logs/playerLogWidgets/isGuildMate.js
var g = null;
async function _() {
	let e = await l(!1);
	if (e) return o(e).filter(([, e]) => n(e)).map(([e]) => e);
}
async function v(e) {
	return a() && !g && (g = _()), (await g)?.includes(e);
}
// src/modules/logs/playerLogWidgets/relatePlayer.js
async function y(e) {
	let t = "", n = i(e), [r, a, o] = await c([
		v(n),
		m(n),
		h(n)
	]);
	return r ? t = "guild" : a ? t = "ally" : o && (t = "enemy"), [e, t];
}
export { v as n, y as t };

//# sourceMappingURL=relatePlayer-CqYg26XD.js.map