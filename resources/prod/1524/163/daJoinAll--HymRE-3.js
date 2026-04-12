import { t as e } from "./_dataAccess-Cm9xXxBc.js";
import { t } from "./indexAjaxData-yJPb4vet.js";
import { t as n } from "./guildGroups-DmUYYeHO.js";
import { t as r } from "./all-Csir9X7x.js";
//#region src/modules/app/guild/groups/joinall.js
function i(e) {
	return n({
		subcmd2: "joinall",
		group: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daJoinAll.js
function a(e) {
	return t({
		cmd: "guild",
		subcmd: "groups",
		subcmd2: "join",
		group_id: e
	});
}
function o(e) {
	return r(e.map(a));
}
function s(t) {
	return e(i, o, t);
}
//#endregion
export { s as t };

//# sourceMappingURL=daJoinAll--HymRE-3.js.map