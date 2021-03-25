import{N as e,O as t,P as s}from"./calfSystem-5d0c721b.js"
function c(c){const a=e(c.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
t(`${s}?${a}`)}export{c as f}
//# sourceMappingURL=formToUrl-3d2d4f7c.js.map
