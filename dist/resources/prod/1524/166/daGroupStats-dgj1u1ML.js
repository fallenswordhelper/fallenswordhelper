import { t as e } from "./_dataAccess-BLVLQyDJ.js";
import { t } from "./indexAjaxDoc-WR96kHce.js";
import { t as n } from "./guildGroups-D1tVaVYo.js";
import { n as r } from "./attribsToArray-Bd0J_KyI.js";
// src/modules/app/guild/groups/viewStats.js
function i(e) {
	return n({
		subcmd2: "viewstats",
		group_id: e
	});
}
// src/modules/_dataAccess/daGroupStats.js
function a(e) {
	if (!e) return { s: !1 };
	let t = r(e);
	return { r: { attributes: [
		{
			id: 0,
			value: t.attack
		},
		{
			id: 1,
			value: t.defense
		},
		{
			id: 2,
			value: t.armor
		},
		{
			id: 4,
			value: t.damage
		},
		{
			id: 3,
			value: t.hp
		}
	] } };
}
async function o(e) {
	return a(await t({
		cmd: "guild",
		subcmd: "groups",
		subcmd2: "viewstats",
		group_id: e
	}));
}
function s(t) {
	return e(i, o, t);
}
export { s as t };

//# sourceMappingURL=daGroupStats-dgj1u1ML.js.map