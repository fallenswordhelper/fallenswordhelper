import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
import { t as n } from "./on-afIPYx-0.js";
import { t as r } from "./sendEvent-DFQy5lFi.js";
import { t as i } from "./onclick-8ZwMJyqI.js";
//#region src/modules/composing/create/composingCreate.js
function a() {
	r("composingCreate", "setMaxVal");
	let n = e("composing-skill-level-input");
	n && (n.value = t(e("composing-skill-level-max")));
}
function o() {
	i(e("composing-add-skill"), a), n(e("composing-skill-select"), "change", a);
}
//#endregion
export { o as default };

//# sourceMappingURL=composingCreate-FxZ6R8hm.js.map