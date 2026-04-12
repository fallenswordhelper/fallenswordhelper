import { t as e } from "./regExpFirstCapture-Bi32xMqS.js";
import { Y as t } from "./constants-CIKidKvt.js";
import { t as n } from "./getTextTrim-hYBF-bdh.js";
import { t as r } from "./_dataAccess-Cm9xXxBc.js";
import { t as i } from "./indexAjaxDoc-BNgfSQTJ.js";
import { t as a } from "./querySelectorArray-Bdj4peIm.js";
import { t as o } from "./closestTr-DTXY0qkG.js";
import { t as s } from "./attribsToArray-DXTtRlj5.js";
import { t as c } from "./view-D7rOIO2S.js";
//#region src/modules/_dataAccess/daMercsView.js
var l = (e) => RegExp(`<td>${e}:</td><td>(\\d+)</td>`);
function u(t) {
	return {
		id: t.src.split("/").at(-1).split(".")[0],
		name: n(o(t).previousElementSibling),
		attributes: [
			"Attack",
			"Defense",
			"Armor",
			"HP",
			"Damage"
		].map((n, r) => ({
			id: r,
			value: Number(e(l(n), t.dataset.tipped))
		}))
	};
}
function d(e) {
	return e ? {
		r: { mercs: a("#pCC img[src*=\"/mercs/\"]", e).map(u) },
		s: !0
	} : { s: !1 };
}
async function f() {
	return d(await i({
		cmd: "guild",
		subcmd: "mercs"
	}));
}
function p() {
	return r(c, f);
}
//#endregion
//#region src/modules/guild/groups/mercEffect.js
var m = (e) => Math.ceil(e * t), h = ({ attributes: e }) => s(e).map(m), g = (e, t) => e.map((e, n) => e + t[n]);
function _(e) {
	return e?.r?.mercs?.map(h).reduce(g, [
		0,
		0,
		0,
		0,
		0
	]) ?? [
		0,
		0,
		0,
		0,
		0
	];
}
//#endregion
export { p as n, _ as t };

//# sourceMappingURL=mercEffect-76JNXob6.js.map