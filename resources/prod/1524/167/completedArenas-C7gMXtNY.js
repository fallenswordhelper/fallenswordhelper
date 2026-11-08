import { t as e } from "./indexAjaxDoc-MnAqiGyz.js";
import { t } from "./sendEvent-Co2_qySS.js";
import { t as n } from "./cElement-Dj5A9-NC.js";
import { t as r } from "./createDiv-B84RqGfo.js";
import { t as i } from "./createInput-x6h3QT7P.js";
import { t as a } from "./getText-BqjgTHLv.js";
import { t as o } from "./querySelector-C6ReNysW.js";
import { t as s } from "./layout-B2Q1UoM2.js";
// src/modules/arena/completedArenas.js
var c = () => Number(o("#pCC #page").value), l = c(), u = a(o("#pCC input[value=Go]").parentNode.previousElementSibling).replace(/\D/g, ""), d = o("#pCC #page").closest("tr"), f = (e = document) => o("#pCC input[value=Go]", e).closest("tr");
function p() {
	let e = r();
	return e.style.cssText = "\n    animation: fshSpinner 0.6s linear infinite;\n    border: 2px solid #ccc;\n    border-radius: 50%;\n    border-top-color: #07d;\n    height: 8px;\n    width: 8px;\n    margin: 0px 4px;\n    display: none;\n  ", e;
}
var m = p();
async function h(t) {
	if (t === l) return;
	l = t, d.querySelector("#page").value = t, m.style.display = "inline-block";
	let n = await e({
		cmd: "arena",
		subcmd: "completed",
		page: l
	});
	f(n).replaceWith(d), o("#pCC").replaceWith(o("#pCC", n)), m.style.display = "none";
}
function g() {
	t("arena completed", "gotoFirstPage"), h(1);
}
function _() {
	t("arena completed", "gotoLastPage"), h(u);
}
function v() {
	h(Math.max(1, l - 1));
}
function y() {
	h(Math.min(l + 1, u));
}
function b(e, t) {
	return i({
		value: e,
		onclick: t,
		type: "button"
	});
}
function x() {
	let e = n("td");
	return e.append(b("Go", () => h(c())), b("<<", g), " ", b("<", v), " ", b(">", y), " ", b(">>", _)), e;
}
function S() {
	if (!s() || !o("#page")) return;
	f().children[1].replaceWith(x());
	let e = o("#pCC #page").closest("td");
	e.insertBefore(m, e.firstChild);
}
export { S as default };

//# sourceMappingURL=completedArenas-C7gMXtNY.js.map