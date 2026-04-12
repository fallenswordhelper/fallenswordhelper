import { t as e } from "./getElementById-DgC-_E5u.js";
import { t } from "./getText-BybFkJV6.js";
import { B as n, L as r, R as i, V as a, z as o } from "./constants-CIKidKvt.js";
import { t as s } from "./intValue-CkkaXek9.js";
//#region src/modules/common/groupViewStats.js
var c = 0, l = 0, u = 0, d = 0, f = 0;
function p(t) {
	c = e(i, t), l = e(n, t), u = e(r, t), d = e(o, t), f = e(a, t);
}
function m(e) {
	return e ? s(t(e)) : 0;
}
function h(e) {
	return p(e), {
		attack: m(c),
		attackElement: c,
		defense: m(l),
		defenseElement: l,
		armor: m(u),
		armorElement: u,
		damage: m(d),
		damageElement: d,
		hp: m(f),
		hpElement: f
	};
}
//#endregion
//#region src/modules/common/attribsToArray.js
var g = ({ id: e }, { id: t }) => e - t, _ = ({ value: e }) => e;
function v(e) {
	return e?.sort(g).map(_);
}
//#endregion
export { h as n, v as t };

//# sourceMappingURL=attribsToArray-DXTtRlj5.js.map