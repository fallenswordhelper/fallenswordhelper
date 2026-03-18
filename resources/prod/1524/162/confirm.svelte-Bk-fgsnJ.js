import { A as e, Z as t } from "./disclose-version-CVZFuhb0.js";
import { t as n } from "./ModalConfirm-DbhWxcda.js";
//#region src/modules/modal/confirm.svelte.js
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
//#endregion
export { o as t };

//# sourceMappingURL=confirm.svelte-Bk-fgsnJ.js.map