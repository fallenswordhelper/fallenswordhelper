import{y as t,B as e,h as n,o as i,p as s,t as r,aS as a,z as o,an as c,br as d}from"./calfSystem-5d0c721b.js"
import{c as f}from"./createTable-e2634048.js"
import{d as l}from"./daUseItem-cd5efcde.js"
import{e as m}from"./eventHandler5-f075e4e0.js"
import{g as u}from"./getInventory-181e0bd8.js"
import{j as p}from"./jConfirm-258b9af6.js"
import{j as h,o as b}from"./jsonFail-79873134.js"
import{s as x}from"./selfIdIs-32c44bcd.js"
import"./guildStore-117197b7.js"
import"./cmdExport-09ebfe19.js"
import"./indexAjaxJson-f1851d17.js"
let y,_,j,v,g,I,$
function S(t,e){return e.inv_id===t}function E(t){return`${t.amount} x ${d[t.type]}`}function k(t,e){var n
h(e,$)||(!function(t){const e=j.findIndex(r(S,t))
e>=0&&j.splice(e,1)}(t),b((n=e.r).item?`You successfully extracted 1 '${n.item.n}' component(s) from 1 resource(s).</span>`:n.frags?`You gained ${n.frags.map(E).join(", ")} Fragments by opening the Fragment Stash.`:'<span class="fshRed">You failed to extract any components from resource(s).</span>',$))}function w(t){l(t).then(r(k,t))}function D(t){const n=I[t.id.replace("fshExtr","")].invIDs
e(`extracting all ${n.length} resources`,t.parentNode),n.forEach(w)}function F(t){p("Extract Resources","Are you sure you want to extract all similar items?",r(D,t))}function q(t){return function(t){return g&&-1!==t.folder_id}(t)||function(t){return!v&&t.is_in_st}(t)}function A(t,e){return q(e)||(t[e.item_id]?t[e.item_id].invIDs.push(e.inv_id):t[e.item_id]={invIDs:[e.inv_id],inv_id:e.inv_id,item_name:e.item_name}),t}function C(t,e){const n=I[e]
return`${t}<tr><td class="fshCenter"><span class="smallLink" id="fshExtr${e}">Extract all ${n.invIDs.length}</span></td><td><img src="${c}items/${e}.gif" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e}&inv_id=${n.inv_id}&t=1&p=${_}" border=0></td><td>${n.item_name}</td></tr>`}function M(){if(!j)return
I=j.reduce(A,{})
let t='<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr><tr><td colspan="3"><ol id="qeresult"></ol></td></tr>'
t+=a(I).reduce(C,""),e(t,y),$=o("qeresult")}function Y(t){return"Zombie Coffin"===t.item_name||12===t.type||16===t.type}function H(t){_=t.player_id,j=t.items.filter(Y),M()}function O(){v=!v,M()}function R(){g=!g,M()}function T(t){return t.id.startsWith("fshExtr")}function z(r){if(t())return
const a=r||s
e('<div class="qeHead"><b>Quick Extract</b></div>Select which type of plants you wish to extract all of. Only select extractable resources.<br><label><input type="checkbox" id="fshInSt" checked> Select items in ST</label>&nbsp;&nbsp;<label><input type="checkbox" id="fshInMain" checked> Only extract items in Main Folder</label>',a),y=f({width:"100%"}),n(a,y),v=!0,g=!0,i(a,m([[x("fshInSt"),O],[x("fshInMain"),R],[T,F]])),u().then(H)}export default z
//# sourceMappingURL=quickExtract-be3f57e0.js.map
