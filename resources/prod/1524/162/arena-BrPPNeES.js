import { t as e } from "./regExpFirstCapture-CdTmAP5x.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { K as t } from "./constants-C54mky4_.js";
import { t as n } from "./dataObj-Ce-YIkKa.js";
import { t as r } from "./isObject-gppvJNXN.js";
import { t as i } from "./isArray-oWM-Qp9j.js";
import { t as a } from "./partial-goh6HOls.js";
import { t as o } from "./sendEvent-bwvhd4A-.js";
import { t as s } from "./currentGuildId-Br10wzx3.js";
import { t as c } from "./entries-BPLrbAVw.js";
import { t as l } from "./querySelectorArray-BZbNvND7.js";
import { t as ee } from "./closestTr-C0LB9ALA.js";
import { n as u, r as d } from "./idb-sdcp-8vV.js";
import { t as f } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as p } from "./intValue-NIZZTFPF.js";
import { t as m } from "./all-Dy4LjBGw.js";
import { t as h } from "./arena-CfQRp9P7.js";
import "./formToUrl-BROd6YBE.js";
import { t as g } from "./interceptSubmit-0losboil.js";
import { t as _ } from "./loadDataTables-BxS2i7yi.js";
import { i as te, n as v, r as ne, t as re } from "./assets-DIyroKYu.js";
import { n as y, t as b } from "./lvlTests-4W_DUC1X.js";
import { t as x } from "./changeMinMax-BRLn5VMY.js";
import { t as S } from "./setTipped-vR4mu9k3.js";
//#region src/modules/app/arena/view.js
function C() {
	return h({ subcmd: "view" });
}
//#endregion
//#region src/modules/arena/arenaFull.js
function w(e, t, [n, r]) {
	let i = e.find(([, e]) => e === n);
	return i && (ee(i[0]).style.backgroundColor = "#ff0000", t[n] = r), t;
}
function T(e) {
	if (!r(e)) return;
	let t = l("#arenaTypeTabs tr:not([style=\"display: none;\"]) input[type=\"submit\"]").map((e) => [e, e.previousElementSibling.value]);
	d("fsh_arenaFull", c(e).reduce(a(w, t), {}));
}
//#endregion
//#region src/modules/arena/setOpts.js
var E = 0, D = 0, O = () => E, k = () => D;
function A() {
	d(v, E);
}
function j(e, t) {
	E ||= {}, E.minLvl = e, E.maxLvl = t, A();
}
function M() {
	$("#arenaTypeTabs table[width=\"635\"]").DataTable().draw();
}
function N() {
	o("arena", "changeLvls"), x(j, M);
}
function P() {
	o("arena", "resetLvls"), j(n.arenaMinLvl, n.arenaMaxLvl), $("#fshMinLvl").val(E.minLvl), $("#fshMaxLvl").val(E.maxLvl), M();
}
function F(e) {
	o("arena", "hideMoves"), E ||= {}, E.hideMoves = e.target.checked, A(), $(".moveMax").toggle(!e.target.checked);
}
function I(e) {
	E = e || {}, D = E.id || {}, E.id = {};
}
//#endregion
//#region src/modules/arena/doLvlFilter.js
function L(e) {
	let t = O().minLvl, n = O().maxLvl;
	return b(y, p(e[7]), t, n);
}
function R(e, t) {
	return O() ? L(t) : !0;
}
function z(e, t, n, r) {
	return !0;
}
function B() {
	$.fn.dataTable.ext.search.push(R), $.fn.dataTable.ext.search.push(z);
}
//#endregion
//#region src/modules/arena/filterHeader.js
function V() {
	let e = $("#pCC > table > tbody > tr:nth-child(4)");
	return e.clone().insertBefore(e).find("td").attr("height", "2"), e.clone().insertAfter(e).find("td").attr("height", "1"), e;
}
function H(e) {
	let t = $("#fshHideMoves", e);
	O()?.hideMoves != null && (t.prop("checked", O().hideMoves), $(".moveMax").toggle(!O().hideMoves)), t.on("click", F);
}
function U(e, t, r, i) {
	$(`#${e}`, t).val(O()?.[r] ?? n[i]);
}
function W(e) {
	U("fshMinLvl", e, "minLvl", "arenaMinLvl");
}
function G(e) {
	U("fshMaxLvl", e, "maxLvl", "arenaMaxLvl");
}
function K(e) {
	$("#fshMinLvl, #fshMaxLvl", e).on("keyup", N), $("#fshReset", e).on("click", P);
}
function q() {
	let e = V(), t = $(re);
	H(t), W(t), G(t), K(t), $("td", e).append(t);
}
//#endregion
//#region src/modules/arena/orderData.js
function J(e, t) {
	k()?.[t] || (e.css("background-color", "#F5F298"), e.find("tr").css("background-color", "#F5F298"));
}
function Y(t, n) {
	let i = e(/#\s(?<id>\d+)/, n.eq(0).text());
	i && r(O()?.id) && (O().id[i] = i, J(t, i));
}
function ie(e) {
	let t = e.eq(1), n = t.text().split(/\s\/\s/);
	n && t.attr("data-order", (Number(n[0]) - Number(n[1])) * 100 + Number(n[1]));
}
function ae(e) {
	let t = e.eq(2);
	t.attr("data-order", $("td", t).first().text().replace(/[,\s]/g, ""));
}
function oe(t, n) {
	let r = e(/(?<move>\d)\.png/, $("img", n).attr("src"));
	r && $(n).attr("data-order", r);
}
function se(e) {
	e.slice(4, 7).each(oe);
}
function ce(e, t) {
	O()?.moves?.[e] === 3 && t.addClass("moveMax");
}
function le(t, n) {
	let r = e(ne, $("img", t).attr("src"));
	r && (ce(r, n), t.attr("data-order", r));
}
function ue(e, t) {
	let n = e.eq(8);
	O()?.moves && le(n, t);
}
function de(e) {
	let t = e.eq(8);
	t.children("table").length === 1 && t.attr("data-order", t.find("td").first().text().replace(/[,\s]/g, ""));
}
function fe(e, t) {
	let n = $(t), r = n.children();
	Y(n, r), ie(r), ae(r), se(r), ue(r, n), de(r);
}
function pe(e) {
	e.children("tbody").children("tr").each(fe);
}
//#endregion
//#region src/modules/arena/participants.js
var me = (e) => [e, Number(e.previousElementSibling.value)];
function he(e, t) {
	return e.r.arenas ? t.concat(e.r.arenas.find((e) => e.id === t[1])) : t;
}
function ge(e, t) {
	return t.guild_id === e ? `<span class="fshRed">${t.name}</span>` : t.name;
}
function X(e) {
	e?.classList && e.classList.add("fshGray");
}
var _e = (e, t) => t.reward_type === 1 && e.r.moves, ve = (e, t) => e.r.moves.find((e) => e.id === t.reward), ye = (e) => e && e.max === 3, be = (e, t) => _e(e, t) && ye(ve(e, t));
function xe(e, [t, , n]) {
	n && be(e, n) && X(t);
}
function Se(e, t, n) {
	n.players.filter((t) => t.guild_id === e).length === n.max_players / 4 && X(t);
}
function Ce(e, t, n) {
	S(n.players.map(a(ge, e)).join("<br>"), t), t.classList.add("tip-static"), e && t.value === "Join" && Se(e, t, n);
}
var we = [
	r,
	(e) => i(e.players),
	(e) => e.players.length > 0
];
function Te(e, [t, , n]) {
	we.every((e) => e(n)) && Ce(e, t, n);
}
function Ee(e) {
	return l("#arenaTypeTabs tr:not([style=\"display: none;\"]) input[type=\"submit\"]").map(me).map(a(he, e));
}
function De(e) {
	if (!e?.s || !r(e.r)) return;
	let t = Ee(e);
	t.forEach(a(Te, s())), t.forEach(a(xe, e));
}
//#endregion
//#region src/modules/arena/redoSort.js
var Z = "td.sorting, td.sorting_asc, td.sorting_desc";
function Oe(t) {
	return e(/sorting(?<dir>[^\s]+)/, t.attr("class")) === "_desc" ? "asc" : "desc";
}
function Q(e, n, r) {
	let i = e.closest(t).DataTable();
	n === 3 ? i.order([3, r]).draw() : i.order([3, "asc"], [n, r]).draw();
}
function ke(e) {
	o("arena", "sortHandler");
	let t = $(e.target).closest("td"), n = Oe(t);
	Q(t, t.index(), n);
}
function Ae(e) {
	$(Z, e).off("click"), e.on("click", Z, ke);
}
//#endregion
//#region src/modules/arena/arena.js
function je() {
	l("#arenaTypeTabs tr[style=\"display: none;\"]").forEach((e) => e.remove());
}
function Me(e, t) {
	let n = $("tr", t).first();
	$("a", n).contents().unwrap(), $(t).prepend($("<thead/>").append(n));
}
function Ne() {
	q(), A(), B();
}
function Pe(e, [t, n, r]) {
	let i = $("table[width=\"635\"]", e);
	i.each(Me), I(t), pe(i), T(n), De(r), Ne(), i.DataTable(te), Ae(e);
}
function Fe(e, t) {
	je(), Pe(e, t), g();
}
async function Ie(e) {
	Fe(e, await m([
		u(v),
		u("fsh_arenaFull"),
		C().catch(() => ({})),
		_()
	]));
}
function Le() {
	if (f()) return;
	let e = $("#arenaTypeTabs");
	e.length === 1 ? Ie(e) : o("arena", "Join error screen ?");
}
//#endregion
export { Le as default, C as t };

//# sourceMappingURL=arena-BrPPNeES.js.map