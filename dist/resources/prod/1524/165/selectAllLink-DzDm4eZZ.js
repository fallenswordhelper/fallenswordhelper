import { t as e } from "./getElementById-C08-3H-C.js";
import { Z as t } from "./constants-CenxlFMY.js";
import { t as n } from "./sendEvent-DkxfZozg.js";
import { t as r } from "./getElementsByClassName-DQB1YOHi.js";
import { t as i } from "./insertElement-6ZBKaryO.js";
import { t as a } from "./clickThis-UHuK6eKQ.js";
import { t as o } from "./onclick-nv-Fl1th.js";
import { t as s } from "./querySelectorArray-C70U47NF.js";
import { t as c } from "./hrefIs-BYc01uXZ.js";
import { t as l } from "./createSpan-9KJdvIXK.js";
import { t as u } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as d } from "./insertElementAfterBegin-igbTIqzp.js";
// src/modules/profile/ifSelf/selectAllLink.js
function f() {
	n("profile", "select all");
	let t = e("backpack_tabs"), i = r("tab-selected", t)[0]?.getAttribute("data-type"), o = s(`#backpackTab_${i} li:not(.hcsPaginate_hidden) .backpackItem`);
	if (!o.length) return;
	let c = s(`#backpackTab_${i} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`);
	c.length > 0 && (o = c), o.forEach(a);
}
function p() {
	let e = s("#profileRightColumn a").find(c(t));
	if (!e) return;
	let n = l({
		className: "sendLink",
		textContent: "All"
	});
	o(n, f);
	let r = l({ innerHTML: "[&nbsp;" });
	i(r, n), u(r, "&nbsp;]&nbsp;"), d(e.parentNode, r);
}
export { p as default };

//# sourceMappingURL=selectAllLink-DzDm4eZZ.js.map