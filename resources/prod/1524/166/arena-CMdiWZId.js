import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
import { K as t } from "./constants-CenxlFMY.js";
import { t as n } from "./dataObj-C5vpOZlx.js";
import { t as r } from "./isObject-BL3L1f85.js";
import { t as i } from "./isArray-jaX-hZZq.js";
import { t as a } from "./partial-Bo20zBni.js";
import { t as o } from "./sendEvent-yx1DwCDA.js";
import { t as s } from "./currentGuildId-WKn2jVcy.js";
import { t as c } from "./entries-PXiXtjwA.js";
import { t as l } from "./querySelectorArray-C70U47NF.js";
import { t as ee } from "./closestTr-BGwSv-6S.js";
import { n as u, r as d } from "./idb-D8xqEbs-.js";
import { t as f } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as p } from "./intValue-DGRimvm1.js";
import { t as m } from "./all-D5SlTl7_.js";
import { t as h } from "./arena-EjUM3WXg.js";
import { t as g } from "./interceptSubmit-vIdFdaaM.js";
import { t as _ } from "./loadDataTables-Cdl0vjX7.js";
import { i as te, n as v, r as ne, t as re } from "./assets-_K5Cj5ar.js";
import { n as y, t as b } from "./lvlTests-COgocWVb.js";
import { t as x } from "./changeMinMax-DtLEKbbh.js";
import { t as S } from "./setTipped-B47iaPSf.js";
// src/modules/app/arena/view.js
function C() {
	return h({ subcmd: "view" });
}
// src/modules/arena/arenaFull.js
function w(e, t, [n, r]) {
	let i = e.find(([, e]) => e === n);
	return i && (ee(i[0]).style.backgroundColor = "#ff0000", t[n] = r), t;
}
function T(e) {
	if (!r(e)) return;
	let t = l("#arenaTypeTabs tr:not([style=\"display: none;\"]) input[type=\"submit\"]").map((e) => [e, e.previousElementSibling.value]), n = c(e).reduce(a(w, t), {});
	d("fsh_arenaFull", n);
}
// src/modules/arena/setOpts.js
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
// src/modules/arena/doLvlFilter.js
function L(e) {
	let t = O().minLvl, n = O().maxLvl, r = p(e[7]);
	return b(y, r, t, n);
}
function R(e, t) {
	return !O() || L(t);
}
function z(e, t, n, r) {
	return !0;
}
function B() {
	$.fn.dataTable.ext.search.push(R), $.fn.dataTable.ext.search.push(z);
}
// src/modules/arena/filterHeader.js
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
// src/modules/arena/orderData.js
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
// src/modules/arena/participants.js
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
// src/modules/arena/redoSort.js
var Z = "td.sorting, td.sorting_asc, td.sorting_desc";
function Oe(t) {
	let n = t.attr("class");
	return e(/sorting(?<dir>[^\s]+)/, n) === "_desc" ? "asc" : "desc";
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
// src/modules/arena/arena.js
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
export { Le as default, C as t };

//# sourceMappingURL=arena-CMdiWZId.js.map