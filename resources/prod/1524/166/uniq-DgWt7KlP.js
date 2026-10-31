import { t as e } from "./arrayFrom-CKk6qt2j.js";
// src/modules/common/uniq.js
function t(t, n) {
	if (n) {
		let e = /* @__PURE__ */ new Set();
		return t.filter((t) => e.has(t[n]) ? 0 : e.add(t[n]));
	}
	return e(new Set(t));
}
export { t };

//# sourceMappingURL=uniq-DgWt7KlP.js.map