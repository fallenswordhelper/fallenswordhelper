import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { Ot as e } from "./constants-C54mky4_.js";
import { t } from "./partial-goh6HOls.js";
import { t as n } from "./layout-Bapa39KM.js";
import { t as r } from "./sendEvent-bwvhd4A-.js";
import { t as i } from "./currentGuildId-Br10wzx3.js";
import { t as a } from "./createDiv-Bb3O54wx.js";
import { t as o } from "./insertElement-DtUB7uKq.js";
import { t as s } from "./onclick-9iRduoOH.js";
import { t as c } from "./querySelectorAll-6sjy8RXa.js";
import { t as l } from "./createAnchor-DH9dG-LN.js";
import { t as u } from "./insertTextBeforeEnd-DHBcAPdo.js";
import { t as d } from "./ufsgMonsterLink-B1-WpdeV.js";
//#region src/modules/injectTitan.js
function f() {
	if (!i()) return;
	let t = l({
		href: e,
		textContent: "Scout Tower"
	});
	s(t, () => r("titan", "scout tower"));
	let c = a({
		className: "fshBold fshCenter",
		textContent: "[ "
	});
	o(c, t), u(c, " ]"), o(n().children[0].rows[2].cells[0], c);
}
function p() {
	c("#pCC table table img[src*=\"/creatures/\"]").forEach(t(d, "titan-log"));
}
function m() {
	n() && (f(), p());
}
//#endregion
export { m as default };

//# sourceMappingURL=injectTitan-Dq56Vek6.js.map