import { t as e } from "./regExpFirstCapture-D_QeHFEY.js";
import { Y as t } from "./constants-CenxlFMY.js";
import { t as n } from "./getTextTrim-CvXe85fp.js";
import { t as r } from "./_dataAccess-BLVLQyDJ.js";
import { t as i } from "./indexAjaxDoc-WR96kHce.js";
import { t as a } from "./querySelectorArray-C70U47NF.js";
import { t as o } from "./closestTr-BGwSv-6S.js";
import { t as s } from "./attribsToArray-Bd0J_KyI.js";
import { t as c } from "./view-Bb_8P0rO.js";
// src/modules/_dataAccess/daMercsView.js
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
// src/modules/guild/groups/mercEffect.js
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
export { p as n, _ as t };

//# sourceMappingURL=mercEffect-vNYuj1YV.js.map