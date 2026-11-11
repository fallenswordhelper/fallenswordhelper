import { t as e } from "./sendEvent-DdWrU3DL.js";
import { t } from "./createAnchor-HiREQnLZ.js";
import { t as n } from "./containsText-BpUZGVhy.js";
import { t as r } from "./getText-BqjgTHLv.js";
import { t as i } from "./insertElement-6ZBKaryO.js";
import { t as a } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as o } from "./onclick-nv-Fl1th.js";
import { t as s } from "./querySelector-C6ReNysW.js";
import { t as c } from "./xPath-op5z6uT2.js";
import { i as l } from "./constants-CenxlFMY.js";
// src/modules/guide/itemsView.js
var u = () => !c(".//*[text() = \"This item is bound\"]"), d = () => !n("Component", c(".//tr[td/b/text() = \"Type:\"]/td[2]")), f = (e) => `https://www.fallensword.com/${l}${e}`;
function p(n) {
	if (!n) return;
	let s = t({
		href: f(r(n)),
		innerHTML: "<b class=\"fshBlue\">AH</b>",
		target: "_blank"
	});
	o(s, () => e("guide", "Item AH Link")), a(n.parentNode, " ["), i(n.parentNode, s), a(n.parentNode, "]");
}
function m() {
	u() && d() && p(s(".tHeader")?.children?.[0]);
}
export { m as default };

//# sourceMappingURL=itemsView-DPLP4Y42.js.map