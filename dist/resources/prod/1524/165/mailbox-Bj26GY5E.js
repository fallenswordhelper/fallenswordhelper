import { t as e } from "./getElementById-C08-3H-C.js";
import { $ as t } from "./constants-CenxlFMY.js";
import { t as n } from "./isArray-jaX-hZZq.js";
import { t as r } from "./getArrayByTagName-Dyx_AQto.js";
import { t as i } from "./partial-Bo20zBni.js";
import { t as a } from "./layout-B2Q1UoM2.js";
import { t as o } from "./once-D8BIpjVX.js";
import { t as s } from "./sendEvent-DkxfZozg.js";
import { t as c } from "./entries-PXiXtjwA.js";
import { t as l } from "./createDiv-XU2XBEIv.js";
import { t as u } from "./insertElement-6ZBKaryO.js";
import { t as d } from "./setInnerHtml-f0MFRJnQ.js";
import { t as f } from "./getApp-ClZXM9Yf.js";
import { t as p } from "./_dataAccess-BLVLQyDJ.js";
import { t as m } from "./onclick-nv-Fl1th.js";
import { t as h } from "./regExpGroups-DJF-Cl1w.js";
import { t as g } from "./indexAjaxJson-DlbvYfbd.js";
import { t as _ } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as v } from "./insertElementBefore-CaihVZse.js";
import { t as y } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as b } from "./hasClass-B8BlPKl4.js";
import { t as x } from "./all-D5SlTl7_.js";
import { t as S } from "./createUl-DYP2v4cB.js";
import { t as C } from "./createInput-DPgk9mYC.js";
import { t as w } from "./chunk-A8FcSK6x.js";
import { t as T } from "./createLabel-DTCDsteI.js";
// src/modules/app/tempinv/takeitems.js
function E(e) {
	return f({
		cmd: "tempinv",
		subcmd: "takeitems",
		item: e
	});
}
// src/modules/_dataAccess/daMailboxTake.js
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
// src/modules/common/outputResult.js
function j(e, t) {
	y(t, `<li class="fshNbrList">${e}</li>`);
}
// src/modules/common/jsonFail.js
var M = "";
function N(e) {
	return !e.s && M !== e.e.message;
}
function P(e, t) {
	if (!e || (N(e) && (M = e.e.message, j(e.e.message, t)), !e.s)) return !0;
}
// src/modules/mailbox/mailbox.js
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
	let n = t[1], r = l(), i = l({ innerHTML: `<img src="${n.src}" class="tip-dynamic" data-tipped="${n.tipped}">` });
	u(r, i);
	let a = l({ innerHTML: `<button class="fshBl fshBls" data-id="${t[0]}">Take All ${n.invIds.length}</button>` });
	u(r, a), u(e, r);
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
export { Q as default };

//# sourceMappingURL=mailbox-Bj26GY5E.js.map