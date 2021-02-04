import{w as t,x as a,b as e,p as s,g as n,i,o as r,y as d,f as c,l as u,z as o,A as l,h as p,B as m}from"./calfSystem-c91a5c89.js"
import{j as f,o as b}from"./jsonFail-536291fd.js"
import{t as y}from"./testQuant-296398b3.js"
import"./testRange-c9dcb76e.js"
import"./numberIsNaN-c188f177.js"
function h(a){return function(a){return t({cmd:"potionbazaar",subcmd:"buyitem",item_id:a})}(a)}let g,B='<table id="fshBazaar"><tr><td colspan="5">Select an item to quick-buy:</td></tr><tr><td colspan="5">Select how many to quick-buy</td></tr><tr><td colspan="5"><input id="buy_amount" class="fshNumberInput" type="number" min="0" max="99" value="1"></td></tr><tr><td>@0@</td><td>@1@</td><td>@2@</td><td>@3@</td><td>@4@</td></tr><tr><td>@5@</td><td>@6@</td><td>@7@</td><td>@8@</td><td>@9@</td></tr><tr><td colspan="3">Selected item:</td><td id="selectedItem" colspan="2"></td></tr><tr><td colspan="5"><span id="fshBazaarWarning" class="fshHide">Warning:<br>pressing [<span id="fshBuy" class="fshLink">This button</span>] now will buy the <span id="quantity">1</span> item(s) WITHOUT confirmation!</span></td></tr><tr><td colspan="5"><span id="buyResultLabel"></span><ol id="buy_result"></ol></td></tr></table>'
function z(){return y(d("buy_amount").value)}function j(t){const{target:a}=t
if(!u("bazaarButton",a))return
const e=z()
e&&function(t,a){o(a,d("quantity")),g=t.getAttribute("itemid"),d("fshBazaarWarning").removeAttribute("class")
const e=t.cloneNode(!1)
e.className="bazaarSelected tip-dynamic"
const s=d("selectedItem")
l("",s),p(s,e)}(a,e)}function N(){const t=z()
t&&o(t,d("quantity"))}function _(t){const a=d("buy_result")
f(t,a)||t.s&&b("You purchased the item!",a)}function q(){if(!g)return
const t=m(d("quantity"))
o(`Buying ${t} items`,d("buyResultLabel"))
for(let a=0;a<t;a+=1)h(g).then(_)}function I(t,a){const e=t.children[0],{tipped:s}=e.dataset
B=B.replace(`@${a}@`,'<span class="bazaarButton tip-dynamic" style="background-image: url(\'@src@\');" itemid="@itemid@" data-tipped="@tipped@"></span>').replace("@src@",e.getAttribute("src")).replace("@itemid@",s.match(/\?item_id=(\d+)/)[1]).replace("@tipped@",s)}function S(){if(a())return
const t=e("img",s)[0]
t.className="fshFloatLeft",n("a",s).forEach(I),B=B.replace(/@\d@/g,""),i(t.parentNode,B),r(d("fshBazaar"),j),c(d("buy_amount"),"input",N),r(d("fshBuy"),q)}export default S
//# sourceMappingURL=bazaar-2a89cdb4.js.map
