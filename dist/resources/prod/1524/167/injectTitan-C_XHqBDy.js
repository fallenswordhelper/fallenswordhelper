import { t as e } from "./sendEvent-Co2_qySS.js";
import { t } from "./createAnchor-HiREQnLZ.js";
import { t as n } from "./createDiv-B84RqGfo.js";
import { t as r } from "./currentGuildId-Bpd4l1O8.js";
import { t as i } from "./insertElement-6ZBKaryO.js";
import { t as a } from "./insertTextBeforeEnd-RtQnGU19.js";
import { t as o } from "./onclick-nv-Fl1th.js";
import { t as s } from "./partial-Bo20zBni.js";
import { t as c } from "./querySelectorAll-D_a7rcw0.js";
import { t as l } from "./ufsgMonsterLink-ClmR8IRr.js";
import { Ot as u } from "./constants-CenxlFMY.js";
import { t as d } from "./layout-B2Q1UoM2.js";
// src/modules/injectTitan.js
function f() {
	if (!r()) return;
	let s = t({
		href: u,
		textContent: "Scout Tower"
	});
	o(s, () => e("titan", "scout tower"));
	let c = n({
		className: "fshBold fshCenter",
		textContent: "[ "
	});
	i(c, s), a(c, " ]"), i(d().children[0].rows[2].cells[0], c);
}
function p() {
	c("#pCC table table img[src*=\"/creatures/\"]").forEach(s(l, "titan-log"));
}
function m() {
	d() && (f(), p());
}
export { m as default };

//# sourceMappingURL=injectTitan-C_XHqBDy.js.map