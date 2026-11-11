import { t as e } from "./indexAjaxData-BAm_dTyc.js";
import { t } from "./arena-ELvYViLq.js";
import { t as n } from "./_dataAccess-BLVLQyDJ.js";
import { t as r } from "./sendEvent-DdWrU3DL.js";
import { t as i } from "./all-D5SlTl7_.js";
import { t as a } from "./getArrayByTagName-Dyx_AQto.js";
import { t as o } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as s } from "./navigateTo-CS33u2a7.js";
import { t as c } from "./partial-Bo20zBni.js";
import { t as l } from "./regExpFirstCapture-D_QeHFEY.js";
import { K as u, o as d, vt as f } from "./constants-CenxlFMY.js";
import { r as p } from "./assets-_K5Cj5ar.js";
// src/modules/app/arena/dopickmove.js
function m(e, n) {
	return t({
		subcmd: "dopickmove",
		move_id: e,
		slot_id: n
	});
}
// src/modules/_dataAccess/daArenaPickMove.js
function h(t, n) {
	let r = t === 0 ? "x" : t - 1;
	return e({
		cmd: "arena",
		subcmd: "dopickmove",
		move_id: r,
		slot_id: n
	});
}
function g(e, t) {
	return n(m, h, e, t);
}
// src/modules/arena/arenaSetup/moveOptions.js
var _ = "\n<td colspan=3 style=\"padding-top: 2px;padding-bottom: 2px;\">\n<select style=\"max-width: 50px;\">\n<option value=\"x\">Basic Attack</option>\n<option value=\"0\">Block</option>\n<option value=\"1\">Counter Attack</option>\n<option value=\"2\">Critical Hit</option>\n<option value=\"3\">Defend</option>\n<option value=\"4\">Deflect</option>\n<option value=\"5\">Dodge</option>\n<option value=\"6\">Lunge</option>\n<option value=\"7\">Power Attack</option>\n<option value=\"8\">Spin Attack</option>\n<option value=\"9\">Piercing Strike</option>\n<option value=\"10\">Crush</option>\n<option value=\"11\">Weaken</option>\n<option value=\"12\">Ice Shard</option>\n<option value=\"13\">Fire Blast</option>\n<option value=\"14\">Poison</option>\n</select></td>", v = [], y = 0, b = 0;
function x(e, t) {
	return g(e === "x" ? 0 : Number(e) + 1, t);
}
function S(e) {
	return e.value;
}
function C() {
	return a("select", b).map(S);
}
function w(e, t) {
	if (e !== v[t]) return y.eq(t).attr({
		src: f,
		width: "25",
		height: "25"
	}), x("x", t);
}
function T(e, t) {
	if (e !== "x" && e !== v[t]) return x(e, t);
}
function E() {
	s(`${d}setup`);
}
async function D(e) {
	let t = e.map(T);
	await i(t), E();
}
async function O() {
	r("arena__setup", "updateMoves");
	let e = C(), t = e.map(w);
	await i(t), D(e);
}
function k(e) {
	let t = $("<tr><td colspan=32 align=center style=\"padding-top: 2px;padding-bottom: 2px;\"><input class=\"custombutton\" value=\"Update\" type=\"button\"></td></tr>");
	$("input", t).on("click", O), e.append(t);
}
var A = (e) => l(p, $(e).attr("src")) ?? "x";
function j(e, t, n) {
	let r = A(n);
	v.push(r);
	let i = $(_);
	$(`option[value=${r}]`, i).prop("selected", !0), e.append(i);
}
function M(e) {
	let t = $("<tr/>");
	b = t.get(0), t.append("<td/>"), y.each(c(j, t)), e.append(t);
}
function N() {
	return y.eq(0).closest(u).parent().closest(u);
}
function P(e) {
	r("arena__setup", "setupMoves"), $(e.target).off(), y = $("#pCC a[href*=\"=pickmove&\"] img");
	let t = N();
	M(t), $("img[src*=\"arena/bar_spacer.\"]", t).attr({
		width: "15",
		height: "50"
	}), k(t);
}
function F() {
	if (o()) return;
	let e = $("#pCC b:contains(\"Setup Combat Moves\")");
	e.length === 1 && (e.addClass("fshLink fshGreen"), e.on("click", P));
}
export { F as default };

//# sourceMappingURL=setupMoves-C__agFBw.js.map