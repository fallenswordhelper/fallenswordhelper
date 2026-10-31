import { t as e } from "./getText-BqjgTHLv.js";
import { Et as t, G as n, i as r, nt as i } from "./constants-CenxlFMY.js";
import { t as a } from "./getValue-sxwJaOE3.js";
import { t as o } from "./setValue-B2O8DHLF.js";
import { t as s } from "./calf-SqS2SeU4.js";
import { t as c } from "./task-97dxbWda.js";
import { B as l, F as ee, G as u, H as d, L as f, M as p, P as m, R as h, S as te, U as g, W as _, Z as v, et as y, ft as b, lt as ne, nt as re, pt as x, q as S, r as C, rt as w, st as ie, tt as T, vt as E, x as ae, yt as D } from "./disclose-version-gxrYovMN.js";
import { t as oe } from "./arrayFrom-CKk6qt2j.js";
import { t as se } from "./getTextTrim-CvXe85fp.js";
import { t as O } from "./partial-Bo20zBni.js";
import { t as ce } from "./layout-B2Q1UoM2.js";
import { t as k } from "./sendEvent-yx1DwCDA.js";
import { t as A } from "./entries-PXiXtjwA.js";
import { t as j } from "./_dataAccess-BLVLQyDJ.js";
import { t as M } from "./profile-BZrU9oa_.js";
import { t as le } from "./onclick-nv-Fl1th.js";
import { t as N } from "./querySelectorArray-C70U47NF.js";
import { t as P } from "./closestTr-BGwSv-6S.js";
import { t as F } from "./fromEntries-BytjDDMx.js";
import { t as I } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as L } from "./hasClass-B8BlPKl4.js";
import { t as R } from "./LinkBtnBracketed-C2pSnAm8.js";
import { t as ue } from "./inventory-BxKMawFk.js";
import { t as de } from "./doStatTotal-8M0EYmHp.js";
import { t as fe } from "./chunk-A8FcSK6x.js";
import { t as z } from "./toggleForce-DTdXZaY8.js";
import { t as B } from "./batch-DHVH9bcw.js";
import { t as pe } from "./errorDialog-CK0T_lOR.js";
import { t as me } from "./FolderButtons-LIoKEslm.js";
import { t as he } from "./arrayFromRadioNodeList-D_c970RI.js";
import { n as ge, r as _e, t as ve } from "./dropItem-6GfRba8s.js";
// src/modules/guild/inventory/storeitems/CheckAll.svelte
var ye = d("<button class=\"custombutton svelte-wn7xht\" type=\"button\">Check All</button>&nbsp;", 1);
function be(e, t) {
	x(t, !0);
	function n() {
		k("storeitems", "Check All"), t.dispatchCheckAll();
	}
	var r = ye(), i = T(r);
	E(), u("click", i, n), l(e, r), b();
}
_(["click"]);
// src/modules/guild/inventory/storeitems/FolderFilter.svelte
var xe = d("<tr class=\"fshCenter\"><td colspan=\"3\" class=\"svelte-105bt0i\"><!></td></tr>");
function Se(e, t) {
	x(t, !0);
	let n = C(t, "inv", 19, () => ({ folders: {} }));
	var r = xe(), i = y(r), a = y(i);
	me(a, {
		get doFilter() {
			return t.doFilter;
		},
		get folders() {
			return n().folders;
		}
	}), D(i), D(r), l(e, r), b();
}
// src/modules/guild/inventory/storeitems/getCheckboxes.js
var V = 0, Ce = 0;
function H() {
	return Ce ||= (V = document.forms[0]?.elements["storeIndex[]"], !0), V;
}
// src/modules/guild/inventory/storeitems/getCheckboxesArray.js
function U() {
	let e = H();
	return e ? he(e) : [];
}
// src/modules/guild/inventory/storeitems/doFolderFilter.js
function we(e, t, n) {
	n.checked = !1;
	let r = P(n), i = e.items[n.value]?.folder_id, a = t !== -2 && t !== i;
	z(r, a), z(r.nextElementSibling, a);
}
function Te(e, t) {
	k("storeitems", "Filter Folder"), B([
		3,
		U(),
		0,
		O(we, e, Number(t))
	]);
}
function Ee(e, t) {
	f(Se, {
		anchor: t,
		props: {
			doFilter: O(Te, e),
			inv: e
		},
		target: t.parentNode
	});
}
// src/modules/app/profile/sendtofolder.js
function De(e, t) {
	return M({
		subcmd: "sendtofolder",
		folder_id: e,
		folderItem: t
	});
}
// src/modules/_dataAccess/daSendToFolder.js
async function Oe(e, t) {
	return await _e(t, e), { r: t };
}
function ke(e, t) {
	return j(De, Oe, e, t);
}
// src/modules/guild/inventory/storeitems/MoveItems.svelte
var Ae = d("<option> </option>"), je = d("<tr><td class=\"fshCenter\"><span>Move selected items to:</span> <select class=\"customselect\"></select> <span>&nbsp;</span> <button class=\"custombutton svelte-1qoifp3\" type=\"button\">Move</button></td></tr>");
function Me(e, t) {
	x(t, !0);
	let n = ne(void 0);
	function r() {
		t.moveItemsToFolder(S(n));
	}
	var i = je(), a = y(i), o = w(y(a), 2);
	p(o, 21, () => t.folders, (e) => e.id, (e, t) => {
		var n = Ae(), r = re(n, !0), i = {};
		v(() => {
			h(r, S(t).name), i !== (i = S(t).id) && (n.value = (n.__value = i) ?? "");
		}), l(e, n);
	}), D(o), te(o);
	var s = w(o, 4);
	D(a), D(i), ae(o, () => S(n), (e) => ie(n, e)), u("click", s, r), l(e, i), b();
}
_(["click"]);
// src/modules/guild/inventory/storeitems/doMoveItems.js
function Ne(e, t, n) {
	e.items[n].folder_id = Number(t);
}
function Pe(e, t, n) {
	n.checked = !1, Ne(e, t, n.value);
	let r = P(n);
	z(r, !0), z(r.nextElementSibling, !0);
}
async function Fe(e, t, n) {
	(await ke(t, n.map((e) => e.value))).s && n.forEach(O(Pe, e, t));
}
function Ie(e, t) {
	k("storeitems", "Move to Folder");
	let n = N("[name=\"storeIndex[]\"]:checked");
	fe(30, n).forEach(O(Fe, e, t));
}
function Le(e, t) {
	let n = [{
		id: "-1",
		name: "Main"
	}, ...A(e.folders).map(([e, t]) => ({
		id: e,
		name: t
	}))];
	f(Me, {
		anchor: t,
		props: {
			folders: n,
			moveItemsToFolder: O(Ie, e)
		},
		target: t.parentNode
	});
}
// src/modules/guild/inventory/storeitems/getCheckboxesVisible.js
function W() {
	return U().filter((e) => !L("fshHide", P(e)));
}
// src/modules/guild/inventory/storeitems/getInv.js
var G = null;
async function Re() {
	let e = await ue();
	if (e?.items) return {
		folders: e.folders,
		items: F(e.items.map((e) => [e.inv_id, e]))
	};
}
function K() {
	return G ||= Re(), G;
}
// src/modules/app/profile/dodropitems.js
function ze(e) {
	return M({
		subcmd: "dodropitems",
		items: e
	});
}
// src/modules/_dataAccess/daDropItems.js
async function Be(e) {
	let t = await ve(e), n = { s: t.r === 0 };
	return n.s ? n.r = {
		items: [],
		deleted_items: e
	} : n.e = { message: t.m }, n;
}
function Ve(e) {
	return j(ze, Be, e);
}
// src/modules/guild/inventory/storeitems/buttonPress.js
function q(e) {
	return P(e.target).cells[0].children[0].value;
}
async function He(e) {
	let { items: t } = await K();
	k("storeitems", "Check All of Type"), W().filter((n) => t[n.value] && t[n.value].item_id === t[q(e)].item_id).forEach((e) => {
		e.checked = !e.disabled && !e.checked;
	});
}
function Ue(e) {
	let t = P(e);
	t.cells[0].children[0].disabled = !0, N(".actionButton", t).forEach((e) => {
		e.disabled = !0, e.textContent = "", e.removeAttribute("data-tooltip"), e.classList.add("inProgress");
	}), e.blur(), e.classList.add("fshSpinner", "fshSpinner12");
}
function We(e, t) {
	e.target.classList.remove("fshSpinner", "fshSpinner12"), e.target.classList.add("fshGreen"), e.target.textContent = t;
}
async function J(e, t, n) {
	Ue(e.target);
	let r = await t([q(e)]);
	r?.s ? We(e, n) : pe(r);
}
var Ge = [
	["Check All", He],
	["Quick Send", (e) => {
		k("storeitems", "Quick Send"), J(e, ge, "Sent");
	}],
	["Quick Drop", (e) => {
		k("storeitems", "Quick Drop"), J(e, Ve, "Dropped");
	}]
];
function Ke(t) {
	if (t.target.tagName === "A" && ["AH", "UFSG"].includes(t.target.textContent) && k("storeitems", t.target.textContent), t.target.tagName !== "BUTTON" || L("custombutton", t.target)) return;
	let n = Ge.find(([n]) => n === e(t.target));
	n && n[1](t);
}
// src/modules/guild/inventory/storeitems/constants.js
var qe = [
	"showExtraLinks",
	"enableItemColoring",
	"checkAllOfType",
	"showQuickSendLinks",
	"showQuickDropLinks"
], Je = d("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1), Ye = d("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>&nbsp; <!>", 1);
function Xe(e, t) {
	x(t, !0);
	let n = (e) => e ? "Hide" : "Show", r = C(t, "showExtraLinks", 15, !1), i = C(t, "showQuickDropLinks", 15, !1);
	function a() {
		k("storeitems", "toggleShowExtraLinks"), r(!r()), o("showExtraLinks", r()), t.doExtraLinks(r());
	}
	function c() {
		k("storeitems", "toggleShowQuickDropLinks"), i(!i()), o("showQuickDropLinks", i()), t.doDropLinks(i());
	}
	function u() {
		k("storeitems", "selectLocked"), t.doSelectLocked();
	}
	var d = Ye(), f = T(d);
	m(f, () => ({ "--button-width": "11.8em" })), R(f.lastChild, {
		onclick: a,
		children: (e, t) => {
			E();
			var i = g();
			v((e) => h(i, `${e ?? ""} AH and UFSG Links`), [() => n(r())]), l(e, i);
		},
		$$slots: { default: !0 }
	}), D(f);
	var p = w(f, 2);
	m(p, () => ({ "--button-width": "10.6em" })), R(p.lastChild, {
		onclick: c,
		children: (e, t) => {
			E();
			var r = g();
			v((e) => h(r, `${e ?? ""} Quick Drop links`), [() => n(i())]), l(e, r);
		},
		$$slots: { default: !0 }
	}), D(p);
	var te = w(p, 2), _ = (e) => {
		var t = Je(), n = T(t);
		m(n, () => ({ "--button-width": "10.8em" })), R(n.lastChild, {
			onclick: u,
			children: (e, t) => {
				E();
				var n = g("Select All Guild Locked");
				l(e, n);
			},
			$$slots: { default: !0 }
		}), D(n), l(e, t);
	};
	ee(te, (e) => {
		s.subcmd2 === "storeitems" && e(_);
	}), l(e, d), b();
}
// src/modules/guild/inventory/storeitems/getItems.js
var Y = null;
function Ze(e, t) {
	if (t.item_id !== 13699) return t.item_name;
	let n = e.find((e) => e.value === String(t.inv_id));
	return n ? se(n.parentNode.parentNode.children[2]) : t.item_name;
}
async function Qe(e) {
	let t = await K();
	return t?.items ? F(A(t.items).map(([t, n]) => [t, {
		...n,
		item_name: Ze(e, n)
	}])) : {};
}
function $e(e) {
	return Y ||= Qe(e), Y;
}
async function et() {
	let e = U();
	if (!e.length) return [];
	let t = await $e(e);
	return e.map((e) => [P(e).cells[2], t[e.value]]).filter(([, e]) => e);
}
// src/modules/guild/inventory/storeitems/updateDomItems.js
function tt(e, t) {
	return e[t] = (e[t] || 0) + 1, e;
}
function nt(e) {
	return {
		...e.map(([, e]) => e.item_id).reduce(tt, {}),
		13699: 1
	};
}
var rt = (e) => ` data-tooltip="INSTANTLY ${e} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`, X = (e, t, n) => ` [<button class="fshStoreItemsButton ${e}"${t}>${n}</button>]`, Z = (e, t, n) => X(`${e} actionButton tooltip-multiline fshNoWrap`, rt(t), `Quick ${n}`), Q = (e, t, n) => `[<a href="${e}"${t}>${n}</a>]`;
function it(e) {
	return e.bound ? "<span class=\"aHSpacer\"></span>" : Q(`${r}${encodeURIComponent(e.item_name)}`, "", "AH");
}
var at = (e) => Q(`${i}items${n}view&item_id=${e.item_id}`, " target=\"_blank\"", "UFSG"), ot = (e, t, n) => e[2] && t[n.item_id] > 1, st = (e, t) => e[3] && (!t.bound || t.guild_tag !== -1), ct = (e, t) => e[4] && t.guild_tag === -1;
function lt(e, t) {
	return t[0]() ? e + t[1]() : e;
}
function ut(e, t, n) {
	return [
		[() => e[0], () => `${it(n)} ${at(n)}`],
		[() => !0, () => `&nbsp;${n.item_name}`],
		[() => ot(e, t, n), () => X("fshBlack", "", "Check All")],
		[() => st(e, n), () => Z("fshBlue", "SENDS", "Send")],
		[() => ct(e, n), () => Z("fshRed", "DROP", "Drop")]
	];
}
function dt(e, n, [r, i]) {
	let a = r;
	e[1] && (a.className = t[i.rarity].clas);
	let o = ut(e, n, i).reduce(lt, "");
	a.innerHTML !== o && (a.innerHTML = o);
}
async function $(e) {
	let t = await et(), n = e[2] ? nt(t) : [];
	c(3, B, [[
		3,
		t,
		0,
		O(dt, e, n)
	]]);
}
// src/modules/guild/inventory/storeitems/doToggleButtons.js
async function ft() {
	let e = W();
	if (!e.length) return;
	let t = await K();
	t.items && e.map((e) => [e, t.items[e.value]]).filter(([, e]) => e).forEach(([e, t]) => {
		e.checked = !e.disabled && t.guild_tag !== -1;
	});
}
function pt(e) {
	return function(t) {
		e[0] = t, $(e);
	};
}
function mt(e) {
	return function(t) {
		e[4] = t, $(e);
	};
}
function ht(e) {
	let [t] = document.forms;
	f(Xe, {
		props: {
			doDropLinks: mt(e),
			doExtraLinks: pt(e),
			doSelectLocked: ft,
			showExtraLinks: e[0],
			showQuickDropLinks: e[4]
		},
		target: t.parentNode.children[5].children[0]
	});
}
// src/modules/guild/inventory/storeitems/injectStoreItems.js
function gt() {
	if (I() || !H()) return;
	let e = qe.map((e) => a(e));
	de(), ht(e), e.some((e) => e) && $(e), le(ce(), Ke);
}
// src/modules/guild/inventory/storeitems/storeitems.js
async function _t(e) {
	if (!a("enableFolderFilter")) return;
	let t = await K();
	t?.folders && (Ee(t, e), Le(t, e));
}
function vt() {
	W().forEach((e) => {
		e.checked = !e.disabled && !e.checked;
	});
}
function yt(e) {
	let { elements: t } = e;
	if (!t?.length) return;
	let [n] = oe(t).filter((e) => e.type === "submit");
	n && f(be, {
		anchor: n,
		props: { dispatchCheckAll: vt },
		target: n.parentNode
	});
}
function bt() {
	if (I()) return;
	let [e] = document.forms;
	e && (_t(e), yt(e), gt());
}
export { bt as default };

//# sourceMappingURL=storeitems-DsTLYKtg.js.map