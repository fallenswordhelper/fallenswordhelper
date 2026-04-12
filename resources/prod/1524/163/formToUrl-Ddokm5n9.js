import { st as e } from "./constants-CIKidKvt.js";
import { t } from "./navigateTo-DSpjkQ0R.js";
//#region src/modules/common/formToUrl.js
function n(n) {
	let r = new FormData(n.target);
	n.submitter?.name && r.append(n.submitter.name, n.submitter.value), t(`${e}?${new URLSearchParams(r).toString()}`);
}
//#endregion
export { n as t };

//# sourceMappingURL=formToUrl-Ddokm5n9.js.map