import{e}from"./executeAll-ef9da8be.js"
import{ad as t,l as n,g as a,a6 as r,i as o,c as s,v as l,o as i,aA as c,aB as u,E as f,aC as d,aD as m,aE as p,aF as h,y as g,b as v,af as b,aG as w,aH as k,aI as y,aJ as C,aK as L,ab as D,j as V,n as x,ax as A,q as S,aL as M,aM as H,D as N,aN as B,aO as q,aP as T,aQ as E,aR as G,aS as j,aT as P,aU as F,aV as R,aW as _,aX as I,ag as O,a5 as W,aY as Y,aZ as K,a_ as z,a as U,$ as Q,S as X,L as Z,M as J,aj as ee,R as te,Y as ne,Z as ae,N as re,a1 as oe,a$ as se,T as le,a2 as ie,O as ce,P as ue,b0 as fe,b1 as de,b2 as me,b3 as pe,b4 as he,b5 as ge,W as ve,b6 as be,s as we,b7 as ke,b8 as ye,b9 as Ce,ba as $e,bb as Le,bc as De,bd as Ve,be as xe,bf as Ae,bg as Se,bh as Me,bi as He,bj as Ne,bk as Be,bl as qe,bm as Te,bn as Ee,bo as Ge,bp as je,bq as Pe,br as Fe,bs as Re,bt as _e,bu as Ie,bv as Oe,bw as We,bx as Ye,by as Ke,bz as ze,bA as Ue,bB as Qe,bC as Xe,ae as Ze}from"./calfSystem-076d7a01.js"
import{i as Je}from"./insertElementAfter-95137ac3.js"
import{t as et}from"./toggleForce-6124e333.js"
import{c as tt}from"./createSpan-3211c164.js"
import{i as nt}from"./insertTextBeforeEnd-ccfaa0fb.js"
import{r as at,a as rt}from"./roundToString-b56b87fd.js"
import{a as ot}from"./addCommas-47d6aaa1.js"
import{d as st,q as lt}from"./quickbuffSuccess-afff6e32.js"
import{c as it}from"./createButton-3c4db002.js"
import{o as ct}from"./openQuickBuffById-6facec14.js"
import{c as ut}from"./createInput-ae593833.js"
import{c as ft}from"./createLabel-05544c87.js"
import{g as dt,s as mt}from"./idb-807cd422.js"
import{r as pt}from"./rnd-6f762303.js"
import{v as ht}from"./valueText-dd4862a9.js"
import{c as gt}from"./createStyle-817f1cf1.js"
import{h as vt,u as bt}from"./await_block-904981a0.js"
import{e as wt,u as kt,d as yt}from"./each-d53d627d.js"
import{u as Ct}from"./uniq-925a8764.js"
import{g as $t}from"./guild-2c117802.js"
import{c as Lt}from"./createTable-462c7a16.js"
import{g as Dt,t as Vt,a as xt}from"./getTitanString-4524f909.js"
import{n as At,a as St,s as Mt,r as Ht}from"./now-6f22aec9.js"
import{p as Nt}from"./padZ-e55b66a2.js"
import{f as Bt}from"./fshOpen-c0e91392.js"
import{c as qt}from"./chunk-cd03a005.js"
import{L as Tt}from"./LinkButton-9974bf66.js"
import{r as Et}from"./reduceBuffArray-e31428bc.js"
import{p as Gt}from"./profile-5e6aaa06.js"
import{a as jt}from"./all-414e0607.js"
import{n as Pt}from"./numberIsNaN-a40c3bbb.js"
import{r as Ft}from"./reliclist-79d53720.js"
import{d as Rt}from"./daGroupStats-c694971e.js"
import{d as _t,m as It}from"./mercEffect-5341b918.js"
import{d as Ot}from"./daViewGroups-326a7487.js"
import{a as Wt}from"./attribsToArray-33d6bcef.js"
import{g as Yt}from"./guildMembers-d716b976.js"
import{r as Kt}from"./remainingPages-9b4c19bf.js"
import{t as zt}from"./testQuant-69a26f83.js"
import{m as Ut}from"./myStats-ce4a0fe3.js"
import{s as Qt}from"./shouldBeArray-5c4f4d05.js"
import{h as Xt}from"./hideElement-baffa60f.js"
import{s as Zt,j as Jt}from"./simpleCheckbox-fd13ef54.js"
import{i as en}from"./isSelected-5d9f5edf.js"
import{b as tn}from"./bitwiseAnd-0aa6eeb8.js"
import"./getBuff-ab7330ac.js"
import"./buffObj-18893259.js"
import"./buffReportParser-8ae9fc1a.js"
import"./guildGroups-36ca67fe.js"
import"./view-79b0408c.js"
import"./intValue-e1798d0a.js"
import"./csvSplit-e532e3e9.js"
import"./isChecked-3968d2ec.js"
let nn=0
function an(e){return e}function rn(e){if(function(e){return t.showBuffInfo&&e.some(an)}(e))return function(){if(nn)et(nn,!1)
else{nn=n({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div>"})
const e=a("actionContainer")
Je(nn,e.children[2])}return nn}()
nn&&et(nn,!0)}function on(e,t,n,a){t&&(e.className=t),r(n,e)
const s=tt()
return o(e,s),nt(e,a),s}let sn=0,ln=0
function cn(e,t){sn?et(sn,!1):function(e){sn=e.children[3],ln=on(sn,"fshBlue","CA "," active")}(e),r(t.level,ln)}function un(e,t){t?cn(e,t):sn&&et(sn,!0)}let fn=0,dn=0
function mn(e,t){fn?et(fn,!1):function(e){fn=e.children[4],dn=on(fn,"fshRed","Doubler "," active")}(e),r(t.level,dn)}function pn(e,t){t?mn(e,t):fn&&et(fn,!0)}let hn=0,gn=0
function vn(e,t,n){hn?et(hn,!1):function(e){hn=e.children[2],gn=on(hn,"","Damage bonus: ","%")}(e),r(function(e,t){if(e){const n=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return at(n,2).toString()}return"0"}(t,Number(n)),gn)}function bn(e,t,n){t?vn(e,t,n):hn&&et(hn,!0)}let wn=0,kn=0
function yn(e,t){wn?et(wn,!1):function(e){wn=e.children[1],kn=on(wn,"","Kill Streak: ","")}(e),function(e,t){r(ot(e),t)}(t,kn)}function Cn(e,t,n,a){t||n?yn(e,a):wn&&et(wn,!0)}function $n(e,t){return t.name===e}function Ln(e){const{buffs:t}=GameData.player()
if(t)return t.find(s($n,e))}const Dn=["red","orange","yellow"]
let Vn=0,xn=0
async function An(){if(Ln("Summon Shield Imp"))return
!function(e){lt(e)&&GameData.fetch(u)}(await st([c()],[55]))}const Sn=["imp-0","imp-1","imp-1"]
function Mn(e,t){Vn?et(Vn,!1):function(e){[Vn]=e.children,r("Shield Imps Remaining: ",Vn),xn=tt(),o(Vn,xn),l(Vn,"&nbsp;")
const t=it({className:"xSmallLink",textContent:"Recast"})
o(Vn,t),i(t,An)}(e)
const n=function(e){return e?Number(e.stack):0}(t)
Vn.className=function(e){return Sn[e]||"fshGreen"}(n),r(n,xn)}function Hn(e,t,n){t||n?Mn(e,t):Vn&&et(Vn,!0)}function Nn(e){return 0===e.type}let Bn=0,qn=0,Tn=0,En=0,Gn=0,jn=0
function Pn(){Bn=Ln("Death Dealer"),qn=Ln("Doubler"),Tn=Ln("Counter Attack"),En=Ln("Summon Shield Imp"),Gn=function(){const{dynamic:e}=GameData.realm()
return f(e)&&e.some(Nn)}(),jn=GameData.player().killStreak}function Fn(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",Dn[e.text()]||"#ad8043")}(),Pn()
const e=rn([Bn,qn,Tn,En,Gn])
e&&(Hn(e,En,Bn),Cn(e,Bn,Gn,jn),bn(e,Bn,jn),un(e,Tn),pn(e,qn))}function Rn(e){return tt({textContent:e})}function _n(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function In(e,t,n){return ft({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:n})}function On(e){const t=n({className:"fshToggle"}),a=ut({checked:e.prefVal,id:e.checkId,type:"checkbox"})
o(t,a)
const r=In(e.onClass,e.onTip,e.checkId)
o(t,r)
const s=In(e.offClass,e.offTip,e.checkId)
return o(t,s),o(e.worldName,t),a}let Wn=0,Yn=0,Kn=0,zn=0,Un=0,Qn=0,Xn=0,Zn=0,Jn=0
const ea=e=>Rn(e?e.toString():"?")
function ta(e,t,a){const r=n({textContent:`${t} Lvl: `})
o(r,a),o(e,r)}function na(e,t,n){const a=it({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return o(n,a),a}function aa(e){!function(e){const t=n({className:"fshFsty"})
Yn=ea(GameData.realm().minlevel),ta(t,"Min",Yn),Kn=ea(GameData.player().level),ta(t,"Your",Kn),o(e,t)}(e),zn=na("fshFormGroup","Quick Create Attack Group",e),Un=na("fshQuickBuff","Open Quick Buff Popup",e),Qn=na("fshRealmMap","Open Realm Map",e),Xn=na("fshTempleOne","Search map in Ultimate FSG",e)}function ra(){aa(Wn),function(e){if(b("showSpeakerOnWorld")){const t=b("playNewMessageSound")
Zn=On({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(Wn),function(e){const n=t.huntingMode
Jn=On({prefVal:n,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(Wn)}const oa=[[()=>Zn,function(){D("playNewMessageSound",!b("playNewMessageSound"))}],[()=>Jn,function(){t.huntingMode=!t.huntingMode,D("huntingMode",t.huntingMode)}]],sa=[[()=>zn,function(e){w(e),GameData.doAction(12,401,{},0)}],[()=>Un,function(){ct(k())}],[()=>Qn,function(){window.open(`${y+C}map`,"fsMap")}],[()=>Xn,function(){const e=GameData.realm()
window.open(`${L}realms${C}view&realm_id=${e.id}`,"mapUfsg")}]]
function la(e,t){const{target:n}=t,[,a]=e.find((([e])=>e()===n))??[]
a&&(n.blur(),a(n))}function ia(e){return s(la,e)}function ca(){Wn||(Wn=n({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),ra(),i(Wn,ia(sa)),v(Wn,"change",ia(oa)),g(Wn,a("worldCoord")))}function ua(e,t){Yn&&t.b.minlevel&&(_n(),r(t.b.minlevel,Yn))}function fa(e,t){Kn&&r(t.b,Kn)}const da=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"],ma=`url("${M}ui/world/icon_action_attack_`
let pa=!1
function ha(e){return S(".verb.attack",e)}function ga(e){const t=da.indexOf(e.toUpperCase())
return V(`#actionList .actionListItem.creature.creature-${t}`)}function va(e){e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""}function ba(e,t){null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${ma}${t+1}.png")`)}function wa(e){const t=["LEGENDARY","NORMAL"].flatMap(ga),n=ga("CHAMPION"),[a,r]=e?[t,n]:[n,t]
a.map(ha).filter((e=>null!==e)).forEach(va),r.slice(0,8).map(ha).forEach(ba)}function ka(e){if(!e.altKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(pa||wa(!0),pa=!0,!/(?:Digit|Numpad)[1-8]/.test(e.code))return
const t=ga("CHAMPION"),n=parseInt(e.code.slice(-1),10)-1
n<t.length&&function(e){const t=ha(e)
t&&(x("world","ChampionAttack"),A(t))}(t[n])}function ya(e){!pa||e.ctrlKey&&e.shiftKey||(pa=!1,wa(!1))}const Ca=["Breaker","Protection","Master Thief","Protect Gold","Disarm","Duelist","Thievery","Master Blacksmith","Master Crafter","Fury Caster","Master Inventor","Sustain"]
let $a=[],La=0
function Da(e){54!==e.id&&26!==e.id||(La.player.buffs[e.id]=parseInt(e.level,10))}function Va(e){-1===Ca.indexOf(e.name)&&(La.player.enhancements[e.name]=e.value)}function xa(e){La={},La.combat=e.response.data,La.combat.inventory_id&&(La.combat.drop=La.combat.item.id),La.player={},La.player.buffs={},La.player.enhancements={},function(e){e.player.buffs&&e.player.buffs.forEach(Da)}(e),function(e){e.player.enhancements&&e.player.enhancements.forEach(Va)}(e),La.time=e.time,$a.push(La),mt("fsh_combatLog",$a)}function Aa(e,t){0===t.response.response&&xa(t)}function Sa(e){return!e||!e.response||!e.response.data}async function Ma(e){const t=await B({cache:!1,url:"fetchdata.php",data:{...e,fshrnd:pt()},dataType:"text"})
return q(t)??{response:{msg:"Server Error",response:1}}}const Ha=[]
const Na=(e,t)=>e===Number(t.response.data.id)
function Ba(e,t){e(t)}async function qa(e,t){const n=Ha.find(s(Na,e))
if(n)return function(e){return new Promise((t=>{T(3,Ba,[t,e])}))}(n)
const a=await Ma({a:1,d:0,id:e,passback:t})
return function(e){Sa(e)||Ha.push(e)}(a),a}let Ta=0,Ea=0,Ga=0,ja=0,Pa=0,Fa=0
const Ra=()=>Ta,_a=()=>Ea,Ia=()=>Ga,Oa=()=>ja,Wa=()=>Pa,Ya=()=>Fa
function Ka(e,t){return ht(E(t,e))}function za(){var e
Ta=GameData.player().level,e=a("statbar-character-tooltip-stats"),Ga=Ka(e,G),Ea=Ka(e,j),Pa=Ka(e,P),ja=Ka(e,F),Fa=Ka(e,R)}const Ua=e=>`<td>${e}:&nbsp;</td>`,Qa=e=>`<td width="40%">${e}</td>`
function Xa([e,t,n,a,r]){return[Ua(e),Qa(`${t} (your ${n}:<span class="${a}">${r()}</span>)`)]}function Za(e){return["<tr>",...e,"</tr>"].join("")}function Ja(e,t){return Za([...Xa(e),...Xa(t)])}const er='<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'
function tr(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function nr(e,t,n){return function(e){return`<table><tr><td><img src="${M}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return Za([Ua("Class"),Qa(e.creature_class),...Xa(["Level",e.level,"level",t,Ra])])}(e,n)+function(e){return Ja(["Attack",e.attack,"defense","fshYellow",_a],["Defense",e.defense,"attack","fshYellow",Ia])}(e)+function(e){return Ja(["Armor",e.armor,"damage","fshYellow",Oa],["Damage",e.damage,"armor","fshYellow",Wa])}(e)+function(e,t){return Za([Ua("HP"),Qa(`${e.hp} (your HP:<span class="fshYellow">${Ya()}</span>)(1H: <span class="fshRed">${t}</span>)`),Ua("Gold"),Qa(e.gold)])}(e,t)+er+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(tr).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function ar(e){if(!Sa(e))return function(e){const n=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let a="fshYellow"
return za(),Ra()>e.level&&(a="fshRed"),nr(e,n,a)}(e.response.data)}const rr=["verb","view","tip-static"]
async function or(e,t){const n=function(e){return _(e.parentNode.children).indexOf(e)}(e),a=await qa(GameData.actions()[n].data.id,n)
Sa(a)||function(e,t){const n=ar(t)
e.set("content.text",n)}(t,a)}function sr(e,t){x("NewMap","CreatureInfo"),e.classList.add("fshTip")
var n
const a=(n="Loading...",$(e).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:n},hide:{effect:!1}})).qtip("api")
a&&or(t,a)}function lr(e,t){return n=e,rr.every((e=>N(e,n)))&&!N("fshTip",e)&&N("creature",t)
var n}function ir(e){if(!t.showCreatureInfo)return
const{target:n}=e,a=n.parentNode.parentNode.parentNode
lr(n,a)&&sr(n,a)}function cr(e){return t.doNotKillList.includes(I(e))}function ur(e){e.classList.toggle("fshBlue",cr(W(e)))}function fr(){const e=a("actionList")
O("creature",e).forEach(ur)}function dr(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(cr(e))return a("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const mr={2:function(e){return function(t,n,a,r){dr(a.passback)||e(t,n,a,r)}}}
function pr(e){return function(t,n,a,r){const o=mr[t];(function(e){return e&&K(e)})(o)&&function(e){return Y(e)||0===e}(r)?o(e)(t,n,a,r):e(t,n,a,r)}}function hr(){return e={subcmd:"contrib"},U({cmd:"globalquests",...e})
var e}function gr(e){e[1]=e[2].r}function vr(e,t,n){const a=e.slice()
return a[3]=t[n].player,a[4]=t[n].value,a[6]=n,a}function br(e){let t,n,a=e[7].message+""
return{c(){t=re("p"),n=oe(a),se(t,"color","red")},m(e,a){te(e,t,a),le(t,n)},p(e,t){1&t&&a!==(a=e[7].message+"")&&ie(n,a)},d(e){e&&ae(t)}}}function wr(e){let t,n
function a(e,n){return 1&n&&(t=null),null==t&&(t=!!f(e[1])),t?yr:kr}gr(e)
let r=a(e,-1),o=r(e)
return{c(){o.c(),n=ee()},m(e,t){o.m(e,t),te(e,n,t)},p(e,t){gr(e),r===(r=a(e,t))&&o?o.p(e,t):(o.d(1),o=r(e),o&&(o.c(),o.m(n.parentNode,n)))},d(e){e&&ae(n),o.d(e)}}}function kr(e){let t
return{c(){t=oe("Server Error")},m(e,n){te(e,t,n)},p:ne,d(e){e&&ae(t)}}}function yr(e){let t,n,a,r=wt(e[1]),o=[]
for(let t=0;t<r.length;t+=1)o[t]=$r(vr(e,r,t))
return{c(){t=re("table"),n=re("tr"),n.innerHTML='<td class="header"></td> <td class="header"></td> <td class="header">Username</td> <td class="header">Kills</td>',a=ce()
for(let e=0;e<o.length;e+=1)o[e].c()
ue(n,"class","svelte-1p6satm"),ue(t,"id","world-event-contrib-table"),ue(t,"class","svelte-1p6satm")},m(e,r){te(e,t,r),le(t,n),le(t,a)
for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,null)},p(e,n){if(1&n){let a
for(r=wt(e[1]),a=0;a<r.length;a+=1){const s=vr(e,r,a)
o[a]?o[a].p(s,n):(o[a]=$r(s),o[a].c(),o[a].m(t,null))}for(;a<o.length;a+=1)o[a].d(1)
o.length=r.length}},d(e){e&&ae(t),fe(o,e)}}}function Cr(e){let t,n,a,r
return{c(){t=re("a"),n=re("img"),me(n.src,a=M+"guilds/"+e[3].guild_id+"_mini.png")||ue(n,"src",a),ue(n,"alt","guild logo"),ue(n,"class","svelte-1p6satm"),ue(t,"href",r=""+(pe+e[3].guild_id))},m(e,a){te(e,t,a),le(t,n)},p(e,o){1&o&&!me(n.src,a=M+"guilds/"+e[3].guild_id+"_mini.png")&&ue(n,"src",a),1&o&&r!==(r=""+(pe+e[3].guild_id))&&ue(t,"href",r)},d(e){e&&ae(t)}}}function $r(e){let t,n,a,r,o,s,l,i,c,u,f,d,m,p=e[3].name+"",h=e[4]+"",g=e[3].guild_id&&Cr(e)
return{c(){t=re("tr"),n=re("td"),n.textContent=`${e[6]+1}`,a=ce(),r=re("td"),g&&g.c(),o=ce(),s=re("td"),l=re("a"),i=oe(p),u=ce(),f=re("td"),d=oe(h),m=ce(),ue(l,"href",c=""+(de+e[3].name)),ue(t,"class","svelte-1p6satm")},m(e,c){te(e,t,c),le(t,n),le(t,a),le(t,r),g&&g.m(r,null),le(t,o),le(t,s),le(s,l),le(l,i),le(t,u),le(t,f),le(f,d),le(t,m)},p(e,t){e[3].guild_id?g?g.p(e,t):(g=Cr(e),g.c(),g.m(r,null)):g&&(g.d(1),g=null),1&t&&p!==(p=e[3].name+"")&&ie(i,p),1&t&&c!==(c=""+(de+e[3].name))&&ue(l,"href",c),1&t&&h!==(h=e[4]+"")&&ie(d,h)},d(e){e&&ae(t),g&&g.d()}}}function Lr(e){let t
return{c(){t=oe("Loading...")},m(e,n){te(e,t,n)},p:ne,d(e){e&&ae(t)}}}function Dr(e){let t,n,a={ctx:e,current:null,token:null,hasCatch:!0,pending:Lr,then:wr,catch:br,value:2,error:7}
return vt(n=e[0],a),{c(){t=ee(),a.block.c()},m(e,n){te(e,t,n),a.block.m(e,a.anchor=n),a.mount=()=>t.parentNode,a.anchor=t},p(t,[r]){e=t,a.ctx=e,1&r&&n!==(n=e[0])&&vt(n,a)||bt(a,e,r)},i:ne,o:ne,d(e){e&&ae(t),a.block.d(e),a.token=null,a=null}}}function Vr(e,t,n){let{promise:a}=t
return e.$$set=e=>{"promise"in e&&n(0,a=e.promise)},[a]}class xr extends X{constructor(e){super(),Z(this,e,Vr,Dr,J,{promise:0})}}let Ar=0
const Sr=()=>({promise:Q(hr)})
function Mr(){const e=a("world-event-contrib")
var t
t=e,Ar?Ar.$set(Sr()):Ar=new xr({props:Sr(),target:t}),$(e).dialog({title:"Top 100 Event Contributers",minWidth:300,height:300,zIndex:9999})}function Hr(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const Nr=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function Br(e,t){var n
b(e)&&(n=t+1,$.subscribe(z,s(Hr,n)),Hr(t+1))}function qr(e){e.remove()}function Tr(e,t){!function(e){(function(e){return e.response&&e.response.msg&&e.response.msg.startsWith("Creature did not exist at that location")})(e)&&GameData.fetch(he+ge)}(t),V(".creature-4 > .quickCombat > .verbs").forEach(qr)}function Er(e,t,n){const a=e.slice()
return a[10]=t[n].msg,a[11]=t[n].type,a[12]=t[n].count,a}function Gr(e){let t,n,a,r=e[12]+""
return{c(){t=re("div"),n=oe("x"),a=oe(r),ue(t,"class","count svelte-1leyf3b")},m(e,r){te(e,t,r),le(t,n),le(t,a)},p(e,t){1&t&&r!==(r=e[12]+"")&&ie(a,r)},d(e){e&&ae(t)}}}function jr(e,t){let n,a,r,o,s,l,i,c=t[10]+"",u=t[12]>1&&Gr(t)
function f(){return t[3](t[10])}return{key:e,first:null,c(){n=re("div"),a=oe(c),r=ce(),u&&u.c(),o=ce(),ue(n,"class",s="fsh-message "+t[11]+" svelte-1leyf3b"),this.first=n},m(e,t){te(e,n,t),le(n,a),le(n,r),u&&u.m(n,null),le(n,o),l||(i=ve(n,"click",f),l=!0)},p(e,r){t=e,1&r&&c!==(c=t[10]+"")&&ie(a,c),t[12]>1?u?u.p(t,r):(u=Gr(t),u.c(),u.m(n,o)):u&&(u.d(1),u=null),1&r&&s!==(s="fsh-message "+t[11]+" svelte-1leyf3b")&&ue(n,"class",s)},d(e){e&&ae(n),u&&u.d(),l=!1,i()}}}function Pr(e){let t,n=[],a=new Map,r=wt(e[1](e[0]))
const o=e=>e[10]
for(let t=0;t<r.length;t+=1){let s=Er(e,r,t),l=o(s)
a.set(l,n[t]=jr(l,s))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c()
t=ee()},m(e,a){for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,a)
te(e,t,a)},p(e,[s]){7&s&&(r=wt(e[1](e[0])),n=kt(n,s,o,1,e,r,a,t.parentNode,yt,jr,t,Er))},i:ne,o:ne,d(e){e&&ae(t)
for(let t=0;t<n.length;t+=1)n[t].d(e)}}}function Fr(e,t,n){const a=document.body.appendChild(document.createElement("iframe"))
window.requestAnimationFrame=a.contentWindow.requestAnimationFrame,window.cancelAnimationFrame=a.contentWindow.cancelAnimationFrame,a.hidden=!0
let r=[]
const o=window.$("#messageCenter").data().hcsWorldMessageCenter,s=function*(){for(let e=0;;e++)yield e}()
function l(){o._reposition()}function i(e){n(0,r=r.filter((({msg:t})=>t!==e))),l()}o._displayMessage=async function(e,t,a=3e3){const o=s.next().value
n(0,r=[...r,{msg:e,type:t,expire:o}]),setTimeout((()=>{n(0,r=r.filter((({expire:e})=>e!==o)))}),a),await be(),l()}
return[r,e=>Ct(e,"msg").map((({msg:t,type:n})=>({msg:t,type:n,count:e.filter((({msg:e})=>e===t)).length}))),i,e=>i(e)]}class Rr extends X{constructor(e){super(),Z(this,e,Fr,Pr,J,{})}}let _r=0
function Ir(e){_r[e.name]?_r[e.name].seen&&(_r[e.name].seen+=1):(_r[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,_r[e.name]))}function Or(e,t,n){return t?e(t,n):n}function Wr(e,t){const n=e||{}
return n.min=Or(Math.min,n.min,t),n.max=Or(Math.max,n.max,t),n}const Yr=["attack","armor","damage","defense","hp"]
function Kr(e,t,n){const a=Wr(t[n],Number(e[n]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[n],a)&&(t[n]=a)}function zr(e,t){e[t.name]=Wr(e[t.name],Number(t.value))}function Ur(e){_r||(_r={}),Ir(e),function(e,t){Yr.forEach(s(Kr,e,t))}(e,_r[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(s(zr,t.enhancements)))}(e,_r[e.name]),mt("fsh_monsterLog",_r)}async function Qr(){!function(e){_r=e||{}}(await dt("fsh_monsterLog"))}const Xr=[]
function Zr(e){var n
Sa(e)||(x("NewMap","MonsterLog"),n=e.response.data,t.showMonsterLog&&Ur(n))}function Jr(e,t){return e.id===t.id}async function eo(e,t){if(6!==e.type||function(e){if(Xr.find(s(Jr,e.data)))return!0
Xr.push(e.data)}(e))return
Zr(await qa(e.data.id,t))}function to(){t.showMonsterLog&&GameData.actions().forEach(eo)}let no=""
const ao=()=>no
function ro(){return $t({subcmd:"scouttower"})}function oo(e,[t,n,a]){const r=e.insertCell(-1)
return r.colSpan=t,a&&(r.className="header"),o(r,n()),r}function so(e,t,n){const a=e.insertRow(-1)
return n&&(a.className="fshBlue"),function(e,t){t.forEach(s(oo,e))}(a,t),a}function lo(e,t){so(e,t[0],t[1])}function io(e,t){t.forEach(s(lo,e))}let co=0,uo=0,fo=0,mo=0,po=0,ho=0,go=0,vo=0
const bo=()=>co,wo=()=>uo,ko=()=>fo,yo=()=>mo,Co=()=>po,$o=()=>ho,Lo=()=>go,Do=()=>vo
function Vo(){co=Rn("Current"),uo=Rn("Kills"),fo=Rn("Member"),mo=Rn("% of Total"),po=Rn("Status"),ho=Rn("Titan HP"),go=Rn("Total"),vo=Rn("Your Guild")}let xo=0,Ao=0,So=0,Mo=0,Ho=0,No=0,Bo=0,qo=0,To=0
const Eo=()=>xo,Go=()=>Ao,jo=()=>So,Po=()=>Mo,Fo=()=>Ho,Ro=()=>No,_o=()=>Bo,Io=()=>qo,Oo=()=>To
function Wo(){xo=tt({innerHTML:"&nbsp;"}),Ao=tt({innerHTML:"&nbsp;"}),So=tt(),Mo=tt(),Ho=tt(),No=tt(),Bo=tt(),qo=tt(),To=tt()}let Yo=0
const Ko=()=>Yo
function zo(){for(;Yo.rows.length>8;)Yo.deleteRow(8)}function Uo(){const e=tt()
return o(e,jo()),nt(e,"/"),o(e,Po()),e}function Qo(e){const t=tt()
return o(t,e),nt(t,"%"),t}let Xo=0,Zo=0,Jo=""
const es=()=>Zo,ts=()=>Jo
function ns(){Zo=null,Xo&&!N("fshHide",Xo)&&(et(Xo,!0),we("&nbsp;",xo),we("&nbsp;",Ao),r("",So),r("",Mo),r("",Ho),r("",No),r("",Bo),we("",qo),we("",To),zo())}function as(e){return 0===e.type&&(Zo=e.base_creature_id,Jo=`(${e.x},${e.y})`,!0)}function rs(){if(Xo)et(Xo,!1)
else{const e=a("actionContainer")
Xo=n({className:"fshActionBox titanInfo"}),Wo(),Yo=Lt({className:"fshCenter"}),Vo(),io(Yo,[[[[5,Eo,!0],[1,Go,!0]]],[[[2,$o,!0],[4,Do,!0]]],[[[2,Uo],[4,Fo]]],[[[2,bo,!0],[4,s(Qo,Ro())]],!0],[[[2,Lo,!0],[4,s(Qo,_o())]],!0],[[[2,Co,!0],[4,Io]],!0],[[[6,Oo]]],[[[2,ko,!0],[2,wo,!0],[2,yo,!0]]]]),o(Xo,Ko()),o(e,Xo)}}function os(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(At()+1e3*e)
return`${Nt(t.getHours())}:${Nt(t.getMinutes())} ${Nt(t.getDate())}/${ke[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function ss(e){return rt(xt(e.max_hp-e.current_hp,e.kills),2)}function ls(e){return rt(100*e.kills/e.max_hp,2)}function is(e){!function(e){[[Vt(e.creature.name),Eo],[ts(),Go],[e.current_hp,jo],[e.max_hp,Po],[e.kills,Fo],[ss(e),Ro],[ls(e),_o]].forEach((([e,t])=>r(e,t())))}(e),we(function(e){return Dt(e.kills,e.max_hp,e.current_hp)}(e),Io()),we(os(e.cooldown),Oo())}function cs(e,t){return[[[2,()=>Rn(t.player.name)],[2,()=>Rn(t.kills.toString())],[2,()=>Rn(`${rt(100*t.kills/e.kills,2)}%`)]]]}function us(e){return e.realm&&e.creature.base_id===es()&&e.realm===ao()}function fs(e){const t=e.find(us)
t&&(is(t),function(e){if(zo(),!e.contributors)return
const t=e.contributors.map(s(cs,e))
io(Ko(),t)}(t))}let ds=null
const ms=e=>e&&e.s&&f(e.r),ps=e=>t.showTitanInfo&&f(e)&&e.some(as)
async function hs(){!function(e,t){ms(t)&&(fs(t.r),ps(GameData.realm().dynamic)?ds=window.setTimeout(e,3e4):ns())}(hs,await Q(ro))}function gs(e){ds&&(window.clearTimeout(ds),ds=null),ps(e)?(rs(),hs()):ns()}function vs(e){var t
e.dynamic&&(t=e.name,no=t,gs(e.dynamic))}function bs(e,t){(function(e){return e.realm&&e.realm.name})(t)&&vs(t.realm)}function ws(e,t,n){const a=e.slice()
return a[5]=t[n],a[7]=n,a}function ks(e){let t,n=e[1](e[7])+""
return{c(){t=oe(n)},m(e,n){te(e,t,n)},p:ne,d(e){e&&ae(t)}}}function ys(e){let t,n,a,r
return n=new Tt({props:{$$slots:{default:[ks]},$$scope:{ctx:e}}}),n.$on("click",(function(...t){return e[3](e[5],e[7],...t)})),{c(){t=re("li"),Ae(n.$$.fragment),a=ce()},m(e,o){te(e,t,o),Se(n,t,null),le(t,a),r=!0},p(t,a){e=t
const r={}
256&a&&(r.$$scope={dirty:a,ctx:e}),n.$set(r)},i(e){r||($e(n.$$.fragment,e),r=!0)},o(e){Ve(n.$$.fragment,e),r=!1},d(e){e&&ae(t),Me(n)}}}function Cs(e){let t,n,a=wt(qt(16,e[0])),r=[]
for(let t=0;t<a.length;t+=1)r[t]=ys(ws(e,a,t))
const o=e=>Ve(r[e],1,1,(()=>{r[e]=null}))
return{c(){t=re("ul")
for(let e=0;e<r.length;e+=1)r[e].c()
ue(t,"class","svelte-1k3xw12")},m(e,a){te(e,t,a)
for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null)
n=!0},p(e,[n]){if(7&n){let s
for(a=wt(qt(16,e[0])),s=0;s<a.length;s+=1){const o=ws(e,a,s)
r[s]?(r[s].p(o,n),$e(r[s],1)):(r[s]=ys(o),r[s].c(),$e(r[s],1),r[s].m(t,null))}for(Le(),s=a.length;s<r.length;s+=1)o(s)
De()}},i(e){if(!n){for(let e=0;e<a.length;e+=1)$e(r[e])
n=!0}},o(e){r=r.filter(Boolean)
for(let e=0;e<r.length;e+=1)Ve(r[e])
n=!1},d(e){e&&ae(t),fe(r,e)}}}function $s(e,t,n){const a=xe()
let{members:r=[]}=t
const o=e=>`Buff ${He[e]} 16`
function s(e,t,n){n.target.blur(),Bt(`${Ne}&players=${e.join(",")}`,"fsQuickBuff",618,1e3,",scrollbars"),a("buffBatch",o(t))}return e.$$set=e=>{"members"in e&&n(0,r=e.members)},[r,o,s,(e,t,n)=>s(e,t,n)]}class Ls extends X{constructor(e){super(),Z(this,e,$s,Cs,J,{members:0})}}function Ds(e,t){return e>10*t||e<t?e:10*t}const Vs=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function xs(e,t,n){e[n[0]]=Number(t[n[1]])}const As=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function Ss(e,t,n){e[n[0]]=t[n[1]]||0}function Ms(e){if(!e)return
const t=Et(e._skills),n={}
return function(e,t){Vs.forEach(s(xs,e,t))}(n,e),function(e,t){As.forEach(s(Ss,e,t))}(n,t),n.superEliteSlayerMultiplier=at(.002*n.superEliteSlayerLevel,2),Pt(n.armorValue)&&function(e){e.attackValue=Ds(e.attackBonus,e.levelValue),e.defenseValue=Ds(e.defenseBonus,e.levelValue),e.armorValue=Ds(e.armorBonus,e.levelValue),e.damageValue=Ds(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(n),n}const Hs=qe(["statusStore","Done."])
let Ns=[]
const Bs=Be(Hs,((e,t)=>{const n=Ns.find((([t])=>t===e[0]))
n?[,n[1]]=e:Ns=[...Ns,e]
const a=Ns.find((([,e])=>"Done."!==e))
t(a?.[1]??"Done.")})),qs=qe(0)
const Ts=Be(qs,((e,t)=>{!async function(e,t){if(!e)return
Hs.set(["relicStore","Processing defending guild relics ... "])
const n=await Ft(e)
if(!n)return void Hs.set(["relicStore","AJAX Error"])
const a=n.r.relics.length,r=1===a?1.5:at(1-a/10,2)
t({noOfRelics:a,relicMultiplier:r,leadDefenderBonus:`${String(100*r)}%`}),Hs.set(["relicStore","Done."])}(e,t)})),Es=qe([])
const Gs=Be(Es,((e,t)=>{!async function(e,t){if(!e.length)return
Hs.set(["defendersStore","Processing defending group stats ... "])
const n=[]
await jt(e.map((async(e,a)=>{const r=await Gt(e)
n.push([a,Ms(r)]),t(n)}))),Hs.set(["defendersStore","Done."])}(e,t)})),js=Be(Gs,((e,t)=>{const n=e?.find((([e])=>0===e))
n&&t(n[1])})),Ps=(e,t,n)=>Math.ceil(n*(0===t?e:Te))
function Fs(e,t,[n,a]){return{armorValue:t.armorValue+Ps(e,n,a.armorValue),attackValue:t.attackValue+Ps(e,n,a.attackValue),damageValue:t.damageValue+Ps(e,n,a.damageValue),cloaked:t.cloaked+(a.cloakLevel?1:0),defenseValue:t.defenseValue+Ps(e,n,a.defenseValue),hpValue:t.hpValue+Ps(e,n,a.hpValue)}}const Rs=Be([Ts,Gs],(([e,t],n)=>{if(!e?.relicMultiplier||!t?.length)return
const a=t?.reduce(s(Fs,e.relicMultiplier),{armorValue:0,attackValue:0,damageValue:0,cloaked:0,defenseValue:0,hpValue:0})
n(a)})),_s=qe(0),Is=e=>e.members[0].name===GameData.player().username
async function Os(e,t){if(!e)return
Hs.set(["groupStore","Processing attacking group stats ... "])
const n=await async function(){const e=await Ot()
return e?.r?.find(Is)?.id}(),a=n&&await async function(e){const t=await Rt(e)
return Wt(t?.r?.attributes)}(n),r=a&&await async function(e){const t=await _t(),n=It(t)
return e?.map(((e,t)=>e-n[t]))}(a)
r&&t({attack:r[0],defense:r[1],armor:r[2],hp:r[3],damage:r[4]}),Hs.set(["groupStore","Done."])}const Ws=Be(_s,((e,t)=>{Os(e,t)})),Ys=(e,t,n)=>Math.ceil(e*Ee(t,0)*n),Ks=(e,t)=>Ys(e,t,.0025),zs=(e,t)=>Ys(e,t,.001),Us=zs,Qs=zs,Xs=zs,Zs=zs,Js=zs,el=(e,t)=>Math.ceil(e*(1+.001*Ee(t,0))),tl=(e,t)=>Math.ceil(e*(1-t*Ge)),nl=qe([]),al=Be(nl,((e,t)=>{e&&t(Et(e))})),rl=Be([al,Ws],(([e,t],n)=>{if(!e||!t)return
const a=el(t.defense,e.Constitution),r=Us(a,e.Fortitude),o=t.hp+r,s=Qs(o,e["Chi Strike"])
n({dmgWithChiStrike:t.damage+s,defWithConst:a,hpWithFortitude:o,nmv:Ks(t.attack,e["Nightmare Visage"]),sanctuary:Xs(t.armor,e.Sanctuary)})}))
const ol=Be([rl,js,Ws],(function([e,t,n],a){if(!e||!t||!n)return
const r=n.attack-e.nmv,o=Zs(r,t.flinchLevel),s=Js(e.dmgWithChiStrike,t.terrorizeLevel)
a({attack:r-o,defense:e.defWithConst+e.nmv,armor:n.armor+e.sanctuary,hp:e.hpWithFortitude,damage:e.dmgWithChiStrike-s})})),sl=Be([js,Rs],(([e,t],n)=>{if(!e||!t)return
const a=Ks(t.attackValue,e.nightmareVisageLevel),r=el(t.defenseValue,e.constitutionLevel),o=Us(r,e.fortitudeLevel),s=t.hpValue+o,l=Qs(s,e.chiStrikeLevel),i=t.damageValue+l
n({attackWithNmv:t.attackValue-a,chiStrike:e.chiStrikeLevel,cloak:e.cloakLevel?"Yes":"No",dmgWithChiStrike:i,defWithConst:r,hpWithFortitude:s,nmv:a,sanctuary:Xs(t.armorValue,e.sanctuaryLevel)})}))
const ll=Be([al,sl,Rs],(function([e,t,n],a){if(!e||!t||!n)return
const r=Zs(t.attackWithNmv,e.Flinch),o=t.defWithConst+t.nmv,s=Js(t.dmgWithChiStrike,e.Terrorize)
a({attack:t.attackWithNmv-r,dc225:tl(o,225),dc175:tl(o,175),defense:o,armor:n.armorValue+t.sanctuary,hp:t.hpWithFortitude,damage:t.dmgWithChiStrike-s})})),il=Be(Ts,((e,t)=>{t({noOfRelics:e?.noOfRelics??"",leadDefenderBonus:e?.leadDefenderBonus??""})})),cl=Be(js,((e,t)=>{if(!e)return t("")
e.cloakLevel?t("Yes"):t("No")})),ul=Be(Rs,((e,t)=>{t({armorValue:e?.armorValue??"",attackValue:e?.attackValue??"",damageValue:e?.damageValue??"",cloaked:e?.cloaked??"",defenseValue:e?.defenseValue??"",hpValue:e?.hpValue??""})})),fl=Be(Gs,((e,t)=>{t(e?.length??"")})),dl=Be(ll,((e,t)=>{t({attack:e?.attack??"",dc225:e?.dc225??"",dc175:e?.dc175??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""})})),ml=e=>({attack:e?.attack??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""}),pl=Be(Ws,((e,t)=>{t(ml(e))})),hl=Be(ol,((e,t)=>{t(ml(e))}))
function gl(e,t,n){const a=e.slice()
return a[6]=t[n].id,a[7]=t[n].username,a}function vl(e){let t,n,a,r,o=e[7]+""
return{c(){t=re("a"),n=oe(o),r=oe(" "),ue(t,"href",a=""+(je+e[6])),ue(t,"class","svelte-3priew")},m(e,a){te(e,t,a),le(t,n),te(e,r,a)},p(e,r){1&r&&o!==(o=e[7]+"")&&ie(n,o),1&r&&a!==(a=""+(je+e[6]))&&ue(t,"href",a)},d(e){e&&(ae(t),ae(r))}}}function bl(e){let t,n,a,r=(e[0].length||"")+"",o=wt(e[0]),s=[]
for(let t=0;t<o.length;t+=1)s[t]=vl(gl(e,o,t))
return{c(){t=oe(r),n=oe(" Offline guild members not at relic:\n"),a=re("div")
for(let e=0;e<s.length;e+=1)s[e].c()
ue(a,"class","missing svelte-3priew")},m(e,r){te(e,t,r),te(e,n,r),te(e,a,r)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(a,null)},p(e,[n]){if(1&n&&r!==(r=(e[0].length||"")+"")&&ie(t,r),1&n){let t
for(o=wt(e[0]),t=0;t<o.length;t+=1){const r=gl(e,o,t)
s[t]?s[t].p(r,n):(s[t]=vl(r),s[t].c(),s[t].m(a,null))}for(;t<s.length;t+=1)s[t].d(1)
s.length=o.length}},i:ne,o:ne,d(e){e&&(ae(t),ae(n),ae(a)),fe(s,e)}}}function wl(e,t,n){let{members:a=[]}=t,r=[]
const o=[({username:e})=>!a.includes(e),({last_login:e})=>e,({last_login:e})=>e<St(),({last_login:e})=>e>Mt(),({level:e})=>e<400||e>421,({level:e})=>e<441||e>450],s=e=>o.every((t=>t(e))),l=({username:e},{username:t})=>Pe(e,t)
return qs.subscribe((e=>{!async function(e){const t=await Yt(e)
f(t)&&n(0,r=t.filter(s).sort(l))}(e)})),e.$$set=e=>{"members"in e&&n(1,a=e.members)},[r,a]}class kl extends X{constructor(e){super(),Z(this,e,wl,bl,J,{members:1})}}function yl(e){let t,n,a
return n=new Ls({props:{members:e[10]}}),n.$on("buffBatch",e[11]),{c(){t=re("div"),Ae(n.$$.fragment),ue(t,"class","buff-links svelte-1qul0wc")},m(e,r){te(e,t,r),Se(n,t,null),a=!0},p:ne,i(e){a||($e(n.$$.fragment,e),a=!0)},o(e){Ve(n.$$.fragment,e),a=!1},d(e){e&&ae(t),Me(n)}}}function Cl(e){let t,n,a,r,o,s,l,i
return{c(){t=re("div"),t.textContent="Processing",n=ce(),a=re("div"),r=oe(e[2]),o=ce(),s=re("div"),s.textContent="Assumptions",l=ce(),i=re("div"),i.textContent="Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Sanctuary,\n        Terrorize and Flinch bonus calculations (in that order) on both the defending group and\n        attacking group.",ue(t,"class","b-top svelte-1qul0wc"),ue(a,"class","proc-stat svelte-1qul0wc"),ue(s,"class","b-top svelte-1qul0wc"),ue(i,"class","assume svelte-1qul0wc")},m(e,c){te(e,t,c),te(e,n,c),te(e,a,c),le(a,r),te(e,o,c),te(e,s,c),te(e,l,c),te(e,i,c)},p(e,t){4&t&&ie(r,e[2])},d(e){e&&(ae(t),ae(n),ae(a),ae(o),ae(s),ae(l),ae(i))}}}function $l(e){let t,n,a
return{c(){t=re("button"),t.textContent="Fetch Stats",ue(t,"class","custombutton"),ue(t,"type","button")},m(r,o){te(r,t,o),n||(a=ve(t,"click",e[12]),n=!0)},p:ne,d(e){e&&ae(t),n=!1,a()}}}function Ll(e){let t,n,a,r,o,s,l,i,c,u,f,d,m,p,h,g,v,b,w,k,y,C,$,L,D,V,x,A,S,M,H,N,B,q,T,E,G,j,P,F,R,_,I,O,W,Y,K,z,U,Q,X,Z,J,ee,ne,se,fe,de,me,pe,he,ge,ve,be,we,ke,ye,Ce,Le,De,xe,He,Ne,Be,qe,Te,Ee,Ge,je,Pe,Fe,Re,_e,Ie,Oe,We,Ye,Ke,ze,Ue,Qe,Xe,Ze,Je,et,tt,nt,at,rt,ot,st,lt,it,ct,ut,ft,dt,mt,pt,ht,gt,vt,bt,wt,kt,yt,Ct,$t,Lt,Dt,Vt,xt,At,St,Mt,Ht,Nt,Bt=e[3].noOfRelics+"",qt=e[3].leadDefenderBonus+"",Tt=e[5].attackValue+"",Et=e[6].attack+"",Gt=e[5].defenseValue+"",jt=e[6].defense+"",Pt=e[5].armorValue+"",Ft=e[6].armor+"",Rt=e[5].damageValue+"",_t=e[6].damage+"",It=e[5].hpValue+"",Ot=e[6].hp+"",Wt=e[5].cloaked+"",Yt=e[6].dc225+"",Kt=e[6].dc175+"",zt=e[8].attack+"",Ut=e[9].attack+"",Qt=e[8].defense+"",Xt=e[9].defense+"",Zt=e[8].armor+"",Jt=e[9].armor+"",en=e[8].damage+"",tn=e[9].damage+"",nn=e[8].hp+"",an=e[9].hp+""
return Ht=new kl({props:{members:e[10]}}),{c(){t=re("div"),n=re("div"),n.textContent="Defending Guild Stats",a=ce(),r=re("div"),o=re("div"),o.textContent="Relic Count:",s=re("div"),l=oe(Bt),i=ce(),c=re("div"),c.textContent="Lead Defender Bonus:",u=re("div"),f=oe(qt),d=ce(),m=re("div"),m.textContent="Lead Defender Cloaked:",p=re("div"),h=oe(e[4]),g=ce(),v=re("div"),v.textContent="Other Defender Stats",b=ce(),w=re("div"),k=re("div"),k.textContent="Raw Attack:",y=re("div"),C=oe(Tt),$=ce(),L=re("div"),L.textContent="Attack w/ buffs:",D=re("div"),V=oe(Et),x=ce(),A=re("div"),A.textContent="Raw Defense:",S=re("div"),M=oe(Gt),H=ce(),N=re("div"),N.textContent="Defense w/buffs:",B=re("div"),q=oe(jt),T=ce(),E=re("div"),E.textContent="Raw Armor:",G=re("div"),j=oe(Pt),P=ce(),F=re("div"),F.textContent="Armor w/ buffs:",R=re("div"),_=oe(Ft),I=ce(),O=re("div"),O.textContent="Raw Damage:",W=re("div"),Y=oe(Rt),K=ce(),z=re("div"),z.textContent="Damage w/ buffs:",U=re("div"),Q=oe(_t),X=ce(),Z=re("div"),Z.textContent="Raw HP:",J=re("div"),ee=oe(It),ne=ce(),se=re("div"),se.textContent="HP w/ buffs:",fe=re("div"),de=oe(Ot),me=ce(),pe=re("div"),pe.textContent="Cloaked:",he=re("div"),ge=oe(Wt),ve=ce(),be=re("div"),be.textContent="Processed:",we=re("div"),ke=oe(e[7]),ye=ce(),Ce=re("div"),Le=re("div"),Le.textContent="Adjusted Defense Values",De=ce(),xe=re("div"),He=re("div"),He.textContent="DC225:",Ne=re("div"),Be=oe(Yt),qe=ce(),Te=re("div"),Te.textContent="DC175:",Ee=re("div"),Ge=oe(Kt),je=ce(),Pe=re("div"),Pe.textContent=" ",Fe=ce(),Re=re("div"),Re.textContent="Attacking Group Stats",_e=ce(),Ie=re("div"),Oe=re("div"),Oe.textContent="Raw Group Attack:",We=re("div"),Ye=oe(zt),Ke=ce(),ze=re("div"),ze.textContent="Group Attack w/ buffs:",Ue=re("div"),Qe=oe(Ut),Xe=ce(),Ze=re("div"),Ze.textContent="Raw Group Defense:",Je=re("div"),et=oe(Qt),tt=ce(),nt=re("div"),nt.textContent="Group Defense w/ buffs:",at=re("div"),rt=oe(Xt),ot=ce(),st=re("div"),st.textContent="Raw Group Armor:",lt=re("div"),it=oe(Zt),ct=ce(),ut=re("div"),ut.textContent="Group Armor w/ buffs:",ft=re("div"),dt=oe(Jt),mt=ce(),pt=re("div"),pt.textContent="Raw Group Damage:",ht=re("div"),gt=oe(en),vt=ce(),bt=re("div"),bt.textContent="Group Damage w/ buffs:",wt=re("div"),kt=oe(tn),yt=ce(),Ct=re("div"),Ct.textContent="Raw Group HP:",$t=re("div"),Lt=oe(nn),Dt=ce(),Vt=re("div"),Vt.textContent="Group HP w/ buffs:",xt=re("div"),At=oe(an),St=ce(),Mt=re("div"),Ae(Ht.$$.fragment),ue(n,"class","b-top svelte-1qul0wc"),ue(o,"class","svelte-1qul0wc"),ue(s,"class","svelte-1qul0wc"),ue(c,"class","svelte-1qul0wc"),ue(u,"class","svelte-1qul0wc"),ue(m,"class","svelte-1qul0wc"),ue(p,"class","svelte-1qul0wc"),ue(r,"class","stat-grid svelte-1qul0wc"),ue(v,"class","b-top svelte-1qul0wc"),ue(k,"class","svelte-1qul0wc"),ue(y,"class","svelte-1qul0wc"),ue(L,"class","svelte-1qul0wc"),ue(D,"class","svelte-1qul0wc"),ue(A,"class","svelte-1qul0wc"),ue(S,"class","svelte-1qul0wc"),ue(N,"class","svelte-1qul0wc"),ue(B,"class","svelte-1qul0wc"),ue(E,"class","svelte-1qul0wc"),ue(G,"class","svelte-1qul0wc"),ue(F,"class","svelte-1qul0wc"),ue(R,"class","svelte-1qul0wc"),ue(O,"class","svelte-1qul0wc"),ue(W,"class","svelte-1qul0wc"),ue(z,"class","svelte-1qul0wc"),ue(U,"class","svelte-1qul0wc"),ue(Z,"class","svelte-1qul0wc"),ue(J,"class","svelte-1qul0wc"),ue(se,"class","svelte-1qul0wc"),ue(fe,"class","svelte-1qul0wc"),ue(pe,"class","svelte-1qul0wc"),ue(he,"class","svelte-1qul0wc"),ue(be,"class","svelte-1qul0wc"),ue(we,"class","svelte-1qul0wc"),ue(w,"class","stat-grid svelte-1qul0wc"),ue(t,"class","middle svelte-1qul0wc"),ue(Le,"class","b-top svelte-1qul0wc"),ue(He,"class","svelte-1qul0wc"),ue(Ne,"class","svelte-1qul0wc"),ue(Te,"class","svelte-1qul0wc"),ue(Ee,"class","svelte-1qul0wc"),ue(Pe,"class","svelte-1qul0wc"),ue(xe,"class","stat-grid svelte-1qul0wc"),ue(Re,"class","b-top svelte-1qul0wc"),ue(Oe,"class","svelte-1qul0wc"),ue(We,"class","svelte-1qul0wc"),ue(ze,"class","svelte-1qul0wc"),ue(Ue,"class","svelte-1qul0wc"),ue(Ze,"class","svelte-1qul0wc"),ue(Je,"class","svelte-1qul0wc"),ue(nt,"class","svelte-1qul0wc"),ue(at,"class","svelte-1qul0wc"),ue(st,"class","svelte-1qul0wc"),ue(lt,"class","svelte-1qul0wc"),ue(ut,"class","svelte-1qul0wc"),ue(ft,"class","svelte-1qul0wc"),ue(pt,"class","svelte-1qul0wc"),ue(ht,"class","svelte-1qul0wc"),ue(bt,"class","svelte-1qul0wc"),ue(wt,"class","svelte-1qul0wc"),ue(Ct,"class","svelte-1qul0wc"),ue($t,"class","svelte-1qul0wc"),ue(Vt,"class","svelte-1qul0wc"),ue(xt,"class","svelte-1qul0wc"),ue(Ie,"class","stat-grid svelte-1qul0wc"),ue(Ce,"class","right svelte-1qul0wc"),ue(Mt,"class","bottom b-top svelte-1qul0wc")},m(e,ae){te(e,t,ae),le(t,n),le(t,a),le(t,r),le(r,o),le(r,s),le(s,l),le(r,i),le(r,c),le(r,u),le(u,f),le(r,d),le(r,m),le(r,p),le(p,h),le(t,g),le(t,v),le(t,b),le(t,w),le(w,k),le(w,y),le(y,C),le(w,$),le(w,L),le(w,D),le(D,V),le(w,x),le(w,A),le(w,S),le(S,M),le(w,H),le(w,N),le(w,B),le(B,q),le(w,T),le(w,E),le(w,G),le(G,j),le(w,P),le(w,F),le(w,R),le(R,_),le(w,I),le(w,O),le(w,W),le(W,Y),le(w,K),le(w,z),le(w,U),le(U,Q),le(w,X),le(w,Z),le(w,J),le(J,ee),le(w,ne),le(w,se),le(w,fe),le(fe,de),le(w,me),le(w,pe),le(w,he),le(he,ge),le(w,ve),le(w,be),le(w,we),le(we,ke),te(e,ye,ae),te(e,Ce,ae),le(Ce,Le),le(Ce,De),le(Ce,xe),le(xe,He),le(xe,Ne),le(Ne,Be),le(xe,qe),le(xe,Te),le(xe,Ee),le(Ee,Ge),le(xe,je),le(xe,Pe),le(Ce,Fe),le(Ce,Re),le(Ce,_e),le(Ce,Ie),le(Ie,Oe),le(Ie,We),le(We,Ye),le(Ie,Ke),le(Ie,ze),le(Ie,Ue),le(Ue,Qe),le(Ie,Xe),le(Ie,Ze),le(Ie,Je),le(Je,et),le(Ie,tt),le(Ie,nt),le(Ie,at),le(at,rt),le(Ie,ot),le(Ie,st),le(Ie,lt),le(lt,it),le(Ie,ct),le(Ie,ut),le(Ie,ft),le(ft,dt),le(Ie,mt),le(Ie,pt),le(Ie,ht),le(ht,gt),le(Ie,vt),le(Ie,bt),le(Ie,wt),le(wt,kt),le(Ie,yt),le(Ie,Ct),le(Ie,$t),le($t,Lt),le(Ie,Dt),le(Ie,Vt),le(Ie,xt),le(xt,At),te(e,St,ae),te(e,Mt,ae),Se(Ht,Mt,null),Nt=!0},p(e,t){(!Nt||8&t)&&Bt!==(Bt=e[3].noOfRelics+"")&&ie(l,Bt),(!Nt||8&t)&&qt!==(qt=e[3].leadDefenderBonus+"")&&ie(f,qt),(!Nt||16&t)&&ie(h,e[4]),(!Nt||32&t)&&Tt!==(Tt=e[5].attackValue+"")&&ie(C,Tt),(!Nt||64&t)&&Et!==(Et=e[6].attack+"")&&ie(V,Et),(!Nt||32&t)&&Gt!==(Gt=e[5].defenseValue+"")&&ie(M,Gt),(!Nt||64&t)&&jt!==(jt=e[6].defense+"")&&ie(q,jt),(!Nt||32&t)&&Pt!==(Pt=e[5].armorValue+"")&&ie(j,Pt),(!Nt||64&t)&&Ft!==(Ft=e[6].armor+"")&&ie(_,Ft),(!Nt||32&t)&&Rt!==(Rt=e[5].damageValue+"")&&ie(Y,Rt),(!Nt||64&t)&&_t!==(_t=e[6].damage+"")&&ie(Q,_t),(!Nt||32&t)&&It!==(It=e[5].hpValue+"")&&ie(ee,It),(!Nt||64&t)&&Ot!==(Ot=e[6].hp+"")&&ie(de,Ot),(!Nt||32&t)&&Wt!==(Wt=e[5].cloaked+"")&&ie(ge,Wt),(!Nt||128&t)&&ie(ke,e[7]),(!Nt||64&t)&&Yt!==(Yt=e[6].dc225+"")&&ie(Be,Yt),(!Nt||64&t)&&Kt!==(Kt=e[6].dc175+"")&&ie(Ge,Kt),(!Nt||256&t)&&zt!==(zt=e[8].attack+"")&&ie(Ye,zt),(!Nt||512&t)&&Ut!==(Ut=e[9].attack+"")&&ie(Qe,Ut),(!Nt||256&t)&&Qt!==(Qt=e[8].defense+"")&&ie(et,Qt),(!Nt||512&t)&&Xt!==(Xt=e[9].defense+"")&&ie(rt,Xt),(!Nt||256&t)&&Zt!==(Zt=e[8].armor+"")&&ie(it,Zt),(!Nt||512&t)&&Jt!==(Jt=e[9].armor+"")&&ie(dt,Jt),(!Nt||256&t)&&en!==(en=e[8].damage+"")&&ie(gt,en),(!Nt||512&t)&&tn!==(tn=e[9].damage+"")&&ie(kt,tn),(!Nt||256&t)&&nn!==(nn=e[8].hp+"")&&ie(Lt,nn),(!Nt||512&t)&&an!==(an=e[9].hp+"")&&ie(At,an)},i(e){Nt||($e(Ht.$$.fragment,e),Nt=!0)},o(e){Ve(Ht.$$.fragment,e),Nt=!1},d(e){e&&(ae(t),ae(ye),ae(Ce),ae(St),ae(Mt)),Me(Ht)}}}function Dl(e){let t,n,a,r,o,s=e[0].is_owner&&yl(e)
function l(e,t){return e[1]?Cl:$l}let i=l(e),c=i(e),u=e[1]&&Ll(e)
return{c(){t=re("div"),n=re("div"),s&&s.c(),a=ce(),c.c(),r=ce(),u&&u.c(),ue(n,"class","left svelte-1qul0wc"),ue(t,"class","body svelte-1qul0wc")},m(e,l){te(e,t,l),le(t,n),s&&s.m(n,null),le(n,a),c.m(n,null),le(t,r),u&&u.m(t,null),o=!0},p(e,[r]){e[0].is_owner?s?(s.p(e,r),1&r&&$e(s,1)):(s=yl(e),s.c(),$e(s,1),s.m(n,a)):s&&(Le(),Ve(s,1,1,(()=>{s=null})),De()),i===(i=l(e))&&c?c.p(e,r):(c.d(1),c=i(e),c&&(c.c(),c.m(n,null))),e[1]?u?(u.p(e,r),2&r&&$e(u,1)):(u=Ll(e),u.c(),$e(u,1),u.m(t,null)):u&&(Le(),Ve(u,1,1,(()=>{u=null})),De())},i(e){o||($e(s),$e(u),o=!0)},o(e){Ve(s),Ve(u),o=!1},d(e){e&&ae(t),s&&s.d(),c.d(),u&&u.d()}}}function Vl(e,t,n){let a,r,o,s,l,i,c,u
Fe(e,Bs,(e=>n(2,a=e))),Fe(e,il,(e=>n(3,r=e))),Fe(e,cl,(e=>n(4,o=e))),Fe(e,ul,(e=>n(5,s=e))),Fe(e,dl,(e=>n(6,l=e))),Fe(e,fl,(e=>n(7,i=e))),Fe(e,pl,(e=>n(8,c=e))),Fe(e,hl,(e=>n(9,u=e)))
let{relicData:f={}}=t
const d=f.defenders.map((e=>e.player_name))
let m=!1
return Re((()=>{n(1,m=!1),qs.set(0),Es.set([]),_s.set(0),nl.set([])})),e.$$set=e=>{"relicData"in e&&n(0,f=e.relicData)},[f,m,a,r,o,s,l,i,c,u,d,function(e){x("relic",e.detail)},function(){x("relic","fetchStats"),n(1,m=!0),qs.set(f.controlled_by.guild_id),Es.set(d),_s.set(GameData.player().hasGroup),nl.set(GameData.player().buffs)}]}class xl extends X{constructor(e){super(),Z(this,e,Vl,Dl,J,{relicData:0})}}let Al=0
function Sl(e,t){var n,r
t?.response?.data?.defenders?.length>0&&(n=a("dialog-relic"),r=t.response.data,Al&&Al.$destroy(),Al=new xl({props:{relicData:r},target:n}))}function Ml(e,t){"ACT_REPAIR"===t&&GameData.fetch(Oe+u+he+ge)}let Hl=!1
function Nl(e,t,n,a,r,o,s,l,i){return e.beginPath(),e.arc(o+l/2,s+i/2,l/6,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.lineWidth=1,e.strokeStyle="black",e.stroke(),!0}function Bl(){if(!Hl){const e=GameController.Realm.footprintTexture
e.color=b("footprintColor"),e.Draw=Nl,Hl=!0}}function ql(){GameController?.Realm?.footprintTexture&&(Bl(),$.unsubscribe("fixed.realm",ql))}let Tl=0
function El(e){$("#statbar-gold").css("background-color",e)}function Gl(){$("#HelperSendTotal").html(ot(b("currentGoldSentTotal"))),Number(GameData.player().gold)>Tl?El("red"):El("inherit")}function jl(){Tl=b("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${b("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${ot(Tl)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${ot(b("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",Ke),Gl(),$.subscribe(ze,Gl)}let Pl=0,Fl=0,Rl=0,_l=0,Il=0,Ol=0
async function Wl(){const e=await Ma({a:14,d:0,id:Pl.id,item_id:Pl.itemId}),t=e.response.response,n=e.response.msg
let a=n
if(0!==t){const e=n.indexOf("<");-1!==e&&(a=n.substring(0,e))}else a=`You purchased ${e.response.data.name} for ${ot(e.response.data.cost)} gold.`
l(Ol,`${a}<br>`)}async function Yl(){const e=zt(Il.value)
e&&(await jt(Kt(e,Wl)),GameData.doAction(14,3,{id:Pl.id,item_id:Pl.itemId},0),Rl.close())}function Kl(){_l?r("",Ol):function(){_l=n({className:"fshClear",textContent:"Select how many to quick-buy:"}),Il=ut({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),o(_l,Il)
const e=it({textContent:"Quick-buy"})
i(e,Yl),o(_l,e),Ol=n(),o(_l,Ol),o(Fl,_l)}()}function zl(e,t){Pl=t,Fl=Fl||a("shopDialogConfirm"),Fl&&(Rl=Rl||$(Fl).data("hcsWorldDialogShopConfirm"),Rl&&Kl())}function Ul(e){let t,n
return{c(){t=re("div"),n=oe(e[0]),ue(t,"id","tp-overlay"),ue(t,"class","svelte-dcwx64")},m(e,a){te(e,t,a),le(t,n)},p(e,t){1&t&&ie(n,e[0])},d(e){e&&ae(t)}}}function Ql(e){let t,n=e[1]&&Ul(e)
return{c(){n&&n.c(),t=ee()},m(e,a){n&&n.m(e,a),te(e,t,a)},p(e,[a]){e[1]?n?n.p(e,a):(n=Ul(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:ne,o:ne,d(e){e&&ae(t),n&&n.d(e)}}}function Xl(e,t,n){let{tpButton:a}=t,r=0,o=0,s=!1
function l(){const e=GameData.player().teleportCooldown
n(0,r=e-Ht()+o),r>0||(clearInterval(s),n(1,s=!1),a.classList.remove("cooldown"))}return window.$.subscribe("stats.player",l),window.$.subscribe(Qe,(function(e,t){o=Ht(),l(),s||0!==t.response.response||n(1,s=setInterval((()=>{l()}),1e3))})),e.$$set=e=>{"tpButton"in e&&n(2,a=e.tpButton)},[r,s,a]}class Zl extends X{constructor(e){super(),Z(this,e,Xl,Ql,J,{tpButton:2})}}function Jl(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}function ei(e,t){return"-"===t?e:"-"===e||e>t?"-":e}const ti=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${Jl(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${Jl(e)}`]]
function ni(e,t){return t[0](e)}function ai(e){e.playerHits=ei(e.numberOfHitsRequired,e.numberOfCreatureHitsTillDead),e.creatureHits=ei(e.numberOfCreatureHitsTillDead,e.numberOfHitsRequired),e.fightStatus=function(e){const t=ti.find(s(ni,e))
return t?t[1](e):"Unknown"}(e)}function ri(e,t,n){return e.callback.groupExists?t:n}function oi(e,t,n,a){t>0&&(e.extraNotes+=`${n} = ${Math.floor(a*t*.001)}<br>`)}const si=e=>ri(e,e.callback.groupArmorValue,e.player.armorValue)
function li(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function ii(e){!function(e){const t=si(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}(e),function(e){oi(e,e.player.sanctuaryLevel,"Sanc Bonus Armor",e.player.armorValue)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),li(e)}const ci=e=>ri(e,e.callback.groupAttackValue,e.player.attackValue)
function ui(e){return Math.floor(e.creature.defense*e.player.darkCurseLevel*Ge)}function fi(e){const t=ci(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${ui(e)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-ui(e)
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}const di=(e,t,n)=>Math.max(Math.ceil((e-t+1)/n/.0025),0)
function mi(e){e.lowestCALevelToStillHit=di(e.counterAttackBonusAttack,e.hitByHowMuch,e.player.attackValue),e.lowestCALevelToStillKill=di(e.counterAttackBonusDamage,e.damageDone,e.player.damageValue)}function pi(e){mi(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function hi(e,t,n){e[t]>203?e.extraNotes+=`Even with CA203 you cannot ${n} this creature<br>`:0!==e[t]&&(e.extraNotes+=`You need a minimum of CA${e[t]} to ${n} this creature<br>`)}function gi(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&pi(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){mi(e),hi(e,"lowestCALevelToStillHit","hit"),hi(e,"lowestCALevelToStillKill","1-hit kill")}(e)}const vi=e=>ri(e,e.callback.groupHPValue,e.player.hpValue),bi=e=>ri(e,e.callback.groupDamageValue,e.player.damageValue)
function wi(e){if(function(e){const t=vi(e),{fortitudeLevel:n}=e.player
e.fortitudeExtraHPs=Math.floor(t*n*.001),n>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e),e.overallDamageValue=bi(e)+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage,e.damageDone=Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp)),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}const ki=e=>ri(e,e.callback.groupDefenseValue,e.player.defenseValue),yi=e=>Math.floor(ki(e)*e.player.constitutionLevel*.001)
const Ci=e=>e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue
function $i(e){e.overallDefenseValue=ki(e)+yi(e)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${yi(e)}<br>`)}(e),function(e){oi(e,e.player.flinchLevel,"Flinch Bonus Attack Reduction",e.creature.attack)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*Ci(e)),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(Ci(e)-50))}function Li(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}const Di=e=>e.creatureHitByHowMuch>=0?"Yes":"No",Vi=e=>e.hitByHowMuch>0?"Yes":"No",xi=e=>`<span style="color:#333333">${e}</span>`,Ai=e=>`<tr>${e}</tr>`,Si=(e,t)=>`<td${t%2?"":' class="fshRight"'}>${e}</td>`,Mi=e=>Ai(e.map(Si).join("")),Hi=e=>Ai(`<td bgcolor="#CD9E4B" colspan="4" align="center">${(e=>e.callback.groupExists?"Group ":"")(e)}Combat Evaluation</td>`),Ni=e=>Mi([xi("Will I hit it?"),Vi(e),xi("Extra Attack:"),`( ${e.hitByHowMuch} )`]),Bi=e=>Mi([xi("# Hits to kill it?"),e.numberOfHitsRequired,xi("Extra Damage:"),`( ${e.damageDone} )`]),qi=e=>Mi([xi("Will I be hit?"),Di(e),xi("Extra Defense:"),`( ${-1*e.creatureHitByHowMuch} )`]),Ti=e=>Mi([xi("# Hits to kill me?"),e.numberOfCreatureHitsTillDead,xi("Extra Armor + HP:"),`( ${-1*e.creatureDamageDone} )`]),Ei=e=>Mi([xi("# Player Hits?"),e.playerHits,xi("# Creature Hits?"),e.creatureHits]),Gi=e=>Ai(`${Si(xi("Fight Status:"),0)}<td colspan="3"><span>${e.fightStatus}</span></td>`),ji=e=>Ai(`${Si(xi("Notes:"),0)}<td colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td>`)
let Pi=0,Fi=0,Ri=0
function _i(){return cr(Fi)?"Remove from do not kill list":"Add to the do not kill list"}function Ii(){r(_i(),Ri)}function Oi(){const e=t.doNotKillList.indexOf(Fi);-1===e?t.doNotKillList.push(Fi):t.doNotKillList.splice(e,1),Ii(),D("doNotKillList",t.doNotKillList.join()),fr()}function Wi(){Ri?Ii():function(){Ri=it({className:"fshBl",textContent:_i()})
const e=n({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
o(e,Ri),o(Pi,e),i(Ri,Oi)}()}function Yi(e,t){!function(e){if(!Pi){const t=E("body",e)
1===t.length&&([Pi]=t)}}(t),Pi&&(Fi=I(e),Wi())}let Ki=0,zi=0,Ui=0,Qi=0
function Xi(){Ui||(zi||(zi=n(),o(Ki,zi),o(Ki,n({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Ui=n(),o(zi,Ui))}function Zi(e){Xi(),we(e,Ui)}function Ji(e){Qi||(Xi(),Qi=n(),o(zi,Qi)),we(e,Qi)}function ec(e,t){const n={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,n){3===n&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,n,e.type),n}function tc(e,n,a){const r={}
r.callback=a,r.player=Ms(n),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(r),r.creature=ec(e.response.data,r.player.superEliteSlayerMultiplier),function(e){var t
t=e,[Li,fi,wi,$i,ii,ai,gi].forEach((e=>e(t)))}(r),r.evaluatorHTML=function(e){return`<table width="100%"><tbody>${Hi(e)}${Ni(e)}${Bi(e)}${qi(e)}${Ti(e)}${Ei(e)}${Gi(e)}${ji(e)}</tbody></table>`}(r),a.groupExists?Ji(r.evaluatorHTML):Zi(r.evaluatorHTML)}function nc(e){return e.members[0].name===c()}async function ac(e,t,n){if(n){!function(e,t,n){if(!n.r||!n.r.attributes)return
const a=n.r.attributes
tc(e,t,{groupExists:!0,groupAttackValue:a[0].value,groupDefenseValue:a[1].value,groupArmorValue:a[2].value,groupDamageValue:a[3].value,groupHPValue:a[4].value})}(e,t,await Rt(n))}}async function rc(e,t){const n=function(e){if(f(e.r))return e.r.find(nc).id}(await Ot())
ac(e,t,n)}async function oc(e,t){if(Ki||(Ki=a("dialog-viewcreature")),Ki&&(Zi(""),Ji(""),t?.response?.data)){Yi(t.response.data.name,Ki)
const e=await Ut(!0)
e&&function(e,t){e.player.hasGroup&&rc(e,t),tc(e,t,{groupExists:!1})}(t,e)}}let sc=0
function lc(e){const t=E("verbs",e)
1===t.length&&Xt(t[0])}function ic(){if(!sc)return
const e=a("actionList")
O("player",e).forEach(lc)}const cc="showHuntingBuffs"
function uc(){return`${Zt(cc)} ${Jt("enabledHuntingMode")}<select name="enabledHuntingMode"><option value="1"${en(t.enabledHuntingMode,"1")}>${t.buffsName}</option><option value="2"${en(t.enabledHuntingMode,"2")}>${t.buffs2Name}</option><option value="3"${en(t.enabledHuntingMode,"3")}>${t.buffs3Name}</option></select>`}let fc=0,dc=""
const mc=()=>fc,pc=()=>dc
function hc(){const e=[null,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
f(e)&&([fc,dc]=e)}function gc(e){"enabledHuntingMode"===e.target.name&&(t.enabledHuntingMode=e.target.value,D("enabledHuntingMode",t.enabledHuntingMode),hc(),GameData.fetch(u))}function vc(e){t[e]=!t[e],D(e,t[e])}const bc={hideSubLvlCreature:function(){vc("hideSubLvlCreature"),GameData.fetch(ge)},hidePlayerActions:function(){sc=!sc,D("hidePlayerActions",sc),GameData.fetch(ge)},showCreatureInfo:()=>vc("showCreatureInfo"),showHuntingBuffs:function(){vc("showHuntingBuffs"),GameData.fetch(u)},showMonsterLog:()=>vc("showMonsterLog"),showTitanInfo:function(){vc("showTitanInfo"),gs(GameData.realm().dynamic)},showBuffInfo:function(){vc("showBuffInfo"),Fn()}}
function wc(e){const t=bc[e.target.name]
K(t)&&(e.target.blur(),t(e))}function kc(){const e=a("worldPage")
if(!e)return
const t=n({className:"fshCenter fshFten"}),r=n({id:"fshWorldPrefs",innerHTML:`${Zt("showCreatureInfo")}&nbsp;&nbsp;${Zt("showMonsterLog")}&nbsp;&nbsp;${Zt("showTitanInfo")}&nbsp;&nbsp;${Zt("showBuffInfo")}<br>${Zt("hideSubLvlCreature")}&nbsp;&nbsp;${Zt("hidePlayerActions")}&nbsp;&nbsp;${uc()}`})
i(r,wc),v(r,"change",gc),o(t,r)
const s=n()
return o(t,s),o(e,t),s}const yc=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function Cc(){var e
t.combatEvaluatorBias=b("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,yc[e]?yc[e].generalVariable:1.1053),t.hpVariable=function(e){return yc[e]?yc[e].hpVariable:1.1}(t.combatEvaluatorBias)}function $c(e,t){return e[t.name]=!0,e}function Lc(e,t,n){return e[I(n)]||t.push(n),t}function Dc(e){we("",e)}function Vc(e,t){const n=t.b.reduce($c,{}),a=mc().reduce(s(Lc,n),[])
a.length>0?function(e,t){we(`You are missing some ${pc()} hunting buffs<br>(${t.join(", ")})`,e)}(e,a):Dc(e)}function xc(e,n,a){mc()&&function(e,n){t.showHuntingBuffs?Vc(e,n):Dc(e)}(e,a)}function Ac(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function Sc(e){const t=q(e)
return function(e){return!e||!e.actions||0===e.actions.length}(t)?e:(t.actions=t.actions.filter(s(Ac,function(e){return e.realm&&e.realm.minlevel||GameData.realm().minlevel}(t))),Ze(t))}function Mc(e,n){t.hideSubLvlCreature&&function(e){return e.data&&e.data.d&&tn(e.data.d,ge)}(n)&&(e.dataFilter=Sc)}function Hc(e){t[e[0]]=Qt(e[1])}function Nc(e){t[e]=Qt(e)}function Bc(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Hc),["doNotKillList"].forEach(Nc)}function qc(e){t[e[0]]=b(e[1])}function Tc(e){t[e]=b(e)}function Ec(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showHuntingBuffs","showHuntingBuffs"]].forEach(qc),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(Tc)}const Gc=[function(){Cc(),Bc(),Ec()
const e=kc()
$.ajaxPrefilter("JSON",Mc),t.hideSubLvlCreature&&GameData.fetch(ge),function(e){hc()
const n=s(xc,e)
$.subscribe(d,n),t.showHuntingBuffs&&window.initialGameData&&n(null,{b:window.initialGameData.player.buffs})}(e),sc=b("hidePlayerActions"),$.subscribe(z,ic),ic()},function(){We(),Ye()&&jl()},function(){$.subscribe(Xe,oc)},function(){Nr.forEach(Br)},function(){b("enableCreatureColoring")&&o(document.body,gt("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(z,fr),fr(),function(){const e=GameData.doAction
GameData.doAction=pr(e)}()},function(){Qr(),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",to),to()},function(){$.subscribe(Ie,Ml)},async function(){if(b("keepLogs")){!function(e){e&&($a=e),$.subscribe(H,Aa)}(await dt("fsh_combatLog"))}},function(){window.initialGameData&&bs(0,window.initialGameData),$.subscribe(`${ye} ${Ce}`,bs)},function(){$.subscribe(Ue,zl)},function(){$.subscribe(_e,Sl)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){w("#mapTooltip")},function(){ca(),$.subscribe(p,ua),$.subscribe(h,fa)},function(){Fn(),$.subscribe(`${d} ${m}`,Fn)},function(){v(a("actionList"),"mouseover",ir)},function(){const{body:e}=document
v(e,"keydown",ka),v(e,"keyup",ya)},function(){const e=$("#world-event-badge")
e.length&&(e.off(),i(e[0],Mr))},function(){const e=S(".actionListHeaderButton.teleport")
!function(e,t){new Zl({target:e,props:t})}(e,{tpButton:e})},function(){var e
b("messageStack")&&(e=a("messageCenter"),new Rr({target:e}))},function(){GameController?.Realm?.footprintTexture?Bl():$.subscribe("fixed.realm",ql)}]
function jc(){e(Gc),t.userIsDev&&$.subscribe(H,Tr)}export{jc as default}
//# sourceMappingURL=newMap-ab4c3127.js.map
