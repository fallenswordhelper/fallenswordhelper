import { Ot as e } from "./constants-CIKidKvt.js";
import { t } from "./partial-CYzPXpZP.js";
import { t as n } from "./layout-6CPY-bfq.js";
import { t as r } from "./sendEvent-DFQy5lFi.js";
import { t as i } from "./currentGuildId-D9JtVH2U.js";
import { t as a } from "./createDiv-CH3rNL4c.js";
import { t as o } from "./insertElement-C_6uFPNr.js";
import { t as s } from "./onclick-8ZwMJyqI.js";
import { t as c } from "./querySelectorAll-Bwhb2XCF.js";
import { t as l } from "./createAnchor-DIf1F0uc.js";
import { t as u } from "./insertTextBeforeEnd-CKzAXeJc.js";
import { t as d } from "./ufsgMonsterLink-B2NKq12t.js";
//#region src/modules/injectTitan.js
function f() {
	if (!i()) return;
	let t = l({
		href: e,
		textContent: "Scout Tower"
	});
	s(t, () => r("titan", "scout tower"));
	let c = a({
		className: "fshBold fshCenter",
		textContent: "[ "
	});
	o(c, t), u(c, " ]"), o(n().children[0].rows[2].cells[0], c);
}
function p() {
	c("#pCC table table img[src*=\"/creatures/\"]").forEach(t(d, "titan-log"));
}
function m() {
	n() && (f(), p());
}
//#endregion
export { m as default };

//# sourceMappingURL=injectTitan-BRdNrK69.js.map