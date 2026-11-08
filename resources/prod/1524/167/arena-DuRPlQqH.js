import { t as e } from "./sendEvent-Co2_qySS.js";
import { t } from "./arena-ELvYViLq.js";
import { t as n } from "./all-D5SlTl7_.js";
import { t as r } from "./interceptSubmit-QT2t7a5u.js";
import { t as i } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as ee } from "./loadDataTables-C8-xI5vr.js";
import { t as a } from "./querySelectorArray-C70U47NF.js";
import { n as o, r as s } from "./idb-D8xqEbs-.js";
import { t as te } from "./closestTr-BGwSv-6S.js";
import { t as c } from "./entries-PXiXtjwA.js";
import { t as l } from "./isObject-BL3L1f85.js";
import { t as u } from "./partial-Bo20zBni.js";
import { i as d, n as f, r as p, t as m } from "./assets-_K5Cj5ar.js";
import { n as h, t as g } from "./lvlTests-COgocWVb.js";
import { t as _ } from "./intValue-DGRimvm1.js";
import { t as v } from "./changeMinMax-DtLEKbbh.js";
import { t as y } from "./dataObj-C5vpOZlx.js";
import { t as b } from "./regExpFirstCapture-D_QeHFEY.js";
import { K as ne } from "./constants-CenxlFMY.js";
import { t as re } from "./currentGuildId-Bpd4l1O8.js";
import { t as x } from "./isArray-jaX-hZZq.js";
import { t as S } from "./setTipped-B47iaPSf.js";
// src/modules/app/arena/view.js
function C() {
	return t({ subcmd: "view" });
}
// src/modules/arena/arenaFull.js
function w(e, t, [n, r]) {
	let i = e.find(([, e]) => e === n);
	return i && (te(i[0]).style.backgroundColor = "#ff0000", t[n] = r), t;
}
function T(e) {
	if (!l(e)) return;
	let t = a("#arenaTypeTabs tr:not([style=\"display: none;\"]) input[type=\"submit\"]").map((e) => [e, e.previousElementSibling.value]), n = c(e).reduce(u(w, t), {});
	s("fsh_arenaFull", n);
}
// src/modules/arena/setOpts.js
var E = 0, D = 0, O = () => E, k = () => D;
function A() {
	s(f, E);
}
function j(e, t) {
	E ||= {}, E.minLvl = e, E.maxLvl = t, A();
}
function M() {
	$("#arenaTypeTabs table[width=\"635\"]").DataTable().draw();
}
function N() {
	e("arena", "changeLvls"), v(j, M);
}
function P() {
	e("arena", "resetLvls"), j(y.arenaMinLvl, y.arenaMaxLvl), $("#fshMinLvl").val(E.minLvl), $("#fshMaxLvl").val(E.maxLvl), M();
}
function F(t) {
	e("arena", "hideMoves"), E ||= {}, E.hideMoves = t.target.checked, A(), $(".moveMax").toggle(!t.target.checked);
}
function I(e) {
	E = e || {}, D = E.id || {}, E.id = {};
}
// src/modules/arena/doLvlFilter.js
function L(e) {
	let t = O().minLvl, n = O().maxLvl, r = _(e[7]);
	return g(h, r, t, n);
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
function U(e, t, n, r) {
	$(`#${e}`, t).val(O()?.[n] ?? y[r]);
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
	let e = V(), t = $(m);
	H(t), W(t), G(t), K(t), $("td", e).append(t);
}
// src/modules/arena/orderData.js
function J(e, t) {
	k()?.[t] || (e.css("background-color", "#F5F298"), e.find("tr").css("background-color", "#F5F298"));
}
function Y(e, t) {
	let n = b(/#\s(?<id>\d+)/, t.eq(0).text());
	n && l(O()?.id) && (O().id[n] = n, J(e, n));
}
function ie(e) {
	let t = e.eq(1), n = t.text().split(/\s\/\s/);
	n && t.attr("data-order", (Number(n[0]) - Number(n[1])) * 100 + Number(n[1]));
}
function ae(e) {
	let t = e.eq(2);
	t.attr("data-order", $("td", t).first().text().replace(/[,\s]/g, ""));
}
function oe(e, t) {
	let n = b(/(?<move>\d)\.png/, $("img", t).attr("src"));
	n && $(t).attr("data-order", n);
}
function se(e) {
	e.slice(4, 7).each(oe);
}
function ce(e, t) {
	O()?.moves?.[e] === 3 && t.addClass("moveMax");
}
function le(e, t) {
	let n = b(p, $("img", e).attr("src"));
	n && (ce(n, t), e.attr("data-order", n));
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
	S(n.players.map(u(ge, e)).join("<br>"), t), t.classList.add("tip-static"), e && t.value === "Join" && Se(e, t, n);
}
var we = [
	l,
	(e) => x(e.players),
	(e) => e.players.length > 0
];
function Te(e, [t, , n]) {
	we.every((e) => e(n)) && Ce(e, t, n);
}
function Ee(e) {
	return a("#arenaTypeTabs tr:not([style=\"display: none;\"]) input[type=\"submit\"]").map(me).map(u(he, e));
}
function De(e) {
	if (!e?.s || !l(e.r)) return;
	let t = Ee(e);
	t.forEach(u(Te, re())), t.forEach(u(xe, e));
}
// src/modules/arena/redoSort.js
var Z = "td.sorting, td.sorting_asc, td.sorting_desc";
function Oe(e) {
	let t = e.attr("class");
	return b(/sorting(?<dir>[^\s]+)/, t) === "_desc" ? "asc" : "desc";
}
function Q(e, t, n) {
	let r = e.closest(ne).DataTable();
	t === 3 ? r.order([3, n]).draw() : r.order([3, "asc"], [t, n]).draw();
}
function ke(t) {
	e("arena", "sortHandler");
	let n = $(t.target).closest("td"), r = Oe(n);
	Q(n, n.index(), r);
}
function Ae(e) {
	$(Z, e).off("click"), e.on("click", Z, ke);
}
// src/modules/arena/arena.js
function je() {
	a("#arenaTypeTabs tr[style=\"display: none;\"]").forEach((e) => e.remove());
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
	i.each(Me), I(t), pe(i), T(n), De(r), Ne(), i.DataTable(d), Ae(e);
}
function Fe(e, t) {
	je(), Pe(e, t), r();
}
async function Ie(e) {
	Fe(e, await n([
		o(f),
		o("fsh_arenaFull"),
		C().catch(() => ({})),
		ee()
	]));
}
function Le() {
	if (i()) return;
	let t = $("#arenaTypeTabs");
	t.length === 1 ? Ie(t) : e("arena", "Join error screen ?");
}
export { Le as default, C as t };

//# sourceMappingURL=arena-DuRPlQqH.js.map