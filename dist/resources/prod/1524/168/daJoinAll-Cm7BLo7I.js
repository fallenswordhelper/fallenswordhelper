import { t as e } from "./indexAjaxData-BAm_dTyc.js";
import { t } from "./guildGroups-Bd785V-E.js";
import { t as n } from "./all-D5SlTl7_.js";
import { t as r } from "./_dataAccess-BLVLQyDJ.js";
// src/modules/app/guild/groups/joinall.js
function i(e) {
	return t({
		subcmd2: "joinall",
		group: e
	});
}
// src/modules/_dataAccess/daJoinAll.js
function a(t) {
	return e({
		cmd: "guild",
		subcmd: "groups",
		subcmd2: "join",
		group_id: t
	});
}
function o(e) {
	return n(e.map(a));
}
function s(e) {
	return r(i, o, e);
}
export { s as t };

//# sourceMappingURL=daJoinAll-Cm7BLo7I.js.map