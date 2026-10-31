import { t as e } from "./_dataAccess-BLVLQyDJ.js";
import { t } from "./indexAjaxData-BcvK7Oaz.js";
import { t as n } from "./guildGroups-D1tVaVYo.js";
import { t as r } from "./all-D5SlTl7_.js";
// src/modules/app/guild/groups/joinall.js
function i(e) {
	return n({
		subcmd2: "joinall",
		group: e
	});
}
// src/modules/_dataAccess/daJoinAll.js
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
export { s as t };

//# sourceMappingURL=daJoinAll-C8UfwCkt.js.map