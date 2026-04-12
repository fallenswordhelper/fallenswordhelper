import { t as e } from "./_dataAccess-Cm9xXxBc.js";
import { t } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as n } from "./guildGroups-DmUYYeHO.js";
import { n as r } from "./attribsToArray-DXTtRlj5.js";
//#region src/modules/app/guild/groups/viewStats.js
function i(e) {
	return n({
		subcmd2: "viewstats",
		group_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daGroupStats.js
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
//#endregion
export { s as t };

//# sourceMappingURL=daGroupStats-BzaRa6E6.js.map