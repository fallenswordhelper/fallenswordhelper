import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./devStdOut-D2qFWpUj.js";
import { et as n } from "./constants-CenxlFMY.js";
import { t as r } from "./getValue-Aap0zlcO.js";
import { i, n as a, r as o, t as s } from "./injectQuestBookFull-wyjB3Pld.js";
import { t as c } from "./querySelector-C6ReNysW.js";
import { t as l } from "./partial-Bo20zBni.js";
import { n as u, r as d } from "./idb-D8xqEbs-.js";
import { t as f } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as p } from "./xPath-op5z6uT2.js";
import { t as m } from "./formatLocalDateTime-Ln0B7sCL.js";
import { n as h, t as g } from "./buffReportParser-Ct8D4XuD.js";
// src/modules/common/getStamAsString.js
function _(e) {
	let t = h(e);
	return t ? t.stam.toString() : "-";
}
// src/modules/notepad/buffLog/updateBuffLog.js
var v = (e) => ` ${e[0]} (${_(e[1])} stamina)<br>`, y = (e) => ` <span class="fshRed">${e[0]}</span><br>`;
function b(e, t) {
	let n = y(t);
	return t[1] && (n = v(t)), e + n;
}
function x(e) {
	let t = m(/* @__PURE__ */ new Date()), r = g(document).map(l(b, t));
	d(n, r.reverse().join("") + e);
}
async function S() {
	r("keepBuffLog") && x(await u("fsh_buffLog") ?? "");
}
// src/modules/chrome/unknownPage.js
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
export { w as default };

//# sourceMappingURL=unknownPage-i3m1RMWx.js.map