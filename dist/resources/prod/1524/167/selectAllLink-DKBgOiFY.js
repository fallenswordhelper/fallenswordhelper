import { t as e } from "./sendEvent-Co2_qySS.js";
import { t } from "./createSpan-dzM9C32V.js";
import { t as n } from "./clickThis-UHuK6eKQ.js";
import { t as r } from "./getElementById-C08-3H-C.js";
import { t as i } from "./getElementsByClassName-DQB1YOHi.js";
import { t as a } from "./hrefIs-BYc01uXZ.js";
import { t as o } from "./insertElement-6ZBKaryO.js";
import { t as s } from "./insertElementAfterBegin-igbTIqzp.js";
import { t as c } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as l } from "./onclick-nv-Fl1th.js";
import { t as u } from "./querySelectorArray-C70U47NF.js";
import { Z as d } from "./constants-CenxlFMY.js";
// src/modules/profile/ifSelf/selectAllLink.js
function f(e) {
	e.dispatchEvent(new MouseEvent("click", {
		bubbles: !0,
		cancelable: !0,
		ctrlKey: !0
	}));
}
function p() {
	e("profile", "select all");
	let t = r("backpack_tabs"), a = `#backpackTab_${i("tab-selected", t)[0]?.getAttribute("data-type")} li:not(.hcsPaginate_hidden) .backpackSlot:not(.fastDone)`, o = u(`${a} .backpackCheckbox:not(:disabled)`);
	o.length > 0 ? o.forEach(n) : u(`${a} .backpackItem`).forEach(f);
}
function m() {
	let e = u("#profileRightColumn a").find(a(d));
	if (!e) return;
	let n = t({
		className: "sendLink",
		textContent: "All"
	});
	l(n, p);
	let r = t({ innerHTML: "[&nbsp;" });
	o(r, n), c(r, "&nbsp;]&nbsp;"), s(e.parentNode, r);
}
export { m as default };

//# sourceMappingURL=selectAllLink-DKBgOiFY.js.map