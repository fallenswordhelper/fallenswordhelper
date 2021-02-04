import{x as t,A as e,h as n,o as i,p as s,t as r,aO as a,y as o,ak as c,bE as d}from"./calfSystem-c91a5c89.js"
import{c as f}from"./createTable-443d89cd.js"
import{d as l}from"./daUseItem-ce6006de.js"
import{e as m}from"./eventHandler5-85cb7214.js"
import{g as u}from"./getInventory-082657b0.js"
import{j as p}from"./jConfirm-c05e8e6a.js"
import{j as h,o as b}from"./jsonFail-536291fd.js"
import{s as x}from"./selfIdIs-9b30ab28.js"
import"./cmdExport-6ed03a19.js"
import"./indexAjaxJson-6b76870e.js"
let y,_,j,v,I,$,g
function E(t,e){return e.inv_id===t}function k(t){return`${t.amount} x ${d[t.type]}`}function S(t,e){var n
h(e,g)||(!function(t){const e=j.findIndex(r(E,t))
e>=0&&j.splice(e,1)}(t),b((n=e.r).item?`You successfully extracted 1 '${n.item.n}' component(s) from 1 resource(s).</span>`:n.frags?`You gained ${n.frags.map(k).join(", ")} Fragments by opening the Fragment Stash.`:'<span class="fshRed">You failed to extract any components from resource(s).</span>',g))}function w(t){l(t).then(r(S,t))}function A(t){const n=$[t.id.replace("fshExtr","")].invIDs
e(`extracting all ${n.length} resources`,t.parentNode),n.forEach(w)}function D(t){p("Extract Resources","Are you sure you want to extract all similar items?",r(A,t))}function F(t){return function(t){return I&&-1!==t.folder_id}(t)||function(t){return!v&&t.is_in_st}(t)}function q(t,e){return F(e)||(t[e.item_id]?t[e.item_id].invIDs.push(e.inv_id):t[e.item_id]={invIDs:[e.inv_id],inv_id:e.inv_id,item_name:e.item_name}),t}function C(t,e){const n=$[e]
return`${t}<tr><td class="fshCenter"><span class="smallLink" id="fshExtr${e}">Extract all ${n.invIDs.length}</span></td><td><img src="${c}items/${e}.gif" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e}&inv_id=${n.inv_id}&t=1&p=${_}" border=0></td><td>${n.item_name}</td></tr>`}function M(){if(!j)return
$=j.reduce(q,{})
let t='<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr><tr><td colspan="3"><ol id="qeresult"></ol></td></tr>'
t+=a($).reduce(C,""),e(t,y),g=o("qeresult")}function O(t){return"Zombie Coffin"===t.item_name||12===t.type||16===t.type}function Y(t){_=t.player_id,j=t.items.filter(O),M()}function H(){v=!v,M()}function R(){I=!I,M()}function T(t){return t.id.startsWith("fshExtr")}function J(r){if(t())return
const a=r||s
e('<div class="qeHead"><b>Quick Extract</b></div>Select which type of plants you wish to extract all of. Only select extractable resources.<br><label><input type="checkbox" id="fshInSt" checked> Select items in ST</label>&nbsp;&nbsp;<label><input type="checkbox" id="fshInMain" checked> Only extract items in Main Folder</label>',a),y=f({width:"100%"}),n(a,y),v=!0,I=!0,i(a,m([[x("fshInSt"),H],[x("fshInMain"),R],[T,D]])),u().then(Y)}export default J
//# sourceMappingURL=quickExtract-f8cb42f5.js.map
