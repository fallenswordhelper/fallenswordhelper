import { p as e } from "./constants-CenxlFMY.js";
import { t } from "./sendEvent-DkxfZozg.js";
import { n, t as r } from "./quickwear-DU5v4j3g.js";
import { t as i } from "./insertElement-6ZBKaryO.js";
import { t as a } from "./onclick-nv-Fl1th.js";
import { t as o } from "./querySelectorArray-C70U47NF.js";
import { t as s } from "./hrefIs-BYc01uXZ.js";
import { t as c } from "./createSpan-9KJdvIXK.js";
import { t as l } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as u } from "./insertElementAfterBegin-igbTIqzp.js";
// src/modules/profile/ifSelf/quickWearLink.js
function d() {
	t("profile", "insertQuickWear"), n(r);
}
function f() {
	let t = o("#profileRightColumn a").find(s(`${e}profile&subcmd=togglesection&section_id=2`));
	if (!t) return;
	let n = c({ innerHTML: "[&nbsp;" }), r = c({
		className: "sendLink",
		innerHTML: "Quick&nbsp;Wear"
	});
	i(n, r), l(n, "&nbsp;]&nbsp;"), u(t.parentNode, n), a(r, d);
}
export { f as default };

//# sourceMappingURL=quickWearLink-BX82kTEL.js.map