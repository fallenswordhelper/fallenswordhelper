import{g as t,b as s,c as e,s as a,d as r}from"./calfSystem-DG-hTKTe.js"
let o,n
function l(t){a("Shoutbox Preview",150===t?"shoutbox":"fsbox")
let s=o.value,e=s.length
e>t&&(s=s.substring(0,t),o.value=s,e=t),n||(n=o.parentNode.parentNode.parentNode.parentNode.insertRow().insertCell()),r(`<table class="sbpTbl"><tbody><tr><td class="sbpHdr">Preview (${e}/${t} characters)</td></tr><tr><td class="sbpMsg"><span>${s}</span></td></tr></tbody></table>`,n)}function b(a){o=t("textInputBox"),s(o,"keyup",e(l,a))}export{b as i}
//# sourceMappingURL=injectShoutboxWidgets-DBVvf4hI.js.map
