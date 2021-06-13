import{c as t,m as e,z as a,A as n,h as r,t as o,i,o as s,aP as u,Q as l,aQ as c,aR as f,aS as d,_ as m,b as h,f as p,E as b,D as g,T as v,az as y,I as k,aT as w,C,aM as L,aU as D,aV as A,x as M,B as V,aW as S,aK as H,aX as N,aY as B,aZ as x,a_ as G,a$ as T,b0 as E,aF as j,aO as P,b1 as I,a4 as O,V as R,v as F,ac as _,a5 as q,b2 as K,b3 as Y,P as z,u as U,b4 as W,b5 as Q,b6 as J,b7 as X,aL as Z,q as tt,a as et,M as at,b8 as nt,b9 as rt,ba as ot,bb as it,bc as st,l as ut,aq as lt,$ as ct,ar as ft,a7 as dt,bd as mt,be as ht,bf as pt,bg as bt,bh as gt,bi as vt,bj as yt}from"./calfSystem-d3f0a380.js"
import{i as kt}from"./insertElementAfter-f0358052.js"
import{t as wt}from"./toggleForce-70762365.js"
import{c as Ct}from"./createSpan-6440fa04.js"
import{i as Lt}from"./insertTextBeforeEnd-9237ff16.js"
import{a as Dt,r as At}from"./roundToString-34b7c935.js"
import{a as Mt}from"./addCommas-8af578e2.js"
import{d as $t,q as Vt}from"./quickbuffSuccess-eec9fbd5.js"
import{p as St}from"./playerName-9d5fb2c2.js"
import{g as Ht,s as Nt}from"./idb-13440348.js"
import{c as Bt}from"./createStyle-65a2dcef.js"
import{g as xt}from"./getArrayByClassName-aab7cb65.js"
import{e as Gt}from"./executeAll-9a33204f.js"
import{c as Tt}from"./createButton-41f57afe.js"
import{e as Et}from"./eventHandler5-8158f2d3.js"
import{i as jt}from"./insertElementBefore-c2bb9234.js"
import{c as Pt}from"./createInput-816cd771.js"
import{c as It}from"./createLabel-c64b35fa.js"
import{o as Ot}from"./openQuickBuffByName-62f56024.js"
import{a as Rt}from"./all-3768003b.js"
import{a as Ft}from"./allthen-34d3fc07.js"
import{d as _t,g as qt}from"./getGroupStats-c6d002d4.js"
import{g as Kt}from"./getMercStats-fbd299d5.js"
import{g as Yt}from"./getProfile-31c8f504.js"
import{g as zt}from"./getMembrList-a58b1ab2.js"
import{h as Ut}from"./hideElement-452544d4.js"
import{n as Wt}from"./numberIsNaN-c0e87dea.js"
import{r as Qt}from"./reduceBuffArray-867d4e68.js"
import{r as Jt}from"./rnd-72e72dc0.js"
import{h as Xt}from"./hasClasses-42842f18.js"
import{v as Zt}from"./valueText-2dd1b1b5.js"
import{g as te}from"./guild-b0e3687a.js"
import{g as ee,a as ae}from"./getTitanString-3187e0ac.js"
import{p as ne}from"./padZ-aa6c487e.js"
import{c as re}from"./createTable-4508e0e9.js"
import{t as oe}from"./testQuant-95fb5e76.js"
import{g as ie}from"./groupViewStats-c0878d40.js"
import{m as se}from"./myStats-39a705ba.js"
import{a as ue}from"./huntingBuffs-27de14c3.js"
import{b as le}from"./simpleCheckbox-7afb7f1a.js"
import{b as ce}from"./bitwiseAnd-c837f771.js"
import{s as fe}from"./shouldBeArray-3319227e.js"
import"./getBuff-2fadd508.js"
import"./buffObj-c604f006.js"
import"./fshOpen-4e911fa6.js"
import"./chunk-4d4ecad3.js"
import"./createLi-460154df.js"
import"./createUl-79bfff16.js"
import"./cmdExport-2e38b85e.js"
import"./indexAjaxJson-00baab20.js"
import"./currentGuildId-574c8e9f.js"
import"./testRange-e7fa6436.js"
import"./intValue-19726e4b.js"
import"./isChecked-e1880947.js"
import"./isSelected-c1b89a16.js"
import"./csvSplit-d0e27857.js"
let de,me,he,pe,be,ge,ve,ye,ke
function we(t){return t}function Ce(n){if(function(e){return t.showBuffInfo&&e.some(we)}(n))return function(){if(de)wt(de,!1)
else{de=e({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div><div></div>"})
const t=a("actionContainer")
kt(de,t.children[2])}return de}()
de&&wt(de,!0)}function Le(t,e){me?wt(me,!1):function(t){me=t.children[3],me.className="fshBlue",n("CA ",me),he=Ct(),r(me,he),Lt(me," active")}(t),n(e.level,he)}function De(t,e){e?Le(t,e):me&&wt(me,!0)}function Ae(t,e){pe?wt(pe,!1):function(t){pe=t.children[4],pe.className="fshRed",n("Doubler ",pe),be=Ct(),r(pe,be),Lt(pe," active")}(t),n(e.level,be)}function Me(t,e){e?Ae(t,e):pe&&wt(pe,!0)}function $e(t,e,a){ge?wt(ge,!1):function(t){ge=t.children[2],n("Damage bonus: ",ge),ve=Ct(),r(ge,ve),Lt(ge,"%")}(t),n(function(t,e){if(t){const a=Math.min(.01*Math.round(Math.floor(e/5)*Number(t.level)),20)
return Dt(a,2).toString()}return"0"}(e,Number(a)),ve)}function Ve(t,e,a){e?$e(t,e,a):ge&&wt(ge,!0)}function Se(t,e){n(Mt(t),e)}function He(t,e){ye?wt(ye,!1):function(t){ye=t.children[1],n("Kill Streak: ",ye),ke=Ct(),r(ye,ke)}(t),Se(e,ke)}function Ne(t,e,a,n){e||a?He(t,n):ye&&wt(ye,!0)}function Be(t,e){return e.name===t}function xe(t){const{buffs:e}=GameData.player()
if(e)return e.find(o(Be,t))}const Ge=["red","orange","yellow"]
let Te,Ee
function je(t){Vt(t)&&GameData.fetch(u)}function Pe(){xe("Summon Shield Imp")||$t([St()],[55]).then(je)}const Ie=["imp-0","imp-1","imp-1"]
function Oe(t,e){Te?wt(Te,!1):function(t){Te=t.children[0],n("Shield Imps Remaining: ",Te),Ee=Ct(),r(Te,Ee),i(Te,"&nbsp;")
const e=Ct({className:"xSmallLink",textContent:"Recast"})
r(Te,e),s(e,Pe)}(t)
const a=function(t){return t?Number(t.stack):0}(e)
Te.className=function(t){return Ie[t]||"fshGreen"}(a),n(a,Ee)}function Re(t,e,a){e||a?Oe(t,e):Te&&wt(Te,!0)}function Fe(t){return 0===t.type}function _e(t){return Ct({textContent:t})}let qe,Ke,Ye,ze,Ue,We,Qe,Je,Xe,Ze
function ta(t,e){qe?wt(qe,!1):function(t,e){qe=t.children[5],n("Teleport Cooldown: ",qe),Ke=_e(e.toString()),r(qe,Ke)}(t,e)}function ea(){const t=Math.max(Math.ceil((Ye-Date.now())/1e3),0)
n(t,Ke),t>0&&setTimeout(ea,500)}function aa(t,e){e?ta(t,e):qe&&wt(qe,!0)}function na(){ze=xe("Death Dealer"),Ue=xe("Doubler"),We=xe("Counter Attack"),Qe=xe("Summon Shield Imp"),Je=function(){const t=GameData.player().teleportCooldown
return t>1&&t}(),Xe=function(){const{dynamic:t}=GameData.realm()
return l(t)&&t.some(Fe)}(),Ze=GameData.player().killStreak}function ra(){!function(){const t=$("#actionlist-shield-imp")
1===t.length&&t.css("background-color",Ge[t.text()]||"#ad8043")}(),na()
const t=Ce([ze,Ue,We,Qe,Je,Xe])
t&&(Re(t,Qe,ze),Ne(t,ze,Xe,Ze),Ve(t,ze,Ze),De(t,We),Me(t,Ue),aa(t,Je))}function oa(t,e){var a
a=e.player.teleportCooldown,Ke&&(Ye=Date.now()+1e3*a,ea())}const ia=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"]
let sa=!1
function ua(t){return g(".verb.attack",t)}function la(t){const e=ia.indexOf(t.toUpperCase())
return b(`#actionList .actionListItem.creature.creature-${e}`)}function ca(t){const e=["LEGENDARY","NORMAL"].flatMap(la),a=la("CHAMPION"),[n,r]=t?[e,a]:[a,e],o=`url("${y}ui/world/icon_action_attack_`
n.map(ua).filter((t=>null!==t)).forEach((t=>{t.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),t.style.backgroundImage=""})),r.slice(0,8).map(ua).forEach(((t,e)=>{null!==t&&(t.classList.add(`attack-${e+1}`),t.style.backgroundImage=`${o}${e+1}.png")`)}))}function fa(t){if(!t.ctrlKey||!t.shiftKey||"INPUT"===t.target.tagName||"TEXTAREA"===t.target.tagName)return
if(sa||ca(!0),sa=!0,!t.code.match(/(Digit|Numpad)[1-8]/))return
const e=la("CHAMPION"),a=parseInt(t.code.slice(-1),10)-1
if(a<e.length){const t=ua(e[a])
null!==t&&(v("world","ChampionAttack"),t.click())}}function da(t){!sa||t.ctrlKey&&t.shiftKey||(sa=!1,ca(!1))}const ma=["Breaker","Protection","Master Thief","Protect Gold","Disarm","Duelist","Thievery","Master Blacksmith","Master Crafter","Fury Caster","Master Inventor","Sustain"]
let ha,pa=[]
function ba(t){54!==t.id&&26!==t.id||(ha.player.buffs[t.id]=parseInt(t.level,10))}function ga(t){-1===ma.indexOf(t.name)&&(ha.player.enhancements[t.name]=t.value)}function va(t,e){ha={},ha.combat=e.response.data,ha.combat.inventory_id&&(ha.combat.drop=ha.combat.item.id),ha.player={},ha.player.buffs={},ha.player.enhancements={},function(t){t.player.buffs&&t.player.buffs.forEach(ba)}(e),function(t){t.player.enhancements&&t.player.enhancements.forEach(ga)}(e),ha.time=e.time,pa.push(ha),Nt("fsh_combatLog",pa)}function ya(t,e){0===e.response.response&&va(0,e)}function ka(t){t&&(pa=t),$.subscribe(w,ya)}function wa(e){return t.doNotKillList.includes(e.trim())}function Ca(t){t.classList.toggle("fshBlue",wa(C(t)))}function La(){const t=a("actionList")
xt("creature",t).forEach(Ca)}function Da(t){const e=GameData.actions()[t]
if(e)return function(t,e){if(wa(t))return a("actionList").children[e].children[0].children[1].classList.remove("loading"),!0}(e.data.name,t)}const Aa={2:function(t){return function(e,a,n,r){Da(n.passback)||t(e,a,n,r)}}}
function Ma(t){return function(e,a,n,r){const o=Aa[e];(function(t){return t&&L(t)})(o)&&function(t){return D(t)||0===t}(r)?o(t)(e,a,n,r):t(e,a,n,r)}}async function $a(t){var e
const a=(await(e="globalquest",M({cmd:"toprated",subcmd:e}))).r.list
let n='<table id="world-event-contrib-table" style="width: 270px;"><tr><td class="header"></td><td class="header"></td><td class="header">Username</td><td class="header">Kills</td></tr>'
const r=a.length
for(let t=0;t<r;t++)n+=`<tr style="border-top:1px solid #CD9E4B;"><td>${t+1}</td><td><a href="${S}${a[t].guild.id}"><img src="${y}guilds/${a[t].guild.id}_mini.png" width="16" height="16"></a></td><td><a href="${H}${a[t].player.name}">${a[t].player.name}</a></td><td>${a[t].value}</td></tr>`
n+="</table>",V(n,t)}function Va(){const t=a("world-event-contrib")
V("Loading...",t),$a(t),$(t).dialog({title:"Top 100 Event Contributers",minWidth:300,height:300,zIndex:9999})}function Sa(t){t.remove()}function Ha(t,e){!function(t){(function(t){return t.response&&t.response.msg&&t.response.msg.startsWith("Creature did not exist at that location")})(t)&&GameData.fetch(N+B)}(e),b(".creature-4 > .quickCombat > .verbs").forEach(Sa)}function Na(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function Ba(t,e,a){return It({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${t}`,dataset:{tipped:e},htmlFor:a})}function xa(t){const a=e({className:"fshToggle"}),n=Pt({checked:t.prefVal,id:t.checkId,type:"checkbox"})
r(a,n)
const o=Ba(t.onClass,t.onTip,t.checkId)
r(a,o)
const i=Ba(t.offClass,t.offTip,t.checkId)
return r(a,i),r(t.worldName,a),n}let Ga,Ta,Ea,ja,Pa,Ia,Oa,Ra,Fa
function _a(t){return t?t.toString():"?"}function qa(t){const a=e({className:"fshFsty"})
r(a,function(){const t=e({textContent:"Min Lvl: "})
return Ta=_e(_a(GameData.realm().minlevel)),r(t,Ta),t}()),r(a,function(){const t=e({textContent:"Your Lvl: "})
return Ea=_e(_a(GameData.player().level)),r(t,Ea),t}()),r(t,a)}function Ka(t,e,a){const n=Tt({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${t}`,dataset:{tipped:e}})
return r(a,n),n}function Ya(){var e
qa(e=Ga),ja=Ka("fshFormGroup","Quick Create Attack Group",e),Pa=Ka("fshQuickBuff","Open Quick Buff Popup",e),Ia=Ka("fshRealmMap","Open Realm Map",e),Oa=Ka("fshTempleOne","Search map in Ultimate FSG",e),function(t){if(k("showSpeakerOnWorld")){const e=k("playNewMessageSound")
Ra=xa({prefVal:e,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:t})}}(Ga),function(e){const a=t.huntingMode
Fa=xa({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(Ga)}const za=[[t=>t===Ra,function(){m("playNewMessageSound",!k("playNewMessageSound"))}],[t=>t===Fa,function(){t.huntingMode=!t.huntingMode,m("huntingMode",t.huntingMode)}]],Ua=[[t=>t===ja,function(t){T(t),GameData.doAction(12,401,{},0)}],[t=>t===Pa,function(){Ot(St())}],[t=>t===Ia,function(){window.open(`${E+j}map`,"fsMap")}],[t=>t===Oa,function(){const t=GameData.realm()
window.open(`${P}realms${j}view&realm_id=${t.id}`,"mapUfsg")}]]
function Wa(){Ga||(Ga=e({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),Ya(),s(Ga,Et(Ua)),p(Ga,"change",Et(za)),jt(Ga,a("worldCoord")))}function Qa(t,e){Ta&&e.b.minlevel&&(Na(),n(e.b.minlevel,Ta))}function Ja(t,e){Ea&&n(e.b,Ea)}function Xa(t){return!t||!t.response||!t.response.data}let Za,tn,en,an,nn,rn,on,sn,un,ln,cn,fn,dn,mn,hn,pn,bn,gn,vn,yn,kn,wn,Cn,Ln,Dn,An,Mn,$n,Vn,Sn,Hn,Nn,Bn,xn,Gn
function Tn(t){return t.player_name}function En(t){!function(t){an=t.defenders.map(Tn)}(t),Za?V("",Za):Za=e({className:"body"}),function(t){tn=e({className:"fshFloatLeft fshRelicLeftDiv"}),r(Za,tn),t.is_owner&&r(tn,_t(an)),en=Tt({className:"custombutton",textContent:"Fetch Stats"}),r(tn,en)}(t)
const n=a("dialog-relic")
r(n,Za)}const jn=[t=>"lastUpdate"!==t,t=>!an.includes(t),t=>nn[t].last_login,t=>Number(nn[t].last_login)<rn,t=>Number(nn[t].last_login)>on,t=>nn[t].level<400||nn[t].level>421,t=>nn[t].level<441||nn[t].level>450]
function Pn(t,e){return e(t)}function In(t){return jn.every(o(Pn,t))}function On(t){return`<a href="${O}${nn[t].id}">${t}</a>`}function Rn(t){nn=t,rn=R-120,on=R-604800
const e=I(nn).filter(In).map(On)
i(Za,`<div class="fshFloatLeft fshRelicLowDiv"><table class="relicT"><thead><tr><th>${e.length.toString()} Offline guild members not at relic:</th></tr></thead><tbody><tr><td>${e.join(" ")}</td></tr></tbody></table></div>`)}function Fn(t){Ut(en)
const n=k("hideRelicOffline")
t.is_owner&&!n&&zt(!0).then(Rn),i(tn,'<table class="relicT"><thead><tr><th colspan="2">Processing</th></tr></thead><tbody><tr><td class="fshGreen" colspan="2" id="ProcessingStatus">Parsing defending guild stats ...</td></tr></tbody><thead><tr><th colspan="2">Assumptions</th></tr></thead><tbody><tr><td colspan="2" class="fshGrey">Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that order) on both the defending group and attacking group.</td></tr></tbody></table>'),Gn=a("ProcessingStatus")
const o=e({className:"fshFloatLeft fshRelicMidDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Defending Guild Stats</th></tr></thead><tbody><tr><td>Relic Count:</td><td id="relicCount">0</td></tr><tr><td>Lead Defender Bonus:</td><td id="LDPercentage">0</td></tr><tr><td>Lead Defender Cloaked:</td><td id="LDCloaked">No</td></tr></tbody><thead><tr><th colspan="2">Other Defender Stats</th></tr></thead><tbody><tr><td>Raw Attack:</td><td class="fshGrey" id="attackValue">0</td></tr><tr><td>Attack w/ buffs:</td><td id="attackValueBuffed">0</td></tr><tr><td>Raw Defense:</td><td class="fshGrey" id="defenseValue">0</td></tr><tr><td>Defense w/buffs:</td><td id="defenseValueBuffed">0</td></tr><tr><td>Raw Armor:</td><td class="fshGrey" id="armorValue">0</td></tr><tr><td>Armor w/ buffs:</td><td id="armorValueBuffed">0</td></tr><tr><td>Raw Damage:</td><td class="fshGrey" id="damageValue">0</td></tr><tr><td>Damage w/ buffs:</td><td id="damageValueBuffed">0</td></tr><tr><td>Raw HP:</td><td class="fshGrey" id="hpValue">0</td></tr><tr><td>HP w/ buffs:</td><td id="hpValueBuffed">0</td></tr><tr><td>Cloaked:</td><td id="defendersCloaked">0</td></tr><tr><td>Processed:</td><td id="defendersProcessed">0</td></tr></tbody></table>'})
r(Za,o),sn=a("relicCount"),un=a("LDPercentage"),ln=a("LDCloaked"),cn=a("attackValue"),fn=a("attackValueBuffed"),dn=a("defenseValue"),mn=a("defenseValueBuffed"),hn=a("armorValue"),pn=a("armorValueBuffed"),bn=a("damageValue"),gn=a("damageValueBuffed"),vn=a("hpValue"),yn=a("hpValueBuffed"),kn=a("defendersCloaked"),wn=a("defendersProcessed")
const s=e({className:"fshFloatLeft fshRelicRightDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Adjusted defense values</th></tr></thead><tbody><tr><td>DC225:</td><td id="DC225">0</td></tr><tr><td>DC175:</td><td id="DC175">0</td></tr><tr><td colspan="2">&nbsp;</td></tr></tbody><thead><tr><th colspan="2">Attacking Group Stats</th></tr></thead><tbody><tr><td>Raw Group Attack:</td><td class="fshGrey" id="GroupAttack"></td></tr><tr><td>Group Attack w/ buffs:</td><td id="GroupAttackBuffed"></td></tr><tr><td>Raw Group Defense:</td><td class="fshGrey" id="GroupDefense"></td></tr><tr><td>Group Defense w/ buffs:</td><td id="GroupDefenseBuffed"></td></tr><tr><td>Raw Group Armor:</td><td class="fshGrey" id="GroupArmor"></td></tr><tr><td>Group Armor w/ buffs:</td><td id="GroupArmorBuffed"></td></tr><tr><td>Raw Group Damage:</td><td class="fshGrey" id="GroupDamage"></td></tr><tr><td>Group Damage w/ buffs:</td><td id="GroupDamageBuffed"></td></tr><tr><td>Raw Group HP:</td><td class="fshGrey" id="GroupHP"></td></tr><tr><td>Group HP w/ buffs:</td><td id="GroupHPBuffed"></td></tr></tbody></table>'})
r(Za,s),Cn=a("DC225"),Ln=a("DC175"),Dn=a("GroupAttack"),An=a("GroupAttackBuffed"),Mn=a("GroupDefense"),$n=a("GroupDefenseBuffed"),Vn=a("GroupArmor"),Sn=a("GroupArmorBuffed"),Hn=a("GroupDamage"),Nn=a("GroupDamageBuffed"),Bn=a("GroupHP"),xn=a("GroupHPBuffed")}let _n
function qn(t){const e=F(t),a=_('#pCC img[src*="/relics/"]',e).length
var r
n(a,sn),_n=1===(r=a)?1.5:Dt(1-r/10,2),n(`${String(100*_n)}%`,un)}function Kn(t,e){return t>10*e||t<e?t:10*e}const Yn=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function zn(t,e,a){t[a[0]]=Number(e[a[1]])}const Un=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function Wn(t,e,a){t[a[0]]=e[a[1]]||0}function Qn(t){if(!t)return
const e=Qt(t._skills),a={}
return function(t,e){Yn.forEach(o(zn,t,e))}(a,t),function(t,e){Un.forEach(o(Wn,t,e))}(a,e),a.superEliteSlayerMultiplier=Dt(.002*a.superEliteSlayerLevel,2),Wt(a.armorValue)&&function(t){t.attackValue=Kn(t.attackBonus,t.levelValue),t.defenseValue=Kn(t.defenseBonus,t.levelValue),t.armorValue=Kn(t.armorBonus,t.levelValue),t.damageValue=Kn(t.damageBonus,t.levelValue),t.hpValue=t.hpBonus}(a),a}let Jn,Xn,Zn,tr,er,ar,nr,rr,or,ir,sr,ur,lr,cr
function fr(t){return Math.round(t*_n)}function dr(){Se(Jn,cn),Se(Zn,dn),Se(tr,hn),Se(er,bn),Se(nr,vn),n(rr,kn),or+=1,n(or,wn)}function mr(t){const e=function(t){return Math.ceil(sr.attack*(.0025*q(t["Nightmare Visage"],0)))}(t)
sr.attack-=e,function(){const t=Math.ceil(sr.attack*ir.flinchLevel*.001)
Se(sr.attack-t,An)}()
const a=function(t){return Math.ceil(sr.defense*(1+.001*q(t.Constitution,0)))}(t)
Se(a+e,$n),function(t){Se(sr.armor+Math.floor(sr.armor*q(t.Sanctuary,0)*.001),Sn)}(t)
const n=function(t,e){return Math.ceil(e*q(t.Fortitude,0)*.001)}(t,a)
!function(t){Se(sr.hp+t,xn)}(n),function(t,e){const a=Math.ceil((sr.hp+e)*q(t["Chi Strike"],0)*.001),n=Math.ceil(sr.damage*ir.terrorizeLevel*.001)
Se(sr.damage+a-n,Nn)}(t,n)}function hr(){n("Processing attacking group stats ... ",Gn),ur&&(sr.attack-=ur.attack,sr.defense-=ur.defense,sr.armor-=ur.armor,sr.damage-=ur.damage,sr.hp-=ur.hp),Se(sr.attack,Dn),Se(sr.defense,Mn),Se(sr.armor,Vn),Se(sr.damage,Hn),Se(sr.hp,Bn)
const t=Qt(GameData.player().buffs)
mr(t),function(t){const e=Math.ceil(Xn*q(t.Flinch,0)*.001)
Se(Xn-e,fn)}(t),function(t){const e=Math.ceil(ar*q(t.Terrorize,0)*.001)
Se(ar-e,gn)}(t),n("Done.",Gn)}function pr(){n("Processing defending guild stats ... ",Gn),Jn+=fr(ir.attackValue),Zn+=fr(ir.defenseValue),tr+=fr(ir.armorValue),er+=fr(ir.damageValue),nr+=fr(ir.hpValue),dr()
const t=Math.ceil(Jn*(.0025*ir.nightmareVisageLevel))
!function(t){Xn=Jn-t,Se(Xn,fn)}(t)
const e=Math.ceil(Zn*(1+.001*ir.constitutionLevel))
!function(t,e){const a=e+t
Se(a,mn),Se(Math.ceil(.55*a),Cn),Se(Math.ceil(.65*a),Ln)}(t,e),Se(tr+Math.floor(tr*ir.sanctuaryLevel*.001),pn)
const a=nr+function(t){return Math.ceil(t*ir.fortitudeLevel*.001)}(e)
Se(a,yn),function(t){ar=er+Math.ceil(t*ir.chiStrikeLevel*.001),Se(ar)}(a),0!==ir.cloakLevel&&n("Yes",ln),GameData.player().hasGroup&&sr?hr():n("Done.",Gn)}function br(t){const e=Qn(t)
Jn+=Math.round(e.attackValue*K),Zn+=Math.round(e.defenseValue*K),tr+=Math.round(e.armorValue*K),er+=Math.round(e.damageValue*K),nr+=Math.round(e.hpValue*K),0!==e.cloakLevel&&(rr+=1),dr()}function gr(t){ir=Qn(t)}function vr(t){sr=t}function yr(t){ur=t}function kr(t){n(t.message,Gn)}function wr(t){const e=F(t),a=g('#pCC a[href*="confirmDisband"]',e)
if(!a)return
const n=function(t){const e=t.previousElementSibling.href,a=[qt(e).then(vr)]
return function(t){return-1!==t.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML.indexOf('"#000099"')}(t)&&a.push(Kt().then(yr)),a}(a)
return Rt(n)}function Cr(t,e){return 0===e?Yt(t).then(gr):Yt(t).then(br).catch(kr)}function Lr(){let t=[U({cmd:"guild",subcmd:"view",guild_id:lr.controlled_by.guild_id}).then(qn)]
return GameData.player().hasGroup&&t.push(U({cmd:"guild",subcmd:"groups"}).then(wr)),t=t.concat(an.map(Cr)),t}function Dr(){Fn(lr),Jn=0,Zn=0,tr=0,er=0,nr=0,rr=0,or=0
const t=Lr()
Ft(t,pr)}function Ar(t,e){Xa(e)||(lr=e.response.data,lr.defenders.length>0&&(En(lr),z(en,"click",Dr)))}function Mr(t){$("#statbar-gold").css("background-color",t)}function $r(){$("#HelperSendTotal").html(Mt(k("currentGoldSentTotal"))),Number(GameData.player().gold)>cr?Mr("red"):Mr("inherit")}function Vr(){cr=k("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${k("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${Mt(cr)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${Mt(k("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",J),$r(),$.subscribe(X,$r)}function Sr(t){return Z({cache:!1,url:"fetchdata.php",data:tt(t,{fshrnd:Jt()}),dataType:"json"})}const Hr=[]
function Nr(t){return Xa(t)||Hr.push(t),t}function Br(t,e){return t===Number(e.response.data.id)}function xr(t,e){t(e)}function Gr(t,e){const a=Hr.find(o(Br,t))
return a?function(t){return new Promise((e=>{et(3,xr,[e,t])}))}(a):Sr({a:1,id:t,passback:e}).then(Nr)}let Tr,Er,jr,Pr,Ir,Or
function Rr(t,e){return Zt(at(e,t))}function Fr(){var t
Tr=GameData.player().level,t=a("statbar-character-tooltip-stats"),jr=Rr(t,st),Er=Rr(t,nt),Ir=Rr(t,rt),Pr=Rr(t,ot),Or=Rr(t,it)}function _r(t){return`<tr><td colspan="2">${t.name}:</td><td colspan="2">${t.value}</td></tr>`}function qr(t,e,a){return function(t){return`<table><tr><td><img src="${y}creatures/${t.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(t)+function(t,e){return`<tr><td>Class:&nbsp;</td><td width="40%">${t.creature_class}</td><td>Level:&nbsp;</td><td width="40%">${t.level} (your level:<span class="${e}">${Tr}</span>)</td></tr>`}(t,a)+function(t){return`<tr><td>Attack:&nbsp;</td><td width="40%">${t.attack} (your defense:<span class="fshYellow">${Er}</span>)</td><td>Defense:&nbsp;</td><td width="40%">${t.defense} (your attack:<span class="fshYellow">${jr}</span>)</td></tr>`}(t)+function(t){return`<tr><td>Armor:&nbsp;</td><td width="40%">${t.armor} (your damage:<span class="fshYellow">${Pr}</span>)</td><td>Damage:&nbsp;</td><td width="40%">${t.damage} (your armor:<span class="fshYellow">${Ir}</span>)</td></tr>`}(t)+function(t,e){return`<tr><td>HP:&nbsp;</td><td width="40%">${t.hp} (your HP:<span class="fshYellow">${Or}</span>)(1H: <span class="fshRed">${e}</span>)</td><td>Gold:&nbsp;</td><td width="40%">${t.gold}</td></tr>`}(t,e)+'<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'+function(t){return 0===t.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':t.enhancements.map(_r).join("")}(t)+function(t){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${t.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${t.name}</b></td></tr></table>`}(t)}function Kr(e){if(!Xa(e))return function(e){const a=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let n="fshYellow"
return Fr(),Tr>e.level&&(n="fshRed"),qr(e,a,n)}(e.response.data)}const Yr=["verb","view","tip-static"]
function zr(t,e){const a=Kr(e)
t.set("content.text",a)}function Ur(t,e,a){return Gr(GameData.actions()[t].data.id,t).then(o(zr,a)),"Loading..."}function Wr(t,e){v("NewMap","CreatureInfo")
const a=lt((n=e).parentNode.children).indexOf(n)
var n,r,i
t.classList.add("fshTip"),r=t,i=o(Ur,a),$(r).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:i},hide:{effect:!1}})}function Qr(e){if(!t.showCreatureInfo)return
const{target:a}=e,n=a.parentNode.parentNode.parentNode;(function(t,e){return Xt(Yr,t)&&!ut("fshTip",t)&&ut("creature",e)})(a,n)&&Wr(a,n)}function Jr(){return te({subcmd:"scouttower"})}function Xr(t,e){const a=t.insertCell(-1)
return[a.colSpan]=e,e[2]&&(a.className="header"),r(a,e[1]),a}function Zr(t,e,a){const n=t.insertRow(-1)
return a&&(n.className="fshBlue"),function(t,e){e.forEach(o(Xr,t))}(n,e),n}function to(t,e){Zr(t,e[0],e[1])}function eo(t,e){e.forEach(o(to,t))}let ao,no,ro,oo,io,so,uo,lo,co,fo,mo,ho,po,bo,go,vo,yo,ko,wo,Co,Lo,Do,Ao,Mo,$o,Vo,So,Ho
function No(){no=_e("Current"),ro=_e("Kills"),oo=_e("Member"),io=_e("% of Total"),so=_e("Status"),uo=_e("Titan HP"),lo=_e("Total"),co=_e("Your Guild")}function Bo(){for(;yo.rows.length>7;)yo.deleteRow(7)}function xo(){const t=Ct()
return r(t,fo),Lt(t,"/"),r(t,mo),t}function Go(t){const e=Ct()
return r(e,t),Lt(e,"%"),e}function To(){wo=null,ko&&!ut("fshHide",ko)&&(wt(ko,!0),n("",fo),n("",mo),n("",ho),n("",po),n("",bo),V("",go),V("",vo),Bo())}function Eo(t){return 0===t.type&&(wo=t.base_creature_id,!0)}function jo(){if(ko)wt(ko,!1)
else{const t=a("actionContainer")
ko=e({className:"fshActionBox titanInfo"}),fo=Ct(),mo=Ct(),ho=Ct(),po=Ct(),bo=Ct(),go=Ct(),vo=Ct(),yo=re({className:"fshCenter"}),No(),eo(yo,[[[[2,uo,!0],[4,co,!0]]],[[[2,xo()],[4,ho]]],[[[2,no,!0],[4,Go(po)]],!0],[[[2,lo,!0],[4,Go(bo)]],!0],[[[2,so,!0],[4,go]],!0],[[[6,vo]]],[[[2,oo,!0],[2,ro,!0],[2,io,!0]]]]),r(ko,yo),r(t,ko)}}function Po(t){return t<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(t){const e=new Date(dt+1e3*t)
return`${ne(e.getHours())}:${ne(e.getMinutes())} ${ne(e.getDate())}/${ft[e.getMonth()]}/${e.getFullYear()}`}(t)}</span>`}function Io(t){return At(ee(t.max_hp-t.current_hp,t.kills),2)}function Oo(t){return At(100*t.kills/t.max_hp,2)}function Ro(t){[[t.current_hp,fo],[t.max_hp,mo],[t.kills,ho],[Io(t),po],[Oo(t),bo]].forEach((([t,e])=>{n(t,e)})),V(function(t){return ae(t.kills,t.max_hp,t.current_hp)}(t),go),V(Po(t.cooldown),vo)}function Fo(t,e){return[[[2,_e(e.player.name)],[2,_e(e.kills.toString())],[2,_e(`${At(100*e.kills/t.kills,2)}%`)]]]}function _o(t){return t.realm&&t.creature.base_id===wo&&t.realm===ao}function qo(t){const e=t.find(_o)
e&&(Ro(e),function(t){if(Bo(),!t.contributors)return
const e=t.contributors.map(o(Fo,t))
eo(yo,e)}(e))}function Ko(e){return t.showTitanInfo&&l(e)&&e.some(Eo)}function Yo(t,e){(function(t){return t&&t.s&&l(t.r)})(e)&&(qo(e.r),Ko(GameData.realm().dynamic)?Co=window.setTimeout(t,3e4):To())}function zo(){ct(Jr).then(o(Yo,zo))}function Uo(t){Co&&(window.clearTimeout(Co),Co=null),Ko(t)?(jo(),zo()):To()}function Wo(t){var e
t.dynamic&&(e=t.name,ao=e,Uo(t.dynamic))}function Qo(t,e){(function(t){return t.realm&&t.realm.name})(e)&&Wo(e.realm)}function Jo(t){const e=t.response.response,a=t.response.msg
let n
if(0!==e){const t=a.indexOf("<")
n=-1!==t?a.substring(0,t):a}else n=`You purchased ${t.response.data.name} for ${Mt(t.response.data.cost)} gold.`
i(So,`${n}<br>`)}function Xo(){GameData.doAction(14,3,{id:Lo.id,item_id:Lo.itemId},0),Ao.close()}function Zo(){const t=oe($o.value)
if(!t)return
const e=[]
for(let a=1;a<t;a+=1)e.push(Sr({a:14,d:0,id:Lo.id,item_id:Lo.itemId}).then(Jo))
Ft(e,Xo)}function ti(){Mo?n("",So):(Mo=e({className:"fshClear",textContent:"Select how many to quick-buy:"}),$o=Pt({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),r(Mo,$o),Vo=Tt({textContent:"Quick-buy"}),s(Vo,Zo),r(Mo,Vo),So=e(),r(Mo,So),r(Do,Mo))}function ei(t,e){Lo=e,Do=Do||a("shopDialogConfirm"),Do&&(Ao=Ao||$(Do).data("hcsWorldDialogShopConfirm"),Ao&&ti())}function ai(t){Ho[t.name]?Ho[t.name].seen&&(Ho[t.name].seen+=1):(Ho[t.name]={seen:1},function(t,e){e.creature_class=t.creature_class,e.image_id=t.image_id,e.level=Number(t.level),e.type=t.type}(t,Ho[t.name]))}function ni(t,e,a){return e?t(e,a):a}function ri(t,e){const a=t||{}
return a.min=ni(Math.min,a.min,e),a.max=ni(Math.max,a.max,e),a}const oi=["attack","armor","damage","defense","hp"]
function ii(t,e,a){const n=ri(e[a],Number(t[a]));(function(t,e){return!t||t.min!==e.min||t.max!==e.max})(e[a],n)&&(e[a]=n)}function si(t,e){t[e.name]=ri(t[e.name],Number(e.value))}function ui(t){Ho||(Ho={}),ai(t),function(t,e){oi.forEach(o(ii,t,e))}(t,Ho[t.name]),function(t,e){(function(t){return t.enhancements&&t.enhancements.length>0})(t)&&(e.enhancements=e.enhancements||{},t.enhancements.forEach(o(si,e.enhancements)))}(t,Ho[t.name]),Nt("fsh_monsterLog",Ho)}function li(t){Ho=t||{}}const ci=[]
function fi(e){var a
Xa(e)||(v("NewMap","MonsterLog"),a=e.response.data,t.showMonsterLog&&ui(a))}function di(t,e){return t.id===e.id}function mi(t,e){6!==t.type||function(t){if(ci.find(o(di,t.data)))return!0
ci.push(t.data)}(t)||Gr(t.data.id,e).then(fi)}function hi(){t.showMonsterLog&&GameData.actions().forEach(mi)}function pi(t){const e=F(t),a=ie(e)
return{r:{attributes:[{value:a.attack},{value:a.defense},{value:a.armor},{value:a.damage},{value:a.hp}]}}}function bi(t){return U({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:t}).then(pi)}function gi(t){return te(tt({subcmd:"groups"},t))}function vi(t){return gi({subcmd2:"viewstats",group_id:t})}function yi(){return gi({subcmd2:"view"})}function ki(t){return t.numberOfCreatureHitsTillDead-t.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}const wi=[[t=>"-"===t.playerHits&&"-"===t.creatureHits,()=>"Unresolved"],[t=>"-"===t.playerHits,()=>"Player dies"],[t=>1===t.playerHits,t=>`Player 1 hits${ki(t)}`],[t=>t.playerHits>1,t=>`Player > 1 hits${ki(t)}`]]
function Ci(t,e){return e[0](t)}function Li(t){t.playerHits=function(t){return"-"===t.numberOfCreatureHitsTillDead?t.numberOfHitsRequired:function(t){return"-"===t.numberOfHitsRequired||t.numberOfHitsRequired>t.numberOfCreatureHitsTillDead}(t)?"-":t.numberOfHitsRequired}(t),t.creatureHits=function(t){return"-"===t.numberOfHitsRequired?t.numberOfCreatureHitsTillDead:function(t){return"-"===t.numberOfCreatureHitsTillDead||t.numberOfCreatureHitsTillDead>t.numberOfHitsRequired}(t)?"-":t.numberOfCreatureHitsTillDead}(t),t.fightStatus=function(t){const e=wi.find(o(Ci,t))
return e?e[1](t):"Unknown"}(t)}function Di(t){t.creatureHitByHowMuch>=0?function(t){const e=t.generalVariable*t.creature.damage
e<t.overallArmorValue?t.numberOfCreatureHitsTillDead=t.overallHPValue:t.numberOfCreatureHitsTillDead=Math.ceil(t.overallHPValue/(e-t.overallArmorValue))}(t):t.numberOfCreatureHitsTillDead="-"}function Ai(t){!function(t){const e=function(t){return t.callback.groupExists?t.callback.groupArmorValue:t.player.armorValue}(t)
t.overallArmorValue=e+Math.floor(t.player.armorValue*t.player.sanctuaryLevel*.001)}(t),function(t){t.player.sanctuaryLevel>0&&(t.extraNotes+=`Sanc Bonus Armor = ${Math.floor(t.player.armorValue*t.player.sanctuaryLevel*.001)}<br>`)}(t),function(t){t.terrorizeEffect=Math.floor(t.creature.damage*t.player.terrorizeLevel*.001)}(t),function(t){t.player.terrorizeLevel>0&&(t.extraNotes+=`Terrorize Creature Damage Effect = ${-1*t.terrorizeEffect}<br>`)}(t),t.creature.damage-=t.terrorizeEffect,function(t){t.creatureDamageDone=Math.ceil(t.generalVariable*t.creature.damage-t.overallArmorValue+t.overallHPValue)}(t),Di(t)}function Mi(t){const e=function(t){return t.callback.groupExists?t.callback.groupAttackValue:t.player.attackValue}(t)
t.player.darkCurseLevel>0&&(t.extraNotes+=`DC Bonus Attack = ${Math.floor(t.creature.defense*t.player.darkCurseLevel*.002)}<br>`),t.nightmareVisageAttackMovedToDefense=Math.floor((e+t.counterAttackBonusAttack)*t.player.nightmareVisageLevel*.0025),t.player.nightmareVisageLevel>0&&(t.extraNotes+=`NMV Attack moved to Defense = ${t.nightmareVisageAttackMovedToDefense}<br>`),t.overallAttackValue=e+t.counterAttackBonusAttack-t.nightmareVisageAttackMovedToDefense,t.hitByHowMuch=function(t){const e=t.creature.defense-t.creature.defense*t.player.darkCurseLevel*.002
return 3===t.combatEvaluatorBias?t.overallAttackValue-Math.ceil(e)-50:t.overallAttackValue-Math.ceil(t.attackVariable*e)}(t)}function $i(t){t.lowestCALevelToStillHit=Math.max(Math.ceil((t.counterAttackBonusAttack-t.hitByHowMuch+1)/t.player.attackValue/.0025),0),t.lowestCALevelToStillKill=Math.max(Math.ceil((t.counterAttackBonusDamage-t.damageDone+1)/t.player.damageValue/.0025),0)}function Vi(t){$i(t),t.lowestFeasibleCALevel=Math.max(t.lowestCALevelToStillHit,t.lowestCALevelToStillKill),t.extraNotes+=`Lowest CA to still 1-hit this creature = ${t.lowestFeasibleCALevel}<br>`,0!==t.lowestFeasibleCALevel&&function(t){t.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*t.player.attackValue*t.lowestFeasibleCALevel),t.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*t.player.damageValue*t.lowestFeasibleCALevel),t.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${t.extraAttackAtLowestFeasibleCALevel} / ${t.extraDamageAtLowestFeasibleCALevel}<br>`}(t),t.extraStaminaPerHitAtLowestFeasibleCALevel=function(t){return t.player.counterAttackLevel>0?Math.ceil(.0025*(1+t.player.doublerLevel/50)*t.lowestFeasibleCALevel):0}(t),t.extraStaminaPerHitAtLowestFeasibleCALevel<t.extraStaminaPerHit?t.extraNotes+=`Extra Stam Used at this lowered CA level = ${t.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:t.extraNotes+="No reduction of stam used at the lower CA level<br>"}function Si(t){(function(t){return t.player.counterAttackLevel>0&&1===t.numberOfHitsRequired})(t)&&Vi(t),function(t){return"-"===t.numberOfHitsRequired||1!==t.numberOfHitsRequired}(t)&&function(t){$i(t),function(t){t.lowestCALevelToStillHit>175?t.extraNotes+="Even with CA175 you cannot hit this creature<br>":0!==t.lowestCALevelToStillHit&&(t.extraNotes+=`You need a minimum of CA${t.lowestCALevelToStillHit} to hit this creature<br>`)}(t),function(t){t.lowestCALevelToStillKill>175?t.extraNotes+="Even with CA175 you cannot 1-hit kill this creature<br>":0!==t.lowestCALevelToStillKill&&(t.extraNotes+=`You need a minimum of CA${t.lowestCALevelToStillKill} to 1-hit kill this creature<br>`)}(t)}(t)}function Hi(t){!function(t){const e=function(t){return t.callback.groupExists?t.callback.groupHPValue:t.player.hpValue}(t),{fortitudeLevel:a}=t.player
t.fortitudeExtraHPs=Math.floor(e*a*.001),a>0&&(t.extraNotes+=`Fortitude Bonus HP = ${t.fortitudeExtraHPs}<br>`),t.overallHPValue=e+t.fortitudeExtraHPs}(t),function(t){const{chiStrikeLevel:e}=t.player
t.chiStrikeExtraDamage=Math.floor(t.overallHPValue*e*.001),e>0&&(t.extraNotes+=`Chi Strike Bonus Damage = ${t.chiStrikeExtraDamage}<br>`)}(t)
const e=function(t){return t.callback.groupExists?t.callback.groupDamageValue:t.player.damageValue}(t)
if(t.overallDamageValue=e+t.deathDealerBonusDamage+t.counterAttackBonusDamage+t.holyFlameBonusDamage+t.chiStrikeExtraDamage,t.damageDone=Math.floor(t.overallDamageValue-(t.generalVariable*t.creature.armor+t.hpVariable*t.creature.hp)),t.hitByHowMuch>0){let e=1
t.overallDamageValue>=t.generalVariable*t.creature.armor&&(e=t.overallDamageValue-t.generalVariable*t.creature.armor),t.numberOfHitsRequired=Math.ceil(t.hpVariable*t.creature.hp/e)}else t.numberOfHitsRequired="-"}function Ni(t){return t.callback.groupExists?t.callback.groupDefenseValue:t.player.defenseValue}function Bi(t){t.overallDefenseValue=Ni(t)+Math.floor(Ni(t)*t.player.constitutionLevel*.001)+t.nightmareVisageAttackMovedToDefense,function(t){t.player.constitutionLevel>0&&(t.extraNotes+=`Constitution Bonus Defense = ${Math.floor(Ni(t)*t.player.constitutionLevel*.001)}<br>`)}(t),function(t){t.player.flinchLevel>0&&(t.extraNotes+=`Flinch Bonus Attack Reduction = ${Math.floor(t.creature.attack*t.player.flinchLevel*.001)}<br>`)}(t),t.creatureHitByHowMuch=Math.floor(t.attackVariable*t.creature.attack-t.creature.attack*t.player.flinchLevel*.001-t.overallDefenseValue),3===t.combatEvaluatorBias&&(t.creatureHitByHowMuch=Math.floor(t.creature.attack-t.creature.attack*t.player.flinchLevel*.001-t.overallDefenseValue-50))}function xi(t){t.extraNotes="",function(t){t.player.superEliteSlayerLevel>0&&(t.extraNotes+=`SES Stat Reduction Multiplier = ${t.player.superEliteSlayerMultiplier}<br>`)}(t),function(t){t.holyFlameBonusDamage=0,"Undead"===t.creature.class&&(t.holyFlameBonusDamage=Math.max(Math.floor((t.player.damageValue-t.creature.armor)*t.player.holyFlameLevel*.002),0),t.player.holyFlameLevel>0&&(t.extraNotes+=`HF Bonus Damage = ${t.holyFlameBonusDamage}<br>`))}(t),function(t){t.deathDealerBonusDamage=Math.floor(t.player.damageValue*(Math.min(.01*Math.floor(t.player.killStreakValue/5)*t.player.deathDealerLevel,20)/100))}(t),function(t){t.counterAttackBonusAttack=Math.floor(.0025*t.player.attackValue*t.player.counterAttackLevel),t.counterAttackBonusDamage=Math.floor(.0025*t.player.damageValue*t.player.counterAttackLevel)}(t),function(t){t.extraStaminaPerHit=0,t.player.counterAttackLevel>0&&(t.extraStaminaPerHit=Math.ceil(.0025*(1+t.player.doublerLevel/50)*t.player.counterAttackLevel))}(t),function(t){t.player.deathDealerLevel>0&&(t.extraNotes+=`DD Bonus Damage = ${t.deathDealerBonusDamage}<br>`)}(t),function(t){t.player.counterAttackLevel>0&&(t.extraNotes+=`CA Bonus Attack/Damage = ${t.counterAttackBonusAttack} / ${t.counterAttackBonusDamage}<br>CA Extra Stam Used = ${t.extraStaminaPerHit}<br>`)}(t)}let Gi,Ti,Ei,ji,Pi,Ii,Oi,Ri,Fi,_i
function qi(){return wa(Ti)?"Remove from do not kill list":"Add to the do not kill list"}function Ki(){n(qi(),Ei)}function Yi(){const e=t.doNotKillList.indexOf(Ti);-1===e?t.doNotKillList.push(Ti):t.doNotKillList.splice(e,1),Ki(),m("doNotKillList",t.doNotKillList.join()),La()}function zi(){Ei?Ki():function(){Ei=Tt({className:"fshBl",textContent:qi(),type:"button"})
const t=e({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
r(t,Ei),r(Gi,t),s(Ei,Yi)}()}function Ui(t,e){!function(t){if(!Gi){const e=at("body",t)
1===e.length&&([Gi]=e)}}(e),Gi&&(Ti=t.trim(),zi())}function Wi(){Ii||(Pi||(Pi=e(),r(ji,Pi),r(ji,e({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Ii=e(),r(Pi,Ii))}function Qi(t){Wi(),V(t,Ii)}function Ji(t){Oi||(Wi(),Oi=e(),r(Pi,Oi)),V(t,Oi)}function Xi(t,e){const a={name:t.name,class:t.creature_class,attack:Number(t.attack),defense:Number(t.defense),armor:Number(t.armor),damage:Number(t.damage),hp:Number(t.hp)}
return function(t,e,a){3===a&&(e.attack-=Math.ceil(e.attack*t),e.defense-=Math.ceil(e.defense*t),e.armor-=Math.ceil(e.armor*t),e.damage-=Math.ceil(e.damage*t),e.hp-=Math.ceil(e.hp*t))}(e,a,t.type),a}function Zi(e,a,n){const r={}
r.callback=n,r.player=Qn(a),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(r),r.creature=Xi(e.response.data,r.player.superEliteSlayerMultiplier),function(t){xi(t),Mi(t),Hi(t),Bi(t),Ai(t),Li(t),Si(t)}(r),r.evaluatorHTML=function(t){return`<table width="100%"><tbody>${function(t){return`<tr><td bgcolor="#CD9E4B" colspan="4" align="center">${function(t){return t.callback.groupExists?"Group ":""}(t)}Combat Evaluation</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Will I hit it? </td><td align="left">${function(t){return t.hitByHowMuch>0?"Yes":"No"}(t)}</td><td align="right"><span style="color:#333333">Extra Attack: </td><td align="left">( ${t.hitByHowMuch} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333"># Hits to kill it? </td><td align="left">${t.numberOfHitsRequired}</td><td align="right"><span style="color:#333333">Extra Damage: </td><td align="left">( ${t.damageDone} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Will I be hit? </td><td align="left">${function(t){return t.creatureHitByHowMuch>=0?"Yes":"No"}(t)}</td><td align="right"><span style="color:#333333">Extra Defense: </td><td align="left">( ${-1*t.creatureHitByHowMuch} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333"># Hits to kill me? </td><td align="left">${t.numberOfCreatureHitsTillDead}</td><td align="right"><span style="color:#333333">Extra Armor + HP: </td><td align="left">( ${-1*t.creatureDamageDone} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333"># Player Hits? </td><td align="left">${t.playerHits}</td><td align="right"><span style="color:#333333"># Creature Hits? </td><td align="left">${t.creatureHits}</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Fight Status: </span></td><td align="left" colspan="3"><span>${t.fightStatus}</span></td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Notes: </span></td><td align="left" colspan="3"><span style="font-size:x-small;">${t.extraNotes}</span></td></tr>`}(t)}</tbody></table>`}(r),n.groupExists?Ji(r.evaluatorHTML):Qi(r.evaluatorHTML)}function ts(t){return t.members[0].name===St()}function es(t){if(l(t.r))return t.r.find(ts).id}function as(t,e,a){if(!a.r||!a.r.attributes)return
const n=a.r.attributes
Zi(t,e,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}function ns(t,e,a){a&&function(t){return ct(vi,bi,t)}(a).then(o(as,t,e))}function rs(t,e){ct(yi).then(es).then(o(ns,t,e))}function os(t,e){t.player.hasGroup&&rs(t,e),Zi(t,e,{groupExists:!1})}function is(t,e){ji||(ji=a("dialog-viewcreature")),ji&&(Qi(""),Ji(""),function(t){return t.response&&t.response.data}(e)&&(Ui(e.response.data.name,ji),se(!0).then(o(os,e))))}function ss(){const e=[,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
l(e)&&([Ri,Fi]=e)}function us(e){"enabledHuntingMode"===e.target.name&&(t.enabledHuntingMode=e.target.value,m("enabledHuntingMode",t.enabledHuntingMode),ss(),GameData.fetch(u))}function ls(t){const e=at("verbs",t)
1===e.length&&Ut(e[0])}function cs(){if(!_i)return
const t=a("actionList")
xt("player",t).forEach(ls)}const fs={hideSubLvlCreature:function(){t.hideSubLvlCreature=!t.hideSubLvlCreature,m("hideSubLvlCreature",t.hideSubLvlCreature),GameData.fetch(B)},hidePlayerActions:function(){_i=!_i,m("hidePlayerActions",_i),GameData.fetch(B)},showCreatureInfo:function(){t.showCreatureInfo=!t.showCreatureInfo,m("showCreatureInfo",t.showCreatureInfo)},showHuntingBuffs:function(){t.showBuffs=!t.showBuffs,m("showHuntingBuffs",t.showBuffs),GameData.fetch(u)},showMonsterLog:function(){t.showMonsterLog=!t.showMonsterLog,m("showMonsterLog",t.showMonsterLog)},showTitanInfo:function(){t.showTitanInfo=!t.showTitanInfo,m("showTitanInfo",t.showTitanInfo),Uo(GameData.realm().dynamic)},showBuffInfo:function(){t.showBuffInfo=!t.showBuffInfo,m("showBuffInfo",t.showBuffInfo),ra()}}
function ds(t){const e=fs[t.target.name]
L(e)&&(t.target.blur(),e(t))}function ms(){const t=e({className:"fshCenter fshFten"}),n=e({id:"fshWorldPrefs",innerHTML:`${le("showCreatureInfo")}&nbsp;&nbsp;${le("showMonsterLog")}&nbsp;&nbsp;${le("showTitanInfo")}&nbsp;&nbsp;${le("showBuffInfo")}<br>${le("hideSubLvlCreature")}&nbsp;&nbsp;${le("hidePlayerActions")}&nbsp;&nbsp;${ue()}`})
s(n,ds),p(n,"change",us),r(t,n)
const o=e()
r(t,o)
const i=a("worldContainerBelow").children[0]
return jt(t,i),o}function hs(t,e){return t[e.name]=!0,t}function ps(t,e,a){return t[a.trim()]||e.push(a),e}function bs(t){V("",t)}function gs(t,e){const a=e.b.reduce(hs,{}),n=Ri.reduce(o(ps,a),[])
n.length>0?function(t,e){V(`You are missing some ${Fi} hunting buffs<br>(${e.join(", ")})`,t)}(t,n):bs(t)}function vs(e,a,n){Ri&&function(e,a,n){t.showBuffs?gs(e,n):bs(e)}(e,0,n)}const ys=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function ks(){var e
t.combatEvaluatorBias=k("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,ys[e]?ys[e].generalVariable:1.1053),t.hpVariable=function(t){return ys[t]?ys[t].hpVariable:1.1}(t.combatEvaluatorBias)}function ws(t,e){return 6!==e.type||(0!==e.data.creature_type||e.data.level>=t)}function Cs(t){const e=gt(t)
return function(t){return!t||!t.actions||0===t.actions.length}(e)?t:(e.actions=e.actions.filter(o(ws,function(t){return t.realm&&t.realm.minlevel||GameData.realm().minlevel}(e))),JSON.stringify(e))}function Ls(e,a){t.hideSubLvlCreature&&function(t){return t.data&&t.data.d&&ce(t.data.d,B)}(a)&&(e.dataFilter=Cs)}function Ds(e){t[e[0]]=fe(e[1])}function As(e){t[e]=fe(e)}function Ms(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Ds),["doNotKillList"].forEach(As)}function $s(e){t[e[0]]=k(e[1])}function Vs(e){t[e]=k(e)}function Ss(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showBuffs","showHuntingBuffs"]].forEach($s),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(Vs)}function Hs(t){$(`#actionList li.creature-${t.toString()} a.create-group`).hide()}const Ns=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function Bs(t,e){var a
k(t)&&(a=e+1,$.subscribe(A,o(Hs,a)),Hs(e+1))}function xs(t,e){"ACT_REPAIR"===e&&GameData.fetch(yt+u+N+B)}function Gs(t){T(t.target)}const Ts=[function(){ks(),Ms(),Ss()
const e=ms()
$.ajaxPrefilter("JSON",Ls),t.hideSubLvlCreature&&GameData.fetch(B),function(e){ss()
const a=o(vs,e)
$.subscribe(c,a),t.showBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(e),_i=k("hidePlayerActions"),$.subscribe(A,cs),cs()},function(){W(),Q&&Vr()},function(){$.subscribe(bt,is)},function(){Ns.forEach(Bs)},function(){k("enableCreatureColoring")&&r(document.body,Bt("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(A,La),La(),function(){const t=GameData.doAction
GameData.doAction=Ma(t)}()},function(){Ht("fsh_monsterLog").then(li),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",hi),hi()},function(){$.subscribe(vt,xs)},function(){k("keepLogs")&&Ht("fsh_combatLog").then(ka)},function(){window.initialGameData&&Qo(0,window.initialGameData),$.subscribe(`${mt} ${ht}`,Qo)},function(){$.subscribe(pt,ei)},function(){$.subscribe(Y,Ar)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){T("#mapTooltip")},function(){Wa(),$.subscribe(x,Qa),$.subscribe(G,Ja)},function(){ra(),$.subscribe(`${c} ${f}`,ra),$.subscribe(d,oa)},function(){s(a("buffList"),Gs)},function(){p(a("actionList"),"mouseover",Qr)},function(){const t=h("body")[0]
p(t,"keydown",fa),p(t,"keyup",da)}]
function Es(){Gt(Ts),$.subscribe(w,Ha),function(){const t=$("#world-event-badge")
t.length&&(t.off(),s(t[0],Va))}()}export default Es
//# sourceMappingURL=newMap-5a8317c1.js.map
