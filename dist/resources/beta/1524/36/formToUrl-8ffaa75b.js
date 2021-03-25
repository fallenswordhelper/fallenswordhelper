import{N as e,O as t,P as s}from"./calfSystem-4a40365f.js"
function a(a){const c=e(a.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
t(`${s}?${c}`)}export{a as f}
//# sourceMappingURL=formToUrl-8ffaa75b.js.map
