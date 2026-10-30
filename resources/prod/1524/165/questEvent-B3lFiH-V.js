import { nt as e } from "./constants-CenxlFMY.js";
import { t } from "./sendEvent-DkxfZozg.js";
// src/modules/questbook/guideButtons.js
function n(t, n) {
	return `<div class="parent"><a href="${e}quests&subcmd=view&quest_id=${t}" class="fshTempleOne" data-tooltip="Search for this quest on the Ultimate Fallen Sword Guide" target="_blank"></a>&nbsp;<a href="https://wiki.fallensword.com/index.php?title=${n.replace(/ /g, "_")}" class="fshWiki" data-tooltip="Search for this quest on the Wiki" target="_blank"></a></div>`;
}
// src/modules/questbook/questEvent.js
function r(e) {
	return (n) => {
		n.target.classList.contains("fshTempleOne") && t(e, "UFSG Link"), n.target.classList.contains("fshWiki") && t(e, "Wiki Link");
	};
}
export { n, r as t };

//# sourceMappingURL=questEvent-B3lFiH-V.js.map