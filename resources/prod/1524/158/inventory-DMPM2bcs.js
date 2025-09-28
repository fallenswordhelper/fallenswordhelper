import{g as t}from"./getMembrList-DhTWubx9.js"
import{f as e,ac as n,i as s,t as a,ax as i,a0 as r,bh as d,dl as c,dm as o,aB as l,p as u,cu as f,dn as p,s as h,c as m,bI as b,bZ as v,dp as y,az as g,da as k,dq as _,c3 as x,aa as I,cs as R,bJ as L,h as M,dr as w,$ as E,ae as S,bg as D,bk as N,aN as T,ao as j,x as q,z as G,B as A,C as P,E as B,L as C,N as O,bj as U,y as F,bw as W,I as H,aj as V,G as Q,J as Y,P as J,Q as z,aF as X,D as K,aE as Z,n as tt,d as et,a2 as nt,u as st,g as at,a3 as it,cy as rt,bo as dt}from"./calfSystem-CIuUjh4H.js"
import{e as ct}from"./executeAll-DIAWIge1.js"
import{l as ot}from"./loadDataTables-DXBOfBxz.js"
import{d as lt}from"./daLoadInventory-txdDwksF.js"
import{f as ut}from"./flattenItems-DkF2t92d.js"
import{c as ft}from"./createTable-BIzULC9U.js"
import{i as pt}from"./isSelected-BWnMzKlW.js"
import{d as ht,a as mt,m as bt}from"./dropItem-DR1RMM8e.js"
import{c as vt}from"./changeMinMax-Cwzcq-Cs.js"
import{c as yt}from"./chromeHandlers-pcc2saBX.js"
import{a as gt,e as kt,u as _t}from"./useItem-XI9x5qhd.js"
import{h as $t}from"./htmlResult-Cc7d59m8.js"
import{e as xt}from"./errorDialog-B4_TjdGG.js"
import{q as It,a as Rt}from"./queue-D1dz-f_k.js"
import{p as Lt,l as Mt}from"./lvlTests-DDQni82g.js"
import{d as wt}from"./daGsTake-hWqYxurl.js"
import"./dialog-DuiKsz8O.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Bk-KVFC4.js"
import"./InfoBoxFrom-BOMuQUn_.js"
import"./backpackOk-Tqyljaqd.js"
import"./takeItem-DZIoXPKq.js"
function Et([t]){return"lastUpdate"!==t}const St=({id:t,name:e})=>[t,e]
let Dt=""
function Nt(t,e){Dt||(Dt=e.message),Dt&&s(t,a("p",{className:"fshRed",textContent:Dt}))}let Tt={}
const jt=()=>Tt
async function qt(t){try{return await t()}catch(t){if(500!==t.jqXhr.status)throw t
Nt(u(),t)}}const Gt=t=>e=>{const n=t.find(t=>t.a===e.inv_id)
return{...e,...n?.n&&{item_name:n.n}}},At=t=>({...t,equipped:!0,folder_id:-2})
async function Pt(){const[t,s]=await r([qt(f),lt()]),a=t?.items??[],i=s?.r??{},c=i.equipment?.map(At)??[]
return((t,s,a)=>{return{folders:(i=t,n(i?.inventories)?e(i.inventories.filter(({id:t})=>-1!==t).map(St)):[]),items:s.map(Gt(a)),player_id:d()}
var i})(i,a,c.concat(ut(i)))}const Bt=t=>({...t,player:{id:-1}})
async function Ct(){const[t,e,n]=await r([qt(p),c(),o()]),s=t?.items??[],a=e?.r??[],i=n?.r??[]
return((t,e)=>({current_player_id:d(),items:t.map(Gt(e)),guild_id:l()}))(s,a.concat(i.map(Bt)))}async function Ot(){if("invmanagernew"===i.subcmd){const t=await Pt()
Tt=t}else if("guildinvmgr"===i.subcmd){const t=await Ct()
Tt=t}}const Ut=t=>{h("Inventory","Header",t)},Ft=t=>{h("Inventory","Datatable",t)}
function Wt(t,e){Ft("clearSearch"),e.val(""),$(t).DataTable().search("").draw()}function Ht(){jt().folders&&(jt().folders[-1]="Main")}const Vt={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},Qt='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1" min="0"><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999" min="0"></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',Yt={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},Jt={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
let zt={},Xt=0,Kt=0
const Zt=()=>zt
function te(t){return Jt[t]?Jt[t].abbr:""}function ee(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n),e.equipped&&t.classList.add("fshBold")}function ne(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function se(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${v(t.player_id,jt().player_id)}" mode="1" action="recall">GS</span>`}function ae(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function ie(t,e,n){return"display"===t?n(e):"GS"}function re(t,e){const n=function(t){return-1===t.player_id?4:ne(t)?7:1}(e),s=(a=jt().player_id,i=e.player_id,r=jt().guild_id,a||(-1!==i?i:r))
var a,i,r
let d=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(d=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${k}${t}" class="fshInvItem tip-dynamic ${_[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${s}">${t}</a>${d}`}const de=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==jt().current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===jt().current_player_id}(t),(t,e)=>e.c]]
function ce(t,e){const n=de.find(([e])=>e(t))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function oe(t){return v(t.folder_id,t.player_id)}function le(t){return i.membrList[t]?i.membrList[t].username:"???"}function ue(t,e){return t[0]-e[0]}function fe(t,e){return`<option value="${e[0]}"${pt(Number(e[0]),t)}>${e[1]}</option>`}const pe=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:re(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:oe,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":le(n.player_id)},display:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${x}${t.player_id}">${le(t.player_id)}</a>`}(n):n.equipped?"Worn":`<select class="fshMoveItem" data-inv="${n.inv_id}">${s=n.folder_id,a=jt().folders,I(a).sort(ue).map(m(fe,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":le(t.player_id)}(n):n.equipped?"Worn":jt().folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>R[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>Jt[t]?Jt[t].index:0,display:te,filter:te}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.floor(n.durability/n.max_durability*100)}},{title:"BP",data:oe,render:function(t,e,n){if(!n.folder_id&&n.player_id!==jt().current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:oe,render:function(t,e,n){return ne(n)?ie(e,n,se):function(t){return t.folder_id&&!t.bound}(n)?ie(e,n,ae):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const s=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t]
return 1===s?ce(n,{a:"wear",b:"Wear",c:"wearItem"}):2===s?ce(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function he(){return"player_id"in jt()}function me(){const t=function(){const t=ft({className:"hover fshXSmall",id:he()?"fshUserInv":"fshGuildInv"})
return s(u(),t),t}(),e=function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:pe,createdRow:ee,data:jt().items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)
return function(t){[[12,"current_player_id"in jt()],[17,he()&&Xt],[18,he()&&Kt]].forEach(([e,n])=>t.column(e).visible(n))}(e),t}function be(t){L(`fsh_${i.subcmd}`,t)}function ve(){M('table.fshInvFilter input[type="checkbox"]').forEach(t=>{t.checked=1===Zt().checkedElements[t.getAttribute("item")]}),be(Zt())}function ye(t){Ut("Select All"),Zt().checkedElements=Yt,ve(),$(t).DataTable().draw(!1)}function ge(t,e){Zt().fshMinLvl=t,Zt().fshMaxLvl=e,be(Zt())}function ke(t){$(t).DataTable().draw(!1)}function _e(t){Ut("changeLvls"),vt(ge,m(ke,t))}function $e(t){return Number(t[0])>=100}function xe(t,e){return t[e[0]]=e[1],t}function Ie(t){var e
Ut("Select None"),Zt().checkedElements=(e=Zt().checkedElements,I(e).filter($e).reduce(xe,{})),ve(),$(t).DataTable().draw()}function Re(t){Ut("Checkbox"),Zt().checkedElements={},M('table.fshInvFilter input[type="checkbox"][item]:checked').forEach(t=>{Zt().checkedElements[t.getAttribute("item")]=1}),be(Zt()),$(t).DataTable().draw(!1)}function Le(t){Ut("Defaults"),Zt().checkedElements=Vt.checkedElements,ve(),$(t).DataTable().draw(!1)}function Me(t){Ut("Reset levels"),Zt().fshMinLvl=Vt.fshMinLvl,Zt().fshMaxLvl=Vt.fshMaxLvl,be(Zt()),function(t){$("#fshMinLvl").val(Zt().fshMinLvl),$("#fshMaxLvl").val(Zt().fshMaxLvl),$(t).DataTable().draw(!1)}(t)}async function we(t){const e=await ht(t)
return gt(e)}function Ee(t){return w({subcmd2:"dostoreitems",items:t})}async function Se(t){const e=await S({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t})
return $t(e)}async function De(t){const e=await function(t){return E(Ee,Se,t)}(t)
return xt(e),gt(e)}function Ne(t,e){t.eq(e).empty()}function Te(t,e){if(1===e.r)return
const n=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(m(Ne,t))}($("td",n)),n.css("text-decoration","line-through")}async function je(t,e){D(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),function(t){t.empty().append(`<img src="${N}ui/misc/spinner.gif" width="11" height="11">`)}(e)
const n=await t()
n&&Te(e,n)}function qe(t,e){Ft("setName"),$(t).DataTable().search(e.attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Ge(t){Ft("takeItem"),je(m(Rt,t.attr("invid"),t.attr("action")),t)}function Ae(t){Ft("recallItem"),je(m(It,t.attr("invid"),t.attr("playerid"),t.attr("mode"),t.attr("action")),t)}function Pe(t,e,n,s){Ft(n),je(m(t,e),s)}function Be(t){Pe(De,[t.attr("invid")],"doStoreItem",t)}function Ce(t,e,n){Pe(t,n.attr("invid"),e,n)}const Oe=t=>Ce(_t,"doUseItem",t),Ue=t=>Ce(kt,"doWearItem",t)
function Fe(t,e,n){Pe(t,[n.data("inv")],e,n)}const We=t=>Fe(mt,"doDropItem",t),He=t=>Fe(we,"doSendItem",t)
function Ve(t,[e,n]){$(t).on("click",`span.${e}`,(t=>e=>t($(e.target)))(n))}function Qe(t){Ft("doMoveItem")
const e=$(t.target)
bt([e.data("inv")],e.val())}function Ye(t,e){$(e[0]).on("click",m(e[1],t))}const Je=t=>()=>{Ft(t)}
function ze(t){!function(t){[["#fshReset",Me],["#fshAll",ye],["#fshNone",Ie],["#fshDefault",Le]].forEach(m(Ye,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',m(Re,t)),function(t){[["dropItem",We],["recallItem",Ae],["sendItem",He],["setName",m(qe,t)],["storeItem",Be],["takeItem",Ge],["useItem",Oe],["wearItem",Ue]].forEach(m(Ve,t))}(t),function(t){["fshInvItem","fshMaroon","sorting"].forEach(e=>{$(t).on("click",`.${e}`,Je(e))})}(t)}let Xe=0
function Ke(t,e){return Mt(Xe,T(e[1]),Zt().fshMinLvl,Zt().fshMaxLvl)}function Ze(){Xe=[(t,e,n)=>0===n,...Lt],$.fn.dataTable.ext.search.push(Ke)}function tn(){$.fn.dataTable.ext.search.push((t,e,n,s)=>!Zt().checkedElements||Zt().checkedElements[s.type])}function en(){$.fn.dataTable.ext.search.push((t,e,n,s)=>!Zt().checkedElements?.[-1]||function(t){return Zt().checkedElements[-1]&&t.stats&&""!==t.stats.set_name}(s))}function nn(){$.fn.dataTable.ext.search.push((t,e,n,s)=>{const a=(parseInt(s.rarity,10)+100).toString()
return!Zt().checkedElements||Zt().checkedElements[a]})}function sn(t,e,n,s){e("toBp"),[...M(n),...M(s)].forEach(U)}function an(t,e,n){e("toGs"),M(n).forEach(U)}var rn=A('<div class="main svelte-17l9o62"><div class="head svelte-17l9o62">Recall all visible to</div> <div class="btnbox svelte-17l9o62"><button class="custombutton svelte-17l9o62" type="button">BP</button> <button class="custombutton svelte-17l9o62" type="button">GS</button></div></div>')
function dn(t,e){Y(e)||H(e,1)}j(["click"])
var cn=A('<span class="fshGreen">Recalled</span>'),on=A('<span class="fshSpinner"></span>'),ln=A('<button class="custombutton svelte-nq9151" type="button">BP</button>'),un=A('<div class="main svelte-nq9151"><div class="head svelte-nq9151">Recall repairable to</div> <div class="btnbox svelte-nq9151"><!></div> <div class="btnbox svelte-nq9151"> </div></div>')
j(["click"])
var fn=A("<!> <!>",1),pn=A("<div></div>"),hn=A('<div class="container svelte-lahil7"><!></div>')
function mn(t,e){q(e,!0)
let n=F(e,"fshInv",3,0)
var s=hn(),a=B(s),r=t=>{var e=fn(),s=K(e)
!function(t,e){q(e,!1)
const n=t=>{h("Inventory","Recall All",t)}
G()
var s=rn(),a=P(B(s),2),i=B(a)
i.__click=[sn,n,'span[action="take"]','span[mode="0"][action="recall"]'],P(i,2).__click=[an,n,'span[mode="1"][action="recall"]'],C(t,s),O()}(s,{}),function(t,e){q(e,!0)
let n=F(e,"fshInv",3,0),s=V(1),a=V(0)
const i=new DataTable(n()).rows((t,{durability:e,max_durability:n,player_id:s,rarity:a,type:i})=>e<n&&-1===s&&5!==a&&i<9),r=W(i.data())
function d(){return wt(r.map(({inv_id:t})=>t))}r.length&&H(s,0)
var c=un(),o=P(B(c),2),l=B(o),u=t=>{var e=X(),n=K(e)
Z(n,d,t=>{var e=on()
C(t,e)},t=>{var e=cn()
C(t,e)}),C(t,e)},f=t=>{var e=ln()
e.__click=[dn,a],J(()=>e.disabled=Y(s)),C(t,e)}
Q(l,t=>{Y(a)?t(u):t(f,!1)})
var p=P(o,2),h=B(p)
J(()=>z(h,`${r.length??""} items to repair`)),C(t,c),O()}(P(s,2),{get fshInv(){return n()}}),C(t,e)},d=t=>{var e=pn()
C(t,e)}
Q(a,t=>{"guildinvmgr"===i.subcmd?t(r):t(d,!1)}),C(t,s),O()}function bn(){if(!Dt)return
Nt(s(at("pF"),st({style:{textAlign:"center"}})))}function vn(){const t=jt().player_id?`<b>&nbsp;Inventory Manager</b> ${jt().items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${jt().items.length} items (maroon = in BP, blue=guild store)`
et("",u()),bn(),nt(u(),Qt.replace("@@reportTitle@@",t))}function yn(){n(jt().items)&&vn()}function gn(){$("#fshMinLvl").val(Zt().fshMinLvl),$("#fshMaxLvl").val(Zt().fshMaxLvl)}const kn=([,t])=>[t.id,t]
function _n(t){ct([Ht,Ze,tn,en,nn,yn,ve,gn])
const e=me()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",m(_e,t)),$(t).on("change","select.fshMoveItem",Qe),ze(t),yt(t,Je,Ft)}(e),$("#fshRefresh").on("click",t),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const n=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(n),n.on("click",m(Wt,t,e))}(e),function(t){tt(mn,{props:{fshInv:t},target:u()})}(e)}function $n(t){_n(t)}async function xn(n){const s=[ot(),Ot()]
"guildinvmgr"===i.subcmd&&s.push(async function(){await t(!1),i.membrList&&(i.membrList=e(I(i.membrList).filter(Et).map(kn)))}()),s.push(async function(){const t=await b(`fsh_${i.subcmd}`)
zt={...y(Vt),...v(t,{})},Xt=g("showQuickDropLinks"),Kt=g("showQuickSendLinks")}()),await r(s),Object.getOwnPropertyNames(jt()).length&&function(t){dt(3,$n,[t])}(n)}function In(){!it()&&u()&&("guildinvmgr"!==i.subcmd||l())&&(et(`<span id="fshInvMan"><img src = "${rt}">&nbsp;Getting inventory data...</span>`,u()),xn(In))}export{In as default}
//# sourceMappingURL=inventory-DMPM2bcs.js.map
