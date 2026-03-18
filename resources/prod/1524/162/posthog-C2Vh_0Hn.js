import { t as e } from "./playerName-BXAa_cHJ.js";
import { n as t } from "./devStdOut-BnwcHKWA.js";
//#region node_modules/posthog-js/dist/module.no-external.js
function n(e, t, n, r, i, a, o) {
	try {
		var s = e[a](o), c = s.value;
	} catch (e) {
		n(e);
		return;
	}
	s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function r(e) {
	return function() {
		var t = this, r = arguments;
		return new Promise((function(i, a) {
			var o = e.apply(t, r);
			function s(e) {
				n(o, i, a, s, c, "next", e);
			}
			function c(e) {
				n(o, i, a, s, c, "throw", e);
			}
			s(void 0);
		}));
	};
}
function i() {
	return i = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, i.apply(null, arguments);
}
function a(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var o = {
	DEBUG: !1,
	LIB_VERSION: "1.360.2"
}, s = typeof window < "u" ? window : void 0, c = typeof globalThis < "u" ? globalThis : s;
typeof self > "u" && (c.self = c), typeof File > "u" && (c.File = function() {});
var l = Array.prototype, u = l.forEach, d = l.indexOf, f = c?.navigator, p = c?.document, m = c?.location, h = c?.fetch, g = c != null && c.XMLHttpRequest && "withCredentials" in new c.XMLHttpRequest() ? c.XMLHttpRequest : void 0, _ = c?.AbortController, v = f?.userAgent, y = s ?? {}, b = [
	"$snapshot",
	"$pageview",
	"$pageleave",
	"$set",
	"survey dismissed",
	"survey sent",
	"survey shown",
	"$identify",
	"$groupidentify",
	"$create_alias",
	"$$client_ingestion_warning",
	"$web_experiment_applied",
	"$feature_enrollment_update",
	"$feature_flag_called"
], ee = /* @__PURE__ */ "amazonbot,amazonproductbot,app.hypefactors.com,applebot,archive.org_bot,awariobot,backlinksextendedbot,baiduspider,bingbot,bingpreview,chrome-lighthouse,dataforseobot,deepscan,duckduckbot,facebookexternal,facebookcatalog,http://yandex.com/bots,hubspot,ia_archiver,leikibot,linkedinbot,meta-externalagent,mj12bot,msnbot,nessus,petalbot,pinterest,prerender,rogerbot,screaming frog,sebot-wa,sitebulb,slackbot,slurp,trendictionbot,turnitin,twitterbot,vercel-screenshot,vercelbot,yahoo! slurp,yandexbot,zoombot,bot.htm,bot.php,(bot;,bot/,crawler,ahrefsbot,ahrefssiteaudit,semrushbot,siteauditbot,splitsignalbot,gptbot,oai-searchbot,chatgpt-user,perplexitybot,better uptime bot,sentryuptimebot,uptimerobot,headlesschrome,cypress,google-hoteladsverifier,adsbot-google,apis-google,duplexweb-google,feedfetcher-google,google favicon,google web preview,google-read-aloud,googlebot,googleother,google-cloudvertexbot,googleweblight,mediapartners-google,storebot-google,google-inspectiontool,bytespider".split(","), x = function(e, t) {
	if (t === void 0 && (t = []), !e) return !1;
	var n = e.toLowerCase();
	return ee.concat(t).some(((e) => {
		var t = e.toLowerCase();
		return n.indexOf(t) !== -1;
	}));
};
function S(e, t) {
	return e.indexOf(t) !== -1;
}
var C = function(e) {
	return e.trim();
}, te = function(e) {
	return e.replace(/^\$/, "");
}, w = Array.isArray, ne = Object.prototype, T = ne.hasOwnProperty, E = ne.toString, D = w || function(e) {
	return E.call(e) === "[object Array]";
}, O = (e) => typeof e == "function", k = (e) => e === Object(e) && !D(e), A = (e) => {
	if (k(e)) {
		for (var t in e) if (T.call(e, t)) return !1;
		return !0;
	}
	return !1;
}, j = (e) => e === void 0, M = (e) => E.call(e) == "[object String]", re = (e) => M(e) && e.trim().length === 0, N = (e) => e === null, P = (e) => j(e) || N(e), F = (e) => E.call(e) == "[object Number]" && e == e, I = (e) => F(e) && e > 0, L = (e) => E.call(e) === "[object Boolean]", ie = (e) => e instanceof FormData, ae = (e) => S(b, e);
function oe(e) {
	return typeof e != "object" || !e;
}
function se(e, t) {
	return Object.prototype.toString.call(e) === "[object " + t + "]";
}
function ce(e) {
	return !j(Event) && function(e, t) {
		try {
			return e instanceof t;
		} catch {
			return !1;
		}
	}(e, Event);
}
var le = [
	!0,
	"true",
	1,
	"1",
	"yes"
], ue = (e) => S(le, e), de = [
	!1,
	"false",
	0,
	"0",
	"no"
];
function fe(e, t, n, r, i) {
	return t > n && (r.warn("min cannot be greater than max."), t = n), F(e) ? e > n ? (r.warn(" cannot be  greater than max: " + n + ". Using max value instead."), n) : e < t ? (r.warn(" cannot be less than min: " + t + ". Using min value instead."), t) : e : (r.warn(" must be a number. using max or fallback. max: " + n + ", fallback: " + i), fe(i || n, t, n, r));
}
var pe = class {
	constructor(e) {
		this._buckets = {}, this._onBucketRateLimited = e._onBucketRateLimited, this._bucketSize = fe(e.bucketSize, 0, 100, e._logger), this._refillRate = fe(e.refillRate, 0, this._bucketSize, e._logger), this._refillInterval = fe(e.refillInterval, 0, 864e5, e._logger);
	}
	_applyRefill(e, t) {
		var n = t - e.lastAccess, r = Math.floor(n / this._refillInterval);
		if (r > 0) {
			var i = r * this._refillRate;
			e.tokens = Math.min(e.tokens + i, this._bucketSize), e.lastAccess += r * this._refillInterval;
		}
	}
	consumeRateLimit(e) {
		var t, n = Date.now(), r = String(e), i = this._buckets[r];
		return i ? this._applyRefill(i, n) : (i = {
			tokens: this._bucketSize,
			lastAccess: n
		}, this._buckets[r] = i), i.tokens === 0 || (i.tokens--, i.tokens === 0 && ((t = this._onBucketRateLimited) == null || t.call(this, e)), i.tokens === 0);
	}
	stop() {
		this._buckets = {};
	}
}, R = "Mobile", me = "iOS", he = "Android", ge = "Tablet", _e = he + " " + ge, ve = "iPad", ye = "Apple", be = ye + " Watch", xe = "Safari", Se = "BlackBerry", Ce = "Samsung", we = Ce + "Browser", Te = Ce + " Internet", Ee = "Chrome", De = Ee + " OS", Oe = Ee + " " + me, ke = "Internet Explorer", Ae = ke + " " + R, je = "Opera", Me = je + " Mini", Ne = "Edge", Pe = "Microsoft " + Ne, Fe = "Firefox", Ie = Fe + " " + me, Le = "Nintendo", Re = "PlayStation", ze = "Xbox", Be = he + " " + R, Ve = R + " " + xe, He = "Windows", Ue = He + " Phone", We = "Nokia", Ge = "Ouya", Ke = "Generic", qe = Ke + " " + R.toLowerCase(), Je = Ke + " " + ge.toLowerCase(), Ye = "Konqueror", z = "(\\d+(\\.\\d+)?)", Xe = RegExp("Version/" + z), Ze = new RegExp(ze, "i"), Qe = RegExp(Re + " \\w+", "i"), $e = RegExp(Le + " \\w+", "i"), et = RegExp(Se + "|PlayBook|BB10", "i"), tt = {
	"NT3.51": "NT 3.11",
	"NT4.0": "NT 4.0",
	"5.0": "2000",
	5.1: "XP",
	5.2: "XP",
	"6.0": "Vista",
	6.1: "7",
	6.2: "8",
	6.3: "8.1",
	6.4: "10",
	"10.0": "10"
}, nt, rt, it, at = (e, t) => t && S(t, ye) || function(e) {
	return S(e, xe) && !S(e, Ee) && !S(e, he);
}(e), ot = function(e, t) {
	return t ||= "", S(e, " OPR/") && S(e, "Mini") ? Me : S(e, " OPR/") ? je : et.test(e) ? Se : S(e, "IE" + R) || S(e, "WPDesktop") ? Ae : S(e, we) ? Te : S(e, Ne) || S(e, "Edg/") ? Pe : S(e, "FBIOS") ? "Facebook " + R : S(e, "UCWEB") || S(e, "UCBrowser") ? "UC Browser" : S(e, "CriOS") ? Oe : S(e, "CrMo") || S(e, Ee) ? Ee : S(e, he) && S(e, xe) ? Be : S(e, "FxiOS") ? Ie : S(e.toLowerCase(), Ye.toLowerCase()) ? Ye : at(e, t) ? S(e, R) ? Ve : xe : S(e, Fe) ? Fe : S(e, "MSIE") || S(e, "Trident/") ? ke : S(e, "Gecko") ? Fe : "";
}, st = {
	[Ae]: [RegExp("rv:" + z)],
	[Pe]: [RegExp(Ne + "?\\/" + z)],
	[Ee]: [RegExp("(" + Ee + "|CrMo)\\/" + z)],
	[Oe]: [RegExp("CriOS\\/" + z)],
	"UC Browser": [RegExp("(UCBrowser|UCWEB)\\/" + z)],
	[xe]: [Xe],
	[Ve]: [Xe],
	[je]: [RegExp("(Opera|OPR)\\/" + z)],
	[Fe]: [RegExp(Fe + "\\/" + z)],
	[Ie]: [RegExp("FxiOS\\/" + z)],
	[Ye]: [RegExp("Konqueror[:/]?" + z, "i")],
	[Se]: [RegExp(Se + " " + z), Xe],
	[Be]: [RegExp("android\\s" + z, "i")],
	[Te]: [RegExp(we + "\\/" + z)],
	[ke]: [RegExp("(rv:|MSIE )" + z)],
	Mozilla: [RegExp("rv:" + z)]
}, ct = function(e, t) {
	var n = st[ot(e, t)];
	if (j(n)) return null;
	for (var r = 0; r < n.length; r++) {
		var i = n[r], a = e.match(i);
		if (a) return parseFloat(a[a.length - 2]);
	}
	return null;
}, lt = [
	[RegExp(ze + "; " + ze + " (.*?)[);]", "i"), (e) => [ze, e && e[1] || ""]],
	[new RegExp(Le, "i"), [Le, ""]],
	[new RegExp(Re, "i"), [Re, ""]],
	[et, [Se, ""]],
	[new RegExp(He, "i"), (e, t) => {
		if (/Phone/.test(t) || /WPDesktop/.test(t)) return [Ue, ""];
		if (new RegExp(R).test(t) && !/IEMobile\b/.test(t)) return [He + " " + R, ""];
		var n = /Windows NT ([0-9.]+)/i.exec(t);
		if (n && n[1]) {
			var r = tt[n[1]] || "";
			return /arm/i.test(t) && (r = "RT"), [He, r];
		}
		return [He, ""];
	}],
	[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (e) => e && e[3] ? [me, [
		e[3],
		e[4],
		e[5] || "0"
	].join(".")] : [me, ""]],
	[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (e) => {
		var t = "";
		return e && e.length >= 3 && (t = j(e[2]) ? e[3] : e[2]), ["watchOS", t];
	}],
	[RegExp("(" + he + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + he + ")", "i"), (e) => e && e[2] ? [he, [
		e[2],
		e[3],
		e[4] || "0"
	].join(".")] : [he, ""]],
	[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (e) => {
		var t = ["Mac OS X", ""];
		return e && e[1] && (t[1] = [
			e[1],
			e[2],
			e[3] || "0"
		].join(".")), t;
	}],
	[/Mac/i, ["Mac OS X", ""]],
	[/CrOS/, [De, ""]],
	[/Linux|debian/i, ["Linux", ""]]
], ut = function(e) {
	return $e.test(e) ? Le : Qe.test(e) ? Re : Ze.test(e) ? ze : new RegExp(Ge, "i").test(e) ? Ge : RegExp("(" + Ue + "|WPDesktop)", "i").test(e) ? Ue : /iPad/.test(e) ? ve : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? be : et.test(e) ? Se : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(We, "i").test(e) ? We : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? new RegExp(R).test(e) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) || /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? he : _e : RegExp("(pda|" + R + ")", "i").test(e) ? qe : new RegExp(ge, "i").test(e) && !RegExp(ge + " pc", "i").test(e) ? Je : "";
}, dt = (e) => e instanceof Error;
function ft(e) {
	var t = globalThis._posthogChunkIds;
	if (t) {
		var n = Object.keys(t);
		return it && n.length === rt || (rt = n.length, it = n.reduce(((n, r) => {
			nt ||= {};
			var i = nt[r];
			if (i) n[i[0]] = i[1];
			else for (var a = e(r), o = a.length - 1; o >= 0; o--) {
				var s = a[o]?.filename, c = t[r];
				if (s && c) {
					n[s] = c, nt[r] = [s, c];
					break;
				}
			}
			return n;
		}), {})), it;
	}
}
var pt = class {
	constructor(e, t, n) {
		n === void 0 && (n = []), this.coercers = e, this.stackParser = t, this.modifiers = n;
	}
	buildFromUnknown(e, t) {
		t === void 0 && (t = {});
		var n = t && t.mechanism || {
			handled: !0,
			type: "generic"
		}, r = this.buildCoercingContext(n, t, 0).apply(e), i = this.buildParsingContext(t), a = this.parseStacktrace(r, i);
		return {
			$exception_list: this.convertToExceptionList(a, n),
			$exception_level: "error"
		};
	}
	modifyFrames(e) {
		var t = this;
		return r((function* () {
			for (var n of e) n.stacktrace && n.stacktrace.frames && D(n.stacktrace.frames) && (n.stacktrace.frames = yield t.applyModifiers(n.stacktrace.frames));
			return e;
		}))();
	}
	coerceFallback(e) {
		return {
			type: "Error",
			value: "Unknown error",
			stack: e.syntheticException?.stack,
			synthetic: !0
		};
	}
	parseStacktrace(e, t) {
		var n, r;
		return e.cause != null && (n = this.parseStacktrace(e.cause, t)), e.stack != "" && e.stack != null && (r = this.applyChunkIds(this.stackParser(e.stack, e.synthetic ? t.skipFirstLines : 0), t.chunkIdMap)), i({}, e, {
			cause: n,
			stack: r
		});
	}
	applyChunkIds(e, t) {
		return e.map(((e) => (e.filename && t && (e.chunk_id = t[e.filename]), e)));
	}
	applyCoercers(e, t) {
		for (var n of this.coercers) if (n.match(e)) return n.coerce(e, t);
		return this.coerceFallback(t);
	}
	applyModifiers(e) {
		var t = this;
		return r((function* () {
			var n = e;
			for (var r of t.modifiers) n = yield r(n);
			return n;
		}))();
	}
	convertToExceptionList(e, t) {
		var n, r, a = {
			type: e.type,
			value: e.value,
			mechanism: {
				type: t.type ?? "generic",
				handled: (n = t.handled) == null || n,
				synthetic: (r = e.synthetic) != null && r
			}
		};
		e.stack && (a.stacktrace = {
			type: "raw",
			frames: e.stack
		});
		var o = [a];
		return e.cause != null && o.push(...this.convertToExceptionList(e.cause, i({}, t, { handled: !0 }))), o;
	}
	buildParsingContext(e) {
		return {
			chunkIdMap: ft(this.stackParser),
			skipFirstLines: e.skipFirstLines ?? 1
		};
	}
	buildCoercingContext(e, t, n) {
		n === void 0 && (n = 0);
		var r = (n, r) => {
			if (r <= 4) {
				var i = this.buildCoercingContext(e, t, r);
				return this.applyCoercers(n, i);
			}
		};
		return i({}, t, {
			syntheticException: n == 0 ? t.syntheticException : void 0,
			mechanism: e,
			apply: (e) => r(e, n),
			next: (e) => r(e, n + 1)
		});
	}
}, mt = "?";
function ht(e, t, n, r, i) {
	var a = {
		platform: e,
		filename: t,
		function: n === "<anonymous>" ? mt : n,
		in_app: !0
	};
	return j(r) || (a.lineno = r), j(i) || (a.colno = i), a;
}
var gt = (e, t) => {
	var n = e.indexOf("safari-extension") !== -1, r = e.indexOf("safari-web-extension") !== -1;
	return n || r ? [e.indexOf("@") === -1 ? mt : e.split("@")[0], n ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t];
}, _t = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, vt = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, yt = /\((\S*)(?::(\d+))(?::(\d+))\)/, bt = (e, t) => {
	var n = _t.exec(e);
	if (n) {
		var [, r, i, a] = n;
		return ht(t, r, mt, +i, +a);
	}
	var o = vt.exec(e);
	if (o) {
		if (o[2] && o[2].indexOf("eval") === 0) {
			var s = yt.exec(o[2]);
			s && (o[2] = s[1], o[3] = s[2], o[4] = s[3]);
		}
		var [c, l] = gt(o[1] || mt, o[2]);
		return ht(t, l, c, o[3] ? +o[3] : void 0, o[4] ? +o[4] : void 0);
	}
}, xt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, St = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Ct = (e, t) => {
	var n = xt.exec(e);
	if (n) {
		if (n[3] && n[3].indexOf(" > eval") > -1) {
			var r = St.exec(n[3]);
			r && (n[1] = n[1] || "eval", n[3] = r[1], n[4] = r[2], n[5] = "");
		}
		var i = n[3], a = n[1] || mt;
		return [a, i] = gt(a, i), ht(t, i, a, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0);
	}
}, wt = /\(error: (.*)\)/, Tt = 50;
function Et() {
	return function(e) {
		var t = [...arguments].slice(1);
		return function(n, r) {
			r === void 0 && (r = 0);
			for (var a = [], o = n.split("\n"), s = r; s < o.length; s++) {
				var c = o[s];
				if (!(c.length > 1024)) {
					var l = wt.test(c) ? c.replace(wt, "$1") : c;
					if (!l.match(/\S*Error: /)) {
						for (var u of t) {
							var d = u(l, e);
							if (d) {
								a.push(d);
								break;
							}
						}
						if (a.length >= Tt) break;
					}
				}
			}
			return function(e) {
				if (!e.length) return [];
				var t = Array.from(e);
				return t.reverse(), t.slice(0, Tt).map(((e) => {
					return i({}, e, {
						filename: e.filename || (n = t, n[n.length - 1] || {}).filename,
						function: e.function || mt
					});
					var n;
				}));
			}(a);
		};
	}("web:javascript", bt, Ct);
}
var Dt = class {
	match(e) {
		return this.isDOMException(e) || this.isDOMError(e);
	}
	coerce(e, t) {
		var n = M(e.stack);
		return {
			type: this.getType(e),
			value: this.getValue(e),
			stack: n ? e.stack : void 0,
			cause: e.cause ? t.next(e.cause) : void 0,
			synthetic: !1
		};
	}
	getType(e) {
		return this.isDOMError(e) ? "DOMError" : "DOMException";
	}
	getValue(e) {
		var t = e.name || (this.isDOMError(e) ? "DOMError" : "DOMException");
		return e.message ? t + ": " + e.message : t;
	}
	isDOMException(e) {
		return se(e, "DOMException");
	}
	isDOMError(e) {
		return se(e, "DOMError");
	}
}, Ot = class {
	match(e) {
		return ((e) => e instanceof Error)(e);
	}
	coerce(e, t) {
		return {
			type: this.getType(e),
			value: this.getMessage(e, t),
			stack: this.getStack(e),
			cause: e.cause ? t.next(e.cause) : void 0,
			synthetic: !1
		};
	}
	getType(e) {
		return e.name || e.constructor.name;
	}
	getMessage(e, t) {
		var n = e.message;
		return n.error && typeof n.error.message == "string" ? String(n.error.message) : String(n);
	}
	getStack(e) {
		return e.stacktrace || e.stack || void 0;
	}
}, kt = class {
	constructor() {}
	match(e) {
		return se(e, "ErrorEvent") && e.error != null;
	}
	coerce(e, t) {
		return t.apply(e.error) || {
			type: "ErrorEvent",
			value: e.message,
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
}, At = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i, jt = class {
	match(e) {
		return typeof e == "string";
	}
	coerce(e, t) {
		var [n, r] = this.getInfos(e);
		return {
			type: n ?? "Error",
			value: r ?? e,
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
	getInfos(e) {
		var t = "Error", n = e, r = e.match(At);
		return r && (t = r[1], n = r[2]), [t, n];
	}
}, Mt = [
	"fatal",
	"error",
	"warning",
	"log",
	"info",
	"debug"
];
function Nt(e, t) {
	t === void 0 && (t = 40);
	var n = Object.keys(e);
	if (n.sort(), !n.length) return "[object has no keys]";
	for (var r = n.length; r > 0; r--) {
		var i = n.slice(0, r).join(", ");
		if (!(i.length > t)) return r === n.length || i.length <= t ? i : i.slice(0, t) + "...";
	}
	return "";
}
var Pt = class {
	match(e) {
		return typeof e == "object" && !!e;
	}
	coerce(e, t) {
		var n = this.getErrorPropertyFromObject(e);
		return n ? t.apply(n) : {
			type: this.getType(e),
			value: this.getValue(e),
			stack: t.syntheticException?.stack,
			level: this.isSeverityLevel(e.level) ? e.level : "error",
			synthetic: !0
		};
	}
	getType(e) {
		return ce(e) ? e.constructor.name : "Error";
	}
	getValue(e) {
		if ("name" in e && typeof e.name == "string") {
			var t = "'" + e.name + "' captured as exception";
			return "message" in e && typeof e.message == "string" && (t += " with message: '" + e.message + "'"), t;
		}
		if ("message" in e && typeof e.message == "string") return e.message;
		var n = this.getObjectClassName(e);
		return (n && n !== "Object" ? "'" + n + "'" : "Object") + " captured as exception with keys: " + Nt(e);
	}
	isSeverityLevel(e) {
		return M(e) && !re(e) && Mt.indexOf(e) >= 0;
	}
	getErrorPropertyFromObject(e) {
		for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
			var n = e[t];
			if (dt(n)) return n;
		}
	}
	getObjectClassName(e) {
		try {
			var t = Object.getPrototypeOf(e);
			return t ? t.constructor.name : void 0;
		} catch {
			return;
		}
	}
}, Ft = class {
	match(e) {
		return ce(e);
	}
	coerce(e, t) {
		var n = e.constructor.name;
		return {
			type: n,
			value: n + " captured as exception with keys: " + Nt(e),
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
}, It = class {
	match(e) {
		return oe(e);
	}
	coerce(e, t) {
		return {
			type: "Error",
			value: "Primitive value captured as exception: " + String(e),
			stack: t.syntheticException?.stack,
			synthetic: !0
		};
	}
}, Lt = class {
	match(e) {
		return se(e, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(e);
	}
	isCustomEventWrappingRejection(e) {
		if (!ce(e)) return !1;
		try {
			var t = e.detail;
			return typeof t == "object" && !!t && "reason" in t;
		} catch {
			return !1;
		}
	}
	coerce(e, t) {
		var n = this.getUnhandledRejectionReason(e);
		return oe(n) ? {
			type: "UnhandledRejection",
			value: "Non-Error promise rejection captured with value: " + String(n),
			stack: t.syntheticException?.stack,
			synthetic: !0
		} : t.apply(n);
	}
	getUnhandledRejectionReason(e) {
		try {
			if ("reason" in e) return e.reason;
			if ("detail" in e && e.detail != null && typeof e.detail == "object" && "reason" in e.detail) return e.detail.reason;
		} catch {}
		return e;
	}
}, Rt = function(e, t) {
	var { debugEnabled: n } = t === void 0 ? {} : t, r = {
		_log: function(t) {
			if (s && (o.DEBUG || y.POSTHOG_DEBUG || n) && !j(s.console) && s.console) {
				for (var r = ("__rrweb_original__" in s.console[t]) ? s.console[t].__rrweb_original__ : s.console[t], i = arguments.length, a = Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++) a[c - 1] = arguments[c];
				r(e, ...a);
			}
		},
		info: function() {
			var e = [...arguments];
			r._log("log", ...e);
		},
		warn: function() {
			var e = [...arguments];
			r._log("warn", ...e);
		},
		error: function() {
			var e = [...arguments];
			r._log("error", ...e);
		},
		critical: function() {
			var t = [...arguments];
			console.error(e, ...t);
		},
		uninitializedWarning: (e) => {
			r.error("You must initialize PostHog before calling " + e);
		},
		createLogger: (t, n) => Rt(e + " " + t, n)
	};
	return r;
}, B = Rt("[PostHog.js]"), V = B.createLogger, zt = {};
function Bt(e, t, n) {
	if (D(e)) {
		if (u && e.forEach === u) e.forEach(t, n);
		else if ("length" in e && e.length === +e.length) {
			for (var r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === zt) return;
		}
	}
}
function H(e, t, n) {
	if (!P(e)) {
		if (D(e)) return Bt(e, t, n);
		if (ie(e)) {
			for (var r of e.entries()) if (t.call(n, r[1], r[0]) === zt) return;
		} else for (var i in e) if (T.call(e, i) && t.call(n, e[i], i) === zt) return;
	}
}
var U = function(e) {
	return Bt([...arguments].slice(1), (function(t) {
		for (var n in t) t[n] !== void 0 && (e[n] = t[n]);
	})), e;
}, Vt = function(e) {
	return Bt([...arguments].slice(1), (function(t) {
		Bt(t, (function(t) {
			e.push(t);
		}));
	})), e;
};
function Ht(e) {
	for (var t = Object.keys(e), n = t.length, r = Array(n); n--;) r[n] = [t[n], e[t[n]]];
	return r;
}
var Ut = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, Wt = function(e) {
	return function() {
		try {
			var t = [...arguments];
			return e.apply(this, t);
		} catch (e) {
			B.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), B.critical(e);
		}
	};
}, Gt = function(e) {
	var t = {};
	return H(e, (function(e, n) {
		(M(e) && e.length > 0 || F(e)) && (t[n] = e);
	})), t;
};
function Kt(e, t) {
	return n = e, r = (e) => M(e) && !N(t) ? e.slice(0, t) : e, i = /* @__PURE__ */ new Set(), function e(t, n) {
		return t === Object(t) ? i.has(t) ? void 0 : (i.add(t), D(t) ? (a = [], Bt(t, ((t) => {
			a.push(e(t));
		}))) : (a = {}, H(t, ((t, n) => {
			i.has(t) || (a[n] = e(t, n));
		}))), a) : r ? r(t, n) : t;
		var a;
	}(n);
	var n, r, i;
}
var qt = [
	"herokuapp.com",
	"vercel.app",
	"netlify.app"
];
function Jt(e) {
	var t = e?.hostname;
	if (!M(t)) return !1;
	var n = t.split(".").slice(-2).join(".");
	for (var r of qt) if (n === r) return !1;
	return !0;
}
function Yt(e, t) {
	for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
}
function W(e, t, n, r) {
	var { capture: i = !1, passive: a = !0 } = r ?? {};
	e?.addEventListener(t, n, {
		capture: i,
		passive: a
	});
}
function Xt(e) {
	return e.name === "ph_toolbar_internal";
}
var Zt = "$people_distinct_id", Qt = "__alias", $t = "__timers", en = "$autocapture_disabled_server_side", tn = "$heatmaps_enabled_server_side", nn = "$exception_capture_enabled_server_side", rn = "$error_tracking_suppression_rules", an = "$error_tracking_capture_extension_exceptions", on = "$web_vitals_enabled_server_side", sn = "$dead_clicks_enabled_server_side", cn = "$product_tours_enabled_server_side", ln = "$web_vitals_allowed_metrics", un = "$session_recording_remote_config", dn = "$sesid", fn = "$session_is_sampled", pn = "$enabled_feature_flags", mn = "$early_access_features", hn = "$feature_flag_details", gn = "$stored_person_properties", _n = "$stored_group_properties", vn = "$surveys", yn = "$flag_call_reported", bn = "$feature_flag_errors", xn = "$feature_flag_evaluated_at", G = "$user_state", Sn = "$client_session_props", Cn = "$capture_rate_limit", wn = "$initial_campaign_params", Tn = "$initial_referrer_info", En = "$initial_person_info", Dn = "$epp", On = "__POSTHOG_TOOLBAR__", kn = "$posthog_cookieless", An = [
	Zt,
	Qt,
	"__cmpns",
	$t,
	"$session_recording_enabled_server_side",
	tn,
	dn,
	pn,
	rn,
	G,
	mn,
	hn,
	_n,
	gn,
	vn,
	yn,
	bn,
	xn,
	Sn,
	Cn,
	wn,
	Tn,
	Dn,
	En
];
Math.trunc || (Math.trunc = function(e) {
	return e < 0 ? Math.ceil(e) : Math.floor(e);
}), Number.isInteger || (Number.isInteger = function(e) {
	return F(e) && isFinite(e) && Math.floor(e) === e;
});
var jn = "0123456789abcdef", Mn = class e {
	constructor(e) {
		if (this.bytes = e, e.length !== 16) throw TypeError("not 128-bit length");
	}
	static fromFieldsV7(t, n, r, i) {
		if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(i) || t < 0 || n < 0 || r < 0 || i < 0 || t > 0xffffffffffff || n > 4095 || r > 1073741823 || i > 4294967295) throw RangeError("invalid field value");
		var a = new Uint8Array(16);
		return a[0] = t / 2 ** 40, a[1] = t / 2 ** 32, a[2] = t / 2 ** 24, a[3] = t / 2 ** 16, a[4] = t / 2 ** 8, a[5] = t, a[6] = 112 | n >>> 8, a[7] = n, a[8] = 128 | r >>> 24, a[9] = r >>> 16, a[10] = r >>> 8, a[11] = r, a[12] = i >>> 24, a[13] = i >>> 16, a[14] = i >>> 8, a[15] = i, new e(a);
	}
	toString() {
		for (var e = "", t = 0; t < this.bytes.length; t++) e = e + jn.charAt(this.bytes[t] >>> 4) + jn.charAt(15 & this.bytes[t]), t !== 3 && t !== 5 && t !== 7 && t !== 9 || (e += "-");
		if (e.length !== 36) throw Error("Invalid UUIDv7 was generated");
		return e;
	}
	clone() {
		return new e(this.bytes.slice(0));
	}
	equals(e) {
		return this.compareTo(e) === 0;
	}
	compareTo(e) {
		for (var t = 0; t < 16; t++) {
			var n = this.bytes[t] - e.bytes[t];
			if (n !== 0) return Math.sign(n);
		}
		return 0;
	}
}, Nn = class {
	constructor() {
		this._timestamp = 0, this._counter = 0, this._random = new In();
	}
	generate() {
		var e = this.generateOrAbort();
		if (j(e)) {
			this._timestamp = 0;
			var t = this.generateOrAbort();
			if (j(t)) throw Error("Could not generate UUID after timestamp reset");
			return t;
		}
		return e;
	}
	generateOrAbort() {
		var e = Date.now();
		if (e > this._timestamp) this._timestamp = e, this._resetCounter();
		else {
			if (!(e + 1e4 > this._timestamp)) return;
			this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter());
		}
		return Mn.fromFieldsV7(this._timestamp, Math.trunc(this._counter / 2 ** 30), this._counter & 2 ** 30 - 1, this._random.nextUint32());
	}
	_resetCounter() {
		this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32());
	}
}, Pn, Fn = (e) => {
	if (typeof UUIDV7_DENY_WEAK_RNG < "u" && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
	for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
	return e;
};
s && !j(s.crypto) && crypto.getRandomValues && (Fn = (e) => crypto.getRandomValues(e));
var In = class {
	constructor() {
		this._buffer = new Uint32Array(8), this._cursor = Infinity;
	}
	nextUint32() {
		return this._cursor >= this._buffer.length && (Fn(this._buffer), this._cursor = 0), this._buffer[this._cursor++];
	}
}, Ln = () => Rn().toString(), Rn = () => (Pn ||= new Nn()).generate(), zn = "", Bn = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
function Vn(e, t) {
	if (t) {
		var n = function(e, t) {
			if (t === void 0 && (t = p), zn) return zn;
			if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
			for (var n = e.split("."), r = Math.min(n.length, 8), i = "dmn_chk_" + Ln(); !zn && r--;) {
				var a = n.slice(r).join("."), o = i + "=1;domain=." + a + ";path=/";
				t.cookie = o + ";max-age=3", t.cookie.includes(i) && (t.cookie = o + ";max-age=0", zn = a);
			}
			return zn;
		}(e);
		if (!n) {
			var r = ((e) => {
				var t = e.match(Bn);
				return t ? t[0] : "";
			})(e);
			r !== n && B.info("Warning: cookie subdomain discovery mismatch", r, n), n = r;
		}
		return n ? "; domain=." + n : "";
	}
	return "";
}
var Hn = {
	_is_supported: () => !!p,
	_error: function(e) {
		B.error("cookieStore error: " + e);
	},
	_get: function(e) {
		if (p) {
			try {
				for (var t = e + "=", n = p.cookie.split(";").filter(((e) => e.length)), r = 0; r < n.length; r++) {
					for (var i = n[r]; i.charAt(0) == " ";) i = i.substring(1, i.length);
					if (i.indexOf(t) === 0) return decodeURIComponent(i.substring(t.length, i.length));
				}
			} catch {}
			return null;
		}
	},
	_parse: function(e) {
		var t;
		try {
			t = JSON.parse(Hn._get(e)) || {};
		} catch {}
		return t;
	},
	_set: function(e, t, n, r, i) {
		if (p) try {
			var a = "", o = "", s = Vn(p.location.hostname, r);
			if (n) {
				var c = /* @__PURE__ */ new Date();
				c.setTime(c.getTime() + 24 * n * 60 * 60 * 1e3), a = "; expires=" + c.toUTCString();
			}
			i && (o = "; secure");
			var l = e + "=" + encodeURIComponent(JSON.stringify(t)) + a + "; SameSite=Lax; path=/" + s + o;
			return l.length > 3686.4 && B.warn("cookieStore warning: large cookie, len=" + l.length), p.cookie = l, l;
		} catch {
			return;
		}
	},
	_remove: function(e, t) {
		if (p != null && p.cookie) try {
			Hn._set(e, "", -1, t);
		} catch {
			return;
		}
	}
}, Un = null, K = {
	_is_supported: function() {
		if (!N(Un)) return Un;
		var e = !0;
		if (j(s)) e = !1;
		else try {
			var t = "__mplssupport__";
			K._set(t, "xyz"), K._get(t) !== "\"xyz\"" && (e = !1), K._remove(t);
		} catch {
			e = !1;
		}
		return e || B.error("localStorage unsupported; falling back to cookie store"), Un = e, e;
	},
	_error: function(e) {
		B.error("localStorage error: " + e);
	},
	_get: function(e) {
		try {
			return s?.localStorage.getItem(e);
		} catch (e) {
			K._error(e);
		}
		return null;
	},
	_parse: function(e) {
		try {
			return JSON.parse(K._get(e)) || {};
		} catch {}
		return null;
	},
	_set: function(e, t) {
		try {
			s?.localStorage.setItem(e, JSON.stringify(t));
		} catch (e) {
			K._error(e);
		}
	},
	_remove: function(e) {
		try {
			s?.localStorage.removeItem(e);
		} catch (e) {
			K._error(e);
		}
	}
}, Wn = [
	"$device_id",
	"distinct_id",
	dn,
	fn,
	Dn,
	En,
	G
], Gn = {}, Kn = {
	_is_supported: function() {
		return !0;
	},
	_error: function(e) {
		B.error("memoryStorage error: " + e);
	},
	_get: function(e) {
		return Gn[e] || null;
	},
	_parse: function(e) {
		return Gn[e] || null;
	},
	_set: function(e, t) {
		Gn[e] = t;
	},
	_remove: function(e) {
		delete Gn[e];
	}
}, qn = null, q = {
	_is_supported: function() {
		if (!N(qn)) return qn;
		if (qn = !0, j(s)) qn = !1;
		else try {
			var e = "__support__";
			q._set(e, "xyz"), q._get(e) !== "\"xyz\"" && (qn = !1), q._remove(e);
		} catch {
			qn = !1;
		}
		return qn;
	},
	_error: function(e) {
		B.error("sessionStorage error: ", e);
	},
	_get: function(e) {
		try {
			return s?.sessionStorage.getItem(e);
		} catch (e) {
			q._error(e);
		}
		return null;
	},
	_parse: function(e) {
		try {
			return JSON.parse(q._get(e)) || null;
		} catch {}
		return null;
	},
	_set: function(e, t) {
		try {
			s?.sessionStorage.setItem(e, JSON.stringify(t));
		} catch (e) {
			q._error(e);
		}
	},
	_remove: function(e) {
		try {
			s?.sessionStorage.removeItem(e);
		} catch (e) {
			q._error(e);
		}
	}
}, Jn = function(e) {
	return e[e.PENDING = -1] = "PENDING", e[e.DENIED = 0] = "DENIED", e[e.GRANTED = 1] = "GRANTED", e;
}({}), Yn = class {
	constructor(e) {
		this._instance = e;
	}
	get _config() {
		return this._instance.config;
	}
	get consent() {
		return this._getDnt() ? Jn.DENIED : this._storedConsent;
	}
	isOptedOut() {
		return this._config.cookieless_mode === "always" || this.consent === Jn.DENIED || this.consent === Jn.PENDING && (this._config.opt_out_capturing_by_default || this._config.cookieless_mode === "on_reject");
	}
	isOptedIn() {
		return !this.isOptedOut();
	}
	isExplicitlyOptedOut() {
		return this.consent === Jn.DENIED;
	}
	optInOut(e) {
		this._storage._set(this._storageKey, e ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie);
	}
	reset() {
		this._storage._remove(this._storageKey, this._config.cross_subdomain_cookie);
	}
	get _storageKey() {
		var { token: e, opt_out_capturing_cookie_prefix: t, consent_persistence_name: n } = this._instance.config;
		return n || (t ? t + e : "__ph_opt_in_out_" + e);
	}
	get _storedConsent() {
		var e = this._storage._get(this._storageKey);
		return ue(e) ? Jn.GRANTED : S(de, e) ? Jn.DENIED : Jn.PENDING;
	}
	get _storage() {
		if (!this._persistentStore) {
			var e = this._config.opt_out_capturing_persistence_type;
			this._persistentStore = e === "localStorage" ? K : Hn;
			var t = e === "localStorage" ? Hn : K;
			t._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(ue(t._get(this._storageKey))), t._remove(this._storageKey, this._config.cross_subdomain_cookie));
		}
		return this._persistentStore;
	}
	_getDnt() {
		return !!this._config.respect_dnt && !!Yt([
			f?.doNotTrack,
			f?.msDoNotTrack,
			y.doNotTrack
		], ((e) => ue(e)));
	}
}, Xn = V("[Dead Clicks]"), Zn = () => !0, Qn = (e) => {
	var t, n = !((t = e.instance.persistence) == null || !t.get_property(sn)), r = e.instance.config.capture_dead_clicks;
	return L(r) ? r : !!k(r) || n;
}, $n = class {
	get lazyLoadedDeadClicksAutocapture() {
		return this._lazyLoadedDeadClicksAutocapture;
	}
	constructor(e, t, n) {
		this.instance = e, this.isEnabled = t, this.onCapture = n, this.startIfEnabledOrStop();
	}
	onRemoteConfig(e) {
		"captureDeadClicks" in e && (this.instance.persistence && this.instance.persistence.register({ [sn]: e.captureDeadClicks }), this.startIfEnabledOrStop());
	}
	startIfEnabledOrStop() {
		this.isEnabled(this) ? this._loadScript((() => {
			this._start();
		})) : this.stop();
	}
	_loadScript(e) {
		var t, n;
		(t = y.__PosthogExtensions__) != null && t.initDeadClicksAutocapture && e(), (n = y.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this.instance, "dead-clicks-autocapture", ((t) => {
			t ? Xn.error("failed to load script", t) : e();
		}));
	}
	_start() {
		var e;
		if (p) {
			if (!this._lazyLoadedDeadClicksAutocapture && (e = y.__PosthogExtensions__) != null && e.initDeadClicksAutocapture) {
				var t = k(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
				t.__onCapture = this.onCapture, this._lazyLoadedDeadClicksAutocapture = y.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t), this._lazyLoadedDeadClicksAutocapture.start(p), Xn.info("starting...");
			}
		} else Xn.error("`document` not found. Cannot start.");
	}
	stop() {
		this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, Xn.info("stopping..."));
	}
}, er = V("[SegmentIntegration]");
function tr(e, t) {
	var n = e.config.segment;
	if (!n) return t();
	(function(e, t) {
		var n = e.config.segment;
		if (!n) return t();
		var r = (n) => {
			var r = () => n.anonymousId() || Ln();
			e.config.get_device_id = r, n.id() && (e.register({
				distinct_id: n.id(),
				$device_id: r()
			}), e.persistence.set_property(G, "identified")), t();
		}, i = n.user();
		"then" in i && O(i.then) ? i.then(r) : r(i);
	})(e, (() => {
		n.register(((e) => {
			Promise && Promise.resolve || er.warn("This browser does not have Promise support, and can not use the segment integration");
			var t = (t, n) => {
				if (!n) return t;
				t.event.userId || t.event.anonymousId === e.get_distinct_id() || (er.info("No userId set, resetting PostHog"), e.reset()), t.event.userId && t.event.userId !== e.get_distinct_id() && (er.info("UserId set, identifying with PostHog"), e.identify(t.event.userId));
				var r = e.calculateEventProperties(n, t.event.properties);
				return t.event.properties = Object.assign({}, r, t.event.properties), t;
			};
			return {
				name: "PostHog JS",
				type: "enrichment",
				version: "1.0.0",
				isLoaded: () => !0,
				load: () => Promise.resolve(),
				track: (e) => t(e, e.event.event),
				page: (e) => t(e, "$pageview"),
				identify: (e) => t(e, "$identify"),
				screen: (e) => t(e, "$screen")
			};
		})(e)).then((() => {
			t();
		}));
	}));
}
var nr = "posthog-js";
function rr(e, t) {
	var { organization: n, projectId: r, prefix: a, severityAllowList: o = ["error"], sendExceptionsToPostHog: s = !0 } = t === void 0 ? {} : t;
	return (t) => {
		if (!(o === "*" || o.includes(t.level)) || !e.__loaded) return t;
		t.tags ||= {};
		var c = e.requestRouter.endpointFor("ui", "/project/" + e.config.token + "/person/" + e.get_distinct_id());
		t.tags["PostHog Person URL"] = c, e.sessionRecordingStarted() && (t.tags["PostHog Recording URL"] = e.get_session_replay_url({ withTimestamp: !0 }));
		var l, u = t.exception?.values || [], d = u.map(((e) => i({}, e, { stacktrace: e.stacktrace ? i({}, e.stacktrace, {
			type: "raw",
			frames: (e.stacktrace.frames || []).map(((e) => i({}, e, { platform: "web:javascript" })))
		}) : void 0 }))), f = {
			$exception_message: u[0]?.value || t.message,
			$exception_type: u[0]?.type,
			$exception_level: t.level,
			$exception_list: d,
			$sentry_event_id: t.event_id,
			$sentry_exception: t.exception,
			$sentry_exception_message: u[0]?.value || t.message,
			$sentry_exception_type: u[0]?.type,
			$sentry_tags: t.tags
		};
		return (n && r && (f.$sentry_url = (a || "https://sentry.io/organizations/") + n + "/issues/?project=" + r + "&query=" + t.event_id), s) && ((l = e.exceptions) == null || l.sendExceptionEvent(f)), t;
	};
}
var ir = class {
	constructor(e, t, n, r, i, a) {
		this.name = nr, this.setupOnce = function(o) {
			o(rr(e, {
				organization: t,
				projectId: n,
				prefix: r,
				severityAllowList: i,
				sendExceptionsToPostHog: a == null || a
			}));
		};
	}
}, ar = class {
	constructor(e) {
		this._onSessionIdChange = (e, t, n) => {
			n && (n.noSessionId || n.activityTimeout || n.sessionPastMaximumLength) && (B.info("[PageViewManager] Session rotated, clearing pageview state", {
				sessionId: e,
				changeReason: n
			}), this._currentPageview = void 0, this._instance.scrollManager.resetContext());
		}, this._instance = e, this._setupSessionRotationHandler();
	}
	_setupSessionRotationHandler() {
		this._unsubscribeSessionId = this._instance.sessionManager?.onSessionId(this._onSessionIdChange);
	}
	destroy() {
		var e;
		(e = this._unsubscribeSessionId) == null || e.call(this), this._unsubscribeSessionId = void 0;
	}
	doPageView(e, t) {
		var n = this._previousPageViewProperties(e, t);
		return this._currentPageview = {
			pathname: s?.location.pathname ?? "",
			pageViewId: t,
			timestamp: e
		}, this._instance.scrollManager.resetContext(), n;
	}
	doPageLeave(e) {
		return this._previousPageViewProperties(e, this._currentPageview?.pageViewId);
	}
	doEvent() {
		return { $pageview_id: this._currentPageview?.pageViewId };
	}
	_previousPageViewProperties(e, t) {
		var n = this._currentPageview;
		if (!n) return { $pageview_id: t };
		var r = {
			$pageview_id: t,
			$prev_pageview_id: n.pageViewId
		}, i = this._instance.scrollManager.getContext();
		if (i && !this._instance.config.disable_scroll_properties) {
			var { maxScrollHeight: a, lastScrollY: o, maxScrollY: s, maxContentHeight: c, lastContentY: l, maxContentY: u } = i;
			if (!(j(a) || j(o) || j(s) || j(c) || j(l) || j(u))) {
				a = Math.ceil(a), o = Math.ceil(o), s = Math.ceil(s), c = Math.ceil(c), l = Math.ceil(l), u = Math.ceil(u);
				var d = a <= 1 ? 1 : fe(o / a, 0, 1, B), f = a <= 1 ? 1 : fe(s / a, 0, 1, B), p = c <= 1 ? 1 : fe(l / c, 0, 1, B), m = c <= 1 ? 1 : fe(u / c, 0, 1, B);
				r = U(r, {
					$prev_pageview_last_scroll: o,
					$prev_pageview_last_scroll_percentage: d,
					$prev_pageview_max_scroll: s,
					$prev_pageview_max_scroll_percentage: f,
					$prev_pageview_last_content: l,
					$prev_pageview_last_content_percentage: p,
					$prev_pageview_max_content: u,
					$prev_pageview_max_content_percentage: m
				});
			}
		}
		return n.pathname && (r.$prev_pageview_pathname = n.pathname), n.timestamp && (r.$prev_pageview_duration = (e.getTime() - n.timestamp.getTime()) / 1e3), r;
	}
}, or = (e) => {
	var t = p?.createElement("a");
	return j(t) ? null : (t.href = e, t);
}, sr = function(e, t) {
	var n, r;
	t === void 0 && (t = "&");
	var i = [];
	return H(e, (function(e, t) {
		j(e) || j(t) || t === "undefined" || (n = encodeURIComponent(((e) => e instanceof File)(e) ? e.name : e.toString()), r = encodeURIComponent(t), i[i.length] = r + "=" + n);
	})), i.join(t);
}, cr = function(e, t) {
	for (var n, r = ((e.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), i = 0; i < r.length; i++) {
		var a = r[i].split("=");
		if (a[0] === t) {
			n = a;
			break;
		}
	}
	if (!D(n) || n.length < 2) return "";
	var o = n[1];
	try {
		o = decodeURIComponent(o);
	} catch {
		B.error("Skipping decoding for malformed query param: " + o);
	}
	return o.replace(/\+/g, " ");
}, lr = function(e, t, n) {
	if (!e || !t || !t.length) return e;
	for (var r = e.split("#"), i = r[0] || "", a = r[1], o = i.split("?"), s = o[1], c = o[0], l = (s || "").split("&"), u = [], d = 0; d < l.length; d++) {
		var f = l[d].split("=");
		D(f) && (t.includes(f[0]) ? u.push(f[0] + "=" + n) : u.push(l[d]));
	}
	var p = c;
	return s != null && (p += "?" + u.join("&")), a != null && (p += "#" + a), p;
}, ur = function(e, t) {
	var n = e.match(RegExp(t + "=([^&]*)"));
	return n ? n[1] : null;
}, dr = "https?://(.*)", fr = [
	"gclid",
	"gclsrc",
	"dclid",
	"gbraid",
	"wbraid",
	"fbclid",
	"msclkid",
	"twclid",
	"li_fat_id",
	"igshid",
	"ttclid",
	"rdt_cid",
	"epik",
	"qclid",
	"sccid",
	"irclid",
	"_kx"
], pr = Vt([
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
	"gad_source",
	"mc_cid"
], fr), mr = "<masked>", hr = ["li_fat_id"];
function gr(e, t, n) {
	if (!p) return {};
	var r, i = t ? Vt([], fr, n || []) : [], a = _r(lr(p.URL, i, mr), e);
	return U((r = {}, H(hr, (function(e) {
		var t = Hn._get(e);
		r[e] = t || null;
	})), r), a);
}
function _r(e, t) {
	var n = pr.concat(t || []), r = {};
	return H(n, (function(t) {
		r[t] = cr(e, t) || null;
	})), r;
}
function vr(e) {
	var t = function(e) {
		return e ? e.search(dr + "google.([^/?]*)") === 0 ? "google" : e.search(dr + "bing.com") === 0 ? "bing" : e.search(dr + "yahoo.com") === 0 ? "yahoo" : e.search(dr + "duckduckgo.com") === 0 ? "duckduckgo" : null : null;
	}(e), n = t == "yahoo" ? "p" : "q", r = {};
	if (!N(t)) {
		r.$search_engine = t;
		var i = p ? cr(p.referrer, n) : "";
		i.length && (r.ph_keyword = i);
	}
	return r;
}
function yr() {
	return navigator.language || navigator.userLanguage;
}
function br() {
	return p?.referrer || "$direct";
}
function xr(e, t) {
	var n = e ? Vt([], fr, t || []) : [], r = m?.href.substring(0, 1e3);
	return {
		r: br().substring(0, 1e3),
		u: r ? lr(r, n, mr) : void 0
	};
}
function Sr(e) {
	var { r: t, u: n } = e, r = {
		$referrer: t,
		$referring_domain: t == null ? void 0 : t == "$direct" ? "$direct" : or(t)?.host
	};
	if (n) {
		r.$current_url = n;
		var i = or(n);
		r.$host = i?.host, r.$pathname = i?.pathname, U(r, _r(n));
	}
	return t && U(r, vr(t)), r;
}
function Cr() {
	try {
		return Intl.DateTimeFormat().resolvedOptions().timeZone;
	} catch {
		return;
	}
}
function wr() {
	try {
		return (/* @__PURE__ */ new Date()).getTimezoneOffset();
	} catch {
		return;
	}
}
function Tr(e, t) {
	var n, r, i;
	if (!v) return {};
	var a, c, l, u, d = e ? Vt([], fr, t || []) : [], [f, p] = function(e) {
		for (var t = 0; t < lt.length; t++) {
			var [n, r] = lt[t], i = n.exec(e), a = i && (O(r) ? r(i, e) : r);
			if (a) return a;
		}
		return ["", ""];
	}(v);
	return U(Gt({
		$os: f,
		$os_version: p,
		$browser: ot(v, navigator.vendor),
		$device: ut(v),
		$device_type: (c = v, l = {
			userAgentDataPlatform: (n = navigator) == null || (n = n.userAgentData) == null ? void 0 : n.platform,
			maxTouchPoints: navigator?.maxTouchPoints,
			screenWidth: s == null || (r = s.screen) == null ? void 0 : r.width,
			screenHeight: s == null || (i = s.screen) == null ? void 0 : i.height,
			devicePixelRatio: s?.devicePixelRatio
		}, u = ut(c), u === ve || u === _e || u === "Kobo" || u === "Kindle Fire" || u === Je ? ge : u === Le || u === ze || u === Re || u === Ge ? "Console" : u === be ? "Wearable" : u ? R : l?.userAgentDataPlatform === "Android" && (l?.maxTouchPoints ?? 0) > 0 ? Math.min(l?.screenWidth ?? 0, l?.screenHeight ?? 0) / (l?.devicePixelRatio ?? 1) >= 600 ? ge : R : "Desktop"),
		$timezone: Cr(),
		$timezone_offset: wr()
	}), {
		$current_url: lr(m?.href, d, mr),
		$host: m?.host,
		$pathname: m?.pathname,
		$raw_user_agent: v.length > 1e3 ? v.substring(0, 997) + "..." : v,
		$browser_version: ct(v, navigator.vendor),
		$browser_language: yr(),
		$browser_language_prefix: (a = yr(), typeof a == "string" ? a.split("-")[0] : void 0),
		$screen_height: s?.screen.height,
		$screen_width: s?.screen.width,
		$viewport_height: s?.innerHeight,
		$viewport_width: s?.innerWidth,
		$lib: "web",
		$lib_version: o.LIB_VERSION,
		$insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
		$time: Date.now() / 1e3
	});
}
var Er = [
	"cookie",
	"localstorage",
	"localstorage+cookie",
	"sessionstorage",
	"memory"
], Dr = class {
	constructor(e, t) {
		this._config = e, this.props = {}, this._campaign_params_saved = !1, this._name = ((e) => {
			var t = "";
			return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog";
		})(e), this._storage = this._buildStorage(e), this.load(), e.debug && B.info("Persistence loaded", e.persistence, i({}, this.props)), this.update_config(e, e, t), this.save();
	}
	isDisabled() {
		return !!this._disabled;
	}
	_buildStorage(e) {
		Er.indexOf(e.persistence.toLowerCase()) === -1 && (B.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
		var t = function(e) {
			e === void 0 && (e = []);
			var t = [...Wn, ...e];
			return i({}, K, {
				_parse: function(e) {
					try {
						var t = {};
						try {
							t = Hn._parse(e) || {};
						} catch {}
						var n = U(t, JSON.parse(K._get(e) || "{}"));
						return K._set(e, n), n;
					} catch {}
					return null;
				},
				_set: function(e, n, r, i, a, o) {
					try {
						K._set(e, n, void 0, void 0, o);
						var s = {};
						t.forEach(((e) => {
							n[e] && (s[e] = n[e]);
						})), Object.keys(s).length && Hn._set(e, s, r, i, a, o);
					} catch (e) {
						K._error(e);
					}
				},
				_remove: function(e, t) {
					try {
						s?.localStorage.removeItem(e), Hn._remove(e, t);
					} catch (e) {
						K._error(e);
					}
				}
			});
		}(e.cookie_persisted_properties || []), n = e.persistence.toLowerCase();
		return n === "localstorage" && K._is_supported() ? K : n === "localstorage+cookie" && t._is_supported() ? t : n === "sessionstorage" && q._is_supported() ? q : n === "memory" ? Kn : n === "cookie" ? Hn : t._is_supported() ? t : Hn;
	}
	_isFeatureFlagCacheStale(e) {
		var t = e ?? this._config.feature_flag_cache_ttl_ms;
		if (!t || t <= 0) return !1;
		var n = this.props[xn];
		return !n || typeof n != "number" || Date.now() - n > t;
	}
	properties() {
		var e = {};
		return H(this.props, ((t, n) => {
			if (n === pn && k(t)) {
				if (!this._isFeatureFlagCacheStale()) for (var r = Object.keys(t), i = 0; i < r.length; i++) e["$feature/" + r[i]] = t[r[i]];
			} else o = n, s = !1, (N(a = An) ? s : d && a.indexOf === d ? a.indexOf(o) != -1 : (H(a, (function(e) {
				if (s ||= e === o) return zt;
			})), s)) || (e[n] = t);
			var a, o, s;
		})), e;
	}
	load() {
		if (!this._disabled) {
			var e = this._storage._parse(this._name);
			e && (this.props = U({}, e));
		}
	}
	save() {
		this._disabled || this._storage._set(this._name, this.props, this._expire_days, this._cross_subdomain, this._secure, this._config.debug);
	}
	remove() {
		this._storage._remove(this._name, !1), this._storage._remove(this._name, !0);
	}
	clear() {
		this.remove(), this.props = {};
	}
	register_once(e, t, n) {
		if (k(e)) {
			j(t) && (t = "None"), this._expire_days = j(n) ? this._default_expiry : n;
			var r = !1;
			if (H(e, ((e, n) => {
				this.props.hasOwnProperty(n) && this.props[n] !== t || (this.props[n] = e, r = !0);
			})), r) return this.save(), !0;
		}
		return !1;
	}
	register(e, t) {
		if (k(e)) {
			this._expire_days = j(t) ? this._default_expiry : t;
			var n = !1;
			if (H(e, ((t, r) => {
				e.hasOwnProperty(r) && this.props[r] !== t && (this.props[r] = t, n = !0);
			})), n) return this.save(), !0;
		}
		return !1;
	}
	unregister(e) {
		e in this.props && (delete this.props[e], this.save());
	}
	update_campaign_params() {
		if (!this._campaign_params_saved) {
			var e = gr(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties);
			A(Gt(e)) || this.register(e), this._campaign_params_saved = !0;
		}
	}
	update_search_keyword() {
		var e;
		this.register((e = p?.referrer) ? vr(e) : {});
	}
	update_referrer_info() {
		this.register_once({
			$referrer: br(),
			$referring_domain: p != null && p.referrer && or(p.referrer)?.host || "$direct"
		}, void 0);
	}
	set_initial_person_info() {
		this.props[wn] || this.props[Tn] || this.register_once({ [En]: xr(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties) }, void 0);
	}
	get_initial_props() {
		var e = {};
		H([Tn, wn], ((t) => {
			var n = this.props[t];
			n && H(n, (function(t, n) {
				e["$initial_" + te(n)] = t;
			}));
		}));
		var t, n, r = this.props[En];
		return r && U(e, (t = Sr(r), n = {}, H(t, (function(e, t) {
			n["$initial_" + te(t)] = e;
		})), n)), e;
	}
	safe_merge(e) {
		return H(this.props, (function(t, n) {
			n in e || (e[n] = t);
		})), e;
	}
	update_config(e, t, n) {
		if (this._default_expiry = this._expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence || !!n), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== t.persistence || !((e, t) => {
			if (e.length !== t.length) return !1;
			var n = [...e].sort(), r = [...t].sort();
			return n.every(((e, t) => e === r[t]));
		})(e.cookie_persisted_properties || [], t.cookie_persisted_properties || [])) {
			var r = this._buildStorage(e), i = this.props;
			this.clear(), this._storage = r, this.props = i, this.save();
		}
	}
	set_disabled(e) {
		this._disabled = e, this._disabled ? this.remove() : this.save();
	}
	set_cross_subdomain(e) {
		e !== this._cross_subdomain && (this._cross_subdomain = e, this.remove(), this.save());
	}
	set_secure(e) {
		e !== this._secure && (this._secure = e, this.remove(), this.save());
	}
	set_event_timer(e, t) {
		var n = this.props[$t] || {};
		n[e] = t, this.props[$t] = n, this.save();
	}
	remove_event_timer(e) {
		var t = (this.props[$t] || {})[e];
		return j(t) || (delete this.props[$t][e], this.save()), t;
	}
	get_property(e) {
		return this.props[e];
	}
	set_property(e, t) {
		this.props[e] = t, this.save();
	}
}, Or = {
	Activation: "events",
	Cancellation: "cancelEvents"
}, kr = {
	Popover: "popover",
	API: "api",
	Widget: "widget",
	ExternalSurvey: "external_survey"
}, Ar = {
	SHOWN: "survey shown",
	DISMISSED: "survey dismissed",
	SENT: "survey sent",
	ABANDONED: "survey abandoned"
}, jr = {
	SURVEY_ID: "$survey_id",
	SURVEY_NAME: "$survey_name",
	SURVEY_RESPONSE: "$survey_response",
	SURVEY_ITERATION: "$survey_iteration",
	SURVEY_ITERATION_START_DATE: "$survey_iteration_start_date",
	SURVEY_PARTIALLY_COMPLETED: "$survey_partially_completed",
	SURVEY_SUBMISSION_ID: "$survey_submission_id",
	SURVEY_QUESTIONS: "$survey_questions",
	SURVEY_COMPLETED: "$survey_completed",
	PRODUCT_TOUR_ID: "$product_tour_id",
	SURVEY_LAST_SEEN_DATE: "$survey_last_seen_date"
}, Mr = {
	Popover: "popover",
	Inline: "inline"
}, Nr = function(e) {
	return e.SHOWN = "product tour shown", e.DISMISSED = "product tour dismissed", e.COMPLETED = "product tour completed", e.STEP_SHOWN = "product tour step shown", e.STEP_COMPLETED = "product tour step completed", e.BUTTON_CLICKED = "product tour button clicked", e.STEP_SELECTOR_FAILED = "product tour step selector failed", e.BANNER_CONTAINER_SELECTOR_FAILED = "product tour banner container selector failed", e.BANNER_ACTION_CLICKED = "product tour banner action clicked", e;
}({}), Pr = function(e) {
	return e.TOUR_ID = "$product_tour_id", e.TOUR_NAME = "$product_tour_name", e.TOUR_ITERATION = "$product_tour_iteration", e.TOUR_RENDER_REASON = "$product_tour_render_reason", e.TOUR_STEP_ID = "$product_tour_step_id", e.TOUR_STEP_ORDER = "$product_tour_step_order", e.TOUR_STEP_TYPE = "$product_tour_step_type", e.TOUR_DISMISS_REASON = "$product_tour_dismiss_reason", e.TOUR_BUTTON_TEXT = "$product_tour_button_text", e.TOUR_BUTTON_ACTION = "$product_tour_button_action", e.TOUR_BUTTON_LINK = "$product_tour_button_link", e.TOUR_BUTTON_TOUR_ID = "$product_tour_button_tour_id", e.TOUR_STEPS_COUNT = "$product_tour_steps_count", e.TOUR_STEP_SELECTOR = "$product_tour_step_selector", e.TOUR_STEP_SELECTOR_FOUND = "$product_tour_step_selector_found", e.TOUR_STEP_ELEMENT_TAG = "$product_tour_step_element_tag", e.TOUR_STEP_ELEMENT_ID = "$product_tour_step_element_id", e.TOUR_STEP_ELEMENT_CLASSES = "$product_tour_step_element_classes", e.TOUR_STEP_ELEMENT_TEXT = "$product_tour_step_element_text", e.TOUR_ERROR = "$product_tour_error", e.TOUR_MATCHES_COUNT = "$product_tour_matches_count", e.TOUR_FAILURE_PHASE = "$product_tour_failure_phase", e.TOUR_WAITED_FOR_ELEMENT = "$product_tour_waited_for_element", e.TOUR_WAIT_DURATION_MS = "$product_tour_wait_duration_ms", e.TOUR_BANNER_SELECTOR = "$product_tour_banner_selector", e.TOUR_LINKED_SURVEY_ID = "$product_tour_linked_survey_id", e.USE_MANUAL_SELECTOR = "$use_manual_selector", e.INFERENCE_DATA_PRESENT = "$inference_data_present", e.TOUR_LAST_SEEN_DATE = "$product_tour_last_seen_date", e.TOUR_TYPE = "$product_tour_type", e;
}({}), Fr = V("[RateLimiter]"), Ir = class {
	constructor(e) {
		this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = (e) => {
			var t = e.text;
			if (t && t.length) try {
				(JSON.parse(t).quota_limited || []).forEach(((e) => {
					Fr.info((e || "events") + " is quota limited."), this.serverLimits[e] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
				}));
			} catch (e) {
				Fr.warn("could not rate limit - continuing. Error: \"" + e?.message + "\"", { text: t });
				return;
			}
		}, this.instance = e, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
	}
	get captureEventsPerSecond() {
		return this.instance.config.rate_limiting?.events_per_second || 10;
	}
	get captureEventsBurstLimit() {
		return Math.max(this.instance.config.rate_limiting?.events_burst_limit || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond);
	}
	clientRateLimitContext(e) {
		var t;
		e === void 0 && (e = !1);
		var { captureEventsBurstLimit: n, captureEventsPerSecond: r } = this, i = (/* @__PURE__ */ new Date()).getTime(), a = this.instance.persistence?.get_property(Cn) ?? {
			tokens: n,
			last: i
		};
		a.tokens += (i - a.last) / 1e3 * r, a.last = i, a.tokens > n && (a.tokens = n);
		var o = a.tokens < 1;
		return o || e || (a.tokens = Math.max(0, a.tokens - 1)), !o || this.lastEventRateLimited || e || this.instance.capture("$$client_ingestion_warning", { $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to " + r + " events per second and " + n + " events burst limit." }, { skip_client_rate_limiting: !0 }), this.lastEventRateLimited = o, (t = this.instance.persistence) == null || t.set_property(Cn, a), {
			isRateLimited: o,
			remainingTokens: a.tokens
		};
	}
	isServerRateLimited(e) {
		var t = this.serverLimits[e || "events"] || !1;
		return !1 !== t && (/* @__PURE__ */ new Date()).getTime() < t;
	}
}, Lr = V("[RemoteConfig]"), Rr = class {
	constructor(e) {
		this._instance = e;
	}
	get remoteConfig() {
		var e;
		return (e = y._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.config;
	}
	_loadRemoteConfigJs(e) {
		var t, n;
		(t = y.__PosthogExtensions__) != null && t.loadExternalDependency ? (n = y.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, "remote-config", (() => e(this.remoteConfig))) : e();
	}
	_loadRemoteConfigJSON(e) {
		this._instance._send_request({
			method: "GET",
			url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"),
			callback: (t) => {
				e(t.json);
			}
		});
	}
	load() {
		try {
			if (this.remoteConfig) return Lr.info("Using preloaded remote config", this.remoteConfig), this._onRemoteConfig(this.remoteConfig), void this._startRefreshInterval();
			if (this._instance._shouldDisableFlags()) return void Lr.warn("Remote config is disabled. Falling back to local config.");
			this._loadRemoteConfigJs(((e) => {
				if (!e) return Lr.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON(((e) => {
					this._onRemoteConfig(e), this._startRefreshInterval();
				}));
				this._onRemoteConfig(e), this._startRefreshInterval();
			}));
		} catch (e) {
			Lr.error("Error loading remote config", e);
		}
	}
	stop() {
		this._refreshInterval &&= (clearInterval(this._refreshInterval), void 0);
	}
	refresh() {
		this._instance._shouldDisableFlags() || p?.visibilityState === "hidden" || this._instance.reloadFeatureFlags();
	}
	_startRefreshInterval() {
		if (!this._refreshInterval) {
			var e = this._instance.config.remote_config_refresh_interval_ms ?? 3e5;
			e !== 0 && (this._refreshInterval = setInterval((() => {
				this.refresh();
			}), e));
		}
	}
	_onRemoteConfig(e) {
		var t;
		(e || Lr.error("Failed to fetch remote config from PostHog."), this._instance._onRemoteConfig(e ?? {}), !1 !== e?.hasFeatureFlags) && (this._instance.config.advanced_disable_feature_flags_on_first_load || (t = this._instance.featureFlags) == null || t.ensureFlagsLoaded());
	}
}, zr = function(e) {
	return e.GZipJS = "gzip-js", e.Base64 = "base64", e;
}({}), J = Uint8Array, Y = Uint16Array, Br = Uint32Array, Vr = new J([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]), Hr = new J([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]), Ur = new J([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]), Wr = function(e, t) {
	for (var n = new Y(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	var i = new Br(n[30]);
	for (r = 1; r < 30; ++r) for (var a = n[r]; a < n[r + 1]; ++a) i[a] = a - n[r] << 5 | r;
	return [n, i];
}, Gr = Wr(Vr, 2), Kr = Gr[0], qr = Gr[1];
Kr[28] = 258, qr[258] = 28;
for (var Jr = Wr(Hr, 0)[1], Yr = new Y(32768), X = 0; X < 32768; ++X) {
	var Xr = (43690 & X) >>> 1 | (21845 & X) << 1;
	Xr = (61680 & (Xr = (52428 & Xr) >>> 2 | (13107 & Xr) << 2)) >>> 4 | (3855 & Xr) << 4, Yr[X] = ((65280 & Xr) >>> 8 | (255 & Xr) << 8) >>> 1;
}
var Zr = function(e, t, n) {
	for (var r = e.length, i = 0, a = new Y(t); i < r; ++i) ++a[e[i] - 1];
	var o, s = new Y(t);
	for (i = 0; i < t; ++i) s[i] = s[i - 1] + a[i - 1] << 1;
	if (n) {
		o = new Y(1 << t);
		var c = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = s[e[i] - 1]++ << u, f = d | (1 << u) - 1; d <= f; ++d) o[Yr[d] >>> c] = l;
	} else for (o = new Y(r), i = 0; i < r; ++i) o[i] = Yr[s[e[i] - 1]++] >>> 15 - e[i];
	return o;
}, Qr = new J(288);
for (X = 0; X < 144; ++X) Qr[X] = 8;
for (X = 144; X < 256; ++X) Qr[X] = 9;
for (X = 256; X < 280; ++X) Qr[X] = 7;
for (X = 280; X < 288; ++X) Qr[X] = 8;
var $r = new J(32);
for (X = 0; X < 32; ++X) $r[X] = 5;
var ei = Zr(Qr, 9, 0), ti = Zr($r, 5, 0), ni = function(e) {
	return (e / 8 >> 0) + (7 & e && 1);
}, ri = function(e, t, n) {
	(n == null || n > e.length) && (n = e.length);
	var r = new (e instanceof Y ? Y : e instanceof Br ? Br : J)(n - t);
	return r.set(e.subarray(t, n)), r;
}, ii = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 >> 0;
	e[r] |= n, e[r + 1] |= n >>> 8;
}, ai = function(e, t, n) {
	n <<= 7 & t;
	var r = t / 8 >> 0;
	e[r] |= n, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16;
}, oi = function(e, t) {
	for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
		s: r,
		f: e[r]
	});
	var i = n.length, a = n.slice();
	if (!i) return [new J(0), 0];
	if (i == 1) {
		var o = new J(n[0].s + 1);
		return o[n[0].s] = 1, [o, 1];
	}
	n.sort((function(e, t) {
		return e.f - t.f;
	})), n.push({
		s: -1,
		f: 25001
	});
	var s = n[0], c = n[1], l = 0, u = 1, d = 2;
	for (n[0] = {
		s: -1,
		f: s.f + c.f,
		l: s,
		r: c
	}; u != i - 1;) s = n[n[l].f < n[d].f ? l++ : d++], c = n[l != u && n[l].f < n[d].f ? l++ : d++], n[u++] = {
		s: -1,
		f: s.f + c.f,
		l: s,
		r: c
	};
	var f = a[0].s;
	for (r = 1; r < i; ++r) a[r].s > f && (f = a[r].s);
	var p = new Y(f + 1), m = si(n[u - 1], p, 0);
	if (m > t) {
		r = 0;
		var h = 0, g = m - t, _ = 1 << g;
		for (a.sort((function(e, t) {
			return p[t.s] - p[e.s] || e.f - t.f;
		})); r < i; ++r) {
			var v = a[r].s;
			if (!(p[v] > t)) break;
			h += _ - (1 << m - p[v]), p[v] = t;
		}
		for (h >>>= g; h > 0;) {
			var y = a[r].s;
			p[y] < t ? h -= 1 << t - p[y]++ - 1 : ++r;
		}
		for (; r >= 0 && h; --r) {
			var b = a[r].s;
			p[b] == t && (--p[b], ++h);
		}
		m = t;
	}
	return [new J(p), m];
}, si = function(e, t, n) {
	return e.s == -1 ? Math.max(si(e.l, t, n + 1), si(e.r, t, n + 1)) : t[e.s] = n;
}, ci = function(e) {
	for (var t = e.length; t && !e[--t];);
	for (var n = new Y(++t), r = 0, i = e[0], a = 1, o = function(e) {
		n[r++] = e;
	}, s = 1; s <= t; ++s) if (e[s] == i && s != t) ++a;
	else {
		if (!i && a > 2) {
			for (; a > 138; a -= 138) o(32754);
			a > 2 && (o(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
		} else if (a > 3) {
			for (o(i), --a; a > 6; a -= 6) o(8304);
			a > 2 && (o(a - 3 << 5 | 8208), a = 0);
		}
		for (; a--;) o(i);
		a = 1, i = e[s];
	}
	return [n.subarray(0, r), t];
}, li = function(e, t) {
	for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
	return n;
}, ui = function(e, t, n) {
	var r = n.length, i = ni(t + 2);
	e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
	for (var a = 0; a < r; ++a) e[i + a + 4] = n[a];
	return 8 * (i + 4 + r);
}, di = function(e, t, n, r, i, a, o, s, c, l, u) {
	ii(t, u++, n), ++i[256];
	for (var d = oi(i, 15), f = d[0], p = d[1], m = oi(a, 15), h = m[0], g = m[1], _ = ci(f), v = _[0], y = _[1], b = ci(h), ee = b[0], x = b[1], S = new Y(19), C = 0; C < v.length; ++C) S[31 & v[C]]++;
	for (C = 0; C < ee.length; ++C) S[31 & ee[C]]++;
	for (var te = oi(S, 7), w = te[0], ne = te[1], T = 19; T > 4 && !w[Ur[T - 1]]; --T);
	var E, D, O, k, A = l + 5 << 3, j = li(i, Qr) + li(a, $r) + o, M = li(i, f) + li(a, h) + o + 14 + 3 * T + li(S, w) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
	if (A <= j && A <= M) return ui(t, u, e.subarray(c, c + l));
	if (ii(t, u, 1 + (M < j)), u += 2, M < j) {
		E = Zr(f, p, 0), D = f, O = Zr(h, g, 0), k = h;
		var re = Zr(w, ne, 0);
		for (ii(t, u, y - 257), ii(t, u + 5, x - 1), ii(t, u + 10, T - 4), u += 14, C = 0; C < T; ++C) ii(t, u + 3 * C, w[Ur[C]]);
		u += 3 * T;
		for (var N = [v, ee], P = 0; P < 2; ++P) {
			var F = N[P];
			for (C = 0; C < F.length; ++C) {
				var I = 31 & F[C];
				ii(t, u, re[I]), u += w[I], I > 15 && (ii(t, u, F[C] >>> 5 & 127), u += F[C] >>> 12);
			}
		}
	} else E = ei, D = Qr, O = ti, k = $r;
	for (C = 0; C < s; ++C) if (r[C] > 255) {
		I = r[C] >>> 18 & 31, ai(t, u, E[I + 257]), u += D[I + 257], I > 7 && (ii(t, u, r[C] >>> 23 & 31), u += Vr[I]);
		var L = 31 & r[C];
		ai(t, u, O[L]), u += k[L], L > 3 && (ai(t, u, r[C] >>> 5 & 8191), u += Hr[L]);
	} else ai(t, u, E[r[C]]), u += D[r[C]];
	return ai(t, u, E[256]), u + D[256];
}, fi = new Br([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]), pi = function() {
	for (var e = new Br(256), t = 0; t < 256; ++t) {
		for (var n = t, r = 9; --r;) n = (1 & n && 3988292384) ^ n >>> 1;
		e[t] = n;
	}
	return e;
}(), mi = function(e, t, n, r, i) {
	return function(e, t, n, r, i, a) {
		var o = e.length, s = new J(r + o + 5 * (1 + Math.floor(o / 7e3)) + i), c = s.subarray(r, s.length - i), l = 0;
		if (!t || o < 8) for (var u = 0; u <= o; u += 65535) {
			var d = u + 65535;
			d < o ? l = ui(c, l, e.subarray(u, d)) : (c[u] = a, l = ui(c, l, e.subarray(u, o)));
		}
		else {
			for (var f = fi[t - 1], p = f >>> 13, m = 8191 & f, h = (1 << n) - 1, g = new Y(32768), _ = new Y(h + 1), v = Math.ceil(n / 3), y = 2 * v, b = function(t) {
				return (e[t] ^ e[t + 1] << v ^ e[t + 2] << y) & h;
			}, ee = new Br(25e3), x = new Y(288), S = new Y(32), C = 0, te = 0, w = (u = 0, 0), ne = 0, T = 0; u < o; ++u) {
				var E = b(u), D = 32767 & u, O = _[E];
				if (g[D] = O, _[E] = D, ne <= u) {
					var k = o - u;
					if ((C > 7e3 || w > 24576) && k > 423) {
						l = di(e, c, 0, ee, x, S, te, w, T, u - T, l), w = C = te = 0, T = u;
						for (var A = 0; A < 286; ++A) x[A] = 0;
						for (A = 0; A < 30; ++A) S[A] = 0;
					}
					var j = 2, M = 0, re = m, N = D - O & 32767;
					if (k > 2 && E == b(u - N)) for (var P = Math.min(p, k) - 1, F = Math.min(32767, u), I = Math.min(258, k); N <= F && --re && D != O;) {
						if (e[u + j] == e[u + j - N]) {
							for (var L = 0; L < I && e[u + L] == e[u + L - N]; ++L);
							if (L > j) {
								if (j = L, M = N, L > P) break;
								var ie = Math.min(N, L - 2), ae = 0;
								for (A = 0; A < ie; ++A) {
									var oe = u - N + A + 32768 & 32767, se = oe - g[oe] + 32768 & 32767;
									se > ae && (ae = se, O = oe);
								}
							}
						}
						N += (D = O) - (O = g[D]) + 32768 & 32767;
					}
					if (M) {
						ee[w++] = 268435456 | qr[j] << 18 | Jr[M];
						var ce = 31 & qr[j], le = 31 & Jr[M];
						te += Vr[ce] + Hr[le], ++x[257 + ce], ++S[le], ne = u + j, ++C;
					} else ee[w++] = e[u], ++x[e[u]];
				}
			}
			l = di(e, c, a, ee, x, S, te, w, T, u - T, l);
		}
		return ri(s, 0, r + ni(l) + i);
	}(e, t.level == null ? 6 : t.level, t.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, r, !0);
}, hi = function(e, t, n) {
	for (; n; ++t) e[t] = n, n >>>= 8;
};
function gi(e, t) {
	t === void 0 && (t = {});
	var n = function() {
		var e = 4294967295;
		return {
			p: function(t) {
				for (var n = e, r = 0; r < t.length; ++r) n = pi[255 & n ^ t[r]] ^ n >>> 8;
				e = n;
			},
			d: function() {
				return 4294967295 ^ e;
			}
		};
	}(), r = e.length;
	n.p(e);
	var i, a = mi(e, t, 10 + ((i = t).filename && i.filename.length + 1 || 0), 8), o = a.length;
	return function(e, t) {
		var n = t.filename;
		if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && hi(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
			e[3] = 8;
			for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r);
		}
	}(a, t), hi(a, o - 8, n.d()), hi(a, o - 4, r), a;
}
var _i = function(e) {
	var t, n, r, i, a = "";
	for (t = n = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i = 0; i < r; i++) {
		var o = e.charCodeAt(i), s = null;
		o < 128 ? n++ : s = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), N(s) || (n > t && (a += e.substring(t, n)), a += s, t = n = i + 1);
	}
	return n > t && (a += e.substring(t, e.length)), a;
}, vi = !!g || !!h, yi = function(e, t, n) {
	n === void 0 && (n = !0);
	var [r, a] = e.split("?"), o = i({}, t), s = a?.split("&").map(((e) => {
		var t, [r, i] = e.split("="), a = n && (t = o[r]) != null ? t : i;
		return delete o[r], r + "=" + a;
	})) ?? [], c = sr(o);
	return c && s.push(c), r + "?" + s.join("&");
}, bi = (e, t) => JSON.stringify(e, ((e, t) => typeof t == "bigint" ? t.toString() : t), t), xi = (e) => {
	var { data: t, compression: n } = e;
	if (t) {
		if (n === zr.GZipJS) {
			var r = gi(function(e, t) {
				var n = e.length;
				if (typeof TextEncoder < "u") return new TextEncoder().encode(e);
				for (var r = new J(e.length + (e.length >>> 1)), i = 0, a = function(e) {
					r[i++] = e;
				}, o = 0; o < n; ++o) {
					if (i + 5 > r.length) {
						var s = new J(i + 8 + (n - o << 1));
						s.set(r), r = s;
					}
					var c = e.charCodeAt(o);
					c < 128 || t ? a(c) : c < 2048 ? (a(192 | c >>> 6), a(128 | 63 & c)) : c > 55295 && c < 57344 ? (a(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++o)) >>> 18), a(128 | c >>> 12 & 63), a(128 | c >>> 6 & 63), a(128 | 63 & c)) : (a(224 | c >>> 12), a(128 | c >>> 6 & 63), a(128 | 63 & c));
				}
				return ri(r, 0, i);
			}(bi(t)), { mtime: 0 });
			return {
				contentType: "text/plain",
				body: r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength),
				estimatedSize: r.byteLength
			};
		}
		if (n === zr.Base64) {
			var i = ((e) => "data=" + encodeURIComponent(typeof e == "string" ? e : bi(e)))(function(e) {
				var t, n, r, i, a, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = 0, c = 0, l = "", u = [];
				if (!e) return e;
				e = _i(e);
				do
					t = (a = e.charCodeAt(s++) << 16 | e.charCodeAt(s++) << 8 | e.charCodeAt(s++)) >> 18 & 63, n = a >> 12 & 63, r = a >> 6 & 63, i = 63 & a, u[c++] = o.charAt(t) + o.charAt(n) + o.charAt(r) + o.charAt(i);
				while (s < e.length);
				switch (l = u.join(""), e.length % 3) {
					case 1:
						l = l.slice(0, -2) + "==";
						break;
					case 2: l = l.slice(0, -1) + "=";
				}
				return l;
			}(bi(t)));
			return {
				contentType: "application/x-www-form-urlencoded",
				body: i,
				estimatedSize: new Blob([i]).size
			};
		}
		var a = bi(t);
		return {
			contentType: "application/json",
			body: a,
			estimatedSize: new Blob([a]).size
		};
	}
}, Si = [];
h && Si.push({
	transport: "fetch",
	method: (e) => {
		var { contentType: t, body: n, estimatedSize: r } = xi(e) ?? {}, a = new Headers();
		H(e.headers, (function(e, t) {
			a.append(t, e);
		})), t && a.append("Content-Type", t);
		var o = e.url, s = null;
		if (_) {
			var c = new _();
			s = {
				signal: c.signal,
				timeout: setTimeout((() => c.abort()), e.timeout)
			};
		}
		h(o, i({
			method: e?.method || "GET",
			headers: a,
			keepalive: e.method === "POST" && (r || 0) < 52428.8,
			body: n,
			signal: s?.signal
		}, e.fetchOptions)).then(((t) => t.text().then(((n) => {
			var r = {
				statusCode: t.status,
				text: n
			};
			if (t.status === 200) try {
				r.json = JSON.parse(n);
			} catch (e) {
				B.error(e);
			}
			e.callback == null || e.callback(r);
		})))).catch(((t) => {
			B.error(t), e.callback == null || e.callback({
				statusCode: 0,
				error: t
			});
		})).finally((() => s ? clearTimeout(s.timeout) : null));
	}
}), g && Si.push({
	transport: "XHR",
	method: (e) => {
		var t = new g();
		t.open(e.method || "GET", e.url, !0);
		var { contentType: n, body: r } = xi(e) ?? {};
		H(e.headers, (function(e, n) {
			t.setRequestHeader(n, e);
		})), n && t.setRequestHeader("Content-Type", n), e.timeout && (t.timeout = e.timeout), e.disableXHRCredentials || (t.withCredentials = !0), t.onreadystatechange = () => {
			if (t.readyState === 4) {
				var n = {
					statusCode: t.status,
					text: t.responseText
				};
				if (t.status === 200) try {
					n.json = JSON.parse(t.responseText);
				} catch {}
				e.callback == null || e.callback(n);
			}
		}, t.send(r);
	}
}), f != null && f.sendBeacon && Si.push({
	transport: "sendBeacon",
	method: (e) => {
		var t = yi(e.url, { beacon: "1" });
		try {
			var { contentType: n, body: r } = xi(e) ?? {}, i = typeof r == "string" ? new Blob([r], { type: n }) : r;
			f.sendBeacon(t, i);
		} catch {}
	}
});
var Ci = 3e3, wi = class {
	constructor(e, t) {
		this._isPaused = !0, this._queue = [], this._flushTimeoutMs = fe(t?.flush_interval_ms || Ci, 250, 5e3, B.createLogger("flush interval"), Ci), this._sendRequest = e;
	}
	enqueue(e) {
		this._queue.push(e), this._flushTimeout || this._setFlushTimeout();
	}
	unload() {
		this._clearFlushTimeout();
		var e = this._queue.length > 0 ? this._formatQueue() : {}, t = Object.values(e);
		[...t.filter(((e) => e.url.indexOf("/e") === 0)), ...t.filter(((e) => e.url.indexOf("/e") !== 0))].map(((e) => {
			this._sendRequest(i({}, e, { transport: "sendBeacon" }));
		}));
	}
	enable() {
		this._isPaused = !1, this._setFlushTimeout();
	}
	_setFlushTimeout() {
		var e = this;
		this._isPaused || (this._flushTimeout = setTimeout((() => {
			if (this._clearFlushTimeout(), this._queue.length > 0) {
				var t = this._formatQueue(), n = function() {
					var n = t[r], i = (/* @__PURE__ */ new Date()).getTime();
					n.data && D(n.data) && H(n.data, ((e) => {
						e.offset = Math.abs(e.timestamp - i), delete e.timestamp;
					})), e._sendRequest(n);
				};
				for (var r in t) n();
			}
		}), this._flushTimeoutMs));
	}
	_clearFlushTimeout() {
		clearTimeout(this._flushTimeout), this._flushTimeout = void 0;
	}
	_formatQueue() {
		var e = {};
		return H(this._queue, ((t) => {
			var n, r = t, a = (r ? r.batchKey : null) || r.url;
			j(e[a]) && (e[a] = i({}, r, { data: [] })), (n = e[a].data) == null || n.push(r.data);
		})), this._queue = [], e;
	}
}, Ti = ["retriesPerformedSoFar"], Ei = class {
	constructor(e) {
		this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._instance = e, this._queue = [], this._areWeOnline = !0, !j(s) && "onLine" in s.navigator && (this._areWeOnline = s.navigator.onLine, this._onlineListener = () => {
			this._areWeOnline = !0, this._flush();
		}, this._offlineListener = () => {
			this._areWeOnline = !1;
		}, W(s, "online", this._onlineListener), W(s, "offline", this._offlineListener));
	}
	get length() {
		return this._queue.length;
	}
	retriableRequest(e) {
		var { retriesPerformedSoFar: t } = e, n = a(e, Ti);
		I(t) && (n.url = yi(n.url, { retry_count: t })), this._instance._send_request(i({}, n, { callback: (e) => {
			e.statusCode !== 200 && (e.statusCode < 400 || e.statusCode >= 500) && (t ?? 0) < 10 ? this._enqueue(i({ retriesPerformedSoFar: t }, n)) : n.callback == null || n.callback(e);
		} }));
	}
	_enqueue(e) {
		var t = e.retriesPerformedSoFar || 0;
		e.retriesPerformedSoFar = t + 1;
		var n = function(e) {
			var t = 3e3 * 2 ** e, n = t / 2, r = Math.min(18e5, t), i = (Math.random() - .5) * (r - n);
			return Math.ceil(r + i);
		}(t), r = Date.now() + n;
		this._queue.push({
			retryAt: r,
			requestOptions: e
		});
		var i = "Enqueued failed request for retry in " + n;
		navigator.onLine || (i += " (Browser is offline)"), B.warn(i), this._isPolling || (this._isPolling = !0, this._poll());
	}
	_poll() {
		if (this._poller && clearTimeout(this._poller), this._queue.length === 0) return this._isPolling = !1, void (this._poller = void 0);
		this._poller = setTimeout((() => {
			this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll();
		}), this._pollIntervalMs);
	}
	_flush() {
		var e = Date.now(), t = [], n = this._queue.filter(((n) => n.retryAt < e || (t.push(n), !1)));
		if (this._queue = t, n.length > 0) for (var { requestOptions: r } of n) this.retriableRequest(r);
	}
	unload() {
		for (var { requestOptions: e } of (this._poller &&= (clearTimeout(this._poller), void 0), this._isPolling = !1, j(s) || (this._onlineListener &&= (s.removeEventListener("online", this._onlineListener), void 0), this._offlineListener &&= (s.removeEventListener("offline", this._offlineListener), void 0)), this._queue)) try {
			this._instance._send_request(i({}, e, { transport: "sendBeacon" }));
		} catch (e) {
			B.error(e);
		}
		this._queue = [];
	}
}, Di = class {
	constructor(e) {
		this._updateScrollData = () => {
			this._context ||= {};
			var e = this.scrollElement(), t = this.scrollY(), n = e ? Math.max(0, e.scrollHeight - e.clientHeight) : 0, r = t + (e?.clientHeight || 0), i = e?.scrollHeight || 0;
			this._context.lastScrollY = Math.ceil(t), this._context.maxScrollY = Math.max(t, this._context.maxScrollY ?? 0), this._context.maxScrollHeight = Math.max(n, this._context.maxScrollHeight ?? 0), this._context.lastContentY = r, this._context.maxContentY = Math.max(r, this._context.maxContentY ?? 0), this._context.maxContentHeight = Math.max(i, this._context.maxContentHeight ?? 0);
		}, this._instance = e;
	}
	getContext() {
		return this._context;
	}
	resetContext() {
		var e = this._context;
		return setTimeout(this._updateScrollData, 0), e;
	}
	startMeasuringScrollPosition() {
		W(s, "scroll", this._updateScrollData, { capture: !0 }), W(s, "scrollend", this._updateScrollData, { capture: !0 }), W(s, "resize", this._updateScrollData);
	}
	scrollElement() {
		if (!this._instance.config.scroll_root_selector) return s?.document.documentElement;
		for (var e of D(this._instance.config.scroll_root_selector) ? this._instance.config.scroll_root_selector : [this._instance.config.scroll_root_selector]) {
			var t = s?.document.querySelector(e);
			if (t) return t;
		}
	}
	scrollY() {
		if (this._instance.config.scroll_root_selector) {
			var e = this.scrollElement();
			return e && e.scrollTop || 0;
		}
		return s && (s.scrollY || s.pageYOffset || s.document.documentElement.scrollTop) || 0;
	}
	scrollX() {
		if (this._instance.config.scroll_root_selector) {
			var e = this.scrollElement();
			return e && e.scrollLeft || 0;
		}
		return s && (s.scrollX || s.pageXOffset || s.document.documentElement.scrollLeft) || 0;
	}
}, Oi = (e) => xr(e?.config.mask_personal_data_properties, e?.config.custom_personal_data_properties), ki = class {
	constructor(e, t, n, r) {
		this._onSessionIdCallback = (e) => {
			var t = this._getStored();
			if (!t || t.sessionId !== e) {
				var n = {
					sessionId: e,
					props: this._sessionSourceParamGenerator(this._instance)
				};
				this._persistence.register({ [Sn]: n });
			}
		}, this._instance = e, this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = r || Oi, this._sessionIdManager.onSessionId(this._onSessionIdCallback);
	}
	_getStored() {
		return this._persistence.props[Sn];
	}
	getSetOnceProps() {
		var e = this._getStored()?.props;
		return e ? "r" in e ? Sr(e) : {
			$referring_domain: e.referringDomain,
			$pathname: e.initialPathName,
			utm_source: e.utm_source,
			utm_campaign: e.utm_campaign,
			utm_medium: e.utm_medium,
			utm_content: e.utm_content,
			utm_term: e.utm_term
		} : {};
	}
	getSessionProps() {
		var e = {};
		return H(Gt(this.getSetOnceProps()), ((t, n) => {
			n === "$current_url" && (n = "url"), e["$session_entry_" + te(n)] = t;
		})), e;
	}
}, Ai = class {
	constructor() {
		this._events = {}, this._events = {};
	}
	on(e, t) {
		return this._events[e] || (this._events[e] = []), this._events[e].push(t), () => {
			this._events[e] = this._events[e].filter(((e) => e !== t));
		};
	}
	emit(e, t) {
		for (var n of this._events[e] || []) n(t);
		for (var r of this._events["*"] || []) r(e, t);
	}
}, ji = V("[SessionId]"), Mi = class {
	on(e, t) {
		return this._eventEmitter.on(e, t);
	}
	constructor(e, t, n) {
		var r;
		if (this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._eventEmitter = new Ai(), this._sessionHasBeenIdleTooLong = (e, t) => !(!I(e) || !I(t)) && Math.abs(e - t) > this.sessionTimeoutMs, !e.persistence) throw Error("SessionIdManager requires a PostHogPersistence instance");
		if (e.config.cookieless_mode === "always") throw Error("SessionIdManager cannot be used with cookieless_mode=\"always\"");
		this._config = e.config, this._persistence = e.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = t || Ln, this._windowIdGenerator = n || Ln;
		var i = this._config.persistence_name || this._config.token;
		if (this._sessionTimeoutMs = 1e3 * fe(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, ji.createLogger("session_idle_timeout_seconds"), 1800), e.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + i + "_window_id", this._primary_window_exists_storage_key = "ph_" + i + "_primary_window_exists", this._canUseSessionStorage()) {
			var a = q._parse(this._window_id_storage_key), o = q._parse(this._primary_window_exists_storage_key);
			a && !o ? this._windowId = a : q._remove(this._window_id_storage_key), q._set(this._primary_window_exists_storage_key, !0);
		}
		if ((r = this._config.bootstrap) != null && r.sessionID) try {
			var s = ((e) => {
				var t = e.replace(/-/g, "");
				if (t.length !== 32) throw Error("Not a valid UUID");
				if (t[12] !== "7") throw Error("Not a UUIDv7");
				return parseInt(t.substring(0, 12), 16);
			})(this._config.bootstrap.sessionID);
			this._setSessionId(this._config.bootstrap.sessionID, (/* @__PURE__ */ new Date()).getTime(), s);
		} catch (e) {
			ji.error("Invalid sessionID in bootstrap", e);
		}
		this._listenToReloadWindow();
	}
	get sessionTimeoutMs() {
		return this._sessionTimeoutMs;
	}
	onSessionId(e) {
		return j(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId), () => {
			this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter(((t) => t !== e));
		};
	}
	_canUseSessionStorage() {
		return this._config.persistence !== "memory" && !this._persistence._disabled && q._is_supported();
	}
	_setWindowId(e) {
		e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && q._set(this._window_id_storage_key, e));
	}
	_getWindowId() {
		return this._windowId ? this._windowId : this._canUseSessionStorage() ? q._parse(this._window_id_storage_key) : null;
	}
	_setSessionId(e, t, n) {
		e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this._sessionId = e, this._persistence.register({ [dn]: [
			t,
			e,
			n
		] }));
	}
	_getSessionId() {
		var e = this._persistence.props[dn];
		return D(e) && e.length === 2 && e.push(e[0]), e || [
			0,
			null,
			0
		];
	}
	resetSessionId() {
		this._setSessionId(null, null, null);
	}
	destroy() {
		clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && s && (s.removeEventListener("beforeunload", this._beforeUnloadListener, { capture: !1 }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = [];
	}
	_listenToReloadWindow() {
		this._beforeUnloadListener = () => {
			this._canUseSessionStorage() && q._remove(this._primary_window_exists_storage_key);
		}, W(s, "beforeunload", this._beforeUnloadListener, { capture: !1 });
	}
	checkAndGetSessionAndWindowId(e, t) {
		if (e === void 0 && (e = !1), t === void 0 && (t = null), this._config.cookieless_mode === "always") throw Error("checkAndGetSessionAndWindowId should not be called with cookieless_mode=\"always\"");
		var n = t || (/* @__PURE__ */ new Date()).getTime(), [r, i, a] = this._getSessionId(), o = this._getWindowId(), s = I(a) && Math.abs(n - a) > 864e5, c = !1, l = !i, u = !l && !e && this._sessionHasBeenIdleTooLong(n, r);
		l || u || s ? (i = this._sessionIdGenerator(), o = this._windowIdGenerator(), ji.info("new session ID generated", {
			sessionId: i,
			windowId: o,
			changeReason: {
				noSessionId: l,
				activityTimeout: u,
				sessionPastMaximumLength: s
			}
		}), a = n, c = !0) : o || (o = this._windowIdGenerator(), c = !0);
		var d = I(r) && e && !s ? r : n, f = I(a) ? a : (/* @__PURE__ */ new Date()).getTime();
		return this._setWindowId(o), this._setSessionId(i, d, f), e || this._resetIdleTimer(), c && this._sessionIdChangedHandlers.forEach(((e) => e(i, o, c ? {
			noSessionId: l,
			activityTimeout: u,
			sessionPastMaximumLength: s
		} : void 0))), {
			sessionId: i,
			windowId: o,
			sessionStartTimestamp: f,
			changeReason: c ? {
				noSessionId: l,
				activityTimeout: u,
				sessionPastMaximumLength: s
			} : void 0,
			lastActivityTimestamp: r
		};
	}
	_resetIdleTimer() {
		clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
			var [e] = this._getSessionId();
			if (this._sessionHasBeenIdleTooLong((/* @__PURE__ */ new Date()).getTime(), e)) {
				var t = this._sessionId;
				this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", { idleSessionId: t });
			}
		}), 1.1 * this.sessionTimeoutMs);
	}
}, Ni = function(e, t) {
	if (!e) return !1;
	var n = e.userAgent;
	if (n && x(n, t)) return !0;
	try {
		var r = e?.userAgentData;
		if (r != null && r.brands && r.brands.some(((e) => x(e?.brand, t)))) return !0;
	} catch {}
	return !!e.webdriver;
}, Pi = function(e, t) {
	if (!function(e) {
		try {
			new RegExp(e);
		} catch {
			return !1;
		}
		return !0;
	}(t)) return !1;
	try {
		return new RegExp(t).test(e);
	} catch {
		return !1;
	}
};
function Fi(e, t, n) {
	return bi({
		distinct_id: e,
		userPropertiesToSet: t,
		userPropertiesToSetOnce: n
	});
}
var Ii = {
	exact: (e, t) => t.some(((t) => e.some(((e) => t === e)))),
	is_not: (e, t) => t.every(((t) => e.every(((e) => t !== e)))),
	regex: (e, t) => t.some(((t) => e.some(((e) => Pi(t, e))))),
	not_regex: (e, t) => t.every(((t) => e.every(((e) => !Pi(t, e))))),
	icontains: (e, t) => t.map(Li).some(((t) => e.map(Li).some(((e) => t.includes(e))))),
	not_icontains: (e, t) => t.map(Li).every(((t) => e.map(Li).every(((e) => !t.includes(e))))),
	gt: (e, t) => t.some(((t) => {
		var n = parseFloat(t);
		return !isNaN(n) && e.some(((e) => n > parseFloat(e)));
	})),
	lt: (e, t) => t.some(((t) => {
		var n = parseFloat(t);
		return !isNaN(n) && e.some(((e) => n < parseFloat(e)));
	}))
}, Li = (e) => e.toLowerCase();
function Ri(e, t) {
	return !e || Object.entries(e).every(((e) => {
		var [n, r] = e, i = t?.[n];
		if (j(i) || N(i)) return !1;
		var a = [String(i)], o = Ii[r.operator];
		return !!o && o(r.values, a);
	}));
}
var zi = function(e) {
	return e.US = "us", e.EU = "eu", e.CUSTOM = "custom", e;
}({}), Bi = "i.posthog.com", Vi = class {
	constructor(e) {
		this._regionCache = {}, this.instance = e;
	}
	get apiHost() {
		var e = this.instance.config.api_host.trim().replace(/\/$/, "");
		return e === "https://app.posthog.com" ? "https://us.i.posthog.com" : e;
	}
	get flagsApiHost() {
		var e = this.instance.config.flags_api_host;
		return e ? e.trim().replace(/\/$/, "") : this.apiHost;
	}
	get uiHost() {
		var e = this.instance.config.ui_host?.replace(/\/$/, "");
		return e ||= this.apiHost.replace("." + Bi, ".posthog.com"), e === "https://app.posthog.com" ? "https://us.posthog.com" : e;
	}
	get region() {
		return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = zi.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = zi.EU : this._regionCache[this.apiHost] = zi.CUSTOM), this._regionCache[this.apiHost];
	}
	endpointFor(e, t) {
		if (t === void 0 && (t = ""), t &&= t[0] === "/" ? t : "/" + t, e === "ui") return this.uiHost + t;
		if (e === "flags") return this.flagsApiHost + t;
		if (this.region === zi.CUSTOM) return this.apiHost + t;
		var n = Bi + t;
		switch (e) {
			case "assets": return "https://" + this.region + "-assets." + n;
			case "api": return "https://" + this.region + "." + n;
		}
	}
}, Z = V("[Surveys]"), Hi = "seenSurvey_", Ui = (e, t) => {
	var n = "$survey_" + t + "/" + e.id;
	return e.current_iteration && e.current_iteration > 0 && (n = "$survey_" + t + "/" + e.id + "/" + e.current_iteration), n;
}, Wi = (e) => ((e, t) => {
	var n = "" + e + t.id;
	return t.current_iteration && t.current_iteration > 0 && (n = "" + e + t.id + "_" + t.current_iteration), n;
})(Hi, e), Gi = [
	kr.Popover,
	kr.Widget,
	kr.API
], Ki = {
	ignoreConditions: !1,
	ignoreDelay: !1,
	displayType: Mr.Popover
}, qi = V("[PostHog ExternalIntegrations]"), Ji = {
	intercom: "intercom-integration",
	crispChat: "crisp-chat-integration"
}, Yi = class {
	constructor(e) {
		this._instance = e;
	}
	_loadScript(e, t) {
		var n;
		(n = y.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, e, ((e) => {
			if (e) return qi.error("failed to load script", e);
			t();
		}));
	}
	startIfEnabledOrStop() {
		var e = this, t = function(t) {
			var n, i, a;
			(!r || (n = y.__PosthogExtensions__) != null && (n = n.integrations) != null && n[t] || e._loadScript(Ji[t], (() => {
				var n;
				(n = y.__PosthogExtensions__) == null || (n = n.integrations) == null || (n = n[t]) == null || n.start(e._instance);
			})), !r && (i = y.__PosthogExtensions__) != null && (i = i.integrations) != null && i[t]) && ((a = y.__PosthogExtensions__) == null || (a = a.integrations) == null || (a = a[t]) == null || a.stop());
		};
		for (var [n, r] of Object.entries((i = this._instance.config.integrations) ?? {})) {
			var i;
			t(n);
		}
	}
}, Xi = {}, Zi = 0, Qi = () => {}, $i = "posthog", ea = !vi && v?.indexOf("MSIE") === -1 && v?.indexOf("Mozilla") === -1, ta = (e) => {
	var t;
	return i({
		api_host: "https://us.i.posthog.com",
		flags_api_host: null,
		ui_host: null,
		token: "",
		autocapture: !0,
		cross_subdomain_cookie: Jt(p?.location),
		persistence: "localStorage+cookie",
		persistence_name: "",
		cookie_persisted_properties: [],
		loaded: Qi,
		save_campaign_params: !0,
		custom_campaign_params: [],
		custom_blocked_useragents: [],
		save_referrer: !0,
		capture_pageleave: "if_capture_pageview",
		defaults: e ?? "unset",
		__preview_deferred_init_extensions: !1,
		debug: m && M(m?.search) && m.search.indexOf("__posthog_debug=true") !== -1 || !1,
		cookie_expiration: 365,
		upgrade: !1,
		disable_session_recording: !1,
		disable_persistence: !1,
		disable_web_experiments: !0,
		disable_surveys: !1,
		disable_surveys_automatic_display: !1,
		disable_conversations: !1,
		disable_product_tours: !1,
		disable_external_dependency_loading: !1,
		enable_recording_console_log: void 0,
		secure_cookie: (s == null || (t = s.location) == null ? void 0 : t.protocol) === "https:",
		ip: !1,
		opt_out_capturing_by_default: !1,
		opt_out_persistence_by_default: !1,
		opt_out_useragent_filter: !1,
		opt_out_capturing_persistence_type: "localStorage",
		consent_persistence_name: null,
		opt_out_capturing_cookie_prefix: null,
		opt_in_site_apps: !1,
		property_denylist: [],
		respect_dnt: !1,
		sanitize_properties: null,
		request_headers: {},
		request_batching: !0,
		properties_string_max_length: 65535,
		mask_all_element_attributes: !1,
		mask_all_text: !1,
		mask_personal_data_properties: !1,
		custom_personal_data_properties: [],
		advanced_disable_flags: !1,
		advanced_disable_decide: !1,
		advanced_disable_feature_flags: !1,
		advanced_disable_feature_flags_on_first_load: !1,
		advanced_only_evaluate_survey_feature_flags: !1,
		advanced_enable_surveys: !1,
		advanced_disable_toolbar_metrics: !1,
		feature_flag_request_timeout_ms: 3e3,
		surveys_request_timeout_ms: 1e4,
		on_request_error: (e) => {
			var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
			B.error(t);
		},
		get_device_id: (e) => e,
		capture_performance: void 0,
		name: "posthog",
		bootstrap: {},
		disable_compression: !1,
		session_idle_timeout_seconds: 1800,
		person_profiles: "identified_only",
		before_send: void 0,
		request_queue_config: { flush_interval_ms: Ci },
		error_tracking: {},
		_onCapture: Qi,
		__preview_eager_load_replay: !1
	}, ((e) => ({
		rageclick: !(e && e >= "2025-11-30") || { content_ignorelist: !0 },
		capture_pageview: !(e && e >= "2025-05-24") || "history_change",
		session_recording: e && e >= "2025-11-30" ? { strictMinimumDuration: !0 } : {},
		external_scripts_inject_target: e && e >= "2026-01-30" ? "head" : "body",
		internal_or_test_user_hostname: e && e >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0
	}))(e));
}, na = (e) => {
	var t = {};
	j(e.process_person) || (t.person_profiles = e.process_person), j(e.xhr_headers) || (t.request_headers = e.xhr_headers), j(e.cookie_name) || (t.persistence_name = e.cookie_name), j(e.disable_cookie) || (t.disable_persistence = e.disable_cookie), j(e.store_google) || (t.save_campaign_params = e.store_google), j(e.verbose) || (t.debug = e.verbose);
	var n = U({}, t, e);
	return D(e.property_blacklist) && (j(e.property_denylist) ? n.property_denylist = e.property_blacklist : D(e.property_denylist) ? n.property_denylist = [...e.property_blacklist, ...e.property_denylist] : B.error("Invalid value for property_denylist config: " + e.property_denylist)), n;
}, ra = class {
	constructor() {
		this.__forceAllowLocalhost = !1;
	}
	get _forceAllowLocalhost() {
		return this.__forceAllowLocalhost;
	}
	set _forceAllowLocalhost(e) {
		B.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e;
	}
}, ia = class e {
	_replaceExtension(e, t) {
		if (e) {
			var n = this._extensions.indexOf(e);
			n !== -1 && this._extensions.splice(n, 1);
		}
		return this._extensions.push(t), t.initialize == null || t.initialize(), t;
	}
	get decideEndpointWasHit() {
		var e;
		return (e = this.featureFlags?.hasLoadedFlags) != null && e;
	}
	get flagsEndpointWasHit() {
		var e;
		return (e = this.featureFlags?.hasLoadedFlags) != null && e;
	}
	constructor() {
		this.webPerformance = new ra(), this._personProcessingSetOncePropertiesSent = !1, this.version = o.LIB_VERSION, this._internalEventEmitter = new Ai(), this._extensions = [], this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = ta(), this.SentryIntegration = ir, this.sentryIntegration = (e) => function(e, t) {
			var n = rr(e, t);
			return {
				name: nr,
				processEvent: (e) => n(e)
			};
		}(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new Di(this), this.pageViewManager = new ar(this), this.rateLimiter = new Ir(this), this.requestRouter = new Vi(this), this.consent = new Yn(this), this.externalIntegrations = new Yi(this);
		var t = e.__defaultExtensionClasses ?? {};
		this.featureFlags = t.featureFlags && new t.featureFlags(this), this.toolbar = t.toolbar && new t.toolbar(this), this.surveys = t.surveys && new t.surveys(this), this.conversations = t.conversations && new t.conversations(this), this.logs = t.logs && new t.logs(this), this.experiments = t.experiments && new t.experiments(this), this.exceptions = t.exceptions && new t.exceptions(this), this.people = {
			set: (e, t, n) => {
				var r = M(e) ? { [e]: t } : e;
				this.setPersonProperties(r), n?.({});
			},
			set_once: (e, t, n) => {
				var r = M(e) ? { [e]: t } : e;
				this.setPersonProperties(void 0, r), n?.({});
			}
		}, this.on("eventCaptured", ((e) => B.info("send \"" + e?.event + "\"", e)));
	}
	init(t, n, r) {
		if (r && r !== $i) {
			var i = Xi[r] ?? new e();
			return i._init(t, n, r), Xi[r] = i, Xi[$i][r] = i, i;
		}
		return this._init(t, n, r);
	}
	_init(e, t, n) {
		if (t === void 0 && (t = {}), j(e) || re(e)) return B.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
		if (this.__loaded) return console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
		this.__loaded = !0, this.config = {}, t.debug = this._checkLocalStorageForDebug(t.debug), this._originalUserConfig = t, this._triggered_notifs = [], t.person_profiles ? this._initialPersonProfilesConfig = t.person_profiles : t.process_person && (this._initialPersonProfilesConfig = t.process_person), this.set_config(U({}, ta(t.defaults), na(t), {
			name: n,
			token: e
		})), this.config.on_xhr_error && B.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = t.disable_compression ? void 0 : zr.GZipJS;
		var r = this._is_persistence_disabled();
		this.persistence = new Dr(this.config, r), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new Dr(i({}, this.config, { persistence: "sessionStorage" }), r);
		var a = i({}, this.persistence.props), c = i({}, this.sessionPersistence.props);
		this.register({ $initialization_time: (/* @__PURE__ */ new Date()).toISOString() }), this._requestQueue = new wi(((e) => this._send_retriable_request(e)), this.config.request_queue_config), this._retryQueue = new Ei(this), this.__request_queue = [];
		var l = this.config.cookieless_mode === "always" || this.config.cookieless_mode === "on_reject" && this.consent.isExplicitlyOptedOut();
		if (l || (this.sessionManager = new Mi(this), this.sessionPropsManager = new ki(this, this.sessionManager, this.persistence)), this.config.__preview_deferred_init_extensions ? (B.info("Deferring extension initialization to improve startup performance"), setTimeout((() => {
			this._initExtensions(l);
		}), 0)) : (B.info("Initializing extensions synchronously"), this._initExtensions(l)), o.DEBUG = o.DEBUG || this.config.debug, o.DEBUG && B.info("Starting in debug mode", {
			this: this,
			config: t,
			thisC: i({}, this.config),
			p: a,
			s: c
		}), t.bootstrap?.distinctID !== void 0) {
			var u, d, f = this.config.get_device_id(Ln()), p = (u = t.bootstrap) != null && u.isIdentifiedID ? f : t.bootstrap.distinctID;
			this.persistence.set_property(G, (d = t.bootstrap) != null && d.isIdentifiedID ? "identified" : "anonymous"), this.register({
				distinct_id: t.bootstrap.distinctID,
				$device_id: p
			});
		}
		if (l) this.register_once({
			distinct_id: kn,
			$device_id: null
		}, "");
		else if (!this.get_distinct_id()) {
			var m = this.config.get_device_id(Ln());
			this.register_once({
				distinct_id: m,
				$device_id: m
			}, ""), this.persistence.set_property(G, "anonymous");
		}
		return W(s, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), { passive: !1 }), t.segment ? tr(this, (() => this._loaded())) : this._loaded(), O(this.config._onCapture) && this.config._onCapture !== Qi && (B.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", ((e) => this.config._onCapture(e.event, e)))), this.config.ip && B.warn("The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or \"Discard IP data\" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information."), this;
	}
	_initExtensions(t) {
		var n = performance.now(), r = i({}, e.__defaultExtensionClasses, this.config.__extensionClasses), a = [];
		r.featureFlags && this._extensions.push(this.featureFlags = this.featureFlags ?? new r.featureFlags(this)), r.exceptions && this._extensions.push(this.exceptions = this.exceptions ?? new r.exceptions(this)), (r.historyAutocapture && this._extensions.push(this.historyAutocapture = new r.historyAutocapture(this)), r.tracingHeaders && this._extensions.push(new r.tracingHeaders(this)), r.siteApps && this._extensions.push(this.siteApps = new r.siteApps(this)), r.sessionRecording && !t && this._extensions.push(this.sessionRecording = new r.sessionRecording(this)), this.config.disable_scroll_properties || a.push((() => {
			this.scrollManager.startMeasuringScrollPosition();
		})), r.autocapture && this._extensions.push(this.autocapture = new r.autocapture(this)), r.surveys) && this._extensions.push(this.surveys = this.surveys ?? new r.surveys(this)), r.logs && this._extensions.push(this.logs = this.logs ?? new r.logs(this)), r.conversations && this._extensions.push(this.conversations = this.conversations ?? new r.conversations(this)), (r.productTours && this._extensions.push(this.productTours = new r.productTours(this)), r.heatmaps && this._extensions.push(this.heatmaps = new r.heatmaps(this)), r.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new r.webVitalsAutocapture(this)), r.exceptionObserver && this._extensions.push(this.exceptionObserver = new r.exceptionObserver(this)), r.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new r.deadClicksAutocapture(this, Qn)), r.toolbar) && this._extensions.push(this.toolbar = this.toolbar ?? new r.toolbar(this)), r.experiments && this._extensions.push(this.experiments = this.experiments ?? new r.experiments(this)), this._extensions.forEach(((e) => {
			e.initialize && a.push((() => {
				e.initialize == null || e.initialize();
			}));
		})), a.push((() => {
			if (this._pendingRemoteConfig) {
				var e = this._pendingRemoteConfig;
				this._pendingRemoteConfig = void 0, this._onRemoteConfig(e);
			}
		})), this._processInitTaskQueue(a, n);
	}
	_processInitTaskQueue(e, t) {
		for (; e.length > 0;) {
			if (this.config.__preview_deferred_init_extensions && performance.now() - t >= 30 && e.length > 0) return void setTimeout((() => {
				this._processInitTaskQueue(e, t);
			}), 0);
			var n = e.shift();
			if (n) try {
				n();
			} catch (e) {
				B.error("Error initializing extension:", e);
			}
		}
		var r = Math.round(performance.now() - t);
		this.register_for_session({
			$sdk_debug_extensions_init_method: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
			$sdk_debug_extensions_init_time_ms: r
		}), this.config.__preview_deferred_init_extensions && B.info("PostHog extensions initialized (" + r + "ms)");
	}
	_onRemoteConfig(e) {
		var t;
		if (!p || !p.body) return B.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
			this._onRemoteConfig(e);
		}), 500);
		this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = e), this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = S(e.supportedCompression, zr.GZipJS) ? zr.GZipJS : S(e.supportedCompression, zr.Base64) ? zr.Base64 : void 0), (t = e.analytics) != null && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), this.set_config({ person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : "identified_only" }), this._extensions.forEach(((t) => t.onRemoteConfig == null ? void 0 : t.onRemoteConfig(e)));
	}
	_loaded() {
		try {
			this.config.loaded(this);
		} catch (e) {
			B.critical("`loaded` function failed", e);
		}
		if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && m != null && m.hostname) {
			var e = m.hostname, t = this.config.internal_or_test_user_hostname;
			(typeof t == "string" ? e === t : t.test(e)) && this.setInternalOrTestUser();
		}
		this.config.capture_pageview && setTimeout((() => {
			(this.consent.isOptedIn() || this.config.cookieless_mode === "always") && this._captureInitialPageview();
		}), 1), this._remoteConfigLoader = new Rr(this), this._remoteConfigLoader.load();
	}
	_start_queue_if_opted_in() {
		var e;
		this.is_capturing() && this.config.request_batching && ((e = this._requestQueue) == null || e.enable());
	}
	_dom_loaded() {
		this.is_capturing() && Bt(this.__request_queue, ((e) => this._send_retriable_request(e))), this.__request_queue = [], this._start_queue_if_opted_in();
	}
	_handle_unload() {
		var e, t, n;
		(e = this.surveys) == null || e.handlePageUnload(), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), (t = this._requestQueue) == null || t.unload(), (n = this._retryQueue) == null || n.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, { transport: "sendBeacon" });
	}
	_send_request(e) {
		this.__loaded && (ea ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = yi(e.url, { ip: this.config.ip ? 1 : 0 }), e.headers = i({}, this.config.request_headers, e.headers), e.compression = e.compression === "best-available" ? this.compression : e.compression, e.disableXHRCredentials = this.config.__preview_disable_xhr_credentials, this.config.__preview_disable_beacon && (e.disableTransport = ["sendBeacon"]), e.fetchOptions = e.fetchOptions || this.config.fetch_options, ((e) => {
			var t = i({}, e);
			t.timeout = t.timeout || 6e4, t.url = yi(t.url, {
				_: (/* @__PURE__ */ new Date()).getTime().toString(),
				ver: o.LIB_VERSION,
				compression: t.compression
			});
			var n = t.transport ?? "fetch", r = Si.filter(((e) => !t.disableTransport || !e.transport || !t.disableTransport.includes(e.transport))), a = Yt(r, ((e) => e.transport === n))?.method ?? r[0].method;
			if (!a) throw Error("No available transport method");
			a(t);
		})(i({}, e, { callback: (t) => {
			var n, r;
			(this.rateLimiter.checkForLimiting(t), t.statusCode >= 400) && ((n = (r = this.config).on_request_error) == null || n.call(r, t)), e.callback == null || e.callback(t);
		} }))));
	}
	_send_retriable_request(e) {
		this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e);
	}
	_execute_array(e) {
		Zi++;
		try {
			var t, n = [], r = [], i = [];
			Bt(e, ((e) => {
				e && (t = e[0], D(t) ? i.push(e) : O(e) ? e.call(this) : D(e) && t === "alias" ? n.push(e) : D(e) && t.indexOf("capture") !== -1 && O(this[t]) ? i.push(e) : r.push(e));
			}));
			var a = function(e, t) {
				Bt(e, (function(e) {
					if (D(e[0])) {
						var n = t;
						H(e, (function(e) {
							n = n[e[0]].apply(n, e.slice(1));
						}));
					} else this[e[0]].apply(this, e.slice(1));
				}), t);
			};
			a(n, this), a(r, this), a(i, this);
		} finally {
			Zi--;
		}
	}
	push(t) {
		if (Zi > 0 && D(t) && M(t[0])) {
			var n = e.prototype[t[0]];
			O(n) && n.apply(this, t.slice(1));
		} else this._execute_array([t]);
	}
	capture(e, t, n) {
		if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
			if (this.is_capturing()) if (!j(e) && M(e)) {
				var r = !this.config.opt_out_useragent_filter && this._is_bot();
				if (!(r && !this.config.__preview_capture_bot_pageviews)) {
					var a = n != null && n.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
					if (a == null || !a.isRateLimited) {
						t != null && t.$current_url && !M(t?.$current_url) && (B.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), t == null || delete t.$current_url), e !== "$exception" || n != null && n._originatedFromCaptureException || B.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
						var o = /* @__PURE__ */ new Date(), s = n?.timestamp || o, c = Ln(), l = {
							uuid: c,
							event: e,
							properties: this.calculateEventProperties(e, t || {}, s, c)
						};
						e === "$pageview" && this.config.__preview_capture_bot_pageviews && r && (l.event = "$bot_pageview", l.properties.$browser_type = "bot"), a && (l.properties.$lib_rate_limit_remaining_tokens = a.remainingTokens), n != null && n.$set && (l.$set = n?.$set);
						var u, d = e !== "$groupidentify", f = this._calculate_set_once_properties(n?.$set_once, d);
						if (f && (l.$set_once = f), (l = Kt(l, n != null && n._noTruncate ? null : this.config.properties_string_max_length)).timestamp = s, j(n?.timestamp) || (l.properties.$event_time_override_provided = !0, l.properties.$event_time_override_system_time = o), e === Ar.DISMISSED || e === Ar.SENT) {
							var p = t?.[jr.SURVEY_ID], m = t?.[jr.SURVEY_ITERATION];
							u = {
								id: p,
								current_iteration: m
							}, localStorage.getItem(Wi(u)) || localStorage.setItem(Wi(u), "true"), l.$set = i({}, l.$set, { [Ui({
								id: p,
								current_iteration: m
							}, e === Ar.SENT ? "responded" : "dismissed")]: !0 });
						} else e === Ar.SHOWN && (l.$set = i({}, l.$set, { [jr.SURVEY_LAST_SEEN_DATE]: (/* @__PURE__ */ new Date()).toISOString() }));
						if (e === Nr.SHOWN) {
							var h = t?.[Pr.TOUR_TYPE];
							h && (l.$set = i({}, l.$set, { [Pr.TOUR_LAST_SEEN_DATE + "/" + h]: (/* @__PURE__ */ new Date()).toISOString() }));
						}
						var g = i({}, l.properties.$set, l.$set);
						if (A(g) || this.setPersonPropertiesForFlags(g), !P(this.config.before_send)) {
							var _ = this._runBeforeSend(l);
							if (!_) return;
							l = _;
						}
						this._internalEventEmitter.emit("eventCaptured", l);
						var v = {
							method: "POST",
							url: n?._url ?? this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
							data: l,
							compression: "best-available",
							batchKey: n?._batchKey
						};
						return !this.config.request_batching || n && (n == null || !n._batchKey) || n != null && n.send_instantly ? this._send_retriable_request(v) : this._requestQueue.enqueue(v), l;
					}
					B.critical("This capture call is ignored due to client rate limiting.");
				}
			} else B.error("No event name provided to posthog.capture");
		} else B.uninitializedWarning("posthog.capture");
	}
	_addCaptureHook(e) {
		return this.on("eventCaptured", ((t) => e(t.event, t)));
	}
	calculateEventProperties(e, t, n, r, a) {
		if (n ||= /* @__PURE__ */ new Date(), !this.persistence || !this.sessionPersistence) return t;
		var o = a ? void 0 : this.persistence.remove_event_timer(e), s = i({}, t);
		if (s.token = this.config.token, s.$config_defaults = this.config.defaults, (this.config.cookieless_mode == "always" || this.config.cookieless_mode == "on_reject" && this.consent.isExplicitlyOptedOut()) && (s.$cookieless_mode = !0), e === "$snapshot") {
			var c = i({}, this.persistence.properties(), this.sessionPersistence.properties());
			return s.distinct_id = c.distinct_id, (!M(s.distinct_id) && !F(s.distinct_id) || re(s.distinct_id)) && B.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), s;
		}
		var l, u = Tr(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties);
		if (this.sessionManager) {
			var { sessionId: d, windowId: f } = this.sessionManager.checkAndGetSessionAndWindowId(a, n.getTime());
			s.$session_id = d, s.$window_id = f;
		}
		this.sessionPropsManager && U(s, this.sessionPropsManager.getSessionProps());
		try {
			this.sessionRecording && U(s, this.sessionRecording.sdkDebugProperties), s.$sdk_debug_retry_queue_size = this._retryQueue?.length;
		} catch (e) {
			s.$sdk_debug_error_capturing_properties = String(e);
		}
		if (this.requestRouter.region === zi.CUSTOM && (s.$lib_custom_api_host = this.config.api_host), l = e !== "$pageview" || a ? e !== "$pageleave" || a ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(n) : this.pageViewManager.doPageView(n, r), s = U(s, l), e === "$pageview" && p && (s.title = p.title), !j(o)) {
			var m = n.getTime() - o;
			s.$duration = parseFloat((m / 1e3).toFixed(3));
		}
		v && this.config.opt_out_useragent_filter && (s.$browser_type = this._is_bot() ? "bot" : "browser"), (s = U({}, u, this.persistence.properties(), this.sessionPersistence.properties(), s)).$is_identified = this._isIdentified(), D(this.config.property_denylist) ? H(this.config.property_denylist, (function(e) {
			delete s[e];
		})) : B.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
		var h = this.config.sanitize_properties;
		h && (B.error("sanitize_properties is deprecated. Use before_send instead"), s = h(s, e));
		var g = this._hasPersonProcessing();
		return s.$process_person_profile = g, g && !a && this._requirePersonProcessing("_calculate_event_properties"), s;
	}
	_calculate_set_once_properties(e, t) {
		if (t === void 0 && (t = !0), !this.persistence || !this._hasPersonProcessing() || this._personProcessingSetOncePropertiesSent) return e;
		var n = U({}, this.persistence.get_initial_props(), this.sessionPropsManager?.getSetOnceProps() || {}, e || {}), r = this.config.sanitize_properties;
		return r && (B.error("sanitize_properties is deprecated. Use before_send instead"), n = r(n, "$set_once")), t && (this._personProcessingSetOncePropertiesSent = !0), A(n) ? void 0 : n;
	}
	register(e, t) {
		var n;
		(n = this.persistence) == null || n.register(e, t);
	}
	register_once(e, t, n) {
		var r;
		(r = this.persistence) == null || r.register_once(e, t, n);
	}
	register_for_session(e) {
		var t;
		(t = this.sessionPersistence) == null || t.register(e);
	}
	unregister(e) {
		var t;
		(t = this.persistence) == null || t.unregister(e);
	}
	unregister_for_session(e) {
		var t;
		(t = this.sessionPersistence) == null || t.unregister(e);
	}
	_register_single(e, t) {
		this.register({ [e]: t });
	}
	getFeatureFlag(e, t) {
		return this.featureFlags?.getFeatureFlag(e, t);
	}
	getFeatureFlagPayload(e) {
		return this.featureFlags?.getFeatureFlagPayload(e);
	}
	getFeatureFlagResult(e, t) {
		return this.featureFlags?.getFeatureFlagResult(e, t);
	}
	isFeatureEnabled(e, t) {
		return this.featureFlags?.isFeatureEnabled(e, t);
	}
	reloadFeatureFlags() {
		var e;
		(e = this.featureFlags) == null || e.reloadFeatureFlags();
	}
	updateFlags(e, t, n) {
		var r;
		(r = this.featureFlags) == null || r.updateFlags(e, t, n);
	}
	updateEarlyAccessFeatureEnrollment(e, t, n) {
		var r;
		(r = this.featureFlags) == null || r.updateEarlyAccessFeatureEnrollment(e, t, n);
	}
	getEarlyAccessFeatures(e, t, n) {
		return t === void 0 && (t = !1), this.featureFlags?.getEarlyAccessFeatures(e, t, n);
	}
	on(e, t) {
		return this._internalEventEmitter.on(e, t);
	}
	onFeatureFlags(e) {
		return this.featureFlags ? this.featureFlags.onFeatureFlags(e) : (e([], {}, { errorsLoading: !0 }), () => {});
	}
	onSurveysLoaded(e) {
		return this.surveys ? this.surveys.onSurveysLoaded(e) : (e([], {
			isLoaded: !1,
			error: "Surveys module not available"
		}), () => {});
	}
	onSessionId(e) {
		return this.sessionManager?.onSessionId(e) ?? (() => {});
	}
	getSurveys(e, t) {
		t === void 0 && (t = !1), this.surveys ? this.surveys.getSurveys(e, t) : e([], {
			isLoaded: !1,
			error: "Surveys module not available"
		});
	}
	getActiveMatchingSurveys(e, t) {
		t === void 0 && (t = !1), this.surveys ? this.surveys.getActiveMatchingSurveys(e, t) : e([], {
			isLoaded: !1,
			error: "Surveys module not available"
		});
	}
	renderSurvey(e, t) {
		var n;
		(n = this.surveys) == null || n.renderSurvey(e, t);
	}
	displaySurvey(e, t) {
		var n;
		t === void 0 && (t = Ki), (n = this.surveys) == null || n.displaySurvey(e, t);
	}
	cancelPendingSurvey(e) {
		var t;
		(t = this.surveys) == null || t.cancelPendingSurvey(e);
	}
	canRenderSurvey(e) {
		return this.surveys?.canRenderSurvey(e) ?? {
			visible: !1,
			disabledReason: "Surveys module not available"
		};
	}
	canRenderSurveyAsync(e, t) {
		return t === void 0 && (t = !1), this.surveys?.canRenderSurveyAsync(e, t) ?? Promise.resolve({
			visible: !1,
			disabledReason: "Surveys module not available"
		});
	}
	identify(e, t, n) {
		if (!this.__loaded || !this.persistence) return B.uninitializedWarning("posthog.identify");
		if (F(e) && (e = e.toString(), B.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e) if (["distinct_id", "distinctid"].includes(e.toLowerCase())) B.critical("The string \"" + e + "\" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.");
		else if (e !== kn) {
			if (this._requirePersonProcessing("posthog.identify")) {
				var r = this.get_distinct_id();
				if (this.register({ $user_id: e }), !this.get_property("$device_id")) {
					var a = r;
					this.register_once({
						$had_persisted_distinct_id: !0,
						$device_id: a
					}, "");
				}
				e !== r && e !== this.get_property(Qt) && (this.unregister(Qt), this.register({ distinct_id: e }));
				var o, s = (this.persistence.get_property(G) || "anonymous") === "anonymous";
				e !== r && s ? (this.persistence.set_property(G, "identified"), this.setPersonPropertiesForFlags(i({}, n || {}, t || {}), !1), this.capture("$identify", {
					distinct_id: e,
					$anon_distinct_id: r
				}, {
					$set: t || {},
					$set_once: n || {}
				}), this._cachedPersonProperties = Fi(e, t, n), (o = this.featureFlags) == null || o.setAnonymousDistinctId(r)) : (t || n) && this.setPersonProperties(t, n), e !== r && (this.reloadFeatureFlags(), this.unregister(yn));
			}
		} else B.critical("The string \"" + kn + "\" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.");
		else B.error("Unique user id has not been set in posthog.identify");
	}
	setPersonProperties(e, t) {
		if ((e || t) && this._requirePersonProcessing("posthog.setPersonProperties")) {
			var n = Fi(this.get_distinct_id(), e, t);
			this._cachedPersonProperties === n ? B.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.") : (this.setPersonPropertiesForFlags(i({}, t || {}, e || {})), this.capture("$set", {
				$set: e || {},
				$set_once: t || {}
			}), this._cachedPersonProperties = n);
		}
	}
	group(e, t, n) {
		if (e && t) {
			var r = this.getGroups();
			r[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({ $groups: i({}, r, { [e]: t }) }), n && (this.capture("$groupidentify", {
				$group_type: e,
				$group_key: t,
				$group_set: n
			}), this.setGroupPropertiesForFlags({ [e]: n })), r[e] === t || n || this.reloadFeatureFlags();
		} else B.error("posthog.group requires a group type and group key");
	}
	resetGroups() {
		this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
	}
	setPersonPropertiesForFlags(e, t) {
		var n;
		t === void 0 && (t = !0), (n = this.featureFlags) == null || n.setPersonPropertiesForFlags(e, t);
	}
	resetPersonPropertiesForFlags() {
		var e;
		(e = this.featureFlags) == null || e.resetPersonPropertiesForFlags();
	}
	setGroupPropertiesForFlags(e, t) {
		var n;
		t === void 0 && (t = !0), this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && ((n = this.featureFlags) == null || n.setGroupPropertiesForFlags(e, t));
	}
	resetGroupPropertiesForFlags(e) {
		var t;
		(t = this.featureFlags) == null || t.resetGroupPropertiesForFlags(e);
	}
	reset(e) {
		var t, n, r, i, a, o, s;
		if (B.info("reset"), !this.__loaded) return B.uninitializedWarning("posthog.reset");
		var c = this.get_property("$device_id");
		if (this.consent.reset(), (t = this.persistence) == null || t.clear(), (n = this.sessionPersistence) == null || n.clear(), (r = this.surveys) == null || r.reset(), (i = this._remoteConfigLoader) == null || i.stop(), (a = this.featureFlags) == null || a.reset(), (o = this.persistence) == null || o.set_property(G, "anonymous"), (s = this.sessionManager) == null || s.resetSessionId(), this._cachedPersonProperties = null, this.config.cookieless_mode === "always") this.register_once({
			distinct_id: kn,
			$device_id: null
		}, "");
		else {
			var l = this.config.get_device_id(Ln());
			this.register_once({
				distinct_id: l,
				$device_id: e ? l : c
			}, "");
		}
		this.register({ $last_posthog_reset: (/* @__PURE__ */ new Date()).toISOString() }, 1), this.reloadFeatureFlags();
	}
	get_distinct_id() {
		return this.get_property("distinct_id");
	}
	getGroups() {
		return this.get_property("$groups") || {};
	}
	get_session_id() {
		return this.sessionManager?.checkAndGetSessionAndWindowId(!0).sessionId ?? "";
	}
	get_session_replay_url(e) {
		if (!this.sessionManager) return "";
		var { sessionId: t, sessionStartTimestamp: n } = this.sessionManager.checkAndGetSessionAndWindowId(!0), r = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + t);
		if (e != null && e.withTimestamp && n) {
			var i = e.timestampLookBack ?? 10;
			if (!n) return r;
			r += "?t=" + Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - n) / 1e3) - i, 0);
		}
		return r;
	}
	alias(e, t) {
		return e === this.get_property(Zt) ? (B.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (j(t) && (t = this.get_distinct_id()), e === t ? (B.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1) : (this._register_single(Qt, e), this.capture("$create_alias", {
			alias: e,
			distinct_id: t
		}))) : void 0;
	}
	set_config(e) {
		var t = i({}, this.config);
		if (k(e)) {
			var n, r, a, s, c, l, u, d, f;
			U(this.config, na(e));
			var p = this._is_persistence_disabled();
			(n = this.persistence) == null || n.update_config(this.config, t, p), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new Dr(i({}, this.config, { persistence: "sessionStorage" }), p);
			var m = this._checkLocalStorageForDebug(this.config.debug);
			L(m) && (this.config.debug = m), L(this.config.debug) && (this.config.debug ? (o.DEBUG = !0, K._is_supported() && K._set("ph_debug", "true"), B.info("set_config", {
				config: e,
				oldConfig: t,
				newConfig: i({}, this.config)
			})) : (o.DEBUG = !1, K._is_supported() && K._remove("ph_debug"))), (r = this.exceptionObserver) == null || r.onConfigChange(), (a = this.sessionRecording) == null || a.startIfEnabledOrStop(), (s = this.autocapture) == null || s.startIfEnabled(), (c = this.heatmaps) == null || c.startIfEnabled(), (l = this.exceptionObserver) == null || l.startIfEnabledOrStop(), (u = this.deadClicksAutocapture) == null || u.startIfEnabledOrStop(), (d = this.surveys) == null || d.loadIfEnabled(), this._sync_opt_out_with_persistence(), (f = this.externalIntegrations) == null || f.startIfEnabledOrStop();
		}
	}
	startSessionRecording(e) {
		var t = !0 === e, n = {
			sampling: t || !(e == null || !e.sampling),
			linked_flag: t || !(e == null || !e.linked_flag),
			url_trigger: t || !(e == null || !e.url_trigger),
			event_trigger: t || !(e == null || !e.event_trigger)
		};
		if (Object.values(n).some(Boolean)) {
			var r, i, a, o, s;
			(r = this.sessionManager) == null || r.checkAndGetSessionAndWindowId(), n.sampling && ((i = this.sessionRecording) == null || i.overrideSampling()), n.linked_flag && ((a = this.sessionRecording) == null || a.overrideLinkedFlag()), n.url_trigger && ((o = this.sessionRecording) == null || o.overrideTrigger("url")), n.event_trigger && ((s = this.sessionRecording) == null || s.overrideTrigger("event"));
		}
		this.set_config({ disable_session_recording: !1 });
	}
	stopSessionRecording() {
		this.set_config({ disable_session_recording: !0 });
	}
	sessionRecordingStarted() {
		var e;
		return !((e = this.sessionRecording) == null || !e.started);
	}
	captureException(e, t) {
		if (this.exceptions) {
			var n = /* @__PURE__ */ Error("PostHog syntheticException"), r = this.exceptions.buildProperties(e, {
				handled: !0,
				syntheticException: n
			});
			return this.exceptions.sendExceptionEvent(i({}, r, t));
		}
	}
	startExceptionAutocapture(e) {
		this.set_config({ capture_exceptions: e == null || e });
	}
	stopExceptionAutocapture() {
		this.set_config({ capture_exceptions: !1 });
	}
	loadToolbar(e) {
		var t;
		return (t = this.toolbar?.loadToolbar(e)) != null && t;
	}
	get_property(e) {
		return this.persistence?.props[e];
	}
	getSessionProperty(e) {
		return this.sessionPersistence?.props[e];
	}
	toString() {
		var e = this.config.name ?? $i;
		return e !== $i && (e = $i + "." + e), e;
	}
	_isIdentified() {
		return this.persistence?.get_property(G) === "identified" || this.sessionPersistence?.get_property(G) === "identified";
	}
	_hasPersonProcessing() {
		var e, t;
		return !(this.config.person_profiles === "never" || this.config.person_profiles === "identified_only" && !this._isIdentified() && A(this.getGroups()) && ((e = this.persistence) == null || (e = e.props) == null || !e[Qt]) && ((t = this.persistence) == null || (t = t.props) == null || !t[Dn]));
	}
	_shouldCapturePageleave() {
		return !0 === this.config.capture_pageleave || this.config.capture_pageleave === "if_capture_pageview" && (!0 === this.config.capture_pageview || this.config.capture_pageview === "history_change");
	}
	createPersonProfile() {
		this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {});
	}
	setInternalOrTestUser() {
		this._requirePersonProcessing("posthog.setInternalOrTestUser") && this.setPersonProperties({ $internal_or_test_user: !0 });
	}
	_requirePersonProcessing(e) {
		return this.config.person_profiles === "never" ? (B.error(e + " was called, but process_person is set to \"never\". This call will be ignored."), !1) : (this._register_single(Dn, !0), !0);
	}
	_is_persistence_disabled() {
		if (this.config.cookieless_mode === "always") return !0;
		var e = this.consent.isOptedOut(), t = this.config.opt_out_persistence_by_default || this.config.cookieless_mode === "on_reject";
		return this.config.disable_persistence || e && !!t;
	}
	_sync_opt_out_with_persistence() {
		var e, t, n = this._is_persistence_disabled();
		return this.persistence?._disabled !== n && ((e = this.persistence) == null || e.set_disabled(n)), this.sessionPersistence?._disabled !== n && ((t = this.sessionPersistence) == null || t.set_disabled(n)), n;
	}
	opt_in_capturing(t) {
		var n;
		if (this.config.cookieless_mode !== "always") {
			if (this.config.cookieless_mode === "on_reject" && this.consent.isExplicitlyOptedOut()) {
				var r, i;
				this.reset(!0), (r = this.sessionManager) == null || r.destroy(), (i = this.pageViewManager) == null || i.destroy(), this.sessionManager = new Mi(this), this.pageViewManager = new ar(this), this.persistence && (this.sessionPropsManager = new ki(this, this.sessionManager, this.persistence));
				var a = this.config.__extensionClasses?.sessionRecording ?? e.__defaultExtensionClasses?.sessionRecording;
				a && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new a(this)));
			}
			var o;
			this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), (n = this.sessionRecording) == null || n.startIfEnabledOrStop(), this.config.cookieless_mode == "on_reject" && ((o = this.surveys) == null || o.loadIfEnabled()), (j(t?.captureEventName) || t != null && t.captureEventName) && this.capture(t?.captureEventName ?? "$opt_in", t?.captureProperties, { send_instantly: !0 }), this.config.capture_pageview && this._captureInitialPageview();
		} else B.warn("Consent opt in/out is not valid with cookieless_mode=\"always\" and will be ignored");
	}
	opt_out_capturing() {
		var e, t, n;
		this.config.cookieless_mode === "always" ? B.warn("Consent opt in/out is not valid with cookieless_mode=\"always\" and will be ignored") : (this.config.cookieless_mode === "on_reject" && this.consent.isOptedIn() && this.reset(!0), this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), this.config.cookieless_mode === "on_reject" && (this.register({
			distinct_id: kn,
			$device_id: null
		}), (e = this.sessionManager) == null || e.destroy(), (t = this.pageViewManager) == null || t.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, (n = this.sessionRecording) == null || n.stopRecording(), this.sessionRecording = void 0, this._captureInitialPageview()));
	}
	has_opted_in_capturing() {
		return this.consent.isOptedIn();
	}
	has_opted_out_capturing() {
		return this.consent.isOptedOut();
	}
	get_explicit_consent_status() {
		var e = this.consent.consent;
		return e === Jn.GRANTED ? "granted" : e === Jn.DENIED ? "denied" : "pending";
	}
	is_capturing() {
		return this.config.cookieless_mode === "always" || (this.config.cookieless_mode === "on_reject" ? this.consent.isExplicitlyOptedOut() || this.consent.isOptedIn() : !this.has_opted_out_capturing());
	}
	clear_opt_in_out_capturing() {
		this.consent.reset(), this._sync_opt_out_with_persistence();
	}
	_is_bot() {
		return f ? Ni(f, this.config.custom_blocked_useragents) : void 0;
	}
	_captureInitialPageview() {
		p && (p.visibilityState === "visible" ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture("$pageview", { title: p.title }, { send_instantly: !0 }), this._visibilityStateListener &&= (p.removeEventListener("visibilitychange", this._visibilityStateListener), null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), W(p, "visibilitychange", this._visibilityStateListener)));
	}
	debug(e) {
		!1 === e ? (s?.console.log("You've disabled debug mode."), this.set_config({ debug: !1 })) : (s?.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({ debug: !0 }));
	}
	_shouldDisableFlags() {
		var e, t, n, r, i, a, o, s = this._originalUserConfig || {};
		return "advanced_disable_flags" in s ? !!s.advanced_disable_flags : !1 === this.config.advanced_disable_flags ? !0 === this.config.advanced_disable_decide ? (B.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : (n = "advanced_disable_decide", r = !1, i = B, a = (t = "advanced_disable_flags") in (e = s) && !P(e[t]), o = n in e && !P(e[n]), a ? e[t] : o ? (i && i.warn("Config field '" + n + "' is deprecated. Please use '" + t + "' instead. The old field will be removed in a future major version."), e[n]) : r) : !!this.config.advanced_disable_flags;
	}
	_runBeforeSend(e) {
		if (P(this.config.before_send)) return e;
		var t = D(this.config.before_send) ? this.config.before_send : [this.config.before_send], n = e;
		for (var r of t) {
			if (n = r(n), P(n)) {
				var i = "Event '" + e.event + "' was rejected in beforeSend function";
				return ae(e.event) ? B.warn(i + ". This can cause unexpected behavior.") : B.info(i), null;
			}
			n.properties && !A(n.properties) || B.warn("Event '" + e.event + "' has no properties after beforeSend function, this is likely an error.");
		}
		return n;
	}
	getPageViewId() {
		return this.pageViewManager._currentPageview?.pageViewId;
	}
	captureTraceFeedback(e, t) {
		this.capture("$ai_feedback", {
			$ai_trace_id: String(e),
			$ai_feedback_text: t
		});
	}
	captureTraceMetric(e, t, n) {
		this.capture("$ai_metric", {
			$ai_trace_id: String(e),
			$ai_metric_name: t,
			$ai_metric_value: String(n)
		});
	}
	_checkLocalStorageForDebug(e) {
		var t = L(e) && !e, n = K._is_supported() && K._get("ph_debug") === "true";
		return !t && (!!n || e);
	}
};
ia.__defaultExtensionClasses = {}, function(e, t) {
	for (var n = 0; n < t.length; n++) e.prototype[t[n]] = Wt(e.prototype[t[n]]);
}(ia, ["identify"]);
function aa(e) {
	return e instanceof Element && (e.id === On || !(e.closest == null || !e.closest(".toolbar-global-fade-container")));
}
function oa(e) {
	return !!e && e.nodeType === 1;
}
function sa(e, t) {
	return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}
function ca(e) {
	return !!e && e.nodeType === 3;
}
function la(e) {
	return !!e && e.nodeType === 11;
}
function ua(e) {
	return e ? C(e).split(/\s+/) : [];
}
function da(e) {
	var t = s?.location.href;
	return !!(t && e && e.some(((e) => t.match(e))));
}
function fa(e) {
	var t = "";
	switch (typeof e.className) {
		case "string":
			t = e.className;
			break;
		case "object":
			t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
			break;
		default: t = "";
	}
	return ua(t);
}
function pa(e) {
	return P(e) ? null : C(e).split(/(\s+)/).filter(((e) => Pa(e))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function ma(e) {
	var t = "";
	return Ea(e) && !Da(e) && e.childNodes && e.childNodes.length && H(e.childNodes, (function(e) {
		ca(e) && e.textContent && (t += pa(e.textContent) ?? "");
	})), C(t);
}
function ha(e) {
	return j(e.target) ? e.srcElement || null : (t = e.target) != null && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
	var t;
}
var ga = [
	"a",
	"button",
	"form",
	"input",
	"select",
	"textarea",
	"label"
];
function _a(e, t) {
	if (j(t)) return !0;
	var n, r = function(e) {
		if (t.some(((t) => e.matches(t)))) return { v: !0 };
	};
	for (var i of e) if (n = r(i)) return n.v;
	return !1;
}
function va(e) {
	var t = e.parentNode;
	return !(!t || !oa(t)) && t;
}
var ya = [
	"next",
	"previous",
	"prev",
	">",
	"<"
], ba = 10, xa = [".ph-no-rageclick", ".ph-no-capture"];
function Sa(e, t) {
	if (!s || Ca(e)) return !1;
	var n, r;
	if (L(t) ? (n = !!t && xa, r = void 0) : (n = t?.css_selector_ignorelist ?? xa, r = t?.content_ignorelist), !1 === n) return !1;
	var { targetElementList: i } = wa(e, !1);
	return !function(e, t) {
		if (!1 === e || j(e)) return !1;
		var n;
		if (!0 === e) n = ya;
		else {
			if (!D(e)) return !1;
			if (e.length > ba) return B.error("[PostHog] content_ignorelist array cannot exceed " + ba + " items. Use css_selector_ignorelist for more complex matching."), !1;
			n = e.map(((e) => e.toLowerCase()));
		}
		return t.some(((e) => {
			var { safeText: t, ariaLabel: r } = e;
			return n.some(((e) => t.includes(e) || r.includes(e)));
		}));
	}(r, i.map(((e) => ({
		safeText: ma(e).toLowerCase(),
		ariaLabel: e.getAttribute("aria-label")?.toLowerCase().trim() || ""
	})))) && !_a(i, n);
}
var Ca = (e) => !e || sa(e, "html") || !oa(e), wa = (e, t) => {
	if (!s || Ca(e)) return {
		parentIsUsefulElement: !1,
		targetElementList: []
	};
	for (var n = !1, r = [e], i = e; i.parentNode && !sa(i, "body");) if (la(i.parentNode)) r.push(i.parentNode.host), i = i.parentNode.host;
	else {
		var a = va(i);
		if (!a) break;
		if (t || ga.indexOf(a.tagName.toLowerCase()) > -1) n = !0;
		else {
			var o = s.getComputedStyle(a);
			o && o.getPropertyValue("cursor") === "pointer" && (n = !0);
		}
		r.push(a), i = a;
	}
	return {
		parentIsUsefulElement: n,
		targetElementList: r
	};
};
function Ta(e, t, n, r, i) {
	var a, o, c;
	if (n === void 0 && (n = void 0), !s || Ca(e) || (a = n) != null && a.url_allowlist && !da(n.url_allowlist) || (o = n) != null && o.url_ignorelist && da(n.url_ignorelist)) return !1;
	if ((c = n) != null && c.dom_event_allowlist) {
		var l = n.dom_event_allowlist;
		if (l && !l.some(((e) => t.type === e))) return !1;
	}
	var { parentIsUsefulElement: u, targetElementList: d } = wa(e, r);
	if (!function(e, t) {
		var n = t?.element_allowlist;
		if (j(n)) return !0;
		var r, i = function(e) {
			if (n.some(((t) => e.tagName.toLowerCase() === t))) return { v: !0 };
		};
		for (var a of e) if (r = i(a)) return r.v;
		return !1;
	}(d, n) || !_a(d, n?.css_selector_allowlist)) return !1;
	var f = s.getComputedStyle(e);
	if (f && f.getPropertyValue("cursor") === "pointer" && t.type === "click") return !0;
	var p = e.tagName.toLowerCase();
	switch (p) {
		case "html": return !1;
		case "form": return (i || ["submit"]).indexOf(t.type) >= 0;
		case "input":
		case "select":
		case "textarea": return (i || ["change", "click"]).indexOf(t.type) >= 0;
		default: return u ? (i || ["click"]).indexOf(t.type) >= 0 : (i || ["click"]).indexOf(t.type) >= 0 && (ga.indexOf(p) > -1 || e.getAttribute("contenteditable") === "true");
	}
}
function Ea(e) {
	for (var t = e; t.parentNode && !sa(t, "body"); t = t.parentNode) {
		var n = fa(t);
		if (S(n, "ph-sensitive") || S(n, "ph-no-capture")) return !1;
	}
	if (S(fa(e), "ph-include")) return !0;
	var r = e.type || "";
	if (M(r)) switch (r.toLowerCase()) {
		case "hidden":
		case "password": return !1;
	}
	var i = e.name || e.id || "";
	return !(M(i) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, "")));
}
function Da(e) {
	return !!(sa(e, "input") && ![
		"button",
		"checkbox",
		"submit",
		"reset"
	].includes(e.type) || sa(e, "select") || sa(e, "textarea") || e.getAttribute("contenteditable") === "true");
}
var Oa = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})", ka = RegExp("^(?:" + Oa + ")$"), Aa = new RegExp(Oa), ja = "\\d{3}-?\\d{2}-?\\d{4}", Ma = RegExp("^(" + ja + ")$"), Na = RegExp("(" + ja + ")");
function Pa(e, t) {
	return t === void 0 && (t = !0), !(P(e) || M(e) && (e = C(e), (t ? ka : Aa).test((e || "").replace(/[- ]/g, "")) || (t ? Ma : Na).test(e)));
}
function Fa(e) {
	var t = ma(e);
	return Pa(t = (t + " " + Ia(e)).trim()) ? t : "";
}
function Ia(e) {
	var t = "";
	return e && e.childNodes && e.childNodes.length && H(e.childNodes, (function(e) {
		if (e && e.tagName?.toLowerCase() === "span") try {
			var n = ma(e);
			t = (t + " " + n).trim(), e.childNodes && e.childNodes.length && (t = (t + " " + Ia(e)).trim());
		} catch (e) {
			B.error("[AutoCapture]", e);
		}
	})), t;
}
function La(e) {
	return function(e) {
		return e.map(((e) => {
			var t = "";
			if (e.tag_name && (t += e.tag_name), e.attr_class) for (var n of (e.attr_class.sort(), e.attr_class)) t += "." + n.replace(/"/g, "");
			var r = i({}, e.text ? { text: e.text } : {}, {
				"nth-child": e.nth_child ?? 0,
				"nth-of-type": e.nth_of_type ?? 0
			}, e.href ? { href: e.href } : {}, e.attr_id ? { attr_id: e.attr_id } : {}, e.attributes), a = {};
			return Ht(r).sort(((e, t) => {
				var [n] = e, [r] = t;
				return n.localeCompare(r);
			})).forEach(((e) => {
				var [t, n] = e;
				return a[Ra(t.toString())] = Ra(n.toString());
			})), t += ":", t += Ht(a).map(((e) => {
				var [t, n] = e;
				return t + "=\"" + n + "\"";
			})).join("");
		})).join(";");
	}(function(e) {
		return e.map(((e) => {
			var t = {
				text: e.$el_text?.slice(0, 400),
				tag_name: e.tag_name,
				href: e.attr__href?.slice(0, 2048),
				attr_class: za(e),
				attr_id: e.attr__id,
				nth_child: e.nth_child,
				nth_of_type: e.nth_of_type,
				attributes: {}
			};
			return Ht(e).filter(((e) => {
				var [t] = e;
				return t.indexOf("attr__") === 0;
			})).forEach(((e) => {
				var [n, r] = e;
				return t.attributes[n] = r;
			})), t;
		}));
	}(e));
}
function Ra(e) {
	return e.replace(/"|\\"/g, "\\\"");
}
function za(e) {
	var t = e.attr__class;
	return t ? D(t) ? t : ua(t) : void 0;
}
var Ba = class {
	constructor(e) {
		this.disabled = !1 === e;
		var t = k(e) ? e : {};
		this.thresholdPx = t.threshold_px || 30, this.timeoutMs = t.timeout_ms || 1e3, this.clickCount = t.click_count || 3, this.clicks = [];
	}
	isRageClick(e, t, n) {
		if (this.disabled) return !1;
		var r = this.clicks[this.clicks.length - 1];
		if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < this.thresholdPx && n - r.timestamp < this.timeoutMs) {
			if (this.clicks.push({
				x: e,
				y: t,
				timestamp: n
			}), this.clicks.length === this.clickCount) return !0;
		} else this.clicks = [{
			x: e,
			y: t,
			timestamp: n
		}];
		return !1;
	}
}, Va = "$copy_autocapture", Ha = V("[AutoCapture]");
function Ua(e, t) {
	return t.length > e ? t.slice(0, e) + "..." : t;
}
function Wa(e) {
	if (e.previousElementSibling) return e.previousElementSibling;
	var t = e;
	do
		t = t.previousSibling;
	while (t && !oa(t));
	return t;
}
function Ga(e, t, n, r) {
	var i = e.tagName.toLowerCase(), a = { tag_name: i };
	ga.indexOf(i) > -1 && !n && (i.toLowerCase() === "a" || i.toLowerCase() === "button" ? a.$el_text = Ua(1024, Fa(e)) : a.$el_text = Ua(1024, ma(e)));
	var o = fa(e);
	o.length > 0 && (a.classes = o.filter((function(e) {
		return e !== "";
	}))), H(e.attributes, (function(n) {
		var i;
		if ((!Da(e) || [
			"name",
			"id",
			"class",
			"aria-label"
		].indexOf(n.name) !== -1) && (r == null || !r.includes(n.name)) && !t && Pa(n.value) && (i = n.name, !M(i) || i.substring(0, 10) !== "_ngcontent" && i.substring(0, 7) !== "_nghost")) {
			var o = n.value;
			n.name === "class" && (o = ua(o).join(" ")), a["attr__" + n.name] = Ua(1024, o);
		}
	}));
	for (var s = 1, c = 1, l = e; l = Wa(l);) s++, l.tagName === e.tagName && c++;
	return a.nth_child = s, a.nth_of_type = c, a;
}
function Ka(e, t) {
	for (var n, { e: r, maskAllElementAttributes: i, maskAllText: a, elementAttributeIgnoreList: o, elementsChainAsString: c } = t, l = [e], u = e; u.parentNode && !sa(u, "body");) la(u.parentNode) ? (l.push(u.parentNode.host), u = u.parentNode.host) : (l.push(u.parentNode), u = u.parentNode);
	var d, f = [], p = {}, m = !1, h = !1;
	if (H(l, ((e) => {
		var t = Ea(e);
		e.tagName.toLowerCase() === "a" && (m = e.getAttribute("href"), m = t && m && Pa(m) && m), S(fa(e), "ph-no-capture") && (h = !0), f.push(Ga(e, i, a, o)), U(p, function(e) {
			if (!Ea(e)) return {};
			var t = {};
			return H(e.attributes, (function(e) {
				if (e.name && e.name.indexOf("data-ph-capture-attribute") === 0) {
					var n = e.name.replace("data-ph-capture-attribute-", ""), r = e.value;
					n && r && Pa(r) && (t[n] = r);
				}
			})), t;
		}(e));
	})), h) return {
		props: {},
		explicitNoCapture: h
	};
	if (a || (e.tagName.toLowerCase() === "a" || e.tagName.toLowerCase() === "button" ? f[0].$el_text = Fa(e) : f[0].$el_text = ma(e)), m) {
		var g;
		f[0].attr__href = m;
		var _ = or(m)?.host, v = s == null || (g = s.location) == null ? void 0 : g.host;
		_ && v && _ !== v && (d = m);
	}
	return { props: U({
		$event_type: r.type,
		$ce_version: 1
	}, c ? {} : { $elements: f }, { $elements_chain: La(f) }, (n = f[0]) != null && n.$el_text ? { $el_text: f[0]?.$el_text } : {}, d && r.type === "click" ? { $external_click_url: d } : {}, p) };
}
var qa = V("[ExceptionAutocapture]");
function Ja(e, t, n) {
	try {
		if (!(t in e)) return () => {};
		var r = e[t], i = n(r);
		return O(i) && (i.prototype = i.prototype || {}, Object.defineProperties(i, { __posthog_wrapped__: {
			enumerable: !1,
			value: !0
		} })), e[t] = i, () => {
			e[t] = r;
		};
	} catch {
		return () => {};
	}
}
var Ya = V("[TracingHeaders]"), Xa = V("[Web Vitals]"), Za = 9e5, Qa = "disabled", $a = "lazy_loading", eo = "awaiting_config", to = "missing_config";
V("[SessionRecording]");
var no = "[SessionRecording]", ro = V(no), io = V("[Heatmaps]");
function ao(e) {
	return k(e) && "clientX" in e && "clientY" in e && F(e.clientX) && F(e.clientY);
}
var oo = V("[Product Tours]"), so = "ph_product_tours", co = ["$set_once", "$set"], lo = V("[SiteApps]");
function uo(e, t, n) {
	if (P(e)) return !1;
	switch (n) {
		case "exact": return e === t;
		case "contains":
			var r = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
			return new RegExp(r, "i").test(e);
		case "regex": try {
			return new RegExp(t).test(e);
		} catch {
			return !1;
		}
		default: return !1;
	}
}
var fo = class {
	constructor(e) {
		this._debugEventEmitter = new Ai(), this._checkStep = (e, t) => this._checkStepEvent(e, t) && this._checkStepUrl(e, t) && this._checkStepElement(e, t) && this._checkStepProperties(e, t), this._checkStepEvent = (e, t) => t == null || !t.event || e?.event === t?.event, this._instance = e, this._actionEvents = /* @__PURE__ */ new Set(), this._actionRegistry = /* @__PURE__ */ new Set();
	}
	init() {
		if (!j(this._instance?._addCaptureHook)) {
			var e;
			(e = this._instance) == null || e._addCaptureHook(((e, t) => {
				this.on(e, t);
			}));
		}
	}
	register(e) {
		var t;
		if (!j(this._instance?._addCaptureHook) && (e.forEach(((e) => {
			var t, n;
			(t = this._actionRegistry) == null || t.add(e), (n = e.steps) == null || n.forEach(((e) => {
				var t;
				(t = this._actionEvents) == null || t.add(e?.event || "");
			}));
		})), (t = this._instance) != null && t.autocapture)) {
			var n, r = /* @__PURE__ */ new Set();
			e.forEach(((e) => {
				var t;
				(t = e.steps) == null || t.forEach(((e) => {
					e != null && e.selector && r.add(e?.selector);
				}));
			})), (n = this._instance) == null || n.autocapture.setElementSelectors(r);
		}
	}
	on(e, t) {
		t != null && e.length != 0 && (this._actionEvents.has(e) || this._actionEvents.has(t?.event)) && this._actionRegistry && this._actionRegistry?.size > 0 && this._actionRegistry.forEach(((e) => {
			this._checkAction(t, e) && this._debugEventEmitter.emit("actionCaptured", e.name);
		}));
	}
	_addActionHook(e) {
		this.onAction("actionCaptured", ((t) => e(t)));
	}
	_checkAction(e, t) {
		if (t?.steps == null) return !1;
		for (var n of t.steps) if (this._checkStep(e, n)) return !0;
		return !1;
	}
	onAction(e, t) {
		return this._debugEventEmitter.on(e, t);
	}
	_checkStepUrl(e, t) {
		if (t != null && t.url) {
			var n, r = e == null || (n = e.properties) == null ? void 0 : n.$current_url;
			if (!r || typeof r != "string" || !uo(r, t.url, t.url_matching || "contains")) return !1;
		}
		return !0;
	}
	_checkStepElement(e, t) {
		return !!this._checkStepHref(e, t) && !!this._checkStepText(e, t) && !!this._checkStepSelector(e, t);
	}
	_checkStepHref(e, t) {
		var n;
		if (t == null || !t.href) return !0;
		var r = this._getElementsList(e);
		if (r.length > 0) return r.some(((e) => uo(e.href, t.href, t.href_matching || "exact")));
		var i, a = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
		return !!a && uo((i = a.match(/(?::|")href="(.*?)"/)) ? i[1] : "", t.href, t.href_matching || "exact");
	}
	_checkStepText(e, t) {
		var n;
		if (t == null || !t.text) return !0;
		var r = this._getElementsList(e);
		if (r.length > 0) return r.some(((e) => uo(e.text, t.text, t.text_matching || "exact") || uo(e.$el_text, t.text, t.text_matching || "exact")));
		var i, a, o, s = (e == null || (n = e.properties) == null ? void 0 : n.$elements_chain) || "";
		return !!s && (i = function(e) {
			for (var t, n = [], r = /(?::|")text="(.*?)"/g; !P(t = r.exec(e));) n.includes(t[1]) || n.push(t[1]);
			return n;
		}(s), a = t.text, o = t.text_matching || "exact", i.some(((e) => uo(e, a, o))));
	}
	_checkStepSelector(e, t) {
		var n, r;
		if (t == null || !t.selector) return !0;
		var i = e == null || (n = e.properties) == null ? void 0 : n.$element_selectors;
		if (i != null && i.includes(t.selector)) return !0;
		var a = (e == null || (r = e.properties) == null ? void 0 : r.$elements_chain) || "";
		if (t.selector_regex && a) try {
			return new RegExp(t.selector_regex).test(a);
		} catch {
			return !1;
		}
		return !1;
	}
	_getElementsList(e) {
		var t;
		return (e == null || (t = e.properties) == null ? void 0 : t.$elements) == null ? [] : e?.properties.$elements;
	}
	_checkStepProperties(e, t) {
		return t == null || !t.properties || t.properties.length === 0 || Ri(t.properties.reduce(((e, t) => {
			var n = D(t.value) ? t.value.map(String) : t.value == null ? [] : [String(t.value)];
			return e[t.key] = {
				values: n,
				operator: t.operator || "exact"
			}, e;
		}), {}), e?.properties);
	}
}, po = class {
	constructor(e) {
		this._instance = e, this._eventToItems = /* @__PURE__ */ new Map(), this._cancelEventToItems = /* @__PURE__ */ new Map(), this._actionToItems = /* @__PURE__ */ new Map();
	}
	_doesEventMatchFilter(e, t) {
		return !!e && Ri(e.propertyFilters, t?.properties);
	}
	_buildEventToItemMap(e, t) {
		var n = /* @__PURE__ */ new Map();
		return e.forEach(((e) => {
			var r;
			(r = e.conditions) == null || (r = r[t]) == null || (r = r.values) == null || r.forEach(((t) => {
				if (t != null && t.name) {
					var r = n.get(t.name) || [];
					r.push(e.id), n.set(t.name, r);
				}
			}));
		})), n;
	}
	_getMatchingItems(e, t, n) {
		var r = (n === Or.Activation ? this._eventToItems : this._cancelEventToItems).get(e), i = [];
		return this._getItems(((e) => {
			i = e.filter(((e) => r?.includes(e.id)));
		})), i.filter(((r) => {
			var i, a = (i = r.conditions) == null || (i = i[n]) == null || (i = i.values) == null ? void 0 : i.find(((t) => t.name === e));
			return this._doesEventMatchFilter(a, t);
		}));
	}
	register(e) {
		j(this._instance?._addCaptureHook) || (this._setupEventBasedItems(e), this._setupActionBasedItems(e));
	}
	_setupActionBasedItems(e) {
		var t = e.filter(((e) => {
			var t;
			return e.conditions?.actions && ((t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null ? void 0 : t.length) > 0;
		}));
		t.length !== 0 && (this._actionMatcher ?? (this._actionMatcher = new fo(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook(((e) => {
			this.onAction(e);
		}))), t.forEach(((e) => {
			var t, n, r, i, a;
			e.conditions && (t = e.conditions) != null && t.actions && (n = e.conditions) != null && (n = n.actions) != null && n.values && ((r = e.conditions) == null || (r = r.actions) == null || (r = r.values) == null ? void 0 : r.length) > 0 && ((i = this._actionMatcher) == null || i.register(e.conditions.actions.values), (a = e.conditions) == null || (a = a.actions) == null || (a = a.values) == null || a.forEach(((t) => {
				if (t && t.name) {
					var n = this._actionToItems.get(t.name);
					n && n.push(e.id), this._actionToItems.set(t.name, n || [e.id]);
				}
			})));
		})));
	}
	_setupEventBasedItems(e) {
		var t, n = e.filter(((e) => {
			var t;
			return e.conditions?.events && ((t = e.conditions) == null || (t = t.events) == null || (t = t.values) == null ? void 0 : t.length) > 0;
		})), r = e.filter(((e) => {
			var t;
			return e.conditions?.cancelEvents && ((t = e.conditions) == null || (t = t.cancelEvents) == null || (t = t.values) == null ? void 0 : t.length) > 0;
		}));
		(n.length !== 0 || r.length !== 0) && ((t = this._instance) == null || t._addCaptureHook(((e, t) => {
			this.onEvent(e, t);
		})), this._eventToItems = this._buildEventToItemMap(e, Or.Activation), this._cancelEventToItems = this._buildEventToItemMap(e, Or.Cancellation));
	}
	onEvent(e, t) {
		var n, r = this._getLogger(), i = this._getActivatedKey(), a = this._getShownEventName(), o = ((n = this._instance) == null || (n = n.persistence) == null ? void 0 : n.props[i]) || [];
		if (a === e && t && o.length > 0) {
			var s, c;
			r.info("event matched, removing item from activated items", {
				event: e,
				eventPayload: t,
				existingActivatedItems: o
			});
			var l = (t == null || (s = t.properties) == null ? void 0 : s.$survey_id) || (t == null || (c = t.properties) == null ? void 0 : c.$product_tour_id);
			if (l) {
				var u = o.indexOf(l);
				u >= 0 && (o.splice(u, 1), this._updateActivatedItems(o));
			}
		} else {
			if (this._cancelEventToItems.has(e)) {
				var d = this._getMatchingItems(e, t, Or.Cancellation);
				d.length > 0 && (r.info("cancel event matched, cancelling items", {
					event: e,
					itemsToCancel: d.map(((e) => e.id))
				}), d.forEach(((e) => {
					var t = o.indexOf(e.id);
					t >= 0 && o.splice(t, 1), this._cancelPendingItem(e.id);
				})), this._updateActivatedItems(o));
			}
			if (this._eventToItems.has(e)) {
				r.info("event name matched", {
					event: e,
					eventPayload: t,
					items: this._eventToItems.get(e)
				});
				var f = this._getMatchingItems(e, t, Or.Activation);
				this._updateActivatedItems(o.concat(f.map(((e) => e.id)) || []));
			}
		}
	}
	onAction(e) {
		var t, n = this._getActivatedKey(), r = ((t = this._instance) == null || (t = t.persistence) == null ? void 0 : t.props[n]) || [];
		this._actionToItems.has(e) && this._updateActivatedItems(r.concat(this._actionToItems.get(e) || []));
	}
	_updateActivatedItems(e) {
		var t, n = this._getLogger(), r = this._getActivatedKey(), i = [...new Set(e)].filter(((e) => !this._isItemPermanentlyIneligible(e)));
		n.info("updating activated items", { activatedItems: i }), (t = this._instance) == null || (t = t.persistence) == null || t.register({ [r]: i });
	}
	getActivatedIds() {
		var e, t = this._getActivatedKey();
		return ((e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.props[t]) || [];
	}
	getEventToItemsMap() {
		return this._eventToItems;
	}
	_getActionMatcher() {
		return this._actionMatcher;
	}
}, mo = class extends po {
	constructor(e) {
		super(e);
	}
	_getActivatedKey() {
		return "$surveys_activated";
	}
	_getShownEventName() {
		return Ar.SHOWN;
	}
	_getItems(e) {
		var t;
		(t = this._instance) == null || t.getSurveys(e);
	}
	_cancelPendingItem(e) {
		var t;
		(t = this._instance) == null || t.cancelPendingSurvey(e);
	}
	_getLogger() {
		return Z;
	}
	_isItemPermanentlyIneligible() {
		return !1;
	}
	getSurveys() {
		return this.getActivatedIds();
	}
	getEventToSurveys() {
		return this.getEventToItemsMap();
	}
}, ho = s != null && s.location ? ur(s.location.hash, "__posthog") || ur(location.hash, "state") : null, go = "_postHogToolbarParams", _o = V("[Toolbar]"), vo = function(e) {
	return e[e.UNINITIALIZED = 0] = "UNINITIALIZED", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED", e;
}(vo || {}), Q = V("[FeatureFlags]"), yo = V("[FeatureFlags]", { debugEnabled: !0 }), bo = "errors_while_computing_flags", xo = "flag_missing", So = "quota_limited", Co = "timeout", wo = "connection_error", To = "unknown_error", Eo = (e) => "api_error_" + e, Do = "$active_feature_flags", Oo = "$override_feature_flags", ko = "$feature_flag_payloads", Ao = "$override_feature_flag_payloads", jo = "$feature_flag_request_id", Mo = (e) => {
	var t = {};
	for (var [n, r] of Ht(e || {})) r && (t[n] = r);
	return t;
}, No = (e) => {
	var t = e.flags;
	return t ? (e.featureFlags = Object.fromEntries(Object.keys(t).map(((e) => [e, t[e].variant ?? t[e].enabled]))), e.featureFlagPayloads = Object.fromEntries(Object.keys(t).filter(((e) => t[e].enabled)).filter(((e) => t[e].metadata?.payload)).map(((e) => [e, t[e].metadata?.payload])))) : Q.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), e;
}, Po = function(e) {
	return e.FeatureFlags = "feature_flags", e.Recordings = "recordings", e;
}({}), Fo = V("[Error tracking]"), Io = {
	icontains: (e, t) => !!s && t.href.toLowerCase().indexOf(e.toLowerCase()) > -1,
	not_icontains: (e, t) => !!s && t.href.toLowerCase().indexOf(e.toLowerCase()) === -1,
	regex: (e, t) => !!s && Pi(t.href, e),
	not_regex: (e, t) => !!s && !Pi(t.href, e),
	exact: (e, t) => t.href === e,
	is_not: (e, t) => t.href !== e
}, Lo = class e {
	constructor(t) {
		var n = this;
		this.getWebExperimentsAndEvaluateDisplayLogic = function(t) {
			t === void 0 && (t = !1), n.getWebExperiments(((t) => {
				e._logInfo("retrieved web experiments from the server"), n._flagToExperiments = /* @__PURE__ */ new Map(), t.forEach(((t) => {
					if (t.feature_flag_key) {
						var r;
						n._flagToExperiments && (e._logInfo("setting flag key ", t.feature_flag_key, " to web experiment ", t), (r = n._flagToExperiments) == null || r.set(t.feature_flag_key, t));
						var i = n._instance.getFeatureFlag(t.feature_flag_key);
						M(i) && t.variants[i] && n._applyTransforms(t.name, i, t.variants[i].transforms);
					} else if (t.variants) for (var a in t.variants) {
						var o = t.variants[a];
						e._matchesTestVariant(o) && n._applyTransforms(t.name, a, o.transforms);
					}
				}));
			}), t);
		}, this._instance = t, this._instance.onFeatureFlags(((e) => {
			this.onFeatureFlags(e);
		}));
	}
	initialize() {}
	onFeatureFlags(t) {
		if (this._is_bot()) e._logInfo("Refusing to render web experiment since the viewer is a likely bot");
		else if (!this._instance.config.disable_web_experiments) {
			if (P(this._flagToExperiments)) return this._flagToExperiments = /* @__PURE__ */ new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
			e._logInfo("applying feature flags", t), t.forEach(((e) => {
				var t;
				if (this._flagToExperiments && (t = this._flagToExperiments) != null && t.has(e)) {
					var n = this._instance.getFeatureFlag(e), r = this._flagToExperiments?.get(e);
					n && r != null && r.variants[n] && this._applyTransforms(r.name, n, r.variants[n].transforms);
				}
			}));
		}
	}
	previewWebExperiment() {
		var t = e.getWindowLocation();
		if (t != null && t.search) {
			var n = cr(t?.search, "__experiment_id"), r = cr(t?.search, "__experiment_variant");
			n && r && (e._logInfo("previewing web experiments " + n + " && " + r), this.getWebExperiments(((e) => {
				this._showPreviewWebExperiment(parseInt(n), r, e);
			}), !1, !0));
		}
	}
	loadIfEnabled() {
		this._instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
	}
	getWebExperiments(e, t, n) {
		if (this._instance.config.disable_web_experiments && !n) return e([]);
		var r = this._instance.get_property("$web_experiments");
		if (r && !t) return e(r);
		this._instance._send_request({
			url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this._instance.config.token),
			method: "GET",
			callback: (t) => t.statusCode !== 200 || !t.json ? e([]) : e(t.json.experiments || [])
		});
	}
	_showPreviewWebExperiment(t, n, r) {
		var i = r.filter(((e) => e.id === t));
		i && i.length > 0 && (e._logInfo("Previewing web experiment [" + i[0].name + "] with variant [" + n + "]"), this._applyTransforms(i[0].name, n, i[0].variants[n].transforms));
	}
	static _matchesTestVariant(t) {
		return !P(t.conditions) && e._matchUrlConditions(t) && e._matchUTMConditions(t);
	}
	static _matchUrlConditions(t) {
		if (P(t.conditions) || P(t.conditions?.url)) return !0;
		var n, r = e.getWindowLocation();
		return !!r && ((n = t.conditions) == null || !n.url || Io[t.conditions?.urlMatchType ?? "icontains"](t.conditions.url, r));
	}
	static getWindowLocation() {
		return s?.location;
	}
	static _matchUTMConditions(e) {
		if (P(e.conditions) || P(e.conditions?.utm)) return !0;
		var t = gr();
		if (t.utm_source) {
			var n, r, i, a, o, s, c, l, u = (n = e.conditions) == null || (n = n.utm) == null || !n.utm_campaign || ((r = e.conditions) == null || (r = r.utm) == null ? void 0 : r.utm_campaign) == t.utm_campaign, d = (i = e.conditions) == null || (i = i.utm) == null || !i.utm_source || ((a = e.conditions) == null || (a = a.utm) == null ? void 0 : a.utm_source) == t.utm_source, f = (o = e.conditions) == null || (o = o.utm) == null || !o.utm_medium || ((s = e.conditions) == null || (s = s.utm) == null ? void 0 : s.utm_medium) == t.utm_medium, p = (c = e.conditions) == null || (c = c.utm) == null || !c.utm_term || ((l = e.conditions) == null || (l = l.utm) == null ? void 0 : l.utm_term) == t.utm_term;
			return u && f && p && d;
		}
		return !1;
	}
	static _logInfo(e) {
		var t = [...arguments].slice(1);
		B.info("[WebExperiments] " + e, t);
	}
	_applyTransforms(t, n, r) {
		this._is_bot() ? e._logInfo("Refusing to render web experiment since the viewer is a likely bot") : n === "control" ? e._logInfo("Control variants leave the page unmodified.") : r.forEach(((r) => {
			r.selector && (e._logInfo("applying transform of variant " + n + " for experiment " + t + " ", r), (document?.querySelectorAll(r.selector))?.forEach(((e) => {
				var t = e;
				r.html && (t.innerHTML = r.html), r.css && t.setAttribute("style", r.css);
			})));
		}));
	}
	_is_bot() {
		return f && this._instance ? Ni(f, this._instance.config.custom_blocked_useragents) : void 0;
	}
}, $ = V("[Conversations]"), Ro = { featureFlags: class {
	constructor(e) {
		this._override_warning = !1, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._hasLoggedDeprecationWarning = !1, this._staleCacheRefreshTriggered = !1, this._instance = e, this.featureFlagEventHandlers = [];
	}
	_isCacheStale() {
		var e;
		return (e = this._instance.persistence?._isFeatureFlagCacheStale(this._instance.config.feature_flag_cache_ttl_ms)) != null && e;
	}
	_checkAndTriggerStaleRefresh() {
		return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, Q.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0);
	}
	_getValidEvaluationEnvironments() {
		var e = this._instance.config.evaluation_contexts ?? this._instance.config.evaluation_environments;
		return !this._instance.config.evaluation_environments || this._instance.config.evaluation_contexts || this._hasLoggedDeprecationWarning || (Q.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._hasLoggedDeprecationWarning = !0), e != null && e.length ? e.filter(((e) => {
			var t = e && typeof e == "string" && e.trim().length > 0;
			return t || Q.error("Invalid evaluation context found:", e, "Expected non-empty string"), t;
		})) : [];
	}
	_shouldIncludeEvaluationEnvironments() {
		return this._getValidEvaluationEnvironments().length > 0;
	}
	initialize() {
		var { config: e } = this._instance, t = e.bootstrap?.featureFlags ?? {};
		if (Object.keys(t).length) {
			var n = e.bootstrap?.featureFlagPayloads ?? {}, r = Object.keys(t).filter(((e) => !!t[e])).reduce(((e, n) => (e[n] = t[n] || !1, e)), {}), i = Object.keys(n).filter(((e) => r[e])).reduce(((e, t) => (n[t] && (e[t] = n[t]), e)), {});
			this.receivedFeatureFlags({
				featureFlags: r,
				featureFlagPayloads: i
			});
		}
	}
	updateFlags(e, t, n) {
		var r = n != null && n.merge ? this.getFlagVariants() : {}, a = n != null && n.merge ? this.getFlagPayloads() : {}, o = i({}, r, e), s = i({}, a, t), c = {};
		for (var [l, u] of Object.entries(o)) {
			var d = typeof u == "string";
			c[l] = {
				key: l,
				enabled: !!d || !!u,
				variant: d ? u : void 0,
				reason: void 0,
				metadata: j(s?.[l]) ? void 0 : {
					id: 0,
					version: void 0,
					description: void 0,
					payload: s[l]
				}
			};
		}
		this.receivedFeatureFlags({ flags: c });
	}
	get hasLoadedFlags() {
		return this._hasLoadedFlags;
	}
	getFlags() {
		return Object.keys(this.getFlagVariants());
	}
	getFlagsWithDetails() {
		var e = this._instance.get_property(hn), t = this._instance.get_property(Oo), n = this._instance.get_property(Ao);
		if (!n && !t) return e || {};
		var r = U({}, e || {});
		for (var a of [...new Set([...Object.keys(n || {}), ...Object.keys(t || {})])]) {
			var o, s, c = r[a], l = t?.[a], u = j(l) ? (o = c?.enabled) != null && o : !!l, d = j(l) ? c.variant : typeof l == "string" ? l : void 0, f = n?.[a], p = i({}, c, {
				enabled: u,
				variant: u ? d ?? c?.variant : void 0
			});
			u !== c?.enabled && (p.original_enabled = c?.enabled), d !== c?.variant && (p.original_variant = c?.variant), f && (p.metadata = i({}, c?.metadata, {
				payload: f,
				original_payload: c == null || (s = c.metadata) == null ? void 0 : s.payload
			})), r[a] = p;
		}
		return this._override_warning ||= (Q.warn(" Overriding feature flag details!", {
			flagDetails: e,
			overriddenPayloads: n,
			finalDetails: r
		}), !0), r;
	}
	getFlagVariants() {
		var e = this._instance.get_property(pn), t = this._instance.get_property(Oo);
		if (!t) return e || {};
		for (var n = U({}, e), r = Object.keys(t), i = 0; i < r.length; i++) n[r[i]] = t[r[i]];
		return this._override_warning ||= (Q.warn(" Overriding feature flags!", {
			enabledFlags: e,
			overriddenFlags: t,
			finalFlags: n
		}), !0), n;
	}
	getFlagPayloads() {
		var e = this._instance.get_property(ko), t = this._instance.get_property(Ao);
		if (!t) return e || {};
		for (var n = U({}, e || {}), r = Object.keys(t), i = 0; i < r.length; i++) n[r[i]] = t[r[i]];
		return this._override_warning ||= (Q.warn(" Overriding feature flag payloads!", {
			flagPayloads: e,
			overriddenPayloads: t,
			finalPayloads: n
		}), !0), n;
	}
	reloadFeatureFlags() {
		this._reloadingDisabled || this._instance.config.advanced_disable_feature_flags || this._reloadDebouncer || (this._instance._internalEventEmitter.emit("featureFlagsReloading", !0), this._reloadDebouncer = setTimeout((() => {
			this._callFlagsEndpoint();
		}), 5));
	}
	_clearDebouncer() {
		clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0;
	}
	ensureFlagsLoaded() {
		this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags();
	}
	setAnonymousDistinctId(e) {
		this.$anon_distinct_id = e;
	}
	setReloadingPaused(e) {
		this._reloadingDisabled = e;
	}
	_callFlagsEndpoint(e) {
		if (this._clearDebouncer(), !this._instance._shouldDisableFlags()) if (this._requestInFlight) this._additionalReloadRequested = !0;
		else {
			var t = this._instance.config.token, n = this._instance.get_property("$device_id"), r = {
				token: t,
				distinct_id: this._instance.get_distinct_id(),
				groups: this._instance.getGroups(),
				$anon_distinct_id: this.$anon_distinct_id,
				person_properties: i({}, this._instance.persistence?.get_initial_props() || {}, this._instance.get_property(gn) || {}),
				group_properties: this._instance.get_property(_n),
				timezone: Cr()
			};
			N(n) || j(n) || (r.$device_id = n), (e != null && e.disableFlags || this._instance.config.advanced_disable_feature_flags) && (r.disable_flags = !0), this._shouldIncludeEvaluationEnvironments() && (r.evaluation_contexts = this._getValidEvaluationEnvironments());
			var a = this._instance.config.advanced_only_evaluate_survey_feature_flags ? "&only_evaluate_survey_feature_flags=true" : "", o = this._instance.requestRouter.endpointFor("flags", "/flags/?v=2" + a);
			this._requestInFlight = !0, this._instance._send_request({
				method: "POST",
				url: o,
				data: r,
				compression: this._instance.config.disable_compression ? void 0 : zr.Base64,
				timeout: this._instance.config.feature_flag_request_timeout_ms,
				callback: (e) => {
					var t, n, i, a = !0;
					if (e.statusCode === 200 && (this._additionalReloadRequested || (this.$anon_distinct_id = void 0), a = !1), this._requestInFlight = !1, !r.disable_flags || this._additionalReloadRequested) {
						this._flagsLoadedFromRemote = !a;
						var o = [];
						e.error ? e.error instanceof Error ? o.push(e.error.name === "AbortError" ? Co : wo) : o.push(To) : e.statusCode !== 200 && o.push(Eo(e.statusCode)), (t = e.json) != null && t.errorsWhileComputingFlags && o.push(bo);
						var s = !((n = e.json) == null || (n = n.quotaLimited) == null || !n.includes(Po.FeatureFlags));
						s && o.push(So), (i = this._instance.persistence) == null || i.register({ [bn]: o }), s ? Q.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : (r.disable_flags || this.receivedFeatureFlags(e.json ?? {}, a), this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint()));
					}
				}
			});
		}
	}
	getFeatureFlag(e, t) {
		if (t === void 0 && (t = {}), !t.fresh || this._flagsLoadedFromRemote) if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
			if (!this._checkAndTriggerStaleRefresh()) {
				var n = this.getFeatureFlagResult(e, t);
				return n?.variant ?? n?.enabled;
			}
		} else Q.warn("getFeatureFlag for key \"" + e + "\" failed. Feature flags didn't load in time.");
	}
	getFeatureFlagDetails(e) {
		return this.getFlagsWithDetails()[e];
	}
	getFeatureFlagPayload(e) {
		return this.getFeatureFlagResult(e, { send_event: !1 })?.payload;
	}
	getFeatureFlagResult(e, t) {
		if (t === void 0 && (t = {}), !t.fresh || this._flagsLoadedFromRemote) if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
			if (!this._checkAndTriggerStaleRefresh()) {
				var n = this.getFlagVariants(), r = e in n, i = n[e], a = this.getFlagPayloads()[e], o = String(i), s = this._instance.get_property(jo) || void 0, c = this._instance.get_property(xn) || void 0, l = this._instance.get_property(yn) || {};
				if ((t.send_event || !("send_event" in t)) && (!(e in l) || !l[e].includes(o))) {
					var u, d, f, p, m, h, g, _;
					D(l[e]) ? l[e].push(o) : l[e] = [o], (u = this._instance.persistence) == null || u.register({ [yn]: l });
					var v = this.getFeatureFlagDetails(e), y = [...this._instance.get_property(bn) ?? []];
					j(i) && y.push(xo);
					var b = {
						$feature_flag: e,
						$feature_flag_response: i,
						$feature_flag_payload: a || null,
						$feature_flag_request_id: s,
						$feature_flag_evaluated_at: c,
						$feature_flag_bootstrapped_response: ((d = this._instance.config.bootstrap) == null || (d = d.featureFlags) == null ? void 0 : d[e]) || null,
						$feature_flag_bootstrapped_payload: ((f = this._instance.config.bootstrap) == null || (f = f.featureFlagPayloads) == null ? void 0 : f[e]) || null,
						$used_bootstrap_value: !this._flagsLoadedFromRemote
					};
					j(v == null || (p = v.metadata) == null ? void 0 : p.version) || (b.$feature_flag_version = v.metadata.version);
					var ee, x = (v == null || (m = v.reason) == null ? void 0 : m.description) ?? (v == null || (h = v.reason) == null ? void 0 : h.code);
					x && (b.$feature_flag_reason = x), v != null && (g = v.metadata) != null && g.id && (b.$feature_flag_id = v.metadata.id), j(v?.original_variant) && j(v?.original_enabled) || (b.$feature_flag_original_response = j(v.original_variant) ? v.original_enabled : v.original_variant), v != null && (_ = v.metadata) != null && _.original_payload && (b.$feature_flag_original_payload = v == null || (ee = v.metadata) == null ? void 0 : ee.original_payload), y.length && (b.$feature_flag_error = y.join(",")), this._instance.capture("$feature_flag_called", b);
				}
				if (r) {
					var S = a;
					if (!j(a)) try {
						S = JSON.parse(a);
					} catch {}
					return {
						key: e,
						enabled: !!i,
						variant: typeof i == "string" ? i : void 0,
						payload: S
					};
				}
			}
		} else Q.warn("getFeatureFlagResult for key \"" + e + "\" failed. Feature flags didn't load in time.");
	}
	getRemoteConfigPayload(e, t) {
		var n = this._instance.config.token, r = {
			distinct_id: this._instance.get_distinct_id(),
			token: n
		};
		this._shouldIncludeEvaluationEnvironments() && (r.evaluation_contexts = this._getValidEvaluationEnvironments()), this._instance._send_request({
			method: "POST",
			url: this._instance.requestRouter.endpointFor("flags", "/flags/?v=2"),
			data: r,
			compression: this._instance.config.disable_compression ? void 0 : zr.Base64,
			timeout: this._instance.config.feature_flag_request_timeout_ms,
			callback: (n) => {
				var r = n.json?.featureFlagPayloads;
				t(r?.[e] || void 0);
			}
		});
	}
	isFeatureEnabled(e, t) {
		if (t === void 0 && (t = {}), !t.fresh || this._flagsLoadedFromRemote) {
			if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
				var n = this.getFeatureFlag(e, t);
				return j(n) ? void 0 : !!n;
			}
			Q.warn("isFeatureEnabled for key \"" + e + "\" failed. Feature flags didn't load in time.");
		}
	}
	addFeatureFlagsHandler(e) {
		this.featureFlagEventHandlers.push(e);
	}
	removeFeatureFlagsHandler(e) {
		this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(((t) => t !== e));
	}
	receivedFeatureFlags(e, t) {
		if (this._instance.persistence) {
			this._hasLoadedFlags = !0;
			var n = this.getFlagVariants(), r = this.getFlagPayloads(), a = this.getFlagsWithDetails();
			(function(e, t, n, r, a) {
				n === void 0 && (n = {}), r === void 0 && (r = {}), a === void 0 && (a = {});
				var o = No(e), s = o.flags, c = o.featureFlags, l = o.featureFlagPayloads;
				if (c) {
					var u = e.requestId, d = e.evaluatedAt;
					if (D(c)) {
						Q.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
						var f = {};
						if (c) for (var p = 0; p < c.length; p++) f[c[p]] = !0;
						t && t.register({
							[Do]: c,
							[pn]: f
						});
					} else {
						var m = c, h = l, g = s;
						if (e.errorsWhileComputingFlags) if (s) {
							var _ = new Set(Object.keys(s).filter(((e) => {
								var t;
								return !((t = s[e]) != null && t.failed);
							})));
							m = i({}, n, Object.fromEntries(Object.entries(m).filter(((e) => {
								var [t] = e;
								return _.has(t);
							})))), h = i({}, r, Object.fromEntries(Object.entries(h || {}).filter(((e) => {
								var [t] = e;
								return _.has(t);
							})))), g = i({}, a, Object.fromEntries(Object.entries(g || {}).filter(((e) => {
								var [t] = e;
								return _.has(t);
							}))));
						} else m = i({}, n, m), h = i({}, r, h), g = i({}, a, g);
						t && t.register(i({
							[Do]: Object.keys(Mo(m)),
							[pn]: m || {},
							[ko]: h || {},
							[hn]: g || {}
						}, u ? { [jo]: u } : {}, d ? { [xn]: d } : {}));
					}
				}
			})(e, this._instance.persistence, n, r, a), t || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(t);
		}
	}
	override(e, t) {
		t === void 0 && (t = !1), Q.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
			flags: e,
			suppressWarning: t
		});
	}
	overrideFeatureFlags(e) {
		if (!this._instance.__loaded || !this._instance.persistence) return Q.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags");
		if (!1 === e) return this._instance.persistence.unregister(Oo), this._instance.persistence.unregister(Ao), this._fireFeatureFlagsCallbacks(), yo.info("All overrides cleared");
		if (e && typeof e == "object" && ("flags" in e || "payloads" in e)) {
			var t, n = e;
			if (this._override_warning = !!((t = n.suppressWarning) != null && t), "flags" in n) {
				if (!1 === n.flags) this._instance.persistence.unregister(Oo), yo.info("Flag overrides cleared");
				else if (n.flags) {
					if (D(n.flags)) {
						for (var r = {}, i = 0; i < n.flags.length; i++) r[n.flags[i]] = !0;
						this._instance.persistence.register({ [Oo]: r });
					} else this._instance.persistence.register({ [Oo]: n.flags });
					yo.info("Flag overrides set", { flags: n.flags });
				}
			}
			"payloads" in n && (!1 === n.payloads ? (this._instance.persistence.unregister(Ao), yo.info("Payload overrides cleared")) : n.payloads && (this._instance.persistence.register({ [Ao]: n.payloads }), yo.info("Payload overrides set", { payloads: n.payloads }))), this._fireFeatureFlagsCallbacks();
			return;
		}
		this._fireFeatureFlagsCallbacks();
	}
	onFeatureFlags(e) {
		if (this.addFeatureFlagsHandler(e), this._hasLoadedFlags) {
			var { flags: t, flagVariants: n } = this._prepareFeatureFlagsForCallbacks();
			e(t, n);
		}
		return () => this.removeFeatureFlagsHandler(e);
	}
	updateEarlyAccessFeatureEnrollment(e, t, n) {
		var r, a = (this._instance.get_property(mn) || []).find(((t) => t.flagKey === e)), o = { ["$feature_enrollment/" + e]: t }, s = {
			$feature_flag: e,
			$feature_enrollment: t,
			$set: o
		};
		a && (s.$early_access_feature_name = a.name), n && (s.$feature_enrollment_stage = n), this._instance.capture("$feature_enrollment_update", s), this.setPersonPropertiesForFlags(o, !1);
		var c = i({}, this.getFlagVariants(), { [e]: t });
		(r = this._instance.persistence) == null || r.register({
			[Do]: Object.keys(Mo(c)),
			[pn]: c
		}), this._fireFeatureFlagsCallbacks();
	}
	getEarlyAccessFeatures(e, t, n) {
		t === void 0 && (t = !1);
		var r = this._instance.get_property(mn), i = n ? "&" + n.map(((e) => "stage=" + e)).join("&") : "";
		if (r && !t) return e(r);
		this._instance._send_request({
			url: this._instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=" + this._instance.config.token + i),
			method: "GET",
			callback: (t) => {
				var n, r;
				if (t.json) {
					var i = t.json.earlyAccessFeatures;
					return (n = this._instance.persistence) == null || n.unregister(mn), (r = this._instance.persistence) == null || r.register({ [mn]: i }), e(i);
				}
			}
		});
	}
	_prepareFeatureFlagsForCallbacks() {
		var e = this.getFlags(), t = this.getFlagVariants();
		return {
			flags: e.filter(((e) => t[e])),
			flagVariants: Object.keys(t).filter(((e) => t[e])).reduce(((e, n) => (e[n] = t[n], e)), {})
		};
	}
	_fireFeatureFlagsCallbacks(e) {
		var { flags: t, flagVariants: n } = this._prepareFeatureFlagsForCallbacks();
		this.featureFlagEventHandlers.forEach(((r) => r(t, n, { errorsLoading: e })));
	}
	setPersonPropertiesForFlags(e, t) {
		t === void 0 && (t = !0);
		var n = this._instance.get_property(gn) || {};
		this._instance.register({ [gn]: i({}, n, e) }), t && this._instance.reloadFeatureFlags();
	}
	resetPersonPropertiesForFlags() {
		this._instance.unregister(gn);
	}
	setGroupPropertiesForFlags(e, t) {
		t === void 0 && (t = !0);
		var n = this._instance.get_property(_n) || {};
		Object.keys(n).length !== 0 && Object.keys(n).forEach(((t) => {
			n[t] = i({}, n[t], e[t]), delete e[t];
		})), this._instance.register({ [_n]: i({}, n, e) }), t && this._instance.reloadFeatureFlags();
	}
	resetGroupPropertiesForFlags(e) {
		if (e) {
			var t = this._instance.get_property(_n) || {};
			this._instance.register({ [_n]: i({}, t, { [e]: {} }) });
		} else this._instance.unregister(_n);
	}
	reset() {
		this._hasLoadedFlags = !1, this._requestInFlight = !1, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1;
	}
} }, zo = { sessionRecording: class {
	get started() {
		var e;
		return !((e = this._lazyLoadedSessionRecording) == null || !e.isStarted);
	}
	get status() {
		return this._recordingStatus === eo || this._recordingStatus === to ? this._recordingStatus : this._lazyLoadedSessionRecording?.status ?? this._recordingStatus;
	}
	constructor(e) {
		if (this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = Qa, this._persistFlagsOnSessionListener = void 0, this._instance = e, !this._instance.sessionManager) throw ro.error("started without valid sessionManager"), /* @__PURE__ */ Error(no + " started without valid sessionManager. This is a bug.");
		if (this._instance.config.cookieless_mode === "always") throw Error(no + " cannot be used with cookieless_mode=\"always\"");
	}
	initialize() {
		this.startIfEnabledOrStop();
	}
	get _isRecordingEnabled() {
		var e, t = !((e = this._instance.get_property(un)) == null || !e.enabled), n = !this._instance.config.disable_session_recording, r = this._instance.config.disable_session_recording || this._instance.consent.isOptedOut();
		return s && t && n && !r;
	}
	startIfEnabledOrStop(e) {
		var t;
		if (!this._isRecordingEnabled || (t = this._lazyLoadedSessionRecording) == null || !t.isStarted) {
			var n = !j(Object.assign) && !j(Array.from);
			this._isRecordingEnabled && n ? (this._lazyLoadAndStart(e), ro.info("starting")) : (this._recordingStatus = Qa, this.stopRecording());
		}
	}
	_lazyLoadAndStart(e) {
		var t, n, r;
		this._isRecordingEnabled && (this._recordingStatus !== eo && this._recordingStatus !== to && (this._recordingStatus = $a), y != null && (t = y.__PosthogExtensions__) != null && (t = t.rrweb) != null && t.record && (n = y.__PosthogExtensions__) != null && n.initSessionRecording ? this._onScriptLoaded(e) : (r = y.__PosthogExtensions__) == null || r.loadExternalDependency == null || r.loadExternalDependency(this._instance, this._scriptName, ((t) => {
			if (t) return ro.error("could not load recorder", t);
			this._onScriptLoaded(e);
		})));
	}
	stopRecording() {
		var e, t;
		(e = this._persistFlagsOnSessionListener) == null || e.call(this), this._persistFlagsOnSessionListener = void 0, (t = this._lazyLoadedSessionRecording) == null || t.stop();
	}
	_discardRecording() {
		var e, t;
		(e = this._persistFlagsOnSessionListener) == null || e.call(this), this._persistFlagsOnSessionListener = void 0, (t = this._lazyLoadedSessionRecording) == null || t.discard();
	}
	_resetSampling() {
		var e;
		(e = this._instance.persistence) == null || e.unregister(fn);
	}
	_validateSampleRate(e, t) {
		if (P(e)) return null;
		var n, r = F(e) ? e : parseFloat(e);
		return typeof (n = r) == "number" && Number.isFinite(n) && n >= 0 && n <= 1 ? r : (ro.warn(t + " must be between 0 and 1. Ignoring invalid value:", e), null);
	}
	_persistRemoteConfig(e) {
		if (this._instance.persistence) {
			var t, n = this._instance.persistence, r = () => {
				var t = !1 === e.sessionRecording ? void 0 : e.sessionRecording, r = this._validateSampleRate(this._instance.config.session_recording?.sampleRate, "session_recording.sampleRate"), a = this._validateSampleRate(t?.sampleRate, "remote config sampleRate"), o = r ?? a;
				P(o) && this._resetSampling();
				var s = t?.minimumDurationMilliseconds;
				n.register({ [un]: i({
					cache_timestamp: Date.now(),
					enabled: !!t
				}, t, {
					networkPayloadCapture: i({ capturePerformance: e.capturePerformance }, t?.networkPayloadCapture),
					canvasRecording: {
						enabled: t?.recordCanvas,
						fps: t?.canvasFps,
						quality: t?.canvasQuality
					},
					sampleRate: o,
					minimumDurationMilliseconds: j(s) ? null : s,
					endpoint: t?.endpoint,
					triggerMatchType: t?.triggerMatchType,
					masking: t?.masking,
					urlTriggers: t?.urlTriggers
				}) });
			};
			r(), (t = this._persistFlagsOnSessionListener) == null || t.call(this), this._persistFlagsOnSessionListener = this._instance.sessionManager?.onSessionId(r);
		}
	}
	onRemoteConfig(e) {
		"sessionRecording" in e ? !1 === e.sessionRecording ? (this._persistRemoteConfig(e), this._discardRecording()) : (this._persistRemoteConfig(e), this.startIfEnabledOrStop()) : (this._recordingStatus === eo && (this._recordingStatus = to, ro.warn("config refresh failed, recording will not start until page reload")), this.startIfEnabledOrStop());
	}
	log(e, t) {
		var n;
		t === void 0 && (t = "log"), (n = this._lazyLoadedSessionRecording) != null && n.log ? this._lazyLoadedSessionRecording.log(e, t) : ro.warn("log called before recorder was ready");
	}
	get _scriptName() {
		var e, t, n = (e = this._instance) == null || (e = e.persistence) == null ? void 0 : e.get_property(un);
		return (n == null || (t = n.scriptConfig) == null ? void 0 : t.script) || "lazy-recorder";
	}
	_isRemoteConfigFresh() {
		var e = this._instance.get_property(un);
		if (!e) return !1;
		var t = (typeof e == "object" ? e : JSON.parse(e)).cache_timestamp ?? Date.now();
		return Date.now() - t <= 36e5;
	}
	_onScriptLoaded(e) {
		var t;
		if ((t = y.__PosthogExtensions__) == null || !t.initSessionRecording) throw Error("Called on script loaded before session recording is available");
		if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = y.__PosthogExtensions__?.initSessionRecording(this._instance), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
			if (this._recordingStatus === to || this._recordingStatus === eo) return;
			this._recordingStatus = eo, ro.info("persisted remote config is stale, requesting fresh config before starting"), new Rr(this._instance).load();
			return;
		}
		this._recordingStatus = $a, this._lazyLoadedSessionRecording.start(e);
	}
	onRRwebEmit(e) {
		var t;
		(t = this._lazyLoadedSessionRecording) == null || t.onRRwebEmit == null || t.onRRwebEmit(e);
	}
	overrideLinkedFlag() {
		var e, t;
		this._lazyLoadedSessionRecording || (t = this._instance.persistence) == null || t.register({ $replay_override_linked_flag: !0 }), (e = this._lazyLoadedSessionRecording) == null || e.overrideLinkedFlag();
	}
	overrideSampling() {
		var e, t;
		this._lazyLoadedSessionRecording || (t = this._instance.persistence) == null || t.register({ $replay_override_sampling: !0 }), (e = this._lazyLoadedSessionRecording) == null || e.overrideSampling();
	}
	overrideTrigger(e) {
		var t, n;
		this._lazyLoadedSessionRecording || (n = this._instance.persistence) == null || n.register({ [e === "url" ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0 }), (t = this._lazyLoadedSessionRecording) == null || t.overrideTrigger(e);
	}
	get sdkDebugProperties() {
		return this._lazyLoadedSessionRecording?.sdkDebugProperties || { $recording_status: this.status };
	}
	tryAddCustomEvent(e, t) {
		var n;
		return !((n = this._lazyLoadedSessionRecording) == null || !n.tryAddCustomEvent(e, t));
	}
} }, Bo = {
	autocapture: class {
		constructor(e) {
			this._initialized = !1, this._isDisabledServerSide = null, this._elementsChainAsString = !1, this.instance = e, this.rageclicks = new Ba(e.config.rageclick), this._elementSelectors = null;
		}
		initialize() {
			this.startIfEnabled();
		}
		get _config() {
			var e = k(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
			return e.url_allowlist = e.url_allowlist?.map(((e) => new RegExp(e))), e.url_ignorelist = e.url_ignorelist?.map(((e) => new RegExp(e))), e;
		}
		_addDomEventHandlers() {
			if (this.isBrowserSupported()) {
				if (s && p) {
					var e = (e) => {
						e ||= s?.event;
						try {
							this._captureEvent(e);
						} catch (e) {
							Ha.error("Failed to capture event", e);
						}
					};
					if (W(p, "submit", e, { capture: !0 }), W(p, "change", e, { capture: !0 }), W(p, "click", e, { capture: !0 }), this._config.capture_copied_text) {
						var t = (e) => {
							e ||= s?.event, this._captureEvent(e, Va);
						};
						W(p, "copy", t, { capture: !0 }), W(p, "cut", t, { capture: !0 });
					}
				}
			} else Ha.info("Disabling Automatic Event Collection because this browser is not supported");
		}
		startIfEnabled() {
			this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0);
		}
		onRemoteConfig(e) {
			e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({ [en]: !!e.autocapture_opt_out }), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled();
		}
		setElementSelectors(e) {
			this._elementSelectors = e;
		}
		getElementSelectors(e) {
			var t, n = [];
			return (t = this._elementSelectors) == null || t.forEach(((t) => {
				(p?.querySelectorAll(t))?.forEach(((r) => {
					e === r && n.push(t);
				}));
			})), n;
		}
		get isEnabled() {
			var e = this.instance.persistence?.props[en], t = this._isDisabledServerSide;
			if (N(t) && !L(e) && !this.instance._shouldDisableFlags()) return !1;
			var n = this._isDisabledServerSide ?? !!e;
			return !!this.instance.config.autocapture && !n;
		}
		_captureEvent(e, t) {
			if (t === void 0 && (t = "$autocapture"), this.isEnabled) {
				var n, r = ha(e);
				ca(r) && (r = r.parentNode || null), t === "$autocapture" && e.type === "click" && e instanceof MouseEvent && this.instance.config.rageclick && (n = this.rageclicks) != null && n.isRageClick(e.clientX, e.clientY, e.timeStamp || (/* @__PURE__ */ new Date()).getTime()) && Sa(r, this.instance.config.rageclick) && this._captureEvent(e, "$rageclick");
				var i = t === Va;
				if (r && Ta(r, e, this._config, i, i ? ["copy", "cut"] : void 0)) {
					var { props: a, explicitNoCapture: o } = Ka(r, {
						e,
						maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
						maskAllText: this.instance.config.mask_all_text,
						elementAttributeIgnoreList: this._config.element_attribute_ignorelist,
						elementsChainAsString: this._elementsChainAsString
					});
					if (o) return !1;
					var c = this.getElementSelectors(r);
					if (c && c.length > 0 && (a.$element_selectors = c), t === Va) {
						var l, u = pa(s == null || (l = s.getSelection()) == null ? void 0 : l.toString()), d = e.type || "clipboard";
						if (!u) return !1;
						a.$selected_content = u, a.$copy_type = d;
					}
					return this.instance.capture(t, a), !0;
				}
			}
		}
		isBrowserSupported() {
			return O(p?.querySelectorAll);
		}
	},
	historyAutocapture: class {
		constructor(e) {
			var t;
			this._instance = e, this._lastPathname = (s == null || (t = s.location) == null ? void 0 : t.pathname) || "";
		}
		initialize() {
			this.startIfEnabled();
		}
		get isEnabled() {
			return this._instance.config.capture_pageview === "history_change";
		}
		startIfEnabled() {
			this.isEnabled && (B.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
		}
		stop() {
			this._popstateListener && this._popstateListener(), this._popstateListener = void 0, B.info("History API monitoring stopped");
		}
		monitorHistoryChanges() {
			var e, t;
			if (s && s.history) {
				var n = this;
				(e = s.history.pushState) != null && e.__posthog_wrapped__ || Ja(s.history, "pushState", ((e) => function(t, r, i) {
					e.call(this, t, r, i), n._capturePageview("pushState");
				})), (t = s.history.replaceState) != null && t.__posthog_wrapped__ || Ja(s.history, "replaceState", ((e) => function(t, r, i) {
					e.call(this, t, r, i), n._capturePageview("replaceState");
				})), this._setupPopstateListener();
			}
		}
		_capturePageview(e) {
			try {
				var t, n = s == null || (t = s.location) == null ? void 0 : t.pathname;
				if (!n) return;
				n !== this._lastPathname && this.isEnabled && this._instance.capture("$pageview", { navigation_type: e }), this._lastPathname = n;
			} catch (t) {
				B.error("Error capturing " + e + " pageview", t);
			}
		}
		_setupPopstateListener() {
			if (!this._popstateListener) {
				var e = () => {
					this._capturePageview("popstate");
				};
				W(s, "popstate", e), this._popstateListener = () => {
					s && s.removeEventListener("popstate", e);
				};
			}
		}
	},
	heatmaps: class {
		constructor(e) {
			var t;
			this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = e, this._enabledServerSide = !((t = this.instance.persistence) == null || !t.props[tn]), this.rageclicks = new Ba(e.config.rageclick);
		}
		initialize() {
			this.startIfEnabled();
		}
		get flushIntervalMilliseconds() {
			var e = 5e3;
			return k(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds), e;
		}
		get isEnabled() {
			return P(this.instance.config.capture_heatmaps) ? P(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : !1 !== this.instance.config.capture_heatmaps;
		}
		startIfEnabled() {
			if (this.isEnabled) {
				if (this._initialized) return;
				io.info("starting..."), this._setupListeners(), this._onVisibilityChange();
			} else clearInterval(this._flushInterval ?? void 0), this._removeListeners(), this.getAndClearBuffer();
		}
		onRemoteConfig(e) {
			if ("heatmaps" in e) {
				var t = !!e.heatmaps;
				this.instance.persistence && this.instance.persistence.register({ [tn]: t }), this._enabledServerSide = t, this.startIfEnabled();
			}
		}
		getAndClearBuffer() {
			var e = this._buffer;
			return this._buffer = void 0, e;
		}
		_onDeadClick(e) {
			this._onClick(e.originalEvent, "deadclick");
		}
		_onVisibilityChange() {
			this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = function(e) {
				return e?.visibilityState === "visible";
			}(p) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null;
		}
		_setupListeners() {
			s && p && (this._flushHandler = this._flush.bind(this), W(s, "beforeunload", this._flushHandler), this._onClickHandler = (e) => this._onClick(e || s?.event), W(p, "click", this._onClickHandler, { capture: !0 }), this._onMouseMoveHandler = (e) => this._onMouseMove(e || s?.event), W(p, "mousemove", this._onMouseMoveHandler, { capture: !0 }), this._deadClicksCapture = new $n(this.instance, Zn, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), W(p, "visibilitychange", this._onVisibilityChange_handler), this._initialized = !0);
		}
		_removeListeners() {
			var e;
			s && p && (this._flushHandler && s.removeEventListener("beforeunload", this._flushHandler), this._onClickHandler && p.removeEventListener("click", this._onClickHandler, { capture: !0 }), this._onMouseMoveHandler && p.removeEventListener("mousemove", this._onMouseMoveHandler, { capture: !0 }), this._onVisibilityChange_handler && p.removeEventListener("visibilitychange", this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), (e = this._deadClicksCapture) == null || e.stop(), this._initialized = !1);
		}
		_getProperties(e, t) {
			var n = this.instance.scrollManager.scrollY(), r = this.instance.scrollManager.scrollX(), i = this.instance.scrollManager.scrollElement(), a = function(e, t, n) {
				for (var r = e; r && oa(r) && !sa(r, "body");) {
					if (r === n) return !1;
					if (S(t, s?.getComputedStyle(r).position)) return !0;
					r = va(r);
				}
				return !1;
			}(ha(e), ["fixed", "sticky"], i);
			return {
				x: e.clientX + (a ? 0 : r),
				y: e.clientY + (a ? 0 : n),
				target_fixed: a,
				type: t
			};
		}
		_onClick(e, t) {
			var n;
			if (t === void 0 && (t = "click"), !aa(e.target) && ao(e)) {
				var r = this._getProperties(e, t);
				(n = this.rageclicks) != null && n.isRageClick(e.clientX, e.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._capture(i({}, r, { type: "rageclick" })), this._capture(r);
			}
		}
		_onMouseMove(e) {
			!aa(e.target) && ao(e) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
				this._capture(this._getProperties(e, "mousemove"));
			}), 500));
		}
		_capture(e) {
			if (s) {
				var t = s.location.href, n = this.instance.config.mask_personal_data_properties, r = this.instance.config.custom_personal_data_properties, i = lr(t, n ? Vt([], fr, r || []) : [], mr);
				this._buffer = this._buffer || {}, this._buffer[i] || (this._buffer[i] = []), this._buffer[i].push(e);
			}
		}
		_flush() {
			this._buffer && !A(this._buffer) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
		}
	},
	deadClicksAutocapture: $n,
	webVitalsAutocapture: class {
		constructor(e) {
			var t;
			this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
				url: void 0,
				metrics: [],
				firstMetricTimestamp: void 0
			}, this._flushToCapture = () => {
				clearTimeout(this._delayedFlushTimer), this._buffer.metrics.length !== 0 && (this._instance.capture("$web_vitals", this._buffer.metrics.reduce(((e, t) => i({}, e, {
					["$web_vitals_" + t.name + "_event"]: i({}, t),
					["$web_vitals_" + t.name + "_value"]: t.value
				})), {})), this._buffer = {
					url: void 0,
					metrics: [],
					firstMetricTimestamp: void 0
				});
			}, this._addToBuffer = (e) => {
				var t = this._instance.sessionManager?.checkAndGetSessionAndWindowId(!0);
				if (j(t)) Xa.error("Could not read session ID. Dropping metrics!");
				else {
					this._buffer = this._buffer || {
						url: void 0,
						metrics: [],
						firstMetricTimestamp: void 0
					};
					var n = this._currentURL();
					j(n) || (P(e?.name) || P(e?.value) ? Xa.error("Invalid metric received", e) : this._maxAllowedValue && e.value >= this._maxAllowedValue ? Xa.error("Ignoring metric with value >= " + this._maxAllowedValue, e) : (this._buffer.url !== n && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), j(this._buffer.url) && (this._buffer.url = n), this._buffer.firstMetricTimestamp = j(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp, e.attribution && e.attribution.interactionTargetElement && (e.attribution.interactionTargetElement = void 0), this._buffer.metrics.push(i({}, e, {
						$current_url: n,
						$session_id: t.sessionId,
						$window_id: t.windowId,
						timestamp: Date.now()
					})), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()));
				}
			}, this._startCapturing = () => {
				if (!this._initialized) {
					var e, t, n, r, i = y.__PosthogExtensions__;
					j(i) || j(i.postHogWebVitalsCallbacks) || ({onLCP: e, onCLS: t, onFCP: n, onINP: r} = i.postHogWebVitalsCallbacks), e && t && n && r ? (this.allowedMetrics.indexOf("LCP") > -1 && e(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && t(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && n(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && r(this._addToBuffer.bind(this)), this._initialized = !0) : Xa.error("web vitals callbacks not loaded - not starting");
				}
			}, this._instance = e, this._enabledServerSide = !((t = this._instance.persistence) == null || !t.props[on]), this.startIfEnabled();
		}
		get allowedMetrics() {
			var e = k(this._instance.config.capture_performance) ? this._instance.config.capture_performance?.web_vitals_allowed_metrics : void 0;
			return P(e) ? this._instance.persistence?.props[ln] || [
				"CLS",
				"FCP",
				"INP",
				"LCP"
			] : e;
		}
		get flushToCaptureTimeoutMs() {
			return (k(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3;
		}
		get useAttribution() {
			var e = k(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals_attribution : void 0;
			return e != null && e;
		}
		get _maxAllowedValue() {
			var e = k(this._instance.config.capture_performance) && F(this._instance.config.capture_performance.__web_vitals_max_value) ? this._instance.config.capture_performance.__web_vitals_max_value : Za;
			return 0 < e && e <= 6e4 ? Za : e;
		}
		get isEnabled() {
			var e = m?.protocol;
			if (e !== "http:" && e !== "https:") return Xa.info("Web Vitals are disabled on non-http/https protocols"), !1;
			var t = k(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals : L(this._instance.config.capture_performance) ? this._instance.config.capture_performance : void 0;
			return L(t) ? t : this._enabledServerSide;
		}
		startIfEnabled() {
			this.isEnabled && !this._initialized && (Xa.info("enabled, starting..."), this._loadScript(this._startCapturing));
		}
		onRemoteConfig(e) {
			if ("capturePerformance" in e) {
				var t = k(e.capturePerformance) && !!e.capturePerformance.web_vitals, n = k(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
				this._instance.persistence && (this._instance.persistence.register({ [on]: t }), this._instance.persistence.register({ [ln]: n })), this._enabledServerSide = t, this.startIfEnabled();
			}
		}
		_loadScript(e) {
			var t, n;
			if ((t = y.__PosthogExtensions__) != null && t.postHogWebVitalsCallbacks) e();
			else {
				var r = this.useAttribution ? "web-vitals-with-attribution" : "web-vitals";
				(n = y.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, r, ((t) => {
					t ? Xa.error("failed to load script", t) : e();
				}));
			}
		}
		_currentURL() {
			var e = s ? s.location.href : void 0;
			if (e) {
				var t = this._instance.config.mask_personal_data_properties, n = this._instance.config.custom_personal_data_properties;
				return lr(e, t ? Vt([], fr, n || []) : [], mr);
			}
			Xa.error("Could not determine current URL");
		}
	}
}, Vo = {
	exceptionObserver: class {
		constructor(e) {
			var t;
			this._startCapturing = () => {
				var e;
				if (s && this.isEnabled && (e = y.__PosthogExtensions__) != null && e.errorWrappingFunctions) {
					var t = y.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, n = y.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, r = y.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
					try {
						!this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = t(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = n(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = r(this.captureException.bind(this)));
					} catch (e) {
						qa.error("failed to start", e), this._stopCapturing();
					}
				}
			}, this._instance = e, this._remoteEnabled = !((t = this._instance.persistence) == null || !t.props[nn]), this._rateLimiter = new pe({
				refillRate: this._instance.config.error_tracking.__exceptionRateLimiterRefillRate ?? 1,
				bucketSize: this._instance.config.error_tracking.__exceptionRateLimiterBucketSize ?? 10,
				refillInterval: 1e4,
				_logger: qa
			}), this._config = this._requiredConfig(), this.startIfEnabledOrStop();
		}
		_requiredConfig() {
			var e = this._instance.config.capture_exceptions, t = {
				capture_unhandled_errors: !1,
				capture_unhandled_rejections: !1,
				capture_console_errors: !1
			};
			return k(e) ? t = i({}, t, e) : (j(e) ? this._remoteEnabled : e) && (t = i({}, t, {
				capture_unhandled_errors: !0,
				capture_unhandled_rejections: !0
			})), t;
		}
		get isEnabled() {
			return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections;
		}
		startIfEnabledOrStop() {
			this.isEnabled ? (qa.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing();
		}
		_loadScript(e) {
			var t, n;
			(t = y.__PosthogExtensions__) != null && t.errorWrappingFunctions && e(), (n = y.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, "exception-autocapture", ((t) => {
				if (t) return qa.error("failed to load script", t);
				e();
			}));
		}
		_stopCapturing() {
			var e, t, n;
			(e = this._unwrapOnError) == null || e.call(this), this._unwrapOnError = void 0, (t = this._unwrapUnhandledRejection) == null || t.call(this), this._unwrapUnhandledRejection = void 0, (n = this._unwrapConsoleError) == null || n.call(this), this._unwrapConsoleError = void 0;
		}
		onRemoteConfig(e) {
			"autocaptureExceptions" in e && (this._remoteEnabled = !!e.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({ [nn]: this._remoteEnabled }), this._config = this._requiredConfig(), this.startIfEnabledOrStop());
		}
		onConfigChange() {
			this._config = this._requiredConfig();
		}
		captureException(e) {
			var t, n, r = (e == null || (t = e.$exception_list) == null || (t = t[0]) == null ? void 0 : t.type) ?? "Exception";
			this._rateLimiter.consumeRateLimit(r) ? qa.info("Skipping exception capture because of client rate limiting.", { exception: r }) : (n = this._instance.exceptions) == null || n.sendExceptionEvent(e);
		}
	},
	exceptions: class {
		constructor(e) {
			this._suppressionRules = [], this._errorPropertiesBuilder = new pt([
				new Dt(),
				new Lt(),
				new kt(),
				new Ot(),
				new Ft(),
				new Pt(),
				new jt(),
				new It()
			], Et()), this._instance = e, this._suppressionRules = this._instance.persistence?.get_property(rn) ?? [];
		}
		onRemoteConfig(e) {
			if ("errorTracking" in e) {
				var t = e.errorTracking?.suppressionRules ?? [], n = e.errorTracking?.captureExtensionExceptions;
				this._suppressionRules = t, this._instance.persistence && this._instance.persistence.register({
					[rn]: this._suppressionRules,
					[an]: n
				});
			}
		}
		get _captureExtensionExceptions() {
			var e, t = !!this._instance.get_property(an);
			return (e = this._instance.config.error_tracking.captureExtensionExceptions ?? t) != null && e;
		}
		buildProperties(e, t) {
			return this._errorPropertiesBuilder.buildFromUnknown(e, {
				syntheticException: t?.syntheticException,
				mechanism: { handled: t?.handled }
			});
		}
		sendExceptionEvent(e) {
			var t = e.$exception_list;
			if (this._isExceptionList(t)) {
				if (this._matchesSuppressionRule(t)) return void Fo.info("Skipping exception capture because a suppression rule matched");
				if (!this._captureExtensionExceptions && this._isExtensionException(t)) return void Fo.info("Skipping exception capture because it was thrown by an extension");
				if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(t)) return void Fo.info("Skipping exception capture because it was thrown by the PostHog SDK");
			}
			return this._instance.capture("$exception", e, {
				_noTruncate: !0,
				_batchKey: "exceptionEvent",
				_originatedFromCaptureException: !0
			});
		}
		_matchesSuppressionRule(e) {
			if (e.length === 0) return !1;
			var t = e.reduce(((e, t) => {
				var { type: n, value: r } = t;
				return M(n) && n.length > 0 && e.$exception_types.push(n), M(r) && r.length > 0 && e.$exception_values.push(r), e;
			}), {
				$exception_types: [],
				$exception_values: []
			});
			return this._suppressionRules.some(((e) => {
				var n = e.values.map(((e) => {
					var n = Ii[e.operator], r = D(e.value) ? e.value : [e.value], i = t[e.key] ?? [];
					return r.length > 0 && n(r, i);
				}));
				return e.type === "OR" ? n.some(Boolean) : n.every(Boolean);
			}));
		}
		_isExtensionException(e) {
			return e.flatMap(((e) => e.stacktrace?.frames ?? [])).some(((e) => e.filename && e.filename.startsWith("chrome-extension://")));
		}
		_isPostHogException(e) {
			if (e.length > 0) {
				var t, n, r = e[0].stacktrace?.frames ?? [], i = r[r.length - 1];
				return (t = i == null || (n = i.filename) == null ? void 0 : n.includes("posthog.com/static")) != null && t;
			}
			return !1;
		}
		_isExceptionList(e) {
			return !P(e) && D(e);
		}
	}
}, Ho = i({ productTours: class {
	constructor(e) {
		this._productTourManager = null, this._cachedTours = null, this._instance = e;
	}
	initialize() {
		this.loadIfEnabled();
	}
	onRemoteConfig(e) {
		"productTours" in e && (this._instance.persistence && this._instance.persistence.register({ [cn]: !!e.productTours }), this.loadIfEnabled());
	}
	loadIfEnabled() {
		var e, t;
		this._productTourManager || (e = this._instance).config.disable_product_tours || (t = e.persistence) == null || !t.get_property(cn) || this._loadScript((() => this._startProductTours()));
	}
	_loadScript(e) {
		var t, n;
		(t = y.__PosthogExtensions__) != null && t.generateProductTours ? e() : (n = y.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, "product-tours", ((t) => {
			t ? oo.error("Could not load product tours script", t) : e();
		}));
	}
	_startProductTours() {
		var e;
		!this._productTourManager && (e = y.__PosthogExtensions__) != null && e.generateProductTours && (this._productTourManager = y.__PosthogExtensions__.generateProductTours(this._instance, !0));
	}
	getProductTours(e, t) {
		if (t === void 0 && (t = !1), !D(this._cachedTours) || t) {
			var n = this._instance.persistence;
			if (n) {
				var r = n.props[so];
				if (D(r) && !t) return this._cachedTours = r, void e(r, { isLoaded: !0 });
			}
			this._instance._send_request({
				url: this._instance.requestRouter.endpointFor("api", "/api/product_tours/?token=" + this._instance.config.token),
				method: "GET",
				callback: (t) => {
					var r = t.statusCode;
					if (r !== 200 || !t.json) {
						var i = "Product Tours API could not be loaded, status: " + r;
						oo.error(i), e([], {
							isLoaded: !1,
							error: i
						});
						return;
					}
					var a = D(t.json.product_tours) ? t.json.product_tours : [];
					this._cachedTours = a, n && n.register({ [so]: a }), e(a, { isLoaded: !0 });
				}
			});
		} else e(this._cachedTours, { isLoaded: !0 });
	}
	getActiveProductTours(e) {
		P(this._productTourManager) ? e([], {
			isLoaded: !1,
			error: "Product tours not loaded"
		}) : this._productTourManager.getActiveProductTours(e);
	}
	showProductTour(e) {
		var t;
		(t = this._productTourManager) == null || t.showTourById(e);
	}
	previewTour(e) {
		this._productTourManager ? this._productTourManager.previewTour(e) : this._loadScript((() => {
			var t;
			this._startProductTours(), (t = this._productTourManager) == null || t.previewTour(e);
		}));
	}
	dismissProductTour() {
		var e;
		(e = this._productTourManager) == null || e.dismissTour("user_clicked_skip");
	}
	nextStep() {
		var e;
		(e = this._productTourManager) == null || e.nextStep();
	}
	previousStep() {
		var e;
		(e = this._productTourManager) == null || e.previousStep();
	}
	clearCache() {
		var e;
		this._cachedTours = null, (e = this._instance.persistence) == null || e.unregister(so);
	}
	resetTour(e) {
		var t;
		(t = this._productTourManager) == null || t.resetTour(e);
	}
	resetAllTours() {
		var e;
		(e = this._productTourManager) == null || e.resetAllTours();
	}
	cancelPendingTour(e) {
		var t;
		(t = this._productTourManager) == null || t.cancelPendingTour(e);
	}
} }, Ro), Uo = { siteApps: class {
	constructor(e) {
		this._instance = e, this._bufferedInvocations = [], this.apps = {};
	}
	get isEnabled() {
		return !!this._instance.config.opt_in_site_apps;
	}
	_eventCollector(e, t) {
		if (t) {
			var n = this.globalsForEvent(t);
			this._bufferedInvocations.push(n), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10));
		}
	}
	get siteAppLoaders() {
		var e;
		return (e = y._POSTHOG_REMOTE_CONFIG) == null || (e = e[this._instance.config.token]) == null ? void 0 : e.siteApps;
	}
	initialize() {
		if (this.isEnabled) {
			var e = this._instance._addCaptureHook(this._eventCollector.bind(this));
			this._stopBuffering = () => {
				e(), this._bufferedInvocations = [], this._stopBuffering = void 0;
			};
		}
	}
	globalsForEvent(e) {
		if (!e) throw Error("Event payload is required");
		var t = {}, n = this._instance.get_property("$groups") || [], r = this._instance.get_property("$stored_group_properties") || {};
		for (var [o, s] of Object.entries(r)) t[o] = {
			id: n[o],
			type: o,
			properties: s
		};
		var { $set_once: c, $set: l } = e;
		return {
			event: i({}, a(e, co), {
				properties: i({}, e.properties, l ? { $set: i({}, e.properties?.$set ?? {}, l) } : {}, c ? { $set_once: i({}, e.properties?.$set_once ?? {}, c) } : {}),
				elements_chain: e.properties?.$elements_chain ?? "",
				distinct_id: e.properties?.distinct_id
			}),
			person: { properties: this._instance.get_property("$stored_person_properties") },
			groups: t
		};
	}
	setupSiteApp(e) {
		var t = this.apps[e.id], n = () => {
			var n;
			(!t.errored && this._bufferedInvocations.length && (lo.info("Processing " + this._bufferedInvocations.length + " events for site app with id " + e.id), this._bufferedInvocations.forEach(((e) => t.processEvent == null ? void 0 : t.processEvent(e))), t.processedBuffer = !0), Object.values(this.apps).every(((e) => e.processedBuffer || e.errored))) && ((n = this._stopBuffering) == null || n.call(this));
		}, r = !1, i = (i) => {
			t.errored = !i, t.loaded = !0, lo.info("Site app with id " + e.id + " " + (i ? "loaded" : "errored")), r && n();
		};
		try {
			var { processEvent: a } = e.init({
				posthog: this._instance,
				callback: (e) => {
					i(e);
				}
			});
			a && (t.processEvent = a), r = !0;
		} catch (t) {
			lo.error("Error while initializing PostHog app with config id " + e.id, t), i(!1);
		}
		if (r && t.loaded) try {
			n();
		} catch (n) {
			lo.error("Error while processing buffered events PostHog app with config id " + e.id, n), t.errored = !0;
		}
	}
	_setupSiteApps() {
		var e = this.siteAppLoaders || [];
		for (var t of e) this.apps[t.id] = {
			id: t.id,
			loaded: !1,
			errored: !1,
			processedBuffer: !1
		};
		for (var n of e) this.setupSiteApp(n);
	}
	_onCapturedEvent(e) {
		if (Object.keys(this.apps).length !== 0) {
			var t = this.globalsForEvent(e);
			for (var n of Object.values(this.apps)) try {
				n.processEvent == null || n.processEvent(t);
			} catch (t) {
				lo.error("Error while processing event " + e.event + " for site app " + n.id, t);
			}
		}
	}
	onRemoteConfig(e) {
		var t, n, r, i = this;
		if ((t = this.siteAppLoaders) != null && t.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", ((e) => this._onCapturedEvent(e)))) : void lo.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
		if ((n = this._stopBuffering) == null || n.call(this), (r = e.siteApps) != null && r.length) if (this.isEnabled) {
			var a = function(e) {
				var t;
				y["__$$ph_site_app_" + e] = i._instance, (t = y.__PosthogExtensions__) == null || t.loadSiteApp == null || t.loadSiteApp(i._instance, s, ((t) => {
					if (t) return lo.error("Error while initializing PostHog app with config id " + e, t);
				}));
			};
			for (var { id: o, url: s } of e.siteApps) a(o);
		} else lo.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
	}
} }, Wo = { tracingHeaders: class {
	constructor(e) {
		this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._startCapturing = () => {
			var e, t;
			j(this._restoreXHRPatch) && ((e = y.__PosthogExtensions__) == null || (e = e.tracingHeadersPatchFns) == null || e._patchXHR(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager)), j(this._restoreFetchPatch) && ((t = y.__PosthogExtensions__) == null || (t = t.tracingHeadersPatchFns) == null || t._patchFetch(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager));
		}, this._instance = e;
	}
	initialize() {
		this.startIfEnabledOrStop();
	}
	_loadScript(e) {
		var t, n;
		(t = y.__PosthogExtensions__) != null && t.tracingHeadersPatchFns && e(), (n = y.__PosthogExtensions__) == null || n.loadExternalDependency == null || n.loadExternalDependency(this._instance, "tracing-headers", ((t) => {
			if (t) return Ya.error("failed to load script", t);
			e();
		}));
	}
	startIfEnabledOrStop() {
		var e, t;
		this._instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : ((e = this._restoreXHRPatch) == null || e.call(this), (t = this._restoreFetchPatch) == null || t.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0);
	}
} }, Go = i({ surveys: class {
	constructor(e) {
		this._isSurveysEnabled = void 0, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyCallbacks = [], this._getSurveysInFlightPromise = null, this._instance = e, this._surveyEventReceiver = null;
	}
	initialize() {
		this.loadIfEnabled();
	}
	onRemoteConfig(e) {
		if (!this._instance.config.disable_surveys) {
			var t = e.surveys;
			if (P(t)) return Z.warn("Flags not loaded yet. Not loading surveys.");
			this._isSurveysEnabled = D(t) ? t.length > 0 : t, Z.info("flags response received, isSurveysEnabled: " + this._isSurveysEnabled), this.loadIfEnabled();
		}
	}
	reset() {
		localStorage.removeItem("lastSeenSurveyDate");
		for (var e = [], t = 0; t < localStorage.length; t++) {
			var n = localStorage.key(t);
			(n != null && n.startsWith(Hi) || n != null && n.startsWith("inProgressSurvey_")) && e.push(n);
		}
		e.forEach(((e) => localStorage.removeItem(e)));
	}
	loadIfEnabled() {
		if (!this._surveyManager) if (this._isInitializingSurveys) Z.info("Already initializing surveys, skipping...");
		else if (this._instance.config.disable_surveys) Z.info("Disabled. Not loading surveys.");
		else if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) Z.info("Not loading surveys in cookieless mode without consent.");
		else {
			var e = y?.__PosthogExtensions__;
			if (e) {
				if (!j(this._isSurveysEnabled) || this._instance.config.advanced_enable_surveys) {
					var t = this._isSurveysEnabled || this._instance.config.advanced_enable_surveys;
					this._isInitializingSurveys = !0;
					try {
						var n = e.generateSurveys;
						if (n) return void this._completeSurveyInitialization(n, t);
						var r = e.loadExternalDependency;
						if (!r) return void this._handleSurveyLoadError("PostHog loadExternalDependency extension not found.");
						r(this._instance, "surveys", ((n) => {
							n || !e.generateSurveys ? this._handleSurveyLoadError("Could not load surveys script", n) : this._completeSurveyInitialization(e.generateSurveys, t);
						}));
					} catch (e) {
						throw this._handleSurveyLoadError("Error initializing surveys", e), e;
					} finally {
						this._isInitializingSurveys = !1;
					}
				}
			} else Z.error("PostHog Extensions not found.");
		}
	}
	_completeSurveyInitialization(e, t) {
		this._surveyManager = e(this._instance, t), this._surveyEventReceiver = new mo(this._instance), Z.info("Surveys loaded successfully"), this._notifySurveyCallbacks({ isLoaded: !0 });
	}
	_handleSurveyLoadError(e, t) {
		Z.error(e, t), this._notifySurveyCallbacks({
			isLoaded: !1,
			error: e
		});
	}
	onSurveysLoaded(e) {
		return this._surveyCallbacks.push(e), this._surveyManager && this._notifySurveyCallbacks({ isLoaded: !0 }), () => {
			this._surveyCallbacks = this._surveyCallbacks.filter(((t) => t !== e));
		};
	}
	getSurveys(e, t) {
		if (t === void 0 && (t = !1), this._instance.config.disable_surveys) return Z.info("Disabled. Not loading surveys."), e([]);
		var n, r = this._instance.get_property(vn);
		if (r && !t) return e(r, { isLoaded: !0 });
		typeof Promise < "u" && this._getSurveysInFlightPromise ? this._getSurveysInFlightPromise.then(((t) => {
			var { surveys: n, context: r } = t;
			return e(n, r);
		})) : (typeof Promise < "u" && (this._getSurveysInFlightPromise = new Promise(((e) => {
			n = e;
		}))), this._instance._send_request({
			url: this._instance.requestRouter.endpointFor("api", "/api/surveys/?token=" + this._instance.config.token),
			method: "GET",
			timeout: this._instance.config.surveys_request_timeout_ms,
			callback: (t) => {
				var r;
				this._getSurveysInFlightPromise = null;
				var i = t.statusCode;
				if (i !== 200 || !t.json) {
					var a = "Surveys API could not be loaded, status: " + i;
					Z.error(a);
					var o = {
						isLoaded: !1,
						error: a
					};
					e([], o), n?.({
						surveys: [],
						context: o
					});
					return;
				}
				var s, c = t.json.surveys || [], l = c.filter(((e) => function(e) {
					return !(!e.start_date || e.end_date);
				}(e) && (function(e) {
					var t;
					return !((t = e.conditions) == null || (t = t.events) == null || (t = t.values) == null || !t.length);
				}(e) || function(e) {
					var t;
					return !((t = e.conditions) == null || (t = t.actions) == null || (t = t.values) == null || !t.length);
				}(e))));
				l.length > 0 && ((s = this._surveyEventReceiver) == null || s.register(l)), (r = this._instance.persistence) == null || r.register({ [vn]: c });
				var u = { isLoaded: !0 };
				e(c, u), n?.({
					surveys: c,
					context: u
				});
			}
		}));
	}
	_notifySurveyCallbacks(e) {
		for (var t of this._surveyCallbacks) try {
			if (!e.isLoaded) return t([], e);
			this.getSurveys(t);
		} catch (e) {
			Z.error("Error in survey callback", e);
		}
	}
	getActiveMatchingSurveys(e, t) {
		if (t === void 0 && (t = !1), !P(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(e, t);
		Z.warn("init was not called");
	}
	_getSurveyById(e) {
		var t = null;
		return this.getSurveys(((n) => {
			t = n.find(((t) => t.id === e)) ?? null;
		})), t;
	}
	_checkSurveyEligibility(e) {
		if (P(this._surveyManager)) return {
			eligible: !1,
			reason: "SDK is not enabled or survey functionality is not yet loaded"
		};
		var t = typeof e == "string" ? this._getSurveyById(e) : e;
		return t ? this._surveyManager.checkSurveyEligibility(t) : {
			eligible: !1,
			reason: "Survey not found"
		};
	}
	canRenderSurvey(e) {
		if (P(this._surveyManager)) return Z.warn("init was not called"), {
			visible: !1,
			disabledReason: "SDK is not enabled or survey functionality is not yet loaded"
		};
		var t = this._checkSurveyEligibility(e);
		return {
			visible: t.eligible,
			disabledReason: t.reason
		};
	}
	canRenderSurveyAsync(e, t) {
		return P(this._surveyManager) ? (Z.warn("init was not called"), Promise.resolve({
			visible: !1,
			disabledReason: "SDK is not enabled or survey functionality is not yet loaded"
		})) : new Promise(((n) => {
			this.getSurveys(((t) => {
				var r = t.find(((t) => t.id === e)) ?? null;
				if (r) {
					var i = this._checkSurveyEligibility(r);
					n({
						visible: i.eligible,
						disabledReason: i.reason
					});
				} else n({
					visible: !1,
					disabledReason: "Survey not found"
				});
			}), t);
		}));
	}
	renderSurvey(e, t, n) {
		var r;
		if (P(this._surveyManager)) Z.warn("init was not called");
		else {
			var i = typeof e == "string" ? this._getSurveyById(e) : e;
			if (i != null && i.id) if (Gi.includes(i.type)) {
				var a = p?.querySelector(t);
				if (a) return (r = i.appearance) != null && r.surveyPopupDelaySeconds ? (Z.info("Rendering survey " + i.id + " with delay of " + i.appearance.surveyPopupDelaySeconds + " seconds"), void setTimeout((() => {
					var e;
					Z.info("Rendering survey " + i.id + " with delay of " + i.appearance?.surveyPopupDelaySeconds + " seconds"), (e = this._surveyManager) == null || e.renderSurvey(i, a, n), Z.info("Survey " + i.id + " rendered");
				}), 1e3 * i.appearance.surveyPopupDelaySeconds)) : void this._surveyManager.renderSurvey(i, a, n);
				Z.warn("Survey element not found");
			} else Z.warn("Surveys of type " + i.type + " cannot be rendered in the app");
			else Z.warn("Survey not found");
		}
	}
	displaySurvey(e, t) {
		var n;
		if (P(this._surveyManager)) Z.warn("init was not called");
		else {
			var r = this._getSurveyById(e);
			if (r) {
				var a = r;
				if ((n = r.appearance) != null && n.surveyPopupDelaySeconds && t.ignoreDelay && (a = i({}, r, { appearance: i({}, r.appearance, { surveyPopupDelaySeconds: 0 }) })), t.displayType !== Mr.Popover && t.initialResponses && Z.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === t.ignoreConditions) {
					var o = this.canRenderSurvey(r);
					if (!o.visible) return void Z.warn("Survey is not eligible to be displayed: ", o.disabledReason);
				}
				t.displayType === Mr.Inline ? this.renderSurvey(a, t.selector, t.properties) : this._surveyManager.handlePopoverSurvey(a, t);
			} else Z.warn("Survey not found");
		}
	}
	cancelPendingSurvey(e) {
		P(this._surveyManager) ? Z.warn("init was not called") : this._surveyManager.cancelSurvey(e);
	}
	handlePageUnload() {
		var e;
		(e = this._surveyManager) == null || e.handlePageUnload();
	}
} }, Ro), Ko = { toolbar: class {
	constructor(e) {
		this.instance = e;
	}
	_setToolbarState(e) {
		y.ph_toolbar_state = e;
	}
	_getToolbarState() {
		return y.ph_toolbar_state ?? vo.UNINITIALIZED;
	}
	initialize() {
		return this.maybeLoadToolbar();
	}
	maybeLoadToolbar(e, t, n) {
		if (e === void 0 && (e = void 0), t === void 0 && (t = void 0), n === void 0 && (n = void 0), Xt(this.instance.config) || !s || !p) return !1;
		e ??= s.location, n ??= s.history;
		try {
			if (!t) {
				try {
					s.localStorage.setItem("test", "test"), s.localStorage.removeItem("test");
				} catch {
					return !1;
				}
				t = s?.localStorage;
			}
			var r, i = ho || ur(e.hash, "__posthog") || ur(e.hash, "state"), a = i ? Ut((() => JSON.parse(atob(decodeURIComponent(i))))) || Ut((() => JSON.parse(decodeURIComponent(i)))) : null;
			return a && a.action === "ph_authorize" ? ((r = a).source = "url", r && Object.keys(r).length > 0 && (a.desiredHash ? e.hash = a.desiredHash : n ? n.replaceState(n.state, "", e.pathname + e.search) : e.hash = "")) : ((r = JSON.parse(t.getItem(go) || "{}")).source = "localstorage", delete r.userIntent), !(!r.token || this.instance.config.token !== r.token) && (this.loadToolbar(r), !0);
		} catch {
			return !1;
		}
	}
	_callLoadToolbar(e) {
		var t = y.ph_load_toolbar || y.ph_load_editor;
		!P(t) && O(t) ? t(e, this.instance) : _o.warn("No toolbar load function found");
	}
	loadToolbar(e) {
		var t = !(p == null || !p.getElementById(On));
		if (!s || t) return !1;
		var n = this.instance.requestRouter.region === "custom" && this.instance.config.advanced_disable_toolbar_metrics, r = i({ token: this.instance.config.token }, e, { apiURL: this.instance.requestRouter.endpointFor("ui") }, n ? { instrument: !1 } : {});
		if (s.localStorage.setItem(go, JSON.stringify(i({}, r, { source: void 0 }))), this._getToolbarState() === vo.LOADED) this._callLoadToolbar(r);
		else if (this._getToolbarState() === vo.UNINITIALIZED) {
			var a;
			this._setToolbarState(vo.LOADING), (a = y.__PosthogExtensions__) == null || a.loadExternalDependency == null || a.loadExternalDependency(this.instance, "toolbar", ((e) => {
				if (e) return _o.error("[Toolbar] Failed to load", e), void this._setToolbarState(vo.UNINITIALIZED);
				this._setToolbarState(vo.LOADED), this._callLoadToolbar(r);
			})), W(s, "turbolinks:load", (() => {
				this._setToolbarState(vo.UNINITIALIZED), this.loadToolbar(r);
			}));
		}
		return !0;
	}
	_loadEditor(e) {
		return this.loadToolbar(e);
	}
	maybeLoadEditor(e, t, n) {
		return e === void 0 && (e = void 0), t === void 0 && (t = void 0), n === void 0 && (n = void 0), this.maybeLoadToolbar(e, t, n);
	}
} }, qo = i({ experiments: Lo }, Ro), Jo = i({}, Ro, zo, Bo, Vo, Ho, Uo, Go, Wo, Ko, qo, { conversations: class {
	constructor(e) {
		this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._instance = e;
	}
	initialize() {
		this.loadIfEnabled();
	}
	onRemoteConfig(e) {
		if (!this._instance.config.disable_conversations) {
			var t = e.conversations;
			P(t) || (L(t) ? this._isConversationsEnabled = t : (this._isConversationsEnabled = t.enabled, this._remoteConfig = t), this.loadIfEnabled());
		}
	}
	reset() {
		var e;
		(e = this._conversationsManager) == null || e.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null;
	}
	loadIfEnabled() {
		if (!(this._conversationsManager || this._isInitializing || this._instance.config.disable_conversations || Xt(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
			var e = y?.__PosthogExtensions__;
			if (e && !j(this._isConversationsEnabled) && this._isConversationsEnabled) if (this._remoteConfig && this._remoteConfig.token) {
				this._isInitializing = !0;
				try {
					var t = e.initConversations;
					if (t) return this._completeInitialization(t), void (this._isInitializing = !1);
					var n = e.loadExternalDependency;
					if (!n) return void this._handleLoadError("PostHog loadExternalDependency extension not found.");
					n(this._instance, "conversations", ((t) => {
						t || !e.initConversations ? this._handleLoadError("Could not load conversations script", t) : this._completeInitialization(e.initConversations), this._isInitializing = !1;
					}));
				} catch (e) {
					this._handleLoadError("Error initializing conversations", e), this._isInitializing = !1;
				}
			} else $.error("Conversations enabled but missing token in remote config.");
		}
	}
	_completeInitialization(e) {
		if (this._remoteConfig) try {
			this._conversationsManager = e(this._remoteConfig, this._instance), $.info("Conversations loaded successfully");
		} catch (e) {
			this._handleLoadError("Error completing conversations initialization", e);
		}
		else $.error("Cannot complete initialization: remote config is null");
	}
	_handleLoadError(e, t) {
		$.error(e, t), this._conversationsManager = null, this._isInitializing = !1;
	}
	show() {
		this._conversationsManager ? this._conversationsManager.show() : $.warn("Conversations not loaded yet.");
	}
	hide() {
		this._conversationsManager && this._conversationsManager.hide();
	}
	isAvailable() {
		return !0 === this._isConversationsEnabled && !N(this._conversationsManager);
	}
	isVisible() {
		var e;
		return (e = this._conversationsManager?.isVisible()) != null && e;
	}
	sendMessage(e, t, n) {
		var i = this;
		return r((function* () {
			return i._conversationsManager ? i._conversationsManager.sendMessage(e, t, n) : ($.warn("Conversations not available yet."), null);
		}))();
	}
	getMessages(e, t) {
		var n = this;
		return r((function* () {
			return n._conversationsManager ? n._conversationsManager.getMessages(e, t) : ($.warn("Conversations not available yet."), null);
		}))();
	}
	markAsRead(e) {
		var t = this;
		return r((function* () {
			return t._conversationsManager ? t._conversationsManager.markAsRead(e) : ($.warn("Conversations not available yet."), null);
		}))();
	}
	getTickets(e) {
		var t = this;
		return r((function* () {
			return t._conversationsManager ? t._conversationsManager.getTickets(e) : ($.warn("Conversations not available yet."), null);
		}))();
	}
	requestRestoreLink(e) {
		var t = this;
		return r((function* () {
			return t._conversationsManager ? t._conversationsManager.requestRestoreLink(e) : ($.warn("Conversations not available yet."), null);
		}))();
	}
	restoreFromToken(e) {
		var t = this;
		return r((function* () {
			return t._conversationsManager ? t._conversationsManager.restoreFromToken(e) : ($.warn("Conversations not available yet."), null);
		}))();
	}
	restoreFromUrlToken() {
		var e = this;
		return r((function* () {
			return e._conversationsManager ? e._conversationsManager.restoreFromUrlToken() : ($.warn("Conversations not available yet."), null);
		}))();
	}
	getCurrentTicketId() {
		return this._conversationsManager?.getCurrentTicketId() ?? null;
	}
	getWidgetSessionId() {
		return this._conversationsManager?.getWidgetSessionId() ?? null;
	}
} }, { logs: class {
	constructor(e) {
		var t;
		this._isLogsEnabled = !1, this._isLoaded = !1, this._instance = e, this._instance && (t = this._instance.config.logs) != null && t.captureConsoleLogs && (this._isLogsEnabled = !0);
	}
	initialize() {
		this.loadIfEnabled();
	}
	onRemoteConfig(e) {
		var t = e.logs?.captureConsoleLogs;
		!P(t) && t && (this._isLogsEnabled = !0, this.loadIfEnabled());
	}
	reset() {}
	loadIfEnabled() {
		if (this._isLogsEnabled && !this._isLoaded) {
			var e = V("[logs]"), t = y?.__PosthogExtensions__;
			if (t) {
				var n = t.loadExternalDependency;
				n ? n(this._instance, "logs", ((n) => {
					var r;
					n || (r = t.logs) == null || !r.initializeLogs ? e.error("Could not load logs script", n) : (t.logs.initializeLogs(this._instance), this._isLoaded = !0);
				})) : e.error("PostHog loadExternalDependency extension not found.");
			} else e.error("PostHog Extensions not found.");
		}
	}
} });
ia.__defaultExtensionClasses = i({}, Jo);
var Yo, Xo = (Yo = Xi[$i] = new ia(), function() {
	function e() {
		e.done || (e.done = !0, ea = !1, H(Xi, (function(e) {
			e._dom_loaded();
		})));
	}
	p != null && p.addEventListener ? p.readyState === "complete" ? e() : W(p, "DOMContentLoaded", e, { capture: !1 }) : s && B.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
}(), Yo);
//#endregion
//#region src/modules/analytics/posthog.js
function Zo(e, t) {
	Xo.capture(e, t);
}
function Qo() {
	try {
		Xo.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N", {
			advanced_disable_decide: !0,
			advanced_disable_feature_flags: !0,
			advanced_disable_feature_flags_on_first_load: !0,
			advanced_disable_toolbar_metrics: !0,
			api_host: "https://us.i.posthog.com",
			autocapture: !1,
			capture_pageview: !1,
			disable_compression: !1,
			disable_persistence: !0,
			disable_session_recording: !0,
			disable_surveys: !0,
			person_profiles: "identified_only"
		});
	} catch (e) {
		t(e);
	}
}
function $o() {
	typeof window.self == "string" && (e(), window.self = window), Qo();
}
//#endregion
export { $o as n, Zo as t };

//# sourceMappingURL=posthog-C2Vh_0Hn.js.map