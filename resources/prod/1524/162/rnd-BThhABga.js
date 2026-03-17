//#region src/modules/system/getRandomInt.js
function e(e, t) {
	let n = Math.ceil(e), r = Math.floor(t);
	return Math.floor(Math.random() * (r - n)) + n;
}
//#endregion
//#region src/modules/system/rnd.js
function t() {
	return e(1e9, 9999999998);
}
//#endregion
export { e as n, t };

//# sourceMappingURL=rnd-BThhABga.js.map