import{c as e,m as t,z as a,A as n,h as r,t as o,i,o as s,aJ as u,aK as l,aL as c,aM as f,_ as d,b as m,f as h,E as p,D as b,T as g,au as v,I as y,aN as k,C as w,aG as L,aO as C,aP as D,aQ as A,aR as M,aS as V,aT as S,az as N,aI as H,B,aU as G,a4 as T,V as x,v as E,ac as j,a5 as P,aV as I,aW as O,Q as R,u as F,aX as _,aY as q,aZ as K,a_ as Y,aF as z,q as U,a as Q,M as W,a$ as J,b0 as X,b1 as Z,b2 as ee,b3 as te,l as ae,N as ne,$ as re,af as oe,a7 as ie,b4 as se,b5 as ue,b6 as le,b7 as ce,b8 as fe,b9 as de,ba as me,bb as he,bc as pe}from"./calfSystem-9942149b.js"
import{i as be}from"./insertElementAfter-e9d48222.js"
import{t as ge}from"./toggleForce-aa6abab1.js"
import{c as ve}from"./createSpan-84310061.js"
import{i as ye}from"./insertTextBeforeEnd-c85738b7.js"
import{a as ke,r as we}from"./roundToString-3f9085b8.js"
import{a as Le}from"./addCommas-5b74e836.js"
import{d as Ce,q as De}from"./quickbuffSuccess-3bac4d14.js"
import{p as Ae}from"./playerName-b83afe17.js"
import{i as Me}from"./isArray-a3f24c76.js"
import{g as Ve,s as $e}from"./idb-6116f2a7.js"
import{c as Se}from"./createStyle-6a43018a.js"
import{g as Ne}from"./getArrayByClassName-2c97d5ec.js"
import{e as He}from"./executeAll-f002e740.js"
import{c as Be}from"./createButton-c32b17ee.js"
import{e as Ge}from"./eventHandler5-e7aa5fb9.js"
import{i as Te}from"./insertElementBefore-23d4e956.js"
import{c as xe}from"./createInput-9941d334.js"
import{c as Ee}from"./createLabel-74c26aac.js"
import{o as je}from"./openQuickBuffByName-4f92c0f7.js"
import{a as Pe}from"./all-0d44a747.js"
import{a as Ie}from"./allthen-0f84efe6.js"
import{d as Oe,g as Re}from"./getGroupStats-dee5a421.js"
import{g as Fe}from"./getMercStats-260531e5.js"
import{g as _e}from"./getProfile-ccaddef4.js"
import{g as qe}from"./getMembrList-e6e94af7.js"
import{h as Ke}from"./hideElement-0d0f9065.js"
import{n as Ye}from"./numberIsNaN-885a5556.js"
import{r as ze}from"./reduceBuffArray-d0911495.js"
import{r as Ue}from"./rnd-2b9883c8.js"
import{h as Qe}from"./hasClasses-2ed35c8a.js"
import{v as We}from"./valueText-5ef907af.js"
import{g as Je}from"./guild-da1d82bb.js"
import{g as Xe,a as Ze}from"./getTitanString-29c7726c.js"
import{p as et}from"./padZ-7f619ae9.js"
import{c as tt}from"./createTable-4b731acb.js"
import{t as at}from"./testQuant-e1e6596f.js"
import{g as nt}from"./groupViewStats-41d43de5.js"
import{m as rt}from"./myStats-5331506c.js"
import{a as ot}from"./huntingBuffs-56e7feda.js"
import{b as it}from"./simpleCheckbox-b43d710c.js"
import{b as st}from"./bitwiseAnd-9e46ad65.js"
import{s as ut}from"./shouldBeArray-e5f9dc4e.js"
import"./getBuff-afb49e48.js"
import"./buffObj-b66afe66.js"
import"./fshOpen-72d27290.js"
import"./chunk-4bfbd415.js"
import"./createLi-baceddd7.js"
import"./createUl-e3296e95.js"
import"./cmdExport-ded2df3e.js"
import"./indexAjaxJson-21b8f9a5.js"
import"./currentGuildId-71878d37.js"
import"./testRange-4d13512e.js"
import"./intValue-fefb28df.js"
import"./isChecked-987a8a1c.js"
import"./isSelected-7dbc97c6.js"
import"./csvSplit-4a4cc559.js"
let lt,ct,ft,dt,mt,ht,pt,bt,gt
function vt(e){return e}function yt(n){if(function(t){return e.showBuffInfo&&t.some(vt)}(n))return function(){if(lt)ge(lt,!1)
else{lt=t({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div><div></div>"})
const e=a("actionContainer")
be(lt,e.children[2])}return lt}()
lt&&ge(lt,!0)}function kt(e,t){ct?ge(ct,!1):function(e){ct=e.children[3],ct.className="fshBlue",n("CA ",ct),ft=ve(),r(ct,ft),ye(ct," active")}(e),n(t.level,ft)}function wt(e,t){t?kt(e,t):ct&&ge(ct,!0)}function Lt(e,t){dt?ge(dt,!1):function(e){dt=e.children[4],dt.className="fshRed",n("Doubler ",dt),mt=ve(),r(dt,mt),ye(dt," active")}(e),n(t.level,mt)}function Ct(e,t){t?Lt(e,t):dt&&ge(dt,!0)}function Dt(e,t,a){ht?ge(ht,!1):function(e){ht=e.children[2],n("Damage bonus: ",ht),pt=ve(),r(ht,pt),ye(ht,"%")}(e),n(function(e,t){if(e){const a=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return ke(a,2).toString()}return"0"}(t,Number(a)),pt)}function At(e,t,a){t?Dt(e,t,a):ht&&ge(ht,!0)}function Mt(e,t){n(Le(e),t)}function Vt(e,t){bt?ge(bt,!1):function(e){bt=e.children[1],n("Kill Streak: ",bt),gt=ve(),r(bt,gt)}(e),Mt(t,gt)}function $t(e,t,a,n){t||a?Vt(e,n):bt&&ge(bt,!0)}function St(e,t){return t.name===e}function Nt(e){const{buffs:t}=GameData.player()
if(t)return t.find(o(St,e))}const Ht=["red","orange","yellow"]
let Bt,Gt
function Tt(e){De(e)&&GameData.fetch(u)}function xt(){Nt("Summon Shield Imp")||Ce([Ae()],[55]).then(Tt)}const Et=["imp-0","imp-1","imp-1"]
function jt(e,t){Bt?ge(Bt,!1):function(e){Bt=e.children[0],n("Shield Imps Remaining: ",Bt),Gt=ve(),r(Bt,Gt),i(Bt,"&nbsp;")
const t=ve({className:"xSmallLink",textContent:"Recast"})
r(Bt,t),s(t,xt)}(e)
const a=function(e){return e?Number(e.stack):0}(t)
Bt.className=function(e){return Et[e]||"fshGreen"}(a),n(a,Gt)}function Pt(e,t,a){t||a?jt(e,t):Bt&&ge(Bt,!0)}function It(e){return 0===e.type}function Ot(e){return ve({textContent:e})}let Rt,Ft,_t,qt,Kt,Yt,zt,Ut,Qt,Wt
function Jt(e,t){Rt?ge(Rt,!1):function(e,t){Rt=e.children[5],n("Teleport Cooldown: ",Rt),Ft=Ot(t.toString()),r(Rt,Ft)}(e,t)}function Xt(){const e=Math.max(Math.ceil((_t-Date.now())/1e3),0)
n(e,Ft),e>0&&setTimeout(Xt,500)}function Zt(e,t){t?Jt(e,t):Rt&&ge(Rt,!0)}function ea(){qt=Nt("Death Dealer"),Kt=Nt("Doubler"),Yt=Nt("Counter Attack"),zt=Nt("Summon Shield Imp"),Ut=function(){const e=GameData.player().teleportCooldown
return e>1&&e}(),Qt=function(){const{dynamic:e}=GameData.realm()
return Me(e)&&e.some(It)}(),Wt=GameData.player().killStreak}function ta(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",Ht[e.text()]||"#ad8043")}(),ea()
const e=yt([qt,Kt,Yt,zt,Ut,Qt])
e&&(Pt(e,zt,qt),$t(e,qt,Qt,Wt),At(e,qt,Wt),wt(e,Yt),Ct(e,Kt),Zt(e,Ut))}function aa(e,t){var a
a=t.player.teleportCooldown,Ft&&(_t=Date.now()+1e3*a,Xt())}const na=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"]
let ra=!1
function oa(e){return b(".verb.attack",e)}function ia(e){const t=na.indexOf(e.toUpperCase())
return p(`#actionList .actionListItem.creature.creature-${t}`)}function sa(e){const t=["LEGENDARY","NORMAL"].flatMap(ia),a=ia("CHAMPION"),[n,r]=e?[t,a]:[a,t],o=`url("${v}ui/world/icon_action_attack_`
n.map(oa).filter((e=>null!==e)).forEach((e=>{e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""})),r.slice(0,8).map(oa).forEach(((e,t)=>{null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${o}${t+1}.png")`)}))}function ua(e){if(!e.ctrlKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(ra||sa(!0),ra=!0,!e.code.match(/(Digit|Numpad)[1-8]/))return
const t=ia("CHAMPION"),a=parseInt(e.code.slice(-1),10)-1
if(a<t.length){const e=oa(t[a])
null!==e&&(g("world","ChampionAttack"),e.click())}}function la(e){!ra||e.ctrlKey&&e.shiftKey||(ra=!1,sa(!1))}const ca=["Breaker","Protection","Master Thief","Protect Gold","Disarm","Duelist","Thievery","Master Blacksmith","Master Crafter","Fury Caster","Master Inventor","Sustain"]
let fa,da=[]
function ma(e){54!==e.id&&26!==e.id||(fa.player.buffs[e.id]=parseInt(e.level,10))}function ha(e){-1===ca.indexOf(e.name)&&(fa.player.enhancements[e.name]=e.value)}function pa(e,t){fa={},fa.combat=t.response.data,fa.combat.inventory_id&&(fa.combat.drop=fa.combat.item.id),fa.player={},fa.player.buffs={},fa.player.enhancements={},function(e){e.player.buffs&&e.player.buffs.forEach(ma)}(t),function(e){e.player.enhancements&&e.player.enhancements.forEach(ha)}(t),fa.time=t.time,da.push(fa),$e("fsh_combatLog",da)}function ba(e,t){0===t.response.response&&pa(0,t)}function ga(e){e&&(da=e),$.subscribe(k,ba)}function va(t){return e.doNotKillList.includes(t.trim())}function ya(e){e.classList.toggle("fshBlue",va(w(e)))}function ka(){const e=a("actionList")
Ne("creature",e).forEach(ya)}function wa(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(va(e))return a("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const La={2:function(e){return function(t,a,n,r){wa(n.passback)||e(t,a,n,r)}}}
function Ca(e){return function(t,a,n,r){const o=La[t];(function(e){return e&&L(e)})(o)&&function(e){return C(e)||0===e}(r)?o(e)(t,a,n,r):e(t,a,n,r)}}function Da(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function Aa(e,t,a){return Ee({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:a})}function Ma(e){const a=t({className:"fshToggle"}),n=xe({checked:e.prefVal,id:e.checkId,type:"checkbox"})
r(a,n)
const o=Aa(e.onClass,e.onTip,e.checkId)
r(a,o)
const i=Aa(e.offClass,e.offTip,e.checkId)
return r(a,i),r(e.worldName,a),n}let Va,$a,Sa,Na,Ha,Ba,Ga,Ta,xa
function Ea(e){return e?e.toString():"?"}function ja(e){const a=t({className:"fshFsty"})
r(a,function(){const e=t({textContent:"Min Lvl: "})
return $a=Ot(Ea(GameData.realm().minlevel)),r(e,$a),e}()),r(a,function(){const e=t({textContent:"Your Lvl: "})
return Sa=Ot(Ea(GameData.player().level)),r(e,Sa),e}()),r(e,a)}function Pa(e,t,a){const n=Be({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return r(a,n),n}function Ia(){var t
ja(t=Va),Na=Pa("fshFormGroup","Quick Create Attack Group",t),Ha=Pa("fshQuickBuff","Open Quick Buff Popup",t),Ba=Pa("fshRealmMap","Open Realm Map",t),Ga=Pa("fshTempleOne","Search map in Ultimate FSG",t),function(e){if(y("showSpeakerOnWorld")){const t=y("playNewMessageSound")
Ta=Ma({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(Va),function(t){const a=e.huntingMode
xa=Ma({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:t})}(Va)}const Oa=[[e=>e===Ta,function(){d("playNewMessageSound",!y("playNewMessageSound"))}],[e=>e===xa,function(){e.huntingMode=!e.huntingMode,d("huntingMode",e.huntingMode)}]],Ra=[[e=>e===Na,function(e){V(e),GameData.doAction(12,401,{},0)}],[e=>e===Ha,function(){je(Ae())}],[e=>e===Ba,function(){window.open(`${S+N}map`,"fsMap")}],[e=>e===Ga,function(){const e=GameData.realm()
window.open(`${H}realms${N}view&realm_id=${e.id}`,"mapUfsg")}]]
function Fa(){Va||(Va=t({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),Ia(),s(Va,Ge(Ra)),h(Va,"change",Ge(Oa)),Te(Va,a("worldCoord")))}function _a(e,t){$a&&t.b.minlevel&&(Da(),n(t.b.minlevel,$a))}function qa(e,t){Sa&&n(t.b,Sa)}function Ka(e){return!e||!e.response||!e.response.data}let Ya,za,Ua,Qa,Wa,Ja,Xa,Za,en,tn,an,nn,rn,on,sn,un,ln,cn,fn,dn,mn,hn,pn,bn,gn,vn,yn,kn,wn,Ln,Cn,Dn,An,Mn,Vn
function $n(e){return e.player_name}function Sn(e){!function(e){Qa=e.defenders.map($n)}(e),Ya?B("",Ya):Ya=t({className:"body"}),function(e){za=t({className:"fshFloatLeft fshRelicLeftDiv"}),r(Ya,za),e.is_owner&&r(za,Oe(Qa)),Ua=Be({className:"custombutton",textContent:"Fetch Stats"}),r(za,Ua)}(e)
const n=a("dialog-relic")
r(n,Ya)}const Nn=[e=>"lastUpdate"!==e,e=>!Qa.includes(e),e=>Wa[e].last_login,e=>Number(Wa[e].last_login)<Ja,e=>Number(Wa[e].last_login)>Xa,e=>Wa[e].level<400||Wa[e].level>421,e=>Wa[e].level<441||Wa[e].level>450]
function Hn(e,t){return t(e)}function Bn(e){return Nn.every(o(Hn,e))}function Gn(e){return`<a href="${T}${Wa[e].id}">${e}</a>`}function Tn(e){Wa=e,Ja=x-120,Xa=x-604800
const t=G(Wa).filter(Bn).map(Gn)
i(Ya,`<div class="fshFloatLeft fshRelicLowDiv"><table class="relicT"><thead><tr><th>${t.length.toString()} Offline guild members not at relic:</th></tr></thead><tbody><tr><td>${t.join(" ")}</td></tr></tbody></table></div>`)}function xn(e){Ke(Ua)
const n=y("hideRelicOffline")
e.is_owner&&!n&&qe(!0).then(Tn),i(za,'<table class="relicT"><thead><tr><th colspan="2">Processing</th></tr></thead><tbody><tr><td class="fshGreen" colspan="2" id="ProcessingStatus">Parsing defending guild stats ...</td></tr></tbody><thead><tr><th colspan="2">Assumptions</th></tr></thead><tbody><tr><td colspan="2" class="fshGrey">Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that order) on both the defending group and attacking group.</td></tr></tbody></table>'),Vn=a("ProcessingStatus")
const o=t({className:"fshFloatLeft fshRelicMidDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Defending Guild Stats</th></tr></thead><tbody><tr><td>Relic Count:</td><td id="relicCount">0</td></tr><tr><td>Lead Defender Bonus:</td><td id="LDPercentage">0</td></tr><tr><td>Lead Defender Cloaked:</td><td id="LDCloaked">No</td></tr></tbody><thead><tr><th colspan="2">Other Defender Stats</th></tr></thead><tbody><tr><td>Raw Attack:</td><td class="fshGrey" id="attackValue">0</td></tr><tr><td>Attack w/ buffs:</td><td id="attackValueBuffed">0</td></tr><tr><td>Raw Defense:</td><td class="fshGrey" id="defenseValue">0</td></tr><tr><td>Defense w/buffs:</td><td id="defenseValueBuffed">0</td></tr><tr><td>Raw Armor:</td><td class="fshGrey" id="armorValue">0</td></tr><tr><td>Armor w/ buffs:</td><td id="armorValueBuffed">0</td></tr><tr><td>Raw Damage:</td><td class="fshGrey" id="damageValue">0</td></tr><tr><td>Damage w/ buffs:</td><td id="damageValueBuffed">0</td></tr><tr><td>Raw HP:</td><td class="fshGrey" id="hpValue">0</td></tr><tr><td>HP w/ buffs:</td><td id="hpValueBuffed">0</td></tr><tr><td>Cloaked:</td><td id="defendersCloaked">0</td></tr><tr><td>Processed:</td><td id="defendersProcessed">0</td></tr></tbody></table>'})
r(Ya,o),Za=a("relicCount"),en=a("LDPercentage"),tn=a("LDCloaked"),an=a("attackValue"),nn=a("attackValueBuffed"),rn=a("defenseValue"),on=a("defenseValueBuffed"),sn=a("armorValue"),un=a("armorValueBuffed"),ln=a("damageValue"),cn=a("damageValueBuffed"),fn=a("hpValue"),dn=a("hpValueBuffed"),mn=a("defendersCloaked"),hn=a("defendersProcessed")
const s=t({className:"fshFloatLeft fshRelicRightDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Adjusted defense values</th></tr></thead><tbody><tr><td>DC225:</td><td id="DC225">0</td></tr><tr><td>DC175:</td><td id="DC175">0</td></tr><tr><td colspan="2">&nbsp;</td></tr></tbody><thead><tr><th colspan="2">Attacking Group Stats</th></tr></thead><tbody><tr><td>Raw Group Attack:</td><td class="fshGrey" id="GroupAttack"></td></tr><tr><td>Group Attack w/ buffs:</td><td id="GroupAttackBuffed"></td></tr><tr><td>Raw Group Defense:</td><td class="fshGrey" id="GroupDefense"></td></tr><tr><td>Group Defense w/ buffs:</td><td id="GroupDefenseBuffed"></td></tr><tr><td>Raw Group Armor:</td><td class="fshGrey" id="GroupArmor"></td></tr><tr><td>Group Armor w/ buffs:</td><td id="GroupArmorBuffed"></td></tr><tr><td>Raw Group Damage:</td><td class="fshGrey" id="GroupDamage"></td></tr><tr><td>Group Damage w/ buffs:</td><td id="GroupDamageBuffed"></td></tr><tr><td>Raw Group HP:</td><td class="fshGrey" id="GroupHP"></td></tr><tr><td>Group HP w/ buffs:</td><td id="GroupHPBuffed"></td></tr></tbody></table>'})
r(Ya,s),pn=a("DC225"),bn=a("DC175"),gn=a("GroupAttack"),vn=a("GroupAttackBuffed"),yn=a("GroupDefense"),kn=a("GroupDefenseBuffed"),wn=a("GroupArmor"),Ln=a("GroupArmorBuffed"),Cn=a("GroupDamage"),Dn=a("GroupDamageBuffed"),An=a("GroupHP"),Mn=a("GroupHPBuffed")}let En
function jn(e){const t=E(e),a=j('#pCC img[src*="/relics/"]',t).length
var r
n(a,Za),En=1===(r=a)?1.5:ke(1-r/10,2),n(`${String(100*En)}%`,en)}function Pn(e,t){return e>10*t||e<t?e:10*t}const In=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function On(e,t,a){e[a[0]]=Number(t[a[1]])}const Rn=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function Fn(e,t,a){e[a[0]]=t[a[1]]||0}function _n(e){if(!e)return
const t=ze(e._skills),a={}
return function(e,t){In.forEach(o(On,e,t))}(a,e),function(e,t){Rn.forEach(o(Fn,e,t))}(a,t),a.superEliteSlayerMultiplier=ke(.002*a.superEliteSlayerLevel,2),Ye(a.armorValue)&&function(e){e.attackValue=Pn(e.attackBonus,e.levelValue),e.defenseValue=Pn(e.defenseBonus,e.levelValue),e.armorValue=Pn(e.armorBonus,e.levelValue),e.damageValue=Pn(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(a),a}let qn,Kn,Yn,zn,Un,Qn,Wn,Jn,Xn,Zn,er,tr,ar,nr
function rr(e){return Math.round(e*En)}function or(){Mt(qn,an),Mt(Yn,rn),Mt(zn,sn),Mt(Un,ln),Mt(Wn,fn),n(Jn,mn),Xn+=1,n(Xn,hn)}function ir(e){const t=function(e){return Math.ceil(er.attack*(.0025*P(e["Nightmare Visage"],0)))}(e)
er.attack-=t,function(){const e=Math.ceil(er.attack*Zn.flinchLevel*.001)
Mt(er.attack-e,vn)}()
const a=function(e){return Math.ceil(er.defense*(1+.001*P(e.Constitution,0)))}(e)
Mt(a+t,kn),function(e){Mt(er.armor+Math.floor(er.armor*P(e.Sanctuary,0)*.001),Ln)}(e)
const n=function(e,t){return Math.ceil(t*P(e.Fortitude,0)*.001)}(e,a)
!function(e){Mt(er.hp+e,Mn)}(n),function(e,t){const a=Math.ceil((er.hp+t)*P(e["Chi Strike"],0)*.001),n=Math.ceil(er.damage*Zn.terrorizeLevel*.001)
Mt(er.damage+a-n,Dn)}(e,n)}function sr(){n("Processing attacking group stats ... ",Vn),tr&&(er.attack-=tr.attack,er.defense-=tr.defense,er.armor-=tr.armor,er.damage-=tr.damage,er.hp-=tr.hp),Mt(er.attack,gn),Mt(er.defense,yn),Mt(er.armor,wn),Mt(er.damage,Cn),Mt(er.hp,An)
const e=ze(GameData.player().buffs)
ir(e),function(e){const t=Math.ceil(Kn*P(e.Flinch,0)*.001)
Mt(Kn-t,nn)}(e),function(e){const t=Math.ceil(Qn*P(e.Terrorize,0)*.001)
Mt(Qn-t,cn)}(e),n("Done.",Vn)}function ur(){n("Processing defending guild stats ... ",Vn),qn+=rr(Zn.attackValue),Yn+=rr(Zn.defenseValue),zn+=rr(Zn.armorValue),Un+=rr(Zn.damageValue),Wn+=rr(Zn.hpValue),or()
const e=Math.ceil(qn*(.0025*Zn.nightmareVisageLevel))
!function(e){Kn=qn-e,Mt(Kn,nn)}(e)
const t=Math.ceil(Yn*(1+.001*Zn.constitutionLevel))
!function(e,t){const a=t+e
Mt(a,on),Mt(Math.ceil(.55*a),pn),Mt(Math.ceil(.65*a),bn)}(e,t),Mt(zn+Math.floor(zn*Zn.sanctuaryLevel*.001),un)
const a=Wn+function(e){return Math.ceil(e*Zn.fortitudeLevel*.001)}(t)
Mt(a,dn),function(e){Qn=Un+Math.ceil(e*Zn.chiStrikeLevel*.001),Mt(Qn)}(a),0!==Zn.cloakLevel&&n("Yes",tn),GameData.player().hasGroup&&er?sr():n("Done.",Vn)}function lr(e){const t=_n(e)
qn+=Math.round(t.attackValue*I),Yn+=Math.round(t.defenseValue*I),zn+=Math.round(t.armorValue*I),Un+=Math.round(t.damageValue*I),Wn+=Math.round(t.hpValue*I),0!==t.cloakLevel&&(Jn+=1),or()}function cr(e){Zn=_n(e)}function fr(e){er=e}function dr(e){tr=e}function mr(e){n(e.message,Vn)}function hr(e){const t=E(e),a=b('#pCC a[href*="confirmDisband"]',t)
if(!a)return
const n=function(e){const t=e.previousElementSibling.href,a=[Re(t).then(fr)]
return function(e){return-1!==e.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML.indexOf('"#000099"')}(e)&&a.push(Fe().then(dr)),a}(a)
return Pe(n)}function pr(e,t){return 0===t?_e(e).then(cr):_e(e).then(lr).catch(mr)}function br(){let e=[F({cmd:"guild",subcmd:"view",guild_id:ar.controlled_by.guild_id}).then(jn)]
return GameData.player().hasGroup&&e.push(F({cmd:"guild",subcmd:"groups"}).then(hr)),e=e.concat(Qa.map(pr)),e}function gr(){xn(ar),qn=0,Yn=0,zn=0,Un=0,Wn=0,Jn=0,Xn=0
const e=br()
Ie(e,ur)}function vr(e,t){Ka(t)||(ar=t.response.data,ar.defenders.length>0&&(Sn(ar),R(Ua,"click",gr)))}function yr(e){$("#statbar-gold").css("background-color",e)}function kr(){$("#HelperSendTotal").html(Le(y("currentGoldSentTotal"))),Number(GameData.player().gold)>nr?yr("red"):yr("inherit")}function wr(){nr=y("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${y("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${Le(nr)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${Le(y("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",K),kr(),$.subscribe(Y,kr)}function Lr(e){return z({cache:!1,url:"fetchdata.php",data:U(e,{fshrnd:Ue()}),dataType:"json"})}const Cr=[]
function Dr(e){return Ka(e)||Cr.push(e),e}function Ar(e,t){return e===Number(t.response.data.id)}function Mr(e,t){e(t)}function Vr(e,t){const a=Cr.find(o(Ar,e))
return a?function(e){return new Promise((t=>{Q(3,Mr,[t,e])}))}(a):Lr({a:1,id:e,passback:t}).then(Dr)}let $r,Sr,Nr,Hr,Br,Gr
function Tr(e,t){return We(W(t,e))}function xr(){var e
$r=GameData.player().level,e=a("statbar-character-tooltip-stats"),Nr=Tr(e,te),Sr=Tr(e,J),Br=Tr(e,X),Hr=Tr(e,Z),Gr=Tr(e,ee)}function Er(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function jr(e,t,a){return function(e){return`<table><tr><td><img src="${v}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return`<tr><td>Class:&nbsp;</td><td width="40%">${e.creature_class}</td><td>Level:&nbsp;</td><td width="40%">${e.level} (your level:<span class="${t}">${$r}</span>)</td></tr>`}(e,a)+function(e){return`<tr><td>Attack:&nbsp;</td><td width="40%">${e.attack} (your defense:<span class="fshYellow">${Sr}</span>)</td><td>Defense:&nbsp;</td><td width="40%">${e.defense} (your attack:<span class="fshYellow">${Nr}</span>)</td></tr>`}(e)+function(e){return`<tr><td>Armor:&nbsp;</td><td width="40%">${e.armor} (your damage:<span class="fshYellow">${Hr}</span>)</td><td>Damage:&nbsp;</td><td width="40%">${e.damage} (your armor:<span class="fshYellow">${Br}</span>)</td></tr>`}(e)+function(e,t){return`<tr><td>HP:&nbsp;</td><td width="40%">${e.hp} (your HP:<span class="fshYellow">${Gr}</span>)(1H: <span class="fshRed">${t}</span>)</td><td>Gold:&nbsp;</td><td width="40%">${e.gold}</td></tr>`}(e,t)+'<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(Er).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function Pr(t){if(!Ka(t))return function(t){const a=Math.ceil(t.hp*e.hpVariable+t.armor*e.generalVariable)
let n="fshYellow"
return xr(),$r>t.level&&(n="fshRed"),jr(t,a,n)}(t.response.data)}const Ir=["verb","view","tip-static"]
function Or(e,t){const a=Pr(t)
e.set("content.text",a)}function Rr(e,t,a){return Vr(GameData.actions()[e].data.id,e).then(o(Or,a)),"Loading..."}function Fr(e,t){g("NewMap","CreatureInfo")
const a=ne((n=t).parentNode.children).indexOf(n)
var n,r,i
e.classList.add("fshTip"),r=e,i=o(Rr,a),$(r).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:i},hide:{effect:!1}})}function _r(t){if(!e.showCreatureInfo)return
const{target:a}=t,n=a.parentNode.parentNode.parentNode;(function(e,t){return Qe(Ir,e)&&!ae("fshTip",e)&&ae("creature",t)})(a,n)&&Fr(a,n)}function qr(){return Je({subcmd:"scouttower"})}function Kr(e,t){const a=e.insertCell(-1)
return[a.colSpan]=t,t[2]&&(a.className="header"),r(a,t[1]),a}function Yr(e,t,a){const n=e.insertRow(-1)
return a&&(n.className="fshBlue"),function(e,t){t.forEach(o(Kr,e))}(n,t),n}function zr(e,t){Yr(e,t[0],t[1])}function Ur(e,t){t.forEach(o(zr,e))}let Qr,Wr,Jr,Xr,Zr,eo,to,ao,no,ro,oo,io,so,uo,lo,co,fo,mo,ho,po,bo,go,vo,yo,ko,wo,Lo,Co
function Do(){Wr=Ot("Current"),Jr=Ot("Kills"),Xr=Ot("Member"),Zr=Ot("% of Total"),eo=Ot("Status"),to=Ot("Titan HP"),ao=Ot("Total"),no=Ot("Your Guild")}function Ao(){for(;fo.rows.length>7;)fo.deleteRow(7)}function Mo(){const e=ve()
return r(e,ro),ye(e,"/"),r(e,oo),e}function Vo(e){const t=ve()
return r(t,e),ye(t,"%"),t}function $o(){ho=null,mo&&!ae("fshHide",mo)&&(ge(mo,!0),n("",ro),n("",oo),n("",io),n("",so),n("",uo),B("",lo),B("",co),Ao())}function So(e){return 0===e.type&&(ho=e.base_creature_id,!0)}function No(){if(mo)ge(mo,!1)
else{const e=a("actionContainer")
mo=t({className:"fshActionBox titanInfo"}),ro=ve(),oo=ve(),io=ve(),so=ve(),uo=ve(),lo=ve(),co=ve(),fo=tt({className:"fshCenter"}),Do(),Ur(fo,[[[[2,to,!0],[4,no,!0]]],[[[2,Mo()],[4,io]]],[[[2,Wr,!0],[4,Vo(so)]],!0],[[[2,ao,!0],[4,Vo(uo)]],!0],[[[2,eo,!0],[4,lo]],!0],[[[6,co]]],[[[2,Xr,!0],[2,Jr,!0],[2,Zr,!0]]]]),r(mo,fo),r(e,mo)}}function Ho(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(ie+1e3*e)
return`${et(t.getHours())}:${et(t.getMinutes())} ${et(t.getDate())}/${oe[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function Bo(e){return we(Xe(e.max_hp-e.current_hp,e.kills),2)}function Go(e){return we(100*e.kills/e.max_hp,2)}function To(e){[[e.current_hp,ro],[e.max_hp,oo],[e.kills,io],[Bo(e),so],[Go(e),uo]].forEach((([e,t])=>{n(e,t)})),B(function(e){return Ze(e.kills,e.max_hp,e.current_hp)}(e),lo),B(Ho(e.cooldown),co)}function xo(e,t){return[[[2,Ot(t.player.name)],[2,Ot(t.kills.toString())],[2,Ot(`${we(100*t.kills/e.kills,2)}%`)]]]}function Eo(e){return e.realm&&e.creature.base_id===ho&&e.realm===Qr}function jo(e){const t=e.find(Eo)
t&&(To(t),function(e){if(Ao(),!e.contributors)return
const t=e.contributors.map(o(xo,e))
Ur(fo,t)}(t))}function Po(t){return e.showTitanInfo&&Me(t)&&t.some(So)}function Io(e,t){(function(e){return e&&e.s&&Me(e.r)})(t)&&(jo(t.r),Po(GameData.realm().dynamic)?po=window.setTimeout(e,3e4):$o())}function Oo(){re(qr).then(o(Io,Oo))}function Ro(e){po&&(window.clearTimeout(po),po=null),Po(e)?(No(),Oo()):$o()}function Fo(e){var t
e.dynamic&&(t=e.name,Qr=t,Ro(e.dynamic))}function _o(e,t){(function(e){return e.realm&&e.realm.name})(t)&&Fo(t.realm)}function qo(e){const t=e.response.response,a=e.response.msg
let n
if(0!==t){const e=a.indexOf("<")
n=-1!==e?a.substring(0,e):a}else n=`You purchased ${e.response.data.name} for ${Le(e.response.data.cost)} gold.`
i(Lo,`${n}<br>`)}function Ko(){GameData.doAction(14,3,{id:bo.id,item_id:bo.itemId},0),vo.close()}function Yo(){const e=at(ko.value)
if(!e)return
const t=[]
for(let a=1;a<e;a+=1)t.push(Lr({a:14,d:0,id:bo.id,item_id:bo.itemId}).then(qo))
Ie(t,Ko)}function zo(){yo?n("",Lo):(yo=t({className:"fshClear",textContent:"Select how many to quick-buy:"}),ko=xe({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),r(yo,ko),wo=Be({textContent:"Quick-buy"}),s(wo,Yo),r(yo,wo),Lo=t(),r(yo,Lo),r(go,yo))}function Uo(e,t){bo=t,go=go||a("shopDialogConfirm"),go&&(vo=vo||$(go).data("hcsWorldDialogShopConfirm"),vo&&zo())}function Qo(e){Co[e.name]?Co[e.name].seen&&(Co[e.name].seen+=1):(Co[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,Co[e.name]))}function Wo(e,t,a){return t?e(t,a):a}function Jo(e,t){const a=e||{}
return a.min=Wo(Math.min,a.min,t),a.max=Wo(Math.max,a.max,t),a}const Xo=["attack","armor","damage","defense","hp"]
function Zo(e,t,a){const n=Jo(t[a],Number(e[a]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[a],n)&&(t[a]=n)}function ei(e,t){e[t.name]=Jo(e[t.name],Number(t.value))}function ti(e){Co||(Co={}),Qo(e),function(e,t){Xo.forEach(o(Zo,e,t))}(e,Co[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(o(ei,t.enhancements)))}(e,Co[e.name]),$e("fsh_monsterLog",Co)}function ai(e){Co=e||{}}const ni=[]
function ri(t){var a
Ka(t)||(g("NewMap","MonsterLog"),a=t.response.data,e.showMonsterLog&&ti(a))}function oi(e,t){return e.id===t.id}function ii(e,t){6!==e.type||function(e){if(ni.find(o(oi,e.data)))return!0
ni.push(e.data)}(e)||Vr(e.data.id,t).then(ri)}function si(){e.showMonsterLog&&GameData.actions().forEach(ii)}function ui(e){const t=E(e),a=nt(t)
return{r:{attributes:[{value:a.attack},{value:a.defense},{value:a.armor},{value:a.damage},{value:a.hp}]}}}function li(e){return F({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:e}).then(ui)}function ci(e){return Je(U({subcmd:"groups"},e))}function fi(e){return ci({subcmd2:"viewstats",group_id:e})}function di(){return ci({subcmd2:"view"})}function mi(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}const hi=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${mi(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${mi(e)}`]]
function pi(e,t){return t[0](e)}function bi(e){e.playerHits=function(e){return"-"===e.numberOfCreatureHitsTillDead?e.numberOfHitsRequired:function(e){return"-"===e.numberOfHitsRequired||e.numberOfHitsRequired>e.numberOfCreatureHitsTillDead}(e)?"-":e.numberOfHitsRequired}(e),e.creatureHits=function(e){return"-"===e.numberOfHitsRequired?e.numberOfCreatureHitsTillDead:function(e){return"-"===e.numberOfCreatureHitsTillDead||e.numberOfCreatureHitsTillDead>e.numberOfHitsRequired}(e)?"-":e.numberOfCreatureHitsTillDead}(e),e.fightStatus=function(e){const t=hi.find(o(pi,e))
return t?t[1](e):"Unknown"}(e)}function gi(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function vi(e){!function(e){const t=function(e){return e.callback.groupExists?e.callback.groupArmorValue:e.player.armorValue}(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}(e),function(e){e.player.sanctuaryLevel>0&&(e.extraNotes+=`Sanc Bonus Armor = ${Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}<br>`)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),gi(e)}function yi(e){const t=function(e){return e.callback.groupExists?e.callback.groupAttackValue:e.player.attackValue}(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${Math.floor(e.creature.defense*e.player.darkCurseLevel*.002)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-e.creature.defense*e.player.darkCurseLevel*.002
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}function ki(e){e.lowestCALevelToStillHit=Math.max(Math.ceil((e.counterAttackBonusAttack-e.hitByHowMuch+1)/e.player.attackValue/.0025),0),e.lowestCALevelToStillKill=Math.max(Math.ceil((e.counterAttackBonusDamage-e.damageDone+1)/e.player.damageValue/.0025),0)}function wi(e){ki(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function Li(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&wi(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){ki(e),function(e){e.lowestCALevelToStillHit>175?e.extraNotes+="Even with CA175 you cannot hit this creature<br>":0!==e.lowestCALevelToStillHit&&(e.extraNotes+=`You need a minimum of CA${e.lowestCALevelToStillHit} to hit this creature<br>`)}(e),function(e){e.lowestCALevelToStillKill>175?e.extraNotes+="Even with CA175 you cannot 1-hit kill this creature<br>":0!==e.lowestCALevelToStillKill&&(e.extraNotes+=`You need a minimum of CA${e.lowestCALevelToStillKill} to 1-hit kill this creature<br>`)}(e)}(e)}function Ci(e){!function(e){const t=function(e){return e.callback.groupExists?e.callback.groupHPValue:e.player.hpValue}(e),{fortitudeLevel:a}=e.player
e.fortitudeExtraHPs=Math.floor(t*a*.001),a>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e)
const t=function(e){return e.callback.groupExists?e.callback.groupDamageValue:e.player.damageValue}(e)
if(e.overallDamageValue=t+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage,e.damageDone=Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp)),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}function Di(e){return e.callback.groupExists?e.callback.groupDefenseValue:e.player.defenseValue}function Ai(e){e.overallDefenseValue=Di(e)+Math.floor(Di(e)*e.player.constitutionLevel*.001)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${Math.floor(Di(e)*e.player.constitutionLevel*.001)}<br>`)}(e),function(e){e.player.flinchLevel>0&&(e.extraNotes+=`Flinch Bonus Attack Reduction = ${Math.floor(e.creature.attack*e.player.flinchLevel*.001)}<br>`)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue-50))}function Mi(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}let Vi,$i,Si,Ni,Hi,Bi,Gi,Ti,xi,Ei
function ji(){return va($i)?"Remove from do not kill list":"Add to the do not kill list"}function Pi(){n(ji(),Si)}function Ii(){const t=e.doNotKillList.indexOf($i);-1===t?e.doNotKillList.push($i):e.doNotKillList.splice(t,1),Pi(),d("doNotKillList",e.doNotKillList.join()),ka()}function Oi(){Si?Pi():function(){Si=Be({className:"fshBl",textContent:ji(),type:"button"})
const e=t({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
r(e,Si),r(Vi,e),s(Si,Ii)}()}function Ri(e,t){!function(e){if(!Vi){const t=W("body",e)
1===t.length&&([Vi]=t)}}(t),Vi&&($i=e.trim(),Oi())}function Fi(){Bi||(Hi||(Hi=t(),r(Ni,Hi),r(Ni,t({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Bi=t(),r(Hi,Bi))}function _i(e){Fi(),B(e,Bi)}function qi(e){Gi||(Fi(),Gi=t(),r(Hi,Gi)),B(e,Gi)}function Ki(e,t){const a={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,a){3===a&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,a,e.type),a}function Yi(t,a,n){const r={}
r.callback=n,r.player=_n(a),function(t){t.combatEvaluatorBias=e.combatEvaluatorBias,t.attackVariable=1.1053,t.generalVariable=e.generalVariable,t.hpVariable=e.hpVariable}(r),r.creature=Ki(t.response.data,r.player.superEliteSlayerMultiplier),function(e){Mi(e),yi(e),Ci(e),Ai(e),vi(e),bi(e),Li(e)}(r),r.evaluatorHTML=function(e){return`<table width="100%"><tbody>${function(e){return`<tr><td bgcolor="#CD9E4B" colspan="4" align="center">${function(e){return e.callback.groupExists?"Group ":""}(e)}Combat Evaluation</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Will I hit it? </td><td align="left">${function(e){return e.hitByHowMuch>0?"Yes":"No"}(e)}</td><td align="right"><span style="color:#333333">Extra Attack: </td><td align="left">( ${e.hitByHowMuch} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333"># Hits to kill it? </td><td align="left">${e.numberOfHitsRequired}</td><td align="right"><span style="color:#333333">Extra Damage: </td><td align="left">( ${e.damageDone} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Will I be hit? </td><td align="left">${function(e){return e.creatureHitByHowMuch>=0?"Yes":"No"}(e)}</td><td align="right"><span style="color:#333333">Extra Defense: </td><td align="left">( ${-1*e.creatureHitByHowMuch} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333"># Hits to kill me? </td><td align="left">${e.numberOfCreatureHitsTillDead}</td><td align="right"><span style="color:#333333">Extra Armor + HP: </td><td align="left">( ${-1*e.creatureDamageDone} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333"># Player Hits? </td><td align="left">${e.playerHits}</td><td align="right"><span style="color:#333333"># Creature Hits? </td><td align="left">${e.creatureHits}</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Fight Status: </span></td><td align="left" colspan="3"><span>${e.fightStatus}</span></td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Notes: </span></td><td align="left" colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td></tr>`}(e)}</tbody></table>`}(r),n.groupExists?qi(r.evaluatorHTML):_i(r.evaluatorHTML)}function zi(e){return e.members[0].name===Ae()}function Ui(e){if(Me(e.r))return e.r.find(zi).id}function Qi(e,t,a){if(!a.r||!a.r.attributes)return
const n=a.r.attributes
Yi(e,t,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}function Wi(e,t,a){a&&function(e){return re(fi,li,e)}(a).then(o(Qi,e,t))}function Ji(e,t){re(di).then(Ui).then(o(Wi,e,t))}function Xi(e,t){e.player.hasGroup&&Ji(e,t),Yi(e,t,{groupExists:!1})}function Zi(e,t){Ni||(Ni=a("dialog-viewcreature")),Ni&&(_i(""),qi(""),function(e){return e.response&&e.response.data}(t)&&(Ri(t.response.data.name,Ni),rt(!0).then(o(Xi,t))))}function es(){const t=[,[e.buffs,e.buffsName],[e.buffs2,e.buffs2Name],[e.buffs3,e.buffs3Name]][e.enabledHuntingMode]
Me(t)&&([Ti,xi]=t)}function ts(t){"enabledHuntingMode"===t.target.name&&(e.enabledHuntingMode=t.target.value,d("enabledHuntingMode",e.enabledHuntingMode),es(),GameData.fetch(u))}function as(e){const t=W("verbs",e)
1===t.length&&Ke(t[0])}function ns(){if(!Ei)return
const e=a("actionList")
Ne("player",e).forEach(as)}const rs={hideSubLvlCreature:function(){e.hideSubLvlCreature=!e.hideSubLvlCreature,d("hideSubLvlCreature",e.hideSubLvlCreature),GameData.fetch(fe)},hidePlayerActions:function(){Ei=!Ei,d("hidePlayerActions",Ei),GameData.fetch(fe)},showCreatureInfo:function(){e.showCreatureInfo=!e.showCreatureInfo,d("showCreatureInfo",e.showCreatureInfo)},showHuntingBuffs:function(){e.showBuffs=!e.showBuffs,d("showHuntingBuffs",e.showBuffs),GameData.fetch(u)},showMonsterLog:function(){e.showMonsterLog=!e.showMonsterLog,d("showMonsterLog",e.showMonsterLog)},showTitanInfo:function(){e.showTitanInfo=!e.showTitanInfo,d("showTitanInfo",e.showTitanInfo),Ro(GameData.realm().dynamic)},showBuffInfo:function(){e.showBuffInfo=!e.showBuffInfo,d("showBuffInfo",e.showBuffInfo),ta()}}
function os(e){const t=rs[e.target.name]
L(t)&&(e.target.blur(),t(e))}function is(){const e=t({className:"fshCenter fshFten"}),n=t({id:"fshWorldPrefs",innerHTML:`${it("showCreatureInfo")}&nbsp;&nbsp;${it("showMonsterLog")}&nbsp;&nbsp;${it("showTitanInfo")}&nbsp;&nbsp;${it("showBuffInfo")}<br>${it("hideSubLvlCreature")}&nbsp;&nbsp;${it("hidePlayerActions")}&nbsp;&nbsp;${ot()}`})
s(n,os),h(n,"change",ts),r(e,n)
const o=t()
r(e,o)
const i=a("worldContainerBelow").children[0]
return Te(e,i),o}function ss(e,t){return e[t.name]=!0,e}function us(e,t,a){return e[a.trim()]||t.push(a),t}function ls(e){B("",e)}function cs(e,t){const a=t.b.reduce(ss,{}),n=Ti.reduce(o(us,a),[])
n.length>0?function(e,t){B(`You are missing some ${xi} hunting buffs<br>(${t.join(", ")})`,e)}(e,n):ls(e)}function fs(t,a,n){Ti&&function(t,a,n){e.showBuffs?cs(t,n):ls(t)}(t,0,n)}const ds=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function ms(){var t
e.combatEvaluatorBias=y("combatEvaluatorBias"),e.generalVariable=(t=e.combatEvaluatorBias,ds[t]?ds[t].generalVariable:1.1053),e.hpVariable=function(e){return ds[e]?ds[e].hpVariable:1.1}(e.combatEvaluatorBias)}function hs(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function ps(e){const t=de(e)
return function(e){return!e||!e.actions||0===e.actions.length}(t)?e:(t.actions=t.actions.filter(o(hs,function(e){return e.realm&&e.realm.minlevel||GameData.realm().minlevel}(t))),JSON.stringify(t))}function bs(t,a){e.hideSubLvlCreature&&function(e){return e.data&&e.data.d&&st(e.data.d,fe)}(a)&&(t.dataFilter=ps)}function gs(t){e[t[0]]=ut(t[1])}function vs(t){e[t]=ut(t)}function ys(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(gs),["doNotKillList"].forEach(vs)}function ks(t){e[t[0]]=y(t[1])}function ws(t){e[t]=y(t)}function Ls(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showBuffs","showHuntingBuffs"]].forEach(ks),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(ws)}function Cs(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const Ds=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function As(e,t){var a
y(e)&&(a=t+1,$.subscribe(D,o(Cs,a)),Cs(t+1))}function Ms(e,t){"ACT_REPAIR"===t&&GameData.fetch(he+u+pe+fe)}function Vs(e){V(e.target)}const $s=[function(){ms(),ys(),Ls()
const t=is()
$.ajaxPrefilter("JSON",bs),e.hideSubLvlCreature&&GameData.fetch(fe),function(t){es()
const a=o(fs,t)
$.subscribe(l,a),e.showBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(t),Ei=y("hidePlayerActions"),$.subscribe(D,ns),ns()},function(){_(),q&&wr()},function(){$.subscribe(ce,Zi)},function(){Ds.forEach(As)},function(){y("enableCreatureColoring")&&r(document.body,Se("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(D,ka),ka(),function(){const e=GameData.doAction
GameData.doAction=Ca(e)}()},function(){Ve("fsh_monsterLog").then(ai),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",si),si()},function(){$.subscribe(me,Ms)},function(){y("keepLogs")&&Ve("fsh_combatLog").then(ga)},function(){window.initialGameData&&_o(0,window.initialGameData),$.subscribe(`${se} ${ue}`,_o)},function(){$.subscribe(le,Uo)},function(){$.subscribe(O,vr)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){V("#mapTooltip")},function(){Fa(),$.subscribe(A,_a),$.subscribe(M,qa)},function(){ta(),$.subscribe(`${l} ${c}`,ta),$.subscribe(f,aa)},function(){s(a("buffList"),Vs)},function(){h(a("actionList"),"mouseover",_r)},function(){const e=m("body")[0]
h(e,"keydown",ua),h(e,"keyup",la)}]
function Ss(){He($s)}export default Ss
//# sourceMappingURL=newMap-d3f0af66.js.map
