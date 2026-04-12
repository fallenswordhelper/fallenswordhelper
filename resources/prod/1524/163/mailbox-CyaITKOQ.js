import { t as e } from "./getElementById-DgC-_E5u.js";
import { $ as t } from "./constants-CIKidKvt.js";
import { t as n } from "./isArray-FpVoUujB.js";
import { t as r } from "./getArrayByTagName-QRr9ypcm.js";
import { t as i } from "./partial-CYzPXpZP.js";
import { t as a } from "./layout-6CPY-bfq.js";
import { t as o } from "./once-CDCBWIEZ.js";
import { t as s } from "./sendEvent-DFQy5lFi.js";
import { t as c } from "./entries-CiJ6YMwx.js";
import { t as l } from "./createDiv-CH3rNL4c.js";
import { t as u } from "./insertElement-C_6uFPNr.js";
import { t as d } from "./setInnerHtml-Dh9y9Se-.js";
import { t as f } from "./getApp-CqGRjnvO.js";
import { t as p } from "./_dataAccess-Cm9xXxBc.js";
import { t as m } from "./onclick-8ZwMJyqI.js";
import { t as h } from "./regExpGroups-BIQtVEST.js";
import { t as g } from "./indexAjaxJson-DywREKHQ.js";
import { t as _ } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as v } from "./insertElementBefore-Bwz7Hji8.js";
import { t as y } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as b } from "./hasClass-B5HBqSaS.js";
import { t as x } from "./all-Csir9X7x.js";
import { t as S } from "./createUl-BJYpVoAQ.js";
import { t as C } from "./createInput-dXzC1oHv.js";
import { t as w } from "./chunk-BRn3bpie.js";
import { t as T } from "./createLabel-BGknsCKB.js";
//#region src/modules/app/tempinv/takeitems.js
function E(e) {
	return f({
		cmd: "tempinv",
		subcmd: "takeitems",
		item: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daMailboxTake.js
function D(e) {
	return g({
		cmd: "tempinv",
		subcmd: "takeitem",
		temp_id: e,
		ajax: 1
	});
}
function O(e) {
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
async function k(e) {
	return O(await x(e.map(D)));
}
function A(e) {
	return p(E, k, e);
}
//#endregion
//#region src/modules/common/outputResult.js
function j(e, t) {
	y(t, `<li class="fshNbrList">${e}</li>`);
}
//#endregion
//#region src/modules/common/jsonFail.js
var M = "";
function N(e) {
	return !e.s && M !== e.e.message;
}
function P(e, t) {
	if (!e || (N(e) && (M = e.e.message, j(e.e.message, t)), !e.s)) return !0;
}
//#endregion
//#region src/modules/mailbox/mailbox.js
function F(e, t, n) {
	let r = T({
		id: e,
		className: "sendLink",
		htmlFor: "fshQuickTake",
		textContent: `Toggle ${t}`
	});
	return v(r, n), r;
}
function I(e, n) {
	let r = n.children[0], { tipped: i } = r.dataset, { itemId: a, invId: o } = h(t, i);
	return !a || !o || (e[a] ? e[a].invIds.push(o) : e[a] = {
		invIds: [o],
		tipped: i.replace(/&extra=\d/, ""),
		src: r.src
	}), e;
}
function L() {
	return l({
		id: "quickTake",
		innerHTML: "<div class=\"fshCenter\"><br><font size=\"3\"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>"
	});
}
function R() {
	let e = l(), t = S();
	return u(e, t), {
		takeContainer: e,
		takeResult: t
	};
}
function z(e, t) {
	let n = t[1], r = l();
	u(r, l({ innerHTML: `<img src="${n.src}" class="tip-dynamic" data-tipped="${n.tipped}">` })), u(r, l({ innerHTML: `<button class="fshBl fshBls" data-id="${t[0]}">Take All ${n.invIds.length}</button>` })), u(e, r);
}
function B(e, t) {
	c(t).forEach(i(z, e));
}
function V(e) {
	let t = $(`#temp-inv-img-${e}`).qtip("api");
	t && t.destroy(!0);
}
function H(t) {
	V(t.id);
	let n = e(`temp-inv-${t.id}`);
	n && d("", n);
}
function U(e, t) {
	t.r.forEach(H), j(`${t.r.length.toString()} item(s) taken.`, e);
}
function W(e, t) {
	P(t, e) || n(t.r) && U(e, t);
}
async function G(e, t) {
	W(e, await A(t));
}
function K(e, t, n) {
	s("mailbox", "takeSimilar");
	let { invIds: r } = e[n.dataset.id];
	d(`taking all ${r.length} items`, n.parentNode), w(40, r).forEach(i(G, t));
}
function q(e, t, n) {
	b("fshBls", n.target) && K(e, t, n.target);
}
function J(e, t, n) {
	let r = l({ className: "fshTakeGrid" });
	B(r, e), u(t, r), m(r, i(q, e, n));
}
function Y(e) {
	let t = L(), { takeContainer: n, takeResult: r } = R();
	J(e, t, r), u(t, l()), u(t, n), u(a(), t);
}
function X(e, t) {
	s("mailbox", "toggleQuickTake"), F("qtOn", "Mailbox", t), Y(e.reduce(I, {}));
}
function Z(e, t) {
	let n = C({
		id: "fshQuickTake",
		type: "checkbox"
	});
	v(n, t), o(n, "change", i(X, e, t));
}
function Q() {
	if (_() || !a()) return;
	let e = r("a", a());
	if (e.length === 0) return;
	let t = a().lastElementChild;
	Z(e, t), F("qtOff", "Quick Take", t);
}
//#endregion
export { Q as default };

//# sourceMappingURL=mailbox-CyaITKOQ.js.map