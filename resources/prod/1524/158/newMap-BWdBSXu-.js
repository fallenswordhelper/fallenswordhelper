import{e}from"./executeAll-DIAWIge1.js"
import{ax as t,u as a,g as n,b6 as s,k as r,aQ as o,i,aD as c,aM as l,c as u,a2 as f,ap as d,o as m,s as v,b7 as p,bb as h,ac as b,bc as g,bd as k,be as y,bf as w,a5 as L,b as C,az as D,bg as V,aT as M,bh as A,bi as S,ba as N,b9 as H,au as j,h as x,bj as B,q as T,bk as E,bl as G,f as P,ab as R,bm as F,bn as _,bo as O,bp as I,bq as W,br as q,bs as z,bt as Y,bu as K,bv as U,bw as Q,bx as J,aA as X,l as Z,by as ee,bz as te,bA as ae,V as ne,$ as se,x as re,aF as oe,D as ie,aE as ce,B as le,P as ue,Q as fe,J as de,E as me,L as ve,G as pe,bB as he,C as be,F as ge,bC as ke,N as ye,S as we,bD as $e,bE as Le,ak as Ce,n as De,ao as Ve,aj as Me,bF as Ae,I as Se,bG as Ne,bH as He,bI as je,bJ as xe,bK as Be,d as Te,aJ as Ee,bL as Ge,bM as Pe,bN as Re,bO as Fe,y as _e,bP as Oe,bQ as Ie,bR as We,bS as qe,bT as ze,av as Ye,bU as Ke,bV as Ue,a0 as Qe,bW as Je,bX as Xe,bY as Ze,bZ as et,b_ as tt,b$ as at,c0 as nt,c1 as st,c2 as rt,c3 as ot,c4 as it,c5 as ct,c6 as lt,c7 as ut,c8 as ft,c9 as dt,ca as mt,cb as vt,cc as pt,cd as ht,ce as bt,cf as gt,cg as kt,ch as yt,ci as wt,cj as $t,ck as Lt,cl as Ct,cm as Dt,ay as Vt,cn as Mt}from"./calfSystem-CIuUjh4H.js"
import{t as At}from"./toggleForce-br4z9gGd.js"
import{r as St,a as Nt}from"./roundToString-HX3cLryI.js"
import{d as Ht,q as jt}from"./quickbuffSuccess-Bm-WlwOb.js"
import{c as xt}from"./createInput-ESh6G5it.js"
import{c as Bt}from"./createLabel-CKsPg3Zr.js"
import{c as Tt}from"./idbLogger-CFKQxAaf.js"
import{r as Et}from"./rnd-D_QmA-Fa.js"
import{c as Gt}from"./createStyle-Co3Q_8M9.js"
import{t as Pt,g as Rt,a as Ft}from"./getTitanString-DrmoKrfx.js"
import{c as _t}from"./createTable-BIzULC9U.js"
import{c as Ot}from"./chunk-zr9rAXvK.js"
import{r as It}from"./reduceBuffArray-Diy1E3zc.js"
import{r as Wt}from"./reliclist-BNMxC0FH.js"
import{d as qt}from"./daGroupStats-BmHJ2HMW.js"
import{d as zt,m as Yt}from"./mercEffect-spruTmcc.js"
import{a as Kt}from"./attribsToArray-CYHVUfhJ.js"
import{r as Ut}from"./remainingPages-BUotk4St.js"
import{t as Qt}from"./testQuant-DiMFeB-N.js"
import{s as Jt,j as Xt}from"./simpleCheckbox-D1e9ej5E.js"
import{i as Zt}from"./isSelected-BWnMzKlW.js"
import{b as ea}from"./bitwiseAnd-C5gmj-aX.js"
import"./buffReportParser-DRBpEf2a.js"
import"./buffObj-BIwiFUIW.js"
import"./view-CBmV8zyu.js"
import"./isChecked-D_0do7nT.js"
let ta=0
function aa(e){return e}function na(e){if(function(e){return t.showBuffInfo&&e.some(aa)}(e))return function(){if(ta)At(ta,!1)
else{ta=a({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div>"})
const e=n("actionContainer")
s(ta,e.children[2])}return ta}()
ta&&At(ta,!0)}function sa(e,t,a,n){t&&(e.className=t),r(a,e)
const s=o()
return i(e,s),c(e,n),s}let ra=0,oa=0
function ia(e,t){ra?At(ra,!1):function(e){ra=e.children[3],oa=sa(ra,"fshBlue","CA "," active")}(e),r(t.level,oa)}function ca(e,t){t?ia(e,t):ra&&At(ra,!0)}let la=0,ua=0
function fa(e,t){la?At(la,!1):function(e){la=e.children[4],ua=sa(la,"fshRed","Doubler "," active")}(e),r(t.level,ua)}function da(e,t){t?fa(e,t):la&&At(la,!0)}let ma=0,va=0
function pa(e,t,a){ma?At(ma,!1):function(e){ma=e.children[2],va=sa(ma,"","Damage bonus: ","%")}(e),r(function(e,t){if(e){const a=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return St(a,2).toString()}return"0"}(t,Number(a)),va)}function ha(e,t,a){t?pa(e,t,a):ma&&At(ma,!0)}let ba=0,ga=0
function ka(e,t){ba?At(ba,!1):function(e){ba=e.children[1],ga=sa(ba,"","Kill Streak: ","")}(e),function(e,t){r(l(e),t)}(t,ga)}function ya(e,t,a,n){t||a?ka(e,n):ba&&At(ba,!0)}function wa(e,t){return t.name===e}function $a(e){const{buffs:t}=GameData.player()
if(t)return t.find(u(wa,e))}const La=["red","orange","yellow"]
let Ca=0,Da=0
async function Va(){if(v("NewMap","recastClick"),$a("Summon Shield Imp"))return
!function(e){jt(e)&&GameData.fetch(h)}(await Ht([p()],[55]))}const Ma=["imp-0","imp-1","imp-1"]
function Aa(e,t){Ca?At(Ca,!1):function(e){[Ca]=e.children,r("Shield Imps Remaining: ",Ca),Da=o(),i(Ca,Da),f(Ca,"&nbsp;")
const t=d({className:"xSmallLink",textContent:"Recast"})
i(Ca,t),m(t,Va)}(e)
const a=function(e){return e?Number(e.stack):0}(t)
Ca.className=function(e){return Ma[e]??"fshGreen"}(a),r(a,Da)}function Sa(e,t,a){t||a?Aa(e,t):Ca&&At(Ca,!0)}function Na(e){return 0===e.type}let Ha=0,ja=0,xa=0,Ba=0,Ta=0,Ea=0
function Ga(){Ha=$a("Death Dealer"),ja=$a("Doubler"),xa=$a("Counter Attack"),Ba=$a("Summon Shield Imp"),Ta=function(){const{dynamic:e}=GameData.realm()
return b(e)&&e.some(Na)}(),Ea=GameData.player().killStreak}function Pa(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",La[e.text()]||"#ad8043")}(),Ga()
const e=na([Ha,ja,xa,Ba,Ta])
e&&(Sa(e,Ba,Ha),ya(e,Ha,Ta,Ea),ha(e,Ha,Ea),ca(e,xa),da(e,ja))}function Ra(e){return o({textContent:e})}function Fa(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function _a(e,t,a){return Bt({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:a})}function Oa(e){const t=a({className:"fshToggle"}),n=xt({checked:e.prefVal,id:e.checkId,type:"checkbox"})
i(t,n)
const s=_a(e.onClass,e.onTip,e.checkId)
i(t,s)
const r=_a(e.offClass,e.offTip,e.checkId)
return i(t,r),i(e.worldName,t),n}let Ia=0,Wa=0,qa=0,za=0,Ya=0,Ka=0,Ua=0,Qa=0,Ja=0
const Xa=e=>Ra(e?e.toString():"?")
function Za(e,t,n){const s=a({textContent:`${t} Lvl: `})
i(s,n),i(e,s)}function en(e,t,a){const n=d({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return i(a,n),n}function tn(e){!function(e){const t=a({className:"fshFsty"})
Wa=Xa(GameData.realm().minlevel),Za(t,"Min",Wa),qa=Xa(GameData.player().level),Za(t,"Your",qa),i(e,t)}(e),za=en("fshFormGroup","Quick Create Attack Group",e),Ya=en("fshQuickBuff","Open Quick Buff Popup",e),Ka=en("fshRealmMap","Open Realm Map",e),Ua=en("fshTempleOne","Search map in Ultimate FSG",e)}function an(){tn(Ia),function(e){if(D("showSpeakerOnWorld")){const t=D("playNewMessageSound")
Qa=Oa({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(Ia),function(e){const a=t.huntingMode
Ja=Oa({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(Ia)}const nn=[[()=>Qa,function(){v("NewMap","toggleSound"),j("playNewMessageSound",!D("playNewMessageSound"))}],[()=>Ja,function(){v("NewMap","toggleHuntMode"),t.huntingMode=!t.huntingMode,j("huntingMode",t.huntingMode)}]],sn=[[()=>za,function(e){v("NewMap","doFormGroup"),V(e),GameData.doAction(12,401,{},0)}],[()=>Ya,function(){v("NewMap","openQuickBuff"),M(A())}],[()=>Ka,function(){v("NewMap","openRealmMap"),window.open(`${S+N}map`,"fsMap")}],[()=>Ua,function(){v("NewMap","openUfsgMap")
const e=GameData.realm()
window.open(`${H}realms${N}view&realm_id=${e.id}`,"mapUfsg")}]]
function rn(e,t){const{target:a}=t,[,n]=e.find(([e])=>e()===a)??[]
n&&(a.blur(),n(a))}function on(e){return u(rn,e)}function cn(){Ia||(Ia=a({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),an(),m(Ia,on(sn)),C(Ia,"change",on(nn)),L(Ia,n("worldCoord")))}function ln(e,t){Wa&&t.b.minlevel&&(Fa(),r(t.b.minlevel,Wa))}function un(e,t){qa&&r(t.b,qa)}const fn=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"],dn=`url("${E}ui/world/icon_action_attack_`
let mn=!1
function vn(e){return T(".verb.attack",e)}function pn(e){const t=fn.indexOf(e.toUpperCase())
return x(`#actionList .actionListItem.creature.creature-${t}`)}function hn(e){e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""}function bn(e,t){null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${dn}${t+1}.png")`)}function gn(e){const t=["LEGENDARY","NORMAL"].flatMap(pn),a=pn("CHAMPION"),[n,s]=e?[t,a]:[a,t]
n.map(vn).filter(e=>null!==e).forEach(hn),s.slice(0,8).map(vn).forEach(bn)}function kn(e){if(!e.altKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(mn||gn(!0),mn=!0,!/(?:Digit|Numpad)[1-8]/.test(e.code))return
const t=pn("CHAMPION"),a=parseInt(e.code.slice(-1),10)-1
a<t.length&&function(e){const t=vn(e)
t&&(v("NewMap","ChampionAttack"),B(t))}(t[a])}function yn(e){!mn||e.ctrlKey&&e.shiftKey||(mn=!1,gn(!1))}function wn(e,t){0===t.response.response&&function(e){Tt({combat:e.response.data,player:{buffs:P(e.player.buffs.filter(({id:e})=>[26,54].includes(e)).map(({id:e,level:t})=>[e,t]))},time:e.time})}(t)}function $n(e){return!e?.response?.data}async function Ln(e){const t=await F({cache:!1,url:"fetchdata.php",data:{...e,fshrnd:Et()},dataType:"text"})
return _(t)??{response:{msg:"Server Error",response:1}}}const Cn=[]
const Dn=(e,t)=>e===Number(t.response.data.id)
function Vn(e,t){e(t)}async function Mn(e,t){const a=Cn.find(u(Dn,e))
if(a)return function(e){return new Promise(t=>{O(3,Vn,[t,e])})}(a)
const n=await Ln({a:1,d:0,id:e,passback:t})
return function(e){$n(e)||Cn.push(e)}(n),n}let An=0,Sn=0,Nn=0,Hn=0,jn=0,xn=0
const Bn=()=>An,Tn=()=>Sn,En=()=>Nn,Gn=()=>Hn,Pn=()=>jn
function Rn(e,t){return I(W(t,e))}function Fn(){var e
An=GameData.player().level,e=n("statbar-character-tooltip-stats"),Nn=Rn(e,q),Sn=Rn(e,z),jn=Rn(e,Y),Hn=Rn(e,K),xn=Rn(e,U)}const _n=e=>`<td>${e}:&nbsp;</td>`,On=e=>`<td width="40%">${e}</td>`
function In([e,t,a,n,s]){return[_n(e),On(`${t} (your ${a}:<span class="${n}">${s()}</span>)`)]}function Wn(e){return["<tr>",...e,"</tr>"].join("")}function qn(e,t){return Wn([...In(e),...In(t)])}function zn(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function Yn(e,t,a){return function(e){return`<table><tr><td><img src="${E}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return Wn([_n("Class"),On(e.creature_class),...In(["Level",e.level,"level",t,Bn])])}(e,a)+function(e){return qn(["Attack",e.attack,"defense","fshYellow",Tn],["Defense",e.defense,"attack","fshYellow",En])}(e)+function(e){return qn(["Armor",e.armor,"damage","fshYellow",Gn],["Damage",e.damage,"armor","fshYellow",Pn])}(e)+function(e,t){return Wn([_n("HP"),On(`${e.hp} (your HP:<span class="fshYellow">${xn}</span>)(1H: <span class="fshRed">${t}</span>)`),_n("Gold"),On(e.gold)])}(e,t)+'<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(zn).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function Kn(e){if(!$n(e))return function(e){const a=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let n="fshYellow"
return Fn(),Bn()>e.level&&(n="fshRed"),Yn(e,a,n)}(e.response.data)}const Un=["verb","view","tip-static"]
async function Qn(e,t){const a=Q((n=e).parentNode.children).indexOf(n)
var n
const s=await Mn(GameData.actions()[a].data.id,a)
$n(s)||function(e,t){const a=Kn(t)
e.set("content.text",a)}(t,s)}function Jn(e,t){v("NewMap","CreatureInfo"),e.classList.add("fshTip")
var a
const n=(a="Loading...",$(e).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:a},hide:{effect:!1}})).qtip("api")
n&&Qn(t,n)}function Xn(e,t){return a=e,Un.every(e=>R(e,a))&&!R("fshTip",e)&&R("creature",t)
var a}function Zn(e){if(!t.showCreatureInfo)return
const{target:a}=e,n=a.parentNode.parentNode.parentNode
Xn(a,n)&&Jn(a,n)}function es(e){return t.doNotKillList.includes(J(e))}function ts(e){e.classList.toggle("fshBlue",es(Z(e)))}function as(){const e=n("actionList")
X("creature",e).forEach(ts)}function ns(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(es(e))return v("NewMap","creatureOnList"),n("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const ss={2:function(e){return function(t,a,n,s){ns(n.passback)||e(t,a,n,s)}}}
function rs(e){return function(t,a,n,s){const r=ss[t];(function(e){return e&&ee(e)})(r)&&function(e){return te(e)||0===e}(s)?r(e)(t,a,n,s):e(t,a,n,s)}}function os(){return e={subcmd:"contrib"},ne({cmd:"globalquests",...e})
var e}var is=le('<a><img alt="guild logo" class="svelte-tkgzmg"/></a>'),cs=le('<tr class="svelte-tkgzmg"><td> </td><td><!></td><td><a> </a></td><td> </td></tr>'),ls=le('<table id="world-event-contrib-table" class="svelte-tkgzmg"><tbody><tr class="svelte-tkgzmg"><td class="header"></td><td class="header"></td><td class="header">Username</td><td class="header">Kills</td></tr><!></tbody></table>'),us=le('<p style="color: red"> </p>')
function fs(e,t){re(t,!0)
var a=oe(),n=ie(a)
ce(n,()=>t.promise,e=>{var t=ke("Loading...")
ve(e,t)},(e,t)=>{var a=he(()=>{var{r:e}=de(t)
return{list:e}}),n=he(()=>de(a).list),s=oe(),r=ie(s),o=e=>{var t=ls(),a=me(t),s=be(me(a))
ge(s,19,()=>de(n),({player:e,value:t})=>e.id,(e,t,a)=>{let n=()=>de(t).player
var s=cs(),r=me(s),o=me(r),i=be(r),c=me(i),l=e=>{var t=is(),a=me(t)
ue(()=>{we(t,"href",`${Le??""}${n().guild_id??""}`),we(a,"src",`${E??""}guilds/${n().guild_id??""}_mini.png`)}),ve(e,t)}
pe(c,e=>{n().guild_id&&e(l)})
var u=be(i),f=me(u),d=me(f),m=be(u),v=me(m)
ue(()=>{fe(o,de(a)+1),we(f,"href",`${$e??""}${n().name??""}`),fe(d,n().name),fe(v,de(t).value)}),ve(e,s)}),ve(e,t)},i=e=>{var t=ke("Server Error")
ve(e,t)}
pe(r,e=>{b(de(n))?e(o):e(i,!1)}),ve(e,s)},(e,t)=>{var a=us(),n=me(a)
ue(()=>fe(n,de(t).message)),ve(e,a)}),ve(e,a),ye()}const ds=Ce({promise:Promise.resolve()})
let ms=0
function vs(e){ds.promise=se(os),ms||(ms=De(fs,{props:ds,target:e}))}function ps(){v("NewMap","GlobalTop")
const e=n("world-event-contrib")
vs(e),globalThis.$(e).dialog({title:"Top 100 Event Contributers",minWidth:312,height:300,zIndex:9999})}function hs(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const bs=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function gs(e,t){var a
D(e)&&(a=t+1,$.subscribe(ae,u(hs,a)),hs(t+1))}var ks=(e,t,a)=>t(a()),ys=le('<div class="count svelte-17n83ui"> </div>'),ws=le("<div> <!></div>")
function $s(e,t){re(t,!0)
let a=Me(Ce([]))
const n=window.$("#messageCenter").data().hcsWorldMessageCenter
const s=function*(){for(let e=0;;e++)yield e}()
function r(){n._reposition()}function o(e){Se(a,de(a).filter(({msg:t})=>t!==e),!0),r()}n._displayMessage=async function(e,t,n=3e3){const o=s.next().value
Se(a,[...de(a),{msg:e,type:t,expire:o}],!0),setTimeout(()=>{Se(a,de(a).filter(({expire:e})=>e!==o),!0)},n),await Ne(),r()}
var i=oe(),c=ie(i)
ge(c,17,()=>{return e=de(a),Ae(e,"msg").map(({msg:t,type:a})=>({msg:t,type:a,count:e.filter(({msg:e})=>e===t).length}))
var e},({msg:e,type:t,count:a})=>e,(e,t)=>{let a=()=>de(t).msg,n=()=>de(t).count
var s=ws()
s.__click=[ks,o,a]
var r=me(s),i=be(r),c=e=>{var t=ys(),a=me(t)
ue(()=>fe(a,`x${n()??""}`)),ve(e,t)}
pe(i,e=>{n()>1&&e(c)}),ue(()=>{He(s,1,`fsh-message ${de(t).type??""}`,"svelte-17n83ui"),fe(r,`${a()??""} `)}),ve(e,s)}),ve(e,i),ye()}Ve(["click"])
let Ls=0
function Cs(e){Ls[e.name]?Ls[e.name].seen&&(Ls[e.name].seen+=1):(Ls[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,Ls[e.name]))}function Ds(e,t,a){return t?e(t,a):a}function Vs(e,t){const a=e||{}
return a.min=Ds(Math.min,a.min,t),a.max=Ds(Math.max,a.max,t),a}const Ms=["attack","armor","damage","defense","hp"]
function As(e,t,a){const n=Vs(t[a],Number(e[a]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[a],n)&&(t[a]=n)}function Ss(e,t){e[t.name]=Vs(e[t.name],Number(t.value))}function Ns(e){Ls||(Ls={}),Cs(e),function(e,t){Ms.forEach(u(As,e,t))}(e,Ls[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(u(Ss,t.enhancements)))}(e,Ls[e.name]),xe("fsh_monsterLog",Ls)}async function Hs(){!function(e){Ls=e||{}}(await je("fsh_monsterLog"))}const js=[]
function xs(e){var a
$n(e)||(a=e.response.data,t.showMonsterLog&&Ns(a))}function Bs(e,t){return e.id===t.id}async function Ts(e,t){if(6!==e.type||function(e){if(js.find(u(Bs,e.data)))return!0
js.push(e.data)}(e))return
xs(await Mn(e.data.id,t))}function Es(){t.showMonsterLog&&(GameData.actions().forEach(Ts),v("NewMap","MonsterLog"))}let Gs=""
function Ps(){return Be({subcmd:"scouttower"})}function Rs(e,[t,a,n]){const s=e.insertCell(-1)
return s.colSpan=t,n&&(s.className="header"),i(s,a()),s}function Fs(e,t,a){const n=e.insertRow(-1)
return a&&(n.className="fshBlue"),function(e,t){t.forEach(u(Rs,e))}(n,t),n}function _s(e,t){Fs(e,t[0],t[1])}function Os(e,t){t.forEach(u(_s,e))}let Is=0,Ws=0,qs=0,zs=0,Ys=0,Ks=0,Us=0,Qs=0
const Js=()=>Is,Xs=()=>Us
function Zs(){Is=Ra("Current"),Ws=Ra("Kills"),qs=Ra("Member"),zs=Ra("% of Total"),Ys=Ra("Status"),Ks=Ra("Titan HP"),Us=Ra("Total"),Qs=Ra("Your Guild")}let er=0,tr=0,ar=0,nr=0,sr=0,rr=0,or=0,ir=0,cr=0
const lr=()=>er,ur=()=>tr,fr=()=>ar,dr=()=>nr,mr=()=>sr,vr=()=>rr,pr=()=>or,hr=()=>ir,br=()=>cr
function gr(){er=o({innerHTML:"&nbsp;"}),tr=o({innerHTML:"&nbsp;"}),ar=o(),nr=o(),sr=o(),rr=o(),or=o(),ir=o(),cr=o()}let kr=0
const yr=()=>kr
function wr(){for(;kr.rows.length>8;)kr.deleteRow(8)}function $r(e){const t=o()
return i(t,e),c(t,"%"),t}const Lr=[[[5,lr,!0],[1,ur,!0]]],Cr=[[[2,()=>Ks,!0],[4,()=>Qs,!0]]],Dr=[[[2,function(){const e=o()
return i(e,fr()),c(e,"/"),i(e,dr()),e}],[4,mr]]],Vr=[[[2,()=>Ys,!0],[4,hr]],!0],Mr=[[[2,()=>qs,!0],[2,()=>Ws,!0],[2,()=>zs,!0]]]
let Ar=0,Sr=0,Nr="",Hr=""
function jr(){Sr=null,Ar&&!R("fshHide",Ar)&&(At(Ar,!0),Te("&nbsp;",er),Te("&nbsp;",tr),r("",ar),r("",nr),r("",sr),r("",rr),r("",or),Te("",ir),Te("",cr),wr())}function xr(e){return 0===e.type&&(Sr=e.base_creature_id,Nr=`(${e.x},${e.y})`,Hr=Pt(e.name),!0)}function Br(){if(Ar)At(Ar,!1)
else{const e=n("actionContainer")
Ar=a({className:"fshActionBox titanInfo"}),gr(),kr=_t({className:"fshCenter"}),Zs(),Os(kr,[Lr,Cr,Dr,[[[2,Js,!0],[4,u($r,vr())]],!0],[[[2,Xs,!0],[4,u($r,pr())]],!0],Vr,[[[6,br]]],Mr]),i(Ar,yr()),i(e,Ar)}}function Tr(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(Ee()+1e3*e)
return`${Ge(t.getHours())}:${Ge(t.getMinutes())} ${Ge(t.getDate())}/${Pe[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function Er(e){return Nt(Ft(e.max_hp-e.current_hp,e.kills),2)}function Gr(e){return Nt(100*e.kills/e.max_hp,2)}function Pr(e){!function(e){for(const[t,a]of[[Hr,lr],[Nr,ur],[e.current_hp,fr],[e.max_hp,dr],[e.kills,mr],[Er(e),vr],[Gr(e),pr]])r(t,a())}(e),Te(function(e){return Rt(e.kills,e.max_hp,e.current_hp)}(e),hr()),Te(Tr(e.cooldown),br())}function Rr(e,t){return[[[2,()=>Ra(t.player.name)],[2,()=>Ra(t.kills.toString())],[2,()=>Ra(`${Nt(100*t.kills/e.kills,2)}%`)]]]}function Fr(e){return e.realm&&e.creature===Sr&&e.realm===Gs}function _r(e){const t=e.find(Fr)
t&&(Pr(t),function(e){if(wr(),!e.contributors)return
const t=e.contributors.map(u(Rr,e))
Os(yr(),t)}(t))}let Or=null
const Ir=e=>t.showTitanInfo&&b(e)&&e.some(xr)
function Wr(e,t){(e=>e?.s&&b(e.r))(t)&&(_r(t.r),Ir(GameData.realm().dynamic)?Or=window.setTimeout(e,3e4):jr())}async function qr(){Wr(qr,await se(Ps))}function zr(e){Or&&(window.clearTimeout(Or),Or=null),Ir(e)?(Br(),qr()):jr()}function Yr(e){var t
e.dynamic&&(t=e.name,Gs=t,zr(e.dynamic))}function Kr(e,t){t.realm?.name&&Yr(t.realm)}var Ur=le("<li><!></li>"),Qr=le('<ul class="svelte-bwtg9x"></ul>')
function Jr(e,t){re(t,!0)
let a=_e(t,"members",19,()=>[])
const n=e=>`Buff ${We[e]} 16`
var s=Qr()
ge(s,21,()=>Ot(16,a()),Oe,(e,a,s)=>{var r=Ur(),o=me(r)
Ie(o,{onclick:e=>function(e,a,s){s.target.blur(),qe(`${ze}&players=${e.join(",")}`,"fsQuickBuff",618,1e3,",scrollbars"),t.emitBuffBatch(n(a))}(de(a),s,e),children:(e,t)=>{var a=ke()
ue(e=>fe(a,e),[()=>n(s)]),ve(e,a)},$$slots:{default:!0}}),ve(e,r)}),ve(e,s),ye()}function Xr(e,t){return e>10*t||e<t?e:10*t}const Zr=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function eo(e,t,a){e[a[0]]=Number(t[a[1]])}const to=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function ao(e,t,a){e[a[0]]=t[a[1]]||0}function no(e){if(!e._skills)return
const t=It(e._skills),a={}
return function(e,t){Zr.forEach(u(eo,e,t))}(a,e),function(e,t){to.forEach(u(ao,e,t))}(a,t),a.superEliteSlayerMultiplier=St(.002*a.superEliteSlayerLevel,2),Ye(a.armorValue)&&function(e){e.attackValue=Xr(e.attackBonus,e.levelValue),e.defenseValue=Xr(e.defenseBonus,e.levelValue),e.armorValue=Xr(e.armorBonus,e.levelValue),e.damageValue=Xr(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(a),a}const so=Ue(["statusStore","Done."])
let ro=[]
const oo=Ke(so,(e,t)=>{const a=ro.find(([t])=>t===e[0])
a?[,a[1]]=e:ro=[...ro,e]
const n=ro.find(([,e])=>"Done."!==e)
t(n?.[1]??"Done.")}),io=Ue(0)
const co=Ke(io,(e,t)=>{!async function(e,t){if(!e)return
so.set(["relicStore","Processing defending guild relics ... "])
const a=await Wt(e)
if(!a?.r?.relics)return void so.set(["relicStore","AJAX Error"])
const n=a.r.relics.length,s=1===n?1.5:St(1-n/10,2)
t({noOfRelics:n,relicMultiplier:s,leadDefenderBonus:`${String(100*s)}%`}),so.set(["relicStore","Done."])}(e,t)}),lo=Ue([])
const uo=Ke(lo,(e,t)=>{!async function(e,t){if(!e.length)return
so.set(["defendersStore","Processing defending group stats ... "])
const a=[]
await Qe(e.map(async(e,n)=>{const s=await Je(e)
a.push([n,no(s)]),t(a)})),so.set(["defendersStore","Done."])}(e,t)}),fo=Ke(uo,(e,t)=>{const a=e?.find(([e])=>0===e)
a&&t(a[1])}),mo=(e,t,a)=>Math.ceil(a*(0===t?e:Xe))
function vo(e,t,[a,n]){return{armorValue:t.armorValue+mo(e,a,n.armorValue),attackValue:t.attackValue+mo(e,a,n.attackValue),damageValue:t.damageValue+mo(e,a,n.damageValue),cloaked:t.cloaked+(n.cloakLevel?1:0),defenseValue:t.defenseValue+mo(e,a,n.defenseValue),hpValue:t.hpValue+mo(e,a,n.hpValue)}}const po=Ke([co,uo],([e,t],a)=>{if(!e?.relicMultiplier||!t?.length)return
const n=t?.reduce(u(vo,e.relicMultiplier),{armorValue:0,attackValue:0,damageValue:0,cloaked:0,defenseValue:0,hpValue:0})
a(n)}),ho=Ue(0),bo=e=>e.members[0].name===GameData.player().username
async function go(e,t){if(!e)return
so.set(["groupStore","Processing attacking group stats ... "])
const a=await async function(){const e=await Ze()
return e?.r?.find(bo)?.id}(),n=a&&await async function(e){const t=await qt(e)
return Kt(t?.r?.attributes)}(a),s=n&&await async function(e){const t=await zt(),a=Yt(t)
return e?.map((e,t)=>e-a[t])}(n)
s&&t({attack:s[0],defense:s[1],armor:s[2],hp:s[3],damage:s[4]}),so.set(["groupStore","Done."])}const ko=Ke(ho,(e,t)=>{go(e,t)}),yo=(e,t,a)=>Math.ceil(e*et(t,0)*a),wo=(e,t)=>yo(e,t,.0025),$o=(e,t)=>yo(e,t,.001),Lo=$o,Co=$o,Do=$o,Vo=$o,Mo=$o,Ao=(e,t)=>Math.ceil(e*(1+.001*et(t,0))),So=(e,t)=>Math.ceil(e*(1-t*tt)),No=Ue([]),Ho=Ke(No,(e,t)=>{e&&t(It(e))}),jo=Ke([Ho,ko],([e,t],a)=>{if(!e||!t)return
const n=Ao(t.defense,e.Constitution),s=t.hp+Lo(n,e.Fortitude)
a({dmgWithChiStrike:t.damage+Co(s,e["Chi Strike"]),defWithConst:n,hpWithFortitude:s,nmv:wo(t.attack,e["Nightmare Visage"]),sanctuary:Do(t.armor,e.Sanctuary)})})
const xo=Ke([jo,fo,ko],function([e,t,a],n){if(!e||!t||!a)return
const s=a.attack-e.nmv,r=Vo(s,t.flinchLevel),o=Mo(e.dmgWithChiStrike,t.terrorizeLevel)
n({attack:s-r,defense:e.defWithConst+e.nmv,armor:a.armor+e.sanctuary,hp:e.hpWithFortitude,damage:e.dmgWithChiStrike-o})})
const Bo=Ke([fo,po],([e,t],a)=>{if(!e||!t)return
const n=wo(t.attackValue,e.nightmareVisageLevel),s=Ao(t.defenseValue,e.constitutionLevel)
!function([e,t,a,n,s,r]){a({attackWithNmv:t.attackValue-n,chiStrike:e.chiStrikeLevel,cloak:e.cloakLevel?"Yes":"No",dmgWithChiStrike:t.damageValue+Co(r,e.chiStrikeLevel),defWithConst:s,hpWithFortitude:r,nmv:n,sanctuary:Do(t.armorValue,e.sanctuaryLevel)})}([e,t,a,n,s,t.hpValue+Lo(s,e.fortitudeLevel)])})
const To=Ke([Ho,Bo,po],function([e,t,a],n){if(!e||!t||!a)return
const s=Vo(t.attackWithNmv,e.Flinch),r=t.defWithConst+t.nmv,o=Mo(t.dmgWithChiStrike,e.Terrorize)
n({attack:t.attackWithNmv-s,dc225:So(r,225),dc175:So(r,175),defense:r,armor:a.armorValue+t.sanctuary,hp:t.hpWithFortitude,damage:t.dmgWithChiStrike-o})}),Eo=Ke(co,(e,t)=>{t({noOfRelics:e?.noOfRelics??"",leadDefenderBonus:e?.leadDefenderBonus??""})}),Go=Ke(fo,(e,t)=>{if(!e)return t("")
e.cloakLevel?t("Yes"):t("No")}),Po=Ke(po,(e,t)=>{t({armorValue:e?.armorValue??"",attackValue:e?.attackValue??"",damageValue:e?.damageValue??"",cloaked:e?.cloaked??"",defenseValue:e?.defenseValue??"",hpValue:e?.hpValue??""})}),Ro=Ke(uo,(e,t)=>{t(e?.length??"")}),Fo=Ke(To,(e,t)=>{t({attack:e?.attack??"",dc225:e?.dc225??"",dc175:e?.dc175??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""})}),_o=e=>({attack:e?.attack??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""}),Oo=Ke(ko,(e,t)=>{t(_o(e))}),Io=Ke(xo,(e,t)=>{t(_o(e))})
var Wo=le('<a class="svelte-x2lud7"> </a> ',1),qo=le(' <div class="missing svelte-x2lud7"></div>',1)
function zo(e,t){re(t,!0)
let a=_e(t,"members",19,()=>[]),n=Me(Ce([]))
const s=[({username:e})=>!a().includes(e),({last_login:e})=>e,({last_login:e})=>e<st(),({last_login:e})=>e>rt(),({level:e})=>e<400||e>421,({level:e})=>e<441||e>450],r=e=>s.every(t=>t(e)),o=({username:e},{username:t})=>nt(e,t)
io.subscribe(e=>{!async function(e){const t=await at(e)
b(t)&&Se(n,t.filter(r).sort(o),!0)}(e)})
var i=qo(),c=ie(i),l=be(c)
ge(l,21,()=>de(n),({id:e,username:t})=>e,(e,t)=>{var a=Wo(),n=ie(a),s=me(n)
be(n,1,!0).nodeValue=" ",ue(()=>{we(n,"href",`${ot??""}${de(t).id??""}`),fe(s,de(t).username)}),ve(e,a)}),ue(()=>fe(c,`${(de(n).length||"")??""} Offline guild members not at relic: `)),ve(e,i),ye()}function Yo(e,t,a,n){v("relic","fetchStats"),Se(t,!0),io.set(a().controlled_by.guild_id),lo.set(n),ho.set(GameData.player().hasGroup),No.set(GameData.player().buffs)}var Ko=le('<div class="buff-links svelte-1ncfcj8"><!></div>'),Uo=le('<button class="custombutton" type="button">Fetch Stats</button>'),Qo=le('<div class="b-top svelte-1ncfcj8">Processing</div> <div class="proc-stat svelte-1ncfcj8"> </div> <div class="b-top svelte-1ncfcj8">Assumptions</div> <div class="assume svelte-1ncfcj8">Above calculations include Constitution, Fortitude, Nightmare Visage,\n        Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that\n        order) on both the defending group and attacking group.</div>',1),Jo=le('<div class="middle svelte-1ncfcj8"><div class="b-top svelte-1ncfcj8">Defending Guild Stats</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">Relic Count:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Lead Defender Bonus:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Lead Defender Cloaked:</div> <div class="svelte-1ncfcj8"> </div></div> <div class="b-top svelte-1ncfcj8">Other Defender Stats</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">Raw Attack:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Attack w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Defense:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Defense w/buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Armor:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Armor w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Damage:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Damage w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw HP:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">HP w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Cloaked:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Processed:</div> <div class="svelte-1ncfcj8"> </div></div></div> <div class="right svelte-1ncfcj8"><div class="b-top svelte-1ncfcj8">Adjusted Defense Values</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">DC225:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">DC175:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">&nbsp;</div></div> <div class="b-top svelte-1ncfcj8">Attacking Group Stats</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">Raw Group Attack:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Attack w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group Defense:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Defense w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group Armor:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Armor w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group Damage:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Damage w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group HP:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group HP w/ buffs:</div> <div class="svelte-1ncfcj8"> </div></div></div> <div class="bottom b-top svelte-1ncfcj8"><!></div>',1),Xo=le('<div class="body svelte-1ncfcj8"><div class="left svelte-1ncfcj8"><!> <!></div> <!></div>')
function Zo(e,t){re(t,!0)
const a=()=>lt(Eo,"$relicDisplay",i),n=()=>lt(Po,"$rawDefDisplay",i),s=()=>lt(Fo,"$defBuffedDisplay",i),r=()=>lt(Oo,"$rawGroupDisplay",i),o=()=>lt(Io,"$buffResultDisplay",i),[i,c]=ct()
let l=_e(t,"relicData",19,()=>({}))
const u=l().defenders.map(e=>e.player_name)
let f=Me(!1)
function d(e){v("relic",e)}it(()=>{Se(f,!1),io.set(0),lo.set([]),ho.set(0),No.set([])})
var m=Xo(),p=me(m),h=me(p),b=e=>{var t=Ko()
Jr(me(t),{get members(){return u},emitBuffBatch:d}),ve(e,t)}
pe(h,e=>{l().is_owner&&e(b)})
var g=be(h,2),k=e=>{var t=Uo()
t.__click=[Yo,f,l,u],ve(e,t)},y=e=>{var t=Qo(),a=be(ie(t),2),n=me(a)
ue(()=>fe(n,lt(oo,"$trackStatus",i))),ve(e,t)}
pe(g,e=>{de(f)?e(y,!1):e(k)})
var w=be(p,2),$=e=>{var t=Jo(),c=ie(t),l=be(me(c),2),f=be(me(l),2),d=me(f),m=be(f,4),v=me(m),p=be(m,4),h=me(p),b=be(l,4),g=be(me(b),2),k=me(g),y=be(g,4),w=me(y),$=be(y,4),L=me($),C=be($,4),D=me(C),V=be(C,4),M=me(V),A=be(V,4),S=me(A),N=be(A,4),H=me(N),j=be(N,4),x=me(j),B=be(j,4),T=me(B),E=be(B,4),G=me(E),P=be(E,4),R=me(P),F=be(P,4),_=me(F),O=be(c,2),I=be(me(O),2),W=be(me(I),2),q=me(W),z=be(W,4),Y=me(z),K=be(I,4),U=be(me(K),2),Q=me(U),J=be(U,4),X=me(J),Z=be(J,4),ee=me(Z),te=be(Z,4),ae=me(te),ne=be(te,4),se=me(ne),re=be(ne,4),oe=me(re),ce=be(re,4),le=me(ce),de=be(ce,4),pe=me(de),he=be(de,4),ge=me(he),ke=be(he,4),ye=me(ke),we=be(O,2)
zo(me(we),{get members(){return u}}),ue(()=>{fe(d,a().noOfRelics),fe(v,a().leadDefenderBonus),fe(h,lt(Go,"$ldcloak",i)),fe(k,n().attackValue),fe(w,s().attack),fe(L,n().defenseValue),fe(D,s().defense),fe(M,n().armorValue),fe(S,s().armor),fe(H,n().damageValue),fe(x,s().damage),fe(T,n().hpValue),fe(G,s().hp),fe(R,n().cloaked),fe(_,lt(Ro,"$processed",i)),fe(q,s().dc225),fe(Y,s().dc175),fe(Q,r().attack),fe(X,o().attack),fe(ee,r().defense),fe(ae,o().defense),fe(se,r().armor),fe(oe,o().armor),fe(le,r().damage),fe(pe,o().damage),fe(ge,r().hp),fe(ye,o().hp)}),ve(e,t)}
pe(w,e=>{de(f)&&e($)}),ve(e,m),ye(),c()}Ve(["click"])
let ei=0
function ti(e,t){var a,s
t?.response?.data?.defenders?.length>0&&(a=n("dialog-relic"),s=t.response.data,ei&&ft(ei),ei=De(Zo,{props:{relicData:s},target:a}))}function ai(e,t){"ACT_REPAIR"===t&&GameData.fetch(mt+h+vt+pt)}let ni=!1
function si(e,t,a,n,s,r,o,i,c){return e.beginPath(),e.arc(r+i/2,o+c/2,i/6,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.lineWidth=1,e.strokeStyle="black",e.stroke(),!0}function ri(){if(!ni){const e=GameController.Realm.footprintTexture
e.color=D("footprintColor"),e.Draw=si,ni=!0}}function oi(){GameController?.Realm?.footprintTexture&&(ri(),$.unsubscribe("fixed.realm",oi))}let ii=0
function ci(e){$("#statbar-gold").css("background-color",e)}function li(){$("#HelperSendTotal").html(l(D("currentGoldSentTotal"))),Number(GameData.player().gold)>ii?ci("red"):ci("inherit")}function ui(){ii=D("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${D("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${l(ii)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${l(D("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",gt),li(),$.subscribe(kt,li)}let fi=0,di=0,mi=0,vi=0,pi=0,hi=0
async function bi(){const e=await Ln({a:14,d:0,id:fi.id,item_id:fi.itemId}),t=e.response.response,a=e.response.msg
let n=a
if(0!==t){const e=a.indexOf("<");-1!==e&&(n=a.substring(0,e))}else n=`You purchased ${e.response.data.name} for ${l(e.response.data.cost)} gold.`
f(hi,`${n}<br>`)}async function gi(){const e=Qt(pi.value)
e&&(v("NewMap","quickBuy"),await Qe(Ut(e,bi)),GameData.doAction(14,3,{id:fi.id,item_id:fi.itemId},0),mi.close())}function ki(){vi?r("",hi):function(){vi=a({className:"fshClear",textContent:"Select how many to quick-buy:"}),pi=xt({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),i(vi,pi)
const e=d({textContent:"Quick-buy"})
m(e,gi),i(vi,e),hi=a(),i(vi,hi),i(di,vi)}()}function yi(e,t){fi=t,di=di||n("shopDialogConfirm"),di&&(mi=mi||$(di).data("hcsWorldDialogShopConfirm"),mi&&ki())}var wi=le('<div id="tp-overlay" class="svelte-1u5skhe"> </div>')
function $i(e,t){re(t,!0)
let a=Me(0),n=0,s=Me(!1)
function r(){const e=GameData.player().teleportCooldown
Se(a,e-$t()+n),de(a)>0||(clearInterval(de(s)),Se(s,!1),t.tpButton.classList.remove("cooldown"))}window.$.subscribe("stats.player",r),window.$.subscribe(wt,function(e,t){n=$t(),r(),de(s)||0!==t.response.response||Se(s,setInterval(()=>{r()},1e3),!0)})
var o=oe(),i=ie(o),c=e=>{var t=wi(),n=me(t)
ue(()=>fe(n,de(a))),ve(e,t)}
pe(i,e=>{de(s)&&e(c)}),ve(e,o),ye()}function Li(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}function Ci(e,t){return"-"===t?e:"-"===e||e>t?"-":e}const Di=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${Li(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${Li(e)}`]]
function Vi(e,t){return t[0](e)}function Mi(e){e.playerHits=Ci(e.numberOfHitsRequired,e.numberOfCreatureHitsTillDead),e.creatureHits=Ci(e.numberOfCreatureHitsTillDead,e.numberOfHitsRequired),e.fightStatus=function(e){const t=Di.find(u(Vi,e))
return t?t[1](e):"Unknown"}(e)}function Ai(e,t,a){return e.callback.groupExists?t:a}function Si(e,t,a,n){t>0&&(e.extraNotes+=`${a} = ${Math.floor(n*t*.001)}<br>`)}function Ni(e){const t=(e=>Ai(e,e.callback.groupArmorValue,e.player.armorValue))(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}function Hi(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function ji(e){Ni(e),function(e){Si(e,e.player.sanctuaryLevel,"Sanc Bonus Armor",e.player.armorValue)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),Hi(e)}function xi(e){return Math.floor(e.creature.defense*e.player.darkCurseLevel*tt)}function Bi(e){const t=(e=>Ai(e,e.callback.groupAttackValue,e.player.attackValue))(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${xi(e)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-xi(e)
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}const Ti=(e,t,a)=>Math.max(Math.ceil((e-t+1)/a/.0025),0)
function Ei(e){e.lowestCALevelToStillHit=Ti(e.counterAttackBonusAttack,e.hitByHowMuch,e.player.attackValue),e.lowestCALevelToStillKill=Ti(e.counterAttackBonusDamage,e.damageDone,e.player.damageValue)}function Gi(e){Ei(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function Pi(e,t,a){e[t]>203?e.extraNotes+=`Even with CA203 you cannot ${a} this creature<br>`:0!==e[t]&&(e.extraNotes+=`You need a minimum of CA${e[t]} to ${a} this creature<br>`)}function Ri(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&Gi(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){Ei(e),Pi(e,"lowestCALevelToStillHit","hit"),Pi(e,"lowestCALevelToStillKill","1-hit kill")}(e)}function Fi(e){const t=(e=>Ai(e,e.callback.groupHPValue,e.player.hpValue))(e),{fortitudeLevel:a}=e.player
e.fortitudeExtraHPs=Math.floor(t*a*.001),a>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}function _i(e){if(Fi(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e),e.overallDamageValue=(e=>Ai(e,e.callback.groupDamageValue,e.player.damageValue)+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage)(e),e.damageDone=(e=>Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp)))(e),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}const Oi=e=>Ai(e,e.callback.groupDefenseValue,e.player.defenseValue),Ii=e=>Math.floor(Oi(e)*e.player.constitutionLevel*.001)
const Wi=e=>e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue
function qi(e){e.overallDefenseValue=Oi(e)+Ii(e)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${Ii(e)}<br>`)}(e),function(e){Si(e,e.player.flinchLevel,"Flinch Bonus Attack Reduction",e.creature.attack)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*Wi(e)),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(Wi(e)-50))}function zi(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}const Yi=e=>e.creatureHitByHowMuch>=0?"Yes":"No",Ki=e=>e.hitByHowMuch>0?"Yes":"No",Ui=e=>`<span style="color:#333333">${e}</span>`,Qi=e=>`<tr>${e}</tr>`,Ji=(e,t)=>`<td${t%2?"":' class="fshRight"'}>${e}</td>`,Xi=e=>Qi(e.map(Ji).join(""))
function Zi(e){return`<table width="100%"><tbody>${(e=>Qi(`<td bgcolor="#CD9E4B" colspan="4" align="center">${(e=>e.callback.groupExists?"Group ":"")(e)}Combat Evaluation</td>`))(e)}${(e=>Xi([Ui("Will I hit it?"),Ki(e),Ui("Extra Attack:"),`( ${e.hitByHowMuch} )`]))(e)}${(e=>Xi([Ui("# Hits to kill it?"),e.numberOfHitsRequired,Ui("Extra Damage:"),`( ${e.damageDone} )`]))(e)}${(e=>Xi([Ui("Will I be hit?"),Yi(e),Ui("Extra Defense:"),`( ${-1*e.creatureHitByHowMuch} )`]))(e)}${(e=>Xi([Ui("# Hits to kill me?"),e.numberOfCreatureHitsTillDead,Ui("Extra Armor + HP:"),`( ${-1*e.creatureDamageDone} )`]))(e)}${(e=>Xi([Ui("# Player Hits?"),e.playerHits,Ui("# Creature Hits?"),e.creatureHits]))(e)}${(e=>Qi(`${Ji(Ui("Fight Status:"),0)}<td colspan="3"><span>${e.fightStatus}</span></td>`))(e)}${(e=>Qi(`${Ji(Ui("Notes:"),0)}<td colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td>`))(e)}</tbody></table>`}let ec=0,tc=0,ac=0
function nc(){return es(tc)?"Remove from do not kill list":"Add to the do not kill list"}function sc(){r(nc(),ac)}function rc(){v("NewMap","doNotKillLink")
const e=t.doNotKillList.indexOf(tc);-1===e?t.doNotKillList.push(tc):t.doNotKillList.splice(e,1),sc(),j("doNotKillList",t.doNotKillList.join()),as()}function oc(){ac?sc():function(){ac=d({className:"fshBl",textContent:nc()})
const e=a({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
i(e,ac),i(ec,e),m(ac,rc)}()}function ic(e,t){!function(e){if(!ec){const t=W("body",e)
1===t.length&&([ec]=t)}}(t),ec&&(tc=J(e),oc())}let cc=0,lc=0,uc=0,fc=0
function dc(){uc||(lc||(lc=a(),i(cc,lc),i(cc,a({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),uc=a(),i(lc,uc))}function mc(e){dc(),Te(e,uc)}function vc(e){fc||(dc(),fc=a(),i(lc,fc)),Te(e,fc)}function pc(e,t){const a={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,a){3===a&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,a,e.type),a}function hc(e,a,n){const s={}
s.callback=n,s.player=no(a),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(s),s.creature=pc(e.response.data,s.player.superEliteSlayerMultiplier),function(e){var t
t=e,[zi,Bi,_i,qi,ji,Mi,Ri].forEach(e=>e(t))}(s),s.evaluatorHTML=Zi(s),n.groupExists?vc(s.evaluatorHTML):mc(s.evaluatorHTML)}function bc(e){return e.members[0].name===p()}async function gc(e,t,a){if(a){!function(e,t,a){if(!a.r?.attributes)return
const n=a.r.attributes
hc(e,t,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}(e,t,await qt(a))}}async function kc(e,t){const a=function(e){if(b(e.r))return e.r.find(bc)?.id}(await Ze())
gc(e,t,a)}async function yc(e,t){if(cc||(cc=n("dialog-viewcreature")),cc&&(mc(""),vc(""),t?.response?.data)){ic(t.response.data.name,cc)
const e=await Ct(!0)
e?._skills&&function(e,t){e.player.hasGroup&&kc(e,t),hc(e,t,{groupExists:!1})}(t,e)}}let wc=0
function $c(e){const t=W("verbs",e)
1===t.length&&Dt(t[0])}function Lc(){if(!wc)return
const e=n("actionList")
X("player",e).forEach($c)}function Cc(){return`${Jt("showHuntingBuffs")} ${Xt("enabledHuntingMode")}<select name="enabledHuntingMode"><option value="1"${Zt(t.enabledHuntingMode,"1")}>${t.buffsName}</option><option value="2"${Zt(t.enabledHuntingMode,"2")}>${t.buffs2Name}</option><option value="3"${Zt(t.enabledHuntingMode,"3")}>${t.buffs3Name}</option></select>`}let Dc=0,Vc=""
const Mc=()=>Dc
function Ac(){const e=[null,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
b(e)&&([Dc,Vc]=e)}function Sc(e){"enabledHuntingMode"===e.target.name&&(v("NewMap","toggleEnabledHuntingMode"),t.enabledHuntingMode=e.target.value,j("enabledHuntingMode",t.enabledHuntingMode),Ac(),GameData.fetch(h))}function Nc(e){v("NewMap","togglePref"),t[e]=!t[e],j(e,t[e])}const Hc={hideSubLvlCreature:function(){Nc("hideSubLvlCreature"),GameData.fetch(pt)},hidePlayerActions:function(){v("NewMap","toggleHidePlayerActions"),wc=!wc,j("hidePlayerActions",wc),GameData.fetch(pt)},showCreatureInfo:()=>Nc("showCreatureInfo"),showHuntingBuffs:function(){Nc("showHuntingBuffs"),GameData.fetch(h)},showMonsterLog:()=>Nc("showMonsterLog"),showTitanInfo:function(){Nc("showTitanInfo"),zr(GameData.realm().dynamic)},showBuffInfo:function(){Nc("showBuffInfo"),Pa()}}
function jc(e){const t=Hc[e.target.name]
ee(t)&&(e.target.blur(),t(e))}function xc(){const e=n("worldPage")
if(!e)return
const t=a({className:"fshCenter fshFten"}),s=a({id:"fshWorldPrefs",innerHTML:`${Jt("showCreatureInfo")}&nbsp;&nbsp;${Jt("showMonsterLog")}&nbsp;&nbsp;${Jt("showTitanInfo")}&nbsp;&nbsp;${Jt("showBuffInfo")}<br>${Jt("hideSubLvlCreature")}&nbsp;&nbsp;${Jt("hidePlayerActions")}&nbsp;&nbsp;${Cc()}`})
m(s,jc),C(s,"change",Sc),i(t,s)
const r=a()
return i(t,r),i(e,t),r}const Bc=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function Tc(){var e
t.combatEvaluatorBias=D("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,Bc[e]?Bc[e].generalVariable:1.1053),t.hpVariable=function(e){return Bc[e]?Bc[e].hpVariable:1.1}(t.combatEvaluatorBias)}function Ec(e,t){return e[t.name]=!0,e}function Gc(e,t,a){return e[J(a)]||t.push(a),t}function Pc(e,t){Te(`You are missing some ${Vc} hunting buffs<br>(${t.join(", ")})`,e)}function Rc(e){Te("",e)}function Fc(e,a){t.showHuntingBuffs?function(e,t){const a=t.b.reduce(Ec,{}),n=Mc().reduce(u(Gc,a),[])
n.length>0?Pc(e,n):Rc(e)}(e,a):Rc(e)}function _c(e,t,a){Mc()&&Fc(e,a)}function Oc(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function Ic(e){const t=_(e)
return t?.actions?.length?(t.actions=t.actions.filter(u(Oc,function(e){return e.realm?.minlevel||GameData.realm().minlevel}(t))),Vt(t)):e}function Wc(e,a){t.hideSubLvlCreature&&function(e){return e.data?.d&&ea(e.data.d,pt)}(a)&&(e.dataFilter=Ic)}function qc(e){t[e[0]]=Mt(e[1])}function zc(e){t[e]=Mt(e)}function Yc(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(qc),["doNotKillList"].forEach(zc)}function Kc(e){t[e[0]]=D(e[1])}function Uc(e){t[e]=D(e)}function Qc(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showHuntingBuffs","showHuntingBuffs"]].forEach(Kc),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(Uc)}const Jc=[function(){let e=0
window.requestAnimationFrame=t=>{const a=window.performance.now(),n=Math.max(e+16,a)
return e=n,setTimeout(()=>{t(e)},n-a)},window.cancelAnimationFrame=clearTimeout},function(){Tc(),Yc(),Qc()
const e=xc()
$.ajaxPrefilter("JSON",Wc),t.hideSubLvlCreature&&GameData.fetch(pt),function(e){Ac()
const a=u(_c,e)
$.subscribe(g,a),t.showHuntingBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(e),wc=D("hidePlayerActions"),$.subscribe(ae,Lc),Lc()},function(){ht(),bt()&&ui()},function(){$.subscribe(Lt,yc)},function(){bs.forEach(gs)},function(){D("enableCreatureColoring")&&i(document.body,Gt("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(ae,as),as(),function(){const e=GameData.doAction
GameData.doAction=rs(e)}()},function(){Hs(),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",Es),Es()},function(){$.subscribe(dt,ai)},function(){D("keepLogs")&&$.subscribe(G,wn)},function(){window.initialGameData&&Kr(0,window.initialGameData),$.subscribe(`${Re} ${Fe}`,Kr)},function(){$.subscribe(yt,yi)},function(){$.subscribe(ut,ti)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){V("#mapTooltip")},function(){cn(),$.subscribe(y,ln),$.subscribe(w,un)},function(){Pa(),$.subscribe(`${g} ${k}`,Pa)},function(){C(n("actionList"),"mouseover",Zn)},function(){const{body:e}=document
C(e,"keydown",kn),C(e,"keyup",yn)},function(){const e=globalThis.$("#world-event-badge")
e.length&&(e.off(),m(e[0],ps))},function(){const e=T(".actionListHeaderButton.teleport")
!function(e,t){De($i,{target:e,props:t})}(e,{tpButton:e})},function(){var e
D("messageStack")&&(e=n("messageCenter"),De($s,{target:e}))},function(){GameController?.Realm?.footprintTexture?ri():$.subscribe("fixed.realm",oi)}]
function Xc(){e(Jc)}export{Xc as default}
//# sourceMappingURL=newMap-BWdBSXu-.js.map
