import{g as a,bQ as i,C as n,c as t,bZ as o,b_ as s}from"./calfSystem-ae2e69af.js"
import{i as c}from"./insertHtmlAfterEnd-f90eb1fc.js"
function e(a){if(!n(a).includes("New attack group created."))return
let i=""
i=t.enableMaxGroupSizeToJoin?`<a href="${o}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups less than size ${t.maxGroupSizeToJoin}.</p></a>`:`<a href="${s}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups.</p></a>`,c(a,`<li class="notification">${i}</li>`)}function f(){a("li",i).forEach(e)}export default f
//# sourceMappingURL=injectJoinAllLink-67d9d6cd.js.map
