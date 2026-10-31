import { t as e } from "./getValue-sxwJaOE3.js";
import { t } from "./sendEvent-yx1DwCDA.js";
// src/modules/common/skipGamePrompts.js
var n = [];
function r() {
	let r = window.fsConfirm;
	window.fsConfirm = (i, a, o) => {
		let s = n.find(({ pref: t, prompts: n }) => e(t) && n.some((e) => e.test(i)));
		s ? (t("skipGamePrompts", s.pref), a?.()) : r(i, a, o);
	};
}
function i(e, t) {
	typeof window.fsConfirm == "function" && (n.length || r(), n.push({
		pref: e,
		prompts: t
	}));
}
export { i as t };

//# sourceMappingURL=skipGamePrompts-C2gSoGiV.js.map