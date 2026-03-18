import { t as e } from "./_dataAccess-tuhLVrPW.js";
import { t } from "./indexAjaxData-CqOTihOX.js";
import { t as n } from "./guildGroups-x1CpLch7.js";
import { t as r } from "./all-Dy4LjBGw.js";
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

//# sourceMappingURL=daJoinAll-CMq-thOm.js.map