import{b as t}from"./batch-45d4d781.js"
import{E as a,I as n,bv as o,B as e}from"./calfSystem-030d7057.js"
import{o as s}from"./onlineDot-29d4f3fa.js"
function i(){return a('#pCC a[data-tipped*="Last Activity"]')}function r(t){const a=o.exec(t.dataset.tipped)
e(s({min:a[3],hour:a[2],day:a[1]}),t.parentNode.previousElementSibling)}function p(){n("enhanceOnlineDots")&&t([5,3,i(),0,r])}export{p as c,i as g}
//# sourceMappingURL=colouredDots-054b6266.js.map