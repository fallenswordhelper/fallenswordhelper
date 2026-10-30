import { t as e } from "./getText-BqjgTHLv.js";
import { Et as t, G as n, i as r, nt as i } from "./constants-CenxlFMY.js";
import { t as a } from "./getValue-Aap0zlcO.js";
import { t as o } from "./setValue-B2O8DHLF.js";
import { t as s } from "./calf-SqS2SeU4.js";
import { t as c } from "./task-kqK4S00s.js";
import { B as l, F as ee, G as u, H as d, L as f, M as p, P as m, R as h, S as g, U as _, W as v, Z as y, et as b, ft as x, lt as te, nt as ne, pt as S, q as C, r as w, rt as T, st as re, tt as E, vt as D, x as ie, yt as O } from "./disclose-version-gxrYovMN.js";
import { t as ae } from "./getTextTrim-CvXe85fp.js";
import { t as oe } from "./partial-Bo20zBni.js";
import { t as se } from "./layout-B2Q1UoM2.js";
import { t as k } from "./sendEvent-DkxfZozg.js";
import { t as ce } from "./entries-PXiXtjwA.js";
import { t as A } from "./_dataAccess-BLVLQyDJ.js";
import { t as j } from "./profile-BZrU9oa_.js";
import { t as le } from "./onclick-nv-Fl1th.js";
import { t as ue } from "./querySelectorArray-C70U47NF.js";
import { t as M } from "./closestTr-BGwSv-6S.js";
import { t as N } from "./fromEntries-BytjDDMx.js";
import { t as de } from "./jQueryNotPresent-Cx9lm32d.js";
import { t as P } from "./hasClass-B8BlPKl4.js";
import { t as F } from "./LinkBtnBracketed-C2pSnAm8.js";
import { t as fe } from "./inventory-BxKMawFk.js";
import { t as pe } from "./doStatTotal-Dt38z6sf.js";
import { t as me } from "./batch-D3pHvEAg.js";
import { t as he } from "./errorDialog-CK0T_lOR.js";
import { t as ge } from "./arrayFromRadioNodeList-D_c970RI.js";
import { n as I, r as L, t as _e } from "./dropItem-CTXtw7rd.js";
// src/modules/guild/inventory/storeitems/getCheckboxes.js
var R = 0, z = 0;
function B() {
	if (!z) {
		let e = s.subcmd === "dropitems" ? "removeIndex[]" : "storeIndex[]";
		R = document.forms[0]?.elements[e], z = !0;
	}
	return R;
}
// src/modules/guild/inventory/storeitems/getCheckboxesArray.js
function V() {
	let e = B();
	return e ? ge(e) : [];
}
// src/modules/app/profile/sendtofolder.js
function ve(e, t) {
	return j({
		subcmd: "sendtofolder",
		folder_id: e,
		folderItem: t
	});
}
// src/modules/_dataAccess/daSendToFolder.js
async function ye(e, t) {
	return await L(t, e), { r: t };
}
function be(e, t) {
	return A(ve, ye, e, t);
}
// src/modules/profile/dropitems/MoveItems.svelte
var xe = d("<option> </option>"), Se = d("<tr><td class=\"fshCenter\"><span>Move selected items to:</span> <select class=\"customselect\"></select> <span>&nbsp;</span> <button class=\"custombutton svelte-1r30ou6\" type=\"button\">Move</button></td></tr>");
function Ce(e, t) {
	S(t, !0);
	let n = te(void 0);
	function r() {
		t.moveItemsToFolder(C(n));
	}
	var i = Se(), a = b(i), o = T(b(a), 2);
	p(o, 21, () => t.folders, (e) => e.id, (e, t) => {
		var n = xe(), r = ne(n, !0), i = {};
		y(() => {
			h(r, C(t).name), i !== (i = C(t).id) && (n.value = (n.__value = i) ?? "");
		}), l(e, n);
	}), O(o), g(o);
	var s = T(o, 4);
	O(a), O(i), ie(o, () => C(n), (e) => re(n, e)), u("click", s, r), l(e, i), x();
}
v(["click"]);
// src/modules/guild/inventory/storeitems/getCheckboxesVisible.js
function H() {
	return V().filter((e) => !P("fshHide", M(e)));
}
// src/modules/guild/inventory/storeitems/getInv.js
var U = null;
async function we() {
	let e = await fe();
	if (e?.items) return {
		folders: e.folders,
		items: N(e.items.map((e) => [e.inv_id, e]))
	};
}
function W() {
	return U ||= we(), U;
}
// src/modules/app/profile/dodropitems.js
function Te(e) {
	return j({
		subcmd: "dodropitems",
		items: e
	});
}
// src/modules/_dataAccess/daDropItems.js
async function Ee(e) {
	let t = await _e(e), n = { s: t.r === 0 };
	return n.s ? n.r = {
		items: [],
		deleted_items: e
	} : n.e = { message: t.m }, n;
}
function G(e) {
	return A(Te, Ee, e);
}
// src/modules/guild/inventory/storeitems/buttonPress.js
function K(e) {
	return M(e.target).cells[0].children[0].value;
}
async function De(e) {
	let { items: t } = await W();
	k("storeitems", "Check All of Type"), H().filter((n) => t[n.value] && t[n.value].item_id === t[K(e)].item_id).forEach((e) => {
		e.checked = !e.disabled && !e.checked;
	});
}
function Oe(e) {
	let t = M(e);
	t.cells[0].children[0].disabled = !0, ue(".actionButton", t).forEach((e) => {
		e.disabled = !0, e.textContent = "", e.removeAttribute("data-tooltip"), e.classList.add("inProgress");
	}), e.blur(), e.classList.add("fshSpinner", "fshSpinner12");
}
function ke(e, t) {
	e.target.classList.remove("fshSpinner", "fshSpinner12"), e.target.classList.add("fshGreen"), e.target.textContent = t;
}
async function q(e, t, n) {
	Oe(e.target);
	let r = await t([K(e)]);
	r?.s ? ke(e, n) : he(r);
}
var Ae = [
	["Check All", De],
	["Quick Send", (e) => {
		k("storeitems", "Quick Send"), q(e, I, "Sent");
	}],
	["Quick Drop", (e) => {
		k("storeitems", "Quick Drop"), q(e, G, "Dropped");
	}]
];
function je(t) {
	if (t.target.tagName === "A" && ["AH", "UFSG"].includes(t.target.textContent) && k("storeitems", t.target.textContent), t.target.tagName !== "BUTTON" || P("custombutton", t.target)) return;
	let n = Ae.find(([n]) => n === e(t.target));
	n && n[1](t);
}
// src/modules/guild/inventory/storeitems/constants.js
var Me = [
	"showExtraLinks",
	"enableItemColoring",
	"checkAllOfType",
	"showQuickSendLinks",
	"showQuickDropLinks"
], Ne = d("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1), Pe = d("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>&nbsp; <svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>&nbsp; <!>", 1);
function Fe(e, t) {
	S(t, !0);
	let n = (e) => e ? "Hide" : "Show", r = w(t, "showExtraLinks", 15, !1), i = w(t, "showQuickDropLinks", 15, !1);
	function a() {
		k("storeitems", "toggleShowExtraLinks"), r(!r()), o("showExtraLinks", r()), t.doExtraLinks(r());
	}
	function c() {
		k("storeitems", "toggleShowQuickDropLinks"), i(!i()), o("showQuickDropLinks", i()), t.doDropLinks(i());
	}
	function u() {
		k("storeitems", "selectLocked"), t.doSelectLocked();
	}
	var d = Pe(), f = E(d);
	m(f, () => ({ "--button-width": "11.8em" })), F(f.lastChild, {
		onclick: a,
		children: (e, t) => {
			D();
			var i = _();
			y((e) => h(i, `${e ?? ""} AH and UFSG Links`), [() => n(r())]), l(e, i);
		},
		$$slots: { default: !0 }
	}), O(f);
	var p = T(f, 2);
	m(p, () => ({ "--button-width": "10.6em" })), F(p.lastChild, {
		onclick: c,
		children: (e, t) => {
			D();
			var r = _();
			y((e) => h(r, `${e ?? ""} Quick Drop links`), [() => n(i())]), l(e, r);
		},
		$$slots: { default: !0 }
	}), O(p);
	var g = T(p, 2), v = (e) => {
		var t = Ne(), n = E(t);
		m(n, () => ({ "--button-width": "10.8em" })), F(n.lastChild, {
			onclick: u,
			children: (e, t) => {
				D();
				var n = _("Select All Guild Locked");
				l(e, n);
			},
			$$slots: { default: !0 }
		}), O(n), l(e, t);
	};
	ee(g, (e) => {
		s.subcmd2 === "storeitems" && e(v);
	}), l(e, d), x();
}
// src/modules/guild/inventory/storeitems/getItems.js
var J = null;
function Ie(e, t) {
	if (t.item_id !== 13699) return t.item_name;
	let n = e.find((e) => e.value === String(t.inv_id));
	return n ? ae(n.parentNode.parentNode.children[2]) : t.item_name;
}
async function Le(e) {
	let t = await W();
	return t?.items ? N(ce(t.items).map(([t, n]) => [t, {
		...n,
		item_name: Ie(e, n)
	}])) : {};
}
function Re(e) {
	return J ||= Le(e), J;
}
async function ze() {
	let e = V();
	if (!e.length) return [];
	let t = await Re(e);
	return e.map((e) => [M(e).cells[2], t[e.value]]).filter(([, e]) => e);
}
// src/modules/guild/inventory/storeitems/updateDomItems.js
function Be(e, t) {
	return e[t] = (e[t] || 0) + 1, e;
}
function Ve(e) {
	return {
		...e.map(([, e]) => e.item_id).reduce(Be, {}),
		13699: 1
	};
}
var He = (e) => ` data-tooltip="INSTANTLY ${e} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`, Y = (e, t, n) => ` [<button class="fshStoreItemsButton ${e}"${t}>${n}</button>]`, X = (e, t, n) => Y(`${e} actionButton tooltip-multiline fshNoWrap`, He(t), `Quick ${n}`), Z = (e, t, n) => `[<a href="${e}"${t}>${n}</a>]`;
function Ue(e) {
	return e.bound ? "<span class=\"aHSpacer\"></span>" : Z(`${r}${encodeURIComponent(e.item_name)}`, "", "AH");
}
var We = (e) => Z(`${i}items${n}view&item_id=${e.item_id}`, " target=\"_blank\"", "UFSG"), Ge = (e, t, n) => e[2] && t[n.item_id] > 1, Ke = (e, t) => e[3] && (!t.bound || t.guild_tag !== -1), qe = (e, t) => e[4] && t.guild_tag === -1;
function Je(e, t) {
	return t[0]() ? e + t[1]() : e;
}
function Ye(e, t, n) {
	return [
		[() => e[0], () => `${Ue(n)} ${We(n)}`],
		[() => !0, () => `&nbsp;${n.item_name}`],
		[() => Ge(e, t, n), () => Y("fshBlack", "", "Check All")],
		[() => Ke(e, n), () => X("fshBlue", "SENDS", "Send")],
		[() => qe(e, n), () => X("fshRed", "DROP", "Drop")]
	];
}
function Xe(e, n, [r, i]) {
	let a = r;
	e[1] && (a.className = t[i.rarity].clas);
	let o = Ye(e, n, i).reduce(Je, "");
	a.innerHTML !== o && (a.innerHTML = o);
}
async function Q(e) {
	let t = await ze(), n = e[2] ? Ve(t) : [];
	c(3, me, [[
		3,
		t,
		0,
		oe(Xe, e, n)
	]]);
}
// src/modules/guild/inventory/storeitems/doToggleButtons.js
async function Ze() {
	let e = H();
	if (!e.length) return;
	let t = await W();
	t.items && e.map((e) => [e, t.items[e.value]]).filter(([, e]) => e).forEach(([e, t]) => {
		e.checked = !e.disabled && t.guild_tag !== -1;
	});
}
function Qe(e) {
	return function(t) {
		e[0] = t, Q(e);
	};
}
function $(e) {
	return function(t) {
		e[4] = t, Q(e);
	};
}
function $e(e) {
	let [t] = document.forms;
	f(Fe, {
		props: {
			doDropLinks: $(e),
			doExtraLinks: Qe(e),
			doSelectLocked: Ze,
			showExtraLinks: e[0],
			showQuickDropLinks: e[4]
		},
		target: t.parentNode.children[5].children[0]
	});
}
// src/modules/guild/inventory/storeitems/injectStoreItems.js
function et() {
	if (de() || !B()) return;
	let e = Me.map((e) => a(e));
	pe(), $e(e), e.some((e) => e) && Q(e), le(se(), je);
}
export { Ce as a, B as c, H as i, G as n, be as o, W as r, V as s, et as t };

//# sourceMappingURL=injectStoreItems-D7xOl9Lo.js.map