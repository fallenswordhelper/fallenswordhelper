import { t as e } from "./getElementById-PlRCtyBA.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import { i as t } from "./constants-C54mky4_.js";
import { t as n } from "./dataObj-Ce-YIkKa.js";
import "./getValue-CCThXEzy.js";
import "./setValue-Cb0PYC7t.js";
import { t as r } from "./jsonParse-CHQNrrub.js";
import { t as i } from "./jsonStringify-TOBgUNGU.js";
import { t as a } from "./isArray-oWM-Qp9j.js";
import { t as o } from "./layout-Bapa39KM.js";
import { t as s } from "./sendEvent-bwvhd4A-.js";
import { t as c } from "./setInnerHtml-ClDKp0Zh.js";
import { t as l } from "./onclick-9iRduoOH.js";
import { t as u } from "./setValueJSON-D4-VI7oy.js";
import { t as d } from "./getValueJSON-CPHTmeGJ.js";
import { t as f } from "./isChecked-CjWeQC2m.js";
import { n as p, t as m } from "./selfIdIs-DwmsQacR.js";
//#region src/modules/notepad/lists/assets.js
var h = "<div>This screen allows you to set up some quick search templates for the Auction House. The Display on AH column indicates if the quick search will show on the short list on the Auction House main screen. A maximum of 36 items can show on this list (It will not show more than 36 even if you have more than 36 flagged). To edit items, either use the large text area below, or add a new entry and delete the old one. You can always reset the list to the default values.</div><div class=\"fshSmall\" id=\"fshAso\"></div>";
function g() {
	return {
		id: "fshAso",
		headers: [
			"Category",
			"Nickname",
			"Quick Search Text",
			"Display in AH?"
		],
		fields: [
			"category",
			"nickname",
			"searchname",
			"displayOnAH"
		],
		tags: [
			"text",
			"text",
			"text",
			"checkbox"
		],
		url: [
			"",
			"",
			`${t}@replaceme@`,
			""
		],
		currentItems: d("quickSearchList") || [],
		gmname: "quickSearchList",
		categoryField: "category"
	};
}
//#endregion
//#region src/modules/notepad/lists/makePageHeader.js
function _(e, t, n, r) {
	let i = "";
	t !== "" && (i = `&nbsp;(${t})`);
	let a = "";
	return n && (a = `[<span class="fshLink" id="${n}">${r}</span>]`), `<table width=100%><tbody><tr class="fshHeader"><td width="90%"><b>&nbsp;${e}</b>${i}<td width="10%" class="fshBtnBox">${a}</td></tr><tbody></table>`;
}
//#endregion
//#region src/modules/notepad/lists/injectAuctionSearch.js
var v = 0;
function y(e) {
	return v.url && v.url[e] !== "";
}
function b(e, t) {
	return v.tags[e] === "checkbox" ? `<input type="checkbox"${f(t)} disabled>` : y(e) ? `<a href="${v.url[e].replace("@replaceme@", t)}">${t}</a>` : t;
}
function x(e) {
	let t = "";
	for (let n = 0; n < v.fields.length; n += 1) t += "<td class=\"fshCenter\">", v.fields[n] !== v.categoryField && (t += `${b(n, e[v.fields[n]])}`), t += "</td>";
	return t;
}
function S(e, t) {
	return `${e}<th>${t}</th>`;
}
function C(e, t, n) {
	return v.categoryField && (t === 0 || n[t - 1][v.categoryField] !== e[v.categoryField]);
}
function w(e, t, n, r) {
	let i = "<tr>";
	return C(t, n, r) && (i += `<td><span class="fshQs">${t[v.categoryField]}</span></td><td></td><td></td><td></td><td></td></tr><tr>`), i += x(t), i += `<td><span class="HelperTextLink" data-itemId="${n}" id="fshDel${n}">[Del]</span></td></tr>`, e + i;
}
function T() {
	let e = "<tr>";
	for (let t = 0; t < v.tags.length; t += 1) e += `<td align=center><input type="${v.tags[t]}" class="custominput" id="fshIn${v.fields[t]}"></td>`;
	return e;
}
var E = "<table cellspacing=\"2\" cellpadding=\"2\" class=\"fshLists\" width=\"100%\"><tr class=\"fshOr\">", D = "<td><span class=\"HelperTextLink\" id=\"fshAdd\">[Add]</span></td></tr></table><table width=\"100%\"><tr><td class=\"fshCenter\"><textarea id=\"fshEd\" class=\"fshEd\">", O = "</textarea></td></tr><tr><td class=\"fshCenter\"><input id=\"fshSave\" type=\"button\" value=\"Save\" class=\"custombutton\">&nbsp;<input id=\"fshReset\" type=\"button\" value=\"Reset\" class=\"custombutton\"></td></tr></tbody></table>";
function k() {
	let t = `${E}${v.headers.reduce(S, "")}<th>Action</th></tr>${v.currentItems.reduce(w, "")}${T()}${D}${i(v.currentItems)}${O}`;
	e(v.id) && (c(t, e(v.id)), u(v.gmname, v.currentItems));
}
function A(e) {
	s("injectAuctionSearch", "deleteQuickItem");
	let t = e.getAttribute("data-itemId");
	v.currentItems.splice(t, 1), k();
}
var j = (t) => e(`fshIn${v.fields[t]}`);
function M() {
	let e = {};
	for (let t = 0; t < v.fields.length; t += 1) e[v.fields[t]] = v.tags[t] === "checkbox" ? j(t).checked : j(t).value;
	return e;
}
function N() {
	s("injectAuctionSearch", "addQuickItem");
	let t = v.fields.length === 0 ? e("fshIn0").value : M();
	v.currentItems.push(t), k();
}
function P() {
	s("injectAuctionSearch", "saveRawEditor");
	let t = r(e("fshEd").value);
	a(t) && (v.currentItems = t, k());
}
function F() {
	s("injectAuctionSearch", "resetRawEditor"), v.id === "fshAso" ? v.currentItems = r(n.quickSearchList) : v.currentItems = [], k();
}
function I() {
	return [
		[m("fshReset"), F],
		[m("fshSave"), P],
		[m("fshAdd"), N],
		[(e) => e.id.startsWith("fshDel"), A]
	];
}
function L(e) {
	l(e, p(I()));
}
function R(e) {
	let t = e || o();
	c(_("Trade Hub Quick Search", "", "", "") + h, t), v = g(), k(), L(t);
}
//#endregion
export { R as default };

//# sourceMappingURL=injectAuctionSearch-Cd1y4LdC.js.map