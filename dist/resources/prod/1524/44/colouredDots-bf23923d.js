import{b as t}from"./batch-9878d42e.js"
import{E as a,I as e,bx as n,B as o}from"./calfSystem-6ad077b7.js"
import{o as s}from"./onlineDot-465a2c69.js"
function i(){return a('#pCC a[data-tipped*="Last Activity"]')}function r(t){const a=n.exec(t.dataset.tipped)
o(s({min:a[3],hour:a[2],day:a[1]}),t.parentNode.previousElementSibling)}function c(){e("enhanceOnlineDots")&&t([5,3,i(),0,r])}export{c,i as g}
//# sourceMappingURL=colouredDots-bf23923d.js.map
