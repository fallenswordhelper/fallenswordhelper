import{w as t,x as a,b as e,p as s,g as n,i,o as r,y as d,f as u,l as o,z as c,A as l,h as p,B as m}from"./calfSystem-dfa26790.js"
import{j as f,o as b}from"./jsonFail-9b60881a.js"
import{t as y}from"./testQuant-0f1de145.js"
import"./testRange-d919f908.js"
import"./numberIsNaN-738f2a3f.js"
function h(a){return function(a){return t({cmd:"potionbazaar",subcmd:"buyitem",item_id:a})}(a)}let g,B='<table id="fshBazaar"><tr><td colspan="5">Select an item to quick-buy:</td></tr><tr><td colspan="5">Select how many to quick-buy</td></tr><tr><td colspan="5"><input id="buy_amount" class="fshNumberInput" type="number" min="0" max="99" value="1"></td></tr><tr><td>@0@</td><td>@1@</td><td>@2@</td><td>@3@</td><td>@4@</td></tr><tr><td>@5@</td><td>@6@</td><td>@7@</td><td>@8@</td><td>@9@</td></tr><tr><td colspan="3">Selected item:</td><td id="selectedItem" colspan="2"></td></tr><tr><td colspan="5"><span id="fshBazaarWarning" class="fshHide">Warning:<br>pressing [<span id="fshBuy" class="fshLink">This button</span>] now will buy the <span id="quantity">1</span> item(s) WITHOUT confirmation!</span></td></tr><tr><td colspan="5"><span id="buyResultLabel"></span><ol id="buy_result"></ol></td></tr></table>'
function z(){return y(d("buy_amount").value)}function j(t){const{target:a}=t
if(!o("bazaarButton",a))return
const e=z()
e&&function(t,a){c(a,d("quantity")),g=t.getAttribute("itemid"),d("fshBazaarWarning").removeAttribute("class")
const e=t.cloneNode(!1)
e.className="bazaarSelected tip-dynamic"
const s=d("selectedItem")
l("",s),p(s,e)}(a,e)}function N(){const t=z()
t&&c(t,d("quantity"))}function _(t){const a=d("buy_result")
f(t,a)||t.s&&b("You purchased the item!",a)}function q(){if(!g)return
const t=m(d("quantity"))
c(`Buying ${t} items`,d("buyResultLabel"))
for(let a=0;a<t;a+=1)h(g).then(_)}function I(t,a){const e=t.children[0],{tipped:s}=e.dataset
B=B.replace(`@${a}@`,'<span class="bazaarButton tip-dynamic" style="background-image: url(\'@src@\');" itemid="@itemid@" data-tipped="@tipped@"></span>').replace("@src@",e.getAttribute("src")).replace("@itemid@",s.match(/\?item_id=(\d+)/)[1]).replace("@tipped@",s)}function S(){if(a())return
const t=e("img",s)[0]
t.className="fshFloatLeft",n("a",s).forEach(I),B=B.replace(/@\d@/g,""),i(t.parentNode,B),r(d("fshBazaar"),j),u(d("buy_amount"),"input",N),r(d("fshBuy"),q)}export default S
//# sourceMappingURL=bazaar-8417c24e.js.map
