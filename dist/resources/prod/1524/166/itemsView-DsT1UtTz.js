import { t as e } from "./getText-BqjgTHLv.js";
import { i as t } from "./constants-CenxlFMY.js";
import { t as n } from "./querySelector-C6ReNysW.js";
import { t as r } from "./sendEvent-yx1DwCDA.js";
import { t as i } from "./insertElement-6ZBKaryO.js";
import { t as a } from "./containsText-BpUZGVhy.js";
import { t as o } from "./onclick-nv-Fl1th.js";
import { t as s } from "./createAnchor-BMaWUfMc.js";
import { t as c } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as l } from "./xPath-op5z6uT2.js";
// src/modules/guide/itemsView.js
var u = () => !l(".//*[text() = \"This item is bound\"]"), d = () => !a("Component", l(".//tr[td/b/text() = \"Type:\"]/td[2]")), f = (e) => `https://www.fallensword.com/${t}${e}`;
function p(t) {
	if (!t) return;
	let n = s({
		href: f(e(t)),
		innerHTML: "<b class=\"fshBlue\">AH</b>",
		target: "_blank"
	});
	o(n, () => r("guide", "Item AH Link")), c(t.parentNode, " ["), i(t.parentNode, n), c(t.parentNode, "]");
}
function m() {
	u() && d() && p(n(".tHeader")?.children?.[0]);
}
export { m as default };

//# sourceMappingURL=itemsView-DsT1UtTz.js.map