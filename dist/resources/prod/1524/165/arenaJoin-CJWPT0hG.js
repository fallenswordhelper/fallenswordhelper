import "./calfSystem-BrOFwh3f.js";
import { t as e } from "./getElementById-C08-3H-C.js";
import { t } from "./getText-BqjgTHLv.js";
import { t as n } from "./system-CNA0YLOa.js";
import { ct as r } from "./constants-CenxlFMY.js";
import { t as i } from "./querySelector-C6ReNysW.js";
import { t as a } from "./retryAjax-Cx5Fvrfg.js";
import { t as o } from "./getUrlParameter-DQUJPuXf.js";
import { B as s, E as c, F as l, G as u, H as d, I as f, L as p, M as m, N as h, R as g, S as _, T as v, U as y, V as b, W as x, Z as S, et as C, ft as w, lt as T, nt as E, pt as D, q as O, r as k, rt as A, st as j, tt as M, ut as N, x as P, y as F, yt as I } from "./disclose-version-gxrYovMN.js";
import { t as L } from "./layout-B2Q1UoM2.js";
import { t as ee } from "./_dataAccess-BLVLQyDJ.js";
import { t as te } from "./createDocument-B1aK9_TZ.js";
import { t as ne } from "./indexAjaxData-BcvK7Oaz.js";
import { t as re } from "./profile-BZrU9oa_.js";
import { t as R } from "./daViewCombatSet-gx2k2c8O.js";
import { t as z } from "./querySelectorArray-C70U47NF.js";
import { t as B } from "./setText-CVjyFkRt.js";
import { t as V } from "./all-D5SlTl7_.js";
import { t as H } from "./inventory-BxKMawFk.js";
import { t as U } from "./addCommas-Bv8TEVoY.js";
import { t as W } from "./arena-EjUM3WXg.js";
import { t as G } from "./interceptSubmit-vIdFdaaM.js";
import K, { t as q } from "./arena-Csw99JkJ.js";
import { t as J } from "./daLoadInventory-Cd8q-qGB.js";
import { t as Y } from "./htmlResult-ChzxOgJl.js";
import { t as X } from "./ItemImg-BDhCTFI1.js";
// src/modules/arena/arenaJoin/ArenaFlag.svelte
var ie = d("<img alt=\"Flag\"/>"), ae = d("<div><div class=\"top svelte-10rozf6\"> </div> <div class=\"bottom svelte-10rozf6\"><!></div></div>");
function Z(e, t) {
	let r = k(t, "title", 3, ""), i = k(t, "flag", 3, 0), a = (e) => String(Number(e));
	var o = ae(), c = C(o), u = E(c, !0), d = A(c, 2), f = C(d), p = (e) => {
		var t = ie();
		S((e) => F(t, "src", `${n ?? ""}ui/arena/specials_${e ?? ""}.png`), [() => a(i())]), s(e, t);
	}, m = (e) => {
		var t = y();
		S(() => g(t, i())), s(e, t);
	};
	l(f, (e) => {
		typeof i() == "boolean" ? e(p) : e(m, -1);
	}), I(d), I(o), S(() => g(u, r())), s(e, o);
}
// src/modules/app/arena/usesetup.js
function oe(e) {
	return W({
		subcmd: "usesetup",
		set_id: e
	});
}
// src/modules/arena/arenaJoin/ArenaMoves.svelte
var se = d("<option> </option>"), ce = d("<img alt=\"Move\"/>"), le = d("<div class=\"ams svelte-18n6qy6\"><select class=\"svelte-18n6qy6\"></select></div> <div class=\"amf svelte-18n6qy6\"></div>", 1);
function ue(e, t) {
	D(t, !0);
	let r = k(t, "res", 3, 0), i = T(0), a = T(0), o = T(0), c = ({ slots: e }) => e.join() === O(i).slots.join();
	(function() {
		j(i, r().current_set, !0), j(o, [...r().sets.some(c) ? [] : [O(i)], ...r().sets], !0), j(a, O(o).find(c).id, !0);
	})();
	async function l() {
		await oe(O(a)), j(i, O(o).find(({ id: e }) => e === O(a)), !0);
	}
	var d = le(), f = M(d), p = C(f);
	m(p, 21, () => O(o), ({ id: e, name: t }) => e, (e, t) => {
		let n = () => O(t).id, r = () => O(t).name;
		var i = se(), a = E(i, !0), o = {};
		S(() => {
			g(a, r()), o !== (o = n()) && (i.value = (i.__value = o) ?? "");
		}), s(e, i);
	}), I(p), _(p), I(f);
	var v = A(f, 2);
	m(v, 21, () => O(i).slots, h, (e, t) => {
		var r = ce();
		S(() => F(r, "src", `${n ?? ""}arena/${O(t) ? O(t) - 1 : "x"}.png`)), s(e, r);
	}), I(v), u("change", p, l), P(p, () => O(a), (e) => j(a, e)), s(e, d), w();
}
x(["change"]);
// src/modules/arena/arenaJoin/ArenaAttribs.svelte
var de = d("<div class=\"ajf svelte-1slddeh\"><!></div>"), fe = d("<div class=\"ajf svelte-1slddeh\"><!> <!> <!> <!> <!></div> <!>", 1), pe = d("<div class=\"ajf svelte-1slddeh\"><div><p class=\"svelte-1slddeh\"> </p></div></div>");
function me(e, t) {
	D(t, !0);
	let n = Number(o("pvp_id")), r = T(0), i = T(0), a = (e) => e.arenas.find((e) => e.id === n);
	async function c() {
		let e = await q();
		if (e.s) j(r, e.r, !0), j(i, a(e.r), !0);
		else throw Error(e.e.message);
	}
	var u = b(), d = M(u);
	f(d, c, null, (e) => {
		var t = fe(), n = M(t), a = C(n);
		Z(a, {
			title: "Players",
			get flag() {
				return `${O(i).players.length ?? ""} / ${O(i).max_players ?? ""}`;
			}
		});
		var o = A(a, 2);
		Z(o, {
			title: "Specials",
			get flag() {
				return O(i).specials;
			}
		});
		var c = A(o, 2);
		Z(c, {
			title: "Hell Forge",
			get flag() {
				return O(i).hellforge;
			}
		});
		var u = A(c, 2);
		Z(u, {
			title: "Epic",
			get flag() {
				return O(i).epic;
			}
		});
		var d = A(u, 2);
		{
			let e = N(() => U(O(i).equip_level));
			Z(d, {
				title: "Max Equip Level",
				get flag() {
					return O(e);
				}
			});
		}
		I(n);
		var f = A(n, 2), p = (e) => {
			var t = de();
			ue(C(t), { get res() {
				return O(r);
			} }), I(t), s(e, t);
		};
		l(f, (e) => {
			O(i).specials && e(p);
		}), s(e, t);
	}, (e, t) => {
		var n = pe(), r = C(n), i = C(r), a = E(i, !0);
		I(r), I(n), S(() => g(a, O(t).message)), s(e, n);
	}), s(e, u), w();
}
// src/modules/app/profile/usecombatset.js
function he(e) {
	return re({
		subcmd: "usecombatset",
		combatSetId: e
	});
}
// src/modules/_dataAccess/daUseCombatSet.js
async function ge(e) {
	let t = await ne({
		cmd: "profile",
		subcmd: "managecombatset",
		submit: "Use",
		combatSetId: e
	});
	return Y(t);
}
function _e(e) {
	return ee(he, ge, e);
}
// src/modules/arena/arenaJoin/ItemImage.svelte
var ve = d("<div><!></div>");
function Q(e, t) {
	let n = k(t, "class", 3, ""), r = k(t, "item", 3, 0);
	var i = ve(), a = C(i), o = (e) => {
		X(e, {
			get item() {
				return r();
			},
			t: "1"
		});
	};
	l(a, (e) => {
		r() && e(o);
	}), I(i), S(() => v(i, 1, c(n()), "svelte-16yt0xh")), s(e, i);
}
// src/modules/arena/arenaJoin/WearingGrid.svelte
var ye = d("<div class=\"grid svelte-vs4nvm\"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>");
function be(e, t) {
	D(t, !0);
	let n = k(t, "equipment", 3, 0), i = (e, t) => e && e.find((e) => e.t === r.indexOf(t));
	var a = ye(), o = C(a);
	{
		let e = N(() => i(n(), "Gloves"));
		Q(o, {
			class: "med",
			get item() {
				return O(e);
			}
		});
	}
	var c = A(o, 2);
	{
		let e = N(() => i(n(), "Helmet"));
		Q(c, {
			class: "med",
			get item() {
				return O(e);
			}
		});
	}
	var l = A(c, 2);
	{
		let e = N(() => i(n(), "Amulet"));
		Q(l, {
			class: "sml",
			get item() {
				return O(e);
			}
		});
	}
	var u = A(l, 2);
	{
		let e = N(() => i(n(), "Weapon"));
		Q(u, {
			class: "lrg",
			get item() {
				return O(e);
			}
		});
	}
	var d = A(u, 2);
	{
		let e = N(() => i(n(), "Armor"));
		Q(d, {
			class: "lrg",
			get item() {
				return O(e);
			}
		});
	}
	var f = A(d, 2);
	{
		let e = N(() => i(n(), "Shield"));
		Q(f, {
			class: "lrg",
			get item() {
				return O(e);
			}
		});
	}
	var p = A(f, 2);
	{
		let e = N(() => i(n(), "Ring"));
		Q(p, {
			class: "sml",
			get item() {
				return O(e);
			}
		});
	}
	var m = A(p, 2);
	{
		let e = N(() => i(n(), "Boots"));
		Q(m, {
			class: "med",
			get item() {
				return O(e);
			}
		});
	}
	var h = A(m, 2);
	{
		let e = N(() => i(n(), "Rune"));
		Q(h, {
			class: "sml",
			get item() {
				return O(e);
			}
		});
	}
	I(a), s(e, a), w();
}
// src/modules/arena/arenaJoin/Wearing.svelte
var $ = d("<option> </option>"), xe = d("<div><div class=\"innerColumnHeader svelte-drdg2\"><div class=\"flex svelte-drdg2\">Inventory <select class=\"svelte-drdg2\"></select></div></div> <!></div>");
function Se(e, n) {
	D(n, !0);
	let r = T(0), o = T(0), c = T(0), l = ({ a: e }) => O(r).some(({ a: t }) => t === e), d = ({ items: e }) => e.every(l), p = (e, t) => !e || !t.length ? e || [] : e.map((e) => {
		let n = t.find((t) => t.inv_id === e.a);
		return {
			...e,
			t: n?.type
		};
	});
	async function h() {
		let [e, t, n] = await V([
			J(),
			R(),
			H()
		]);
		if (e?.r && t?.r && n?.items) {
			j(r, p(e.r.equipment, n.items), !0);
			let i = t.r.find(d);
			j(c, i?.id ?? -1, !0);
			let a = t.r.map((e) => ({
				...e,
				items: p(e.items, n.items)
			}));
			j(o, [...i ? [] : [{
				id: -1,
				name: "Primary",
				items: O(r)
			}], ...a], !0);
		}
	}
	let v = (e) => z("table[width=\"300\"] b", e).slice(1).map((e) => i("td", e.parentNode.nextElementSibling.children[0]));
	async function y() {
		await _e(O(c));
		let e = await a(window.location.href);
		j(r, O(o).find(({ id: e }) => e === O(c)).items, !0);
		let n = te(e), i = v(n).map((e) => t(e));
		v().forEach((e, t) => B(i[t], e));
	}
	var x = b(), k = M(x);
	f(k, h, null, (e) => {
		var t = xe(), n = C(t), i = C(n), a = A(C(i));
		m(a, 21, () => O(o), ({ id: e, name: t }) => e, (e, t) => {
			let n = () => O(t).id, r = () => O(t).name;
			var i = $(), a = E(i, !0), o = {};
			S(() => {
				i.disabled = n() === -1 && O(c) !== -1, g(a, r()), o !== (o = n()) && (i.value = (i.__value = o) ?? "");
			}), s(e, i);
		}), I(a), _(a), I(i), I(n), be(A(n, 2), { get equipment() {
			return O(r);
		} }), I(t), u("change", a, y), P(a, () => O(c), (e) => j(c, e)), s(e, t);
	}), s(e, x), w();
}
x(["change"]);
// src/modules/arena/arenaJoin/ArenaJoin.svelte
var Ce = d("<!> <!>", 1);
function we(e) {
	var t = Ce(), n = M(t);
	me(n, {}), Se(A(n, 2), {}), s(e, t);
}
// src/modules/arena/arenaJoin/arenaJoin.js
function Te() {
	return p(we, { target: L() });
}
function Ee() {
	L() && (e("arenaTypeTabs") ? K() : (G(), Te()));
}
export { Ee as default };

//# sourceMappingURL=arenaJoin-CJWPT0hG.js.map