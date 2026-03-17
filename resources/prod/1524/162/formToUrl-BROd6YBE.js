import { st as e } from "./constants-C54mky4_.js";
import { t } from "./navigateTo-CDpyk-TN.js";
//#region src/modules/common/formToUrl.js
function n(n) {
	let r = new FormData(n.target);
	n.submitter?.name && r.append(n.submitter.name, n.submitter.value), t(`${e}?${new URLSearchParams(r).toString()}`);
}
//#endregion
export { n as t };

//# sourceMappingURL=formToUrl-BROd6YBE.js.map