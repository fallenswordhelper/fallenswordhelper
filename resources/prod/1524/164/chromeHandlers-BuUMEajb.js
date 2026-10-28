import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./onclick-nv-Fl1th.js";
// src/modules/notepad/inventory/eventHandlers/chromeHandlers.js
function n(n, r, i) {
	$(`#${n.id}_length select`).on("change", r("dataTables_length")), $(`#${n.id}_filter input`).on("keyup", r("dataTables_filter")), t(e(`${n.id}_paginate`), (e) => {
		e.target.classList.contains("paginate_button") && i("paginate_button");
	});
}
export { n as t };

//# sourceMappingURL=chromeHandlers-BuUMEajb.js.map