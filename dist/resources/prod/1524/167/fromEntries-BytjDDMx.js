// src/modules/common/isIterable.js
function e(e) {
	return typeof e?.[Symbol.iterator] == "function";
}
// src/modules/common/fromEntries.js
function t(t) {
	if (e(t)) return Object.fromEntries(t);
}
export { t };

//# sourceMappingURL=fromEntries-BytjDDMx.js.map