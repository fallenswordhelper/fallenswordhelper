import{g as t}from"./getMembrList-Ctbnv9ny.js"
import{f as e,ac as n,i as s,t as a,ax as i,_ as r,bd as c,dq as d,dr as o,cr as l,p as u,d9 as f,ds as p,s as h,c as m,bG as b,bX as v,dt as y,az as g,de as _,du as k,c1 as x,a9 as I,dv as R,bH as w,h as L,dw as M,$ as S,ae as E,bc as D,bi as T,aM as j,ao as N,x as A,A as G,B as q,D as C,K as P,L as O,bh as U,y as B,bu as F,H,aj as W,F as V,I as Y,O as Q,P as z,aE as K,C as X,aD as J,dx as Z,R as tt,dy as et,dz as nt,dA as st,dB as at,g as it,dC as rt,n as ct,d as dt,a1 as ot,u as lt,a2 as ut,cs as ft,bm as pt}from"./calfSystem-CT1aM4VG.js"
import{e as ht}from"./executeAll-DIAWIge1.js"
import{l as mt}from"./loadDataTables-Ijv1_QQZ.js"
import{d as bt,f as vt}from"./flattenItems-D5sXdp8R.js"
import{c as yt}from"./createTable-BT3sfAe8.js"
import{i as gt}from"./isSelected-BWnMzKlW.js"
import{d as _t,a as kt,m as xt}from"./dropItem-n_LbOoQu.js"
import{c as It}from"./changeMinMax-UAomEUD8.js"
import{c as $t}from"./chromeHandlers-Du0TH54Q.js"
import{a as Rt,e as wt,u as Lt}from"./useItem-CEP4zgNs.js"
import{h as Mt}from"./htmlResult-DHLyE8PQ.js"
import{e as St}from"./errorDialog-B4_TjdGG.js"
import{q as Et,a as Dt}from"./queue-Dq9H5mde.js"
import{p as Tt,l as jt}from"./lvlTests-DQGH0k0Y.js"
import"./legacy-BQk1-_ZQ.js"
import{i as Nt}from"./lifecycle-Dl_sxbSE.js"
import{d as At}from"./daGsTake-Dpddsv6F.js"
import"./dialog-CiSCF2So.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-pa-aKwib.js"
import"./InfoBoxFrom-Cozeh7z2.js"
import"./backpackOk-C0Z16PYr.js"
import"./takeItem-CQgeRFJP.js"
function Gt([t]){return"lastUpdate"!==t}const qt=({id:t,name:e})=>[t,e]
let Ct=""
const Pt=()=>Ct
function Ot(t,e){Ct||(Ct=e.message),Ct&&s(t,a("p",{className:"fshRed",textContent:Ct}))}let Ut={}
const Bt=()=>Ut
async function Ft(t){try{return await t()}catch(t){if(500!==t.jqXhr.status)throw t
Ot(u(),t)}}const Ht=t=>e=>{const n=t.find((t=>t.a===e.inv_id))
return{...e,...n?.n&&{item_name:n.n}}},Wt=t=>({...t,equipped:!0,folder_id:-2}),Vt=(t,s,a)=>{return{folders:(i=t,n(i?.inventories)?e(i.inventories.filter((({id:t})=>-1!==t)).map(qt)):[]),items:s.map(Ht(a)),player_id:c()}
var i}
const Yt=t=>({...t,player:{id:-1}}),Qt=(t,e)=>({current_player_id:c(),items:t.map(Ht(e)),guild_id:l()})
async function zt(){if("invmanagernew"===i.subcmd){const t=await async function(){const[t,e]=await r([Ft(f),bt()]),n=t?.items??[],s=e?.r??{},a=(s.equipment?.map(Wt)??[]).concat(vt(s))
return Vt(s,n,a)}()
Ut=t}else if("guildinvmgr"===i.subcmd){const t=await async function(){const[t,e,n]=await r([Ft(p),d(),o()]),s=t?.items??[],a=e?.r??[],i=n?.r??[],c=a.concat(i.map(Yt))
return Qt(s,c)}()
Ut=t}}const Kt=t=>{h("Inventory","Header",t)},Xt=t=>{h("Inventory","Datatable",t)}
function Jt(t,e){Xt("clearSearch"),e.val(""),$(t).DataTable().search("").draw()}function Zt(){Bt().folders&&(Bt().folders[-1]="Main")}const te={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},ee='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',ne={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},se={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
let ae={},ie=0,re=0
const ce=()=>ae,de=()=>ie,oe=()=>re
function le(t){return se[t]?se[t].abbr:""}function ue(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n),e.equipped&&t.classList.add("fshBold")}function fe(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function pe(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${v(t.player_id,Bt().player_id)}" mode="1" action="recall">GS</span>`}function he(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function me(t,e,n){return"display"===t?n(e):"GS"}function be(t,e){const n=function(t){return-1===t.player_id?4:fe(t)?7:1}(e),s=(a=Bt().player_id,i=e.player_id,r=Bt().guild_id,a||(-1!==i?i:r))
var a,i,r
let c=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(c=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${_}${t}" class="fshInvItem tip-dynamic ${k[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${s}">${t}</a>${c}`}const ve=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==Bt().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===Bt().current_player_id}(t),(t,e)=>e.c]]
function ye(t,e){const n=ve.find((([e])=>e(t)))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function ge(t){return v(t.folder_id,t.player_id)}function _e(t){return i.membrList[t]?i.membrList[t].username:"???"}function ke(t,e){return t[0]-e[0]}function xe(t,e){return`<option value="${e[0]}"${gt(Number(e[0]),t)}>${e[1]}</option>`}const Ie=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:be(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:ge,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":_e(n.player_id)},display:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${x}${t.player_id}">${_e(t.player_id)}</a>`}(n):n.equipped?"Worn":`<select class="fshMoveItem" data-inv="${n.inv_id}">${s=n.folder_id,a=Bt().folders,I(a).sort(ke).map(m(xe,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":_e(t.player_id)}(n):n.equipped?"Worn":Bt().folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>R[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>se[t]?se[t].index:0,display:le,filter:le}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.floor(n.durability/n.max_durability*100)}},{title:"BP",data:ge,render:function(t,e,n){if(!n.folder_id&&n.player_id!==Bt().current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:ge,render:function(t,e,n){return fe(n)?me(e,n,pe):function(t){return t.folder_id&&!t.bound}(n)?me(e,n,he):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const s=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t]
return 1===s?ye(n,{a:"wear",b:"Wear",c:"wearItem"}):2===s?ye(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function $e(){return"player_id"in Bt()}function Re(){const t=function(){const t=yt({className:"hover fshXSmall",id:$e()?"fshUserInv":"fshGuildInv"})
return s(u(),t),t}(),e=function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:Ie,createdRow:ue,data:Bt().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)
return function(t){[[12,"current_player_id"in Bt()],[17,$e()&&de()],[18,$e()&&oe()]].forEach((([e,n])=>t.column(e).visible(n)))}(e),t}function we(t){w(`fsh_${i.subcmd}`,t)}function Le(){L('table.fshInvFilter input[type="checkbox"]').forEach((t=>{t.checked=1===ce().checkedElements[t.getAttribute("item")]})),we(ce())}function Me(t){Kt("Select All"),ce().checkedElements=ne,Le(),$(t).DataTable().draw(!1)}function Se(t,e){ce().fshMinLvl=t,ce().fshMaxLvl=e,we(ce())}function Ee(t){$(t).DataTable().draw(!1)}function De(t){Kt("changeLvls"),It(Se,m(Ee,t))}function Te(t){return Number(t[0])>=100}function je(t,e){return t[e[0]]=e[1],t}function Ne(t){var e
Kt("Select None"),ce().checkedElements=(e=ce().checkedElements,I(e).filter(Te).reduce(je,{})),Le(),$(t).DataTable().draw()}function Ae(t){Kt("Checkbox"),ce().checkedElements={},L('table.fshInvFilter input[type="checkbox"][item]:checked').forEach((t=>{ce().checkedElements[t.getAttribute("item")]=1})),we(ce()),$(t).DataTable().draw(!1)}function Ge(t){Kt("Defaults"),ce().checkedElements=te.checkedElements,Le(),$(t).DataTable().draw(!1)}function qe(t){Kt("Reset levels"),ce().fshMinLvl=te.fshMinLvl,ce().fshMaxLvl=te.fshMaxLvl,we(ce()),function(t){$("#fshMinLvl").val(ce().fshMinLvl),$("#fshMaxLvl").val(ce().fshMaxLvl),$(t).DataTable().draw(!1)}(t)}async function Ce(t){const e=await _t(t)
return Rt(e)}function Pe(t){return M({subcmd2:"dostoreitems",items:t})}async function Oe(t){const e=await E({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t})
return Mt(e)}async function Ue(t){const e=await function(t){return S(Pe,Oe,t)}(t)
return St(e),Rt(e)}function Be(t,e){t.eq(e).empty()}function Fe(t,e){if(1===e.r)return
const n=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(m(Be,t))}($("td",n)),n.css("text-decoration","line-through")}async function He(t,e){D(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),function(t){t.empty().append(`<img src="${T}ui/misc/spinner.gif" width="11" height="11">`)}(e)
const n=await t()
n&&Fe(e,n)}function We(t,e){Xt("setName"),$(t).DataTable().search(e.attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Ve(t){Xt("takeItem"),He(m(Dt,t.attr("invid"),t.attr("action")),t)}function Ye(t){Xt("recallItem"),He(m(Et,t.attr("invid"),t.attr("playerid"),t.attr("mode"),t.attr("action")),t)}function Qe(t,e,n,s){Xt(n),He(m(t,e),s)}function ze(t){Qe(Ue,[t.attr("invid")],"doStoreItem",t)}function Ke(t,e,n){Qe(t,n.attr("invid"),e,n)}const Xe=t=>Ke(Lt,"doUseItem",t),Je=t=>Ke(wt,"doWearItem",t)
function Ze(t,e,n){Qe(t,[n.data("inv")],e,n)}const tn=t=>Ze(kt,"doDropItem",t),en=t=>Ze(Ce,"doSendItem",t),nn=t=>e=>t($(e.target))
function sn(t,[e,n]){$(t).on("click",`span.${e}`,nn(n))}function an(t){Xt("doMoveItem")
const e=$(t.target)
xt([e.data("inv")],e.val())}function rn(t,e){$(e[0]).on("click",m(e[1],t))}const cn=t=>()=>{Xt(t)}
function dn(t){!function(t){[["#fshReset",qe],["#fshAll",Me],["#fshNone",Ne],["#fshDefault",Ge]].forEach(m(rn,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',m(Ae,t)),function(t){[["dropItem",tn],["recallItem",Ye],["sendItem",en],["setName",m(We,t)],["storeItem",ze],["takeItem",Ve],["useItem",Xe],["wearItem",Je]].forEach(m(sn,t))}(t),function(t){["fshInvItem","fshMaroon","sorting"].forEach((e=>{$(t).on("click",`.${e}`,cn(e))}))}(t)}let on=0
function ln(t,e){return jt(on,j(e[1]),ce().fshMinLvl,ce().fshMaxLvl)}function un(){on=[(t,e,n)=>0===n,...Tt],$.fn.dataTable.ext.search.push(ln)}function fn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>!ce().checkedElements||ce().checkedElements[s.type]))}function pn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>!ce().checkedElements?.[-1]||function(t){return ce().checkedElements[-1]&&t.stats&&""!==t.stats.set_name}(s)))}function hn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>{const a=(parseInt(s.rarity,10)+100).toString()
return!ce().checkedElements||ce().checkedElements[a]}))}function mn(t,e,n,s){e("toBp"),[...L(n),...L(s)].forEach(U)}function bn(t,e,n){e("toGs"),L(n).forEach(U)}var vn=G('<div class="main svelte-1mlms3r"><div class="head svelte-1mlms3r">Recall all visible to</div> <div class="btnbox svelte-1mlms3r"><button class="custombutton svelte-1mlms3r" type="button">BP</button> <button class="custombutton svelte-1mlms3r" type="button">GS</button></div></div>')
function yn(t,e){Y(e)||H(e,1)}N(["click"])
var gn=G('<span class="fshGreen">Recalled</span>'),_n=G('<span class="fshSpinner"></span>'),kn=G('<button class="custombutton svelte-fvareh" type="button">BP</button>'),xn=G('<div class="main svelte-fvareh"><div class="head svelte-fvareh">Recall repairable to</div> <div class="btnbox svelte-fvareh"><!></div> <div class="btnbox svelte-fvareh"> </div></div>')
async function In(t,e,n){e("On page"),n({page:"current"})}function $n(t,e,n){e("All"),n()}async function Rn(t,e){e("Clear cache"),await w(`fsh_${i.subcmd}_cache`,[]),U(it("fshRefresh"))}N(["click"])
var wn=G("<div>Chunks needed: <span> </span></div> <div>Chunks received: <span> </span></div>",1),Ln=G('<div class="main svelte-15yybge"><div class="head svelte-15yybge">Update Stats <div class="wrapper svelte-15yybge">[ <div class="tooltip svelte-15yybge"><span class="tooltip-multiline">?</span></div> ]</div></div> <div class="btnbox svelte-15yybge"><button class="custombutton svelte-15yybge" type="button">On page</button> <button class="custombutton svelte-15yybge" type="button">All</button></div> <div class="btnbox svelte-15yybge"><button class="custombutton svelte-15yybge" type="button">Clear cache</button></div> <div class="chunkbox svelte-15yybge"><!></div></div>')
N(["click"])
var Mn=G("<!> <!>",1),Sn=G("<div></div>"),En=G('<div class="container svelte-1tjz5ud"><!> <!></div>')
function Dn(t,e){A(e,!0)
let n=B(e,"fshInv",3,0)
var s=En(),a=C(s),c=t=>{var e=Mn(),s=X(e)
!function(t,e){A(e,!1)
const n=t=>{h("Inventory","Recall All",t)}
Nt()
var s=vn(),a=q(C(s),2),i=C(a)
i.__click=[mn,n,'span[action="take"]','span[mode="0"][action="recall"]'],q(i,2).__click=[bn,n,'span[mode="1"][action="recall"]'],P(t,s),O()}(s,{}),function(t,e){A(e,!0)
let n=B(e,"fshInv",3,0),s=W(1),a=W(0)
const i=new DataTable(n()).rows(((t,{durability:e,max_durability:n,player_id:s,rarity:a,type:i})=>e<n&&-1===s&&5!==a&&i<9)),r=F(i.data())
function c(){return At(r.map((({inv_id:t})=>t)))}r.length&&H(s,0)
var d=xn(),o=q(C(d),2),l=C(o),u=t=>{var e=K(),n=X(e)
J(n,c,(t=>{var e=_n()
P(t,e)}),(t=>{var e=gn()
P(t,e)})),P(t,e)},f=t=>{var e=kn()
e.__click=[yn,a],Q((()=>e.disabled=Y(s))),P(t,e)}
V(l,(t=>{Y(a)?t(u):t(f,!1)}))
var p=q(o,2),h=C(p)
Q((()=>z(h,`${r.length??""} items to repair`))),P(t,d),O()}(q(s,2),{get fshInv(){return n()}}),P(t,e)},d=t=>{var e=Sn()
P(t,e)}
V(a,(t=>{"guildinvmgr"===i.subcmd?t(c):t(d,!1)})),function(t,e){A(e,!0)
let n=B(e,"fshInv",3,0)
const s=new DataTable(n())
let a=W(0),i=W(0)
async function c([t,e,n]){const s=await rt(t,e,n)
return H(i,Y(i)+1),s}async function d(t){const e=s.rows(et,t),n=nt(F(e.data()))
H(a,n.length,!0),H(i,0)
const d=await r(n.map(c))
e.every(st(d.flatMap(at))),s.draw()}const o=t=>{h("Inventory","Update Stats",t)}
Z(n())
var l=Ln(),u=C(l),f=q(C(u)),p=q(C(f)),m=C(p)
tt(m,"data-tooltip","This allows you to update the stats of items. It is useful in cases where stats are missing or if you want accurate stats for forged items. It can be slow for large data sets. The results are cached and will be used automatically next time you visit this page. You will need to update again if these stats become stale. For example, if you forged or crafted an item, or if a guild store item has moved.")
var b=q(u,2),v=C(b)
v.__click=[In,o,d],q(v,2).__click=[$n,o,d]
var y=q(b,2)
C(y).__click=[Rn,o]
var g=q(y,2),_=C(g),k=t=>{var e=wn(),n=X(e),s=q(C(n)),r=C(s),c=q(n,2),d=q(C(c)),o=C(d)
Q((()=>{z(r,Y(a)||""),z(o,Y(i)||"")})),P(t,e)}
V(_,(t=>{Y(a)&&t(k)})),P(t,l),O()}(q(a,2),{get fshInv(){return n()}}),P(t,s),O()}const Tn=()=>Bt().player_id?`<b>&nbsp;Inventory Manager</b> ${Bt().items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${Bt().items.length} items (maroon = in BP, blue=guild store)`
function jn(){const t=Tn()
dt("",u()),function(){if(!Pt())return
Ot(s(it("pF"),lt({style:{textAlign:"center"}})))}(),ot(u(),ee.replace("@@reportTitle@@",t))}function Nn(){n(Bt().items)&&jn()}function An(){$("#fshMinLvl").val(ce().fshMinLvl),$("#fshMaxLvl").val(ce().fshMaxLvl)}const Gn=([,t])=>[t.id,t]
function qn(t){ht([Zt,un,fn,pn,hn,Nn,Le,An])
const e=Re()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",m(De,t)),$(t).on("change","select.fshMoveItem",an),dn(t),$t(t,cn,Xt)}(e),$("#fshRefresh").on("click",t),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const n=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(n),n.on("click",m(Jt,t,e))}(e),function(t){ct(Dn,{props:{fshInv:t},target:u()})}(e)}function Cn(t){qn(t)}const Pn=()=>Object.getOwnPropertyNames(Bt()).length
async function On(n){const s=[mt(),zt()]
"guildinvmgr"===i.subcmd&&s.push(async function(){await t(!1),i.membrList&&(i.membrList=e(I(i.membrList).filter(Gt).map(Gn)))}()),s.push(async function(){const t=await b(`fsh_${i.subcmd}`)
ae={...y(te),...v(t,{})},ie=g("showQuickDropLinks"),re=g("showQuickSendLinks")}()),await r(s),Pn()&&function(t){pt(3,Cn,[t])}(n)}function Un(){!ut()&&u()&&("guildinvmgr"!==i.subcmd||l())&&(dt(`<span id="fshInvMan"><img src = "${ft}">&nbsp;Getting inventory data...</span>`,u()),On(Un))}export{Un as default}
//# sourceMappingURL=inventory-DejY_Dcm.js.map
