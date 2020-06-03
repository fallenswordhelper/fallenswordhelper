import{c as t,s as e,a0 as n,bd as i,be as s,l as a,$ as r,n as d,D as c,bf as o,f as l,p as f,I as u,al as p,aB as h,z as m,w as b,a_ as y,a as v,aL as g}from"./calfSystem-8b6534a5.js"
import{i as _}from"./isArray-3a70d0a8.js"
import"./numberIsNaN-0a4ef3fd.js"
import"./currentGuildId-4a8535f4.js"
import{i as k}from"./intValue-bb1f2246.js"
import{s as x,g as I}from"./idb-abce8d8d.js"
import{c as R}from"./createTable-e198f036.js"
import"./dialogMsg-311d8a0e.js"
import"./all-a74f4d72.js"
import{a as L}from"./allthen-fc452f77.js"
import{e as M}from"./errorDialog-2dea8d77.js"
import{d as E}from"./dialog-3c03bbb1.js"
import{i as S}from"./indexAjaxJson-b43ddbcc.js"
import{e as j,u as D}from"./useItem-2973a3f6.js"
import{a as T}from"./ajaxReturnCode-8531f24d.js"
import"./daUseItem-91309247.js"
import{d as w,a as N}from"./dropItem-830cd2da.js"
import"./cmdExport-a4cd29b8.js"
import{g as A}from"./getInventory-1e8cb5f4.js"
import{l as G,p as q}from"./lvlTests-84d5bdc1.js"
import{l as P}from"./loadDataTables-388b4b0b.js"
import{d as U}from"./daLoadInventory-830b631c.js"
import{g as C}from"./guild-99cf1fdb.js"
import{c as O}from"./changeMinMax-9e86069e.js"
import{i as B}from"./isSelected-b77eba77.js"
import{g as F}from"./getMembrList-fd92f287.js"
import{g as W}from"./guildInventory-d86ca105.js"
import{q as V,a as H}from"./queue-3dc7692f.js"
import{n as Q}from"./notLastUpdate-3da5bbb5.js"
function Y(){return C({subcmd:"fetchinv"})}function z(){return W({subcmd2:"report"})}let J,X=[]
function K(t){J=t}const Z=t=>15===t.t
function tt(t){_(t.r)&&(X=Array.prototype.concat.apply([],t.r.map(t=>t.items)).filter(Z))}function et(t){_(t.r)&&(X=X.concat(t.r.filter(Z)))}function nt(t,e){return e.a===t}function it(t){if(15===t.type){const n=X.find(e(nt,t.inv_id))
n&&(t.item_name=n.n)}}function st(){J.items.forEach(it)}function at(){const e=[A().then(K)]
return"invmanagernew"===t.subcmd&&e.push(U().then(tt)),"guildinvmgr"===t.subcmd&&(e.push(Y().then(et)),e.push(z().then(et))),L(e,st)}function rt(t,e){e.val(""),$(t).DataTable().search("").draw()}function dt(){J.folders&&(J.folders[-1]="Main")}const ct={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},ot='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td><input id="fshMinLvl" size="5" value="1"/></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td><td><input id="fshMaxLvl" size="5" value="9999"/></td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',lt={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},ft={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
function ut(t){return ft[t]?ft[t].abbr:""}function pt(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n)}function ht(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function mt(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${n(t.player_id,J.player_id)}" mode="1" action="recall">GS</span>`}function bt(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function yt(t,e,n){return"display"===t?n(e):"GS"}function vt(t,e){const n=function(t){return-1===t.player_id?4:ht(t)?7:1}(e),a=function(t,e,n){return t||(-1!==e?e:n)}(J.player_id,e.player_id,J.guild_id)
let r=t
e.equipped&&(r=`<b>${t}</b>`)
let d=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(d=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${i}${t}" class="fshInvItem tip-dynamic ${s[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${a}">${r}</a>${d}`}const gt=[[t=>t.player_id&&-1===t.player_id,(t,e)=>'takeItem" action="'+e.a],[t=>t.player_id&&t.player_id!==J.current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===J.current_player_id}(t),(t,e)=>e.c]]
function _t(t,e){const n=gt.find(e=>e[0](t))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function kt(t){return n(t.folder_id,t.player_id)}function $t(e){return t.membrList[e]?t.membrList[e].username:"???"}function xt(t,e){return t[0]-e[0]}function It(t,e){return`<option value="${e[0]}"${B(Number(e[0]),t)}>${e[1]}</option>`}let Rt,Lt,Mt
function Et(t){Rt=d({},ct),d(Rt,n(t,{})),Lt=c("showQuickDropLinks"),Mt=c("showQuickSendLinks")}const St=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:vt(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:kt,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":$t(n.player_id)},display:function(t,n,i){return i.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${r}${t.player_id}">${$t(t.player_id)}</a>`}(i):i.equipped?"Worn":`<select class="fshMoveItem" data-inv="${i.inv_id}">${s=i.folder_id,d=J.folders,a(d).sort(xt).map(e(It,s)).join("")}</select>`
var s,d},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":$t(t.player_id)}(n):n.equipped?"Worn":J.folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>o[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>ft[t]?ft[t].index:0,display:ut,filter:ut}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.ceil(n.durability/n.max_durability*100)}},{title:"BP",data:kt,render:function(t,e,n){if(!n.folder_id&&n.player_id!==J.current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:kt,render:function(t,e,n){return ht(n)?yt(e,n,mt):function(t){return t.folder_id&&!t.bound}(n)?yt(e,n,bt):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const i=[1,1,1,1,1,1,1,1,1,,2,2,,,,2][t]
return 1===i?_t(n,{a:"wear",b:"Wear",c:"wearItem"}):2===i?_t(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem tip-static dropLink" data-tipped="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem tip-static sendLink" data-tipped="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function jt(){return"player_id"in J}function Dt(){const t=function(){const t=R({className:"hover fshXSmall",id:jt()?"fshUserInv":"fshGuildInv"})
return l(f,t),t}()
return function(t){t.column(12).visible("current_player_id"in J),t.column(17).visible(jt()&&Lt),t.column(18).visible(jt()&&Mt)}(function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:St,createdRow:pt,data:J.items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)),t}function Tt(e){x("fsh_"+t.subcmd,e)}function wt(){u('table.fshInvFilter input[type="checkbox"]').forEach(t=>{t.checked=1===Rt.checkedElements[t.getAttribute("item")]}),Tt(Rt)}function Nt(t){Rt.checkedElements=lt,wt(),$(t).DataTable().draw(!1)}function At(t,e){Rt.fshMinLvl=t,Rt.fshMaxLvl=e,Tt(Rt)}function Gt(t){$(t).DataTable().draw(!1)}function qt(t){O(At,e(Gt,t))}function Pt(t){return Number(t[0])>=100}function Ut(t,e){return t[e[0]]=e[1],t}function Ct(t){var e
Rt.checkedElements=(e=Rt.checkedElements,a(e).filter(Pt).reduce(Ut,{})),wt(),$(t).DataTable().draw()}function Ot(t,e){t.eq(e).empty()}function Bt(t,n){if(1===n.r)return
const i=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(e(Ot,t))}($("td",i)),i.css("text-decoration","line-through")}function Ft(t,n){p(n),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(n),t().then(e(Bt,n)),function(t){t.empty().append(`<img src="${h}ui/misc/spinner.gif" width="11" height="11">`)}(n)}function Wt(t){Rt.checkedElements={},u('table.fshInvFilter input[type="checkbox"][item]:checked').forEach(t=>{Rt.checkedElements[t.getAttribute("item")]=1}),Tt(Rt),$(t).DataTable().draw(!1)}function Vt(t){Rt.checkedElements=ct.checkedElements,wt(),$(t).DataTable().draw(!1)}function Ht(t){Rt.fshMinLvl=ct.fshMinLvl,Rt.fshMaxLvl=ct.fshMaxLvl,Tt(Rt),$("#fshMinLvl").val(Rt.fshMinLvl),$("#fshMaxLvl").val(Rt.fshMaxLvl),$(t).DataTable().draw(!1)}function Qt(t){return function(t){return W({subcmd2:"dostoreitems",storeIndex:t})}(t)}function Yt(t){return Qt(t).then(M).then(T)}function zt(t,e){$(t).DataTable().search($(e.target).attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Jt(t){const n=$(t.target)
Ft(e(V,n.attr("invid"),n.attr("action")),n)}function Xt(t){const n=$(t.target)
Ft(e(H,n.attr("invid"),n.attr("playerid"),n.attr("mode"),n.attr("action")),n)}function Kt(t){const n=$(t.target)
Ft(e(j,n.attr("invid")),n)}function Zt(t){const n=$(t.target)
Ft(e(D,n.attr("invid")),n)}function te(t){const e=$(t.target)
var n,i
n=[e.data("inv")],i=e.val(),S({cmd:"profile",subcmd:"sendtofolder",inv_list:JSON.stringify(n),folder_id:i,ajax:1}).then(E)}function ee(t){const n=$(t.target)
Ft(e(Yt,[n.attr("invid")]),n)}function ne(t){const n=$(t.target)
Ft(e(w,[n.data("inv")]),n)}function ie(t){const n=$(t.target)
Ft(e(N,[n.data("inv")]),n)}function se(t,n){$(n[0]).on("click",e(n[1],t))}function ae(t,e){$(t).on("click","span."+e[0],e[1])}function re(t){!function(t){[["#fshReset",Ht],["#fshAll",Nt],["#fshNone",Ct],["#fshDefault",Vt]].forEach(e(se,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',e(Wt,t)),function(t){[["setName",e(zt,t)],["takeItem",Jt],["recallItem",Xt],["wearItem",Kt],["useItem",Zt],["dropItem",ne],["sendItem",ie],["storeItem",ee]].forEach(e(ae,t))}(t)}function de(){let t
t=J.player_id?`<b>&nbsp;Inventory Manager</b> ${J.items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${J.items.length} items (maroon = in BP, blue=guild store)`,m(ot.replace("@@reportTitle@@",t),f)}function ce(){$("#fshMinLvl").val(Rt.fshMinLvl),$("#fshMaxLvl").val(Rt.fshMaxLvl)}let oe
function le(t,e){return G(oe,k(e[1]),Rt.fshMinLvl,Rt.fshMaxLvl)}function fe(){oe=[t=>0===t].concat(q),$.fn.dataTable.ext.search.push(le)}function ue(){$.fn.dataTable.ext.search.push((t,e,n,i)=>!Rt.checkedElements||Rt.checkedElements[i.type])}function pe(){$.fn.dataTable.ext.search.push((t,e,n,i)=>!Rt.checkedElements||!Rt.checkedElements[-1]||function(t){return Rt.checkedElements[-1]&&t.stats&&-1!==t.stats.set_id}(i))}function he(){$.fn.dataTable.ext.search.push((t,e,n,i)=>{const s=(parseInt(i.rarity,10)+100).toString()
return!Rt.checkedElements||Rt.checkedElements[s]})}function me(t,e){return t[e[1].id]=e[1],t}function be(){t.membrList=a(t.membrList).filter(Q).reduce(me,{})}function ye(){g([dt,fe,ue,pe,he,de,wt,ce])
const t=Dt()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",e(qt,t)),$(t).on("change","select.fshMoveItem",te),re(t)}(t),$("#fshRefresh").on("click",_e),function(t){const n=$(`#${t.id}_filter input`)
n.prop("type","text")
const i=$("<span>&times;</span>")
n.wrap($('<span class="text-input-wrapper"/>')),n.after(i),i.on("click",e(rt,t,n))}(t)}function ve(){ye()}function ge(){v(3,ve)}function _e(){b()||(m(`<span id="fshInvMan"><img src = "${y}">&nbsp;Getting inventory data...</span>`,f),function(){const e=[P(),at()]
"guildinvmgr"===t.subcmd&&e.push(F(!1).then(be)),e.push(I("fsh_"+t.subcmd).then(Et)),L(e,ge)}())}export default _e
//# sourceMappingURL=inventory-7f34d16f.js.map
