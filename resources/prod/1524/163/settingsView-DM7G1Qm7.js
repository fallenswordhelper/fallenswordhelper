import { d as e, ft as t } from "./constants-CIKidKvt.js";
import { t as n } from "./querySelector-8FH1hhUv.js";
import { t as r } from "./createDocument-CAZCPKmJ.js";
import { t as i } from "./indexAjaxData-yJPb4vet.js";
import { t as a } from "./querySelectorArray-Bdj4peIm.js";
//#region src/modules/_dataAccess/fallbacks/settingsView.js
function o(r) {
	let i = t.map(([t, i]) => ({
		id: t,
		level: Number(n(`input[name="${i}"]`, r).value),
		blocked: n(`${e}[value="${t}"]`, r).checked
	}));
	return [...i, ...a(`${e}:checked`, r).map((e) => ({
		id: Number(e.value),
		level: 0,
		blocked: e.checked
	})).filter((e) => !i.find(({ id: t }) => e.id === t)).sort((e, t) => e.id - t.id)];
}
function s(e) {
	return [...e.entries()].filter((e) => e[0].startsWith("discardPref")).map((e) => ({
		id: parseInt(e[0][e[0].length - 1], 10),
		action: parseInt(e[1], 10)
	}));
}
function c(e) {
	return [
		e[0].get("pvp_ladder") === "1",
		e[2].get("ui_preference_11") === "1",
		e[2].get("ui_preference_15") === "1",
		e[2].get("disable_wordcensor") === "1",
		e[2].get("ui_preference_30") === "1",
		e[2].get("ui_preference_21") === "1",
		e[2].get("ui_preference_33") === "1",
		e[2].get("ui_preference_23") === "1"
	];
}
var l = (e) => [...e.forms].map((e) => new FormData(e)), u = (e, t) => parseInt(e.get(t), 10);
function d(e) {
	let t = l(e);
	return {
		s: !0,
		r: {
			skills: o(e),
			item_drop_rarity: s(t[1]),
			flags: c(t),
			min_group_join_level: u(t[0], "min_group_level"),
			item_drop_discard_level: u(t[1], "auto_discard_level"),
			player_block_type: u(t[2], "block_level")
		}
	};
}
async function f() {
	let e = await i({ cmd: "settings" });
	return e ? d(r(e)) : {
		s: !1,
		e: {
			message: "Could not connect to FS servers",
			code: 1
		}
	};
}
//#endregion
export { f as t };

//# sourceMappingURL=settingsView-DM7G1Qm7.js.map