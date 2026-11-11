import { L as e, it as t } from "./disclose-version-Cj0Bwtvz.js";
import { t as n } from "./ModalConfirm-Dd-SCpJZ.js";
// src/modules/modal/confirm.svelte.js
var r = t({ visible: !0 }), i = null;
function a(t) {
	r.resolve = t, i ? r.visible = !0 : i = e(n, {
		props: r,
		target: document.body
	});
}
function o(e) {
	return r.msg = e, new Promise(a);
}
export { o as t };

//# sourceMappingURL=confirm.svelte-BFUGCzDS.js.map