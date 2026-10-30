// src/modules/common/hrefWithoutFst.js
function e(e) {
	if (!e?.href) return "";
	let t = new URL(e.href);
	return t.searchParams.delete("fst"), `${t.pathname.slice(1)}${t.search}`;
}
export { e as t };

//# sourceMappingURL=hrefWithoutFst-CKXuSl5X.js.map