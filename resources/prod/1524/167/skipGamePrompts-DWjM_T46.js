import { t as e } from "./sendEvent-Co2_qySS.js";
import { t } from "./getValue-vrUqpo0a.js";
// src/modules/common/skipGamePrompts.js
var n = [];
function r() {
	let r = window.fsConfirm;
	window.fsConfirm = (i, a, o) => {
		let s = n.find(({ pref: e, prompts: n }) => t(e) && n.some((e) => e.test(i)));
		s ? (e("skipGamePrompts", s.pref), a?.()) : r(i, a, o);
	};
}
function i(e, t) {
	typeof window.fsConfirm == "function" && (n.length || r(), n.push({
		pref: e,
		prompts: t
	}));
}
export { i as t };

//# sourceMappingURL=skipGamePrompts-DWjM_T46.js.map