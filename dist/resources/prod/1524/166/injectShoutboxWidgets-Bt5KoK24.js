import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./on-DfyX3AS4.js";
import { t as n } from "./partial-Bo20zBni.js";
import { t as r } from "./sendEvent-yx1DwCDA.js";
import { t as i } from "./setInnerHtml-f0MFRJnQ.js";
// src/modules/news/injectShoutboxWidgets.js
var a = 0, o = 0;
function s(e) {
	r("Shoutbox Preview", e === 150 ? "shoutbox" : "fsbox");
	let t = a.value, n = t.length;
	n > e && (t = t.substring(0, e), a.value = t, n = e), o ||= a.parentNode.parentNode.parentNode.parentNode.insertRow().insertCell(), i(`<table class="sbpTbl"><tbody><tr><td class="sbpHdr">Preview (${n}/${e} characters)</td></tr><tr><td class="sbpMsg"><span>${t}</span></td></tr></tbody></table>`, o);
}
function c(r) {
	a = e("textInputBox"), t(a, "keyup", n(s, r));
}
export { c as t };

//# sourceMappingURL=injectShoutboxWidgets-Bt5KoK24.js.map