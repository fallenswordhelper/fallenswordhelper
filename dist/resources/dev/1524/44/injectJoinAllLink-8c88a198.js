import{g as a,bP as i,C as n,c as t,bY as o,bZ as s}from"./calfSystem-f7cf24f6.js"
import{i as c}from"./insertHtmlAfterEnd-63c8758b.js"
function e(a){if(!n(a).includes("New attack group created."))return
let i=""
i=t.enableMaxGroupSizeToJoin?`<a href="${s}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups less than size ${t.maxGroupSizeToJoin}.</p></a>`:`<a href="${o}"><span class="notification-icon"></span><p class="notification-content">Join all attack groups.</p></a>`,c(a,`<li class="notification">${i}</li>`)}function f(){a("li",i).forEach(e)}export default f
//# sourceMappingURL=injectJoinAllLink-8c88a198.js.map
