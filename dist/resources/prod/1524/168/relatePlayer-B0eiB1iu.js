import { t as e } from "./all-D5SlTl7_.js";
import { t } from "./getTextTrim-CvXe85fp.js";
import { t as n } from "./myStats-BWnLkvy4.js";
import { t as r } from "./jsonStringify-DbCVtu3B.js";
import { t as i } from "./playerName-DbmV53SI.js";
import { t as a } from "./sendException-BE-Wb9b3.js";
import { t as o } from "./getMembrList-DQELBcHH.js";
import { t as s } from "./currentGuildId-Bpd4l1O8.js";
import { t as c } from "./entries-PXiXtjwA.js";
import { t as l } from "./isObject-BL3L1f85.js";
// src/modules/logs/playerLogWidgets/isAllyEnemy.js
var u = (e) => e.username, d = null;
async function f() {
	let e = await n(!1);
	return e?.username === i() ? (e._allies && e._enemies || a(`myStats returned ${r(e)}`), {
		...e._allies && { _allies: e._allies.map(u) },
		...e._enemies && { _enemies: e._enemies.map(u) }
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
	let e = await o(!1);
	if (e) return c(e).filter(([, e]) => l(e)).map(([e]) => e);
}
async function v(e) {
	return s() && !g && (g = _()), (await g)?.includes(e);
}
// src/modules/logs/playerLogWidgets/relatePlayer.js
async function y(n) {
	let r = "", i = t(n), [a, o, s] = await e([
		v(i),
		m(i),
		h(i)
	]);
	return a ? r = "guild" : o ? r = "ally" : s && (r = "enemy"), [n, r];
}
export { v as n, y as t };

//# sourceMappingURL=relatePlayer-B0eiB1iu.js.map