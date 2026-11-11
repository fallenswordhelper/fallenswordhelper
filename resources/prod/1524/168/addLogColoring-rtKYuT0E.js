import { t as e } from "./createStyle-DG3VYLtp.js";
import { t } from "./dataRows-De29j_4W.js";
import { n, t as r } from "./doBuffLinkClick-B1YtfjdZ.js";
import { t as i } from "./entries-PXiXtjwA.js";
import { t as a } from "./getTextTrim-CvXe85fp.js";
import { t as o } from "./insertElement-6ZBKaryO.js";
import { t as s } from "./onclick-nv-Fl1th.js";
import { t as c } from "./partial-Bo20zBni.js";
import { t as l } from "./querySelector-C6ReNysW.js";
import { St as u } from "./constants-CenxlFMY.js";
import { t as d } from "./getValue-DMlY7SSn.js";
import { t as f } from "./parseDateAsTimestamp-CdtzIDN9.js";
import { t as p } from "./setValue-D-C74rTg.js";
// src/modules/logs/playerLogWidgets/getLastTable.js
function m() {
	return l("#pCC > table:last-of-type");
}
// src/modules/logs/addLogColoring.js
var h = 0, g = 0;
function _(e) {
	return ["Chat", "Leader"].includes(e) ? l("#pCC table table table table") : m();
}
function v(e, t) {
	return e > 20 && t <= g;
}
function y(e) {
	return d(e) || h;
}
function b(e, t) {
	let n = "old", r = f(a(t.cells[e]));
	return v((h - r) / 6e4, r) || (n = r > g ? "new" : "seen"), [t, n];
}
function x(e, t) {
	e === "Chat" && t.filter(([, e]) => e !== "old").map(([e]) => l(u, e)).forEach(n);
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
	return i(t.filter(([, e]) => e !== "seen").reduce(S, {})).map(c(C, n));
}
function T(n, r, i, a) {
	let s = t(i, a, 0).map(c(b, r));
	x(n, s);
	let l = w(n, s);
	l.length && o(document.body, e(l.join("\n")));
}
function E(e, t, n, i) {
	n.classList.add("fshLogColoring"), h = (/* @__PURE__ */ new Date()).setUTCSeconds(0, 0) - 1;
	let a = `last${e}Check`;
	g = y(a), T(e, t, n, i), s(n, r), p(a, h);
}
function D(e, t, n) {
	if (!d("enableLogColoring")) return;
	let r = _(e);
	r && E(e, t, r, n);
}
export { m as n, D as t };

//# sourceMappingURL=addLogColoring-rtKYuT0E.js.map