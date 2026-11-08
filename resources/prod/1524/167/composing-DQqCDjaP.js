import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getElementsByClassName-DQB1YOHi.js";
import { t as n } from "./insertElementBefore-CaihVZse.js";
import { t as r } from "./jQueryPresent-DUWNBls9.js";
import { t as i } from "./layout-B2Q1UoM2.js";
import { t as a } from "./getValue-vrUqpo0a.js";
import { n as o, t as s } from "./daComposing-RMx9jvft.js";
import { t as c } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as l } from "./on-DfyX3AS4.js";
import { t as u } from "./querySelector-C6ReNysW.js";
import { t as d } from "./querySelectorArray-C70U47NF.js";
import { t as f } from "./sum-D2GDuxYE.js";
import { t as p } from "./setText-CVjyFkRt.js";
import { t as m } from "./addCommas-Bv8TEVoY.js";
import { t as h } from "./sendEvent-Co2_qySS.js";
import { t as g } from "./createDiv-B84RqGfo.js";
import { t as _ } from "./createInput-x6h3QT7P.js";
import { t as ee } from "./createTable-C2iQ5tWe.js";
import { t as te } from "./contains-DU2fd_7n.js";
import { t as v } from "./getArrayByClassName-RPqCUmVz.js";
import { t as y } from "./insertElement-6ZBKaryO.js";
import { t as b } from "./insertElementAfter-Bc9YFj76.js";
import { t as x } from "./once-D8BIpjVX.js";
import { t as S } from "./onclick-nv-Fl1th.js";
import { t as C } from "./partial-Bo20zBni.js";
import { t as w } from "./querySelectorAll-D_a7rcw0.js";
import { n as ne, t as re } from "./pubsub-BYaMDwR_.js";
import { t as ie } from "./jsonParse-CTM1cd4F.js";
import { n as T, t as ae } from "./rnd-BtjDoNHs.js";
import { t as E } from "./indexAjax-CdFPBWrF.js";
import { t as D } from "./setInnerHtml-f0MFRJnQ.js";
import { E as O, Q as k, w as A } from "./constants-CenxlFMY.js";
import { t as j } from "./setValue-D-C74rTg.js";
import { t as M } from "./system-CNA0YLOa.js";
import { t as N } from "./getText-BqjgTHLv.js";
import { t as P } from "./regExpGroups-DJF-Cl1w.js";
import { t as F } from "./calf-SqS2SeU4.js";
import { n as I } from "./now-B3pCBQja.js";
import { t as L } from "./indexAjaxDoc-MnAqiGyz.js";
import { t as R } from "./infoBox-QJxiDGQb.js";
import { t as z } from "./_dataAccess-BLVLQyDJ.js";
import { t as B } from "./insertHtmlAfterBegin-NUXc07IC.js";
import { t as V } from "./regExpFirstCapture-D_QeHFEY.js";
import { t as H } from "./insertHtmlAfterEnd-DMHOI0WH.js";
// src/modules/composing/costing.js
var U = [], W = (e) => e.map(({ buffs: e, duration: t, id: n }) => ({
	cost: Math.max(e.map(({ level: e }) => e).reduce(f, 0) * t, 5e3),
	id: n
})), G = [
	[(e, t) => !e && !t, () => 0],
	[(e, t) => !e && t, (e, t, n) => n.remove()],
	[(e, t) => e && t, (e, t, n) => p(`Cost: ${m(t)}`, n)],
	[(e, t) => e && !t, (e, t) => c(e.parentNode, `<div class="fshBlue template-cost">Cost: ${m(t)}</div>`)]
];
function K(e) {
	let t = U.find(({ id: t }) => t === Number(e.value))?.cost, n = u(".template-cost", e.parentNode), r = G.find(([e]) => e(t, n));
	r && r[1](e, t, n);
}
function q(e) {
	/^composing-template-\d$/.test(e.target.id) && K(e.target);
}
async function J(e) {
	let t = await s();
	t?.s && (U = W(t.r.templates), e.forEach(K), l(i(), "change", q));
}
function oe() {
	let e = d("select[id^=composing-template-]:not(#composing-template-multi)", i());
	e.length && J(e);
}
// src/modules/ajax/createPotionFromTemplate.js
async function se(e) {
	let t = await E({
		cache: !1,
		dataType: "text",
		data: {
			cmd: "composing",
			subcmd: "createajax",
			template_id: e,
			fshrnd: ae()
		}
	});
	return ie(t) ?? { error: "Server Error" };
}
// src/modules/composing/backgroundCreate.js
function ce() {
	return `url(${M}composing/${T(1, 11)}_${T(1, 51)}.png)`;
}
function le(e, t) {
	D("", e.children[0]), e.children[0].classList.add("fshPot"), e.children[0].style.backgroundImage = ce(), D(`Creating '<span class="fshBold">${t}</span>' Potion`, e.children[2]), D("", e.children[3]);
}
function ue() {
	w("[id|=\"composing-template\"]:not(#composing-template-multi)").length === 0 && j(O, !1);
}
function de(e) {
	let t = e.parentNode;
	t && (D("<div class=\"fshScs\">Success</div>", t), le(t.previousElementSibling.previousElementSibling, e[e.selectedIndex].text), ue());
}
function fe(e, t) {
	let n = e.parentNode;
	n && t && (t.error ? D(`<div class="fshScs">${t.error}</div>`, n) : de(e));
}
async function pe(e) {
	fe(e, await se(e.value));
}
function Y(e, t) {
	t.id = `proc-${t.id}`, D("", e), e.classList.add("fshSpinner", "fshSpinner12", "fshComposingSpinner"), pe(t), re("quickcreate");
}
// src/modules/composing/fastCompose/fastCompose.js
function X(e, t) {
	e.classList.add(`left-${t.toString()}`);
}
function me(e) {
	X(e, w(".quickCreate .sendLink").length);
}
function he(e, t) {
	h("composing", "FastComposeButton");
	let n = w("[id|=\"composing-template\"]:not(#composing-template-multi)");
	if (!(n.length < e.value)) for (let r = 0; r < e.value; r += 1) n[r].value = t, Y(n[r].nextElementSibling.nextElementSibling, n[r]);
}
function ge(e) {
	let t = e.target, { templateId: n } = t.dataset;
	n && he(t, n);
}
function _e(e, t) {
	return _({
		className: "awesome orange",
		dataset: { templateId: t },
		type: "button",
		value: e
	});
}
function ve(e, t, n, r) {
	return r === 0 && p(e[1], t.insertCell(-1)), y(t.insertCell(-1), _e((r + 1).toString(), e[0])), t;
}
function ye(e, t, n) {
	return e.forEach(C(ve, n, t.insertRow(-1))), t;
}
function be(e, t, n) {
	let r = ee({ id: "fshFastCompose" });
	return X(r, n), e.reduce(C(ye, t), r);
}
function xe(e) {
	return [e.value, e.text];
}
function Se(e, t, n) {
	let r = be(d("#composing-template-multi option").map(xe), t, n);
	y(e, r), S(i(), ge), ne("quickcreate", C(me, r));
}
function Ce(e) {
	h("composing", "FastCompose"), c(e, "<br>");
	let t = v("composing-potion-time", document), n = t.filter(te("ETA: n/a")).length;
	n > 0 ? Se(e, t, n) : c(e, "No open slots!");
}
function we() {
	let e = u("#pCC div.centered");
	c(e, "<span class=\"fsh-fast-compose\">[ <label for=\"fast-compose\"><span class=\"sendLink\">Fast Compose</span></label> ]</span>");
	let t = g({ className: "centered" });
	b(t, e);
	let n = _({
		id: "fast-compose",
		type: "checkbox"
	});
	b(n, e), x(n, "change", C(Ce, t));
}
// src/modules/composing/parseComposing.js
function Te(e) {
	let { h: t, m: n, s: r } = P(k, N(e));
	return !t || !n || !r ? 0 : (t * 3600 + n * 60 + Number(r)) * 1e3 + I();
}
function Z(e) {
	j(O, e);
}
function Ee() {
	if (!F.enableComposingAlert) return;
	let e = v("composing-potion-time", document), t = Math.min(...e.map(Te));
	t === 0 ? Z(!0) : (Z(!1), j(A, t));
}
// src/modules/app/composing/collect.js
function De(e) {
	return o({
		subcmd: "collect",
		potion_id: e
	});
}
// src/modules/_dataAccess/daComposingCollect.js
async function Oe(e) {
	let t = await L({
		cmd: "composing",
		subcmd: "collect",
		potion_id: e
	});
	if (!t) return { s: !1 };
	let n = R(t);
	return n.includes("collected") ? { s: !0 } : {
		s: !1,
		e: { message: n }
	};
}
function ke(e) {
	return z(De, Oe, e);
}
// src/modules/composing/quickCollect/quickCollect.js
function Ae(e) {
	let t = V(/potion_id=(?<id>\d+)/, e.getAttribute("onclick"));
	B(e.parentNode, `[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${t}">Quick Collect</button></span> ]&nbsp;`);
}
var je = (e) => e.tagName === "BUTTON" && N(e) === "Quick Collect";
function Me(e) {
	e.nextElementSibling.disabled = !0, e.nextElementSibling.nextElementSibling.disabled = !0, D("", e), e.classList.add("fshSpinner");
}
function Q(e, t, n) {
	D(n, e), e.classList.add(t);
}
function Ne(e, t) {
	e.classList.remove("fshSpinner"), t.s ? Q(e, "fshGreen", "Collected") : Q(e, "fshRed", "Error");
}
async function Pe(e) {
	h("composing", "quickCollect");
	let t = e.parentNode, n = e.value;
	Me(t), Ne(t, await ke(n));
}
function $(e) {
	je(e.target) && Pe(e.target);
}
function Fe() {
	d("input[value=\"Collect Potion\"]", i()).forEach(Ae), S(i(), $);
}
// src/modules/composing/quickCreate.js
function Ie(e) {
	H(e, "<span class=\"quickCreate\">[<span class=\"sendLink\">Quick Create</span>]</span>");
}
var Le = (e) => e.tagName === "SPAN" && e.className === "quickCreate";
function Re(e) {
	let t = e.previousElementSibling.previousElementSibling;
	t && t.value !== "none" && (Y(e, t), h("composing", "QuickCreate"));
}
function ze(e) {
	let t = e.target.parentNode;
	Le(t) && Re(t);
}
function Be() {
	d("input[id^=create-]:not(#create-multi)", i()).forEach(Ie), S(i(), ze);
}
// src/modules/composing/composing.js
function Ve() {
	if (!a("moveComposingButtons")) return;
	let r = e("composing-error-dialog")?.previousElementSibling;
	if (!r) return;
	r.setAttribute("style", "text-align: right; padding: 0 38px 0 0");
	let o = t("composing-level", i())[0].parentNode;
	n(r, o);
}
function He() {
	Ee(), Be(), Ve(), we(), Fe(), oe();
}
function Ue() {
	r() && i() && He();
}
export { Ue as default };

//# sourceMappingURL=composing-DQqCDjaP.js.map