import{a as R,b as S}from"./chunk-YNSBXPHO.js";import{a as I}from"./chunk-M47QAWF4.js";import"./chunk-KZNUAJBN.js";import{a as E}from"./chunk-ZG7AZG2H.js";import"./chunk-WRWRVDAJ.js";import{a as c}from"./chunk-GSZMCZFV.js";import"./chunk-XWTR3Y3Q.js";import{b as i}from"./chunk-GEYLGSBT.js";import{a as h}from"./chunk-77BSQLWR.js";import{a as B}from"./chunk-BLRY34YR.js";import"./chunk-CIFA6X4K.js";import{a as g}from"./chunk-PSQKPSME.js";import{a as m}from"./chunk-3J2YA6B7.js";import{a as k}from"./chunk-SDA4FQMK.js";import"./chunk-T6BAO7XX.js";import{a as _}from"./chunk-KCQPJD5H.js";import"./chunk-VXC5XTE7.js";import"./chunk-XY4KZRCS.js";import{a as N}from"./chunk-5IIHJLHJ.js";import"./chunk-5M4Z4TNO.js";import{a as A}from"./chunk-C3UZY667.js";import{a as T}from"./chunk-UAOZMKLO.js";import"./chunk-7VZZ35FX.js";import"./chunk-EWDLMFWA.js";import{a as H}from"./chunk-H7LEI34Q.js";import"./chunk-MZ7GLTZN.js";import"./chunk-NR4PY7IS.js";import"./chunk-WKK2D5SI.js";import"./chunk-CVQ7E5PW.js";import{a as x}from"./chunk-KN5ZC5BT.js";import{a as u}from"./chunk-DUQP22PP.js";import{a as b}from"./chunk-NDCVQHVH.js";import"./chunk-ZOSMVBRJ.js";import{a as r}from"./chunk-ZJNDZYVS.js";import"./chunk-OUMBZBCQ.js";import"./chunk-DM72I4Z3.js";import{a as z}from"./chunk-Y2LZWOTV.js";import"./chunk-I7LLJIV6.js";import"./chunk-6SHDCONG.js";import"./chunk-BWOLSDKS.js";import"./chunk-RLOFFV7B.js";import"./chunk-XYKKLBWK.js";import"./chunk-BOMGPUDJ.js";async function d(t,e){let a=await N({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e}),o=k(a);return o==="You purchased the item!"?{r:Array(e),s:!0}:{e:{message:o},s:!1}}function l(t,e){return H({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})}function p(t,e){return _(l,d,t,e)}var n='<table class="fshBazaar"><tr><td colspan="5">Select an item to quick-buy:</td></tr><tr><td colspan="5">Select how many to quick-buy</td></tr><tr><td colspan="5"><input id="buy_amount" class="fshNumberInput" type="number" min="0" max="99" value="1"></td></tr><tr><td>@0@</td><td>@1@</td><td>@2@</td><td>@3@</td><td>@4@</td></tr><tr><td>@5@</td><td>@6@</td><td>@7@</td><td>@8@</td><td>@9@</td></tr><tr><td colspan="3">Selected item:</td><td id="selectedItem" colspan="2"></td></tr><tr><td colspan="5"><span class="fshBazaarWarning fshHide">Warning:<br>pressing [<span id="fshBuy" class="fshLink">This button</span>] now will buy the <span id="quantity">1</span> item(s) WITHOUT confirmation!</span></td></tr><tr><td colspan="5"><span id="buyResultLabel"></span><ol id="buy_result"></ol></td></tr></table>',Q=`<span class="bazaarButton tip-dynamic" style="background-image: url('@src@');" itemid="@itemid@" data-tipped="@tipped@"></span>`,f,y,j,q,s,L,w;function F(){return I(y.value)}function W(t,e){m(e,s),f=t.getAttribute("itemid"),q.classList.remove("fshHide");let a=t.cloneNode(!1);a.className="bazaarSelected tip-dynamic";let o=j;x("",o),T(o,a)}function $(t){let{target:e}=t;if(!A("bazaarButton",e))return;let a=F();!a||W(e,a)}function v(){let t=F();t&&m(t,s)}function C(t){let e=w;S(t,e)||t.s&&R(`You purchased ${t.r.length} item(s)!`,e)}async function V(){if(!f)return;let t=z(s);m(`Buying ${t} items`,L);let e=await p(f,t);C(e)}function D(t,e){let a=t.children[0],{tipped:o}=a.dataset;n=n.replace(`@${e}@`,Q).replace("@src@",a.getAttribute("src")).replace("@itemid@",o.match(/\?item_id=(\d+)/)[1]).replace("@tipped@",o)}function P(){y=r("buy_amount"),j=r("selectedItem"),q=c(".fshBazaarWarning"),s=r("quantity"),L=r("buyResultLabel"),w=r("buy_result")}function Y(){P(),u(c(".fshBazaar"),$),b(y,"input",v),u(r("fshBuy"),V)}function M(){if(E())return;let t=g("img",i)[0];t.className="fshFloatLeft",h("a",i).forEach(D),n=n.replace(/@\d@/g,""),B(t.parentNode,n),Y()}export{M as default};
//# sourceMappingURL=bazaar-I5R2ZEO3.js.map
