import { t as e } from "./getMembrList-DQELBcHH.js";
import { t } from "./all-D5SlTl7_.js";
import { t as n } from "./currentGuildId-Bpd4l1O8.js";
import { t as r } from "./entries-PXiXtjwA.js";
import { t as i } from "./executeAll-C4zl3Iix.js";
import { t as a } from "./fromEntries-BytjDDMx.js";
import { t as o } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as s } from "./loadDataTables-C8-xI5vr.js";
import { t as c } from "./setInnerHtml-f0MFRJnQ.js";
import { t as l } from "./calf-SqS2SeU4.js";
import { Et as u, ct as d, i as ee, vt as f, xt as te } from "./constants-CenxlFMY.js";
import { t as p } from "./layout-B2Q1UoM2.js";
import { t as ne } from "./task-C5UKL2RH.js";
import { n as re, t as ie } from "./deepClone-BWJJ4zJS.js";
import { t as ae } from "./daGuildReport-i6VvPcLw.js";
import { t as oe } from "./daLoadInventory-CwrdDsg7.js";
import { t as m } from "./isArray-jaX-hZZq.js";
import { t as se } from "./flattenItems-CdGE-Amk.js";
import { t as ce } from "./guildStore-DQga8iGe.js";
import { t as le } from "./inventory-BG4i9XuW.js";
import { t as h } from "./playerId-C1UyEKeb.js";
import { t as ue } from "./cElement-Dj5A9-NC.js";
import { t as g } from "./insertElement-6ZBKaryO.js";
import { t as _ } from "./partial-Bo20zBni.js";
import { t as v } from "./sendEvent-Co2_qySS.js";
import { t as de } from "./createTable-C2iQ5tWe.js";
import { t as y } from "./fallback-S8GIlBFf.js";
import { t as b } from "./getValue-vrUqpo0a.js";
import { n as fe, r as pe } from "./idb-D8xqEbs-.js";
import { t as me } from "./isSelected-bF3ohqQV.js";
import { n as he, r as ge, t as _e } from "./dropItem-CBsUjGY5.js";
import { t as x } from "./querySelectorArray-C70U47NF.js";
import { t as ve } from "./changeMinMax-DtLEKbbh.js";
import { t as ye } from "./chromeHandlers-BuUMEajb.js";
import { n as be, r as xe, t as Se } from "./useItem-Wcp_ihj0.js";
import { t as Ce } from "./indexAjaxData-BAm_dTyc.js";
import { t as we } from "./guildInventory-Cb6J3fhR.js";
import { t as Te } from "./_dataAccess-BLVLQyDJ.js";
import { t as Ee } from "./htmlResult-ChzxOgJl.js";
import { t as De } from "./errorDialog-CK0T_lOR.js";
import { n as Oe, t as ke } from "./queue-DLMhUoaF.js";
import { t as Ae } from "./hideQTip-BN4jwVBE.js";
import { t as je } from "./system-CNA0YLOa.js";
import { n as Me, t as Ne } from "./lvlTests-COgocWVb.js";
import { t as Pe } from "./intValue-DGRimvm1.js";
import { B as S, F as Fe, G as C, H as w, I as Ie, L as Le, R as Re, V as ze, W as Be, Z as T, d as Ve, et as E, ft as D, lt as O, nt as He, pt as k, q as A, r as Ue, rt as j, st as We, tt as Ge, yt as M } from "./disclose-version-Cj0Bwtvz.js";
import "./calfSystem-Bw3VlPbV.js";
import { t as Ke } from "./clickThis-UHuK6eKQ.js";
import { t as qe } from "./daGsTake-wNhCEtLa.js";
import { t as Je } from "./arrayFrom-CKk6qt2j.js";
import { t as Ye } from "./createDiv-B84RqGfo.js";
import { t as Xe } from "./getElementById-C08-3H-C.js";
import { t as Ze } from "./insertHtmlBeforeEnd-BeTCe6bo.js";
// src/modules/common/notLastUpdate.js
function Qe([e]) {
	return e !== "lastUpdate";
}
// src/modules/_dataAccess/export/enumFolders.js
var $e = ({ id: e, name: t }) => [e, t];
function et(e) {
	return m(e?.inventories) ? a(e.inventories.filter(({ id: e }) => e !== -1).map($e)) : [];
}
// src/modules/notepad/inventory/injectError.js
var N = "", tt = () => N;
function P(e, t) {
	N ||= t.message, N && g(e, ue("p", {
		className: "fshRed",
		textContent: N
	}));
}
// src/modules/notepad/inventory/buildInv.js
var F = {}, I = () => F;
async function L(e) {
	try {
		return await e();
	} catch (e) {
		if (e.jqXhr.status !== 500) throw e;
		P(p(), e);
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
	folders: et(e),
	items: t.map(R(n)),
	player_id: h()
});
async function it() {
	let [e, n] = await t([L(le), oe()]), r = e?.items ?? [], i = n?.r ?? {};
	return rt(i, r, (i.equipment?.map(nt) ?? []).concat(se(i)));
}
var at = (e) => ({
	...e,
	player: { id: -1 }
}), ot = (e, t) => ({
	current_player_id: h(),
	items: e.map(R(t)),
	guild_id: n()
});
async function st() {
	let [e, n, r] = await t([
		L(ce),
		ae(),
		re()
	]), i = e?.items ?? [], a = n?.r ?? [], o = r?.r ?? [];
	return ot(i, a.concat(o.map(at)));
}
async function ct() {
	l.subcmd === "invmanagernew" ? F = await it() : l.subcmd === "guildinvmgr" && (F = await st());
}
// src/modules/notepad/inventory/eventHandlers/telemetry.js
var z = (e) => {
	v("Inventory", "Header", e);
}, B = (e) => {
	v("Inventory", "Datatable", e);
};
// src/modules/notepad/inventory/clearButton.js
function lt(e, t) {
	B("clearSearch"), t.val(""), $(e).DataTable().search("").draw();
}
function ut(e) {
	let t = $(`#${e.id}_filter input`);
	t.prop("type", "text");
	let n = $("<span>&times;</span>");
	t.wrap($("<span class=\"text-input-wrapper\"/>")), t.after(n), n.on("click", _(lt, e, t));
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
}, U = {}, W = 0, mt = 0, G = () => U, ht = () => W, gt = () => mt;
async function _t() {
	let e = await fe(`fsh_${l.subcmd}`);
	U = {
		...ie(V),
		...y(e, {})
	}, W = b("showQuickDropLinks"), mt = b("showQuickSendLinks");
}
// src/modules/notepad/inventory/render/bpRender.js
function vt(e, t) {
	return e === "display" ? t.player_id === -1 ? `<span class="fshLink takeItem" invid="${t.inv_id}" action="take">BP</span>` : `<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${t.player_id}" mode="0" action="recall">BP</span>` : "BP";
}
function yt(e, t, n) {
	if (!(n.folder_id || n.player_id === I().current_player_id)) return vt(t, n);
}
// src/modules/notepad/inventory/render/craftRender.js
function bt(e) {
	return H[e] ? H[e].abbr : "";
}
// src/modules/notepad/inventory/render/createdRow.js
function xt(e) {
	return e.equipped ? "fshGreen" : "fshNavy";
}
function St(e) {
	return e.player_id === -1 ? "fshNavy" : "fshMaroon";
}
function Ct(e) {
	return e.folder_id ? xt(e) : St(e);
}
function wt(e, t) {
	let n = Ct(t);
	e.classList.add(n), t.equipped && e.classList.add("fshBold");
}
// src/modules/notepad/inventory/render/dropRender.js
function Tt(e) {
	return e.guild_tag !== -1 || e.equipped;
}
function Et(e, t, n) {
	if (!Tt(n)) return t === "display" ? `<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>` : "Drop";
}
// src/modules/notepad/inventory/render/durabilityRender.js
function Dt(e, t, n) {
	if (n.type < 9 && n.max_durability > 0) return Math.floor(n.durability / n.max_durability * 100);
}
// src/modules/notepad/inventory/render/forgeRender.js
function Ot(e, t, n) {
	if (n.type < 9) return n.forge;
}
// src/modules/notepad/inventory/render/canRecall.js
function kt(e) {
	return e.player_id && e.player_id !== -1;
}
function At(e) {
	return e.folder_id && e.guild_tag !== -1;
}
function jt(e) {
	return kt(e) || At(e);
}
// src/modules/notepad/inventory/render/gsRender.js
function Mt(e) {
	return `<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${y(e.player_id, I().player_id)}" mode="1" action="recall">GS</span>`;
}
function Nt(e) {
	return `<span class="fshLink storeItem" invid="${e.inv_id}">GS</span>`;
}
function Pt(e, t, n) {
	return e === "display" ? n(t) : "GS";
}
function Ft(e) {
	return e.folder_id && !e.bound;
}
function It(e, t, n) {
	if (jt(n)) return Pt(t, n, Mt);
	if (Ft(n)) return Pt(t, n, Nt);
}
// src/modules/notepad/inventory/render/nameRender.js
function Lt(e) {
	return e.player_id === -1 ? 4 : jt(e) ? 7 : 1;
}
function Rt(e, t, n) {
	return e || (t === -1 ? n : t);
}
function zt(e) {
	return e.stats && e.stats.set_name !== "";
}
function Bt(e, t) {
	let n = Lt(t), r = Rt(I().player_id, t.player_id, I().guild_id), i = "";
	return zt(t) && (i = ` (<span class="fshLink setName" set="${t.stats.set_name}">set</span>)`), `<a href="${ee}${e}" class="fshInvItem tip-dynamic ${u[t.rarity].clas}" data-tipped="fetchitem.php?item_id=${t.item_id}&inv_id=${t.inv_id}&t=${n}&p=${r}">${e}</a>${i}`;
}
function Vt(e, t, n) {
	return t === "display" ? Bt(e, n) : e;
}
// src/modules/notepad/inventory/render/sendRender.js
function Ht(e) {
	return e.equipped || e.guild_tag === -1 && e.bound;
}
function Ut(e, t, n) {
	if (!Ht(n)) return t === "display" ? `<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>` : "Send";
}
// src/modules/notepad/inventory/render/wearUseRender.js
function Wt(e) {
	return e.folder_id && !e.equipped;
}
function Gt(e) {
	return e.player_id && !e.equipped && e.player_id === I().current_player_id;
}
var Kt = [
	[(e) => e.player_id && e.player_id === -1, (e, t) => `takeItem" action="${t.a}`],
	[(e) => e.player_id && e.player_id !== I().current_player_id, (e, t) => `recallItem" playerid="${e.player_id}" mode="0" action="${t.a}`],
	[(e) => Wt(e) || Gt(e), (e, t) => t.c]
];
function qt(e, t) {
	let n = Kt.find(([t]) => t(e));
	return n ? `<span class="fshLink ${n[1](e, t)}" invid="${e.inv_id}">${t.b}</span>` : "";
}
function Jt(e, t, n) {
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
	if (r === 1) return qt(n, {
		a: "wear",
		b: "Wear",
		c: "wearItem"
	});
	if (r === 2) return qt(n, {
		a: "use",
		b: "Use",
		c: "useItem"
	});
}
// src/modules/notepad/inventory/render/whereData.js
function K(e) {
	return y(e.folder_id, e.player_id);
}
// src/modules/notepad/inventory/render/playerName.js
function q(e) {
	return l.membrList[e] ? l.membrList[e].username : "???";
}
// src/modules/notepad/inventory/render/whereRender.js
function Yt(e) {
	return e.equipped ? -2 : e.folder_id;
}
function Xt(e, t, n) {
	return n.folder_id ? Yt(n) : n.player_id === -1 ? "~" : q(n.player_id);
}
// src/modules/notepad/inventory/render/whereRenderDisplay.js
function Zt(e) {
	return e.player_id === -1 ? "Guild Store" : `<a class="fshMaroon" href="${te}${e.player_id}">${q(e.player_id)}</a>`;
}
function Qt(e, t) {
	return e[0] - t[0];
}
function $t(e, t) {
	return `<option value="${t[0]}"${me(Number(t[0]), e)}>${t[1]}</option>`;
}
function en(e, t) {
	return r(t).sort(Qt).map(_($t, e)).join("");
}
function tn(e, t, n) {
	return n.player_id ? Zt(n) : n.equipped ? "Worn" : `<select class="fshMoveItem" data-inv="${n.inv_id}">${en(n.folder_id, I().folders)}</select>`;
}
// src/modules/notepad/inventory/render/whereRenderFilter.js
function nn(e) {
	return e.player_id === -1 ? "Guild Store" : q(e.player_id);
}
function rn(e, t, n) {
	return n.player_id ? nn(n) : n.equipped ? "Worn" : I().folders[n.folder_id];
}
// src/modules/notepad/inventory/doTable.js
var an = [
	{
		title: "Name",
		data: "item_name",
		render: Vt
	},
	{
		title: "Level",
		data: "stats.min_level"
	},
	{
		title: "Where",
		data: K,
		render: {
			_: Xt,
			display: tn,
			filter: rn
		}
	},
	{
		title: "Type",
		data: "type",
		render(e) {
			return d[e];
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
		render: Ot
	},
	{
		title: "Craft",
		data: "craft",
		render: {
			_(e) {
				return H[e] ? H[e].index : 0;
			},
			display: bt,
			filter: bt
		}
	},
	{
		title: "Du%",
		data: "durability",
		render: Dt
	},
	{
		title: "BP",
		data: K,
		render: yt
	},
	{
		title: "GS",
		data: K,
		render: It
	},
	{
		title: "W/U",
		data: "type",
		render: Jt
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
		render: Et
	},
	{
		title: "Send",
		data: "type",
		render: Ut
	}
];
function J() {
	return "player_id" in I();
}
function on() {
	return J() ? "fshUserInv" : "fshGuildInv";
}
function sn() {
	let e = de({
		className: "hover fshXSmall",
		id: on()
	});
	return g(p(), e), e;
}
function cn(e) {
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
		columns: an,
		createdRow: wt,
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
function ln(e) {
	[
		[12, "current_player_id" in I()],
		[17, J() && ht()],
		[18, J() && gt()]
	].forEach(([t, n]) => e.column(t).visible(n));
}
function un() {
	let e = sn();
	return ln(cn(e)), e;
}
// src/modules/notepad/inventory/saveOptions.js
function Y(e) {
	pe(`fsh_${l.subcmd}`, e);
}
// src/modules/notepad/inventory/setChecks.js
function X() {
	x("table.fshInvFilter input[type=\"checkbox\"]").forEach((e) => {
		e.checked = G().checkedElements[e.getAttribute("item")] === 1;
	}), Y(G());
}
// src/modules/notepad/inventory/eventHandlers/allChecks.js
function dn(e) {
	z("Select All"), G().checkedElements = pt, X(), $(e).DataTable().draw(!1);
}
// src/modules/notepad/inventory/eventHandlers/changeLvls.js
function fn(e, t) {
	G().fshMinLvl = e, G().fshMaxLvl = t, Y(G());
}
function pn(e) {
	$(e).DataTable().draw(!1);
}
function mn(e) {
	z("changeLvls"), ve(fn, _(pn, e));
}
// src/modules/notepad/inventory/eventHandlers/clearChecks.js
function hn(e) {
	return Number(e[0]) >= 100;
}
function gn(e, t) {
	return e[t[0]] = t[1], e;
}
function _n(e) {
	return r(e).filter(hn).reduce(gn, {});
}
function vn(e) {
	z("Select None"), G().checkedElements = _n(G().checkedElements), X(), $(e).DataTable().draw();
}
// src/modules/notepad/inventory/eventHandlers/getChecks.js
function yn(e) {
	z("Checkbox"), G().checkedElements = {}, x("table.fshInvFilter input[type=\"checkbox\"][item]:checked").forEach((e) => {
		G().checkedElements[e.getAttribute("item")] = 1;
	}), Y(G()), $(e).DataTable().draw(!1);
}
// src/modules/notepad/inventory/eventHandlers/resetChecks.js
function bn(e) {
	z("Defaults"), G().checkedElements = V.checkedElements, X(), $(e).DataTable().draw(!1);
}
// src/modules/notepad/inventory/eventHandlers/resetLvls.js
function xn(e) {
	$("#fshMinLvl").val(G().fshMinLvl), $("#fshMaxLvl").val(G().fshMaxLvl), $(e).DataTable().draw(!1);
}
function Sn(e) {
	z("Reset levels"), G().fshMinLvl = V.fshMinLvl, G().fshMaxLvl = V.fshMaxLvl, Y(G()), xn(e);
}
// src/modules/ajax/ajaxSendItems.js
async function Cn(e) {
	let t = await he(e);
	return be(t);
}
// src/modules/app/guild/inventory/dostoreitems.js
function wn(e) {
	return we({
		subcmd2: "dostoreitems",
		items: e
	});
}
// src/modules/_dataAccess/daStoreItems.js
async function Tn(e) {
	let t = await Ce({
		cmd: "guild",
		subcmd: "inventory",
		subcmd2: "dostoreitems",
		storeIndex: e
	});
	return Ee(t);
}
function En(e) {
	return Te(wn, Tn, e);
}
// src/modules/ajax/storeItems.js
async function Dn(e) {
	let t = await En(e);
	return De(t), be(t);
}
// src/modules/notepad/inventory/eventHandlers/doAction.js
function On(e) {
	e.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass();
}
function kn(e, t) {
	e.eq(t).empty();
}
function An(e) {
	[
		2,
		12,
		13,
		14,
		15,
		16
	].forEach(_(kn, e));
}
function jn(e, t) {
	if (t.r === 1) return;
	let n = e.closest("tr");
	An($("td", n)), n.css("text-decoration", "line-through");
}
function Mn(e) {
	e.empty().append(`<img src="${je}ui/misc/spinner.gif" width="11" height="11">`);
}
async function Z(e, t) {
	Ae(t), On(t), Mn(t);
	let n = await e();
	n && jn(t, n);
}
// src/modules/notepad/inventory/eventHandlers/spanClickHandlers.js
function Nn(e, t) {
	B("setName"), $(e).DataTable().search(t.attr("set")).draw(), $(`#${e.id}_filter input`).trigger("focus");
}
function Pn(e) {
	B("takeItem"), Z(_(Oe, e.attr("invid"), e.attr("action")), e);
}
function Fn(e) {
	B("recallItem"), Z(_(ke, e.attr("invid"), e.attr("playerid"), e.attr("mode"), e.attr("action")), e);
}
function Q(e, t, n, r) {
	B(n), Z(_(e, t), r);
}
function In(e) {
	Q(Dn, [e.attr("invid")], "doStoreItem", e);
}
function Ln(e, t, n) {
	Q(e, n.attr("invid"), t, n);
}
var Rn = (e) => Ln(Se, "doUseItem", e), zn = (e) => Ln(xe, "doWearItem", e);
function Bn(e, t, n) {
	Q(e, [n.data("inv")], t, n);
}
var Vn = (e) => Bn(_e, "doDropItem", e), Hn = (e) => Bn(Cn, "doSendItem", e), Un = (e) => (t) => e($(t.target));
function Wn(e, [t, n]) {
	$(e).on("click", `span.${t}`, Un(n));
}
function Gn(e) {
	[
		["dropItem", Vn],
		["recallItem", Fn],
		["sendItem", Hn],
		["setName", _(Nn, e)],
		["storeItem", In],
		["takeItem", Pn],
		["useItem", Rn],
		["wearItem", zn]
	].forEach(_(Wn, e));
}
// src/modules/notepad/inventory/eventHandlers/eventHandlers.js
function Kn(e) {
	B("doMoveItem");
	let t = $(e.target);
	ge([t.data("inv")], t.val());
}
function qn(e, t) {
	$(t[0]).on("click", _(t[1], e));
}
function Jn(e) {
	[
		["#fshReset", Sn],
		["#fshAll", dn],
		["#fshNone", vn],
		["#fshDefault", bn]
	].forEach(_(qn, e));
}
var Yn = (e) => () => {
	B(e);
};
function Xn(e) {
	[
		"fshInvItem",
		"fshMaroon",
		"sorting"
	].forEach((t) => {
		$(e).on("click", `.${t}`, Yn(t));
	});
}
function Zn(e) {
	Jn(e), $("table.fshInvFilter").on("click", "input[type=\"checkbox\"]", _(yn, e)), Gn(e), Xn(e);
}
function Qn(e) {
	$("#fshMinLvl, #fshMaxLvl").on("keyup", _(mn, e)), $(e).on("change", "select.fshMoveItem", Kn), Zn(e), ye(e, Yn, B);
}
// src/modules/notepad/inventory/filters.js
var $n = 0;
function er(e, t) {
	return Ne($n, Pe(t[1]), G().fshMinLvl, G().fshMaxLvl);
}
function tr() {
	$n = [(e, t, n) => n === 0, ...Me], $.fn.dataTable.ext.search.push(er);
}
function nr() {
	$.fn.dataTable.ext.search.push((e, t, n, r) => !G().checkedElements || G().checkedElements[r.type]);
}
function rr(e) {
	return G().checkedElements[-1] && e.stats && e.stats.set_name !== "";
}
function ir() {
	$.fn.dataTable.ext.search.push((e, t, n, r) => !G().checkedElements?.["-1"] || rr(r));
}
function ar() {
	$.fn.dataTable.ext.search.push((e, t, n, r) => {
		let i = (parseInt(r.rarity, 10) + 100).toString();
		return !G().checkedElements || G().checkedElements[i];
	});
}
// src/modules/notepad/inventory/footer/RecallAll.svelte
var or = w("<div class=\"main svelte-17l9o62\"><div class=\"head svelte-17l9o62\">Recall all visible to</div> <div class=\"btnbox svelte-17l9o62\"><button class=\"custombutton svelte-17l9o62\" type=\"button\">BP</button> <button class=\"custombutton svelte-17l9o62\" type=\"button\">GS</button></div></div>");
function sr(e, t) {
	k(t, !1);
	let n = (e) => {
		v("Inventory", "Recall All", e);
	};
	function r() {
		n("toBp"), [...x("span[action=\"take\"]"), ...x("span[mode=\"0\"][action=\"recall\"]")].forEach(Ke);
	}
	function i() {
		n("toGs"), x("span[mode=\"1\"][action=\"recall\"]").forEach(Ke);
	}
	Ve();
	var a = or(), o = j(E(a), 2), s = E(o), c = j(s, 2);
	M(o), M(a), C("click", s, r), C("click", c, i), S(e, a), D();
}
Be(["click"]);
// src/modules/notepad/inventory/footer/Repair.svelte
var cr = w("<span class=\"fshGreen\">Recalled</span>"), lr = w("<span class=\"fshSpinner\"></span>"), ur = w("<button class=\"custombutton svelte-nq9151\" type=\"button\">BP</button>"), dr = w("<div class=\"main svelte-nq9151\"><div class=\"head svelte-nq9151\">Recall repairable to</div> <div class=\"btnbox svelte-nq9151\"><!></div> <div class=\"btnbox svelte-nq9151\"> </div></div>");
function fr(e, t) {
	k(t, !0);
	let n = Ue(t, "fshInv", 3, 0), r = O(1), i = O(0), a = new DataTable(n()).rows((e, { durability: t, max_durability: n, player_id: r, rarity: i, type: a }) => t < n && r === -1 && i !== 5 && a < 9), o = Je(a.data());
	o.length && We(r, 0);
	function s() {
		return qe(o.map(({ inv_id: e }) => e));
	}
	function c() {
		A(i) || We(i, 1);
	}
	var l = dr(), u = j(E(l), 2), d = E(u), ee = (e) => {
		var t = ze(), n = Ge(t);
		Ie(n, s, (e) => {
			var t = lr();
			S(e, t);
		}, (e) => {
			var t = cr();
			S(e, t);
		}), S(e, t);
	}, f = (e) => {
		var t = ur();
		T(() => t.disabled = A(r)), C("click", t, c), S(e, t);
	};
	Fe(d, (e) => {
		A(i) ? e(ee) : e(f, -1);
	}), M(u);
	var te = j(u, 2), p = He(te);
	M(l), T(() => Re(p, `${o.length ?? ""} items to repair`)), S(e, l), D();
}
Be(["click"]);
// src/modules/notepad/inventory/footer/Footer.svelte
var pr = w("<!> <!>", 1), mr = w("<div></div>"), hr = w("<div class=\"container svelte-lahil7\"><!></div>");
function gr(e, t) {
	k(t, !0);
	let n = Ue(t, "fshInv", 3, 0);
	var r = hr(), i = E(r), a = (e) => {
		var t = pr(), r = Ge(t);
		sr(r, {}), fr(j(r, 2), { get fshInv() {
			return n();
		} }), S(e, t);
	}, o = (e) => {
		var t = mr();
		S(e, t);
	};
	Fe(i, (e) => {
		l.subcmd === "guildinvmgr" ? e(a) : e(o, -1);
	}), M(r), S(e, r), D();
}
// src/modules/notepad/inventory/footer/footer.js
function _r(e) {
	Le(gr, {
		props: { fshInv: e },
		target: p()
	});
}
// src/modules/notepad/inventory/headers.js
var vr = () => I().player_id ? `<b>&nbsp;Inventory Manager</b> ${I().items.length} items (green = worn, blue = backpack)` : `<b>&nbsp;Guild Inventory Manager</b> ${I().items.length} items (maroon = in BP, blue=guild store)`;
function yr() {
	tt() && P(g(Xe("pF"), Ye({ style: { textAlign: "center" } })));
}
function br() {
	let e = vr();
	c("", p()), yr(), Ze(p(), ft.replace("@@reportTitle@@", e));
}
function xr() {
	m(I().items) && br();
}
// src/modules/notepad/inventory/setLvls.js
function Sr() {
	$("#fshMinLvl").val(G().fshMinLvl), $("#fshMaxLvl").val(G().fshMaxLvl);
}
// src/modules/notepad/inventory/inventory.js
var Cr = ([, e]) => [e.id, e];
function wr() {
	c(`<span id="fshInvMan"><img src = "${f}">&nbsp;Getting inventory data...</span>`, p());
}
async function Tr() {
	await e(!1), l.membrList && (l.membrList = a(r(l.membrList).filter(Qe).map(Cr)));
}
function Er() {
	i([
		dt,
		tr,
		nr,
		ir,
		ar,
		xr,
		X,
		Sr
	]);
}
function Dr(e) {
	Er();
	let t = un();
	Qn(t), $("#fshRefresh").on("click", e), ut(t), _r(t);
}
function Or(e) {
	Dr(e);
}
function kr(e) {
	ne(3, Or, [e]);
}
var Ar = () => Object.getOwnPropertyNames(I()).length;
async function jr(e) {
	let n = [s(), ct()];
	l.subcmd === "guildinvmgr" && n.push(Tr()), n.push(_t()), await t(n), Ar() && kr(e);
}
function Mr() {
	!o() && p() && (l.subcmd !== "guildinvmgr" || n()) && (wr(), jr(Mr));
}
export { Mr as default };

//# sourceMappingURL=inventory-OZ0FtsrB.js.map