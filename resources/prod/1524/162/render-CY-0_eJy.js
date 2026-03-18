import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import { t as n } from "./playerName-BXAa_cHJ.js";
import { t as r } from "./regExpExec-6_Ntf_JM.js";
import { t as i } from "./getValue-CCThXEzy.js";
import { t as a } from "./calf-OM11NjAU.js";
import { t as o } from "./getElementsByTagName-BUN1mNPF.js";
import { t as s } from "./trim-BIFcpoD2.js";
import { t as c } from "./partial-goh6HOls.js";
import { t as l } from "./layout-Bapa39KM.js";
import { t as u } from "./sendEvent-bwvhd4A-.js";
import { t as d } from "./entries-BPLrbAVw.js";
import { t as f } from "./setInnerHtml-ClDKp0Zh.js";
import { t as p } from "./toLowerCase-uMYD5EVv.js";
import { t as m } from "./hasClass-OkTHxcQE.js";
import { t as h } from "./roundToString-taG4tziV.js";
import { t as g } from "./keys-BS4RzZuN.js";
//#region src/modules/profile/bio/bioSendEvent.js
function _(e) {
	a.subcmd === "-" && u("profile", e);
}
//#endregion
//#region src/modules/profile/bio/formatCost.js
var v = [
	[(e) => e.fsp > 0, (e) => `${h(e.fsp, 2)} FSP`],
	[(e) => e.fsp > 0 && e.k > 0, () => " and "],
	[(e) => e.k > 0, (e) => `${e.k} k`],
	[(e) => e.stam > 0 && (e.fsp > 0 || e.k > 0), () => " and "],
	[(e) => e.stam > 0, (e) => `${e.stam} Stam(${h(e.stam / 25, 1)}fsp)`],
	[(e) => e.unknown > 0, (e) => ` (${e.unknown} buff(s) with unknown cost)`]
];
function y(e, t) {
	return t[0](e) ? t[1](e) : "";
}
function b(e) {
	return v.map(c(y, e)).join("");
}
//#endregion
//#region src/modules/profile/bio/getBuffsToBuy.js
function x() {
	let e = o("h1", l());
	return e = e.length === 0 ? n() : t(e[0]), e;
}
var S = [
	[(e) => !e.includes("{buffs}"), (e, t) => `${e} ${t}`],
	[(e) => !e.includes("{cost}"), (e, t) => e.replace(/{buffs}/g, `\`~${t}~\``)],
	[() => !0, (e, t, n) => e.replace(/{buffs}/g, `\`~${t}~\``).replace(/{cost}/g, n.buffCostTotalText)]
];
function C(e, t) {
	return t[0](e);
}
function w(e, t) {
	return S.find(c(C, e))[1](e, g(t.buffs).join(", "), t);
}
function T(e) {
	_("formatBuffsToBuy");
	let t = x(), n = s(i("buyBuffsGreeting"));
	n = n.replace(/{playername}/g, t), n = w(n, e), window.openQuickMsgDialog(t, n, "");
}
function E(e) {
	e.count > 0 && T(e);
}
//#endregion
//#region src/modules/profile/bio/getPrice.js
var D = /[^a-zA-Z0-9.,+\- ]/g, O = 0, k = [
	"(?<k>[+-]?[.\\d]{1,10} {0,10}k)",
	"(?<fsp>[+-]?[.\\d]{1,10} {0,10}fsp)",
	"(?<stam>[+-]?[.\\d]{1,10} {0,10}stam)"
];
function A() {
	return O ||= new RegExp(k.join("|")), O;
}
function j(e) {
	return e && e.nodeName !== "BR";
}
function M(e) {
	return r(A(), p(e.replace(D, "")));
}
function N(e) {
	let n = "", r = e;
	for (; j(r);) {
		let e = t(r);
		r = r.nextSibling, n += e;
	}
	return M(n);
}
function P(e) {
	let n = "", r = e;
	for (; j(r);) {
		let e = t(r);
		r = r.previousSibling, n = e + n;
	}
	return M(n);
}
function F(e) {
	let t = N(e);
	return t ||= P(e), t;
}
//#endregion
//#region src/modules/profile/bio/bioEvtHdl.js
var I = {
	count: 0,
	buffs: {}
};
function L(e) {
	return `<tr><td>${e[0]}</td><td>: ${e[1][0]}${e[1][1]}</td></tr>`;
}
function R(e, t) {
	return e[t[1][1]] += t[1][0], e;
}
function z() {
	let t = d(I.buffs), n = b(t.reduce(R, {
		k: 0,
		fsp: 0,
		stam: 0,
		unknown: 0
	}));
	f(`<span class="tip-static" data-tipped="This is an estimated cost based on how the script finds the cost associated with buffs from viewing bio. It can be incorrect, please use with discretion.<br><hr><table border=0>${t.map(L).join("")}</table><b>Total: ${n}</b>">Estimated Cost: <b>${n}</b></span>`, e("buffCost")), I.buffCostTotalText = n;
}
function B() {
	I.count > 0 ? z() : (f("&nbsp;", e("buffCost")), I.buffCostTotalText = "");
}
function V(e) {
	return e[0].includes("k") ? "k" : e[0].includes("f") ? "fsp" : "stam";
}
function H(e) {
	let n = F(e), i = "unknown", a = "1";
	n && (i = V(n), [a] = r(/[+-]?[.\d]+/, n[0])), I.buffs[t(e)] = [parseFloat(a), i], I.count += 1;
}
function U(e) {
	_("toggleBuffsToBuy");
	let n = m("fshBlue", e);
	e.classList.toggle("fshBlue"), e.classList.toggle("fshYellow");
	let r = t(e);
	n ? H(e) : (--I.count, delete I.buffs[r]), B();
}
function W(e) {
	return !e.tagName || e.tagName === "SPAN" ? e : W(e.parentNode);
}
function G(e) {
	return e.classList && m("buffLink", e);
}
function K(e) {
	if (e.target.id === "fshSendBuffMsg") {
		E(I);
		return;
	}
	let t = W(e.target);
	G(t) && U(t);
}
//#endregion
//#region src/modules/profile/bio/render.js
function q(e, t, n) {
	return e.replace(t, `<span id="fshBuff${n}" class="buffLink fshBlue">${t.replace(/(`~)|(~`)|(\{b\})|(\{\/b\})/g, "")}</span>`);
}
function J(e) {
	let t = e.replace(/\{b\}/g, "`~").replace(/\{\/b\}/g, "~`"), n = t.match(/`~([^~]|~(?!`))*~`/g);
	if (n) return t = n.reduce(q, t), t.indexOf("[cmd]") < 0 && (t += "[cmd]"), t = t.replace("[cmd]", "<br><input id=\"fshSendBuffMsg\" class=\"custombutton\" type=\"button\" value=\"Ask For Buffs\"><br><span id=\"buffCost\" class=\"fshRed\">&nbsp;</span>"), t;
}
//#endregion
export { K as n, J as t };

//# sourceMappingURL=render-CY-0_eJy.js.map