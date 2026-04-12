import { t as e } from "./sendEvent-DFQy5lFi.js";
import { t } from "./insertHtmlBeforeEnd-D5-rjWCh.js";
import { t as n } from "./hasClass-B5HBqSaS.js";
import { t as r } from "./getPlayerId-DOaPZMl6.js";
import { t as i } from "./openQuickBuffById-B9fhtNQi.js";
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

//# sourceMappingURL=doBuffLinkClick-Dk8HWDBw.js.map