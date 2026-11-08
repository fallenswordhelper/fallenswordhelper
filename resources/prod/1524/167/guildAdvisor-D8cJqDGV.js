import { t as e } from "./getMembrList-DQELBcHH.js";
import { t } from "./sendEvent-Co2_qySS.js";
import { t as n } from "./arrayFrom-CKk6qt2j.js";
import { t as r } from "./createAnchor-HiREQnLZ.js";
import { t as i } from "./cElement-Dj5A9-NC.js";
import { t as a } from "./getElementsByClassName-DQB1YOHi.js";
import { t as o } from "./getElementsByTagName-B8gMqefB.js";
import { t as s } from "./getText-BqjgTHLv.js";
import { t as c } from "./getTextTrim-CvXe85fp.js";
import { t as l } from "./insertElement-6ZBKaryO.js";
import { t as u } from "./interceptSubmit-QT2t7a5u.js";
import { t as d } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as f } from "./loadDataTables-C8-xI5vr.js";
import { t as p } from "./onclick-nv-Fl1th.js";
import { t as m } from "./partial-Bo20zBni.js";
import { t as h } from "./playerLinkFromMembrList-DB8TVnAD.js";
import { t as g } from "./calf-SqS2SeU4.js";
import { p as ee } from "./constants-CenxlFMY.js";
import { t as _ } from "./layout-B2Q1UoM2.js";
import { t as v } from "./createDiv-B84RqGfo.js";
import { t as y } from "./createTable-C2iQ5tWe.js";
import { t as b } from "./trim-CU-eMahN.js";
import { t as x } from "./chromeHandlers-BuUMEajb.js";
import { t as S } from "./task-C5UKL2RH.js";
import { t as C } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as w } from "./guild-_o9vVAQk.js";
import { t as T } from "./querySelector-C6ReNysW.js";
import { t as E } from "./intValue-DGRimvm1.js";
import { t as D } from "./_dataAccess-BLVLQyDJ.js";
import { t as O } from "./all-D5SlTl7_.js";
import { t as k } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as A } from "./isArray-jaX-hZZq.js";
import { t as j } from "./setInnerHtml-f0MFRJnQ.js";
import { t as M } from "./addCommas-Bv8TEVoY.js";
// src/modules/common/cElement/createTFoot.js
function N(e) {
	return i("tfoot", e);
}
// src/modules/common/replaceChild.js
function P(e, t) {
	return t?.parentNode?.replaceChild?.(e, t);
}
// src/modules/guild/advisor/helpers.js
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
	return t[e] ? `<div class="fshAdvRank">${b(t[e].rank_name)}</div>` : "";
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
var z = (e) => t("advisor", e), B = (e) => () => {
	t("advisor", e);
};
function te(e, t, n) {
	P(t, e), x(n, B, z);
}
function V(e, t, n) {
	S(3, te, [
		e,
		t,
		n
	]);
}
function H(e, t, n) {
	let r = v(), i = y({ className: "fshDataTable fshXSmall hover" });
	return l(r, i), l(i, t), S(3, R, [
		i,
		n,
		m(V, e, r, i)
	]), r;
}
// src/modules/app/guild/advisorView.js
function U(e) {
	return w({
		subcmd: "advisor",
		subcmd2: "view",
		period: e
	});
}
// src/modules/_dataAccess/daAdvisor.js
var W = (e) => E(c(e));
function G(e) {
	return {
		player: {
			level: 0,
			name: c(e.cells[0])
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
	if (!e) return { s: !1 };
	let t = T("#pCC table table", e);
	return {
		r: n(t.rows).slice(1, -1).map(G),
		s: !0
	};
}
async function q(e) {
	return K(await C({
		cmd: "guild",
		subcmd: "advisor",
		subcmd2: "view",
		period: e
	}));
}
function J(e) {
	return D(U, q, e);
}
// src/modules/guild/advisor/injectAdvisorWeekly.js
function Y(e, t, n) {
	return k(e.lastElementChild.lastElementChild, ` day ${t},`), n.r;
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
		stats: t.stats.map(m(Z, e[n].stats))
	};
}
function re(e, t) {
	return e.map(m(ne, t));
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
	return t.stats.map(m(Z, e));
}
function se(e, t) {
	return `${e}<td><u>${t}</u></td>`;
}
function ce(e) {
	return N({ innerHTML: `<tr><td class="fshRight" colspan="3">Total: </td>${e.slice(1).reduce(oe, e[0].stats).map(M).reduce(se, "")}</tr>` });
}
function le(e, t) {
	let n = t.stats.map(M);
	return [
		h(e, t.player.name),
		I(t.player.name, e),
		L(t.player.name, e)
	].concat(n);
}
function ue(e, [t, ...n]) {
	if (!n.every((e) => A(e))) return;
	let r = ae(n);
	H(e, ce(r), r.map(m(le, t)));
}
async function de(t) {
	j("<span class=\"fshCurveContainer fshFlex\"><span class=\"fshCurveEle fshCurveLbl fshOldSpinner\"></span><span class=\"fshSpinnerMsg\">&nbsp;Retrieving daily data ...</span></span>", t);
	let n = [e(!1)].concat([
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map(m(X, t)));
	ue(t, await O(n));
}
function fe(e) {
	de(e);
}
// src/modules/guild/advisor/guildAdvisor.js
function pe(e) {
	let t = e.rows[e.rows.length - 1].cloneNode(!0), n = N();
	l(n, t);
	let r = t.cells[0];
	return r.className = "fshRight", r.setAttribute("colspan", "3"), n;
}
function me(e, t) {
	return t === 0 ? c(e) : s(e);
}
function Q(e, t) {
	let r = n(t.cells, me);
	return r.splice(0, 1, h(e, r[0]), I(r[0], e), L(r[0], e)), r;
}
function he(e, t) {
	return n(e.rows).slice(1, -1).map(m(Q, t));
}
function ge() {
	let e = a("custombutton", _());
	if (!e.length) return;
	let n = e[0].parentNode;
	n.classList.add("fshRelative");
	let i = r({
		className: "summary-link",
		href: `${ee}guild&subcmd=advisor&subcmd2=weekly`,
		textContent: "7-Day Summary"
	});
	p(i, () => t("advisor", "summary")), l(n, i);
}
function _e(e, t) {
	let n = he(e, t);
	H(e, pe(e), n), ge();
}
async function ve(t) {
	if (g.subcmd2 === "weekly") fe(t);
	else {
		let n = await e(!1);
		if (!n) return;
		_e(t, n);
	}
}
async function ye() {
	if (d()) return;
	let e = o("table", _())[1];
	e && (u(), await f(), ve(e));
}
export { ye as default };

//# sourceMappingURL=guildAdvisor-D8cJqDGV.js.map