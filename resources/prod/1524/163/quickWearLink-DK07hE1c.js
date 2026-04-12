import { p as e } from "./constants-CIKidKvt.js";
import { t } from "./querySelector-8FH1hhUv.js";
import { t as n } from "./sendEvent-DFQy5lFi.js";
import { n as r, t as i } from "./quickwear-QDyrba2y.js";
import { t as a } from "./insertElement-C_6uFPNr.js";
import { t as o } from "./onclick-8ZwMJyqI.js";
import { t as s } from "./createSpan-DCxGsyWX.js";
import { t as c } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as l } from "./insertElementAfterBegin-BtRv1I55.js";
//#region src/modules/profile/ifSelf/quickWearLink.js
function u() {
	n("profile", "insertQuickWear"), r(i);
}
function d() {
	let n = t(`#profileRightColumn a[href="${e}profile&subcmd=togglesection&section_id=2"]`);
	if (!n) return;
	let r = s({ innerHTML: "[&nbsp;" }), i = s({
		className: "sendLink",
		innerHTML: "Quick&nbsp;Wear"
	});
	a(r, i), c(r, "&nbsp;]&nbsp;"), l(n.parentNode, r), o(i, u);
}
//#endregion
export { d as default };

//# sourceMappingURL=quickWearLink-DK07hE1c.js.map