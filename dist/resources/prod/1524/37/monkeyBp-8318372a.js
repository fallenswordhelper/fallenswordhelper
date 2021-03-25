import{ay as a}from"./calfSystem-60c20ae9.js"
let t
function c(){return t||(t=$("#backpackContainer").data("hcsBackpack")),t}const n=[]
let o
function s(a){const t=a._showPage
a._showPage=function(c,o){a.tabData&&(t.call(a,c,o),function(a){n.length>0&&n.forEach((t=>t(a)))}(a))},o=!0}function e(t,c){n.includes(c)||(o||s(t),a(c)&&n.push(c))}export{c as g,e as m}
//# sourceMappingURL=monkeyBp-8318372a.js.map
