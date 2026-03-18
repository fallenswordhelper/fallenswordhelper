import "./sendException-s1csWDQs.js";
import { t as e } from "./getElementById-PlRCtyBA.js";
import "./posthog-C2Vh_0Hn.js";
import { t } from "./system-De1jBRGa.js";
import { Et as n, ct as r, i, vt as a, xt as o } from "./constants-C54mky4_.js";
import { t as s } from "./getValue-CCThXEzy.js";
import { t as c } from "./calf-OM11NjAU.js";
import { t as l } from "./isArray-oWM-Qp9j.js";
import { t as u } from "./fallback-BaBUEkCV.js";
import { t as ee } from "./task-jKbgFyYT.js";
import { A as d, B as f, F as p, J as m, L as h, N as g, O as _, P as te, R as v, W as y, X as b, Y as ne, _t as x, a as re, dt as S, et as C, j as ie, k as ae, nt as oe, r as w, ut as T } from "./disclose-version-CVZFuhb0.js";
import { t as se } from "./arrayFrom-LpiPmbFE.js";
import { t as E } from "./partial-goh6HOls.js";
import { t as D } from "./layout-Bapa39KM.js";
import { t as O } from "./sendEvent-bwvhd4A-.js";
import { t as ce } from "./currentGuildId-Br10wzx3.js";
import { t as k } from "./entries-BPLrbAVw.js";
import { t as le } from "./cElement-d0yA6JNe.js";
import { t as ue } from "./createDiv-Bb3O54wx.js";
import { t as A } from "./insertElement-DtUB7uKq.js";
import { t as de } from "./setInnerHtml-ClDKp0Zh.js";
import { t as fe } from "./_dataAccess-tuhLVrPW.js";
import "./indexAjax-BXHvJ2Y7.js";
import { t as pe } from "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import { t as j } from "./clickThis-CZdkFZtj.js";
import { t as M } from "./querySelectorArray-BZbNvND7.js";
import { n as me, r as he } from "./idb-sdcp-8vV.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import { t as ge } from "./fromEntries-Bc4U4usg.js";
import { t as _e } from "./jQueryNotPresent-oTtW_9Ua.js";
import { t as ve } from "./insertHtmlBeforeEnd-CRJWaYJw.js";
import { t as ye } from "./intValue-NIZZTFPF.js";
import { t as N } from "./all-Dy4LjBGw.js";
import { t as be } from "./hideQTip-DvP2VIxD.js";
import "./legacy-TVNYOKqu.js";
import { t as xe } from "./guildStore-CaRJOkhi.js";
import { t as Se } from "./playerId-KKJEdV6P.js";
import { n as Ce, t as we } from "./deepClone-BT7PN_0l.js";
import { t as Te } from "./guildInventory-BO2v5nuo.js";
import { t as Ee } from "./daGuildReport-Caz-RF-p.js";
import "./daUseItem-DT7YEAiv.js";
import { t as De } from "./inventory-DgY8Lj8t.js";
import { t as Oe } from "./loadDataTables-BxS2i7yi.js";
import { n as ke, t as Ae } from "./lvlTests-4W_DUC1X.js";
import { t as je } from "./changeMinMax-BRLn5VMY.js";
import "./backpackOk-D61pwOdg.js";
import { t as Me } from "./daLoadInventory-CNPYoxt-.js";
import { t as Ne } from "./htmlResult-VSGrcENv.js";
import "./guildMembers-CZU-uLr9.js";
import { t as Pe } from "./getMembrList-B5emVD6O.js";
import { t as Fe } from "./flattenItems-CQAcRQtd.js";
import { t as Ie } from "./createTable-UUXl0KV8.js";
import { t as Le } from "./chromeHandlers-D1Dy4HTz.js";
import "./takeItem-CIVEdK3m.js";
import { t as Re } from "./daGsTake-BgJXImnW.js";
import { n as ze, r as Be, t as Ve } from "./useItem-48ZSMXui.js";
import { n as He, t as Ue } from "./queue-zno2wehD.js";
import { t as We } from "./errorDialog-B7xXYZmL.js";
import { n as Ge, r as Ke, t as qe } from "./dropItem-CF0rI2de.js";
import "./sendItems-TAu70_Eh.js";
import { t as Je } from "./executeAll-DpcDw_ug.js";
import { t as Ye } from "./isSelected-B6HOXCec.js";
//#region src/modules/common/notLastUpdate.js
function Xe([e]) {
	return e !== "lastUpdate";
}
//#endregion
//#region src/modules/_dataAccess/export/enumFolders.js
var Ze = ({ id: e, name: t }) => [e, t];
function Qe(e) {
	return l(e?.inventories) ? ge(e.inventories.filter(({ id: e }) => e !== -1).map(Ze)) : [];
}
//#endregion
//#region src/modules/notepad/inventory/injectError.js
var P = "", $e = () => P;
function et(e, t) {
	P ||= t.message, P && A(e, le("p", {
		className: "fshRed",
		textContent: P
	}));
}
//#endregion
//#region src/modules/notepad/inventory/buildInv.js
var F = {}, I = () => F;
async function L(e) {
	try {
		return await e();
	} catch (e) {
		if (e.jqXhr.status !== 500) throw e;
		et(D(), e);
	}
}
var R = (e) => (t) => {
	let n = e.find((e) => e.a === t.inv_id);
	return {
		...t,
		...n?.n && { item_name: n.n }
	};
}, tt = (e) => ({
	...e,
	equipped: !0,
	folder_id: -2
}), nt = (e, t, n) => ({
	folders: Qe(e),
	items: t.map(R(n)),
	player_id: Se()
});
async function rt() {
	let [e, t] = await N([L(De), Me()]), n = e?.items ?? [], r = t?.r ?? {};
	return nt(r, n, (r.equipment?.map(tt) ?? []).concat(Fe(r)));
}
var it = (e) => ({
	...e,
	player: { id: -1 }
}), at = (e, t) => ({
	current_player_id: Se(),
	items: e.map(R(t)),
	guild_id: ce()
});
async function ot() {
	let [e, t, n] = await N([
		L(xe),
		Ee(),
		Ce()
	]), r = e?.items ?? [], i = t?.r ?? [], a = n?.r ?? [];
	return at(r, i.concat(a.map(it)));
}
async function st() {
	c.subcmd === "invmanagernew" ? F = await rt() : c.subcmd === "guildinvmgr" && (F = await ot());
}
//#endregion
//#region src/modules/notepad/inventory/eventHandlers/telemetry.js
var z = (e) => {
	O("Inventory", "Header", e);
}, B = (e) => {
	O("Inventory", "Datatable", e);
};
//#endregion
//#region src/modules/notepad/inventory/clearButton.js
function ct(e, t) {
	B("clearSearch"), t.val(""), $(e).DataTable().search("").draw();
}
function lt(e) {
	let t = $(`#${e.id}_filter input`);
	t.prop("type", "text");
	let n = $("<span>&times;</span>");
	t.wrap($("<span class=\"text-input-wrapper\"/>")), t.after(n), n.on("click", E(ct, e, t));
}
//#endregion
//#region src/modules/notepad/inventory/decorate.js
function ut() {
	I().folders && (I().folders[-1] = "Main");
}
//#endregion
//#region src/modules/notepad/inventory/assets.js
var V = {
	checkedElements: {
		0: 1,
		1: 1,
		2: 1,
		3: 1,
		4: 1,
		5: 1,
		6: 1,
		7: 1,
		8: 1,
		100: 1,
		101: 1,
		102: 1,
		103: 1,
		104: 1,
		105: 1,
		106: 1
	},
	fshMinLvl: 1,
	fshMaxLvl: 9999
}, dt = "<table class=\"fshInvFilter\"><tr><th colspan=\"14\">@@reportTitle@@</th><th><span id=\"fshRefresh\" class=\"fshLink\">[Refresh]</span></th></tr><tr><td colspan=\"2\" rowspan=\"3\"><b>&nbsp;Show Items:</b></td><td class=\"fshRight\">&nbsp;Helmet:</td><td><input id=\"fshHelmet\" type=\"checkbox\" item=\"0\"/></td><td class=\"fshRight\">&nbsp;Armor:</td><td><input id=\"fshArmor\" type=\"checkbox\" item=\"1\"/></td><td class=\"fshRight\">&nbsp;Gloves:</td><td><input id=\"fshGloves\" type=\"checkbox\" item=\"2\"/></td><td class=\"fshRight\">&nbsp;Boots:</td><td><input id=\"fshBoots\" type=\"checkbox\" item=\"3\"/></td><td class=\"fshRight\">&nbsp;Weapon:</td><td><input id=\"fshWeapon\" type=\"checkbox\" item=\"4\"/></td><td></td><td class=\"fshRight\">&nbsp;Min lvl:</td><td rowspan=\"2\"><input id=\"fshMinLvl\" class=\"fshNumberInput\" type=\"number\" value=\"1\" min=\"0\"><br><input id=\"fshMaxLvl\" class=\"fshNumberInput\" type=\"number\" value=\"9999\" min=\"0\"></td></tr><tr><td class=\"fshRight\">&nbsp;Shield:</td><td><input id=\"fshShield\" type=\"checkbox\" item=\"5\"/></td><td class=\"fshRight\">&nbsp;Ring:</td><td><input id=\"fshRing\" type=\"checkbox\" item=\"6\"/></td><td class=\"fshRight\">&nbsp;Amulet:</td><td><input id=\"fshAmulet\" type=\"checkbox\" item=\"7\"/></td><td class=\"fshRight\">&nbsp;Rune:</td><td><input id=\"fshRune\" type=\"checkbox\" item=\"8\"/></td><td class=\"fshRight\">&nbsp;Sets Only:</td><td><input id=\"fshSets\" item=\"-1\" type=\"checkbox\"/></td><td></td><td class=\"fshRight\">&nbsp;Max lvl:</td></tr><tr><td colspan=\"2\">&nbsp;[<span id=\"fshAll\" class=\"fshLink\">Select All</span>]</td><td colspan=\"2\">&nbsp;[<span id=\"fshNone\" class=\"fshLink\">Select None</span>]</td><td colspan=\"2\">&nbsp;[<span id=\"fshDefault\" class=\"fshLink\">Defaults</span>]</td><td colspan=\"6\"></td><td><input id=\"fshReset\" type=\"button\" value=\"Reset\"/></td></tr><tr><td class=\"fshRight\">&nbsp;Quest Item:</td><td><input id=\"fshQuest\" item=\"9\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Potion:</td><td><input id=\"fshPotion\" item=\"10\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Resource:</td><td><input id=\"fshResource\" item=\"12\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Recipe:</td><td><input id=\"fshRecipe\" item=\"13\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Container:</td><td><input id=\"fshContainer\" item=\"14\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Frag Stash:</td><td><input id=\"fshStash\" item=\"16\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Composed:</td><td><input id=\"fshComposed\" item=\"15\" type=\"checkbox\"/></td><td></td></tr><tr><td class=\"fshRight\">&nbsp;Common:</td><td><input id=\"fshCommon\" item=\"100\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Rare:</td><td><input id=\"fshRare\" item=\"101\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Unique:</td><td><input id=\"fshUnique\" item=\"102\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Legendary:</td><td><input id=\"fshLegendary\" item=\"103\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Super Elite:</td><td><input id=\"fshSuperElite\" item=\"104\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Crystalline:</td><td><input id=\"fshCrystalline\" item=\"105\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Epic:</td><td colspan=\"2\"><input id=\"fshEpic\" item=\"106\" type=\"checkbox\" checked/></td></tr></table>", ft = {
	0: 1,
	1: 1,
	2: 1,
	3: 1,
	4: 1,
	5: 1,
	6: 1,
	7: 1,
	8: 1,
	9: 1,
	10: 1,
	11: 1,
	12: 1,
	13: 1,
	14: 1,
	15: 1,
	16: 1,
	100: 1,
	101: 1,
	102: 1,
	103: 1,
	104: 1,
	105: 1,
	106: 1
}, H = {
	Perfect: {
		abbr: "Perf",
		colour: "#00b600",
		index: 8
	},
	Excellent: {
		abbr: "Exc",
		colour: "#f6ed00",
		index: 7
	},
	"Very Good": {
		abbr: "VG",
		colour: "#f67a00",
		index: 6
	},
	Good: {
		abbr: "Good",
		colour: "#f65d00",
		index: 5
	},
	Average: {
		abbr: "Ave",
		colour: "#f64500",
		index: 4
	},
	Poor: {
		abbr: "Poor",
		colour: "#f61d00",
		index: 3
	},
	"Very Poor": {
		abbr: "VPr",
		colour: "#b21500",
		index: 2
	},
	Uncrafted: {
		abbr: "Unc",
		colour: "#666666",
		index: 1
	}
}, U = {}, W = 0, pt = 0, G = () => U, mt = () => W, ht = () => pt;
async function gt() {
	let e = await me(`fsh_${c.subcmd}`);
	U = {
		...we(V),
		...u(e, {})
	}, W = s("showQuickDropLinks"), pt = s("showQuickSendLinks");
}
//#endregion
//#region src/modules/notepad/inventory/render/bpRender.js
function _t(e, t) {
	return e === "display" ? t.player_id === -1 ? `<span class="fshLink takeItem" invid="${t.inv_id}" action="take">BP</span>` : `<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${t.player_id}" mode="0" action="recall">BP</span>` : "BP";
}
function vt(e, t, n) {
	if (!(n.folder_id || n.player_id === I().current_player_id)) return _t(t, n);
}
//#endregion
//#region src/modules/notepad/inventory/render/craftRender.js
function yt(e) {
	return H[e] ? H[e].abbr : "";
}
//#endregion
//#region src/modules/notepad/inventory/render/createdRow.js
function bt(e) {
	return e.equipped ? "fshGreen" : "fshNavy";
}
function xt(e) {
	return e.player_id === -1 ? "fshNavy" : "fshMaroon";
}
function St(e) {
	return e.folder_id ? bt(e) : xt(e);
}
function Ct(e, t) {
	let n = St(t);
	e.classList.add(n), t.equipped && e.classList.add("fshBold");
}
//#endregion
//#region src/modules/notepad/inventory/render/dropRender.js
function wt(e) {
	return e.guild_tag !== -1 || e.equipped;
}
function Tt(e, t, n) {
	if (!wt(n)) return t === "display" ? `<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>` : "Drop";
}
//#endregion
//#region src/modules/notepad/inventory/render/durabilityRender.js
function Et(e, t, n) {
	if (n.type < 9 && n.max_durability > 0) return Math.floor(n.durability / n.max_durability * 100);
}
//#endregion
//#region src/modules/notepad/inventory/render/forgeRender.js
function Dt(e, t, n) {
	if (n.type < 9) return n.forge;
}
//#endregion
//#region src/modules/notepad/inventory/render/canRecall.js
function Ot(e) {
	return e.player_id && e.player_id !== -1;
}
function kt(e) {
	return e.folder_id && e.guild_tag !== -1;
}
function At(e) {
	return Ot(e) || kt(e);
}
//#endregion
//#region src/modules/notepad/inventory/render/gsRender.js
function jt(e) {
	return `<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${u(e.player_id, I().player_id)}" mode="1" action="recall">GS</span>`;
}
function Mt(e) {
	return `<span class="fshLink storeItem" invid="${e.inv_id}">GS</span>`;
}
function Nt(e, t, n) {
	return e === "display" ? n(t) : "GS";
}
function Pt(e) {
	return e.folder_id && !e.bound;
}
function Ft(e, t, n) {
	if (At(n)) return Nt(t, n, jt);
	if (Pt(n)) return Nt(t, n, Mt);
}
//#endregion
//#region src/modules/notepad/inventory/render/nameRender.js
function It(e) {
	return e.player_id === -1 ? 4 : At(e) ? 7 : 1;
}
function Lt(e, t, n) {
	return e || (t === -1 ? n : t);
}
function Rt(e) {
	return e.stats && e.stats.set_name !== "";
}
function zt(e, t) {
	let r = It(t), a = Lt(I().player_id, t.player_id, I().guild_id), o = "";
	return Rt(t) && (o = ` (<span class="fshLink setName" set="${t.stats.set_name}">set</span>)`), `<a href="${i}${e}" class="fshInvItem tip-dynamic ${n[t.rarity].clas}" data-tipped="fetchitem.php?item_id=${t.item_id}&inv_id=${t.inv_id}&t=${r}&p=${a}">${e}</a>${o}`;
}
function Bt(e, t, n) {
	return t === "display" ? zt(e, n) : e;
}
//#endregion
//#region src/modules/notepad/inventory/render/sendRender.js
function Vt(e) {
	return e.equipped || e.guild_tag === -1 && e.bound;
}
function Ht(e, t, n) {
	if (!Vt(n)) return t === "display" ? `<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>` : "Send";
}
//#endregion
//#region src/modules/notepad/inventory/render/wearUseRender.js
function Ut(e) {
	return e.folder_id && !e.equipped;
}
function Wt(e) {
	return e.player_id && !e.equipped && e.player_id === I().current_player_id;
}
var Gt = [
	[(e) => e.player_id && e.player_id === -1, (e, t) => `takeItem" action="${t.a}`],
	[(e) => e.player_id && e.player_id !== I().current_player_id, (e, t) => `recallItem" playerid="${e.player_id}" mode="0" action="${t.a}`],
	[(e) => Ut(e) || Wt(e), (e, t) => t.c]
];
function Kt(e, t) {
	let n = Gt.find(([t]) => t(e));
	return n ? `<span class="fshLink ${n[1](e, t)}" invid="${e.inv_id}">${t.b}</span>` : "";
}
function qt(e, t, n) {
	let r = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		null,
		2,
		2,
		null,
		null,
		null,
		2
	][e];
	if (r === 1) return Kt(n, {
		a: "wear",
		b: "Wear",
		c: "wearItem"
	});
	if (r === 2) return Kt(n, {
		a: "use",
		b: "Use",
		c: "useItem"
	});
}
//#endregion
//#region src/modules/notepad/inventory/render/whereData.js
function K(e) {
	return u(e.folder_id, e.player_id);
}
//#endregion
//#region src/modules/notepad/inventory/render/playerName.js
function q(e) {
	return c.membrList[e] ? c.membrList[e].username : "???";
}
//#endregion
//#region src/modules/notepad/inventory/render/whereRender.js
function Jt(e) {
	return e.equipped ? -2 : e.folder_id;
}
function Yt(e, t, n) {
	return n.folder_id ? Jt(n) : n.player_id === -1 ? "~" : q(n.player_id);
}
//#endregion
//#region src/modules/notepad/inventory/render/whereRenderDisplay.js
function Xt(e) {
	return e.player_id === -1 ? "Guild Store" : `<a class="fshMaroon" href="${o}${e.player_id}">${q(e.player_id)}</a>`;
}
function Zt(e, t) {
	return e[0] - t[0];
}
function Qt(e, t) {
	return `<option value="${t[0]}"${Ye(Number(t[0]), e)}>${t[1]}</option>`;
}
function $t(e, t) {
	return k(t).sort(Zt).map(E(Qt, e)).join("");
}
function en(e, t, n) {
	return n.player_id ? Xt(n) : n.equipped ? "Worn" : `<select class="fshMoveItem" data-inv="${n.inv_id}">${$t(n.folder_id, I().folders)}</select>`;
}
//#endregion
//#region src/modules/notepad/inventory/render/whereRenderFilter.js
function tn(e) {
	return e.player_id === -1 ? "Guild Store" : q(e.player_id);
}
function nn(e, t, n) {
	return n.player_id ? tn(n) : n.equipped ? "Worn" : I().folders[n.folder_id];
}
//#endregion
//#region src/modules/notepad/inventory/doTable.js
var rn = [
	{
		title: "Name",
		data: "item_name",
		render: Bt
	},
	{
		title: "Level",
		data: "stats.min_level"
	},
	{
		title: "Where",
		data: K,
		render: {
			_: Yt,
			display: en,
			filter: nn
		}
	},
	{
		title: "Type",
		data: "type",
		render(e) {
			return r[e];
		}
	},
	{
		title: "Att",
		data: "stats.attack"
	},
	{
		title: "Def",
		data: "stats.defense"
	},
	{
		title: "Arm",
		data: "stats.armor"
	},
	{
		title: "Dam",
		data: "stats.damage"
	},
	{
		title: "HP",
		data: "stats.hp"
	},
	{
		title: "Frg",
		data: "forge",
		render: Dt
	},
	{
		title: "Craft",
		data: "craft",
		render: {
			_(e) {
				return H[e] ? H[e].index : 0;
			},
			display: yt,
			filter: yt
		}
	},
	{
		title: "Du%",
		data: "durability",
		render: Et
	},
	{
		title: "BP",
		data: K,
		render: vt
	},
	{
		title: "GS",
		data: K,
		render: Ft
	},
	{
		title: "W/U",
		data: "type",
		render: qt
	},
	{
		title: "setName",
		data: "stats.set_name",
		orderable: !1,
		visible: !1
	},
	{
		title: "Tag",
		data: "guild_tag",
		render(e) {
			return e === -1 ? "No" : "Yes";
		}
	},
	{
		title: "Drop",
		data: "type",
		render: Tt
	},
	{
		title: "Send",
		data: "type",
		render: Ht
	}
];
function J() {
	return "player_id" in I();
}
function an() {
	return J() ? "fshUserInv" : "fshGuildInv";
}
function on() {
	let e = Ie({
		className: "hover fshXSmall",
		id: an()
	});
	return A(D(), e), e;
}
function sn(e) {
	return $(e).DataTable({
		autoWidth: !1,
		columnDefs: [{
			targets: "_all",
			defaultContent: ""
		}, {
			targets: [
				1,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				12,
				13
			],
			orderSequence: ["desc", "asc"]
		}],
		columns: rn,
		createdRow: Ct,
		data: I().items,
		deferRender: !0,
		lengthMenu: [[
			50,
			100,
			150,
			200,
			-1
		], [
			50,
			100,
			150,
			200,
			"All"
		]],
		pageLength: 50,
		stateDuration: 0,
		stateSave: !0
	});
}
function cn(e) {
	[
		[12, "current_player_id" in I()],
		[17, J() && mt()],
		[18, J() && ht()]
	].forEach(([t, n]) => e.column(t).visible(n));
}
function ln() {
	let e = on();
	return cn(sn(e)), e;
}
//#endregion
//#region src/modules/notepad/inventory/saveOptions.js
function Y(e) {
	he(`fsh_${c.subcmd}`, e);
}
//#endregion
//#region src/modules/notepad/inventory/setChecks.js
function X() {
	M("table.fshInvFilter input[type=\"checkbox\"]").forEach((e) => {
		e.checked = G().checkedElements[e.getAttribute("item")] === 1;
	}), Y(G());
}
//#endregion
//#region src/modules/notepad/inventory/eventHandlers/allChecks.js
function un(e) {
	z("Select All"), G().checkedElements = ft, X(), $(e).DataTable().draw(!1);
}
//#endregion
//#region src/modules/notepad/inventory/eventHandlers/changeLvls.js
function dn(e, t) {
	G().fshMinLvl = e, G().fshMaxLvl = t, Y(G());
}
function fn(e) {
	$(e).DataTable().draw(!1);
}
function pn(e) {
	z("changeLvls"), je(dn, E(fn, e));
}
//#endregion
//#region src/modules/notepad/inventory/eventHandlers/clearChecks.js
function mn(e) {
	return Number(e[0]) >= 100;
}
function hn(e, t) {
	return e[t[0]] = t[1], e;
}
function gn(e) {
	return k(e).filter(mn).reduce(hn, {});
}
function _n(e) {
	z("Select None"), G().checkedElements = gn(G().checkedElements), X(), $(e).DataTable().draw();
}
//#endregion
//#region src/modules/notepad/inventory/eventHandlers/getChecks.js
function vn(e) {
	z("Checkbox"), G().checkedElements = {}, M("table.fshInvFilter input[type=\"checkbox\"][item]:checked").forEach((e) => {
		G().checkedElements[e.getAttribute("item")] = 1;
	}), Y(G()), $(e).DataTable().draw(!1);
}
//#endregion
//#region src/modules/notepad/inventory/eventHandlers/resetChecks.js
function yn(e) {
	z("Defaults"), G().checkedElements = V.checkedElements, X(), $(e).DataTable().draw(!1);
}
//#endregion
//#region src/modules/notepad/inventory/eventHandlers/resetLvls.js
function bn(e) {
	$("#fshMinLvl").val(G().fshMinLvl), $("#fshMaxLvl").val(G().fshMaxLvl), $(e).DataTable().draw(!1);
}
function xn(e) {
	z("Reset levels"), G().fshMinLvl = V.fshMinLvl, G().fshMaxLvl = V.fshMaxLvl, Y(G()), bn(e);
}
//#endregion
//#region src/modules/ajax/ajaxSendItems.js
async function Sn(e) {
	return ze(await Ge(e));
}
//#endregion
//#region src/modules/app/guild/inventory/dostoreitems.js
function Cn(e) {
	return Te({
		subcmd2: "dostoreitems",
		items: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daStoreItems.js
async function wn(e) {
	return Ne(await pe({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "dostoreitems",
		storeIndex: e
	}));
}
function Tn(e) {
	return fe(Cn, wn, e);
}
//#endregion
//#region src/modules/ajax/storeItems.js
async function En(e) {
	let t = await Tn(e);
	return We(t), ze(t);
}
//#endregion
//#region src/modules/notepad/inventory/eventHandlers/doAction.js
function Dn(e) {
	e.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass();
}
function On(e, t) {
	e.eq(t).empty();
}
function kn(e) {
	[
		2,
		12,
		13,
		14,
		15,
		16
	].forEach(E(On, e));
}
function An(e, t) {
	if (t.r === 1) return;
	let n = e.closest("tr");
	kn($("td", n)), n.css("text-decoration", "line-through");
}
function jn(e) {
	e.empty().append(`<img src="${t}ui/misc/spinner.gif" width="11" height="11">`);
}
async function Z(e, t) {
	be(t), Dn(t), jn(t);
	let n = await e();
	n && An(t, n);
}
//#endregion
//#region src/modules/notepad/inventory/eventHandlers/spanClickHandlers.js
function Mn(e, t) {
	B("setName"), $(e).DataTable().search(t.attr("set")).draw(), $(`#${e.id}_filter input`).trigger("focus");
}
function Nn(e) {
	B("takeItem"), Z(E(He, e.attr("invid"), e.attr("action")), e);
}
function Pn(e) {
	B("recallItem"), Z(E(Ue, e.attr("invid"), e.attr("playerid"), e.attr("mode"), e.attr("action")), e);
}
function Q(e, t, n, r) {
	B(n), Z(E(e, t), r);
}
function Fn(e) {
	Q(En, [e.attr("invid")], "doStoreItem", e);
}
function In(e, t, n) {
	Q(e, n.attr("invid"), t, n);
}
var Ln = (e) => In(Ve, "doUseItem", e), Rn = (e) => In(Be, "doWearItem", e);
function zn(e, t, n) {
	Q(e, [n.data("inv")], t, n);
}
var Bn = (e) => zn(qe, "doDropItem", e), Vn = (e) => zn(Sn, "doSendItem", e), Hn = (e) => (t) => e($(t.target));
function Un(e, [t, n]) {
	$(e).on("click", `span.${t}`, Hn(n));
}
function Wn(e) {
	[
		["dropItem", Bn],
		["recallItem", Pn],
		["sendItem", Vn],
		["setName", E(Mn, e)],
		["storeItem", Fn],
		["takeItem", Nn],
		["useItem", Ln],
		["wearItem", Rn]
	].forEach(E(Un, e));
}
//#endregion
//#region src/modules/notepad/inventory/eventHandlers/eventHandlers.js
function Gn(e) {
	B("doMoveItem");
	let t = $(e.target);
	Ke([t.data("inv")], t.val());
}
function Kn(e, t) {
	$(t[0]).on("click", E(t[1], e));
}
function qn(e) {
	[
		["#fshReset", xn],
		["#fshAll", un],
		["#fshNone", _n],
		["#fshDefault", yn]
	].forEach(E(Kn, e));
}
var Jn = (e) => () => {
	B(e);
};
function Yn(e) {
	[
		"fshInvItem",
		"fshMaroon",
		"sorting"
	].forEach((t) => {
		$(e).on("click", `.${t}`, Jn(t));
	});
}
function Xn(e) {
	qn(e), $("table.fshInvFilter").on("click", "input[type=\"checkbox\"]", E(vn, e)), Wn(e), Yn(e);
}
function Zn(e) {
	$("#fshMinLvl, #fshMaxLvl").on("keyup", E(pn, e)), $(e).on("change", "select.fshMoveItem", Gn), Xn(e), Le(e, Jn, B);
}
//#endregion
//#region src/modules/notepad/inventory/filters.js
var Qn = 0;
function $n(e, t) {
	return Ae(Qn, ye(t[1]), G().fshMinLvl, G().fshMaxLvl);
}
function er() {
	Qn = [(e, t, n) => n === 0, ...ke], $.fn.dataTable.ext.search.push($n);
}
function tr() {
	$.fn.dataTable.ext.search.push((e, t, n, r) => !G().checkedElements || G().checkedElements[r.type]);
}
function nr(e) {
	return G().checkedElements[-1] && e.stats && e.stats.set_name !== "";
}
function rr() {
	$.fn.dataTable.ext.search.push((e, t, n, r) => !G().checkedElements?.["-1"] || nr(r));
}
function ir() {
	$.fn.dataTable.ext.search.push((e, t, n, r) => {
		let i = (parseInt(r.rarity, 10) + 100).toString();
		return !G().checkedElements || G().checkedElements[i];
	});
}
//#endregion
//#region src/modules/notepad/inventory/footer/RecallAll.svelte
var ar = p("<div class=\"main svelte-17l9o62\"><div class=\"head svelte-17l9o62\">Recall all visible to</div> <div class=\"btnbox svelte-17l9o62\"><button class=\"custombutton svelte-17l9o62\" type=\"button\">BP</button> <button class=\"custombutton svelte-17l9o62\" type=\"button\">GS</button></div></div>");
function or(e, t) {
	S(t, !1);
	let n = (e) => {
		O("Inventory", "Recall All", e);
	};
	function r() {
		n("toBp"), [...M("span[action=\"take\"]"), ...M("span[mode=\"0\"][action=\"recall\"]")].forEach(j);
	}
	function i() {
		n("toGs"), M("span[mode=\"1\"][action=\"recall\"]").forEach(j);
	}
	re();
	var a = ar(), o = b(m(a), 2), s = m(o), c = b(s, 2);
	x(o), x(a), v("click", s, r), v("click", c, i), g(e, a), T();
}
h(["click"]);
//#endregion
//#region src/modules/notepad/inventory/footer/Repair.svelte
var sr = p("<span class=\"fshGreen\">Recalled</span>"), cr = p("<span class=\"fshSpinner\"></span>"), lr = p("<button class=\"custombutton svelte-nq9151\" type=\"button\">BP</button>"), ur = p("<div class=\"main svelte-nq9151\"><div class=\"head svelte-nq9151\">Recall repairable to</div> <div class=\"btnbox svelte-nq9151\"><!></div> <div class=\"btnbox svelte-nq9151\"> </div></div>");
function dr(e, t) {
	S(t, !0);
	let n = w(t, "fshInv", 3, 0), r = oe(1), i = oe(0), a = se(new DataTable(n()).rows((e, { durability: t, max_durability: n, player_id: r, rarity: i, type: a }) => t < n && r === -1 && i !== 5 && a < 9).data());
	a.length && C(r, 0);
	function o() {
		return Re(a.map(({ inv_id: e }) => e));
	}
	function s() {
		f(i) || C(i, 1);
	}
	var c = ur(), l = b(m(c), 2), u = m(l), ee = (e) => {
		var t = te();
		ae(ne(t), o, (e) => {
			g(e, cr());
		}, (e) => {
			g(e, sr());
		}), g(e, t);
	}, d = (e) => {
		var t = lr();
		y(() => t.disabled = f(r)), v("click", t, s), g(e, t);
	};
	_(u, (e) => {
		f(i) ? e(ee) : e(d, -1);
	}), x(l);
	var p = b(l, 2), h = m(p);
	x(p), x(c), y(() => ie(h, `${a.length ?? ""} items to repair`)), g(e, c), T();
}
h(["click"]);
//#endregion
//#region src/modules/notepad/inventory/footer/Footer.svelte
var fr = p("<!> <!>", 1), pr = p("<div></div>"), mr = p("<div class=\"container svelte-lahil7\"><!></div>");
function hr(e, t) {
	S(t, !0);
	let n = w(t, "fshInv", 3, 0);
	var r = mr(), i = m(r), a = (e) => {
		var t = fr(), r = ne(t);
		or(r, {}), dr(b(r, 2), { get fshInv() {
			return n();
		} }), g(e, t);
	}, o = (e) => {
		g(e, pr());
	};
	_(i, (e) => {
		c.subcmd === "guildinvmgr" ? e(a) : e(o, -1);
	}), x(r), g(e, r), T();
}
//#endregion
//#region src/modules/notepad/inventory/footer/footer.js
function gr(e) {
	d(hr, {
		props: { fshInv: e },
		target: D()
	});
}
//#endregion
//#region src/modules/notepad/inventory/headers.js
var _r = () => I().player_id ? `<b>&nbsp;Inventory Manager</b> ${I().items.length} items (green = worn, blue = backpack)` : `<b>&nbsp;Guild Inventory Manager</b> ${I().items.length} items (maroon = in BP, blue=guild store)`;
function vr() {
	$e() && et(A(e("pF"), ue({ style: { textAlign: "center" } })));
}
function yr() {
	let e = _r();
	de("", D()), vr(), ve(D(), dt.replace("@@reportTitle@@", e));
}
function br() {
	l(I().items) && yr();
}
//#endregion
//#region src/modules/notepad/inventory/setLvls.js
function xr() {
	$("#fshMinLvl").val(G().fshMinLvl), $("#fshMaxLvl").val(G().fshMaxLvl);
}
//#endregion
//#region src/modules/notepad/inventory/inventory.js
var Sr = ([, e]) => [e.id, e];
function Cr() {
	de(`<span id="fshInvMan"><img src = "${a}">&nbsp;Getting inventory data...</span>`, D());
}
async function wr() {
	await Pe(!1), c.membrList &&= ge(k(c.membrList).filter(Xe).map(Sr));
}
function Tr() {
	Je([
		ut,
		er,
		tr,
		rr,
		ir,
		br,
		X,
		xr
	]);
}
function Er(e) {
	Tr();
	let t = ln();
	Zn(t), $("#fshRefresh").on("click", e), lt(t), gr(t);
}
function Dr(e) {
	Er(e);
}
function Or(e) {
	ee(3, Dr, [e]);
}
var kr = () => Object.getOwnPropertyNames(I()).length;
async function Ar(e) {
	let t = [Oe(), st()];
	c.subcmd === "guildinvmgr" && t.push(wr()), t.push(gt()), await N(t), kr() && Or(e);
}
function jr() {
	_e() || !D() || c.subcmd === "guildinvmgr" && !ce() || (Cr(), Ar(jr));
}
//#endregion
export { jr as default };

//# sourceMappingURL=inventory-D8FKVuGY.js.map