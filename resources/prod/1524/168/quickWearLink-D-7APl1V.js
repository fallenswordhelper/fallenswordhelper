import { t as e } from "./sendEvent-DdWrU3DL.js";
import { n as t, t as n } from "./quickwear-CldQNMvT.js";
import { t as r } from "./createSpan-dzM9C32V.js";
import { t as i } from "./insertElement-6ZBKaryO.js";
import { t as a } from "./insertElementAfterBegin-igbTIqzp.js";
import { t as o } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as s } from "./hrefIs-BYc01uXZ.js";
import { t as c } from "./onclick-nv-Fl1th.js";
import { t as l } from "./querySelectorArray-C70U47NF.js";
import { p as u } from "./constants-CenxlFMY.js";
// src/modules/profile/ifSelf/quickWearLink.js
function d() {
	e("profile", "insertQuickWear"), t(n);
}
function f() {
	let e = l("#profileRightColumn a").find(s(`${u}profile&subcmd=togglesection&section_id=2`));
	if (!e) return;
	let t = r({ innerHTML: "[&nbsp;" }), n = r({
		className: "sendLink",
		innerHTML: "Quick&nbsp;Wear"
	});
	i(t, n), o(t, "&nbsp;]&nbsp;"), a(e.parentNode, t), c(n, d);
}
export { f as default };

//# sourceMappingURL=quickWearLink-D-7APl1V.js.map