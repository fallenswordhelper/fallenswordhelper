import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./regExpFirstCapture-Bi32xMqS.js";
import { n } from "./now-CA_NVGr7.js";
import { it as r } from "./constants-CIKidKvt.js";
import { t as i } from "./dataObj-BLiU9H_5.js";
import { t as a } from "./getValue-j5JjE6f3.js";
import { t as o } from "./setValue-31jE_mRr.js";
import { t as s } from "./on-afIPYx-0.js";
import { t as c } from "./fallback-DjzJos97.js";
import { t as l } from "./partial-CYzPXpZP.js";
import { t as u } from "./sendEvent-DFQy5lFi.js";
import { t as d } from "./currentGuildId-D9JtVH2U.js";
import { t as f } from "./createDocument-CAZCPKmJ.js";
import { t as p } from "./onclick-8ZwMJyqI.js";
import { t as ee } from "./regExpGroups-BIQtVEST.js";
import { n as te, r as ne } from "./idb-BvD4EIHy.js";
import { t as m } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as h } from "./handleEvent-2snUcxFi.js";
import { t as g } from "./intValue-CkkaXek9.js";
import { t as _ } from "./all-Csir9X7x.js";
import { t as v } from "./numberIsNaN-Y6LDm3bY.js";
import { t as y } from "./loadDataTables-CXGwyKHl.js";
import { n as b, t as re } from "./lvlTests-opaPHQ2a.js";
import { t as ie } from "./formatLocalDateTime-0tbqvjA6.js";
import { i as ae, n as oe } from "./levelHighlight-D78MsDRp.js";
import { t as x } from "./onlinePlayersPage-BfJSDcni.js";
import { t as S } from "./keys-CKke0lta.js";
import { t as C } from "./remainingPages-QTQvYX0r.js";
//#region src/modules/common/idHandler.js
var w = (e, [t]) => e.id === t;
function T(e) {
	return (t) => h(w, e, t);
}
//#endregion
//#region src/modules/notepad/onlinePlayers/buildOnlinePlayerData.js
function E(e, t) {
	let n = $("<div/>").append(e[t][0]);
	return $("img", n).addClass("fshImgCntr"), [
		n.html(),
		e[t][1],
		e[t][2],
		e[t][3] * 100 + e[t][4] + 1
	];
}
function D(e) {
	return S(e).map(l(E, e));
}
//#endregion
//#region src/modules/notepad/onlinePlayers/doTable.js
var O = 0, k = 0;
function A(e) {
	let n = t(r, e);
	if (n) return Number(n);
}
var j = [
	() => O,
	(e) => A(e[0]) !== d(),
	(e) => g(e[2]) >= oe(),
	(e) => g(e[2]) <= ae()
];
function M(e) {
	return j.every((t) => t(e));
}
function N(e, t) {
	M(t) && $("td", e).eq(2).addClass("lvlHighlight");
}
function P(e) {
	return {
		columns: [
			{
				title: "Guild",
				class: "dt-center",
				orderable: !1
			},
			{
				title: "Name",
				class: "dt-center"
			},
			{
				title: "Level",
				class: "dt-center"
			},
			{
				title: "Page/Index",
				class: "dt-center"
			}
		],
		createdRow: N,
		data: e,
		deferRender: !0,
		lengthMenu: [[
			30,
			60,
			-1
		], [
			30,
			60,
			"All"
		]],
		order: [3, "desc"],
		pageLength: 30,
		stateDuration: 0,
		stateSave: !0
	};
}
var F = (e) => u("OnlinePlayers", e), I = (e) => () => {
	u("OnlinePlayers", e);
};
function L(e) {
	e.currentTarget.children[0]?.tagName === "IMG" ? F("guild click") : F("player click");
}
function R() {
	$("#fshInv").on("click", "a", L), $("#fshInv").on("click", ".sorting", I("sorting"));
}
function z() {
	$("#fshInv_length select").on("change", I("dataTables_length")), $("#fshInv_filter input").on("keyup", I("dataTables_filter")), p(e("fshInv_paginate"), (e) => {
		e.target.classList.contains("paginate_button") && F("paginate_button");
	});
}
function se(e, t) {
	O = a("highlightPlayersNearMyLvl"), k = $("#fshInv", e).DataTable(P(t)), R(), z();
}
function B() {
	k.draw();
}
//#endregion
//#region src/modules/notepad/onlinePlayers/changeLvl.js
function V(e) {
	(e.target.id === "fshMinLvl" || e.target.id === "fshMaxLvl") && (u("OnlinePlayers", "changeLvl"), B());
}
//#endregion
//#region src/modules/notepad/onlinePlayers/doRefreshButton.js
function H() {
	let e = a("lastOnlineCheck");
	return n() - e > 3e5 ? "<span> (takes a while to refresh so only do it if you really need to) </span><span id=\"fshRefresh\" class=\"fshLink\">[Refresh]</span>" : `<span>[ Wait ${Math.round(300 - (n() - e) / 1e3)}s ]</span>`;
}
//#endregion
//#region src/modules/notepad/onlinePlayers/filterHeaderOnlinePlayers.js
function U(e, t) {
	return parseInt($(e, t).val(), 10);
}
function W(e, t) {
	v(t) || o(e, t);
}
function G(e, t, n) {
	let r = U("#fshMinLvl", e), i = U("#fshMaxLvl", e);
	return W("onlinePlayerMinLvl", r), W("onlinePlayerMaxLvl", i), re(b, c(g(n[2]), 0), r, i);
}
function ce(e) {
	$.fn.dataTable.ext.search.push(l(G, e)), $("#fshOutput", e).html(`<div align=right>Min lvl:<input value="${a("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${a("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${ie(new Date(a("lastOnlineCheck")))}</div>`);
}
//#endregion
//#region src/modules/notepad/onlinePlayers/resetEvt.js
function le(e) {
	u("OnlinePlayers", "resetEvt"), o("onlinePlayerMinLvl", i.onlinePlayerMinLvl), o("onlinePlayerMaxLvl", i.onlinePlayerMaxLvl), $("#fshMinLvl", e).val(i.onlinePlayerMinLvl), $("#fshMaxLvl", e).val(i.onlinePlayerMaxLvl), B();
}
//#endregion
//#region src/modules/notepad/onlinePlayers/injectOnlinePlayers.js
var K = 0, q = 0, J = 0, Y = 0;
function X(e) {
	q = e || {}, ce(K), se(K, D(q));
}
function ue() {
	J === Y && (ne("fsh_onlinePlayers", q), X(q));
}
function de(e, t) {
	return q[e] && q[e][3] > t;
}
function fe(e, t, n) {
	return [
		n.eq(0).html(),
		n.eq(1).html(),
		n.eq(2).text(),
		e,
		t
	];
}
function pe(e, t, n) {
	let r = $("td", $(n)), i = r.eq(1).text();
	de(i, e) || (q[i] = fe(e, t, r));
}
function me(e, t) {
	let n = t.attr("value");
	$("#pCC img[src$=\"/world/icon_action_view.png", e).parent().parent().parent().each(l(pe, n));
}
function he(e) {
	let { page: t } = ee(/(?<page>\d+)/, e.parent().text());
	return parseInt(t, 10);
}
function ge(e, t) {
	return Y = he(t), _(C(Y, x).map(async (t) => e(await t)));
}
function Z(e) {
	$("#fshOutput", K).append(e);
}
function Q(e) {
	Z(` ${J + 1}`);
	let t = f(e), n = $("#pCC input.custominput", t).first();
	me(t, n), J += 1, J === 1 && ge(Q, n), ue();
}
async function _e() {
	u("OnlinePlayers", "refreshEvt"), $("#fshRefresh", K).hide(), J = 0, q = {};
	let e = x(1);
	o("lastOnlineCheck", n()), Z("Parsing online players..."), Q(await e);
}
var ve = [["fshRefresh", _e], ["fshReset", () => le(K)]];
async function ye() {
	K.html(`<span><b>Online Players</b></span>${H()}<div id="fshOutput"></div>`), X(await te("fsh_onlinePlayers")), p(K[0], T(ve)), s(K[0], "keyup", V);
}
async function be(e) {
	m() || (K = e ? $(e) : $("#pCC"), await y(), ye());
}
//#endregion
export { be as default };

//# sourceMappingURL=injectOnlinePlayers-tdiZKtPk.js.map