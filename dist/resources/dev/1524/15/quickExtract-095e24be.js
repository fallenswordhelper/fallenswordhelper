import{w as t,z as e,f as n,o as i,s,p as r,aj as a,x as o,aw as c,bW as d}from"./calfSystem-ee582533.js"
import{c as f}from"./createTable-cbb3667c.js"
import{j as l}from"./jConfirm-4bd5807a.js"
import"./indexAjaxJson-e486d467.js"
import{d as m}from"./daUseItem-f1308817.js"
import{e as u}from"./eventHandler5-39a91f1e.js"
import"./cmdExport-23cec039.js"
import"./guildStore-7cd0d847.js"
import{g as p}from"./getInventory-82e3b49f.js"
import{s as h}from"./selfIdIs-2732dbd2.js"
import{j as b,o as x}from"./jsonFail-48822699.js"
let _,j,y,v,g,I,$
function E(t,e){return e.inv_id===t}function S(t){return`${t.amount} x ${d[t.type]}`}function w(t,e){var n
b(e,$)||(!function(t){const e=y.findIndex(s(E,t))
e>=0&&y.splice(e,1)}(t),x((n=e.r).item?`You successfully extracted 1 '${n.item.n}' component(s) from 1 resource(s).</span>`:n.frags?`You gained ${n.frags.map(S).join(", ")} Fragments by opening the Fragment Stash.`:'<span class="fshRed">You failed to extract any components from resource(s).</span>',$))}function k(t){m(t).then(s(w,t))}function D(t){const n=I[t.id.replace("fshExtr","")].invIDs
e(`extracting all ${n.length} resources`,t.parentNode),n.forEach(k)}function F(t){l("Extract Resources","Are you sure you want to extract all similar items?",s(D,t))}function q(t){return function(t){return g&&-1!==t.folder_id}(t)||function(t){return!v&&t.is_in_st}(t)}function A(t,e){return q(e)||(t[e.item_id]?t[e.item_id].invIDs.push(e.inv_id):t[e.item_id]={invIDs:[e.inv_id],inv_id:e.inv_id,item_name:e.item_name}),t}function C(t,e){const n=I[e]
return t+'<tr><td class="fshCenter"><span class="smallLink"'+` id="fshExtr${e}">Extract all ${n.invIDs.length}</span></td>`+`<td><img src="${c}items/${e}.gif" class="tip-dynamic" data-tipped="`+`fetchitem.php?item_id=${e}&inv_id=${n.inv_id}&t=1&p=${j}" border=0></td><td>${n.item_name}</td></tr>`}function M(){if(!y)return
I=y.reduce(A,{})
let t='<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr><tr><td colspan="3"><ol id="qeresult"></ol></td></tr>'
t+=a(I).reduce(C,""),e(t,_),$=o("qeresult")}function Y(t){return"Zombie Coffin"===t.item_name||12===t.type||16===t.type}function H(t){j=t.player_id,y=t.items.filter(Y),M()}function O(){v=!v,M()}function R(){g=!g,M()}function T(t){return t.id.startsWith("fshExtr")}export default function(s){if(t())return
const a=s||r
e('<div class="qeHead"><b>Quick Extract</b></div>Select which type of plants you wish to extract all of. Only select extractable resources.<br><label><input type="checkbox" id="fshInSt" checked> Select items in ST</label>&nbsp;&nbsp;<label><input type="checkbox" id="fshInMain" checked> Only extract items in Main Folder</label>',a),_=f({width:"100%"}),n(a,_),v=!0,g=!0,i(a,u([[h("fshInSt"),O],[h("fshInMain"),R],[T,F]])),p().then(H)}
//# sourceMappingURL=quickExtract-095e24be.js.map
