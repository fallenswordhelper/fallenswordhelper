import{M as e,N as t,O as s}from"./calfSystem-793da633.js"
function a(a){const c=e(a.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
t(`${s}?${c}`)}export{a as f}
//# sourceMappingURL=formToUrl-97034a23.js.map
