import { t as e } from "./arrayFrom-CKk6qt2j.js";
import { t } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as n } from "./getValue-vrUqpo0a.js";
import { B as r, F as i, G as a, H as o, L as s, M as c, P as l, R as u, S as d, U as f, W as p, Z as m, et as h, ft as g, lt as _, nt as v, pt as y, q as b, r as x, rt as S, st as ee, tt as C, vt as w, x as te, yt as T } from "./disclose-version-Cj0Bwtvz.js";
import { t as E } from "./sendEvent-Co2_qySS.js";
import { t as D } from "./batch-B3DxuTgO.js";
import { t as O } from "./closestTr-BGwSv-6S.js";
import { t as k } from "./partial-Bo20zBni.js";
import { t as A } from "./toggleForce-DTdXZaY8.js";
import { t as ne } from "./FolderButtons-JJgBqK9D.js";
import { t as re } from "./arrayFromRadioNodeList-D_c970RI.js";
import { n as ie, r as ae, t as oe } from "./dropItem-CBsUjGY5.js";
import { t as j } from "./profile-By-S2hRI.js";
import { t as M } from "./_dataAccess-BLVLQyDJ.js";
import { t as se } from "./chunk-A8FcSK6x.js";
import { t as N } from "./entries-PXiXtjwA.js";
import { t as P } from "./querySelectorArray-C70U47NF.js";
import { t as F } from "./hasClass-B8BlPKl4.js";
import { t as ce } from "./inventory-BG4i9XuW.js";
import { t as I } from "./fromEntries-BytjDDMx.js";
import { t as le } from "./onclick-nv-Fl1th.js";
import { t as ue } from "./doStatTotal-BJ2H-Y2H.js";
import { t as de } from "./layout-B2Q1UoM2.js";
import { t as fe } from "./errorDialog-CK0T_lOR.js";
import { t as pe } from "./getText-BqjgTHLv.js";
import { t as L } from "./LinkBtnBracketed-C70NVX79.js";
import { t as me } from "./calf-SqS2SeU4.js";
import { t as R } from "./setValue-D-C74rTg.js";
import { Et as z, G as he, i as ge, nt as _e } from "./constants-CenxlFMY.js";
import { t as ve } from "./task-C5UKL2RH.js";
import { t as ye } from "./getTextTrim-CvXe85fp.js";
// src/modules/guild/inventory/storeitems/CheckAll.svelte
var be = o("<button class=\"custombutton svelte-wn7xht\" type=\"button\">Check All</button>&nbsp;", 1);
function xe(e, t) {
	y(t, !0);
	function n() {
		E("storeitems", "Check All"), t.dispatchCheckAll();
	}
	var i = be(), o = C(i);
	w(), a("click", o, n), r(e, i), g();
}
p(["click"]);
// src/modules/guild/inventory/storeitems/FolderFilter.svelte
var Se = o("<tr class=\"fshCenter\"><td colspan=\"3\" class=\"svelte-105bt0i\"><!></td></tr>");
function Ce(e, t) {
	y(t, !0);
	let n = x(t, "inv", 19, () => ({ folders: {} }));
	var i = Se(), a = h(i), o = h(a);
	ne(o, {
		get doFilter() {
			return t.doFilter;
		},
		get folders() {
			return n().folders;
		}
	}), T(a), T(i), r(e, i), g();
}
// src/modules/guild/inventory/storeitems/getCheckboxes.js
var B = 0, we = 0;
function V() {
	return we ||= (B = document.forms[0]?.elements["storeIndex[]"], !0), B;
}
// src/modules/guild/inventory/storeitems/getCheckboxesArray.js
function H() {
	let e = V();
	return e ? re(e) : [];
}
// src/modules/guild/inventory/storeitems/doFolderFilter.js
function Te(e, t, n) {
	n.checked = !1;
	let r = O(n), i = e.items[n.value]?.folder_id, a = t !== -2 && t !== i;
	A(r, a), A(r.nextElementSibling, a);
}
function Ee(e, t) {
	E("storeitems", "Filter Folder"), D([
		3,
		H(),
		0,
		k(Te, e, Number(t))
	]);
}
function De(e, t) {
	s(Ce, {
		anchor: t,
		props: {
			doFilter: k(Ee, e),
			inv: e
		},
		target: t.parentNode
	});
}
// src/modules/app/profile/sendtofolder.js
function Oe(e, t) {
	return j({
		subcmd: "sendtofolder",
		folder_id: e,
		folderItem: t
	});
}
// src/modules/_dataAccess/daSendToFolder.js
async function ke(e, t) {
	return await ae(t, e), { r: t };
}
function Ae(e, t) {
	return M(Oe, ke, e, t);
}
// src/modules/guild/inventory/storeitems/MoveItems.svelte
var je = o("<option> </option>"), Me = o("<tr><td class=\"fshCenter\"><span>Move selected items to:</span> <select class=\"customselect\"></select> <span>&nbsp;</span> <button class=\"custombutton svelte-1qoifp3\" type=\"button\">Move</button></td></tr>");
function Ne(e, t) {
	y(t, !0);
	let n = _(void 0);
	function i() {
		t.moveItemsToFolder(b(n));
	}
	var o = Me(), s = h(o), l = S(h(s), 2);
	c(l, 21, () => t.folders, (e) => e.id, (e, t) => {
		var n = je(), i = v(n, !0), a = {};
		m(() => {
			u(i, b(t).name), a !== (a = b(t).id) && (n.value = (n.__value = a) ?? "");
		}), r(e, n);
	}), T(l), d(l);
	var f = S(l, 4);
	T(s), T(o), te(l, () => b(n), (e) => ee(n, e)), a("click", f, i), r(e, o), g();
}
p(["click"]);
// src/modules/guild/inventory/storeitems/doMoveItems.js
function Pe(e, t, n) {
	e.items[n].folder_id = Number(t);
}
function Fe(e, t, n) {
	n.checked = !1, Pe(e, t, n.value);
	let r = O(n);
	A(r, !0), A(r.nextElementSibling, !0);
}
async function Ie(e, t, n) {
	(await Ae(t, n.map((e) => e.value))).s && n.forEach(k(Fe, e, t));
}
function Le(e, t) {
	E("storeitems", "Move to Folder");
	let n = P("[name=\"storeIndex[]\"]:checked");
	se(30, n).forEach(k(Ie, e, t));
}
function Re(e, t) {
	let n = [{
		id: "-1",
		name: "Main"
	}, ...N(e.folders).map(([e, t]) => ({
		id: e,
		name: t
	}))];
	s(Ne, {
		anchor: t,
		props: {
			folders: n,
			moveItemsToFolder: k(Le, e)
		},
		target: t.parentNode
	});
}
// src/modules/guild/inventory/storeitems/getCheckboxesVisible.js
function U() {
	return H().filter((e) => !F("fshHide", O(e)));
}
// src/modules/guild/inventory/storeitems/getInv.js
var W = null;
async function ze() {
	let e = await ce();
	if (e?.items) return {
		folders: e.folders,
		items: I(e.items.map((e) => [e.inv_id, e]))
	};
}
function G() {
	return W ||= ze(), W;
}
// src/modules/app/profile/dodropitems.js
function Be(e) {
	return j({
		subcmd: "dodropitems",
		items: e
	});
}
// src/modules/_dataAccess/daDropItems.js
async function Ve(e) {
	let t = await oe(e), n = { s: t.r === 0 };
	return n.s ? n.r = {
		items: [],
		deleted_items: e
	} : n.e = { message: t.m }, n;
}
function He(e) {
	return M(Be, Ve, e);
}
// src/modules/guild/inventory/storeitems/buttonPress.js
function K(e) {
	return O(e.target).cells[0].children[0].value;
}
async function Ue(e) {
	let { items: t } = await G();
	E("storeitems", "Check All of Type"), U().filter((n) => t[n.value] && t[n.value].item_id === t[K(e)].item_id).forEach((e) => {
		e.checked = !e.disabled && !e.checked;
	});
}
function We(e) {
	let t = O(e);
	t.cells[0].children[0].disabled = !0, P(".actionButton", t).forEach((e) => {
		e.disabled = !0, e.textContent = "", e.removeAttribute("data-tooltip"), e.classList.add("inProgress");
	}), e.blur(), e.classList.add("fshSpinner", "fshSpinner12");
}
function Ge(e, t) {
	e.target.classList.remove("fshSpinner", "fshSpinner12"), e.target.classList.add("fshGreen"), e.target.textContent = t;
}
async function q(e, t, n) {
	We(e.target);
	let r = await t([K(e)]);
	r?.s ? Ge(e, n) : fe(r);
}
var Ke = [
	["Check All", Ue],
	["Quick Send", (e) => {
		E("storeitems", "Quick Send"), q(e, ie, "Sent");
	}],
	["Quick Drop", (e) => {
		E("storeitems", "Quick Drop"), q(e, He, "Dropped");
	}]
];
function qe(e) {
	if (e.target.tagName === "A" && ["AH", "UFSG"].includes(e.target.textContent) && E("storeitems", e.target.textContent), e.target.tagName !== "BUTTON" || F("custombutton", e.target)) return;
	let t = Ke.find(([t]) => t === pe(e.target));
	t && t[1](e);
}
// src/modules/guild/inventory/storeitems/constants.js
var Je = [
	"showExtraLinks",
	"enableItemColoring",
	"checkAllOfType",
	"showQuickSendLinks",
	"showQuickDropLinks"
], Ye = o("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1), Xe = o("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>&nbsp; <!>", 1);
function Ze(e, t) {
	y(t, !0);
	let n = (e) => e ? "Hide" : "Show", a = x(t, "showExtraLinks", 15, !1), o = x(t, "showQuickDropLinks", 15, !1);
	function s() {
		E("storeitems", "toggleShowExtraLinks"), a(!a()), R("showExtraLinks", a()), t.doExtraLinks(a());
	}
	function c() {
		E("storeitems", "toggleShowQuickDropLinks"), o(!o()), R("showQuickDropLinks", o()), t.doDropLinks(o());
	}
	function d() {
		E("storeitems", "selectLocked"), t.doSelectLocked();
	}
	var p = Xe(), h = C(p);
	l(h, () => ({ "--button-width": "11.8em" })), L(h.lastChild, {
		onclick: s,
		children: (e, t) => {
			w();
			var i = f();
			m((e) => u(i, `${e ?? ""} AH and UFSG Links`), [() => n(a())]), r(e, i);
		},
		$$slots: { default: !0 }
	}), T(h);
	var _ = S(h, 2);
	l(_, () => ({ "--button-width": "10.6em" })), L(_.lastChild, {
		onclick: c,
		children: (e, t) => {
			w();
			var i = f();
			m((e) => u(i, `${e ?? ""} Quick Drop links`), [() => n(o())]), r(e, i);
		},
		$$slots: { default: !0 }
	}), T(_);
	var v = S(_, 2), b = (e) => {
		var t = Ye(), n = C(t);
		l(n, () => ({ "--button-width": "10.8em" })), L(n.lastChild, {
			onclick: d,
			children: (e, t) => {
				w();
				var n = f("Select All Guild Locked");
				r(e, n);
			},
			$$slots: { default: !0 }
		}), T(n), r(e, t);
	};
	i(v, (e) => {
		me.subcmd2 === "storeitems" && e(b);
	}), r(e, p), g();
}
// src/modules/guild/inventory/storeitems/getItems.js
var J = null;
function Qe(e, t) {
	if (t.item_id !== 13699) return t.item_name;
	let n = e.find((e) => e.value === String(t.inv_id));
	return n ? ye(n.parentNode.parentNode.children[2]) : t.item_name;
}
async function $e(e) {
	let t = await G();
	return t?.items ? I(N(t.items).map(([t, n]) => [t, {
		...n,
		item_name: Qe(e, n)
	}])) : {};
}
function et(e) {
	return J ||= $e(e), J;
}
async function tt() {
	let e = H();
	if (!e.length) return [];
	let t = await et(e);
	return e.map((e) => [O(e).cells[2], t[e.value]]).filter(([, e]) => e);
}
// src/modules/guild/inventory/storeitems/updateDomItems.js
function nt(e, t) {
	return e[t] = (e[t] || 0) + 1, e;
}
function rt(e) {
	return {
		...e.map(([, e]) => e.item_id).reduce(nt, {}),
		13699: 1
	};
}
var it = (e) => ` data-tooltip="INSTANTLY ${e} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`, Y = (e, t, n) => ` [<button class="fshStoreItemsButton ${e}"${t}>${n}</button>]`, X = (e, t, n) => Y(`${e} actionButton tooltip-multiline fshNoWrap`, it(t), `Quick ${n}`), Z = (e, t, n) => `[<a href="${e}"${t}>${n}</a>]`;
function at(e) {
	return e.bound ? "<span class=\"aHSpacer\"></span>" : Z(`${ge}${encodeURIComponent(e.item_name)}`, "", "AH");
}
var ot = (e) => Z(`${_e}items${he}view&item_id=${e.item_id}`, " target=\"_blank\"", "UFSG"), st = (e, t, n) => e[2] && t[n.item_id] > 1, ct = (e, t) => e[3] && (!t.bound || t.guild_tag !== -1), lt = (e, t) => e[4] && t.guild_tag === -1;
function ut(e, t) {
	return t[0]() ? e + t[1]() : e;
}
function dt(e, t, n) {
	return [
		[() => e[0], () => `${at(n)} ${ot(n)}`],
		[() => !0, () => `&nbsp;${n.item_name}`],
		[() => st(e, t, n), () => Y("fshBlack", "", "Check All")],
		[() => ct(e, n), () => X("fshBlue", "SENDS", "Send")],
		[() => lt(e, n), () => X("fshRed", "DROP", "Drop")]
	];
}
function ft(e, t, [n, r]) {
	let i = n;
	e[1] && (i.className = z[r.rarity].clas);
	let a = dt(e, t, r).reduce(ut, "");
	i.innerHTML !== a && (i.innerHTML = a);
}
async function Q(e) {
	let t = await tt(), n = e[2] ? rt(t) : [];
	ve(3, D, [[
		3,
		t,
		0,
		k(ft, e, n)
	]]);
}
// src/modules/guild/inventory/storeitems/doToggleButtons.js
async function $() {
	let e = U();
	if (!e.length) return;
	let t = await G();
	t.items && e.map((e) => [e, t.items[e.value]]).filter(([, e]) => e).forEach(([e, t]) => {
		e.checked = !e.disabled && t.guild_tag !== -1;
	});
}
function pt(e) {
	return function(t) {
		e[0] = t, Q(e);
	};
}
function mt(e) {
	return function(t) {
		e[4] = t, Q(e);
	};
}
function ht(e) {
	let [t] = document.forms;
	s(Ze, {
		props: {
			doDropLinks: mt(e),
			doExtraLinks: pt(e),
			doSelectLocked: $,
			showExtraLinks: e[0],
			showQuickDropLinks: e[4]
		},
		target: t.parentNode.children[5].children[0]
	});
}
// src/modules/guild/inventory/storeitems/injectStoreItems.js
function gt() {
	if (t() || !V()) return;
	let e = Je.map((e) => n(e));
	ue(), ht(e), e.some((e) => e) && Q(e), le(de(), qe);
}
// src/modules/guild/inventory/storeitems/storeitems.js
async function _t(e) {
	if (!n("enableFolderFilter")) return;
	let t = await G();
	t?.folders && (De(t, e), Re(t, e));
}
function vt() {
	U().forEach((e) => {
		e.checked = !e.disabled && !e.checked;
	});
}
function yt(t) {
	let { elements: n } = t;
	if (!n?.length) return;
	let [r] = e(n).filter((e) => e.type === "submit");
	r && s(xe, {
		anchor: r,
		props: { dispatchCheckAll: vt },
		target: r.parentNode
	});
}
function bt() {
	if (t()) return;
	let [e] = document.forms;
	e && (_t(e), yt(e), gt());
}
export { bt as default };

//# sourceMappingURL=storeitems-CelIN7S_.js.map