import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./guildGroups-Bd785V-E.js";
import { n } from "./attribsToArray-Bd0J_KyI.js";
import { t as r } from "./_dataAccess-BLVLQyDJ.js";
// src/modules/app/guild/groups/viewStats.js
function i(e) {
	return t({
		subcmd2: "viewstats",
		group_id: e
	});
}
// src/modules/_dataAccess/daGroupStats.js
function a(e) {
	if (!e) return { s: !1 };
	let t = n(e);
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
async function o(t) {
	return a(await e({
		cmd: "guild",
		subcmd: "groups",
		subcmd2: "viewstats",
		group_id: t
	}));
}
function s(e) {
	return r(i, o, e);
}
export { s as t };

//# sourceMappingURL=daGroupStats-CIDZ7nZl.js.map