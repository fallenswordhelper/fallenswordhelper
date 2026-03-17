import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { S as e, St as t, kt as n } from "./constants-C54mky4_.js";
import "./getValue-CCThXEzy.js";
import { t as r } from "./querySelector-qkBBhiGH.js";
import { t as i } from "./layout-Bapa39KM.js";
import { t as a } from "./sendEvent-bwvhd4A-.js";
import { t as o } from "./createDiv-Bb3O54wx.js";
import { t as s } from "./insertElement-DtUB7uKq.js";
import { t as c } from "./onclick-9iRduoOH.js";
import { t as l } from "./querySelectorArray-BZbNvND7.js";
import { t as u } from "./closest-CVR7I6wE.js";
import { t as d } from "./createAnchor-DH9dG-LN.js";
import "./openQuickBuffById-DJAK7mhj.js";
import "./formToUrl-BROd6YBE.js";
import { t as f } from "./interceptSubmit-0losboil.js";
import { t as p } from "./closestTable-Dfg3mstY.js";
import { n as m, t as h } from "./doBuffLinkClick-9OBESglX.js";
import { i as g, n as _, r as v, t as y } from "./levelHighlight-D4H4ANZr.js";
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

//# sourceMappingURL=findplayer-BLwL5ceI.js.map