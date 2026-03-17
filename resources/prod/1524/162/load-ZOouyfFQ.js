import { t as e } from "./getElementById-PlRCtyBA.js";
import "./system-De1jBRGa.js";
import "./constants-C54mky4_.js";
import { t } from "./getValue-CCThXEzy.js";
import { t as n } from "./setValue-Cb0PYC7t.js";
import { t as r } from "./isObject-gppvJNXN.js";
import { t as i } from "./jsonParse-CHQNrrub.js";
import { t as a } from "./jsonStringify-TOBgUNGU.js";
import { t as o } from "./partial-goh6HOls.js";
import { t as s } from "./layout-Bapa39KM.js";
import { t as c } from "./setInnerHtml-ClDKp0Zh.js";
import { t as l } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as u } from "./dialogMsg--5Wkc8-V.js";
import { t as d } from "./keys-BS4RzZuN.js";
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

//# sourceMappingURL=load-ZOouyfFQ.js.map