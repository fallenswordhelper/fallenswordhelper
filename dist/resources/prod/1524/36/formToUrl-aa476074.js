import{N as e,O as t,P as s}from"./calfSystem-e7bde0c3.js"
function c(c){const a=e(c.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
t(`${s}?${a}`)}export{c as f}
//# sourceMappingURL=formToUrl-aa476074.js.map
