import{M as e,N as t,O as s}from"./calfSystem-c07e3259.js"
function c(c){const a=e(c.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
t(`${s}?${a}`)}export{c as f}
//# sourceMappingURL=formToUrl-f2549b88.js.map
