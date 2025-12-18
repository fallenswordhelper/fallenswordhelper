import{g as t}from"./getMembrList-CFjzYLzE.js"
import{f as e,ad as n,i as s,u as a,ay as i,a1 as r,bk as d,dm as c,dn as o,aC as l,p as u,cu as f,dp as p,s as h,c as m,bH as b,bZ as v,dq as y,aA as g,dd as k,dr as _,c2 as x,ab as I,cs as R,bI as L,h as M,ds as S,$ as w,af as E,bj as D,bn as N,aO as T,ap as j,y as q,A,C as G,D as P,F as O,N as C,O as U,bm as B,z as F,bz as H,J as W,ak as Q,H as V,K as Y,Q as z,R as J,aG as K,E as X,aF as Z,t as tt,d as et,a3 as nt,v as st,g as at,a4 as it,cy as rt,br as dt}from"./calfSystem-Cs6CSxoU.js"
import{e as ct}from"./executeAll-DIAWIge1.js"
import{l as ot}from"./loadDataTables-Ck0U5wjM.js"
import{d as lt}from"./daLoadInventory-Sf3be_xU.js"
import{f as ut}from"./flattenItems-DRADeVyF.js"
import{c as ft}from"./createTable-Dj4e_Imc.js"
import{i as pt}from"./isSelected-BWnMzKlW.js"
import{d as ht,a as mt,m as bt}from"./dropItem-CsZlrJDb.js"
import{c as vt}from"./changeMinMax-CSfAMBUZ.js"
import{c as yt}from"./chromeHandlers-BKaCuR88.js"
import{a as gt,e as kt,u as _t}from"./useItem-CVQLApUC.js"
import{h as $t}from"./htmlResult-zJJ1KGba.js"
import{e as xt}from"./errorDialog-B4_TjdGG.js"
import{q as It,a as Rt}from"./queue-ClhtlfnF.js"
import{p as Lt,l as Mt}from"./lvlTests-CVDQ4SVd.js"
import{d as St}from"./daGsTake-C9DNvY2Q.js"
import"./guildMembers-Bfrwbkp_.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Pw0D8xc-.js"
import"./InfoBoxFrom-DFKUvyJC.js"
import"./backpackOk-CoVKbvvg.js"
import"./takeItem-CalkzIVT.js"
function wt([t]){return"lastUpdate"!==t}const Et=({id:t,name:e})=>[t,e]
let Dt=""
function Nt(t,e){Dt||(Dt=e.message),Dt&&s(t,a("p",{className:"fshRed",textContent:Dt}))}let Tt={}
const jt=()=>Tt
async function qt(t){try{return await t()}catch(t){if(500!==t.jqXhr.status)throw t
Nt(u(),t)}}const At=t=>e=>{const n=t.find(t=>t.a===e.inv_id)
return{...e,...n?.n&&{item_name:n.n}}},Gt=t=>({...t,equipped:!0,folder_id:-2})
async function Pt(){const[t,s]=await r([qt(f),lt()]),a=t?.items??[],i=s?.r??{},c=i.equipment?.map(Gt)??[]
return((t,s,a)=>{return{folders:(i=t,n(i?.inventories)?e(i.inventories.filter(({id:t})=>-1!==t).map(Et)):[]),items:s.map(At(a)),player_id:d()}
var i})(i,a,c.concat(ut(i)))}const Ot=t=>({...t,player:{id:-1}})
async function Ct(){const[t,e,n]=await r([qt(p),c(),o()]),s=t?.items??[],a=e?.r??[],i=n?.r??[]
return((t,e)=>({current_player_id:d(),items:t.map(At(e)),guild_id:l()}))(s,a.concat(i.map(Ot)))}async function Ut(){if("invmanagernew"===i.subcmd){const t=await Pt()
Tt=t}else if("guildinvmgr"===i.subcmd){const t=await Ct()
Tt=t}}const Bt=t=>{h("Inventory","Header",t)},Ft=t=>{h("Inventory","Datatable",t)}
function Ht(t,e){Ft("clearSearch"),e.val(""),$(t).DataTable().search("").draw()}function Wt(){jt().folders&&(jt().folders[-1]="Main")}const Qt={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},Vt='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',Yt={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},zt={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
let Jt={},Kt=0,Xt=0
const Zt=()=>Jt
function te(t){return zt[t]?zt[t].abbr:""}function ee(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n),e.equipped&&t.classList.add("fshBold")}function ne(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function se(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${v(t.player_id,jt().player_id)}" mode="1" action="recall">GS</span>`}function ae(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function ie(t,e,n){return"display"===t?n(e):"GS"}function re(t,e){const n=function(t){return-1===t.player_id?4:ne(t)?7:1}(e),s=(a=jt().player_id,i=e.player_id,r=jt().guild_id,a||(-1!==i?i:r))
var a,i,r
let d=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(d=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${k}${t}" class="fshInvItem tip-dynamic ${_[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${s}">${t}</a>${d}`}const de=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==jt().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===jt().current_player_id}(t),(t,e)=>e.c]]
function ce(t,e){const n=de.find(([e])=>e(t))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function oe(t){return v(t.folder_id,t.player_id)}function le(t){return i.membrList[t]?i.membrList[t].username:"???"}function ue(t,e){return t[0]-e[0]}function fe(t,e){return`<option value="${e[0]}"${pt(Number(e[0]),t)}>${e[1]}</option>`}const pe=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:re(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:oe,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":le(n.player_id)},display:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${x}${t.player_id}">${le(t.player_id)}</a>`}(n):n.equipped?"Worn":`<select class="fshMoveItem" data-inv="${n.inv_id}">${s=n.folder_id,a=jt().folders,I(a).sort(ue).map(m(fe,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":le(t.player_id)}(n):n.equipped?"Worn":jt().folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>R[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>zt[t]?zt[t].index:0,display:te,filter:te}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.floor(n.durability/n.max_durability*100)}},{title:"BP",data:oe,render:function(t,e,n){if(!n.folder_id&&n.player_id!==jt().current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:oe,render:function(t,e,n){return ne(n)?ie(e,n,se):function(t){return t.folder_id&&!t.bound}(n)?ie(e,n,ae):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const s=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t]
return 1===s?ce(n,{a:"wear",b:"Wear",c:"wearItem"}):2===s?ce(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function he(){return"player_id"in jt()}function me(){const t=function(){const t=ft({className:"hover fshXSmall",id:he()?"fshUserInv":"fshGuildInv"})
return s(u(),t),t}(),e=function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:pe,createdRow:ee,data:jt().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)
return function(t){[[12,"current_player_id"in jt()],[17,he()&&Kt],[18,he()&&Xt]].forEach(([e,n])=>t.column(e).visible(n))}(e),t}function be(t){L(`fsh_${i.subcmd}`,t)}function ve(){M('table.fshInvFilter input[type="checkbox"]').forEach(t=>{t.checked=1===Zt().checkedElements[t.getAttribute("item")]}),be(Zt())}function ye(t){Bt("Select All"),Zt().checkedElements=Yt,ve(),$(t).DataTable().draw(!1)}function ge(t,e){Zt().fshMinLvl=t,Zt().fshMaxLvl=e,be(Zt())}function ke(t){$(t).DataTable().draw(!1)}function _e(t){Bt("changeLvls"),vt(ge,m(ke,t))}function $e(t){return Number(t[0])>=100}function xe(t,e){return t[e[0]]=e[1],t}function Ie(t){var e
Bt("Select None"),Zt().checkedElements=(e=Zt().checkedElements,I(e).filter($e).reduce(xe,{})),ve(),$(t).DataTable().draw()}function Re(t){Bt("Checkbox"),Zt().checkedElements={},M('table.fshInvFilter input[type="checkbox"][item]:checked').forEach(t=>{Zt().checkedElements[t.getAttribute("item")]=1}),be(Zt()),$(t).DataTable().draw(!1)}function Le(t){Bt("Defaults"),Zt().checkedElements=Qt.checkedElements,ve(),$(t).DataTable().draw(!1)}function Me(t){Bt("Reset levels"),Zt().fshMinLvl=Qt.fshMinLvl,Zt().fshMaxLvl=Qt.fshMaxLvl,be(Zt()),function(t){$("#fshMinLvl").val(Zt().fshMinLvl),$("#fshMaxLvl").val(Zt().fshMaxLvl),$(t).DataTable().draw(!1)}(t)}async function Se(t){const e=await ht(t)
return gt(e)}function we(t){return S({subcmd2:"dostoreitems",items:t})}async function Ee(t){const e=await E({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t})
return $t(e)}async function De(t){const e=await function(t){return w(we,Ee,t)}(t)
return xt(e),gt(e)}function Ne(t,e){t.eq(e).empty()}function Te(t,e){if(1===e.r)return
const n=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(m(Ne,t))}($("td",n)),n.css("text-decoration","line-through")}async function je(t,e){D(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),function(t){t.empty().append(`<img src="${N}ui/misc/spinner.gif" width="11" height="11">`)}(e)
const n=await t()
n&&Te(e,n)}function qe(t,e){Ft("setName"),$(t).DataTable().search(e.attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Ae(t){Ft("takeItem"),je(m(Rt,t.attr("invid"),t.attr("action")),t)}function Ge(t){Ft("recallItem"),je(m(It,t.attr("invid"),t.attr("playerid"),t.attr("mode"),t.attr("action")),t)}function Pe(t,e,n,s){Ft(n),je(m(t,e),s)}function Oe(t){Pe(De,[t.attr("invid")],"doStoreItem",t)}function Ce(t,e,n){Pe(t,n.attr("invid"),e,n)}const Ue=t=>Ce(_t,"doUseItem",t),Be=t=>Ce(kt,"doWearItem",t)
function Fe(t,e,n){Pe(t,[n.data("inv")],e,n)}const He=t=>Fe(mt,"doDropItem",t),We=t=>Fe(Se,"doSendItem",t)
function Qe(t,[e,n]){$(t).on("click",`span.${e}`,(t=>e=>t($(e.target)))(n))}function Ve(t){Ft("doMoveItem")
const e=$(t.target)
bt([e.data("inv")],e.val())}function Ye(t,e){$(e[0]).on("click",m(e[1],t))}const ze=t=>()=>{Ft(t)}
function Je(t){!function(t){[["#fshReset",Me],["#fshAll",ye],["#fshNone",Ie],["#fshDefault",Le]].forEach(m(Ye,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',m(Re,t)),function(t){[["dropItem",He],["recallItem",Ge],["sendItem",We],["setName",m(qe,t)],["storeItem",Oe],["takeItem",Ae],["useItem",Ue],["wearItem",Be]].forEach(m(Qe,t))}(t),function(t){["fshInvItem","fshMaroon","sorting"].forEach(e=>{$(t).on("click",`.${e}`,ze(e))})}(t)}let Ke=0
function Xe(t,e){return Mt(Ke,T(e[1]),Zt().fshMinLvl,Zt().fshMaxLvl)}function Ze(){Ke=[(t,e,n)=>0===n,...Lt],$.fn.dataTable.ext.search.push(Xe)}function tn(){$.fn.dataTable.ext.search.push((t,e,n,s)=>!Zt().checkedElements||Zt().checkedElements[s.type])}function en(){$.fn.dataTable.ext.search.push((t,e,n,s)=>!Zt().checkedElements?.[-1]||function(t){return Zt().checkedElements[-1]&&t.stats&&""!==t.stats.set_name}(s))}function nn(){$.fn.dataTable.ext.search.push((t,e,n,s)=>{const a=(parseInt(s.rarity,10)+100).toString()
return!Zt().checkedElements||Zt().checkedElements[a]})}var sn=G('<div class="main svelte-17l9o62"><div class="head svelte-17l9o62">Recall all visible to</div> <div class="btnbox svelte-17l9o62"><button class="custombutton svelte-17l9o62" type="button">BP</button> <button class="custombutton svelte-17l9o62" type="button">GS</button></div></div>')
j(["click"])
var an=G('<span class="fshGreen">Recalled</span>'),rn=G('<span class="fshSpinner"></span>'),dn=G('<button class="custombutton svelte-nq9151" type="button">BP</button>'),cn=G('<div class="main svelte-nq9151"><div class="head svelte-nq9151">Recall repairable to</div> <div class="btnbox svelte-nq9151"><!></div> <div class="btnbox svelte-nq9151"> </div></div>')
j(["click"])
var on=G("<!> <!>",1),ln=G("<div></div>"),un=G('<div class="container svelte-lahil7"><!></div>')
function fn(t,e){q(e,!0)
let n=F(e,"fshInv",3,0)
var s=un(),a=O(s),r=t=>{var e=on(),s=X(e)
!function(t,e){q(e,!1)
const n=t=>{h("Inventory","Recall All",t)}
A()
var s=sn(),a=P(O(s),2),i=O(a)
i.__click=function(){n("toBp"),[...M('span[action="take"]'),...M('span[mode="0"][action="recall"]')].forEach(B)},P(i,2).__click=function(){n("toGs"),M('span[mode="1"][action="recall"]').forEach(B)},C(t,s),U()}(s,{}),function(t,e){q(e,!0)
let n=F(e,"fshInv",3,0),s=Q(1),a=Q(0)
const i=new DataTable(n()).rows((t,{durability:e,max_durability:n,player_id:s,rarity:a,type:i})=>e<n&&-1===s&&5!==a&&i<9),r=H(i.data())
function d(){return St(r.map(({inv_id:t})=>t))}function c(){Y(a)||W(a,1)}r.length&&W(s,0)
var o=cn(),l=P(O(o),2),u=O(l),f=t=>{var e=K(),n=X(e)
Z(n,d,t=>{var e=rn()
C(t,e)},t=>{var e=an()
C(t,e)}),C(t,e)},p=t=>{var e=dn()
e.__click=c,z(()=>e.disabled=Y(s)),C(t,e)}
V(u,t=>{Y(a)?t(f):t(p,!1)})
var h=P(l,2),m=O(h)
z(()=>J(m,`${r.length??""} items to repair`)),C(t,o),U()}(P(s,2),{get fshInv(){return n()}}),C(t,e)},d=t=>{var e=ln()
C(t,e)}
V(a,t=>{"guildinvmgr"===i.subcmd?t(r):t(d,!1)}),C(t,s),U()}function pn(){if(!Dt)return
Nt(s(at("pF"),st({style:{textAlign:"center"}})))}function hn(){const t=jt().player_id?`<b>&nbsp;Inventory Manager</b> ${jt().items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${jt().items.length} items (maroon = in BP, blue=guild store)`
et("",u()),pn(),nt(u(),Vt.replace("@@reportTitle@@",t))}function mn(){n(jt().items)&&hn()}function bn(){$("#fshMinLvl").val(Zt().fshMinLvl),$("#fshMaxLvl").val(Zt().fshMaxLvl)}const vn=([,t])=>[t.id,t]
function yn(t){ct([Wt,Ze,tn,en,nn,mn,ve,bn])
const e=me()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",m(_e,t)),$(t).on("change","select.fshMoveItem",Ve),Je(t),yt(t,ze,Ft)}(e),$("#fshRefresh").on("click",t),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const n=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(n),n.on("click",m(Ht,t,e))}(e),function(t){tt(fn,{props:{fshInv:t},target:u()})}(e)}function gn(t){yn(t)}async function kn(n){const s=[ot(),Ut()]
"guildinvmgr"===i.subcmd&&s.push(async function(){await t(!1),i.membrList&&(i.membrList=e(I(i.membrList).filter(wt).map(vn)))}()),s.push(async function(){const t=await b(`fsh_${i.subcmd}`)
Jt={...y(Qt),...v(t,{})},Kt=g("showQuickDropLinks"),Xt=g("showQuickSendLinks")}()),await r(s),Object.getOwnPropertyNames(jt()).length&&function(t){dt(3,gn,[t])}(n)}function _n(){!it()&&u()&&("guildinvmgr"!==i.subcmd||l())&&(et(`<span id="fshInvMan"><img src = "${rt}">&nbsp;Getting inventory data...</span>`,u()),kn(_n))}export{_n as default}
//# sourceMappingURL=inventory-CmxChHsN.js.map
