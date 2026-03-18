import { t as e } from "./arrayFrom-LpiPmbFE.js";
//#region src/modules/common/uniq.js
function t(t, n) {
	if (n) {
		let e = /* @__PURE__ */ new Set();
		return t.filter((t) => e.has(t[n]) ? 0 : e.add(t[n]));
	}
	return e(new Set(t));
}
//#endregion
export { t };

//# sourceMappingURL=uniq-SYQgNgys.js.map