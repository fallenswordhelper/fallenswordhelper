import { t as e } from "./getElementById-C08-3H-C.js";
import { Z as t } from "./constants-CenxlFMY.js";
import { t as n } from "./sendEvent-yx1DwCDA.js";
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
function f(e) {
	e.dispatchEvent(new MouseEvent("click", {
		bubbles: !0,
		cancelable: !0,
		ctrlKey: !0
	}));
}
function p() {
	n("profile", "select all");
	let t = e("backpack_tabs"), i = `#backpackTab_${r("tab-selected", t)[0]?.getAttribute("data-type")} li:not(.hcsPaginate_hidden) .backpackSlot:not(.fastDone)`, o = s(`${i} .backpackCheckbox:not(:disabled)`);
	o.length > 0 ? o.forEach(a) : s(`${i} .backpackItem`).forEach(f);
}
function m() {
	let e = s("#profileRightColumn a").find(c(t));
	if (!e) return;
	let n = l({
		className: "sendLink",
		textContent: "All"
	});
	o(n, p);
	let r = l({ innerHTML: "[&nbsp;" });
	i(r, n), u(r, "&nbsp;]&nbsp;"), d(e.parentNode, r);
}
export { m as default };

//# sourceMappingURL=selectAllLink-Dh1gUmB6.js.map