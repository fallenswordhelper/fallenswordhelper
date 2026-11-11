import { t as e } from "./indexAjaxJson-DWeSX1ZL.js";
import { t } from "./getApp-xCmcyAG-.js";
import { t as n } from "./all-D5SlTl7_.js";
import { t as r } from "./_dataAccess-BLVLQyDJ.js";
import { t as i } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as a } from "./querySelectorArray-C70U47NF.js";
import { t as o } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as s } from "./sendEvent-DdWrU3DL.js";
import { t as c } from "./createDiv-B84RqGfo.js";
import { t as l } from "./createInput-x6h3QT7P.js";
import { t as u } from "./createLabel-BRrb6QgO.js";
import { t as d } from "./createUl-C_0j3zUR.js";
import { t as f } from "./chunk-A8FcSK6x.js";
import { t as ee } from "./entries-PXiXtjwA.js";
import { t as p } from "./getArrayByTagName-Dyx_AQto.js";
import { t as m } from "./getElementById-C08-3H-C.js";
import { t as h } from "./hasClass-B8BlPKl4.js";
import { t as g } from "./insertElement-6ZBKaryO.js";
import { t as _ } from "./insertElementBefore-CaihVZse.js";
import { t as v } from "./isArray-jaX-hZZq.js";
import { t as y } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as b } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as x } from "./once-D8BIpjVX.js";
import { t as S } from "./onclick-nv-Fl1th.js";
import { t as C } from "./partial-Bo20zBni.js";
import { t as w } from "./playerId-C1UyEKeb.js";
import { t as T } from "./setInnerHtml-f0MFRJnQ.js";
import { t as E } from "./system-CNA0YLOa.js";
import { t as D } from "./layout-B2Q1UoM2.js";
// src/modules/app/tempinv/takeitems.js
function O(e) {
	return t({
		cmd: "tempinv",
		subcmd: "takeitems",
		item: e
	});
}
// src/modules/_dataAccess/daMailboxTake.js
function k(t) {
	return e({
		cmd: "tempinv",
		subcmd: "takeitem",
		temp_id: t,
		ajax: 1
	});
}
function A(e) {
	let t = e.filter((e) => e.r === 0), n = e.filter((e) => e.r !== 0);
	return t.length > 0 ? {
		r: t.map((e) => ({ id: e.temp_id })),
		s: !0
	} : n.length > 0 ? {
		e: { message: n[0].m },
		s: !1
	} : {
		e: { message: e[0].m },
		s: !1
	};
}
async function j(e) {
	return A(await n(e.map(k)));
}
function M(e) {
	return r(O, j, e);
}
// src/modules/app/tempinv/view.js
function N() {
	return t({ cmd: "tempinv" });
}
// src/modules/_dataAccess/daMailboxView.js
var P = {
	e: {
		code: 0,
		message: "Server Error"
	},
	s: !1
}, F = (e) => Number(o(/Page \d+ of (?<pages>\d+)/, e.body.textContent)) || 1, I = (e) => ({
	a: Number(e.id.replace("temp-inv-img-", "")),
	b: Number(o(/item_id=(?<id>\d+)/, e.dataset.tipped))
}), L = (e) => a("[id^=\"temp-inv-img-\"]", e).map(I);
async function R() {
	let e = await i({ cmd: "tempinv" });
	if (!e) return P;
	let t = Array.from({ length: F(e) - 1 }, (e, t) => t + 1), r = await n(t.map((e) => i({
		cmd: "tempinv",
		page: e
	})));
	return r.some((e) => !e) ? P : {
		r: [e, ...r].flatMap(L),
		s: !0
	};
}
function z() {
	return r(N, R);
}
// src/modules/common/outputResult.js
function B(e, t) {
	b(t, `<li class="fshNbrList">${e}</li>`);
}
// src/modules/common/jsonFail.js
var V = "";
function H(e) {
	return !e.s && V !== e.e.message;
}
function U(e, t) {
	if (!e || (H(e) && (V = e.e.message, B(e.e.message, t)), !e.s)) return !0;
}
// src/modules/mailbox/mailbox.js
function W(e, t, n) {
	let r = u({
		id: e,
		className: "sendLink",
		htmlFor: "fshQuickTake",
		textContent: `Toggle ${t}`
	});
	return _(r, n), r;
}
function G(e, { a: t, b: n }) {
	return e[n] ? e[n].invIds.push(t) : e[n] = {
		invIds: [t],
		tipped: `fetchitem.php?item_id=${n}&inv_id=${t}&t=5&p=${w()}`,
		src: `${E}items/${n}.gif`
	}, e;
}
function K() {
	return c({
		id: "quickTake",
		innerHTML: "<div class=\"fshCenter\"><br><font size=\"3\"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>"
	});
}
function q() {
	let e = c(), t = d();
	return g(e, t), {
		takeContainer: e,
		takeResult: t
	};
}
function J(e, t) {
	let n = t[1], r = c(), i = c({ innerHTML: `<img src="${n.src}" class="tip-dynamic" data-tipped="${n.tipped}">` });
	g(r, i);
	let a = c({ innerHTML: `<button class="fshBl fshBls" data-id="${t[0]}">Take All ${n.invIds.length}</button>` });
	g(r, a), g(e, r);
}
function Y(e, t) {
	ee(t).forEach(C(J, e));
}
function X(e) {
	let t = $(`#temp-inv-img-${e}`).qtip("api");
	t && t.destroy(!0);
}
function Z(e) {
	X(e.id);
	let t = m(`temp-inv-${e.id}`);
	t && T("", t);
}
function Q(e, t) {
	t.r.forEach(Z), B(`${t.r.length.toString()} item(s) taken.`, e);
}
function te(e, t) {
	U(t, e) || v(t.r) && Q(e, t);
}
async function ne(e, t) {
	te(e, await M(t));
}
function re(e, t, n) {
	s("mailbox", "takeSimilar");
	let { invIds: r } = e[n.dataset.id];
	T(`taking all ${r.length} items`, n.parentNode), f(40, r).forEach(C(ne, t));
}
function ie(e, t, n) {
	h("fshBls", n.target) && re(e, t, n.target);
}
function ae(e, t, n) {
	let r = c({ className: "fshTakeGrid" });
	Y(r, e), g(t, r), S(r, C(ie, e, n));
}
function oe(e) {
	let t = K(), { takeContainer: n, takeResult: r } = q();
	return ae(e, t, r), g(t, c()), g(t, n), g(D(), t), r;
}
async function se(e) {
	s("mailbox", "toggleQuickTake"), W("qtOn", "Mailbox", e);
	let t = await z();
	U(t, oe((t.s && v(t.r) ? t.r : []).reduce(G, {})));
}
function ce(e) {
	let t = l({
		id: "fshQuickTake",
		type: "checkbox"
	});
	_(t, e), x(t, "change", C(se, e));
}
function le() {
	if (y() || !D() || p("a", D()).length === 0) return;
	let e = D().lastElementChild;
	ce(e), W("qtOff", "Quick Take", e);
}
export { le as default };

//# sourceMappingURL=mailbox-Cc2tiqzg.js.map