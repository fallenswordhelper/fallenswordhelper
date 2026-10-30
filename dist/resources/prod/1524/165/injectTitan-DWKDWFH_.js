import { Ot as e } from "./constants-CenxlFMY.js";
import { t } from "./partial-Bo20zBni.js";
import { t as n } from "./layout-B2Q1UoM2.js";
import { t as r } from "./sendEvent-DkxfZozg.js";
import { t as i } from "./currentGuildId-WKn2jVcy.js";
import { t as a } from "./createDiv-XU2XBEIv.js";
import { t as o } from "./insertElement-6ZBKaryO.js";
import { t as s } from "./onclick-nv-Fl1th.js";
import { t as c } from "./querySelectorAll-D_a7rcw0.js";
import { t as l } from "./createAnchor-BMaWUfMc.js";
import { t as u } from "./insertTextBeforeEnd-RtQnGU19.js";
import { t as d } from "./ufsgMonsterLink-HaSuIuny.js";
// src/modules/injectTitan.js
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
export { m as default };

//# sourceMappingURL=injectTitan-DWKDWFH_.js.map