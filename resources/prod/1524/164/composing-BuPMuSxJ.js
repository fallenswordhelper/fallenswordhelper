import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./regExpFirstCapture-D_QeHFEY.js";
import { n as r } from "./now-B3pCBQja.js";
import { t as i } from "./system-CNA0YLOa.js";
import { E as a, Q as ee, w as o } from "./constants-CenxlFMY.js";
import { t as te } from "./getValue-Aap0zlcO.js";
import { t as s } from "./setValue-B1MbQwxn.js";
import { t as c } from "./jsonParse-CTM1cd4F.js";
import { t as l } from "./querySelector-C6ReNysW.js";
import { t as u } from "./on-DfyX3AS4.js";
import { t as d } from "./calf-SqS2SeU4.js";
import { t as f } from "./partial-Bo20zBni.js";
import { t as p } from "./layout-B2Q1UoM2.js";
import { t as ne } from "./once-D8BIpjVX.js";
import { t as m } from "./sendEvent-DkxfZozg.js";
import { t as h } from "./createDiv-XU2XBEIv.js";
import { t as g } from "./getElementsByClassName-DQB1YOHi.js";
import { t as _ } from "./getArrayByClassName-RPqCUmVz.js";
import { t as v } from "./insertElement-6ZBKaryO.js";
import { t as y } from "./setInnerHtml-f0MFRJnQ.js";
import { t as b } from "./_dataAccess-BLVLQyDJ.js";
import { t as x } from "./indexAjax-CBSrrhwd.js";
import { t as re } from "./indexAjaxDoc-WR96kHce.js";
import { t as ie } from "./infoBox-QJxiDGQb.js";
import { t as ae } from "./contains-CziyX11O.js";
import { t as S } from "./onclick-nv-Fl1th.js";
import { t as C } from "./querySelectorAll-D_a7rcw0.js";
import { t as w } from "./querySelectorArray-C70U47NF.js";
import { t as T } from "./regExpGroups-DJF-Cl1w.js";
import { t as E } from "./jQueryPresent-DUWNBls9.js";
import { t as D } from "./insertElementBefore-CaihVZse.js";
import { t as O } from "./insertElementAfter-Bc9YFj76.js";
import { t as k } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as A } from "./setText-CVjyFkRt.js";
import { n as j, t as M } from "./daComposing-oxixSy30.js";
import { n as N, t as P } from "./pubsub-DiSGm5KM.js";
import { t as F } from "./addCommas-Bv8TEVoY.js";
import { t as I } from "./createInput-DPgk9mYC.js";
import { t as L } from "./insertHtmlAfterBegin-NUXc07IC.js";
import { t as R } from "./sum-D2GDuxYE.js";
import { t as z } from "./createTable-BfqGIybT.js";
import { n as B, t as V } from "./rnd-BtjDoNHs.js";
import { t as H } from "./insertHtmlAfterEnd-DMHOI0WH.js";
// src/modules/composing/costing.js
var U = [], W = (e) => e.map(({ buffs: e, duration: t, id: n }) => ({
	cost: Math.max(e.map(({ level: e }) => e).reduce(R, 0) * t, 5e3),
	id: n
})), G = [
	[(e, t) => !e && !t, () => 0],
	[(e, t) => !e && t, (e, t, n) => n.remove()],
	[(e, t) => e && t, (e, t, n) => A(`Cost: ${F(t)}`, n)],
	[(e, t) => e && !t, (e, t) => k(e.parentNode, `<div class="fshBlue template-cost">Cost: ${F(t)}</div>`)]
];
function K(e) {
	let t = U.find(({ id: t }) => t === Number(e.value))?.cost, n = l(".template-cost", e.parentNode), r = G.find(([e]) => e(t, n));
	r && r[1](e, t, n);
}
function q(e) {
	/^composing-template-\d$/.test(e.target.id) && K(e.target);
}
async function J(e) {
	let t = await M();
	t?.s && (U = W(t.r.templates), e.forEach(K), u(p(), "change", q));
}
function oe() {
	let e = w("select[id^=composing-template-]:not(#composing-template-multi)", p());
	e.length && J(e);
}
// src/modules/ajax/createPotionFromTemplate.js
async function se(e) {
	let t = await x({
		cache: !1,
		dataType: "text",
		data: {
			cmd: "composing",
			subcmd: "createajax",
			template_id: e,
			fshrnd: V()
		}
	});
	return c(t) ?? { error: "Server Error" };
}
// src/modules/composing/backgroundCreate.js
function ce() {
	return `url(${i}composing/${B(1, 11)}_${B(1, 51)}.png)`;
}
function le(e, t) {
	y("", e.children[0]), e.children[0].classList.add("fshPot"), e.children[0].style.backgroundImage = ce(), y(`Creating '<span class="fshBold">${t}</span>' Potion`, e.children[2]), y("", e.children[3]);
}
function ue() {
	C("[id|=\"composing-template\"]:not(#composing-template-multi)").length === 0 && s(a, !1);
}
function de(e) {
	let t = e.parentNode;
	t && (y("<div class=\"fshScs\">Success</div>", t), le(t.previousElementSibling.previousElementSibling, e[e.selectedIndex].text), ue());
}
function fe(e, t) {
	let n = e.parentNode;
	n && t && (t.error ? y(`<div class="fshScs">${t.error}</div>`, n) : de(e));
}
async function pe(e) {
	fe(e, await se(e.value));
}
function Y(e, t) {
	t.id = `proc-${t.id}`, y("", e), e.classList.add("fshSpinner", "fshSpinner12", "fshComposingSpinner"), pe(t), P("quickcreate");
}
// src/modules/composing/fastCompose/fastCompose.js
function X(e, t) {
	e.classList.add(`left-${t.toString()}`);
}
function me(e) {
	X(e, C(".quickCreate .sendLink").length);
}
function he(e, t) {
	m("composing", "FastComposeButton");
	let n = C("[id|=\"composing-template\"]:not(#composing-template-multi)");
	if (!(n.length < e.value)) for (let r = 0; r < e.value; r += 1) n[r].value = t, Y(n[r].nextElementSibling.nextElementSibling, n[r]);
}
function ge(e) {
	let t = e.target, { templateId: n } = t.dataset;
	n && he(t, n);
}
function _e(e, t) {
	return I({
		className: "awesome orange",
		dataset: { templateId: t },
		type: "button",
		value: e
	});
}
function ve(e, t, n, r) {
	return r === 0 && A(e[1], t.insertCell(-1)), v(t.insertCell(-1), _e((r + 1).toString(), e[0])), t;
}
function ye(e, t, n) {
	return e.forEach(f(ve, n, t.insertRow(-1))), t;
}
function be(e, t, n) {
	let r = z({ id: "fshFastCompose" });
	return X(r, n), e.reduce(f(ye, t), r);
}
function xe(e) {
	return [e.value, e.text];
}
function Se(e, t, n) {
	let r = be(w("#composing-template-multi option").map(xe), t, n);
	v(e, r), S(p(), ge), N("quickcreate", f(me, r));
}
function Ce(e) {
	m("composing", "FastCompose"), k(e, "<br>");
	let t = _("composing-potion-time", document), n = t.filter(ae("ETA: n/a")).length;
	n > 0 ? Se(e, t, n) : k(e, "No open slots!");
}
function we() {
	let e = l("#pCC div.centered");
	k(e, "<span class=\"fsh-fast-compose\">[ <label for=\"fast-compose\"><span class=\"sendLink\">Fast Compose</span></label> ]</span>");
	let t = h({ className: "centered" });
	O(t, e);
	let n = I({
		id: "fast-compose",
		type: "checkbox"
	});
	O(n, e), ne(n, "change", f(Ce, t));
}
// src/modules/composing/parseComposing.js
function Te(e) {
	let { h: n, m: i, s: a } = T(ee, t(e));
	return !n || !i || !a ? 0 : (n * 3600 + i * 60 + Number(a)) * 1e3 + r();
}
function Z(e) {
	s(a, e);
}
function Ee() {
	if (!d.enableComposingAlert) return;
	let e = _("composing-potion-time", document), t = Math.min(...e.map(Te));
	t === 0 ? Z(!0) : (Z(!1), s(o, t));
}
// src/modules/app/composing/collect.js
function De(e) {
	return j({
		subcmd: "collect",
		potion_id: e
	});
}
// src/modules/_dataAccess/daComposingCollect.js
async function Oe(e) {
	let t = await re({
		cmd: "composing",
		subcmd: "collect",
		potion_id: e
	});
	if (!t) return { s: !1 };
	let n = ie(t);
	return n.includes("collected") ? { s: !0 } : {
		s: !1,
		e: { message: n }
	};
}
function ke(e) {
	return b(De, Oe, e);
}
// src/modules/composing/quickCollect/quickCollect.js
function Ae(e) {
	let t = n(/potion_id=(?<id>\d+)/, e.getAttribute("onclick"));
	L(e.parentNode, `[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${t}">Quick Collect</button></span> ]&nbsp;`);
}
var je = (e) => e.tagName === "BUTTON" && t(e) === "Quick Collect";
function Me(e) {
	e.nextElementSibling.disabled = !0, e.nextElementSibling.nextElementSibling.disabled = !0, y("", e), e.classList.add("fshSpinner");
}
function Q(e, t, n) {
	y(n, e), e.classList.add(t);
}
function Ne(e, t) {
	e.classList.remove("fshSpinner"), t.s ? Q(e, "fshGreen", "Collected") : Q(e, "fshRed", "Error");
}
async function Pe(e) {
	m("composing", "quickCollect");
	let t = e.parentNode, n = e.value;
	Me(t), Ne(t, await ke(n));
}
function $(e) {
	je(e.target) && Pe(e.target);
}
function Fe() {
	w("input[value=\"Collect Potion\"]", p()).forEach(Ae), S(p(), $);
}
// src/modules/composing/quickCreate.js
function Ie(e) {
	H(e, "<span class=\"quickCreate\">[<span class=\"sendLink\">Quick Create</span>]</span>");
}
var Le = (e) => e.tagName === "SPAN" && e.className === "quickCreate";
function Re(e) {
	let t = e.previousElementSibling.previousElementSibling;
	t && t.value !== "none" && (Y(e, t), m("composing", "QuickCreate"));
}
function ze(e) {
	let t = e.target.parentNode;
	Le(t) && Re(t);
}
function Be() {
	w("input[id^=create-]:not(#create-multi)", p()).forEach(Ie), S(p(), ze);
}
// src/modules/composing/composing.js
function Ve() {
	if (!te("moveComposingButtons")) return;
	let t = e("composing-error-dialog")?.previousElementSibling;
	if (!t) return;
	t.setAttribute("style", "text-align: right; padding: 0 38px 0 0");
	let n = g("composing-level", p())[0].parentNode;
	D(t, n);
}
function He() {
	Ee(), Be(), Ve(), we(), Fe(), oe();
}
function Ue() {
	E() && p() && He();
}
export { Ue as default };

//# sourceMappingURL=composing-BuPMuSxJ.js.map