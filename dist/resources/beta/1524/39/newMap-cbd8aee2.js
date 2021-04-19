import{c as t,m as e,z as a,A as n,h as r,t as o,i,o as s,aK as u,aL as l,aM as c,aN as f,_ as d,b as m,f as h,E as p,D as b,W as g,av as v,I as y,aO as k,C as w,aH as L,aP as C,aQ as D,aR as A,aS as M,aT as V,aU as S,aA as N,aJ as H,B,aV as G,a4 as T,U as x,v as E,ac as j,a5 as P,aW as I,aX as O,Q as R,u as F,aY as _,aZ as q,a_ as K,a$ as Y,aG as z,q as U,a as Q,K as W,b0 as J,b1 as X,b2 as Z,b3 as tt,b4 as et,l as at,N as nt,$ as rt,af as ot,a7 as it,b5 as st,b6 as ut,b7 as lt,b8 as ct,b9 as ft,ba as dt,bb as mt,bc as ht,bd as pt}from"./calfSystem-26fbeaeb.js"
import{i as bt}from"./insertElementAfter-17f5394f.js"
import{t as gt}from"./toggleForce-5182a27d.js"
import{c as vt}from"./createSpan-2c557b8b.js"
import{i as yt}from"./insertTextBeforeEnd-7cef117e.js"
import{a as kt,r as wt}from"./roundToString-f45536fa.js"
import{a as Lt}from"./addCommas-37fb94e0.js"
import{d as Ct,q as Dt}from"./quickbuffSuccess-2c227824.js"
import{p as At}from"./playerName-a1b7a513.js"
import{i as Mt}from"./isArray-f324e0ac.js"
import{g as Vt,s as $t}from"./idb-7ea76af7.js"
import{c as St}from"./createStyle-3d60b537.js"
import{g as Nt}from"./getArrayByClassName-ccc42006.js"
import{e as Ht}from"./executeAll-ed9a2868.js"
import{c as Bt}from"./createButton-614aa118.js"
import{e as Gt}from"./eventHandler5-989b63e7.js"
import{i as Tt}from"./insertElementBefore-68b894c4.js"
import{c as xt}from"./createInput-b457e181.js"
import{c as Et}from"./createLabel-9a80b47c.js"
import{o as jt}from"./openQuickBuffByName-ae264df4.js"
import{a as Pt}from"./all-2b32eb82.js"
import{a as It}from"./allthen-b65a93f3.js"
import{d as Ot,g as Rt}from"./getGroupStats-73af9fa1.js"
import{g as Ft}from"./getMercStats-d00dff24.js"
import{g as _t}from"./getProfile-d835f1ae.js"
import{g as qt}from"./getMembrList-54983401.js"
import{h as Kt}from"./hideElement-d197c06b.js"
import{n as Yt}from"./numberIsNaN-d0e4b349.js"
import{r as zt}from"./reduceBuffArray-f33baf47.js"
import{r as Ut}from"./rnd-9386cf4f.js"
import{h as Qt}from"./hasClasses-c97db5d7.js"
import{v as Wt}from"./valueText-2413577e.js"
import{g as Jt}from"./guild-eb2d8b6c.js"
import{g as Xt,a as Zt}from"./getTitanString-a2c8b0c8.js"
import{p as te}from"./padZ-5c8671fc.js"
import{c as ee}from"./createTable-13ccbcea.js"
import{t as ae}from"./testQuant-d1b1ec3a.js"
import{g as ne}from"./groupViewStats-39d3064c.js"
import{m as re}from"./myStats-0fbbe5d0.js"
import{a as oe}from"./huntingBuffs-57b8ffea.js"
import{b as ie}from"./simpleCheckbox-33d1f679.js"
import{b as se}from"./bitwiseAnd-b3a8756a.js"
import{s as ue}from"./shouldBeArray-d5fc9247.js"
import"./getBuff-a12f30b7.js"
import"./buffObj-1e65986b.js"
import"./fshOpen-bc09bf81.js"
import"./chunk-f573f88c.js"
import"./createLi-ecf9f87e.js"
import"./createUl-389434dd.js"
import"./cmdExport-c9d580f0.js"
import"./indexAjaxJson-0408c27b.js"
import"./currentGuildId-5214ee19.js"
import"./testRange-ea19cd89.js"
import"./intValue-f6303c59.js"
import"./isChecked-6d3ab351.js"
import"./isSelected-deb32a59.js"
import"./csvSplit-ec367ad9.js"
let le,ce,fe,de,me,he,pe,be,ge
function ve(t){return t}function ye(n){if(function(e){return t.showBuffInfo&&e.some(ve)}(n))return function(){if(le)gt(le,!1)
else{le=e({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div><div></div>"})
const t=a("actionContainer")
bt(le,t.children[2])}return le}()
le&&gt(le,!0)}function ke(t,e){ce?gt(ce,!1):function(t){ce=t.children[3],ce.className="fshBlue",n("CA ",ce),fe=vt(),r(ce,fe),yt(ce," active")}(t),n(e.level,fe)}function we(t,e){e?ke(t,e):ce&&gt(ce,!0)}function Le(t,e){de?gt(de,!1):function(t){de=t.children[4],de.className="fshRed",n("Doubler ",de),me=vt(),r(de,me),yt(de," active")}(t),n(e.level,me)}function Ce(t,e){e?Le(t,e):de&&gt(de,!0)}function De(t,e,a){he?gt(he,!1):function(t){he=t.children[2],n("Damage bonus: ",he),pe=vt(),r(he,pe),yt(he,"%")}(t),n(function(t,e){if(t){const a=Math.min(.01*Math.round(Math.floor(e/5)*Number(t.level)),20)
return kt(a,2).toString()}return"0"}(e,Number(a)),pe)}function Ae(t,e,a){e?De(t,e,a):he&&gt(he,!0)}function Me(t,e){n(Lt(t),e)}function Ve(t,e){be?gt(be,!1):function(t){be=t.children[1],n("Kill Streak: ",be),ge=vt(),r(be,ge)}(t),Me(e,ge)}function $e(t,e,a,n){e||a?Ve(t,n):be&&gt(be,!0)}function Se(t,e){return e.name===t}function Ne(t){const{buffs:e}=GameData.player()
if(e)return e.find(o(Se,t))}const He=["red","orange","yellow"]
let Be,Ge
function Te(t){Dt(t)&&GameData.fetch(u)}function xe(){Ne("Summon Shield Imp")||Ct([At()],[55]).then(Te)}const Ee=["imp-0","imp-1","imp-1"]
function je(t,e){Be?gt(Be,!1):function(t){Be=t.children[0],n("Shield Imps Remaining: ",Be),Ge=vt(),r(Be,Ge),i(Be,"&nbsp;")
const e=vt({className:"xSmallLink",textContent:"Recast"})
r(Be,e),s(e,xe)}(t)
const a=function(t){return t?Number(t.stack):0}(e)
Be.className=function(t){return Ee[t]||"fshGreen"}(a),n(a,Ge)}function Pe(t,e,a){e||a?je(t,e):Be&&gt(Be,!0)}function Ie(t){return 0===t.type}function Oe(t){return vt({textContent:t})}let Re,Fe,_e,qe,Ke,Ye,ze,Ue,Qe,We
function Je(t,e){Re?gt(Re,!1):function(t,e){Re=t.children[5],n("Teleport Cooldown: ",Re),Fe=Oe(e.toString()),r(Re,Fe)}(t,e)}function Xe(){const t=Math.max(Math.ceil((_e-Date.now())/1e3),0)
n(t,Fe),t>0&&setTimeout(Xe,500)}function Ze(t,e){e?Je(t,e):Re&&gt(Re,!0)}function ta(){qe=Ne("Death Dealer"),Ke=Ne("Doubler"),Ye=Ne("Counter Attack"),ze=Ne("Summon Shield Imp"),Ue=function(){const t=GameData.player().teleportCooldown
return t>1&&t}(),Qe=function(){const{dynamic:t}=GameData.realm()
return Mt(t)&&t.some(Ie)}(),We=GameData.player().killStreak}function ea(){!function(){const t=$("#actionlist-shield-imp")
1===t.length&&t.css("background-color",He[t.text()]||"#ad8043")}(),ta()
const t=ye([qe,Ke,Ye,ze,Ue,Qe])
t&&(Pe(t,ze,qe),$e(t,qe,Qe,We),Ae(t,qe,We),we(t,Ye),Ce(t,Ke),Ze(t,Ue))}function aa(t,e){var a
a=e.player.teleportCooldown,Fe&&(_e=Date.now()+1e3*a,Xe())}const na=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"]
let ra=!1
function oa(t){return b(".verb.attack",t)}function ia(t){const e=na.indexOf(t.toUpperCase())
return p(`#actionList .actionListItem.creature.creature-${e}`)}function sa(t){const e=["LEGENDARY","NORMAL"].flatMap(ia),a=ia("CHAMPION"),[n,r]=t?[e,a]:[a,e],o=`url("${v}ui/world/icon_action_attack_`
n.map(oa).filter((t=>null!==t)).forEach((t=>{t.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),t.style.backgroundImage=""})),r.slice(0,8).map(oa).forEach(((t,e)=>{null!==t&&(t.classList.add(`attack-${e+1}`),t.style.backgroundImage=`${o}${e+1}.png")`)}))}function ua(t){if(!t.ctrlKey||!t.shiftKey||"INPUT"===t.target.tagName||"TEXTAREA"===t.target.tagName)return
if(ra||sa(!0),ra=!0,!t.code.match(/(Digit|Numpad)[1-8]/))return
const e=ia("CHAMPION"),a=parseInt(t.code.slice(-1),10)-1
if(a<e.length){const t=oa(e[a])
null!==t&&(g("world","ChampionAttack"),t.click())}}function la(t){!ra||t.ctrlKey&&t.shiftKey||(ra=!1,sa(!1))}const ca=["Breaker","Protection","Master Thief","Protect Gold","Disarm","Duelist","Thievery","Master Blacksmith","Master Crafter","Fury Caster","Master Inventor","Sustain"]
let fa,da=[]
function ma(t){54!==t.id&&26!==t.id||(fa.player.buffs[t.id]=parseInt(t.level,10))}function ha(t){-1===ca.indexOf(t.name)&&(fa.player.enhancements[t.name]=t.value)}function pa(t,e){fa={},fa.combat=e.response.data,fa.combat.inventory_id&&(fa.combat.drop=fa.combat.item.id),fa.player={},fa.player.buffs={},fa.player.enhancements={},function(t){t.player.buffs&&t.player.buffs.forEach(ma)}(e),function(t){t.player.enhancements&&t.player.enhancements.forEach(ha)}(e),fa.time=e.time,da.push(fa),$t("fsh_combatLog",da)}function ba(t,e){0===e.response.response&&pa(0,e)}function ga(t){t&&(da=t),$.subscribe(k,ba)}function va(e){return t.doNotKillList.includes(e.trim())}function ya(t){t.classList.toggle("fshBlue",va(w(t)))}function ka(){const t=a("actionList")
Nt("creature",t).forEach(ya)}function wa(t){const e=GameData.actions()[t]
if(e)return function(t,e){if(va(t))return a("actionList").children[e].children[0].children[1].classList.remove("loading"),!0}(e.data.name,t)}const La={2:function(t){return function(e,a,n,r){wa(n.passback)||t(e,a,n,r)}}}
function Ca(t){return function(e,a,n,r){const o=La[e];(function(t){return t&&L(t)})(o)&&function(t){return C(t)||0===t}(r)?o(t)(e,a,n,r):t(e,a,n,r)}}function Da(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function Aa(t,e,a){return Et({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${t}`,dataset:{tipped:e},htmlFor:a})}function Ma(t){const a=e({className:"fshToggle"}),n=xt({checked:t.prefVal,id:t.checkId,type:"checkbox"})
r(a,n)
const o=Aa(t.onClass,t.onTip,t.checkId)
r(a,o)
const i=Aa(t.offClass,t.offTip,t.checkId)
return r(a,i),r(t.worldName,a),n}let Va,$a,Sa,Na,Ha,Ba,Ga,Ta,xa
function Ea(t){return t?t.toString():"?"}function ja(t){const a=e({className:"fshFsty"})
r(a,function(){const t=e({textContent:"Min Lvl: "})
return $a=Oe(Ea(GameData.realm().minlevel)),r(t,$a),t}()),r(a,function(){const t=e({textContent:"Your Lvl: "})
return Sa=Oe(Ea(GameData.player().level)),r(t,Sa),t}()),r(t,a)}function Pa(t,e,a){const n=Bt({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${t}`,dataset:{tipped:e}})
return r(a,n),n}function Ia(){var e
ja(e=Va),Na=Pa("fshFormGroup","Quick Create Attack Group",e),Ha=Pa("fshQuickBuff","Open Quick Buff Popup",e),Ba=Pa("fshRealmMap","Open Realm Map",e),Ga=Pa("fshTempleOne","Search map in Ultimate FSG",e),function(t){if(y("showSpeakerOnWorld")){const e=y("playNewMessageSound")
Ta=Ma({prefVal:e,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:t})}}(Va),function(e){const a=t.huntingMode
xa=Ma({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(Va)}const Oa=[[t=>t===Ta,function(){d("playNewMessageSound",!y("playNewMessageSound"))}],[t=>t===xa,function(){t.huntingMode=!t.huntingMode,d("huntingMode",t.huntingMode)}]],Ra=[[t=>t===Na,function(t){V(t),GameData.doAction(12,401,{},0)}],[t=>t===Ha,function(){jt(At())}],[t=>t===Ba,function(){window.open(`${S+N}map`,"fsMap")}],[t=>t===Ga,function(){const t=GameData.realm()
window.open(`${H}realms${N}view&realm_id=${t.id}`,"mapUfsg")}]]
function Fa(){Va||(Va=e({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),Ia(),s(Va,Gt(Ra)),h(Va,"change",Gt(Oa)),Tt(Va,a("worldCoord")))}function _a(t,e){$a&&e.b.minlevel&&(Da(),n(e.b.minlevel,$a))}function qa(t,e){Sa&&n(e.b,Sa)}function Ka(t){return!t||!t.response||!t.response.data}let Ya,za,Ua,Qa,Wa,Ja,Xa,Za,tn,en,an,nn,rn,on,sn,un,ln,cn,fn,dn,mn,hn,pn,bn,gn,vn,yn,kn,wn,Ln,Cn,Dn,An,Mn,Vn
function $n(t){return t.player_name}function Sn(t){!function(t){Qa=t.defenders.map($n)}(t),Ya?B("",Ya):Ya=e({className:"body"}),function(t){za=e({className:"fshFloatLeft fshRelicLeftDiv"}),r(Ya,za),t.is_owner&&r(za,Ot(Qa)),Ua=Bt({className:"custombutton",textContent:"Fetch Stats"}),r(za,Ua)}(t)
const n=a("dialog-relic")
r(n,Ya)}const Nn=[t=>"lastUpdate"!==t,t=>!Qa.includes(t),t=>Wa[t].last_login,t=>Number(Wa[t].last_login)<Ja,t=>Number(Wa[t].last_login)>Xa,t=>Wa[t].level<400||Wa[t].level>421,t=>Wa[t].level<441||Wa[t].level>450]
function Hn(t,e){return e(t)}function Bn(t){return Nn.every(o(Hn,t))}function Gn(t){return`<a href="${T}${Wa[t].id}">${t}</a>`}function Tn(t){Wa=t,Ja=x-120,Xa=x-604800
const e=G(Wa).filter(Bn).map(Gn)
i(Ya,`<div class="fshFloatLeft fshRelicLowDiv"><table class="relicT"><thead><tr><th>${e.length.toString()} Offline guild members not at relic:</th></tr></thead><tbody><tr><td>${e.join(" ")}</td></tr></tbody></table></div>`)}function xn(t){Kt(Ua)
const n=y("hideRelicOffline")
t.is_owner&&!n&&qt(!0).then(Tn),i(za,'<table class="relicT"><thead><tr><th colspan="2">Processing</th></tr></thead><tbody><tr><td class="fshGreen" colspan="2" id="ProcessingStatus">Parsing defending guild stats ...</td></tr></tbody><thead><tr><th colspan="2">Assumptions</th></tr></thead><tbody><tr><td colspan="2" class="fshGrey">Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that order) on both the defending group and attacking group.</td></tr></tbody></table>'),Vn=a("ProcessingStatus")
const o=e({className:"fshFloatLeft fshRelicMidDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Defending Guild Stats</th></tr></thead><tbody><tr><td>Relic Count:</td><td id="relicCount">0</td></tr><tr><td>Lead Defender Bonus:</td><td id="LDPercentage">0</td></tr><tr><td>Lead Defender Cloaked:</td><td id="LDCloaked">No</td></tr></tbody><thead><tr><th colspan="2">Other Defender Stats</th></tr></thead><tbody><tr><td>Raw Attack:</td><td class="fshGrey" id="attackValue">0</td></tr><tr><td>Attack w/ buffs:</td><td id="attackValueBuffed">0</td></tr><tr><td>Raw Defense:</td><td class="fshGrey" id="defenseValue">0</td></tr><tr><td>Defense w/buffs:</td><td id="defenseValueBuffed">0</td></tr><tr><td>Raw Armor:</td><td class="fshGrey" id="armorValue">0</td></tr><tr><td>Armor w/ buffs:</td><td id="armorValueBuffed">0</td></tr><tr><td>Raw Damage:</td><td class="fshGrey" id="damageValue">0</td></tr><tr><td>Damage w/ buffs:</td><td id="damageValueBuffed">0</td></tr><tr><td>Raw HP:</td><td class="fshGrey" id="hpValue">0</td></tr><tr><td>HP w/ buffs:</td><td id="hpValueBuffed">0</td></tr><tr><td>Cloaked:</td><td id="defendersCloaked">0</td></tr><tr><td>Processed:</td><td id="defendersProcessed">0</td></tr></tbody></table>'})
r(Ya,o),Za=a("relicCount"),tn=a("LDPercentage"),en=a("LDCloaked"),an=a("attackValue"),nn=a("attackValueBuffed"),rn=a("defenseValue"),on=a("defenseValueBuffed"),sn=a("armorValue"),un=a("armorValueBuffed"),ln=a("damageValue"),cn=a("damageValueBuffed"),fn=a("hpValue"),dn=a("hpValueBuffed"),mn=a("defendersCloaked"),hn=a("defendersProcessed")
const s=e({className:"fshFloatLeft fshRelicRightDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Adjusted defense values</th></tr></thead><tbody><tr><td>DC225:</td><td id="DC225">0</td></tr><tr><td>DC175:</td><td id="DC175">0</td></tr><tr><td colspan="2">&nbsp;</td></tr></tbody><thead><tr><th colspan="2">Attacking Group Stats</th></tr></thead><tbody><tr><td>Raw Group Attack:</td><td class="fshGrey" id="GroupAttack"></td></tr><tr><td>Group Attack w/ buffs:</td><td id="GroupAttackBuffed"></td></tr><tr><td>Raw Group Defense:</td><td class="fshGrey" id="GroupDefense"></td></tr><tr><td>Group Defense w/ buffs:</td><td id="GroupDefenseBuffed"></td></tr><tr><td>Raw Group Armor:</td><td class="fshGrey" id="GroupArmor"></td></tr><tr><td>Group Armor w/ buffs:</td><td id="GroupArmorBuffed"></td></tr><tr><td>Raw Group Damage:</td><td class="fshGrey" id="GroupDamage"></td></tr><tr><td>Group Damage w/ buffs:</td><td id="GroupDamageBuffed"></td></tr><tr><td>Raw Group HP:</td><td class="fshGrey" id="GroupHP"></td></tr><tr><td>Group HP w/ buffs:</td><td id="GroupHPBuffed"></td></tr></tbody></table>'})
r(Ya,s),pn=a("DC225"),bn=a("DC175"),gn=a("GroupAttack"),vn=a("GroupAttackBuffed"),yn=a("GroupDefense"),kn=a("GroupDefenseBuffed"),wn=a("GroupArmor"),Ln=a("GroupArmorBuffed"),Cn=a("GroupDamage"),Dn=a("GroupDamageBuffed"),An=a("GroupHP"),Mn=a("GroupHPBuffed")}let En
function jn(t){const e=E(t),a=j('#pCC img[src*="/relics/"]',e).length
var r
n(a,Za),En=1===(r=a)?1.5:kt(1-r/10,2),n(`${String(100*En)}%`,tn)}function Pn(t,e){return t>10*e||t<e?t:10*e}const In=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function On(t,e,a){t[a[0]]=Number(e[a[1]])}const Rn=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function Fn(t,e,a){t[a[0]]=e[a[1]]||0}function _n(t){if(!t)return
const e=zt(t._skills),a={}
return function(t,e){In.forEach(o(On,t,e))}(a,t),function(t,e){Rn.forEach(o(Fn,t,e))}(a,e),a.superEliteSlayerMultiplier=kt(.002*a.superEliteSlayerLevel,2),Yt(a.armorValue)&&function(t){t.attackValue=Pn(t.attackBonus,t.levelValue),t.defenseValue=Pn(t.defenseBonus,t.levelValue),t.armorValue=Pn(t.armorBonus,t.levelValue),t.damageValue=Pn(t.damageBonus,t.levelValue),t.hpValue=t.hpBonus}(a),a}let qn,Kn,Yn,zn,Un,Qn,Wn,Jn,Xn,Zn,tr,er,ar,nr
function rr(t){return Math.round(t*En)}function or(){Me(qn,an),Me(Yn,rn),Me(zn,sn),Me(Un,ln),Me(Wn,fn),n(Jn,mn),Xn+=1,n(Xn,hn)}function ir(t){const e=function(t){return Math.ceil(tr.attack*(.0025*P(t["Nightmare Visage"],0)))}(t)
tr.attack-=e,function(){const t=Math.ceil(tr.attack*Zn.flinchLevel*.001)
Me(tr.attack-t,vn)}()
const a=function(t){return Math.ceil(tr.defense*(1+.001*P(t.Constitution,0)))}(t)
Me(a+e,kn),function(t){Me(tr.armor+Math.floor(tr.armor*P(t.Sanctuary,0)*.001),Ln)}(t)
const n=function(t,e){return Math.ceil(e*P(t.Fortitude,0)*.001)}(t,a)
!function(t){Me(tr.hp+t,Mn)}(n),function(t,e){const a=Math.ceil((tr.hp+e)*P(t["Chi Strike"],0)*.001),n=Math.ceil(tr.damage*Zn.terrorizeLevel*.001)
Me(tr.damage+a-n,Dn)}(t,n)}function sr(){n("Processing attacking group stats ... ",Vn),er&&(tr.attack-=er.attack,tr.defense-=er.defense,tr.armor-=er.armor,tr.damage-=er.damage,tr.hp-=er.hp),Me(tr.attack,gn),Me(tr.defense,yn),Me(tr.armor,wn),Me(tr.damage,Cn),Me(tr.hp,An)
const t=zt(GameData.player().buffs)
ir(t),function(t){const e=Math.ceil(Kn*P(t.Flinch,0)*.001)
Me(Kn-e,nn)}(t),function(t){const e=Math.ceil(Qn*P(t.Terrorize,0)*.001)
Me(Qn-e,cn)}(t),n("Done.",Vn)}function ur(){n("Processing defending guild stats ... ",Vn),qn+=rr(Zn.attackValue),Yn+=rr(Zn.defenseValue),zn+=rr(Zn.armorValue),Un+=rr(Zn.damageValue),Wn+=rr(Zn.hpValue),or()
const t=Math.ceil(qn*(.0025*Zn.nightmareVisageLevel))
!function(t){Kn=qn-t,Me(Kn,nn)}(t)
const e=Math.ceil(Yn*(1+.001*Zn.constitutionLevel))
!function(t,e){const a=e+t
Me(a,on),Me(Math.ceil(.55*a),pn),Me(Math.ceil(.65*a),bn)}(t,e),Me(zn+Math.floor(zn*Zn.sanctuaryLevel*.001),un)
const a=Wn+function(t){return Math.ceil(t*Zn.fortitudeLevel*.001)}(e)
Me(a,dn),function(t){Qn=Un+Math.ceil(t*Zn.chiStrikeLevel*.001),Me(Qn)}(a),0!==Zn.cloakLevel&&n("Yes",en),GameData.player().hasGroup&&tr?sr():n("Done.",Vn)}function lr(t){const e=_n(t)
qn+=Math.round(e.attackValue*I),Yn+=Math.round(e.defenseValue*I),zn+=Math.round(e.armorValue*I),Un+=Math.round(e.damageValue*I),Wn+=Math.round(e.hpValue*I),0!==e.cloakLevel&&(Jn+=1),or()}function cr(t){Zn=_n(t)}function fr(t){tr=t}function dr(t){er=t}function mr(t){n(t.message,Vn)}function hr(t){const e=E(t),a=b('#pCC a[href*="confirmDisband"]',e)
if(!a)return
const n=function(t){const e=t.previousElementSibling.href,a=[Rt(e).then(fr)]
return function(t){return-1!==t.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML.indexOf('"#000099"')}(t)&&a.push(Ft().then(dr)),a}(a)
return Pt(n)}function pr(t,e){return 0===e?_t(t).then(cr):_t(t).then(lr).catch(mr)}function br(){let t=[F({cmd:"guild",subcmd:"view",guild_id:ar.controlled_by.guild_id}).then(jn)]
return GameData.player().hasGroup&&t.push(F({cmd:"guild",subcmd:"groups"}).then(hr)),t=t.concat(Qa.map(pr)),t}function gr(){xn(ar),qn=0,Yn=0,zn=0,Un=0,Wn=0,Jn=0,Xn=0
const t=br()
It(t,ur)}function vr(t,e){Ka(e)||(ar=e.response.data,ar.defenders.length>0&&(Sn(ar),R(Ua,"click",gr)))}function yr(t){$("#statbar-gold").css("background-color",t)}function kr(){$("#HelperSendTotal").html(Lt(y("currentGoldSentTotal"))),Number(GameData.player().gold)>nr?yr("red"):yr("inherit")}function wr(){nr=y("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${y("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${Lt(nr)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${Lt(y("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",K),kr(),$.subscribe(Y,kr)}function Lr(t){return z({cache:!1,url:"fetchdata.php",data:U(t,{fshrnd:Ut()}),dataType:"json"})}const Cr=[]
function Dr(t){return Ka(t)||Cr.push(t),t}function Ar(t,e){return t===Number(e.response.data.id)}function Mr(t,e){t(e)}function Vr(t,e){const a=Cr.find(o(Ar,t))
return a?function(t){return new Promise((e=>{Q(3,Mr,[e,t])}))}(a):Lr({a:1,id:t,passback:e}).then(Dr)}let $r,Sr,Nr,Hr,Br,Gr
function Tr(t,e){return Wt(W(e,t))}function xr(){var t
$r=GameData.player().level,t=a("statbar-character-tooltip-stats"),Nr=Tr(t,et),Sr=Tr(t,J),Br=Tr(t,X),Hr=Tr(t,Z),Gr=Tr(t,tt)}function Er(t){return`<tr><td colspan="2">${t.name}:</td><td colspan="2">${t.value}</td></tr>`}function jr(t,e,a){return function(t){return`<table><tr><td><img src="${v}creatures/${t.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(t)+function(t,e){return`<tr><td>Class:&nbsp;</td><td width="40%">${t.creature_class}</td><td>Level:&nbsp;</td><td width="40%">${t.level} (your level:<span class="${e}">${$r}</span>)</td></tr>`}(t,a)+function(t){return`<tr><td>Attack:&nbsp;</td><td width="40%">${t.attack} (your defense:<span class="fshYellow">${Sr}</span>)</td><td>Defense:&nbsp;</td><td width="40%">${t.defense} (your attack:<span class="fshYellow">${Nr}</span>)</td></tr>`}(t)+function(t){return`<tr><td>Armor:&nbsp;</td><td width="40%">${t.armor} (your damage:<span class="fshYellow">${Hr}</span>)</td><td>Damage:&nbsp;</td><td width="40%">${t.damage} (your armor:<span class="fshYellow">${Br}</span>)</td></tr>`}(t)+function(t,e){return`<tr><td>HP:&nbsp;</td><td width="40%">${t.hp} (your HP:<span class="fshYellow">${Gr}</span>)(1H: <span class="fshRed">${e}</span>)</td><td>Gold:&nbsp;</td><td width="40%">${t.gold}</td></tr>`}(t,e)+'<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'+function(t){return 0===t.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':t.enhancements.map(Er).join("")}(t)+function(t){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${t.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${t.name}</b></td></tr></table>`}(t)}function Pr(e){if(!Ka(e))return function(e){const a=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let n="fshYellow"
return xr(),$r>e.level&&(n="fshRed"),jr(e,a,n)}(e.response.data)}const Ir=["verb","view","tip-static"]
function Or(t,e){const a=Pr(e)
t.set("content.text",a)}function Rr(t,e,a){return Vr(GameData.actions()[t].data.id,t).then(o(Or,a)),"Loading..."}function Fr(t,e){g("NewMap","CreatureInfo")
const a=nt((n=e).parentNode.children).indexOf(n)
var n,r,i
t.classList.add("fshTip"),r=t,i=o(Rr,a),$(r).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:i},hide:{effect:!1}})}function _r(e){if(!t.showCreatureInfo)return
const{target:a}=e,n=a.parentNode.parentNode.parentNode;(function(t,e){return Qt(Ir,t)&&!at("fshTip",t)&&at("creature",e)})(a,n)&&Fr(a,n)}function qr(){return Jt({subcmd:"scouttower"})}function Kr(t,e){const a=t.insertCell(-1)
return[a.colSpan]=e,e[2]&&(a.className="header"),r(a,e[1]),a}function Yr(t,e,a){const n=t.insertRow(-1)
return a&&(n.className="fshBlue"),function(t,e){e.forEach(o(Kr,t))}(n,e),n}function zr(t,e){Yr(t,e[0],e[1])}function Ur(t,e){e.forEach(o(zr,t))}let Qr,Wr,Jr,Xr,Zr,to,eo,ao,no,ro,oo,io,so,uo,lo,co,fo,mo,ho,po,bo,go,vo,yo,ko,wo,Lo,Co
function Do(){Wr=Oe("Current"),Jr=Oe("Kills"),Xr=Oe("Member"),Zr=Oe("% of Total"),to=Oe("Status"),eo=Oe("Titan HP"),ao=Oe("Total"),no=Oe("Your Guild")}function Ao(){for(;fo.rows.length>7;)fo.deleteRow(7)}function Mo(){const t=vt()
return r(t,ro),yt(t,"/"),r(t,oo),t}function Vo(t){const e=vt()
return r(e,t),yt(e,"%"),e}function $o(){ho=null,mo&&!at("fshHide",mo)&&(gt(mo,!0),n("",ro),n("",oo),n("",io),n("",so),n("",uo),B("",lo),B("",co),Ao())}function So(t){return 0===t.type&&(ho=t.base_creature_id,!0)}function No(){if(mo)gt(mo,!1)
else{const t=a("actionContainer")
mo=e({className:"fshActionBox titanInfo"}),ro=vt(),oo=vt(),io=vt(),so=vt(),uo=vt(),lo=vt(),co=vt(),fo=ee({className:"fshCenter"}),Do(),Ur(fo,[[[[2,eo,!0],[4,no,!0]]],[[[2,Mo()],[4,io]]],[[[2,Wr,!0],[4,Vo(so)]],!0],[[[2,ao,!0],[4,Vo(uo)]],!0],[[[2,to,!0],[4,lo]],!0],[[[6,co]]],[[[2,Xr,!0],[2,Jr,!0],[2,Zr,!0]]]]),r(mo,fo),r(t,mo)}}function Ho(t){return t<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(t){const e=new Date(it+1e3*t)
return`${te(e.getHours())}:${te(e.getMinutes())} ${te(e.getDate())}/${ot[e.getMonth()]}/${e.getFullYear()}`}(t)}</span>`}function Bo(t){return wt(Xt(t.max_hp-t.current_hp,t.kills),2)}function Go(t){return wt(100*t.kills/t.max_hp,2)}function To(t){[[t.current_hp,ro],[t.max_hp,oo],[t.kills,io],[Bo(t),so],[Go(t),uo]].forEach((([t,e])=>{n(t,e)})),B(function(t){return Zt(t.kills,t.max_hp,t.current_hp)}(t),lo),B(Ho(t.cooldown),co)}function xo(t,e){return[[[2,Oe(e.player.name)],[2,Oe(e.kills.toString())],[2,Oe(`${wt(100*e.kills/t.kills,2)}%`)]]]}function Eo(t){return t.realm&&t.creature.base_id===ho&&t.realm===Qr}function jo(t){const e=t.find(Eo)
e&&(To(e),function(t){if(Ao(),!t.contributors)return
const e=t.contributors.map(o(xo,t))
Ur(fo,e)}(e))}function Po(e){return t.showTitanInfo&&Mt(e)&&e.some(So)}function Io(t,e){(function(t){return t&&t.s&&Mt(t.r)})(e)&&(jo(e.r),Po(GameData.realm().dynamic)?po=window.setTimeout(t,3e4):$o())}function Oo(){rt(qr).then(o(Io,Oo))}function Ro(t){po&&(window.clearTimeout(po),po=null),Po(t)?(No(),Oo()):$o()}function Fo(t){var e
t.dynamic&&(e=t.name,Qr=e,Ro(t.dynamic))}function _o(t,e){(function(t){return t.realm&&t.realm.name})(e)&&Fo(e.realm)}function qo(t){const e=t.response.response,a=t.response.msg
let n
if(0!==e){const t=a.indexOf("<")
n=-1!==t?a.substring(0,t):a}else n=`You purchased ${t.response.data.name} for ${Lt(t.response.data.cost)} gold.`
i(Lo,`${n}<br>`)}function Ko(){GameData.doAction(14,3,{id:bo.id,item_id:bo.itemId},0),vo.close()}function Yo(){const t=ae(ko.value)
if(!t)return
const e=[]
for(let a=1;a<t;a+=1)e.push(Lr({a:14,d:0,id:bo.id,item_id:bo.itemId}).then(qo))
It(e,Ko)}function zo(){yo?n("",Lo):(yo=e({className:"fshClear",textContent:"Select how many to quick-buy:"}),ko=xt({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),r(yo,ko),wo=Bt({textContent:"Quick-buy"}),s(wo,Yo),r(yo,wo),Lo=e(),r(yo,Lo),r(go,yo))}function Uo(t,e){bo=e,go=go||a("shopDialogConfirm"),go&&(vo=vo||$(go).data("hcsWorldDialogShopConfirm"),vo&&zo())}function Qo(t){Co[t.name]?Co[t.name].seen&&(Co[t.name].seen+=1):(Co[t.name]={seen:1},function(t,e){e.creature_class=t.creature_class,e.image_id=t.image_id,e.level=Number(t.level),e.type=t.type}(t,Co[t.name]))}function Wo(t,e,a){return e?t(e,a):a}function Jo(t,e){const a=t||{}
return a.min=Wo(Math.min,a.min,e),a.max=Wo(Math.max,a.max,e),a}const Xo=["attack","armor","damage","defense","hp"]
function Zo(t,e,a){const n=Jo(e[a],Number(t[a]));(function(t,e){return!t||t.min!==e.min||t.max!==e.max})(e[a],n)&&(e[a]=n)}function ti(t,e){t[e.name]=Jo(t[e.name],Number(e.value))}function ei(t){Co||(Co={}),Qo(t),function(t,e){Xo.forEach(o(Zo,t,e))}(t,Co[t.name]),function(t,e){(function(t){return t.enhancements&&t.enhancements.length>0})(t)&&(e.enhancements=e.enhancements||{},t.enhancements.forEach(o(ti,e.enhancements)))}(t,Co[t.name]),$t("fsh_monsterLog",Co)}function ai(t){Co=t||{}}const ni=[]
function ri(e){var a
Ka(e)||(g("NewMap","MonsterLog"),a=e.response.data,t.showMonsterLog&&ei(a))}function oi(t,e){return t.id===e.id}function ii(t,e){6!==t.type||function(t){if(ni.find(o(oi,t.data)))return!0
ni.push(t.data)}(t)||Vr(t.data.id,e).then(ri)}function si(){t.showMonsterLog&&GameData.actions().forEach(ii)}function ui(t){const e=E(t),a=ne(e)
return{r:{attributes:[{value:a.attack},{value:a.defense},{value:a.armor},{value:a.damage},{value:a.hp}]}}}function li(t){return F({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:t}).then(ui)}function ci(t){return Jt(U({subcmd:"groups"},t))}function fi(t){return ci({subcmd2:"viewstats",group_id:t})}function di(){return ci({subcmd2:"view"})}function mi(t){return t.numberOfCreatureHitsTillDead-t.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}const hi=[[t=>"-"===t.playerHits&&"-"===t.creatureHits,()=>"Unresolved"],[t=>"-"===t.playerHits,()=>"Player dies"],[t=>1===t.playerHits,t=>`Player 1 hits${mi(t)}`],[t=>t.playerHits>1,t=>`Player > 1 hits${mi(t)}`]]
function pi(t,e){return e[0](t)}function bi(t){t.playerHits=function(t){return"-"===t.numberOfCreatureHitsTillDead?t.numberOfHitsRequired:function(t){return"-"===t.numberOfHitsRequired||t.numberOfHitsRequired>t.numberOfCreatureHitsTillDead}(t)?"-":t.numberOfHitsRequired}(t),t.creatureHits=function(t){return"-"===t.numberOfHitsRequired?t.numberOfCreatureHitsTillDead:function(t){return"-"===t.numberOfCreatureHitsTillDead||t.numberOfCreatureHitsTillDead>t.numberOfHitsRequired}(t)?"-":t.numberOfCreatureHitsTillDead}(t),t.fightStatus=function(t){const e=hi.find(o(pi,t))
return e?e[1](t):"Unknown"}(t)}function gi(t){t.creatureHitByHowMuch>=0?function(t){const e=t.generalVariable*t.creature.damage
e<t.overallArmorValue?t.numberOfCreatureHitsTillDead=t.overallHPValue:t.numberOfCreatureHitsTillDead=Math.ceil(t.overallHPValue/(e-t.overallArmorValue))}(t):t.numberOfCreatureHitsTillDead="-"}function vi(t){!function(t){const e=function(t){return t.callback.groupExists?t.callback.groupArmorValue:t.player.armorValue}(t)
t.overallArmorValue=e+Math.floor(t.player.armorValue*t.player.sanctuaryLevel*.001)}(t),function(t){t.player.sanctuaryLevel>0&&(t.extraNotes+=`Sanc Bonus Armor = ${Math.floor(t.player.armorValue*t.player.sanctuaryLevel*.001)}<br>`)}(t),function(t){t.terrorizeEffect=Math.floor(t.creature.damage*t.player.terrorizeLevel*.001)}(t),function(t){t.player.terrorizeLevel>0&&(t.extraNotes+=`Terrorize Creature Damage Effect = ${-1*t.terrorizeEffect}<br>`)}(t),t.creature.damage-=t.terrorizeEffect,function(t){t.creatureDamageDone=Math.ceil(t.generalVariable*t.creature.damage-t.overallArmorValue+t.overallHPValue)}(t),gi(t)}function yi(t){const e=function(t){return t.callback.groupExists?t.callback.groupAttackValue:t.player.attackValue}(t)
t.player.darkCurseLevel>0&&(t.extraNotes+=`DC Bonus Attack = ${Math.floor(t.creature.defense*t.player.darkCurseLevel*.002)}<br>`),t.nightmareVisageAttackMovedToDefense=Math.floor((e+t.counterAttackBonusAttack)*t.player.nightmareVisageLevel*.0025),t.player.nightmareVisageLevel>0&&(t.extraNotes+=`NMV Attack moved to Defense = ${t.nightmareVisageAttackMovedToDefense}<br>`),t.overallAttackValue=e+t.counterAttackBonusAttack-t.nightmareVisageAttackMovedToDefense,t.hitByHowMuch=function(t){const e=t.creature.defense-t.creature.defense*t.player.darkCurseLevel*.002
return 3===t.combatEvaluatorBias?t.overallAttackValue-Math.ceil(e)-50:t.overallAttackValue-Math.ceil(t.attackVariable*e)}(t)}function ki(t){t.lowestCALevelToStillHit=Math.max(Math.ceil((t.counterAttackBonusAttack-t.hitByHowMuch+1)/t.player.attackValue/.0025),0),t.lowestCALevelToStillKill=Math.max(Math.ceil((t.counterAttackBonusDamage-t.damageDone+1)/t.player.damageValue/.0025),0)}function wi(t){ki(t),t.lowestFeasibleCALevel=Math.max(t.lowestCALevelToStillHit,t.lowestCALevelToStillKill),t.extraNotes+=`Lowest CA to still 1-hit this creature = ${t.lowestFeasibleCALevel}<br>`,0!==t.lowestFeasibleCALevel&&function(t){t.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*t.player.attackValue*t.lowestFeasibleCALevel),t.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*t.player.damageValue*t.lowestFeasibleCALevel),t.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${t.extraAttackAtLowestFeasibleCALevel} / ${t.extraDamageAtLowestFeasibleCALevel}<br>`}(t),t.extraStaminaPerHitAtLowestFeasibleCALevel=function(t){return t.player.counterAttackLevel>0?Math.ceil(.0025*(1+t.player.doublerLevel/50)*t.lowestFeasibleCALevel):0}(t),t.extraStaminaPerHitAtLowestFeasibleCALevel<t.extraStaminaPerHit?t.extraNotes+=`Extra Stam Used at this lowered CA level = ${t.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:t.extraNotes+="No reduction of stam used at the lower CA level<br>"}function Li(t){(function(t){return t.player.counterAttackLevel>0&&1===t.numberOfHitsRequired})(t)&&wi(t),function(t){return"-"===t.numberOfHitsRequired||1!==t.numberOfHitsRequired}(t)&&function(t){ki(t),function(t){t.lowestCALevelToStillHit>175?t.extraNotes+="Even with CA175 you cannot hit this creature<br>":0!==t.lowestCALevelToStillHit&&(t.extraNotes+=`You need a minimum of CA${t.lowestCALevelToStillHit} to hit this creature<br>`)}(t),function(t){t.lowestCALevelToStillKill>175?t.extraNotes+="Even with CA175 you cannot 1-hit kill this creature<br>":0!==t.lowestCALevelToStillKill&&(t.extraNotes+=`You need a minimum of CA${t.lowestCALevelToStillKill} to 1-hit kill this creature<br>`)}(t)}(t)}function Ci(t){!function(t){const e=function(t){return t.callback.groupExists?t.callback.groupHPValue:t.player.hpValue}(t),{fortitudeLevel:a}=t.player
t.fortitudeExtraHPs=Math.floor(e*a*.001),a>0&&(t.extraNotes+=`Fortitude Bonus HP = ${t.fortitudeExtraHPs}<br>`),t.overallHPValue=e+t.fortitudeExtraHPs}(t),function(t){const{chiStrikeLevel:e}=t.player
t.chiStrikeExtraDamage=Math.floor(t.overallHPValue*e*.001),e>0&&(t.extraNotes+=`Chi Strike Bonus Damage = ${t.chiStrikeExtraDamage}<br>`)}(t)
const e=function(t){return t.callback.groupExists?t.callback.groupDamageValue:t.player.damageValue}(t)
if(t.overallDamageValue=e+t.deathDealerBonusDamage+t.counterAttackBonusDamage+t.holyFlameBonusDamage+t.chiStrikeExtraDamage,t.damageDone=Math.floor(t.overallDamageValue-(t.generalVariable*t.creature.armor+t.hpVariable*t.creature.hp)),t.hitByHowMuch>0){let e=1
t.overallDamageValue>=t.generalVariable*t.creature.armor&&(e=t.overallDamageValue-t.generalVariable*t.creature.armor),t.numberOfHitsRequired=Math.ceil(t.hpVariable*t.creature.hp/e)}else t.numberOfHitsRequired="-"}function Di(t){return t.callback.groupExists?t.callback.groupDefenseValue:t.player.defenseValue}function Ai(t){t.overallDefenseValue=Di(t)+Math.floor(Di(t)*t.player.constitutionLevel*.001)+t.nightmareVisageAttackMovedToDefense,function(t){t.player.constitutionLevel>0&&(t.extraNotes+=`Constitution Bonus Defense = ${Math.floor(Di(t)*t.player.constitutionLevel*.001)}<br>`)}(t),function(t){t.player.flinchLevel>0&&(t.extraNotes+=`Flinch Bonus Attack Reduction = ${Math.floor(t.creature.attack*t.player.flinchLevel*.001)}<br>`)}(t),t.creatureHitByHowMuch=Math.floor(t.attackVariable*t.creature.attack-t.creature.attack*t.player.flinchLevel*.001-t.overallDefenseValue),3===t.combatEvaluatorBias&&(t.creatureHitByHowMuch=Math.floor(t.creature.attack-t.creature.attack*t.player.flinchLevel*.001-t.overallDefenseValue-50))}function Mi(t){t.extraNotes="",function(t){t.player.superEliteSlayerLevel>0&&(t.extraNotes+=`SES Stat Reduction Multiplier = ${t.player.superEliteSlayerMultiplier}<br>`)}(t),function(t){t.holyFlameBonusDamage=0,"Undead"===t.creature.class&&(t.holyFlameBonusDamage=Math.max(Math.floor((t.player.damageValue-t.creature.armor)*t.player.holyFlameLevel*.002),0),t.player.holyFlameLevel>0&&(t.extraNotes+=`HF Bonus Damage = ${t.holyFlameBonusDamage}<br>`))}(t),function(t){t.deathDealerBonusDamage=Math.floor(t.player.damageValue*(Math.min(.01*Math.floor(t.player.killStreakValue/5)*t.player.deathDealerLevel,20)/100))}(t),function(t){t.counterAttackBonusAttack=Math.floor(.0025*t.player.attackValue*t.player.counterAttackLevel),t.counterAttackBonusDamage=Math.floor(.0025*t.player.damageValue*t.player.counterAttackLevel)}(t),function(t){t.extraStaminaPerHit=0,t.player.counterAttackLevel>0&&(t.extraStaminaPerHit=Math.ceil(.0025*(1+t.player.doublerLevel/50)*t.player.counterAttackLevel))}(t),function(t){t.player.deathDealerLevel>0&&(t.extraNotes+=`DD Bonus Damage = ${t.deathDealerBonusDamage}<br>`)}(t),function(t){t.player.counterAttackLevel>0&&(t.extraNotes+=`CA Bonus Attack/Damage = ${t.counterAttackBonusAttack} / ${t.counterAttackBonusDamage}<br>CA Extra Stam Used = ${t.extraStaminaPerHit}<br>`)}(t)}let Vi,$i,Si,Ni,Hi,Bi,Gi,Ti,xi,Ei
function ji(){return va($i)?"Remove from do not kill list":"Add to the do not kill list"}function Pi(){n(ji(),Si)}function Ii(){const e=t.doNotKillList.indexOf($i);-1===e?t.doNotKillList.push($i):t.doNotKillList.splice(e,1),Pi(),d("doNotKillList",t.doNotKillList.join()),ka()}function Oi(){Si?Pi():function(){Si=Bt({className:"fshBl",textContent:ji(),type:"button"})
const t=e({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
r(t,Si),r(Vi,t),s(Si,Ii)}()}function Ri(t,e){!function(t){if(!Vi){const e=W("body",t)
1===e.length&&([Vi]=e)}}(e),Vi&&($i=t.trim(),Oi())}function Fi(){Bi||(Hi||(Hi=e(),r(Ni,Hi),r(Ni,e({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Bi=e(),r(Hi,Bi))}function _i(t){Fi(),B(t,Bi)}function qi(t){Gi||(Fi(),Gi=e(),r(Hi,Gi)),B(t,Gi)}function Ki(t,e){const a={name:t.name,class:t.creature_class,attack:Number(t.attack),defense:Number(t.defense),armor:Number(t.armor),damage:Number(t.damage),hp:Number(t.hp)}
return function(t,e,a){3===a&&(e.attack-=Math.ceil(e.attack*t),e.defense-=Math.ceil(e.defense*t),e.armor-=Math.ceil(e.armor*t),e.damage-=Math.ceil(e.damage*t),e.hp-=Math.ceil(e.hp*t))}(e,a,t.type),a}function Yi(e,a,n){const r={}
r.callback=n,r.player=_n(a),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(r),r.creature=Ki(e.response.data,r.player.superEliteSlayerMultiplier),function(t){Mi(t),yi(t),Ci(t),Ai(t),vi(t),bi(t),Li(t)}(r),r.evaluatorHTML=function(t){return`<table width="100%"><tbody>${function(t){return`<tr><td bgcolor="#CD9E4B" colspan="4" align="center">${function(t){return t.callback.groupExists?"Group ":""}(t)}Combat Evaluation</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Will I hit it? </td><td align="left">${function(t){return t.hitByHowMuch>0?"Yes":"No"}(t)}</td><td align="right"><span style="color:#333333">Extra Attack: </td><td align="left">( ${t.hitByHowMuch} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333"># Hits to kill it? </td><td align="left">${t.numberOfHitsRequired}</td><td align="right"><span style="color:#333333">Extra Damage: </td><td align="left">( ${t.damageDone} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Will I be hit? </td><td align="left">${function(t){return t.creatureHitByHowMuch>=0?"Yes":"No"}(t)}</td><td align="right"><span style="color:#333333">Extra Defense: </td><td align="left">( ${-1*t.creatureHitByHowMuch} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333"># Hits to kill me? </td><td align="left">${t.numberOfCreatureHitsTillDead}</td><td align="right"><span style="color:#333333">Extra Armor + HP: </td><td align="left">( ${-1*t.creatureDamageDone} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333"># Player Hits? </td><td align="left">${t.playerHits}</td><td align="right"><span style="color:#333333"># Creature Hits? </td><td align="left">${t.creatureHits}</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Fight Status: </span></td><td align="left" colspan="3"><span>${t.fightStatus}</span></td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Notes: </span></td><td align="left" colspan="3"><span style="font-size:x-small;">${t.extraNotes}</span></td></tr>`}(t)}</tbody></table>`}(r),n.groupExists?qi(r.evaluatorHTML):_i(r.evaluatorHTML)}function zi(t){return t.members[0].name===At()}function Ui(t){if(Mt(t.r))return t.r.find(zi).id}function Qi(t,e,a){if(!a.r||!a.r.attributes)return
const n=a.r.attributes
Yi(t,e,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}function Wi(t,e,a){a&&function(t){return rt(fi,li,t)}(a).then(o(Qi,t,e))}function Ji(t,e){rt(di).then(Ui).then(o(Wi,t,e))}function Xi(t,e){t.player.hasGroup&&Ji(t,e),Yi(t,e,{groupExists:!1})}function Zi(t,e){Ni||(Ni=a("dialog-viewcreature")),Ni&&(_i(""),qi(""),function(t){return t.response&&t.response.data}(e)&&(Ri(e.response.data.name,Ni),re(!0).then(o(Xi,e))))}function ts(){const e=[,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
Mt(e)&&([Ti,xi]=e)}function es(e){"enabledHuntingMode"===e.target.name&&(t.enabledHuntingMode=e.target.value,d("enabledHuntingMode",t.enabledHuntingMode),ts(),GameData.fetch(u))}function as(t){const e=W("verbs",t)
1===e.length&&Kt(e[0])}function ns(){if(!Ei)return
const t=a("actionList")
Nt("player",t).forEach(as)}const rs={hideSubLvlCreature:function(){t.hideSubLvlCreature=!t.hideSubLvlCreature,d("hideSubLvlCreature",t.hideSubLvlCreature),GameData.fetch(ft)},hidePlayerActions:function(){Ei=!Ei,d("hidePlayerActions",Ei),GameData.fetch(ft)},showCreatureInfo:function(){t.showCreatureInfo=!t.showCreatureInfo,d("showCreatureInfo",t.showCreatureInfo)},showHuntingBuffs:function(){t.showBuffs=!t.showBuffs,d("showHuntingBuffs",t.showBuffs),GameData.fetch(u)},showMonsterLog:function(){t.showMonsterLog=!t.showMonsterLog,d("showMonsterLog",t.showMonsterLog)},showTitanInfo:function(){t.showTitanInfo=!t.showTitanInfo,d("showTitanInfo",t.showTitanInfo),Ro(GameData.realm().dynamic)},showBuffInfo:function(){t.showBuffInfo=!t.showBuffInfo,d("showBuffInfo",t.showBuffInfo),ea()}}
function os(t){const e=rs[t.target.name]
L(e)&&(t.target.blur(),e(t))}function is(){const t=e({className:"fshCenter fshFten"}),n=e({id:"fshWorldPrefs",innerHTML:`${ie("showCreatureInfo")}&nbsp;&nbsp;${ie("showMonsterLog")}&nbsp;&nbsp;${ie("showTitanInfo")}&nbsp;&nbsp;${ie("showBuffInfo")}<br>${ie("hideSubLvlCreature")}&nbsp;&nbsp;${ie("hidePlayerActions")}&nbsp;&nbsp;${oe()}`})
s(n,os),h(n,"change",es),r(t,n)
const o=e()
r(t,o)
const i=a("worldContainerBelow").children[0]
return Tt(t,i),o}function ss(t,e){return t[e.name]=!0,t}function us(t,e,a){return t[a.trim()]||e.push(a),e}function ls(t){B("",t)}function cs(t,e){const a=e.b.reduce(ss,{}),n=Ti.reduce(o(us,a),[])
n.length>0?function(t,e){B(`You are missing some ${xi} hunting buffs<br>(${e.join(", ")})`,t)}(t,n):ls(t)}function fs(e,a,n){Ti&&function(e,a,n){t.showBuffs?cs(e,n):ls(e)}(e,0,n)}const ds=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function ms(){var e
t.combatEvaluatorBias=y("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,ds[e]?ds[e].generalVariable:1.1053),t.hpVariable=function(t){return ds[t]?ds[t].hpVariable:1.1}(t.combatEvaluatorBias)}function hs(t,e){return 6!==e.type||(0!==e.data.creature_type||e.data.level>=t)}function ps(t){const e=dt(t)
return function(t){return!t||!t.actions||0===t.actions.length}(e)?t:(e.actions=e.actions.filter(o(hs,function(t){return t.realm&&t.realm.minlevel||GameData.realm().minlevel}(e))),JSON.stringify(e))}function bs(e,a){t.hideSubLvlCreature&&function(t){return t.data&&t.data.d&&se(t.data.d,ft)}(a)&&(e.dataFilter=ps)}function gs(e){t[e[0]]=ue(e[1])}function vs(e){t[e]=ue(e)}function ys(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(gs),["doNotKillList"].forEach(vs)}function ks(e){t[e[0]]=y(e[1])}function ws(e){t[e]=y(e)}function Ls(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showBuffs","showHuntingBuffs"]].forEach(ks),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(ws)}function Cs(t){$(`#actionList li.creature-${t.toString()} a.create-group`).hide()}const Ds=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function As(t,e){var a
y(t)&&(a=e+1,$.subscribe(D,o(Cs,a)),Cs(e+1))}function Ms(t,e){"ACT_REPAIR"===e&&GameData.fetch(ht+u+pt+ft)}function Vs(t){V(t.target)}const $s=[function(){ms(),ys(),Ls()
const e=is()
$.ajaxPrefilter("JSON",bs),t.hideSubLvlCreature&&GameData.fetch(ft),function(e){ts()
const a=o(fs,e)
$.subscribe(l,a),t.showBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(e),Ei=y("hidePlayerActions"),$.subscribe(D,ns),ns()},function(){_(),q&&wr()},function(){$.subscribe(ct,Zi)},function(){Ds.forEach(As)},function(){y("enableCreatureColoring")&&r(document.body,St("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(D,ka),ka(),function(){const t=GameData.doAction
GameData.doAction=Ca(t)}()},function(){Vt("fsh_monsterLog").then(ai),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",si),si()},function(){$.subscribe(mt,Ms)},function(){y("keepLogs")&&Vt("fsh_combatLog").then(ga)},function(){window.initialGameData&&_o(0,window.initialGameData),$.subscribe(`${st} ${ut}`,_o)},function(){$.subscribe(lt,Uo)},function(){$.subscribe(O,vr)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){V("#mapTooltip")},function(){Fa(),$.subscribe(A,_a),$.subscribe(M,qa)},function(){ea(),$.subscribe(`${l} ${c}`,ea),$.subscribe(f,aa)},function(){s(a("buffList"),Vs)},function(){h(a("actionList"),"mouseover",_r)},function(){const t=m("body")[0]
h(t,"keydown",ua),h(t,"keyup",la)}]
function Ss(){Ht($s)}export default Ss
//# sourceMappingURL=newMap-cbd8aee2.js.map
