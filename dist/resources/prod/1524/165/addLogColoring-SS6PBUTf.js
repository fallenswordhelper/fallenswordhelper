import { St as e } from "./constants-CenxlFMY.js";
import { t } from "./getValue-Aap0zlcO.js";
import { t as n } from "./setValue-B2O8DHLF.js";
import { t as r } from "./querySelector-C6ReNysW.js";
import { t as i } from "./getTextTrim-CvXe85fp.js";
import { t as a } from "./partial-Bo20zBni.js";
import { t as o } from "./entries-PXiXtjwA.js";
import { t as s } from "./insertElement-6ZBKaryO.js";
import { t as c } from "./onclick-nv-Fl1th.js";
import { t as l } from "./dataRows-De29j_4W.js";
import { t as u } from "./parseDateAsTimestamp-CdtzIDN9.js";
import { t as d } from "./createStyle-CbdGPpS5.js";
import { n as f, t as p } from "./doBuffLinkClick-DZXOdNUj.js";
// src/modules/logs/playerLogWidgets/getLastTable.js
function m() {
	return r("#pCC > table:last-of-type");
}
// src/modules/logs/addLogColoring.js
var h = 0, g = 0;
function _(e) {
	return ["Chat", "Leader"].includes(e) ? r("#pCC table table table table") : m();
}
function v(e, t) {
	return e > 20 && t <= g;
}
function y(e) {
	return t(e) || h;
}
function b(e, t) {
	let n = "old", r = u(i(t.cells[e]));
	return v((h - r) / 6e4, r) || (n = r > g ? "new" : "seen"), [t, n];
}
function x(t, n) {
	t === "Chat" && n.filter(([, e]) => e !== "old").map(([t]) => r(e, t)).forEach(f);
}
function S(e, [t, n]) {
	let r = t.rowIndex + 1;
	return e[n] = e[n] ? {
		min: Math.min(e[n].min, r),
		max: Math.max(e[n].min, r)
	} : {
		min: r,
		max: r
	}, e;
}
function C(e, [t, { min: n, max: r }]) {
	return `.fshLogColoring tr:nth-of-type(${e}n+${n}):nth-of-type(-${e}n+${r}) {background-color: ${t === "old" ? "#CD9E4B" : "#F5F298"};}`;
}
function w(e, t) {
	let n = e === "Chat" ? 4 : 2;
	return o(t.filter(([, e]) => e !== "seen").reduce(S, {})).map(a(C, n));
}
function T(e, t, n, r) {
	let i = l(n, r, 0).map(a(b, t));
	x(e, i);
	let o = w(e, i);
	o.length && s(document.body, d(o.join("\n")));
}
function E(e, t, r, i) {
	r.classList.add("fshLogColoring"), h = (/* @__PURE__ */ new Date()).setUTCSeconds(0, 0) - 1;
	let a = `last${e}Check`;
	g = y(a), T(e, t, r, i), c(r, p), n(a, h);
}
function D(e, n, r) {
	if (!t("enableLogColoring")) return;
	let i = _(e);
	i && E(e, n, i, r);
}
export { m as n, D as t };

//# sourceMappingURL=addLogColoring-SS6PBUTf.js.map