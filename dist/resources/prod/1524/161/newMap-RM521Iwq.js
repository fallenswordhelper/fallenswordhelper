import{e}from"./executeAll-DIAWIge1.js"
import{ay as t,v as a,g as n,b7 as s,l as r,aR as o,i,aE as c,aN as l,c as u,a3 as f,aq as d,o as m,s as v,b8 as p,be as h,ad as b,bf as g,bg as k,bh as y,bi as w,a6 as C,b as L,aA as D,bj as V,aU as M,bk as A,bl as S,bc as N,bb as H,av as j,h as B,bm as x,q as T,bn as E,bo as G,f as P,ac as R,bp as F,bq as O,br as _,bs as I,bt as W,bu as q,bv as K,bw as Y,bx as z,by as U,bz as Q,bA as J,aB as X,m as Z,bB as ee,bC as te,bD as ae,al as ne,ap as se,y as re,ak as oe,aG as ie,E as ce,G as le,bE as ue,K as fe,N as de,O as me,J as ve,bF as pe,C as he,D as be,F as ge,H as ke,Q as ye,bG as we,R as $e,t as Ce,bH as Le,bI as De,bJ as Ve,$ as Me,d as Ae,aK as Se,bK as Ne,bL as He,bM as je,bN as Be,z as xe,bO as Te,bP as Ee,bQ as Ge,bR as Pe,bS as Re,bT as Fe,aw as Oe,bU as _e,bV as Ie,a1 as We,bW as qe,bX as Ke,bY as Ye,bZ as ze,b_ as Ue,b$ as Qe,c0 as Je,c1 as Xe,T as Ze,c2 as et,c3 as tt,c4 as at,c5 as nt,c6 as st,c7 as rt,c8 as ot,c9 as it,ca as ct,cb as lt,cc as ut,cd as ft,ce as dt,cf as mt,cg as vt,ch as pt,ci as ht,cj as bt,ck as gt,cl as kt,az as yt,cm as wt}from"./calfSystem-Cs6CSxoU.js"
import{t as $t}from"./toggleForce-br4z9gGd.js"
import{r as Ct,a as Lt}from"./roundToString-D6ZndNDA.js"
import{d as Dt,q as Vt}from"./quickbuffSuccess-DLPo0xKy.js"
import{c as Mt}from"./createInput-DJIEghIX.js"
import{c as At}from"./createLabel-B6VVZZLi.js"
import{c as St}from"./idbLogger-z1pT13Zi.js"
import{r as Nt}from"./rnd-D_QmA-Fa.js"
import{c as Ht}from"./createStyle-SGEMbHV8.js"
import{t as jt,g as Bt,a as xt}from"./getTitanString-DrmoKrfx.js"
import{c as Tt}from"./createTable-Dj4e_Imc.js"
import{c as Et}from"./chunk-zr9rAXvK.js"
import{r as Gt}from"./reduceBuffArray-Diy1E3zc.js"
import{r as Pt}from"./reliclist-BOzIgkiA.js"
import{d as Rt}from"./daGroupStats-BH_v9F_h.js"
import{d as Ft,m as Ot}from"./mercEffect-iVxKGp8d.js"
import{a as _t}from"./attribsToArray-szExr8D7.js"
import{g as It}from"./guildMembers-Bfrwbkp_.js"
import{r as Wt}from"./remainingPages-BUotk4St.js"
import{t as qt}from"./testQuant-BvqA1t5j.js"
import{s as Kt,j as Yt}from"./simpleCheckbox-C-dxZ6vG.js"
import{i as zt}from"./isSelected-BWnMzKlW.js"
import{b as Ut}from"./bitwiseAnd-C5gmj-aX.js"
import"./buffReportParser-Duben_iC.js"
import"./buffObj-BIwiFUIW.js"
import"./view-C-EW1Um4.js"
import"./isChecked-D_0do7nT.js"
let Qt=0
function Jt(e){return e}function Xt(e){if(function(e){return t.showBuffInfo&&e.some(Jt)}(e))return function(){if(Qt)$t(Qt,!1)
else{Qt=a({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div>"})
const e=n("actionContainer")
s(Qt,e.children[2])}return Qt}()
Qt&&$t(Qt,!0)}function Zt(e,t,a,n){t&&(e.className=t),r(a,e)
const s=o()
return i(e,s),c(e,n),s}let ea=0,ta=0
function aa(e,t){ea?$t(ea,!1):function(e){ea=e.children[3],ta=Zt(ea,"fshBlue","CA "," active")}(e),r(t.level,ta)}function na(e,t){t?aa(e,t):ea&&$t(ea,!0)}let sa=0,ra=0
function oa(e,t){sa?$t(sa,!1):function(e){sa=e.children[4],ra=Zt(sa,"fshRed","Doubler "," active")}(e),r(t.level,ra)}function ia(e,t){t?oa(e,t):sa&&$t(sa,!0)}let ca=0,la=0
function ua(e,t,a){ca?$t(ca,!1):function(e){ca=e.children[2],la=Zt(ca,"","Damage bonus: ","%")}(e),r(function(e,t){if(e){const a=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return Ct(a,2).toString()}return"0"}(t,Number(a)),la)}function fa(e,t,a){t?ua(e,t,a):ca&&$t(ca,!0)}let da=0,ma=0
function va(e,t){da?$t(da,!1):function(e){da=e.children[1],ma=Zt(da,"","Kill Streak: ","")}(e),function(e,t){r(l(e),t)}(t,ma)}function pa(e,t,a,n){t||a?va(e,n):da&&$t(da,!0)}function ha(e,t){return t.name===e}function ba(e){const{buffs:t}=GameData.player()
if(t)return t.find(u(ha,e))}const ga=["red","orange","yellow"]
let ka=0,ya=0
async function wa(){if(v("NewMap","recastClick"),ba("Summon Shield Imp"))return
!function(e){Vt(e)&&GameData.fetch(h)}(await Dt([p()],[55]))}const $a=["imp-0","imp-1","imp-1"]
function Ca(e,t){ka?$t(ka,!1):function(e){[ka]=e.children,r("Shield Imps Remaining: ",ka),ya=o(),i(ka,ya),f(ka,"&nbsp;")
const t=d({className:"xSmallLink",textContent:"Recast"})
i(ka,t),m(t,wa)}(e)
const a=function(e){return e?Number(e.stack):0}(t)
ka.className=function(e){return $a[e]??"fshGreen"}(a),r(a,ya)}function La(e,t,a){t||a?Ca(e,t):ka&&$t(ka,!0)}function Da(e){return 0===e.type}let Va=0,Ma=0,Aa=0,Sa=0,Na=0,Ha=0
function ja(){Va=ba("Death Dealer"),Ma=ba("Doubler"),Aa=ba("Counter Attack"),Sa=ba("Summon Shield Imp"),Na=function(){const{dynamic:e}=GameData.realm()
return b(e)&&e.some(Da)}(),Ha=GameData.player().killStreak}function Ba(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",ga[e.text()]||"#ad8043")}(),ja()
const e=Xt([Va,Ma,Aa,Sa,Na])
e&&(La(e,Sa,Va),pa(e,Va,Na,Ha),fa(e,Va,Ha),na(e,Aa),ia(e,Ma))}function xa(e){return o({textContent:e})}function Ta(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function Ea(e,t,a){return At({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:a})}function Ga(e){const t=a({className:"fshToggle"}),n=Mt({checked:e.prefVal,id:e.checkId,type:"checkbox"})
i(t,n)
const s=Ea(e.onClass,e.onTip,e.checkId)
i(t,s)
const r=Ea(e.offClass,e.offTip,e.checkId)
return i(t,r),i(e.worldName,t),n}let Pa=0,Ra=0,Fa=0,Oa=0,_a=0,Ia=0,Wa=0,qa=0,Ka=0
const Ya=e=>xa(e?e.toString():"?")
function za(e,t,n){const s=a({textContent:`${t} Lvl: `})
i(s,n),i(e,s)}function Ua(e,t,a){const n=d({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return i(a,n),n}function Qa(e){!function(e){const t=a({className:"fshFsty"})
Ra=Ya(GameData.realm().minlevel),za(t,"Min",Ra),Fa=Ya(GameData.player().level),za(t,"Your",Fa),i(e,t)}(e),Oa=Ua("fshFormGroup","Quick Create Attack Group",e),_a=Ua("fshQuickBuff","Open Quick Buff Popup",e),Ia=Ua("fshRealmMap","Open Realm Map",e),Wa=Ua("fshTempleOne","Search map in Ultimate FSG",e)}function Ja(){Qa(Pa),function(e){if(D("showSpeakerOnWorld")){const t=D("playNewMessageSound")
qa=Ga({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(Pa),function(e){const a=t.huntingMode
Ka=Ga({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(Pa)}const Xa=[[()=>qa,function(){v("NewMap","toggleSound"),j("playNewMessageSound",!D("playNewMessageSound"))}],[()=>Ka,function(){v("NewMap","toggleHuntMode"),t.huntingMode=!t.huntingMode,j("huntingMode",t.huntingMode)}]],Za=[[()=>Oa,function(e){v("NewMap","doFormGroup"),V(e),GameData.doAction(12,401,{},0)}],[()=>_a,function(){v("NewMap","openQuickBuff"),M(A())}],[()=>Ia,function(){v("NewMap","openRealmMap"),window.open(`${S+N}map`,"fsMap")}],[()=>Wa,function(){v("NewMap","openUfsgMap")
const e=GameData.realm()
window.open(`${H}realms${N}view&realm_id=${e.id}`,"mapUfsg")}]]
function en(e,t){const{target:a}=t,[,n]=e.find(([e])=>e()===a)??[]
n&&(a.blur(),n(a))}function tn(e){return u(en,e)}function an(){Pa||(Pa=a({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),Ja(),m(Pa,tn(Za)),L(Pa,"change",tn(Xa)),C(Pa,n("worldCoord")))}function nn(e,t){Ra&&t.b.minlevel&&(Ta(),r(t.b.minlevel,Ra))}function sn(e,t){Fa&&r(t.b,Fa)}const rn=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"],on=`url("${E}ui/world/icon_action_attack_`
let cn=!1
function ln(e){return T(".verb.attack",e)}function un(e){const t=rn.indexOf(e.toUpperCase())
return B(`#actionList .actionListItem.creature.creature-${t}`)}function fn(e){e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""}function dn(e,t){null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${on}${t+1}.png")`)}function mn(e){const t=["LEGENDARY","NORMAL"].flatMap(un),a=un("CHAMPION"),[n,s]=e?[t,a]:[a,t]
n.map(ln).filter(e=>null!==e).forEach(fn),s.slice(0,8).map(ln).forEach(dn)}function vn(e){if(!e.altKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(cn||mn(!0),cn=!0,!/(?:Digit|Numpad)[1-8]/.test(e.code))return
const t=un("CHAMPION"),a=parseInt(e.code.slice(-1),10)-1
a<t.length&&function(e){const t=ln(e)
t&&(v("NewMap","ChampionAttack"),x(t))}(t[a])}function pn(e){!cn||e.ctrlKey&&e.shiftKey||(cn=!1,mn(!1))}function hn(e,t){0===t.response.response&&function(e){St({combat:e.response.data,player:{buffs:P(e.player.buffs.filter(({id:e})=>[26,54].includes(e)).map(({id:e,level:t})=>[e,t]))},time:e.time})}(t)}function bn(e){return!e?.response?.data}async function gn(e){const t=await F({cache:!1,url:"fetchdata.php",data:{...e,fshrnd:Nt()},dataType:"text"})
return O(t)??{response:{msg:"Server Error",response:1}}}const kn=[]
const yn=(e,t)=>e===Number(t.response.data.id)
function wn(e,t){e(t)}async function $n(e,t){const a=kn.find(u(yn,e))
if(a)return function(e){return new Promise(t=>{_(3,wn,[t,e])})}(a)
const n=await gn({a:1,d:0,id:e,passback:t})
return function(e){bn(e)||kn.push(e)}(n),n}let Cn=0,Ln=0,Dn=0,Vn=0,Mn=0,An=0
const Sn=()=>Cn,Nn=()=>Ln,Hn=()=>Dn,jn=()=>Vn,Bn=()=>Mn
function xn(e,t){return I(W(t,e))}function Tn(){var e
Cn=GameData.player().level,e=n("statbar-character-tooltip-stats"),Dn=xn(e,q),Ln=xn(e,K),Mn=xn(e,Y),Vn=xn(e,z),An=xn(e,U)}const En=e=>`<td>${e}:&nbsp;</td>`,Gn=e=>`<td width="40%">${e}</td>`
function Pn([e,t,a,n,s]){return[En(e),Gn(`${t} (your ${a}:<span class="${n}">${s()}</span>)`)]}function Rn(e){return["<tr>",...e,"</tr>"].join("")}function Fn(e,t){return Rn([...Pn(e),...Pn(t)])}function On(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function _n(e,t,a){return function(e){return`<table><tr><td><img src="${E}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return Rn([En("Class"),Gn(e.creature_class),...Pn(["Level",e.level,"level",t,Sn])])}(e,a)+function(e){return Fn(["Attack",e.attack,"defense","fshYellow",Nn],["Defense",e.defense,"attack","fshYellow",Hn])}(e)+function(e){return Fn(["Armor",e.armor,"damage","fshYellow",jn],["Damage",e.damage,"armor","fshYellow",Bn])}(e)+function(e,t){return Rn([En("HP"),Gn(`${e.hp} (your HP:<span class="fshYellow">${An}</span>)(1H: <span class="fshRed">${t}</span>)`),En("Gold"),Gn(e.gold)])}(e,t)+'<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(On).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function In(e){if(!bn(e))return function(e){const a=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let n="fshYellow"
return Tn(),Sn()>e.level&&(n="fshRed"),_n(e,a,n)}(e.response.data)}const Wn=["verb","view","tip-static"]
async function qn(e,t){const a=Q((n=e).parentNode.children).indexOf(n)
var n
const s=await $n(GameData.actions()[a].data.id,a)
bn(s)||function(e,t){const a=In(t)
e.set("content.text",a)}(t,s)}function Kn(e,t){v("NewMap","CreatureInfo"),e.classList.add("fshTip")
var a
const n=(a="Loading...",$(e).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:a},hide:{effect:!1}})).qtip("api")
n&&qn(t,n)}function Yn(e,t){return a=e,Wn.every(e=>R(e,a))&&!R("fshTip",e)&&R("creature",t)
var a}function zn(e){if(!t.showCreatureInfo)return
const{target:a}=e,n=a.parentNode.parentNode.parentNode
Yn(a,n)&&Kn(a,n)}function Un(e){return t.doNotKillList.includes(J(e))}function Qn(e){e.classList.toggle("fshBlue",Un(Z(e)))}function Jn(){const e=n("actionList")
X("creature",e).forEach(Qn)}function Xn(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(Un(e))return v("NewMap","creatureOnList"),n("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const Zn={2:function(e){return function(t,a,n,s){Xn(n.passback)||e(t,a,n,s)}}}
function es(e){return function(t,a,n,s){const r=Zn[t];(function(e){return e&&ee(e)})(r)&&function(e){return te(e)||0===e}(s)?r(e)(t,a,n,s):e(t,a,n,s)}}function ts(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}ne({promise:Promise.resolve()})
const as=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function ns(e,t){var a
D(e)&&(a=t+1,$.subscribe(ae,u(ts,a)),ts(t+1))}var ss=he('<div class="count svelte-17n83ui"> </div>'),rs=he("<div> <!></div>")
function os(e,t){re(t,!0)
let a=oe(ne([]))
const n=window.$("#messageCenter").data().hcsWorldMessageCenter
const s=function*(){for(let e=0;;e++)yield e}()
function r(){n._reposition()}n._displayMessage=async function(e,t,n=3e3){const o=s.next().value
ve(a,[...fe(a),{msg:e,type:t,expire:o}],!0),setTimeout(()=>{ve(a,fe(a).filter(({expire:e})=>e!==o),!0)},n),await pe(),r()}
var o=ie(),i=ce(o)
le(i,17,()=>{return e=fe(a),ue(e,"msg").map(({msg:t,type:a})=>({msg:t,type:a,count:e.filter(({msg:e})=>e===t).length}))
var e},({msg:e,type:t,count:a})=>e,(e,t)=>{let n=()=>fe(t).msg,s=()=>fe(t).count
var o=rs()
o.__click=()=>{return e=n(),ve(a,fe(a).filter(({msg:t})=>t!==e),!0),void r()
var e}
var i=ge(o),c=be(i),l=e=>{var t=ss(),a=ge(t)
ye(()=>$e(a,`x${s()??""}`)),de(e,t)}
ke(c,e=>{s()>1&&e(l)}),ye(()=>{we(o,1,`fsh-message ${fe(t).type??""}`,"svelte-17n83ui"),$e(i,`${n()??""} `)}),de(e,o)}),de(e,o),me()}se(["click"])
let is=0
function cs(e){is[e.name]?is[e.name].seen&&(is[e.name].seen+=1):(is[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,is[e.name]))}function ls(e,t,a){return t?e(t,a):a}function us(e,t){const a=e||{}
return a.min=ls(Math.min,a.min,t),a.max=ls(Math.max,a.max,t),a}const fs=["attack","armor","damage","defense","hp"]
function ds(e,t,a){const n=us(t[a],Number(e[a]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[a],n)&&(t[a]=n)}function ms(e,t){e[t.name]=us(e[t.name],Number(t.value))}function vs(e){is||(is={}),cs(e),function(e,t){fs.forEach(u(ds,e,t))}(e,is[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(u(ms,t.enhancements)))}(e,is[e.name]),De("fsh_monsterLog",is)}async function ps(){!function(e){is=e||{}}(await Le("fsh_monsterLog"))}const hs=[]
function bs(e){var a
bn(e)||(a=e.response.data,t.showMonsterLog&&vs(a))}function gs(e,t){return e.id===t.id}async function ks(e,t){if(6!==e.type||function(e){if(hs.find(u(gs,e.data)))return!0
hs.push(e.data)}(e))return
bs(await $n(e.data.id,t))}function ys(){t.showMonsterLog&&(GameData.actions().forEach(ks),v("NewMap","MonsterLog"))}let ws=""
function $s(){return Ve({subcmd:"scouttower"})}function Cs(e,[t,a,n]){const s=e.insertCell(-1)
return s.colSpan=t,n&&(s.className="header"),i(s,a()),s}function Ls(e,t,a){const n=e.insertRow(-1)
return a&&(n.className="fshBlue"),function(e,t){t.forEach(u(Cs,e))}(n,t),n}function Ds(e,t){Ls(e,t[0],t[1])}function Vs(e,t){t.forEach(u(Ds,e))}let Ms=0,As=0,Ss=0,Ns=0,Hs=0,js=0,Bs=0,xs=0
const Ts=()=>Ms,Es=()=>Bs
function Gs(){Ms=xa("Current"),As=xa("Kills"),Ss=xa("Member"),Ns=xa("% of Total"),Hs=xa("Status"),js=xa("Titan HP"),Bs=xa("Total"),xs=xa("Your Guild")}let Ps=0,Rs=0,Fs=0,Os=0,_s=0,Is=0,Ws=0,qs=0,Ks=0
const Ys=()=>Ps,zs=()=>Rs,Us=()=>Fs,Qs=()=>Os,Js=()=>_s,Xs=()=>Is,Zs=()=>Ws,er=()=>qs,tr=()=>Ks
function ar(){Ps=o({innerHTML:"&nbsp;"}),Rs=o({innerHTML:"&nbsp;"}),Fs=o(),Os=o(),_s=o(),Is=o(),Ws=o(),qs=o(),Ks=o()}let nr=0
const sr=()=>nr
function rr(){for(;nr.rows.length>8;)nr.deleteRow(8)}function or(e){const t=o()
return i(t,e),c(t,"%"),t}const ir=[[[5,Ys,!0],[1,zs,!0]]],cr=[[[2,()=>js,!0],[4,()=>xs,!0]]],lr=[[[2,function(){const e=o()
return i(e,Us()),c(e,"/"),i(e,Qs()),e}],[4,Js]]],ur=[[[2,()=>Hs,!0],[4,er]],!0],fr=[[[2,()=>Ss,!0],[2,()=>As,!0],[2,()=>Ns,!0]]]
let dr=0,mr=0,vr="",pr=""
function hr(){mr=null,dr&&!R("fshHide",dr)&&($t(dr,!0),Ae("&nbsp;",Ps),Ae("&nbsp;",Rs),r("",Fs),r("",Os),r("",_s),r("",Is),r("",Ws),Ae("",qs),Ae("",Ks),rr())}function br(e){return 0===e.type&&(mr=e.base_creature_id,vr=`(${e.x},${e.y})`,pr=jt(e.name),!0)}function gr(){if(dr)$t(dr,!1)
else{const e=n("actionContainer")
dr=a({className:"fshActionBox titanInfo"}),ar(),nr=Tt({className:"fshCenter"}),Gs(),Vs(nr,[ir,cr,lr,[[[2,Ts,!0],[4,u(or,Xs())]],!0],[[[2,Es,!0],[4,u(or,Zs())]],!0],ur,[[[6,tr]]],fr]),i(dr,sr()),i(e,dr)}}function kr(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(Se()+1e3*e)
return`${Ne(t.getHours())}:${Ne(t.getMinutes())} ${Ne(t.getDate())}/${He[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function yr(e){return Lt(xt(e.max_hp-e.current_hp,e.kills),2)}function wr(e){return Lt(100*e.kills/e.max_hp,2)}function $r(e){!function(e){for(const[t,a]of[[pr,Ys],[vr,zs],[e.current_hp,Us],[e.max_hp,Qs],[e.kills,Js],[yr(e),Xs],[wr(e),Zs]])r(t,a())}(e),Ae(function(e){return Bt(e.kills,e.max_hp,e.current_hp)}(e),er()),Ae(kr(e.cooldown),tr())}function Cr(e,t){return[[[2,()=>xa(t.player.name)],[2,()=>xa(t.kills.toString())],[2,()=>xa(`${Lt(100*t.kills/e.kills,2)}%`)]]]}function Lr(e){return e.realm&&e.creature===mr&&e.realm===ws}function Dr(e){const t=e.find(Lr)
t&&($r(t),function(e){if(rr(),!e.contributors)return
const t=e.contributors.map(u(Cr,e))
Vs(sr(),t)}(t))}let Vr=null
const Mr=e=>t.showTitanInfo&&b(e)&&e.some(br)
function Ar(e,t){(e=>e?.s&&b(e.r))(t)&&(Dr(t.r),Mr(GameData.realm().dynamic)?Vr=window.setTimeout(e,3e4):hr())}async function Sr(){Ar(Sr,await Me($s))}function Nr(e){Vr&&(window.clearTimeout(Vr),Vr=null),Mr(e)?(gr(),Sr()):hr()}function Hr(e){var t
e.dynamic&&(t=e.name,ws=t,Nr(e.dynamic))}function jr(e,t){t.realm?.name&&Hr(t.realm)}var Br=he("<li><!></li>"),xr=he('<ul class="svelte-bwtg9x"></ul>')
function Tr(e,t){re(t,!0)
let a=xe(t,"members",19,()=>[])
const n=e=>`Buff ${Pe[e]} 16`
var s=xr()
le(s,21,()=>Et(16,a()),Te,(e,a,s)=>{var r=Br(),o=ge(r)
Ee(o,{onclick:e=>function(e,a,s){s.target.blur(),Re(`${Fe}&players=${e.join(",")}`,"fsQuickBuff",618,1e3,",scrollbars"),t.emitBuffBatch(n(a))}(fe(a),s,e),children:(e,t)=>{var a=Ge()
ye(e=>$e(a,e),[()=>n(s)]),de(e,a)},$$slots:{default:!0}}),de(e,r)}),de(e,s),me()}function Er(e,t){return e>10*t||e<t?e:10*t}const Gr=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function Pr(e,t,a){e[a[0]]=Number(t[a[1]])}const Rr=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function Fr(e,t,a){e[a[0]]=t[a[1]]||0}function Or(e){if(!e._skills)return
const t=Gt(e._skills),a={}
return function(e,t){Gr.forEach(u(Pr,e,t))}(a,e),function(e,t){Rr.forEach(u(Fr,e,t))}(a,t),a.superEliteSlayerMultiplier=Ct(.002*a.superEliteSlayerLevel,2),Oe(a.armorValue)&&function(e){e.attackValue=Er(e.attackBonus,e.levelValue),e.defenseValue=Er(e.defenseBonus,e.levelValue),e.armorValue=Er(e.armorBonus,e.levelValue),e.damageValue=Er(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(a),a}const _r=Ie(["statusStore","Done."])
let Ir=[]
const Wr=_e(_r,(e,t)=>{const a=Ir.find(([t])=>t===e[0])
a?[,a[1]]=e:Ir=[...Ir,e]
const n=Ir.find(([,e])=>"Done."!==e)
t(n?.[1]??"Done.")}),qr=Ie(0)
const Kr=_e(qr,(e,t)=>{!async function(e,t){if(!e)return
_r.set(["relicStore","Processing defending guild relics ... "])
const a=await Pt(e)
if(!a?.r?.relics)return void _r.set(["relicStore","AJAX Error"])
const n=a.r.relics.length,s=1===n?1.5:Ct(1-n/10,2)
t({noOfRelics:n,relicMultiplier:s,leadDefenderBonus:`${String(100*s)}%`}),_r.set(["relicStore","Done."])}(e,t)}),Yr=Ie([])
const zr=_e(Yr,(e,t)=>{!async function(e,t){if(!e.length)return
_r.set(["defendersStore","Processing defending group stats ... "])
const a=[]
await We(e.map(async(e,n)=>{const s=await qe(e)
a.push([n,Or(s)]),t(a)})),_r.set(["defendersStore","Done."])}(e,t)}),Ur=_e(zr,(e,t)=>{const a=e?.find(([e])=>0===e)
a&&t(a[1])}),Qr=(e,t,a)=>Math.ceil(a*(0===t?e:Ke))
function Jr(e,t,[a,n]){return{armorValue:t.armorValue+Qr(e,a,n.armorValue),attackValue:t.attackValue+Qr(e,a,n.attackValue),damageValue:t.damageValue+Qr(e,a,n.damageValue),cloaked:t.cloaked+(n.cloakLevel?1:0),defenseValue:t.defenseValue+Qr(e,a,n.defenseValue),hpValue:t.hpValue+Qr(e,a,n.hpValue)}}const Xr=_e([Kr,zr],([e,t],a)=>{if(!e?.relicMultiplier||!t?.length)return
const n=t?.reduce(u(Jr,e.relicMultiplier),{armorValue:0,attackValue:0,damageValue:0,cloaked:0,defenseValue:0,hpValue:0})
a(n)}),Zr=Ie(0),eo=e=>e.members[0].name===GameData.player().username
async function to(e,t){if(!e)return
_r.set(["groupStore","Processing attacking group stats ... "])
const a=await async function(){const e=await Ye()
return e?.r?.find(eo)?.id}(),n=a&&await async function(e){const t=await Rt(e)
return _t(t?.r?.attributes)}(a),s=n&&await async function(e){const t=await Ft(),a=Ot(t)
return e?.map((e,t)=>e-a[t])}(n)
s&&t({attack:s[0],defense:s[1],armor:s[2],hp:s[3],damage:s[4]}),_r.set(["groupStore","Done."])}const ao=_e(Zr,(e,t)=>{to(e,t)}),no=(e,t,a)=>Math.ceil(e*ze(t,0)*a),so=(e,t)=>no(e,t,.0025),ro=(e,t)=>no(e,t,.001),oo=ro,io=ro,co=ro,lo=ro,uo=ro,fo=(e,t)=>Math.ceil(e*(1+.001*ze(t,0))),mo=(e,t)=>Math.ceil(e*(1-t*Ue)),vo=Ie([]),po=_e(vo,(e,t)=>{e&&t(Gt(e))}),ho=_e([po,ao],([e,t],a)=>{if(!e||!t)return
const n=fo(t.defense,e.Constitution),s=t.hp+oo(n,e.Fortitude)
a({dmgWithChiStrike:t.damage+io(s,e["Chi Strike"]),defWithConst:n,hpWithFortitude:s,nmv:so(t.attack,e["Nightmare Visage"]),sanctuary:co(t.armor,e.Sanctuary)})})
const bo=_e([ho,Ur,ao],function([e,t,a],n){if(!e||!t||!a)return
const s=a.attack-e.nmv,r=lo(s,t.flinchLevel),o=uo(e.dmgWithChiStrike,t.terrorizeLevel)
n({attack:s-r,defense:e.defWithConst+e.nmv,armor:a.armor+e.sanctuary,hp:e.hpWithFortitude,damage:e.dmgWithChiStrike-o})})
const go=_e([Ur,Xr],([e,t],a)=>{if(!e||!t)return
const n=so(t.attackValue,e.nightmareVisageLevel),s=fo(t.defenseValue,e.constitutionLevel)
!function([e,t,a,n,s,r]){a({attackWithNmv:t.attackValue-n,chiStrike:e.chiStrikeLevel,cloak:e.cloakLevel?"Yes":"No",dmgWithChiStrike:t.damageValue+io(r,e.chiStrikeLevel),defWithConst:s,hpWithFortitude:r,nmv:n,sanctuary:co(t.armorValue,e.sanctuaryLevel)})}([e,t,a,n,s,t.hpValue+oo(s,e.fortitudeLevel)])})
const ko=_e([po,go,Xr],function([e,t,a],n){if(!e||!t||!a)return
const s=lo(t.attackWithNmv,e.Flinch),r=t.defWithConst+t.nmv,o=uo(t.dmgWithChiStrike,e.Terrorize)
n({attack:t.attackWithNmv-s,dc225:mo(r,225),dc175:mo(r,175),defense:r,armor:a.armorValue+t.sanctuary,hp:t.hpWithFortitude,damage:t.dmgWithChiStrike-o})}),yo=_e(Kr,(e,t)=>{t({noOfRelics:e?.noOfRelics??"",leadDefenderBonus:e?.leadDefenderBonus??""})}),wo=_e(Ur,(e,t)=>{if(!e)return t("")
e.cloakLevel?t("Yes"):t("No")}),$o=_e(Xr,(e,t)=>{t({armorValue:e?.armorValue??"",attackValue:e?.attackValue??"",damageValue:e?.damageValue??"",cloaked:e?.cloaked??"",defenseValue:e?.defenseValue??"",hpValue:e?.hpValue??""})}),Co=_e(zr,(e,t)=>{t(e?.length??"")}),Lo=_e(ko,(e,t)=>{t({attack:e?.attack??"",dc225:e?.dc225??"",dc175:e?.dc175??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""})}),Do=e=>({attack:e?.attack??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""}),Vo=_e(ao,(e,t)=>{t(Do(e))}),Mo=_e(bo,(e,t)=>{t(Do(e))})
var Ao=he('<a class="svelte-x2lud7"> </a> ',1),So=he(' <div class="missing svelte-x2lud7"></div>',1)
function No(e,t){re(t,!0)
let a=xe(t,"members",19,()=>[]),n=oe(ne([]))
const s=[({username:e})=>!a().includes(e),({last_login:e})=>e,({last_login:e})=>e<Je(),({last_login:e})=>e>Xe(),({level:e})=>e<400||e>421,({level:e})=>e<441||e>450],r=e=>s.every(t=>t(e)),o=({username:e},{username:t})=>Qe(e,t)
qr.subscribe(e=>{!async function(e){const t=await It(e)
b(t)&&ve(n,t.filter(r).sort(o),!0)}(e)})
var i=So(),c=ce(i),l=be(c)
le(l,21,()=>fe(n),({id:e,username:t})=>e,(e,t)=>{var a=Ao(),n=ce(a),s=ge(n)
be(n,1,!0).nodeValue=" ",ye(()=>{Ze(n,"href",`${et??""}${fe(t).id??""}`),$e(s,fe(t).username)}),de(e,a)}),ye(()=>$e(c,`${(fe(n).length||"")??""} Offline guild members not at relic: `)),de(e,i),me()}var Ho=he('<div class="buff-links svelte-1ncfcj8"><!></div>'),jo=he('<button class="custombutton" type="button">Fetch Stats</button>'),Bo=he('<div class="b-top svelte-1ncfcj8">Processing</div> <div class="proc-stat svelte-1ncfcj8"> </div> <div class="b-top svelte-1ncfcj8">Assumptions</div> <div class="assume svelte-1ncfcj8">Above calculations include Constitution, Fortitude, Nightmare Visage,\n        Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that\n        order) on both the defending group and attacking group.</div>',1),xo=he('<div class="middle svelte-1ncfcj8"><div class="b-top svelte-1ncfcj8">Defending Guild Stats</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">Relic Count:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Lead Defender Bonus:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Lead Defender Cloaked:</div> <div class="svelte-1ncfcj8"> </div></div> <div class="b-top svelte-1ncfcj8">Other Defender Stats</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">Raw Attack:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Attack w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Defense:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Defense w/buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Armor:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Armor w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Damage:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Damage w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw HP:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">HP w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Cloaked:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Processed:</div> <div class="svelte-1ncfcj8"> </div></div></div> <div class="right svelte-1ncfcj8"><div class="b-top svelte-1ncfcj8">Adjusted Defense Values</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">DC225:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">DC175:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">&nbsp;</div></div> <div class="b-top svelte-1ncfcj8">Attacking Group Stats</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">Raw Group Attack:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Attack w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group Defense:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Defense w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group Armor:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Armor w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group Damage:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Damage w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group HP:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group HP w/ buffs:</div> <div class="svelte-1ncfcj8"> </div></div></div> <div class="bottom b-top svelte-1ncfcj8"><!></div>',1),To=he('<div class="body svelte-1ncfcj8"><div class="left svelte-1ncfcj8"><!> <!></div> <!></div>')
function Eo(e,t){re(t,!0)
const a=()=>nt(yo,"$relicDisplay",i),n=()=>nt($o,"$rawDefDisplay",i),s=()=>nt(Lo,"$defBuffedDisplay",i),r=()=>nt(Vo,"$rawGroupDisplay",i),o=()=>nt(Mo,"$buffResultDisplay",i),[i,c]=at()
let l=xe(t,"relicData",19,()=>({}))
const u=l().defenders.map(e=>e.player_name)
let f=oe(!1)
function d(e){v("relic",e)}function m(){v("relic","fetchStats"),ve(f,!0),qr.set(l().controlled_by.guild_id),Yr.set(u),Zr.set(GameData.player().hasGroup),vo.set(GameData.player().buffs)}tt(()=>{ve(f,!1),qr.set(0),Yr.set([]),Zr.set(0),vo.set([])})
var p=To(),h=ge(p),b=ge(h),g=e=>{var t=Ho()
Tr(ge(t),{get members(){return u},emitBuffBatch:d}),de(e,t)}
ke(b,e=>{l().is_owner&&e(g)})
var k=be(b,2),y=e=>{var t=jo()
t.__click=m,de(e,t)},w=e=>{var t=Bo(),a=be(ce(t),2),n=ge(a)
ye(()=>$e(n,nt(Wr,"$trackStatus",i))),de(e,t)}
ke(k,e=>{fe(f)?e(w,!1):e(y)})
var $=be(h,2),C=e=>{var t=xo(),c=ce(t),l=be(ge(c),2),f=be(ge(l),2),d=ge(f),m=be(f,4),v=ge(m),p=be(m,4),h=ge(p),b=be(l,4),g=be(ge(b),2),k=ge(g),y=be(g,4),w=ge(y),$=be(y,4),C=ge($),L=be($,4),D=ge(L),V=be(L,4),M=ge(V),A=be(V,4),S=ge(A),N=be(A,4),H=ge(N),j=be(N,4),B=ge(j),x=be(j,4),T=ge(x),E=be(x,4),G=ge(E),P=be(E,4),R=ge(P),F=be(P,4),O=ge(F),_=be(c,2),I=be(ge(_),2),W=be(ge(I),2),q=ge(W),K=be(W,4),Y=ge(K),z=be(I,4),U=be(ge(z),2),Q=ge(U),J=be(U,4),X=ge(J),Z=be(J,4),ee=ge(Z),te=be(Z,4),ae=ge(te),ne=be(te,4),se=ge(ne),re=be(ne,4),oe=ge(re),ie=be(re,4),le=ge(ie),ue=be(ie,4),fe=ge(ue),me=be(ue,4),ve=ge(me),pe=be(me,4),he=ge(pe),ke=be(_,2)
No(ge(ke),{get members(){return u}}),ye(()=>{$e(d,a().noOfRelics),$e(v,a().leadDefenderBonus),$e(h,nt(wo,"$ldcloak",i)),$e(k,n().attackValue),$e(w,s().attack),$e(C,n().defenseValue),$e(D,s().defense),$e(M,n().armorValue),$e(S,s().armor),$e(H,n().damageValue),$e(B,s().damage),$e(T,n().hpValue),$e(G,s().hp),$e(R,n().cloaked),$e(O,nt(Co,"$processed",i)),$e(q,s().dc225),$e(Y,s().dc175),$e(Q,r().attack),$e(X,o().attack),$e(ee,r().defense),$e(ae,o().defense),$e(se,r().armor),$e(oe,o().armor),$e(le,r().damage),$e(fe,o().damage),$e(ve,r().hp),$e(he,o().hp)}),de(e,t)}
ke($,e=>{fe(f)&&e(C)}),de(e,p),me(),c()}se(["click"])
let Go=0
function Po(e,t){var a,s
t?.response?.data?.defenders?.length>0&&(a=n("dialog-relic"),s=t.response.data,Go&&rt(Go),Go=Ce(Eo,{props:{relicData:s},target:a}))}function Ro(e,t){"ACT_REPAIR"===t&&GameData.fetch(it+h+ct+lt)}let Fo=!1
function Oo(e,t,a,n,s,r,o,i,c){return e.beginPath(),e.arc(r+i/2,o+c/2,i/6,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.lineWidth=1,e.strokeStyle="black",e.stroke(),!0}function _o(){if(!Fo){const e=GameController.Realm.footprintTexture
e.color=D("footprintColor"),e.Draw=Oo,Fo=!0}}function Io(){GameController?.Realm?.footprintTexture&&(_o(),$.unsubscribe("fixed.realm",Io))}let Wo=0
function qo(e){$("#statbar-gold").css("background-color",e)}function Ko(){$("#HelperSendTotal").html(l(D("currentGoldSentTotal"))),Number(GameData.player().gold)>Wo?qo("red"):qo("inherit")}function Yo(){Wo=D("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${D("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${l(Wo)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${l(D("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",dt),Ko(),$.subscribe(mt,Ko)}let zo=0,Uo=0,Qo=0,Jo=0,Xo=0,Zo=0
async function ei(){const e=await gn({a:14,d:0,id:zo.id,item_id:zo.itemId}),t=e.response.response,a=e.response.msg
let n=a
if(0!==t){const e=a.indexOf("<");-1!==e&&(n=a.substring(0,e))}else n=`You purchased ${e.response.data.name} for ${l(e.response.data.cost)} gold.`
f(Zo,`${n}<br>`)}async function ti(){const e=qt(Xo.value)
e&&(v("NewMap","quickBuy"),await We(Wt(e,ei)),GameData.doAction(14,3,{id:zo.id,item_id:zo.itemId},0),Qo.close())}function ai(){Jo?r("",Zo):function(){Jo=a({className:"fshClear",textContent:"Select how many to quick-buy:"}),Xo=Mt({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),i(Jo,Xo)
const e=d({textContent:"Quick-buy"})
m(e,ti),i(Jo,e),Zo=a(),i(Jo,Zo),i(Uo,Jo)}()}function ni(e,t){zo=t,Uo=Uo||n("shopDialogConfirm"),Uo&&(Qo=Qo||$(Uo).data("hcsWorldDialogShopConfirm"),Qo&&ai())}var si=he('<div id="tp-overlay" class="svelte-1u5skhe"> </div>')
function ri(e,t){re(t,!0)
let a=oe(0),n=0,s=oe(!1)
function r(){const e=GameData.player().teleportCooldown
ve(a,e-ht()+n),fe(a)>0||(clearInterval(fe(s)),ve(s,!1),t.tpButton.classList.remove("cooldown"))}window.$.subscribe("stats.player",r),window.$.subscribe(pt,function(e,t){n=ht(),r(),fe(s)||0!==t.response.response||ve(s,setInterval(()=>{r()},1e3),!0)})
var o=ie(),i=ce(o),c=e=>{var t=si(),n=ge(t)
ye(()=>$e(n,fe(a))),de(e,t)}
ke(i,e=>{fe(s)&&e(c)}),de(e,o),me()}function oi(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}function ii(e,t){return"-"===t?e:"-"===e||e>t?"-":e}const ci=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${oi(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${oi(e)}`]]
function li(e,t){return t[0](e)}function ui(e){e.playerHits=ii(e.numberOfHitsRequired,e.numberOfCreatureHitsTillDead),e.creatureHits=ii(e.numberOfCreatureHitsTillDead,e.numberOfHitsRequired),e.fightStatus=function(e){const t=ci.find(u(li,e))
return t?t[1](e):"Unknown"}(e)}function fi(e,t,a){return e.callback.groupExists?t:a}function di(e,t,a,n){t>0&&(e.extraNotes+=`${a} = ${Math.floor(n*t*.001)}<br>`)}function mi(e){const t=(e=>fi(e,e.callback.groupArmorValue,e.player.armorValue))(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}function vi(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function pi(e){mi(e),function(e){di(e,e.player.sanctuaryLevel,"Sanc Bonus Armor",e.player.armorValue)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),vi(e)}function hi(e){return Math.floor(e.creature.defense*e.player.darkCurseLevel*Ue)}function bi(e){const t=(e=>fi(e,e.callback.groupAttackValue,e.player.attackValue))(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${hi(e)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-hi(e)
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}const gi=(e,t,a)=>Math.max(Math.ceil((e-t+1)/a/.0025),0)
function ki(e){e.lowestCALevelToStillHit=gi(e.counterAttackBonusAttack,e.hitByHowMuch,e.player.attackValue),e.lowestCALevelToStillKill=gi(e.counterAttackBonusDamage,e.damageDone,e.player.damageValue)}function yi(e){ki(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function wi(e,t,a){e[t]>203?e.extraNotes+=`Even with CA203 you cannot ${a} this creature<br>`:0!==e[t]&&(e.extraNotes+=`You need a minimum of CA${e[t]} to ${a} this creature<br>`)}function $i(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&yi(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){ki(e),wi(e,"lowestCALevelToStillHit","hit"),wi(e,"lowestCALevelToStillKill","1-hit kill")}(e)}function Ci(e){const t=(e=>fi(e,e.callback.groupHPValue,e.player.hpValue))(e),{fortitudeLevel:a}=e.player
e.fortitudeExtraHPs=Math.floor(t*a*.001),a>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}function Li(e){if(Ci(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e),e.overallDamageValue=(e=>fi(e,e.callback.groupDamageValue,e.player.damageValue)+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage)(e),e.damageDone=(e=>Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp)))(e),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}const Di=e=>fi(e,e.callback.groupDefenseValue,e.player.defenseValue),Vi=e=>Math.floor(Di(e)*e.player.constitutionLevel*.001)
const Mi=e=>e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue
function Ai(e){e.overallDefenseValue=Di(e)+Vi(e)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${Vi(e)}<br>`)}(e),function(e){di(e,e.player.flinchLevel,"Flinch Bonus Attack Reduction",e.creature.attack)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*Mi(e)),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(Mi(e)-50))}function Si(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}const Ni=e=>e.creatureHitByHowMuch>=0?"Yes":"No",Hi=e=>e.hitByHowMuch>0?"Yes":"No",ji=e=>`<span style="color:#333333">${e}</span>`,Bi=e=>`<tr>${e}</tr>`,xi=(e,t)=>`<td${t%2?"":' class="fshRight"'}>${e}</td>`,Ti=e=>Bi(e.map(xi).join(""))
function Ei(e){return`<table width="100%"><tbody>${(e=>Bi(`<td bgcolor="#CD9E4B" colspan="4" align="center">${(e=>e.callback.groupExists?"Group ":"")(e)}Combat Evaluation</td>`))(e)}${(e=>Ti([ji("Will I hit it?"),Hi(e),ji("Extra Attack:"),`( ${e.hitByHowMuch} )`]))(e)}${(e=>Ti([ji("# Hits to kill it?"),e.numberOfHitsRequired,ji("Extra Damage:"),`( ${e.damageDone} )`]))(e)}${(e=>Ti([ji("Will I be hit?"),Ni(e),ji("Extra Defense:"),`( ${-1*e.creatureHitByHowMuch} )`]))(e)}${(e=>Ti([ji("# Hits to kill me?"),e.numberOfCreatureHitsTillDead,ji("Extra Armor + HP:"),`( ${-1*e.creatureDamageDone} )`]))(e)}${(e=>Ti([ji("# Player Hits?"),e.playerHits,ji("# Creature Hits?"),e.creatureHits]))(e)}${(e=>Bi(`${xi(ji("Fight Status:"),0)}<td colspan="3"><span>${e.fightStatus}</span></td>`))(e)}${(e=>Bi(`${xi(ji("Notes:"),0)}<td colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td>`))(e)}</tbody></table>`}let Gi=0,Pi=0,Ri=0
function Fi(){return Un(Pi)?"Remove from do not kill list":"Add to the do not kill list"}function Oi(){r(Fi(),Ri)}function _i(){v("NewMap","doNotKillLink")
const e=t.doNotKillList.indexOf(Pi);-1===e?t.doNotKillList.push(Pi):t.doNotKillList.splice(e,1),Oi(),j("doNotKillList",t.doNotKillList.join()),Jn()}function Ii(){Ri?Oi():function(){Ri=d({className:"fshBl",textContent:Fi()})
const e=a({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
i(e,Ri),i(Gi,e),m(Ri,_i)}()}function Wi(e,t){!function(e){if(!Gi){const t=W("body",e)
1===t.length&&([Gi]=t)}}(t),Gi&&(Pi=J(e),Ii())}let qi=0,Ki=0,Yi=0,zi=0
function Ui(){Yi||(Ki||(Ki=a(),i(qi,Ki),i(qi,a({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Yi=a(),i(Ki,Yi))}function Qi(e){Ui(),Ae(e,Yi)}function Ji(e){zi||(Ui(),zi=a(),i(Ki,zi)),Ae(e,zi)}function Xi(e,t){const a={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,a){3===a&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,a,e.type),a}function Zi(e,a,n){const s={}
s.callback=n,s.player=Or(a),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(s),s.creature=Xi(e.response.data,s.player.superEliteSlayerMultiplier),function(e){var t
t=e,[Si,bi,Li,Ai,pi,ui,$i].forEach(e=>e(t))}(s),s.evaluatorHTML=Ei(s),n.groupExists?Ji(s.evaluatorHTML):Qi(s.evaluatorHTML)}function ec(e){return e.members[0].name===p()}async function tc(e,t,a){if(a){!function(e,t,a){if(!a.r?.attributes)return
const n=a.r.attributes
Zi(e,t,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}(e,t,await Rt(a))}}async function ac(e,t){const a=function(e){if(b(e.r))return e.r.find(ec)?.id}(await Ye())
tc(e,t,a)}async function nc(e,t){if(qi||(qi=n("dialog-viewcreature")),qi&&(Qi(""),Ji(""),t?.response?.data)){Wi(t.response.data.name,qi)
const e=await gt(!0)
e?._skills&&function(e,t){e.player.hasGroup&&ac(e,t),Zi(e,t,{groupExists:!1})}(t,e)}}let sc=0
function rc(e){const t=W("verbs",e)
1===t.length&&kt(t[0])}function oc(){if(!sc)return
const e=n("actionList")
X("player",e).forEach(rc)}function ic(){return`${Kt("showHuntingBuffs")} ${Yt("enabledHuntingMode")}<select name="enabledHuntingMode"><option value="1"${zt(t.enabledHuntingMode,"1")}>${t.buffsName}</option><option value="2"${zt(t.enabledHuntingMode,"2")}>${t.buffs2Name}</option><option value="3"${zt(t.enabledHuntingMode,"3")}>${t.buffs3Name}</option></select>`}let cc=0,lc=""
const uc=()=>cc
function fc(){const e=[null,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
b(e)&&([cc,lc]=e)}function dc(e){"enabledHuntingMode"===e.target.name&&(v("NewMap","toggleEnabledHuntingMode"),t.enabledHuntingMode=e.target.value,j("enabledHuntingMode",t.enabledHuntingMode),fc(),GameData.fetch(h))}function mc(e){v("NewMap","togglePref"),t[e]=!t[e],j(e,t[e])}const vc={hideSubLvlCreature:function(){mc("hideSubLvlCreature"),GameData.fetch(lt)},hidePlayerActions:function(){v("NewMap","toggleHidePlayerActions"),sc=!sc,j("hidePlayerActions",sc),GameData.fetch(lt)},showCreatureInfo:()=>mc("showCreatureInfo"),showHuntingBuffs:function(){mc("showHuntingBuffs"),GameData.fetch(h)},showMonsterLog:()=>mc("showMonsterLog"),showTitanInfo:function(){mc("showTitanInfo"),Nr(GameData.realm().dynamic)},showBuffInfo:function(){mc("showBuffInfo"),Ba()}}
function pc(e){const t=vc[e.target.name]
ee(t)&&(e.target.blur(),t(e))}function hc(){const e=n("worldPage")
if(!e)return
const t=a({className:"fshCenter fshFten"}),s=a({id:"fshWorldPrefs",innerHTML:`${Kt("showCreatureInfo")}&nbsp;&nbsp;${Kt("showMonsterLog")}&nbsp;&nbsp;${Kt("showTitanInfo")}&nbsp;&nbsp;${Kt("showBuffInfo")}<br>${Kt("hideSubLvlCreature")}&nbsp;&nbsp;${Kt("hidePlayerActions")}&nbsp;&nbsp;${ic()}`})
m(s,pc),L(s,"change",dc),i(t,s)
const r=a()
return i(t,r),i(e,t),r}const bc=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function gc(){var e
t.combatEvaluatorBias=D("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,bc[e]?bc[e].generalVariable:1.1053),t.hpVariable=function(e){return bc[e]?bc[e].hpVariable:1.1}(t.combatEvaluatorBias)}function kc(e,t){return e[t.name]=!0,e}function yc(e,t,a){return e[J(a)]||t.push(a),t}function wc(e,t){Ae(`You are missing some ${lc} hunting buffs<br>(${t.join(", ")})`,e)}function $c(e){Ae("",e)}function Cc(e,a){t.showHuntingBuffs?function(e,t){const a=t.b.reduce(kc,{}),n=uc().reduce(u(yc,a),[])
n.length>0?wc(e,n):$c(e)}(e,a):$c(e)}function Lc(e,t,a){uc()&&Cc(e,a)}function Dc(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function Vc(e){const t=O(e)
return t?.actions?.length?(t.actions=t.actions.filter(u(Dc,function(e){return e.realm?.minlevel||GameData.realm().minlevel}(t))),yt(t)):e}function Mc(e,a){t.hideSubLvlCreature&&function(e){return e.data?.d&&Ut(e.data.d,lt)}(a)&&(e.dataFilter=Vc)}function Ac(e){t[e[0]]=wt(e[1])}function Sc(e){t[e]=wt(e)}function Nc(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Ac),["doNotKillList"].forEach(Sc)}function Hc(e){t[e[0]]=D(e[1])}function jc(e){t[e]=D(e)}function Bc(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showHuntingBuffs","showHuntingBuffs"]].forEach(Hc),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(jc)}const xc=[function(){let e=0
window.requestAnimationFrame=t=>{const a=window.performance.now(),n=Math.max(e+16,a)
return e=n,setTimeout(()=>{t(e)},n-a)},window.cancelAnimationFrame=clearTimeout},function(){gc(),Nc(),Bc()
const e=hc()
$.ajaxPrefilter("JSON",Mc),t.hideSubLvlCreature&&GameData.fetch(lt),function(e){fc()
const a=u(Lc,e)
$.subscribe(g,a),t.showHuntingBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(e),sc=D("hidePlayerActions"),$.subscribe(ae,oc),oc()},function(){ut(),ft()&&Yo()},function(){$.subscribe(bt,nc)},function(){as.forEach(ns)},function(){D("enableCreatureColoring")&&i(document.body,Ht("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(ae,Jn),Jn(),function(){const e=GameData.doAction
GameData.doAction=es(e)}()},function(){ps(),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",ys),ys()},function(){$.subscribe(ot,Ro)},function(){D("keepLogs")&&$.subscribe(G,hn)},function(){window.initialGameData&&jr(0,window.initialGameData),$.subscribe(`${je} ${Be}`,jr)},function(){$.subscribe(vt,ni)},function(){$.subscribe(st,Po)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){V("#mapTooltip")},function(){an(),$.subscribe(y,nn),$.subscribe(w,sn)},function(){Ba(),$.subscribe(`${g} ${k}`,Ba)},function(){L(n("actionList"),"mouseover",zn)},function(){const{body:e}=document
L(e,"keydown",vn),L(e,"keyup",pn)},function(){const e=T(".actionListHeaderButton.teleport")
Ce(ri,{target:e,props:{tpButton:e}})},function(){var e
D("messageStack")&&(e=n("messageCenter"),Ce(os,{target:e}))},function(){GameController?.Realm?.footprintTexture?_o():$.subscribe("fixed.realm",Io)}]
function Tc(){e(xc)}export{Tc as default}
//# sourceMappingURL=newMap-RM521Iwq.js.map
