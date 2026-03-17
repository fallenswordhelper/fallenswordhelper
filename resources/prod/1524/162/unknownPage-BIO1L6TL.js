import "./sendException-s1csWDQs.js";
import { t as e } from "./getElementById-PlRCtyBA.js";
import "./posthog-C2Vh_0Hn.js";
import { t } from "./devStdOut-BnwcHKWA.js";
import "./system-De1jBRGa.js";
import { et as n } from "./constants-C54mky4_.js";
import { t as r } from "./getValue-CCThXEzy.js";
import "./setValue-Cb0PYC7t.js";
import { i, n as a, r as o, t as s } from "./injectQuestBookFull-DXBhbsXi.js";
import { t as c } from "./querySelector-qkBBhiGH.js";
import { t as l } from "./partial-goh6HOls.js";
import { n as u, r as d } from "./idb-sdcp-8vV.js";
import { t as f } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as p } from "./xPath-C7ziTKGg.js";
import { t as m } from "./formatLocalDateTime-CNdKpcns.js";
import { n as h, t as g } from "./buffReportParser-CWfaADse.js";
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

//# sourceMappingURL=unknownPage-BIO1L6TL.js.map