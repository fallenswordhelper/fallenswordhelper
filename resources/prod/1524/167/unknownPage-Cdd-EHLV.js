import { i as e, n as t, r as n, t as r } from "./injectQuestBookFull-DndPaZED.js";
import { t as i } from "./getElementById-C08-3H-C.js";
import { t as a } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as o } from "./querySelector-C6ReNysW.js";
import { t as s } from "./xPath-op5z6uT2.js";
import { t as c } from "./formatLocalDateTime-Ln0B7sCL.js";
import { n as l, t as u } from "./buffReportParser-BNHEtgN4.js";
import { t as d } from "./partial-Bo20zBni.js";
import { et as f } from "./constants-CenxlFMY.js";
import { t as p } from "./getValue-vrUqpo0a.js";
import { n as m, r as h } from "./idb-D8xqEbs-.js";
import { t as g } from "./devStdOut-D2qFWpUj.js";
// src/modules/common/getStamAsString.js
function _(e) {
	let t = l(e);
	return t ? t.stam.toString() : "-";
}
// src/modules/notepad/buffLog/updateBuffLog.js
var v = (e) => ` ${e[0]} (${_(e[1])} stamina)<br>`, y = (e) => ` <span class="fshRed">${e[0]}</span><br>`;
function b(e, t) {
	let n = y(t);
	return t[1] && (n = v(t)), e + n;
}
function x(e) {
	let t = c(/* @__PURE__ */ new Date()), n = u(document).map(d(b, t));
	h(f, n.reverse().join("") + e);
}
async function S() {
	p("keepBuffLog") && x(await m("fsh_buffLog") ?? "");
}
// src/modules/chrome/unknownPage.js
var C = [
	[() => o(".news_left_column"), () => {
		e("unknown.news"), t();
	}],
	[() => i("quickbuff-report"), () => {
		e("unknown.buffLog.updateBuffLog"), S();
	}],
	[() => s("//td[.=\"Quest Name\"]"), () => {
		e("unknown.questBook.injectQuestBookFull"), r();
	}],
	[() => o("#pCC input[value=\"doinvent\"]"), () => {
		e("unknown.recipes.inventing"), n();
	}],
	[() => !1, () => {
		g("Fell through!");
	}]
];
function w() {
	if (a()) return;
	let e = C.find((e) => e[0]());
	e && e[1]();
}
export { w as default };

//# sourceMappingURL=unknownPage-Cdd-EHLV.js.map