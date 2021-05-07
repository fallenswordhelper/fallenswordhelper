import{g as a,bJ as i,C as n,c as t,bU as o,bV as s}from"./calfSystem-9942149b.js"
import{i as c}from"./insertHtmlAfterEnd-e5fb7af4.js"
function e(a){if(!n(a).includes("New attack group created."))return
let i=""
i=t.enableMaxGroupSizeToJoin?`<a href="${s}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups less than size ${t.maxGroupSizeToJoin}.</p></a>`:`<a href="${o}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups.</p></a>`,c(a,`<li class="notification">${i}</li>`)}function l(){a("li",i).forEach(e)}export default l
//# sourceMappingURL=injectJoinAllLink-eeb2e1de.js.map
