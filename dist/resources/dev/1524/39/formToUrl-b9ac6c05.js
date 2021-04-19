import{N as e,O as t,P as a}from"./calfSystem-b31aba65.js"
function s(s){const c=e(s.elements).filter((e=>!["button","submit"].includes(e.type))).filter((e=>"checkbox"!==e.type||e.checked)).map((e=>`${e.name}=${e.value}`)).join("&")
t(`${a}?${c}`)}export{s as f}
//# sourceMappingURL=formToUrl-b9ac6c05.js.map
