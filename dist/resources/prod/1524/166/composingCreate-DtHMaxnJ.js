import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./on-DfyX3AS4.js";
import { t as r } from "./sendEvent-yx1DwCDA.js";
import { t as i } from "./onclick-nv-Fl1th.js";
// src/modules/composing/create/composingCreate.js
function a() {
	r("composingCreate", "setMaxVal");
	let n = e("composing-skill-level-input");
	n && (n.value = t(e("composing-skill-level-max")));
}
function o() {
	i(e("composing-add-skill"), a), n(e("composing-skill-select"), "change", a);
}
export { o as default };

//# sourceMappingURL=composingCreate-DtHMaxnJ.js.map