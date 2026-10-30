import { t as e } from "./layout-B2Q1UoM2.js";
import { t } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as n } from "./formatUtcTimestamp-M6l7yhyp.js";
import { t as r } from "./formatLocalDateTime-Ln0B7sCL.js";
// src/modules/points/xmas/xmas.js
function i() {
	"flamedeerData" in window && flamedeerData?.endTime && e() && t(e(), `<div style="color: blue; text-align: center;">
        Ends at: ${n(flamedeerData.endTime)}
        (Local: ${r(/* @__PURE__ */ new Date(flamedeerData.endTime * 1e3))})
      </div>`);
}
export { i as default };

//# sourceMappingURL=xmas-DSool3m2.js.map