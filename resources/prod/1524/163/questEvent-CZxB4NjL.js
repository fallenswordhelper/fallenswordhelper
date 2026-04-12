import { nt as e } from "./constants-CIKidKvt.js";
import { t } from "./sendEvent-DFQy5lFi.js";
//#region src/modules/questbook/guideButtons.js
function n(t, n) {
	return `<div class="parent"><a href="${e}quests&subcmd=view&quest_id=${t}" class="fshTempleOne" data-tooltip="Search for this quest on the Ultimate Fallen Sword Guide" target="_blank"></a>&nbsp;<a href="https://wiki.fallensword.com/index.php?title=${n.replace(/ /g, "_")}" class="fshWiki" data-tooltip="Search for this quest on the Wiki" target="_blank"></a></div>`;
}
//#endregion
//#region src/modules/questbook/questEvent.js
function r(e) {
	return (n) => {
		n.target.classList.contains("fshTempleOne") && t(e, "UFSG Link"), n.target.classList.contains("fshWiki") && t(e, "Wiki Link");
	};
}
//#endregion
export { n, r as t };

//# sourceMappingURL=questEvent-CZxB4NjL.js.map