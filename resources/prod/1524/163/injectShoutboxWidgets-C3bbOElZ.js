import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./on-afIPYx-0.js";
import { t as n } from "./partial-CYzPXpZP.js";
import { t as r } from "./sendEvent-DFQy5lFi.js";
import { t as i } from "./setInnerHtml-Dh9y9Se-.js";
//#region src/modules/news/injectShoutboxWidgets.js
var a = 0, o = 0;
function s(e) {
	r("Shoutbox Preview", e === 150 ? "shoutbox" : "fsbox");
	let t = a.value, n = t.length;
	n > e && (t = t.substring(0, e), a.value = t, n = e), o ||= a.parentNode.parentNode.parentNode.parentNode.insertRow().insertCell(), i(`<table class="sbpTbl"><tbody><tr><td class="sbpHdr">Preview (${n}/${e} characters)</td></tr><tr><td class="sbpMsg"><span>${t}</span></td></tr></tbody></table>`, o);
}
function c(r) {
	a = e("textInputBox"), t(a, "keyup", n(s, r));
}
//#endregion
export { c as t };

//# sourceMappingURL=injectShoutboxWidgets-C3bbOElZ.js.map