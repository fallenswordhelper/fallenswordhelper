//#region src/modules/common/isIterable.js
function e(e) {
	return typeof e?.[Symbol.iterator] == "function";
}
//#endregion
//#region src/modules/common/fromEntries.js
function t(t) {
	if (e(t)) return Object.fromEntries(t);
}
//#endregion
export { t };

//# sourceMappingURL=fromEntries-Bc4U4usg.js.map