import{y as t,B as e,h as n,o as i,p as s,t as r,aS as a,z as o,an as c,br as f}from"./calfSystem-d56087e1.js"
import{c as d}from"./createTable-5e7fa021.js"
import{d as l}from"./daUseItem-b6042302.js"
import{e as m}from"./eventHandler5-f385c55a.js"
import{g as u}from"./getInventory-4e810bc2.js"
import{j as p}from"./jConfirm-69fcfc62.js"
import{j as h,o as b}from"./jsonFail-f9e70d0f.js"
import{s as x}from"./selfIdIs-3b8add88.js"
import"./guildStore-170e918c.js"
import"./cmdExport-58f360a9.js"
import"./indexAjaxJson-976f4bdd.js"
let y,_,j,v,g,I,$
function S(t,e){return e.inv_id===t}function E(t){return`${t.amount} x ${f[t.type]}`}function k(t,e){var n
h(e,$)||(!function(t){const e=j.findIndex(r(S,t))
e>=0&&j.splice(e,1)}(t),b((n=e.r).item?`You successfully extracted 1 '${n.item.n}' component(s) from 1 resource(s).</span>`:n.frags?`You gained ${n.frags.map(E).join(", ")} Fragments by opening the Fragment Stash.`:'<span class="fshRed">You failed to extract any components from resource(s).</span>',$))}function w(t){l(t).then(r(k,t))}function D(t){const n=I[t.id.replace("fshExtr","")].invIDs
e(`extracting all ${n.length} resources`,t.parentNode),n.forEach(w)}function F(t){p("Extract Resources","Are you sure you want to extract all similar items?",r(D,t))}function q(t){return function(t){return g&&-1!==t.folder_id}(t)||function(t){return!v&&t.is_in_st}(t)}function A(t,e){return q(e)||(t[e.item_id]?t[e.item_id].invIDs.push(e.inv_id):t[e.item_id]={invIDs:[e.inv_id],inv_id:e.inv_id,item_name:e.item_name}),t}function C(t,e){const n=I[e]
return`${t}<tr><td class="fshCenter"><span class="smallLink" id="fshExtr${e}">Extract all ${n.invIDs.length}</span></td><td><img src="${c}items/${e}.gif" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e}&inv_id=${n.inv_id}&t=1&p=${_}" border=0></td><td>${n.item_name}</td></tr>`}function M(){if(!j)return
I=j.reduce(A,{})
let t='<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr><tr><td colspan="3"><ol id="qeresult"></ol></td></tr>'
t+=a(I).reduce(C,""),e(t,y),$=o("qeresult")}function Y(t){return"Zombie Coffin"===t.item_name||12===t.type||16===t.type}function H(t){_=t.player_id,j=t.items.filter(Y),M()}function O(){v=!v,M()}function R(){g=!g,M()}function T(t){return t.id.startsWith("fshExtr")}function z(r){if(t())return
const a=r||s
e('<div class="qeHead"><b>Quick Extract</b></div>Select which type of plants you wish to extract all of. Only select extractable resources.<br><label><input type="checkbox" id="fshInSt" checked> Select items in ST</label>&nbsp;&nbsp;<label><input type="checkbox" id="fshInMain" checked> Only extract items in Main Folder</label>',a),y=d({width:"100%"}),n(a,y),v=!0,g=!0,i(a,m([[x("fshInSt"),O],[x("fshInMain"),R],[T,F]])),u().then(H)}export default z
//# sourceMappingURL=quickExtract-1805aaa2.js.map