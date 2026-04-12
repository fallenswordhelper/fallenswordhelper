import { t as e } from "./getValue-j5JjE6f3.js";
import { t } from "./fallback-DjzJos97.js";
import { t as n } from "./isChecked-DBN7tGS_.js";
//#region src/modules/settings/networkIcon.js
var r = "<span data-tooltip=\"This function retrieves data from the network. Disable this to increase speed\"><img class=\"networkIcon\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==\" width=\"16\" height=\"16\" /></span>", i = {
	ajaxifyDestroy: {
		helpTitle: "Ajaxify Destroy",
		helpText: "Destroy items without page redirect.<br>This also allows you to drop more than 100 items",
		network: !0
	},
	ajaxifyMoveRecipe: {
		helpTitle: "Ajaxify Move Recipe",
		helpText: "Move recipe without page redirect.",
		network: !0
	},
	collapseHallPosts: {
		helpTitle: "Collapse Hall Posts",
		helpText: "If enabled, will collapse hall posts."
	},
	collapseNewsArchive: {
		helpTitle: "Collapse News Archive",
		helpText: "If enabled, will collapse news archives."
	},
	disableBreakdownPrompts: {
		helpTitle: "Disable Breakdown Prompts",
		helpText: "If enabled, will disable prompts when you breakdown items.<br>NO REFUNDS OR DO-OVERS! Use at own risk."
	},
	disableDestroyPrompts: {
		helpTitle: "Disable Destroy Prompts",
		helpText: "If enabled, will disable prompts when you destroy items.<br>NO REFUNDS OR DO-OVERS! Use at own risk."
	},
	disableQuickWearPrompts: {
		helpTitle: "Disable Use/Ext Prompts",
		helpText: "If enabled, will disable prompts when you Use/Ext items.<br>NO REFUNDS OR DO-OVERS! Use at own risk.",
		title: "Disable Use/Ext<br>Prompts"
	},
	enableGuildActivityTracker: {
		helpTitle: "Enable Guild Activity Tracker",
		helpText: "If enabled, will track guild member activity over time.",
		network: !0,
		title: "Enable Tracker"
	},
	enabledHuntingMode: {
		helpTitle: "Enabled Hunting Mode",
		helpText: "This will determine which list of buffs gets checked on the world screen."
	},
	enableSeTracker: {
		helpTitle: "Enable SE Tracker",
		helpText: "If enabled, will track the last time each SE was killed.<br>This is DIFFERENT from the usual FSH network activity.<br>When this is enabled, if you have ANY game page open in a browser tab it will scan the SE Log every 10 minutes.<br>You do not need auto-refresh for this to work.",
		network: !0
	},
	enableStamBars: {
		helpTitle: "Stamina Bars",
		helpText: "This shows stamina as a coloured bar. It depends on the guild activity tracker to get the data."
	},
	hidePlayerActions: {
		helpTitle: "Hide Player Actions",
		helpText: "If enabled, will hide player actions."
	},
	hideSubLvlCreature: {
		helpTitle: "Hide Sub Level Creatures",
		helpText: "If enabled, will hide creatures that are lower than the current realm level."
	},
	showBuffInfo: {
		helpTitle: "Show Buff Info",
		helpText: "This will show buff info in the action list."
	},
	showCreatureInfo: {
		helpTitle: "Show Creature Info",
		helpText: "This will show the information from the view creature link when you mouseover the link.",
		network: !0
	},
	showHuntingBuffs: {
		helpTitle: "Hunting Buffs",
		helpText: "Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them."
	},
	showMonsterLog: {
		helpTitle: "Keep Creature Log",
		helpText: "This will show the creature log for each creature you see when you travel.",
		network: !0
	},
	showTitanInfo: {
		helpTitle: "Show Titan Info",
		helpText: "This will show titan info in the action list.",
		network: !0
	},
	compactRanks: {
		helpTitle: "Compact Ranks",
		helpText: "This reduces ranks to a single line with overflow hidden.",
		unstable: !0
	}
};
//#endregion
//#region src/modules/settings/simpleCheckbox.js
function a(e, t) {
	return `&nbsp;[&nbsp;<span class="fshLink tip-static" data-tipped="<span class='fshHelpTitle'>${e}</span><br><br>${t}">?</span>&nbsp;]`;
}
function o(e) {
	return e ? r : "";
}
var s = (e) => e ? "<span class=\"fsh-setting-unstable\" data-tooltip=\"Warning: Causes page instability\"></span>" : "";
function c(e) {
	let { helpText: n, helpTitle: r, network: c, title: l, unstable: u } = i[e];
	return `${o(c)}${s(u)}<label class="fshNoWrap" for="${e}">${t(l, r)}${a(r, n)}:</label>`;
}
function l(t) {
	return n(e(t));
}
function u(e) {
	return `<input id="${e}" name="${e}" class="fsh-va-text-bottom" type="checkbox"${l(e)}>`;
}
function d(e) {
	return c(e) + u(e);
}
function f(e) {
	return `<tr><td class="fshRight">${c(e)}</td><td>${u(e)}</td></tr>`;
}
//#endregion
export { d as i, c as n, f as r, a as t };

//# sourceMappingURL=simpleCheckbox-BrfzFmVJ.js.map