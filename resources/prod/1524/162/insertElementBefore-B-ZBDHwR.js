//#region src/modules/common/insertElementBefore.js
function e(e) {
	return e instanceof Node && e.parentNode instanceof Node;
}
function t(t, n) {
	if (e(n)) return n.parentNode.insertBefore(t, n);
}
//#endregion
export { t };

//# sourceMappingURL=insertElementBefore-B-ZBDHwR.js.map