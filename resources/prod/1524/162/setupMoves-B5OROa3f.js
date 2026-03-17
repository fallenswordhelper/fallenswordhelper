import { t as e } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { K as t, o as n, vt as r } from "./constants-C54mky4_.js";
import { t as i } from "./getArrayByTagName-L2qWyNZV.js";
import { t as a } from "./partial-goh6HOls.js";
import { t as o } from "./sendEvent-bwvhd4A-.js";
import { t as s } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import { t as c } from "./indexAjaxData-CqOTihOX.js";
import { t as l } from "./navigateTo-CDpyk-TN.js";
import { t as u } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as d } from "./all-Dy4LjBGw.js";
import { t as f } from "./arena-CfQRp9P7.js";
import { r as p } from "./assets-DIyroKYu.js";
//#region src/modules/app/arena/dopickmove.js
function m(e, t) {
	return f({
		subcmd: "dopickmove",
		move_id: e,
		slot_id: t
	});
}
//#endregion
//#region src/modules/_dataAccess/daArenaPickMove.js
function h(e, t) {
	return c({
		cmd: "arena",
		subcmd: "dopickmove",
		move_id: e === 0 ? "x" : e - 1,
		slot_id: t
	});
}
function g(e, t) {
	return s(m, h, e, t);
}
//#endregion
//#region src/modules/arena/arenaSetup/moveOptions.js
var _ = "\n<td colspan=3 style=\"padding-top: 2px;padding-bottom: 2px;\">\n<select style=\"max-width: 50px;\">\n<option value=\"x\">Basic Attack</option>\n<option value=\"0\">Block</option>\n<option value=\"1\">Counter Attack</option>\n<option value=\"2\">Critical Hit</option>\n<option value=\"3\">Defend</option>\n<option value=\"4\">Deflect</option>\n<option value=\"5\">Dodge</option>\n<option value=\"6\">Lunge</option>\n<option value=\"7\">Power Attack</option>\n<option value=\"8\">Spin Attack</option>\n<option value=\"9\">Piercing Strike</option>\n<option value=\"10\">Crush</option>\n<option value=\"11\">Weaken</option>\n<option value=\"12\">Ice Shard</option>\n<option value=\"13\">Fire Blast</option>\n<option value=\"14\">Poison</option>\n</select></td>", v = [], y = 0, b = 0;
function x(e, t) {
	return g(e === "x" ? 0 : Number(e) + 1, t);
}
function S(e) {
	return e.value;
}
function C() {
	return i("select", b).map(S);
}
function w(e, t) {
	if (e !== v[t]) return y.eq(t).attr({
		src: r,
		width: "25",
		height: "25"
	}), x("x", t);
}
function T(e, t) {
	if (!(e === "x" || e === v[t])) return x(e, t);
}
function E() {
	l(`${n}setup`);
}
async function D(e) {
	await d(e.map(T)), E();
}
async function O() {
	o("arena__setup", "updateMoves");
	let e = C();
	await d(e.map(w)), D(e);
}
function k(e) {
	let t = $("<tr><td colspan=32 align=center style=\"padding-top: 2px;padding-bottom: 2px;\"><input class=\"custombutton\" value=\"Update\" type=\"button\"></td></tr>");
	$("input", t).on("click", O), e.append(t);
}
var A = (t) => e(p, $(t).attr("src")) ?? "x";
function j(e, t, n) {
	let r = A(n);
	v.push(r);
	let i = $(_);
	$(`option[value=${r}]`, i).prop("selected", !0), e.append(i);
}
function M(e) {
	let t = $("<tr/>");
	b = t.get(0), t.append("<td/>"), y.each(a(j, t)), e.append(t);
}
function N() {
	return y.eq(0).closest(t).parent().closest(t);
}
function P(e) {
	o("arena__setup", "setupMoves"), $(e.target).off(), y = $("#pCC a[href*=\"=pickmove&\"] img");
	let t = N();
	M(t), $("img[src*=\"arena/bar_spacer.\"]", t).attr({
		width: "15",
		height: "50"
	}), k(t);
}
function F() {
	if (u()) return;
	let e = $("#pCC b:contains(\"Setup Combat Moves\")");
	e.length === 1 && (e.addClass("fshLink fshGreen"), e.on("click", P));
}
//#endregion
export { F as default };

//# sourceMappingURL=setupMoves-B5OROa3f.js.map