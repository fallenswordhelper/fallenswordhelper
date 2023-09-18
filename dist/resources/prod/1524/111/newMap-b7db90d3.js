import{e}from"./executeAll-ef9da8be.js"
import{ac as t,l as a,g as n,a5 as r,i as o,c as s,v as l,o as i,ay as c,az as u,aA as f,aB as d,aC as m,aD as p,y as h,b as g,ae as v,aE as b,aF as w,aG as y,aH as k,aI as C,aa as L,j as V,n as D,aw as x,q as A,aJ as S,aK as M,D as N,aL as H,aM as B,aN as q,aO as T,aP as E,aQ as G,aR as j,aS as P,aT as F,aU as R,aV as _,af as O,a4 as I,aW as W,aX as Y,aY as K,a as z,$ as U,S as Q,K as X,L as J,ai as Z,Q as ee,X as te,Y as ae,M as ne,a0 as re,aZ as oe,R as se,a1 as le,N as ie,O as ce,a_ as ue,a$ as fe,b0 as de,b1 as me,V as pe,b2 as he,s as ge,b3 as ve,b4 as be,b5 as we,b6 as ye,b7 as ke,b8 as Ce,b9 as $e,ba as Le,bb as Ve,bc as De,bd as xe,be as Ae,bf as Se,bg as Me,bh as Ne,bi as He,bj as Be,bk as qe,bl as Te,bm as Ee,bn as Ge,bo as je,bp as Pe,bq as Fe,br as Re,bs as _e,bt as Oe,bu as Ie,bv as We,bw as Ye,bx as Ke,by as ze,bz as Ue,bA as Qe,ad as Xe}from"./calfSystem-abb16b0d.js"
import{i as Je}from"./insertElementAfter-33ec0427.js"
import{t as Ze}from"./toggleForce-6124e333.js"
import{c as et}from"./createSpan-b6e6b8c0.js"
import{i as tt}from"./insertTextBeforeEnd-8257e7ec.js"
import{r as at,a as nt}from"./roundToString-b56b87fd.js"
import{a as rt}from"./addCommas-47d6aaa1.js"
import{d as ot,q as st}from"./quickbuffSuccess-c82804d5.js"
import{c as lt}from"./createButton-f5aa29a3.js"
import{i as it}from"./isArray-09a53da7.js"
import{o as ct}from"./openQuickBuffById-d429c2bc.js"
import{c as ut}from"./createInput-c5f39cca.js"
import{c as ft}from"./createLabel-bcf82bdb.js"
import{g as dt,s as mt}from"./idb-e719862a.js"
import{r as pt}from"./rnd-6f762303.js"
import{v as ht}from"./valueText-fc266edc.js"
import{c as gt}from"./createStyle-deebe923.js"
import{h as vt,u as bt}from"./await_block-78969f55.js"
import{e as wt,u as yt,d as kt}from"./each-13c4feae.js"
import{u as Ct}from"./uniq-d915251c.js"
import{g as $t}from"./guild-9354fe8b.js"
import{c as Lt}from"./createTable-b4e2f7ef.js"
import{g as Vt,t as Dt,a as xt}from"./getTitanString-4524f909.js"
import{n as At,a as St,s as Mt,r as Nt}from"./now-6f22aec9.js"
import{p as Ht}from"./padZ-e55b66a2.js"
import{f as Bt}from"./fshOpen-c0e91392.js"
import{c as qt}from"./chunk-cd03a005.js"
import{L as Tt}from"./LinkButton-e3c794a4.js"
import{r as Et}from"./reduceBuffArray-e31428bc.js"
import{p as Gt}from"./profile-f1cc6452.js"
import{a as jt}from"./all-414e0607.js"
import{n as Pt}from"./numberIsNaN-a40c3bbb.js"
import{r as Ft}from"./reliclist-f69d569f.js"
import{d as Rt}from"./daGroupStats-b894135b.js"
import{d as _t,m as Ot}from"./mercEffect-5769876d.js"
import{d as It}from"./daViewGroups-0731448a.js"
import{a as Wt}from"./attribsToArray-193ed238.js"
import{g as Yt}from"./guildMembers-d914b75d.js"
import{r as Kt}from"./remainingPages-9b4c19bf.js"
import{t as zt}from"./testQuant-69a26f83.js"
import{m as Ut}from"./myStats-0c66109a.js"
import{s as Qt}from"./shouldBeArray-9bb1ec5d.js"
import{h as Xt}from"./hideElement-85f33001.js"
import{s as Jt,j as Zt}from"./simpleCheckbox-937a8f73.js"
import{i as ea}from"./isSelected-5d9f5edf.js"
import{b as ta}from"./bitwiseAnd-0aa6eeb8.js"
import"./buffReportParser-3cf92237.js"
import"./buffObj-18893259.js"
import"./guildGroups-37ac1668.js"
import"./view-20b71abb.js"
import"./intValue-e1798d0a.js"
import"./csvSplit-cb685270.js"
import"./isChecked-3968d2ec.js"
let aa=0
function na(e){return e}function ra(e){if(function(e){return t.showBuffInfo&&e.some(na)}(e))return function(){if(aa)Ze(aa,!1)
else{aa=a({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div>"})
const e=n("actionContainer")
Je(aa,e.children[2])}return aa}()
aa&&Ze(aa,!0)}function oa(e,t,a,n){t&&(e.className=t),r(a,e)
const s=et()
return o(e,s),tt(e,n),s}let sa=0,la=0
function ia(e,t){sa?Ze(sa,!1):function(e){sa=e.children[3],la=oa(sa,"fshBlue","CA "," active")}(e),r(t.level,la)}function ca(e,t){t?ia(e,t):sa&&Ze(sa,!0)}let ua=0,fa=0
function da(e,t){ua?Ze(ua,!1):function(e){ua=e.children[4],fa=oa(ua,"fshRed","Doubler "," active")}(e),r(t.level,fa)}function ma(e,t){t?da(e,t):ua&&Ze(ua,!0)}let pa=0,ha=0
function ga(e,t,a){pa?Ze(pa,!1):function(e){pa=e.children[2],ha=oa(pa,"","Damage bonus: ","%")}(e),r(function(e,t){if(e){const a=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return at(a,2).toString()}return"0"}(t,Number(a)),ha)}function va(e,t,a){t?ga(e,t,a):pa&&Ze(pa,!0)}let ba=0,wa=0
function ya(e,t){ba?Ze(ba,!1):function(e){ba=e.children[1],wa=oa(ba,"","Kill Streak: ","")}(e),function(e,t){r(rt(e),t)}(t,wa)}function ka(e,t,a,n){t||a?ya(e,n):ba&&Ze(ba,!0)}function Ca(e,t){return t.name===e}function $a(e){const{buffs:t}=GameData.player()
if(t)return t.find(s(Ca,e))}const La=["red","orange","yellow"]
let Va=0,Da=0
async function xa(){if($a("Summon Shield Imp"))return
!function(e){st(e)&&GameData.fetch(u)}(await ot([c()],[55]))}const Aa=["imp-0","imp-1","imp-1"]
function Sa(e,t){Va?Ze(Va,!1):function(e){[Va]=e.children,r("Shield Imps Remaining: ",Va),Da=et(),o(Va,Da),l(Va,"&nbsp;")
const t=lt({className:"xSmallLink",textContent:"Recast"})
o(Va,t),i(t,xa)}(e)
const a=function(e){return e?Number(e.stack):0}(t)
Va.className=function(e){return Aa[e]||"fshGreen"}(a),r(a,Da)}function Ma(e,t,a){t||a?Sa(e,t):Va&&Ze(Va,!0)}function Na(e){return 0===e.type}let Ha=0,Ba=0,qa=0,Ta=0,Ea=0,Ga=0
function ja(){Ha=$a("Death Dealer"),Ba=$a("Doubler"),qa=$a("Counter Attack"),Ta=$a("Summon Shield Imp"),Ea=function(){const{dynamic:e}=GameData.realm()
return it(e)&&e.some(Na)}(),Ga=GameData.player().killStreak}function Pa(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",La[e.text()]||"#ad8043")}(),ja()
const e=ra([Ha,Ba,qa,Ta,Ea])
e&&(Ma(e,Ta,Ha),ka(e,Ha,Ea,Ga),va(e,Ha,Ga),ca(e,qa),ma(e,Ba))}function Fa(e){return et({textContent:e})}function Ra(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function _a(e,t,a){return ft({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:a})}function Oa(e){const t=a({className:"fshToggle"}),n=ut({checked:e.prefVal,id:e.checkId,type:"checkbox"})
o(t,n)
const r=_a(e.onClass,e.onTip,e.checkId)
o(t,r)
const s=_a(e.offClass,e.offTip,e.checkId)
return o(t,s),o(e.worldName,t),n}let Ia=0,Wa=0,Ya=0,Ka=0,za=0,Ua=0,Qa=0,Xa=0,Ja=0
const Za=e=>Fa(e?e.toString():"?")
function en(e,t,n){const r=a({textContent:`${t} Lvl: `})
o(r,n),o(e,r)}function tn(e,t,a){const n=lt({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return o(a,n),n}function an(e){!function(e){const t=a({className:"fshFsty"})
Wa=Za(GameData.realm().minlevel),en(t,"Min",Wa),Ya=Za(GameData.player().level),en(t,"Your",Ya),o(e,t)}(e),Ka=tn("fshFormGroup","Quick Create Attack Group",e),za=tn("fshQuickBuff","Open Quick Buff Popup",e),Ua=tn("fshRealmMap","Open Realm Map",e),Qa=tn("fshTempleOne","Search map in Ultimate FSG",e)}function nn(){an(Ia),function(e){if(v("showSpeakerOnWorld")){const t=v("playNewMessageSound")
Xa=Oa({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(Ia),function(e){const a=t.huntingMode
Ja=Oa({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(Ia)}const rn=[[()=>Xa,function(){L("playNewMessageSound",!v("playNewMessageSound"))}],[()=>Ja,function(){t.huntingMode=!t.huntingMode,L("huntingMode",t.huntingMode)}]],on=[[()=>Ka,function(e){b(e),GameData.doAction(12,401,{},0)}],[()=>za,function(){ct(w())}],[()=>Ua,function(){window.open(`${y+k}map`,"fsMap")}],[()=>Qa,function(){const e=GameData.realm()
window.open(`${C}realms${k}view&realm_id=${e.id}`,"mapUfsg")}]]
function sn(e,t){const{target:a}=t,[,n]=e.find((([e])=>e()===a))??[]
n&&(a.blur(),n(a))}function ln(e){return s(sn,e)}function cn(){Ia||(Ia=a({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),nn(),i(Ia,ln(on)),g(Ia,"change",ln(rn)),h(Ia,n("worldCoord")))}function un(e,t){Wa&&t.b.minlevel&&(Ra(),r(t.b.minlevel,Wa))}function fn(e,t){Ya&&r(t.b,Ya)}const dn=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"],mn=`url("${S}ui/world/icon_action_attack_`
let pn=!1
function hn(e){return A(".verb.attack",e)}function gn(e){const t=dn.indexOf(e.toUpperCase())
return V(`#actionList .actionListItem.creature.creature-${t}`)}function vn(e){e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""}function bn(e,t){null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${mn}${t+1}.png")`)}function wn(e){const t=["LEGENDARY","NORMAL"].flatMap(gn),a=gn("CHAMPION"),[n,r]=e?[t,a]:[a,t]
n.map(hn).filter((e=>null!==e)).forEach(vn),r.slice(0,8).map(hn).forEach(bn)}function yn(e){if(!e.altKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(pn||wn(!0),pn=!0,!/(?:Digit|Numpad)[1-8]/.test(e.code))return
const t=gn("CHAMPION"),a=parseInt(e.code.slice(-1),10)-1
a<t.length&&function(e){const t=hn(e)
t&&(D("world","ChampionAttack"),x(t))}(t[a])}function kn(e){!pn||e.ctrlKey&&e.shiftKey||(pn=!1,wn(!1))}const Cn=["Breaker","Protection","Master Thief","Protect Gold","Disarm","Duelist","Thievery","Master Blacksmith","Master Crafter","Fury Caster","Master Inventor","Sustain"]
let $n=[],Ln=0
function Vn(e){54!==e.id&&26!==e.id||(Ln.player.buffs[e.id]=parseInt(e.level,10))}function Dn(e){-1===Cn.indexOf(e.name)&&(Ln.player.enhancements[e.name]=e.value)}function xn(e){Ln={},Ln.combat=e.response.data,Ln.combat.inventory_id&&(Ln.combat.drop=Ln.combat.item.id),Ln.player={},Ln.player.buffs={},Ln.player.enhancements={},function(e){e.player.buffs&&e.player.buffs.forEach(Vn)}(e),function(e){e.player.enhancements&&e.player.enhancements.forEach(Dn)}(e),Ln.time=e.time,$n.push(Ln),mt("fsh_combatLog",$n)}function An(e,t){0===t.response.response&&xn(t)}function Sn(e){return!e?.response?.data}async function Mn(e){const t=await H({cache:!1,url:"fetchdata.php",data:{...e,fshrnd:pt()},dataType:"text"})
return B(t)??{response:{msg:"Server Error",response:1}}}const Nn=[]
const Hn=(e,t)=>e===Number(t.response.data.id)
function Bn(e,t){e(t)}async function qn(e,t){const a=Nn.find(s(Hn,e))
if(a)return function(e){return new Promise((t=>{q(3,Bn,[t,e])}))}(a)
const n=await Mn({a:1,d:0,id:e,passback:t})
return function(e){Sn(e)||Nn.push(e)}(n),n}let Tn=0,En=0,Gn=0,jn=0,Pn=0,Fn=0
const Rn=()=>Tn,_n=()=>En,On=()=>Gn,In=()=>jn,Wn=()=>Pn,Yn=()=>Fn
function Kn(e,t){return ht(T(t,e))}function zn(){var e
Tn=GameData.player().level,e=n("statbar-character-tooltip-stats"),Gn=Kn(e,E),En=Kn(e,G),Pn=Kn(e,j),jn=Kn(e,P),Fn=Kn(e,F)}const Un=e=>`<td>${e}:&nbsp;</td>`,Qn=e=>`<td width="40%">${e}</td>`
function Xn([e,t,a,n,r]){return[Un(e),Qn(`${t} (your ${a}:<span class="${n}">${r()}</span>)`)]}function Jn(e){return["<tr>",...e,"</tr>"].join("")}function Zn(e,t){return Jn([...Xn(e),...Xn(t)])}const er='<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'
function tr(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function ar(e,t,a){return function(e){return`<table><tr><td><img src="${S}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return Jn([Un("Class"),Qn(e.creature_class),...Xn(["Level",e.level,"level",t,Rn])])}(e,a)+function(e){return Zn(["Attack",e.attack,"defense","fshYellow",_n],["Defense",e.defense,"attack","fshYellow",On])}(e)+function(e){return Zn(["Armor",e.armor,"damage","fshYellow",In],["Damage",e.damage,"armor","fshYellow",Wn])}(e)+function(e,t){return Jn([Un("HP"),Qn(`${e.hp} (your HP:<span class="fshYellow">${Yn()}</span>)(1H: <span class="fshRed">${t}</span>)`),Un("Gold"),Qn(e.gold)])}(e,t)+er+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(tr).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function nr(e){if(!Sn(e))return function(e){const a=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let n="fshYellow"
return zn(),Rn()>e.level&&(n="fshRed"),ar(e,a,n)}(e.response.data)}const rr=["verb","view","tip-static"]
async function or(e,t){const a=function(e){return R(e.parentNode.children).indexOf(e)}(e),n=await qn(GameData.actions()[a].data.id,a)
Sn(n)||function(e,t){const a=nr(t)
e.set("content.text",a)}(t,n)}function sr(e,t){D("NewMap","CreatureInfo"),e.classList.add("fshTip")
var a
const n=(a="Loading...",$(e).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:a},hide:{effect:!1}})).qtip("api")
n&&or(t,n)}function lr(e,t){return a=e,rr.every((e=>N(e,a)))&&!N("fshTip",e)&&N("creature",t)
var a}function ir(e){if(!t.showCreatureInfo)return
const{target:a}=e,n=a.parentNode.parentNode.parentNode
lr(a,n)&&sr(a,n)}function cr(e){return t.doNotKillList.includes(_(e))}function ur(e){e.classList.toggle("fshBlue",cr(I(e)))}function fr(){const e=n("actionList")
O("creature",e).forEach(ur)}function dr(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(cr(e))return n("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const mr={2:function(e){return function(t,a,n,r){dr(n.passback)||e(t,a,n,r)}}}
function pr(e){return function(t,a,n,r){const o=mr[t];(function(e){return e&&Y(e)})(o)&&function(e){return W(e)||0===e}(r)?o(e)(t,a,n,r):e(t,a,n,r)}}function hr(){return e={subcmd:"contrib"},z({cmd:"globalquests",...e})
var e}function gr(e){e[1]=e[2].r}function vr(e,t,a){const n=e.slice()
return n[3]=t[a].player,n[4]=t[a].value,n[6]=a,n}function br(e){let t,a,n=e[7].message+""
return{c(){t=ne("p"),a=re(n),oe(t,"color","red")},m(e,n){ee(e,t,n),se(t,a)},p(e,t){1&t&&n!==(n=e[7].message+"")&&le(a,n)},d(e){e&&ae(t)}}}function wr(e){let t,a
function n(e,a){return 1&a&&(t=null),null==t&&(t=!!it(e[1])),t?kr:yr}gr(e)
let r=n(e,-1),o=r(e)
return{c(){o.c(),a=Z()},m(e,t){o.m(e,t),ee(e,a,t)},p(e,t){gr(e),r===(r=n(e,t))&&o?o.p(e,t):(o.d(1),o=r(e),o&&(o.c(),o.m(a.parentNode,a)))},d(e){e&&ae(a),o.d(e)}}}function yr(e){let t
return{c(){t=re("Server Error")},m(e,a){ee(e,t,a)},p:te,d(e){e&&ae(t)}}}function kr(e){let t,a,n,r=wt(e[1]),o=[]
for(let t=0;t<r.length;t+=1)o[t]=$r(vr(e,r,t))
return{c(){t=ne("table"),a=ne("tr"),a.innerHTML='<td class="header"></td> <td class="header"></td> <td class="header">Username</td> <td class="header">Kills</td>',n=ie()
for(let e=0;e<o.length;e+=1)o[e].c()
ce(a,"class","svelte-1p6satm"),ce(t,"id","world-event-contrib-table"),ce(t,"class","svelte-1p6satm")},m(e,r){ee(e,t,r),se(t,a),se(t,n)
for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,null)},p(e,a){if(1&a){let n
for(r=wt(e[1]),n=0;n<r.length;n+=1){const s=vr(e,r,n)
o[n]?o[n].p(s,a):(o[n]=$r(s),o[n].c(),o[n].m(t,null))}for(;n<o.length;n+=1)o[n].d(1)
o.length=r.length}},d(e){e&&ae(t),ue(o,e)}}}function Cr(e){let t,a,n,r
return{c(){t=ne("a"),a=ne("img"),de(a.src,n=S+"guilds/"+e[3].guild_id+"_mini.png")||ce(a,"src",n),ce(a,"alt","guild logo"),ce(a,"class","svelte-1p6satm"),ce(t,"href",r=""+(me+e[3].guild_id))},m(e,n){ee(e,t,n),se(t,a)},p(e,o){1&o&&!de(a.src,n=S+"guilds/"+e[3].guild_id+"_mini.png")&&ce(a,"src",n),1&o&&r!==(r=""+(me+e[3].guild_id))&&ce(t,"href",r)},d(e){e&&ae(t)}}}function $r(e){let t,a,n,r,o,s,l,i,c,u,f,d,m,p=e[3].name+"",h=e[4]+"",g=e[3].guild_id&&Cr(e)
return{c(){t=ne("tr"),a=ne("td"),a.textContent=`${e[6]+1}`,n=ie(),r=ne("td"),g&&g.c(),o=ie(),s=ne("td"),l=ne("a"),i=re(p),u=ie(),f=ne("td"),d=re(h),m=ie(),ce(l,"href",c=""+(fe+e[3].name)),ce(t,"class","svelte-1p6satm")},m(e,c){ee(e,t,c),se(t,a),se(t,n),se(t,r),g&&g.m(r,null),se(t,o),se(t,s),se(s,l),se(l,i),se(t,u),se(t,f),se(f,d),se(t,m)},p(e,t){e[3].guild_id?g?g.p(e,t):(g=Cr(e),g.c(),g.m(r,null)):g&&(g.d(1),g=null),1&t&&p!==(p=e[3].name+"")&&le(i,p),1&t&&c!==(c=""+(fe+e[3].name))&&ce(l,"href",c),1&t&&h!==(h=e[4]+"")&&le(d,h)},d(e){e&&ae(t),g&&g.d()}}}function Lr(e){let t
return{c(){t=re("Loading...")},m(e,a){ee(e,t,a)},p:te,d(e){e&&ae(t)}}}function Vr(e){let t,a,n={ctx:e,current:null,token:null,hasCatch:!0,pending:Lr,then:wr,catch:br,value:2,error:7}
return vt(a=e[0],n),{c(){t=Z(),n.block.c()},m(e,a){ee(e,t,a),n.block.m(e,n.anchor=a),n.mount=()=>t.parentNode,n.anchor=t},p(t,[r]){e=t,n.ctx=e,1&r&&a!==(a=e[0])&&vt(a,n)||bt(n,e,r)},i:te,o:te,d(e){e&&ae(t),n.block.d(e),n.token=null,n=null}}}function Dr(e,t,a){let{promise:n}=t
return e.$$set=e=>{"promise"in e&&a(0,n=e.promise)},[n]}class xr extends Q{constructor(e){super(),X(this,e,Dr,Vr,J,{promise:0})}}let Ar=0
const Sr=()=>({promise:U(hr)})
function Mr(){const e=n("world-event-contrib")
var t
t=e,Ar?Ar.$set(Sr()):Ar=new xr({props:Sr(),target:t}),$(e).dialog({title:"Top 100 Event Contributers",minWidth:300,height:300,zIndex:9999})}function Nr(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const Hr=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function Br(e,t){var a
v(e)&&(a=t+1,$.subscribe(K,s(Nr,a)),Nr(t+1))}function qr(e,t,a){const n=e.slice()
return n[10]=t[a].msg,n[11]=t[a].type,n[12]=t[a].count,n}function Tr(e){let t,a,n,r=e[12]+""
return{c(){t=ne("div"),a=re("x"),n=re(r),ce(t,"class","count svelte-1leyf3b")},m(e,r){ee(e,t,r),se(t,a),se(t,n)},p(e,t){1&t&&r!==(r=e[12]+"")&&le(n,r)},d(e){e&&ae(t)}}}function Er(e,t){let a,n,r,o,s,l,i,c=t[10]+"",u=t[12]>1&&Tr(t)
function f(){return t[3](t[10])}return{key:e,first:null,c(){a=ne("div"),n=re(c),r=ie(),u&&u.c(),o=ie(),ce(a,"class",s="fsh-message "+t[11]+" svelte-1leyf3b"),this.first=a},m(e,t){ee(e,a,t),se(a,n),se(a,r),u&&u.m(a,null),se(a,o),l||(i=pe(a,"click",f),l=!0)},p(e,r){t=e,1&r&&c!==(c=t[10]+"")&&le(n,c),t[12]>1?u?u.p(t,r):(u=Tr(t),u.c(),u.m(a,o)):u&&(u.d(1),u=null),1&r&&s!==(s="fsh-message "+t[11]+" svelte-1leyf3b")&&ce(a,"class",s)},d(e){e&&ae(a),u&&u.d(),l=!1,i()}}}function Gr(e){let t,a=[],n=new Map,r=wt(e[1](e[0]))
const o=e=>e[10]
for(let t=0;t<r.length;t+=1){let s=qr(e,r,t),l=o(s)
n.set(l,a[t]=Er(l,s))}return{c(){for(let e=0;e<a.length;e+=1)a[e].c()
t=Z()},m(e,n){for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(e,n)
ee(e,t,n)},p(e,[s]){7&s&&(r=wt(e[1](e[0])),a=yt(a,s,o,1,e,r,n,t.parentNode,kt,Er,t,qr))},i:te,o:te,d(e){e&&ae(t)
for(let t=0;t<a.length;t+=1)a[t].d(e)}}}function jr(e,t,a){const n=document.body.appendChild(document.createElement("iframe"))
window.requestAnimationFrame=n.contentWindow.requestAnimationFrame,window.cancelAnimationFrame=n.contentWindow.cancelAnimationFrame,n.hidden=!0
let r=[]
const o=window.$("#messageCenter").data().hcsWorldMessageCenter,s=function*(){for(let e=0;;e++)yield e}()
function l(){o._reposition()}function i(e){a(0,r=r.filter((({msg:t})=>t!==e))),l()}o._displayMessage=async function(e,t,n=3e3){const o=s.next().value
a(0,r=[...r,{msg:e,type:t,expire:o}]),setTimeout((()=>{a(0,r=r.filter((({expire:e})=>e!==o)))}),n),await he(),l()}
return[r,e=>Ct(e,"msg").map((({msg:t,type:a})=>({msg:t,type:a,count:e.filter((({msg:e})=>e===t)).length}))),i,e=>i(e)]}class Pr extends Q{constructor(e){super(),X(this,e,jr,Gr,J,{})}}let Fr=0
function Rr(e){Fr[e.name]?Fr[e.name].seen&&(Fr[e.name].seen+=1):(Fr[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,Fr[e.name]))}function _r(e,t,a){return t?e(t,a):a}function Or(e,t){const a=e||{}
return a.min=_r(Math.min,a.min,t),a.max=_r(Math.max,a.max,t),a}const Ir=["attack","armor","damage","defense","hp"]
function Wr(e,t,a){const n=Or(t[a],Number(e[a]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[a],n)&&(t[a]=n)}function Yr(e,t){e[t.name]=Or(e[t.name],Number(t.value))}function Kr(e){Fr||(Fr={}),Rr(e),function(e,t){Ir.forEach(s(Wr,e,t))}(e,Fr[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(s(Yr,t.enhancements)))}(e,Fr[e.name]),mt("fsh_monsterLog",Fr)}async function zr(){!function(e){Fr=e||{}}(await dt("fsh_monsterLog"))}const Ur=[]
function Qr(e){var a
Sn(e)||(a=e.response.data,t.showMonsterLog&&Kr(a))}function Xr(e,t){return e.id===t.id}async function Jr(e,t){if(6!==e.type||function(e){if(Ur.find(s(Xr,e.data)))return!0
Ur.push(e.data)}(e))return
Qr(await qn(e.data.id,t))}function Zr(){t.showMonsterLog&&(GameData.actions().forEach(Jr),D("NewMap","MonsterLog"))}let eo=""
const to=()=>eo
function ao(){return $t({subcmd:"scouttower"})}function no(e,[t,a,n]){const r=e.insertCell(-1)
return r.colSpan=t,n&&(r.className="header"),o(r,a()),r}function ro(e,t,a){const n=e.insertRow(-1)
return a&&(n.className="fshBlue"),function(e,t){t.forEach(s(no,e))}(n,t),n}function oo(e,t){ro(e,t[0],t[1])}function so(e,t){t.forEach(s(oo,e))}let lo=0,io=0,co=0,uo=0,fo=0,mo=0,po=0,ho=0
const go=()=>lo,vo=()=>io,bo=()=>co,wo=()=>uo,yo=()=>fo,ko=()=>mo,Co=()=>po,$o=()=>ho
function Lo(){lo=Fa("Current"),io=Fa("Kills"),co=Fa("Member"),uo=Fa("% of Total"),fo=Fa("Status"),mo=Fa("Titan HP"),po=Fa("Total"),ho=Fa("Your Guild")}let Vo=0,Do=0,xo=0,Ao=0,So=0,Mo=0,No=0,Ho=0,Bo=0
const qo=()=>Vo,To=()=>Do,Eo=()=>xo,Go=()=>Ao,jo=()=>So,Po=()=>Mo,Fo=()=>No,Ro=()=>Ho,_o=()=>Bo
function Oo(){Vo=et({innerHTML:"&nbsp;"}),Do=et({innerHTML:"&nbsp;"}),xo=et(),Ao=et(),So=et(),Mo=et(),No=et(),Ho=et(),Bo=et()}let Io=0
const Wo=()=>Io
function Yo(){for(;Io.rows.length>8;)Io.deleteRow(8)}function Ko(){const e=et()
return o(e,Eo()),tt(e,"/"),o(e,Go()),e}function zo(e){const t=et()
return o(t,e),tt(t,"%"),t}let Uo=0,Qo=0,Xo=""
const Jo=()=>Qo,Zo=()=>Xo
function es(){Qo=null,Uo&&!N("fshHide",Uo)&&(Ze(Uo,!0),ge("&nbsp;",Vo),ge("&nbsp;",Do),r("",xo),r("",Ao),r("",So),r("",Mo),r("",No),ge("",Ho),ge("",Bo),Yo())}function ts(e){return 0===e.type&&(Qo=e.base_creature_id,Xo=`(${e.x},${e.y})`,!0)}function as(){if(Uo)Ze(Uo,!1)
else{const e=n("actionContainer")
Uo=a({className:"fshActionBox titanInfo"}),Oo(),Io=Lt({className:"fshCenter"}),Lo(),so(Io,[[[[5,qo,!0],[1,To,!0]]],[[[2,ko,!0],[4,$o,!0]]],[[[2,Ko],[4,jo]]],[[[2,go,!0],[4,s(zo,Po())]],!0],[[[2,Co,!0],[4,s(zo,Fo())]],!0],[[[2,yo,!0],[4,Ro]],!0],[[[6,_o]]],[[[2,bo,!0],[2,vo,!0],[2,wo,!0]]]]),o(Uo,Wo()),o(e,Uo)}}function ns(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(At()+1e3*e)
return`${Ht(t.getHours())}:${Ht(t.getMinutes())} ${Ht(t.getDate())}/${ve[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function rs(e){return nt(xt(e.max_hp-e.current_hp,e.kills),2)}function os(e){return nt(100*e.kills/e.max_hp,2)}function ss(e){!function(e){[[Dt(e.creature.name),qo],[Zo(),To],[e.current_hp,Eo],[e.max_hp,Go],[e.kills,jo],[rs(e),Po],[os(e),Fo]].forEach((([e,t])=>r(e,t())))}(e),ge(function(e){return Vt(e.kills,e.max_hp,e.current_hp)}(e),Ro()),ge(ns(e.cooldown),_o())}function ls(e,t){return[[[2,()=>Fa(t.player.name)],[2,()=>Fa(t.kills.toString())],[2,()=>Fa(`${nt(100*t.kills/e.kills,2)}%`)]]]}function is(e){return e.realm&&e.creature.base_id===Jo()&&e.realm===to()}function cs(e){const t=e.find(is)
t&&(ss(t),function(e){if(Yo(),!e.contributors)return
const t=e.contributors.map(s(ls,e))
so(Wo(),t)}(t))}let us=null
const fs=e=>e?.s&&it(e.r),ds=e=>t.showTitanInfo&&it(e)&&e.some(ts)
async function ms(){!function(e,t){fs(t)&&(cs(t.r),ds(GameData.realm().dynamic)?us=window.setTimeout(e,3e4):es())}(ms,await U(ao))}function ps(e){us&&(window.clearTimeout(us),us=null),ds(e)?(as(),ms()):es()}function hs(e){var t
e.dynamic&&(t=e.name,eo=t,ps(e.dynamic))}function gs(e,t){t.realm?.name&&hs(t.realm)}function vs(e,t,a){const n=e.slice()
return n[5]=t[a],n[7]=a,n}function bs(e){let t,a=e[1](e[7])+""
return{c(){t=re(a)},m(e,a){ee(e,t,a)},p:te,d(e){e&&ae(t)}}}function ws(e){let t,a,n,r
return a=new Tt({props:{$$slots:{default:[bs]},$$scope:{ctx:e}}}),a.$on("click",(function(...t){return e[3](e[5],e[7],...t)})),{c(){t=ne("li"),Ve(a.$$.fragment),n=ie()},m(e,o){ee(e,t,o),De(a,t,null),se(t,n),r=!0},p(t,n){e=t
const r={}
256&n&&(r.$$scope={dirty:n,ctx:e}),a.$set(r)},i(e){r||(ye(a.$$.fragment,e),r=!0)},o(e){$e(a.$$.fragment,e),r=!1},d(e){e&&ae(t),xe(a)}}}function ys(e){let t,a,n=wt(qt(16,e[0])),r=[]
for(let t=0;t<n.length;t+=1)r[t]=ws(vs(e,n,t))
const o=e=>$e(r[e],1,1,(()=>{r[e]=null}))
return{c(){t=ne("ul")
for(let e=0;e<r.length;e+=1)r[e].c()
ce(t,"class","svelte-1k3xw12")},m(e,n){ee(e,t,n)
for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null)
a=!0},p(e,[a]){if(7&a){let s
for(n=wt(qt(16,e[0])),s=0;s<n.length;s+=1){const o=vs(e,n,s)
r[s]?(r[s].p(o,a),ye(r[s],1)):(r[s]=ws(o),r[s].c(),ye(r[s],1),r[s].m(t,null))}for(ke(),s=n.length;s<r.length;s+=1)o(s)
Ce()}},i(e){if(!a){for(let e=0;e<n.length;e+=1)ye(r[e])
a=!0}},o(e){r=r.filter(Boolean)
for(let e=0;e<r.length;e+=1)$e(r[e])
a=!1},d(e){e&&ae(t),ue(r,e)}}}function ks(e,t,a){const n=Le()
let{members:r=[]}=t
const o=e=>`Buff ${Ae[e]} 16`
function s(e,t,a){a.target.blur(),Bt(`${Se}&players=${e.join(",")}`,"fsQuickBuff",618,1e3,",scrollbars"),n("buffBatch",o(t))}return e.$$set=e=>{"members"in e&&a(0,r=e.members)},[r,o,s,(e,t,a)=>s(e,t,a)]}class Cs extends Q{constructor(e){super(),X(this,e,ks,ys,J,{members:0})}}function $s(e,t){return e>10*t||e<t?e:10*t}const Ls=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function Vs(e,t,a){e[a[0]]=Number(t[a[1]])}const Ds=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function xs(e,t,a){e[a[0]]=t[a[1]]||0}function As(e){if(!e)return
const t=Et(e._skills),a={}
return function(e,t){Ls.forEach(s(Vs,e,t))}(a,e),function(e,t){Ds.forEach(s(xs,e,t))}(a,t),a.superEliteSlayerMultiplier=at(.002*a.superEliteSlayerLevel,2),Pt(a.armorValue)&&function(e){e.attackValue=$s(e.attackBonus,e.levelValue),e.defenseValue=$s(e.defenseBonus,e.levelValue),e.armorValue=$s(e.armorBonus,e.levelValue),e.damageValue=$s(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(a),a}const Ss=Ne(["statusStore","Done."])
let Ms=[]
const Ns=Me(Ss,((e,t)=>{const a=Ms.find((([t])=>t===e[0]))
a?[,a[1]]=e:Ms=[...Ms,e]
const n=Ms.find((([,e])=>"Done."!==e))
t(n?.[1]??"Done.")})),Hs=Ne(0)
const Bs=Me(Hs,((e,t)=>{!async function(e,t){if(!e)return
Ss.set(["relicStore","Processing defending guild relics ... "])
const a=await Ft(e)
if(!a)return void Ss.set(["relicStore","AJAX Error"])
const n=a.r.relics.length,r=1===n?1.5:at(1-n/10,2)
t({noOfRelics:n,relicMultiplier:r,leadDefenderBonus:`${String(100*r)}%`}),Ss.set(["relicStore","Done."])}(e,t)})),qs=Ne([])
const Ts=Me(qs,((e,t)=>{!async function(e,t){if(!e.length)return
Ss.set(["defendersStore","Processing defending group stats ... "])
const a=[]
await jt(e.map((async(e,n)=>{const r=await Gt(e)
a.push([n,As(r)]),t(a)}))),Ss.set(["defendersStore","Done."])}(e,t)})),Es=Me(Ts,((e,t)=>{const a=e?.find((([e])=>0===e))
a&&t(a[1])})),Gs=(e,t,a)=>Math.ceil(a*(0===t?e:He))
function js(e,t,[a,n]){return{armorValue:t.armorValue+Gs(e,a,n.armorValue),attackValue:t.attackValue+Gs(e,a,n.attackValue),damageValue:t.damageValue+Gs(e,a,n.damageValue),cloaked:t.cloaked+(n.cloakLevel?1:0),defenseValue:t.defenseValue+Gs(e,a,n.defenseValue),hpValue:t.hpValue+Gs(e,a,n.hpValue)}}const Ps=Me([Bs,Ts],(([e,t],a)=>{if(!e?.relicMultiplier||!t?.length)return
const n=t?.reduce(s(js,e.relicMultiplier),{armorValue:0,attackValue:0,damageValue:0,cloaked:0,defenseValue:0,hpValue:0})
a(n)})),Fs=Ne(0),Rs=e=>e.members[0].name===GameData.player().username
async function _s(e,t){if(!e)return
Ss.set(["groupStore","Processing attacking group stats ... "])
const a=await async function(){const e=await It()
return e?.r?.find(Rs)?.id}(),n=a&&await async function(e){const t=await Rt(e)
return Wt(t?.r?.attributes)}(a),r=n&&await async function(e){const t=await _t(),a=Ot(t)
return e?.map(((e,t)=>e-a[t]))}(n)
r&&t({attack:r[0],defense:r[1],armor:r[2],hp:r[3],damage:r[4]}),Ss.set(["groupStore","Done."])}const Os=Me(Fs,((e,t)=>{_s(e,t)})),Is=(e,t,a)=>Math.ceil(e*Be(t,0)*a),Ws=(e,t)=>Is(e,t,.0025),Ys=(e,t)=>Is(e,t,.001),Ks=Ys,zs=Ys,Us=Ys,Qs=Ys,Xs=Ys,Js=(e,t)=>Math.ceil(e*(1+.001*Be(t,0))),Zs=(e,t)=>Math.ceil(e*(1-t*qe)),el=Ne([]),tl=Me(el,((e,t)=>{e&&t(Et(e))})),al=Me([tl,Os],(([e,t],a)=>{if(!e||!t)return
const n=Js(t.defense,e.Constitution),r=Ks(n,e.Fortitude),o=t.hp+r,s=zs(o,e["Chi Strike"])
a({dmgWithChiStrike:t.damage+s,defWithConst:n,hpWithFortitude:o,nmv:Ws(t.attack,e["Nightmare Visage"]),sanctuary:Us(t.armor,e.Sanctuary)})}))
const nl=Me([al,Es,Os],(function([e,t,a],n){if(!e||!t||!a)return
const r=a.attack-e.nmv,o=Qs(r,t.flinchLevel),s=Xs(e.dmgWithChiStrike,t.terrorizeLevel)
n({attack:r-o,defense:e.defWithConst+e.nmv,armor:a.armor+e.sanctuary,hp:e.hpWithFortitude,damage:e.dmgWithChiStrike-s})})),rl=Me([Es,Ps],(([e,t],a)=>{if(!e||!t)return
const n=Ws(t.attackValue,e.nightmareVisageLevel),r=Js(t.defenseValue,e.constitutionLevel),o=Ks(r,e.fortitudeLevel),s=t.hpValue+o,l=zs(s,e.chiStrikeLevel),i=t.damageValue+l
a({attackWithNmv:t.attackValue-n,chiStrike:e.chiStrikeLevel,cloak:e.cloakLevel?"Yes":"No",dmgWithChiStrike:i,defWithConst:r,hpWithFortitude:s,nmv:n,sanctuary:Us(t.armorValue,e.sanctuaryLevel)})}))
const ol=Me([tl,rl,Ps],(function([e,t,a],n){if(!e||!t||!a)return
const r=Qs(t.attackWithNmv,e.Flinch),o=t.defWithConst+t.nmv,s=Xs(t.dmgWithChiStrike,e.Terrorize)
n({attack:t.attackWithNmv-r,dc225:Zs(o,225),dc175:Zs(o,175),defense:o,armor:a.armorValue+t.sanctuary,hp:t.hpWithFortitude,damage:t.dmgWithChiStrike-s})})),sl=Me(Bs,((e,t)=>{t({noOfRelics:e?.noOfRelics??"",leadDefenderBonus:e?.leadDefenderBonus??""})})),ll=Me(Es,((e,t)=>{if(!e)return t("")
e.cloakLevel?t("Yes"):t("No")})),il=Me(Ps,((e,t)=>{t({armorValue:e?.armorValue??"",attackValue:e?.attackValue??"",damageValue:e?.damageValue??"",cloaked:e?.cloaked??"",defenseValue:e?.defenseValue??"",hpValue:e?.hpValue??""})})),cl=Me(Ts,((e,t)=>{t(e?.length??"")})),ul=Me(ol,((e,t)=>{t({attack:e?.attack??"",dc225:e?.dc225??"",dc175:e?.dc175??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""})})),fl=e=>({attack:e?.attack??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""}),dl=Me(Os,((e,t)=>{t(fl(e))})),ml=Me(nl,((e,t)=>{t(fl(e))}))
function pl(e,t,a){const n=e.slice()
return n[6]=t[a].id,n[7]=t[a].username,n}function hl(e){let t,a,n,r,o=e[7]+""
return{c(){t=ne("a"),a=re(o),r=re(" "),ce(t,"href",n=""+(Te+e[6])),ce(t,"class","svelte-3priew")},m(e,n){ee(e,t,n),se(t,a),ee(e,r,n)},p(e,r){1&r&&o!==(o=e[7]+"")&&le(a,o),1&r&&n!==(n=""+(Te+e[6]))&&ce(t,"href",n)},d(e){e&&(ae(t),ae(r))}}}function gl(e){let t,a,n,r=(e[0].length||"")+"",o=wt(e[0]),s=[]
for(let t=0;t<o.length;t+=1)s[t]=hl(pl(e,o,t))
return{c(){t=re(r),a=re(" Offline guild members not at relic:\n"),n=ne("div")
for(let e=0;e<s.length;e+=1)s[e].c()
ce(n,"class","missing svelte-3priew")},m(e,r){ee(e,t,r),ee(e,a,r),ee(e,n,r)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(n,null)},p(e,[a]){if(1&a&&r!==(r=(e[0].length||"")+"")&&le(t,r),1&a){let t
for(o=wt(e[0]),t=0;t<o.length;t+=1){const r=pl(e,o,t)
s[t]?s[t].p(r,a):(s[t]=hl(r),s[t].c(),s[t].m(n,null))}for(;t<s.length;t+=1)s[t].d(1)
s.length=o.length}},i:te,o:te,d(e){e&&(ae(t),ae(a),ae(n)),ue(s,e)}}}function vl(e,t,a){let{members:n=[]}=t,r=[]
const o=[({username:e})=>!n.includes(e),({last_login:e})=>e,({last_login:e})=>e<St(),({last_login:e})=>e>Mt(),({level:e})=>e<400||e>421,({level:e})=>e<441||e>450],s=e=>o.every((t=>t(e))),l=({username:e},{username:t})=>Ee(e,t)
return Hs.subscribe((e=>{!async function(e){const t=await Yt(e)
it(t)&&a(0,r=t.filter(s).sort(l))}(e)})),e.$$set=e=>{"members"in e&&a(1,n=e.members)},[r,n]}class bl extends Q{constructor(e){super(),X(this,e,vl,gl,J,{members:1})}}function wl(e){let t,a,n
return a=new Cs({props:{members:e[10]}}),a.$on("buffBatch",e[11]),{c(){t=ne("div"),Ve(a.$$.fragment),ce(t,"class","buff-links svelte-1qul0wc")},m(e,r){ee(e,t,r),De(a,t,null),n=!0},p:te,i(e){n||(ye(a.$$.fragment,e),n=!0)},o(e){$e(a.$$.fragment,e),n=!1},d(e){e&&ae(t),xe(a)}}}function yl(e){let t,a,n,r,o,s,l,i
return{c(){t=ne("div"),t.textContent="Processing",a=ie(),n=ne("div"),r=re(e[2]),o=ie(),s=ne("div"),s.textContent="Assumptions",l=ie(),i=ne("div"),i.textContent="Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Sanctuary,\n        Terrorize and Flinch bonus calculations (in that order) on both the defending group and\n        attacking group.",ce(t,"class","b-top svelte-1qul0wc"),ce(n,"class","proc-stat svelte-1qul0wc"),ce(s,"class","b-top svelte-1qul0wc"),ce(i,"class","assume svelte-1qul0wc")},m(e,c){ee(e,t,c),ee(e,a,c),ee(e,n,c),se(n,r),ee(e,o,c),ee(e,s,c),ee(e,l,c),ee(e,i,c)},p(e,t){4&t&&le(r,e[2])},d(e){e&&(ae(t),ae(a),ae(n),ae(o),ae(s),ae(l),ae(i))}}}function kl(e){let t,a,n
return{c(){t=ne("button"),t.textContent="Fetch Stats",ce(t,"class","custombutton"),ce(t,"type","button")},m(r,o){ee(r,t,o),a||(n=pe(t,"click",e[12]),a=!0)},p:te,d(e){e&&ae(t),a=!1,n()}}}function Cl(e){let t,a,n,r,o,s,l,i,c,u,f,d,m,p,h,g,v,b,w,y,k,C,$,L,V,D,x,A,S,M,N,H,B,q,T,E,G,j,P,F,R,_,O,I,W,Y,K,z,U,Q,X,J,Z,te,oe,ue,fe,de,me,pe,he,ge,ve,be,we,ke,Ce,Le,Ae,Se,Me,Ne,He,Be,qe,Te,Ee,Ge,je,Pe,Fe,Re,_e,Oe,Ie,We,Ye,Ke,ze,Ue,Qe,Xe,Je,Ze,et,tt,at,nt,rt,ot,st,lt,it,ct,ut,ft,dt,mt,pt,ht,gt,vt,bt,wt,yt,kt,Ct,$t,Lt,Vt,Dt,xt,At,St,Mt,Nt,Ht,Bt=e[3].noOfRelics+"",qt=e[3].leadDefenderBonus+"",Tt=e[5].attackValue+"",Et=e[6].attack+"",Gt=e[5].defenseValue+"",jt=e[6].defense+"",Pt=e[5].armorValue+"",Ft=e[6].armor+"",Rt=e[5].damageValue+"",_t=e[6].damage+"",Ot=e[5].hpValue+"",It=e[6].hp+"",Wt=e[5].cloaked+"",Yt=e[6].dc225+"",Kt=e[6].dc175+"",zt=e[8].attack+"",Ut=e[9].attack+"",Qt=e[8].defense+"",Xt=e[9].defense+"",Jt=e[8].armor+"",Zt=e[9].armor+"",ea=e[8].damage+"",ta=e[9].damage+"",aa=e[8].hp+"",na=e[9].hp+""
return Nt=new bl({props:{members:e[10]}}),{c(){t=ne("div"),a=ne("div"),a.textContent="Defending Guild Stats",n=ie(),r=ne("div"),o=ne("div"),o.textContent="Relic Count:",s=ne("div"),l=re(Bt),i=ie(),c=ne("div"),c.textContent="Lead Defender Bonus:",u=ne("div"),f=re(qt),d=ie(),m=ne("div"),m.textContent="Lead Defender Cloaked:",p=ne("div"),h=re(e[4]),g=ie(),v=ne("div"),v.textContent="Other Defender Stats",b=ie(),w=ne("div"),y=ne("div"),y.textContent="Raw Attack:",k=ne("div"),C=re(Tt),$=ie(),L=ne("div"),L.textContent="Attack w/ buffs:",V=ne("div"),D=re(Et),x=ie(),A=ne("div"),A.textContent="Raw Defense:",S=ne("div"),M=re(Gt),N=ie(),H=ne("div"),H.textContent="Defense w/buffs:",B=ne("div"),q=re(jt),T=ie(),E=ne("div"),E.textContent="Raw Armor:",G=ne("div"),j=re(Pt),P=ie(),F=ne("div"),F.textContent="Armor w/ buffs:",R=ne("div"),_=re(Ft),O=ie(),I=ne("div"),I.textContent="Raw Damage:",W=ne("div"),Y=re(Rt),K=ie(),z=ne("div"),z.textContent="Damage w/ buffs:",U=ne("div"),Q=re(_t),X=ie(),J=ne("div"),J.textContent="Raw HP:",Z=ne("div"),te=re(Ot),oe=ie(),ue=ne("div"),ue.textContent="HP w/ buffs:",fe=ne("div"),de=re(It),me=ie(),pe=ne("div"),pe.textContent="Cloaked:",he=ne("div"),ge=re(Wt),ve=ie(),be=ne("div"),be.textContent="Processed:",we=ne("div"),ke=re(e[7]),Ce=ie(),Le=ne("div"),Ae=ne("div"),Ae.textContent="Adjusted Defense Values",Se=ie(),Me=ne("div"),Ne=ne("div"),Ne.textContent="DC225:",He=ne("div"),Be=re(Yt),qe=ie(),Te=ne("div"),Te.textContent="DC175:",Ee=ne("div"),Ge=re(Kt),je=ie(),Pe=ne("div"),Pe.textContent=" ",Fe=ie(),Re=ne("div"),Re.textContent="Attacking Group Stats",_e=ie(),Oe=ne("div"),Ie=ne("div"),Ie.textContent="Raw Group Attack:",We=ne("div"),Ye=re(zt),Ke=ie(),ze=ne("div"),ze.textContent="Group Attack w/ buffs:",Ue=ne("div"),Qe=re(Ut),Xe=ie(),Je=ne("div"),Je.textContent="Raw Group Defense:",Ze=ne("div"),et=re(Qt),tt=ie(),at=ne("div"),at.textContent="Group Defense w/ buffs:",nt=ne("div"),rt=re(Xt),ot=ie(),st=ne("div"),st.textContent="Raw Group Armor:",lt=ne("div"),it=re(Jt),ct=ie(),ut=ne("div"),ut.textContent="Group Armor w/ buffs:",ft=ne("div"),dt=re(Zt),mt=ie(),pt=ne("div"),pt.textContent="Raw Group Damage:",ht=ne("div"),gt=re(ea),vt=ie(),bt=ne("div"),bt.textContent="Group Damage w/ buffs:",wt=ne("div"),yt=re(ta),kt=ie(),Ct=ne("div"),Ct.textContent="Raw Group HP:",$t=ne("div"),Lt=re(aa),Vt=ie(),Dt=ne("div"),Dt.textContent="Group HP w/ buffs:",xt=ne("div"),At=re(na),St=ie(),Mt=ne("div"),Ve(Nt.$$.fragment),ce(a,"class","b-top svelte-1qul0wc"),ce(o,"class","svelte-1qul0wc"),ce(s,"class","svelte-1qul0wc"),ce(c,"class","svelte-1qul0wc"),ce(u,"class","svelte-1qul0wc"),ce(m,"class","svelte-1qul0wc"),ce(p,"class","svelte-1qul0wc"),ce(r,"class","stat-grid svelte-1qul0wc"),ce(v,"class","b-top svelte-1qul0wc"),ce(y,"class","svelte-1qul0wc"),ce(k,"class","svelte-1qul0wc"),ce(L,"class","svelte-1qul0wc"),ce(V,"class","svelte-1qul0wc"),ce(A,"class","svelte-1qul0wc"),ce(S,"class","svelte-1qul0wc"),ce(H,"class","svelte-1qul0wc"),ce(B,"class","svelte-1qul0wc"),ce(E,"class","svelte-1qul0wc"),ce(G,"class","svelte-1qul0wc"),ce(F,"class","svelte-1qul0wc"),ce(R,"class","svelte-1qul0wc"),ce(I,"class","svelte-1qul0wc"),ce(W,"class","svelte-1qul0wc"),ce(z,"class","svelte-1qul0wc"),ce(U,"class","svelte-1qul0wc"),ce(J,"class","svelte-1qul0wc"),ce(Z,"class","svelte-1qul0wc"),ce(ue,"class","svelte-1qul0wc"),ce(fe,"class","svelte-1qul0wc"),ce(pe,"class","svelte-1qul0wc"),ce(he,"class","svelte-1qul0wc"),ce(be,"class","svelte-1qul0wc"),ce(we,"class","svelte-1qul0wc"),ce(w,"class","stat-grid svelte-1qul0wc"),ce(t,"class","middle svelte-1qul0wc"),ce(Ae,"class","b-top svelte-1qul0wc"),ce(Ne,"class","svelte-1qul0wc"),ce(He,"class","svelte-1qul0wc"),ce(Te,"class","svelte-1qul0wc"),ce(Ee,"class","svelte-1qul0wc"),ce(Pe,"class","svelte-1qul0wc"),ce(Me,"class","stat-grid svelte-1qul0wc"),ce(Re,"class","b-top svelte-1qul0wc"),ce(Ie,"class","svelte-1qul0wc"),ce(We,"class","svelte-1qul0wc"),ce(ze,"class","svelte-1qul0wc"),ce(Ue,"class","svelte-1qul0wc"),ce(Je,"class","svelte-1qul0wc"),ce(Ze,"class","svelte-1qul0wc"),ce(at,"class","svelte-1qul0wc"),ce(nt,"class","svelte-1qul0wc"),ce(st,"class","svelte-1qul0wc"),ce(lt,"class","svelte-1qul0wc"),ce(ut,"class","svelte-1qul0wc"),ce(ft,"class","svelte-1qul0wc"),ce(pt,"class","svelte-1qul0wc"),ce(ht,"class","svelte-1qul0wc"),ce(bt,"class","svelte-1qul0wc"),ce(wt,"class","svelte-1qul0wc"),ce(Ct,"class","svelte-1qul0wc"),ce($t,"class","svelte-1qul0wc"),ce(Dt,"class","svelte-1qul0wc"),ce(xt,"class","svelte-1qul0wc"),ce(Oe,"class","stat-grid svelte-1qul0wc"),ce(Le,"class","right svelte-1qul0wc"),ce(Mt,"class","bottom b-top svelte-1qul0wc")},m(e,ae){ee(e,t,ae),se(t,a),se(t,n),se(t,r),se(r,o),se(r,s),se(s,l),se(r,i),se(r,c),se(r,u),se(u,f),se(r,d),se(r,m),se(r,p),se(p,h),se(t,g),se(t,v),se(t,b),se(t,w),se(w,y),se(w,k),se(k,C),se(w,$),se(w,L),se(w,V),se(V,D),se(w,x),se(w,A),se(w,S),se(S,M),se(w,N),se(w,H),se(w,B),se(B,q),se(w,T),se(w,E),se(w,G),se(G,j),se(w,P),se(w,F),se(w,R),se(R,_),se(w,O),se(w,I),se(w,W),se(W,Y),se(w,K),se(w,z),se(w,U),se(U,Q),se(w,X),se(w,J),se(w,Z),se(Z,te),se(w,oe),se(w,ue),se(w,fe),se(fe,de),se(w,me),se(w,pe),se(w,he),se(he,ge),se(w,ve),se(w,be),se(w,we),se(we,ke),ee(e,Ce,ae),ee(e,Le,ae),se(Le,Ae),se(Le,Se),se(Le,Me),se(Me,Ne),se(Me,He),se(He,Be),se(Me,qe),se(Me,Te),se(Me,Ee),se(Ee,Ge),se(Me,je),se(Me,Pe),se(Le,Fe),se(Le,Re),se(Le,_e),se(Le,Oe),se(Oe,Ie),se(Oe,We),se(We,Ye),se(Oe,Ke),se(Oe,ze),se(Oe,Ue),se(Ue,Qe),se(Oe,Xe),se(Oe,Je),se(Oe,Ze),se(Ze,et),se(Oe,tt),se(Oe,at),se(Oe,nt),se(nt,rt),se(Oe,ot),se(Oe,st),se(Oe,lt),se(lt,it),se(Oe,ct),se(Oe,ut),se(Oe,ft),se(ft,dt),se(Oe,mt),se(Oe,pt),se(Oe,ht),se(ht,gt),se(Oe,vt),se(Oe,bt),se(Oe,wt),se(wt,yt),se(Oe,kt),se(Oe,Ct),se(Oe,$t),se($t,Lt),se(Oe,Vt),se(Oe,Dt),se(Oe,xt),se(xt,At),ee(e,St,ae),ee(e,Mt,ae),De(Nt,Mt,null),Ht=!0},p(e,t){(!Ht||8&t)&&Bt!==(Bt=e[3].noOfRelics+"")&&le(l,Bt),(!Ht||8&t)&&qt!==(qt=e[3].leadDefenderBonus+"")&&le(f,qt),(!Ht||16&t)&&le(h,e[4]),(!Ht||32&t)&&Tt!==(Tt=e[5].attackValue+"")&&le(C,Tt),(!Ht||64&t)&&Et!==(Et=e[6].attack+"")&&le(D,Et),(!Ht||32&t)&&Gt!==(Gt=e[5].defenseValue+"")&&le(M,Gt),(!Ht||64&t)&&jt!==(jt=e[6].defense+"")&&le(q,jt),(!Ht||32&t)&&Pt!==(Pt=e[5].armorValue+"")&&le(j,Pt),(!Ht||64&t)&&Ft!==(Ft=e[6].armor+"")&&le(_,Ft),(!Ht||32&t)&&Rt!==(Rt=e[5].damageValue+"")&&le(Y,Rt),(!Ht||64&t)&&_t!==(_t=e[6].damage+"")&&le(Q,_t),(!Ht||32&t)&&Ot!==(Ot=e[5].hpValue+"")&&le(te,Ot),(!Ht||64&t)&&It!==(It=e[6].hp+"")&&le(de,It),(!Ht||32&t)&&Wt!==(Wt=e[5].cloaked+"")&&le(ge,Wt),(!Ht||128&t)&&le(ke,e[7]),(!Ht||64&t)&&Yt!==(Yt=e[6].dc225+"")&&le(Be,Yt),(!Ht||64&t)&&Kt!==(Kt=e[6].dc175+"")&&le(Ge,Kt),(!Ht||256&t)&&zt!==(zt=e[8].attack+"")&&le(Ye,zt),(!Ht||512&t)&&Ut!==(Ut=e[9].attack+"")&&le(Qe,Ut),(!Ht||256&t)&&Qt!==(Qt=e[8].defense+"")&&le(et,Qt),(!Ht||512&t)&&Xt!==(Xt=e[9].defense+"")&&le(rt,Xt),(!Ht||256&t)&&Jt!==(Jt=e[8].armor+"")&&le(it,Jt),(!Ht||512&t)&&Zt!==(Zt=e[9].armor+"")&&le(dt,Zt),(!Ht||256&t)&&ea!==(ea=e[8].damage+"")&&le(gt,ea),(!Ht||512&t)&&ta!==(ta=e[9].damage+"")&&le(yt,ta),(!Ht||256&t)&&aa!==(aa=e[8].hp+"")&&le(Lt,aa),(!Ht||512&t)&&na!==(na=e[9].hp+"")&&le(At,na)},i(e){Ht||(ye(Nt.$$.fragment,e),Ht=!0)},o(e){$e(Nt.$$.fragment,e),Ht=!1},d(e){e&&(ae(t),ae(Ce),ae(Le),ae(St),ae(Mt)),xe(Nt)}}}function $l(e){let t,a,n,r,o,s=e[0].is_owner&&wl(e)
function l(e,t){return e[1]?yl:kl}let i=l(e),c=i(e),u=e[1]&&Cl(e)
return{c(){t=ne("div"),a=ne("div"),s&&s.c(),n=ie(),c.c(),r=ie(),u&&u.c(),ce(a,"class","left svelte-1qul0wc"),ce(t,"class","body svelte-1qul0wc")},m(e,l){ee(e,t,l),se(t,a),s&&s.m(a,null),se(a,n),c.m(a,null),se(t,r),u&&u.m(t,null),o=!0},p(e,[r]){e[0].is_owner?s?(s.p(e,r),1&r&&ye(s,1)):(s=wl(e),s.c(),ye(s,1),s.m(a,n)):s&&(ke(),$e(s,1,1,(()=>{s=null})),Ce()),i===(i=l(e))&&c?c.p(e,r):(c.d(1),c=i(e),c&&(c.c(),c.m(a,null))),e[1]?u?(u.p(e,r),2&r&&ye(u,1)):(u=Cl(e),u.c(),ye(u,1),u.m(t,null)):u&&(ke(),$e(u,1,1,(()=>{u=null})),Ce())},i(e){o||(ye(s),ye(u),o=!0)},o(e){$e(s),$e(u),o=!1},d(e){e&&ae(t),s&&s.d(),c.d(),u&&u.d()}}}function Ll(e,t,a){let n,r,o,s,l,i,c,u
Ge(e,Ns,(e=>a(2,n=e))),Ge(e,sl,(e=>a(3,r=e))),Ge(e,ll,(e=>a(4,o=e))),Ge(e,il,(e=>a(5,s=e))),Ge(e,ul,(e=>a(6,l=e))),Ge(e,cl,(e=>a(7,i=e))),Ge(e,dl,(e=>a(8,c=e))),Ge(e,ml,(e=>a(9,u=e)))
let{relicData:f={}}=t
const d=f.defenders.map((e=>e.player_name))
let m=!1
return je((()=>{a(1,m=!1),Hs.set(0),qs.set([]),Fs.set(0),el.set([])})),e.$$set=e=>{"relicData"in e&&a(0,f=e.relicData)},[f,m,n,r,o,s,l,i,c,u,d,function(e){D("relic",e.detail)},function(){D("relic","fetchStats"),a(1,m=!0),Hs.set(f.controlled_by.guild_id),qs.set(d),Fs.set(GameData.player().hasGroup),el.set(GameData.player().buffs)}]}class Vl extends Q{constructor(e){super(),X(this,e,Ll,$l,J,{relicData:0})}}let Dl=0
function xl(e,t){var a,r
t?.response?.data?.defenders?.length>0&&(a=n("dialog-relic"),r=t.response.data,Dl&&Dl.$destroy(),Dl=new Vl({props:{relicData:r},target:a}))}function Al(e,t){"ACT_REPAIR"===t&&GameData.fetch(Re+u+_e+Oe)}let Sl=!1
function Ml(e,t,a,n,r,o,s,l,i){return e.beginPath(),e.arc(o+l/2,s+i/2,l/6,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.lineWidth=1,e.strokeStyle="black",e.stroke(),!0}function Nl(){if(!Sl){const e=GameController.Realm.footprintTexture
e.color=v("footprintColor"),e.Draw=Ml,Sl=!0}}function Hl(){GameController?.Realm?.footprintTexture&&(Nl(),$.unsubscribe("fixed.realm",Hl))}let Bl=0
function ql(e){$("#statbar-gold").css("background-color",e)}function Tl(){$("#HelperSendTotal").html(rt(v("currentGoldSentTotal"))),Number(GameData.player().gold)>Bl?ql("red"):ql("inherit")}function El(){Bl=v("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${v("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${rt(Bl)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${rt(v("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",Ye),Tl(),$.subscribe(Ke,Tl)}let Gl=0,jl=0,Pl=0,Fl=0,Rl=0,_l=0
async function Ol(){const e=await Mn({a:14,d:0,id:Gl.id,item_id:Gl.itemId}),t=e.response.response,a=e.response.msg
let n=a
if(0!==t){const e=a.indexOf("<");-1!==e&&(n=a.substring(0,e))}else n=`You purchased ${e.response.data.name} for ${rt(e.response.data.cost)} gold.`
l(_l,`${n}<br>`)}async function Il(){const e=zt(Rl.value)
e&&(await jt(Kt(e,Ol)),GameData.doAction(14,3,{id:Gl.id,item_id:Gl.itemId},0),Pl.close())}function Wl(){Fl?r("",_l):function(){Fl=a({className:"fshClear",textContent:"Select how many to quick-buy:"}),Rl=ut({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),o(Fl,Rl)
const e=lt({textContent:"Quick-buy"})
i(e,Il),o(Fl,e),_l=a(),o(Fl,_l),o(jl,Fl)}()}function Yl(e,t){Gl=t,jl=jl||n("shopDialogConfirm"),jl&&(Pl=Pl||$(jl).data("hcsWorldDialogShopConfirm"),Pl&&Wl())}function Kl(e){let t,a
return{c(){t=ne("div"),a=re(e[0]),ce(t,"id","tp-overlay"),ce(t,"class","svelte-dcwx64")},m(e,n){ee(e,t,n),se(t,a)},p(e,t){1&t&&le(a,e[0])},d(e){e&&ae(t)}}}function zl(e){let t,a=e[1]&&Kl(e)
return{c(){a&&a.c(),t=Z()},m(e,n){a&&a.m(e,n),ee(e,t,n)},p(e,[n]){e[1]?a?a.p(e,n):(a=Kl(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:te,o:te,d(e){e&&ae(t),a&&a.d(e)}}}function Ul(e,t,a){let{tpButton:n}=t,r=0,o=0,s=!1
function l(){const e=GameData.player().teleportCooldown
a(0,r=e-Nt()+o),r>0||(clearInterval(s),a(1,s=!1),n.classList.remove("cooldown"))}return window.$.subscribe("stats.player",l),window.$.subscribe(Ue,(function(e,t){o=Nt(),l(),s||0!==t.response.response||a(1,s=setInterval((()=>{l()}),1e3))})),e.$$set=e=>{"tpButton"in e&&a(2,n=e.tpButton)},[r,s,n]}class Ql extends Q{constructor(e){super(),X(this,e,Ul,zl,J,{tpButton:2})}}function Xl(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}function Jl(e,t){return"-"===t?e:"-"===e||e>t?"-":e}const Zl=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${Xl(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${Xl(e)}`]]
function ei(e,t){return t[0](e)}function ti(e){e.playerHits=Jl(e.numberOfHitsRequired,e.numberOfCreatureHitsTillDead),e.creatureHits=Jl(e.numberOfCreatureHitsTillDead,e.numberOfHitsRequired),e.fightStatus=function(e){const t=Zl.find(s(ei,e))
return t?t[1](e):"Unknown"}(e)}function ai(e,t,a){return e.callback.groupExists?t:a}function ni(e,t,a,n){t>0&&(e.extraNotes+=`${a} = ${Math.floor(n*t*.001)}<br>`)}const ri=e=>ai(e,e.callback.groupArmorValue,e.player.armorValue)
function oi(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function si(e){!function(e){const t=ri(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}(e),function(e){ni(e,e.player.sanctuaryLevel,"Sanc Bonus Armor",e.player.armorValue)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),oi(e)}const li=e=>ai(e,e.callback.groupAttackValue,e.player.attackValue)
function ii(e){return Math.floor(e.creature.defense*e.player.darkCurseLevel*qe)}function ci(e){const t=li(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${ii(e)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-ii(e)
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}const ui=(e,t,a)=>Math.max(Math.ceil((e-t+1)/a/.0025),0)
function fi(e){e.lowestCALevelToStillHit=ui(e.counterAttackBonusAttack,e.hitByHowMuch,e.player.attackValue),e.lowestCALevelToStillKill=ui(e.counterAttackBonusDamage,e.damageDone,e.player.damageValue)}function di(e){fi(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function mi(e,t,a){e[t]>203?e.extraNotes+=`Even with CA203 you cannot ${a} this creature<br>`:0!==e[t]&&(e.extraNotes+=`You need a minimum of CA${e[t]} to ${a} this creature<br>`)}function pi(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&di(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){fi(e),mi(e,"lowestCALevelToStillHit","hit"),mi(e,"lowestCALevelToStillKill","1-hit kill")}(e)}const hi=e=>ai(e,e.callback.groupHPValue,e.player.hpValue),gi=e=>ai(e,e.callback.groupDamageValue,e.player.damageValue)
function vi(e){if(function(e){const t=hi(e),{fortitudeLevel:a}=e.player
e.fortitudeExtraHPs=Math.floor(t*a*.001),a>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e),e.overallDamageValue=gi(e)+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage,e.damageDone=Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp)),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}const bi=e=>ai(e,e.callback.groupDefenseValue,e.player.defenseValue),wi=e=>Math.floor(bi(e)*e.player.constitutionLevel*.001)
const yi=e=>e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue
function ki(e){e.overallDefenseValue=bi(e)+wi(e)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${wi(e)}<br>`)}(e),function(e){ni(e,e.player.flinchLevel,"Flinch Bonus Attack Reduction",e.creature.attack)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*yi(e)),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(yi(e)-50))}function Ci(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}const $i=e=>e.creatureHitByHowMuch>=0?"Yes":"No",Li=e=>e.hitByHowMuch>0?"Yes":"No",Vi=e=>`<span style="color:#333333">${e}</span>`,Di=e=>`<tr>${e}</tr>`,xi=(e,t)=>`<td${t%2?"":' class="fshRight"'}>${e}</td>`,Ai=e=>Di(e.map(xi).join("")),Si=e=>Di(`<td bgcolor="#CD9E4B" colspan="4" align="center">${(e=>e.callback.groupExists?"Group ":"")(e)}Combat Evaluation</td>`),Mi=e=>Ai([Vi("Will I hit it?"),Li(e),Vi("Extra Attack:"),`( ${e.hitByHowMuch} )`]),Ni=e=>Ai([Vi("# Hits to kill it?"),e.numberOfHitsRequired,Vi("Extra Damage:"),`( ${e.damageDone} )`]),Hi=e=>Ai([Vi("Will I be hit?"),$i(e),Vi("Extra Defense:"),`( ${-1*e.creatureHitByHowMuch} )`]),Bi=e=>Ai([Vi("# Hits to kill me?"),e.numberOfCreatureHitsTillDead,Vi("Extra Armor + HP:"),`( ${-1*e.creatureDamageDone} )`]),qi=e=>Ai([Vi("# Player Hits?"),e.playerHits,Vi("# Creature Hits?"),e.creatureHits]),Ti=e=>Di(`${xi(Vi("Fight Status:"),0)}<td colspan="3"><span>${e.fightStatus}</span></td>`),Ei=e=>Di(`${xi(Vi("Notes:"),0)}<td colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td>`)
let Gi=0,ji=0,Pi=0
function Fi(){return cr(ji)?"Remove from do not kill list":"Add to the do not kill list"}function Ri(){r(Fi(),Pi)}function _i(){const e=t.doNotKillList.indexOf(ji);-1===e?t.doNotKillList.push(ji):t.doNotKillList.splice(e,1),Ri(),L("doNotKillList",t.doNotKillList.join()),fr()}function Oi(){Pi?Ri():function(){Pi=lt({className:"fshBl",textContent:Fi()})
const e=a({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
o(e,Pi),o(Gi,e),i(Pi,_i)}()}function Ii(e,t){!function(e){if(!Gi){const t=T("body",e)
1===t.length&&([Gi]=t)}}(t),Gi&&(ji=_(e),Oi())}let Wi=0,Yi=0,Ki=0,zi=0
function Ui(){Ki||(Yi||(Yi=a(),o(Wi,Yi),o(Wi,a({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Ki=a(),o(Yi,Ki))}function Qi(e){Ui(),ge(e,Ki)}function Xi(e){zi||(Ui(),zi=a(),o(Yi,zi)),ge(e,zi)}function Ji(e,t){const a={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,a){3===a&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,a,e.type),a}function Zi(e,a,n){const r={}
r.callback=n,r.player=As(a),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(r),r.creature=Ji(e.response.data,r.player.superEliteSlayerMultiplier),function(e){var t
t=e,[Ci,ci,vi,ki,si,ti,pi].forEach((e=>e(t)))}(r),r.evaluatorHTML=function(e){return`<table width="100%"><tbody>${Si(e)}${Mi(e)}${Ni(e)}${Hi(e)}${Bi(e)}${qi(e)}${Ti(e)}${Ei(e)}</tbody></table>`}(r),n.groupExists?Xi(r.evaluatorHTML):Qi(r.evaluatorHTML)}function ec(e){return e.members[0].name===c()}async function tc(e,t,a){if(a){!function(e,t,a){if(!a.r?.attributes)return
const n=a.r.attributes
Zi(e,t,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}(e,t,await Rt(a))}}async function ac(e,t){const a=function(e){if(it(e.r))return e.r.find(ec).id}(await It())
tc(e,t,a)}async function nc(e,t){if(Wi||(Wi=n("dialog-viewcreature")),Wi&&(Qi(""),Xi(""),t?.response?.data)){Ii(t.response.data.name,Wi)
const e=await Ut(!0)
e&&function(e,t){e.player.hasGroup&&ac(e,t),Zi(e,t,{groupExists:!1})}(t,e)}}let rc=0
function oc(e){const t=T("verbs",e)
1===t.length&&Xt(t[0])}function sc(){if(!rc)return
const e=n("actionList")
O("player",e).forEach(oc)}const lc="showHuntingBuffs"
function ic(){return`${Jt(lc)} ${Zt("enabledHuntingMode")}<select name="enabledHuntingMode"><option value="1"${ea(t.enabledHuntingMode,"1")}>${t.buffsName}</option><option value="2"${ea(t.enabledHuntingMode,"2")}>${t.buffs2Name}</option><option value="3"${ea(t.enabledHuntingMode,"3")}>${t.buffs3Name}</option></select>`}let cc=0,uc=""
const fc=()=>cc,dc=()=>uc
function mc(){const e=[null,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
it(e)&&([cc,uc]=e)}function pc(e){"enabledHuntingMode"===e.target.name&&(t.enabledHuntingMode=e.target.value,L("enabledHuntingMode",t.enabledHuntingMode),mc(),GameData.fetch(u))}function hc(e){t[e]=!t[e],L(e,t[e])}const gc={hideSubLvlCreature:function(){hc("hideSubLvlCreature"),GameData.fetch(Oe)},hidePlayerActions:function(){rc=!rc,L("hidePlayerActions",rc),GameData.fetch(Oe)},showCreatureInfo:()=>hc("showCreatureInfo"),showHuntingBuffs:function(){hc("showHuntingBuffs"),GameData.fetch(u)},showMonsterLog:()=>hc("showMonsterLog"),showTitanInfo:function(){hc("showTitanInfo"),ps(GameData.realm().dynamic)},showBuffInfo:function(){hc("showBuffInfo"),Pa()}}
function vc(e){const t=gc[e.target.name]
Y(t)&&(e.target.blur(),t(e))}function bc(){const e=n("worldPage")
if(!e)return
const t=a({className:"fshCenter fshFten"}),r=a({id:"fshWorldPrefs",innerHTML:`${Jt("showCreatureInfo")}&nbsp;&nbsp;${Jt("showMonsterLog")}&nbsp;&nbsp;${Jt("showTitanInfo")}&nbsp;&nbsp;${Jt("showBuffInfo")}<br>${Jt("hideSubLvlCreature")}&nbsp;&nbsp;${Jt("hidePlayerActions")}&nbsp;&nbsp;${ic()}`})
i(r,vc),g(r,"change",pc),o(t,r)
const s=a()
return o(t,s),o(e,t),s}const wc=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function yc(){var e
t.combatEvaluatorBias=v("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,wc[e]?wc[e].generalVariable:1.1053),t.hpVariable=function(e){return wc[e]?wc[e].hpVariable:1.1}(t.combatEvaluatorBias)}function kc(e,t){return e[t.name]=!0,e}function Cc(e,t,a){return e[_(a)]||t.push(a),t}function $c(e){ge("",e)}function Lc(e,t){const a=t.b.reduce(kc,{}),n=fc().reduce(s(Cc,a),[])
n.length>0?function(e,t){ge(`You are missing some ${dc()} hunting buffs<br>(${t.join(", ")})`,e)}(e,n):$c(e)}function Vc(e,a,n){fc()&&function(e,a){t.showHuntingBuffs?Lc(e,a):$c(e)}(e,n)}function Dc(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function xc(e){const t=B(e)
return t?.actions?.length?(t.actions=t.actions.filter(s(Dc,function(e){return e.realm?.minlevel||GameData.realm().minlevel}(t))),Xe(t)):e}function Ac(e,a){t.hideSubLvlCreature&&function(e){return e.data?.d&&ta(e.data.d,Oe)}(a)&&(e.dataFilter=xc)}function Sc(e){t[e[0]]=Qt(e[1])}function Mc(e){t[e]=Qt(e)}function Nc(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Sc),["doNotKillList"].forEach(Mc)}function Hc(e){t[e[0]]=v(e[1])}function Bc(e){t[e]=v(e)}function qc(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showHuntingBuffs","showHuntingBuffs"]].forEach(Hc),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(Bc)}const Tc=[function(){yc(),Nc(),qc()
const e=bc()
$.ajaxPrefilter("JSON",Ac),t.hideSubLvlCreature&&GameData.fetch(Oe),function(e){mc()
const a=s(Vc,e)
$.subscribe(f,a),t.showHuntingBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(e),rc=v("hidePlayerActions"),$.subscribe(K,sc),sc()},function(){Ie(),We()&&El()},function(){$.subscribe(Qe,nc)},function(){Hr.forEach(Br)},function(){v("enableCreatureColoring")&&o(document.body,gt("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(K,fr),fr(),function(){const e=GameData.doAction
GameData.doAction=pr(e)}()},function(){zr(),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",Zr),Zr()},function(){$.subscribe(Fe,Al)},async function(){if(v("keepLogs")){!function(e){e&&($n=e),$.subscribe(M,An)}(await dt("fsh_combatLog"))}},function(){window.initialGameData&&gs(0,window.initialGameData),$.subscribe(`${be} ${we}`,gs)},function(){$.subscribe(ze,Yl)},function(){$.subscribe(Pe,xl)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){b("#mapTooltip")},function(){cn(),$.subscribe(m,un),$.subscribe(p,fn)},function(){Pa(),$.subscribe(`${f} ${d}`,Pa)},function(){g(n("actionList"),"mouseover",ir)},function(){const{body:e}=document
g(e,"keydown",yn),g(e,"keyup",kn)},function(){const e=$("#world-event-badge")
e.length&&(e.off(),i(e[0],Mr))},function(){const e=A(".actionListHeaderButton.teleport")
!function(e,t){new Ql({target:e,props:t})}(e,{tpButton:e})},function(){var e
v("messageStack")&&(e=n("messageCenter"),new Pr({target:e}))},function(){GameController?.Realm?.footprintTexture?Nl():$.subscribe("fixed.realm",Hl)}]
function Ec(){e(Tc)}export{Ec as default}
//# sourceMappingURL=newMap-b7db90d3.js.map
