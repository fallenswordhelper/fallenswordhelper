import{g as t}from"./getMembrList-DJNIR1Ub.js"
import{dv as e,i as s,v as n,az as a,a1 as i,d as r,f as c,bf as d,dw as o,dx as l,cx as u,p as f,dy as p,dz as h,s as m,c as b,bI as v,bZ as y,dA as g,aB as k,dj as _,dB as x,c3 as I,ab as R,cs as w,bJ as L,k as M,dC as S,$ as E,ag as D,be as T,bk as N,aO as j,aq as A,z as G,C as q,D as C,F as O,N as P,O as F,bj as U,A as B,bw as H,J as W,al as V,H as Q,K as Y,Q as z,R as J,aG as K,E as X,aF as Z,dD as tt,T as et,dE as st,dF as nt,dG as at,dH as it,g as rt,dI as ct,u as dt,ae as ot,e as lt,a3 as ut,w as ft,a4 as pt,cy as ht,h as mt,bo as bt}from"./calfSystem-C1X5YxJZ.js"
import{e as vt}from"./executeAll-DIAWIge1.js"
import{l as yt}from"./loadDataTables-vs2_7T4b.js"
import{e as gt,d as kt,a as _t,m as xt}from"./dropItem-C6AxxS-X.js"
import{c as $t}from"./createTable-DbW82SsR.js"
import{i as It}from"./isSelected-BWnMzKlW.js"
import{c as Rt}from"./changeMinMax-Dbzryaut.js"
import{c as wt}from"./chromeHandlers-BrtL-oSq.js"
import{a as Lt,e as Mt,u as St}from"./useItem-D6H9bhUw.js"
import{h as Et}from"./htmlResult-Btqom80J.js"
import{e as Dt}from"./errorDialog-B4_TjdGG.js"
import{q as Tt,a as Nt}from"./queue-bSYHTvOl.js"
import{p as jt,l as At}from"./lvlTests-DSEjTSpw.js"
import"./legacy-CERE4DQ7.js"
import{i as Gt}from"./lifecycle-U3zIf5cY.js"
import{d as qt}from"./daGsTake-78DHHyAV.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-CnCwTLoU.js"
import"./InfoBoxFrom-CALdsMkd.js"
import"./backpackOk-BjyGHPKD.js"
import"./takeItem-Bx0kcXjg.js"
function Ct([t]){return"lastUpdate"!==t}function Ot(){return e({subcmd:"inventory"})}let Pt=""
const Ft=()=>Pt
function Ut(t,e){Pt||(Pt=e.message),Pt&&s(t,n("p",{className:"fshRed",textContent:Pt}))}let Bt={}
const Ht=()=>Bt
async function Wt(t){try{return await t()}catch(t){if(500!==t.jqXhr.status)throw t
Ut(f(),t)}}const Vt=(t,e)=>{return e.map(p).map((s=t,function(t){const e=s?.find((({inv_id:e})=>e===t.inv_id))
return{...t,...e?.stats&&{stats:{...t.stats,armor:e.stats.armor,attack:e.stats.attack,damage:e.stats.damage,defense:e.stats.defense,hp:e.stats.hp,set_name:e.stats.set_name??""}}}}))
var s},Qt=t=>({...t,equipped:!0,folder_id:-2}),Yt=(t,e,s)=>({folders:gt(t),items:Vt(e,s),player_id:d()})
const zt=t=>({...t,player:{id:-1}}),Jt=(t,e)=>({current_player_id:d(),items:Vt(t,e),guild_id:u()})
async function Kt(){if("invmanagernew"===a.subcmd){const t=await async function(){const[t,e]=await i([Wt(Ot),r()]),s=t?.items??[],n=e?.r??{},a=(n.equipment?.map(Qt)??[]).concat(c(n))
return Yt(n,s,a)}()
Bt=t}else if("guildinvmgr"===a.subcmd){const t=await async function(){const[t,e,s]=await i([Wt(h),o(),l()]),n=t?.items??[],a=e?.r??[],r=s?.r??[],c=a.concat(r.map(zt))
return Jt(n,c)}()
Bt=t}}const Xt=t=>{m("Inventory","Header",t)},Zt=t=>{m("Inventory","Datatable",t)}
function te(t,e){Zt("clearSearch"),e.val(""),$(t).DataTable().search("").draw()}function ee(){Ht().folders&&(Ht().folders[-1]="Main")}const se={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},ne='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',ae={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},ie={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
let re={},ce=0,de=0
const oe=()=>re,le=()=>ce,ue=()=>de
function fe(t){return ie[t]?ie[t].abbr:""}function pe(t,e){const s=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(s),e.equipped&&t.classList.add("fshBold")}function he(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function me(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${y(t.player_id,Ht().player_id)}" mode="1" action="recall">GS</span>`}function be(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function ve(t,e,s){return"display"===t?s(e):"GS"}function ye(t,e){const s=function(t){return-1===t.player_id?4:he(t)?7:1}(e),n=(a=Ht().player_id,i=e.player_id,r=Ht().guild_id,a||(-1!==i?i:r))
var a,i,r
let c=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(c=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${_}${t}" class="fshInvItem tip-dynamic ${x[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${s}&p=${n}">${t}</a>${c}`}const ge=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==Ht().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===Ht().current_player_id}(t),(t,e)=>e.c]]
function ke(t,e){const s=ge.find((([e])=>e(t)))
return s?`<span class="fshLink ${s[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function _e(t){return y(t.folder_id,t.player_id)}function xe(t){return a.membrList[t]?a.membrList[t].username:"???"}function $e(t,e){return t[0]-e[0]}function Ie(t,e){return`<option value="${e[0]}"${It(Number(e[0]),t)}>${e[1]}</option>`}const Re=[{title:"Name",data:"item_name",render:function(t,e,s){return"display"!==e?t:ye(t,s)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:_e,render:{_:function(t,e,s){return s.folder_id?function(t){return t.equipped?-2:t.folder_id}(s):-1===s.player_id?"~":xe(s.player_id)},display:function(t,e,s){return s.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${I}${t.player_id}">${xe(t.player_id)}</a>`}(s):s.equipped?"Worn":`<select class="fshMoveItem" data-inv="${s.inv_id}">${n=s.folder_id,a=Ht().folders,R(a).sort($e).map(b(Ie,n)).join("")}</select>`
var n,a},filter:function(t,e,s){return s.player_id?function(t){return-1===t.player_id?"Guild Store":xe(t.player_id)}(s):s.equipped?"Worn":Ht().folders[s.folder_id]}}},{title:"Type",data:"type",render:t=>w[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,s){if(s.type<9)return s.forge}},{title:"Craft",data:"craft",render:{_:t=>ie[t]?ie[t].index:0,display:fe,filter:fe}},{title:"Du%",data:"durability",render:function(t,e,s){if(s.type<9&&s.max_durability>0)return Math.floor(s.durability/s.max_durability*100)}},{title:"BP",data:_e,render:function(t,e,s){if(!s.folder_id&&s.player_id!==Ht().current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,s)}},{title:"GS",data:_e,render:function(t,e,s){return he(s)?ve(e,s,me):function(t){return t.folder_id&&!t.bound}(s)?ve(e,s,be):void 0}},{title:"W/U",data:"type",render:function(t,e,s){const n=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t]
return 1===n?ke(s,{a:"wear",b:"Wear",c:"wearItem"}):2===n?ke(s,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,s){if(!function(t){return-1!==t.guild_tag||t.equipped}(s))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${s.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,s){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(s))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${s.inv_id}">Send</span>`}}]
function we(){return"player_id"in Ht()}function Le(){const t=function(){const t=$t({className:"hover fshXSmall",id:we()?"fshUserInv":"fshGuildInv"})
return s(f(),t),t}(),e=function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:Re,createdRow:pe,data:Ht().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)
return function(t){[[12,"current_player_id"in Ht()],[17,we()&&le()],[18,we()&&ue()]].forEach((([e,s])=>t.column(e).visible(s)))}(e),t}function Me(t){L(`fsh_${a.subcmd}`,t)}function Se(){M('table.fshInvFilter input[type="checkbox"]').forEach((t=>{t.checked=1===oe().checkedElements[t.getAttribute("item")]})),Me(oe())}function Ee(t){Xt("Select All"),oe().checkedElements=ae,Se(),$(t).DataTable().draw(!1)}function De(t,e){oe().fshMinLvl=t,oe().fshMaxLvl=e,Me(oe())}function Te(t){$(t).DataTable().draw(!1)}function Ne(t){Xt("changeLvls"),Rt(De,b(Te,t))}function je(t){return Number(t[0])>=100}function Ae(t,e){return t[e[0]]=e[1],t}function Ge(t){var e
Xt("Select None"),oe().checkedElements=(e=oe().checkedElements,R(e).filter(je).reduce(Ae,{})),Se(),$(t).DataTable().draw()}function qe(t){Xt("Checkbox"),oe().checkedElements={},M('table.fshInvFilter input[type="checkbox"][item]:checked').forEach((t=>{oe().checkedElements[t.getAttribute("item")]=1})),Me(oe()),$(t).DataTable().draw(!1)}function Ce(t){Xt("Defaults"),oe().checkedElements=se.checkedElements,Se(),$(t).DataTable().draw(!1)}function Oe(t){Xt("Reset levels"),oe().fshMinLvl=se.fshMinLvl,oe().fshMaxLvl=se.fshMaxLvl,Me(oe()),function(t){$("#fshMinLvl").val(oe().fshMinLvl),$("#fshMaxLvl").val(oe().fshMaxLvl),$(t).DataTable().draw(!1)}(t)}async function Pe(t){const e=await kt(t)
return Lt(e)}function Fe(t){return S({subcmd2:"dostoreitems",items:t})}async function Ue(t){const e=await D({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t})
return Et(e)}async function Be(t){const e=await function(t){return E(Fe,Ue,t)}(t)
return Dt(e),Lt(e)}function He(t,e){t.eq(e).empty()}function We(t,e){if(1===e.r)return
const s=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(b(He,t))}($("td",s)),s.css("text-decoration","line-through")}async function Ve(t,e){T(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),function(t){t.empty().append(`<img src="${N}ui/misc/spinner.gif" width="11" height="11">`)}(e)
const s=await t()
s&&We(e,s)}function Qe(t,e){Zt("setName"),$(t).DataTable().search(e.attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Ye(t){Zt("takeItem"),Ve(b(Nt,t.attr("invid"),t.attr("action")),t)}function ze(t){Zt("recallItem"),Ve(b(Tt,t.attr("invid"),t.attr("playerid"),t.attr("mode"),t.attr("action")),t)}function Je(t,e,s,n){Zt(s),Ve(b(t,e),n)}function Ke(t){Je(Be,[t.attr("invid")],"doStoreItem",t)}function Xe(t,e,s){Je(t,s.attr("invid"),e,s)}const Ze=t=>Xe(St,"doUseItem",t),ts=t=>Xe(Mt,"doWearItem",t)
function es(t,e,s){Je(t,[s.data("inv")],e,s)}const ss=t=>es(_t,"doDropItem",t),ns=t=>es(Pe,"doSendItem",t),as=t=>e=>t($(e.target))
function is(t,[e,s]){$(t).on("click",`span.${e}`,as(s))}function rs(t){Zt("doMoveItem")
const e=$(t.target)
xt([e.data("inv")],e.val())}function cs(t,e){$(e[0]).on("click",b(e[1],t))}const ds=t=>()=>{Zt(t)}
function os(t){!function(t){[["#fshReset",Oe],["#fshAll",Ee],["#fshNone",Ge],["#fshDefault",Ce]].forEach(b(cs,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',b(qe,t)),function(t){[["dropItem",ss],["recallItem",ze],["sendItem",ns],["setName",b(Qe,t)],["storeItem",Ke],["takeItem",Ye],["useItem",Ze],["wearItem",ts]].forEach(b(is,t))}(t),function(t){["fshInvItem","fshMaroon","sorting"].forEach((e=>{$(t).on("click",`.${e}`,ds(e))}))}(t)}let ls=0
function us(t,e){return At(ls,j(e[1]),oe().fshMinLvl,oe().fshMaxLvl)}function fs(){ls=[(t,e,s)=>0===s,...jt],$.fn.dataTable.ext.search.push(us)}function ps(){$.fn.dataTable.ext.search.push(((t,e,s,n)=>!oe().checkedElements||oe().checkedElements[n.type]))}function hs(){$.fn.dataTable.ext.search.push(((t,e,s,n)=>!oe().checkedElements?.[-1]||function(t){return oe().checkedElements[-1]&&t.stats&&""!==t.stats.set_name}(n)))}function ms(){$.fn.dataTable.ext.search.push(((t,e,s,n)=>{const a=(parseInt(n.rarity,10)+100).toString()
return!oe().checkedElements||oe().checkedElements[a]}))}function bs(t,e,s,n){e("toBp"),[...M(s),...M(n)].forEach(U)}function vs(t,e,s){e("toGs"),M(s).forEach(U)}var ys=q('<div class="main svelte-1mlms3r"><div class="head svelte-1mlms3r">Recall all visible to</div> <div class="btnbox svelte-1mlms3r"><button class="custombutton svelte-1mlms3r" type="button">BP</button> <button class="custombutton svelte-1mlms3r" type="button">GS</button></div></div>')
function gs(t,e){Y(e)||W(e,1)}A(["click"])
var ks=q('<span class="fshGreen">Recalled</span>'),_s=q('<span class="fshSpinner"></span>'),xs=q('<button class="custombutton svelte-fvareh" type="button">BP</button>'),$s=q('<div class="main svelte-fvareh"><div class="head svelte-fvareh">Recall repairable to</div> <div class="btnbox svelte-fvareh"><!></div> <div class="btnbox svelte-fvareh"> </div></div>')
async function Is(t,e,s){e("On page"),s({page:"current"})}function Rs(t,e,s){e("All"),s()}async function ws(t,e){e("Clear cache"),await L(`fsh_${a.subcmd}_cache`,[]),U(rt("fshRefresh"))}A(["click"])
var Ls=q("<div>Chunks needed: <span> </span></div> <div>Chunks received: <span> </span></div>",1),Ms=q('<div class="main svelte-15yybge"><div class="head svelte-15yybge">Update Stats <div class="wrapper svelte-15yybge">[ <div class="tooltip svelte-15yybge"><span class="tooltip-multiline">?</span></div> ]</div></div> <div class="btnbox svelte-15yybge"><button class="custombutton svelte-15yybge" type="button">On page</button> <button class="custombutton svelte-15yybge" type="button">All</button></div> <div class="btnbox svelte-15yybge"><button class="custombutton svelte-15yybge" type="button">Clear cache</button></div> <div class="chunkbox svelte-15yybge"><!></div></div>')
A(["click"])
var Ss=q("<!> <!>",1),Es=q("<div></div>"),Ds=q('<div class="container svelte-1tjz5ud"><!> <!></div>')
function Ts(t,e){G(e,!0)
let s=B(e,"fshInv",3,0)
var n=Ds(),r=O(n),c=t=>{var e=Ss(),n=X(e)
!function(t,e){G(e,!1)
const s=t=>{m("Inventory","Recall All",t)}
Gt()
var n=ys(),a=C(O(n),2),i=O(a)
i.__click=[bs,s,'span[action="take"]','span[mode="0"][action="recall"]'],C(i,2).__click=[vs,s,'span[mode="1"][action="recall"]'],P(t,n),F()}(n,{}),function(t,e){G(e,!0)
let s=B(e,"fshInv",3,0),n=V(1),a=V(0)
const i=new DataTable(s()).rows(((t,{durability:e,max_durability:s,player_id:n,rarity:a,type:i})=>e<s&&-1===n&&5!==a&&i<9)),r=H(i.data())
function c(){return qt(r.map((({inv_id:t})=>t)))}r.length&&W(n,0)
var d=$s(),o=C(O(d),2),l=O(o),u=t=>{var e=K(),s=X(e)
Z(s,c,(t=>{var e=_s()
P(t,e)}),(t=>{var e=ks()
P(t,e)})),P(t,e)},f=t=>{var e=xs()
e.__click=[gs,a],z((()=>e.disabled=Y(n))),P(t,e)}
Q(l,(t=>{Y(a)?t(u):t(f,!1)}))
var p=C(o,2),h=O(p)
z((()=>J(h,`${r.length??""} items to repair`))),P(t,d),F()}(C(n,2),{get fshInv(){return s()}}),P(t,e)},d=t=>{var e=Es()
P(t,e)}
Q(r,(t=>{"guildinvmgr"===a.subcmd?t(c):t(d,!1)})),function(t,e){G(e,!0)
let s=B(e,"fshInv",3,0)
const n=new DataTable(s())
let a=V(0),r=V(0)
async function c([t,e,s]){const n=await ct(t,e,s)
return W(r,Y(r)+1),n}async function d(t){const e=n.rows(st,t),s=nt(H(e.data()))
W(a,s.length,!0),W(r,0)
const d=await i(s.map(c))
e.every(at(d.flatMap(it))),n.draw()}const o=t=>{m("Inventory","Update Stats",t)}
tt(s())
var l=Ms(),u=O(l),f=C(O(u)),p=C(O(f)),h=O(p)
et(h,"data-tooltip","This allows you to update the stats of items. It is useful in cases where stats are missing or if you want accurate stats for forged items. It can be slow for large data sets. The results are cached and will be used automatically next time you visit this page. You will need to update again if these stats become stale. For example, if you forged or crafted an item, or if a guild store item has moved.")
var b=C(u,2),v=O(b)
v.__click=[Is,o,d],C(v,2).__click=[Rs,o,d]
var y=C(b,2)
O(y).__click=[ws,o]
var g=C(y,2),k=O(g),_=t=>{var e=Ls(),s=X(e),n=C(O(s)),i=O(n),c=C(s,2),d=C(O(c)),o=O(d)
z((()=>{J(i,Y(a)||""),J(o,Y(r)||"")})),P(t,e)}
Q(k,(t=>{Y(a)&&t(_)})),P(t,l),F()}(C(r,2),{get fshInv(){return s()}}),P(t,n),F()}const Ns=()=>Ht().player_id?`<b>&nbsp;Inventory Manager</b> ${Ht().items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${Ht().items.length} items (maroon = in BP, blue=guild store)`
function js(){const t=Ns()
lt("",f()),function(){if(!Ft())return
Ut(s(rt("pF"),ft({style:{textAlign:"center"}})))}(),ut(f(),ne.replace("@@reportTitle@@",t))}function As(){ot(Ht().items)&&js()}function Gs(){$("#fshMinLvl").val(oe().fshMinLvl),$("#fshMaxLvl").val(oe().fshMaxLvl)}const qs=([,t])=>[t.id,t]
function Cs(t){vt([ee,fs,ps,hs,ms,As,Se,Gs])
const e=Le()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",b(Ne,t)),$(t).on("change","select.fshMoveItem",rs),os(t),wt(t,ds,Zt)}(e),$("#fshRefresh").on("click",t),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const s=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(s),s.on("click",b(te,t,e))}(e),function(t){dt(Ts,{props:{fshInv:t},target:f()})}(e)}function Os(t){Cs(t)}const Ps=()=>Object.getOwnPropertyNames(Ht()).length
async function Fs(e){const s=[yt(),Kt()]
"guildinvmgr"===a.subcmd&&s.push(async function(){await t(!1),a.membrList&&(a.membrList=mt(R(a.membrList).filter(Ct).map(qs)))}()),s.push(async function(){const t=await v(`fsh_${a.subcmd}`)
re={...g(se),...y(t,{})},ce=k("showQuickDropLinks"),de=k("showQuickSendLinks")}()),await i(s),Ps()&&function(t){bt(3,Os,[t])}(e)}function Us(){!pt()&&f()&&("guildinvmgr"!==a.subcmd||u())&&(lt(`<span id="fshInvMan"><img src = "${ht}">&nbsp;Getting inventory data...</span>`,f()),Fs(Us))}export{Us as default}
//# sourceMappingURL=inventory-DT9Hgq02.js.map
