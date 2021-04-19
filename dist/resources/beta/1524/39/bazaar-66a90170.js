import{u as t,w as a,x as e,$ as s,y as n,b as i,p as r,g as d,i as u,o as c,z as o,f as l,l as m,A as p,B as b,h as f,C as y}from"./calfSystem-26fbeaeb.js"
import{j as h,o as g}from"./jsonFail-27ef4cdb.js"
import{t as z}from"./testQuant-d1b1ec3a.js"
import"./testRange-ea19cd89.js"
import"./numberIsNaN-d0e4b349.js"
function B(t){const e=a(t)
return"You purchased the item!"===e?{s:!0}:{e:{message:e},s:!1}}function _(a){return t({cmd:"potionbazaar",subcmd:"buyitem",item_id:a}).then(B)}function j(t){return e({cmd:"potionbazaar",subcmd:"buyitem",item_id:t})}let N,q='<table id="fshBazaar"><tr><td colspan="5">Select an item to quick-buy:</td></tr><tr><td colspan="5">Select how many to quick-buy</td></tr><tr><td colspan="5"><input id="buy_amount" class="fshNumberInput" type="number" min="0" max="99" value="1"></td></tr><tr><td>@0@</td><td>@1@</td><td>@2@</td><td>@3@</td><td>@4@</td></tr><tr><td>@5@</td><td>@6@</td><td>@7@</td><td>@8@</td><td>@9@</td></tr><tr><td colspan="3">Selected item:</td><td id="selectedItem" colspan="2"></td></tr><tr><td colspan="5"><span id="fshBazaarWarning" class="fshHide">Warning:<br>pressing [<span id="fshBuy" class="fshLink">This button</span>] now will buy the <span id="quantity">1</span> item(s) WITHOUT confirmation!</span></td></tr><tr><td colspan="5"><span id="buyResultLabel"></span><ol id="buy_result"></ol></td></tr></table>'
function I(){return z(o("buy_amount").value)}function S(t){const{target:a}=t
if(!m("bazaarButton",a))return
const e=I()
e&&function(t,a){p(a,o("quantity")),N=t.getAttribute("itemid"),o("fshBazaarWarning").removeAttribute("class")
const e=t.cloneNode(!1)
e.className="bazaarSelected tip-dynamic"
const s=o("selectedItem")
b("",s),f(s,e)}(a,e)}function k(){const t=I()
t&&p(t,o("quantity"))}function v(t){const a=o("buy_result")
h(t,a)||t.s&&g("You purchased the item!",a)}function w(){if(!N)return
const t=y(o("quantity"))
p(`Buying ${t} items`,o("buyResultLabel"))
for(let e=0;e<t;e+=1)(a=N,s(j,_,a)).then(v)
var a}function A(t,a){const e=t.children[0],{tipped:s}=e.dataset
q=q.replace(`@${a}@`,'<span class="bazaarButton tip-dynamic" style="background-image: url(\'@src@\');" itemid="@itemid@" data-tipped="@tipped@"></span>').replace("@src@",e.getAttribute("src")).replace("@itemid@",s.match(/\?item_id=(\d+)/)[1]).replace("@tipped@",s)}function L(){if(n())return
const t=i("img",r)[0]
t.className="fshFloatLeft",d("a",r).forEach(A),q=q.replace(/@\d@/g,""),u(t.parentNode,q),c(o("fshBazaar"),S),l(o("buy_amount"),"input",k),c(o("fshBuy"),w)}export default L
//# sourceMappingURL=bazaar-66a90170.js.map
