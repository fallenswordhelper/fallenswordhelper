//#region src/modules/chrome/fshOpen.js
function e(e, t, n) {
	return Math.floor(Math.max(e - t, 0) / 2 + n);
}
function t(t, n, r, i, a) {
	let o = i;
	i === 500 && (o = 1e3);
	let s = e(window.screen.availHeight, o, window.screenY), c = e(document.documentElement.clientWidth, r, window.screenX);
	window.open(t, n, `width=${r}, height=${o}, left=${c}, top=${s}${a}`);
}
//#endregion
export { t };

//# sourceMappingURL=fshOpen-Dp7intdS.js.map