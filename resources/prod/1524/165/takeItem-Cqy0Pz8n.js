import { t as e } from "./indexAjaxJson-DlbvYfbd.js";
import { t } from "./dialog-CyQtsKCT.js";
// src/modules/ajax/takeItem.js
async function n(n) {
	let r = await e({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "takeitem",
		guildstore_id: n,
		ajax: 1
	});
	return t(r);
}
export { n as t };

//# sourceMappingURL=takeItem-Cqy0Pz8n.js.map