import { t as e } from "./system-De1jBRGa.js";
//#region src/modules/support/constants.js
var ee = [
	{
		colour: "#ffffff",
		clas: "fshCommon"
	},
	{
		colour: "#0099ff",
		clas: "fshRare"
	},
	{
		colour: "#cc00ff",
		clas: "fshUnique"
	},
	{
		colour: "#ffff33",
		clas: "fshLegendary"
	},
	{
		colour: "#cc0033",
		clas: "fshSuper"
	},
	{
		colour: "#6633ff",
		clas: "fshCrystal"
	},
	{
		colour: "#009900",
		clas: "fshEpic"
	}
], t = [
	"first",
	"second",
	"third",
	"fourth",
	"fifth",
	"sixth",
	"seventh",
	"eighth",
	"ninth",
	"tenth",
	"eleventh",
	"twelfth",
	"thirteenth",
	"fourteenth"
], te = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
], ne = /ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/, n = /fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i, r = /guild_id=(?<guildId>\d+)/, i = /<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/, a = /player_id=(?<playerId>\d+)/, o = /Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/, s = /VL:.+?(?<vl>\d+)/, c = /creatures\/(\d+)[A-Za-z0-9]{32}\.png/, l = .2, u = "joinallgroupsundersize", d = "index.php", f = "?cmd=", p = `${d}${f}`, m = "&subcmd=", h = "&target_username=", g = `${f}notepad&blank=1${m}`, _ = `${p}auctionhouse`, v = `${_}&search=`, y = `${p}log`, b = `${p}ignore${m}add&ignore_username=`, x = `${p}profile`, S = `${x}&player_id=`, C = `${x}${m}dropitems`, w = `${p}trade&target_player=`, T = `${p}trade${m}createsecure${h}`, E = `${p}arena${m}`, D = `${d}${g}`, O = `${D}auctionsearch`, k = `${p}points`, A = `${p}guild${m}`, j = `${A}log`, M = `${A}scouttower`, N = `${A}groups&subcmd2=`, P = `${A}inventory&subcmd2=report&user=`, F = `${A}view&guild_id=`, I = `${N}joinall`, L = `${N}${u}`, R = `${p}world`, z = `${p}findplayer`, B = `${z}&search_show_first=1&search_username=`, V = `${p}blacksmith`, H = `${p}quickbuff`, U = `${p}composing`, W = `${p}attackplayer${h}`, G = `${p}${m}viewupdatearchive`, K = `${p}${m}viewarchive`, q = `${p}bounty`, J = `${p}inventing${m}viewrecipe&recipe_id=`, Y = `https://guide.fallensword.com/${p}`, X = "after-update.actionlist", Z = "buffs.player", re = "update.player", ie = "level.stats-player", ae = "gold.stats-player", oe = "prompt.worldDialogShop", se = "keydown.controls", ce = "update.realm", Q = "-success.action-response", le = `-1${Q}`, ue = `1${Q}`, de = `2${Q}`, fe = `9${Q}`, pe = `5${Q}`, me = `25${Q}`, he = "needToCompose", ge = "lastComposeCheck", _e = "characterVirtualLevel", ve = "enableGuildActivityTracker", ye = "lastLadderReset", be = "form", xe = "table", Se = "fsh_buffLog", Ce = "statbar-level-tooltip-general", we = "stat-level", Te = "stat-defense", Ee = "stat-attack", De = "stat-damage", Oe = "stat-armor", ke = "stat-hp", Ae = "stat-vl", je = [
	"Common",
	"Rare",
	"Unique",
	"Legendary",
	"Super Elite",
	"Crystalline"
], Me = [
	"Helmet",
	"Armor",
	"Gloves",
	"Boots",
	"Weapon",
	"Shield",
	"Ring",
	"Amulet",
	"Rune",
	"Quest Item",
	"Potion",
	"Component",
	"Resource",
	"Recipe",
	"Container",
	"Composed",
	"Frag Stash"
], Ne = `${e}ui/world/action_spinner.gif`, Pe = ".fa-envelope", Fe = "a[href*=\"&player_id=\"]", Ie = .002, Le = [
	[54, "ca_default"],
	[101, "sc_default"],
	[60, "nv_default"],
	[98, "barricade_default"],
	[179, "relentless_default"],
	[181, "aegis_shield_default"]
], Re = "input[name=\"blockedSkillList[]\"]", $ = 86400, ze = 1e3, Be = $ / 4;
//#endregion
export { n as $, re as A, T as At, Te as B, u as C, k as Ct, Z as D, P as Dt, he as E, ee as Et, oe as F, J as Ft, m as G, we as H, pe as I, s as It, ue as J, xe as K, Oe as L, R as Lt, ce as M, o as Mt, le as N, w as Nt, ae as O, M as Ot, fe as P, G as Pt, ne as Q, Ee as R, be as S, Fe as St, ye as T, H as Tt, Ae as U, ke as V, Ce as W, b as X, l as Y, C as Z, X as _, D as _t, K as a, A as at, se as b, a as bt, O as c, Me as ct, Re as d, i as dt, Se as et, q as f, Le as ft, Ie as g, Pe as gt, U as h, te as ht, v as i, r as it, de as j, B as jt, ie as k, z as kt, _ as l, L as lt, je as m, c as mt, ze as n, Y as nt, E as o, F as ot, p, y as pt, me as q, $ as r, j as rt, W as s, d as st, Be as t, N as tt, V as u, I as ut, _e as v, Ne as vt, ge as w, x as wt, ve as x, S as xt, f as y, t as yt, De as z };

//# sourceMappingURL=constants-C54mky4_.js.map