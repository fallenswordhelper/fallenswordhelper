import { t as e } from "./stdout-BBXc-13D.js";
import { t } from "./getValue-sxwJaOE3.js";
// \0rolldown/runtime.js
var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), l = (e, t) => {
	let n = {};
	for (var i in e) r(n, i, {
		get: e[i],
		enumerable: !0
	});
	return t || r(n, Symbol.toStringTag, { value: "Module" }), n;
}, u = (e, t, n, o) => {
	if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && r(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(o = i(t, d)) || o.enumerable
	});
	return e;
}, d = (e, t, i) => (i = e == null ? {} : n(o(e)), u(t || !e || !e.__esModule || !s.call(e, "default") ? r(i, "default", {
	value: e,
	enumerable: !0
}) : i, e)), f = /* @__PURE__ */ c(((e, t, n) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self, n.Honeybadger = r());
	})(n, (function() {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
		function t(e) {
			return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
		}
		function n(e) {
			var t = e.default;
			if (typeof t == "function") {
				var n = function() {
					return t.apply(this, arguments);
				};
				n.prototype = t.prototype;
			} else n = {};
			return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
				var r = Object.getOwnPropertyDescriptor(e, t);
				Object.defineProperty(n, t, r.get ? r : {
					enumerable: !0,
					get: function() {
						return e[t];
					}
				});
			}), n;
		}
		var r = {}, i = {}, a = {}, o = {}, s = "<unknown>";
		function c(e) {
			return e.split("\n").reduce(function(e, t) {
				var n = d(t) || p(t) || ee(t) || _(t) || ne(t);
				return n && e.push(n), e;
			}, []);
		}
		var l = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, u = /\((\S*)(?::(\d+))(?::(\d+))\)/;
		function d(e) {
			var t = l.exec(e);
			if (!t) return null;
			var n = t[2] && t[2].indexOf("native") === 0, r = t[2] && t[2].indexOf("eval") === 0, i = u.exec(t[2]);
			return r && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), {
				file: n ? null : t[2],
				methodName: t[1] || s,
				arguments: n ? [t[2]] : [],
				lineNumber: t[3] ? +t[3] : null,
				column: t[4] ? +t[4] : null
			};
		}
		var f = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
		function p(e) {
			var t = f.exec(e);
			return t ? {
				file: t[2],
				methodName: t[1] || s,
				arguments: [],
				lineNumber: +t[3],
				column: t[4] ? +t[4] : null
			} : null;
		}
		var m = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, h = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
		function ee(e) {
			var t = m.exec(e);
			if (!t) return null;
			var n = t[3] && t[3].indexOf(" > eval") > -1, r = h.exec(t[3]);
			return n && r != null && (t[3] = r[1], t[4] = r[2], t[5] = null), {
				file: t[3],
				methodName: t[1] || s,
				arguments: t[2] ? t[2].split(",") : [],
				lineNumber: t[4] ? +t[4] : null,
				column: t[5] ? +t[5] : null
			};
		}
		var te = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
		function ne(e) {
			var t = te.exec(e);
			return t ? {
				file: t[3],
				methodName: t[1] || s,
				arguments: [],
				lineNumber: +t[4],
				column: t[5] ? +t[5] : null
			} : null;
		}
		var g = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
		function _(e) {
			var t = g.exec(e);
			return t ? {
				file: t[2],
				methodName: t[1] || s,
				arguments: [],
				lineNumber: +t[3],
				column: t[4] ? +t[4] : null
			} : null;
		}
		var re = /*@__PURE__*/ n(/* @__PURE__ */ Object.freeze({
			__proto__: null,
			parse: c
		}));
		(function(t) {
			var n = e && e.__assign || function() {
				return n = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e;
				}, n.apply(this, arguments);
			}, r = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
				r === void 0 && (r = n);
				var i = Object.getOwnPropertyDescriptor(t, n);
				(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
					enumerable: !0,
					get: function() {
						return t[n];
					}
				}), Object.defineProperty(e, r, i);
			}) : (function(e, t, n, r) {
				r === void 0 && (r = n), e[r] = t[n];
			})), i = e && e.__setModuleDefault || (Object.create ? (function(e, t) {
				Object.defineProperty(e, "default", {
					enumerable: !0,
					value: t
				});
			}) : function(e, t) {
				e.default = t;
			}), a = e && e.__importStar || function(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (e != null) for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
				return i(t, e), t;
			}, o = e && e.__awaiter || function(e, t, n, r) {
				function i(e) {
					return e instanceof n ? e : new n(function(t) {
						t(e);
					});
				}
				return new (n ||= Promise)(function(n, a) {
					function o(e) {
						try {
							c(r.next(e));
						} catch (e) {
							a(e);
						}
					}
					function s(e) {
						try {
							c(r.throw(e));
						} catch (e) {
							a(e);
						}
					}
					function c(e) {
						e.done ? n(e.value) : i(e.value).then(o, s);
					}
					c((r = r.apply(e, t || [])).next());
				});
			}, s = e && e.__generator || function(e, t) {
				var n = {
					label: 0,
					sent: function() {
						if (a[0] & 1) throw a[1];
						return a[1];
					},
					trys: [],
					ops: []
				}, r, i, a, o = {
					next: s(0),
					throw: s(1),
					return: s(2)
				};
				return typeof Symbol == "function" && (o[Symbol.iterator] = function() {
					return this;
				}), o;
				function s(e) {
					return function(t) {
						return c([e, t]);
					};
				}
				function c(s) {
					if (r) throw TypeError("Generator is already executing.");
					for (; o && (o = 0, s[0] && (n = 0)), n;) try {
						if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
						switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
							case 0:
							case 1:
								a = s;
								break;
							case 4: return n.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								n.label++, i = s[1], s = [0];
								continue;
							case 7:
								s = n.ops.pop(), n.trys.pop();
								continue;
							default:
								if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
									n = 0;
									continue;
								}
								if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
									n.label = s[1];
									break;
								}
								if (s[0] === 6 && n.label < a[1]) {
									n.label = a[1], a = s;
									break;
								}
								if (a && n.label < a[2]) {
									n.label = a[2], n.ops.push(s);
									break;
								}
								a[2] && n.ops.pop(), n.trys.pop();
								continue;
						}
						s = t.call(e, n);
					} catch (e) {
						s = [6, e], i = 0;
					} finally {
						r = a = 0;
					}
					if (s[0] & 5) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}
			};
			Object.defineProperty(t, "__esModule", { value: !0 }), t.logDeprecatedMethod = t.globalThisOrWindow = t.isBrowserConfig = t.clone = t.formatCGIData = t.filterBreadcrumbs = t.filterUrl = t.filter = t.generateStackTrace = t.endpoint = t.instrumentConsole = t.instrument = t.isErrorObject = t.makeNotice = t.logger = t.sanitize = t.shallowClone = t.runAfterNotifyHandlers = t.shouldSampleEvent = t.resolveInsights = t.runBeforeBreadcrumbHandlers = t.runBeforeEventHandlers = t.runBeforeNotifyHandlers = t.getSourceForBacktrace = t.getCauses = t.calculateBacktraceShift = t.DEFAULT_BACKTRACE_SHIFT = t.makeBacktrace = t.objectIsExtensible = t.objectIsEmpty = t.mergeNotice = t.merge = void 0;
			var c = a(re);
			function l(e, t) {
				var n = {};
				for (var r in e) n[r] = e[r];
				for (var r in t) n[r] = t[r];
				return n;
			}
			t.merge = l;
			function u(e, t) {
				var n = l(e, t);
				return e.context && t.context && (n.context = l(e.context, t.context)), n;
			}
			t.mergeNotice = u;
			function d(e) {
				for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
				return !0;
			}
			t.objectIsEmpty = d;
			function f(e) {
				return typeof Object.isExtensible != "function" || Object.isExtensible(e);
			}
			t.objectIsExtensible = f;
			function p(e, t, n) {
				if (t === void 0 && (t = !1), n === void 0 && (n = console), !e) return [];
				try {
					var r = c.parse(e).map(function(e) {
						return {
							file: e.file,
							method: e.methodName,
							number: e.lineNumber,
							column: e.column
						};
					});
					return t && r.splice(0, h(r)), r;
				} catch (e) {
					return n.debug(e), [];
				}
			}
			t.makeBacktrace = p;
			function m(e) {
				var t = !1, n = !1;
				return e.file && (t = e.file.toLowerCase().indexOf("@honeybadger-io") > -1), e.method && (n = e.method.toLowerCase().indexOf("@honeybadger-io") > -1), t || n;
			}
			t.DEFAULT_BACKTRACE_SHIFT = 3;
			function h(e) {
				for (var n = 0, r = 0; r < e.length; r++) {
					var i = e[r];
					if (m(i)) n++;
					else {
						if (!i.file || i.file === "<anonymous>") {
							var a = e[r + 1];
							if (a && m(a)) {
								n++;
								continue;
							}
						}
						break;
					}
				}
				return n || t.DEFAULT_BACKTRACE_SHIFT;
			}
			t.calculateBacktraceShift = h;
			function ee(e, t) {
				if (e.cause) {
					for (var n = [], r = e; n.length < 3 && (r = r.cause);) n.push({
						class: r.name,
						message: r.message,
						backtrace: typeof r.stack == "string" ? p(r.stack, !1, t) : null
					});
					return n;
				}
				return [];
			}
			t.getCauses = ee;
			function te(e, t) {
				return o(this, void 0, void 0, function() {
					var n, r, i, a;
					return s(this, function(o) {
						switch (o.label) {
							case 0:
								if (n = [], !t || !e || !e.length) return [2, n];
								r = 0, o.label = 1;
							case 1: return e.length ? (i = e.splice(0)[r], [4, t(i.file)]) : [3, 3];
							case 2: return a = o.sent(), n[r] = pe(a, i.number, i.column, 2), r++, [3, 1];
							case 3: return [2, n];
						}
					});
				});
			}
			t.getSourceForBacktrace = te;
			function ne(e, t) {
				for (var n = [], r = !0, i = 0, a = t.length; i < a; i++) {
					var o = t[i], s = o(e);
					s === !1 && (r = !1), n.push(s);
				}
				return {
					results: n,
					result: r
				};
			}
			t.runBeforeNotifyHandlers = ne;
			function g(e, t, n) {
				return o(this, void 0, void 0, function() {
					var r, i, a, o;
					return s(this, function(s) {
						switch (s.label) {
							case 0: r = 0, i = t.length, s.label = 1;
							case 1:
								if (!(r < i)) return [3, 7];
								a = void 0, s.label = 2;
							case 2: return s.trys.push([
								2,
								4,
								,
								5
							]), [4, t[r](e)];
							case 3: return a = s.sent(), [3, 5];
							case 4: return o = s.sent(), n?.error("beforeEvent handler threw; continuing", o), [3, 6];
							case 5:
								if (a === !1) return [2, !1];
								s.label = 6;
							case 6: return r++, [3, 1];
							case 7: return [2, !0];
						}
					});
				});
			}
			t.runBeforeEventHandlers = g;
			function _(e, t, n) {
				for (var r = 0, i = t.length; r < i; r++) {
					var a = void 0;
					try {
						a = t[r](e);
					} catch (e) {
						n?.error("beforeBreadcrumb handler threw; continuing", e);
						continue;
					}
					if (a === !1) return !1;
				}
				return !0;
			}
			t.runBeforeBreadcrumbHandlers = _;
			function v(e) {
				var t = e.insights;
				return !t || t.enabled !== !0 ? {
					console: !1,
					http: !1
				} : {
					console: t.console ?? !1,
					http: t.http ?? !1
				};
			}
			t.resolveInsights = v;
			function y(e) {
				for (var t = 2166136261, n = 0, r = e.length; n < r; n++) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
				return t >>> 0;
			}
			function b(e) {
				return e < 0 ? 0 : e > 100 ? 100 : e;
			}
			function x(e, t) {
				var n = e._hb, r = n && Number.isFinite(n.sampleRate) ? n.sampleRate : void 0, i = r === void 0 ? t : r, a = b(Number.isFinite(i) ? i : 100);
				if (a <= 0) return !1;
				if (a >= 100) return !0;
				var o = e.request_id;
				return typeof o == "string" && o.length > 0 ? y(o) % 100 < a : Math.random() * 100 < a;
			}
			t.shouldSampleEvent = x;
			function S(e, t, n) {
				e && e.afterNotify && e.afterNotify(n, e);
				for (var r = 0, i = t.length; r < i; r++) t[r](n, e);
				return !0;
			}
			t.runAfterNotifyHandlers = S;
			function C(e) {
				if (typeof e != "object" || !e) return {};
				var t = {};
				for (var n in e) t[n] = e[n];
				return t;
			}
			t.shallowClone = C;
			function ie(e, t) {
				t === void 0 && (t = 8);
				var n = [];
				function r(e) {
					if (!e || typeof e != "object") return !1;
					for (var t = 0; t < n.length; t++) if (n[t] === e) return !0;
					return n.push(e), !1;
				}
				function i(e) {
					var t = typeof e;
					return /function/.test(t) ? e.name === "toJSON" : !(/symbol/.test(t) || e === null || typeof e == "object" && e.hasOwnProperty === void 0);
				}
				function a(e, n) {
					if (n === void 0 && (n = 0), n >= t) return "[DEPTH]";
					if (!i(e)) return Object.prototype.toString.call(e);
					if (r(e)) return "[RECURSION]";
					if (Array.isArray(e)) return e.map(function(e) {
						return o(e, n + 1);
					});
					if (typeof e == "object") {
						var a = {};
						for (var s in e) {
							var c = e[s];
							Object.prototype.hasOwnProperty.call(e, s) && s != null && c != null && (a[s] = o(c, n + 1));
						}
						return a;
					}
					return e;
				}
				function o(e, t) {
					t === void 0 && (t = 0);
					try {
						return a(e, t);
					} catch (e) {
						return `[ERROR] ${e}`;
					}
				}
				return o(e);
			}
			t.sanitize = ie;
			function ae(e) {
				var t = function(t) {
					return function() {
						for (var n, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
						if (t === "debug") {
							if (!e.config.debug) return;
							t = "log";
						}
						r.unshift("[Honeybadger]"), (n = e.config.logger)[t].apply(n, r);
					};
				};
				return {
					log: t("log"),
					info: t("info"),
					debug: t("debug"),
					warn: t("warn"),
					error: t("error")
				};
			}
			t.logger = ae;
			function w(e) {
				var t;
				if (!e) t = {};
				else if (T(e)) {
					var n = e;
					t = l(e, {
						name: n.name,
						message: n.message,
						stack: n.stack,
						cause: n.cause,
						originalError: n
					});
				} else t = typeof e == "object" ? C(e) : { message: String(e) };
				return t;
			}
			t.makeNotice = w;
			function T(e) {
				return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
			}
			t.isErrorObject = T;
			function E(e, t, n) {
				if (e && t && n && t in e) try {
					for (var r = e[t]; r && r.__hb_original;) r = r.__hb_original;
					e[t] = n(r), e[t].__hb_original = r;
				} catch {}
			}
			t.instrument = E;
			var D = !1, oe = [];
			function se(e, t) {
				e && e.console && t && (oe.push(t), !D && (D = !0, [
					"debug",
					"info",
					"warn",
					"error",
					"log"
				].forEach(function(t) {
					E(e.console, t, function(n) {
						return function() {
							var r = Array.prototype.slice.call(arguments);
							oe.forEach(function(e) {
								try {
									e(t, r);
								} catch {}
							}), typeof n == "function" && Function.prototype.apply.call(n, e.console, arguments);
						};
					});
				})));
			}
			t.instrumentConsole = se;
			function O(e, t) {
				var n = e.trim().replace(/\/$/, "");
				return t = t.trim().replace(/(^\/|\/$)/g, ""), `${n}/${t}`;
			}
			t.endpoint = O;
			function k() {
				try {
					throw Error("");
				} catch (e) {
					if (e.stack) return e.stack;
				}
				for (var e = 10, t = [], n = arguments.callee; n && t.length < e;) {
					/function(?:\s+([\w$]+))+\s*\(/.test(n.toString()) ? t.push(RegExp.$1 || "<anonymous>") : t.push("<anonymous>");
					try {
						n = n.caller;
					} catch {
						break;
					}
				}
				return t.join("\n");
			}
			t.generateStackTrace = k;
			function A(e, t) {
				if (!M("Object", e)) return;
				M("Array", t) || (t = []);
				var n = [];
				function r(e) {
					var i, a;
					if (M("Object", e) || M("Array", e)) {
						if (n.indexOf(e) !== -1) return "[CIRCULAR DATA STRUCTURE]";
						n.push(e);
					}
					if (M("Object", e)) {
						for (i in a = {}, e) j(i, t) ? a[i] = "[FILTERED]" : a[i] = r(e[i]);
						return a;
					}
					return M("Array", e) ? e.map(function(e) {
						return r(e);
					}) : M("Function", e) ? "[FUNC]" : e;
				}
				return r(e);
			}
			t.filter = A;
			function j(e, t) {
				for (var n = 0; n < t.length; n++) if (e.toLowerCase().indexOf(t[n].toLowerCase()) !== -1) return !0;
				return !1;
			}
			function M(e, t) {
				var n = Object.prototype.toString.call(t).slice(8, -1);
				return t != null && n === e;
			}
			function N(e, t) {
				if (!t || typeof e != "string") return e;
				var n = e.split(/\?/, 2)[1];
				if (!n) return e;
				var r = e;
				return n.split(/[&]\s?/).forEach(function(e) {
					var n = e.split("=", 2), i = n[0], a = n[1];
					j(i, t) && (r = r.replace(`${i}=${a}`, `${i}=[FILTERED]`));
				}), r;
			}
			t.filterUrl = N;
			var ce = [
				"url",
				"from",
				"to",
				"href"
			];
			function P(e, t) {
				if (M("Array", e)) return e.map(function(e) {
					return P(e, t);
				});
				if (!M("Object", e)) return e;
				var n = {}, r = e;
				return Object.keys(r).forEach(function(e) {
					var i = r[e], a = ce.includes(e.toLowerCase()) && typeof i == "string" ? N(i, t) : P(i, t);
					Object.defineProperty(n, e, {
						value: a,
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
				}), n;
			}
			function le(e, t) {
				return M("Array", e) ? e.map(function(e) {
					if (!M("Object", e?.metadata)) return e;
					var r = P(A(e.metadata, t), t);
					return n(n({}, e), { metadata: r });
				}) : [];
			}
			t.filterBreadcrumbs = le;
			function ue(e, t) {
				t === void 0 && (t = "");
				var n = {};
				return Object.keys(e).forEach(function(r) {
					var i = t + r.replace(/\W/g, "_").toUpperCase();
					n[i] = e[r];
				}), n;
			}
			t.formatCGIData = ue;
			function F(e) {
				var t = [];
				return JSON.parse(JSON.stringify(e, function(e, n) {
					if (typeof n != "object" || !n) return n;
					for (; t.length > 0 && t[t.length - 1] !== this;) t.pop();
					return t.indexOf(n) === -1 ? (t.push(n), n) : "[RECURSION]";
				}));
			}
			t.clone = F;
			var I = 1e4, de = 1e4, fe = 2e5;
			function L(e) {
				var t = {};
				return t[e] = "SOURCE_SIZE_TOO_LARGE", t;
			}
			function pe(e, t, n, r) {
				if (r === void 0 && (r = 2), !e) return null;
				if (n && n > I || e.length > fe) return L(t);
				var i = e.split("\n");
				i.unshift("");
				var a = i[t];
				if (a && a.length > de) return L(t);
				for (var o = t - r, s = t + r, c = {}, l = o; l <= s; l++) {
					var u = i[l];
					typeof u == "string" && (c[l] = u);
				}
				return c;
			}
			function R(e) {
				return e.async !== void 0;
			}
			t.isBrowserConfig = R;
			function z() {
				return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window;
			}
			t.globalThisOrWindow = z;
			var B = {};
			function me(e, t, n, r) {
				r === void 0 && (r = 100);
				var i = `${t}-${n}`;
				if (B[i] === void 0 && (B[i] = 0), B[i] % r !== 0) B[i]++;
				else {
					var a = `Deprecation warning: ${t} has been deprecated; please use ${n} instead.`;
					e.warn(a), B[i]++;
				}
			}
			t.logDeprecatedMethod = me;
		})(o), Object.defineProperty(a, "__esModule", { value: !0 });
		var v = o;
		function y(e) {
			return e === void 0 && (e = (0, v.globalThisOrWindow)()), {
				shouldReloadOnConfigure: !1,
				load: function(t) {
					function n() {
						return (0, v.resolveInsights)(t.config).console;
					}
					n() && (0, v.instrumentConsole)(e, function(e, r) {
						if (n() && r.length !== 0) {
							var i = { severity: e };
							typeof r[0] == "string" ? (i.message = r[0], i.args = r.slice(1)) : i.args = r, t.event("log", i);
						}
					});
				}
			};
		}
		a.default = y;
		var b = {}, x = {};
		Object.defineProperty(x, "__esModule", { value: !0 }), x.GlobalStore = void 0;
		var S = o;
		x.GlobalStore = function() {
			function e(e, t) {
				this.contents = e, this.breadcrumbsLimit = t;
			}
			return e.create = function(t, n) {
				return new e(t, n);
			}, e.prototype.available = function() {
				return !0;
			}, e.prototype.getContents = function(e) {
				var t = e ? this.contents[e] : this.contents;
				return (0, S.clone)(t);
			}, e.prototype.setContext = function(e) {
				this.contents.context = (0, S.merge)(this.contents.context, e || {});
			}, e.prototype.setEventContext = function(e) {
				this.contents.eventContext = (0, S.merge)(this.contents.eventContext, e || {});
			}, e.prototype.clearEventContext = function() {
				this.contents.eventContext = {};
			}, e.prototype.addBreadcrumb = function(e) {
				this.contents.breadcrumbs.length == this.breadcrumbsLimit && this.contents.breadcrumbs.shift(), this.contents.breadcrumbs.push(e);
			}, e.prototype.clear = function() {
				this.contents.context = {}, this.contents.eventContext = {}, this.contents.breadcrumbs = [];
			}, e.prototype.run = function(e) {
				return e();
			}, e;
		}();
		var C = {};
		class ie {
			static parse(e) {
				return e.trim().split("\n").map((e) => JSON.parse(e));
			}
			static stringify(e) {
				return e.map((e) => JSON.stringify(e)).join("\n");
			}
		}
		var ae = /*@__PURE__*/ n(/* @__PURE__ */ Object.freeze({
			__proto__: null,
			NdJson: ie
		})), w = {};
		Object.defineProperty(w, "__esModule", { value: !0 }), w.BREADCRUMBS_SELECTOR_ATTRIBUTES = w.CONFIG = void 0, w.CONFIG = {
			apiKey: null,
			endpoint: "https://api.honeybadger.io",
			appEndpoint: "https://app.honeybadger.io",
			environment: null,
			hostname: null,
			projectRoot: null,
			component: null,
			action: null,
			revision: null,
			reportData: null,
			breadcrumbsEnabled: !0,
			eventsEnabled: !1,
			insights: {
				enabled: !1,
				console: !1,
				http: !1
			},
			events: {
				dispatchIntervalSeconds: 10,
				bulkThreshold: 500,
				sampleRatePercentage: 100
			},
			maxBreadcrumbs: 40,
			maxObjectDepth: 8,
			logger: console,
			developmentEnvironments: [
				"dev",
				"development",
				"test"
			],
			debug: !1,
			tags: null,
			enableUncaught: !0,
			enableUnhandledRejection: !0,
			afterUncaught: function() {
				return !0;
			},
			filters: ["creditcard", "password"],
			__plugins: []
		}, w.BREADCRUMBS_SELECTOR_ATTRIBUTES = ["data-hb-name"];
		var T = e && e.__assign || function() {
			return T = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}, T.apply(this, arguments);
		}, E = e && e.__awaiter || function(e, t, n, r) {
			function i(e) {
				return e instanceof n ? e : new n(function(t) {
					t(e);
				});
			}
			return new (n ||= Promise)(function(n, a) {
				function o(e) {
					try {
						c(r.next(e));
					} catch (e) {
						a(e);
					}
				}
				function s(e) {
					try {
						c(r.throw(e));
					} catch (e) {
						a(e);
					}
				}
				function c(e) {
					e.done ? n(e.value) : i(e.value).then(o, s);
				}
				c((r = r.apply(e, t || [])).next());
			});
		}, D = e && e.__generator || function(e, t) {
			var n = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1];
				},
				trys: [],
				ops: []
			}, r, i, a, o = {
				next: s(0),
				throw: s(1),
				return: s(2)
			};
			return typeof Symbol == "function" && (o[Symbol.iterator] = function() {
				return this;
			}), o;
			function s(e) {
				return function(t) {
					return c([e, t]);
				};
			}
			function c(s) {
				if (r) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (n = 0)), n;) try {
					if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
					switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
						case 0:
						case 1:
							a = s;
							break;
						case 4: return n.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							n.label++, i = s[1], s = [0];
							continue;
						case 7:
							s = n.ops.pop(), n.trys.pop();
							continue;
						default:
							if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
								n = 0;
								continue;
							}
							if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
								n.label = s[1];
								break;
							}
							if (s[0] === 6 && n.label < a[1]) {
								n.label = a[1], a = s;
								break;
							}
							if (a && n.label < a[2]) {
								n.label = a[2], n.ops.push(s);
								break;
							}
							a[2] && n.ops.pop(), n.trys.pop();
							continue;
					}
					s = t.call(e, n);
				} catch (e) {
					s = [6, e], i = 0;
				} finally {
					r = a = 0;
				}
				if (s[0] & 5) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				};
			}
		};
		Object.defineProperty(C, "__esModule", { value: !0 }), C.ThrottledEventsWorker = void 0;
		var oe = ae, se = o, O = w;
		C.ThrottledEventsWorker = function() {
			function e(e, t) {
				this.config = e, this.transport = t, this.queue = [], this.cooldownTimer = null, this.cooldownUntil = 0, this.inFlight = null, this.config = T(T({}, O.CONFIG), e), this.logger = this.originalLogger();
			}
			return e.prototype.configure = function(e) {
				for (var t in e) this.config[t] = e[t];
			}, e.prototype.log = function(e) {
				if (this.queue.push(e), !this.inFlight) {
					if (this.queue.length >= this.bulkThreshold()) this.clearCooldownTimer(), this.processQueue();
					else if (!this.cooldownTimer) {
						var t = this.cooldownRemainingMs();
						t > 0 ? this.scheduleCooldownTimer(t) : this.processQueue();
					}
				}
			}, e.prototype.flushAsync = function() {
				var e = this;
				this.logger.debug("[Honeybadger] Flushing events"), this.clearCooldownTimer();
				var t = (this.inFlight ?? Promise.resolve()).then(function() {
					return e.drainAll();
				});
				this.inFlight = t;
				var n = function() {
					e.inFlight === t && (e.inFlight = null);
				};
				return t.then(n, n), t;
			}, e.prototype.drainAll = function() {
				return E(this, void 0, void 0, function() {
					return D(this, function(e) {
						switch (e.label) {
							case 0: return this.queue.length > 0 ? [4, this.send()] : [3, 2];
							case 1: return e.sent(), [3, 0];
							case 2: return [2];
						}
					});
				});
			}, e.prototype.processQueue = function() {
				var e = this;
				if (!(this.queue.length === 0 || this.inFlight)) {
					var t = this.send().catch(function(t) {
						e.logger.error("[Honeybadger] Error making HTTP request:", t);
					}).then(function() {
						e.inFlight === t && (e.inFlight = null, e.scheduleNextDispatch());
					});
					this.inFlight = t;
				}
			}, e.prototype.scheduleNextDispatch = function() {
				var e = this.dispatchIntervalMs();
				this.cooldownUntil = Date.now() + e, this.queue.length >= this.bulkThreshold() ? this.processQueue() : this.queue.length > 0 && this.scheduleCooldownTimer(e);
			}, e.prototype.cooldownRemainingMs = function() {
				return this.cooldownUntil ? Math.max(0, this.cooldownUntil - Date.now()) : 0;
			}, e.prototype.scheduleCooldownTimer = function(e) {
				var t = this;
				this.cooldownTimer = setTimeout(function() {
					t.cooldownTimer = null, t.processQueue();
				}, e), typeof this.cooldownTimer == "object" && this.cooldownTimer !== null && typeof this.cooldownTimer.unref == "function" && this.cooldownTimer.unref();
			}, e.prototype.clearCooldownTimer = function() {
				this.cooldownTimer &&= (clearTimeout(this.cooldownTimer), null);
			}, e.prototype.send = function() {
				return E(this, void 0, void 0, function() {
					var e, t;
					return D(this, function(n) {
						return this.queue.length === 0 ? [2] : (e = this.queue.splice(0, this.bulkThreshold()), t = oe.NdJson.stringify(e), [2, this.makeHttpRequest(t)]);
					});
				});
			}, e.prototype.bulkThreshold = function() {
				var e = this.config.events?.bulkThreshold;
				return typeof e == "number" && e > 0 ? e : O.CONFIG.events.bulkThreshold;
			}, e.prototype.dispatchIntervalMs = function() {
				var e = this.config.events?.dispatchIntervalSeconds;
				return (typeof e == "number" && e >= 0 ? e : O.CONFIG.events.dispatchIntervalSeconds) * 1e3;
			}, e.prototype.makeHttpRequest = function(e) {
				return E(this, void 0, void 0, function() {
					var t = this;
					return D(this, function(n) {
						return [2, this.transport.send({
							headers: {
								"X-API-Key": this.config.apiKey,
								"Content-Type": "application/json"
							},
							method: "POST",
							endpoint: (0, se.endpoint)(this.config.endpoint, "/v1/events"),
							maxObjectDepth: this.config.maxObjectDepth,
							logger: this.logger
						}, e).then(function(e) {
							[200, 201].includes(e.statusCode) ? t.logger.debug("[Honeybadger] Events sent successfully") : t.logger.debug(`[Honeybadger] Events failed[${e.statusCode}]: ${e.body}`);
						}).catch(function(e) {
							t.logger.error(`[Honeybadger] Error sending events: ${e.message}`);
						})];
					});
				});
			}, e.prototype.originalLogger = function() {
				var e = this;
				return {
					log: console.log.__hb_original ?? console.log,
					info: console.info.__hb_original ?? console.info,
					debug: function() {
						var t = [...arguments];
						if (e.config.debug) return (console.debug.__hb_original ?? console.debug).apply(void 0, t);
					},
					warn: console.warn.__hb_original ?? console.warn,
					error: console.error.__hb_original ?? console.error
				};
			}, e;
		}();
		var k = e && e.__assign || function() {
			return k = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}, k.apply(this, arguments);
		}, A = e && e.__awaiter || function(e, t, n, r) {
			function i(e) {
				return e instanceof n ? e : new n(function(t) {
					t(e);
				});
			}
			return new (n ||= Promise)(function(n, a) {
				function o(e) {
					try {
						c(r.next(e));
					} catch (e) {
						a(e);
					}
				}
				function s(e) {
					try {
						c(r.throw(e));
					} catch (e) {
						a(e);
					}
				}
				function c(e) {
					e.done ? n(e.value) : i(e.value).then(o, s);
				}
				c((r = r.apply(e, t || [])).next());
			});
		}, j = e && e.__generator || function(e, t) {
			var n = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1];
				},
				trys: [],
				ops: []
			}, r, i, a, o = {
				next: s(0),
				throw: s(1),
				return: s(2)
			};
			return typeof Symbol == "function" && (o[Symbol.iterator] = function() {
				return this;
			}), o;
			function s(e) {
				return function(t) {
					return c([e, t]);
				};
			}
			function c(s) {
				if (r) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (n = 0)), n;) try {
					if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
					switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
						case 0:
						case 1:
							a = s;
							break;
						case 4: return n.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							n.label++, i = s[1], s = [0];
							continue;
						case 7:
							s = n.ops.pop(), n.trys.pop();
							continue;
						default:
							if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
								n = 0;
								continue;
							}
							if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
								n.label = s[1];
								break;
							}
							if (s[0] === 6 && n.label < a[1]) {
								n.label = a[1], a = s;
								break;
							}
							if (a && n.label < a[2]) {
								n.label = a[2], n.ops.push(s);
								break;
							}
							a[2] && n.ops.pop(), n.trys.pop();
							continue;
					}
					s = t.call(e, n);
				} catch (e) {
					s = [6, e], i = 0;
				} finally {
					r = a = 0;
				}
				if (s[0] & 5) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				};
			}
		};
		Object.defineProperty(b, "__esModule", { value: !0 }), b.Client = void 0;
		var M = o, N = x, ce = C, P = w, le = /,|\s+/, ue = /\S/;
		b.Client = function() {
			function e(e, t) {
				e === void 0 && (e = {}), this.__pluginsLoaded = !1, this.__store = null, this.__beforeNotifyHandlers = [], this.__beforeEventHandlers = [], this.__beforeBreadcrumbHandlers = [], this.__runningBeforeBreadcrumbHandlers = !1, this.__afterNotifyHandlers = [], this.__pendingEvents = /* @__PURE__ */ new Set(), this.__notifier = {
					name: "@honeybadger-io/core",
					url: "https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",
					version: "6.17.0"
				}, this.config = k(k({}, P.CONFIG), e), this.__initStore(), this.__transport = t, this.__eventsWorker = new ce.ThrottledEventsWorker(this.config, this.__transport), this.logger = (0, M.logger)(this), this.__applyEventsEnabledShim(e);
			}
			return e.prototype.getVersion = function() {
				return this.__notifier.version;
			}, e.prototype.getNotifier = function() {
				return this.__notifier;
			}, e.prototype.setNotifier = function(e) {
				this.__notifier = e;
			}, e.prototype.configure = function(e) {
				for (var t in e === void 0 && (e = {}), e) this.config[t] = e[t];
				return this.__applyEventsEnabledShim(e), this.__eventsWorker.configure(this.config), this.loadPlugins(), this;
			}, e.prototype.__applyEventsEnabledShim = function(e) {
				e.eventsEnabled === !0 && (this.logger.warn("Deprecation warning: `eventsEnabled` has been deprecated; please use `insights.enabled` and `insights.console` instead."), this.config.insights = k(k(k({}, this.config.insights ?? {}), {
					enabled: !0,
					console: !0
				}), e.insights));
			}, e.prototype.loadPlugins = function() {
				var e = this;
				(this.__pluginsLoaded ? this.config.__plugins.filter(function(e) {
					return e.shouldReloadOnConfigure;
				}) : this.config.__plugins).forEach(function(t) {
					return t.load(e);
				}), this.__pluginsLoaded = !0;
			}, e.prototype.__initStore = function() {
				this.__store = new N.GlobalStore({
					context: {},
					eventContext: {},
					breadcrumbs: []
				}, this.config.maxBreadcrumbs);
			}, e.prototype.beforeNotify = function(e) {
				return this.__beforeNotifyHandlers.push(e), this;
			}, e.prototype.beforeEvent = function(e) {
				return this.__beforeEventHandlers.push(e), this;
			}, e.prototype.beforeBreadcrumb = function(e) {
				return this.__beforeBreadcrumbHandlers.push(e), this;
			}, e.prototype.afterNotify = function(e) {
				return this.__afterNotifyHandlers.push(e), this;
			}, e.prototype.setContext = function(e) {
				return typeof e == "object" && e && this.__store.setContext(e), this;
			}, e.prototype.setEventContext = function(e) {
				return typeof e == "object" && e && this.__store.setEventContext(e), this;
			}, e.prototype.clearEventContext = function() {
				return this.__store.clearEventContext(), this;
			}, e.prototype.resetContext = function(e) {
				return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."), this.__store.clear(), typeof e == "object" && e && this.__store.setContext(e), this;
			}, e.prototype.clear = function() {
				return this.__store.clear(), this;
			}, e.prototype.notify = function(e, t, n) {
				var r = this;
				t === void 0 && (t = void 0), n === void 0 && (n = void 0);
				try {
					var i = this.makeNotice(e, t, n), a = i && i.backtrace ? i.backtrace.map(function(e) {
						return (0, M.shallowClone)(e);
					}) : null, o = this.__runPreconditions(i);
					return o instanceof Error ? ((0, M.runAfterNotifyHandlers)(i, this.__afterNotifyHandlers, o), !1) : o instanceof Promise ? (o.then(function(e) {
						return e instanceof Error ? ((0, M.runAfterNotifyHandlers)(i, r.__afterNotifyHandlers, e), !1) : r.__send(i, a);
					}).catch(function(e) {
						r.__logReportingFailure(e), (0, M.runAfterNotifyHandlers)(i, r.__afterNotifyHandlers, e instanceof Error ? e : Error(String(e)));
					}), !0) : (this.__send(i, a).catch(function(e) {}), !0);
				} catch (e) {
					return this.__logReportingFailure(e), !1;
				}
			}, e.prototype.__logReportingFailure = function(e) {
				try {
					this.logger.error("Error report failed: an internal error occurred while reporting", e);
				} catch {}
			}, e.prototype.notifyAsync = function(e, t, n) {
				var r = this;
				return t === void 0 && (t = void 0), n === void 0 && (n = void 0), new Promise(function(i, a) {
					(function(e) {
						var t = e.afterNotify;
						e.afterNotify = function(e) {
							try {
								t?.call(r, e);
							} finally {
								e ? a(e) : i();
							}
						};
					})(e.afterNotify ? e : t && t.afterNotify ? t : n && n.afterNotify ? n : t && typeof t == "object" ? t : n || (t = {})), r.notify(e, t, n) || a(/* @__PURE__ */ Error("Error report failed: see logs for details"));
				});
			}, e.prototype.makeNotice = function(e, t, n) {
				t === void 0 && (t = void 0), n === void 0 && (n = void 0);
				var r = (0, M.makeNotice)(e);
				if (t && typeof t != "object" && (t = { name: String(t) }), t && (r = (0, M.mergeNotice)(r, t)), typeof n == "object" && n && (r = (0, M.mergeNotice)(r, n)), (0, M.objectIsEmpty)(r)) return null;
				var i = this.__store.getContents("context"), a = this.__constructTags(r.tags), o = this.__constructTags(i.tags), s = this.__constructTags(this.config.tags), c = a.concat(o).concat(s), l = c.filter(function(e, t) {
					return c.indexOf(e) === t;
				});
				return r = (0, M.merge)(r, {
					name: r.name || "Error",
					context: (0, M.merge)(i, r.context),
					projectRoot: r.projectRoot || this.config.projectRoot,
					environment: r.environment || this.config.environment,
					component: r.component || this.config.component,
					action: r.action || this.config.action,
					revision: r.revision || this.config.revision,
					tags: l
				}), Array.isArray(r.backtrace) && r.backtrace.length || (typeof r.stack != "string" || !r.stack.trim() ? (r.stack = (0, M.generateStackTrace)(), r.backtrace = (0, M.makeBacktrace)(r.stack, !0, this.logger)) : r.backtrace = (0, M.makeBacktrace)(r.stack, !1, this.logger)), r;
			}, e.prototype.addBreadcrumb = function(e, t) {
				if (this.config.breadcrumbsEnabled) {
					t ||= {};
					var n = (0, M.shallowClone)(t.metadata), r = {
						category: t.category || "custom",
						message: e,
						metadata: n,
						timestamp: (/* @__PURE__ */ new Date()).toISOString()
					};
					if (!this.__runningBeforeBreadcrumbHandlers) {
						this.__runningBeforeBreadcrumbHandlers = !0;
						var i = void 0;
						try {
							i = (0, M.runBeforeBreadcrumbHandlers)(r, this.__beforeBreadcrumbHandlers, this.logger);
						} finally {
							this.__runningBeforeBreadcrumbHandlers = !1;
						}
						if (!i) return this;
					}
					return this.__store.addBreadcrumb(r), this;
				}
			}, e.prototype.logEvent = function(e) {
				(0, M.logDeprecatedMethod)(this.logger, "Honeybadger.logEvent", "Honeybadger.event"), this.event("log", e);
			}, e.prototype.event = function(e, t) {
				var n = this;
				typeof e == "object" && (t = e, e = e.event_type ?? void 0);
				var r = this.__store.getContents("eventContext") || {}, i = k(k({
					event_type: e,
					ts: (/* @__PURE__ */ new Date()).toISOString()
				}, r), t), a = (0, M.runBeforeEventHandlers)(i, this.__beforeEventHandlers, this.logger).then(function(e) {
					if (!e) n.logger.debug("skipping event: beforeEvent handler returned false");
					else {
						var t = n.config.events?.sampleRatePercentage ?? 100;
						(0, M.shouldSampleEvent)(i, t) ? (delete i._hb, n.__eventsWorker.log(i)) : n.logger.debug("skipping event: dropped by sampleRatePercentage");
					}
				}).catch(function(e) {
					n.logger.error("beforeEvent handler chain failed; dropping event", e);
				}).finally(function() {
					n.__pendingEvents.delete(a);
				});
				this.__pendingEvents.add(a);
			}, e.prototype.flushAsync = function() {
				return A(this, void 0, void 0, function() {
					return j(this, function(e) {
						switch (e.label) {
							case 0: return this.__pendingEvents.size > 0 ? [4, Promise.allSettled(Array.from(this.__pendingEvents))] : [3, 2];
							case 1: e.sent(), e.label = 2;
							case 2: return [2, this.__eventsWorker.flushAsync()];
						}
					});
				});
			}, e.prototype.__getBreadcrumbs = function() {
				return this.__store.getContents("breadcrumbs").slice();
			}, e.prototype.__getContext = function() {
				return this.__store.getContents("context");
			}, e.prototype.__developmentMode = function() {
				return this.config.reportData !== !0 && this.config.environment && this.config.developmentEnvironments.includes(this.config.environment);
			}, e.prototype.__buildPayload = function(e) {
				var t = (0, M.filter)(e.headers, this.config.filters) || {}, n = (0, M.filter)(k(k({}, e.cgiData), (0, M.formatCGIData)(t, "HTTP_")), this.config.filters);
				return {
					notifier: this.__notifier,
					breadcrumbs: {
						enabled: !!this.config.breadcrumbsEnabled,
						trail: (0, M.filterBreadcrumbs)(e.__breadcrumbs || [], this.config.filters)
					},
					error: {
						class: e.name,
						message: e.message,
						backtrace: e.backtrace,
						fingerprint: e.fingerprint,
						tags: e.tags,
						causes: (0, M.getCauses)(e, this.logger)
					},
					request: {
						url: (0, M.filterUrl)(e.url, this.config.filters),
						component: e.component,
						action: e.action,
						context: e.context,
						cgi_data: n,
						params: (0, M.filter)(e.params, this.config.filters) || {},
						session: (0, M.filter)(e.session, this.config.filters) || {}
					},
					server: {
						project_root: e.projectRoot,
						environment_name: e.environment,
						revision: e.revision,
						hostname: this.config.hostname,
						time: (/* @__PURE__ */ new Date()).toUTCString()
					},
					details: e.details || {}
				};
			}, e.prototype.__constructTags = function(e) {
				return e ? e.toString().split(le).filter(function(e) {
					return ue.test(e);
				}) : [];
			}, e.prototype.__runPreconditions = function(e) {
				var t = this, n = null;
				e || (this.logger.debug("failed to build error report"), n = /* @__PURE__ */ Error("failed to build error report")), this.config.reportData === !1 && (this.logger.debug("skipping error report: honeybadger.js is disabled", e), n = /* @__PURE__ */ Error("honeybadger.js is disabled")), this.__developmentMode() && (this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.", e), n = /* @__PURE__ */ Error("honeybadger.js is in development mode")), this.config.apiKey || (this.logger.warn("could not send error report: no API key has been configured", e), n = /* @__PURE__ */ Error("missing API key"));
				var r = (0, M.runBeforeNotifyHandlers)(e, this.__beforeNotifyHandlers);
				return !n && !r.result && (this.logger.debug("skipping error report: one or more beforeNotify handlers returned false", e), n = /* @__PURE__ */ Error("beforeNotify handlers returned false")), r.results.length && r.results.some(function(e) {
					return e instanceof Promise;
				}) ? Promise.allSettled(r.results).then(function(r) {
					if (!n && r.some(function(e) {
						return e.status === "rejected" || e.value === !1;
					}) && (t.logger.debug("skipping error report: one or more beforeNotify handlers returned false", e), n = /* @__PURE__ */ Error("beforeNotify handlers (async) returned false")), n) return n;
				}) : n;
			}, e.prototype.__send = function(e, t) {
				var n = this;
				return this.config.breadcrumbsEnabled ? (this.addBreadcrumb("Honeybadger Notice", {
					category: "notice",
					metadata: {
						message: e.message,
						name: e.name,
						stack: e.stack
					}
				}), e.__breadcrumbs = this.__store.getContents("breadcrumbs")) : e.__breadcrumbs = [], (0, M.getSourceForBacktrace)(t, this.__getSourceFileHandler).then(function(t) {
					return A(n, void 0, void 0, function() {
						var n;
						return j(this, function(r) {
							return t.forEach(function(t, n) {
								e.backtrace[n].source = t;
							}), n = this.__buildPayload(e), [2, this.__transport.send({
								headers: {
									"X-API-Key": this.config.apiKey,
									"Content-Type": "application/json",
									Accept: "text/json, application/json"
								},
								method: "POST",
								endpoint: (0, M.endpoint)(this.config.endpoint, "/v1/notices/js"),
								maxObjectDepth: this.config.maxObjectDepth,
								logger: this.logger
							}, n)];
						});
					});
				}).then(function(t) {
					if (t.statusCode !== 201) return (0, M.runAfterNotifyHandlers)(e, n.__afterNotifyHandlers, /* @__PURE__ */ Error(`Bad HTTP response: ${t.statusCode}`)), n.logger.warn(`Error report failed: unknown response from server. code=${t.statusCode}`), !1;
					var r = JSON.parse(t.body).id;
					(0, M.runAfterNotifyHandlers)((0, M.merge)(e, { id: r }), n.__afterNotifyHandlers);
					var i = (0, M.endpoint)(n.config.appEndpoint, `notice/${r}`);
					return n.logger.info(`Error report sent ⚡ ${i}`), !0;
				}).catch(function(t) {
					return n.logger.error("Error report failed: an unknown error occurred.", `message=${t.message}`), (0, M.runAfterNotifyHandlers)(e, n.__afterNotifyHandlers, t), !1;
				});
			}, e;
		}();
		var F = {};
		Object.defineProperty(F, "__esModule", { value: !0 }), (function(t) {
			var n = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
				r === void 0 && (r = n);
				var i = Object.getOwnPropertyDescriptor(t, n);
				(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
					enumerable: !0,
					get: function() {
						return t[n];
					}
				}), Object.defineProperty(e, r, i);
			}) : (function(e, t, n, r) {
				r === void 0 && (r = n), e[r] = t[n];
			})), r = e && e.__setModuleDefault || (Object.create ? (function(e, t) {
				Object.defineProperty(e, "default", {
					enumerable: !0,
					value: t
				});
			}) : function(e, t) {
				e.default = t;
			}), i = e && e.__exportStar || function(e, t) {
				for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && n(t, e, r);
			}, s = e && e.__importStar || function(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (e != null) for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
				return r(t, e), t;
			}, c = e && e.__importDefault || function(e) {
				return e && e.__esModule ? e : { default: e };
			};
			Object.defineProperty(t, "__esModule", { value: !0 }), t.Plugins = t.Defaults = t.Util = t.Types = t.Client = void 0;
			var l = c(a), u = b;
			Object.defineProperty(t, "Client", {
				enumerable: !0,
				get: function() {
					return u.Client;
				}
			}), i(x, t), t.Types = s(F), t.Util = s(o), t.Defaults = s(w), t.Plugins = {
				consoleEvents: l.default,
				events: l.default
			};
		})(i);
		var I = {};
		Object.defineProperty(I, "__esModule", { value: !0 }), I.preferCatch = I.encodeCookie = I.decodeCookie = I.localURLPathname = I.parseURL = I.nativeFetch = I.stringTextOfElement = I.stringSelectorOfElement = I.stringNameOfElement = void 0;
		var de = i, fe = de.Util.globalThisOrWindow, L = de.Defaults.BREADCRUMBS_SELECTOR_ATTRIBUTES;
		function pe(e, t) {
			if (Array.isArray(t) && e && typeof e.getAttribute == "function") for (var n = 0, r = t; n < r.length; n++) {
				var i = r[n];
				if (typeof i == "string" && i.length !== 0) {
					var a = e.getAttribute(i);
					if (a && a.trim()) return be(a.trim().replace(/\s+/g, " "), 100);
				}
			}
		}
		function R(e, t) {
			if (t === void 0 && (t = L), !e || !e.tagName) return "";
			var n = e.tagName.toLowerCase();
			if (n === "html") return "";
			var r = pe(e, t);
			if (r) return r;
			e.id && (n += `#${e.id}`);
			var i = e.getAttribute("class");
			i && i.split(/\s+/).forEach(function(e) {
				n += `.${e}`;
			}), [
				"alt",
				"name",
				"title",
				"type"
			].forEach(function(t) {
				var r = e.getAttribute(t);
				r && (n += `[${t}="${r}"]`);
			});
			var a = ye(e);
			return a.length > 1 && (n += `:nth-child(${Array.prototype.indexOf.call(a, e) + 1})`), n;
		}
		I.stringNameOfElement = R;
		function z(e, t) {
			t === void 0 && (t = L);
			var n = R(e, t);
			if (n && pe(e, t)) return n;
			if (e.parentNode && e.parentNode.tagName) {
				var r = z(e.parentNode, t);
				if (r.length > 0) return `${r} > ${n}`;
			}
			return n;
		}
		I.stringSelectorOfElement = z;
		function B(e) {
			var t = e.textContent || e.innerText || "";
			return t || e.type !== "submit" && e.type !== "button" || (t = e.value), be(t.trim(), 300);
		}
		I.stringTextOfElement = B;
		function me() {
			var e = fe();
			if (!e.fetch) return !1;
			if (he(e.fetch)) return !0;
			if (typeof document > "u") return !1;
			try {
				var t = document.createElement("iframe");
				t.style.display = "none", document.head.appendChild(t);
				var n = t.contentWindow.fetch && he(t.contentWindow.fetch);
				return document.head.removeChild(t), n;
			} catch (e) {
				console && console.warn && console.warn("failed to detect native fetch via iframe: " + e);
			}
			return !1;
		}
		I.nativeFetch = me;
		function he(e) {
			return e.toString().indexOf("native") !== -1;
		}
		function V(e) {
			var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/) || {};
			return {
				protocol: t[2],
				host: t[4],
				pathname: t[5]
			};
		}
		I.parseURL = V;
		function ge(e) {
			var t = V(e), n = V(document.URL);
			return !t.host || !t.protocol || t.protocol === n.protocol && t.host === n.host ? t.pathname : `${t.protocol}://${t.host}${t.pathname}`;
		}
		I.localURLPathname = ge;
		function _e(e) {
			var t = {};
			return e.split(/[;,]\s?/).forEach(function(e) {
				var n = e.split("=", 2), r = n[0];
				t[r] = n[1];
			}), t;
		}
		I.decodeCookie = _e;
		function ve(e) {
			if (typeof e == "object") {
				var t = [];
				for (var n in e) t.push(n + "=" + e[n]);
				return t.join(";");
			}
		}
		I.encodeCookie = ve;
		function ye(e) {
			try {
				var t = e.parentNode.childNodes, n = [];
				return Array.prototype.forEach.call(t, function(t) {
					t.tagName && t.tagName === e.tagName && n.push(t);
				}), n;
			} catch {
				return [];
			}
		}
		function be(e, t) {
			return e.length > t && (e = e.substr(0, t) + "..."), e;
		}
		I.preferCatch = (function() {
			var e = !0;
			if (typeof window > "u") return e;
			if (window.atob || (e = !1), window.ErrorEvent) try {
				new window.ErrorEvent("").colno === 0 && (e = !1);
			} catch {}
			return e;
		})();
		var H = {};
		Object.defineProperty(H, "__esModule", { value: !0 }), H.onError = H.ignoreNextOnError = void 0;
		var U = i, xe = U.Util.instrument, Se = U.Util.makeNotice, Ce = U.Util.globalThisOrWindow, W = 0, we;
		function Te() {
			W += 1, clearTimeout(we), we = setTimeout(function() {
				W = 0;
			});
		}
		H.ignoreNextOnError = Te;
		function Ee(e) {
			return e === void 0 && (e = Ce()), { load: function(t) {
				xe(e, "onerror", function(n) {
					var r = function(e, n, r, i, a) {
						if (t.logger.debug("window.onerror callback invoked", arguments), W > 0) t.logger.debug("Ignoring window.onerror (error likely reported earlier)", arguments), --W;
						else if (r === 0 && /Script error\.?/.test(e)) t.config.enableUncaught && t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors", arguments);
						else {
							var o = Se(a);
							o.name ||= "window.onerror", o.message ||= e, o.stack ||= [
								o.message,
								"\n    at ? (",
								n || "unknown",
								":",
								r || 0,
								":",
								i || 0,
								")"
							].join(""), t.addBreadcrumb(o.name === "window.onerror" || !o.name ? "window.onerror" : `window.onerror: ${o.name}`, {
								category: "error",
								metadata: {
									name: o.name,
									message: o.message,
									stack: o.stack
								}
							}), t.config.enableUncaught && t.notify(o);
						}
					};
					return function(t, i, a, o, s) {
						return r(t, i, a, o, s), typeof n == "function" && n.apply(e, arguments);
					};
				});
			} };
		}
		H.onError = Ee;
		var G = {};
		Object.defineProperty(G, "__esModule", { value: !0 });
		var K = i, De = K.Util.instrument, Oe = K.Util.makeNotice, ke = K.Util.globalThisOrWindow;
		function Ae(e) {
			return e === void 0 && (e = ke()), { load: function(t) {
				t.config.enableUnhandledRejection && De(e, "onunhandledrejection", function(e) {
					function n(e) {
						if (t.logger.debug("window.onunhandledrejection callback invoked", arguments), t.config.enableUnhandledRejection) {
							var n = e.reason;
							if (n instanceof Error) {
								var r = Oe(n);
								r.stack ||= `${n.message}
    at ? (unknown:0)`, r.message = `UnhandledPromiseRejectionWarning: ${n}`, t.addBreadcrumb(`window.onunhandledrejection: ${r.name}`, {
									category: "error",
									metadata: {
										name: r.name,
										message: r.message,
										stack: r.stack
									}
								}), t.notify(r);
							} else {
								var i;
								if (typeof n == "string") i = n;
								else try {
									i = JSON.stringify(n) ?? "Unspecified reason";
								} catch {
									var a = n != null && n.constructor ? n.constructor.name : null;
									i = a ? `[${a}]` : Object.prototype.toString.call(n);
								}
								t.notify({
									name: "window.onunhandledrejection",
									message: `UnhandledPromiseRejectionWarning: ${i}`
								});
							}
						}
					}
					return function(t) {
						n(t), typeof e == "function" && e.apply(this, arguments);
					};
				});
			} };
		}
		G.default = Ae;
		var q = {};
		Object.defineProperty(q, "__esModule", { value: !0 });
		var J = i, Y = I, je = J.Util.sanitize, X = J.Util.instrument, Me = J.Util.instrumentConsole, Ne = J.Util.globalThisOrWindow;
		function Pe(e) {
			return e === void 0 && (e = Ne()), { load: function(t) {
				function n(e) {
					return t.config.breadcrumbsEnabled === !0 ? !0 : e ? t.config.breadcrumbsEnabled[e] === !0 : t.config.breadcrumbsEnabled !== !1;
				}
				(function() {
					if (!n("console")) return;
					function r(e) {
						return Array.isArray(e) ? e.map(function(e) {
							try {
								return String(e);
							} catch {
								return "[unknown]";
							}
						}).join(" ") : "";
					}
					Me(e, function(e, n) {
						var i = r(n), a = {
							category: "log",
							metadata: {
								level: e,
								arguments: je(n, 3)
							}
						};
						t.addBreadcrumb(i, a);
					});
				})(), (function() {
					n("dom") && typeof e.addEventListener == "function" && e.addEventListener("click", function(e) {
						var n, r, i;
						try {
							var a = t.config.breadcrumbsSelectorAttributes;
							n = (0, Y.stringNameOfElement)(e.target, a), r = (0, Y.stringSelectorOfElement)(e.target, a), i = (0, Y.stringTextOfElement)(e.target);
						} catch {
							n = "UI Click", r = "[unknown]", i = "[unknown]";
						}
						n.length !== 0 && t.addBreadcrumb(n, {
							category: "ui.click",
							metadata: {
								selector: r,
								text: i,
								event: je(e, 3)
							}
						});
					}, !!e.location);
				})(), (function() {
					n("network") && typeof XMLHttpRequest < "u" && (X(XMLHttpRequest.prototype, "open", function(e) {
						return function() {
							var t = this, n = arguments[1], r = typeof n == "string" ? n : String(n), i = typeof arguments[0] == "string" ? arguments[0].toUpperCase() : arguments[0], a = `${i} ${(0, Y.localURLPathname)(r)}`;
							this.__hb_xhr = {
								type: "xhr",
								method: i,
								url: r,
								message: a
							}, typeof e == "function" && e.apply(t, arguments);
						};
					}), X(XMLHttpRequest.prototype, "send", function(e) {
						return function() {
							var n = this;
							function r() {
								if (n.readyState === 4) {
									var e = void 0;
									n.__hb_xhr && (n.__hb_xhr.status_code = n.status, e = n.__hb_xhr.message, delete n.__hb_xhr.message), t.addBreadcrumb(e || "XMLHttpRequest", {
										category: "request",
										metadata: n.__hb_xhr
									});
								}
							}
							"onreadystatechange" in n && typeof n.onreadystatechange == "function" ? X(n, "onreadystatechange", function(e) {
								return function() {
									r(), typeof e == "function" && e.apply(this, arguments);
								};
							}) : n.onreadystatechange = r, typeof e == "function" && e.apply(n, arguments);
						};
					}));
				})(), (function() {
					n("network") && (0, Y.nativeFetch)() && X(e, "fetch", function(n) {
						return function() {
							var r = arguments[0], i = "GET", a;
							typeof r == "string" ? a = r : "Request" in e && r instanceof Request ? (a = r.url, r.method && (i = r.method)) : a = String(r), arguments[1] && arguments[1].method && (i = arguments[1].method), typeof i == "string" && (i = i.toUpperCase());
							var o = `${i} ${typeof document > "u" ? a.split("?")[0] : (0, Y.localURLPathname)(a)}`, s = {
								type: "fetch",
								method: i,
								url: a
							};
							return n.apply(this, arguments).then(function(e) {
								return s.status_code = e.status, t.addBreadcrumb(o, {
									category: "request",
									metadata: s
								}), e;
							}).catch(function(e) {
								throw t.addBreadcrumb("fetch error", {
									category: "error",
									metadata: s
								}), e;
							});
						};
					});
				})(), (function() {
					if (!n("navigation") || e.location == null) return;
					var r = e.location.href;
					function i(e, n) {
						r = n, t.addBreadcrumb("Page changed", {
							category: "navigation",
							metadata: {
								from: e,
								to: n
							}
						});
					}
					if (typeof addEventListener == "function" && addEventListener("popstate", function(t) {
						i(r, e.location.href);
					}), e.history === void 0) return;
					function a(e) {
						return function() {
							var t = arguments.length > 2 ? arguments[2] : void 0;
							return t && i(r, String(t)), e.apply(this, arguments);
						};
					}
					X(e.history, "pushState", a), X(e.history, "replaceState", a);
				})();
			} };
		}
		q.default = Pe;
		var Fe = {};
		Object.defineProperty(Fe, "__esModule", { value: !0 });
		var Ie = i, Le = Ie.Util.instrument, Re = Ie.Util.globalThisOrWindow;
		function ze(e) {
			return e === void 0 && (e = Re()), { load: function(t) {
				(function() {
					function n(e) {
						return function(n) {
							return function(r, i) {
								if (typeof r == "function") {
									var a = Array.prototype.slice.call(arguments, 2);
									return r = t.__wrap(r, e), n(function() {
										r.apply(void 0, a);
									}, i);
								}
								return n(r, i);
							};
						};
					}
					Le(e, "setTimeout", n({ component: "setTimeout" })), Le(e, "setInterval", n({ component: "setInterval" }));
				})();
			} };
		}
		Fe.default = ze;
		var Be = {};
		Object.defineProperty(Be, "__esModule", { value: !0 });
		var Ve = i, He = Ve.Util.instrument, Ue = Ve.Util.globalThisOrWindow;
		function We(e) {
			return e === void 0 && (e = Ue()), { load: function(t) {
				(/* @__PURE__ */ "EventTarget.Window.Node.ApplicationCache.AudioTrackList.ChannelMergerNode.CryptoOperation.EventSource.FileReader.HTMLUnknownElement.IDBDatabase.IDBRequest.IDBTransaction.KeyOperation.MediaController.MessagePort.ModalWindow.Notification.SVGElementInstance.Screen.TextTrack.TextTrackCue.TextTrackList.WebSocket.WebSocketWorker.Worker.XMLHttpRequest.XMLHttpRequestEventTarget.XMLHttpRequestUpload".split(".")).forEach(function(n) {
					var r = e[n] && e[n].prototype;
					r && Object.prototype.hasOwnProperty.call(r, "addEventListener") && (He(r, "addEventListener", function(e) {
						var r = { component: `${n}.prototype.addEventListener` };
						return function(n, i, a, o) {
							try {
								i && i.handleEvent != null && (i.handleEvent = t.__wrap(i.handleEvent, r));
							} catch (e) {
								t.logger.error(e);
							}
							return e.call(this, n, t.__wrap(i, r), a, o);
						};
					}), He(r, "removeEventListener", function(e) {
						return function(n, r, i, a) {
							return e.call(this, n, r, i, a), e.call(this, n, t.__wrap(r), i, a);
						};
					}));
				});
			} };
		}
		Be.default = We;
		var Z = {}, Ge = e && e.__awaiter || function(e, t, n, r) {
			function i(e) {
				return e instanceof n ? e : new n(function(t) {
					t(e);
				});
			}
			return new (n ||= Promise)(function(n, a) {
				function o(e) {
					try {
						c(r.next(e));
					} catch (e) {
						a(e);
					}
				}
				function s(e) {
					try {
						c(r.throw(e));
					} catch (e) {
						a(e);
					}
				}
				function c(e) {
					e.done ? n(e.value) : i(e.value).then(o, s);
				}
				c((r = r.apply(e, t || [])).next());
			});
		}, Ke = e && e.__generator || function(e, t) {
			var n = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1];
				},
				trys: [],
				ops: []
			}, r, i, a, o = {
				next: s(0),
				throw: s(1),
				return: s(2)
			};
			return typeof Symbol == "function" && (o[Symbol.iterator] = function() {
				return this;
			}), o;
			function s(e) {
				return function(t) {
					return c([e, t]);
				};
			}
			function c(s) {
				if (r) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (n = 0)), n;) try {
					if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
					switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
						case 0:
						case 1:
							a = s;
							break;
						case 4: return n.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							n.label++, i = s[1], s = [0];
							continue;
						case 7:
							s = n.ops.pop(), n.trys.pop();
							continue;
						default:
							if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
								n = 0;
								continue;
							}
							if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
								n.label = s[1];
								break;
							}
							if (s[0] === 6 && n.label < a[1]) {
								n.label = a[1], a = s;
								break;
							}
							if (a && n.label < a[2]) {
								n.label = a[2], n.ops.push(s);
								break;
							}
							a[2] && n.ops.pop(), n.trys.pop();
							continue;
					}
					s = t.call(e, n);
				} catch (e) {
					s = [6, e], i = 0;
				} finally {
					r = a = 0;
				}
				if (s[0] & 5) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				};
			}
		};
		Object.defineProperty(Z, "__esModule", { value: !0 }), Z.BrowserTransport = void 0;
		var qe = i, Je = qe.Util.sanitize, Ye = qe.Util.globalThisOrWindow;
		function Xe(e) {
			return Object.entries(e);
		}
		Z.BrowserTransport = function() {
			function e(e) {
				e === void 0 && (e = {}), this.headers = {}, this.headers = e;
			}
			return e.prototype.defaultHeaders = function() {
				return this.headers;
			}, e.prototype.send = function(e, t) {
				return Ge(this, void 0, void 0, function() {
					var n, r, i, a, o;
					return Ke(this, function(s) {
						switch (s.label) {
							case 0: return n = e.headers ? Xe(e.headers) : [], r = this.defaultHeaders(), n.forEach(function(e) {
								var t = e[0], n = e[1];
								t != null && n != null && (r[String(t)] = String(n));
							}), i = {
								method: e.method,
								headers: r
							}, e.method === "POST" && t && (i.body = typeof t == "string" ? t : JSON.stringify(Je(t, e.maxObjectDepth))), [4, Ye().fetch(e.endpoint, i)];
							case 1: return a = s.sent(), [4, a.text()];
							case 2: return o = s.sent(), [2, Promise.resolve({
								statusCode: a.status,
								body: o
							})];
						}
					});
				});
			}, e;
		}();
		var Q = {}, $ = e && e.__assign || function() {
			return $ = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}, $.apply(this, arguments);
		};
		Object.defineProperty(Q, "__esModule", { value: !0 }), Q.BrowserFeedbackForm = void 0;
		var Ze = i.Util.globalThisOrWindow;
		Q.BrowserFeedbackForm = function() {
			function t(e, t, n) {
				this.config = e, this.logger = t, this.scriptUrl = n;
			}
			return t.prototype.appendUserFeedbackTag = function(t, n) {
				n === void 0 && (n = {});
				var r = t.document.createElement("script");
				r.setAttribute("src", this.scriptUrl), r.setAttribute("async", "true"), n.onLoad && (r.onload = n.onLoad), (e.document.head || e.document.body).appendChild(r);
			}, t.prototype.isUserFeedbackUrlAlreadyVisible = function() {
				for (var e = Ze(), t = this.scriptUrl, n = 0; n < e.document.scripts.length; n++) if (e.document.scripts[n].src === t) return !0;
				return !1;
			}, t.prototype.show = function(e, t) {
				if (t === void 0 && (t = {}), typeof this.appendUserFeedbackTag != "function") this.logger.debug("Feedback form is not available in this environment");
				else if (!this.config || !this.config.apiKey) this.logger.debug("Client not initialized");
				else if (!e) this.logger.debug("Can't show user feedback form without a notice already reported");
				else {
					var n = Ze();
					n.document === void 0 ? this.logger.debug("global.document is undefined. Cannot attach script") : this.isUserFeedbackUrlAlreadyVisible() ? this.logger.debug("User feedback form is already visible") : (n.honeybadgerUserFeedbackOptions = $($({}, t), {
						apiKey: this.config.apiKey,
						endpoint: this.config.userFeedbackEndpoint,
						noticeId: e
					}), this.appendUserFeedbackTag(n, t));
				}
			}, t;
		}();
		var Qe = {};
		return (function(e) {
			Object.defineProperty(e, "__esModule", { value: !0 }), e.getOrCreateSingleton = e.singletonKey = e.DISABLE_GLOBAL_SINGLETON_KEY = void 0;
			var t = i;
			e.DISABLE_GLOBAL_SINGLETON_KEY = "__HONEYBADGER_DISABLE_GLOBAL_SINGLETON__";
			var n = "__honeybadger_client__";
			function r(e, t) {
				return `__honeybadger_singleton_${e}_${t}__`;
			}
			e.singletonKey = r;
			function a(e) {
				return !!e && e[n] === !0;
			}
			function o(e) {
				Object.defineProperty(e, n, {
					value: !0,
					writable: !1,
					configurable: !0,
					enumerable: !1
				});
			}
			function s(n, i, s, c) {
				if (c === void 0 && (c = t.Util.globalThisOrWindow()), !c) return s();
				var l = r(n, i), u, d = !1;
				try {
					if (c[e.DISABLE_GLOBAL_SINGLETON_KEY] !== !0) {
						d = !0;
						var f = c[l];
						a(f) && (u = f);
					}
				} catch {
					d = !1;
				}
				if (u) return u;
				var p = s();
				if (!d) return p;
				try {
					o(p), Object.defineProperty(c, l, {
						value: p,
						writable: !0,
						configurable: !0,
						enumerable: !1
					});
				} catch {}
				return p;
			}
			e.getOrCreateSingleton = s;
		})(Qe), (function(t) {
			var n = e && e.__extends || (function() {
				var e = function(t, n) {
					return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					}, e(t, n);
				};
				return function(t, n) {
					if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
					e(t, n);
					function r() {
						this.constructor = t;
					}
					t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
				};
			})(), r = e && e.__assign || function() {
				return r = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e;
				}, r.apply(this, arguments);
			}, a = e && e.__awaiter || function(e, t, n, r) {
				function i(e) {
					return e instanceof n ? e : new n(function(t) {
						t(e);
					});
				}
				return new (n ||= Promise)(function(n, a) {
					function o(e) {
						try {
							c(r.next(e));
						} catch (e) {
							a(e);
						}
					}
					function s(e) {
						try {
							c(r.throw(e));
						} catch (e) {
							a(e);
						}
					}
					function c(e) {
						e.done ? n(e.value) : i(e.value).then(o, s);
					}
					c((r = r.apply(e, t || [])).next());
				});
			}, o = e && e.__generator || function(e, t) {
				var n = {
					label: 0,
					sent: function() {
						if (a[0] & 1) throw a[1];
						return a[1];
					},
					trys: [],
					ops: []
				}, r, i, a, o = {
					next: s(0),
					throw: s(1),
					return: s(2)
				};
				return typeof Symbol == "function" && (o[Symbol.iterator] = function() {
					return this;
				}), o;
				function s(e) {
					return function(t) {
						return c([e, t]);
					};
				}
				function c(s) {
					if (r) throw TypeError("Generator is already executing.");
					for (; o && (o = 0, s[0] && (n = 0)), n;) try {
						if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
						switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
							case 0:
							case 1:
								a = s;
								break;
							case 4: return n.label++, {
								value: s[1],
								done: !1
							};
							case 5:
								n.label++, i = s[1], s = [0];
								continue;
							case 7:
								s = n.ops.pop(), n.trys.pop();
								continue;
							default:
								if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
									n = 0;
									continue;
								}
								if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
									n.label = s[1];
									break;
								}
								if (s[0] === 6 && n.label < a[1]) {
									n.label = a[1], a = s;
									break;
								}
								if (a && n.label < a[2]) {
									n.label = a[2], n.ops.push(s);
									break;
								}
								a[2] && n.ops.pop(), n.trys.pop();
								continue;
						}
						s = t.call(e, n);
					} catch (e) {
						s = [6, e], i = 0;
					} finally {
						r = a = 0;
					}
					if (s[0] & 5) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					};
				}
			}, s = e && e.__importDefault || function(e) {
				return e && e.__esModule ? e : { default: e };
			};
			Object.defineProperty(t, "__esModule", { value: !0 }), t.Types = t.getUserFeedbackScriptUrl = void 0;
			var c = i, l = I, u = H, d = s(G), f = s(q), p = s(Fe), m = s(Be), h = Z, ee = Q, te = Qe, ne = c.Util.merge, g = c.Util.filter, _ = c.Util.objectIsExtensible, re = c.Util.globalThisOrWindow, v = function() {
				var e = re(), t = "";
				return e.location != null && (t = e.location.protocol + "//" + e.location.host), t;
			};
			t.getUserFeedbackScriptUrl = function(e) {
				return `https://js.honeybadger.io/v${e.split(".").slice(0, 2).join(".")}/honeybadger-feedback-form.js`;
			};
			var y = function(e) {
				n(i, e);
				function i(t) {
					t === void 0 && (t = {});
					var n = e.call(this, r({
						userFeedbackEndpoint: "https://api.honeybadger.io/v2/feedback",
						async: !0,
						maxErrors: null,
						ignoreBrowserExtensionErrors: !1,
						breadcrumbsSelectorAttributes: c.Defaults.BREADCRUMBS_SELECTOR_ATTRIBUTES,
						projectRoot: v()
					}, t), new h.BrowserTransport({ "User-Agent": x() })) || this;
					return n.__errorsSent = 0, n.__lastWrapErr = void 0, n.__lastNoticeId = void 0, n.__beforeNotifyHandlers = [function(e) {
						if (n.config.ignoreBrowserExtensionErrors && e && e.backtrace && e.backtrace.length) {
							var t = e.backtrace[0];
							if (t && typeof t.file == "string" && (t.file.startsWith("chrome-extension://") || t.file.startsWith("moz-extension://") || t.file.startsWith("safari-extension://") || t.file.startsWith("safari-web-extension://"))) return n.logger.debug("Dropping notice: browser extension error", e), !1;
						}
						return n.__exceedsMaxErrors() ? (n.logger.debug("Dropping notice: max errors exceeded", e), !1) : (e && !e.url && typeof document < "u" && (e.url = document.URL), n.__incrementErrorsCount(), !0);
					}], n.__afterNotifyHandlers = [function(e, t) {
						t && (n.__lastNoticeId = t.id);
					}], n;
				}
				return i.prototype.configure = function(t) {
					return t === void 0 && (t = {}), e.prototype.configure.call(this, t);
				}, i.prototype.resetMaxErrors = function() {
					return this.__errorsSent = 0;
				}, i.prototype.factory = function(e) {
					var t = new i(e);
					return t.setNotifier(this.getNotifier()), t;
				}, i.prototype.checkIn = function(e) {
					throw Error("Honeybadger.checkIn() is not supported on the browser");
				}, i.prototype.showUserFeedbackForm = function(e) {
					return e === void 0 && (e = {}), a(this, void 0, void 0, function() {
						var t;
						return o(this, function(n) {
							return t = new ee.BrowserFeedbackForm(this.config, this.logger, this.getUserFeedbackSubmitUrl()), t.show(this.__lastNoticeId, e), [2];
						});
					});
				}, i.prototype.getUserFeedbackSubmitUrl = function() {
					return (0, t.getUserFeedbackScriptUrl)(b.version);
				}, i.prototype.__buildPayload = function(t) {
					var n = {
						HTTP_USER_AGENT: void 0,
						HTTP_REFERER: void 0,
						HTTP_COOKIE: void 0
					};
					typeof navigator < "u" && navigator.userAgent && (n.HTTP_USER_AGENT = navigator.userAgent), typeof document < "u" && document.referrer.match(/\S/) && (n.HTTP_REFERER = document.referrer);
					var r = typeof t.cookies == "string" ? (0, l.decodeCookie)(t.cookies) : t.cookies;
					r && (n.HTTP_COOKIE = (0, l.encodeCookie)(g(r, this.config.filters)));
					var i = e.prototype.__buildPayload.call(this, t);
					return i.request.cgi_data = ne(n, i.request.cgi_data), i;
				}, i.prototype.__wrap = function(e, t) {
					t === void 0 && (t = {});
					var n = e;
					t ||= {};
					try {
						if (typeof n != "function" || !_(n)) return n;
						if (!n.___hb) {
							var r = this;
							n.___hb = function() {
								if (l.preferCatch) try {
									return n.apply(this, arguments);
								} catch (e) {
									throw r.__lastWrapErr === e || (r.__lastWrapErr = e, (0, u.ignoreNextOnError)(), r.addBreadcrumb(t.component ? `${t.component}: ${e.name}` : e.name, {
										category: "error",
										metadata: {
											message: e.message,
											name: e.name,
											stack: e.stack
										}
									}), r.config.enableUncaught && r.notify(e)), e;
								}
								return n.apply(this, arguments);
							};
						}
						return n.___hb.___hb = n.___hb, n.___hb;
					} catch {
						return n;
					}
				}, i.prototype.__incrementErrorsCount = function() {
					return this.__errorsSent++;
				}, i.prototype.__exceedsMaxErrors = function() {
					return this.config.maxErrors && this.__errorsSent >= this.config.maxErrors;
				}, i;
			}(c.Client), b = {
				name: "@honeybadger-io/js",
				url: "https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",
				version: "6.17.0"
			}, x = function() {
				return typeof navigator < "u" ? `Honeybadger JS Browser Client ${b.version}; ${navigator.userAgent}` : `Honeybadger JS Browser Client ${b.version}; n/a; n/a`;
			}, S = (0, te.getOrCreateSingleton)("browser", b.version, function() {
				var e = new y({ __plugins: [
					(0, u.onError)(),
					(0, d.default)(),
					(0, p.default)(),
					(0, m.default)(),
					(0, f.default)(),
					c.Plugins.consoleEvents()
				] });
				return e.setNotifier(b), e;
			}), C = i;
			Object.defineProperty(t, "Types", {
				enumerable: !0,
				get: function() {
					return C.Types;
				}
			}), t.default = S;
		})(r), /* @__PURE__ */ t(r);
	}));
})), p = /* @__PURE__ */ d(f(), 1);
function m(n) {
	t("betaOptIn") && e("sendException", n), p.default.notify(n, "sendException");
}
export { d as i, f as n, l as r, m as t };

//# sourceMappingURL=sendException-BQ7Cj-s_.js.map