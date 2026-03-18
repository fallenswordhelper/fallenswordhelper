import { t as e } from "./isBoolean-ftrvSwoc.js";
import { t } from "./isString-pOrxe2i7.js";
//#region src/modules/system/setValue.js
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
//#endregion
export { i as t };

//# sourceMappingURL=setValue-Cb0PYC7t.js.map