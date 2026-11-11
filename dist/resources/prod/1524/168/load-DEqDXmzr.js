import { t as e } from "./dialogMsg-DONl7y_f.js";
import { t } from "./getElementById-C08-3H-C.js";
import { t as n } from "./isObject-BL3L1f85.js";
import { t as r } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as i } from "./jsonParse-CTM1cd4F.js";
import { t as a } from "./jsonStringify-DbCVtu3B.js";
import { t as o } from "./keys-Ch_1-2o8.js";
import { t as s } from "./partial-Bo20zBni.js";
import { t as c } from "./setInnerHtml-f0MFRJnQ.js";
import { t as l } from "./layout-B2Q1UoM2.js";
import { t as u } from "./getValue-DMlY7SSn.js";
import "./constants-CenxlFMY.js";
import { t as d } from "./setValue-D-C74rTg.js";
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
	d(t, e[t]);
}
function h() {
	let r = i(t("HelperfshSettings").value);
	if (n(r)) {
		let t = r;
		o(t).forEach(s(m, t)), e("Settings loaded successfully!");
	}
}
function g(e, t) {
	return e[t] = u(t), e;
}
function _() {
	if (r()) return;
	let e = f().reduce(g, {});
	p(l(), e), $("#HelperLoadSettings").on("click", h);
}
export { _ as default };

//# sourceMappingURL=load-DEqDXmzr.js.map