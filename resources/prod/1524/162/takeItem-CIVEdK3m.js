import { t as e } from "./indexAjaxJson-DuDMsKRC.js";
import { t } from "./dialog-D1zrc02U.js";
//#region src/modules/ajax/takeItem.js
async function n(n) {
	return t(await e({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "takeitem",
		guildstore_id: n,
		ajax: 1
	}));
}
//#endregion
export { n as t };

//# sourceMappingURL=takeItem-CIVEdK3m.js.map