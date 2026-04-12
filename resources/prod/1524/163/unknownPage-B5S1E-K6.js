import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./devStdOut-BAVmsJfc.js";
import { et as n } from "./constants-CIKidKvt.js";
import { t as r } from "./getValue-j5JjE6f3.js";
import { i, n as a, r as o, t as s } from "./injectQuestBookFull-BIzAvFS8.js";
import { t as c } from "./querySelector-8FH1hhUv.js";
import { t as l } from "./partial-CYzPXpZP.js";
import { n as u, r as d } from "./idb-BvD4EIHy.js";
import { t as f } from "./jQueryNotPresent-UT8-ZycH.js";
import { t as p } from "./xPath-CgePOSD6.js";
import { t as m } from "./formatLocalDateTime-0tbqvjA6.js";
import { n as h, t as g } from "./buffReportParser-ByxH88BP.js";
//#region src/modules/common/getStamAsString.js
function _(e) {
	let t = h(e);
	return t ? t.stam.toString() : "-";
}
//#endregion
//#region src/modules/notepad/buffLog/updateBuffLog.js
var v = (e) => ` ${e[0]} (${_(e[1])} stamina)<br>`, y = (e) => ` <span class="fshRed">${e[0]}</span><br>`;
function b(e, t) {
	let n = y(t);
	return t[1] && (n = v(t)), e + n;
}
function x(e) {
	let t = m(/* @__PURE__ */ new Date());
	d(n, g(document).map(l(b, t)).reverse().join("") + e);
}
async function S() {
	r("keepBuffLog") && x(await u("fsh_buffLog") ?? "");
}
//#endregion
//#region src/modules/chrome/unknownPage.js
var C = [
	[() => c(".news_left_column"), () => {
		i("unknown.news"), a();
	}],
	[() => e("quickbuff-report"), () => {
		i("unknown.buffLog.updateBuffLog"), S();
	}],
	[() => p("//td[.=\"Quest Name\"]"), () => {
		i("unknown.questBook.injectQuestBookFull"), s();
	}],
	[() => c("#pCC input[value=\"doinvent\"]"), () => {
		i("unknown.recipes.inventing"), o();
	}],
	[() => !1, () => {
		t("Fell through!");
	}]
];
function w() {
	if (f()) return;
	let e = C.find((e) => e[0]());
	e && e[1]();
}
//#endregion
export { w as default };

//# sourceMappingURL=unknownPage-B5S1E-K6.js.map