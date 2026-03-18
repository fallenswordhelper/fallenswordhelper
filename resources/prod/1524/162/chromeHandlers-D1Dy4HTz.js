import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./onclick-9iRduoOH.js";
//#region src/modules/notepad/inventory/eventHandlers/chromeHandlers.js
function n(n, r, i) {
	$(`#${n.id}_length select`).on("change", r("dataTables_length")), $(`#${n.id}_filter input`).on("keyup", r("dataTables_filter")), t(e(`${n.id}_paginate`), (e) => {
		e.target.classList.contains("paginate_button") && i("paginate_button");
	});
}
//#endregion
export { n as t };

//# sourceMappingURL=chromeHandlers-D1Dy4HTz.js.map