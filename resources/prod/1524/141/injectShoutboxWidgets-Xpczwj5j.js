import{g as t,o as s,b as e,s as a,c as o}from"./calfSystem-Blt4DbaE.js"
let r=0,n=0
function l(t){a("Shoutbox Preview",150===t?"shoutbox":"fsbox")
let s=r.value,e=s.length
e>t&&(s=s.substring(0,t),r.value=s,e=t),n||(n=r.parentNode.parentNode.parentNode.parentNode.insertRow().insertCell()),o(`<table class="sbpTbl"><tbody><tr><td class="sbpHdr">Preview (${e}/${t} characters)</td></tr><tr><td class="sbpMsg"><span>${s}</span></td></tr></tbody></table>`,n)}function b(a){r=t("textInputBox"),s(r,"keyup",e(l,a))}export{b as i}
//# sourceMappingURL=injectShoutboxWidgets-Xpczwj5j.js.map
