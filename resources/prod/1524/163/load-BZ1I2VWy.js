import { t as e } from "./getElementById-DgC-_E5u.js";
import "./constants-CIKidKvt.js";
import { t } from "./getValue-j5JjE6f3.js";
import { t as n } from "./setValue-31jE_mRr.js";
import { t as r } from "./isObject-DwzOQgsf.js";
import { t as i } from "./jsonParse-C99pLn1W.js";
import { t as a } from "./jsonStringify-bep_7uul.js";
import { t as o } from "./partial-CYzPXpZP.js";
import { t as s } from "./layout-6CPY-bfq.js";
import { t as c } from "./setInnerHtml-Dh9y9Se-.js";
import { t as l } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as u } from "./dialogMsg-C_sEdEC2.js";
import { t as d } from "./keys-CKke0lta.js";
//#region src/modules/system/listKeys.js
function f() {
	let e = [];
	for (let t = 0, n = window.localStorage.length; t < n; t++) {
		let n = window.localStorage.key(t);
		n.startsWith("GM_") && e.push(n.replace("GM_", ""));
	}
	return e;
}
//#endregion
//#region src/modules/settings/load.js
function p(e, t) {
	c(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${a(t)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`, e);
}
function m(e, t) {
	n(t, e[t]);
}
function h() {
	let t = i(e("HelperfshSettings").value);
	if (r(t)) {
		let e = t;
		d(e).forEach(o(m, e)), u("Settings loaded successfully!");
	}
}
function g(e, n) {
	return e[n] = t(n), e;
}
function _() {
	if (l()) return;
	let e = f().reduce(g, {});
	p(s(), e), $("#HelperLoadSettings").on("click", h);
}
//#endregion
export { _ as default };

//# sourceMappingURL=load-BZ1I2VWy.js.map