import { t as e } from "./getElementById-PlRCtyBA.js";
import "./posthog-C2Vh_0Hn.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./getValue-CCThXEzy.js";
import { t as n } from "./setValue-Cb0PYC7t.js";
import { t as r } from "./on-f-HmOL0n.js";
import { t as i } from "./calf-OM11NjAU.js";
import { t as a } from "./layout-Bapa39KM.js";
import "./sendEvent-bwvhd4A-.js";
import { t as o } from "./createDiv-Bb3O54wx.js";
import { t as s } from "./insertElement-DtUB7uKq.js";
import { t as c } from "./setInnerHtml-ClDKp0Zh.js";
import { t as l } from "./onclick-9iRduoOH.js";
import { t as u } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as d } from "./insertTextBeforeEnd-DHBcAPdo.js";
import { t as f } from "./createInput-B2lyiYPw.js";
import { n as p, t as m } from "./render-CY-0_eJy.js";
import { t as h } from "./testQuant-CSUjP8Rc.js";
//#region src/modules/profile/bio/bioWidgets.js
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
	return i.cmd === "guild" && (t = C(t, x)), t;
}
function T() {
	let e = "fshBioProfile";
	i.cmd === "guild" && (e = i.subcmd === "hall" ? "fshBioHall" : "fshBioGuild");
	let t = o({ className: `fshBioContainer ${e}` });
	s(t, o({
		className: "fshBioHeader fshBioInner",
		innerHTML: "Preview"
	})), v = o({ className: "fshBioPreview fshBioInner" }), s(t, v), s(_.parentNode, t);
}
function E() {
	i.cmd === "profile" && u(a(), "<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the \"Ask For Buffs\" button<br><br><blockquote><ul class=\"list\"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>");
}
function D() {
	let e = h(y.value);
	e && (g = e, n("bioEditLines", e), _.rows = g);
}
function O() {
	let e = o({ innerHTML: "<br>Display " });
	y = f({
		min: 1,
		max: 99,
		type: "number",
		value: g
	}), s(e, y), d(e, " Lines ");
	let t = f({
		className: "custombutton",
		value: "Update Rows To Show",
		type: "button"
	});
	l(t, D), s(e, t), s(a(), e);
}
function k() {
	let e = w(_.value);
	c(m(e) || e, v);
}
function A() {
	g = t("bioEditLines"), _ = e("textInputBox"), _ && (T(), E(), O(), _.rows = g, i.cmd === "profile" && l(_.parentNode, p), r(_, "keyup", k), k());
}
//#endregion
export { A as default };

//# sourceMappingURL=bioWidgets-CluHvdHR.js.map