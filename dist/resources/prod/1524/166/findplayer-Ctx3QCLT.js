import { S as e, St as t, kt as n } from "./constants-CenxlFMY.js";
import { t as r } from "./querySelector-C6ReNysW.js";
import { t as i } from "./layout-B2Q1UoM2.js";
import { t as a } from "./sendEvent-yx1DwCDA.js";
import { t as o } from "./createDiv-XU2XBEIv.js";
import { t as s } from "./insertElement-6ZBKaryO.js";
import { t as c } from "./onclick-nv-Fl1th.js";
import { t as l } from "./querySelectorArray-C70U47NF.js";
import { t as u } from "./closest-BE9LIvvz.js";
import { t as d } from "./createAnchor-BMaWUfMc.js";
import { t as f } from "./interceptSubmit-vIdFdaaM.js";
import { t as p } from "./closestTable-B73T3rIi.js";
import { n as m, t as h } from "./doBuffLinkClick-CJ0juID3.js";
import { i as g, n as _, r as v, t as y } from "./levelHighlight-B8gfPyrY.js";
// src/modules/common/closestForm.js
function b(t) {
	return u(e, t);
}
// src/modules/findplayer/findplayer.js
var x = (e, t, r) => `${n}&search_level_min=${e}&search_level_max=${t}&search_in_guild=${r}`;
function S(e, t, n, r) {
	let i = d({
		className: "fshBlue fsh-findplayer-link",
		href: x(e, t, n),
		textContent: r
	});
	return c(i, () => a("findplayer", r)), i;
}
var C = () => S(_(), g(), "-1", "Get PvP targets"), w = () => S(y(), v(), "1", "Get GvG targets");
function T(e) {
	let t = b(e);
	t.classList.add("fshRelative");
	let n = o({ className: "fsh-findplayer-div" });
	s(n, C()), s(n, w()), s(t, n);
}
function E() {
	let e = r("input[value=\"Find Player\"]");
	e && T(e);
}
function D() {
	let e = l(t, i());
	e.length && (p(e[0]).classList.add("fsh-findplayer-table"), e.forEach(m), c(i(), h));
}
function O() {
	E(), D(), f();
}
export { O as default };

//# sourceMappingURL=findplayer-Ctx3QCLT.js.map