import { t as e } from "./onlinePlayersPage-BVXAB_na.js";
import { t } from "./sendEvent-Co2_qySS.js";
import { t as n } from "./all-D5SlTl7_.js";
import { t as r } from "./handleEvent-DgYRr1vV.js";
import { t as i } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as a } from "./loadDataTables-C8-xI5vr.js";
import { t as o } from "./on-DfyX3AS4.js";
import { t as s } from "./onclick-nv-Fl1th.js";
import { t as c } from "./partial-Bo20zBni.js";
import { t as l } from "./regExpGroups-DJF-Cl1w.js";
import { t as u } from "./remainingPages-YKWfA45o.js";
import { n as d } from "./now-B3pCBQja.js";
import { t as f } from "./createDocument-B1aK9_TZ.js";
import { n as p, r as ee } from "./idb-D8xqEbs-.js";
import { t as m } from "./setValue-D-C74rTg.js";
import { t as te } from "./keys-Ch_1-2o8.js";
import { t as ne } from "./currentGuildId-Bpd4l1O8.js";
import { t as h } from "./getElementById-C08-3H-C.js";
import { i as g, n as _ } from "./levelHighlight-DURs3O7W.js";
import { t as v } from "./regExpFirstCapture-D_QeHFEY.js";
import { it as re } from "./constants-CenxlFMY.js";
import { t as y } from "./getValue-vrUqpo0a.js";
import { t as b } from "./intValue-DGRimvm1.js";
import { t as ie } from "./formatLocalDateTime-Ln0B7sCL.js";
import { n as ae, t as oe } from "./lvlTests-COgocWVb.js";
import { t as se } from "./numberIsNaN-DNn4rI1u.js";
import { t as x } from "./fallback-S8GIlBFf.js";
import { t as S } from "./dataObj-C5vpOZlx.js";
// src/modules/common/idHandler.js
var C = (e, [t]) => e.id === t;
function w(e) {
	return (t) => r(C, e, t);
}
// src/modules/notepad/onlinePlayers/buildOnlinePlayerData.js
function T(e, t) {
	let n = $("<div/>").append(e[t][0]);
	return $("img", n).addClass("fshImgCntr"), [
		n.html(),
		e[t][1],
		e[t][2],
		e[t][3] * 100 + e[t][4] + 1
	];
}
function E(e) {
	return te(e).map(c(T, e));
}
// src/modules/notepad/onlinePlayers/doTable.js
var D = 0, O = 0;
function k(e) {
	let t = v(re, e);
	if (t) return Number(t);
}
var A = [
	() => D,
	(e) => k(e[0]) !== ne(),
	(e) => b(e[2]) >= _(),
	(e) => b(e[2]) <= g()
];
function j(e) {
	return A.every((t) => t(e));
}
function M(e, t) {
	j(t) && $("td", e).eq(2).addClass("lvlHighlight");
}
function N(e) {
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
		createdRow: M,
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
var P = (e) => t("OnlinePlayers", e), F = (e) => () => {
	t("OnlinePlayers", e);
};
function I(e) {
	e.currentTarget.children[0]?.tagName === "IMG" ? P("guild click") : P("player click");
}
function L() {
	$("#fshInv").on("click", "a", I), $("#fshInv").on("click", ".sorting", F("sorting"));
}
function R() {
	$("#fshInv_length select").on("change", F("dataTables_length")), $("#fshInv_filter input").on("keyup", F("dataTables_filter")), s(h("fshInv_paginate"), (e) => {
		e.target.classList.contains("paginate_button") && P("paginate_button");
	});
}
function z(e, t) {
	D = y("highlightPlayersNearMyLvl"), O = $("#fshInv", e).DataTable(N(t)), L(), R();
}
function B() {
	O.draw();
}
// src/modules/notepad/onlinePlayers/changeLvl.js
function V(e) {
	(e.target.id === "fshMinLvl" || e.target.id === "fshMaxLvl") && (t("OnlinePlayers", "changeLvl"), B());
}
// src/modules/notepad/onlinePlayers/doRefreshButton.js
function H() {
	let e = y("lastOnlineCheck");
	return d() - e > 3e5 ? "<span> (takes a while to refresh so only do it if you really need to) </span><span id=\"fshRefresh\" class=\"fshLink\">[Refresh]</span>" : `<span>[ Wait ${Math.round(300 - (d() - e) / 1e3)}s ]</span>`;
}
// src/modules/notepad/onlinePlayers/filterHeaderOnlinePlayers.js
function U(e, t) {
	return parseInt($(e, t).val(), 10);
}
function W(e, t) {
	se(t) || m(e, t);
}
function G(e, t, n) {
	let r = U("#fshMinLvl", e), i = U("#fshMaxLvl", e);
	W("onlinePlayerMinLvl", r), W("onlinePlayerMaxLvl", i);
	let a = x(b(n[2]), 0);
	return oe(ae, a, r, i);
}
function ce(e) {
	$.fn.dataTable.ext.search.push(c(G, e)), $("#fshOutput", e).html(`<div align=right>Min lvl:<input value="${y("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${y("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${ie(new Date(y("lastOnlineCheck")))}</div>`);
}
// src/modules/notepad/onlinePlayers/resetEvt.js
function le(e) {
	t("OnlinePlayers", "resetEvt"), m("onlinePlayerMinLvl", S.onlinePlayerMinLvl), m("onlinePlayerMaxLvl", S.onlinePlayerMaxLvl), $("#fshMinLvl", e).val(S.onlinePlayerMinLvl), $("#fshMaxLvl", e).val(S.onlinePlayerMaxLvl), B();
}
// src/modules/notepad/onlinePlayers/injectOnlinePlayers.js
var K = 0, q = 0, J = 0, Y = 0;
function X(e) {
	q = e || {}, ce(K), z(K, E(q));
}
function ue() {
	J === Y && (ee("fsh_onlinePlayers", q), X(q));
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
	$("#pCC img[src$=\"/world/icon_action_view.png", e).parent().parent().parent().each(c(pe, n));
}
function he(e) {
	let { page: t } = l(/(?<page>\d+)/, e.parent().text());
	return parseInt(t, 10);
}
function ge(t, r) {
	Y = he(r);
	let i = u(Y, e).map(async (e) => t(await e));
	return n(i);
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
	t("OnlinePlayers", "refreshEvt"), $("#fshRefresh", K).hide(), J = 0, q = {};
	let n = e(1);
	m("lastOnlineCheck", d()), Z("Parsing online players..."), Q(await n);
}
var ve = [["fshRefresh", _e], ["fshReset", () => le(K)]];
async function ye() {
	K.html(`<span><b>Online Players</b></span>${H()}<div id="fshOutput"></div>`), X(await p("fsh_onlinePlayers")), s(K[0], w(ve)), o(K[0], "keyup", V);
}
async function be(e) {
	i() || (K = e ? $(e) : $("#pCC"), await a(), ye());
}
export { be as default };

//# sourceMappingURL=injectOnlinePlayers-MzWq0uWa.js.map