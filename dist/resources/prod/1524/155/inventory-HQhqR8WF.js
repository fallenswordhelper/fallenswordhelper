import{g as t}from"./getMembrList-BDWCwZT8.js"
import{f as e,ac as n,i as s,t as a,ax as i,_ as r,bd as c,dr as d,ds as o,ct as l,p as u,da as f,dt as p,s as h,c as m,bG as b,bX as v,du as y,az as g,df as _,dv as k,c1 as x,a9 as I,dw as R,bH as w,h as L,dx as M,$ as S,ae as E,bc as D,bi as T,aM as j,ao as N,x as A,A as G,B as q,D as C,K as P,L as O,bh as U,y as B,bu as F,H,aj as W,F as V,I as Y,O as Q,P as z,aE as X,C as K,aD as J,dy as Z,R as tt,dz as et,dA as nt,dB as st,dC as at,g as it,dD as rt,n as ct,d as dt,a1 as ot,u as lt,a2 as ut,cu as ft,bm as pt}from"./calfSystem-UyQ_FKFu.js"
import{e as ht}from"./executeAll-DIAWIge1.js"
import{l as mt}from"./loadDataTables-Caiou-kV.js"
import{d as bt}from"./daLoadInventory-BOvQZ3xF.js"
import{f as vt}from"./flattenItems-hxdYvdCT.js"
import{c as yt}from"./createTable-G8d3zByz.js"
import{i as gt}from"./isSelected-BWnMzKlW.js"
import{d as _t,a as kt,m as xt}from"./dropItem-CIa01p72.js"
import{c as It}from"./changeMinMax-D7gtO-VK.js"
import{c as $t}from"./chromeHandlers-6uO6D1KI.js"
import{a as Rt,e as wt,u as Lt}from"./useItem-DxRiNkQy.js"
import{h as Mt}from"./htmlResult-C3r5PHKK.js"
import{e as St}from"./errorDialog-B4_TjdGG.js"
import{q as Et,a as Dt}from"./queue-B8Mbl3u0.js"
import{p as Tt,l as jt}from"./lvlTests-DUT5IcXz.js"
import"./legacy-BJNb2DD1.js"
import{i as Nt}from"./lifecycle-CmMPwki_.js"
import{d as At}from"./daGsTake-CRUGGR_j.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-BQXqHcQL.js"
import"./InfoBoxFrom-B2WmDuDa.js"
import"./backpackOk-CPMw1ST_.js"
import"./takeItem-DjmeaFjX.js"
function Gt([t]){return"lastUpdate"!==t}const qt=({id:t,name:e})=>[t,e]
let Ct=""
function Pt(t,e){Ct||(Ct=e.message),Ct&&s(t,a("p",{className:"fshRed",textContent:Ct}))}let Ot={}
const Ut=()=>Ot
async function Bt(t){try{return await t()}catch(t){if(500!==t.jqXhr.status)throw t
Pt(u(),t)}}const Ft=t=>e=>{const n=t.find(t=>t.a===e.inv_id)
return{...e,...n?.n&&{item_name:n.n}}},Ht=t=>({...t,equipped:!0,folder_id:-2})
async function Wt(){const[t,s]=await r([Bt(f),bt()]),a=t?.items??[],i=s?.r??{},d=i.equipment?.map(Ht)??[]
return((t,s,a)=>{return{folders:(i=t,n(i?.inventories)?e(i.inventories.filter(({id:t})=>-1!==t).map(qt)):[]),items:s.map(Ft(a)),player_id:c()}
var i})(i,a,d.concat(vt(i)))}const Vt=t=>({...t,player:{id:-1}})
async function Yt(){const[t,e,n]=await r([Bt(p),d(),o()]),s=t?.items??[],a=e?.r??[],i=n?.r??[]
return((t,e)=>({current_player_id:c(),items:t.map(Ft(e)),guild_id:l()}))(s,a.concat(i.map(Vt)))}async function Qt(){if("invmanagernew"===i.subcmd){const t=await Wt()
Ot=t}else if("guildinvmgr"===i.subcmd){const t=await Yt()
Ot=t}}const zt=t=>{h("Inventory","Header",t)},Xt=t=>{h("Inventory","Datatable",t)}
function Kt(t,e){Xt("clearSearch"),e.val(""),$(t).DataTable().search("").draw()}function Jt(){Ut().folders&&(Ut().folders[-1]="Main")}const Zt={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},te='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',ee={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},ne={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
let se={},ae=0,ie=0
const re=()=>se
function ce(t){return ne[t]?ne[t].abbr:""}function de(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n),e.equipped&&t.classList.add("fshBold")}function oe(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function le(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${v(t.player_id,Ut().player_id)}" mode="1" action="recall">GS</span>`}function ue(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function fe(t,e,n){return"display"===t?n(e):"GS"}function pe(t,e){const n=function(t){return-1===t.player_id?4:oe(t)?7:1}(e),s=(a=Ut().player_id,i=e.player_id,r=Ut().guild_id,a||(-1!==i?i:r))
var a,i,r
let c=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(c=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${_}${t}" class="fshInvItem tip-dynamic ${k[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${s}">${t}</a>${c}`}const he=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==Ut().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===Ut().current_player_id}(t),(t,e)=>e.c]]
function me(t,e){const n=he.find(([e])=>e(t))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function be(t){return v(t.folder_id,t.player_id)}function ve(t){return i.membrList[t]?i.membrList[t].username:"???"}function ye(t,e){return t[0]-e[0]}function ge(t,e){return`<option value="${e[0]}"${gt(Number(e[0]),t)}>${e[1]}</option>`}const _e=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:pe(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:be,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":ve(n.player_id)},display:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${x}${t.player_id}">${ve(t.player_id)}</a>`}(n):n.equipped?"Worn":`<select class="fshMoveItem" data-inv="${n.inv_id}">${s=n.folder_id,a=Ut().folders,I(a).sort(ye).map(m(ge,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":ve(t.player_id)}(n):n.equipped?"Worn":Ut().folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>R[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>ne[t]?ne[t].index:0,display:ce,filter:ce}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.floor(n.durability/n.max_durability*100)}},{title:"BP",data:be,render:function(t,e,n){if(!n.folder_id&&n.player_id!==Ut().current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:be,render:function(t,e,n){return oe(n)?fe(e,n,le):function(t){return t.folder_id&&!t.bound}(n)?fe(e,n,ue):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const s=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t]
return 1===s?me(n,{a:"wear",b:"Wear",c:"wearItem"}):2===s?me(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function ke(){return"player_id"in Ut()}function xe(){const t=function(){const t=yt({className:"hover fshXSmall",id:ke()?"fshUserInv":"fshGuildInv"})
return s(u(),t),t}(),e=function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:_e,createdRow:de,data:Ut().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)
return function(t){[[12,"current_player_id"in Ut()],[17,ke()&&ae],[18,ke()&&ie]].forEach(([e,n])=>t.column(e).visible(n))}(e),t}function Ie(t){w(`fsh_${i.subcmd}`,t)}function $e(){L('table.fshInvFilter input[type="checkbox"]').forEach(t=>{t.checked=1===re().checkedElements[t.getAttribute("item")]}),Ie(re())}function Re(t){zt("Select All"),re().checkedElements=ee,$e(),$(t).DataTable().draw(!1)}function we(t,e){re().fshMinLvl=t,re().fshMaxLvl=e,Ie(re())}function Le(t){$(t).DataTable().draw(!1)}function Me(t){zt("changeLvls"),It(we,m(Le,t))}function Se(t){return Number(t[0])>=100}function Ee(t,e){return t[e[0]]=e[1],t}function De(t){var e
zt("Select None"),re().checkedElements=(e=re().checkedElements,I(e).filter(Se).reduce(Ee,{})),$e(),$(t).DataTable().draw()}function Te(t){zt("Checkbox"),re().checkedElements={},L('table.fshInvFilter input[type="checkbox"][item]:checked').forEach(t=>{re().checkedElements[t.getAttribute("item")]=1}),Ie(re()),$(t).DataTable().draw(!1)}function je(t){zt("Defaults"),re().checkedElements=Zt.checkedElements,$e(),$(t).DataTable().draw(!1)}function Ne(t){zt("Reset levels"),re().fshMinLvl=Zt.fshMinLvl,re().fshMaxLvl=Zt.fshMaxLvl,Ie(re()),function(t){$("#fshMinLvl").val(re().fshMinLvl),$("#fshMaxLvl").val(re().fshMaxLvl),$(t).DataTable().draw(!1)}(t)}async function Ae(t){const e=await _t(t)
return Rt(e)}function Ge(t){return M({subcmd2:"dostoreitems",items:t})}async function qe(t){const e=await E({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t})
return Mt(e)}async function Ce(t){const e=await function(t){return S(Ge,qe,t)}(t)
return St(e),Rt(e)}function Pe(t,e){t.eq(e).empty()}function Oe(t,e){if(1===e.r)return
const n=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(m(Pe,t))}($("td",n)),n.css("text-decoration","line-through")}async function Ue(t,e){D(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),function(t){t.empty().append(`<img src="${T}ui/misc/spinner.gif" width="11" height="11">`)}(e)
const n=await t()
n&&Oe(e,n)}function Be(t,e){Xt("setName"),$(t).DataTable().search(e.attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Fe(t){Xt("takeItem"),Ue(m(Dt,t.attr("invid"),t.attr("action")),t)}function He(t){Xt("recallItem"),Ue(m(Et,t.attr("invid"),t.attr("playerid"),t.attr("mode"),t.attr("action")),t)}function We(t,e,n,s){Xt(n),Ue(m(t,e),s)}function Ve(t){We(Ce,[t.attr("invid")],"doStoreItem",t)}function Ye(t,e,n){We(t,n.attr("invid"),e,n)}const Qe=t=>Ye(Lt,"doUseItem",t),ze=t=>Ye(wt,"doWearItem",t)
function Xe(t,e,n){We(t,[n.data("inv")],e,n)}const Ke=t=>Xe(kt,"doDropItem",t),Je=t=>Xe(Ae,"doSendItem",t)
function Ze(t,[e,n]){$(t).on("click",`span.${e}`,(t=>e=>t($(e.target)))(n))}function tn(t){Xt("doMoveItem")
const e=$(t.target)
xt([e.data("inv")],e.val())}function en(t,e){$(e[0]).on("click",m(e[1],t))}const nn=t=>()=>{Xt(t)}
function sn(t){!function(t){[["#fshReset",Ne],["#fshAll",Re],["#fshNone",De],["#fshDefault",je]].forEach(m(en,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',m(Te,t)),function(t){[["dropItem",Ke],["recallItem",He],["sendItem",Je],["setName",m(Be,t)],["storeItem",Ve],["takeItem",Fe],["useItem",Qe],["wearItem",ze]].forEach(m(Ze,t))}(t),function(t){["fshInvItem","fshMaroon","sorting"].forEach(e=>{$(t).on("click",`.${e}`,nn(e))})}(t)}let an=0
function rn(t,e){return jt(an,j(e[1]),re().fshMinLvl,re().fshMaxLvl)}function cn(){an=[(t,e,n)=>0===n,...Tt],$.fn.dataTable.ext.search.push(rn)}function dn(){$.fn.dataTable.ext.search.push((t,e,n,s)=>!re().checkedElements||re().checkedElements[s.type])}function on(){$.fn.dataTable.ext.search.push((t,e,n,s)=>!re().checkedElements?.[-1]||function(t){return re().checkedElements[-1]&&t.stats&&""!==t.stats.set_name}(s))}function ln(){$.fn.dataTable.ext.search.push((t,e,n,s)=>{const a=(parseInt(s.rarity,10)+100).toString()
return!re().checkedElements||re().checkedElements[a]})}function un(t,e,n,s){e("toBp"),[...L(n),...L(s)].forEach(U)}function fn(t,e,n){e("toGs"),L(n).forEach(U)}var pn=G('<div class="main svelte-1mlms3r"><div class="head svelte-1mlms3r">Recall all visible to</div> <div class="btnbox svelte-1mlms3r"><button class="custombutton svelte-1mlms3r" type="button">BP</button> <button class="custombutton svelte-1mlms3r" type="button">GS</button></div></div>')
function hn(t,e){Y(e)||H(e,1)}N(["click"])
var mn=G('<span class="fshGreen">Recalled</span>'),bn=G('<span class="fshSpinner"></span>'),vn=G('<button class="custombutton svelte-fvareh" type="button">BP</button>'),yn=G('<div class="main svelte-fvareh"><div class="head svelte-fvareh">Recall repairable to</div> <div class="btnbox svelte-fvareh"><!></div> <div class="btnbox svelte-fvareh"> </div></div>')
async function gn(t,e,n){e("On page"),n({page:"current"})}function _n(t,e,n){e("All"),n()}async function kn(t,e){e("Clear cache"),await w(`fsh_${i.subcmd}_cache`,[]),U(it("fshRefresh"))}N(["click"])
var xn=G("<div>Chunks needed: <span> </span></div> <div>Chunks received: <span> </span></div>",1),In=G('<div class="main svelte-15yybge"><div class="head svelte-15yybge">Update Stats <div class="wrapper svelte-15yybge">[ <div class="tooltip svelte-15yybge"><span class="tooltip-multiline">?</span></div> ]</div></div> <div class="btnbox svelte-15yybge"><button class="custombutton svelte-15yybge" type="button">On page</button> <button class="custombutton svelte-15yybge" type="button">All</button></div> <div class="btnbox svelte-15yybge"><button class="custombutton svelte-15yybge" type="button">Clear cache</button></div> <div class="chunkbox svelte-15yybge"><!></div></div>')
N(["click"])
var $n=G("<!> <!>",1),Rn=G("<div></div>"),wn=G('<div class="container svelte-1tjz5ud"><!> <!></div>')
function Ln(t,e){A(e,!0)
let n=B(e,"fshInv",3,0)
var s=wn(),a=C(s),c=t=>{var e=$n(),s=K(e)
!function(t,e){A(e,!1)
const n=t=>{h("Inventory","Recall All",t)}
Nt()
var s=pn(),a=q(C(s),2),i=C(a)
i.__click=[un,n,'span[action="take"]','span[mode="0"][action="recall"]'],q(i,2).__click=[fn,n,'span[mode="1"][action="recall"]'],P(t,s),O()}(s,{}),function(t,e){A(e,!0)
let n=B(e,"fshInv",3,0),s=W(1),a=W(0)
const i=new DataTable(n()).rows((t,{durability:e,max_durability:n,player_id:s,rarity:a,type:i})=>e<n&&-1===s&&5!==a&&i<9),r=F(i.data())
function c(){return At(r.map(({inv_id:t})=>t))}r.length&&H(s,0)
var d=yn(),o=q(C(d),2),l=C(o),u=t=>{var e=X(),n=K(e)
J(n,c,t=>{var e=bn()
P(t,e)},t=>{var e=mn()
P(t,e)}),P(t,e)},f=t=>{var e=vn()
e.__click=[hn,a],Q(()=>e.disabled=Y(s)),P(t,e)}
V(l,t=>{Y(a)?t(u):t(f,!1)})
var p=q(o,2),h=C(p)
Q(()=>z(h,`${r.length??""} items to repair`)),P(t,d),O()}(q(s,2),{get fshInv(){return n()}}),P(t,e)},d=t=>{var e=Rn()
P(t,e)}
V(a,t=>{"guildinvmgr"===i.subcmd?t(c):t(d,!1)}),function(t,e){A(e,!0)
let n=B(e,"fshInv",3,0)
const s=new DataTable(n())
let a=W(0),i=W(0)
async function c([t,e,n]){const s=await rt(t,e,n)
return H(i,Y(i)+1),s}async function d(t){const e=s.rows(et,t),n=nt(F(e.data()))
H(a,n.length,!0),H(i,0)
const d=await r(n.map(c))
e.every(st(d.flatMap(at))),s.draw()}const o=t=>{h("Inventory","Update Stats",t)}
Z(n())
var l=In(),u=C(l),f=q(C(u)),p=q(C(f)),m=C(p)
tt(m,"data-tooltip","This allows you to update the stats of items. It is useful in cases where stats are missing or if you want accurate stats for forged items. It can be slow for large data sets. The results are cached and will be used automatically next time you visit this page. You will need to update again if these stats become stale. For example, if you forged or crafted an item, or if a guild store item has moved.")
var b=q(u,2),v=C(b)
v.__click=[gn,o,d],q(v,2).__click=[_n,o,d]
var y=q(b,2)
C(y).__click=[kn,o]
var g=q(y,2),_=C(g),k=t=>{var e=xn(),n=K(e),s=q(C(n)),r=C(s),c=q(n,2),d=q(C(c)),o=C(d)
Q(()=>{z(r,Y(a)||""),z(o,Y(i)||"")}),P(t,e)}
V(_,t=>{Y(a)&&t(k)}),P(t,l),O()}(q(a,2),{get fshInv(){return n()}}),P(t,s),O()}function Mn(){if(!Ct)return
Pt(s(it("pF"),lt({style:{textAlign:"center"}})))}function Sn(){const t=Ut().player_id?`<b>&nbsp;Inventory Manager</b> ${Ut().items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${Ut().items.length} items (maroon = in BP, blue=guild store)`
dt("",u()),Mn(),ot(u(),te.replace("@@reportTitle@@",t))}function En(){n(Ut().items)&&Sn()}function Dn(){$("#fshMinLvl").val(re().fshMinLvl),$("#fshMaxLvl").val(re().fshMaxLvl)}const Tn=([,t])=>[t.id,t]
function jn(t){ht([Jt,cn,dn,on,ln,En,$e,Dn])
const e=xe()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",m(Me,t)),$(t).on("change","select.fshMoveItem",tn),sn(t),$t(t,nn,Xt)}(e),$("#fshRefresh").on("click",t),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const n=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(n),n.on("click",m(Kt,t,e))}(e),function(t){ct(Ln,{props:{fshInv:t},target:u()})}(e)}function Nn(t){jn(t)}async function An(n){const s=[mt(),Qt()]
"guildinvmgr"===i.subcmd&&s.push(async function(){await t(!1),i.membrList&&(i.membrList=e(I(i.membrList).filter(Gt).map(Tn)))}()),s.push(async function(){const t=await b(`fsh_${i.subcmd}`)
se={...y(Zt),...v(t,{})},ae=g("showQuickDropLinks"),ie=g("showQuickSendLinks")}()),await r(s),Object.getOwnPropertyNames(Ut()).length&&function(t){pt(3,Nn,[t])}(n)}function Gn(){!ut()&&u()&&("guildinvmgr"!==i.subcmd||l())&&(dt(`<span id="fshInvMan"><img src = "${ft}">&nbsp;Getting inventory data...</span>`,u()),An(Gn))}export{Gn as default}
//# sourceMappingURL=inventory-HQhqR8WF.js.map
