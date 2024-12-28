import{g as t}from"./getMembrList-BHN_igCX.js"
import{a as e}from"./all-YfMtr2SN.js"
import{cv as n,i as s,c7 as a,ag as i,p as r,aK as c,bW as o,cP as d,s as l,c as u,aQ as f,br as p,ai as m,cF as h,cQ as b,bt as y,C as v,bR as g,aS as k,k as _,G as I,$ as x,aJ as R,aP as w,S as L,L as S,M,O as E,P as j,Q as D,T,U as N,X as C,a0 as A,a1 as G,a2 as P,aO as q,a4 as O,cR as U,a5 as F,g as B,cS as W,cT as V,b0 as H,cU as Q,cV as Y,cW as X,bj as J,bk as K,be as Z,bh as z,bl as tt,am as et,d as nt,v as st,m as at,w as it,bZ as rt,f as ct,aV as ot}from"./calfSystem-KuDT30_2.js"
import{e as dt}from"./executeAll-DIAWIge1.js"
import{l as lt}from"./loadDataTables-D2vPiaS1.js"
import{d as ut,a as ft}from"./deepClone-DtU9UBGt.js"
import{d as pt}from"./daGuildReport-b5E2wPP0.js"
import{d as mt}from"./daLoadInventory-CENe1TxJ.js"
import{b as ht}from"./basicItem-B1znyKte.js"
import{e as bt,d as yt,a as vt,m as gt}from"./dropItem-BoTEf0JC.js"
import{f as kt}from"./flattenItems-C4pfIrZn.js"
import{c as $t}from"./createTable-BnO729BN.js"
import{i as _t}from"./isSelected-BWnMzKlW.js"
import{c as It}from"./changeMinMax-8kupOwY_.js"
import{c as xt}from"./chromeHandlers-BVfQ0WyF.js"
import{a as Rt,u as wt,e as Lt}from"./useItem-CmyOzN7U.js"
import{g as St}from"./guildInventory-Bxe3DdWj.js"
import{h as Mt}from"./htmlResult-UAWBTbJ2.js"
import{e as Et}from"./errorDialog-B4_TjdGG.js"
import{q as jt,a as Dt}from"./queue-CsQlcOFe.js"
import{p as Tt,l as Nt}from"./lvlTests-BXbkGopt.js"
import{i as Ct}from"./intValue-C7nTQec1.js"
import{i as At}from"./isArray-eVldfhw1.js"
import"./guildMembers-BI7B-WBZ.js"
import"./guild-CXX8zghN.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-C1wBsOov.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./daUseItem-B2iuzZ1J.js"
import"./InfoBoxFrom-C3VQd94d.js"
import"./backpackOk-Di5f9BUM.js"
import"./takeItem-COQzi4M8.js"
function Gt([t]){return"lastUpdate"!==t}function Pt(){return n({subcmd:"inventory"})}let qt=""
const Ot=()=>qt
function Ut(t,e){qt||(qt=e.message),qt&&s(t,a("p",{className:"fshRed",textContent:qt}))}let Ft={}
const Bt=()=>Ft
async function Wt(t){try{return await t()}catch(t){if(500!==t.jqXhr.status)throw t
Ut(r(),t)}}const Vt=(t,e)=>{return e.map(ht).map((n=t,function(t){const e=n?.find((({inv_id:e})=>e===t.inv_id))
return{...t,...e?.stats&&{stats:{...t.stats,armor:e.stats.armor,attack:e.stats.attack,damage:e.stats.damage,defense:e.stats.defense,hp:e.stats.hp,set_name:e.stats.set_name??""}}}}))
var n},Ht=t=>({...t,equipped:!0,folder_id:-2}),Qt=(t,e,n)=>({folders:bt(t),items:Vt(e,n),player_id:c()})
const Yt=t=>({...t,player:{id:-1}}),Xt=(t,e)=>({current_player_id:c(),items:Vt(t,e),guild_id:o()})
async function Jt(){if("invmanagernew"===i.subcmd){const t=await async function(){const[t,n]=await e([Wt(Pt),mt()]),s=t?.items??[],a=n?.r??{},i=(a.equipment?.map(Ht)??[]).concat(kt(a))
return Qt(a,s,i)}()
Ft=t}else if("guildinvmgr"===i.subcmd){const t=await async function(){const[t,n,s]=await e([Wt(d),pt(),ut()]),a=t?.items??[],i=n?.r??[],r=s?.r??[],c=i.concat(r.map(Yt))
return Xt(a,c)}()
Ft=t}}const Kt=t=>{l("Inventory","Header",t)},Zt=t=>{l("Inventory","Datatable",t)}
function zt(t,e){Zt("clearSearch"),e.val(""),$(t).DataTable().search("").draw()}function te(){Bt().folders&&(Bt().folders[-1]="Main")}const ee={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},ne='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',se={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},ae={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
let ie={},re=0,ce=0
const oe=()=>ie,de=()=>re,le=()=>ce
function ue(t){return ae[t]?ae[t].abbr:""}function fe(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n),e.equipped&&t.classList.add("fshBold")}function pe(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function me(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${p(t.player_id,Bt().player_id)}" mode="1" action="recall">GS</span>`}function he(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function be(t,e,n){return"display"===t?n(e):"GS"}function ye(t,e){const n=function(t){return-1===t.player_id?4:pe(t)?7:1}(e),s=(a=Bt().player_id,i=e.player_id,r=Bt().guild_id,a||(-1!==i?i:r))
var a,i,r
let c=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(c=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${h}${t}" class="fshInvItem tip-dynamic ${b[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${s}">${t}</a>${c}`}const ve=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==Bt().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===Bt().current_player_id}(t),(t,e)=>e.c]]
function ge(t,e){const n=ve.find((([e])=>e(t)))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function ke(t){return p(t.folder_id,t.player_id)}function $e(t){return i.membrList[t]?i.membrList[t].username:"???"}function _e(t,e){return t[0]-e[0]}function Ie(t,e){return`<option value="${e[0]}"${_t(Number(e[0]),t)}>${e[1]}</option>`}const xe=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:ye(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:ke,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":$e(n.player_id)},display:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${y}${t.player_id}">${$e(t.player_id)}</a>`}(n):n.equipped?"Worn":`<select class="fshMoveItem" data-inv="${n.inv_id}">${s=n.folder_id,a=Bt().folders,v(a).sort(_e).map(u(Ie,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":$e(t.player_id)}(n):n.equipped?"Worn":Bt().folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>g[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>ae[t]?ae[t].index:0,display:ue,filter:ue}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.floor(n.durability/n.max_durability*100)}},{title:"BP",data:ke,render:function(t,e,n){if(!n.folder_id&&n.player_id!==Bt().current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:ke,render:function(t,e,n){return pe(n)?be(e,n,me):function(t){return t.folder_id&&!t.bound}(n)?be(e,n,he):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const s=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t]
return 1===s?ge(n,{a:"wear",b:"Wear",c:"wearItem"}):2===s?ge(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function Re(){return"player_id"in Bt()}function we(){const t=function(){const t=$t({className:"hover fshXSmall",id:Re()?"fshUserInv":"fshGuildInv"})
return s(r(),t),t}(),e=function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:xe,createdRow:fe,data:Bt().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)
return function(t){[[12,"current_player_id"in Bt()],[17,Re()&&de()],[18,Re()&&le()]].forEach((([e,n])=>t.column(e).visible(n)))}(e),t}function Le(t){k(`fsh_${i.subcmd}`,t)}function Se(){_('table.fshInvFilter input[type="checkbox"]').forEach((t=>{t.checked=1===oe().checkedElements[t.getAttribute("item")]})),Le(oe())}function Me(t){Kt("Select All"),oe().checkedElements=se,Se(),$(t).DataTable().draw(!1)}function Ee(t,e){oe().fshMinLvl=t,oe().fshMaxLvl=e,Le(oe())}function je(t){$(t).DataTable().draw(!1)}function De(t){Kt("changeLvls"),It(Ee,u(je,t))}function Te(t){return Number(t[0])>=100}function Ne(t,e){return t[e[0]]=e[1],t}function Ce(t){var e
Kt("Select None"),oe().checkedElements=(e=oe().checkedElements,v(e).filter(Te).reduce(Ne,{})),Se(),$(t).DataTable().draw()}function Ae(t){Kt("Checkbox"),oe().checkedElements={},_('table.fshInvFilter input[type="checkbox"][item]:checked').forEach((t=>{oe().checkedElements[t.getAttribute("item")]=1})),Le(oe()),$(t).DataTable().draw(!1)}function Ge(t){Kt("Defaults"),oe().checkedElements=ee.checkedElements,Se(),$(t).DataTable().draw(!1)}function Pe(t){Kt("Reset levels"),oe().fshMinLvl=ee.fshMinLvl,oe().fshMaxLvl=ee.fshMaxLvl,Le(oe()),function(t){$("#fshMinLvl").val(oe().fshMinLvl),$("#fshMaxLvl").val(oe().fshMaxLvl),$(t).DataTable().draw(!1)}(t)}async function qe(t){const e=await yt(t)
return Rt(e)}function Oe(t){return St({subcmd2:"dostoreitems",items:t})}async function Ue(t){const e=await I({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t})
return Mt(e)}async function Fe(t){const e=await function(t){return x(Oe,Ue,t)}(t)
return Et(e),Rt(e)}function Be(t,e){t.eq(e).empty()}function We(t,e){if(1===e.r)return
const n=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(u(Be,t))}($("td",n)),n.css("text-decoration","line-through")}async function Ve(t,e){R(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),function(t){t.empty().append(`<img src="${w}ui/misc/spinner.gif" width="11" height="11">`)}(e)
const n=await t()
n&&We(e,n)}function He(t,e){Zt("setName"),$(t).DataTable().search(e.attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Qe(t){Zt("takeItem"),Ve(u(jt,t.attr("invid"),t.attr("action")),t)}function Ye(t){Zt("recallItem"),Ve(u(Dt,t.attr("invid"),t.attr("playerid"),t.attr("mode"),t.attr("action")),t)}function Xe(t,e,n,s){Zt(n),Ve(u(t,e),s)}function Je(t){Xe(Fe,[t.attr("invid")],"doStoreItem",t)}function Ke(t,e,n){Xe(t,n.attr("invid"),e,n)}const Ze=t=>Ke(wt,"doUseItem",t),ze=t=>Ke(Lt,"doWearItem",t)
function tn(t,e,n){Xe(t,[n.data("inv")],e,n)}const en=t=>tn(vt,"doDropItem",t),nn=t=>tn(qe,"doSendItem",t),sn=t=>e=>t($(e.target))
function an(t,[e,n]){$(t).on("click",`span.${e}`,sn(n))}function rn(t){Zt("doMoveItem")
const e=$(t.target)
gt([e.data("inv")],e.val())}function cn(t,e){$(e[0]).on("click",u(e[1],t))}const on=t=>()=>{Zt(t)}
function dn(t){!function(t){[["#fshReset",Pe],["#fshAll",Me],["#fshNone",Ce],["#fshDefault",Ge]].forEach(u(cn,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',u(Ae,t)),function(t){[["dropItem",en],["recallItem",Ye],["sendItem",nn],["setName",u(He,t)],["storeItem",Je],["takeItem",Qe],["useItem",Ze],["wearItem",ze]].forEach(u(an,t))}(t),function(t){["fshInvItem","fshMaroon","sorting"].forEach((e=>{$(t).on("click",`.${e}`,on(e))}))}(t)}let ln=0
function un(t,e){return Nt(ln,Ct(e[1]),oe().fshMinLvl,oe().fshMaxLvl)}function fn(){ln=[(t,e,n)=>0===n,...Tt],$.fn.dataTable.ext.search.push(un)}function pn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>!oe().checkedElements||oe().checkedElements[s.type]))}function mn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>!oe().checkedElements?.[-1]||function(t){return oe().checkedElements[-1]&&t.stats&&""!==t.stats.set_name}(s)))}function hn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>{const a=(parseInt(s.rarity,10)+100).toString()
return!oe().checkedElements||oe().checkedElements[a]}))}function bn(t){let e,n,s,a,i,r,c,o,d
return{c(){e=E("div"),n=E("div"),n.textContent="Recall all visible to",s=j(),a=E("div"),i=E("button"),i.textContent="BP",r=j(),c=E("button"),c.textContent="GS",D(n,"class","head svelte-1mlms3r"),D(i,"class","custombutton svelte-1mlms3r"),D(i,"type","button"),D(c,"class","custombutton svelte-1mlms3r"),D(c,"type","button"),D(a,"class","btnbox svelte-1mlms3r"),D(e,"class","main svelte-1mlms3r")},m(l,u){T(l,e,u),N(e,n),N(e,s),N(e,a),N(a,i),N(a,r),N(a,c),o||(d=[C(i,"click",t[0]),C(c,"click",t[1])],o=!0)},p:A,i:A,o:A,d(t){t&&G(e),o=!1,P(d)}}}function yn(t){const e=t=>{l("Inventory","Recall All",t)}
return[function(){e("toBp"),[..._('span[action="take"]'),..._('span[mode="0"][action="recall"]')].forEach(q)},function(){e("toGs"),_('span[mode="1"][action="recall"]').forEach(q)}]}class vn extends L{constructor(t){super(),S(this,t,yn,bn,M,{})}}function gn(t){let e,n,s,a,i,r,c,o,d,l=(t[0]||"")+"",u=(t[1]||"")+""
return{c(){e=E("div"),n=O("Chunks needed: "),s=E("span"),a=O(l),i=j(),r=E("div"),c=O("Chunks received: "),o=E("span"),d=O(u)},m(t,l){T(t,e,l),N(e,n),N(e,s),N(s,a),T(t,i,l),T(t,r,l),N(r,c),N(r,o),N(o,d)},p(t,e){1&e&&l!==(l=(t[0]||"")+"")&&F(a,l),2&e&&u!==(u=(t[1]||"")+"")&&F(d,u)},d(t){t&&(G(e),G(i),G(r))}}}function kn(t){let e,n,s,a,i,r,c,o,d,l,u,f,p,m,h,b,y,v,g,k,$,_=t[0]&&gn(t)
return{c(){e=E("div"),n=E("div"),s=O("Update Stats\n    "),a=E("div"),i=O("[\n      "),r=E("div"),c=E("span"),o=O("?"),d=O("\n      ]"),l=j(),u=E("div"),f=E("button"),f.textContent="On page",p=j(),m=E("button"),m.textContent="All",h=j(),b=E("div"),y=E("button"),y.textContent="Clear cache",v=j(),g=E("div"),_&&_.c(),D(c,"class","tooltip-multiline"),D(c,"data-tooltip",t[5]),D(r,"class","tooltip svelte-15yybge"),D(a,"class","wrapper svelte-15yybge"),D(n,"class","head svelte-15yybge"),D(f,"class","custombutton svelte-15yybge"),D(f,"type","button"),D(m,"class","custombutton svelte-15yybge"),D(m,"type","button"),D(u,"class","btnbox svelte-15yybge"),D(y,"class","custombutton svelte-15yybge"),D(y,"type","button"),D(b,"class","btnbox svelte-15yybge"),D(g,"class","chunkbox svelte-15yybge"),D(e,"class","main svelte-15yybge")},m(I,x){T(I,e,x),N(e,n),N(n,s),N(n,a),N(a,i),N(a,r),N(r,c),N(c,o),N(a,d),N(e,l),N(e,u),N(u,f),N(u,p),N(u,m),N(e,h),N(e,b),N(b,y),N(e,v),N(e,g),_&&_.m(g,null),k||($=[C(f,"click",t[2]),C(m,"click",t[3]),C(y,"click",t[4])],k=!0)},p(t,[e]){t[0]?_?_.p(t,e):(_=gn(t),_.c(),_.m(g,null)):_&&(_.d(1),_=null)},i:A,o:A,d(t){t&&G(e),_&&_.d(),k=!1,P($)}}}function $n(t,n,s){let{fshInv:a=0}=n
const r=new DataTable(a)
let c=0,o=0
async function d([t,e,n]){const a=await X(t,e,n)
return s(1,o+=1),a}async function u(t){const n=r.rows(W,t),a=V(H(n.data()))
s(0,c=a.length),s(1,o=0)
const i=await e(a.map(d))
n.every(Q(i.flatMap(Y))),r.draw()}const f=t=>{l("Inventory","Update Stats",t)}
U(a)
return t.$$set=t=>{"fshInv"in t&&s(6,a=t.fshInv)},[c,o,async function(){f("On page"),u({page:"current"})},function(){f("All"),u()},async function(){f("Clear cache"),await k(`fsh_${i.subcmd}_cache`,[]),q(B("fshRefresh"))},"This allows you to update the stats of items. It is useful in cases where stats are missing or if you want accurate stats for forged items. It can be slow for large data sets. The results are cached and will be used automatically next time you visit this page. You will need to update again if these stats become stale. For example, if you forged or crafted an item, or if a guild store item has moved.",a]}class _n extends L{constructor(t){super(),S(this,t,$n,kn,M,{fshInv:6})}}function In(t){let e
return{c(){e=E("div")},m(t,n){T(t,e,n)},p:A,i:A,o:A,d(t){t&&G(e)}}}function xn(t){let e,n,s,a
e=new vn({})
return{c(){J(e.$$.fragment),n=j(),s=et()},m(t,i){K(e,t,i),T(t,n,i),T(t,s,i),a=!0},p(t,e){},i(t){a||(Z(e.$$.fragment,t),Z(false),a=!0)},o(t){z(e.$$.fragment,t),z(false),a=!1},d(t){t&&(G(n),G(s)),tt(e,t)}}}function Rn(t){let e,n,s,a,r,c
const o=[xn,In],d=[]
return n="guildinvmgr"===i.subcmd?0:1,s=d[n]=o[n](t),r=new _n({props:{fshInv:t[0]}}),{c(){e=E("div"),s.c(),a=j(),J(r.$$.fragment),D(e,"class","container svelte-1tjz5ud")},m(t,s){T(t,e,s),d[n].m(e,null),N(e,a),K(r,e,null),c=!0},p(t,[e]){s.p(t,e)
const n={}
1&e&&(n.fshInv=t[0]),r.$set(n)},i(t){c||(Z(s),Z(r.$$.fragment,t),c=!0)},o(t){z(s),z(r.$$.fragment,t),c=!1},d(t){t&&G(e),d[n].d(),tt(r)}}}function wn(t,e,n){let{fshInv:s=0}=e
return t.$$set=t=>{"fshInv"in t&&n(0,s=t.fshInv)},[s]}class Ln extends L{constructor(t){super(),S(this,t,wn,Rn,M,{fshInv:0})}}function Sn(t){!function(t){new Ln({props:{fshInv:t},target:r()})}(t)}const Mn=()=>Bt().player_id?`<b>&nbsp;Inventory Manager</b> ${Bt().items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${Bt().items.length} items (maroon = in BP, blue=guild store)`
function En(){const t=Mn()
nt("",r()),function(){if(!Ot())return
Ut(s(B("pF"),at({style:{textAlign:"center"}})))}(),st(r(),ne.replace("@@reportTitle@@",t))}function jn(){At(Bt().items)&&En()}function Dn(){$("#fshMinLvl").val(oe().fshMinLvl),$("#fshMaxLvl").val(oe().fshMaxLvl)}const Tn=([,t])=>[t.id,t]
function Nn(t){dt([te,fn,pn,mn,hn,jn,Se,Dn])
const e=we()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",u(De,t)),$(t).on("change","select.fshMoveItem",rn),dn(t),xt(t,on,Zt)}(e),$("#fshRefresh").on("click",t),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const n=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(n),n.on("click",u(zt,t,e))}(e),Sn(e)}function Cn(t){Nn(t)}const An=()=>Object.getOwnPropertyNames(Bt()).length
async function Gn(n){const s=[lt(),Jt()]
"guildinvmgr"===i.subcmd&&s.push(async function(){await t(!1),i.membrList&&(i.membrList=ct(v(i.membrList).filter(Gt).map(Tn)))}()),s.push(async function(){const t=await f(`fsh_${i.subcmd}`)
ie={...ft(ee),...p(t,{})},re=m("showQuickDropLinks"),ce=m("showQuickSendLinks")}()),await e(s),An()&&function(t){ot(3,Cn,[t])}(n)}function Pn(){!it()&&r()&&("guildinvmgr"!==i.subcmd||o())&&(nt(`<span id="fshInvMan"><img src = "${rt}">&nbsp;Getting inventory data...</span>`,r()),Gn(Pn))}export{Pn as default}
//# sourceMappingURL=inventory-DFl9R-tl.js.map