//#region src/modules/common/splitTime.js
function e(e) {
	let t = e, n = Math.floor(t / 60);
	t %= 60;
	let r = Math.floor(n / 60);
	n %= 60;
	let i = Math.floor(r / 24);
	return r %= 24, [
		i,
		r,
		n,
		t
	];
}
//#endregion
export { e as t };

//# sourceMappingURL=splitTime-Cpk4foX_.js.map