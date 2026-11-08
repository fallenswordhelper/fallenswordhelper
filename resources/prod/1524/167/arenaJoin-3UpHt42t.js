import { B as e, E as t, F as n, G as r, H as i, I as a, L as o, M as s, N as c, R as l, S as u, T as d, U as f, V as p, W as m, Z as h, et as g, ft as _, lt as v, nt as y, pt as b, q as x, r as S, rt as C, st as w, tt as T, ut as E, x as D, y as O, yt as k } from "./disclose-version-Cj0Bwtvz.js";
import { t as A } from "./getElementById-C08-3H-C.js";
import { t as j } from "./interceptSubmit-QT2t7a5u.js";
import { t as M } from "./layout-B2Q1UoM2.js";
import ee, { t as te } from "./arena-DuRPlQqH.js";
import "./calfSystem-Bw3VlPbV.js";
import { t as ne } from "./addCommas-Bv8TEVoY.js";
import { t as re } from "./getUrlParameter-DQUJPuXf.js";
import { t as N } from "./system-CNA0YLOa.js";
import { t as P } from "./arena-ELvYViLq.js";
import { t as F } from "./daLoadInventory-CwrdDsg7.js";
import { t as I } from "./inventory-BG4i9XuW.js";
import { t as L } from "./indexAjaxData-BAm_dTyc.js";
import { t as R } from "./profile-By-S2hRI.js";
import { t as z } from "./_dataAccess-BLVLQyDJ.js";
import { t as B } from "./htmlResult-ChzxOgJl.js";
import { t as V } from "./daViewCombatSet-CpjrE31e.js";
import { t as H } from "./retryAjax-Cx5Fvrfg.js";
import { t as U } from "./all-D5SlTl7_.js";
import { t as W } from "./getText-BqjgTHLv.js";
import { t as G } from "./querySelector-C6ReNysW.js";
import { t as K } from "./querySelectorArray-C70U47NF.js";
import { t as q } from "./setText-CVjyFkRt.js";
import { t as J } from "./createDocument-B1aK9_TZ.js";
import { ct as Y } from "./constants-CenxlFMY.js";
import { t as X } from "./ItemImg-fagUY5Wo.js";
// src/modules/arena/arenaJoin/ArenaFlag.svelte
var ie = i("<img alt=\"Flag\"/>"), ae = i("<div><div class=\"top svelte-10rozf6\"> </div> <div class=\"bottom svelte-10rozf6\"><!></div></div>");
function Z(t, r) {
	let i = S(r, "title", 3, ""), a = S(r, "flag", 3, 0), o = (e) => String(Number(e));
	var s = ae(), c = g(s), u = y(c, !0), d = C(c, 2), p = g(d), m = (t) => {
		var n = ie();
		h((e) => O(n, "src", `${N ?? ""}ui/arena/specials_${e ?? ""}.png`), [() => o(a())]), e(t, n);
	}, _ = (t) => {
		var n = f();
		h(() => l(n, a())), e(t, n);
	};
	n(p, (e) => {
		typeof a() == "boolean" ? e(m) : e(_, -1);
	}), k(d), k(s), h(() => l(u, i())), e(t, s);
}
// src/modules/app/arena/usesetup.js
function oe(e) {
	return P({
		subcmd: "usesetup",
		set_id: e
	});
}
// src/modules/arena/arenaJoin/ArenaMoves.svelte
var se = i("<option> </option>"), ce = i("<img alt=\"Move\"/>"), le = i("<div class=\"ams svelte-18n6qy6\"><select class=\"svelte-18n6qy6\"></select></div> <div class=\"amf svelte-18n6qy6\"></div>", 1);
function ue(t, n) {
	b(n, !0);
	let i = S(n, "res", 3, 0), a = v(0), o = v(0), d = v(0), f = ({ slots: e }) => e.join() === x(a).slots.join();
	(function() {
		w(a, i().current_set, !0), w(d, [...i().sets.some(f) ? [] : [x(a)], ...i().sets], !0), w(o, x(d).find(f).id, !0);
	})();
	async function p() {
		await oe(x(o)), w(a, x(d).find(({ id: e }) => e === x(o)), !0);
	}
	var m = le(), E = T(m), A = g(E);
	s(A, 21, () => x(d), ({ id: e, name: t }) => e, (t, n) => {
		let r = () => x(n).id, i = () => x(n).name;
		var a = se(), o = y(a, !0), s = {};
		h(() => {
			l(o, i()), s !== (s = r()) && (a.value = (a.__value = s) ?? "");
		}), e(t, a);
	}), k(A), u(A), k(E);
	var j = C(E, 2);
	s(j, 21, () => x(a).slots, c, (t, n) => {
		var r = ce();
		h(() => O(r, "src", `${N ?? ""}arena/${x(n) ? x(n) - 1 : "x"}.png`)), e(t, r);
	}), k(j), r("change", A, p), D(A, () => x(o), (e) => w(o, e)), e(t, m), _();
}
m(["change"]);
// src/modules/arena/arenaJoin/ArenaAttribs.svelte
var de = i("<div class=\"ajf svelte-1slddeh\"><!></div>"), fe = i("<div class=\"ajf svelte-1slddeh\"><!> <!> <!> <!> <!></div> <!>", 1), pe = i("<div class=\"ajf svelte-1slddeh\"><div><p class=\"svelte-1slddeh\"> </p></div></div>");
function me(t, r) {
	b(r, !0);
	let i = Number(re("pvp_id")), o = v(0), s = v(0), c = (e) => e.arenas.find((e) => e.id === i);
	async function u() {
		let e = await te();
		if (e.s) w(o, e.r, !0), w(s, c(e.r), !0);
		else throw Error(e.e.message);
	}
	var d = p(), f = T(d);
	a(f, u, null, (t) => {
		var r = fe(), i = T(r), a = g(i);
		Z(a, {
			title: "Players",
			get flag() {
				return `${x(s).players.length ?? ""} / ${x(s).max_players ?? ""}`;
			}
		});
		var c = C(a, 2);
		Z(c, {
			title: "Specials",
			get flag() {
				return x(s).specials;
			}
		});
		var l = C(c, 2);
		Z(l, {
			title: "Hell Forge",
			get flag() {
				return x(s).hellforge;
			}
		});
		var u = C(l, 2);
		Z(u, {
			title: "Epic",
			get flag() {
				return x(s).epic;
			}
		});
		var d = C(u, 2);
		{
			let e = E(() => ne(x(s).equip_level));
			Z(d, {
				title: "Max Equip Level",
				get flag() {
					return x(e);
				}
			});
		}
		k(i);
		var f = C(i, 2), p = (t) => {
			var n = de();
			ue(g(n), { get res() {
				return x(o);
			} }), k(n), e(t, n);
		};
		n(f, (e) => {
			x(s).specials && e(p);
		}), e(t, r);
	}, (t, n) => {
		var r = pe(), i = g(r), a = g(i), o = y(a, !0);
		k(i), k(r), h(() => l(o, x(n).message)), e(t, r);
	}), e(t, d), _();
}
// src/modules/app/profile/usecombatset.js
function he(e) {
	return R({
		subcmd: "usecombatset",
		combatSetId: e
	});
}
// src/modules/_dataAccess/daUseCombatSet.js
async function ge(e) {
	let t = await L({
		cmd: "profile",
		subcmd: "managecombatset",
		submit: "Use",
		combatSetId: e
	});
	return B(t);
}
function _e(e) {
	return z(he, ge, e);
}
// src/modules/arena/arenaJoin/ItemImage.svelte
var ve = i("<div><!></div>");
function Q(r, i) {
	let a = S(i, "class", 3, ""), o = S(i, "item", 3, 0);
	var s = ve(), c = g(s), l = (e) => {
		X(e, {
			get item() {
				return o();
			},
			t: "1"
		});
	};
	n(c, (e) => {
		o() && e(l);
	}), k(s), h(() => d(s, 1, t(a()), "svelte-16yt0xh")), e(r, s);
}
// src/modules/arena/arenaJoin/WearingGrid.svelte
var ye = i("<div class=\"grid svelte-vs4nvm\"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>");
function be(t, n) {
	b(n, !0);
	let r = S(n, "equipment", 3, 0), i = (e, t) => e && e.find((e) => e.t === Y.indexOf(t));
	var a = ye(), o = g(a);
	{
		let e = E(() => i(r(), "Gloves"));
		Q(o, {
			class: "med",
			get item() {
				return x(e);
			}
		});
	}
	var s = C(o, 2);
	{
		let e = E(() => i(r(), "Helmet"));
		Q(s, {
			class: "med",
			get item() {
				return x(e);
			}
		});
	}
	var c = C(s, 2);
	{
		let e = E(() => i(r(), "Amulet"));
		Q(c, {
			class: "sml",
			get item() {
				return x(e);
			}
		});
	}
	var l = C(c, 2);
	{
		let e = E(() => i(r(), "Weapon"));
		Q(l, {
			class: "lrg",
			get item() {
				return x(e);
			}
		});
	}
	var u = C(l, 2);
	{
		let e = E(() => i(r(), "Armor"));
		Q(u, {
			class: "lrg",
			get item() {
				return x(e);
			}
		});
	}
	var d = C(u, 2);
	{
		let e = E(() => i(r(), "Shield"));
		Q(d, {
			class: "lrg",
			get item() {
				return x(e);
			}
		});
	}
	var f = C(d, 2);
	{
		let e = E(() => i(r(), "Ring"));
		Q(f, {
			class: "sml",
			get item() {
				return x(e);
			}
		});
	}
	var p = C(f, 2);
	{
		let e = E(() => i(r(), "Boots"));
		Q(p, {
			class: "med",
			get item() {
				return x(e);
			}
		});
	}
	var m = C(p, 2);
	{
		let e = E(() => i(r(), "Rune"));
		Q(m, {
			class: "sml",
			get item() {
				return x(e);
			}
		});
	}
	k(a), e(t, a), _();
}
// src/modules/arena/arenaJoin/Wearing.svelte
var $ = i("<option> </option>"), xe = i("<div><div class=\"innerColumnHeader svelte-drdg2\"><div class=\"flex svelte-drdg2\">Inventory <select class=\"svelte-drdg2\"></select></div></div> <!></div>");
function Se(t, n) {
	b(n, !0);
	let i = v(0), o = v(0), c = v(0), d = ({ a: e }) => x(i).some(({ a: t }) => t === e), f = ({ items: e }) => e.every(d), m = (e, t) => !e || !t.length ? e || [] : e.map((e) => {
		let n = t.find((t) => t.inv_id === e.a);
		return {
			...e,
			t: n?.type
		};
	});
	async function S() {
		let [e, t, n] = await U([
			F(),
			V(),
			I()
		]);
		if (e?.r && t?.r && n?.items) {
			w(i, m(e.r.equipment, n.items), !0);
			let r = t.r.find(f);
			w(c, r?.id ?? -1, !0);
			let a = t.r.map((e) => ({
				...e,
				items: m(e.items, n.items)
			}));
			w(o, [...r ? [] : [{
				id: -1,
				name: "Primary",
				items: x(i)
			}], ...a], !0);
		}
	}
	let E = (e) => K("table[width=\"300\"] b", e).slice(1).map((e) => G("td", e.parentNode.nextElementSibling.children[0]));
	async function O() {
		await _e(x(c));
		let e = await H(window.location.href);
		w(i, x(o).find(({ id: e }) => e === x(c)).items, !0);
		let t = J(e), n = E(t).map((e) => W(e));
		E().forEach((e, t) => q(n[t], e));
	}
	var A = p(), j = T(A);
	a(j, S, null, (t) => {
		var n = xe(), a = g(n), d = g(a), f = C(g(d));
		s(f, 21, () => x(o), ({ id: e, name: t }) => e, (t, n) => {
			let r = () => x(n).id, i = () => x(n).name;
			var a = $(), o = y(a, !0), s = {};
			h(() => {
				a.disabled = r() === -1 && x(c) !== -1, l(o, i()), s !== (s = r()) && (a.value = (a.__value = s) ?? "");
			}), e(t, a);
		}), k(f), u(f), k(d), k(a), be(C(a, 2), { get equipment() {
			return x(i);
		} }), k(n), r("change", f, O), D(f, () => x(c), (e) => w(c, e)), e(t, n);
	}), e(t, A), _();
}
m(["change"]);
// src/modules/arena/arenaJoin/ArenaJoin.svelte
var Ce = i("<!> <!>", 1);
function we(t) {
	var n = Ce(), r = T(n);
	me(r, {}), Se(C(r, 2), {}), e(t, n);
}
// src/modules/arena/arenaJoin/arenaJoin.js
function Te() {
	return o(we, { target: M() });
}
function Ee() {
	M() && (A("arenaTypeTabs") ? ee() : (j(), Te()));
}
export { Ee as default };

//# sourceMappingURL=arenaJoin-3UpHt42t.js.map