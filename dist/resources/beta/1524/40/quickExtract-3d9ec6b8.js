import{y as t,B as e,h as n,o as i,p as s,t as r,aV as a,z as o,av as c,bq as d}from"./calfSystem-ab393688.js"
import{c as f}from"./createTable-fc2f2ae0.js"
import{d as l}from"./daUseItem-6360da18.js"
import{e as m}from"./eventHandler5-56775d0c.js"
import{g as u}from"./getInventory-d8387689.js"
import{j as p}from"./jConfirm-99b16cb3.js"
import{j as h,o as x}from"./jsonFail-e7921ce5.js"
import{s as b}from"./selfIdIs-70806dca.js"
import"./cmdExport-72a02624.js"
import"./indexAjaxJson-e927e360.js"
let y,_,v,j,I,$,g
function E(t,e){return e.inv_id===t}function S(t){return`${t.amount} x ${d[t.type]}`}function k(t,e){var n
h(e,g)||(!function(t){const e=v.findIndex(r(E,t))
e>=0&&v.splice(e,1)}(t),x((n=e.r).item?`You successfully extracted 1 '${n.item.n}' component(s) from 1 resource(s).</span>`:n.frags?`You gained ${n.frags.map(S).join(", ")} Fragments by opening the Fragment Stash.`:'<span class="fshRed">You failed to extract any components from resource(s).</span>',g))}function w(t){l(t).then(r(k,t))}function q(t){const n=$[t.id.replace("fshExtr","")].invIDs
e(`extracting all ${n.length} resources`,t.parentNode),n.forEach(w)}function D(t){p("Extract Resources","Are you sure you want to extract all similar items?",r(q,t))}function F(t){return function(t){return I&&-1!==t.folder_id}(t)||function(t){return!j&&t.is_in_st}(t)}function A(t,e){return F(e)||(t[e.item_id]?t[e.item_id].invIDs.push(e.inv_id):t[e.item_id]={invIDs:[e.inv_id],inv_id:e.inv_id,item_name:e.item_name}),t}function C(t,e){const n=$[e]
return`${t}<tr><td class="fshCenter"><span class="smallLink" id="fshExtr${e}">Extract all ${n.invIDs.length}</span></td><td><img src="${c}items/${e}.gif" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e}&inv_id=${n.inv_id}&t=1&p=${_}" border=0></td><td>${n.item_name}</td></tr>`}function M(){if(!v)return
$=v.reduce(A,{})
let t='<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr><tr><td colspan="3"><ol id="qeresult"></ol></td></tr>'
t+=a($).reduce(C,""),e(t,y),g=o("qeresult")}function Y(t){return"Zombie Coffin"===t.item_name||12===t.type||16===t.type}function H(t){_=t.player_id,v=t.items.filter(Y),M()}function O(){j=!j,M()}function R(){I=!I,M()}function T(t){return t.id.startsWith("fshExtr")}function z(r){if(t())return
const a=r||s
e('<div class="qeHead"><b>Quick Extract</b></div>Select which type of plants you wish to extract all of. Only select extractable resources.<br><label><input type="checkbox" id="fshInSt" checked> Select items in ST</label>&nbsp;&nbsp;<label><input type="checkbox" id="fshInMain" checked> Only extract items in Main Folder</label>',a),y=f({width:"100%"}),n(a,y),j=!0,I=!0,i(a,m([[b("fshInSt"),O],[b("fshInMain"),R],[T,D]])),u().then(H)}export default z
//# sourceMappingURL=quickExtract-3d9ec6b8.js.map