// src/modules/system/getCustomUrlParameter.js
function e(e, t) {
	let n = String(e ?? ""), r = n.indexOf("?");
	return new URLSearchParams(r === -1 ? n : n.slice(r)).get(t);
}
export { e as t };

//# sourceMappingURL=getCustomUrlParameter-OUJUdwqs.js.map