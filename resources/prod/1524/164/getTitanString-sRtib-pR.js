// src/modules/common/trimTitanName.js
function e(e) {
	return e.replace(" (Titan)", "").replace(" (STF Titan)", "").replace(" (Xmas Titan)", "");
}
// src/modules/guild/scoutTower/getKillsPct.js
function t(e, t) {
	return e === 0 ? 0 : t * 100 / e;
}
// src/modules/guild/scoutTower/getTitanString.js
function n(e, t, n) {
	let r = Math.ceil(t / 2 + 1);
	if (e >= r) return "Secured";
	let i = r - e;
	return i > n ? "<span class=\"fshRed\">Cannot Secure</span>" : `<span class="fshRed">${i}</span> to secure`;
}
export { t as n, e as r, n as t };

//# sourceMappingURL=getTitanString-sRtib-pR.js.map