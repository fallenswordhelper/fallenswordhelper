import { t as e } from "./layout-6CPY-bfq.js";
import { t } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as n } from "./formatUtcTimestamp-CjMQjPi2.js";
import { t as r } from "./formatLocalDateTime-0tbqvjA6.js";
//#region src/modules/points/xmas/xmas.js
function i() {
	"flamedeerData" in window && flamedeerData?.endTime && e() && t(e(), `<div style="color: blue; text-align: center;">
        Ends at: ${n(flamedeerData.endTime)}
        (Local: ${r(/* @__PURE__ */ new Date(flamedeerData.endTime * 1e3))})
      </div>`);
}
//#endregion
export { i as default };

//# sourceMappingURL=xmas-Bb12eESs.js.map