import{b as t}from"./batch-a8223d61.js"
import{E as a,I as e,bB as n,B as o}from"./calfSystem-f7cf24f6.js"
import{o as s}from"./onlineDot-0a71eb09.js"
function i(){return a('#pCC a[data-tipped*="Last Activity"]')}function r(t){const a=n.exec(t.dataset.tipped)
o(s({min:a[3],hour:a[2],day:a[1]}),t.parentNode.previousElementSibling)}function c(){e("enhanceOnlineDots")&&t([5,3,i(),0,r])}export{c,i as g}
//# sourceMappingURL=colouredDots-35e61ff1.js.map
