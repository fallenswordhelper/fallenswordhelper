import { t as e } from "./getElementById-C08-3H-C.js";
import "./constants-CenxlFMY.js";
import { t } from "./getValue-Aap0zlcO.js";
import { t as n } from "./setValue-B2O8DHLF.js";
import { t as r } from "./isObject-BL3L1f85.js";
import { t as i } from "./jsonParse-CTM1cd4F.js";
import { t as a } from "./jsonStringify-DbCVtu3B.js";
import { t as o } from "./partial-Bo20zBni.js";
import { t as s } from "./layout-B2Q1UoM2.js";
import { t as c } from "./setInnerHtml-f0MFRJnQ.js";
import { t as l } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as u } from "./dialogMsg-DONl7y_f.js";
import { t as d } from "./keys-Ch_1-2o8.js";
// src/modules/system/listKeys.js
function f() {
	let e = [];
	for (let t = 0, n = window.localStorage.length; t < n; t++) {
		let n = window.localStorage.key(t);
		n.startsWith("GM_") && e.push(n.replace("GM_", ""));
	}
	return e;
}
// src/modules/settings/load.js
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
export { _ as default };

//# sourceMappingURL=load-DNS73Aqn.js.map