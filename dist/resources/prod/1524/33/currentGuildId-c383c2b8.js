import{g as t,B as c}from"./calfSystem-0708a9bb.js"
let o
function r(t){const r=c(t).match(/\s+guildId: ([0-9]+),/)
r&&(o=Number(r[1]))}function s(){return o||t("script",document.body).forEach(r),o}export{s as c}
//# sourceMappingURL=currentGuildId-c383c2b8.js.map
