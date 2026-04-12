import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
import { n } from "./now-CA_NVGr7.js";
import { t as r } from "./system-DeHfCtq2.js";
import { E as i, Q as a, w as o } from "./constants-CIKidKvt.js";
import { t as ee } from "./getValue-j5JjE6f3.js";
import { t as s } from "./setValue-31jE_mRr.js";
import { t as te } from "./jsonParse-C99pLn1W.js";
import { t as c } from "./querySelector-8FH1hhUv.js";
import { t as l } from "./on-afIPYx-0.js";
import { t as u } from "./calf-DxCOTxVt.js";
import { t as d } from "./partial-CYzPXpZP.js";
import { t as f } from "./layout-6CPY-bfq.js";
import { t as ne } from "./once-CDCBWIEZ.js";
import { t as p } from "./sendEvent-DFQy5lFi.js";
import { t as m } from "./createDiv-CH3rNL4c.js";
import { t as h } from "./getElementsByClassName-Do7Dx9EW.js";
import { t as g } from "./getArrayByClassName-9tzft1UU.js";
import { t as _ } from "./insertElement-C_6uFPNr.js";
import { t as v } from "./setInnerHtml-Dh9y9Se-.js";
import { t as y } from "./_dataAccess-Cm9xXxBc.js";
import { t as b } from "./indexAjax-08iMHzpW.js";
import { t as x } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as re } from "./infoBox-CqlNbC9M.js";
import { t as ie } from "./contains-wh2Zi4Dq.js";
import { t as S } from "./onclick-8ZwMJyqI.js";
import { t as C } from "./querySelectorAll-Bwhb2XCF.js";
import { t as w } from "./querySelectorArray-Bdj4peIm.js";
import { t as ae } from "./regExpGroups-BIQtVEST.js";
import { t as T } from "./jQueryPresent-BeJtq5OB.js";
import { t as E } from "./insertElementBefore-Bwz7Hji8.js";
import { t as D } from "./insertElementAfter-DbTCI72b.js";
import { t as O } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as k } from "./setText-Ckr3aw9W.js";
import { n as A, t as j } from "./daComposing-CaO_Yq8R.js";
import { n as M, t as N } from "./pubsub-DUFBkBqq.js";
import { t as P } from "./addCommas-BgpPUQrd.js";
import { t as F } from "./createInput-dXzC1oHv.js";
import { t as I } from "./insertHtmlAfterBegin-B7TFwEJg.js";
import { t as L } from "./sum-C7p962tc.js";
import { t as R } from "./createTable-W8X_vhJ3.js";
import { n as z, t as B } from "./rnd-BPTDe-iv.js";
import { t as V } from "./insertHtmlAfterEnd-CedwWY1B.js";
//#region src/modules/composing/costing.js
var H = [], U = (e) => e.map(({ buffs: e, duration: t, id: n }) => ({
	cost: Math.max(e.map(({ level: e }) => e).reduce(L, 0) * t, 5e3),
	id: n
})), W = [
	[(e, t) => !e && !t, () => 0],
	[(e, t) => !e && t, (e, t, n) => n.remove()],
	[(e, t) => e && t, (e, t, n) => k(`Cost: ${P(t)}`, n)],
	[(e, t) => e && !t, (e, t) => O(e.parentNode, `<div class="fshBlue template-cost">Cost: ${P(t)}</div>`)]
];
function G(e) {
	let t = H.find(({ id: t }) => t === Number(e.value))?.cost, n = c(".template-cost", e.parentNode), r = W.find(([e]) => e(t, n));
	r && r[1](e, t, n);
}
function K(e) {
	/^composing-template-\d$/.test(e.target.id) && G(e.target);
}
async function q(e) {
	let t = await j();
	t?.s && (H = U(t.r.templates), e.forEach(G), l(f(), "change", K));
}
function J() {
	let e = w("select[id^=composing-template-]:not(#composing-template-multi)", f());
	e.length && q(e);
}
//#endregion
//#region src/modules/ajax/createPotionFromTemplate.js
async function oe(e) {
	return te(await b({
		cache: !1,
		dataType: "text",
		data: {
			cmd: "composing",
			subcmd: "createajax",
			template_id: e,
			fshrnd: B()
		}
	})) ?? { error: "Server Error" };
}
//#endregion
//#region src/modules/composing/backgroundCreate.js
function se() {
	return `url(${r}composing/${z(1, 11)}_${z(1, 51)}.png)`;
}
function ce(e, t) {
	v("", e.children[0]), e.children[0].classList.add("fshPot"), e.children[0].style.backgroundImage = se(), v(`Creating '<span class="fshBold">${t}</span>' Potion`, e.children[2]), v("", e.children[3]);
}
function le() {
	C("[id|=\"composing-template\"]:not(#composing-template-multi)").length === 0 && s(i, !1);
}
function ue(e) {
	let t = e.parentNode;
	t && (v("<div class=\"fshScs\">Success</div>", t), ce(t.previousElementSibling.previousElementSibling, e[e.selectedIndex].text), le());
}
function de(e, t) {
	let n = e.parentNode;
	!n || !t || (t.error ? v(`<div class="fshScs">${t.error}</div>`, n) : ue(e));
}
async function fe(e) {
	de(e, await oe(e.value));
}
function Y(e, t) {
	t.id = `proc-${t.id}`, v("", e), e.classList.add("fshSpinner", "fshSpinner12", "fshComposingSpinner"), fe(t), N("quickcreate");
}
//#endregion
//#region src/modules/composing/fastCompose/fastCompose.js
function X(e, t) {
	e.classList.add(`left-${t.toString()}`);
}
function pe(e) {
	X(e, C(".quickCreate .sendLink").length);
}
function me(e, t) {
	p("composing", "FastComposeButton");
	let n = C("[id|=\"composing-template\"]:not(#composing-template-multi)");
	if (!(n.length < e.value)) for (let r = 0; r < e.value; r += 1) n[r].value = t, Y(n[r].nextElementSibling.nextElementSibling, n[r]);
}
function he(e) {
	let t = e.target, { templateId: n } = t.dataset;
	n && me(t, n);
}
function ge(e, t) {
	return F({
		className: "awesome orange",
		dataset: { templateId: t },
		type: "button",
		value: e
	});
}
function _e(e, t, n, r) {
	return r === 0 && k(e[1], t.insertCell(-1)), _(t.insertCell(-1), ge((r + 1).toString(), e[0])), t;
}
function ve(e, t, n) {
	return e.forEach(d(_e, n, t.insertRow(-1))), t;
}
function ye(e, t, n) {
	let r = R({ id: "fshFastCompose" });
	return X(r, n), e.reduce(d(ve, t), r);
}
function be(e) {
	return [e.value, e.text];
}
function xe(e, t, n) {
	let r = ye(w("#composing-template-multi option").map(be), t, n);
	_(e, r), S(f(), he), M("quickcreate", d(pe, r));
}
function Se(e) {
	p("composing", "FastCompose"), O(e, "<br>");
	let t = g("composing-potion-time", document), n = t.filter(ie("ETA: n/a")).length;
	n > 0 ? xe(e, t, n) : O(e, "No open slots!");
}
function Ce() {
	let e = c("#pCC div.centered");
	O(e, "<span class=\"fsh-fast-compose\">[ <label for=\"fast-compose\"><span class=\"sendLink\">Fast Compose</span></label> ]</span>");
	let t = m({ className: "centered" });
	D(t, e);
	let n = F({
		id: "fast-compose",
		type: "checkbox"
	});
	D(n, e), ne(n, "change", d(Se, t));
}
//#endregion
//#region src/modules/composing/parseComposing.js
function we(e) {
	let { h: r, m: i, s: o } = ae(a, t(e));
	return !r || !i || !o ? 0 : (r * 3600 + i * 60 + Number(o)) * 1e3 + n();
}
function Z(e) {
	s(i, e);
}
function Te() {
	if (!u.enableComposingAlert) return;
	let e = g("composing-potion-time", document), t = Math.min(...e.map(we));
	t === 0 ? Z(!0) : (Z(!1), s(o, t));
}
//#endregion
//#region src/modules/app/composing/collect.js
function Ee(e) {
	return A({
		subcmd: "collect",
		potion_id: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daComposingCollect.js
async function De(e) {
	let t = await x({
		cmd: "composing",
		subcmd: "collect",
		potion_id: e
	});
	if (!t) return { s: !1 };
	let n = re(t);
	return n.includes("collected") ? { s: !0 } : {
		s: !1,
		e: { message: n }
	};
}
function Oe(e) {
	return y(Ee, De, e);
}
//#endregion
//#region src/modules/composing/quickCollect/quickCollect.js
function ke(e) {
	let t = e.getAttribute("onclick").split("&")[2].split("=")[1];
	I(e.parentNode, `[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${t}">Quick Collect</button></span> ]&nbsp;`);
}
var Ae = (e) => e.tagName === "BUTTON" && t(e) === "Quick Collect";
function je(e) {
	e.nextElementSibling.disabled = !0, e.nextElementSibling.nextElementSibling.disabled = !0, v("", e), e.classList.add("fshSpinner");
}
function Q(e, t, n) {
	v(n, e), e.classList.add(t);
}
function Me(e, t) {
	e.classList.remove("fshSpinner"), t.s ? Q(e, "fshGreen", "Collected") : Q(e, "fshRed", "Error");
}
async function Ne(e) {
	p("composing", "quickCollect");
	let t = e.parentNode, n = e.value;
	je(t), Me(t, await Oe(n));
}
function Pe(e) {
	Ae(e.target) && Ne(e.target);
}
function Fe() {
	w("input[value=\"Collect Potion\"]", f()).forEach(ke), S(f(), Pe);
}
//#endregion
//#region src/modules/composing/quickCreate.js
function Ie(e) {
	V(e, "<span class=\"quickCreate\">[<span class=\"sendLink\">Quick Create</span>]</span>");
}
var Le = (e) => e.tagName === "SPAN" && e.className === "quickCreate";
function $(e) {
	let t = e.previousElementSibling.previousElementSibling;
	t && t.value !== "none" && (Y(e, t), p("composing", "QuickCreate"));
}
function Re(e) {
	let t = e.target.parentNode;
	Le(t) && $(t);
}
function ze() {
	w("input[id^=create-]:not(#create-multi)", f()).forEach(Ie), S(f(), Re);
}
//#endregion
//#region src/modules/composing/composing.js
function Be() {
	if (!ee("moveComposingButtons")) return;
	let t = e("composing-error-dialog")?.previousElementSibling;
	if (!t) return;
	t.setAttribute("style", "text-align: right; padding: 0 38px 0 0");
	let n = h("composing-level", f())[0].parentNode;
	E(t, n);
}
function Ve() {
	Te(), ze(), Be(), Ce(), Fe(), J();
}
function He() {
	T() && f() && Ve();
}
//#endregion
export { He as default };

//# sourceMappingURL=composing-BX3FzABa.js.map