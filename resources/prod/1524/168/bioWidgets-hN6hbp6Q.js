import { t as e } from "./createDiv-B84RqGfo.js";
import { t } from "./createInput-x6h3QT7P.js";
import { t as n } from "./getElementById-C08-3H-C.js";
import { t as r } from "./insertElement-6ZBKaryO.js";
import { t as i } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as a } from "./insertTextBeforeEnd-RtQnGU19.js";
import { t as o } from "./on-DfyX3AS4.js";
import { t as s } from "./onclick-nv-Fl1th.js";
import { t as c } from "./setInnerHtml-f0MFRJnQ.js";
import { t as l } from "./calf-SqS2SeU4.js";
import { t as u } from "./layout-B2Q1UoM2.js";
import { t as d } from "./getValue-DMlY7SSn.js";
import { t as f } from "./setValue-D-C74rTg.js";
import { t as p } from "./testQuant-DeV_tnrW.js";
import { n as m, t as h } from "./render-BQvu4kH4.js";
// src/modules/profile/bio/bioWidgets.js
var g = 0, _ = 0, v = 0, y = 0, b = [
	[/</g, "&lt"],
	[/>/g, "&gt"],
	[/\n/g, "<br>"],
	[/\[(?<type>\/?[biu])\]/g, "<$1>"],
	[/\\\\/g, "&#92"],
	[/\\/g, ""]
], x = [
	[/\[(?<type>\/?block)\]/g, "<$1quote>"],
	[/\[list\]/g, "<ul class=\"list\">"],
	[/\[\/list\]/g, "</ul>"],
	[/\[\*\](?<line>[^[]*)/g, "<li>$1</li>"]
];
function S(e, t) {
	return e.replace(t[0], t[1]);
}
function C(e, t) {
	return t.reduce(S, e);
}
function w(e) {
	let t = C(e, b);
	return l.cmd === "guild" && (t = C(t, x)), t;
}
function T() {
	let t = "fshBioProfile";
	l.cmd === "guild" && (t = l.subcmd === "hall" ? "fshBioHall" : "fshBioGuild");
	let n = e({ className: `fshBioContainer ${t}` }), i = e({
		className: "fshBioHeader fshBioInner",
		innerHTML: "Preview"
	});
	r(n, i), v = e({ className: "fshBioPreview fshBioInner" }), r(n, v), r(_.parentNode, n);
}
function E() {
	l.cmd === "profile" && i(u(), "<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the \"Ask For Buffs\" button<br><br><blockquote><ul class=\"list\"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>");
}
function D() {
	let e = p(y.value);
	e && (g = e, f("bioEditLines", e), _.rows = g);
}
function O() {
	let n = e({ innerHTML: "<br>Display " });
	y = t({
		min: 1,
		max: 99,
		type: "number",
		value: g
	}), r(n, y), a(n, " Lines ");
	let i = t({
		className: "custombutton",
		value: "Update Rows To Show",
		type: "button"
	});
	s(i, D), r(n, i), r(u(), n);
}
function k() {
	let e = w(_.value), t = h(e);
	c(t || e, v);
}
function A() {
	g = d("bioEditLines"), _ = n("textInputBox"), _ && (T(), E(), O(), _.rows = g, l.cmd === "profile" && s(_.parentNode, m), o(_, "keyup", k), k());
}
export { A as default };

//# sourceMappingURL=bioWidgets-hN6hbp6Q.js.map