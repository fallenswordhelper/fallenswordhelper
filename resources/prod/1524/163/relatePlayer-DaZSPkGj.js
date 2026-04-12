import { t as e } from "./sendException-ezSEAahU.js";
import { t } from "./playerName-WE8p-OHq.js";
import { t as n } from "./isObject-DwzOQgsf.js";
import { t as r } from "./jsonStringify-bep_7uul.js";
import { t as i } from "./getTextTrim-hYBF-bdh.js";
import { t as a } from "./currentGuildId-D9JtVH2U.js";
import { t as o } from "./entries-CiJ6YMwx.js";
import { t as s } from "./myStats-ZLRBhQB-.js";
import { t as c } from "./all-Csir9X7x.js";
import { t as l } from "./getMembrList-8D_88xrl.js";
//#region src/modules/logs/playerLogWidgets/isAllyEnemy.js
var u = (e) => e.username, d = null;
async function f() {
	let n = await s(!1);
	return n?.username === t() ? ((!n._allies || !n._enemies) && e(`myStats returned ${r(n)}`), {
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
//#endregion
//#region src/modules/logs/playerLogWidgets/isGuildMate.js
var g = null;
async function _() {
	let e = await l(!1);
	if (e) return o(e).filter(([, e]) => n(e)).map(([e]) => e);
}
async function v(e) {
	return a() && !g && (g = _()), (await g)?.includes(e);
}
//#endregion
//#region src/modules/logs/playerLogWidgets/relatePlayer.js
async function y(e) {
	let t = "", n = i(e), [r, a, o] = await c([
		v(n),
		m(n),
		h(n)
	]);
	return r ? t = "guild" : a ? t = "ally" : o && (t = "enemy"), [e, t];
}
//#endregion
export { v as n, y as t };

//# sourceMappingURL=relatePlayer-DaZSPkGj.js.map