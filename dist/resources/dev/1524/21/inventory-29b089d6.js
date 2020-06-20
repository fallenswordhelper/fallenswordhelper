import{c as t,P as e,t as n,a3 as i,bj as s,bk as a,e as r,a2 as d,q as c,G as o,b2 as l,h as f,p as u,D as p,aq as h,aH as m,A as b,x as y,b5 as v,a as g,aX as k,aY as _,aO as x}from"./calfSystem-9c7241dc.js"
import"./numberIsNaN-7270cc8c.js"
import"./currentGuildId-00053b50.js"
import{i as I}from"./intValue-4cb61c79.js"
import{s as R,g as L}from"./idb-5f8a9591.js"
import{c as M}from"./createTable-711dc1b7.js"
import"./dialogMsg-b559bd6b.js"
import"./senditems-c0387195.js"
import{d as E}from"./daAjaxSendItemsToRecipient-1bf1cf0d.js"
import{e as S}from"./errorDialog-48c0f67b.js"
import{i as j}from"./indexAjaxJson-82fdd15d.js"
import"./cmdExport-cec76f08.js"
import"./guildStore-77f2b14b.js"
import{g as D}from"./getInventory-796b5632.js"
import{l as T,p as N}from"./lvlTests-1f00aff4.js"
import"./all-fed72729.js"
import{l as w}from"./loadDataTables-d7f0915e.js"
import"./daUseItem-d9050f10.js"
import{d as A}from"./daLoadInventory-4f13e19a.js"
import{d as G}from"./dialog-be45be25.js"
import{a as q,e as P,u as U}from"./useItem-6b26d1e2.js"
import{g as O}from"./guild-92790ca6.js"
import{a as C}from"./allthen-c94a6cae.js"
import{c as F}from"./changeMinMax-38e8d71c.js"
import{i as W}from"./isSelected-057d5cda.js"
import{g as B}from"./getMembrList-885dcf81.js"
import{q as V,a as H}from"./queue-fda29eb1.js"
import{g as Y}from"./guildInventory-56728670.js"
import{n as Q}from"./notLastUpdate-efe9f70a.js"
function z(){return O({subcmd:"fetchinv"})}function J(){return Y({subcmd2:"report"})}let X,K=[]
function Z(t){X=t}const tt=t=>15===t.t
function et(t){e(t.r)&&(K=Array.prototype.concat.apply([],t.r.map(t=>t.items)).filter(tt))}function nt(t){e(t.r)&&(K=K.concat(t.r.filter(tt)))}function it(t,e){return e.a===t}function st(t){if(15===t.type){const e=K.find(n(it,t.inv_id))
e&&(t.item_name=e.n)}}function at(){X.items.forEach(st)}function rt(){const e=[D().then(Z)]
return"invmanagernew"===t.subcmd&&e.push(A().then(et)),"guildinvmgr"===t.subcmd&&(e.push(z().then(nt)),e.push(J().then(nt))),C(e,at)}function dt(t,e){e.val(""),$(t).DataTable().search("").draw()}function ct(){X.folders&&(X.folders[-1]="Main")}const ot={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},lt='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td><input id="fshMinLvl" size="5" value="1"/></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td><td><input id="fshMaxLvl" size="5" value="9999"/></td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',ft={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},ut={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
function pt(t){return ut[t]?ut[t].abbr:""}function ht(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n)}function mt(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function bt(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${i(t.player_id,X.player_id)}" mode="1" action="recall">GS</span>`}function yt(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function vt(t,e,n){return"display"===t?n(e):"GS"}function gt(t,e){const n=function(t){return-1===t.player_id?4:mt(t)?7:1}(e),i=function(t,e,n){return t||(-1!==e?e:n)}(X.player_id,e.player_id,X.guild_id)
let r=t
e.equipped&&(r=`<b>${t}</b>`)
let d=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(d=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${s}${t}" class="fshInvItem tip-dynamic ${a[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${i}">${r}</a>${d}`}const kt=[[t=>t.player_id&&-1===t.player_id,(t,e)=>'takeItem" action="'+e.a],[t=>t.player_id&&t.player_id!==X.current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===X.current_player_id}(t),(t,e)=>e.c]]
function _t(t,e){const n=kt.find(e=>e[0](t))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function $t(t){return i(t.folder_id,t.player_id)}function xt(e){return t.membrList[e]?t.membrList[e].username:"???"}function It(t,e){return t[0]-e[0]}function Rt(t,e){return`<option value="${e[0]}"${W(Number(e[0]),t)}>${e[1]}</option>`}let Lt,Mt,Et
function St(t){Lt=c({},ot),c(Lt,i(t,{})),Mt=o("showQuickDropLinks"),Et=o("showQuickSendLinks")}const jt=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:gt(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:$t,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":xt(n.player_id)},display:function(t,e,i){return i.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${d}${t.player_id}">${xt(t.player_id)}</a>`}(i):i.equipped?"Worn":`<select class="fshMoveItem" data-inv="${i.inv_id}">${s=i.folder_id,a=X.folders,r(a).sort(It).map(n(Rt,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":xt(t.player_id)}(n):n.equipped?"Worn":X.folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>l[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>ut[t]?ut[t].index:0,display:pt,filter:pt}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.ceil(n.durability/n.max_durability*100)}},{title:"BP",data:$t,render:function(t,e,n){if(!n.folder_id&&n.player_id!==X.current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:$t,render:function(t,e,n){return mt(n)?vt(e,n,bt):function(t){return t.folder_id&&!t.bound}(n)?vt(e,n,yt):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const i=[1,1,1,1,1,1,1,1,1,,2,2,,,,2][t]
return 1===i?_t(n,{a:"wear",b:"Wear",c:"wearItem"}):2===i?_t(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem tip-static dropLink" data-tipped="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem tip-static sendLink" data-tipped="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function Dt(){return"player_id"in X}function Tt(){const t=function(){const t=M({className:"hover fshXSmall",id:Dt()?"fshUserInv":"fshGuildInv"})
return f(u,t),t}()
return function(t){t.column(12).visible("current_player_id"in X),t.column(17).visible(Dt()&&Mt),t.column(18).visible(Dt()&&Et)}(function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:jt,createdRow:ht,data:X.items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)),t}function Nt(t){return E(t).then(q)}function wt(e){R("fsh_"+t.subcmd,e)}function At(){p('table.fshInvFilter input[type="checkbox"]').forEach(t=>{t.checked=1===Lt.checkedElements[t.getAttribute("item")]}),wt(Lt)}function Gt(t){Lt.checkedElements=ft,At(),$(t).DataTable().draw(!1)}function qt(t,e){Lt.fshMinLvl=t,Lt.fshMaxLvl=e,wt(Lt)}function Pt(t){$(t).DataTable().draw(!1)}function Ut(t){F(qt,n(Pt,t))}function Ot(t){return Number(t[0])>=100}function Ct(t,e){return t[e[0]]=e[1],t}function Ft(t){var e
Lt.checkedElements=(e=Lt.checkedElements,r(e).filter(Ot).reduce(Ct,{})),At(),$(t).DataTable().draw()}function Wt(t,e){t.eq(e).empty()}function Bt(t,e){if(1===e.r)return
const i=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(n(Wt,t))}($("td",i)),i.css("text-decoration","line-through")}function Vt(t,e){h(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),t().then(n(Bt,e)),function(t){t.empty().append(`<img src="${m}ui/misc/spinner.gif" width="11" height="11">`)}(e)}function Ht(t){return j({cmd:"profile",subcmd:"dodropitems",removeIndex:t,ajax:1}).then(G)}function Yt(t){Lt.checkedElements={},p('table.fshInvFilter input[type="checkbox"][item]:checked').forEach(t=>{Lt.checkedElements[t.getAttribute("item")]=1}),wt(Lt),$(t).DataTable().draw(!1)}function Qt(t){Lt.checkedElements=ot.checkedElements,At(),$(t).DataTable().draw(!1)}function zt(t){Lt.fshMinLvl=ot.fshMinLvl,Lt.fshMaxLvl=ot.fshMaxLvl,wt(Lt),$("#fshMinLvl").val(Lt.fshMinLvl),$("#fshMaxLvl").val(Lt.fshMaxLvl),$(t).DataTable().draw(!1)}function Jt(t){return function(t){return Y({subcmd2:"dostoreitems",storeIndex:t})}(t)}function Xt(t){return Jt(t).then(S).then(q)}function Kt(t,e){$(t).DataTable().search($(e.target).attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Zt(t){const e=$(t.target)
Vt(n(V,e.attr("invid"),e.attr("action")),e)}function te(t){const e=$(t.target)
Vt(n(H,e.attr("invid"),e.attr("playerid"),e.attr("mode"),e.attr("action")),e)}function ee(t){const e=$(t.target)
Vt(n(P,e.attr("invid")),e)}function ne(t){const e=$(t.target)
Vt(n(U,e.attr("invid")),e)}function ie(t){const e=$(t.target)
var n,i
n=[e.data("inv")],i=e.val(),j({cmd:"profile",subcmd:"sendtofolder",inv_list:JSON.stringify(n),folder_id:i,ajax:1}).then(G)}function se(t){const e=$(t.target)
Vt(n(Xt,[e.attr("invid")]),e)}function ae(t){const e=$(t.target)
Vt(n(Ht,[e.data("inv")]),e)}function re(t){const e=$(t.target)
Vt(n(Nt,[e.data("inv")]),e)}function de(t,e){$(e[0]).on("click",n(e[1],t))}function ce(t,e){$(t).on("click","span."+e[0],e[1])}function oe(t){!function(t){[["#fshReset",zt],["#fshAll",Gt],["#fshNone",Ft],["#fshDefault",Qt]].forEach(n(de,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',n(Yt,t)),function(t){[["setName",n(Kt,t)],["takeItem",Zt],["recallItem",te],["wearItem",ee],["useItem",ne],["dropItem",ae],["sendItem",re],["storeItem",se]].forEach(n(ce,t))}(t)}function le(){let t
t=X.player_id?`<b>&nbsp;Inventory Manager</b> ${X.items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${X.items.length} items (maroon = in BP, blue=guild store)`,b(lt.replace("@@reportTitle@@",t),u)}function fe(){$("#fshMinLvl").val(Lt.fshMinLvl),$("#fshMaxLvl").val(Lt.fshMaxLvl)}let ue
function pe(t,e){return T(ue,I(e[1]),Lt.fshMinLvl,Lt.fshMaxLvl)}function he(){ue=[t=>0===t].concat(N),$.fn.dataTable.ext.search.push(pe)}function me(){$.fn.dataTable.ext.search.push((t,e,n,i)=>!Lt.checkedElements||Lt.checkedElements[i.type])}function be(){$.fn.dataTable.ext.search.push((t,e,n,i)=>!Lt.checkedElements||!Lt.checkedElements[-1]||function(t){return Lt.checkedElements[-1]&&t.stats&&-1!==t.stats.set_id}(i))}function ye(){$.fn.dataTable.ext.search.push((t,e,n,i)=>{const s=(parseInt(i.rarity,10)+100).toString()
return!Lt.checkedElements||Lt.checkedElements[s]})}function ve(t,e){return t[e[1].id]=e[1],t}function ge(){t.membrList=r(t.membrList).filter(Q).reduce(ve,{})}function ke(){x([ct,he,me,be,ye,le,At,fe])
const t=Tt()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",n(Ut,t)),$(t).on("change","select.fshMoveItem",ie),oe(t)}(t),$("#fshRefresh").on("click",xe),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const i=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(i),i.on("click",n(dt,t,e))}(t)}function _e(){k("inventory.getInvMan"),ke(),_("inventory.getInvMan")}function $e(){g(3,_e)}function xe(){y()||(b(`<span id="fshInvMan"><img src = "${v}">&nbsp;Getting inventory data...</span>`,u),function(){const e=[w(),rt()]
"guildinvmgr"===t.subcmd&&e.push(B(!1).then(ge)),e.push(L("fsh_"+t.subcmd).then(St)),C(e,$e)}())}export default xe
//# sourceMappingURL=inventory-29b089d6.js.map
