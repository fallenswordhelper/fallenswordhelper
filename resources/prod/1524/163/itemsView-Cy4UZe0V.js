import { t as e } from "./getText-BybFkJV6.js";
import { i as t } from "./constants-CIKidKvt.js";
import { t as n } from "./querySelector-8FH1hhUv.js";
import { t as r } from "./sendEvent-DFQy5lFi.js";
import { t as i } from "./insertElement-C_6uFPNr.js";
import { t as a } from "./containsText-DYGH6hdF.js";
import { t as o } from "./onclick-8ZwMJyqI.js";
import { t as s } from "./createAnchor-DIf1F0uc.js";
import { t as c } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as l } from "./xPath-CgePOSD6.js";
//#region src/modules/guide/itemsView.js
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
//#endregion
export { m as default };

//# sourceMappingURL=itemsView-Cy4UZe0V.js.map