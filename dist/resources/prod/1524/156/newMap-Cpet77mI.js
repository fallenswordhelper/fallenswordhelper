import{e}from"./executeAll-DIAWIge1.js"
import{ay as t,u as a,g as n,b6 as r,k as s,aQ as o,i,aD as l,aM as c,c as u,a2 as d,aq as f,o as m,s as v,b7 as p,b8 as h,ad as b,b9 as g,ba as k,bb as y,bc as w,a5 as L,b as C,aA as D,bd as V,aT as M,be as A,bf as S,bg as N,bh as H,av as B,h as x,bi as T,q as E,bj as G,bk as P,f as F,ab as R,bl as _,bm as O,bn as I,bo as j,bp as W,bq as q,br as K,bs as Y,bt as z,bu as U,bv as Q,bw as J,aB as X,l as Z,bx as ee,by as te,bz as ae,V as ne,$ as re,x as se,aF as oe,D as ie,aE as le,B as ce,P as ue,Q as de,J as fe,E as me,L as ve,G as pe,bA as he,C as be,F as ge,bB as ke,N as ye,S as we,bC as $e,bD as Le,al as Ce,n as De,ap as Ve,ak as Me,bE as Ae,I as Se,bF as Ne,bG as He,bH as Be,bI as xe,bJ as Te,d as Ee,aJ as Ge,bK as Pe,bL as Fe,bM as Re,bN as _e,y as Oe,bO as Ie,ac as je,bP as We,bQ as qe,bR as Ke,bS as Ye,aw as ze,bT as Ue,bU as Qe,a0 as Je,bV as Xe,bW as Ze,bX as et,bY as tt,bZ as at,b_ as nt,b$ as rt,c0 as st,c1 as ot,c2 as it,c3 as lt,c4 as ct,c5 as ut,c6 as dt,c7 as ft,c8 as mt,c9 as vt,ca as pt,cb as ht,cc as bt,cd as gt,ce as kt,cf as yt,cg as wt,ch as $t,ci as Lt,cj as Ct,ck as Dt,cl as Vt,az as Mt,cm as At}from"./calfSystem-79LsojAC.js"
import{t as St}from"./toggleForce-br4z9gGd.js"
import{r as Nt,a as Ht}from"./roundToString-CYi3Bm0q.js"
import{d as Bt,q as xt}from"./quickbuffSuccess-ChoNw-r7.js"
import{c as Tt}from"./createInput-7MlQDlWD.js"
import{c as Et}from"./createLabel-CFBkgauW.js"
import{c as Gt}from"./idbLogger-D2TRrju6.js"
import{r as Pt}from"./rnd-D_QmA-Fa.js"
import{c as Ft}from"./createStyle-BdMrx8ah.js"
import{c as Rt}from"./createTable-BhzoxFRT.js"
import{t as _t,g as Ot,a as It}from"./getTitanString-DrmoKrfx.js"
import{r as jt}from"./reduceBuffArray-Diy1E3zc.js"
import{r as Wt}from"./reliclist-DSDwQYJH.js"
import{d as qt}from"./daGroupStats-DJz-PMQd.js"
import{d as Kt,m as Yt}from"./mercEffect-D984XDdG.js"
import{a as zt}from"./attribsToArray-DNO7bh5q.js"
import{r as Ut}from"./remainingPages-BUotk4St.js"
import{t as Qt}from"./testQuant-Cl6JKNon.js"
import{s as Jt,j as Xt}from"./simpleCheckbox-GIXRLUIF.js"
import{i as Zt}from"./isSelected-BWnMzKlW.js"
import{b as ea}from"./bitwiseAnd-C5gmj-aX.js"
import"./buffReportParser-B5jKInr0.js"
import"./buffObj-BIwiFUIW.js"
import"./view-DCQJm9-2.js"
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
if(t)return t.find(u(wa,e))}const La=["red","orange","yellow"]
let Ca=0,Da=0
async function Va(){if(v("NewMap","recastClick"),$a("Summon Shield Imp"))return
!function(e){xt(e)&&GameData.fetch(h)}(await Bt([p()],[55]))}const Ma=["imp-0","imp-1","imp-1"]
function Aa(e,t){Ca?St(Ca,!1):function(e){[Ca]=e.children,s("Shield Imps Remaining: ",Ca),Da=o(),i(Ca,Da),d(Ca,"&nbsp;")
const t=f({className:"xSmallLink",textContent:"Recast"})
i(Ca,t),m(t,Va)}(e)
const a=function(e){return e?Number(e.stack):0}(t)
Ca.className=function(e){return Ma[e]??"fshGreen"}(a),s(a,Da)}function Sa(e,t,a){t||a?Aa(e,t):Ca&&St(Ca,!0)}function Na(e){return 0===e.type}let Ha=0,Ba=0,xa=0,Ta=0,Ea=0,Ga=0
function Pa(){Ha=$a("Death Dealer"),Ba=$a("Doubler"),xa=$a("Counter Attack"),Ta=$a("Summon Shield Imp"),Ea=function(){const{dynamic:e}=GameData.realm()
return b(e)&&e.some(Na)}(),Ga=GameData.player().killStreak}function Fa(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",La[e.text()]||"#ad8043")}(),Pa()
const e=na([Ha,Ba,xa,Ta,Ea])
e&&(Sa(e,Ta,Ha),ya(e,Ha,Ea,Ga),ha(e,Ha,Ga),la(e,xa),fa(e,Ba))}function Ra(e){return o({textContent:e})}function _a(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function Oa(e,t,a){return Et({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:a})}function Ia(e){const t=a({className:"fshToggle"}),n=Tt({checked:e.prefVal,id:e.checkId,type:"checkbox"})
i(t,n)
const r=Oa(e.onClass,e.onTip,e.checkId)
i(t,r)
const s=Oa(e.offClass,e.offTip,e.checkId)
return i(t,s),i(e.worldName,t),n}let ja=0,Wa=0,qa=0,Ka=0,Ya=0,za=0,Ua=0,Qa=0,Ja=0
const Xa=e=>Ra(e?e.toString():"?")
function Za(e,t,n){const r=a({textContent:`${t} Lvl: `})
i(r,n),i(e,r)}function en(e,t,a){const n=f({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return i(a,n),n}function tn(e){!function(e){const t=a({className:"fshFsty"})
Wa=Xa(GameData.realm().minlevel),Za(t,"Min",Wa),qa=Xa(GameData.player().level),Za(t,"Your",qa),i(e,t)}(e),Ka=en("fshFormGroup","Quick Create Attack Group",e),Ya=en("fshQuickBuff","Open Quick Buff Popup",e),za=en("fshRealmMap","Open Realm Map",e),Ua=en("fshTempleOne","Search map in Ultimate FSG",e)}function an(){tn(ja),function(e){if(D("showSpeakerOnWorld")){const t=D("playNewMessageSound")
Qa=Ia({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(ja),function(e){const a=t.huntingMode
Ja=Ia({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(ja)}const nn=[[()=>Qa,function(){v("NewMap","toggleSound"),B("playNewMessageSound",!D("playNewMessageSound"))}],[()=>Ja,function(){v("NewMap","toggleHuntMode"),t.huntingMode=!t.huntingMode,B("huntingMode",t.huntingMode)}]],rn=[[()=>Ka,function(e){v("NewMap","doFormGroup"),V(e),GameData.doAction(12,401,{},0)}],[()=>Ya,function(){v("NewMap","openQuickBuff"),M(A())}],[()=>za,function(){v("NewMap","openRealmMap"),window.open(`${S+N}map`,"fsMap")}],[()=>Ua,function(){v("NewMap","openUfsgMap")
const e=GameData.realm()
window.open(`${H}realms${N}view&realm_id=${e.id}`,"mapUfsg")}]]
function sn(e,t){const{target:a}=t,[,n]=e.find(([e])=>e()===a)??[]
n&&(a.blur(),n(a))}function on(e){return u(sn,e)}function ln(){ja||(ja=a({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),an(),m(ja,on(rn)),C(ja,"change",on(nn)),L(ja,n("worldCoord")))}function cn(e,t){Wa&&t.b.minlevel&&(_a(),s(t.b.minlevel,Wa))}function un(e,t){qa&&s(t.b,qa)}const dn=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"],fn=`url("${G}ui/world/icon_action_attack_`
let mn=!1
function vn(e){return E(".verb.attack",e)}function pn(e){const t=dn.indexOf(e.toUpperCase())
return x(`#actionList .actionListItem.creature.creature-${t}`)}function hn(e){e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""}function bn(e,t){null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${fn}${t+1}.png")`)}function gn(e){const t=["LEGENDARY","NORMAL"].flatMap(pn),a=pn("CHAMPION"),[n,r]=e?[t,a]:[a,t]
n.map(vn).filter(e=>null!==e).forEach(hn),r.slice(0,8).map(vn).forEach(bn)}function kn(e){if(!e.altKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(mn||gn(!0),mn=!0,!/(?:Digit|Numpad)[1-8]/.test(e.code))return
const t=pn("CHAMPION"),a=parseInt(e.code.slice(-1),10)-1
a<t.length&&function(e){const t=vn(e)
t&&(v("NewMap","ChampionAttack"),T(t))}(t[a])}function yn(e){!mn||e.ctrlKey&&e.shiftKey||(mn=!1,gn(!1))}function wn(e,t){0===t.response.response&&function(e){Gt({combat:e.response.data,player:{buffs:F(e.player.buffs.filter(({id:e})=>[26,54].includes(e)).map(({id:e,level:t})=>[e,t]))},time:e.time})}(t)}function $n(e){return!e?.response?.data}async function Ln(e){const t=await _({cache:!1,url:"fetchdata.php",data:{...e,fshrnd:Pt()},dataType:"text"})
return O(t)??{response:{msg:"Server Error",response:1}}}const Cn=[]
const Dn=(e,t)=>e===Number(t.response.data.id)
function Vn(e,t){e(t)}async function Mn(e,t){const a=Cn.find(u(Dn,e))
if(a)return function(e){return new Promise(t=>{I(3,Vn,[t,e])})}(a)
const n=await Ln({a:1,d:0,id:e,passback:t})
return function(e){$n(e)||Cn.push(e)}(n),n}let An=0,Sn=0,Nn=0,Hn=0,Bn=0,xn=0
const Tn=()=>An,En=()=>Sn,Gn=()=>Nn,Pn=()=>Hn,Fn=()=>Bn
function Rn(e,t){return j(W(t,e))}function _n(){var e
An=GameData.player().level,e=n("statbar-character-tooltip-stats"),Nn=Rn(e,q),Sn=Rn(e,K),Bn=Rn(e,Y),Hn=Rn(e,z),xn=Rn(e,U)}const On=e=>`<td>${e}:&nbsp;</td>`,In=e=>`<td width="40%">${e}</td>`
function jn([e,t,a,n,r]){return[On(e),In(`${t} (your ${a}:<span class="${n}">${r()}</span>)`)]}function Wn(e){return["<tr>",...e,"</tr>"].join("")}function qn(e,t){return Wn([...jn(e),...jn(t)])}function Kn(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function Yn(e,t,a){return function(e){return`<table><tr><td><img src="${G}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return Wn([On("Class"),In(e.creature_class),...jn(["Level",e.level,"level",t,Tn])])}(e,a)+function(e){return qn(["Attack",e.attack,"defense","fshYellow",En],["Defense",e.defense,"attack","fshYellow",Gn])}(e)+function(e){return qn(["Armor",e.armor,"damage","fshYellow",Pn],["Damage",e.damage,"armor","fshYellow",Fn])}(e)+function(e,t){return Wn([On("HP"),In(`${e.hp} (your HP:<span class="fshYellow">${xn}</span>)(1H: <span class="fshRed">${t}</span>)`),On("Gold"),In(e.gold)])}(e,t)+'<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(Kn).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function zn(e){if(!$n(e))return function(e){const a=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let n="fshYellow"
return _n(),Tn()>e.level&&(n="fshRed"),Yn(e,a,n)}(e.response.data)}const Un=["verb","view","tip-static"]
async function Qn(e,t){const a=Q((n=e).parentNode.children).indexOf(n)
var n
const r=await Mn(GameData.actions()[a].data.id,a)
$n(r)||function(e,t){const a=zn(t)
e.set("content.text",a)}(t,r)}function Jn(e,t){v("NewMap","CreatureInfo"),e.classList.add("fshTip")
var a
const n=(a="Loading...",$(e).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:a},hide:{effect:!1}})).qtip("api")
n&&Qn(t,n)}function Xn(e,t){return a=e,Un.every(e=>R(e,a))&&!R("fshTip",e)&&R("creature",t)
var a}function Zn(e){if(!t.showCreatureInfo)return
const{target:a}=e,n=a.parentNode.parentNode.parentNode
Xn(a,n)&&Jn(a,n)}function er(e){return t.doNotKillList.includes(J(e))}function tr(e){e.classList.toggle("fshBlue",er(Z(e)))}function ar(){const e=n("actionList")
X("creature",e).forEach(tr)}function nr(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(er(e))return v("NewMap","creatureOnList"),n("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const rr={2:function(e){return function(t,a,n,r){nr(n.passback)||e(t,a,n,r)}}}
function sr(e){return function(t,a,n,r){const s=rr[t];(function(e){return e&&ee(e)})(s)&&function(e){return te(e)||0===e}(r)?s(e)(t,a,n,r):e(t,a,n,r)}}function or(){return e={subcmd:"contrib"},ne({cmd:"globalquests",...e})
var e}var ir=ce('<a><img alt="guild logo" class="svelte-2qtc6g"/></a>'),lr=ce('<tr class="svelte-2qtc6g"><td> </td><td><!></td><td><a> </a></td><td> </td></tr>'),cr=ce('<table id="world-event-contrib-table" class="svelte-2qtc6g"><tbody><tr class="svelte-2qtc6g"><td class="header"></td><td class="header"></td><td class="header">Username</td><td class="header">Kills</td></tr><!></tbody></table>'),ur=ce('<p style="color: red"> </p>')
function dr(e,t){se(t,!0)
var a=oe(),n=ie(a)
le(n,()=>t.promise,e=>{var t=ke("Loading...")
ve(e,t)},(e,t)=>{var a=he(()=>{var{r:e}=fe(t)
return{list:e}}),n=he(()=>fe(a).list),r=oe(),s=ie(r),o=e=>{var t=cr(),a=me(t),r=be(me(a))
ge(r,19,()=>fe(n),({player:e,value:t})=>e.id,(e,t,a)=>{let n=()=>fe(t).player
var r=lr(),s=me(r),o=me(s),i=be(s),l=me(i),c=e=>{var t=ir(),a=me(t)
ue(()=>{we(t,"href",`${Le??""}${n().guild_id??""}`),we(a,"src",`${G??""}guilds/${n().guild_id??""}_mini.png`)}),ve(e,t)}
pe(l,e=>{n().guild_id&&e(c)})
var u=be(i),d=me(u),f=me(d),m=be(u),v=me(m)
ue(()=>{de(o,fe(a)+1),we(d,"href",`${$e??""}${n().name??""}`),de(f,n().name),de(v,fe(t).value)}),ve(e,r)}),ve(e,t)},i=e=>{var t=ke("Server Error")
ve(e,t)}
pe(s,e=>{b(fe(n))?e(o):e(i,!1)}),ve(e,r)},(e,t)=>{var a=ur(),n=me(a)
ue(()=>de(n,fe(t).message)),ve(e,a)}),ve(e,a),ye()}const fr=Ce({promise:Promise.resolve()})
let mr=0
function vr(e){fr.promise=re(or),mr||(mr=De(dr,{props:fr,target:e}))}function pr(){v("NewMap","GlobalTop")
const e=n("world-event-contrib")
vr(e),globalThis.$(e).dialog({title:"Top 100 Event Contributers",minWidth:312,height:300,zIndex:9999})}function hr(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const br=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function gr(e,t){var a
D(e)&&(a=t+1,$.subscribe(ae,u(hr,a)),hr(t+1))}var kr=(e,t,a)=>t(a()),yr=ce('<div class="count svelte-1t9oc1"> </div>'),wr=ce("<div> <!></div>")
function $r(e,t){se(t,!0)
let a=Me(Ce([]))
const n=window.$("#messageCenter").data().hcsWorldMessageCenter
const r=function*(){for(let e=0;;e++)yield e}()
function s(){n._reposition()}function o(e){Se(a,fe(a).filter(({msg:t})=>t!==e),!0),s()}n._displayMessage=async function(e,t,n=3e3){const o=r.next().value
Se(a,[...fe(a),{msg:e,type:t,expire:o}],!0),setTimeout(()=>{Se(a,fe(a).filter(({expire:e})=>e!==o),!0)},n),await Ne(),s()}
var i=oe(),l=ie(i)
ge(l,17,()=>{return e=fe(a),Ae(e,"msg").map(({msg:t,type:a})=>({msg:t,type:a,count:e.filter(({msg:e})=>e===t).length}))
var e},({msg:e,type:t,count:a})=>e,(e,t)=>{let a=()=>fe(t).msg,n=()=>fe(t).count
var r=wr()
r.__click=[kr,o,a]
var s=me(r),i=be(s),l=e=>{var t=yr(),a=me(t)
ue(()=>de(a,`x${n()??""}`)),ve(e,t)}
pe(i,e=>{n()>1&&e(l)}),ue(()=>{He(r,1,`fsh-message ${fe(t).type??""}`,"svelte-1t9oc1"),de(s,`${a()??""} `)}),ve(e,r)}),ve(e,i),ye()}Ve(["click"])
let Lr=0
function Cr(e){Lr[e.name]?Lr[e.name].seen&&(Lr[e.name].seen+=1):(Lr[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,Lr[e.name]))}function Dr(e,t,a){return t?e(t,a):a}function Vr(e,t){const a=e||{}
return a.min=Dr(Math.min,a.min,t),a.max=Dr(Math.max,a.max,t),a}const Mr=["attack","armor","damage","defense","hp"]
function Ar(e,t,a){const n=Vr(t[a],Number(e[a]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[a],n)&&(t[a]=n)}function Sr(e,t){e[t.name]=Vr(e[t.name],Number(t.value))}function Nr(e){Lr||(Lr={}),Cr(e),function(e,t){Mr.forEach(u(Ar,e,t))}(e,Lr[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(u(Sr,t.enhancements)))}(e,Lr[e.name]),xe("fsh_monsterLog",Lr)}async function Hr(){!function(e){Lr=e||{}}(await Be("fsh_monsterLog"))}const Br=[]
function xr(e){var a
$n(e)||(a=e.response.data,t.showMonsterLog&&Nr(a))}function Tr(e,t){return e.id===t.id}async function Er(e,t){if(6!==e.type||function(e){if(Br.find(u(Tr,e.data)))return!0
Br.push(e.data)}(e))return
xr(await Mn(e.data.id,t))}function Gr(){t.showMonsterLog&&(GameData.actions().forEach(Er),v("NewMap","MonsterLog"))}let Pr=""
function Fr(){return Te({subcmd:"scouttower"})}function Rr(e,[t,a,n]){const r=e.insertCell(-1)
return r.colSpan=t,n&&(r.className="header"),i(r,a()),r}function _r(e,t,a){const n=e.insertRow(-1)
return a&&(n.className="fshBlue"),function(e,t){t.forEach(u(Rr,e))}(n,t),n}function Or(e,t){_r(e,t[0],t[1])}function Ir(e,t){t.forEach(u(Or,e))}let jr=0,Wr=0,qr=0,Kr=0,Yr=0,zr=0,Ur=0,Qr=0
const Jr=()=>jr,Xr=()=>Ur
function Zr(){jr=Ra("Current"),Wr=Ra("Kills"),qr=Ra("Member"),Kr=Ra("% of Total"),Yr=Ra("Status"),zr=Ra("Titan HP"),Ur=Ra("Total"),Qr=Ra("Your Guild")}let es=0,ts=0,as=0,ns=0,rs=0,ss=0,os=0,is=0,ls=0
const cs=()=>es,us=()=>ts,ds=()=>as,fs=()=>ns,ms=()=>rs,vs=()=>ss,ps=()=>os,hs=()=>is,bs=()=>ls
function gs(){es=o({innerHTML:"&nbsp;"}),ts=o({innerHTML:"&nbsp;"}),as=o(),ns=o(),rs=o(),ss=o(),os=o(),is=o(),ls=o()}let ks=0
const ys=()=>ks
function ws(){for(;ks.rows.length>8;)ks.deleteRow(8)}function $s(e){const t=o()
return i(t,e),l(t,"%"),t}const Ls=[[[5,cs,!0],[1,us,!0]]],Cs=[[[2,()=>zr,!0],[4,()=>Qr,!0]]],Ds=[[[2,function(){const e=o()
return i(e,ds()),l(e,"/"),i(e,fs()),e}],[4,ms]]],Vs=[[[2,()=>Yr,!0],[4,hs]],!0],Ms=[[[2,()=>qr,!0],[2,()=>Wr,!0],[2,()=>Kr,!0]]]
let As=0,Ss=0,Ns=""
function Hs(){Ss=null,As&&!R("fshHide",As)&&(St(As,!0),Ee("&nbsp;",es),Ee("&nbsp;",ts),s("",as),s("",ns),s("",rs),s("",ss),s("",os),Ee("",is),Ee("",ls),ws())}function Bs(e){return 0===e.type&&(Ss=e.base_creature_id,Ns=`(${e.x},${e.y})`,!0)}function xs(){if(As)St(As,!1)
else{const e=n("actionContainer")
As=a({className:"fshActionBox titanInfo"}),gs(),ks=Rt({className:"fshCenter"}),Zr(),Ir(ks,[Ls,Cs,Ds,[[[2,Jr,!0],[4,u($s,vs())]],!0],[[[2,Xr,!0],[4,u($s,ps())]],!0],Vs,[[[6,bs]]],Ms]),i(As,ys()),i(e,As)}}function Ts(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(Ge()+1e3*e)
return`${Pe(t.getHours())}:${Pe(t.getMinutes())} ${Pe(t.getDate())}/${Fe[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function Es(e){return Ht(It(e.max_hp-e.current_hp,e.kills),2)}function Gs(e){return Ht(100*e.kills/e.max_hp,2)}function Ps(e){!function(e){[[_t(e.creature.name),cs],[Ns,us],[e.current_hp,ds],[e.max_hp,fs],[e.kills,ms],[Es(e),vs],[Gs(e),ps]].forEach(([e,t])=>s(e,t()))}(e),Ee(function(e){return Ot(e.kills,e.max_hp,e.current_hp)}(e),hs()),Ee(Ts(e.cooldown),bs())}function Fs(e,t){return[[[2,()=>Ra(t.player.name)],[2,()=>Ra(t.kills.toString())],[2,()=>Ra(`${Ht(100*t.kills/e.kills,2)}%`)]]]}function Rs(e){return e.realm&&e.creature.base_id===Ss&&e.realm===Pr}function _s(e){const t=e.find(Rs)
t&&(Ps(t),function(e){if(ws(),!e.contributors)return
const t=e.contributors.map(u(Fs,e))
Ir(ys(),t)}(t))}let Os=null
const Is=e=>t.showTitanInfo&&b(e)&&e.some(Bs)
function js(e,t){(e=>e?.s&&b(e.r))(t)&&(_s(t.r),Is(GameData.realm().dynamic)?Os=window.setTimeout(e,3e4):Hs())}async function Ws(){js(Ws,await re(Fr))}function qs(e){Os&&(window.clearTimeout(Os),Os=null),Is(e)?(xs(),Ws()):Hs()}function Ks(e){var t
e.dynamic&&(t=e.name,Pr=t,qs(e.dynamic))}function Ys(e,t){t.realm?.name&&Ks(t.realm)}var zs=ce("<li><!></li>"),Us=ce('<ul class="svelte-1k3xw12"></ul>')
function Qs(e,t){se(t,!0)
let a=Oe(t,"members",19,()=>[])
const n=e=>`Buff ${qe[e]} 16`
var r=Us()
ge(r,21,()=>je(16,a()),Ie,(e,a,r)=>{var s=zs(),o=me(s)
We(o,{onclick:e=>function(e,a,r){r.target.blur(),Ke(`${Ye}&players=${e.join(",")}`,"fsQuickBuff",618,1e3,",scrollbars"),t.emitBuffBatch(n(a))}(fe(a),r,e),children:(e,t)=>{var a=ke()
ue(e=>de(a,e),[()=>n(r)]),ve(e,a)},$$slots:{default:!0}}),ve(e,s)}),ve(e,r),ye()}function Js(e,t){return e>10*t||e<t?e:10*t}const Xs=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function Zs(e,t,a){e[a[0]]=Number(t[a[1]])}const eo=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function to(e,t,a){e[a[0]]=t[a[1]]||0}function ao(e){if(!e._skills)return
const t=jt(e._skills),a={}
return function(e,t){Xs.forEach(u(Zs,e,t))}(a,e),function(e,t){eo.forEach(u(to,e,t))}(a,t),a.superEliteSlayerMultiplier=Nt(.002*a.superEliteSlayerLevel,2),ze(a.armorValue)&&function(e){e.attackValue=Js(e.attackBonus,e.levelValue),e.defenseValue=Js(e.defenseBonus,e.levelValue),e.armorValue=Js(e.armorBonus,e.levelValue),e.damageValue=Js(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(a),a}const no=Qe(["statusStore","Done."])
let ro=[]
const so=Ue(no,(e,t)=>{const a=ro.find(([t])=>t===e[0])
a?[,a[1]]=e:ro=[...ro,e]
const n=ro.find(([,e])=>"Done."!==e)
t(n?.[1]??"Done.")}),oo=Qe(0)
const io=Ue(oo,(e,t)=>{!async function(e,t){if(!e)return
no.set(["relicStore","Processing defending guild relics ... "])
const a=await Wt(e)
if(!a?.r?.relics)return void no.set(["relicStore","AJAX Error"])
const n=a.r.relics.length,r=1===n?1.5:Nt(1-n/10,2)
t({noOfRelics:n,relicMultiplier:r,leadDefenderBonus:`${String(100*r)}%`}),no.set(["relicStore","Done."])}(e,t)}),lo=Qe([])
const co=Ue(lo,(e,t)=>{!async function(e,t){if(!e.length)return
no.set(["defendersStore","Processing defending group stats ... "])
const a=[]
await Je(e.map(async(e,n)=>{const r=await Xe(e)
a.push([n,ao(r)]),t(a)})),no.set(["defendersStore","Done."])}(e,t)}),uo=Ue(co,(e,t)=>{const a=e?.find(([e])=>0===e)
a&&t(a[1])}),fo=(e,t,a)=>Math.ceil(a*(0===t?e:Ze))
function mo(e,t,[a,n]){return{armorValue:t.armorValue+fo(e,a,n.armorValue),attackValue:t.attackValue+fo(e,a,n.attackValue),damageValue:t.damageValue+fo(e,a,n.damageValue),cloaked:t.cloaked+(n.cloakLevel?1:0),defenseValue:t.defenseValue+fo(e,a,n.defenseValue),hpValue:t.hpValue+fo(e,a,n.hpValue)}}const vo=Ue([io,co],([e,t],a)=>{if(!e?.relicMultiplier||!t?.length)return
const n=t?.reduce(u(mo,e.relicMultiplier),{armorValue:0,attackValue:0,damageValue:0,cloaked:0,defenseValue:0,hpValue:0})
a(n)}),po=Qe(0),ho=e=>e.members[0].name===GameData.player().username
async function bo(e,t){if(!e)return
no.set(["groupStore","Processing attacking group stats ... "])
const a=await async function(){const e=await et()
return e?.r?.find(ho)?.id}(),n=a&&await async function(e){const t=await qt(e)
return zt(t?.r?.attributes)}(a),r=n&&await async function(e){const t=await Kt(),a=Yt(t)
return e?.map((e,t)=>e-a[t])}(n)
r&&t({attack:r[0],defense:r[1],armor:r[2],hp:r[3],damage:r[4]}),no.set(["groupStore","Done."])}const go=Ue(po,(e,t)=>{bo(e,t)}),ko=(e,t,a)=>Math.ceil(e*tt(t,0)*a),yo=(e,t)=>ko(e,t,.0025),wo=(e,t)=>ko(e,t,.001),$o=wo,Lo=wo,Co=wo,Do=wo,Vo=wo,Mo=(e,t)=>Math.ceil(e*(1+.001*tt(t,0))),Ao=(e,t)=>Math.ceil(e*(1-t*at)),So=Qe([]),No=Ue(So,(e,t)=>{e&&t(jt(e))}),Ho=Ue([No,go],([e,t],a)=>{if(!e||!t)return
const n=Mo(t.defense,e.Constitution),r=t.hp+$o(n,e.Fortitude)
a({dmgWithChiStrike:t.damage+Lo(r,e["Chi Strike"]),defWithConst:n,hpWithFortitude:r,nmv:yo(t.attack,e["Nightmare Visage"]),sanctuary:Co(t.armor,e.Sanctuary)})})
const Bo=Ue([Ho,uo,go],function([e,t,a],n){if(!e||!t||!a)return
const r=a.attack-e.nmv,s=Do(r,t.flinchLevel),o=Vo(e.dmgWithChiStrike,t.terrorizeLevel)
n({attack:r-s,defense:e.defWithConst+e.nmv,armor:a.armor+e.sanctuary,hp:e.hpWithFortitude,damage:e.dmgWithChiStrike-o})})
const xo=Ue([uo,vo],([e,t],a)=>{if(!e||!t)return
const n=yo(t.attackValue,e.nightmareVisageLevel),r=Mo(t.defenseValue,e.constitutionLevel)
!function([e,t,a,n,r,s]){a({attackWithNmv:t.attackValue-n,chiStrike:e.chiStrikeLevel,cloak:e.cloakLevel?"Yes":"No",dmgWithChiStrike:t.damageValue+Lo(s,e.chiStrikeLevel),defWithConst:r,hpWithFortitude:s,nmv:n,sanctuary:Co(t.armorValue,e.sanctuaryLevel)})}([e,t,a,n,r,t.hpValue+$o(r,e.fortitudeLevel)])})
const To=Ue([No,xo,vo],function([e,t,a],n){if(!e||!t||!a)return
const r=Do(t.attackWithNmv,e.Flinch),s=t.defWithConst+t.nmv,o=Vo(t.dmgWithChiStrike,e.Terrorize)
n({attack:t.attackWithNmv-r,dc225:Ao(s,225),dc175:Ao(s,175),defense:s,armor:a.armorValue+t.sanctuary,hp:t.hpWithFortitude,damage:t.dmgWithChiStrike-o})}),Eo=Ue(io,(e,t)=>{t({noOfRelics:e?.noOfRelics??"",leadDefenderBonus:e?.leadDefenderBonus??""})}),Go=Ue(uo,(e,t)=>{if(!e)return t("")
e.cloakLevel?t("Yes"):t("No")}),Po=Ue(vo,(e,t)=>{t({armorValue:e?.armorValue??"",attackValue:e?.attackValue??"",damageValue:e?.damageValue??"",cloaked:e?.cloaked??"",defenseValue:e?.defenseValue??"",hpValue:e?.hpValue??""})}),Fo=Ue(co,(e,t)=>{t(e?.length??"")}),Ro=Ue(To,(e,t)=>{t({attack:e?.attack??"",dc225:e?.dc225??"",dc175:e?.dc175??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""})}),_o=e=>({attack:e?.attack??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""}),Oo=Ue(go,(e,t)=>{t(_o(e))}),Io=Ue(Bo,(e,t)=>{t(_o(e))})
var jo=ce('<a class="svelte-3priew"> </a> ',1),Wo=ce(' <div class="missing svelte-3priew"></div>',1)
function qo(e,t){se(t,!0)
let a=Oe(t,"members",19,()=>[]),n=Me(Ce([]))
const r=[({username:e})=>!a().includes(e),({last_login:e})=>e,({last_login:e})=>e<st(),({last_login:e})=>e>ot(),({level:e})=>e<400||e>421,({level:e})=>e<441||e>450],s=e=>r.every(t=>t(e)),o=({username:e},{username:t})=>rt(e,t)
oo.subscribe(e=>{!async function(e){const t=await nt(e)
b(t)&&Se(n,t.filter(s).sort(o),!0)}(e)})
var i=Wo(),l=ie(i),c=be(l)
ge(c,21,()=>fe(n),({id:e,username:t})=>e,(e,t)=>{var a=jo(),n=ie(a),r=me(n)
be(n,1,!0).nodeValue=" ",ue(()=>{we(n,"href",`${it??""}${fe(t).id??""}`),de(r,fe(t).username)}),ve(e,a)}),ue(()=>de(l,`${(fe(n).length||"")??""} Offline guild members not at relic: `)),ve(e,i),ye()}function Ko(e,t,a,n){v("relic","fetchStats"),Se(t,!0),oo.set(a().controlled_by.guild_id),lo.set(n),po.set(GameData.player().hasGroup),So.set(GameData.player().buffs)}var Yo=ce('<div class="buff-links svelte-2rn368"><!></div>'),zo=ce('<button class="custombutton" type="button">Fetch Stats</button>'),Uo=ce('<div class="b-top svelte-2rn368">Processing</div> <div class="proc-stat svelte-2rn368"> </div> <div class="b-top svelte-2rn368">Assumptions</div> <div class="assume svelte-2rn368">Above calculations include Constitution, Fortitude, Nightmare Visage,\n        Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that\n        order) on both the defending group and attacking group.</div>',1),Qo=ce('<div class="middle svelte-2rn368"><div class="b-top svelte-2rn368">Defending Guild Stats</div> <div class="stat-grid svelte-2rn368"><div class="svelte-2rn368">Relic Count:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Lead Defender Bonus:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Lead Defender Cloaked:</div> <div class="svelte-2rn368"> </div></div> <div class="b-top svelte-2rn368">Other Defender Stats</div> <div class="stat-grid svelte-2rn368"><div class="svelte-2rn368">Raw Attack:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Attack w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Defense:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Defense w/buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Armor:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Armor w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Damage:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Damage w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw HP:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">HP w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Cloaked:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Processed:</div> <div class="svelte-2rn368"> </div></div></div> <div class="right svelte-2rn368"><div class="b-top svelte-2rn368">Adjusted Defense Values</div> <div class="stat-grid svelte-2rn368"><div class="svelte-2rn368">DC225:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">DC175:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">&nbsp;</div></div> <div class="b-top svelte-2rn368">Attacking Group Stats</div> <div class="stat-grid svelte-2rn368"><div class="svelte-2rn368">Raw Group Attack:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Group Attack w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Group Defense:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Group Defense w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Group Armor:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Group Armor w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Group Damage:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Group Damage w/ buffs:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Raw Group HP:</div> <div class="svelte-2rn368"> </div> <div class="svelte-2rn368">Group HP w/ buffs:</div> <div class="svelte-2rn368"> </div></div></div> <div class="bottom b-top svelte-2rn368"><!></div>',1),Jo=ce('<div class="body svelte-2rn368"><div class="left svelte-2rn368"><!> <!></div> <!></div>')
function Xo(e,t){se(t,!0)
const[a,n]=ct(),r=()=>ut(Eo,"$relicDisplay",a),s=()=>ut(Po,"$rawDefDisplay",a),o=()=>ut(Ro,"$defBuffedDisplay",a),i=()=>ut(Oo,"$rawGroupDisplay",a),l=()=>ut(Io,"$buffResultDisplay",a)
let c=Oe(t,"relicData",19,()=>({}))
const u=c().defenders.map(e=>e.player_name)
let d=Me(!1)
function f(e){v("relic",e)}lt(()=>{Se(d,!1),oo.set(0),lo.set([]),po.set(0),So.set([])})
var m=Jo(),p=me(m),h=me(p),b=e=>{var t=Yo()
Qs(me(t),{get members(){return u},emitBuffBatch:f}),ve(e,t)}
pe(h,e=>{c().is_owner&&e(b)})
var g=be(h,2),k=e=>{var t=zo()
t.__click=[Ko,d,c,u],ve(e,t)},y=e=>{var t=Uo(),n=be(ie(t),2),r=me(n)
ue(()=>de(r,ut(so,"$trackStatus",a))),ve(e,t)}
pe(g,e=>{fe(d)?e(y,!1):e(k)})
var w=be(p,2),$=e=>{var t=Qo(),n=ie(t),c=be(me(n),2),d=be(me(c),2),f=me(d),m=be(d,4),v=me(m),p=be(m,4),h=me(p),b=be(c,4),g=be(me(b),2),k=me(g),y=be(g,4),w=me(y),$=be(y,4),L=me($),C=be($,4),D=me(C),V=be(C,4),M=me(V),A=be(V,4),S=me(A),N=be(A,4),H=me(N),B=be(N,4),x=me(B),T=be(B,4),E=me(T),G=be(T,4),P=me(G),F=be(G,4),R=me(F),_=be(F,4),O=me(_),I=be(n,2),j=be(me(I),2),W=be(me(j),2),q=me(W),K=be(W,4),Y=me(K),z=be(j,4),U=be(me(z),2),Q=me(U),J=be(U,4),X=me(J),Z=be(J,4),ee=me(Z),te=be(Z,4),ae=me(te),ne=be(te,4),re=me(ne),se=be(ne,4),oe=me(se),le=be(se,4),ce=me(le),fe=be(le,4),pe=me(fe),he=be(fe,4),ge=me(he),ke=be(he,4),ye=me(ke),we=be(I,2)
qo(me(we),{get members(){return u}}),ue(()=>{de(f,r().noOfRelics),de(v,r().leadDefenderBonus),de(h,ut(Go,"$ldcloak",a)),de(k,s().attackValue),de(w,o().attack),de(L,s().defenseValue),de(D,o().defense),de(M,s().armorValue),de(S,o().armor),de(H,s().damageValue),de(x,o().damage),de(E,s().hpValue),de(P,o().hp),de(R,s().cloaked),de(O,ut(Fo,"$processed",a)),de(q,o().dc225),de(Y,o().dc175),de(Q,i().attack),de(X,l().attack),de(ee,i().defense),de(ae,l().defense),de(re,i().armor),de(oe,l().armor),de(ce,i().damage),de(pe,l().damage),de(ge,i().hp),de(ye,l().hp)}),ve(e,t)}
pe(w,e=>{fe(d)&&e($)}),ve(e,m),ye(),n()}Ve(["click"])
let Zo=0
function ei(e,t){var a,r
t?.response?.data?.defenders?.length>0&&(a=n("dialog-relic"),r=t.response.data,Zo&&ft(Zo),Zo=De(Xo,{props:{relicData:r},target:a}))}function ti(e,t){"ACT_REPAIR"===t&&GameData.fetch(vt+h+pt+ht)}let ai=!1
function ni(e,t,a,n,r,s,o,i,l){return e.beginPath(),e.arc(s+i/2,o+l/2,i/6,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.lineWidth=1,e.strokeStyle="black",e.stroke(),!0}function ri(){if(!ai){const e=GameController.Realm.footprintTexture
e.color=D("footprintColor"),e.Draw=ni,ai=!0}}function si(){GameController?.Realm?.footprintTexture&&(ri(),$.unsubscribe("fixed.realm",si))}let oi=0
function ii(e){$("#statbar-gold").css("background-color",e)}function li(){$("#HelperSendTotal").html(c(D("currentGoldSentTotal"))),Number(GameData.player().gold)>oi?ii("red"):ii("inherit")}function ci(){oi=D("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${D("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${c(oi)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${c(D("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",kt),li(),$.subscribe(yt,li)}let ui=0,di=0,fi=0,mi=0,vi=0,pi=0
async function hi(){const e=await Ln({a:14,d:0,id:ui.id,item_id:ui.itemId}),t=e.response.response,a=e.response.msg
let n=a
if(0!==t){const e=a.indexOf("<");-1!==e&&(n=a.substring(0,e))}else n=`You purchased ${e.response.data.name} for ${c(e.response.data.cost)} gold.`
d(pi,`${n}<br>`)}async function bi(){const e=Qt(vi.value)
e&&(v("NewMap","quickBuy"),await Je(Ut(e,hi)),GameData.doAction(14,3,{id:ui.id,item_id:ui.itemId},0),fi.close())}function gi(){mi?s("",pi):function(){mi=a({className:"fshClear",textContent:"Select how many to quick-buy:"}),vi=Tt({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),i(mi,vi)
const e=f({textContent:"Quick-buy"})
m(e,bi),i(mi,e),pi=a(),i(mi,pi),i(di,mi)}()}function ki(e,t){ui=t,di=di||n("shopDialogConfirm"),di&&(fi=fi||$(di).data("hcsWorldDialogShopConfirm"),fi&&gi())}var yi=ce('<div id="tp-overlay" class="svelte-1lrosbw"> </div>')
function wi(e,t){se(t,!0)
let a=Me(0),n=0,r=Me(!1)
function s(){const e=GameData.player().teleportCooldown
Se(a,e-Lt()+n),fe(a)>0||(clearInterval(fe(r)),Se(r,!1),t.tpButton.classList.remove("cooldown"))}window.$.subscribe("stats.player",s),window.$.subscribe($t,function(e,t){n=Lt(),s(),fe(r)||0!==t.response.response||Se(r,setInterval(()=>{s()},1e3),!0)})
var o=oe(),i=ie(o),l=e=>{var t=yi(),n=me(t)
ue(()=>de(n,fe(a))),ve(e,t)}
pe(i,e=>{fe(r)&&e(l)}),ve(e,o),ye()}function $i(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}function Li(e,t){return"-"===t?e:"-"===e||e>t?"-":e}const Ci=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${$i(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${$i(e)}`]]
function Di(e,t){return t[0](e)}function Vi(e){e.playerHits=Li(e.numberOfHitsRequired,e.numberOfCreatureHitsTillDead),e.creatureHits=Li(e.numberOfCreatureHitsTillDead,e.numberOfHitsRequired),e.fightStatus=function(e){const t=Ci.find(u(Di,e))
return t?t[1](e):"Unknown"}(e)}function Mi(e,t,a){return e.callback.groupExists?t:a}function Ai(e,t,a,n){t>0&&(e.extraNotes+=`${a} = ${Math.floor(n*t*.001)}<br>`)}function Si(e){const t=(e=>Mi(e,e.callback.groupArmorValue,e.player.armorValue))(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}function Ni(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function Hi(e){Si(e),function(e){Ai(e,e.player.sanctuaryLevel,"Sanc Bonus Armor",e.player.armorValue)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),Ni(e)}function Bi(e){return Math.floor(e.creature.defense*e.player.darkCurseLevel*at)}function xi(e){const t=(e=>Mi(e,e.callback.groupAttackValue,e.player.attackValue))(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${Bi(e)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-Bi(e)
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}const Ti=(e,t,a)=>Math.max(Math.ceil((e-t+1)/a/.0025),0)
function Ei(e){e.lowestCALevelToStillHit=Ti(e.counterAttackBonusAttack,e.hitByHowMuch,e.player.attackValue),e.lowestCALevelToStillKill=Ti(e.counterAttackBonusDamage,e.damageDone,e.player.damageValue)}function Gi(e){Ei(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function Pi(e,t,a){e[t]>203?e.extraNotes+=`Even with CA203 you cannot ${a} this creature<br>`:0!==e[t]&&(e.extraNotes+=`You need a minimum of CA${e[t]} to ${a} this creature<br>`)}function Fi(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&Gi(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){Ei(e),Pi(e,"lowestCALevelToStillHit","hit"),Pi(e,"lowestCALevelToStillKill","1-hit kill")}(e)}function Ri(e){const t=(e=>Mi(e,e.callback.groupHPValue,e.player.hpValue))(e),{fortitudeLevel:a}=e.player
e.fortitudeExtraHPs=Math.floor(t*a*.001),a>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}function _i(e){if(Ri(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e),e.overallDamageValue=(e=>Mi(e,e.callback.groupDamageValue,e.player.damageValue)+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage)(e),e.damageDone=(e=>Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp)))(e),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}const Oi=e=>Mi(e,e.callback.groupDefenseValue,e.player.defenseValue),Ii=e=>Math.floor(Oi(e)*e.player.constitutionLevel*.001)
const ji=e=>e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue
function Wi(e){e.overallDefenseValue=Oi(e)+Ii(e)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${Ii(e)}<br>`)}(e),function(e){Ai(e,e.player.flinchLevel,"Flinch Bonus Attack Reduction",e.creature.attack)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*ji(e)),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(ji(e)-50))}function qi(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}const Ki=e=>e.creatureHitByHowMuch>=0?"Yes":"No",Yi=e=>e.hitByHowMuch>0?"Yes":"No",zi=e=>`<span style="color:#333333">${e}</span>`,Ui=e=>`<tr>${e}</tr>`,Qi=(e,t)=>`<td${t%2?"":' class="fshRight"'}>${e}</td>`,Ji=e=>Ui(e.map(Qi).join(""))
function Xi(e){return`<table width="100%"><tbody>${(e=>Ui(`<td bgcolor="#CD9E4B" colspan="4" align="center">${(e=>e.callback.groupExists?"Group ":"")(e)}Combat Evaluation</td>`))(e)}${(e=>Ji([zi("Will I hit it?"),Yi(e),zi("Extra Attack:"),`( ${e.hitByHowMuch} )`]))(e)}${(e=>Ji([zi("# Hits to kill it?"),e.numberOfHitsRequired,zi("Extra Damage:"),`( ${e.damageDone} )`]))(e)}${(e=>Ji([zi("Will I be hit?"),Ki(e),zi("Extra Defense:"),`( ${-1*e.creatureHitByHowMuch} )`]))(e)}${(e=>Ji([zi("# Hits to kill me?"),e.numberOfCreatureHitsTillDead,zi("Extra Armor + HP:"),`( ${-1*e.creatureDamageDone} )`]))(e)}${(e=>Ji([zi("# Player Hits?"),e.playerHits,zi("# Creature Hits?"),e.creatureHits]))(e)}${(e=>Ui(`${Qi(zi("Fight Status:"),0)}<td colspan="3"><span>${e.fightStatus}</span></td>`))(e)}${(e=>Ui(`${Qi(zi("Notes:"),0)}<td colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td>`))(e)}</tbody></table>`}let Zi=0,el=0,tl=0
function al(){return er(el)?"Remove from do not kill list":"Add to the do not kill list"}function nl(){s(al(),tl)}function rl(){v("NewMap","doNotKillLink")
const e=t.doNotKillList.indexOf(el);-1===e?t.doNotKillList.push(el):t.doNotKillList.splice(e,1),nl(),B("doNotKillList",t.doNotKillList.join()),ar()}function sl(){tl?nl():function(){tl=f({className:"fshBl",textContent:al()})
const e=a({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
i(e,tl),i(Zi,e),m(tl,rl)}()}function ol(e,t){!function(e){if(!Zi){const t=W("body",e)
1===t.length&&([Zi]=t)}}(t),Zi&&(el=J(e),sl())}let il=0,ll=0,cl=0,ul=0
function dl(){cl||(ll||(ll=a(),i(il,ll),i(il,a({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),cl=a(),i(ll,cl))}function fl(e){dl(),Ee(e,cl)}function ml(e){ul||(dl(),ul=a(),i(ll,ul)),Ee(e,ul)}function vl(e,t){const a={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,a){3===a&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,a,e.type),a}function pl(e,a,n){const r={}
r.callback=n,r.player=ao(a),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(r),r.creature=vl(e.response.data,r.player.superEliteSlayerMultiplier),function(e){var t
t=e,[qi,xi,_i,Wi,Hi,Vi,Fi].forEach(e=>e(t))}(r),r.evaluatorHTML=Xi(r),n.groupExists?ml(r.evaluatorHTML):fl(r.evaluatorHTML)}function hl(e){return e.members[0].name===p()}async function bl(e,t,a){if(a){!function(e,t,a){if(!a.r?.attributes)return
const n=a.r.attributes
pl(e,t,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}(e,t,await qt(a))}}async function gl(e,t){const a=function(e){if(b(e.r))return e.r.find(hl)?.id}(await et())
bl(e,t,a)}async function kl(e,t){if(il||(il=n("dialog-viewcreature")),il&&(fl(""),ml(""),t?.response?.data)){ol(t.response.data.name,il)
const e=await Dt(!0)
e?._skills&&function(e,t){e.player.hasGroup&&gl(e,t),pl(e,t,{groupExists:!1})}(t,e)}}let yl=0
function wl(e){const t=W("verbs",e)
1===t.length&&Vt(t[0])}function $l(){if(!yl)return
const e=n("actionList")
X("player",e).forEach(wl)}function Ll(){return`${Jt("showHuntingBuffs")} ${Xt("enabledHuntingMode")}<select name="enabledHuntingMode"><option value="1"${Zt(t.enabledHuntingMode,"1")}>${t.buffsName}</option><option value="2"${Zt(t.enabledHuntingMode,"2")}>${t.buffs2Name}</option><option value="3"${Zt(t.enabledHuntingMode,"3")}>${t.buffs3Name}</option></select>`}let Cl=0,Dl=""
const Vl=()=>Cl
function Ml(){const e=[null,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
b(e)&&([Cl,Dl]=e)}function Al(e){"enabledHuntingMode"===e.target.name&&(v("NewMap","toggleEnabledHuntingMode"),t.enabledHuntingMode=e.target.value,B("enabledHuntingMode",t.enabledHuntingMode),Ml(),GameData.fetch(h))}function Sl(e){v("NewMap","togglePref"),t[e]=!t[e],B(e,t[e])}const Nl={hideSubLvlCreature:function(){Sl("hideSubLvlCreature"),GameData.fetch(ht)},hidePlayerActions:function(){v("NewMap","toggleHidePlayerActions"),yl=!yl,B("hidePlayerActions",yl),GameData.fetch(ht)},showCreatureInfo:()=>Sl("showCreatureInfo"),showHuntingBuffs:function(){Sl("showHuntingBuffs"),GameData.fetch(h)},showMonsterLog:()=>Sl("showMonsterLog"),showTitanInfo:function(){Sl("showTitanInfo"),qs(GameData.realm().dynamic)},showBuffInfo:function(){Sl("showBuffInfo"),Fa()}}
function Hl(e){const t=Nl[e.target.name]
ee(t)&&(e.target.blur(),t(e))}function Bl(){const e=n("worldPage")
if(!e)return
const t=a({className:"fshCenter fshFten"}),r=a({id:"fshWorldPrefs",innerHTML:`${Jt("showCreatureInfo")}&nbsp;&nbsp;${Jt("showMonsterLog")}&nbsp;&nbsp;${Jt("showTitanInfo")}&nbsp;&nbsp;${Jt("showBuffInfo")}<br>${Jt("hideSubLvlCreature")}&nbsp;&nbsp;${Jt("hidePlayerActions")}&nbsp;&nbsp;${Ll()}`})
m(r,Hl),C(r,"change",Al),i(t,r)
const s=a()
return i(t,s),i(e,t),s}const xl=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function Tl(){var e
t.combatEvaluatorBias=D("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,xl[e]?xl[e].generalVariable:1.1053),t.hpVariable=function(e){return xl[e]?xl[e].hpVariable:1.1}(t.combatEvaluatorBias)}function El(e,t){return e[t.name]=!0,e}function Gl(e,t,a){return e[J(a)]||t.push(a),t}function Pl(e,t){Ee(`You are missing some ${Dl} hunting buffs<br>(${t.join(", ")})`,e)}function Fl(e){Ee("",e)}function Rl(e,a){t.showHuntingBuffs?function(e,t){const a=t.b.reduce(El,{}),n=Vl().reduce(u(Gl,a),[])
n.length>0?Pl(e,n):Fl(e)}(e,a):Fl(e)}function _l(e,t,a){Vl()&&Rl(e,a)}function Ol(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function Il(e){const t=O(e)
return t?.actions?.length?(t.actions=t.actions.filter(u(Ol,function(e){return e.realm?.minlevel||GameData.realm().minlevel}(t))),Mt(t)):e}function jl(e,a){t.hideSubLvlCreature&&function(e){return e.data?.d&&ea(e.data.d,ht)}(a)&&(e.dataFilter=Il)}function Wl(e){t[e[0]]=At(e[1])}function ql(e){t[e]=At(e)}function Kl(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Wl),["doNotKillList"].forEach(ql)}function Yl(e){t[e[0]]=D(e[1])}function zl(e){t[e]=D(e)}function Ul(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showHuntingBuffs","showHuntingBuffs"]].forEach(Yl),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(zl)}const Ql=[function(){let e=0
window.requestAnimationFrame=t=>{const a=window.performance.now(),n=Math.max(e+16,a)
return e=n,setTimeout(()=>{t(e)},n-a)},window.cancelAnimationFrame=clearTimeout},function(){Tl(),Kl(),Ul()
const e=Bl()
$.ajaxPrefilter("JSON",jl),t.hideSubLvlCreature&&GameData.fetch(ht),function(e){Ml()
const a=u(_l,e)
$.subscribe(g,a),t.showHuntingBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(e),yl=D("hidePlayerActions"),$.subscribe(ae,$l),$l()},function(){bt(),gt()&&ci()},function(){$.subscribe(Ct,kl)},function(){br.forEach(gr)},function(){D("enableCreatureColoring")&&i(document.body,Ft("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(ae,ar),ar(),function(){const e=GameData.doAction
GameData.doAction=sr(e)}()},function(){Hr(),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",Gr),Gr()},function(){$.subscribe(mt,ti)},function(){D("keepLogs")&&$.subscribe(P,wn)},function(){window.initialGameData&&Ys(0,window.initialGameData),$.subscribe(`${Re} ${_e}`,Ys)},function(){$.subscribe(wt,ki)},function(){$.subscribe(dt,ei)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){V("#mapTooltip")},function(){ln(),$.subscribe(y,cn),$.subscribe(w,un)},function(){Fa(),$.subscribe(`${g} ${k}`,Fa)},function(){C(n("actionList"),"mouseover",Zn)},function(){const{body:e}=document
C(e,"keydown",kn),C(e,"keyup",yn)},function(){const e=globalThis.$("#world-event-badge")
e.length&&(e.off(),m(e[0],pr))},function(){const e=E(".actionListHeaderButton.teleport")
!function(e,t){De(wi,{target:e,props:t})}(e,{tpButton:e})},function(){var e
D("messageStack")&&(e=n("messageCenter"),De($r,{target:e}))},function(){GameController?.Realm?.footprintTexture?ri():$.subscribe("fixed.realm",si)}]
function Jl(){e(Ql)}export{Jl as default}
//# sourceMappingURL=newMap-Cpet77mI.js.map
