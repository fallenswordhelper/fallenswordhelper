import { S as e, St as t, kt as n } from "./constants-CIKidKvt.js";
import { t as r } from "./querySelector-8FH1hhUv.js";
import { t as i } from "./layout-6CPY-bfq.js";
import { t as a } from "./sendEvent-DFQy5lFi.js";
import { t as o } from "./createDiv-CH3rNL4c.js";
import { t as s } from "./insertElement-C_6uFPNr.js";
import { t as c } from "./onclick-8ZwMJyqI.js";
import { t as l } from "./querySelectorArray-Bdj4peIm.js";
import { t as u } from "./closest-C9Rjjn17.js";
import { t as d } from "./createAnchor-DIf1F0uc.js";
import { t as f } from "./interceptSubmit-CAvRTZlR.js";
import { t as p } from "./closestTable-B_Km1mKH.js";
import { n as m, t as h } from "./doBuffLinkClick-Dk8HWDBw.js";
import { i as g, n as _, r as v, t as y } from "./levelHighlight-D78MsDRp.js";
//#region src/modules/common/closestForm.js
function b(t) {
	return u(e, t);
}
//#endregion
//#region src/modules/findplayer/findplayer.js
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
//#endregion
export { O as default };

//# sourceMappingURL=findplayer-CIbcBJTW.js.map