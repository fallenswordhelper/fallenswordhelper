import { t as e } from "./sendEvent-bwvhd4A-.js";
import { t } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as n } from "./hasClass-OkTHxcQE.js";
import { t as r } from "./getPlayerId-CDGL5O5G.js";
import { t as i } from "./openQuickBuffById-DJAK7mhj.js";
//#region src/modules/common/doBuffLink.js
function a(e) {
	t(e.parentNode, " <button class=\"fshBl fshBls\">[b]</button>");
}
//#endregion
//#region src/modules/common/doBuffLinkClick.js
var o = (e) => n("fshBl", e) && e.previousElementSibling;
function s(t) {
	o(t.target) && (e("common", "doBuffLinkClick"), i(r(t.target.previousElementSibling.href)));
}
//#endregion
export { a as n, s as t };

//# sourceMappingURL=doBuffLinkClick-9OBESglX.js.map