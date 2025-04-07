import{g as t}from"./getMembrList-CKfpQ-Zy.js"
import{dm as e,i as s,cE as n,am as a,x as i,d as r,f as c,b3 as d,dn as o,dp as l,cn as u,p as f,dq as p,dr as h,s as m,e as b,bx as v,bP as y,ds as g,ao as k,db as _,dt as x,bV as I,H as R,ci as w,by as L,n as S,du as M,$ as E,M as D,b2 as T,b8 as j,aC as N,a6 as A,R as G,X as q,Y as C,Z as P,a3 as O,a4 as U,b7 as B,bE as F,S as W,bk as H,W as V,a0 as Y,V as Q,a7 as z,a8 as X,at as K,au as J,as as Z,dv as tt,br as et,dw as st,dx as nt,dy as at,dz as it,g as rt,dA as ct,ad as dt,K as ot,h as lt,z as ut,u as ft,A as pt,cq as ht,j as mt,bc as bt}from"./calfSystem-BGW9cdWN.js"
import{e as vt}from"./executeAll-DIAWIge1.js"
import{l as yt}from"./loadDataTables-Bs0m668o.js"
import{e as gt,d as kt,a as _t,m as xt}from"./dropItem-B3muwhvV.js"
import{c as $t}from"./createTable-BAtu4Ri8.js"
import{i as It}from"./isSelected-BWnMzKlW.js"
import{c as Rt}from"./changeMinMax-DWgKtd6E.js"
import{c as wt}from"./chromeHandlers-ChwkC07Z.js"
import{a as Lt,e as St,u as Mt}from"./useItem-CDFoA9Jj.js"
import{h as Et}from"./htmlResult-CAxknWPj.js"
import{e as Dt}from"./errorDialog-B4_TjdGG.js"
import{q as Tt,a as jt}from"./queue-CKPXvVEh.js"
import{p as Nt,l as At}from"./lvlTests-Bxc5Zc0a.js"
import"./legacy-vY5CN2wW.js"
import{i as Gt}from"./lifecycle-BqhEEC5Q.js"
import{d as qt}from"./daGsTake-Cq39fTue.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Bxk_-Ol8.js"
import"./InfoBoxFrom-C9V8YYki.js"
import"./backpackOk-CcbevA1S.js"
import"./takeItem-CUUDWIGs.js"
function Ct([t]){return"lastUpdate"!==t}function Pt(){return e({subcmd:"inventory"})}let Ot=""
const Ut=()=>Ot
function Bt(t,e){Ot||(Ot=e.message),Ot&&s(t,n("p",{className:"fshRed",textContent:Ot}))}let Ft={}
const Wt=()=>Ft
async function Ht(t){try{return await t()}catch(t){if(500!==t.jqXhr.status)throw t
Bt(f(),t)}}const Vt=(t,e)=>{return e.map(p).map((s=t,function(t){const e=s?.find((({inv_id:e})=>e===t.inv_id))
return{...t,...e?.stats&&{stats:{...t.stats,armor:e.stats.armor,attack:e.stats.attack,damage:e.stats.damage,defense:e.stats.defense,hp:e.stats.hp,set_name:e.stats.set_name??""}}}}))
var s},Yt=t=>({...t,equipped:!0,folder_id:-2}),Qt=(t,e,s)=>({folders:gt(t),items:Vt(e,s),player_id:d()})
const zt=t=>({...t,player:{id:-1}}),Xt=(t,e)=>({current_player_id:d(),items:Vt(t,e),guild_id:u()})
async function Kt(){if("invmanagernew"===a.subcmd){const t=await async function(){const[t,e]=await i([Ht(Pt),r()]),s=t?.items??[],n=e?.r??{},a=(n.equipment?.map(Yt)??[]).concat(c(n))
return Qt(n,s,a)}()
Ft=t}else if("guildinvmgr"===a.subcmd){const t=await async function(){const[t,e,s]=await i([Ht(h),o(),l()]),n=t?.items??[],a=e?.r??[],r=s?.r??[],c=a.concat(r.map(zt))
return Xt(n,c)}()
Ft=t}}const Jt=t=>{m("Inventory","Header",t)},Zt=t=>{m("Inventory","Datatable",t)}
function te(t,e){Zt("clearSearch"),e.val(""),$(t).DataTable().search("").draw()}function ee(){Wt().folders&&(Wt().folders[-1]="Main")}const se={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},ne='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',ae={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},ie={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
let re={},ce=0,de=0
const oe=()=>re,le=()=>ce,ue=()=>de
function fe(t){return ie[t]?ie[t].abbr:""}function pe(t,e){const s=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(s),e.equipped&&t.classList.add("fshBold")}function he(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function me(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${y(t.player_id,Wt().player_id)}" mode="1" action="recall">GS</span>`}function be(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function ve(t,e,s){return"display"===t?s(e):"GS"}function ye(t,e){const s=function(t){return-1===t.player_id?4:he(t)?7:1}(e),n=(a=Wt().player_id,i=e.player_id,r=Wt().guild_id,a||(-1!==i?i:r))
var a,i,r
let c=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(c=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${_}${t}" class="fshInvItem tip-dynamic ${x[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${s}&p=${n}">${t}</a>${c}`}const ge=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==Wt().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===Wt().current_player_id}(t),(t,e)=>e.c]]
function ke(t,e){const s=ge.find((([e])=>e(t)))
return s?`<span class="fshLink ${s[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function _e(t){return y(t.folder_id,t.player_id)}function xe(t){return a.membrList[t]?a.membrList[t].username:"???"}function $e(t,e){return t[0]-e[0]}function Ie(t,e){return`<option value="${e[0]}"${It(Number(e[0]),t)}>${e[1]}</option>`}const Re=[{title:"Name",data:"item_name",render:function(t,e,s){return"display"!==e?t:ye(t,s)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:_e,render:{_:function(t,e,s){return s.folder_id?function(t){return t.equipped?-2:t.folder_id}(s):-1===s.player_id?"~":xe(s.player_id)},display:function(t,e,s){return s.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${I}${t.player_id}">${xe(t.player_id)}</a>`}(s):s.equipped?"Worn":`<select class="fshMoveItem" data-inv="${s.inv_id}">${n=s.folder_id,a=Wt().folders,R(a).sort($e).map(b(Ie,n)).join("")}</select>`
var n,a},filter:function(t,e,s){return s.player_id?function(t){return-1===t.player_id?"Guild Store":xe(t.player_id)}(s):s.equipped?"Worn":Wt().folders[s.folder_id]}}},{title:"Type",data:"type",render:t=>w[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,s){if(s.type<9)return s.forge}},{title:"Craft",data:"craft",render:{_:t=>ie[t]?ie[t].index:0,display:fe,filter:fe}},{title:"Du%",data:"durability",render:function(t,e,s){if(s.type<9&&s.max_durability>0)return Math.floor(s.durability/s.max_durability*100)}},{title:"BP",data:_e,render:function(t,e,s){if(!s.folder_id&&s.player_id!==Wt().current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,s)}},{title:"GS",data:_e,render:function(t,e,s){return he(s)?ve(e,s,me):function(t){return t.folder_id&&!t.bound}(s)?ve(e,s,be):void 0}},{title:"W/U",data:"type",render:function(t,e,s){const n=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t]
return 1===n?ke(s,{a:"wear",b:"Wear",c:"wearItem"}):2===n?ke(s,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,s){if(!function(t){return-1!==t.guild_tag||t.equipped}(s))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${s.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,s){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(s))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${s.inv_id}">Send</span>`}}]
function we(){return"player_id"in Wt()}function Le(){const t=function(){const t=$t({className:"hover fshXSmall",id:we()?"fshUserInv":"fshGuildInv"})
return s(f(),t),t}(),e=function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:Re,createdRow:pe,data:Wt().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)
return function(t){[[12,"current_player_id"in Wt()],[17,we()&&le()],[18,we()&&ue()]].forEach((([e,s])=>t.column(e).visible(s)))}(e),t}function Se(t){L(`fsh_${a.subcmd}`,t)}function Me(){S('table.fshInvFilter input[type="checkbox"]').forEach((t=>{t.checked=1===oe().checkedElements[t.getAttribute("item")]})),Se(oe())}function Ee(t){Jt("Select All"),oe().checkedElements=ae,Me(),$(t).DataTable().draw(!1)}function De(t,e){oe().fshMinLvl=t,oe().fshMaxLvl=e,Se(oe())}function Te(t){$(t).DataTable().draw(!1)}function je(t){Jt("changeLvls"),Rt(De,b(Te,t))}function Ne(t){return Number(t[0])>=100}function Ae(t,e){return t[e[0]]=e[1],t}function Ge(t){var e
Jt("Select None"),oe().checkedElements=(e=oe().checkedElements,R(e).filter(Ne).reduce(Ae,{})),Me(),$(t).DataTable().draw()}function qe(t){Jt("Checkbox"),oe().checkedElements={},S('table.fshInvFilter input[type="checkbox"][item]:checked').forEach((t=>{oe().checkedElements[t.getAttribute("item")]=1})),Se(oe()),$(t).DataTable().draw(!1)}function Ce(t){Jt("Defaults"),oe().checkedElements=se.checkedElements,Me(),$(t).DataTable().draw(!1)}function Pe(t){Jt("Reset levels"),oe().fshMinLvl=se.fshMinLvl,oe().fshMaxLvl=se.fshMaxLvl,Se(oe()),function(t){$("#fshMinLvl").val(oe().fshMinLvl),$("#fshMaxLvl").val(oe().fshMaxLvl),$(t).DataTable().draw(!1)}(t)}async function Oe(t){const e=await kt(t)
return Lt(e)}function Ue(t){return M({subcmd2:"dostoreitems",items:t})}async function Be(t){const e=await D({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t})
return Et(e)}async function Fe(t){const e=await function(t){return E(Ue,Be,t)}(t)
return Dt(e),Lt(e)}function We(t,e){t.eq(e).empty()}function He(t,e){if(1===e.r)return
const s=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(b(We,t))}($("td",s)),s.css("text-decoration","line-through")}async function Ve(t,e){T(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),function(t){t.empty().append(`<img src="${j}ui/misc/spinner.gif" width="11" height="11">`)}(e)
const s=await t()
s&&He(e,s)}function Ye(t,e){Zt("setName"),$(t).DataTable().search(e.attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Qe(t){Zt("takeItem"),Ve(b(jt,t.attr("invid"),t.attr("action")),t)}function ze(t){Zt("recallItem"),Ve(b(Tt,t.attr("invid"),t.attr("playerid"),t.attr("mode"),t.attr("action")),t)}function Xe(t,e,s,n){Zt(s),Ve(b(t,e),n)}function Ke(t){Xe(Fe,[t.attr("invid")],"doStoreItem",t)}function Je(t,e,s){Xe(t,s.attr("invid"),e,s)}const Ze=t=>Je(Mt,"doUseItem",t),ts=t=>Je(St,"doWearItem",t)
function es(t,e,s){Xe(t,[s.data("inv")],e,s)}const ss=t=>es(_t,"doDropItem",t),ns=t=>es(Oe,"doSendItem",t),as=t=>e=>t($(e.target))
function is(t,[e,s]){$(t).on("click",`span.${e}`,as(s))}function rs(t){Zt("doMoveItem")
const e=$(t.target)
xt([e.data("inv")],e.val())}function cs(t,e){$(e[0]).on("click",b(e[1],t))}const ds=t=>()=>{Zt(t)}
function os(t){!function(t){[["#fshReset",Pe],["#fshAll",Ee],["#fshNone",Ge],["#fshDefault",Ce]].forEach(b(cs,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',b(qe,t)),function(t){[["dropItem",ss],["recallItem",ze],["sendItem",ns],["setName",b(Ye,t)],["storeItem",Ke],["takeItem",Qe],["useItem",Ze],["wearItem",ts]].forEach(b(is,t))}(t),function(t){["fshInvItem","fshMaroon","sorting"].forEach((e=>{$(t).on("click",`.${e}`,ds(e))}))}(t)}let ls=0
function us(t,e){return At(ls,N(e[1]),oe().fshMinLvl,oe().fshMaxLvl)}function fs(){ls=[(t,e,s)=>0===s,...Nt],$.fn.dataTable.ext.search.push(us)}function ps(){$.fn.dataTable.ext.search.push(((t,e,s,n)=>!oe().checkedElements||oe().checkedElements[n.type]))}function hs(){$.fn.dataTable.ext.search.push(((t,e,s,n)=>!oe().checkedElements?.[-1]||function(t){return oe().checkedElements[-1]&&t.stats&&""!==t.stats.set_name}(n)))}function ms(){$.fn.dataTable.ext.search.push(((t,e,s,n)=>{const a=(parseInt(n.rarity,10)+100).toString()
return!oe().checkedElements||oe().checkedElements[a]}))}function bs(t,e,s,n){e("toBp"),[...S(s),...S(n)].forEach(B)}function vs(t,e,s){e("toGs"),S(s).forEach(B)}var ys=q('<div class="main svelte-1mlms3r"><div class="head svelte-1mlms3r">Recall all visible to</div> <div class="btnbox svelte-1mlms3r"><button class="custombutton svelte-1mlms3r" type="button">BP</button> <button class="custombutton svelte-1mlms3r" type="button">GS</button></div></div>')
function gs(t,e){Q(e)||V(e,1)}A(["click"])
var ks=q('<span class="fshGreen">Recalled</span>'),_s=q('<span class="fshSpinner"></span>'),xs=q('<button class="custombutton svelte-fvareh" type="button">BP</button>'),$s=q('<div class="main svelte-fvareh"><div class="head svelte-fvareh">Recall repairable to</div> <div class="btnbox svelte-fvareh"><!></div> <div class="btnbox svelte-fvareh"> </div></div>')
async function Is(t,e,s){e("On page"),s({page:"current"})}function Rs(t,e,s){e("All"),s()}async function ws(t,e){e("Clear cache"),await L(`fsh_${a.subcmd}_cache`,[]),B(rt("fshRefresh"))}A(["click"])
var Ls=q("<div>Chunks needed: <span> </span></div> <div>Chunks received: <span> </span></div>",1),Ss=q('<div class="main svelte-15yybge"><div class="head svelte-15yybge">Update Stats <div class="wrapper svelte-15yybge">[ <div class="tooltip svelte-15yybge"><span class="tooltip-multiline">?</span></div> ]</div></div> <div class="btnbox svelte-15yybge"><button class="custombutton svelte-15yybge" type="button">On page</button> <button class="custombutton svelte-15yybge" type="button">All</button></div> <div class="btnbox svelte-15yybge"><button class="custombutton svelte-15yybge" type="button">Clear cache</button></div> <div class="chunkbox svelte-15yybge"><!></div></div>')
A(["click"])
var Ms=q("<!> <!>",1),Es=q("<div></div>"),Ds=q('<div class="container svelte-1tjz5ud"><!> <!></div>')
function Ts(t,e){G(e,!0)
let s=F(e,"fshInv",3,0)
var n=Ds(),r=P(n),c=t=>{var e=Ms(),n=J(e)
!function(t,e){G(e,!1)
const s=t=>{m("Inventory","Recall All",t)}
Gt()
var n=ys(),a=C(P(n),2),i=P(a)
i.__click=[bs,s,'span[action="take"]','span[mode="0"][action="recall"]'],C(i,2).__click=[vs,s,'span[mode="1"][action="recall"]'],O(t,n),U()}(n,{}),function(t,e){G(e,!0)
let s=F(e,"fshInv",3,0),n=W(1),a=W(0)
const i=new DataTable(s()).rows(((t,{durability:e,max_durability:s,player_id:n,rarity:a,type:i})=>e<s&&-1===n&&5!==a&&i<9)),r=H(i.data())
function c(){return qt(r.map((({inv_id:t})=>t)))}r.length&&V(n,0)
var d=$s(),o=C(P(d),2),l=P(o),u=t=>{var e=K(),s=J(e)
Z(s,c,(t=>{var e=_s()
O(t,e)}),(t=>{var e=ks()
O(t,e)})),O(t,e)},f=t=>{var e=xs()
e.__click=[gs,a],z((()=>e.disabled=Q(n))),O(t,e)}
Y(l,(t=>{Q(a)?t(u):t(f,!1)}))
var p=C(o,2),h=P(p)
z((()=>X(h,`${r.length??""} items to repair`))),O(t,d),U()}(C(n,2),{get fshInv(){return s()}}),O(t,e)},d=t=>{var e=Es()
O(t,e)}
Y(r,(t=>{"guildinvmgr"===a.subcmd?t(c):t(d,!1)})),function(t,e){G(e,!0)
let s=F(e,"fshInv",3,0)
const n=new DataTable(s())
let a=W(0),r=W(0)
async function c([t,e,s]){const n=await ct(t,e,s)
return V(r,Q(r)+1),n}async function d(t){const e=n.rows(st,t),s=nt(H(e.data()))
V(a,s.length,!0),V(r,0)
const d=await i(s.map(c))
e.every(at(d.flatMap(it))),n.draw()}const o=t=>{m("Inventory","Update Stats",t)}
tt(s())
var l=Ss(),u=P(l),f=C(P(u)),p=C(P(f)),h=P(p)
et(h,"data-tooltip","This allows you to update the stats of items. It is useful in cases where stats are missing or if you want accurate stats for forged items. It can be slow for large data sets. The results are cached and will be used automatically next time you visit this page. You will need to update again if these stats become stale. For example, if you forged or crafted an item, or if a guild store item has moved.")
var b=C(u,2),v=P(b)
v.__click=[Is,o,d],C(v,2).__click=[Rs,o,d]
var y=C(b,2)
P(y).__click=[ws,o]
var g=C(y,2),k=P(g),_=t=>{var e=Ls(),s=J(e),n=C(P(s)),i=P(n),c=C(s,2),d=C(P(c)),o=P(d)
z((()=>{X(i,Q(a)||""),X(o,Q(r)||"")})),O(t,e)}
Y(k,(t=>{Q(a)&&t(_)})),O(t,l),U()}(C(r,2),{get fshInv(){return s()}}),O(t,n),U()}const js=()=>Wt().player_id?`<b>&nbsp;Inventory Manager</b> ${Wt().items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${Wt().items.length} items (maroon = in BP, blue=guild store)`
function Ns(){const t=js()
lt("",f()),function(){if(!Ut())return
Bt(s(rt("pF"),ft({style:{textAlign:"center"}})))}(),ut(f(),ne.replace("@@reportTitle@@",t))}function As(){ot(Wt().items)&&Ns()}function Gs(){$("#fshMinLvl").val(oe().fshMinLvl),$("#fshMaxLvl").val(oe().fshMaxLvl)}const qs=([,t])=>[t.id,t]
function Cs(t){vt([ee,fs,ps,hs,ms,As,Me,Gs])
const e=Le()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",b(je,t)),$(t).on("change","select.fshMoveItem",rs),os(t),wt(t,ds,Zt)}(e),$("#fshRefresh").on("click",t),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const s=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(s),s.on("click",b(te,t,e))}(e),function(t){dt(Ts,{props:{fshInv:t},target:f()})}(e)}function Ps(t){Cs(t)}const Os=()=>Object.getOwnPropertyNames(Wt()).length
async function Us(e){const s=[yt(),Kt()]
"guildinvmgr"===a.subcmd&&s.push(async function(){await t(!1),a.membrList&&(a.membrList=mt(R(a.membrList).filter(Ct).map(qs)))}()),s.push(async function(){const t=await v(`fsh_${a.subcmd}`)
re={...g(se),...y(t,{})},ce=k("showQuickDropLinks"),de=k("showQuickSendLinks")}()),await i(s),Os()&&function(t){bt(3,Ps,[t])}(e)}function Bs(){!pt()&&f()&&("guildinvmgr"!==a.subcmd||u())&&(lt(`<span id="fshInvMan"><img src = "${ht}">&nbsp;Getting inventory data...</span>`,f()),Us(Bs))}export{Bs as default}
//# sourceMappingURL=inventory-BN-8jNWG.js.map
