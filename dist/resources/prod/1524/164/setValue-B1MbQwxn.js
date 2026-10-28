import "./constants-CenxlFMY.js";
import { t as e } from "./isBoolean-CDs7KbAY.js";
import { t } from "./isString-QeVlO9l8.js";
// src/modules/system/setValue.js
function n(e, t, n) {
	window.Modernizr?.localstorage && window.localStorage.setItem("GM_" + e, t + n);
}
var r = [
	[t, (e, t) => {
		n(e, "S]", t);
	}],
	[(e) => typeof e == "number", (e, t) => {
		t.toString().indexOf(".") < 0 && n(e, "N]", t);
	}],
	[e, (e, t) => {
		n(e, "B]", t);
	}]
];
function i(e, t) {
	let n = r.find((e) => e[0](t));
	n && n[1](e, t);
}
export { i as t };

//# sourceMappingURL=setValue-B1MbQwxn.js.map