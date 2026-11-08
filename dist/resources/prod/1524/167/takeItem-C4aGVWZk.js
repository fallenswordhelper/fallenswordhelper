import { t as e } from "./dialog-CyQtsKCT.js";
import { t } from "./indexAjaxJson-DWeSX1ZL.js";
// src/modules/ajax/takeItem.js
async function n(n) {
	let r = await t({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "takeitem",
		guildstore_id: n,
		ajax: 1
	});
	return e(r);
}
export { n as t };

//# sourceMappingURL=takeItem-C4aGVWZk.js.map