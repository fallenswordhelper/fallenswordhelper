import { t as e } from "./getElementById-PlRCtyBA.js";
import { t } from "./getText-rCJDurvG.js";
import "./posthog-C2Vh_0Hn.js";
import { t as n } from "./system-De1jBRGa.js";
import { ct as r } from "./constants-C54mky4_.js";
import { t as i } from "./querySelector-qkBBhiGH.js";
import { t as a } from "./retryAjax-p9geDMSY.js";
import { t as o } from "./getUrlParameter-qxOiipWG.js";
import { A as s, B as c, E as l, F as u, I as d, J as f, L as p, N as m, O as h, P as g, R as _, T as v, W as y, X as b, Y as x, _t as S, dt as C, et as w, g as T, j as E, k as D, nt as O, p as k, r as A, rt as j, ut as M, v as ee, y as te } from "./disclose-version-CVZFuhb0.js";
import { t as N } from "./layout-Bapa39KM.js";
import "./sendEvent-bwvhd4A-.js";
import { t as ne } from "./_dataAccess-tuhLVrPW.js";
import { t as re } from "./createDocument-95hjGOI1.js";
import "./indexAjax-BXHvJ2Y7.js";
import { t as P } from "./indexAjaxData-CqOTihOX.js";
import "./indexAjaxDoc-DHqD1q8U.js";
import { t as F } from "./profile-DwNdicRm.js";
import { t as I } from "./daViewCombatSet-BLzYpx37.js";
import { t as L } from "./querySelectorArray-BZbNvND7.js";
import "./closestTr-C0LB9ALA.js";
import "./idb-sdcp-8vV.js";
import "./indexAjaxJson-DuDMsKRC.js";
import "./cmdExport-C_7TLPs-.js";
import { t as R } from "./setText-C9n73usW.js";
import { t as z } from "./all-Dy4LjBGw.js";
import "./legacy-TVNYOKqu.js";
import { t as B } from "./inventory-DgY8Lj8t.js";
import { t as V } from "./addCommas-Ca7d_KBz.js";
import { t as H } from "./arena-CfQRp9P7.js";
import "./formToUrl-BROd6YBE.js";
import { t as U } from "./interceptSubmit-0losboil.js";
import W, { t as G } from "./arena-BrPPNeES.js";
import "./backpackOk-D61pwOdg.js";
import { t as K } from "./daLoadInventory-CNPYoxt-.js";
import { t as q } from "./htmlResult-VSGrcENv.js";
import { t as J } from "./ItemImg-B8cthSPO.js";
//#region src/modules/arena/arenaJoin/ArenaFlag.svelte
var Y = u("<img alt=\"Flag\"/>"), X = u("<div><div class=\"top svelte-10rozf6\"> </div> <div class=\"bottom svelte-10rozf6\"><!></div></div>");
function Z(e, t) {
	let r = A(t, "title", 3, ""), i = A(t, "flag", 3, 0), a = (e) => String(Number(e));
	var o = X(), s = f(o), c = f(s, !0);
	S(s);
	var l = b(s, 2), u = f(l), p = (e) => {
		var t = Y();
		y((e) => k(t, "src", `${n ?? ""}ui/arena/specials_${e ?? ""}.png`), [() => a(i())]), m(e, t);
	}, g = (e) => {
		var t = d();
		y(() => E(t, i())), m(e, t);
	};
	h(u, (e) => {
		typeof i() == "boolean" ? e(p) : e(g, -1);
	}), S(l), S(o), y(() => E(c, r())), m(e, o);
}
//#endregion
//#region src/modules/app/arena/usesetup.js
function ie(e) {
	return H({
		subcmd: "usesetup",
		set_id: e
	});
}
//#endregion
//#region src/modules/arena/arenaJoin/ArenaMoves.svelte
var ae = u("<option> </option>"), oe = u("<img alt=\"Move\"/>"), se = u("<div class=\"ams svelte-18n6qy6\"><select class=\"svelte-18n6qy6\"></select></div> <div class=\"amf svelte-18n6qy6\"></div>", 1);
function ce(e, t) {
	C(t, !0);
	let r = A(t, "res", 3, 0), i = O(0), a = O(0), o = O(0), s = ({ slots: e }) => e.join() === c(i).slots.join();
	(function() {
		w(i, r().current_set, !0), w(o, [...r().sets.some(s) ? [] : [c(i)], ...r().sets], !0), w(a, c(o).find(s).id, !0);
	})();
	async function u() {
		await ie(c(a)), w(i, c(o).find(({ id: e }) => e === c(a)), !0);
	}
	var d = se(), p = x(d), h = f(p);
	v(h, 21, () => c(o), ({ id: e, name: t }) => e, (e, t) => {
		let n = () => c(t).id, r = () => c(t).name;
		var i = ae(), a = f(i, !0);
		S(i);
		var o = {};
		y(() => {
			E(a, r()), o !== (o = n()) && (i.value = (i.__value = n()) ?? "");
		}), m(e, i);
	}), S(h), S(p);
	var g = b(p, 2);
	v(g, 21, () => c(i).slots, l, (e, t) => {
		var r = oe();
		y(() => k(r, "src", `${n ?? ""}arena/${c(t) ? c(t) - 1 : "x"}.png`)), m(e, r);
	}), S(g), _("change", h, u), T(h, () => c(a), (e) => w(a, e)), m(e, d), M();
}
p(["change"]);
//#endregion
//#region src/modules/arena/arenaJoin/ArenaAttribs.svelte
var le = u("<div class=\"ajf svelte-1slddeh\"><!></div>"), ue = u("<div class=\"ajf svelte-1slddeh\"><!> <!> <!> <!> <!></div> <!>", 1), de = u("<div class=\"ajf svelte-1slddeh\"><div><p class=\"svelte-1slddeh\"> </p></div></div>");
function fe(e, t) {
	C(t, !0);
	let n = Number(o("pvp_id")), r = O(0), i = O(0), a = (e) => e.arenas.find((e) => e.id === n);
	async function s() {
		let e = await G();
		if (e.s) w(r, e.r, !0), w(i, a(e.r), !0);
		else throw Error(e.e.message);
	}
	var l = g();
	D(x(l), s, null, (e) => {
		var t = ue(), n = x(t), a = f(n);
		Z(a, {
			title: "Players",
			get flag() {
				return `${c(i).players.length ?? ""} / ${c(i).max_players ?? ""}`;
			}
		});
		var o = b(a, 2);
		Z(o, {
			title: "Specials",
			get flag() {
				return c(i).specials;
			}
		});
		var s = b(o, 2);
		Z(s, {
			title: "Hell Forge",
			get flag() {
				return c(i).hellforge;
			}
		});
		var l = b(s, 2);
		Z(l, {
			title: "Epic",
			get flag() {
				return c(i).epic;
			}
		});
		var u = b(l, 2);
		{
			let e = j(() => V(c(i).equip_level));
			Z(u, {
				title: "Max Equip Level",
				get flag() {
					return c(e);
				}
			});
		}
		S(n);
		var d = b(n, 2), p = (e) => {
			var t = le();
			ce(f(t), { get res() {
				return c(r);
			} }), S(t), m(e, t);
		};
		h(d, (e) => {
			c(i).specials && e(p);
		}), m(e, t);
	}, (e, t) => {
		var n = de(), r = f(n), i = f(r), a = f(i, !0);
		S(i), S(r), S(n), y(() => E(a, c(t).message)), m(e, n);
	}), m(e, l), M();
}
//#endregion
//#region src/modules/app/profile/usecombatset.js
function pe(e) {
	return F({
		subcmd: "usecombatset",
		combatSetId: e
	});
}
//#endregion
//#region src/modules/_dataAccess/daUseCombatSet.js
async function me(e) {
	return q(await P({
		cmd: "profile",
		subcmd: "managecombatset",
		submit: "Use",
		combatSetId: e
	}));
}
function Q(e) {
	return ne(pe, me, e);
}
//#endregion
//#region src/modules/arena/arenaJoin/ItemImage.svelte
var he = u("<div><!></div>");
function $(e, t) {
	let n = A(t, "class", 3, ""), r = A(t, "item", 3, 0);
	var i = he(), a = f(i), o = (e) => {
		J(e, {
			get item() {
				return r();
			},
			t: "1"
		});
	};
	h(a, (e) => {
		r() && e(o);
	}), S(i), y(() => ee(i, 1, te(n()), "svelte-16yt0xh")), m(e, i);
}
//#endregion
//#region src/modules/arena/arenaJoin/WearingGrid.svelte
var ge = u("<div class=\"grid svelte-vs4nvm\"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>");
function _e(e, t) {
	C(t, !0);
	let n = A(t, "equipment", 3, 0), i = (e, t) => e && e.find((e) => e.t === r.indexOf(t));
	var a = ge(), o = f(a);
	{
		let e = j(() => i(n(), "Gloves"));
		$(o, {
			class: "med",
			get item() {
				return c(e);
			}
		});
	}
	var s = b(o, 2);
	{
		let e = j(() => i(n(), "Helmet"));
		$(s, {
			class: "med",
			get item() {
				return c(e);
			}
		});
	}
	var l = b(s, 2);
	{
		let e = j(() => i(n(), "Amulet"));
		$(l, {
			class: "sml",
			get item() {
				return c(e);
			}
		});
	}
	var u = b(l, 2);
	{
		let e = j(() => i(n(), "Weapon"));
		$(u, {
			class: "lrg",
			get item() {
				return c(e);
			}
		});
	}
	var d = b(u, 2);
	{
		let e = j(() => i(n(), "Armor"));
		$(d, {
			class: "lrg",
			get item() {
				return c(e);
			}
		});
	}
	var p = b(d, 2);
	{
		let e = j(() => i(n(), "Shield"));
		$(p, {
			class: "lrg",
			get item() {
				return c(e);
			}
		});
	}
	var h = b(p, 2);
	{
		let e = j(() => i(n(), "Ring"));
		$(h, {
			class: "sml",
			get item() {
				return c(e);
			}
		});
	}
	var g = b(h, 2);
	{
		let e = j(() => i(n(), "Boots"));
		$(g, {
			class: "med",
			get item() {
				return c(e);
			}
		});
	}
	var _ = b(g, 2);
	{
		let e = j(() => i(n(), "Rune"));
		$(_, {
			class: "sml",
			get item() {
				return c(e);
			}
		});
	}
	S(a), m(e, a), M();
}
//#endregion
//#region src/modules/arena/arenaJoin/Wearing.svelte
var ve = u("<option> </option>"), ye = u("<div><div class=\"innerColumnHeader svelte-drdg2\"><div class=\"flex svelte-drdg2\">Inventory <select class=\"svelte-drdg2\"></select></div></div> <!></div>");
function be(e, n) {
	C(n, !0);
	let r = O(0), o = O(0), s = O(0), l = ({ a: e }) => c(r).some(({ a: t }) => t === e), u = ({ items: e }) => e.every(l), d = (e, t) => !e || !t.length ? e || [] : e.map((e) => {
		let n = t.find((t) => t.inv_id === e.a);
		return {
			...e,
			t: n?.type
		};
	});
	async function p() {
		let [e, t, n] = await z([
			K(),
			I(),
			B()
		]);
		if (e?.r && t?.r && n?.items) {
			w(r, d(e.r.equipment, n.items), !0);
			let i = t.r.find(u);
			w(s, i?.id ?? -1, !0);
			let a = t.r.map((e) => ({
				...e,
				items: d(e.items, n.items)
			}));
			w(o, [...i ? [] : [{
				id: -1,
				name: "Primary",
				items: c(r)
			}], ...a], !0);
		}
	}
	let h = (e) => L("table[width=\"300\"] b", e).slice(1).map((e) => i("td", e.parentNode.nextElementSibling.children[0]));
	async function k() {
		await Q(c(s));
		let e = await a(window.location.href);
		w(r, c(o).find(({ id: e }) => e === c(s)).items, !0);
		let n = h(re(e)).map((e) => t(e));
		h().forEach((e, t) => R(n[t], e));
	}
	var A = g();
	D(x(A), p, null, (e) => {
		var t = ye(), n = f(t), i = f(n), a = b(f(i));
		v(a, 21, () => c(o), ({ id: e, name: t }) => e, (e, t) => {
			let n = () => c(t).id, r = () => c(t).name;
			var i = ve(), a = f(i, !0);
			S(i);
			var o = {};
			y(() => {
				i.disabled = n() === -1 && c(s) !== -1, E(a, r()), o !== (o = n()) && (i.value = (i.__value = n()) ?? "");
			}), m(e, i);
		}), S(a), S(i), S(n), _e(b(n, 2), { get equipment() {
			return c(r);
		} }), S(t), _("change", a, k), T(a, () => c(s), (e) => w(s, e)), m(e, t);
	}), m(e, A), M();
}
p(["change"]);
//#endregion
//#region src/modules/arena/arenaJoin/ArenaJoin.svelte
var xe = u("<!> <!>", 1);
function Se(e) {
	var t = xe(), n = x(t);
	fe(n, {}), be(b(n, 2), {}), m(e, t);
}
//#endregion
//#region src/modules/arena/arenaJoin/arenaJoin.js
function Ce() {
	return s(Se, { target: N() });
}
function we() {
	N() && (e("arenaTypeTabs") ? W() : (U(), Ce()));
}
//#endregion
export { we as default };

//# sourceMappingURL=arenaJoin-BfQJAulw.js.map