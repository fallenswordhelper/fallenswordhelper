import{g as t}from"./getMembrList-d2aebe41.js"
import{cj as e,i as n,bX as s,ab as a,p as i,aE as r,bI as c,cC as o,n as d,c as l,bi as u,ad as f,cs as p,cD as m,bk as h,C as b,bD as y,j as v,E as g,$ as _,aD as k,aI as I,o as x,g as w,S as R,J as L,K as M,L as S,M as E,N as j,P as D,Q as T,U as N,W as C,X as A,Y as P,av as q,aT as G,_ as U,a0 as O,ba as F,bb as B,b5 as W,b8 as H,bc as V,s as Q,v as Y,l as X,w as J,bN as K,f as z,aM as Z,bJ as tt,bK as et}from"./calfSystem-4830a18d.js"
import{a as nt}from"./all-414e0607.js"
import{e as st}from"./executeAll-ef9da8be.js"
import{l as at}from"./loadDataTables-893ea24d.js"
import{d as it,a as rt,b as ct}from"./deepClone-d831978a.js"
import{d as ot}from"./daLoadInventory-9c7bd6b5.js"
import{b as dt}from"./basicItem-cb072d2b.js"
import{e as lt,d as ut,a as ft,m as pt}from"./dropItem-09106184.js"
import{f as mt}from"./flattenItems-03659160.js"
import{c as ht}from"./createTable-67896158.js"
import{g as bt,s as yt}from"./idb-7e56faaa.js"
import{i as vt}from"./isSelected-5d9f5edf.js"
import{c as gt}from"./changeMinMax-d4bd1aea.js"
import{a as _t,u as kt,e as $t}from"./useItem-429514b5.js"
import{g as It}from"./guildInventory-734d12f3.js"
import{h as xt}from"./htmlResult-7fa1a7c5.js"
import{e as wt}from"./errorDialog-9e633a62.js"
import{q as Rt,a as Lt}from"./queue-0156e01b.js"
import{p as Mt,l as St}from"./lvlTests-3097e750.js"
import{i as Et}from"./intValue-e1798d0a.js"
import{p as jt}from"./postApp-ccc938c4.js"
import{c as Dt}from"./chunk-cd03a005.js"
import{i as Tt}from"./isArray-09a53da7.js"
import"./guildMembers-7edbe4e6.js"
import"./now-6f22aec9.js"
import"./guild-8e58b9bf.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./sendItems-2a530a59.js"
import"./numberIsNaN-a40c3bbb.js"
import"./daUseItem-9fccc07b.js"
import"./InfoBoxFrom-29ddbf6c.js"
import"./backpackOk-4fcbe3d7.js"
import"./takeItem-de2d7599.js"
function Nt([t]){return"lastUpdate"!==t}function Ct(){return e({subcmd:"inventory"})}let At=""
const Pt=()=>At
function qt(t,e){At||(At=e.message),At&&n(t,s("p",{className:"fshRed",textContent:At}))}let Gt={}
const Ut=()=>Gt
async function Ot(t){try{return await t()}catch(t){if(500!==t.jqXhr.status)throw t
qt(i(),t)}}const Ft=(t,e)=>{return e.map(dt).map((n=t,function(t){const e=n?.find((({inv_id:e})=>e===t.inv_id))
return{...t,...e?.stats&&{stats:{...t.stats,armor:e.stats.armor,attack:e.stats.attack,damage:e.stats.damage,defense:e.stats.defense,hp:e.stats.hp,set_name:e.stats.set_name??""}}}}))
var n},Bt=t=>({...t,equipped:!0,folder_id:-2}),Wt=(t,e,n)=>({folders:lt(t),items:Ft(e,n),player_id:r()})
const Ht=t=>({...t,player:{id:-1}}),Vt=(t,e)=>({current_player_id:r(),items:Ft(t,e),guild_id:c()})
async function Qt(){if("invmanagernew"===a.subcmd){const t=await async function(){const[t,e]=await nt([Ot(Ct),ot()]),n=t?.items??[],s=e?.r??{},a=(s.equipment?.map(Bt)??[]).concat(mt(s))
return Wt(s,n,a)}()
Gt=t}else if("guildinvmgr"===a.subcmd){const t=await async function(){const[t,e,n]=await nt([Ot(o),it(),rt()]),s=t?.items??[],a=e?.r??[],i=n?.r??[],r=a.concat(i.map(Ht))
return Vt(s,r)}()
Gt=t}}const Yt=t=>{d("Inventory","Header",t)},Xt=t=>{d("Inventory","Datatable",t)}
function Jt(t,e){Xt("clearSearch"),e.val(""),$(t).DataTable().search("").draw()}function Kt(){Ut().folders&&(Ut().folders[-1]="Main")}const zt={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},Zt='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',te={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},ee={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
let ne={},se=0,ae=0
const ie=()=>ne,re=()=>se,ce=()=>ae
function oe(t){return ee[t]?ee[t].abbr:""}function de(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n),e.equipped&&t.classList.add("fshBold")}function le(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function ue(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${u(t.player_id,Ut().player_id)}" mode="1" action="recall">GS</span>`}function fe(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function pe(t,e,n){return"display"===t?n(e):"GS"}function me(t,e){const n=function(t){return-1===t.player_id?4:le(t)?7:1}(e),s=(a=Ut().player_id,i=e.player_id,r=Ut().guild_id,a||(-1!==i?i:r))
var a,i,r
let c=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(c=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${p}${t}" class="fshInvItem tip-dynamic ${m[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${s}">${t}</a>${c}`}const he=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==Ut().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===Ut().current_player_id}(t),(t,e)=>e.c]]
function be(t,e){const n=he.find((([e])=>e(t)))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function ye(t){return u(t.folder_id,t.player_id)}function ve(t){return a.membrList[t]?a.membrList[t].username:"???"}function ge(t,e){return t[0]-e[0]}function _e(t,e){return`<option value="${e[0]}"${vt(Number(e[0]),t)}>${e[1]}</option>`}const ke=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:me(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:ye,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":ve(n.player_id)},display:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${h}${t.player_id}">${ve(t.player_id)}</a>`}(n):n.equipped?"Worn":`<select class="fshMoveItem" data-inv="${n.inv_id}">${s=n.folder_id,a=Ut().folders,b(a).sort(ge).map(l(_e,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":ve(t.player_id)}(n):n.equipped?"Worn":Ut().folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>y[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>ee[t]?ee[t].index:0,display:oe,filter:oe}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.ceil(n.durability/n.max_durability*100)}},{title:"BP",data:ye,render:function(t,e,n){if(!n.folder_id&&n.player_id!==Ut().current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:ye,render:function(t,e,n){return le(n)?pe(e,n,ue):function(t){return t.folder_id&&!t.bound}(n)?pe(e,n,fe):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const s=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t]
return 1===s?be(n,{a:"wear",b:"Wear",c:"wearItem"}):2===s?be(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function $e(){return"player_id"in Ut()}function Ie(){const t=function(){const t=ht({className:"hover fshXSmall",id:$e()?"fshUserInv":"fshGuildInv"})
return n(i(),t),t}(),e=function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:ke,createdRow:de,data:Ut().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)
return function(t){[[12,"current_player_id"in Ut()],[17,$e()&&re()],[18,$e()&&ce()]].forEach((([e,n])=>t.column(e).visible(n)))}(e),t}function xe(t){yt(`fsh_${a.subcmd}`,t)}function we(){v('table.fshInvFilter input[type="checkbox"]').forEach((t=>{t.checked=1===ie().checkedElements[t.getAttribute("item")]})),xe(ie())}function Re(t){Yt("Select All"),ie().checkedElements=te,we(),$(t).DataTable().draw(!1)}function Le(t,e){ie().fshMinLvl=t,ie().fshMaxLvl=e,xe(ie())}function Me(t){$(t).DataTable().draw(!1)}function Se(t){Yt("changeLvls"),gt(Le,l(Me,t))}function Ee(t){return Number(t[0])>=100}function je(t,e){return t[e[0]]=e[1],t}function De(t){var e
Yt("Select None"),ie().checkedElements=(e=ie().checkedElements,b(e).filter(Ee).reduce(je,{})),we(),$(t).DataTable().draw()}function Te(t){Yt("Checkbox"),ie().checkedElements={},v('table.fshInvFilter input[type="checkbox"][item]:checked').forEach((t=>{ie().checkedElements[t.getAttribute("item")]=1})),xe(ie()),$(t).DataTable().draw(!1)}function Ne(t){Yt("Defaults"),ie().checkedElements=zt.checkedElements,we(),$(t).DataTable().draw(!1)}function Ce(t){Yt("Reset levels"),ie().fshMinLvl=zt.fshMinLvl,ie().fshMaxLvl=zt.fshMaxLvl,xe(ie()),function(t){$("#fshMinLvl").val(ie().fshMinLvl),$("#fshMaxLvl").val(ie().fshMaxLvl),$(t).DataTable().draw(!1)}(t)}async function Ae(t){const e=await ut(t)
return _t(e)}function Pe(t){return It({subcmd2:"dostoreitems",items:t})}async function qe(t){const e=await g({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t})
return xt(e)}async function Ge(t){const e=await function(t){return _(Pe,qe,t)}(t)
return wt(e),_t(e)}function Ue(t,e){t.eq(e).empty()}function Oe(t,e){if(1===e.r)return
const n=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(l(Ue,t))}($("td",n)),n.css("text-decoration","line-through")}async function Fe(t,e){k(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),function(t){t.empty().append(`<img src="${I}ui/misc/spinner.gif" width="11" height="11">`)}(e)
const n=await t()
n&&Oe(e,n)}function Be(t,e){Xt("setName"),$(t).DataTable().search(e.attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function We(t){Xt("takeItem"),Fe(l(Rt,t.attr("invid"),t.attr("action")),t)}function He(t){Xt("recallItem"),Fe(l(Lt,t.attr("invid"),t.attr("playerid"),t.attr("mode"),t.attr("action")),t)}function Ve(t,e,n,s){Xt(n),Fe(l(t,e),s)}function Qe(t){Ve(Ge,[t.attr("invid")],"doStoreItem",t)}function Ye(t,e,n){Ve(t,n.attr("invid"),e,n)}const Xe=t=>Ye(kt,"doUseItem",t),Je=t=>Ye($t,"doWearItem",t)
function Ke(t,e,n){Ve(t,[n.data("inv")],e,n)}const ze=t=>Ke(ft,"doDropItem",t),Ze=t=>Ke(Ae,"doSendItem",t),tn=t=>e=>t($(e.target))
function en(t,[e,n]){$(t).on("click",`span.${e}`,tn(n))}function nn(t){Xt("doMoveItem")
const e=$(t.target)
pt([e.data("inv")],e.val())}function sn(t,e){$(e[0]).on("click",l(e[1],t))}const an=t=>()=>{Xt(t)}
function rn(t){!function(t){[["#fshReset",Ce],["#fshAll",Re],["#fshNone",De],["#fshDefault",Ne]].forEach(l(sn,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',l(Te,t)),function(t){[["dropItem",ze],["recallItem",He],["sendItem",Ze],["setName",l(Be,t)],["storeItem",Qe],["takeItem",We],["useItem",Xe],["wearItem",Je]].forEach(l(en,t))}(t),function(t){["fshInvItem","fshMaroon","sorting"].forEach((e=>{$(t).on("click",`.${e}`,an(e))}))}(t)}function cn(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",l(Se,t)),$(t).on("change","select.fshMoveItem",nn),rn(t),function(t){$(`#${t.id}_length select`).on("change",an("dataTables_length")),$(`#${t.id}_filter input`).on("keyup",an("dataTables_filter")),x(w(`${t.id}_paginate`),(t=>{t.target.classList.contains("paginate_button")&&Xt("paginate_button")}))}(t)}let on=0
function dn(t,e){return St(on,Et(e[1]),ie().fshMinLvl,ie().fshMaxLvl)}function ln(){on=[(t,e,n)=>0===n,...Mt],$.fn.dataTable.ext.search.push(dn)}function un(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>!ie().checkedElements||ie().checkedElements[s.type]))}function fn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>!ie().checkedElements?.[-1]||function(t){return ie().checkedElements[-1]&&t.stats&&-1!==t.stats.set_id}(s)))}function pn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>{const a=(parseInt(s.rarity,10)+100).toString()
return!ie().checkedElements||ie().checkedElements[a]}))}function mn(t){let e,n,s,a,i,r,c,o,d
return{c(){e=S("div"),n=S("div"),n.textContent="Recall all visible to",s=E(),a=S("div"),i=S("button"),i.textContent="BP",r=E(),c=S("button"),c.textContent="GS",j(n,"class","head svelte-1mlms3r"),j(i,"class","custombutton svelte-1mlms3r"),j(i,"type","button"),j(c,"class","custombutton svelte-1mlms3r"),j(c,"type","button"),j(a,"class","btnbox svelte-1mlms3r"),j(e,"class","main svelte-1mlms3r")},m(l,u){D(l,e,u),T(e,n),T(e,s),T(e,a),T(a,i),T(a,r),T(a,c),o||(d=[N(i,"click",t[0]),N(c,"click",t[1])],o=!0)},p:C,i:C,o:C,d(t){t&&A(e),o=!1,P(d)}}}function hn(t){const e=t=>{d("Inventory","Recall All",t)}
return[function(){e("toBp"),[...v('span[action="take"]'),...v('span[mode="0"][action="recall"]')].forEach(q)},function(){e("toGs"),v('span[mode="1"][action="recall"]').forEach(q)}]}class bn extends R{constructor(t){super(),L(this,t,hn,mn,M,{})}}const yn=(t,e)=>e.map(((e,n)=>({...e,inv_id:t[n].inv_id}))),vn=({folder_id:t})=>-2!==(t??-2),gn=({folder_id:t})=>-2===t,_n=({player_id:t})=>-1!==(t??-1),kn=({player_id:t})=>t,$n=({player_id:t})=>-1===t,In=([t,e,n])=>Dt(20,t).map((t=>[t,e,n])),xn=t=>({inv_id:e})=>e===t.inv_id,wn=(t,e)=>t.attributes.find((({id:t})=>t===e))?.value??0,Rn=(t,e)=>({...e,armor:wn(t,2),attack:wn(t,0),damage:wn(t,4),defense:wn(t,1),hp:wn(t,3),set_name:t.set_name??""}),Ln=(t,{type:e})=>e<9,Mn=t=>t?.s?t.r.items:[]
function Sn(t){return function(){const e=this.data(),n=t.find(xn(e))
n?.attributes&&(e.stats=Rn(n,e.stats),this.invalidate())}}const En=async()=>await bt(`fsh_${a.subcmd}_cache`)??[],jn=t=>yt(`fsh_${a.subcmd}_cache`,t),Dn=t=>e=>t.every((t=>t.inv_id!==e.inv_id))
async function Tn(t,e,n){const s=await(a={item_id:t.map((({item_id:t})=>t)),inv_id:t.map((({inv_id:t})=>t)),p:t.map(e),t:t.map((()=>n))},jt({cmd:"fetchitem",compare:0,...a}))
var a
return s?.s&&(s.r.items=yn(t,s.r.items),await async function(t){const e=(await En()).filter(Dn(t))
await jn(e.concat(t))}(s.r.items)),s}const Nn=(t,e)=>{return e.filter((n=G(t.data()),t=>n.some((e=>t.inv_id===e.inv_id))))
var n}
async function Cn(t){const e=t.rows(Ln),n=await async function(t){const e=await En(),n=Nn(t,e)
return await jn(n),n}(e)
e.every(Sn(n))}function An(t){let e,n,s,a,i,r,c,o,d,l=(t[0]||"")+"",u=(t[1]||"")+""
return{c(){e=S("div"),n=U("Chunks needed: "),s=S("span"),a=U(l),i=E(),r=S("div"),c=U("Chunks received: "),o=S("span"),d=U(u)},m(t,l){D(t,e,l),T(e,n),T(e,s),T(s,a),D(t,i,l),D(t,r,l),T(r,c),T(r,o),T(o,d)},p(t,e){1&e&&l!==(l=(t[0]||"")+"")&&O(a,l),2&e&&u!==(u=(t[1]||"")+"")&&O(d,u)},d(t){t&&(A(e),A(i),A(r))}}}function Pn(t){let e,n,s,a,i,r,c,o,d,l,u,f,p,m,h,b,y,v,g,_,k,$=t[0]&&An(t)
return{c(){e=S("div"),n=S("div"),s=U("Update Stats\n    "),a=S("div"),i=U("[\n      "),r=S("div"),c=S("span"),o=U("?"),d=U("\n      ]"),l=E(),u=S("div"),f=S("button"),f.textContent="On page",p=E(),m=S("button"),m.textContent="All",h=E(),b=S("div"),y=S("button"),y.textContent="Clear cache",v=E(),g=S("div"),$&&$.c(),j(c,"class","tooltip-multiline"),j(c,"data-tooltip",t[5]),j(r,"class","tooltip svelte-15yybge"),j(a,"class","wrapper svelte-15yybge"),j(n,"class","head svelte-15yybge"),j(f,"class","custombutton svelte-15yybge"),j(f,"type","button"),j(m,"class","custombutton svelte-15yybge"),j(m,"type","button"),j(u,"class","btnbox svelte-15yybge"),j(y,"class","custombutton svelte-15yybge"),j(y,"type","button"),j(b,"class","btnbox svelte-15yybge"),j(g,"class","chunkbox svelte-15yybge"),j(e,"class","main svelte-15yybge")},m(I,x){D(I,e,x),T(e,n),T(n,s),T(n,a),T(a,i),T(a,r),T(r,c),T(c,o),T(a,d),T(e,l),T(e,u),T(u,f),T(u,p),T(u,m),T(e,h),T(e,b),T(b,y),T(e,v),T(e,g),$&&$.m(g,null),_||(k=[N(f,"click",t[2]),N(m,"click",t[3]),N(y,"click",t[4])],_=!0)},p(t,[e]){t[0]?$?$.p(t,e):($=An(t),$.c(),$.m(g,null)):$&&($.d(1),$=null)},i:C,o:C,d(t){t&&A(e),$&&$.d(),_=!1,P(k)}}}function qn(t,e,n){let{fshInv:s=0}=e
const i=new DataTable(s)
let c=0,o=0
async function l([t,e,s]){const a=await Tn(t,e,s)
return n(1,o+=1),a}async function u(t){const e=i.rows(Ln,t),s=[[(a=G(e.data())).filter(vn),r,0],[a.filter(gn),r,1],[a.filter(_n),kn,7],[a.filter($n),r,4]].flatMap(In)
var a
n(0,c=s.length),n(1,o=0)
const d=await nt(s.map(l))
e.every(Sn(d.flatMap(Mn))),i.draw()}const f=t=>{d("Inventory","Update Stats",t)}
!async function(t){const e=new DataTable(t)
await Cn(e),e.draw()}(s)
return t.$$set=t=>{"fshInv"in t&&n(6,s=t.fshInv)},[c,o,async function(){f("On page"),u({page:"current"})},function(){f("All"),u()},async function(){f("Clear cache"),await yt(`fsh_${a.subcmd}_cache`,[]),q(w("fshRefresh"))},"This allows you to update the stats of items. It is useful in cases where stats are missing or if you want accurate stats for forged items. It can be slow for large data sets. The results are cached and will be used automatically next time you visit this page. You will need to update again if these stats become stale. For example, if you forged or crafted an item, or if a guild store item has moved.",s]}class Gn extends R{constructor(t){super(),L(this,t,qn,Pn,M,{fshInv:6})}}function Un(t){let e
return{c(){e=S("div")},m(t,n){D(t,e,n)},i:C,o:C,d(t){t&&A(e)}}}function On(t){let e,n
return e=new bn({}),{c(){F(e.$$.fragment)},m(t,s){B(e,t,s),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Fn(t){let e,n,s,i,r,c
const o=[On,Un],d=[]
return n="guildinvmgr"===a.subcmd?0:1,s=d[n]=o[n](t),r=new Gn({props:{fshInv:t[0]}}),{c(){e=S("div"),s.c(),i=E(),F(r.$$.fragment),j(e,"class","container svelte-1tjz5ud")},m(t,s){D(t,e,s),d[n].m(e,null),T(e,i),B(r,e,null),c=!0},p(t,[e]){const n={}
1&e&&(n.fshInv=t[0]),r.$set(n)},i(t){c||(W(s),W(r.$$.fragment,t),c=!0)},o(t){H(s),H(r.$$.fragment,t),c=!1},d(t){t&&A(e),d[n].d(),V(r)}}}function Bn(t,e,n){let{fshInv:s=0}=e
return t.$$set=t=>{"fshInv"in t&&n(0,s=t.fshInv)},[s]}class Wn extends R{constructor(t){super(),L(this,t,Bn,Fn,M,{fshInv:0})}}function Hn(t){!function(t){new Wn({props:{fshInv:t},target:i()})}(t)}const Vn=()=>Ut().player_id?`<b>&nbsp;Inventory Manager</b> ${Ut().items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${Ut().items.length} items (maroon = in BP, blue=guild store)`
function Qn(){const t=Vn()
Q("",i()),function(){if(!Pt())return
qt(n(w("pF"),X({style:{textAlign:"center"}})))}(),Y(i(),Zt.replace("@@reportTitle@@",t))}function Yn(){Tt(Ut().items)&&Qn()}function Xn(){$("#fshMinLvl").val(ie().fshMinLvl),$("#fshMaxLvl").val(ie().fshMaxLvl)}const Jn=([,t])=>[t.id,t]
function Kn(t){st([Kt,ln,un,fn,pn,Yn,we,Xn])
const e=Ie()
cn(e),$("#fshRefresh").on("click",t),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const n=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(n),n.on("click",l(Jt,t,e))}(e),Hn(e)}function zn(t){tt("JS Perf","getInvMan"),Kn(t),et("JS Perf","getInvMan")}const Zn=()=>Object.getOwnPropertyNames(Ut()).length
async function ts(e){const n=[at(),Qt()]
"guildinvmgr"===a.subcmd&&n.push(async function(){await t(!1),a.membrList=z(b(a.membrList).filter(Nt).map(Jn))}()),n.push(async function(){const t=await bt(`fsh_${a.subcmd}`)
ne={...ct(zt),...u(t,{})},se=f("showQuickDropLinks"),ae=f("showQuickSendLinks")}()),await nt(n),Zn()&&function(t){Z(3,zn,[t])}(e)}function es(){!J()&&i()&&("guildinvmgr"!==a.subcmd||c())&&(Q(`<span id="fshInvMan"><img src = "${K}">&nbsp;Getting inventory data...</span>`,i()),ts(es))}export{es as default}
//# sourceMappingURL=inventory-1536d017.js.map
