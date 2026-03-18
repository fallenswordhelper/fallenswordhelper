import { t as e } from "./layout-Bapa39KM.js";
import { t } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as n } from "./formatUtcTimestamp-CcKIkC-e.js";
import { t as r } from "./formatLocalDateTime-CNdKpcns.js";
//#region src/modules/points/xmas/xmas.js
function i() {
	"flamedeerData" in window && flamedeerData?.endTime && e() && t(e(), `<div style="color: blue; text-align: center;">
        Ends at: ${n(flamedeerData.endTime)}
        (Local: ${r(/* @__PURE__ */ new Date(flamedeerData.endTime * 1e3))})
      </div>`);
}
//#endregion
export { i as default };

//# sourceMappingURL=xmas-Dh35sSiJ.js.map