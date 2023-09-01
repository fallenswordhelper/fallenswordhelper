import{j as e,an as t,c4 as n}from"./calfSystem-076d7a01.js"
let r=0
const o=["Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'","The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'","Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."]
function a(e){return n((r||(r=new RegExp(o.join("|"))),r),e)}function l(n){return e("#quickbuff-report font:not(font *)",n).map(t).map(a)}export{l as b}
//# sourceMappingURL=buffReportParser-8ae9fc1a.js.map
