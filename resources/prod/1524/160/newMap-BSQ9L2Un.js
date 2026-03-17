import{e}from"./executeAll-DIAWIge1.js"
import{ay as t,v as a,g as n,b7 as s,l as r,aR as o,i,aE as c,aN as l,c as u,a3 as f,aq as d,o as m,s as v,b8 as p,bd as h,ad as b,be as g,bf as k,bg as y,bh as w,a6 as C,b as L,aA as D,bi as V,aU as M,bj as A,bk as S,bc as N,bb as H,av as j,h as B,bl as x,q as T,bm as E,bn as G,f as P,ac as R,bo as F,bp as _,bq as O,br as I,bs as W,bt as q,bu as K,bv as z,bw as Y,bx as U,by as Q,bz as J,aB as X,m as Z,bA as ee,bB as te,bC as ae,W as ne,$ as se,y as re,aG as oe,E as ie,aF as ce,C as le,P as ue,S as fe,K as de,F as me,N as ve,H as pe,bD as he,D as be,G as ge,Q as ke,bE as ye,bF as we,bG as $e,O as Ce,al as Le,t as De,ap as Ve,ak as Me,bH as Ae,bI as Se,J as Ne,bJ as He,bK as je,bL as Be,bM as xe,d as Te,aK as Ee,bN as Ge,bO as Pe,bP as Re,bQ as Fe,z as _e,bR as Oe,bS as Ie,bT as We,bU as qe,bV as Ke,aw as ze,bW as Ye,bX as Ue,a1 as Qe,bY as Je,bZ as Xe,b_ as Ze,b$ as et,c0 as tt,c1 as at,c2 as nt,c3 as st,c4 as rt,c5 as ot,c6 as it,c7 as ct,c8 as lt,c9 as ut,ca as ft,cb as dt,cc as mt,cd as vt,ce as pt,cf as ht,cg as bt,ch as gt,ci as kt,cj as yt,ck as wt,cl as $t,cm as Ct,cn as Lt,az as Dt,co as Vt}from"./calfSystem-HVCiy-VV.js"
import{t as Mt}from"./toggleForce-br4z9gGd.js"
import{r as At,a as St}from"./roundToString-BFNdgMs_.js"
import{d as Nt,q as Ht}from"./quickbuffSuccess-DQZ36H1N.js"
import{c as jt}from"./createInput-343o8t4v.js"
import{c as Bt}from"./createLabel-C7UFXjFF.js"
import{c as xt}from"./idbLogger-BOYYTbCq.js"
import{r as Tt}from"./rnd-D_QmA-Fa.js"
import{c as Et}from"./createStyle-u6QR1rZp.js"
import{t as Gt,g as Pt,a as Rt}from"./getTitanString-DrmoKrfx.js"
import{c as Ft}from"./createTable-DbiNhQ4p.js"
import{c as _t}from"./chunk-zr9rAXvK.js"
import{r as Ot}from"./reduceBuffArray-Diy1E3zc.js"
import{r as It}from"./reliclist-ChZezNXR.js"
import{d as Wt}from"./daGroupStats-Bn28JQPD.js"
import{d as qt,m as Kt}from"./mercEffect-hieM9QEn.js"
import{a as zt}from"./attribsToArray-DPOdIbo2.js"
import{g as Yt}from"./guildMembers-DswVgOFV.js"
import{r as Ut}from"./remainingPages-BUotk4St.js"
import{t as Qt}from"./testQuant-Cxk9MtgP.js"
import{s as Jt,j as Xt}from"./simpleCheckbox-CEHi-xtc.js"
import{i as Zt}from"./isSelected-BWnMzKlW.js"
import{b as ea}from"./bitwiseAnd-C5gmj-aX.js"
import"./buffReportParser-Bil8zGKo.js"
import"./buffObj-BIwiFUIW.js"
import"./view-jWAS52FR.js"
import"./isChecked-D_0do7nT.js"
let ta=0
function aa(e){return e}function na(e){if(function(e){return t.showBuffInfo&&e.some(aa)}(e))return function(){if(ta)Mt(ta,!1)
else{ta=a({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div>"})
const e=n("actionContainer")
s(ta,e.children[2])}return ta}()
ta&&Mt(ta,!0)}function sa(e,t,a,n){t&&(e.className=t),r(a,e)
const s=o()
return i(e,s),c(e,n),s}let ra=0,oa=0
function ia(e,t){ra?Mt(ra,!1):function(e){ra=e.children[3],oa=sa(ra,"fshBlue","CA "," active")}(e),r(t.level,oa)}function ca(e,t){t?ia(e,t):ra&&Mt(ra,!0)}let la=0,ua=0
function fa(e,t){la?Mt(la,!1):function(e){la=e.children[4],ua=sa(la,"fshRed","Doubler "," active")}(e),r(t.level,ua)}function da(e,t){t?fa(e,t):la&&Mt(la,!0)}let ma=0,va=0
function pa(e,t,a){ma?Mt(ma,!1):function(e){ma=e.children[2],va=sa(ma,"","Damage bonus: ","%")}(e),r(function(e,t){if(e){const a=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return At(a,2).toString()}return"0"}(t,Number(a)),va)}function ha(e,t,a){t?pa(e,t,a):ma&&Mt(ma,!0)}let ba=0,ga=0
function ka(e,t){ba?Mt(ba,!1):function(e){ba=e.children[1],ga=sa(ba,"","Kill Streak: ","")}(e),function(e,t){r(l(e),t)}(t,ga)}function ya(e,t,a,n){t||a?ka(e,n):ba&&Mt(ba,!0)}function wa(e,t){return t.name===e}function $a(e){const{buffs:t}=GameData.player()
if(t)return t.find(u(wa,e))}const Ca=["red","orange","yellow"]
let La=0,Da=0
async function Va(){if(v("NewMap","recastClick"),$a("Summon Shield Imp"))return
!function(e){Ht(e)&&GameData.fetch(h)}(await Nt([p()],[55]))}const Ma=["imp-0","imp-1","imp-1"]
function Aa(e,t){La?Mt(La,!1):function(e){[La]=e.children,r("Shield Imps Remaining: ",La),Da=o(),i(La,Da),f(La,"&nbsp;")
const t=d({className:"xSmallLink",textContent:"Recast"})
i(La,t),m(t,Va)}(e)
const a=function(e){return e?Number(e.stack):0}(t)
La.className=function(e){return Ma[e]??"fshGreen"}(a),r(a,Da)}function Sa(e,t,a){t||a?Aa(e,t):La&&Mt(La,!0)}function Na(e){return 0===e.type}let Ha=0,ja=0,Ba=0,xa=0,Ta=0,Ea=0
function Ga(){Ha=$a("Death Dealer"),ja=$a("Doubler"),Ba=$a("Counter Attack"),xa=$a("Summon Shield Imp"),Ta=function(){const{dynamic:e}=GameData.realm()
return b(e)&&e.some(Na)}(),Ea=GameData.player().killStreak}function Pa(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",Ca[e.text()]||"#ad8043")}(),Ga()
const e=na([Ha,ja,Ba,xa,Ta])
e&&(Sa(e,xa,Ha),ya(e,Ha,Ta,Ea),ha(e,Ha,Ea),ca(e,Ba),da(e,ja))}function Ra(e){return o({textContent:e})}function Fa(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function _a(e,t,a){return Bt({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:a})}function Oa(e){const t=a({className:"fshToggle"}),n=jt({checked:e.prefVal,id:e.checkId,type:"checkbox"})
i(t,n)
const s=_a(e.onClass,e.onTip,e.checkId)
i(t,s)
const r=_a(e.offClass,e.offTip,e.checkId)
return i(t,r),i(e.worldName,t),n}let Ia=0,Wa=0,qa=0,Ka=0,za=0,Ya=0,Ua=0,Qa=0,Ja=0
const Xa=e=>Ra(e?e.toString():"?")
function Za(e,t,n){const s=a({textContent:`${t} Lvl: `})
i(s,n),i(e,s)}function en(e,t,a){const n=d({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return i(a,n),n}function tn(e){!function(e){const t=a({className:"fshFsty"})
Wa=Xa(GameData.realm().minlevel),Za(t,"Min",Wa),qa=Xa(GameData.player().level),Za(t,"Your",qa),i(e,t)}(e),Ka=en("fshFormGroup","Quick Create Attack Group",e),za=en("fshQuickBuff","Open Quick Buff Popup",e),Ya=en("fshRealmMap","Open Realm Map",e),Ua=en("fshTempleOne","Search map in Ultimate FSG",e)}function an(){tn(Ia),function(e){if(D("showSpeakerOnWorld")){const t=D("playNewMessageSound")
Qa=Oa({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(Ia),function(e){const a=t.huntingMode
Ja=Oa({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(Ia)}const nn=[[()=>Qa,function(){v("NewMap","toggleSound"),j("playNewMessageSound",!D("playNewMessageSound"))}],[()=>Ja,function(){v("NewMap","toggleHuntMode"),t.huntingMode=!t.huntingMode,j("huntingMode",t.huntingMode)}]],sn=[[()=>Ka,function(e){v("NewMap","doFormGroup"),V(e),GameData.doAction(12,401,{},0)}],[()=>za,function(){v("NewMap","openQuickBuff"),M(A())}],[()=>Ya,function(){v("NewMap","openRealmMap"),window.open(`${S+N}map`,"fsMap")}],[()=>Ua,function(){v("NewMap","openUfsgMap")
const e=GameData.realm()
window.open(`${H}realms${N}view&realm_id=${e.id}`,"mapUfsg")}]]
function rn(e,t){const{target:a}=t,[,n]=e.find(([e])=>e()===a)??[]
n&&(a.blur(),n(a))}function on(e){return u(rn,e)}function cn(){Ia||(Ia=a({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),an(),m(Ia,on(sn)),L(Ia,"change",on(nn)),C(Ia,n("worldCoord")))}function ln(e,t){Wa&&t.b.minlevel&&(Fa(),r(t.b.minlevel,Wa))}function un(e,t){qa&&r(t.b,qa)}const fn=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"],dn=`url("${E}ui/world/icon_action_attack_`
let mn=!1
function vn(e){return T(".verb.attack",e)}function pn(e){const t=fn.indexOf(e.toUpperCase())
return B(`#actionList .actionListItem.creature.creature-${t}`)}function hn(e){e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""}function bn(e,t){null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${dn}${t+1}.png")`)}function gn(e){const t=["LEGENDARY","NORMAL"].flatMap(pn),a=pn("CHAMPION"),[n,s]=e?[t,a]:[a,t]
n.map(vn).filter(e=>null!==e).forEach(hn),s.slice(0,8).map(vn).forEach(bn)}function kn(e){if(!e.altKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(mn||gn(!0),mn=!0,!/(?:Digit|Numpad)[1-8]/.test(e.code))return
const t=pn("CHAMPION"),a=parseInt(e.code.slice(-1),10)-1
a<t.length&&function(e){const t=vn(e)
t&&(v("NewMap","ChampionAttack"),x(t))}(t[a])}function yn(e){!mn||e.ctrlKey&&e.shiftKey||(mn=!1,gn(!1))}function wn(e,t){0===t.response.response&&function(e){xt({combat:e.response.data,player:{buffs:P(e.player.buffs.filter(({id:e})=>[26,54].includes(e)).map(({id:e,level:t})=>[e,t]))},time:e.time})}(t)}function $n(e){return!e?.response?.data}async function Cn(e){const t=await F({cache:!1,url:"fetchdata.php",data:{...e,fshrnd:Tt()},dataType:"text"})
return _(t)??{response:{msg:"Server Error",response:1}}}const Ln=[]
const Dn=(e,t)=>e===Number(t.response.data.id)
function Vn(e,t){e(t)}async function Mn(e,t){const a=Ln.find(u(Dn,e))
if(a)return function(e){return new Promise(t=>{O(3,Vn,[t,e])})}(a)
const n=await Cn({a:1,d:0,id:e,passback:t})
return function(e){$n(e)||Ln.push(e)}(n),n}let An=0,Sn=0,Nn=0,Hn=0,jn=0,Bn=0
const xn=()=>An,Tn=()=>Sn,En=()=>Nn,Gn=()=>Hn,Pn=()=>jn
function Rn(e,t){return I(W(t,e))}function Fn(){var e
An=GameData.player().level,e=n("statbar-character-tooltip-stats"),Nn=Rn(e,q),Sn=Rn(e,K),jn=Rn(e,z),Hn=Rn(e,Y),Bn=Rn(e,U)}const _n=e=>`<td>${e}:&nbsp;</td>`,On=e=>`<td width="40%">${e}</td>`
function In([e,t,a,n,s]){return[_n(e),On(`${t} (your ${a}:<span class="${n}">${s()}</span>)`)]}function Wn(e){return["<tr>",...e,"</tr>"].join("")}function qn(e,t){return Wn([...In(e),...In(t)])}function Kn(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function zn(e,t,a){return function(e){return`<table><tr><td><img src="${E}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return Wn([_n("Class"),On(e.creature_class),...In(["Level",e.level,"level",t,xn])])}(e,a)+function(e){return qn(["Attack",e.attack,"defense","fshYellow",Tn],["Defense",e.defense,"attack","fshYellow",En])}(e)+function(e){return qn(["Armor",e.armor,"damage","fshYellow",Gn],["Damage",e.damage,"armor","fshYellow",Pn])}(e)+function(e,t){return Wn([_n("HP"),On(`${e.hp} (your HP:<span class="fshYellow">${Bn}</span>)(1H: <span class="fshRed">${t}</span>)`),_n("Gold"),On(e.gold)])}(e,t)+'<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(Kn).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function Yn(e){if(!$n(e))return function(e){const a=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let n="fshYellow"
return Fn(),xn()>e.level&&(n="fshRed"),zn(e,a,n)}(e.response.data)}const Un=["verb","view","tip-static"]
async function Qn(e,t){const a=Q((n=e).parentNode.children).indexOf(n)
var n
const s=await Mn(GameData.actions()[a].data.id,a)
$n(s)||function(e,t){const a=Yn(t)
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
ce(n,()=>t.promise,e=>{var t=$e("Loading...")
ve(e,t)},(e,t)=>{var a=he(()=>{var{r:e}=de(t)
return{list:e}}),n=he(()=>de(a).list),s=oe(),r=ie(s),o=e=>{var t=ls(),a=me(t),s=be(me(a))
ge(s,19,()=>de(n),({player:e,value:t})=>e.id,(e,t,a)=>{let n=()=>de(t).player
var s=cs(),r=me(s),o=me(r),i=be(r),c=me(i),l=e=>{var t=is(),a=me(t)
ue(()=>{ke(t,"href",`${we??""}${n().guild_id??""}`),ke(a,"src",`${E??""}guilds/${n().guild_id??""}_mini.png`)}),ve(e,t)}
pe(c,e=>{n().guild_id&&e(l)})
var u=be(i),f=me(u),d=me(f),m=be(u),v=me(m)
ue(()=>{fe(o,de(a)+1),ke(f,"href",`${ye??""}${n().name??""}`),fe(d,n().name),fe(v,de(t).value)}),ve(e,s)}),ve(e,t)},i=e=>{var t=$e("Server Error")
ve(e,t)}
pe(r,e=>{b(de(n))?e(o):e(i,!1)}),ve(e,s)},(e,t)=>{var a=us(),n=me(a)
ue(()=>fe(n,de(t).message)),ve(e,a)}),ve(e,a),Ce()}const ds=Le({promise:Promise.resolve()})
let ms=0
function vs(e){ds.promise=se(os),ms||(ms=De(fs,{props:ds,target:e}))}function ps(){v("NewMap","GlobalTop")
const e=n("world-event-contrib")
vs(e),globalThis.$(e).dialog({title:"Top 100 Event Contributers",minWidth:312,height:300,zIndex:9999})}function hs(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const bs=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function gs(e,t){var a
D(e)&&(a=t+1,$.subscribe(ae,u(hs,a)),hs(t+1))}var ks=le('<div class="count svelte-17n83ui"> </div>'),ys=le("<div> <!></div>")
function ws(e,t){re(t,!0)
let a=Me(Le([]))
const n=window.$("#messageCenter").data().hcsWorldMessageCenter
const s=function*(){for(let e=0;;e++)yield e}()
function r(){n._reposition()}n._displayMessage=async function(e,t,n=3e3){const o=s.next().value
Ne(a,[...de(a),{msg:e,type:t,expire:o}],!0),setTimeout(()=>{Ne(a,de(a).filter(({expire:e})=>e!==o),!0)},n),await He(),r()}
var o=oe(),i=ie(o)
ge(i,17,()=>{return e=de(a),Se(e,"msg").map(({msg:t,type:a})=>({msg:t,type:a,count:e.filter(({msg:e})=>e===t).length}))
var e},({msg:e,type:t,count:a})=>e,(e,t)=>{let n=()=>de(t).msg,s=()=>de(t).count
var o=ys()
o.__click=()=>{return e=n(),Ne(a,de(a).filter(({msg:t})=>t!==e),!0),void r()
var e}
var i=me(o),c=be(i),l=e=>{var t=ks(),a=me(t)
ue(()=>fe(a,`x${s()??""}`)),ve(e,t)}
pe(c,e=>{s()>1&&e(l)}),ue(()=>{Ae(o,1,`fsh-message ${de(t).type??""}`,"svelte-17n83ui"),fe(i,`${n()??""} `)}),ve(e,o)}),ve(e,o),Ce()}Ve(["click"])
let $s=0
function Cs(e){$s[e.name]?$s[e.name].seen&&($s[e.name].seen+=1):($s[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,$s[e.name]))}function Ls(e,t,a){return t?e(t,a):a}function Ds(e,t){const a=e||{}
return a.min=Ls(Math.min,a.min,t),a.max=Ls(Math.max,a.max,t),a}const Vs=["attack","armor","damage","defense","hp"]
function Ms(e,t,a){const n=Ds(t[a],Number(e[a]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[a],n)&&(t[a]=n)}function As(e,t){e[t.name]=Ds(e[t.name],Number(t.value))}function Ss(e){$s||($s={}),Cs(e),function(e,t){Vs.forEach(u(Ms,e,t))}(e,$s[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(u(As,t.enhancements)))}(e,$s[e.name]),Be("fsh_monsterLog",$s)}async function Ns(){!function(e){$s=e||{}}(await je("fsh_monsterLog"))}const Hs=[]
function js(e){var a
$n(e)||(a=e.response.data,t.showMonsterLog&&Ss(a))}function Bs(e,t){return e.id===t.id}async function xs(e,t){if(6!==e.type||function(e){if(Hs.find(u(Bs,e.data)))return!0
Hs.push(e.data)}(e))return
js(await Mn(e.data.id,t))}function Ts(){t.showMonsterLog&&(GameData.actions().forEach(xs),v("NewMap","MonsterLog"))}let Es=""
function Gs(){return xe({subcmd:"scouttower"})}function Ps(e,[t,a,n]){const s=e.insertCell(-1)
return s.colSpan=t,n&&(s.className="header"),i(s,a()),s}function Rs(e,t,a){const n=e.insertRow(-1)
return a&&(n.className="fshBlue"),function(e,t){t.forEach(u(Ps,e))}(n,t),n}function Fs(e,t){Rs(e,t[0],t[1])}function _s(e,t){t.forEach(u(Fs,e))}let Os=0,Is=0,Ws=0,qs=0,Ks=0,zs=0,Ys=0,Us=0
const Qs=()=>Os,Js=()=>Ys
function Xs(){Os=Ra("Current"),Is=Ra("Kills"),Ws=Ra("Member"),qs=Ra("% of Total"),Ks=Ra("Status"),zs=Ra("Titan HP"),Ys=Ra("Total"),Us=Ra("Your Guild")}let Zs=0,er=0,tr=0,ar=0,nr=0,sr=0,rr=0,or=0,ir=0
const cr=()=>Zs,lr=()=>er,ur=()=>tr,fr=()=>ar,dr=()=>nr,mr=()=>sr,vr=()=>rr,pr=()=>or,hr=()=>ir
function br(){Zs=o({innerHTML:"&nbsp;"}),er=o({innerHTML:"&nbsp;"}),tr=o(),ar=o(),nr=o(),sr=o(),rr=o(),or=o(),ir=o()}let gr=0
const kr=()=>gr
function yr(){for(;gr.rows.length>8;)gr.deleteRow(8)}function wr(e){const t=o()
return i(t,e),c(t,"%"),t}const $r=[[[5,cr,!0],[1,lr,!0]]],Cr=[[[2,()=>zs,!0],[4,()=>Us,!0]]],Lr=[[[2,function(){const e=o()
return i(e,ur()),c(e,"/"),i(e,fr()),e}],[4,dr]]],Dr=[[[2,()=>Ks,!0],[4,pr]],!0],Vr=[[[2,()=>Ws,!0],[2,()=>Is,!0],[2,()=>qs,!0]]]
let Mr=0,Ar=0,Sr="",Nr=""
function Hr(){Ar=null,Mr&&!R("fshHide",Mr)&&(Mt(Mr,!0),Te("&nbsp;",Zs),Te("&nbsp;",er),r("",tr),r("",ar),r("",nr),r("",sr),r("",rr),Te("",or),Te("",ir),yr())}function jr(e){return 0===e.type&&(Ar=e.base_creature_id,Sr=`(${e.x},${e.y})`,Nr=Gt(e.name),!0)}function Br(){if(Mr)Mt(Mr,!1)
else{const e=n("actionContainer")
Mr=a({className:"fshActionBox titanInfo"}),br(),gr=Ft({className:"fshCenter"}),Xs(),_s(gr,[$r,Cr,Lr,[[[2,Qs,!0],[4,u(wr,mr())]],!0],[[[2,Js,!0],[4,u(wr,vr())]],!0],Dr,[[[6,hr]]],Vr]),i(Mr,kr()),i(e,Mr)}}function xr(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(Ee()+1e3*e)
return`${Ge(t.getHours())}:${Ge(t.getMinutes())} ${Ge(t.getDate())}/${Pe[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function Tr(e){return St(Rt(e.max_hp-e.current_hp,e.kills),2)}function Er(e){return St(100*e.kills/e.max_hp,2)}function Gr(e){!function(e){for(const[t,a]of[[Nr,cr],[Sr,lr],[e.current_hp,ur],[e.max_hp,fr],[e.kills,dr],[Tr(e),mr],[Er(e),vr]])r(t,a())}(e),Te(function(e){return Pt(e.kills,e.max_hp,e.current_hp)}(e),pr()),Te(xr(e.cooldown),hr())}function Pr(e,t){return[[[2,()=>Ra(t.player.name)],[2,()=>Ra(t.kills.toString())],[2,()=>Ra(`${St(100*t.kills/e.kills,2)}%`)]]]}function Rr(e){return e.realm&&e.creature===Ar&&e.realm===Es}function Fr(e){const t=e.find(Rr)
t&&(Gr(t),function(e){if(yr(),!e.contributors)return
const t=e.contributors.map(u(Pr,e))
_s(kr(),t)}(t))}let _r=null
const Or=e=>t.showTitanInfo&&b(e)&&e.some(jr)
function Ir(e,t){(e=>e?.s&&b(e.r))(t)&&(Fr(t.r),Or(GameData.realm().dynamic)?_r=window.setTimeout(e,3e4):Hr())}async function Wr(){Ir(Wr,await se(Gs))}function qr(e){_r&&(window.clearTimeout(_r),_r=null),Or(e)?(Br(),Wr()):Hr()}function Kr(e){var t
e.dynamic&&(t=e.name,Es=t,qr(e.dynamic))}function zr(e,t){t.realm?.name&&Kr(t.realm)}var Yr=le("<li><!></li>"),Ur=le('<ul class="svelte-bwtg9x"></ul>')
function Qr(e,t){re(t,!0)
let a=_e(t,"members",19,()=>[])
const n=e=>`Buff ${Ie[e]} 16`
var s=Ur()
ge(s,21,()=>_t(16,a()),We,(e,a,s)=>{var r=Yr(),o=me(r)
Oe(o,{onclick:e=>function(e,a,s){s.target.blur(),qe(`${Ke}&players=${e.join(",")}`,"fsQuickBuff",618,1e3,",scrollbars"),t.emitBuffBatch(n(a))}(de(a),s,e),children:(e,t)=>{var a=$e()
ue(e=>fe(a,e),[()=>n(s)]),ve(e,a)},$$slots:{default:!0}}),ve(e,r)}),ve(e,s),Ce()}function Jr(e,t){return e>10*t||e<t?e:10*t}const Xr=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function Zr(e,t,a){e[a[0]]=Number(t[a[1]])}const eo=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function to(e,t,a){e[a[0]]=t[a[1]]||0}function ao(e){if(!e._skills)return
const t=Ot(e._skills),a={}
return function(e,t){Xr.forEach(u(Zr,e,t))}(a,e),function(e,t){eo.forEach(u(to,e,t))}(a,t),a.superEliteSlayerMultiplier=At(.002*a.superEliteSlayerLevel,2),ze(a.armorValue)&&function(e){e.attackValue=Jr(e.attackBonus,e.levelValue),e.defenseValue=Jr(e.defenseBonus,e.levelValue),e.armorValue=Jr(e.armorBonus,e.levelValue),e.damageValue=Jr(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(a),a}const no=Ue(["statusStore","Done."])
let so=[]
const ro=Ye(no,(e,t)=>{const a=so.find(([t])=>t===e[0])
a?[,a[1]]=e:so=[...so,e]
const n=so.find(([,e])=>"Done."!==e)
t(n?.[1]??"Done.")}),oo=Ue(0)
const io=Ye(oo,(e,t)=>{!async function(e,t){if(!e)return
no.set(["relicStore","Processing defending guild relics ... "])
const a=await It(e)
if(!a?.r?.relics)return void no.set(["relicStore","AJAX Error"])
const n=a.r.relics.length,s=1===n?1.5:At(1-n/10,2)
t({noOfRelics:n,relicMultiplier:s,leadDefenderBonus:`${String(100*s)}%`}),no.set(["relicStore","Done."])}(e,t)}),co=Ue([])
const lo=Ye(co,(e,t)=>{!async function(e,t){if(!e.length)return
no.set(["defendersStore","Processing defending group stats ... "])
const a=[]
await Qe(e.map(async(e,n)=>{const s=await Je(e)
a.push([n,ao(s)]),t(a)})),no.set(["defendersStore","Done."])}(e,t)}),uo=Ye(lo,(e,t)=>{const a=e?.find(([e])=>0===e)
a&&t(a[1])}),fo=(e,t,a)=>Math.ceil(a*(0===t?e:Xe))
function mo(e,t,[a,n]){return{armorValue:t.armorValue+fo(e,a,n.armorValue),attackValue:t.attackValue+fo(e,a,n.attackValue),damageValue:t.damageValue+fo(e,a,n.damageValue),cloaked:t.cloaked+(n.cloakLevel?1:0),defenseValue:t.defenseValue+fo(e,a,n.defenseValue),hpValue:t.hpValue+fo(e,a,n.hpValue)}}const vo=Ye([io,lo],([e,t],a)=>{if(!e?.relicMultiplier||!t?.length)return
const n=t?.reduce(u(mo,e.relicMultiplier),{armorValue:0,attackValue:0,damageValue:0,cloaked:0,defenseValue:0,hpValue:0})
a(n)}),po=Ue(0),ho=e=>e.members[0].name===GameData.player().username
async function bo(e,t){if(!e)return
no.set(["groupStore","Processing attacking group stats ... "])
const a=await async function(){const e=await Ze()
return e?.r?.find(ho)?.id}(),n=a&&await async function(e){const t=await Wt(e)
return zt(t?.r?.attributes)}(a),s=n&&await async function(e){const t=await qt(),a=Kt(t)
return e?.map((e,t)=>e-a[t])}(n)
s&&t({attack:s[0],defense:s[1],armor:s[2],hp:s[3],damage:s[4]}),no.set(["groupStore","Done."])}const go=Ye(po,(e,t)=>{bo(e,t)}),ko=(e,t,a)=>Math.ceil(e*et(t,0)*a),yo=(e,t)=>ko(e,t,.0025),wo=(e,t)=>ko(e,t,.001),$o=wo,Co=wo,Lo=wo,Do=wo,Vo=wo,Mo=(e,t)=>Math.ceil(e*(1+.001*et(t,0))),Ao=(e,t)=>Math.ceil(e*(1-t*tt)),So=Ue([]),No=Ye(So,(e,t)=>{e&&t(Ot(e))}),Ho=Ye([No,go],([e,t],a)=>{if(!e||!t)return
const n=Mo(t.defense,e.Constitution),s=t.hp+$o(n,e.Fortitude)
a({dmgWithChiStrike:t.damage+Co(s,e["Chi Strike"]),defWithConst:n,hpWithFortitude:s,nmv:yo(t.attack,e["Nightmare Visage"]),sanctuary:Lo(t.armor,e.Sanctuary)})})
const jo=Ye([Ho,uo,go],function([e,t,a],n){if(!e||!t||!a)return
const s=a.attack-e.nmv,r=Do(s,t.flinchLevel),o=Vo(e.dmgWithChiStrike,t.terrorizeLevel)
n({attack:s-r,defense:e.defWithConst+e.nmv,armor:a.armor+e.sanctuary,hp:e.hpWithFortitude,damage:e.dmgWithChiStrike-o})})
const Bo=Ye([uo,vo],([e,t],a)=>{if(!e||!t)return
const n=yo(t.attackValue,e.nightmareVisageLevel),s=Mo(t.defenseValue,e.constitutionLevel)
!function([e,t,a,n,s,r]){a({attackWithNmv:t.attackValue-n,chiStrike:e.chiStrikeLevel,cloak:e.cloakLevel?"Yes":"No",dmgWithChiStrike:t.damageValue+Co(r,e.chiStrikeLevel),defWithConst:s,hpWithFortitude:r,nmv:n,sanctuary:Lo(t.armorValue,e.sanctuaryLevel)})}([e,t,a,n,s,t.hpValue+$o(s,e.fortitudeLevel)])})
const xo=Ye([No,Bo,vo],function([e,t,a],n){if(!e||!t||!a)return
const s=Do(t.attackWithNmv,e.Flinch),r=t.defWithConst+t.nmv,o=Vo(t.dmgWithChiStrike,e.Terrorize)
n({attack:t.attackWithNmv-s,dc225:Ao(r,225),dc175:Ao(r,175),defense:r,armor:a.armorValue+t.sanctuary,hp:t.hpWithFortitude,damage:t.dmgWithChiStrike-o})}),To=Ye(io,(e,t)=>{t({noOfRelics:e?.noOfRelics??"",leadDefenderBonus:e?.leadDefenderBonus??""})}),Eo=Ye(uo,(e,t)=>{if(!e)return t("")
e.cloakLevel?t("Yes"):t("No")}),Go=Ye(vo,(e,t)=>{t({armorValue:e?.armorValue??"",attackValue:e?.attackValue??"",damageValue:e?.damageValue??"",cloaked:e?.cloaked??"",defenseValue:e?.defenseValue??"",hpValue:e?.hpValue??""})}),Po=Ye(lo,(e,t)=>{t(e?.length??"")}),Ro=Ye(xo,(e,t)=>{t({attack:e?.attack??"",dc225:e?.dc225??"",dc175:e?.dc175??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""})}),Fo=e=>({attack:e?.attack??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""}),_o=Ye(go,(e,t)=>{t(Fo(e))}),Oo=Ye(jo,(e,t)=>{t(Fo(e))})
var Io=le('<a class="svelte-x2lud7"> </a> ',1),Wo=le(' <div class="missing svelte-x2lud7"></div>',1)
function qo(e,t){re(t,!0)
let a=_e(t,"members",19,()=>[]),n=Me(Le([]))
const s=[({username:e})=>!a().includes(e),({last_login:e})=>e,({last_login:e})=>e<st(),({last_login:e})=>e>rt(),({level:e})=>e<400||e>421,({level:e})=>e<441||e>450],r=e=>s.every(t=>t(e)),o=({username:e},{username:t})=>nt(e,t)
oo.subscribe(e=>{!async function(e){const t=await Yt(e)
b(t)&&Ne(n,t.filter(r).sort(o),!0)}(e)})
var i=Wo(),c=ie(i),l=be(c)
ge(l,21,()=>de(n),({id:e,username:t})=>e,(e,t)=>{var a=Io(),n=ie(a),s=me(n)
be(n,1,!0).nodeValue=" ",ue(()=>{ke(n,"href",`${at??""}${de(t).id??""}`),fe(s,de(t).username)}),ve(e,a)}),ue(()=>fe(c,`${(de(n).length||"")??""} Offline guild members not at relic: `)),ve(e,i),Ce()}var Ko=le('<div class="buff-links svelte-1ncfcj8"><!></div>'),zo=le('<button class="custombutton" type="button">Fetch Stats</button>'),Yo=le('<div class="b-top svelte-1ncfcj8">Processing</div> <div class="proc-stat svelte-1ncfcj8"> </div> <div class="b-top svelte-1ncfcj8">Assumptions</div> <div class="assume svelte-1ncfcj8">Above calculations include Constitution, Fortitude, Nightmare Visage,\n        Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that\n        order) on both the defending group and attacking group.</div>',1),Uo=le('<div class="middle svelte-1ncfcj8"><div class="b-top svelte-1ncfcj8">Defending Guild Stats</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">Relic Count:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Lead Defender Bonus:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Lead Defender Cloaked:</div> <div class="svelte-1ncfcj8"> </div></div> <div class="b-top svelte-1ncfcj8">Other Defender Stats</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">Raw Attack:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Attack w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Defense:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Defense w/buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Armor:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Armor w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Damage:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Damage w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw HP:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">HP w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Cloaked:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Processed:</div> <div class="svelte-1ncfcj8"> </div></div></div> <div class="right svelte-1ncfcj8"><div class="b-top svelte-1ncfcj8">Adjusted Defense Values</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">DC225:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">DC175:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">&nbsp;</div></div> <div class="b-top svelte-1ncfcj8">Attacking Group Stats</div> <div class="stat-grid svelte-1ncfcj8"><div class="svelte-1ncfcj8">Raw Group Attack:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Attack w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group Defense:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Defense w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group Armor:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Armor w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group Damage:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group Damage w/ buffs:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Raw Group HP:</div> <div class="svelte-1ncfcj8"> </div> <div class="svelte-1ncfcj8">Group HP w/ buffs:</div> <div class="svelte-1ncfcj8"> </div></div></div> <div class="bottom b-top svelte-1ncfcj8"><!></div>',1),Qo=le('<div class="body svelte-1ncfcj8"><div class="left svelte-1ncfcj8"><!> <!></div> <!></div>')
function Jo(e,t){re(t,!0)
const a=()=>ct(To,"$relicDisplay",i),n=()=>ct(Go,"$rawDefDisplay",i),s=()=>ct(Ro,"$defBuffedDisplay",i),r=()=>ct(_o,"$rawGroupDisplay",i),o=()=>ct(Oo,"$buffResultDisplay",i),[i,c]=it()
let l=_e(t,"relicData",19,()=>({}))
const u=l().defenders.map(e=>e.player_name)
let f=Me(!1)
function d(e){v("relic",e)}function m(){v("relic","fetchStats"),Ne(f,!0),oo.set(l().controlled_by.guild_id),co.set(u),po.set(GameData.player().hasGroup),So.set(GameData.player().buffs)}ot(()=>{Ne(f,!1),oo.set(0),co.set([]),po.set(0),So.set([])})
var p=Qo(),h=me(p),b=me(h),g=e=>{var t=Ko()
Qr(me(t),{get members(){return u},emitBuffBatch:d}),ve(e,t)}
pe(b,e=>{l().is_owner&&e(g)})
var k=be(b,2),y=e=>{var t=zo()
t.__click=m,ve(e,t)},w=e=>{var t=Yo(),a=be(ie(t),2),n=me(a)
ue(()=>fe(n,ct(ro,"$trackStatus",i))),ve(e,t)}
pe(k,e=>{de(f)?e(w,!1):e(y)})
var $=be(h,2),C=e=>{var t=Uo(),c=ie(t),l=be(me(c),2),f=be(me(l),2),d=me(f),m=be(f,4),v=me(m),p=be(m,4),h=me(p),b=be(l,4),g=be(me(b),2),k=me(g),y=be(g,4),w=me(y),$=be(y,4),C=me($),L=be($,4),D=me(L),V=be(L,4),M=me(V),A=be(V,4),S=me(A),N=be(A,4),H=me(N),j=be(N,4),B=me(j),x=be(j,4),T=me(x),E=be(x,4),G=me(E),P=be(E,4),R=me(P),F=be(P,4),_=me(F),O=be(c,2),I=be(me(O),2),W=be(me(I),2),q=me(W),K=be(W,4),z=me(K),Y=be(I,4),U=be(me(Y),2),Q=me(U),J=be(U,4),X=me(J),Z=be(J,4),ee=me(Z),te=be(Z,4),ae=me(te),ne=be(te,4),se=me(ne),re=be(ne,4),oe=me(re),ce=be(re,4),le=me(ce),de=be(ce,4),pe=me(de),he=be(de,4),ge=me(he),ke=be(he,4),ye=me(ke),we=be(O,2)
qo(me(we),{get members(){return u}}),ue(()=>{fe(d,a().noOfRelics),fe(v,a().leadDefenderBonus),fe(h,ct(Eo,"$ldcloak",i)),fe(k,n().attackValue),fe(w,s().attack),fe(C,n().defenseValue),fe(D,s().defense),fe(M,n().armorValue),fe(S,s().armor),fe(H,n().damageValue),fe(B,s().damage),fe(T,n().hpValue),fe(G,s().hp),fe(R,n().cloaked),fe(_,ct(Po,"$processed",i)),fe(q,s().dc225),fe(z,s().dc175),fe(Q,r().attack),fe(X,o().attack),fe(ee,r().defense),fe(ae,o().defense),fe(se,r().armor),fe(oe,o().armor),fe(le,r().damage),fe(pe,o().damage),fe(ge,r().hp),fe(ye,o().hp)}),ve(e,t)}
pe($,e=>{de(f)&&e(C)}),ve(e,p),Ce(),c()}Ve(["click"])
let Xo=0
function Zo(e,t){var a,s
t?.response?.data?.defenders?.length>0&&(a=n("dialog-relic"),s=t.response.data,Xo&&ut(Xo),Xo=De(Jo,{props:{relicData:s},target:a}))}function ei(e,t){"ACT_REPAIR"===t&&GameData.fetch(dt+h+mt+vt)}let ti=!1
function ai(e,t,a,n,s,r,o,i,c){return e.beginPath(),e.arc(r+i/2,o+c/2,i/6,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.lineWidth=1,e.strokeStyle="black",e.stroke(),!0}function ni(){if(!ti){const e=GameController.Realm.footprintTexture
e.color=D("footprintColor"),e.Draw=ai,ti=!0}}function si(){GameController?.Realm?.footprintTexture&&(ni(),$.unsubscribe("fixed.realm",si))}let ri=0
function oi(e){$("#statbar-gold").css("background-color",e)}function ii(){$("#HelperSendTotal").html(l(D("currentGoldSentTotal"))),Number(GameData.player().gold)>ri?oi("red"):oi("inherit")}function ci(){ri=D("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${D("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${l(ri)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${l(D("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",bt),ii(),$.subscribe(gt,ii)}let li=0,ui=0,fi=0,di=0,mi=0,vi=0
async function pi(){const e=await Cn({a:14,d:0,id:li.id,item_id:li.itemId}),t=e.response.response,a=e.response.msg
let n=a
if(0!==t){const e=a.indexOf("<");-1!==e&&(n=a.substring(0,e))}else n=`You purchased ${e.response.data.name} for ${l(e.response.data.cost)} gold.`
f(vi,`${n}<br>`)}async function hi(){const e=Qt(mi.value)
e&&(v("NewMap","quickBuy"),await Qe(Ut(e,pi)),GameData.doAction(14,3,{id:li.id,item_id:li.itemId},0),fi.close())}function bi(){di?r("",vi):function(){di=a({className:"fshClear",textContent:"Select how many to quick-buy:"}),mi=jt({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),i(di,mi)
const e=d({textContent:"Quick-buy"})
m(e,hi),i(di,e),vi=a(),i(di,vi),i(ui,di)}()}function gi(e,t){li=t,ui=ui||n("shopDialogConfirm"),ui&&(fi=fi||$(ui).data("hcsWorldDialogShopConfirm"),fi&&bi())}var ki=le('<div id="tp-overlay" class="svelte-1u5skhe"> </div>')
function yi(e,t){re(t,!0)
let a=Me(0),n=0,s=Me(!1)
function r(){const e=GameData.player().teleportCooldown
Ne(a,e-wt()+n),de(a)>0||(clearInterval(de(s)),Ne(s,!1),t.tpButton.classList.remove("cooldown"))}window.$.subscribe("stats.player",r),window.$.subscribe(yt,function(e,t){n=wt(),r(),de(s)||0!==t.response.response||Ne(s,setInterval(()=>{r()},1e3),!0)})
var o=oe(),i=ie(o),c=e=>{var t=ki(),n=me(t)
ue(()=>fe(n,de(a))),ve(e,t)}
pe(i,e=>{de(s)&&e(c)}),ve(e,o),Ce()}function wi(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}function $i(e,t){return"-"===t?e:"-"===e||e>t?"-":e}const Ci=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${wi(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${wi(e)}`]]
function Li(e,t){return t[0](e)}function Di(e){e.playerHits=$i(e.numberOfHitsRequired,e.numberOfCreatureHitsTillDead),e.creatureHits=$i(e.numberOfCreatureHitsTillDead,e.numberOfHitsRequired),e.fightStatus=function(e){const t=Ci.find(u(Li,e))
return t?t[1](e):"Unknown"}(e)}function Vi(e,t,a){return e.callback.groupExists?t:a}function Mi(e,t,a,n){t>0&&(e.extraNotes+=`${a} = ${Math.floor(n*t*.001)}<br>`)}function Ai(e){const t=(e=>Vi(e,e.callback.groupArmorValue,e.player.armorValue))(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}function Si(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function Ni(e){Ai(e),function(e){Mi(e,e.player.sanctuaryLevel,"Sanc Bonus Armor",e.player.armorValue)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),Si(e)}function Hi(e){return Math.floor(e.creature.defense*e.player.darkCurseLevel*tt)}function ji(e){const t=(e=>Vi(e,e.callback.groupAttackValue,e.player.attackValue))(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${Hi(e)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-Hi(e)
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}const Bi=(e,t,a)=>Math.max(Math.ceil((e-t+1)/a/.0025),0)
function xi(e){e.lowestCALevelToStillHit=Bi(e.counterAttackBonusAttack,e.hitByHowMuch,e.player.attackValue),e.lowestCALevelToStillKill=Bi(e.counterAttackBonusDamage,e.damageDone,e.player.damageValue)}function Ti(e){xi(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function Ei(e,t,a){e[t]>203?e.extraNotes+=`Even with CA203 you cannot ${a} this creature<br>`:0!==e[t]&&(e.extraNotes+=`You need a minimum of CA${e[t]} to ${a} this creature<br>`)}function Gi(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&Ti(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){xi(e),Ei(e,"lowestCALevelToStillHit","hit"),Ei(e,"lowestCALevelToStillKill","1-hit kill")}(e)}function Pi(e){const t=(e=>Vi(e,e.callback.groupHPValue,e.player.hpValue))(e),{fortitudeLevel:a}=e.player
e.fortitudeExtraHPs=Math.floor(t*a*.001),a>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}function Ri(e){if(Pi(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e),e.overallDamageValue=(e=>Vi(e,e.callback.groupDamageValue,e.player.damageValue)+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage)(e),e.damageDone=(e=>Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp)))(e),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}const Fi=e=>Vi(e,e.callback.groupDefenseValue,e.player.defenseValue),_i=e=>Math.floor(Fi(e)*e.player.constitutionLevel*.001)
const Oi=e=>e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue
function Ii(e){e.overallDefenseValue=Fi(e)+_i(e)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${_i(e)}<br>`)}(e),function(e){Mi(e,e.player.flinchLevel,"Flinch Bonus Attack Reduction",e.creature.attack)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*Oi(e)),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(Oi(e)-50))}function Wi(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}const qi=e=>e.creatureHitByHowMuch>=0?"Yes":"No",Ki=e=>e.hitByHowMuch>0?"Yes":"No",zi=e=>`<span style="color:#333333">${e}</span>`,Yi=e=>`<tr>${e}</tr>`,Ui=(e,t)=>`<td${t%2?"":' class="fshRight"'}>${e}</td>`,Qi=e=>Yi(e.map(Ui).join(""))
function Ji(e){return`<table width="100%"><tbody>${(e=>Yi(`<td bgcolor="#CD9E4B" colspan="4" align="center">${(e=>e.callback.groupExists?"Group ":"")(e)}Combat Evaluation</td>`))(e)}${(e=>Qi([zi("Will I hit it?"),Ki(e),zi("Extra Attack:"),`( ${e.hitByHowMuch} )`]))(e)}${(e=>Qi([zi("# Hits to kill it?"),e.numberOfHitsRequired,zi("Extra Damage:"),`( ${e.damageDone} )`]))(e)}${(e=>Qi([zi("Will I be hit?"),qi(e),zi("Extra Defense:"),`( ${-1*e.creatureHitByHowMuch} )`]))(e)}${(e=>Qi([zi("# Hits to kill me?"),e.numberOfCreatureHitsTillDead,zi("Extra Armor + HP:"),`( ${-1*e.creatureDamageDone} )`]))(e)}${(e=>Qi([zi("# Player Hits?"),e.playerHits,zi("# Creature Hits?"),e.creatureHits]))(e)}${(e=>Yi(`${Ui(zi("Fight Status:"),0)}<td colspan="3"><span>${e.fightStatus}</span></td>`))(e)}${(e=>Yi(`${Ui(zi("Notes:"),0)}<td colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td>`))(e)}</tbody></table>`}let Xi=0,Zi=0,ec=0
function tc(){return es(Zi)?"Remove from do not kill list":"Add to the do not kill list"}function ac(){r(tc(),ec)}function nc(){v("NewMap","doNotKillLink")
const e=t.doNotKillList.indexOf(Zi);-1===e?t.doNotKillList.push(Zi):t.doNotKillList.splice(e,1),ac(),j("doNotKillList",t.doNotKillList.join()),as()}function sc(){ec?ac():function(){ec=d({className:"fshBl",textContent:tc()})
const e=a({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
i(e,ec),i(Xi,e),m(ec,nc)}()}function rc(e,t){!function(e){if(!Xi){const t=W("body",e)
1===t.length&&([Xi]=t)}}(t),Xi&&(Zi=J(e),sc())}let oc=0,ic=0,cc=0,lc=0
function uc(){cc||(ic||(ic=a(),i(oc,ic),i(oc,a({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),cc=a(),i(ic,cc))}function fc(e){uc(),Te(e,cc)}function dc(e){lc||(uc(),lc=a(),i(ic,lc)),Te(e,lc)}function mc(e,t){const a={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,a){3===a&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,a,e.type),a}function vc(e,a,n){const s={}
s.callback=n,s.player=ao(a),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(s),s.creature=mc(e.response.data,s.player.superEliteSlayerMultiplier),function(e){var t
t=e,[Wi,ji,Ri,Ii,Ni,Di,Gi].forEach(e=>e(t))}(s),s.evaluatorHTML=Ji(s),n.groupExists?dc(s.evaluatorHTML):fc(s.evaluatorHTML)}function pc(e){return e.members[0].name===p()}async function hc(e,t,a){if(a){!function(e,t,a){if(!a.r?.attributes)return
const n=a.r.attributes
vc(e,t,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}(e,t,await Wt(a))}}async function bc(e,t){const a=function(e){if(b(e.r))return e.r.find(pc)?.id}(await Ze())
hc(e,t,a)}async function gc(e,t){if(oc||(oc=n("dialog-viewcreature")),oc&&(fc(""),dc(""),t?.response?.data)){rc(t.response.data.name,oc)
const e=await Ct(!0)
e?._skills&&function(e,t){e.player.hasGroup&&bc(e,t),vc(e,t,{groupExists:!1})}(t,e)}}let kc=0
function yc(e){const t=W("verbs",e)
1===t.length&&Lt(t[0])}function wc(){if(!kc)return
const e=n("actionList")
X("player",e).forEach(yc)}function $c(){return`${Jt("showHuntingBuffs")} ${Xt("enabledHuntingMode")}<select name="enabledHuntingMode"><option value="1"${Zt(t.enabledHuntingMode,"1")}>${t.buffsName}</option><option value="2"${Zt(t.enabledHuntingMode,"2")}>${t.buffs2Name}</option><option value="3"${Zt(t.enabledHuntingMode,"3")}>${t.buffs3Name}</option></select>`}let Cc=0,Lc=""
const Dc=()=>Cc
function Vc(){const e=[null,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
b(e)&&([Cc,Lc]=e)}function Mc(e){"enabledHuntingMode"===e.target.name&&(v("NewMap","toggleEnabledHuntingMode"),t.enabledHuntingMode=e.target.value,j("enabledHuntingMode",t.enabledHuntingMode),Vc(),GameData.fetch(h))}function Ac(e){v("NewMap","togglePref"),t[e]=!t[e],j(e,t[e])}const Sc={hideSubLvlCreature:function(){Ac("hideSubLvlCreature"),GameData.fetch(vt)},hidePlayerActions:function(){v("NewMap","toggleHidePlayerActions"),kc=!kc,j("hidePlayerActions",kc),GameData.fetch(vt)},showCreatureInfo:()=>Ac("showCreatureInfo"),showHuntingBuffs:function(){Ac("showHuntingBuffs"),GameData.fetch(h)},showMonsterLog:()=>Ac("showMonsterLog"),showTitanInfo:function(){Ac("showTitanInfo"),qr(GameData.realm().dynamic)},showBuffInfo:function(){Ac("showBuffInfo"),Pa()}}
function Nc(e){const t=Sc[e.target.name]
ee(t)&&(e.target.blur(),t(e))}function Hc(){const e=n("worldPage")
if(!e)return
const t=a({className:"fshCenter fshFten"}),s=a({id:"fshWorldPrefs",innerHTML:`${Jt("showCreatureInfo")}&nbsp;&nbsp;${Jt("showMonsterLog")}&nbsp;&nbsp;${Jt("showTitanInfo")}&nbsp;&nbsp;${Jt("showBuffInfo")}<br>${Jt("hideSubLvlCreature")}&nbsp;&nbsp;${Jt("hidePlayerActions")}&nbsp;&nbsp;${$c()}`})
m(s,Nc),L(s,"change",Mc),i(t,s)
const r=a()
return i(t,r),i(e,t),r}const jc=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function Bc(){var e
t.combatEvaluatorBias=D("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,jc[e]?jc[e].generalVariable:1.1053),t.hpVariable=function(e){return jc[e]?jc[e].hpVariable:1.1}(t.combatEvaluatorBias)}function xc(e,t){return e[t.name]=!0,e}function Tc(e,t,a){return e[J(a)]||t.push(a),t}function Ec(e,t){Te(`You are missing some ${Lc} hunting buffs<br>(${t.join(", ")})`,e)}function Gc(e){Te("",e)}function Pc(e,a){t.showHuntingBuffs?function(e,t){const a=t.b.reduce(xc,{}),n=Dc().reduce(u(Tc,a),[])
n.length>0?Ec(e,n):Gc(e)}(e,a):Gc(e)}function Rc(e,t,a){Dc()&&Pc(e,a)}function Fc(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function _c(e){const t=_(e)
return t?.actions?.length?(t.actions=t.actions.filter(u(Fc,function(e){return e.realm?.minlevel||GameData.realm().minlevel}(t))),Dt(t)):e}function Oc(e,a){t.hideSubLvlCreature&&function(e){return e.data?.d&&ea(e.data.d,vt)}(a)&&(e.dataFilter=_c)}function Ic(e){t[e[0]]=Vt(e[1])}function Wc(e){t[e]=Vt(e)}function qc(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Ic),["doNotKillList"].forEach(Wc)}function Kc(e){t[e[0]]=D(e[1])}function zc(e){t[e]=D(e)}function Yc(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showHuntingBuffs","showHuntingBuffs"]].forEach(Kc),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(zc)}const Uc=[function(){let e=0
window.requestAnimationFrame=t=>{const a=window.performance.now(),n=Math.max(e+16,a)
return e=n,setTimeout(()=>{t(e)},n-a)},window.cancelAnimationFrame=clearTimeout},function(){Bc(),qc(),Yc()
const e=Hc()
$.ajaxPrefilter("JSON",Oc),t.hideSubLvlCreature&&GameData.fetch(vt),function(e){Vc()
const a=u(Rc,e)
$.subscribe(g,a),t.showHuntingBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(e),kc=D("hidePlayerActions"),$.subscribe(ae,wc),wc()},function(){pt(),ht()&&ci()},function(){$.subscribe($t,gc)},function(){bs.forEach(gs)},function(){D("enableCreatureColoring")&&i(document.body,Et("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(ae,as),as(),function(){const e=GameData.doAction
GameData.doAction=rs(e)}()},function(){Ns(),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",Ts),Ts()},function(){$.subscribe(ft,ei)},function(){D("keepLogs")&&$.subscribe(G,wn)},function(){window.initialGameData&&zr(0,window.initialGameData),$.subscribe(`${Re} ${Fe}`,zr)},function(){$.subscribe(kt,gi)},function(){$.subscribe(lt,Zo)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){V("#mapTooltip")},function(){cn(),$.subscribe(y,ln),$.subscribe(w,un)},function(){Pa(),$.subscribe(`${g} ${k}`,Pa)},function(){L(n("actionList"),"mouseover",Zn)},function(){const{body:e}=document
L(e,"keydown",kn),L(e,"keyup",yn)},function(){const e=globalThis.$("#world-event-badge")
e.length&&(e.off(),m(e[0],ps))},function(){const e=T(".actionListHeaderButton.teleport")
!function(e,t){De(yi,{target:e,props:t})}(e,{tpButton:e})},function(){var e
D("messageStack")&&(e=n("messageCenter"),De(ws,{target:e}))},function(){GameController?.Realm?.footprintTexture?ni():$.subscribe("fixed.realm",si)}]
function Qc(){e(Uc)}export{Qc as default}
//# sourceMappingURL=newMap-BSQ9L2Un.js.map
