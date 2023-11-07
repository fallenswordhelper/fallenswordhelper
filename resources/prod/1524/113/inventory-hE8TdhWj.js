import{g as t}from"./getMembrList-_qehbL1l.js"
import{ci as e,i as n,bW as s,ab as a,p as i,bH as r,cC as c,s as o,c as d,bh as l,ad as u,cs as f,cD as p,bj as m,C as h,bC as b,k as y,E as v,$ as g,aD as _,aH as k,S as I,J as x,K as w,L as R,M as L,N as M,P as S,Q as j,U as E,W as D,X as T,Y as N,av as C,aS as A,_ as P,a0 as q,g as G,b9 as U,ba as O,b4 as W,b7 as F,bb as B,d as H,v as V,m as Q,w as Y,bM as J,f as X,aL as K,bI as Z,bJ as z}from"./calfSystem-VUa7wwu1.js"
import{a as tt}from"./all-TTLWag-d.js"
import{e as et}from"./executeAll-EzEelzhH.js"
import{l as nt}from"./loadDataTables-ITdAx-eG.js"
import{d as st,a as at,b as it}from"./deepClone-9z5VY-wG.js"
import{d as rt}from"./daLoadInventory-ATAyY-27.js"
import{b as ct}from"./basicItem-kaFdTj90.js"
import{e as ot,d as dt,a as lt,m as ut}from"./dropItem-aqwcc7kv.js"
import{f as ft}from"./flattenItems-OuxkqZMH.js"
import{p as pt}from"./playerId-wTCAZ6WR.js"
import{c as mt}from"./createTable-pRrgqwY-.js"
import{g as ht,s as bt}from"./idb-gpu32B-C.js"
import{i as yt}from"./isSelected-tg-1ZNBk.js"
import{c as vt}from"./changeMinMax-9r1ZRXOG.js"
import{c as gt}from"./chromeHandlers-mB4tlRlM.js"
import{a as _t,u as kt,e as $t}from"./useItem-8PwlZ4Ta.js"
import{g as It}from"./guildInventory-oaARvJ08.js"
import{h as xt}from"./htmlResult-2SClkrBU.js"
import{e as wt}from"./errorDialog-UVurWbsP.js"
import{q as Rt,a as Lt}from"./queue-BfnYS5u2.js"
import{p as Mt,l as St}from"./lvlTests-Ed6CIznK.js"
import{i as jt}from"./intValue-JHhLnq8V.js"
import{p as Et}from"./postApp-_Y_j-ghu.js"
import{c as Dt}from"./chunk-joYXv2f3.js"
import{i as Tt}from"./isArray-bNviZzJA.js"
import"./guildMembers-hej1TkS-.js"
import"./now-pQzGw6vd.js"
import"./guild-K9OhcFT0.js"
import"./dialog-ewu4mmhi.js"
import"./dialogMsg-6-T2JNn4.js"
import"./sendItems-jb2UB57A.js"
import"./numberIsNaN--k2kVli9.js"
import"./daUseItem-v28tyfoG.js"
import"./InfoBoxFrom-ZDQHMQ-G.js"
import"./backpackOk-0oiqDP8A.js"
import"./takeItem-DBmiMHsi.js"
function Nt([t]){return"lastUpdate"!==t}function Ct(){return e({subcmd:"inventory"})}let At=""
const Pt=()=>At
function qt(t,e){At||(At=e.message),At&&n(t,s("p",{className:"fshRed",textContent:At}))}let Gt={}
const Ut=()=>Gt
async function Ot(t){try{return await t()}catch(t){if(500!==t.jqXhr.status)throw t
qt(i(),t)}}const Wt=(t,e)=>{return e.map(ct).map((n=t,function(t){const e=n?.find((({inv_id:e})=>e===t.inv_id))
return{...t,...e?.stats&&{stats:{...t.stats,armor:e.stats.armor,attack:e.stats.attack,damage:e.stats.damage,defense:e.stats.defense,hp:e.stats.hp,set_name:e.stats.set_name??""}}}}))
var n},Ft=t=>({...t,equipped:!0,folder_id:-2}),Bt=(t,e,n)=>({folders:ot(t),items:Wt(e,n),player_id:pt()})
const Ht=t=>({...t,player:{id:-1}}),Vt=(t,e)=>({current_player_id:pt(),items:Wt(t,e),guild_id:r()})
async function Qt(){if("invmanagernew"===a.subcmd){const t=await async function(){const[t,e]=await tt([Ot(Ct),rt()]),n=t?.items??[],s=e?.r??{},a=(s.equipment?.map(Ft)??[]).concat(ft(s))
return Bt(s,n,a)}()
Gt=t}else if("guildinvmgr"===a.subcmd){const t=await async function(){const[t,e,n]=await tt([Ot(c),st(),at()]),s=t?.items??[],a=e?.r??[],i=n?.r??[],r=a.concat(i.map(Ht))
return Vt(s,r)}()
Gt=t}}const Yt=t=>{o("Inventory","Header",t)},Jt=t=>{o("Inventory","Datatable",t)}
function Xt(t,e){Jt("clearSearch"),e.val(""),$(t).DataTable().search("").draw()}function Kt(){Ut().folders&&(Ut().folders[-1]="Main")}const Zt={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},zt='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',te={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},ee={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
let ne={},se=0,ae=0
const ie=()=>ne,re=()=>se,ce=()=>ae
function oe(t){return ee[t]?ee[t].abbr:""}function de(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n),e.equipped&&t.classList.add("fshBold")}function le(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function ue(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${l(t.player_id,Ut().player_id)}" mode="1" action="recall">GS</span>`}function fe(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function pe(t,e,n){return"display"===t?n(e):"GS"}function me(t,e){const n=function(t){return-1===t.player_id?4:le(t)?7:1}(e),s=(a=Ut().player_id,i=e.player_id,r=Ut().guild_id,a||(-1!==i?i:r))
var a,i,r
let c=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(c=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${f}${t}" class="fshInvItem tip-dynamic ${p[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${s}">${t}</a>${c}`}const he=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==Ut().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===Ut().current_player_id}(t),(t,e)=>e.c]]
function be(t,e){const n=he.find((([e])=>e(t)))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function ye(t){return l(t.folder_id,t.player_id)}function ve(t){return a.membrList[t]?a.membrList[t].username:"???"}function ge(t,e){return t[0]-e[0]}function _e(t,e){return`<option value="${e[0]}"${yt(Number(e[0]),t)}>${e[1]}</option>`}const ke=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:me(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:ye,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":ve(n.player_id)},display:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${m}${t.player_id}">${ve(t.player_id)}</a>`}(n):n.equipped?"Worn":`<select class="fshMoveItem" data-inv="${n.inv_id}">${s=n.folder_id,a=Ut().folders,h(a).sort(ge).map(d(_e,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":ve(t.player_id)}(n):n.equipped?"Worn":Ut().folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>b[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>ee[t]?ee[t].index:0,display:oe,filter:oe}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.ceil(n.durability/n.max_durability*100)}},{title:"BP",data:ye,render:function(t,e,n){if(!n.folder_id&&n.player_id!==Ut().current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:ye,render:function(t,e,n){return le(n)?pe(e,n,ue):function(t){return t.folder_id&&!t.bound}(n)?pe(e,n,fe):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const s=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t]
return 1===s?be(n,{a:"wear",b:"Wear",c:"wearItem"}):2===s?be(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function $e(){return"player_id"in Ut()}function Ie(){const t=function(){const t=mt({className:"hover fshXSmall",id:$e()?"fshUserInv":"fshGuildInv"})
return n(i(),t),t}(),e=function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:ke,createdRow:de,data:Ut().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)
return function(t){[[12,"current_player_id"in Ut()],[17,$e()&&re()],[18,$e()&&ce()]].forEach((([e,n])=>t.column(e).visible(n)))}(e),t}function xe(t){bt(`fsh_${a.subcmd}`,t)}function we(){y('table.fshInvFilter input[type="checkbox"]').forEach((t=>{t.checked=1===ie().checkedElements[t.getAttribute("item")]})),xe(ie())}function Re(t){Yt("Select All"),ie().checkedElements=te,we(),$(t).DataTable().draw(!1)}function Le(t,e){ie().fshMinLvl=t,ie().fshMaxLvl=e,xe(ie())}function Me(t){$(t).DataTable().draw(!1)}function Se(t){Yt("changeLvls"),vt(Le,d(Me,t))}function je(t){return Number(t[0])>=100}function Ee(t,e){return t[e[0]]=e[1],t}function De(t){var e
Yt("Select None"),ie().checkedElements=(e=ie().checkedElements,h(e).filter(je).reduce(Ee,{})),we(),$(t).DataTable().draw()}function Te(t){Yt("Checkbox"),ie().checkedElements={},y('table.fshInvFilter input[type="checkbox"][item]:checked').forEach((t=>{ie().checkedElements[t.getAttribute("item")]=1})),xe(ie()),$(t).DataTable().draw(!1)}function Ne(t){Yt("Defaults"),ie().checkedElements=Zt.checkedElements,we(),$(t).DataTable().draw(!1)}function Ce(t){Yt("Reset levels"),ie().fshMinLvl=Zt.fshMinLvl,ie().fshMaxLvl=Zt.fshMaxLvl,xe(ie()),function(t){$("#fshMinLvl").val(ie().fshMinLvl),$("#fshMaxLvl").val(ie().fshMaxLvl),$(t).DataTable().draw(!1)}(t)}async function Ae(t){const e=await dt(t)
return _t(e)}function Pe(t){return It({subcmd2:"dostoreitems",items:t})}async function qe(t){const e=await v({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t})
return xt(e)}async function Ge(t){const e=await function(t){return g(Pe,qe,t)}(t)
return wt(e),_t(e)}function Ue(t,e){t.eq(e).empty()}function Oe(t,e){if(1===e.r)return
const n=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(d(Ue,t))}($("td",n)),n.css("text-decoration","line-through")}async function We(t,e){_(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),function(t){t.empty().append(`<img src="${k}ui/misc/spinner.gif" width="11" height="11">`)}(e)
const n=await t()
n&&Oe(e,n)}function Fe(t,e){Jt("setName"),$(t).DataTable().search(e.attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Be(t){Jt("takeItem"),We(d(Rt,t.attr("invid"),t.attr("action")),t)}function He(t){Jt("recallItem"),We(d(Lt,t.attr("invid"),t.attr("playerid"),t.attr("mode"),t.attr("action")),t)}function Ve(t,e,n,s){Jt(n),We(d(t,e),s)}function Qe(t){Ve(Ge,[t.attr("invid")],"doStoreItem",t)}function Ye(t,e,n){Ve(t,n.attr("invid"),e,n)}const Je=t=>Ye(kt,"doUseItem",t),Xe=t=>Ye($t,"doWearItem",t)
function Ke(t,e,n){Ve(t,[n.data("inv")],e,n)}const Ze=t=>Ke(lt,"doDropItem",t),ze=t=>Ke(Ae,"doSendItem",t),tn=t=>e=>t($(e.target))
function en(t,[e,n]){$(t).on("click",`span.${e}`,tn(n))}function nn(t){Jt("doMoveItem")
const e=$(t.target)
ut([e.data("inv")],e.val())}function sn(t,e){$(e[0]).on("click",d(e[1],t))}const an=t=>()=>{Jt(t)}
function rn(t){!function(t){[["#fshReset",Ce],["#fshAll",Re],["#fshNone",De],["#fshDefault",Ne]].forEach(d(sn,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',d(Te,t)),function(t){[["dropItem",Ze],["recallItem",He],["sendItem",ze],["setName",d(Fe,t)],["storeItem",Qe],["takeItem",Be],["useItem",Je],["wearItem",Xe]].forEach(d(en,t))}(t),function(t){["fshInvItem","fshMaroon","sorting"].forEach((e=>{$(t).on("click",`.${e}`,an(e))}))}(t)}let cn=0
function on(t,e){return St(cn,jt(e[1]),ie().fshMinLvl,ie().fshMaxLvl)}function dn(){cn=[(t,e,n)=>0===n,...Mt],$.fn.dataTable.ext.search.push(on)}function ln(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>!ie().checkedElements||ie().checkedElements[s.type]))}function un(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>!ie().checkedElements?.[-1]||function(t){return ie().checkedElements[-1]&&t.stats&&""!==t.stats.set_name}(s)))}function fn(){$.fn.dataTable.ext.search.push(((t,e,n,s)=>{const a=(parseInt(s.rarity,10)+100).toString()
return!ie().checkedElements||ie().checkedElements[a]}))}function pn(t){let e,n,s,a,i,r,c,o,d
return{c(){e=R("div"),n=R("div"),n.textContent="Recall all visible to",s=L(),a=R("div"),i=R("button"),i.textContent="BP",r=L(),c=R("button"),c.textContent="GS",M(n,"class","head svelte-1mlms3r"),M(i,"class","custombutton svelte-1mlms3r"),M(i,"type","button"),M(c,"class","custombutton svelte-1mlms3r"),M(c,"type","button"),M(a,"class","btnbox svelte-1mlms3r"),M(e,"class","main svelte-1mlms3r")},m(l,u){S(l,e,u),j(e,n),j(e,s),j(e,a),j(a,i),j(a,r),j(a,c),o||(d=[E(i,"click",t[0]),E(c,"click",t[1])],o=!0)},p:D,i:D,o:D,d(t){t&&T(e),o=!1,N(d)}}}function mn(t){const e=t=>{o("Inventory","Recall All",t)}
return[function(){e("toBp"),[...y('span[action="take"]'),...y('span[mode="0"][action="recall"]')].forEach(C)},function(){e("toGs"),y('span[mode="1"][action="recall"]').forEach(C)}]}class hn extends I{constructor(t){super(),x(this,t,mn,pn,w,{})}}const bn=(t,e)=>e.map(((e,n)=>({...e,inv_id:t[n].inv_id}))),yn=({folder_id:t})=>-2!==(t??-2),vn=({folder_id:t})=>-2===t,gn=({player_id:t})=>-1!==(t??-1),_n=({player_id:t})=>t,kn=({player_id:t})=>-1===t,$n=([t,e,n])=>Dt(20,t).map((t=>[t,e,n])),In=t=>({inv_id:e})=>e===t.inv_id,xn=(t,e)=>t.attributes.find((({id:t})=>t===e))?.value??0,wn=(t,e)=>({...e,armor:xn(t,2),attack:xn(t,0),damage:xn(t,4),defense:xn(t,1),hp:xn(t,3),set_name:t.set_name??""}),Rn=(t,{type:e})=>e<9,Ln=t=>t?.s?t.r.items:[]
function Mn(t){return function(){const e=this.data(),n=t.find(In(e))
n?.attributes&&(e.stats=wn(n,e.stats),this.invalidate())}}const Sn=async()=>await ht(`fsh_${a.subcmd}_cache`)??[],jn=t=>bt(`fsh_${a.subcmd}_cache`,t),En=t=>e=>t.every((t=>t.inv_id!==e.inv_id))
async function Dn(t,e,n){const s=await(a={item_id:t.map((({item_id:t})=>t)),inv_id:t.map((({inv_id:t})=>t)),p:t.map(e),t:t.map((()=>n))},Et({cmd:"fetchitem",compare:0,...a}))
var a
return s?.s&&(s.r.items=bn(t,s.r.items),await async function(t){const e=(await Sn()).filter(En(t))
await jn(e.concat(t))}(s.r.items)),s}const Tn=(t,e)=>{return e.filter((n=A(t.data()),t=>n.some((e=>t.inv_id===e.inv_id))))
var n}
async function Nn(t){const e=t.rows(Rn),n=await async function(t){const e=await Sn(),n=Tn(t,e)
return await jn(n),n}(e)
e.every(Mn(n))}function Cn(t){let e,n,s,a,i,r,c,o,d,l=(t[0]||"")+"",u=(t[1]||"")+""
return{c(){e=R("div"),n=P("Chunks needed: "),s=R("span"),a=P(l),i=L(),r=R("div"),c=P("Chunks received: "),o=R("span"),d=P(u)},m(t,l){S(t,e,l),j(e,n),j(e,s),j(s,a),S(t,i,l),S(t,r,l),j(r,c),j(r,o),j(o,d)},p(t,e){1&e&&l!==(l=(t[0]||"")+"")&&q(a,l),2&e&&u!==(u=(t[1]||"")+"")&&q(d,u)},d(t){t&&(T(e),T(i),T(r))}}}function An(t){let e,n,s,a,i,r,c,o,d,l,u,f,p,m,h,b,y,v,g,_,k,$=t[0]&&Cn(t)
return{c(){e=R("div"),n=R("div"),s=P("Update Stats\n    "),a=R("div"),i=P("[\n      "),r=R("div"),c=R("span"),o=P("?"),d=P("\n      ]"),l=L(),u=R("div"),f=R("button"),f.textContent="On page",p=L(),m=R("button"),m.textContent="All",h=L(),b=R("div"),y=R("button"),y.textContent="Clear cache",v=L(),g=R("div"),$&&$.c(),M(c,"class","tooltip-multiline"),M(c,"data-tooltip",t[5]),M(r,"class","tooltip svelte-15yybge"),M(a,"class","wrapper svelte-15yybge"),M(n,"class","head svelte-15yybge"),M(f,"class","custombutton svelte-15yybge"),M(f,"type","button"),M(m,"class","custombutton svelte-15yybge"),M(m,"type","button"),M(u,"class","btnbox svelte-15yybge"),M(y,"class","custombutton svelte-15yybge"),M(y,"type","button"),M(b,"class","btnbox svelte-15yybge"),M(g,"class","chunkbox svelte-15yybge"),M(e,"class","main svelte-15yybge")},m(I,x){S(I,e,x),j(e,n),j(n,s),j(n,a),j(a,i),j(a,r),j(r,c),j(c,o),j(a,d),j(e,l),j(e,u),j(u,f),j(u,p),j(u,m),j(e,h),j(e,b),j(b,y),j(e,v),j(e,g),$&&$.m(g,null),_||(k=[E(f,"click",t[2]),E(m,"click",t[3]),E(y,"click",t[4])],_=!0)},p(t,[e]){t[0]?$?$.p(t,e):($=Cn(t),$.c(),$.m(g,null)):$&&($.d(1),$=null)},i:D,o:D,d(t){t&&T(e),$&&$.d(),_=!1,N(k)}}}function Pn(t,e,n){let{fshInv:s=0}=e
const i=new DataTable(s)
let r=0,c=0
async function d([t,e,s]){const a=await Dn(t,e,s)
return n(1,c+=1),a}async function l(t){const e=i.rows(Rn,t),s=[[(a=A(e.data())).filter(yn),pt,0],[a.filter(vn),pt,1],[a.filter(gn),_n,7],[a.filter(kn),pt,4]].flatMap($n)
var a
n(0,r=s.length),n(1,c=0)
const o=await tt(s.map(d))
e.every(Mn(o.flatMap(Ln))),i.draw()}const u=t=>{o("Inventory","Update Stats",t)}
!async function(t){const e=new DataTable(t)
await Nn(e),e.draw()}(s)
return t.$$set=t=>{"fshInv"in t&&n(6,s=t.fshInv)},[r,c,async function(){u("On page"),l({page:"current"})},function(){u("All"),l()},async function(){u("Clear cache"),await bt(`fsh_${a.subcmd}_cache`,[]),C(G("fshRefresh"))},"This allows you to update the stats of items. It is useful in cases where stats are missing or if you want accurate stats for forged items. It can be slow for large data sets. The results are cached and will be used automatically next time you visit this page. You will need to update again if these stats become stale. For example, if you forged or crafted an item, or if a guild store item has moved.",s]}class qn extends I{constructor(t){super(),x(this,t,Pn,An,w,{fshInv:6})}}function Gn(t){let e
return{c(){e=R("div")},m(t,n){S(t,e,n)},i:D,o:D,d(t){t&&T(e)}}}function Un(t){let e,n
return e=new hn({}),{c(){U(e.$$.fragment)},m(t,s){O(e,t,s),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function On(t){let e,n,s,i,r,c
const o=[Un,Gn],d=[]
return n="guildinvmgr"===a.subcmd?0:1,s=d[n]=o[n](t),r=new qn({props:{fshInv:t[0]}}),{c(){e=R("div"),s.c(),i=L(),U(r.$$.fragment),M(e,"class","container svelte-1tjz5ud")},m(t,s){S(t,e,s),d[n].m(e,null),j(e,i),O(r,e,null),c=!0},p(t,[e]){const n={}
1&e&&(n.fshInv=t[0]),r.$set(n)},i(t){c||(W(s),W(r.$$.fragment,t),c=!0)},o(t){F(s),F(r.$$.fragment,t),c=!1},d(t){t&&T(e),d[n].d(),B(r)}}}function Wn(t,e,n){let{fshInv:s=0}=e
return t.$$set=t=>{"fshInv"in t&&n(0,s=t.fshInv)},[s]}class Fn extends I{constructor(t){super(),x(this,t,Wn,On,w,{fshInv:0})}}function Bn(t){!function(t){new Fn({props:{fshInv:t},target:i()})}(t)}const Hn=()=>Ut().player_id?`<b>&nbsp;Inventory Manager</b> ${Ut().items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${Ut().items.length} items (maroon = in BP, blue=guild store)`
function Vn(){const t=Hn()
H("",i()),function(){if(!Pt())return
qt(n(G("pF"),Q({style:{textAlign:"center"}})))}(),V(i(),zt.replace("@@reportTitle@@",t))}function Qn(){Tt(Ut().items)&&Vn()}function Yn(){$("#fshMinLvl").val(ie().fshMinLvl),$("#fshMaxLvl").val(ie().fshMaxLvl)}const Jn=([,t])=>[t.id,t]
function Xn(t){et([Kt,dn,ln,un,fn,Qn,we,Yn])
const e=Ie()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",d(Se,t)),$(t).on("change","select.fshMoveItem",nn),rn(t),gt(t,an,Jt)}(e),$("#fshRefresh").on("click",t),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const n=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(n),n.on("click",d(Xt,t,e))}(e),Bn(e)}function Kn(t){Z("JS Perf","getInvMan"),Xn(t),z("JS Perf","getInvMan")}const Zn=()=>Object.getOwnPropertyNames(Ut()).length
async function zn(e){const n=[nt(),Qt()]
"guildinvmgr"===a.subcmd&&n.push(async function(){await t(!1),a.membrList=X(h(a.membrList).filter(Nt).map(Jn))}()),n.push(async function(){const t=await ht(`fsh_${a.subcmd}`)
ne={...it(Zt),...l(t,{})},se=u("showQuickDropLinks"),ae=u("showQuickSendLinks")}()),await tt(n),Zn()&&function(t){K(3,Kn,[t])}(e)}function ts(){!Y()&&i()&&("guildinvmgr"!==a.subcmd||r())&&(H(`<span id="fshInvMan"><img src = "${J}">&nbsp;Getting inventory data...</span>`,i()),zn(ts))}export{ts as default}
//# sourceMappingURL=inventory-hE8TdhWj.js.map
