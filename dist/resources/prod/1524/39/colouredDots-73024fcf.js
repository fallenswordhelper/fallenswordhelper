import{b as t}from"./batch-49f23571.js"
import{E as a,I as e,bu as n,B as o}from"./calfSystem-fe534823.js"
import{o as s}from"./onlineDot-f8d6c5fc.js"
function i(){return a('#pCC a[data-tipped*="Last Activity"]')}function c(t){const a=n.exec(t.dataset.tipped)
o(s({min:a[3],hour:a[2],day:a[1]}),t.parentNode.previousElementSibling)}function r(){e("enhanceOnlineDots")&&t([5,3,i(),0,c])}export{r as c,i as g}
//# sourceMappingURL=colouredDots-73024fcf.js.map
