import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { p as e } from "./constants-C54mky4_.js";
import { t } from "./querySelector-qkBBhiGH.js";
import { t as n } from "./sendEvent-bwvhd4A-.js";
import { n as r, t as i } from "./quickwear-CS_RvItM.js";
import { t as a } from "./insertElement-DtUB7uKq.js";
import { t as o } from "./onclick-9iRduoOH.js";
import { t as s } from "./createSpan-DpSRnwEQ.js";
import { t as c } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as l } from "./insertElementAfterBegin-D7gF3V2Y.js";
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

//# sourceMappingURL=quickWearLink-Blf2ckDT.js.map