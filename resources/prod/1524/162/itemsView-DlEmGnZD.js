import { t as e } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { i as t } from "./constants-C54mky4_.js";
import { t as n } from "./querySelector-qkBBhiGH.js";
import { t as r } from "./sendEvent-bwvhd4A-.js";
import { t as i } from "./insertElement-DtUB7uKq.js";
import { t as a } from "./containsText-s1xoTwSh.js";
import { t as o } from "./onclick-9iRduoOH.js";
import { t as s } from "./createAnchor-DH9dG-LN.js";
import { t as c } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as l } from "./xPath-C7ziTKGg.js";
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

//# sourceMappingURL=itemsView-DlEmGnZD.js.map