import{y as t,B as e,h as n,o as i,p as s,t as r,aP as a,z as o,am as c,bq as f}from"./calfSystem-cb2a6f39.js"
import{c as d}from"./createTable-f79aba85.js"
import{d as m}from"./daUseItem-92175d3a.js"
import{e as l}from"./eventHandler5-c371770f.js"
import{g as u}from"./getInventory-46c268d3.js"
import{j as p}from"./jConfirm-1fec6c11.js"
import{j as h,o as b}from"./jsonFail-06eebec4.js"
import{s as x}from"./selfIdIs-60c499c4.js"
import"./cmdExport-d6be62af.js"
import"./indexAjaxJson-6c7e44df.js"
let y,_,j,v,I,$,g
function E(t,e){return e.inv_id===t}function S(t){return`${t.amount} x ${f[t.type]}`}function k(t,e){var n
h(e,g)||(!function(t){const e=j.findIndex(r(E,t))
e>=0&&j.splice(e,1)}(t),b((n=e.r).item?`You successfully extracted 1 '${n.item.n}' component(s) from 1 resource(s).</span>`:n.frags?`You gained ${n.frags.map(S).join(", ")} Fragments by opening the Fragment Stash.`:'<span class="fshRed">You failed to extract any components from resource(s).</span>',g))}function w(t){m(t).then(r(k,t))}function q(t){const n=$[t.id.replace("fshExtr","")].invIDs
e(`extracting all ${n.length} resources`,t.parentNode),n.forEach(w)}function D(t){p("Extract Resources","Are you sure you want to extract all similar items?",r(q,t))}function F(t){return function(t){return I&&-1!==t.folder_id}(t)||function(t){return!v&&t.is_in_st}(t)}function A(t,e){return F(e)||(t[e.item_id]?t[e.item_id].invIDs.push(e.inv_id):t[e.item_id]={invIDs:[e.inv_id],inv_id:e.inv_id,item_name:e.item_name}),t}function C(t,e){const n=$[e]
return`${t}<tr><td class="fshCenter"><span class="smallLink" id="fshExtr${e}">Extract all ${n.invIDs.length}</span></td><td><img src="${c}items/${e}.gif" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e}&inv_id=${n.inv_id}&t=1&p=${_}" border=0></td><td>${n.item_name}</td></tr>`}function M(){if(!j)return
$=j.reduce(A,{})
let t='<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr><tr><td colspan="3"><ol id="qeresult"></ol></td></tr>'
t+=a($).reduce(C,""),e(t,y),g=o("qeresult")}function Y(t){return"Zombie Coffin"===t.item_name||12===t.type||16===t.type}function H(t){_=t.player_id,j=t.items.filter(Y),M()}function O(){v=!v,M()}function R(){I=!I,M()}function T(t){return t.id.startsWith("fshExtr")}function z(r){if(t())return
const a=r||s
e('<div class="qeHead"><b>Quick Extract</b></div>Select which type of plants you wish to extract all of. Only select extractable resources.<br><label><input type="checkbox" id="fshInSt" checked> Select items in ST</label>&nbsp;&nbsp;<label><input type="checkbox" id="fshInMain" checked> Only extract items in Main Folder</label>',a),y=d({width:"100%"}),n(a,y),v=!0,I=!0,i(a,l([[x("fshInSt"),O],[x("fshInMain"),R],[T,D]])),u().then(H)}export default z
//# sourceMappingURL=quickExtract-036c2769.js.map
