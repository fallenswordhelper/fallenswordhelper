import { n as e } from "./devStdOut-BnwcHKWA.js";
import { t } from "./getValue-CCThXEzy.js";
//#region \0rolldown/runtime.js
var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), l = (e, t) => {
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
}, d = (e, t, i) => (i = e == null ? {} : n(o(e)), u(t || !e || !e.__esModule ? r(i, "default", {
	value: e,
	enumerable: !0
}) : i, e)), f = /* @__PURE__ */ c(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self, n.Honeybadger = r());
	})(e, (function() {
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
				var n = d(t) || p(t) || g(t) || b(t) || v(t);
				return n && e.push(n), e;
			}, []);
		}
		var l = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, u = /\((\S*)(?::(\d+))(?::(\d+))\)/;
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
		var f = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
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
		var m = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, h = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
		function g(e) {
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
		var _ = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
		function v(e) {
			var t = _.exec(e);
			return t ? {
				file: t[3],
				methodName: t[1] || s,
				arguments: [],
				lineNumber: +t[4],
				column: t[5] ? +t[5] : null
			} : null;
		}
		var y = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
		function b(e) {
			var t = y.exec(e);
			return t ? {
				file: t[2],
				methodName: t[1] || s,
				arguments: [],
				lineNumber: +t[3],
				column: t[4] ? +t[4] : null
			} : null;
		}
		var ee = /* @__PURE__ */ n(/* @__PURE__ */ Object.freeze({
			__proto__: null,
			parse: c
		}));
		(function(t) {
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
			}), i = e && e.__importStar || function(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (e != null) for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && n(t, e, i);
				return r(t, e), t;
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
				}, r, i, a, o;
				return o = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
					return this;
				}), o;
				function s(e) {
					return function(t) {
						return c([e, t]);
					};
				}
				function c(o) {
					if (r) throw TypeError("Generator is already executing.");
					for (; n;) try {
						if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
						switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
							case 0:
							case 1:
								a = o;
								break;
							case 4: return n.label++, {
								value: o[1],
								done: !1
							};
							case 5:
								n.label++, i = o[1], o = [0];
								continue;
							case 7:
								o = n.ops.pop(), n.trys.pop();
								continue;
							default:
								if ((a = n.trys, !(a = a.length > 0 && a[a.length - 1])) && (o[0] === 6 || o[0] === 2)) {
									n = 0;
									continue;
								}
								if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
									n.label = o[1];
									break;
								}
								if (o[0] === 6 && n.label < a[1]) {
									n.label = a[1], a = o;
									break;
								}
								if (a && n.label < a[2]) {
									n.label = a[2], n.ops.push(o);
									break;
								}
								a[2] && n.ops.pop(), n.trys.pop();
								continue;
						}
						o = t.call(e, n);
					} catch (e) {
						o = [6, e], i = 0;
					} finally {
						r = a = 0;
					}
					if (o[0] & 5) throw o[1];
					return {
						value: o[0] ? o[1] : void 0,
						done: !0
					};
				}
			};
			Object.defineProperty(t, "__esModule", { value: !0 }), t.logDeprecatedMethod = t.globalThisOrWindow = t.isBrowserConfig = t.clone = t.formatCGIData = t.filterUrl = t.filter = t.generateStackTrace = t.endpoint = t.instrumentConsole = t.instrument = t.isErrorObject = t.makeNotice = t.logger = t.sanitize = t.shallowClone = t.runAfterNotifyHandlers = t.runBeforeNotifyHandlers = t.getSourceForBacktrace = t.getCauses = t.calculateBacktraceShift = t.DEFAULT_BACKTRACE_SHIFT = t.makeBacktrace = t.objectIsExtensible = t.objectIsEmpty = t.mergeNotice = t.merge = void 0;
			var s = i(ee);
			function c(e, t) {
				var n = {};
				for (var r in e) n[r] = e[r];
				for (var r in t) n[r] = t[r];
				return n;
			}
			t.merge = c;
			function l(e, t) {
				var n = c(e, t);
				return e.context && t.context && (n.context = c(e.context, t.context)), n;
			}
			t.mergeNotice = l;
			function u(e) {
				for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
				return !0;
			}
			t.objectIsEmpty = u;
			function d(e) {
				return typeof Object.isExtensible == "function" ? Object.isExtensible(e) : !0;
			}
			t.objectIsExtensible = d;
			function f(e, t, n) {
				if (t === void 0 && (t = !1), n === void 0 && (n = console), !e) return [];
				try {
					var r = s.parse(e).map(function(e) {
						return {
							file: e.file,
							method: e.methodName,
							number: e.lineNumber,
							column: e.column
						};
					});
					return t && r.splice(0, m(r)), r;
				} catch (e) {
					return n.debug(e), [];
				}
			}
			t.makeBacktrace = f;
			function p(e) {
				var t = !1, n = !1;
				return e.file && (t = e.file.toLowerCase().indexOf("@honeybadger-io") > -1), e.method && (n = e.method.toLowerCase().indexOf("@honeybadger-io") > -1), t || n;
			}
			t.DEFAULT_BACKTRACE_SHIFT = 3;
			function m(e) {
				for (var n = 0, r = 0; r < e.length; r++) {
					var i = e[r];
					if (p(i)) {
						n++;
						continue;
					}
					if (!i.file || i.file === "<anonymous>") {
						var a = e[r + 1];
						if (a && p(a)) {
							n++;
							continue;
						}
					}
					break;
				}
				return n || t.DEFAULT_BACKTRACE_SHIFT;
			}
			t.calculateBacktraceShift = m;
			function h(e, t) {
				if (e.cause) {
					for (var n = [], r = e; n.length < 3 && (r = r.cause);) n.push({
						class: r.name,
						message: r.message,
						backtrace: typeof r.stack == "string" ? f(r.stack, !1, t) : null
					});
					return n;
				}
				return [];
			}
			t.getCauses = h;
			function g(e, t) {
				return a(this, void 0, void 0, function() {
					var n, r, i, a;
					return o(this, function(o) {
						switch (o.label) {
							case 0:
								if (n = [], !t || !e || !e.length) return [2, n];
								r = 0, o.label = 1;
							case 1: return e.length ? (i = e.splice(0)[r], [4, t(i.file)]) : [3, 3];
							case 2: return a = o.sent(), n[r] = oe(a, i.number, i.column, 2), r++, [3, 1];
							case 3: return [2, n];
						}
					});
				});
			}
			t.getSourceForBacktrace = g;
			function _(e, t) {
				for (var n = [], r = !0, i = 0, a = t.length; i < a; i++) {
					var o = t[i], s = o(e);
					s === !1 && (r = !1), n.push(s);
				}
				return {
					results: n,
					result: r
				};
			}
			t.runBeforeNotifyHandlers = _;
			function v(e, t, n) {
				e && e.afterNotify && e.afterNotify(n, e);
				for (var r = 0, i = t.length; r < i; r++) t[r](n, e);
				return !0;
			}
			t.runAfterNotifyHandlers = v;
			function y(e) {
				if (typeof e != "object" || !e) return {};
				var t = {};
				for (var n in e) t[n] = e[n];
				return t;
			}
			t.shallowClone = y;
			function b(e, t) {
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
			t.sanitize = b;
			function x(e) {
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
			t.logger = x;
			function S(e) {
				var t;
				if (!e) t = {};
				else if (C(e)) {
					var n = e;
					t = c(e, {
						name: n.name,
						message: n.message,
						stack: n.stack,
						cause: n.cause
					});
				} else t = typeof e == "object" ? y(e) : { message: String(e) };
				return t;
			}
			t.makeNotice = S;
			function C(e) {
				return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
			}
			t.isErrorObject = C;
			function w(e, t, n) {
				if (!(!e || !t || !n || !(t in e))) try {
					for (var r = e[t]; r && r.__hb_original;) r = r.__hb_original;
					e[t] = n(r), e[t].__hb_original = r;
				} catch {}
			}
			t.instrument = w;
			var T = !1, E = [];
			function te(e, t) {
				!e || !e.console || !t || (E.push(t), !T && (T = !0, [
					"debug",
					"info",
					"warn",
					"error",
					"log"
				].forEach(function(t) {
					w(e.console, t, function(n) {
						return function() {
							var r = Array.prototype.slice.call(arguments);
							E.forEach(function(e) {
								try {
									e(t, r);
								} catch {}
							}), typeof n == "function" && Function.prototype.apply.call(n, e.console, arguments);
						};
					});
				})));
			}
			t.instrumentConsole = te;
			function ne(e, t) {
				var n = e.trim().replace(/\/$/, "");
				return t = t.trim().replace(/(^\/|\/$)/g, ""), `${n}/${t}`;
			}
			t.endpoint = ne;
			function D() {
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
			t.generateStackTrace = D;
			function O(e, t) {
				if (!A("Object", e)) return;
				A("Array", t) || (t = []);
				var n = [];
				function r(e) {
					var i, a;
					if (A("Object", e) || A("Array", e)) {
						if (n.indexOf(e) !== -1) return "[CIRCULAR DATA STRUCTURE]";
						n.push(e);
					}
					if (A("Object", e)) {
						for (i in a = {}, e) k(i, t) ? a[i] = "[FILTERED]" : a[i] = r(e[i]);
						return a;
					}
					return A("Array", e) ? e.map(function(e) {
						return r(e);
					}) : A("Function", e) ? "[FUNC]" : e;
				}
				return r(e);
			}
			t.filter = O;
			function k(e, t) {
				for (var n = 0; n < t.length; n++) if (e.toLowerCase().indexOf(t[n].toLowerCase()) !== -1) return !0;
				return !1;
			}
			function A(e, t) {
				var n = Object.prototype.toString.call(t).slice(8, -1);
				return t != null && n === e;
			}
			function re(e, t) {
				if (!t || typeof e != "string") return e;
				var n = e.split(/\?/, 2)[1];
				if (!n) return e;
				var r = e;
				return n.split(/[&]\s?/).forEach(function(e) {
					var n = e.split("=", 2), i = n[0], a = n[1];
					k(i, t) && (r = r.replace(`${i}=${a}`, `${i}=[FILTERED]`));
				}), r;
			}
			t.filterUrl = re;
			function j(e, t) {
				t === void 0 && (t = "");
				var n = {};
				return Object.keys(e).forEach(function(r) {
					var i = t + r.replace(/\W/g, "_").toUpperCase();
					n[i] = e[r];
				}), n;
			}
			t.formatCGIData = j;
			function M(e) {
				return JSON.parse(JSON.stringify(e));
			}
			t.clone = M;
			var N = 1e4, ie = 1e4, ae = 2e5;
			function P(e) {
				var t;
				return t = {}, t[e] = "SOURCE_SIZE_TOO_LARGE", t;
			}
			function oe(e, t, n, r) {
				if (r === void 0 && (r = 2), !e) return null;
				if (n && n > N || e.length > ae) return P(t);
				var i = e.split("\n");
				i.unshift("");
				var a = i[t];
				if (a && a.length > ie) return P(t);
				for (var o = t - r, s = t + r, c = {}, l = o; l <= s; l++) {
					var u = i[l];
					typeof u == "string" && (c[l] = u);
				}
				return c;
			}
			function se(e) {
				return e.async !== void 0;
			}
			t.isBrowserConfig = se;
			function ce() {
				return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window;
			}
			t.globalThisOrWindow = ce;
			var F = {};
			function le(e, t, n, r) {
				r === void 0 && (r = 100);
				var i = `${t}-${n}`;
				if (F[i] === void 0 && (F[i] = 0), F[i] % r !== 0) {
					F[i]++;
					return;
				}
				var a = `Deprecation warning: ${t} has been deprecated; please use ${n} instead.`;
				e.warn(a), F[i]++;
			}
			t.logDeprecatedMethod = le;
		})(o), Object.defineProperty(a, "__esModule", { value: !0 });
		var x = o;
		function S(e) {
			return e === void 0 && (e = (0, x.globalThisOrWindow)()), {
				shouldReloadOnConfigure: !1,
				load: function(t) {
					function n() {
						return t.config.eventsEnabled;
					}
					n() && (0, x.instrumentConsole)(e, function(e, r) {
						if (n() && r.length !== 0) {
							var i = { severity: e };
							typeof r[0] == "string" ? (i.message = r[0], i.args = r.slice(1)) : i.args = r, t.event("log", i);
						}
					});
				}
			};
		}
		a.default = S;
		var C = {}, w = {};
		Object.defineProperty(w, "__esModule", { value: !0 }), w.GlobalStore = void 0;
		var T = o;
		w.GlobalStore = function() {
			function e(e, t) {
				this.contents = e, this.breadcrumbsLimit = t;
			}
			return e.create = function(t, n) {
				return new e(t, n);
			}, e.prototype.available = function() {
				return !0;
			}, e.prototype.getContents = function(e) {
				var t = e ? this.contents[e] : this.contents;
				return JSON.parse(JSON.stringify(t));
			}, e.prototype.setContext = function(e) {
				this.contents.context = (0, T.merge)(this.contents.context, e || {});
			}, e.prototype.addBreadcrumb = function(e) {
				this.contents.breadcrumbs.length == this.breadcrumbsLimit && this.contents.breadcrumbs.shift(), this.contents.breadcrumbs.push(e);
			}, e.prototype.clear = function() {
				this.contents.context = {}, this.contents.breadcrumbs = [];
			}, e.prototype.run = function(e) {
				return e();
			}, e;
		}();
		var E = {};
		class te {
			static parse(e) {
				return e.trim().split("\n").map((e) => JSON.parse(e));
			}
			static stringify(e) {
				return e.map((e) => JSON.stringify(e)).join("\n");
			}
		}
		var ne = /* @__PURE__ */ n(/* @__PURE__ */ Object.freeze({
			__proto__: null,
			NdJson: te
		})), D = {};
		Object.defineProperty(D, "__esModule", { value: !0 }), D.CONFIG = void 0, D.CONFIG = {
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
		};
		var O = e && e.__assign || function() {
			return O = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}, O.apply(this, arguments);
		}, k = e && e.__awaiter || function(e, t, n, r) {
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
		}, A = e && e.__generator || function(e, t) {
			var n = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1];
				},
				trys: [],
				ops: []
			}, r, i, a, o;
			return o = {
				next: s(0),
				throw: s(1),
				return: s(2)
			}, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
				return this;
			}), o;
			function s(e) {
				return function(t) {
					return c([e, t]);
				};
			}
			function c(o) {
				if (r) throw TypeError("Generator is already executing.");
				for (; n;) try {
					if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
					switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
						case 0:
						case 1:
							a = o;
							break;
						case 4: return n.label++, {
							value: o[1],
							done: !1
						};
						case 5:
							n.label++, i = o[1], o = [0];
							continue;
						case 7:
							o = n.ops.pop(), n.trys.pop();
							continue;
						default:
							if ((a = n.trys, !(a = a.length > 0 && a[a.length - 1])) && (o[0] === 6 || o[0] === 2)) {
								n = 0;
								continue;
							}
							if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
								n.label = o[1];
								break;
							}
							if (o[0] === 6 && n.label < a[1]) {
								n.label = a[1], a = o;
								break;
							}
							if (a && n.label < a[2]) {
								n.label = a[2], n.ops.push(o);
								break;
							}
							a[2] && n.ops.pop(), n.trys.pop();
							continue;
					}
					o = t.call(e, n);
				} catch (e) {
					o = [6, e], i = 0;
				} finally {
					r = a = 0;
				}
				if (o[0] & 5) throw o[1];
				return {
					value: o[0] ? o[1] : void 0,
					done: !0
				};
			}
		};
		Object.defineProperty(E, "__esModule", { value: !0 }), E.ThrottledEventsLogger = void 0;
		var re = ne, j = o, M = D;
		E.ThrottledEventsLogger = function() {
			function e(e, t) {
				this.config = e, this.transport = t, this.queue = [], this.isProcessing = !1, this.config = O(O({}, M.CONFIG), e), this.logger = this.originalLogger();
			}
			return e.prototype.configure = function(e) {
				for (var t in e) this.config[t] = e[t];
			}, e.prototype.log = function(e) {
				this.queue.push(e), this.isProcessing || this.processQueue();
			}, e.prototype.flushAsync = function() {
				return this.logger.debug("[Honeybadger] Flushing events"), this.send();
			}, e.prototype.processQueue = function() {
				var e = this;
				this.queue.length === 0 || this.isProcessing || (this.isProcessing = !0, this.send().then(function() {
					setTimeout(function() {
						e.isProcessing = !1, e.processQueue();
					}, 50);
				}).catch(function(t) {
					e.logger.error("[Honeybadger] Error making HTTP request:", t), setTimeout(function() {
						e.isProcessing = !1, e.processQueue();
					}, 50);
				}));
			}, e.prototype.send = function() {
				return k(this, void 0, void 0, function() {
					var e, t;
					return A(this, function(n) {
						return this.queue.length === 0 ? [2] : (e = this.queue.slice(), this.queue = [], t = re.NdJson.stringify(e), [2, this.makeHttpRequest(t)]);
					});
				});
			}, e.prototype.makeHttpRequest = function(e) {
				return k(this, void 0, void 0, function() {
					var t = this;
					return A(this, function(n) {
						return [2, this.transport.send({
							headers: {
								"X-API-Key": this.config.apiKey,
								"Content-Type": "application/json"
							},
							method: "POST",
							endpoint: (0, j.endpoint)(this.config.endpoint, "/v1/events"),
							maxObjectDepth: this.config.maxObjectDepth,
							logger: this.logger
						}, e).then(function() {
							t.config.debug && t.logger.debug("[Honeybadger] Events sent successfully");
						}).catch(function(e) {
							t.logger.error(`[Honeybadger] Error sending events: ${e.message}`);
						})];
					});
				});
			}, e.prototype.originalLogger = function() {
				return {
					log: console.log.__hb_original ?? console.log,
					info: console.info.__hb_original ?? console.info,
					debug: console.debug.__hb_original ?? console.debug,
					warn: console.warn.__hb_original ?? console.warn,
					error: console.error.__hb_original ?? console.error
				};
			}, e;
		}();
		var N = e && e.__assign || function() {
			return N = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}, N.apply(this, arguments);
		}, ie = e && e.__awaiter || function(e, t, n, r) {
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
		}, ae = e && e.__generator || function(e, t) {
			var n = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1];
				},
				trys: [],
				ops: []
			}, r, i, a, o;
			return o = {
				next: s(0),
				throw: s(1),
				return: s(2)
			}, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
				return this;
			}), o;
			function s(e) {
				return function(t) {
					return c([e, t]);
				};
			}
			function c(o) {
				if (r) throw TypeError("Generator is already executing.");
				for (; n;) try {
					if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
					switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
						case 0:
						case 1:
							a = o;
							break;
						case 4: return n.label++, {
							value: o[1],
							done: !1
						};
						case 5:
							n.label++, i = o[1], o = [0];
							continue;
						case 7:
							o = n.ops.pop(), n.trys.pop();
							continue;
						default:
							if ((a = n.trys, !(a = a.length > 0 && a[a.length - 1])) && (o[0] === 6 || o[0] === 2)) {
								n = 0;
								continue;
							}
							if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
								n.label = o[1];
								break;
							}
							if (o[0] === 6 && n.label < a[1]) {
								n.label = a[1], a = o;
								break;
							}
							if (a && n.label < a[2]) {
								n.label = a[2], n.ops.push(o);
								break;
							}
							a[2] && n.ops.pop(), n.trys.pop();
							continue;
					}
					o = t.call(e, n);
				} catch (e) {
					o = [6, e], i = 0;
				} finally {
					r = a = 0;
				}
				if (o[0] & 5) throw o[1];
				return {
					value: o[0] ? o[1] : void 0,
					done: !0
				};
			}
		};
		Object.defineProperty(C, "__esModule", { value: !0 }), C.Client = void 0;
		var P = o, oe = w, se = E, ce = D, F = /,|\s+/, le = /\S/;
		C.Client = function() {
			function e(e, t) {
				e === void 0 && (e = {}), this.__pluginsLoaded = !1, this.__store = null, this.__beforeNotifyHandlers = [], this.__afterNotifyHandlers = [], this.__notifier = {
					name: "@honeybadger-io/core",
					url: "https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",
					version: "6.12.3"
				}, this.config = N(N({}, ce.CONFIG), e), this.__initStore(), this.__transport = t, this.__eventsLogger = new se.ThrottledEventsLogger(this.config, this.__transport), this.logger = (0, P.logger)(this);
			}
			return e.prototype.getVersion = function() {
				return this.__notifier.version;
			}, e.prototype.getNotifier = function() {
				return this.__notifier;
			}, e.prototype.setNotifier = function(e) {
				this.__notifier = e;
			}, e.prototype.configure = function(e) {
				for (var t in e === void 0 && (e = {}), e) this.config[t] = e[t];
				return this.__eventsLogger.configure(this.config), this.loadPlugins(), this;
			}, e.prototype.loadPlugins = function() {
				var e = this;
				(this.__pluginsLoaded ? this.config.__plugins.filter(function(e) {
					return e.shouldReloadOnConfigure;
				}) : this.config.__plugins).forEach(function(t) {
					return t.load(e);
				}), this.__pluginsLoaded = !0;
			}, e.prototype.__initStore = function() {
				this.__store = new oe.GlobalStore({
					context: {},
					breadcrumbs: []
				}, this.config.maxBreadcrumbs);
			}, e.prototype.beforeNotify = function(e) {
				return this.__beforeNotifyHandlers.push(e), this;
			}, e.prototype.afterNotify = function(e) {
				return this.__afterNotifyHandlers.push(e), this;
			}, e.prototype.setContext = function(e) {
				return typeof e == "object" && e && this.__store.setContext(e), this;
			}, e.prototype.resetContext = function(e) {
				return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."), this.__store.clear(), typeof e == "object" && e && this.__store.setContext(e), this;
			}, e.prototype.clear = function() {
				return this.__store.clear(), this;
			}, e.prototype.notify = function(e, t, n) {
				var r = this;
				t === void 0 && (t = void 0), n === void 0 && (n = void 0);
				var i = this.makeNotice(e, t, n), a = i && i.backtrace ? i.backtrace.map(function(e) {
					return (0, P.shallowClone)(e);
				}) : null, o = this.__runPreconditions(i);
				return o instanceof Error ? ((0, P.runAfterNotifyHandlers)(i, this.__afterNotifyHandlers, o), !1) : o instanceof Promise ? (o.then(function(e) {
					return e instanceof Error ? ((0, P.runAfterNotifyHandlers)(i, r.__afterNotifyHandlers, e), !1) : r.__send(i, a);
				}), !0) : (this.__send(i, a).catch(function(e) {}), !0);
			}, e.prototype.notifyAsync = function(e, t, n) {
				var r = this;
				return t === void 0 && (t = void 0), n === void 0 && (n = void 0), new Promise(function(i, a) {
					(function(e) {
						var t = e.afterNotify;
						e.afterNotify = function(e) {
							if (t?.call(r, e), e) return a(e);
							i();
						};
					})(e.afterNotify ? e : t && t.afterNotify ? t : n && n.afterNotify ? n : t && typeof t == "object" ? t : n || (t = {})), r.notify(e, t, n);
				});
			}, e.prototype.makeNotice = function(e, t, n) {
				t === void 0 && (t = void 0), n === void 0 && (n = void 0);
				var r = (0, P.makeNotice)(e);
				if (t && typeof t != "object" && (t = { name: String(t) }), t && (r = (0, P.mergeNotice)(r, t)), typeof n == "object" && n && (r = (0, P.mergeNotice)(r, n)), (0, P.objectIsEmpty)(r)) return null;
				var i = this.__store.getContents("context"), a = this.__constructTags(r.tags), o = this.__constructTags(i.tags), s = this.__constructTags(this.config.tags), c = a.concat(o).concat(s), l = c.filter(function(e, t) {
					return c.indexOf(e) === t;
				});
				return r = (0, P.merge)(r, {
					name: r.name || "Error",
					context: (0, P.merge)(i, r.context),
					projectRoot: r.projectRoot || this.config.projectRoot,
					environment: r.environment || this.config.environment,
					component: r.component || this.config.component,
					action: r.action || this.config.action,
					revision: r.revision || this.config.revision,
					tags: l
				}), (!Array.isArray(r.backtrace) || !r.backtrace.length) && (typeof r.stack != "string" || !r.stack.trim() ? (r.stack = (0, P.generateStackTrace)(), r.backtrace = (0, P.makeBacktrace)(r.stack, !0, this.logger)) : r.backtrace = (0, P.makeBacktrace)(r.stack, !1, this.logger)), r;
			}, e.prototype.addBreadcrumb = function(e, t) {
				if (this.config.breadcrumbsEnabled) {
					t ||= {};
					var n = (0, P.shallowClone)(t.metadata), r = t.category || "custom", i = (/* @__PURE__ */ new Date()).toISOString();
					return this.__store.addBreadcrumb({
						category: r,
						message: e,
						metadata: n,
						timestamp: i
					}), this;
				}
			}, e.prototype.logEvent = function(e) {
				(0, P.logDeprecatedMethod)(this.logger, "Honeybadger.logEvent", "Honeybadger.event"), this.event("log", e);
			}, e.prototype.event = function(e, t) {
				typeof e == "object" && (t = e, e = e.event_type ?? void 0), this.__eventsLogger.log(N({
					event_type: e,
					ts: (/* @__PURE__ */ new Date()).toISOString()
				}, t));
			}, e.prototype.flushAsync = function() {
				return this.__eventsLogger.flushAsync();
			}, e.prototype.__getBreadcrumbs = function() {
				return this.__store.getContents("breadcrumbs").slice();
			}, e.prototype.__getContext = function() {
				return this.__store.getContents("context");
			}, e.prototype.__developmentMode = function() {
				return this.config.reportData === !0 ? !1 : this.config.environment && this.config.developmentEnvironments.includes(this.config.environment);
			}, e.prototype.__buildPayload = function(e) {
				var t = (0, P.filter)(e.headers, this.config.filters) || {}, n = (0, P.filter)(N(N({}, e.cgiData), (0, P.formatCGIData)(t, "HTTP_")), this.config.filters);
				return {
					notifier: this.__notifier,
					breadcrumbs: {
						enabled: !!this.config.breadcrumbsEnabled,
						trail: e.__breadcrumbs || []
					},
					error: {
						class: e.name,
						message: e.message,
						backtrace: e.backtrace,
						fingerprint: e.fingerprint,
						tags: e.tags,
						causes: (0, P.getCauses)(e, this.logger)
					},
					request: {
						url: (0, P.filterUrl)(e.url, this.config.filters),
						component: e.component,
						action: e.action,
						context: e.context,
						cgi_data: n,
						params: (0, P.filter)(e.params, this.config.filters) || {},
						session: (0, P.filter)(e.session, this.config.filters) || {}
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
				return e ? e.toString().split(F).filter(function(e) {
					return le.test(e);
				}) : [];
			}, e.prototype.__runPreconditions = function(e) {
				var t = this, n = null;
				e || (this.logger.debug("failed to build error report"), n = /* @__PURE__ */ Error("failed to build error report")), this.config.reportData === !1 && (this.logger.debug("skipping error report: honeybadger.js is disabled", e), n = /* @__PURE__ */ Error("honeybadger.js is disabled")), this.__developmentMode() && (this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.", e), n = /* @__PURE__ */ Error("honeybadger.js is in development mode")), this.config.apiKey || (this.logger.warn("could not send error report: no API key has been configured", e), n = /* @__PURE__ */ Error("missing API key"));
				var r = (0, P.runBeforeNotifyHandlers)(e, this.__beforeNotifyHandlers);
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
				}), e.__breadcrumbs = this.__store.getContents("breadcrumbs")) : e.__breadcrumbs = [], (0, P.getSourceForBacktrace)(t, this.__getSourceFileHandler).then(function(t) {
					return ie(n, void 0, void 0, function() {
						var n;
						return ae(this, function(r) {
							return t.forEach(function(t, n) {
								e.backtrace[n].source = t;
							}), n = this.__buildPayload(e), [2, this.__transport.send({
								headers: {
									"X-API-Key": this.config.apiKey,
									"Content-Type": "application/json",
									Accept: "text/json, application/json"
								},
								method: "POST",
								endpoint: (0, P.endpoint)(this.config.endpoint, "/v1/notices/js"),
								maxObjectDepth: this.config.maxObjectDepth,
								logger: this.logger
							}, n)];
						});
					});
				}).then(function(t) {
					if (t.statusCode !== 201) return (0, P.runAfterNotifyHandlers)(e, n.__afterNotifyHandlers, Error(`Bad HTTP response: ${t.statusCode}`)), n.logger.warn(`Error report failed: unknown response from server. code=${t.statusCode}`), !1;
					var r = JSON.parse(t.body).id;
					(0, P.runAfterNotifyHandlers)((0, P.merge)(e, { id: r }), n.__afterNotifyHandlers);
					var i = (0, P.endpoint)(n.config.appEndpoint, `notice/${r}`);
					return n.logger.info(`Error report sent ⚡ ${i}`), !0;
				}).catch(function(t) {
					return n.logger.error("Error report failed: an unknown error occurred.", `message=${t.message}`), (0, P.runAfterNotifyHandlers)(e, n.__afterNotifyHandlers, t), !1;
				});
			}, e;
		}();
		var ue = {};
		Object.defineProperty(ue, "__esModule", { value: !0 }), (function(t) {
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
			var l = c(a), u = C;
			Object.defineProperty(t, "Client", {
				enumerable: !0,
				get: function() {
					return u.Client;
				}
			}), i(w, t), t.Types = s(ue), t.Util = s(o), t.Defaults = s(D), t.Plugins = { events: l.default };
		})(i);
		var I = {};
		Object.defineProperty(I, "__esModule", { value: !0 }), I.preferCatch = I.encodeCookie = I.decodeCookie = I.localURLPathname = I.parseURL = I.nativeFetch = I.stringTextOfElement = I.stringSelectorOfElement = I.stringNameOfElement = void 0;
		var de = i.Util.globalThisOrWindow;
		function fe(e) {
			if (!e || !e.tagName) return "";
			var t = e.tagName.toLowerCase();
			if (t === "html") return "";
			e.id && (t += `#${e.id}`);
			var n = e.getAttribute("class");
			n && n.split(/\s+/).forEach(function(e) {
				t += `.${e}`;
			}), [
				"alt",
				"name",
				"title",
				"type"
			].forEach(function(n) {
				var r = e.getAttribute(n);
				r && (t += `[${n}="${r}"]`);
			});
			var r = ye(e);
			return r.length > 1 && (t += `:nth-child(${Array.prototype.indexOf.call(r, e) + 1})`), t;
		}
		I.stringNameOfElement = fe;
		function pe(e) {
			var t = fe(e);
			if (e.parentNode && e.parentNode.tagName) {
				var n = pe(e.parentNode);
				if (n.length > 0) return `${n} > ${t}`;
			}
			return t;
		}
		I.stringSelectorOfElement = pe;
		function me(e) {
			var t = e.textContent || e.innerText || "";
			return !t && (e.type === "submit" || e.type === "button") && (t = e.value), be(t.trim(), 300);
		}
		I.stringTextOfElement = me;
		function he() {
			var e = de();
			if (!e.fetch) return !1;
			if (L(e.fetch)) return !0;
			if (typeof document > "u") return !1;
			try {
				var t = document.createElement("iframe");
				t.style.display = "none", document.head.appendChild(t);
				var n = t.contentWindow.fetch && L(t.contentWindow.fetch);
				return document.head.removeChild(t), n;
			} catch (e) {
				console && console.warn && console.warn("failed to detect native fetch via iframe: " + e);
			}
			return !1;
		}
		I.nativeFetch = he;
		function L(e) {
			return e.toString().indexOf("native") !== -1;
		}
		function R(e) {
			var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/) || {};
			return {
				protocol: t[2],
				host: t[4],
				pathname: t[5]
			};
		}
		I.parseURL = R;
		function ge(e) {
			var t = R(e), n = R(document.URL);
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
		var z = {};
		Object.defineProperty(z, "__esModule", { value: !0 }), z.onError = z.ignoreNextOnError = void 0;
		var B = i, xe = B.Util.instrument, Se = B.Util.makeNotice, Ce = B.Util.globalThisOrWindow, V = 0, we;
		function Te() {
			V += 1, clearTimeout(we), we = setTimeout(function() {
				V = 0;
			});
		}
		z.ignoreNextOnError = Te;
		function Ee(e) {
			return e === void 0 && (e = Ce()), { load: function(t) {
				xe(e, "onerror", function(n) {
					var r = function(e, n, r, i, a) {
						if (t.logger.debug("window.onerror callback invoked", arguments), V > 0) {
							t.logger.debug("Ignoring window.onerror (error likely reported earlier)", arguments), --V;
							return;
						}
						if (r === 0 && /Script error\.?/.test(e)) {
							t.config.enableUncaught && t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors", arguments);
							return;
						}
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
					};
					return function(t, i, a, o, s) {
						return r(t, i, a, o, s), typeof n == "function" ? n.apply(e, arguments) : !1;
					};
				});
			} };
		}
		z.onError = Ee;
		var H = {};
		Object.defineProperty(H, "__esModule", { value: !0 });
		var De = i, Oe = De.Util.instrument, ke = De.Util.globalThisOrWindow;
		function Ae(e) {
			return e === void 0 && (e = ke()), { load: function(t) {
				t.config.enableUnhandledRejection && Oe(e, "onunhandledrejection", function(e) {
					function n(e) {
						if (t.logger.debug("window.onunhandledrejection callback invoked", arguments), t.config.enableUnhandledRejection) {
							var n = e.reason;
							if (n instanceof Error) {
								var r = `${n.message}
    at ? (unknown:0)`, i = n.stack || r, a = {
									name: n.name,
									message: `UnhandledPromiseRejectionWarning: ${n}`,
									stack: i
								};
								t.addBreadcrumb(`window.onunhandledrejection: ${a.name}`, {
									category: "error",
									metadata: a
								}), t.notify(a);
								return;
							}
							var o = typeof n == "string" ? n : JSON.stringify(n) ?? "Unspecified reason";
							t.notify({
								name: "window.onunhandledrejection",
								message: `UnhandledPromiseRejectionWarning: ${o}`
							});
						}
					}
					return function(t) {
						n(t), typeof e == "function" && e.apply(this, arguments);
					};
				});
			} };
		}
		H.default = Ae;
		var U = {};
		Object.defineProperty(U, "__esModule", { value: !0 });
		var W = i, G = I, je = W.Util.sanitize, K = W.Util.instrument, Me = W.Util.instrumentConsole, Ne = W.Util.globalThisOrWindow;
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
							n = (0, G.stringNameOfElement)(e.target), r = (0, G.stringSelectorOfElement)(e.target), i = (0, G.stringTextOfElement)(e.target);
						} catch {
							n = "UI Click", r = "[unknown]", i = "[unknown]";
						}
						n.length !== 0 && t.addBreadcrumb(n, {
							category: "ui.click",
							metadata: {
								selector: r,
								text: i,
								event: e
							}
						});
					}, !!e.location);
				})(), (function() {
					n("network") && (typeof XMLHttpRequest > "u" || (K(XMLHttpRequest.prototype, "open", function(e) {
						return function() {
							var t = this, n = arguments[1], r = typeof n == "string" ? n : String(n), i = typeof arguments[0] == "string" ? arguments[0].toUpperCase() : arguments[0];
							this.__hb_xhr = {
								type: "xhr",
								method: i,
								url: r,
								message: `${i} ${(0, G.localURLPathname)(r)}`
							}, typeof e == "function" && e.apply(t, arguments);
						};
					}), K(XMLHttpRequest.prototype, "send", function(e) {
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
							"onreadystatechange" in n && typeof n.onreadystatechange == "function" ? K(n, "onreadystatechange", function(e) {
								return function() {
									r(), typeof e == "function" && e.apply(this, arguments);
								};
							}) : n.onreadystatechange = r, typeof e == "function" && e.apply(n, arguments);
						};
					})));
				})(), (function() {
					n("network") && (0, G.nativeFetch)() && K(e, "fetch", function(n) {
						return function() {
							var r = arguments[0], i = "GET", a;
							typeof r == "string" ? a = r : "Request" in e && r instanceof Request ? (a = r.url, r.method && (i = r.method)) : a = String(r), arguments[1] && arguments[1].method && (i = arguments[1].method), typeof i == "string" && (i = i.toUpperCase());
							var o = `${i} ${typeof document > "u" ? a : (0, G.localURLPathname)(a)}`, s = {
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
					K(e.history, "pushState", a), K(e.history, "replaceState", a);
				})();
			} };
		}
		U.default = Pe;
		var q = {};
		Object.defineProperty(q, "__esModule", { value: !0 });
		var Fe = i, J = Fe.Util.instrument, Ie = Fe.Util.globalThisOrWindow;
		function Le(e) {
			return e === void 0 && (e = Ie()), { load: function(t) {
				(function() {
					function n(e) {
						return function(n) {
							return function(r, i) {
								if (typeof r == "function") {
									var a = Array.prototype.slice.call(arguments, 2);
									return r = t.__wrap(r, e), n(function() {
										r.apply(void 0, a);
									}, i);
								} else return n(r, i);
							};
						};
					}
					J(e, "setTimeout", n({ component: "setTimeout" })), J(e, "setInterval", n({ component: "setInterval" }));
				})();
			} };
		}
		q.default = Le;
		var Y = {};
		Object.defineProperty(Y, "__esModule", { value: !0 });
		var Re = i, ze = Re.Util.instrument, Be = Re.Util.globalThisOrWindow;
		function Ve(e) {
			return e === void 0 && (e = Be()), { load: function(t) {
				(/* @__PURE__ */ "EventTarget.Window.Node.ApplicationCache.AudioTrackList.ChannelMergerNode.CryptoOperation.EventSource.FileReader.HTMLUnknownElement.IDBDatabase.IDBRequest.IDBTransaction.KeyOperation.MediaController.MessagePort.ModalWindow.Notification.SVGElementInstance.Screen.TextTrack.TextTrackCue.TextTrackList.WebSocket.WebSocketWorker.Worker.XMLHttpRequest.XMLHttpRequestEventTarget.XMLHttpRequestUpload".split(".")).forEach(function(n) {
					var r = e[n] && e[n].prototype;
					r && Object.prototype.hasOwnProperty.call(r, "addEventListener") && (ze(r, "addEventListener", function(e) {
						var r = { component: `${n}.prototype.addEventListener` };
						return function(n, i, a, o) {
							try {
								i && i.handleEvent != null && (i.handleEvent = t.__wrap(i.handleEvent, r));
							} catch (e) {
								t.logger.error(e);
							}
							return e.call(this, n, t.__wrap(i, r), a, o);
						};
					}), ze(r, "removeEventListener", function(e) {
						return function(n, r, i, a) {
							return e.call(this, n, r, i, a), e.call(this, n, t.__wrap(r), i, a);
						};
					}));
				});
			} };
		}
		Y.default = Ve;
		var X = {}, He = e && e.__awaiter || function(e, t, n, r) {
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
		}, Ue = e && e.__generator || function(e, t) {
			var n = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1];
				},
				trys: [],
				ops: []
			}, r, i, a, o;
			return o = {
				next: s(0),
				throw: s(1),
				return: s(2)
			}, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
				return this;
			}), o;
			function s(e) {
				return function(t) {
					return c([e, t]);
				};
			}
			function c(o) {
				if (r) throw TypeError("Generator is already executing.");
				for (; n;) try {
					if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
					switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
						case 0:
						case 1:
							a = o;
							break;
						case 4: return n.label++, {
							value: o[1],
							done: !1
						};
						case 5:
							n.label++, i = o[1], o = [0];
							continue;
						case 7:
							o = n.ops.pop(), n.trys.pop();
							continue;
						default:
							if ((a = n.trys, !(a = a.length > 0 && a[a.length - 1])) && (o[0] === 6 || o[0] === 2)) {
								n = 0;
								continue;
							}
							if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
								n.label = o[1];
								break;
							}
							if (o[0] === 6 && n.label < a[1]) {
								n.label = a[1], a = o;
								break;
							}
							if (a && n.label < a[2]) {
								n.label = a[2], n.ops.push(o);
								break;
							}
							a[2] && n.ops.pop(), n.trys.pop();
							continue;
					}
					o = t.call(e, n);
				} catch (e) {
					o = [6, e], i = 0;
				} finally {
					r = a = 0;
				}
				if (o[0] & 5) throw o[1];
				return {
					value: o[0] ? o[1] : void 0,
					done: !0
				};
			}
		};
		Object.defineProperty(X, "__esModule", { value: !0 }), X.BrowserTransport = void 0;
		var We = i, Ge = We.Util.sanitize, Ke = We.Util.globalThisOrWindow;
		function qe(e) {
			return Object.entries(e);
		}
		X.BrowserTransport = function() {
			function e(e) {
				e === void 0 && (e = {}), this.headers = {}, this.headers = e;
			}
			return e.prototype.defaultHeaders = function() {
				return this.headers;
			}, e.prototype.send = function(e, t) {
				return He(this, void 0, void 0, function() {
					var n, r, i, a, o;
					return Ue(this, function(s) {
						switch (s.label) {
							case 0: return n = e.headers ? qe(e.headers) : [], r = this.defaultHeaders(), n.forEach(function(e) {
								var t = e[0], n = e[1];
								t != null && n != null && (r[String(t)] = String(n));
							}), i = {
								method: e.method,
								headers: r
							}, e.method === "POST" && t && (i.body = typeof t == "string" ? t : JSON.stringify(Ge(t, e.maxObjectDepth))), [4, Ke().fetch(e.endpoint, i)];
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
		var Z = {}, Q = e && e.__assign || function() {
			return Q = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}, Q.apply(this, arguments);
		};
		Object.defineProperty(Z, "__esModule", { value: !0 }), Z.BrowserFeedbackForm = void 0;
		var $ = i.Util.globalThisOrWindow;
		return Z.BrowserFeedbackForm = function() {
			function t(e, t, n) {
				this.config = e, this.logger = t, this.scriptUrl = n;
			}
			return t.prototype.appendUserFeedbackTag = function(t, n) {
				n === void 0 && (n = {});
				var r = t.document.createElement("script");
				r.setAttribute("src", this.scriptUrl), r.setAttribute("async", "true"), n.onLoad && (r.onload = n.onLoad), (e.document.head || e.document.body).appendChild(r);
			}, t.prototype.isUserFeedbackUrlAlreadyVisible = function() {
				for (var e = $(), t = this.scriptUrl, n = 0; n < e.document.scripts.length; n++) if (e.document.scripts[n].src === t) return !0;
				return !1;
			}, t.prototype.show = function(e, t) {
				if (t === void 0 && (t = {}), typeof this.appendUserFeedbackTag != "function") {
					this.logger.debug("Feedback form is not available in this environment");
					return;
				}
				if (!this.config || !this.config.apiKey) {
					this.logger.debug("Client not initialized");
					return;
				}
				if (!e) {
					this.logger.debug("Can't show user feedback form without a notice already reported");
					return;
				}
				var n = $();
				if (n.document === void 0) {
					this.logger.debug("global.document is undefined. Cannot attach script");
					return;
				}
				if (this.isUserFeedbackUrlAlreadyVisible()) {
					this.logger.debug("User feedback form is already visible");
					return;
				}
				n.honeybadgerUserFeedbackOptions = Q(Q({}, t), {
					apiKey: this.config.apiKey,
					endpoint: this.config.userFeedbackEndpoint,
					noticeId: e
				}), this.appendUserFeedbackTag(n, t);
			}, t;
		}(), (function(t) {
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
				}, r, i, a, o;
				return o = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
					return this;
				}), o;
				function s(e) {
					return function(t) {
						return c([e, t]);
					};
				}
				function c(o) {
					if (r) throw TypeError("Generator is already executing.");
					for (; n;) try {
						if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
						switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
							case 0:
							case 1:
								a = o;
								break;
							case 4: return n.label++, {
								value: o[1],
								done: !1
							};
							case 5:
								n.label++, i = o[1], o = [0];
								continue;
							case 7:
								o = n.ops.pop(), n.trys.pop();
								continue;
							default:
								if ((a = n.trys, !(a = a.length > 0 && a[a.length - 1])) && (o[0] === 6 || o[0] === 2)) {
									n = 0;
									continue;
								}
								if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
									n.label = o[1];
									break;
								}
								if (o[0] === 6 && n.label < a[1]) {
									n.label = a[1], a = o;
									break;
								}
								if (a && n.label < a[2]) {
									n.label = a[2], n.ops.push(o);
									break;
								}
								a[2] && n.ops.pop(), n.trys.pop();
								continue;
						}
						o = t.call(e, n);
					} catch (e) {
						o = [6, e], i = 0;
					} finally {
						r = a = 0;
					}
					if (o[0] & 5) throw o[1];
					return {
						value: o[0] ? o[1] : void 0,
						done: !0
					};
				}
			}, s = e && e.__importDefault || function(e) {
				return e && e.__esModule ? e : { default: e };
			};
			Object.defineProperty(t, "__esModule", { value: !0 }), t.Types = t.getUserFeedbackScriptUrl = void 0;
			var c = i, l = I, u = z, d = s(H), f = s(U), p = s(q), m = s(Y), h = X, g = Z, _ = c.Util.merge, v = c.Util.filter, y = c.Util.objectIsExtensible, b = c.Util.globalThisOrWindow, ee = function() {
				var e = b(), t = "";
				return e.location != null && (t = e.location.protocol + "//" + e.location.host), t;
			};
			t.getUserFeedbackScriptUrl = function(e) {
				return `https://js.honeybadger.io/v${e.split(".").slice(0, 2).join(".")}/honeybadger-feedback-form.js`;
			};
			var x = function(e) {
				n(i, e);
				function i(t) {
					t === void 0 && (t = {});
					var n = e.call(this, r({
						userFeedbackEndpoint: "https://api.honeybadger.io/v2/feedback",
						async: !0,
						maxErrors: null,
						projectRoot: ee()
					}, t), new h.BrowserTransport({ "User-Agent": C() })) || this;
					return n.__errorsSent = 0, n.__lastWrapErr = void 0, n.__lastNoticeId = void 0, n.__beforeNotifyHandlers = [function(e) {
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
							return t = new g.BrowserFeedbackForm(this.config, this.logger, this.getUserFeedbackSubmitUrl()), t.show(this.__lastNoticeId, e), [2];
						});
					});
				}, i.prototype.getUserFeedbackSubmitUrl = function() {
					return (0, t.getUserFeedbackScriptUrl)(this.getVersion());
				}, i.prototype.__buildPayload = function(t) {
					var n = {
						HTTP_USER_AGENT: void 0,
						HTTP_REFERER: void 0,
						HTTP_COOKIE: void 0
					};
					typeof navigator < "u" && navigator.userAgent && (n.HTTP_USER_AGENT = navigator.userAgent), typeof document < "u" && document.referrer.match(/\S/) && (n.HTTP_REFERER = document.referrer);
					var r = typeof t.cookies == "string" ? (0, l.decodeCookie)(t.cookies) : t.cookies;
					r && (n.HTTP_COOKIE = (0, l.encodeCookie)(v(r, this.config.filters)));
					var i = e.prototype.__buildPayload.call(this, t);
					return i.request.cgi_data = _(n, i.request.cgi_data), i;
				}, i.prototype.__wrap = function(e, t) {
					t === void 0 && (t = {});
					var n = e;
					t ||= {};
					try {
						if (typeof n != "function" || !y(n)) return n;
						if (!n.___hb) {
							var r = this;
							n.___hb = function() {
								if (l.preferCatch) try {
									return n.apply(this, arguments);
								} catch (e) {
									throw r.__lastWrapErr === e ? e : (r.__lastWrapErr = e, (0, u.ignoreNextOnError)(), r.addBreadcrumb(t.component ? `${t.component}: ${e.name}` : e.name, {
										category: "error",
										metadata: {
											message: e.message,
											name: e.name,
											stack: e.stack
										}
									}), r.config.enableUncaught && r.notify(e), e);
								}
								else return n.apply(this, arguments);
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
			}(c.Client), S = {
				name: "@honeybadger-io/js",
				url: "https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",
				version: "6.12.3"
			}, C = function() {
				return typeof navigator < "u" ? `Honeybadger JS Browser Client ${S.version}; ${navigator.userAgent}` : `Honeybadger JS Browser Client ${S.version}; n/a; n/a`;
			}, w = new x({ __plugins: [
				(0, u.onError)(),
				(0, d.default)(),
				(0, p.default)(),
				(0, m.default)(),
				(0, f.default)(),
				c.Plugins.events()
			] });
			w.setNotifier(S);
			var T = i;
			Object.defineProperty(t, "Types", {
				enumerable: !0,
				get: function() {
					return T.Types;
				}
			}), t.default = w;
		})(r), /* @__PURE__ */ t(r);
	}));
})), p = /* @__PURE__ */ d(f(), 1);
function m(n) {
	t("betaOptIn") && e("sendException", n), p.default.notify(n, "sendException");
}
//#endregion
export { d as i, f as n, l as r, m as t };

//# sourceMappingURL=sendException-s1csWDQs.js.map