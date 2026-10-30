import { st as e } from "./constants-CenxlFMY.js";
import { t } from "./navigateTo-CS33u2a7.js";
// src/modules/common/formToUrl.js
function n(n) {
	let r = new FormData(n.target);
	n.submitter?.name && r.append(n.submitter.name, n.submitter.value), t(`${e}?${new URLSearchParams(r).toString()}`);
}
export { n as t };

//# sourceMappingURL=formToUrl-DUfR906g.js.map