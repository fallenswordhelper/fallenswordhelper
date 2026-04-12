import { t as e } from "./getText-BybFkJV6.js";
import { t } from "./querySelector-8FH1hhUv.js";
import { t as n } from "./layout-6CPY-bfq.js";
import { t as r } from "./sendEvent-DFQy5lFi.js";
import { t as i } from "./cElement-BWLp9SZT.js";
import { t as a } from "./createDiv-CH3rNL4c.js";
import { t as o } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as s } from "./createInput-dXzC1oHv.js";
//#region src/modules/arena/completedArenas.js
var c = () => Number(t("#pCC #page").value), l = c(), u = e(t("#pCC input[value=Go]").parentNode.previousElementSibling).replace(/\D/g, ""), d = t("#pCC #page").closest("tr"), f = (e = document) => t("#pCC input[value=Go]", e).closest("tr");
function p() {
	let e = a();
	return e.style.cssText = "\n    animation: fshSpinner 0.6s linear infinite;\n    border: 2px solid #ccc;\n    border-radius: 50%;\n    border-top-color: #07d;\n    height: 8px;\n    width: 8px;\n    margin: 0px 4px;\n    display: none;\n  ", e;
}
var m = p();
async function h(e) {
	if (e === l) return;
	l = e, d.querySelector("#page").value = e, m.style.display = "inline-block";
	let n = await o({
		cmd: "arena",
		subcmd: "completed",
		page: l
	});
	f(n).replaceWith(d), t("#pCC").replaceWith(t("#pCC", n)), m.style.display = "none";
}
function g() {
	r("arena completed", "gotoFirstPage"), h(1);
}
function _() {
	r("arena completed", "gotoLastPage"), h(u);
}
function v() {
	h(Math.max(1, l - 1));
}
function y() {
	h(Math.min(l + 1, u));
}
function b(e, t) {
	return s({
		value: e,
		onclick: t,
		type: "button"
	});
}
function x() {
	let e = i("td");
	return e.append(b("Go", () => h(c())), b("<<", g), " ", b("<", v), " ", b(">", y), " ", b(">>", _)), e;
}
function S() {
	if (!n() || !t("#page")) return;
	f().children[1].replaceWith(x());
	let e = t("#pCC #page").closest("td");
	e.insertBefore(m, e.firstChild);
}
//#endregion
export { S as default };

//# sourceMappingURL=completedArenas-DdtdpUYR.js.map