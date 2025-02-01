import{g as t,c as e,d as s,s as a,e as r}from"./calfSystem-DiXGAkgN.js"
let o=0,n=0
function l(t){a("Shoutbox Preview",150===t?"shoutbox":"fsbox")
let e=o.value,s=e.length
s>t&&(e=e.substring(0,t),o.value=e,s=t),n||(n=o.parentNode.parentNode.parentNode.parentNode.insertRow().insertCell()),r(`<table class="sbpTbl"><tbody><tr><td class="sbpHdr">Preview (${s}/${t} characters)</td></tr><tr><td class="sbpMsg"><span>${e}</span></td></tr></tbody></table>`,n)}function p(a){o=t("textInputBox"),e(o,"keyup",s(l,a))}export{p as i}
//# sourceMappingURL=injectShoutboxWidgets-BMezKsG4.js.map
