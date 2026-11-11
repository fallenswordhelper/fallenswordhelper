import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getElementsByClassName-DQB1YOHi.js";
import { t as n } from "./insertElementBefore-CaihVZse.js";
import { t as r } from "./jQueryPresent-DUWNBls9.js";
import { t as i } from "./layout-B2Q1UoM2.js";
import { t as a } from "./getValue-DMlY7SSn.js";
import { t as o } from "./getApp-xCmcyAG-.js";
import { t as s } from "./_dataAccess-BLVLQyDJ.js";
import { t as c } from "./composingView-CdryNQJE.js";
import { t as l } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as ee } from "./on-DfyX3AS4.js";
import { t as u } from "./querySelector-C6ReNysW.js";
import { t as d } from "./querySelectorArray-C70U47NF.js";
import { t as f } from "./sum-D2GDuxYE.js";
import { t as p } from "./setText-CVjyFkRt.js";
import { t as m } from "./addCommas-Bv8TEVoY.js";
import { t as h } from "./sendEvent-DdWrU3DL.js";
import { t as te } from "./createDiv-B84RqGfo.js";
import { t as g } from "./createInput-x6h3QT7P.js";
import { t as _ } from "./createTable-C2iQ5tWe.js";
import { t as v } from "./contains-DU2fd_7n.js";
import { t as y } from "./getArrayByClassName-RPqCUmVz.js";
import { t as b } from "./insertElement-6ZBKaryO.js";
import { t as x } from "./insertElementAfter-Bc9YFj76.js";
import { t as S } from "./once-D8BIpjVX.js";
import { t as C } from "./onclick-nv-Fl1th.js";
import { t as w } from "./partial-Bo20zBni.js";
import { t as T } from "./querySelectorAll-D_a7rcw0.js";
import { n as ne, t as re } from "./pubsub-C3_OKoBO.js";
import { t as ie } from "./jsonParse-CTM1cd4F.js";
import { n as E, t as ae } from "./rnd-BtjDoNHs.js";
import { t as oe } from "./indexAjax-CdFPBWrF.js";
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
import { t as z } from "./fsPostParam-DT4AaRdC.js";
import { t as B } from "./insertHtmlAfterBegin-NUXc07IC.js";
import { t as V } from "./insertHtmlAfterEnd-DMHOI0WH.js";
// src/modules/app/composing/composing.js
function H(e) {
	return o({
		cmd: "composing",
		...e
	});
}
// src/modules/app/composing/view.js
function U() {
	return H({ subcmd: "view" });
}
// src/modules/_dataAccess/daComposing.js
function W() {
	return s(U, c);
}
// src/modules/composing/costing.js
var G = [], K = (e) => e.map(({ buffs: e, duration: t, id: n }) => ({
	cost: Math.max(e.map(({ level: e }) => e).reduce(f, 0) * t, 5e3),
	id: n
})), q = [
	[(e, t) => !e && !t, () => 0],
	[(e, t) => !e && t, (e, t, n) => n.remove()],
	[(e, t) => e && t, (e, t, n) => p(`Cost: ${m(t)}`, n)],
	[(e, t) => e && !t, (e, t) => l(e.parentNode, `<div class="fshBlue template-cost">Cost: ${m(t)}</div>`)]
];
function J(e) {
	let t = G.find(({ id: t }) => t === Number(e.value))?.cost, n = u(".template-cost", e.parentNode), r = q.find(([e]) => e(t, n));
	r && r[1](e, t, n);
}
function se(e) {
	/^composing-template-\d$/.test(e.target.id) && J(e.target);
}
async function ce(e) {
	let t = await W();
	t?.s && (G = K(t.r.templates), e.forEach(J), ee(i(), "change", se));
}
function le() {
	let e = d("select[id^=composing-template-]:not(#composing-template-multi)", i());
	e.length && ce(e);
}
// src/modules/ajax/createPotionFromTemplate.js
async function ue(e) {
	let t = await oe({
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
function de() {
	return `url(${M}composing/${E(1, 11)}_${E(1, 51)}.png)`;
}
function fe(e, t) {
	D("", e.children[0]), e.children[0].classList.add("fshPot"), e.children[0].style.backgroundImage = de(), D(`Creating '<span class="fshBold">${t}</span>' Potion`, e.children[2]), D("", e.children[3]);
}
function pe() {
	T("[id|=\"composing-template\"]:not(#composing-template-multi)").length === 0 && j(O, !1);
}
function me(e) {
	let t = e.parentNode;
	t && (D("<div class=\"fshScs\">Success</div>", t), fe(t.previousElementSibling.previousElementSibling, e[e.selectedIndex].text), pe());
}
function he(e, t) {
	let n = e.parentNode;
	n && t && (t.error ? D(`<div class="fshScs">${t.error}</div>`, n) : me(e));
}
async function ge(e) {
	he(e, await ue(e.value));
}
function Y(e, t) {
	t.id = `proc-${t.id}`, D("", e), e.classList.add("fshSpinner", "fshSpinner12", "fshComposingSpinner"), ge(t), re("quickcreate");
}
// src/modules/composing/fastCompose/fastCompose.js
function X(e, t) {
	e.classList.add(`left-${t.toString()}`);
}
function _e(e) {
	X(e, T(".quickCreate .sendLink").length);
}
function ve(e, t) {
	h("composing", "FastComposeButton");
	let n = T("[id|=\"composing-template\"]:not(#composing-template-multi)");
	if (!(n.length < e.value)) for (let r = 0; r < e.value; r += 1) n[r].value = t, Y(n[r].nextElementSibling.nextElementSibling, n[r]);
}
function ye(e) {
	let t = e.target, { templateId: n } = t.dataset;
	n && ve(t, n);
}
function be(e, t) {
	return g({
		className: "awesome orange",
		dataset: { templateId: t },
		type: "button",
		value: e
	});
}
function xe(e, t, n, r) {
	return r === 0 && p(e[1], t.insertCell(-1)), b(t.insertCell(-1), be((r + 1).toString(), e[0])), t;
}
function Se(e, t, n) {
	return e.forEach(w(xe, n, t.insertRow(-1))), t;
}
function Ce(e, t, n) {
	let r = _({ id: "fshFastCompose" });
	return X(r, n), e.reduce(w(Se, t), r);
}
function we(e) {
	return [e.value, e.text];
}
function Te(e, t, n) {
	let r = Ce(d("#composing-template-multi option").map(we), t, n);
	b(e, r), C(i(), ye), ne("quickcreate", w(_e, r));
}
function Ee(e) {
	h("composing", "FastCompose"), l(e, "<br>");
	let t = y("composing-potion-time", document), n = t.filter(v("ETA: n/a")).length;
	n > 0 ? Te(e, t, n) : l(e, "No open slots!");
}
function De() {
	let e = u("#pCC div.centered");
	l(e, "<span class=\"fsh-fast-compose\">[ <label for=\"fast-compose\"><span class=\"sendLink\">Fast Compose</span></label> ]</span>");
	let t = te({ className: "centered" });
	x(t, e);
	let n = g({
		id: "fast-compose",
		type: "checkbox"
	});
	x(n, e), S(n, "change", w(Ee, t));
}
// src/modules/composing/parseComposing.js
function Oe(e) {
	let { h: t, m: n, s: r } = P(k, N(e));
	return !t || !n || !r ? 0 : (t * 3600 + n * 60 + Number(r)) * 1e3 + I();
}
function Z(e) {
	j(O, e);
}
function ke() {
	if (!F.enableComposingAlert) return;
	let e = y("composing-potion-time", document), t = Math.min(...e.map(Oe));
	t === 0 ? Z(!0) : (Z(!1), j(A, t));
}
// src/modules/app/composing/collect.js
function Ae(e) {
	return H({
		subcmd: "collect",
		potion_id: e
	});
}
// src/modules/_dataAccess/daComposingCollect.js
async function je(e) {
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
function Me(e) {
	return s(Ae, je, e);
}
// src/modules/composing/quickCollect/quickCollect.js
function Ne(e) {
	let t = z(e, "potion_id");
	t && B(e.parentNode, `[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${t}">Quick Collect</button></span> ]&nbsp;`);
}
var Pe = (e) => e.tagName === "BUTTON" && N(e) === "Quick Collect";
function Fe(e) {
	e.nextElementSibling.disabled = !0, e.nextElementSibling.nextElementSibling.disabled = !0, D("", e), e.classList.add("fshSpinner");
}
function Q(e, t, n) {
	D(n, e), e.classList.add(t);
}
function Ie(e, t) {
	e.classList.remove("fshSpinner"), t.s ? Q(e, "fshGreen", "Collected") : Q(e, "fshRed", "Error");
}
async function Le(e) {
	h("composing", "quickCollect");
	let t = e.parentNode, n = e.value;
	Fe(t), Ie(t, await Me(n));
}
function $(e) {
	Pe(e.target) && Le(e.target);
}
function Re() {
	d("input[value=\"Collect Potion\"]", i()).forEach(Ne), C(i(), $);
}
// src/modules/composing/quickCreate.js
function ze(e) {
	V(e, "<span class=\"quickCreate\">[<span class=\"sendLink\">Quick Create</span>]</span>");
}
var Be = (e) => e.tagName === "SPAN" && e.className === "quickCreate";
function Ve(e) {
	let t = e.previousElementSibling.previousElementSibling;
	t && t.value !== "none" && (Y(e, t), h("composing", "QuickCreate"));
}
function He(e) {
	let t = e.target.parentNode;
	Be(t) && Ve(t);
}
function Ue() {
	d("input[id^=create-]:not(#create-multi)", i()).forEach(ze), C(i(), He);
}
// src/modules/composing/composing.js
function We() {
	if (!a("moveComposingButtons")) return;
	let r = e("composing-error-dialog")?.previousElementSibling;
	if (!r) return;
	r.setAttribute("style", "text-align: right; padding: 0 38px 0 0");
	let o = t("composing-level", i())[0].parentNode;
	n(r, o);
}
function Ge() {
	ke(), Ue(), We(), De(), Re(), le();
}
function Ke() {
	r() && i() && Ge();
}
export { Ke as default };

//# sourceMappingURL=composing-c51a3Wjj.js.map