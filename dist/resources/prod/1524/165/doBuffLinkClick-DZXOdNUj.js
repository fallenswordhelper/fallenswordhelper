import { t as e } from "./sendEvent-DkxfZozg.js";
import { t } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as n } from "./hasClass-B8BlPKl4.js";
import { t as r } from "./getPlayerId-DtAI89Cf.js";
import { t as i } from "./openQuickBuffById-B66eBgWb.js";
// src/modules/common/doBuffLink.js
function a(e) {
	t(e.parentNode, " <button class=\"fshBl fshBls\">[b]</button>");
}
// src/modules/common/doBuffLinkClick.js
var o = (e) => n("fshBl", e) && e.previousElementSibling;
function s(t) {
	o(t.target) && (e("common", "doBuffLinkClick"), i(r(t.target.previousElementSibling.href)));
}
export { a as n, s as t };

//# sourceMappingURL=doBuffLinkClick-DZXOdNUj.js.map