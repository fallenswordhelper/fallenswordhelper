import { t as e } from "./sendEvent-Co2_qySS.js";
import { t } from "./createAnchor-HiREQnLZ.js";
import { t as n } from "./createDiv-B84RqGfo.js";
import { S as r, St as i, kt as a } from "./constants-CenxlFMY.js";
import { t as o } from "./closest-BE9LIvvz.js";
import { t as s } from "./closestTable-B73T3rIi.js";
import { n as c, t as l } from "./doBuffLinkClick-DN2vQ7gg.js";
import { t as u } from "./insertElement-6ZBKaryO.js";
import { t as d } from "./interceptSubmit-QT2t7a5u.js";
import { i as f, n as p, r as m, t as h } from "./levelHighlight-DURs3O7W.js";
import { t as g } from "./onclick-nv-Fl1th.js";
import { t as _ } from "./querySelector-C6ReNysW.js";
import { t as v } from "./querySelectorArray-C70U47NF.js";
import { t as y } from "./layout-B2Q1UoM2.js";
// src/modules/common/closestForm.js
function b(e) {
	return o(r, e);
}
// src/modules/findplayer/findplayer.js
var x = (e, t, n) => `${a}&search_level_min=${e}&search_level_max=${t}&search_in_guild=${n}`;
function S(n, r, i, a) {
	let o = t({
		className: "fshBlue fsh-findplayer-link",
		href: x(n, r, i),
		textContent: a
	});
	return g(o, () => e("findplayer", a)), o;
}
var C = () => S(p(), f(), "-1", "Get PvP targets"), w = () => S(h(), m(), "1", "Get GvG targets");
function T(e) {
	let t = b(e);
	t.classList.add("fshRelative");
	let r = n({ className: "fsh-findplayer-div" });
	u(r, C()), u(r, w()), u(t, r);
}
function E() {
	let e = _("input[value=\"Find Player\"]");
	e && T(e);
}
function D() {
	let e = v(i, y());
	e.length && (s(e[0]).classList.add("fsh-findplayer-table"), e.forEach(c), g(y(), l));
}
function O() {
	E(), D(), d();
}
export { O as default };

//# sourceMappingURL=findplayer-DL5v07C8.js.map