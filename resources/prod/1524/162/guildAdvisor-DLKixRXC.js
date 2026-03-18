import "./sendException-s1csWDQs.js";
import { t as e } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { p as t } from "./constants-C54mky4_.js";
import "./getValue-CCThXEzy.js";
import { t as n } from "./querySelector-qkBBhiGH.js";
import { t as r } from "./calf-OM11NjAU.js";
import { t as i } from "./isArray-oWM-Qp9j.js";
import { t as a } from "./task-jKbgFyYT.js";
import { t as o } from "./arrayFrom-LpiPmbFE.js";
import { t as s } from "./getElementsByTagName-BUN1mNPF.js";
import { t as c } from "./trim-BIFcpoD2.js";
import { t as l } from "./getTextTrim-Wj82yPPN.js";
import { t as u } from "./partial-goh6HOls.js";
import { t as d } from "./layout-Bapa39KM.js";
import { t as f } from "./sendEvent-bwvhd4A-.js";
import { t as p } from "./cElement-d0yA6JNe.js";
import { t as m } from "./createDiv-Bb3O54wx.js";
import { t as h } from "./getElementsByClassName-CXrxjAkB.js";
import { t as g } from "./insertElement-DtUB7uKq.js";
import { t as _ } from "./setInnerHtml-ClDKp0Zh.js";
import { t as v } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import "./indexAjaxData-CqOTihOX.js";
import { t as y } from "./indexAjaxDoc-DHqD1q8U.js";
import { t as ee } from "./onclick-9iRduoOH.js";
import "./idb-sdcp-8vV.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import { t as b } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as x } from "./createAnchor-DH9dG-LN.js";
import { t as S } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as C } from "./intValue-NIZZTFPF.js";
import { t as w } from "./guild-aYCivZ4L.js";
import { t as T } from "./all-Dy4LjBGw.js";
import "./playerLink-B6KUxd0X.js";
import { t as E } from "./addCommas-Ca7d_KBz.js";
import "./formToUrl-BROd6YBE.js";
import { t as D } from "./interceptSubmit-0losboil.js";
import { t as O } from "./loadDataTables-BxS2i7yi.js";
import "./guildMembers-CZU-uLr9.js";
import { t as k } from "./getMembrList-B5emVD6O.js";
import { t as A } from "./createTable-UUXl0KV8.js";
import { t as j } from "./playerLinkFromMembrList-Cg2qOPyG.js";
import { t as M } from "./chromeHandlers-D1Dy4HTz.js";
//#region src/modules/common/cElement/createTFoot.js
function N(e) {
	return p("tfoot", e);
}
//#endregion
//#region src/modules/common/replaceChild.js
function P(e, t) {
	return t?.parentNode?.replaceChild?.(e, t);
}
//#endregion
//#region src/modules/guild/advisor/helpers.js
var F = [
	{ title: "<div class=\"fshBold\">Member</div>" },
	{
		title: "<div class=\"fshBold\">Lvl</div>",
		class: "dt-center"
	},
	{
		title: "<div class=\"fshBold\">Rank</div>",
		class: "dt-center dt-nowrap"
	},
	{
		title: "<div class=\"fshBold\">Gold From Deposits</div>",
		class: "dt-center"
	},
	{
		title: "<div class=\"fshBold\">Gold From Tax</div>",
		class: "dt-center"
	},
	{
		title: "<div class=\"fshBold\">Gold Total</div>",
		class: "dt-center"
	},
	{
		title: "<div class=\"fshBold\">FSP</div>",
		class: "dt-center"
	},
	{
		title: "<div class=\"fshBold\">Skill Cast</div>",
		class: "dt-center"
	},
	{
		title: "<div class=\"fshBold\">Group Create</div>",
		class: "dt-center"
	},
	{
		title: "<div class=\"fshBold\">Group Join</div>",
		class: "dt-center"
	},
	{
		title: "<div class=\"fshBold\">Relic</div>",
		class: "dt-center"
	},
	{
		title: "<div class=\"fshBold\">XP Contrib</div>",
		class: "dt-center"
	}
];
function I(e, t) {
	return t[e] ? t[e].level : "";
}
function L(e, t) {
	return t[e] ? `<div class="fshAdvRank">${c(t[e].rank_name)}</div>` : "";
}
function R(e, t, n) {
	$(e).DataTable({
		autoWidth: !1,
		columnDefs: [{
			targets: [
				1,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			orderSequence: ["desc", "asc"]
		}],
		columns: F,
		data: t,
		deferRender: !0,
		initComplete: n,
		lengthMenu: [[
			25,
			50,
			-1
		], [
			25,
			50,
			"All"
		]],
		pageLength: 25,
		stateDuration: 0,
		stateSave: !0
	});
}
var z = (e) => f("advisor", e), B = (e) => () => {
	f("advisor", e);
};
function V(e, t, n) {
	P(t, e), M(n, B, z);
}
function H(e, t, n) {
	a(3, V, [
		e,
		t,
		n
	]);
}
function U(e, t, n) {
	let r = m(), i = A({ className: "fshDataTable fshXSmall hover" });
	return g(r, i), g(i, t), a(3, R, [
		i,
		n,
		u(H, e, r, i)
	]), r;
}
//#endregion
//#region src/modules/app/guild/advisorView.js
function te(e) {
	return w({
		subcmd: "advisor",
		subcmd2: "view",
		period: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daAdvisor.js
var W = (e) => C(l(e));
function G(e) {
	return {
		player: {
			level: 0,
			name: l(e.cells[0])
		},
		stats: [
			3,
			4,
			5,
			6,
			7,
			9,
			1,
			2,
			8
		].map((t) => W(e.cells[t]))
	};
}
function K(e) {
	return e ? {
		r: o(n("#pCC table table", e).rows).slice(1, -1).map(G),
		s: !0
	} : { s: !1 };
}
async function q(e) {
	return K(await y({
		cmd: "guild",
		subcmd: "advisor",
		subcmd2: "view",
		period: e
	}));
}
function J(e) {
	return v(te, q, e);
}
//#endregion
//#region src/modules/guild/advisor/injectAdvisorWeekly.js
function Y(e, t, n) {
	return S(e.lastElementChild.lastElementChild, ` day ${t},`), n.r;
}
async function X(e, t) {
	return Y(e, t, await J(t));
}
function Z(e, t, n) {
	return t + e[n];
}
function ne(e, t, n) {
	return {
		...t,
		stats: t.stats.map(u(Z, e[n].stats))
	};
}
function re(e, t) {
	return e.map(u(ne, t));
}
function ie(e) {
	return {
		player: e.player,
		stats: [
			e.stats[6],
			e.stats[7],
			e.stats[6] + e.stats[7],
			e.stats[1],
			e.stats[2],
			e.stats[3],
			e.stats[4],
			e.stats[8],
			e.stats[5]
		]
	};
}
function ae(e) {
	return e.slice(1).reduce(re, e[0]).map(ie);
}
function oe(e, t) {
	return t.stats.map(u(Z, e));
}
function se(e, t) {
	return `${e}<td><u>${t}</u></td>`;
}
function ce(e) {
	return N({ innerHTML: `<tr><td class="fshRight" colspan="3">Total: </td>${e.slice(1).reduce(oe, e[0].stats).map(E).reduce(se, "")}</tr>` });
}
function le(e, t) {
	let n = t.stats.map(E);
	return [
		j(e, t.player.name),
		I(t.player.name, e),
		L(t.player.name, e)
	].concat(n);
}
function ue(e, [t, ...n]) {
	if (!n.every((e) => i(e))) return;
	let r = ae(n);
	U(e, ce(r), r.map(u(le, t)));
}
async function de(e) {
	_("<span class=\"fshCurveContainer fshFlex\"><span class=\"fshCurveEle fshCurveLbl fshOldSpinner\"></span><span class=\"fshSpinnerMsg\">&nbsp;Retrieving daily data ...</span></span>", e), ue(e, await T([k(!1)].concat([
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map(u(X, e)))));
}
function fe(e) {
	de(e);
}
//#endregion
//#region src/modules/guild/advisor/guildAdvisor.js
function pe(e) {
	let t = e.rows[e.rows.length - 1].cloneNode(!0), n = N();
	g(n, t);
	let r = t.cells[0];
	return r.className = "fshRight", r.setAttribute("colspan", "3"), n;
}
function me(t, n) {
	return n === 0 ? l(t) : e(t);
}
function Q(e, t) {
	let n = o(t.cells, me);
	return n.splice(0, 1, j(e, n[0]), I(n[0], e), L(n[0], e)), n;
}
function he(e, t) {
	return o(e.rows).slice(1, -1).map(u(Q, t));
}
function ge() {
	let e = h("custombutton", d());
	if (!e.length) return;
	let n = e[0].parentNode;
	n.classList.add("fshRelative");
	let r = x({
		className: "summary-link",
		href: `${t}guild&subcmd=advisor&subcmd2=weekly`,
		textContent: "7-Day Summary"
	});
	ee(r, () => f("advisor", "summary")), g(n, r);
}
function _e(e, t) {
	let n = he(e, t);
	U(e, pe(e), n), ge();
}
async function ve(e) {
	if (r.subcmd2 === "weekly") fe(e);
	else {
		let t = await k(!1);
		if (!t) return;
		_e(e, t);
	}
}
async function ye() {
	if (b()) return;
	let e = s("table", d())[1];
	e && (D(), await O(), ve(e));
}
//#endregion
export { ye as default };

//# sourceMappingURL=guildAdvisor-DLKixRXC.js.map