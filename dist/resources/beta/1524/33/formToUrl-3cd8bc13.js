import{M as e,N as t,O as c}from"./calfSystem-c91a5c89.js"
function s(s){const a=e(s.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
t(`${c}?${a}`)}export{s as f}
//# sourceMappingURL=formToUrl-3cd8bc13.js.map
