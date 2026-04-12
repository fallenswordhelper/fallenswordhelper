import { t as e } from "./devStdOut-BAVmsJfc.js";
//#region node_modules/idb/build/index.js
var t = (e, t) => t.some((t) => e instanceof t), n, r;
function i() {
	return n ||= [
		IDBDatabase,
		IDBObjectStore,
		IDBIndex,
		IDBCursor,
		IDBTransaction
	];
}
function a() {
	return r ||= [
		IDBCursor.prototype.advance,
		IDBCursor.prototype.continue,
		IDBCursor.prototype.continuePrimaryKey
	];
}
var o = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
function l(e) {
	let t = new Promise((t, n) => {
		let r = () => {
			e.removeEventListener("success", i), e.removeEventListener("error", a);
		}, i = () => {
			t(h(e.result)), r();
		}, a = () => {
			n(e.error), r();
		};
		e.addEventListener("success", i), e.addEventListener("error", a);
	});
	return c.set(t, e), t;
}
function u(e) {
	if (o.has(e)) return;
	let t = new Promise((t, n) => {
		let r = () => {
			e.removeEventListener("complete", i), e.removeEventListener("error", a), e.removeEventListener("abort", a);
		}, i = () => {
			t(), r();
		}, a = () => {
			n(e.error || new DOMException("AbortError", "AbortError")), r();
		};
		e.addEventListener("complete", i), e.addEventListener("error", a), e.addEventListener("abort", a);
	});
	o.set(e, t);
}
var d = {
	get(e, t, n) {
		if (e instanceof IDBTransaction) {
			if (t === "done") return o.get(e);
			if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
		}
		return h(e[t]);
	},
	set(e, t, n) {
		return e[t] = n, !0;
	},
	has(e, t) {
		return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
	}
};
function f(e) {
	d = e(d);
}
function p(e) {
	return a().includes(e) ? function(...t) {
		return e.apply(g(this), t), h(this.request);
	} : function(...t) {
		return h(e.apply(g(this), t));
	};
}
function m(e) {
	return typeof e == "function" ? p(e) : (e instanceof IDBTransaction && u(e), t(e, i()) ? new Proxy(e, d) : e);
}
function h(e) {
	if (e instanceof IDBRequest) return l(e);
	if (s.has(e)) return s.get(e);
	let t = m(e);
	return t !== e && (s.set(e, t), c.set(t, e)), t;
}
var g = (e) => c.get(e);
function _(e, t, { blocked: n, upgrade: r, blocking: i, terminated: a } = {}) {
	let o = indexedDB.open(e, t), s = h(o);
	return r && o.addEventListener("upgradeneeded", (e) => {
		r(h(o.result), e.oldVersion, e.newVersion, h(o.transaction), e);
	}), n && o.addEventListener("blocked", (e) => n(e.oldVersion, e.newVersion, e)), s.then((e) => {
		a && e.addEventListener("close", () => a()), i && e.addEventListener("versionchange", (e) => i(e.oldVersion, e.newVersion, e));
	}).catch(() => {}), s;
}
var v = [
	"get",
	"getKey",
	"getAll",
	"getAllKeys",
	"count"
], y = [
	"put",
	"add",
	"delete",
	"clear"
], b = /* @__PURE__ */ new Map();
function x(e, t) {
	if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
	if (b.get(t)) return b.get(t);
	let n = t.replace(/FromIndex$/, ""), r = t !== n, i = y.includes(n);
	if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || v.includes(n))) return;
	let a = async function(e, ...t) {
		let a = this.transaction(e, i ? "readwrite" : "readonly"), o = a.store;
		return r && (o = o.index(t.shift())), (await Promise.all([o[n](...t), i && a.done]))[0];
	};
	return b.set(t, a), a;
}
f((e) => ({
	...e,
	get: (t, n, r) => x(t, n) || e.get(t, n, r),
	has: (t, n) => !!x(t, n) || e.has(t, n)
}));
var S = [
	"continue",
	"continuePrimaryKey",
	"advance"
], C = {}, w = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), E = { get(e, t) {
	if (!S.includes(t)) return e[t];
	let n = C[t];
	return n ||= C[t] = function(...e) {
		w.set(this, T.get(this)[t](...e));
	}, n;
} };
async function* D(...e) {
	let t = this;
	if (t instanceof IDBCursor || (t = await t.openCursor(...e)), !t) return;
	t = t;
	let n = new Proxy(t, E);
	for (T.set(n, t), c.set(n, g(t)); t;) yield n, t = await (w.get(n) || t.continue()), w.delete(n);
}
function O(e, n) {
	return n === Symbol.asyncIterator && t(e, [
		IDBIndex,
		IDBObjectStore,
		IDBCursor
	]) || n === "iterate" && t(e, [IDBIndex, IDBObjectStore]);
}
f((e) => ({
	...e,
	get(t, n, r) {
		return O(t, n) ? D : e.get(t, n, r);
	},
	has(t, n) {
		return O(t, n) || e.has(t, n);
	}
}));
//#endregion
//#region src/modules/system/idb.js
var k = Promise.resolve(), A = !1;
function j() {
	return A ||= (k = _("keyval-store", 1, { upgrade(e) {
		e.createObjectStore("keyval");
	} }), !0), k;
}
async function M(t) {
	try {
		return (await j()).get("keyval", t);
	} catch (t) {
		e(t);
	}
}
async function N(t, n) {
	try {
		return (await j()).put("keyval", n, t);
	} catch (t) {
		e(t);
	}
}
async function P(t) {
	try {
		return (await j()).delete("keyval", t);
	} catch (t) {
		e(t);
	}
}
//#endregion
export { _ as i, M as n, N as r, P as t };

//# sourceMappingURL=idb-BvD4EIHy.js.map