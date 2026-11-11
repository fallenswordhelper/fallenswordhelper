import { t as e } from "./formatLocalDateTime-Ln0B7sCL.js";
import { t } from "./formatUtcTimestamp-M6l7yhyp.js";
import { t as n } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as r } from "./layout-B2Q1UoM2.js";
// src/modules/points/xmas/xmas.js
function i() {
	"flamedeerData" in window && flamedeerData?.endTime && r() && n(r(), `<div style="color: blue; text-align: center;">
        Ends at: ${t(flamedeerData.endTime)}
        (Local: ${e(/* @__PURE__ */ new Date(flamedeerData.endTime * 1e3))})
      </div>`);
}
export { i as default };

//# sourceMappingURL=xmas-C0iDc5Hi.js.map