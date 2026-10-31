import "./calfSystem-CH6jB11R.js";
import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./system-CNA0YLOa.js";
import { Et as n, ct as r, i, vt as a, xt as o } from "./constants-CenxlFMY.js";
import { t as s } from "./getValue-sxwJaOE3.js";
import { t as c } from "./calf-SqS2SeU4.js";
import { t as l } from "./isArray-jaX-hZZq.js";
import { t as u } from "./fallback-S8GIlBFf.js";
import { t as d } from "./task-97dxbWda.js";
import { B as f, F as p, G as m, H as h, I as ee, L as g, R as te, V as ne, W as _, Z as v, d as re, et as y, ft as b, lt as x, nt as ie, pt as S, q as C, r as ae, rt as w, st as oe, tt as se, yt as T } from "./disclose-version-gxrYovMN.js";
import { t as ce } from "./arrayFrom-CKk6qt2j.js";
import { t as E } from "./partial-Bo20zBni.js";
import { t as D } from "./layout-B2Q1UoM2.js";
import { t as O } from "./sendEvent-yx1DwCDA.js";
import { t as k } from "./currentGuildId-WKn2jVcy.js";
import { t as A } from "./entries-PXiXtjwA.js";
import { t as le } from "./cElement-BrpvG2bS.js";
import { t as ue } from "./createDiv-XU2XBEIv.js";
import { t as j } from "./insertElement-6ZBKaryO.js";
import { t as de } from "./setInnerHtml-f0MFRJnQ.js";
import { t as fe } from "./_dataAccess-BLVLQyDJ.js";
import { t as pe } from "./indexAjaxData-BcvK7Oaz.js";
import { t as me } from "./clickThis-UHuK6eKQ.js";
import { t as M } from "./querySelectorArray-C70U47NF.js";
import { n as he, r as ge } from "./idb-D8xqEbs-.js";
import { t as _e } from "./fromEntries-BytjDDMx.js";
import { t as ve } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as ye } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
import { t as be } from "./intValue-DGRimvm1.js";
import { t as N } from "./all-D5SlTl7_.js";
import { t as xe } from "./hideQTip-BN4jwVBE.js";
import { t as Se } from "./guildStore-BaUrpECC.js";
import { t as Ce } from "./playerId-C1UyEKeb.js";
import { n as we, t as Te } from "./deepClone-BymKwOcu.js";
import { t as Ee } from "./guildInventory-DYPTwtsS.js";
import { t as De } from "./daGuildReport-Cvxeuiet.js";
import { t as Oe } from "./inventory-BxKMawFk.js";
import { t as ke } from "./loadDataTables-Cdl0vjX7.js";
import { n as Ae, t as je } from "./lvlTests-COgocWVb.js";
import { t as Me } from "./changeMinMax-DtLEKbbh.js";
import { t as Ne } from "./daLoadInventory-Cd8q-qGB.js";
import { t as Pe } from "./htmlResult-ChzxOgJl.js";
import { t as Fe } from "./getMembrList-D7ixdxPX.js";
import { t as Ie } from "./flattenItems-CdGE-Amk.js";
import { t as Le } from "./createTable-BfqGIybT.js";
import { t as Re } from "./chromeHandlers-BuUMEajb.js";
import { t as ze } from "./daGsTake-BEeBRbbo.js";
import { n as Be, r as Ve, t as He } from "./useItem-BLx5J27E.js";
import { n as Ue, t as We } from "./queue-Nt3Gnxl5.js";
import { t as Ge } from "./errorDialog-CK0T_lOR.js";
import { n as Ke, r as qe, t as Je } from "./dropItem-6GfRba8s.js";
import { t as Ye } from "./executeAll-C4zl3Iix.js";
import { t as Xe } from "./isSelected-bF3ohqQV.js";
// src/modules/common/notLastUpdate.js
function Ze([e]) {
	return e !== "lastUpdate";
}
// src/modules/_dataAccess/export/enumFolders.js
var Qe = ({ id: e, name: t }) => [e, t];
function $e(e) {
	return l(e?.inventories) ? _e(e.inventories.filter(({ id: e }) => e !== -1).map(Qe)) : [];
}
// src/modules/notepad/inventory/injectError.js
var P = "", et = () => P;
function tt(e, t) {
	P ||= t.message, P && j(e, le("p", {
		className: "fshRed",
		textContent: P
	}));
}
// src/modules/notepad/inventory/buildInv.js
var F = {}, I = () => F;
async function L(e) {
	try {
		return await e();
	} catch (e) {
		if (e.jqXhr.status !== 500) throw e;
		tt(D(), e);
	}
}
var R = (e) => (t) => {
	let n = e.find((e) => e.a === t.inv_id);
	return {
		...t,
		...n?.n && { item_name: n.n }
	};
}, nt = (e) => ({
	...e,
	equipped: !0,
	folder_id: -2
}), rt = (e, t, n) => ({
	folders: $e(e),
	items: t.map(R(n)),
	player_id: Ce()
});
async function it() {
	let [e, t] = await N([L(Oe), Ne()]), n = e?.items ?? [], r = t?.r ?? {};
	return rt(r, n, (r.equipment?.map(nt) ?? []).concat(Ie(r)));
}
var at = (e) => ({
	...e,
	player: { id: -1 }
}), ot = (e, t) => ({
	current_player_id: Ce(),
	items: e.map(R(t)),
	guild_id: k()
});
async function st() {
	let [e, t, n] = await N([
		L(Se),
		De(),
		we()
	]), r = e?.items ?? [], i = t?.r ?? [], a = n?.r ?? [];
	return ot(r, i.concat(a.map(at)));
}
async function ct() {
	c.subcmd === "invmanagernew" ? F = await it() : c.subcmd === "guildinvmgr" && (F = await st());
}
// src/modules/notepad/inventory/eventHandlers/telemetry.js
var z = (e) => {
	O("Inventory", "Header", e);
}, B = (e) => {
	O("Inventory", "Datatable", e);
};
// src/modules/notepad/inventory/clearButton.js
function lt(e, t) {
	B("clearSearch"), t.val(""), $(e).DataTable().search("").draw();
}
function ut(e) {
	let t = $(`#${e.id}_filter input`);
	t.prop("type", "text");
	let n = $("<span>&times;</span>");
	t.wrap($("<span class=\"text-input-wrapper\"/>")), t.after(n), n.on("click", E(lt, e, t));
}
// src/modules/notepad/inventory/decorate.js
function dt() {
	I().folders && (I().folders[-1] = "Main");
}
// src/modules/notepad/inventory/assets.js
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
}, ft = "<table class=\"fshInvFilter\"><tr><th colspan=\"14\">@@reportTitle@@</th><th><span id=\"fshRefresh\" class=\"fshLink\">[Refresh]</span></th></tr><tr><td colspan=\"2\" rowspan=\"3\"><b>&nbsp;Show Items:</b></td><td class=\"fshRight\">&nbsp;Helmet:</td><td><input id=\"fshHelmet\" type=\"checkbox\" item=\"0\"/></td><td class=\"fshRight\">&nbsp;Armor:</td><td><input id=\"fshArmor\" type=\"checkbox\" item=\"1\"/></td><td class=\"fshRight\">&nbsp;Gloves:</td><td><input id=\"fshGloves\" type=\"checkbox\" item=\"2\"/></td><td class=\"fshRight\">&nbsp;Boots:</td><td><input id=\"fshBoots\" type=\"checkbox\" item=\"3\"/></td><td class=\"fshRight\">&nbsp;Weapon:</td><td><input id=\"fshWeapon\" type=\"checkbox\" item=\"4\"/></td><td></td><td class=\"fshRight\">&nbsp;Min lvl:</td><td rowspan=\"2\"><input id=\"fshMinLvl\" class=\"fshNumberInput\" type=\"number\" value=\"1\" min=\"0\"><br><input id=\"fshMaxLvl\" class=\"fshNumberInput\" type=\"number\" value=\"9999\" min=\"0\"></td></tr><tr><td class=\"fshRight\">&nbsp;Shield:</td><td><input id=\"fshShield\" type=\"checkbox\" item=\"5\"/></td><td class=\"fshRight\">&nbsp;Ring:</td><td><input id=\"fshRing\" type=\"checkbox\" item=\"6\"/></td><td class=\"fshRight\">&nbsp;Amulet:</td><td><input id=\"fshAmulet\" type=\"checkbox\" item=\"7\"/></td><td class=\"fshRight\">&nbsp;Rune:</td><td><input id=\"fshRune\" type=\"checkbox\" item=\"8\"/></td><td class=\"fshRight\">&nbsp;Sets Only:</td><td><input id=\"fshSets\" item=\"-1\" type=\"checkbox\"/></td><td></td><td class=\"fshRight\">&nbsp;Max lvl:</td></tr><tr><td colspan=\"2\">&nbsp;[<span id=\"fshAll\" class=\"fshLink\">Select All</span>]</td><td colspan=\"2\">&nbsp;[<span id=\"fshNone\" class=\"fshLink\">Select None</span>]</td><td colspan=\"2\">&nbsp;[<span id=\"fshDefault\" class=\"fshLink\">Defaults</span>]</td><td colspan=\"6\"></td><td><input id=\"fshReset\" type=\"button\" value=\"Reset\"/></td></tr><tr><td class=\"fshRight\">&nbsp;Quest Item:</td><td><input id=\"fshQuest\" item=\"9\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Potion:</td><td><input id=\"fshPotion\" item=\"10\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Resource:</td><td><input id=\"fshResource\" item=\"12\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Recipe:</td><td><input id=\"fshRecipe\" item=\"13\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Container:</td><td><input id=\"fshContainer\" item=\"14\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Frag Stash:</td><td><input id=\"fshStash\" item=\"16\" type=\"checkbox\"/></td><td class=\"fshRight\">&nbsp;Composed:</td><td><input id=\"fshComposed\" item=\"15\" type=\"checkbox\"/></td><td></td></tr><tr><td class=\"fshRight\">&nbsp;Common:</td><td><input id=\"fshCommon\" item=\"100\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Rare:</td><td><input id=\"fshRare\" item=\"101\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Unique:</td><td><input id=\"fshUnique\" item=\"102\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Legendary:</td><td><input id=\"fshLegendary\" item=\"103\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Super Elite:</td><td><input id=\"fshSuperElite\" item=\"104\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Crystalline:</td><td><input id=\"fshCrystalline\" item=\"105\" type=\"checkbox\" checked/></td><td class=\"fshRight\">&nbsp;Epic:</td><td colspan=\"2\"><input id=\"fshEpic\" item=\"106\" type=\"checkbox\" checked/></td></tr></table>", pt = {
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
}, U = {}, mt = 0, ht = 0, W = () => U, gt = () => mt, _t = () => ht;
async function vt() {
	let e = await he(`fsh_${c.subcmd}`);
	U = {
		...Te(V),
		...u(e, {})
	}, mt = s("showQuickDropLinks"), ht = s("showQuickSendLinks");
}
// src/modules/notepad/inventory/render/bpRender.js
function yt(e, t) {
	return e === "display" ? t.player_id === -1 ? `<span class="fshLink takeItem" invid="${t.inv_id}" action="take">BP</span>` : `<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${t.player_id}" mode="0" action="recall">BP</span>` : "BP";
}
function bt(e, t, n) {
	if (!(n.folder_id || n.player_id === I().current_player_id)) return yt(t, n);
}
// src/modules/notepad/inventory/render/craftRender.js
function xt(e) {
	return H[e] ? H[e].abbr : "";
}
// src/modules/notepad/inventory/render/createdRow.js
function St(e) {
	return e.equipped ? "fshGreen" : "fshNavy";
}
function Ct(e) {
	return e.player_id === -1 ? "fshNavy" : "fshMaroon";
}
function wt(e) {
	return e.folder_id ? St(e) : Ct(e);
}
function Tt(e, t) {
	let n = wt(t);
	e.classList.add(n), t.equipped && e.classList.add("fshBold");
}
// src/modules/notepad/inventory/render/dropRender.js
function Et(e) {
	return e.guild_tag !== -1 || e.equipped;
}
function Dt(e, t, n) {
	if (!Et(n)) return t === "display" ? `<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>` : "Drop";
}
// src/modules/notepad/inventory/render/durabilityRender.js
function Ot(e, t, n) {
	if (n.type < 9 && n.max_durability > 0) return Math.floor(n.durability / n.max_durability * 100);
}
// src/modules/notepad/inventory/render/forgeRender.js
function kt(e, t, n) {
	if (n.type < 9) return n.forge;
}
// src/modules/notepad/inventory/render/canRecall.js
function At(e) {
	return e.player_id && e.player_id !== -1;
}
function jt(e) {
	return e.folder_id && e.guild_tag !== -1;
}
function Mt(e) {
	return At(e) || jt(e);
}
// src/modules/notepad/inventory/render/gsRender.js
function Nt(e) {
	return `<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${u(e.player_id, I().player_id)}" mode="1" action="recall">GS</span>`;
}
function Pt(e) {
	return `<span class="fshLink storeItem" invid="${e.inv_id}">GS</span>`;
}
function Ft(e, t, n) {
	return e === "display" ? n(t) : "GS";
}
function It(e) {
	return e.folder_id && !e.bound;
}
function Lt(e, t, n) {
	if (Mt(n)) return Ft(t, n, Nt);
	if (It(n)) return Ft(t, n, Pt);
}
// src/modules/notepad/inventory/render/nameRender.js
function Rt(e) {
	return e.player_id === -1 ? 4 : Mt(e) ? 7 : 1;
}
function zt(e, t, n) {
	return e || (t === -1 ? n : t);
}
function Bt(e) {
	return e.stats && e.stats.set_name !== "";
}
function Vt(e, t) {
	let r = Rt(t), a = zt(I().player_id, t.player_id, I().guild_id), o = "";
	return Bt(t) && (o = ` (<span class="fshLink setName" set="${t.stats.set_name}">set</span>)`), `<a href="${i}${e}" class="fshInvItem tip-dynamic ${n[t.rarity].clas}" data-tipped="fetchitem.php?item_id=${t.item_id}&inv_id=${t.inv_id}&t=${r}&p=${a}">${e}</a>${o}`;
}
function Ht(e, t, n) {
	return t === "display" ? Vt(e, n) : e;
}
// src/modules/notepad/inventory/render/sendRender.js
function Ut(e) {
	return e.equipped || e.guild_tag === -1 && e.bound;
}
function Wt(e, t, n) {
	if (!Ut(n)) return t === "display" ? `<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>` : "Send";
}
// src/modules/notepad/inventory/render/wearUseRender.js
function Gt(e) {
	return e.folder_id && !e.equipped;
}
function Kt(e) {
	return e.player_id && !e.equipped && e.player_id === I().current_player_id;
}
var qt = [
	[(e) => e.player_id && e.player_id === -1, (e, t) => `takeItem" action="${t.a}`],
	[(e) => e.player_id && e.player_id !== I().current_player_id, (e, t) => `recallItem" playerid="${e.player_id}" mode="0" action="${t.a}`],
	[(e) => Gt(e) || Kt(e), (e, t) => t.c]
];
function Jt(e, t) {
	let n = qt.find(([t]) => t(e));
	return n ? `<span class="fshLink ${n[1](e, t)}" invid="${e.inv_id}">${t.b}</span>` : "";
}
function Yt(e, t, n) {
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
	if (r === 1) return Jt(n, {
		a: "wear",
		b: "Wear",
		c: "wearItem"
	});
	if (r === 2) return Jt(n, {
		a: "use",
		b: "Use",
		c: "useItem"
	});
}
// src/modules/notepad/inventory/render/whereData.js
function G(e) {
	return u(e.folder_id, e.player_id);
}
// src/modules/notepad/inventory/render/playerName.js
function K(e) {
	return c.membrList[e] ? c.membrList[e].username : "???";
}
// src/modules/notepad/inventory/render/whereRender.js
function Xt(e) {
	return e.equipped ? -2 : e.folder_id;
}
function Zt(e, t, n) {
	return n.folder_id ? Xt(n) : n.player_id === -1 ? "~" : K(n.player_id);
}
// src/modules/notepad/inventory/render/whereRenderDisplay.js
function Qt(e) {
	return e.player_id === -1 ? "Guild Store" : `<a class="fshMaroon" href="${o}${e.player_id}">${K(e.player_id)}</a>`;
}
function $t(e, t) {
	return e[0] - t[0];
}
function en(e, t) {
	return `<option value="${t[0]}"${Xe(Number(t[0]), e)}>${t[1]}</option>`;
}
function tn(e, t) {
	return A(t).sort($t).map(E(en, e)).join("");
}
function nn(e, t, n) {
	return n.player_id ? Qt(n) : n.equipped ? "Worn" : `<select class="fshMoveItem" data-inv="${n.inv_id}">${tn(n.folder_id, I().folders)}</select>`;
}
// src/modules/notepad/inventory/render/whereRenderFilter.js
function rn(e) {
	return e.player_id === -1 ? "Guild Store" : K(e.player_id);
}
function an(e, t, n) {
	return n.player_id ? rn(n) : n.equipped ? "Worn" : I().folders[n.folder_id];
}
// src/modules/notepad/inventory/doTable.js
var on = [
	{
		title: "Name",
		data: "item_name",
		render: Ht
	},
	{
		title: "Level",
		data: "stats.min_level"
	},
	{
		title: "Where",
		data: G,
		render: {
			_: Zt,
			display: nn,
			filter: an
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
		render: kt
	},
	{
		title: "Craft",
		data: "craft",
		render: {
			_(e) {
				return H[e] ? H[e].index : 0;
			},
			display: xt,
			filter: xt
		}
	},
	{
		title: "Du%",
		data: "durability",
		render: Ot
	},
	{
		title: "BP",
		data: G,
		render: bt
	},
	{
		title: "GS",
		data: G,
		render: Lt
	},
	{
		title: "W/U",
		data: "type",
		render: Yt
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
		render: Dt
	},
	{
		title: "Send",
		data: "type",
		render: Wt
	}
];
function q() {
	return "player_id" in I();
}
function sn() {
	return q() ? "fshUserInv" : "fshGuildInv";
}
function cn() {
	let e = Le({
		className: "hover fshXSmall",
		id: sn()
	});
	return j(D(), e), e;
}
function ln(e) {
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
		columns: on,
		createdRow: Tt,
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
function un(e) {
	[
		[12, "current_player_id" in I()],
		[17, q() && gt()],
		[18, q() && _t()]
	].forEach(([t, n]) => e.column(t).visible(n));
}
function dn() {
	let e = cn();
	return un(ln(e)), e;
}
// src/modules/notepad/inventory/saveOptions.js
function J(e) {
	ge(`fsh_${c.subcmd}`, e);
}
// src/modules/notepad/inventory/setChecks.js
function Y() {
	M("table.fshInvFilter input[type=\"checkbox\"]").forEach((e) => {
		e.checked = W().checkedElements[e.getAttribute("item")] === 1;
	}), J(W());
}
// src/modules/notepad/inventory/eventHandlers/allChecks.js
function fn(e) {
	z("Select All"), W().checkedElements = pt, Y(), $(e).DataTable().draw(!1);
}
// src/modules/notepad/inventory/eventHandlers/changeLvls.js
function pn(e, t) {
	W().fshMinLvl = e, W().fshMaxLvl = t, J(W());
}
function mn(e) {
	$(e).DataTable().draw(!1);
}
function hn(e) {
	z("changeLvls"), Me(pn, E(mn, e));
}
// src/modules/notepad/inventory/eventHandlers/clearChecks.js
function gn(e) {
	return Number(e[0]) >= 100;
}
function _n(e, t) {
	return e[t[0]] = t[1], e;
}
function vn(e) {
	return A(e).filter(gn).reduce(_n, {});
}
function yn(e) {
	z("Select None"), W().checkedElements = vn(W().checkedElements), Y(), $(e).DataTable().draw();
}
// src/modules/notepad/inventory/eventHandlers/getChecks.js
function bn(e) {
	z("Checkbox"), W().checkedElements = {}, M("table.fshInvFilter input[type=\"checkbox\"][item]:checked").forEach((e) => {
		W().checkedElements[e.getAttribute("item")] = 1;
	}), J(W()), $(e).DataTable().draw(!1);
}
// src/modules/notepad/inventory/eventHandlers/resetChecks.js
function xn(e) {
	z("Defaults"), W().checkedElements = V.checkedElements, Y(), $(e).DataTable().draw(!1);
}
// src/modules/notepad/inventory/eventHandlers/resetLvls.js
function Sn(e) {
	$("#fshMinLvl").val(W().fshMinLvl), $("#fshMaxLvl").val(W().fshMaxLvl), $(e).DataTable().draw(!1);
}
function Cn(e) {
	z("Reset levels"), W().fshMinLvl = V.fshMinLvl, W().fshMaxLvl = V.fshMaxLvl, J(W()), Sn(e);
}
// src/modules/ajax/ajaxSendItems.js
async function wn(e) {
	let t = await Ke(e);
	return Be(t);
}
// src/modules/app/guild/inventory/dostoreitems.js
function Tn(e) {
	return Ee({
		subcmd2: "dostoreitems",
		items: e
	});
}
// src/modules/_dataAccess/daStoreItems.js
async function En(e) {
	let t = await pe({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "dostoreitems",
		storeIndex: e
	});
	return Pe(t);
}
function Dn(e) {
	return fe(Tn, En, e);
}
// src/modules/ajax/storeItems.js
async function On(e) {
	let t = await Dn(e);
	return Ge(t), Be(t);
}
// src/modules/notepad/inventory/eventHandlers/doAction.js
function kn(e) {
	e.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass();
}
function An(e, t) {
	e.eq(t).empty();
}
function jn(e) {
	[
		2,
		12,
		13,
		14,
		15,
		16
	].forEach(E(An, e));
}
function Mn(e, t) {
	if (t.r === 1) return;
	let n = e.closest("tr");
	jn($("td", n)), n.css("text-decoration", "line-through");
}
function Nn(e) {
	e.empty().append(`<img src="${t}ui/misc/spinner.gif" width="11" height="11">`);
}
async function X(e, t) {
	xe(t), kn(t), Nn(t);
	let n = await e();
	n && Mn(t, n);
}
// src/modules/notepad/inventory/eventHandlers/spanClickHandlers.js
function Pn(e, t) {
	B("setName"), $(e).DataTable().search(t.attr("set")).draw(), $(`#${e.id}_filter input`).trigger("focus");
}
function Fn(e) {
	B("takeItem"), X(E(Ue, e.attr("invid"), e.attr("action")), e);
}
function In(e) {
	B("recallItem"), X(E(We, e.attr("invid"), e.attr("playerid"), e.attr("mode"), e.attr("action")), e);
}
function Z(e, t, n, r) {
	B(n), X(E(e, t), r);
}
function Ln(e) {
	Z(On, [e.attr("invid")], "doStoreItem", e);
}
function Rn(e, t, n) {
	Z(e, n.attr("invid"), t, n);
}
var zn = (e) => Rn(He, "doUseItem", e), Bn = (e) => Rn(Ve, "doWearItem", e);
function Vn(e, t, n) {
	Z(e, [n.data("inv")], t, n);
}
var Hn = (e) => Vn(Je, "doDropItem", e), Un = (e) => Vn(wn, "doSendItem", e), Wn = (e) => (t) => e($(t.target));
function Gn(e, [t, n]) {
	$(e).on("click", `span.${t}`, Wn(n));
}
function Kn(e) {
	[
		["dropItem", Hn],
		["recallItem", In],
		["sendItem", Un],
		["setName", E(Pn, e)],
		["storeItem", Ln],
		["takeItem", Fn],
		["useItem", zn],
		["wearItem", Bn]
	].forEach(E(Gn, e));
}
// src/modules/notepad/inventory/eventHandlers/eventHandlers.js
function qn(e) {
	B("doMoveItem");
	let t = $(e.target);
	qe([t.data("inv")], t.val());
}
function Jn(e, t) {
	$(t[0]).on("click", E(t[1], e));
}
function Yn(e) {
	[
		["#fshReset", Cn],
		["#fshAll", fn],
		["#fshNone", yn],
		["#fshDefault", xn]
	].forEach(E(Jn, e));
}
var Xn = (e) => () => {
	B(e);
};
function Zn(e) {
	[
		"fshInvItem",
		"fshMaroon",
		"sorting"
	].forEach((t) => {
		$(e).on("click", `.${t}`, Xn(t));
	});
}
function Qn(e) {
	Yn(e), $("table.fshInvFilter").on("click", "input[type=\"checkbox\"]", E(bn, e)), Kn(e), Zn(e);
}
function $n(e) {
	$("#fshMinLvl, #fshMaxLvl").on("keyup", E(hn, e)), $(e).on("change", "select.fshMoveItem", qn), Qn(e), Re(e, Xn, B);
}
// src/modules/notepad/inventory/filters.js
var Q = 0;
function er(e, t) {
	return je(Q, be(t[1]), W().fshMinLvl, W().fshMaxLvl);
}
function tr() {
	Q = [(e, t, n) => n === 0, ...Ae], $.fn.dataTable.ext.search.push(er);
}
function nr() {
	$.fn.dataTable.ext.search.push((e, t, n, r) => !W().checkedElements || W().checkedElements[r.type]);
}
function rr(e) {
	return W().checkedElements[-1] && e.stats && e.stats.set_name !== "";
}
function ir() {
	$.fn.dataTable.ext.search.push((e, t, n, r) => !W().checkedElements?.["-1"] || rr(r));
}
function ar() {
	$.fn.dataTable.ext.search.push((e, t, n, r) => {
		let i = (parseInt(r.rarity, 10) + 100).toString();
		return !W().checkedElements || W().checkedElements[i];
	});
}
// src/modules/notepad/inventory/footer/RecallAll.svelte
var or = h("<div class=\"main svelte-17l9o62\"><div class=\"head svelte-17l9o62\">Recall all visible to</div> <div class=\"btnbox svelte-17l9o62\"><button class=\"custombutton svelte-17l9o62\" type=\"button\">BP</button> <button class=\"custombutton svelte-17l9o62\" type=\"button\">GS</button></div></div>");
function sr(e, t) {
	S(t, !1);
	let n = (e) => {
		O("Inventory", "Recall All", e);
	};
	function r() {
		n("toBp"), [...M("span[action=\"take\"]"), ...M("span[mode=\"0\"][action=\"recall\"]")].forEach(me);
	}
	function i() {
		n("toGs"), M("span[mode=\"1\"][action=\"recall\"]").forEach(me);
	}
	re();
	var a = or(), o = w(y(a), 2), s = y(o), c = w(s, 2);
	T(o), T(a), m("click", s, r), m("click", c, i), f(e, a), b();
}
_(["click"]);
// src/modules/notepad/inventory/footer/Repair.svelte
var cr = h("<span class=\"fshGreen\">Recalled</span>"), lr = h("<span class=\"fshSpinner\"></span>"), ur = h("<button class=\"custombutton svelte-nq9151\" type=\"button\">BP</button>"), dr = h("<div class=\"main svelte-nq9151\"><div class=\"head svelte-nq9151\">Recall repairable to</div> <div class=\"btnbox svelte-nq9151\"><!></div> <div class=\"btnbox svelte-nq9151\"> </div></div>");
function fr(e, t) {
	S(t, !0);
	let n = ae(t, "fshInv", 3, 0), r = x(1), i = x(0), a = new DataTable(n()).rows((e, { durability: t, max_durability: n, player_id: r, rarity: i, type: a }) => t < n && r === -1 && i !== 5 && a < 9), o = ce(a.data());
	o.length && oe(r, 0);
	function s() {
		return ze(o.map(({ inv_id: e }) => e));
	}
	function c() {
		C(i) || oe(i, 1);
	}
	var l = dr(), u = w(y(l), 2), d = y(u), h = (e) => {
		var t = ne(), n = se(t);
		ee(n, s, (e) => {
			var t = lr();
			f(e, t);
		}, (e) => {
			var t = cr();
			f(e, t);
		}), f(e, t);
	}, g = (e) => {
		var t = ur();
		v(() => t.disabled = C(r)), m("click", t, c), f(e, t);
	};
	p(d, (e) => {
		C(i) ? e(h) : e(g, -1);
	}), T(u);
	var _ = w(u, 2), re = ie(_);
	T(l), v(() => te(re, `${o.length ?? ""} items to repair`)), f(e, l), b();
}
_(["click"]);
// src/modules/notepad/inventory/footer/Footer.svelte
var pr = h("<!> <!>", 1), mr = h("<div></div>"), hr = h("<div class=\"container svelte-lahil7\"><!></div>");
function gr(e, t) {
	S(t, !0);
	let n = ae(t, "fshInv", 3, 0);
	var r = hr(), i = y(r), a = (e) => {
		var t = pr(), r = se(t);
		sr(r, {}), fr(w(r, 2), { get fshInv() {
			return n();
		} }), f(e, t);
	}, o = (e) => {
		var t = mr();
		f(e, t);
	};
	p(i, (e) => {
		c.subcmd === "guildinvmgr" ? e(a) : e(o, -1);
	}), T(r), f(e, r), b();
}
// src/modules/notepad/inventory/footer/footer.js
function _r(e) {
	g(gr, {
		props: { fshInv: e },
		target: D()
	});
}
// src/modules/notepad/inventory/headers.js
var vr = () => I().player_id ? `<b>&nbsp;Inventory Manager</b> ${I().items.length} items (green = worn, blue = backpack)` : `<b>&nbsp;Guild Inventory Manager</b> ${I().items.length} items (maroon = in BP, blue=guild store)`;
function yr() {
	et() && tt(j(e("pF"), ue({ style: { textAlign: "center" } })));
}
function br() {
	let e = vr();
	de("", D()), yr(), ye(D(), ft.replace("@@reportTitle@@", e));
}
function xr() {
	l(I().items) && br();
}
// src/modules/notepad/inventory/setLvls.js
function Sr() {
	$("#fshMinLvl").val(W().fshMinLvl), $("#fshMaxLvl").val(W().fshMaxLvl);
}
// src/modules/notepad/inventory/inventory.js
var Cr = ([, e]) => [e.id, e];
function wr() {
	de(`<span id="fshInvMan"><img src = "${a}">&nbsp;Getting inventory data...</span>`, D());
}
async function Tr() {
	await Fe(!1), c.membrList && (c.membrList = _e(A(c.membrList).filter(Ze).map(Cr)));
}
function Er() {
	Ye([
		dt,
		tr,
		nr,
		ir,
		ar,
		xr,
		Y,
		Sr
	]);
}
function Dr(e) {
	Er();
	let t = dn();
	$n(t), $("#fshRefresh").on("click", e), ut(t), _r(t);
}
function Or(e) {
	Dr(e);
}
function kr(e) {
	d(3, Or, [e]);
}
var Ar = () => Object.getOwnPropertyNames(I()).length;
async function jr(e) {
	let t = [ke(), ct()];
	c.subcmd === "guildinvmgr" && t.push(Tr()), t.push(vt()), await N(t), Ar() && kr(e);
}
function Mr() {
	!ve() && D() && (c.subcmd !== "guildinvmgr" || k()) && (wr(), jr(Mr));
}
export { Mr as default };

//# sourceMappingURL=inventory-y2zZ-k7l.js.map