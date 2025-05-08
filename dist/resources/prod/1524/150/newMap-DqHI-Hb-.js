import{e}from"./executeAll-DIAWIge1.js"
import{am as t,u as a,g as n,aX as r,ab as s,aF as o,i,ar as l,aB as c,e as u,z as d,a9 as f,o as m,s as v,aY as p,aZ as h,K as b,a_ as g,a$ as k,b0 as y,b1 as w,C,c as L,ao as D,b2 as V,aI as M,b3 as A,b4 as S,b5 as N,b6 as H,aj as B,n as x,b7 as T,q as E,b8 as G,b9 as P,j as R,I as F,ba as _,bb as I,bc as O,bd as j,be as W,bf as q,bg as Y,bh as K,bi as z,bj as U,bk as Q,bl as X,ap as J,aa as Z,bm as ee,bn as te,bo as ae,a as ne,$ as re,R as se,at as oe,au as ie,as as le,a3 as ce,a4 as ue,X as de,a7 as fe,a8 as me,V as ve,Z as pe,a0 as he,bp as be,Y as ge,_ as ke,bq as ye,br as we,bs as $e,bt as Ce,W as Le,ad as De,S as Ve,a6 as Me,T as Ae,bu as Se,bv as Ne,bw as He,bx as Be,by as xe,bz as Te,h as Ee,ay as Ge,bA as Pe,bB as Re,bC as Fe,bD as _e,bE as Ie,J as Oe,bF as je,bG as We,bH as qe,bI as Ye,bJ as Ke,ak as ze,bK as Ue,bL as Qe,x as Xe,bM as Je,bN as Ze,bO as et,bP as tt,bQ as at,bR as nt,bS as rt,bT as st,bU as ot,bV as it,bW as lt,bX as ct,bY as ut,bZ as dt,b_ as ft,b$ as mt,c0 as vt,c1 as pt,c2 as ht,c3 as bt,c4 as gt,c5 as kt,c6 as yt,c7 as wt,c8 as $t,c9 as Ct,ca as Lt,cb as Dt,cc as Vt,an as Mt,cd as At}from"./calfSystem-BGOTz8de.js"
import{t as St}from"./toggleForce-br4z9gGd.js"
import{r as Nt,a as Ht}from"./roundToString-CZ_XgZXq.js"
import{d as Bt,q as xt}from"./quickbuffSuccess-CqP27bHr.js"
import{c as Tt}from"./createInput-DtY3IfhY.js"
import{c as Et}from"./createLabel-CXJLPSQT.js"
import{c as Gt}from"./idbLogger-DMucVgnm.js"
import{r as Pt}from"./rnd-D_QmA-Fa.js"
import{c as Rt}from"./createStyle-dPu6vqqt.js"
import{c as Ft}from"./createTable-C-HLpG87.js"
import{t as _t,g as It,a as Ot}from"./getTitanString-DrmoKrfx.js"
import{r as jt}from"./reduceBuffArray-Diy1E3zc.js"
import{r as Wt}from"./reliclist-CanTrtYw.js"
import{d as qt}from"./daGroupStats-PZ6GXdzg.js"
import{d as Yt,m as Kt}from"./mercEffect-DRL05x2t.js"
import{a as zt}from"./attribsToArray-zsQ4234G.js"
import{r as Ut}from"./remainingPages-BzskAxSU.js"
import{t as Qt}from"./testQuant-CtaSHhwL.js"
import{s as Xt,j as Jt}from"./simpleCheckbox-BSi4KRpL.js"
import{i as Zt}from"./isSelected-BWnMzKlW.js"
import{b as ea}from"./bitwiseAnd-C5gmj-aX.js"
import"./buffReportParser-GMYim8UI.js"
import"./buffObj-BIwiFUIW.js"
import"./view-CoGXwFAb.js"
import"./isChecked-D_0do7nT.js"
let ta=0
function aa(e){return e}function na(e){if(function(e){return t.showBuffInfo&&e.some(aa)}(e))return function(){if(ta)St(ta,!1)
else{ta=a({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div>"})
const e=n("actionContainer")
r(ta,e.children[2])}return ta}()
ta&&St(ta,!0)}function ra(e,t,a,n){t&&(e.className=t),s(a,e)
const r=o()
return i(e,r),l(e,n),r}let sa=0,oa=0
function ia(e,t){sa?St(sa,!1):function(e){sa=e.children[3],oa=ra(sa,"fshBlue","CA "," active")}(e),s(t.level,oa)}function la(e,t){t?ia(e,t):sa&&St(sa,!0)}let ca=0,ua=0
function da(e,t){ca?St(ca,!1):function(e){ca=e.children[4],ua=ra(ca,"fshRed","Doubler "," active")}(e),s(t.level,ua)}function fa(e,t){t?da(e,t):ca&&St(ca,!0)}let ma=0,va=0
function pa(e,t,a){ma?St(ma,!1):function(e){ma=e.children[2],va=ra(ma,"","Damage bonus: ","%")}(e),s(function(e,t){if(e){const a=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return Nt(a,2).toString()}return"0"}(t,Number(a)),va)}function ha(e,t,a){t?pa(e,t,a):ma&&St(ma,!0)}let ba=0,ga=0
function ka(e,t){ba?St(ba,!1):function(e){ba=e.children[1],ga=ra(ba,"","Kill Streak: ","")}(e),function(e,t){s(c(e),t)}(t,ga)}function ya(e,t,a,n){t||a?ka(e,n):ba&&St(ba,!0)}function wa(e,t){return t.name===e}function $a(e){const{buffs:t}=GameData.player()
if(t)return t.find(u(wa,e))}const Ca=["red","orange","yellow"]
let La=0,Da=0
async function Va(){if(v("NewMap","recastClick"),$a("Summon Shield Imp"))return
!function(e){xt(e)&&GameData.fetch(h)}(await Bt([p()],[55]))}const Ma=["imp-0","imp-1","imp-1"]
function Aa(e,t){La?St(La,!1):function(e){[La]=e.children,s("Shield Imps Remaining: ",La),Da=o(),i(La,Da),d(La,"&nbsp;")
const t=f({className:"xSmallLink",textContent:"Recast"})
i(La,t),m(t,Va)}(e)
const a=function(e){return e?Number(e.stack):0}(t)
La.className=function(e){return Ma[e]??"fshGreen"}(a),s(a,Da)}function Sa(e,t,a){t||a?Aa(e,t):La&&St(La,!0)}function Na(e){return 0===e.type}let Ha=0,Ba=0,xa=0,Ta=0,Ea=0,Ga=0
function Pa(){Ha=$a("Death Dealer"),Ba=$a("Doubler"),xa=$a("Counter Attack"),Ta=$a("Summon Shield Imp"),Ea=function(){const{dynamic:e}=GameData.realm()
return b(e)&&e.some(Na)}(),Ga=GameData.player().killStreak}function Ra(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",Ca[e.text()]||"#ad8043")}(),Pa()
const e=na([Ha,Ba,xa,Ta,Ea])
e&&(Sa(e,Ta,Ha),ya(e,Ha,Ea,Ga),ha(e,Ha,Ga),la(e,xa),fa(e,Ba))}function Fa(e){return o({textContent:e})}function _a(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function Ia(e,t,a){return Et({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:a})}function Oa(e){const t=a({className:"fshToggle"}),n=Tt({checked:e.prefVal,id:e.checkId,type:"checkbox"})
i(t,n)
const r=Ia(e.onClass,e.onTip,e.checkId)
i(t,r)
const s=Ia(e.offClass,e.offTip,e.checkId)
return i(t,s),i(e.worldName,t),n}let ja=0,Wa=0,qa=0,Ya=0,Ka=0,za=0,Ua=0,Qa=0,Xa=0
const Ja=e=>Fa(e?e.toString():"?")
function Za(e,t,n){const r=a({textContent:`${t} Lvl: `})
i(r,n),i(e,r)}function en(e,t,a){const n=f({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return i(a,n),n}function tn(e){!function(e){const t=a({className:"fshFsty"})
Wa=Ja(GameData.realm().minlevel),Za(t,"Min",Wa),qa=Ja(GameData.player().level),Za(t,"Your",qa),i(e,t)}(e),Ya=en("fshFormGroup","Quick Create Attack Group",e),Ka=en("fshQuickBuff","Open Quick Buff Popup",e),za=en("fshRealmMap","Open Realm Map",e),Ua=en("fshTempleOne","Search map in Ultimate FSG",e)}function an(){tn(ja),function(e){if(D("showSpeakerOnWorld")){const t=D("playNewMessageSound")
Qa=Oa({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(ja),function(e){const a=t.huntingMode
Xa=Oa({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(ja)}const nn=[[()=>Qa,function(){v("NewMap","toggleSound"),B("playNewMessageSound",!D("playNewMessageSound"))}],[()=>Xa,function(){v("NewMap","toggleHuntMode"),t.huntingMode=!t.huntingMode,B("huntingMode",t.huntingMode)}]],rn=[[()=>Ya,function(e){v("NewMap","doFormGroup"),V(e),GameData.doAction(12,401,{},0)}],[()=>Ka,function(){v("NewMap","openQuickBuff"),M(A())}],[()=>za,function(){v("NewMap","openRealmMap"),window.open(`${S+N}map`,"fsMap")}],[()=>Ua,function(){v("NewMap","openUfsgMap")
const e=GameData.realm()
window.open(`${H}realms${N}view&realm_id=${e.id}`,"mapUfsg")}]]
function sn(e,t){const{target:a}=t,[,n]=e.find((([e])=>e()===a))??[]
n&&(a.blur(),n(a))}function on(e){return u(sn,e)}function ln(){ja||(ja=a({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),an(),m(ja,on(rn)),L(ja,"change",on(nn)),C(ja,n("worldCoord")))}function cn(e,t){Wa&&t.b.minlevel&&(_a(),s(t.b.minlevel,Wa))}function un(e,t){qa&&s(t.b,qa)}const dn=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"],fn=`url("${G}ui/world/icon_action_attack_`
let mn=!1
function vn(e){return E(".verb.attack",e)}function pn(e){const t=dn.indexOf(e.toUpperCase())
return x(`#actionList .actionListItem.creature.creature-${t}`)}function hn(e){e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""}function bn(e,t){null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${fn}${t+1}.png")`)}function gn(e){const t=["LEGENDARY","NORMAL"].flatMap(pn),a=pn("CHAMPION"),[n,r]=e?[t,a]:[a,t]
n.map(vn).filter((e=>null!==e)).forEach(hn),r.slice(0,8).map(vn).forEach(bn)}function kn(e){if(!e.altKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(mn||gn(!0),mn=!0,!/(?:Digit|Numpad)[1-8]/.test(e.code))return
const t=pn("CHAMPION"),a=parseInt(e.code.slice(-1),10)-1
a<t.length&&function(e){const t=vn(e)
t&&(v("NewMap","ChampionAttack"),T(t))}(t[a])}function yn(e){!mn||e.ctrlKey&&e.shiftKey||(mn=!1,gn(!1))}function wn(e,t){0===t.response.response&&function(e){Gt({combat:e.response.data,player:{buffs:R(e.player.buffs.filter((({id:e})=>[26,54].includes(e))).map((({id:e,level:t})=>[e,t])))},time:e.time})}(t)}function $n(e){return!e?.response?.data}async function Cn(e){const t=await _({cache:!1,url:"fetchdata.php",data:{...e,fshrnd:Pt()},dataType:"text"})
return I(t)??{response:{msg:"Server Error",response:1}}}const Ln=[]
const Dn=(e,t)=>e===Number(t.response.data.id)
function Vn(e,t){e(t)}async function Mn(e,t){const a=Ln.find(u(Dn,e))
if(a)return function(e){return new Promise((t=>{O(3,Vn,[t,e])}))}(a)
const n=await Cn({a:1,d:0,id:e,passback:t})
return function(e){$n(e)||Ln.push(e)}(n),n}let An=0,Sn=0,Nn=0,Hn=0,Bn=0,xn=0
const Tn=()=>An,En=()=>Sn,Gn=()=>Nn,Pn=()=>Hn,Rn=()=>Bn,Fn=()=>xn
function _n(e,t){return j(W(t,e))}function In(){var e
An=GameData.player().level,e=n("statbar-character-tooltip-stats"),Nn=_n(e,q),Sn=_n(e,Y),Bn=_n(e,K),Hn=_n(e,z),xn=_n(e,U)}const On=e=>`<td>${e}:&nbsp;</td>`,jn=e=>`<td width="40%">${e}</td>`
function Wn([e,t,a,n,r]){return[On(e),jn(`${t} (your ${a}:<span class="${n}">${r()}</span>)`)]}function qn(e){return["<tr>",...e,"</tr>"].join("")}function Yn(e,t){return qn([...Wn(e),...Wn(t)])}const Kn='<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'
function zn(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function Un(e,t,a){return function(e){return`<table><tr><td><img src="${G}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return qn([On("Class"),jn(e.creature_class),...Wn(["Level",e.level,"level",t,Tn])])}(e,a)+function(e){return Yn(["Attack",e.attack,"defense","fshYellow",En],["Defense",e.defense,"attack","fshYellow",Gn])}(e)+function(e){return Yn(["Armor",e.armor,"damage","fshYellow",Pn],["Damage",e.damage,"armor","fshYellow",Rn])}(e)+function(e,t){return qn([On("HP"),jn(`${e.hp} (your HP:<span class="fshYellow">${Fn()}</span>)(1H: <span class="fshRed">${t}</span>)`),On("Gold"),jn(e.gold)])}(e,t)+Kn+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(zn).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function Qn(e){if(!$n(e))return function(e){const a=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let n="fshYellow"
return In(),Tn()>e.level&&(n="fshRed"),Un(e,a,n)}(e.response.data)}const Xn=["verb","view","tip-static"]
async function Jn(e,t){const a=Q((n=e).parentNode.children).indexOf(n)
var n
const r=await Mn(GameData.actions()[a].data.id,a)
$n(r)||function(e,t){const a=Qn(t)
e.set("content.text",a)}(t,r)}function Zn(e,t){v("NewMap","CreatureInfo"),e.classList.add("fshTip")
var a
const n=(a="Loading...",$(e).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:a},hide:{effect:!1}})).qtip("api")
n&&Jn(t,n)}function er(e,t){return a=e,Xn.every((e=>F(e,a)))&&!F("fshTip",e)&&F("creature",t)
var a}function tr(e){if(!t.showCreatureInfo)return
const{target:a}=e,n=a.parentNode.parentNode.parentNode
er(a,n)&&Zn(a,n)}function ar(e){return t.doNotKillList.includes(X(e))}function nr(e){e.classList.toggle("fshBlue",ar(Z(e)))}function rr(){const e=n("actionList")
J("creature",e).forEach(nr)}function sr(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(ar(e))return v("NewMap","creatureOnList"),n("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const or={2:function(e){return function(t,a,n,r){sr(n.passback)||e(t,a,n,r)}}}
function ir(e){return function(t,a,n,r){const s=or[t];(function(e){return e&&ee(e)})(s)&&function(e){return te(e)||0===e}(r)?s(e)(t,a,n,r):e(t,a,n,r)}}function lr(){return e={subcmd:"contrib"},ne({cmd:"globalquests",...e})
var e}var cr=de('<a><img alt="guild logo" class="svelte-2qtc6g"></a>'),ur=de('<tr class="svelte-2qtc6g"><td> </td><td><!></td><td><a> </a></td><td> </td></tr>'),dr=de('<table id="world-event-contrib-table" class="svelte-2qtc6g"><tbody><tr class="svelte-2qtc6g"><td class="header"></td><td class="header"></td><td class="header">Username</td><td class="header">Kills</td></tr><!></tbody></table>'),fr=de('<p style="color: red"> </p>')
function mr(e,t){se(t,!0)
var a=oe(),n=ie(a)
le(n,(()=>t.promise),(e=>{var t=ye("Loading...")
ce(e,t)}),((e,t)=>{var a=be((()=>{var{r:e}=ve(t)
return{list:e}})),n=be((()=>ve(a).list)),r=oe(),s=ie(r),o=e=>{var t=dr(),a=pe(t),r=ge(pe(a))
ke(r,19,(()=>ve(n)),(({player:e,value:t})=>e.id),((e,t,a)=>{let n=()=>ve(t).player
var r=ur(),s=pe(r),o=pe(s),i=ge(s),l=pe(i),c=e=>{var t=cr(),a=pe(t)
fe((()=>{we(t,"href",`${Ce??""}${n().guild_id??""}`),we(a,"src",`${G??""}guilds/${n().guild_id??""}_mini.png`)})),ce(e,t)}
he(l,(e=>{n().guild_id&&e(c)}))
var u=ge(i),d=pe(u),f=pe(d),m=ge(u),v=pe(m)
fe((()=>{me(o,ve(a)+1),we(d,"href",`${$e??""}${n().name??""}`),me(f,n().name),me(v,ve(t).value)})),ce(e,r)})),ce(e,t)},i=e=>{var t=ye("Server Error")
ce(e,t)}
he(s,(e=>{b(ve(n))?e(o):e(i,!1)})),ce(e,r)}),((e,t)=>{var a=fr(),n=pe(a)
fe((()=>me(n,ve(t).message))),ce(e,a)})),ce(e,a),ue()}let vr=Ve(Promise.resolve()),pr=0
function hr(e){Le(vr,re(lr)),pr||(pr=De(mr,{props:{promise:ve(vr)},target:e}))}function br(){v("NewMap","GlobalTop")
const e=n("world-event-contrib")
hr(e),globalThis.$(e).dialog({title:"Top 100 Event Contributers",minWidth:300,height:300,zIndex:9999})}function gr(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const kr=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function yr(e,t){var a
D(e)&&(a=t+1,$.subscribe(ae,u(gr,a)),gr(t+1))}var wr=(e,t,a)=>t(a()),$r=de('<div class="count svelte-1t9oc1"> </div>'),Cr=de("<div> <!></div>")
function Lr(e,t){se(t,!0)
let a=Ve(Ae([]))
const n=window.$("#messageCenter").data().hcsWorldMessageCenter
const r=function*(){for(let e=0;;e++)yield e}()
function s(){n._reposition()}function o(e){Le(a,ve(a).filter((({msg:t})=>t!==e)),!0),s()}n._displayMessage=async function(e,t,n=3e3){const o=r.next().value
Le(a,[...ve(a),{msg:e,type:t,expire:o}],!0),setTimeout((()=>{Le(a,ve(a).filter((({expire:e})=>e!==o)),!0)}),n),await Ne(),s()}
var i=oe(),l=ie(i)
ke(l,17,(()=>{return e=ve(a),Se(e,"msg").map((({msg:t,type:a})=>({msg:t,type:a,count:e.filter((({msg:e})=>e===t)).length})))
var e}),(({msg:e,type:t,count:a})=>e),((e,t)=>{let a=()=>ve(t).msg,n=()=>ve(t).count
var r=Cr()
r.__click=[wr,o,a]
var s=pe(r),i=ge(s),l=e=>{var t=$r(),a=pe(t)
fe((()=>me(a,`x${n()??""}`))),ce(e,t)}
he(i,(e=>{n()>1&&e(l)})),fe((()=>{He(r,1,`fsh-message ${ve(t).type??""}`,"svelte-1t9oc1"),me(s,`${a()??""} `)})),ce(e,r)})),ce(e,i),ue()}Me(["click"])
let Dr=0
function Vr(e){Dr[e.name]?Dr[e.name].seen&&(Dr[e.name].seen+=1):(Dr[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,Dr[e.name]))}function Mr(e,t,a){return t?e(t,a):a}function Ar(e,t){const a=e||{}
return a.min=Mr(Math.min,a.min,t),a.max=Mr(Math.max,a.max,t),a}const Sr=["attack","armor","damage","defense","hp"]
function Nr(e,t,a){const n=Ar(t[a],Number(e[a]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[a],n)&&(t[a]=n)}function Hr(e,t){e[t.name]=Ar(e[t.name],Number(t.value))}function Br(e){Dr||(Dr={}),Vr(e),function(e,t){Sr.forEach(u(Nr,e,t))}(e,Dr[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(u(Hr,t.enhancements)))}(e,Dr[e.name]),xe("fsh_monsterLog",Dr)}async function xr(){!function(e){Dr=e||{}}(await Be("fsh_monsterLog"))}const Tr=[]
function Er(e){var a
$n(e)||(a=e.response.data,t.showMonsterLog&&Br(a))}function Gr(e,t){return e.id===t.id}async function Pr(e,t){if(6!==e.type||function(e){if(Tr.find(u(Gr,e.data)))return!0
Tr.push(e.data)}(e))return
Er(await Mn(e.data.id,t))}function Rr(){t.showMonsterLog&&(GameData.actions().forEach(Pr),v("NewMap","MonsterLog"))}let Fr=""
const _r=()=>Fr
function Ir(){return Te({subcmd:"scouttower"})}function Or(e,[t,a,n]){const r=e.insertCell(-1)
return r.colSpan=t,n&&(r.className="header"),i(r,a()),r}function jr(e,t,a){const n=e.insertRow(-1)
return a&&(n.className="fshBlue"),function(e,t){t.forEach(u(Or,e))}(n,t),n}function Wr(e,t){jr(e,t[0],t[1])}function qr(e,t){t.forEach(u(Wr,e))}let Yr=0,Kr=0,zr=0,Ur=0,Qr=0,Xr=0,Jr=0,Zr=0
const es=()=>Yr,ts=()=>Jr
function as(){Yr=Fa("Current"),Kr=Fa("Kills"),zr=Fa("Member"),Ur=Fa("% of Total"),Qr=Fa("Status"),Xr=Fa("Titan HP"),Jr=Fa("Total"),Zr=Fa("Your Guild")}let ns=0,rs=0,ss=0,os=0,is=0,ls=0,cs=0,us=0,ds=0
const fs=()=>ns,ms=()=>rs,vs=()=>ss,ps=()=>os,hs=()=>is,bs=()=>ls,gs=()=>cs,ks=()=>us,ys=()=>ds
function ws(){ns=o({innerHTML:"&nbsp;"}),rs=o({innerHTML:"&nbsp;"}),ss=o(),os=o(),is=o(),ls=o(),cs=o(),us=o(),ds=o()}let $s=0
const Cs=()=>$s
function Ls(){for(;$s.rows.length>8;)$s.deleteRow(8)}function Ds(e){const t=o()
return i(t,e),l(t,"%"),t}const Vs=[[[5,fs,!0],[1,ms,!0]]],Ms=[[[2,()=>Xr,!0],[4,()=>Zr,!0]]],As=[[[2,function(){const e=o()
return i(e,vs()),l(e,"/"),i(e,ps()),e}],[4,hs]]],Ss=()=>[[[2,es,!0],[4,u(Ds,bs())]],!0],Ns=()=>[[[2,ts,!0],[4,u(Ds,gs())]],!0],Hs=[[[2,()=>Qr,!0],[4,ks]],!0],Bs=[[[2,()=>zr,!0],[2,()=>Kr,!0],[2,()=>Ur,!0]]]
let xs=0,Ts=0,Es=""
const Gs=()=>Ts,Ps=()=>Es
function Rs(){Ts=null,xs&&!F("fshHide",xs)&&(St(xs,!0),Ee("&nbsp;",ns),Ee("&nbsp;",rs),s("",ss),s("",os),s("",is),s("",ls),s("",cs),Ee("",us),Ee("",ds),Ls())}function Fs(e){return 0===e.type&&(Ts=e.base_creature_id,Es=`(${e.x},${e.y})`,!0)}function _s(){if(xs)St(xs,!1)
else{const e=n("actionContainer")
xs=a({className:"fshActionBox titanInfo"}),ws(),$s=Ft({className:"fshCenter"}),as(),qr($s,[Vs,Ms,As,Ss(),Ns(),Hs,[[[6,ys]]],Bs]),i(xs,Cs()),i(e,xs)}}function Is(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(Ge()+1e3*e)
return`${Pe(t.getHours())}:${Pe(t.getMinutes())} ${Pe(t.getDate())}/${Re[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function Os(e){return Ht(Ot(e.max_hp-e.current_hp,e.kills),2)}function js(e){return Ht(100*e.kills/e.max_hp,2)}function Ws(e){!function(e){[[_t(e.creature.name),fs],[Ps(),ms],[e.current_hp,vs],[e.max_hp,ps],[e.kills,hs],[Os(e),bs],[js(e),gs]].forEach((([e,t])=>s(e,t())))}(e),Ee(function(e){return It(e.kills,e.max_hp,e.current_hp)}(e),ks()),Ee(Is(e.cooldown),ys())}function qs(e,t){return[[[2,()=>Fa(t.player.name)],[2,()=>Fa(t.kills.toString())],[2,()=>Fa(`${Ht(100*t.kills/e.kills,2)}%`)]]]}function Ys(e){return e.realm&&e.creature.base_id===Gs()&&e.realm===_r()}function Ks(e){const t=e.find(Ys)
t&&(Ws(t),function(e){if(Ls(),!e.contributors)return
const t=e.contributors.map(u(qs,e))
qr(Cs(),t)}(t))}let zs=null
const Us=e=>e?.s&&b(e.r),Qs=e=>t.showTitanInfo&&b(e)&&e.some(Fs)
async function Xs(){!function(e,t){Us(t)&&(Ks(t.r),Qs(GameData.realm().dynamic)?zs=window.setTimeout(e,3e4):Rs())}(Xs,await re(Ir))}function Js(e){zs&&(window.clearTimeout(zs),zs=null),Qs(e)?(_s(),Xs()):Rs()}function Zs(e){var t
e.dynamic&&(t=e.name,Fr=t,Js(e.dynamic))}function eo(e,t){t.realm?.name&&Zs(t.realm)}var to=de("<li><!></li>"),ao=de('<ul class="svelte-1k3xw12"></ul>')
function no(e,t){se(t,!0)
let a=Ie(t,"members",19,(()=>[]))
const n=e=>`Buff ${We[e]} 16`
var r=ao()
ke(r,21,(()=>Oe(16,a())),qe,((e,a,r)=>{var s=to(),o=pe(s)
je(o,{onclick:e=>function(e,a,r){r.target.blur(),Ye(`${Ke}&players=${e.join(",")}`,"fsQuickBuff",618,1e3,",scrollbars"),t.emitBuffBatch(n(a))}(ve(a),r,e),children:(e,t)=>{var a=ye()
fe((e=>me(a,e)),[()=>n(r)]),ce(e,a)},$$slots:{default:!0}}),ce(e,s)})),ce(e,r),ue()}function ro(e,t){return e>10*t||e<t?e:10*t}const so=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function oo(e,t,a){e[a[0]]=Number(t[a[1]])}const io=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function lo(e,t,a){e[a[0]]=t[a[1]]||0}function co(e){if(!e._skills)return
const t=jt(e._skills),a={}
return function(e,t){so.forEach(u(oo,e,t))}(a,e),function(e,t){io.forEach(u(lo,e,t))}(a,t),a.superEliteSlayerMultiplier=Nt(.002*a.superEliteSlayerLevel,2),ze(a.armorValue)&&function(e){e.attackValue=ro(e.attackBonus,e.levelValue),e.defenseValue=ro(e.defenseBonus,e.levelValue),e.armorValue=ro(e.armorBonus,e.levelValue),e.damageValue=ro(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(a),a}const uo=Qe(["statusStore","Done."])
let fo=[]
const mo=Ue(uo,((e,t)=>{const a=fo.find((([t])=>t===e[0]))
a?[,a[1]]=e:fo=[...fo,e]
const n=fo.find((([,e])=>"Done."!==e))
t(n?.[1]??"Done.")})),vo=Qe(0)
const po=Ue(vo,((e,t)=>{!async function(e,t){if(!e)return
uo.set(["relicStore","Processing defending guild relics ... "])
const a=await Wt(e)
if(!a?.r?.relics)return void uo.set(["relicStore","AJAX Error"])
const n=a.r.relics.length,r=1===n?1.5:Nt(1-n/10,2)
t({noOfRelics:n,relicMultiplier:r,leadDefenderBonus:`${String(100*r)}%`}),uo.set(["relicStore","Done."])}(e,t)})),ho=Qe([])
const bo=Ue(ho,((e,t)=>{!async function(e,t){if(!e.length)return
uo.set(["defendersStore","Processing defending group stats ... "])
const a=[]
await Xe(e.map((async(e,n)=>{const r=await Je(e)
a.push([n,co(r)]),t(a)}))),uo.set(["defendersStore","Done."])}(e,t)})),go=Ue(bo,((e,t)=>{const a=e?.find((([e])=>0===e))
a&&t(a[1])})),ko=(e,t,a)=>Math.ceil(a*(0===t?e:Ze))
function yo(e,t,[a,n]){return{armorValue:t.armorValue+ko(e,a,n.armorValue),attackValue:t.attackValue+ko(e,a,n.attackValue),damageValue:t.damageValue+ko(e,a,n.damageValue),cloaked:t.cloaked+(n.cloakLevel?1:0),defenseValue:t.defenseValue+ko(e,a,n.defenseValue),hpValue:t.hpValue+ko(e,a,n.hpValue)}}const wo=Ue([po,bo],(([e,t],a)=>{if(!e?.relicMultiplier||!t?.length)return
const n=t?.reduce(u(yo,e.relicMultiplier),{armorValue:0,attackValue:0,damageValue:0,cloaked:0,defenseValue:0,hpValue:0})
a(n)})),$o=Qe(0),Co=e=>e.members[0].name===GameData.player().username
async function Lo(e,t){if(!e)return
uo.set(["groupStore","Processing attacking group stats ... "])
const a=await async function(){const e=await et()
return e?.r?.find(Co)?.id}(),n=a&&await async function(e){const t=await qt(e)
return zt(t?.r?.attributes)}(a),r=n&&await async function(e){const t=await Yt(),a=Kt(t)
return e?.map(((e,t)=>e-a[t]))}(n)
r&&t({attack:r[0],defense:r[1],armor:r[2],hp:r[3],damage:r[4]}),uo.set(["groupStore","Done."])}const Do=Ue($o,((e,t)=>{Lo(e,t)})),Vo=(e,t,a)=>Math.ceil(e*tt(t,0)*a),Mo=(e,t)=>Vo(e,t,.0025),Ao=(e,t)=>Vo(e,t,.001),So=Ao,No=Ao,Ho=Ao,Bo=Ao,xo=Ao,To=(e,t)=>Math.ceil(e*(1+.001*tt(t,0))),Eo=(e,t)=>Math.ceil(e*(1-t*at)),Go=Qe([]),Po=Ue(Go,((e,t)=>{e&&t(jt(e))})),Ro=Ue([Po,Do],(([e,t],a)=>{if(!e||!t)return
const n=To(t.defense,e.Constitution),r=t.hp+So(n,e.Fortitude)
a({dmgWithChiStrike:t.damage+No(r,e["Chi Strike"]),defWithConst:n,hpWithFortitude:r,nmv:Mo(t.attack,e["Nightmare Visage"]),sanctuary:Ho(t.armor,e.Sanctuary)})}))
const Fo=Ue([Ro,go,Do],(function([e,t,a],n){if(!e||!t||!a)return
const r=a.attack-e.nmv,s=Bo(r,t.flinchLevel),o=xo(e.dmgWithChiStrike,t.terrorizeLevel)
n({attack:r-s,defense:e.defWithConst+e.nmv,armor:a.armor+e.sanctuary,hp:e.hpWithFortitude,damage:e.dmgWithChiStrike-o})}))
const _o=Ue([go,wo],(([e,t],a)=>{if(!e||!t)return
const n=Mo(t.attackValue,e.nightmareVisageLevel),r=To(t.defenseValue,e.constitutionLevel)
!function([e,t,a,n,r,s]){a({attackWithNmv:t.attackValue-n,chiStrike:e.chiStrikeLevel,cloak:e.cloakLevel?"Yes":"No",dmgWithChiStrike:t.damageValue+No(s,e.chiStrikeLevel),defWithConst:r,hpWithFortitude:s,nmv:n,sanctuary:Ho(t.armorValue,e.sanctuaryLevel)})}([e,t,a,n,r,t.hpValue+So(r,e.fortitudeLevel)])}))
const Io=Ue([Po,_o,wo],(function([e,t,a],n){if(!e||!t||!a)return
const r=Bo(t.attackWithNmv,e.Flinch),s=t.defWithConst+t.nmv,o=xo(t.dmgWithChiStrike,e.Terrorize)
n({attack:t.attackWithNmv-r,dc225:Eo(s,225),dc175:Eo(s,175),defense:s,armor:a.armorValue+t.sanctuary,hp:t.hpWithFortitude,damage:t.dmgWithChiStrike-o})})),Oo=Ue(po,((e,t)=>{t({noOfRelics:e?.noOfRelics??"",leadDefenderBonus:e?.leadDefenderBonus??""})})),jo=Ue(go,((e,t)=>{if(!e)return t("")
e.cloakLevel?t("Yes"):t("No")})),Wo=Ue(wo,((e,t)=>{t({armorValue:e?.armorValue??"",attackValue:e?.attackValue??"",damageValue:e?.damageValue??"",cloaked:e?.cloaked??"",defenseValue:e?.defenseValue??"",hpValue:e?.hpValue??""})})),qo=Ue(bo,((e,t)=>{t(e?.length??"")})),Yo=Ue(Io,((e,t)=>{t({attack:e?.attack??"",dc225:e?.dc225??"",dc175:e?.dc175??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""})})),Ko=e=>({attack:e?.attack??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""}),zo=Ue(Do,((e,t)=>{t(Ko(e))})),Uo=Ue(Fo,((e,t)=>{t(Ko(e))}))
var Qo=de('<a class="svelte-3priew"> </a> ',1),Xo=de(' <div class="missing svelte-3priew"></div>',1)
function Jo(e,t){se(t,!0)
let a=Ie(t,"members",19,(()=>[])),n=Ve(Ae([]))
const r=[({username:e})=>!a().includes(e),({last_login:e})=>e,({last_login:e})=>e<st(),({last_login:e})=>e>ot(),({level:e})=>e<400||e>421,({level:e})=>e<441||e>450],s=e=>r.every((t=>t(e))),o=({username:e},{username:t})=>rt(e,t)
vo.subscribe((e=>{!async function(e){const t=await nt(e)
b(t)&&Le(n,t.filter(s).sort(o),!0)}(e)}))
var i=Xo(),l=ie(i),c=ge(l)
ke(c,21,(()=>ve(n)),(({id:e,username:t})=>e),((e,t)=>{var a=Qo(),n=ie(a),r=pe(n)
ge(n,1,!0).nodeValue=" ",fe((()=>{we(n,"href",`${it??""}${ve(t).id??""}`),me(r,ve(t).username)})),ce(e,a)})),fe((()=>me(l,`${ve(n).length||""} Offline guild members not at relic: `))),ce(e,i),ue()}function Zo(e,t,a,n){v("relic","fetchStats"),Le(t,!0),vo.set(a().controlled_by.guild_id),ho.set(n),$o.set(GameData.player().hasGroup),Go.set(GameData.player().buffs)}var ei=de('<div class="buff-links svelte-2rn368"><!></div>'),ti=de('<button class="custombutton" type="button">Fetch Stats</button>'),ai=de('<div class="b-top svelte-2rn368">Processing</div> <div class="proc-stat svelte-2rn368"> </div> <div class="b-top svelte-2rn368">Assumptions</div> <div class="assume svelte-2rn368">Above calculations include Constitution, Fortitude, Nightmare Visage,\n        Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that\n        order) on both the defending group and attacking group.</div>',1),ni=de('<div class="middle svelte-2rn368"><div class="b-top svelte-2rn368">Defending Guild Stats</div> <div class="stat-grid svelte-2rn368"><div class="svelte-2rn368">Relic Count:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Lead Defender Bonus:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Lead Defender Cloaked:</div> <div class="svelte-2rn368"> </div></div> <div class="b-top svelte-2rn368">Other Defender Stats</div> <div class="stat-grid svelte-2rn368"><div class="svelte-2rn368">Raw Attack:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Attack w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Defense:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Defense w/buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Armor:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Armor w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Damage:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Damage w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw HP:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">HP w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Cloaked:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Processed:</div> <div class="svelte-2rn368"> </div></div></div> <div class="right svelte-2rn368"><div class="b-top svelte-2rn368">Adjusted Defense Values</div> <div class="stat-grid svelte-2rn368"><div class="svelte-2rn368">DC225:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">DC175:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">&nbsp;</div></div> <div class="b-top svelte-2rn368">Attacking Group Stats</div> <div class="stat-grid svelte-2rn368"><div class="svelte-2rn368">Raw Group Attack:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Group Attack w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Group Defense:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Group Defense w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Group Armor:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Group Armor w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Group Damage:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Group Damage w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Group HP:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Group HP w/ buffs:</div> <div class="svelte-2rn368"> </div></div></div> <div class="bottom b-top svelte-2rn368"><!></div>',1),ri=de('<div class="body svelte-2rn368"><div class="left svelte-2rn368"><!> <!></div> <!></div>')
function si(e,t){se(t,!0)
const[a,n]=ct(),r=()=>ut(Oo,"$relicDisplay",a),s=()=>ut(Wo,"$rawDefDisplay",a),o=()=>ut(Yo,"$defBuffedDisplay",a),i=()=>ut(zo,"$rawGroupDisplay",a),l=()=>ut(Uo,"$buffResultDisplay",a)
let c=Ie(t,"relicData",19,(()=>({})))
const u=c().defenders.map((e=>e.player_name))
let d=Ve(!1)
function f(e){v("relic",e)}lt((()=>{Le(d,!1),vo.set(0),ho.set([]),$o.set(0),Go.set([])}))
var m=ri(),p=pe(m),h=pe(p),b=e=>{var t=ei()
no(pe(t),{members:u,emitBuffBatch:f}),ce(e,t)}
he(h,(e=>{c().is_owner&&e(b)}))
var g=ge(h,2),k=e=>{var t=ti()
t.__click=[Zo,d,c,u],ce(e,t)},y=e=>{var t=ai(),n=ge(ie(t),2),r=pe(n)
fe((()=>me(r,ut(mo,"$trackStatus",a)))),ce(e,t)}
he(g,(e=>{ve(d)?e(y,!1):e(k)}))
var w=ge(p,2),$=e=>{var t=ni(),n=ie(t),c=ge(pe(n),2),d=ge(pe(c),2),f=pe(d),m=ge(d,4),v=pe(m),p=ge(m,4),h=pe(p),b=ge(c,4),g=ge(pe(b),2),k=pe(g),y=ge(g,4),w=pe(y),$=ge(y,4),C=pe($),L=ge($,4),D=pe(L),V=ge(L,4),M=pe(V),A=ge(V,4),S=pe(A),N=ge(A,4),H=pe(N),B=ge(N,4),x=pe(B),T=ge(B,4),E=pe(T),G=ge(T,4),P=pe(G),R=ge(G,4),F=pe(R),_=ge(R,4),I=pe(_),O=ge(n,2),j=ge(pe(O),2),W=ge(pe(j),2),q=pe(W),Y=ge(W,4),K=pe(Y),z=ge(j,4),U=ge(pe(z),2),Q=pe(U),X=ge(U,4),J=pe(X),Z=ge(X,4),ee=pe(Z),te=ge(Z,4),ae=pe(te),ne=ge(te,4),re=pe(ne),se=ge(ne,4),oe=pe(se),le=ge(se,4),ue=pe(le),de=ge(le,4),ve=pe(de),he=ge(de,4),be=pe(he),ke=ge(he,4),ye=pe(ke),we=ge(O,2)
Jo(pe(we),{members:u}),fe((()=>{me(f,r().noOfRelics),me(v,r().leadDefenderBonus),me(h,ut(jo,"$ldcloak",a)),me(k,s().attackValue),me(w,o().attack),me(C,s().defenseValue),me(D,o().defense),me(M,s().armorValue),me(S,o().armor),me(H,s().damageValue),me(x,o().damage),me(E,s().hpValue),me(P,o().hp),me(F,s().cloaked),me(I,ut(qo,"$processed",a)),me(q,o().dc225),me(K,o().dc175),me(Q,i().attack),me(J,l().attack),me(ee,i().defense),me(ae,l().defense),me(re,i().armor),me(oe,l().armor),me(ue,i().damage),me(ve,l().damage),me(be,i().hp),me(ye,l().hp)})),ce(e,t)}
he(w,(e=>{ve(d)&&e($)})),ce(e,m),ue(),n()}Me(["click"])
let oi=0
function ii(e,t){var a,r
t?.response?.data?.defenders?.length>0&&(a=n("dialog-relic"),r=t.response.data,oi&&ft(oi),oi=De(si,{props:{relicData:r},target:a}))}function li(e,t){"ACT_REPAIR"===t&&GameData.fetch(vt+h+pt+ht)}let ci=!1
function ui(e,t,a,n,r,s,o,i,l){return e.beginPath(),e.arc(s+i/2,o+l/2,i/6,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.lineWidth=1,e.strokeStyle="black",e.stroke(),!0}function di(){if(!ci){const e=GameController.Realm.footprintTexture
e.color=D("footprintColor"),e.Draw=ui,ci=!0}}function fi(){GameController?.Realm?.footprintTexture&&(di(),$.unsubscribe("fixed.realm",fi))}let mi=0
function vi(e){$("#statbar-gold").css("background-color",e)}function pi(){$("#HelperSendTotal").html(c(D("currentGoldSentTotal"))),Number(GameData.player().gold)>mi?vi("red"):vi("inherit")}function hi(){mi=D("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${D("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${c(mi)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${c(D("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",kt),pi(),$.subscribe(yt,pi)}let bi=0,gi=0,ki=0,yi=0,wi=0,$i=0
async function Ci(){const e=await Cn({a:14,d:0,id:bi.id,item_id:bi.itemId}),t=e.response.response,a=e.response.msg
let n=a
if(0!==t){const e=a.indexOf("<");-1!==e&&(n=a.substring(0,e))}else n=`You purchased ${e.response.data.name} for ${c(e.response.data.cost)} gold.`
d($i,`${n}<br>`)}async function Li(){const e=Qt(wi.value)
e&&(v("NewMap","quickBuy"),await Xe(Ut(e,Ci)),GameData.doAction(14,3,{id:bi.id,item_id:bi.itemId},0),ki.close())}function Di(){yi?s("",$i):function(){yi=a({className:"fshClear",textContent:"Select how many to quick-buy:"}),wi=Tt({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),i(yi,wi)
const e=f({textContent:"Quick-buy"})
m(e,Li),i(yi,e),$i=a(),i(yi,$i),i(gi,yi)}()}function Vi(e,t){bi=t,gi=gi||n("shopDialogConfirm"),gi&&(ki=ki||$(gi).data("hcsWorldDialogShopConfirm"),ki&&Di())}var Mi=de('<div id="tp-overlay" class="svelte-1lrosbw"> </div>')
function Ai(e,t){se(t,!0)
let a=Ve(0),n=0,r=Ve(!1)
function s(){const e=GameData.player().teleportCooldown
Le(a,e-Ct()+n),ve(a)>0||(clearInterval(ve(r)),Le(r,!1),t.tpButton.classList.remove("cooldown"))}window.$.subscribe("stats.player",s),window.$.subscribe($t,(function(e,t){n=Ct(),s(),ve(r)||0!==t.response.response||Le(r,setInterval((()=>{s()}),1e3),!0)}))
var o=oe(),i=ie(o),l=e=>{var t=Mi(),n=pe(t)
fe((()=>me(n,ve(a)))),ce(e,t)}
he(i,(e=>{ve(r)&&e(l)})),ce(e,o),ue()}function Si(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}function Ni(e,t){return"-"===t?e:"-"===e||e>t?"-":e}const Hi=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${Si(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${Si(e)}`]]
function Bi(e,t){return t[0](e)}function xi(e){e.playerHits=Ni(e.numberOfHitsRequired,e.numberOfCreatureHitsTillDead),e.creatureHits=Ni(e.numberOfCreatureHitsTillDead,e.numberOfHitsRequired),e.fightStatus=function(e){const t=Hi.find(u(Bi,e))
return t?t[1](e):"Unknown"}(e)}function Ti(e,t,a){return e.callback.groupExists?t:a}function Ei(e,t,a,n){t>0&&(e.extraNotes+=`${a} = ${Math.floor(n*t*.001)}<br>`)}const Gi=e=>Ti(e,e.callback.groupArmorValue,e.player.armorValue)
function Pi(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function Ri(e){!function(e){const t=Gi(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}(e),function(e){Ei(e,e.player.sanctuaryLevel,"Sanc Bonus Armor",e.player.armorValue)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),Pi(e)}const Fi=e=>Ti(e,e.callback.groupAttackValue,e.player.attackValue)
function _i(e){return Math.floor(e.creature.defense*e.player.darkCurseLevel*at)}function Ii(e){const t=Fi(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${_i(e)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-_i(e)
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}const Oi=(e,t,a)=>Math.max(Math.ceil((e-t+1)/a/.0025),0)
function ji(e){e.lowestCALevelToStillHit=Oi(e.counterAttackBonusAttack,e.hitByHowMuch,e.player.attackValue),e.lowestCALevelToStillKill=Oi(e.counterAttackBonusDamage,e.damageDone,e.player.damageValue)}function Wi(e){ji(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function qi(e,t,a){e[t]>203?e.extraNotes+=`Even with CA203 you cannot ${a} this creature<br>`:0!==e[t]&&(e.extraNotes+=`You need a minimum of CA${e[t]} to ${a} this creature<br>`)}function Yi(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&Wi(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){ji(e),qi(e,"lowestCALevelToStillHit","hit"),qi(e,"lowestCALevelToStillKill","1-hit kill")}(e)}const Ki=e=>Ti(e,e.callback.groupHPValue,e.player.hpValue)
const zi=e=>Ti(e,e.callback.groupDamageValue,e.player.damageValue)+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage,Ui=e=>Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp))
function Qi(e){if(function(e){const t=Ki(e),{fortitudeLevel:a}=e.player
e.fortitudeExtraHPs=Math.floor(t*a*.001),a>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e),e.overallDamageValue=zi(e),e.damageDone=Ui(e),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}const Xi=e=>Ti(e,e.callback.groupDefenseValue,e.player.defenseValue),Ji=e=>Math.floor(Xi(e)*e.player.constitutionLevel*.001)
const Zi=e=>e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue
function el(e){e.overallDefenseValue=Xi(e)+Ji(e)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${Ji(e)}<br>`)}(e),function(e){Ei(e,e.player.flinchLevel,"Flinch Bonus Attack Reduction",e.creature.attack)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*Zi(e)),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(Zi(e)-50))}function tl(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}const al=e=>e.creatureHitByHowMuch>=0?"Yes":"No",nl=e=>e.hitByHowMuch>0?"Yes":"No",rl=e=>`<span style="color:#333333">${e}</span>`,sl=e=>`<tr>${e}</tr>`,ol=(e,t)=>`<td${t%2?"":' class="fshRight"'}>${e}</td>`,il=e=>sl(e.map(ol).join("")),ll=e=>sl(`<td bgcolor="#CD9E4B" colspan="4" align="center">${(e=>e.callback.groupExists?"Group ":"")(e)}Combat Evaluation</td>`),cl=e=>il([rl("Will I hit it?"),nl(e),rl("Extra Attack:"),`( ${e.hitByHowMuch} )`]),ul=e=>il([rl("# Hits to kill it?"),e.numberOfHitsRequired,rl("Extra Damage:"),`( ${e.damageDone} )`]),dl=e=>il([rl("Will I be hit?"),al(e),rl("Extra Defense:"),`( ${-1*e.creatureHitByHowMuch} )`]),fl=e=>il([rl("# Hits to kill me?"),e.numberOfCreatureHitsTillDead,rl("Extra Armor + HP:"),`( ${-1*e.creatureDamageDone} )`]),ml=e=>il([rl("# Player Hits?"),e.playerHits,rl("# Creature Hits?"),e.creatureHits]),vl=e=>sl(`${ol(rl("Fight Status:"),0)}<td colspan="3"><span>${e.fightStatus}</span></td>`),pl=e=>sl(`${ol(rl("Notes:"),0)}<td colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td>`)
let hl=0,bl=0,gl=0
function kl(){return ar(bl)?"Remove from do not kill list":"Add to the do not kill list"}function yl(){s(kl(),gl)}function wl(){v("NewMap","doNotKillLink")
const e=t.doNotKillList.indexOf(bl);-1===e?t.doNotKillList.push(bl):t.doNotKillList.splice(e,1),yl(),B("doNotKillList",t.doNotKillList.join()),rr()}function $l(){gl?yl():function(){gl=f({className:"fshBl",textContent:kl()})
const e=a({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
i(e,gl),i(hl,e),m(gl,wl)}()}function Cl(e,t){!function(e){if(!hl){const t=W("body",e)
1===t.length&&([hl]=t)}}(t),hl&&(bl=X(e),$l())}let Ll=0,Dl=0,Vl=0,Ml=0
function Al(){Vl||(Dl||(Dl=a(),i(Ll,Dl),i(Ll,a({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Vl=a(),i(Dl,Vl))}function Sl(e){Al(),Ee(e,Vl)}function Nl(e){Ml||(Al(),Ml=a(),i(Dl,Ml)),Ee(e,Ml)}function Hl(e,t){const a={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,a){3===a&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,a,e.type),a}function Bl(e,a,n){const r={}
r.callback=n,r.player=co(a),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(r),r.creature=Hl(e.response.data,r.player.superEliteSlayerMultiplier),function(e){var t
t=e,[tl,Ii,Qi,el,Ri,xi,Yi].forEach((e=>e(t)))}(r),r.evaluatorHTML=function(e){return`<table width="100%"><tbody>${ll(e)}${cl(e)}${ul(e)}${dl(e)}${fl(e)}${ml(e)}${vl(e)}${pl(e)}</tbody></table>`}(r),n.groupExists?Nl(r.evaluatorHTML):Sl(r.evaluatorHTML)}function xl(e){return e.members[0].name===p()}async function Tl(e,t,a){if(a){!function(e,t,a){if(!a.r?.attributes)return
const n=a.r.attributes
Bl(e,t,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}(e,t,await qt(a))}}async function El(e,t){const a=function(e){if(b(e.r))return e.r.find(xl)?.id}(await et())
Tl(e,t,a)}async function Gl(e,t){if(Ll||(Ll=n("dialog-viewcreature")),Ll&&(Sl(""),Nl(""),t?.response?.data)){Cl(t.response.data.name,Ll)
const e=await Dt(!0)
e?._skills&&function(e,t){e.player.hasGroup&&El(e,t),Bl(e,t,{groupExists:!1})}(t,e)}}let Pl=0
function Rl(e){const t=W("verbs",e)
1===t.length&&Vt(t[0])}function Fl(){if(!Pl)return
const e=n("actionList")
J("player",e).forEach(Rl)}const _l="showHuntingBuffs"
function Il(){return`${Xt(_l)} ${Jt("enabledHuntingMode")}<select name="enabledHuntingMode"><option value="1"${Zt(t.enabledHuntingMode,"1")}>${t.buffsName}</option><option value="2"${Zt(t.enabledHuntingMode,"2")}>${t.buffs2Name}</option><option value="3"${Zt(t.enabledHuntingMode,"3")}>${t.buffs3Name}</option></select>`}let Ol=0,jl=""
const Wl=()=>Ol,ql=()=>jl
function Yl(){const e=[null,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
b(e)&&([Ol,jl]=e)}function Kl(e){"enabledHuntingMode"===e.target.name&&(v("NewMap","toggleEnabledHuntingMode"),t.enabledHuntingMode=e.target.value,B("enabledHuntingMode",t.enabledHuntingMode),Yl(),GameData.fetch(h))}function zl(e){v("NewMap","togglePref"),t[e]=!t[e],B(e,t[e])}const Ul={hideSubLvlCreature:function(){zl("hideSubLvlCreature"),GameData.fetch(ht)},hidePlayerActions:function(){v("NewMap","toggleHidePlayerActions"),Pl=!Pl,B("hidePlayerActions",Pl),GameData.fetch(ht)},showCreatureInfo:()=>zl("showCreatureInfo"),showHuntingBuffs:function(){zl("showHuntingBuffs"),GameData.fetch(h)},showMonsterLog:()=>zl("showMonsterLog"),showTitanInfo:function(){zl("showTitanInfo"),Js(GameData.realm().dynamic)},showBuffInfo:function(){zl("showBuffInfo"),Ra()}}
function Ql(e){const t=Ul[e.target.name]
ee(t)&&(e.target.blur(),t(e))}function Xl(){const e=n("worldPage")
if(!e)return
const t=a({className:"fshCenter fshFten"}),r=a({id:"fshWorldPrefs",innerHTML:`${Xt("showCreatureInfo")}&nbsp;&nbsp;${Xt("showMonsterLog")}&nbsp;&nbsp;${Xt("showTitanInfo")}&nbsp;&nbsp;${Xt("showBuffInfo")}<br>${Xt("hideSubLvlCreature")}&nbsp;&nbsp;${Xt("hidePlayerActions")}&nbsp;&nbsp;${Il()}`})
m(r,Ql),L(r,"change",Kl),i(t,r)
const s=a()
return i(t,s),i(e,t),s}const Jl=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function Zl(){var e
t.combatEvaluatorBias=D("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,Jl[e]?Jl[e].generalVariable:1.1053),t.hpVariable=function(e){return Jl[e]?Jl[e].hpVariable:1.1}(t.combatEvaluatorBias)}function ec(e,t){return e[t.name]=!0,e}function tc(e,t,a){return e[X(a)]||t.push(a),t}function ac(e){Ee("",e)}function nc(e,t){const a=t.b.reduce(ec,{}),n=Wl().reduce(u(tc,a),[])
n.length>0?function(e,t){Ee(`You are missing some ${ql()} hunting buffs<br>(${t.join(", ")})`,e)}(e,n):ac(e)}function rc(e,a,n){Wl()&&function(e,a){t.showHuntingBuffs?nc(e,a):ac(e)}(e,n)}function sc(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function oc(e){const t=I(e)
return t?.actions?.length?(t.actions=t.actions.filter(u(sc,function(e){return e.realm?.minlevel||GameData.realm().minlevel}(t))),Mt(t)):e}function ic(e,a){t.hideSubLvlCreature&&function(e){return e.data?.d&&ea(e.data.d,ht)}(a)&&(e.dataFilter=oc)}function lc(e){t[e[0]]=At(e[1])}function cc(e){t[e]=At(e)}function uc(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(lc),["doNotKillList"].forEach(cc)}function dc(e){t[e[0]]=D(e[1])}function fc(e){t[e]=D(e)}function mc(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showHuntingBuffs","showHuntingBuffs"]].forEach(dc),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(fc)}const vc=[function(){let e=0
window.requestAnimationFrame=t=>{const a=window.performance.now(),n=Math.max(e+16,a)
return e=n,setTimeout((()=>{t(e)}),n-a)},window.cancelAnimationFrame=clearTimeout},function(){Zl(),uc(),mc()
const e=Xl()
$.ajaxPrefilter("JSON",ic),t.hideSubLvlCreature&&GameData.fetch(ht),function(e){Yl()
const a=u(rc,e)
$.subscribe(g,a),t.showHuntingBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(e),Pl=D("hidePlayerActions"),$.subscribe(ae,Fl),Fl()},function(){bt(),gt()&&hi()},function(){$.subscribe(Lt,Gl)},function(){kr.forEach(yr)},function(){D("enableCreatureColoring")&&i(document.body,Rt("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(ae,rr),rr(),function(){const e=GameData.doAction
GameData.doAction=ir(e)}()},function(){xr(),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",Rr),Rr()},function(){$.subscribe(mt,li)},function(){D("keepLogs")&&$.subscribe(P,wn)},function(){window.initialGameData&&eo(0,window.initialGameData),$.subscribe(`${Fe} ${_e}`,eo)},function(){$.subscribe(wt,Vi)},function(){$.subscribe(dt,ii)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){V("#mapTooltip")},function(){ln(),$.subscribe(y,cn),$.subscribe(w,un)},function(){Ra(),$.subscribe(`${g} ${k}`,Ra)},function(){L(n("actionList"),"mouseover",tr)},function(){const{body:e}=document
L(e,"keydown",kn),L(e,"keyup",yn)},function(){const e=globalThis.$("#world-event-badge")
e.length&&(e.off(),m(e[0],br))},function(){const e=E(".actionListHeaderButton.teleport")
De(Ai,{target:e,props:{tpButton:e}})},function(){var e
D("messageStack")&&(e=n("messageCenter"),De(Lr,{target:e}))},function(){GameController?.Realm?.footprintTexture?di():$.subscribe("fixed.realm",fi)}]
function pc(){e(vc)}export{pc as default}
//# sourceMappingURL=newMap-DqHI-Hb-.js.map
