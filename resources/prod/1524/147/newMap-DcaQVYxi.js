import{e}from"./executeAll-DIAWIge1.js"
import{ao as t,n,g as a,aW as r,ae as o,aF as s,i,at as l,d as c,x as u,ac as f,o as d,s as m,aX as p,aZ as h,I as g,a_ as b,a$ as v,b0 as k,b1 as w,A as y,c as C,aq as L,b2 as V,aI as D,b3 as x,b4 as M,b5 as A,b6 as S,al as N,l as H,b7 as B,q as T,b8 as E,b9 as G,f as P,G as R,ba as _,bb as F,bc as O,bd as I,be as j,bf as W,bg as q,bh as K,bi as Y,bj as z,bk as U,bl as Q,ar as X,ad as J,bm as Z,bn as ee,bo as te,a as ne,$ as ae,S as re,P as oe,Q as se,au as ie,T as le,U as ce,av as ue,_ as fe,ax as de,a8 as me,a0 as pe,a3 as he,a9 as ge,bp as be,R as ve,bq as ke,a4 as we,a5 as ye,br as Ce,bs as $e,bt as Le,W as Ve,X as De,bu as xe,a1 as Me,bv as Ae,bw as Se,bx as Ne,by as He,e as Be,az as Te,bz as Ee,bA as Ge,bB as Pe,bC as Re,H as _e,bD as Fe,bE as Oe,bF as Ie,bG as je,bH as We,bI as qe,bJ as Ke,bK as Ye,bL as ze,bM as Ue,bN as Qe,am as Xe,bO as Je,bP as Ze,v as et,bQ as tt,bR as nt,bS as at,bT as rt,bU as ot,bV as st,bW as it,bX as lt,bY as ct,bZ as ut,b_ as ft,b$ as dt,c0 as mt,c1 as pt,c2 as ht,c3 as gt,c4 as bt,c5 as vt,c6 as kt,c7 as wt,c8 as yt,c9 as Ct,ca as $t,cb as Lt,cc as Vt,cd as Dt,ce as xt,ap as Mt,cf as At}from"./calfSystem-BAeDn21M.js"
import{t as St}from"./toggleForce-br4z9gGd.js"
import{r as Nt,a as Ht}from"./roundToString-CLgmOe94.js"
import{a as Bt}from"./addCommas-C_h2HN8s.js"
import{d as Tt,q as Et}from"./quickbuffSuccess-CNhuGxD3.js"
import{c as Gt}from"./createInput-B6T-33bD.js"
import{c as Pt}from"./createLabel-BLlWkMmn.js"
import{c as Rt}from"./idbLogger-BkIjrI57.js"
import{r as _t}from"./rnd-D_QmA-Fa.js"
import{c as Ft}from"./createStyle-BAUgBTdZ.js"
import{c as Ot}from"./createTable-CxtktJCV.js"
import{t as It,g as jt,a as Wt}from"./getTitanString-DrmoKrfx.js"
import{L as qt}from"./LinkButton-DewvBSzv.js"
import{r as Kt}from"./reduceBuffArray-Diy1E3zc.js"
import{r as Yt}from"./reliclist-BZc-U1aN.js"
import{d as zt}from"./daGroupStats-DIb8VT75.js"
import{d as Ut,m as Qt}from"./mercEffect-ezAHmZfr.js"
import{a as Xt}from"./attribsToArray-7DII1ki5.js"
import{r as Jt}from"./remainingPages-BzskAxSU.js"
import{t as Zt}from"./testQuant-Cj7k88VH.js"
import{s as en,j as tn}from"./simpleCheckbox-BPGp9fPI.js"
import{i as nn}from"./isSelected-BWnMzKlW.js"
import{b as an}from"./bitwiseAnd-C5gmj-aX.js"
import"./buffReportParser-Bgh3H9YW.js"
import"./buffObj-BIwiFUIW.js"
import"./view-Cy9sHeLl.js"
import"./isChecked-D_0do7nT.js"
let rn=0
function on(e){return e}function sn(e){if(function(e){return t.showBuffInfo&&e.some(on)}(e))return function(){if(rn)St(rn,!1)
else{rn=n({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div>"})
const e=a("actionContainer")
r(rn,e.children[2])}return rn}()
rn&&St(rn,!0)}function ln(e,t,n,a){t&&(e.className=t),o(n,e)
const r=s()
return i(e,r),l(e,a),r}let cn=0,un=0
function fn(e,t){cn?St(cn,!1):function(e){cn=e.children[3],un=ln(cn,"fshBlue","CA "," active")}(e),o(t.level,un)}function dn(e,t){t?fn(e,t):cn&&St(cn,!0)}let mn=0,pn=0
function hn(e,t){mn?St(mn,!1):function(e){mn=e.children[4],pn=ln(mn,"fshRed","Doubler "," active")}(e),o(t.level,pn)}function gn(e,t){t?hn(e,t):mn&&St(mn,!0)}let bn=0,vn=0
function kn(e,t,n){bn?St(bn,!1):function(e){bn=e.children[2],vn=ln(bn,"","Damage bonus: ","%")}(e),o(function(e,t){if(e){const n=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return Nt(n,2).toString()}return"0"}(t,Number(n)),vn)}function wn(e,t,n){t?kn(e,t,n):bn&&St(bn,!0)}let yn=0,Cn=0
function $n(e,t){yn?St(yn,!1):function(e){yn=e.children[1],Cn=ln(yn,"","Kill Streak: ","")}(e),function(e,t){o(Bt(e),t)}(t,Cn)}function Ln(e,t,n,a){t||n?$n(e,a):yn&&St(yn,!0)}function Vn(e,t){return t.name===e}function Dn(e){const{buffs:t}=GameData.player()
if(t)return t.find(c(Vn,e))}const xn=["red","orange","yellow"]
let Mn=0,An=0
async function Sn(){if(m("NewMap","recastClick"),Dn("Summon Shield Imp"))return
!function(e){Et(e)&&GameData.fetch(h)}(await Tt([p()],[55]))}const Nn=["imp-0","imp-1","imp-1"]
function Hn(e,t){Mn?St(Mn,!1):function(e){[Mn]=e.children,o("Shield Imps Remaining: ",Mn),An=s(),i(Mn,An),u(Mn,"&nbsp;")
const t=f({className:"xSmallLink",textContent:"Recast"})
i(Mn,t),d(t,Sn)}(e)
const n=function(e){return e?Number(e.stack):0}(t)
Mn.className=function(e){return Nn[e]??"fshGreen"}(n),o(n,An)}function Bn(e,t,n){t||n?Hn(e,t):Mn&&St(Mn,!0)}function Tn(e){return 0===e.type}let En=0,Gn=0,Pn=0,Rn=0,_n=0,Fn=0
function On(){En=Dn("Death Dealer"),Gn=Dn("Doubler"),Pn=Dn("Counter Attack"),Rn=Dn("Summon Shield Imp"),_n=function(){const{dynamic:e}=GameData.realm()
return g(e)&&e.some(Tn)}(),Fn=GameData.player().killStreak}function In(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",xn[e.text()]||"#ad8043")}(),On()
const e=sn([En,Gn,Pn,Rn,_n])
e&&(Bn(e,Rn,En),Ln(e,En,_n,Fn),wn(e,En,Fn),dn(e,Pn),gn(e,Gn))}function jn(e){return s({textContent:e})}function Wn(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function qn(e,t,n){return Pt({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:n})}function Kn(e){const t=n({className:"fshToggle"}),a=Gt({checked:e.prefVal,id:e.checkId,type:"checkbox"})
i(t,a)
const r=qn(e.onClass,e.onTip,e.checkId)
i(t,r)
const o=qn(e.offClass,e.offTip,e.checkId)
return i(t,o),i(e.worldName,t),a}let Yn=0,zn=0,Un=0,Qn=0,Xn=0,Jn=0,Zn=0,ea=0,ta=0
const na=e=>jn(e?e.toString():"?")
function aa(e,t,a){const r=n({textContent:`${t} Lvl: `})
i(r,a),i(e,r)}function ra(e,t,n){const a=f({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return i(n,a),a}function oa(e){!function(e){const t=n({className:"fshFsty"})
zn=na(GameData.realm().minlevel),aa(t,"Min",zn),Un=na(GameData.player().level),aa(t,"Your",Un),i(e,t)}(e),Qn=ra("fshFormGroup","Quick Create Attack Group",e),Xn=ra("fshQuickBuff","Open Quick Buff Popup",e),Jn=ra("fshRealmMap","Open Realm Map",e),Zn=ra("fshTempleOne","Search map in Ultimate FSG",e)}function sa(){oa(Yn),function(e){if(L("showSpeakerOnWorld")){const t=L("playNewMessageSound")
ea=Kn({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(Yn),function(e){const n=t.huntingMode
ta=Kn({prefVal:n,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(Yn)}const ia=[[()=>ea,function(){m("NewMap","toggleSound"),N("playNewMessageSound",!L("playNewMessageSound"))}],[()=>ta,function(){m("NewMap","toggleHuntMode"),t.huntingMode=!t.huntingMode,N("huntingMode",t.huntingMode)}]],la=[[()=>Qn,function(e){m("NewMap","doFormGroup"),V(e),GameData.doAction(12,401,{},0)}],[()=>Xn,function(){m("NewMap","openQuickBuff"),D(x())}],[()=>Jn,function(){m("NewMap","openRealmMap"),window.open(`${M+A}map`,"fsMap")}],[()=>Zn,function(){m("NewMap","openUfsgMap")
const e=GameData.realm()
window.open(`${S}realms${A}view&realm_id=${e.id}`,"mapUfsg")}]]
function ca(e,t){const{target:n}=t,[,a]=e.find((([e])=>e()===n))??[]
a&&(n.blur(),a(n))}function ua(e){return c(ca,e)}function fa(){Yn||(Yn=n({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),sa(),d(Yn,ua(la)),C(Yn,"change",ua(ia)),y(Yn,a("worldCoord")))}function da(e,t){zn&&t.b.minlevel&&(Wn(),o(t.b.minlevel,zn))}function ma(e,t){Un&&o(t.b,Un)}const pa=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"],ha=`url("${E}ui/world/icon_action_attack_`
let ga=!1
function ba(e){return T(".verb.attack",e)}function va(e){const t=pa.indexOf(e.toUpperCase())
return H(`#actionList .actionListItem.creature.creature-${t}`)}function ka(e){e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""}function wa(e,t){null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${ha}${t+1}.png")`)}function ya(e){const t=["LEGENDARY","NORMAL"].flatMap(va),n=va("CHAMPION"),[a,r]=e?[t,n]:[n,t]
a.map(ba).filter((e=>null!==e)).forEach(ka),r.slice(0,8).map(ba).forEach(wa)}function Ca(e){if(!e.altKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(ga||ya(!0),ga=!0,!/(?:Digit|Numpad)[1-8]/.test(e.code))return
const t=va("CHAMPION"),n=parseInt(e.code.slice(-1),10)-1
n<t.length&&function(e){const t=ba(e)
t&&(m("NewMap","ChampionAttack"),B(t))}(t[n])}function $a(e){!ga||e.ctrlKey&&e.shiftKey||(ga=!1,ya(!1))}function La(e,t){0===t.response.response&&function(e){Rt({combat:e.response.data,player:{buffs:P(e.player.buffs.filter((({id:e})=>[26,54].includes(e))).map((({id:e,level:t})=>[e,t])))},time:e.time})}(t)}function Va(e){return!e?.response?.data}async function Da(e){const t=await _({cache:!1,url:"fetchdata.php",data:{...e,fshrnd:_t()},dataType:"text"})
return F(t)??{response:{msg:"Server Error",response:1}}}const xa=[]
const Ma=(e,t)=>e===Number(t.response.data.id)
function Aa(e,t){e(t)}async function Sa(e,t){const n=xa.find(c(Ma,e))
if(n)return function(e){return new Promise((t=>{O(3,Aa,[t,e])}))}(n)
const a=await Da({a:1,d:0,id:e,passback:t})
return function(e){Va(e)||xa.push(e)}(a),a}let Na=0,Ha=0,Ba=0,Ta=0,Ea=0,Ga=0
const Pa=()=>Na,Ra=()=>Ha,_a=()=>Ba,Fa=()=>Ta,Oa=()=>Ea,Ia=()=>Ga
function ja(e,t){return I(j(t,e))}function Wa(){var e
Na=GameData.player().level,e=a("statbar-character-tooltip-stats"),Ba=ja(e,W),Ha=ja(e,q),Ea=ja(e,K),Ta=ja(e,Y),Ga=ja(e,z)}const qa=e=>`<td>${e}:&nbsp;</td>`,Ka=e=>`<td width="40%">${e}</td>`
function Ya([e,t,n,a,r]){return[qa(e),Ka(`${t} (your ${n}:<span class="${a}">${r()}</span>)`)]}function za(e){return["<tr>",...e,"</tr>"].join("")}function Ua(e,t){return za([...Ya(e),...Ya(t)])}const Qa='<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'
function Xa(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function Ja(e,t,n){return function(e){return`<table><tr><td><img src="${E}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return za([qa("Class"),Ka(e.creature_class),...Ya(["Level",e.level,"level",t,Pa])])}(e,n)+function(e){return Ua(["Attack",e.attack,"defense","fshYellow",Ra],["Defense",e.defense,"attack","fshYellow",_a])}(e)+function(e){return Ua(["Armor",e.armor,"damage","fshYellow",Fa],["Damage",e.damage,"armor","fshYellow",Oa])}(e)+function(e,t){return za([qa("HP"),Ka(`${e.hp} (your HP:<span class="fshYellow">${Ia()}</span>)(1H: <span class="fshRed">${t}</span>)`),qa("Gold"),Ka(e.gold)])}(e,t)+Qa+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(Xa).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function Za(e){if(!Va(e))return function(e){const n=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let a="fshYellow"
return Wa(),Pa()>e.level&&(a="fshRed"),Ja(e,n,a)}(e.response.data)}const er=["verb","view","tip-static"]
async function tr(e,t){const n=function(e){return U(e.parentNode.children).indexOf(e)}(e),a=await Sa(GameData.actions()[n].data.id,n)
Va(a)||function(e,t){const n=Za(t)
e.set("content.text",n)}(t,a)}function nr(e,t){m("NewMap","CreatureInfo"),e.classList.add("fshTip")
var n
const a=(n="Loading...",$(e).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:n},hide:{effect:!1}})).qtip("api")
a&&tr(t,a)}function ar(e,t){return n=e,er.every((e=>R(e,n)))&&!R("fshTip",e)&&R("creature",t)
var n}function rr(e){if(!t.showCreatureInfo)return
const{target:n}=e,a=n.parentNode.parentNode.parentNode
ar(n,a)&&nr(n,a)}function or(e){return t.doNotKillList.includes(Q(e))}function sr(e){e.classList.toggle("fshBlue",or(J(e)))}function ir(){const e=a("actionList")
X("creature",e).forEach(sr)}function lr(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(or(e))return m("NewMap","creatureOnList"),a("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const cr={2:function(e){return function(t,n,a,r){lr(a.passback)||e(t,n,a,r)}}}
function ur(e){return function(t,n,a,r){const o=cr[t];(function(e){return e&&Z(e)})(o)&&function(e){return ee(e)||0===e}(r)?o(e)(t,n,a,r):e(t,n,a,r)}}function fr(){return e={subcmd:"contrib"},ne({cmd:"globalquests",...e})
var e}function dr(e){e[1]=e[2].r}function mr(e,t,n){const a=e.slice()
return a[3]=t[n].player,a[4]=t[n].value,a[6]=n,a}function pr(e){let t,n,a=e[7].message+""
return{c(){t=he("p"),n=ge(a),be(t,"color","red")},m(e,a){fe(e,t,a),pe(t,n)},p(e,t){1&t&&a!==(a=e[7].message+"")&&me(n,a)},d(e){e&&ce(t)}}}function hr(e){let t,n
function a(e,n){return 1&n&&(t=null),null==t&&(t=!!g(e[1])),t?br:gr}dr(e)
let r=a(e,-1),o=r(e)
return{c(){o.c(),n=de()},m(e,t){o.m(e,t),fe(e,n,t)},p(e,t){dr(e),r===(r=a(e,t))&&o?o.p(e,t):(o.d(1),o=r(e),o&&(o.c(),o.m(n.parentNode,n)))},d(e){e&&ce(n),o.d(e)}}}function gr(e){let t
return{c(){t=ge("Server Error")},m(e,n){fe(e,t,n)},p:le,d(e){e&&ce(t)}}}function br(e){let t,n,a,r,o=ve(e[1]),s=[]
for(let t=0;t<o.length;t+=1)s[t]=kr(mr(e,o,t))
return{c(){t=he("table"),n=he("tbody"),a=he("tr"),a.innerHTML='<td class="header"></td> <td class="header"></td> <td class="header">Username</td> <td class="header">Kills</td>',r=we()
for(let e=0;e<s.length;e+=1)s[e].c()
ye(a,"class","svelte-2qtc6g"),ye(t,"id","world-event-contrib-table"),ye(t,"class","svelte-2qtc6g")},m(e,o){fe(e,t,o),pe(t,n),pe(n,a),pe(n,r)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(n,null)},p(e,t){if(1&t){let a
for(o=ve(e[1]),a=0;a<o.length;a+=1){const r=mr(e,o,a)
s[a]?s[a].p(r,t):(s[a]=kr(r),s[a].c(),s[a].m(n,null))}for(;a<s.length;a+=1)s[a].d(1)
s.length=o.length}},d(e){e&&ce(t),ke(s,e)}}}function vr(e){let t,n,a,r
return{c(){t=he("a"),n=he("img"),$e(n.src,a=E+"guilds/"+e[3].guild_id+"_mini.png")||ye(n,"src",a),ye(n,"alt","guild logo"),ye(n,"class","svelte-2qtc6g"),ye(t,"href",r=""+(Le+e[3].guild_id))},m(e,a){fe(e,t,a),pe(t,n)},p(e,o){1&o&&!$e(n.src,a=E+"guilds/"+e[3].guild_id+"_mini.png")&&ye(n,"src",a),1&o&&r!==(r=""+(Le+e[3].guild_id))&&ye(t,"href",r)},d(e){e&&ce(t)}}}function kr(e){let t,n,a,r,o,s,i,l,c,u,f,d,m,p=e[3].name+"",h=e[4]+"",g=e[3].guild_id&&vr(e)
return{c(){t=he("tr"),n=he("td"),n.textContent=`${e[6]+1}`,a=we(),r=he("td"),g&&g.c(),o=we(),s=he("td"),i=he("a"),l=ge(p),u=we(),f=he("td"),d=ge(h),m=we(),ye(i,"href",c=""+(Ce+e[3].name)),ye(t,"class","svelte-2qtc6g")},m(e,c){fe(e,t,c),pe(t,n),pe(t,a),pe(t,r),g&&g.m(r,null),pe(t,o),pe(t,s),pe(s,i),pe(i,l),pe(t,u),pe(t,f),pe(f,d),pe(t,m)},p(e,t){e[3].guild_id?g?g.p(e,t):(g=vr(e),g.c(),g.m(r,null)):g&&(g.d(1),g=null),1&t&&p!==(p=e[3].name+"")&&me(l,p),1&t&&c!==(c=""+(Ce+e[3].name))&&ye(i,"href",c),1&t&&h!==(h=e[4]+"")&&me(d,h)},d(e){e&&ce(t),g&&g.d()}}}function wr(e){let t
return{c(){t=ge("Loading...")},m(e,n){fe(e,t,n)},p:le,d(e){e&&ce(t)}}}function yr(e){let t,n,a={ctx:e,current:null,token:null,hasCatch:!0,pending:wr,then:hr,catch:pr,value:2,error:7}
return ie(n=e[0],a),{c(){t=de(),a.block.c()},m(e,n){fe(e,t,n),a.block.m(e,a.anchor=n),a.mount=()=>t.parentNode,a.anchor=t},p(t,[r]){e=t,a.ctx=e,1&r&&n!==(n=e[0])&&ie(n,a)||ue(a,e,r)},i:le,o:le,d(e){e&&ce(t),a.block.d(e),a.token=null,a=null}}}function Cr(e,t,n){let{promise:a}=t
return e.$$set=e=>{"promise"in e&&n(0,a=e.promise)},[a]}class $r extends re{constructor(e){super(),oe(this,e,Cr,yr,se,{promise:0})}}let Lr=0
const Vr=()=>({promise:ae(fr)})
function Dr(){m("NewMap","GlobalTop")
const e=a("world-event-contrib")
var t
t=e,Lr?Lr.$set(Vr()):Lr=new $r({props:Vr(),target:t}),$(e).dialog({title:"Top 100 Event Contributers",minWidth:300,height:300,zIndex:9999})}function xr(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const Mr=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function Ar(e,t){var n
L(e)&&(n=t+1,$.subscribe(te,c(xr,n)),xr(t+1))}function Sr(e,t,n){const a=e.slice()
return a[9]=t[n].msg,a[10]=t[n].type,a[11]=t[n].count,a}function Nr(e){let t,n,a,r=e[11]+""
return{c(){t=he("div"),n=ge("x"),a=ge(r),ye(t,"class","count svelte-1t9oc1")},m(e,r){fe(e,t,r),pe(t,n),pe(t,a)},p(e,t){1&t&&r!==(r=e[11]+"")&&me(a,r)},d(e){e&&ce(t)}}}function Hr(e,t){let n,a,r,o,s,i,l,c=t[9]+"",u=t[11]>1&&Nr(t)
function f(){return t[3](t[9])}return{key:e,first:null,c(){n=he("div"),a=ge(c),r=we(),u&&u.c(),o=we(),ye(n,"class",s="fsh-message "+t[10]+" svelte-1t9oc1"),this.first=n},m(e,t){fe(e,n,t),pe(n,a),pe(n,r),u&&u.m(n,null),pe(n,o),i||(l=Me(n,"click",f),i=!0)},p(e,r){t=e,1&r&&c!==(c=t[9]+"")&&me(a,c),t[11]>1?u?u.p(t,r):(u=Nr(t),u.c(),u.m(n,o)):u&&(u.d(1),u=null),1&r&&s!==(s="fsh-message "+t[10]+" svelte-1t9oc1")&&ye(n,"class",s)},d(e){e&&ce(n),u&&u.d(),i=!1,l()}}}function Br(e){let t,n=[],a=new Map,r=ve(e[1](e[0]))
const o=e=>e[9]
for(let t=0;t<r.length;t+=1){let s=Sr(e,r,t),i=o(s)
a.set(i,n[t]=Hr(i,s))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c()
t=de()},m(e,a){for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(e,a)
fe(e,t,a)},p(e,[s]){7&s&&(r=ve(e[1](e[0])),n=Ve(n,s,o,1,e,r,a,t.parentNode,De,Hr,t,Sr))},i:le,o:le,d(e){e&&ce(t)
for(let t=0;t<n.length;t+=1)n[t].d(e)}}}function Tr(e,t,n){let a=[]
const r=window.$("#messageCenter").data().hcsWorldMessageCenter,o=function*(){for(let e=0;;e++)yield e}()
function s(){r._reposition()}function i(e){n(0,a=a.filter((({msg:t})=>t!==e))),s()}r._displayMessage=async function(e,t,r=3e3){const i=o.next().value
n(0,a=[...a,{msg:e,type:t,expire:i}]),setTimeout((()=>{n(0,a=a.filter((({expire:e})=>e!==i)))}),r),await Ae(),s()}
return[a,e=>xe(e,"msg").map((({msg:t,type:n})=>({msg:t,type:n,count:e.filter((({msg:e})=>e===t)).length}))),i,e=>i(e)]}class Er extends re{constructor(e){super(),oe(this,e,Tr,Br,se,{})}}let Gr=0
function Pr(e){Gr[e.name]?Gr[e.name].seen&&(Gr[e.name].seen+=1):(Gr[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,Gr[e.name]))}function Rr(e,t,n){return t?e(t,n):n}function _r(e,t){const n=e||{}
return n.min=Rr(Math.min,n.min,t),n.max=Rr(Math.max,n.max,t),n}const Fr=["attack","armor","damage","defense","hp"]
function Or(e,t,n){const a=_r(t[n],Number(e[n]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[n],a)&&(t[n]=a)}function Ir(e,t){e[t.name]=_r(e[t.name],Number(t.value))}function jr(e){Gr||(Gr={}),Pr(e),function(e,t){Fr.forEach(c(Or,e,t))}(e,Gr[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(c(Ir,t.enhancements)))}(e,Gr[e.name]),Ne("fsh_monsterLog",Gr)}async function Wr(){!function(e){Gr=e||{}}(await Se("fsh_monsterLog"))}const qr=[]
function Kr(e){var n
Va(e)||(n=e.response.data,t.showMonsterLog&&jr(n))}function Yr(e,t){return e.id===t.id}async function zr(e,t){if(6!==e.type||function(e){if(qr.find(c(Yr,e.data)))return!0
qr.push(e.data)}(e))return
Kr(await Sa(e.data.id,t))}function Ur(){t.showMonsterLog&&(GameData.actions().forEach(zr),m("NewMap","MonsterLog"))}let Qr=""
const Xr=()=>Qr
function Jr(){return He({subcmd:"scouttower"})}function Zr(e,[t,n,a]){const r=e.insertCell(-1)
return r.colSpan=t,a&&(r.className="header"),i(r,n()),r}function eo(e,t,n){const a=e.insertRow(-1)
return n&&(a.className="fshBlue"),function(e,t){t.forEach(c(Zr,e))}(a,t),a}function to(e,t){eo(e,t[0],t[1])}function no(e,t){t.forEach(c(to,e))}let ao=0,ro=0,oo=0,so=0,io=0,lo=0,co=0,uo=0
const fo=()=>ao,mo=()=>co
function po(){ao=jn("Current"),ro=jn("Kills"),oo=jn("Member"),so=jn("% of Total"),io=jn("Status"),lo=jn("Titan HP"),co=jn("Total"),uo=jn("Your Guild")}let ho=0,go=0,bo=0,vo=0,ko=0,wo=0,yo=0,Co=0,$o=0
const Lo=()=>ho,Vo=()=>go,Do=()=>bo,xo=()=>vo,Mo=()=>ko,Ao=()=>wo,So=()=>yo,No=()=>Co,Ho=()=>$o
function Bo(){ho=s({innerHTML:"&nbsp;"}),go=s({innerHTML:"&nbsp;"}),bo=s(),vo=s(),ko=s(),wo=s(),yo=s(),Co=s(),$o=s()}let To=0
const Eo=()=>To
function Go(){for(;To.rows.length>8;)To.deleteRow(8)}function Po(e){const t=s()
return i(t,e),l(t,"%"),t}const Ro=[[[5,Lo,!0],[1,Vo,!0]]],_o=[[[2,()=>lo,!0],[4,()=>uo,!0]]],Fo=[[[2,function(){const e=s()
return i(e,Do()),l(e,"/"),i(e,xo()),e}],[4,Mo]]],Oo=()=>[[[2,fo,!0],[4,c(Po,Ao())]],!0],Io=()=>[[[2,mo,!0],[4,c(Po,So())]],!0],jo=[[[2,()=>io,!0],[4,No]],!0],Wo=[[[2,()=>oo,!0],[2,()=>ro,!0],[2,()=>so,!0]]]
let qo=0,Ko=0,Yo=""
const zo=()=>Ko,Uo=()=>Yo
function Qo(){Ko=null,qo&&!R("fshHide",qo)&&(St(qo,!0),Be("&nbsp;",ho),Be("&nbsp;",go),o("",bo),o("",vo),o("",ko),o("",wo),o("",yo),Be("",Co),Be("",$o),Go())}function Xo(e){return 0===e.type&&(Ko=e.base_creature_id,Yo=`(${e.x},${e.y})`,!0)}function Jo(){if(qo)St(qo,!1)
else{const e=a("actionContainer")
qo=n({className:"fshActionBox titanInfo"}),Bo(),To=Ot({className:"fshCenter"}),po(),no(To,[Ro,_o,Fo,Oo(),Io(),jo,[[[6,Ho]]],Wo]),i(qo,Eo()),i(e,qo)}}function Zo(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(Te()+1e3*e)
return`${Ee(t.getHours())}:${Ee(t.getMinutes())} ${Ee(t.getDate())}/${Ge[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function es(e){return Ht(Wt(e.max_hp-e.current_hp,e.kills),2)}function ts(e){return Ht(100*e.kills/e.max_hp,2)}function ns(e){!function(e){[[It(e.creature.name),Lo],[Uo(),Vo],[e.current_hp,Do],[e.max_hp,xo],[e.kills,Mo],[es(e),Ao],[ts(e),So]].forEach((([e,t])=>o(e,t())))}(e),Be(function(e){return jt(e.kills,e.max_hp,e.current_hp)}(e),No()),Be(Zo(e.cooldown),Ho())}function as(e,t){return[[[2,()=>jn(t.player.name)],[2,()=>jn(t.kills.toString())],[2,()=>jn(`${Ht(100*t.kills/e.kills,2)}%`)]]]}function rs(e){return e.realm&&e.creature.base_id===zo()&&e.realm===Xr()}function os(e){const t=e.find(rs)
t&&(ns(t),function(e){if(Go(),!e.contributors)return
const t=e.contributors.map(c(as,e))
no(Eo(),t)}(t))}let ss=null
const is=e=>e?.s&&g(e.r),ls=e=>t.showTitanInfo&&g(e)&&e.some(Xo)
async function cs(){!function(e,t){is(t)&&(os(t.r),ls(GameData.realm().dynamic)?ss=window.setTimeout(e,3e4):Qo())}(cs,await ae(Jr))}function us(e){ss&&(window.clearTimeout(ss),ss=null),ls(e)?(Jo(),cs()):Qo()}function fs(e){var t
e.dynamic&&(t=e.name,Qr=t,us(e.dynamic))}function ds(e,t){t.realm?.name&&fs(t.realm)}function ms(e,t,n){const a=e.slice()
return a[5]=t[n],a[7]=n,a}function ps(e){let t,n=e[1](e[7])+""
return{c(){t=ge(n)},m(e,n){fe(e,t,n)},p:le,d(e){e&&ce(t)}}}function hs(e){let t,n,a,r
return n=new qt({props:{$$slots:{default:[ps]},$$scope:{ctx:e}}}),n.$on("click",(function(...t){return e[3](e[5],e[7],...t)})),{c(){t=he("li"),ze(n.$$.fragment),a=we()},m(e,o){fe(e,t,o),Ye(n,t,null),pe(t,a),r=!0},p(t,a){e=t
const r={}
256&a&&(r.$$scope={dirty:a,ctx:e}),n.$set(r)},i(e){r||(Oe(n.$$.fragment,e),r=!0)},o(e){Fe(n.$$.fragment,e),r=!1},d(e){e&&ce(t),Ke(n)}}}function gs(e){let t,n,a=ve(_e(16,e[0])),r=[]
for(let t=0;t<a.length;t+=1)r[t]=hs(ms(e,a,t))
const o=e=>Fe(r[e],1,1,(()=>{r[e]=null}))
return{c(){t=he("ul")
for(let e=0;e<r.length;e+=1)r[e].c()
ye(t,"class","svelte-1k3xw12")},m(e,a){fe(e,t,a)
for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null)
n=!0},p(e,[n]){if(7&n){let s
for(a=ve(_e(16,e[0])),s=0;s<a.length;s+=1){const o=ms(e,a,s)
r[s]?(r[s].p(o,n),Oe(r[s],1)):(r[s]=hs(o),r[s].c(),Oe(r[s],1),r[s].m(t,null))}for(Ie(),s=a.length;s<r.length;s+=1)o(s)
je()}},i(e){if(!n){for(let e=0;e<a.length;e+=1)Oe(r[e])
n=!0}},o(e){r=r.filter(Boolean)
for(let e=0;e<r.length;e+=1)Fe(r[e])
n=!1},d(e){e&&ce(t),ke(r,e)}}}function bs(e,t,n){const a=We()
let{members:r=[]}=t
const o=e=>`Buff ${qe[e]} 16`
function s(e,t,n){n.target.blur(),Ue(`${Qe}&players=${e.join(",")}`,"fsQuickBuff",618,1e3,",scrollbars"),a("buffBatch",o(t))}return e.$$set=e=>{"members"in e&&n(0,r=e.members)},[r,o,s,(e,t,n)=>s(e,t,n)]}class vs extends re{constructor(e){super(),oe(this,e,bs,gs,se,{members:0})}}function ks(e,t){return e>10*t||e<t?e:10*t}const ws=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function ys(e,t,n){e[n[0]]=Number(t[n[1]])}const Cs=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function $s(e,t,n){e[n[0]]=t[n[1]]||0}function Ls(e){if(!e._skills)return
const t=Kt(e._skills),n={}
return function(e,t){ws.forEach(c(ys,e,t))}(n,e),function(e,t){Cs.forEach(c($s,e,t))}(n,t),n.superEliteSlayerMultiplier=Nt(.002*n.superEliteSlayerLevel,2),Xe(n.armorValue)&&function(e){e.attackValue=ks(e.attackBonus,e.levelValue),e.defenseValue=ks(e.defenseBonus,e.levelValue),e.armorValue=ks(e.armorBonus,e.levelValue),e.damageValue=ks(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(n),n}const Vs=Ze(["statusStore","Done."])
let Ds=[]
const xs=Je(Vs,((e,t)=>{const n=Ds.find((([t])=>t===e[0]))
n?[,n[1]]=e:Ds=[...Ds,e]
const a=Ds.find((([,e])=>"Done."!==e))
t(a?.[1]??"Done.")})),Ms=Ze(0)
const As=Je(Ms,((e,t)=>{!async function(e,t){if(!e)return
Vs.set(["relicStore","Processing defending guild relics ... "])
const n=await Yt(e)
if(!n?.r?.relics)return void Vs.set(["relicStore","AJAX Error"])
const a=n.r.relics.length,r=1===a?1.5:Nt(1-a/10,2)
t({noOfRelics:a,relicMultiplier:r,leadDefenderBonus:`${String(100*r)}%`}),Vs.set(["relicStore","Done."])}(e,t)})),Ss=Ze([])
const Ns=Je(Ss,((e,t)=>{!async function(e,t){if(!e.length)return
Vs.set(["defendersStore","Processing defending group stats ... "])
const n=[]
await et(e.map((async(e,a)=>{const r=await tt(e)
n.push([a,Ls(r)]),t(n)}))),Vs.set(["defendersStore","Done."])}(e,t)})),Hs=Je(Ns,((e,t)=>{const n=e?.find((([e])=>0===e))
n&&t(n[1])})),Bs=(e,t,n)=>Math.ceil(n*(0===t?e:nt))
function Ts(e,t,[n,a]){return{armorValue:t.armorValue+Bs(e,n,a.armorValue),attackValue:t.attackValue+Bs(e,n,a.attackValue),damageValue:t.damageValue+Bs(e,n,a.damageValue),cloaked:t.cloaked+(a.cloakLevel?1:0),defenseValue:t.defenseValue+Bs(e,n,a.defenseValue),hpValue:t.hpValue+Bs(e,n,a.hpValue)}}const Es=Je([As,Ns],(([e,t],n)=>{if(!e?.relicMultiplier||!t?.length)return
const a=t?.reduce(c(Ts,e.relicMultiplier),{armorValue:0,attackValue:0,damageValue:0,cloaked:0,defenseValue:0,hpValue:0})
n(a)})),Gs=Ze(0),Ps=e=>e.members[0].name===GameData.player().username
async function Rs(e,t){if(!e)return
Vs.set(["groupStore","Processing attacking group stats ... "])
const n=await async function(){const e=await at()
return e?.r?.find(Ps)?.id}(),a=n&&await async function(e){const t=await zt(e)
return Xt(t?.r?.attributes)}(n),r=a&&await async function(e){const t=await Ut(),n=Qt(t)
return e?.map(((e,t)=>e-n[t]))}(a)
r&&t({attack:r[0],defense:r[1],armor:r[2],hp:r[3],damage:r[4]}),Vs.set(["groupStore","Done."])}const _s=Je(Gs,((e,t)=>{Rs(e,t)})),Fs=(e,t,n)=>Math.ceil(e*rt(t,0)*n),Os=(e,t)=>Fs(e,t,.0025),Is=(e,t)=>Fs(e,t,.001),js=Is,Ws=Is,qs=Is,Ks=Is,Ys=Is,zs=(e,t)=>Math.ceil(e*(1+.001*rt(t,0))),Us=(e,t)=>Math.ceil(e*(1-t*ot)),Qs=Ze([]),Xs=Je(Qs,((e,t)=>{e&&t(Kt(e))})),Js=Je([Xs,_s],(([e,t],n)=>{if(!e||!t)return
const a=zs(t.defense,e.Constitution),r=t.hp+js(a,e.Fortitude)
n({dmgWithChiStrike:t.damage+Ws(r,e["Chi Strike"]),defWithConst:a,hpWithFortitude:r,nmv:Os(t.attack,e["Nightmare Visage"]),sanctuary:qs(t.armor,e.Sanctuary)})}))
const Zs=Je([Js,Hs,_s],(function([e,t,n],a){if(!e||!t||!n)return
const r=n.attack-e.nmv,o=Ks(r,t.flinchLevel),s=Ys(e.dmgWithChiStrike,t.terrorizeLevel)
a({attack:r-o,defense:e.defWithConst+e.nmv,armor:n.armor+e.sanctuary,hp:e.hpWithFortitude,damage:e.dmgWithChiStrike-s})}))
const ei=Je([Hs,Es],(([e,t],n)=>{if(!e||!t)return
const a=Os(t.attackValue,e.nightmareVisageLevel),r=zs(t.defenseValue,e.constitutionLevel)
!function([e,t,n,a,r,o]){n({attackWithNmv:t.attackValue-a,chiStrike:e.chiStrikeLevel,cloak:e.cloakLevel?"Yes":"No",dmgWithChiStrike:t.damageValue+Ws(o,e.chiStrikeLevel),defWithConst:r,hpWithFortitude:o,nmv:a,sanctuary:qs(t.armorValue,e.sanctuaryLevel)})}([e,t,n,a,r,t.hpValue+js(r,e.fortitudeLevel)])}))
const ti=Je([Xs,ei,Es],(function([e,t,n],a){if(!e||!t||!n)return
const r=Ks(t.attackWithNmv,e.Flinch),o=t.defWithConst+t.nmv,s=Ys(t.dmgWithChiStrike,e.Terrorize)
a({attack:t.attackWithNmv-r,dc225:Us(o,225),dc175:Us(o,175),defense:o,armor:n.armorValue+t.sanctuary,hp:t.hpWithFortitude,damage:t.dmgWithChiStrike-s})})),ni=Je(As,((e,t)=>{t({noOfRelics:e?.noOfRelics??"",leadDefenderBonus:e?.leadDefenderBonus??""})})),ai=Je(Hs,((e,t)=>{if(!e)return t("")
e.cloakLevel?t("Yes"):t("No")})),ri=Je(Es,((e,t)=>{t({armorValue:e?.armorValue??"",attackValue:e?.attackValue??"",damageValue:e?.damageValue??"",cloaked:e?.cloaked??"",defenseValue:e?.defenseValue??"",hpValue:e?.hpValue??""})})),oi=Je(Ns,((e,t)=>{t(e?.length??"")})),si=Je(ti,((e,t)=>{t({attack:e?.attack??"",dc225:e?.dc225??"",dc175:e?.dc175??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""})})),ii=e=>({attack:e?.attack??"",defense:e?.defense??"",armor:e?.armor??"",hp:e?.hp??"",damage:e?.damage??""}),li=Je(_s,((e,t)=>{t(ii(e))})),ci=Je(Zs,((e,t)=>{t(ii(e))}))
function ui(e,t,n){const a=e.slice()
return a[6]=t[n].id,a[7]=t[n].username,a}function fi(e){let t,n,a,r,o=e[7]+""
return{c(){t=he("a"),n=ge(o),r=ge(" "),ye(t,"href",a=""+(st+e[6])),ye(t,"class","svelte-3priew")},m(e,a){fe(e,t,a),pe(t,n),fe(e,r,a)},p(e,r){1&r&&o!==(o=e[7]+"")&&me(n,o),1&r&&a!==(a=""+(st+e[6]))&&ye(t,"href",a)},d(e){e&&(ce(t),ce(r))}}}function di(e){let t,n,a,r=(e[0].length||"")+"",o=ve(e[0]),s=[]
for(let t=0;t<o.length;t+=1)s[t]=fi(ui(e,o,t))
return{c(){t=ge(r),n=ge(" Offline guild members not at relic:\n"),a=he("div")
for(let e=0;e<s.length;e+=1)s[e].c()
ye(a,"class","missing svelte-3priew")},m(e,r){fe(e,t,r),fe(e,n,r),fe(e,a,r)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(a,null)},p(e,[n]){if(1&n&&r!==(r=(e[0].length||"")+"")&&me(t,r),1&n){let t
for(o=ve(e[0]),t=0;t<o.length;t+=1){const r=ui(e,o,t)
s[t]?s[t].p(r,n):(s[t]=fi(r),s[t].c(),s[t].m(a,null))}for(;t<s.length;t+=1)s[t].d(1)
s.length=o.length}},i:le,o:le,d(e){e&&(ce(t),ce(n),ce(a)),ke(s,e)}}}function mi(e,t,n){let{members:a=[]}=t,r=[]
const o=[({username:e})=>!a.includes(e),({last_login:e})=>e,({last_login:e})=>e<ct(),({last_login:e})=>e>ut(),({level:e})=>e<400||e>421,({level:e})=>e<441||e>450],s=e=>o.every((t=>t(e))),i=({username:e},{username:t})=>lt(e,t)
return Ms.subscribe((e=>{!async function(e){const t=await it(e)
g(t)&&n(0,r=t.filter(s).sort(i))}(e)})),e.$$set=e=>{"members"in e&&n(1,a=e.members)},[r,a]}class pi extends re{constructor(e){super(),oe(this,e,mi,di,se,{members:1})}}function hi(e){let t,n,a
return n=new vs({props:{members:e[10]}}),n.$on("buffBatch",e[11]),{c(){t=he("div"),ze(n.$$.fragment),ye(t,"class","buff-links svelte-2rn368")},m(e,r){fe(e,t,r),Ye(n,t,null),a=!0},p:le,i(e){a||(Oe(n.$$.fragment,e),a=!0)},o(e){Fe(n.$$.fragment,e),a=!1},d(e){e&&ce(t),Ke(n)}}}function gi(e){let t,n,a,r,o,s,i,l
return{c(){t=he("div"),t.textContent="Processing",n=we(),a=he("div"),r=ge(e[2]),o=we(),s=he("div"),s.textContent="Assumptions",i=we(),l=he("div"),l.textContent="Above calculations include Constitution, Fortitude, Nightmare Visage,\n        Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that\n        order) on both the defending group and attacking group.",ye(t,"class","b-top svelte-2rn368"),ye(a,"class","proc-stat svelte-2rn368"),ye(s,"class","b-top svelte-2rn368"),ye(l,"class","assume svelte-2rn368")},m(e,c){fe(e,t,c),fe(e,n,c),fe(e,a,c),pe(a,r),fe(e,o,c),fe(e,s,c),fe(e,i,c),fe(e,l,c)},p(e,t){4&t&&me(r,e[2])},d(e){e&&(ce(t),ce(n),ce(a),ce(o),ce(s),ce(i),ce(l))}}}function bi(e){let t,n,a
return{c(){t=he("button"),t.textContent="Fetch Stats",ye(t,"class","custombutton"),ye(t,"type","button")},m(r,o){fe(r,t,o),n||(a=Me(t,"click",e[12]),n=!0)},p:le,d(e){e&&ce(t),n=!1,a()}}}function vi(e){let t,n,a,r,o,s,i,l,c,u,f,d,m,p,h,g,b,v,k,w,y,C,$,L,V,D,x,M,A,S,N,H,B,T,E,G,P,R,_,F,O,I,j,W,q,K,Y,z,U,Q,X,J,Z,ee,te,ne,ae,re,oe,se,ie,le,ue,de,be,ve,ke,Ce,$e,Le,Ve,De,xe,Me,Ae,Se,Ne,He,Be,Te,Ee,Ge,Pe,Re,_e,Ie,je,We,qe,Ue,Qe,Xe,Je,Ze,et,tt,nt,at,rt,ot,st,it,lt,ct,ut,ft,dt,mt,pt,ht,gt,bt,vt,kt,wt,yt,Ct,$t,Lt,Vt,Dt,xt,Mt,At,St,Nt,Ht,Bt,Tt,Et,Gt,Pt,Rt,_t,Ft,Ot,It,jt,Wt,qt,Kt,Yt,zt,Ut,Qt,Xt,Jt,Zt,en,tn,nn,an,rn,on,sn=e[3].noOfRelics+"",ln=e[3].leadDefenderBonus+"",cn=e[5].attackValue+"",un=e[6].attack+"",fn=e[5].defenseValue+"",dn=e[6].defense+"",mn=e[5].armorValue+"",pn=e[6].armor+"",hn=e[5].damageValue+"",gn=e[6].damage+"",bn=e[5].hpValue+"",vn=e[6].hp+"",kn=e[5].cloaked+"",wn=e[6].dc225+"",yn=e[6].dc175+"",Cn=e[8].attack+"",$n=e[9].attack+"",Ln=e[8].defense+"",Vn=e[9].defense+"",Dn=e[8].armor+"",xn=e[9].armor+"",Mn=e[8].damage+"",An=e[9].damage+"",Sn=e[8].hp+"",Nn=e[9].hp+""
return rn=new pi({props:{members:e[10]}}),{c(){t=he("div"),n=he("div"),n.textContent="Defending Guild Stats",a=we(),r=he("div"),o=he("div"),o.textContent="Relic Count:",s=we(),i=he("div"),l=ge(sn),c=we(),u=he("div"),u.textContent="Lead Defender Bonus:",f=we(),d=he("div"),m=ge(ln),p=we(),h=he("div"),h.textContent="Lead Defender Cloaked:",g=we(),b=he("div"),v=ge(e[4]),k=we(),w=he("div"),w.textContent="Other Defender Stats",y=we(),C=he("div"),$=he("div"),$.textContent="Raw Attack:",L=we(),V=he("div"),D=ge(cn),x=we(),M=he("div"),M.textContent="Attack w/ buffs:",A=we(),S=he("div"),N=ge(un),H=we(),B=he("div"),B.textContent="Raw Defense:",T=we(),E=he("div"),G=ge(fn),P=we(),R=he("div"),R.textContent="Defense w/buffs:",_=we(),F=he("div"),O=ge(dn),I=we(),j=he("div"),j.textContent="Raw Armor:",W=we(),q=he("div"),K=ge(mn),Y=we(),z=he("div"),z.textContent="Armor w/ buffs:",U=we(),Q=he("div"),X=ge(pn),J=we(),Z=he("div"),Z.textContent="Raw Damage:",ee=we(),te=he("div"),ne=ge(hn),ae=we(),re=he("div"),re.textContent="Damage w/ buffs:",oe=we(),se=he("div"),ie=ge(gn),le=we(),ue=he("div"),ue.textContent="Raw HP:",de=we(),be=he("div"),ve=ge(bn),ke=we(),Ce=he("div"),Ce.textContent="HP w/ buffs:",$e=we(),Le=he("div"),Ve=ge(vn),De=we(),xe=he("div"),xe.textContent="Cloaked:",Me=we(),Ae=he("div"),Se=ge(kn),Ne=we(),He=he("div"),He.textContent="Processed:",Be=we(),Te=he("div"),Ee=ge(e[7]),Ge=we(),Pe=he("div"),Re=he("div"),Re.textContent="Adjusted Defense Values",_e=we(),Ie=he("div"),je=he("div"),je.textContent="DC225:",We=we(),qe=he("div"),Ue=ge(wn),Qe=we(),Xe=he("div"),Xe.textContent="DC175:",Je=we(),Ze=he("div"),et=ge(yn),tt=we(),nt=he("div"),nt.textContent=" ",at=we(),rt=he("div"),rt.textContent="Attacking Group Stats",ot=we(),st=he("div"),it=he("div"),it.textContent="Raw Group Attack:",lt=we(),ct=he("div"),ut=ge(Cn),ft=we(),dt=he("div"),dt.textContent="Group Attack w/ buffs:",mt=we(),pt=he("div"),ht=ge($n),gt=we(),bt=he("div"),bt.textContent="Raw Group Defense:",vt=we(),kt=he("div"),wt=ge(Ln),yt=we(),Ct=he("div"),Ct.textContent="Group Defense w/ buffs:",$t=we(),Lt=he("div"),Vt=ge(Vn),Dt=we(),xt=he("div"),xt.textContent="Raw Group Armor:",Mt=we(),At=he("div"),St=ge(Dn),Nt=we(),Ht=he("div"),Ht.textContent="Group Armor w/ buffs:",Bt=we(),Tt=he("div"),Et=ge(xn),Gt=we(),Pt=he("div"),Pt.textContent="Raw Group Damage:",Rt=we(),_t=he("div"),Ft=ge(Mn),Ot=we(),It=he("div"),It.textContent="Group Damage w/ buffs:",jt=we(),Wt=he("div"),qt=ge(An),Kt=we(),Yt=he("div"),Yt.textContent="Raw Group HP:",zt=we(),Ut=he("div"),Qt=ge(Sn),Xt=we(),Jt=he("div"),Jt.textContent="Group HP w/ buffs:",Zt=we(),en=he("div"),tn=ge(Nn),nn=we(),an=he("div"),ze(rn.$$.fragment),ye(n,"class","b-top svelte-2rn368"),ye(o,"class","svelte-2rn368"),ye(i,"class","svelte-2rn368"),ye(u,"class","svelte-2rn368"),ye(d,"class","svelte-2rn368"),ye(h,"class","svelte-2rn368"),ye(b,"class","svelte-2rn368"),ye(r,"class","stat-grid svelte-2rn368"),ye(w,"class","b-top svelte-2rn368"),ye($,"class","svelte-2rn368"),ye(V,"class","svelte-2rn368"),ye(M,"class","svelte-2rn368"),ye(S,"class","svelte-2rn368"),ye(B,"class","svelte-2rn368"),ye(E,"class","svelte-2rn368"),ye(R,"class","svelte-2rn368"),ye(F,"class","svelte-2rn368"),ye(j,"class","svelte-2rn368"),ye(q,"class","svelte-2rn368"),ye(z,"class","svelte-2rn368"),ye(Q,"class","svelte-2rn368"),ye(Z,"class","svelte-2rn368"),ye(te,"class","svelte-2rn368"),ye(re,"class","svelte-2rn368"),ye(se,"class","svelte-2rn368"),ye(ue,"class","svelte-2rn368"),ye(be,"class","svelte-2rn368"),ye(Ce,"class","svelte-2rn368"),ye(Le,"class","svelte-2rn368"),ye(xe,"class","svelte-2rn368"),ye(Ae,"class","svelte-2rn368"),ye(He,"class","svelte-2rn368"),ye(Te,"class","svelte-2rn368"),ye(C,"class","stat-grid svelte-2rn368"),ye(t,"class","middle svelte-2rn368"),ye(Re,"class","b-top svelte-2rn368"),ye(je,"class","svelte-2rn368"),ye(qe,"class","svelte-2rn368"),ye(Xe,"class","svelte-2rn368"),ye(Ze,"class","svelte-2rn368"),ye(nt,"class","svelte-2rn368"),ye(Ie,"class","stat-grid svelte-2rn368"),ye(rt,"class","b-top svelte-2rn368"),ye(it,"class","svelte-2rn368"),ye(ct,"class","svelte-2rn368"),ye(dt,"class","svelte-2rn368"),ye(pt,"class","svelte-2rn368"),ye(bt,"class","svelte-2rn368"),ye(kt,"class","svelte-2rn368"),ye(Ct,"class","svelte-2rn368"),ye(Lt,"class","svelte-2rn368"),ye(xt,"class","svelte-2rn368"),ye(At,"class","svelte-2rn368"),ye(Ht,"class","svelte-2rn368"),ye(Tt,"class","svelte-2rn368"),ye(Pt,"class","svelte-2rn368"),ye(_t,"class","svelte-2rn368"),ye(It,"class","svelte-2rn368"),ye(Wt,"class","svelte-2rn368"),ye(Yt,"class","svelte-2rn368"),ye(Ut,"class","svelte-2rn368"),ye(Jt,"class","svelte-2rn368"),ye(en,"class","svelte-2rn368"),ye(st,"class","stat-grid svelte-2rn368"),ye(Pe,"class","right svelte-2rn368"),ye(an,"class","bottom b-top svelte-2rn368")},m(e,ce){fe(e,t,ce),pe(t,n),pe(t,a),pe(t,r),pe(r,o),pe(r,s),pe(r,i),pe(i,l),pe(r,c),pe(r,u),pe(r,f),pe(r,d),pe(d,m),pe(r,p),pe(r,h),pe(r,g),pe(r,b),pe(b,v),pe(t,k),pe(t,w),pe(t,y),pe(t,C),pe(C,$),pe(C,L),pe(C,V),pe(V,D),pe(C,x),pe(C,M),pe(C,A),pe(C,S),pe(S,N),pe(C,H),pe(C,B),pe(C,T),pe(C,E),pe(E,G),pe(C,P),pe(C,R),pe(C,_),pe(C,F),pe(F,O),pe(C,I),pe(C,j),pe(C,W),pe(C,q),pe(q,K),pe(C,Y),pe(C,z),pe(C,U),pe(C,Q),pe(Q,X),pe(C,J),pe(C,Z),pe(C,ee),pe(C,te),pe(te,ne),pe(C,ae),pe(C,re),pe(C,oe),pe(C,se),pe(se,ie),pe(C,le),pe(C,ue),pe(C,de),pe(C,be),pe(be,ve),pe(C,ke),pe(C,Ce),pe(C,$e),pe(C,Le),pe(Le,Ve),pe(C,De),pe(C,xe),pe(C,Me),pe(C,Ae),pe(Ae,Se),pe(C,Ne),pe(C,He),pe(C,Be),pe(C,Te),pe(Te,Ee),fe(e,Ge,ce),fe(e,Pe,ce),pe(Pe,Re),pe(Pe,_e),pe(Pe,Ie),pe(Ie,je),pe(Ie,We),pe(Ie,qe),pe(qe,Ue),pe(Ie,Qe),pe(Ie,Xe),pe(Ie,Je),pe(Ie,Ze),pe(Ze,et),pe(Ie,tt),pe(Ie,nt),pe(Pe,at),pe(Pe,rt),pe(Pe,ot),pe(Pe,st),pe(st,it),pe(st,lt),pe(st,ct),pe(ct,ut),pe(st,ft),pe(st,dt),pe(st,mt),pe(st,pt),pe(pt,ht),pe(st,gt),pe(st,bt),pe(st,vt),pe(st,kt),pe(kt,wt),pe(st,yt),pe(st,Ct),pe(st,$t),pe(st,Lt),pe(Lt,Vt),pe(st,Dt),pe(st,xt),pe(st,Mt),pe(st,At),pe(At,St),pe(st,Nt),pe(st,Ht),pe(st,Bt),pe(st,Tt),pe(Tt,Et),pe(st,Gt),pe(st,Pt),pe(st,Rt),pe(st,_t),pe(_t,Ft),pe(st,Ot),pe(st,It),pe(st,jt),pe(st,Wt),pe(Wt,qt),pe(st,Kt),pe(st,Yt),pe(st,zt),pe(st,Ut),pe(Ut,Qt),pe(st,Xt),pe(st,Jt),pe(st,Zt),pe(st,en),pe(en,tn),fe(e,nn,ce),fe(e,an,ce),Ye(rn,an,null),on=!0},p(e,t){(!on||8&t)&&sn!==(sn=e[3].noOfRelics+"")&&me(l,sn),(!on||8&t)&&ln!==(ln=e[3].leadDefenderBonus+"")&&me(m,ln),(!on||16&t)&&me(v,e[4]),(!on||32&t)&&cn!==(cn=e[5].attackValue+"")&&me(D,cn),(!on||64&t)&&un!==(un=e[6].attack+"")&&me(N,un),(!on||32&t)&&fn!==(fn=e[5].defenseValue+"")&&me(G,fn),(!on||64&t)&&dn!==(dn=e[6].defense+"")&&me(O,dn),(!on||32&t)&&mn!==(mn=e[5].armorValue+"")&&me(K,mn),(!on||64&t)&&pn!==(pn=e[6].armor+"")&&me(X,pn),(!on||32&t)&&hn!==(hn=e[5].damageValue+"")&&me(ne,hn),(!on||64&t)&&gn!==(gn=e[6].damage+"")&&me(ie,gn),(!on||32&t)&&bn!==(bn=e[5].hpValue+"")&&me(ve,bn),(!on||64&t)&&vn!==(vn=e[6].hp+"")&&me(Ve,vn),(!on||32&t)&&kn!==(kn=e[5].cloaked+"")&&me(Se,kn),(!on||128&t)&&me(Ee,e[7]),(!on||64&t)&&wn!==(wn=e[6].dc225+"")&&me(Ue,wn),(!on||64&t)&&yn!==(yn=e[6].dc175+"")&&me(et,yn),(!on||256&t)&&Cn!==(Cn=e[8].attack+"")&&me(ut,Cn),(!on||512&t)&&$n!==($n=e[9].attack+"")&&me(ht,$n),(!on||256&t)&&Ln!==(Ln=e[8].defense+"")&&me(wt,Ln),(!on||512&t)&&Vn!==(Vn=e[9].defense+"")&&me(Vt,Vn),(!on||256&t)&&Dn!==(Dn=e[8].armor+"")&&me(St,Dn),(!on||512&t)&&xn!==(xn=e[9].armor+"")&&me(Et,xn),(!on||256&t)&&Mn!==(Mn=e[8].damage+"")&&me(Ft,Mn),(!on||512&t)&&An!==(An=e[9].damage+"")&&me(qt,An),(!on||256&t)&&Sn!==(Sn=e[8].hp+"")&&me(Qt,Sn),(!on||512&t)&&Nn!==(Nn=e[9].hp+"")&&me(tn,Nn)},i(e){on||(Oe(rn.$$.fragment,e),on=!0)},o(e){Fe(rn.$$.fragment,e),on=!1},d(e){e&&(ce(t),ce(Ge),ce(Pe),ce(nn),ce(an)),Ke(rn)}}}function ki(e){let t,n,a,r,o,s=e[0].is_owner&&hi(e)
function i(e,t){return e[1]?gi:bi}let l=i(e),c=l(e),u=e[1]&&vi(e)
return{c(){t=he("div"),n=he("div"),s&&s.c(),a=we(),c.c(),r=we(),u&&u.c(),ye(n,"class","left svelte-2rn368"),ye(t,"class","body svelte-2rn368")},m(e,i){fe(e,t,i),pe(t,n),s&&s.m(n,null),pe(n,a),c.m(n,null),pe(t,r),u&&u.m(t,null),o=!0},p(e,[r]){e[0].is_owner?s?(s.p(e,r),1&r&&Oe(s,1)):(s=hi(e),s.c(),Oe(s,1),s.m(n,a)):s&&(Ie(),Fe(s,1,1,(()=>{s=null})),je()),l===(l=i(e))&&c?c.p(e,r):(c.d(1),c=l(e),c&&(c.c(),c.m(n,null))),e[1]?u?(u.p(e,r),2&r&&Oe(u,1)):(u=vi(e),u.c(),Oe(u,1),u.m(t,null)):u&&(Ie(),Fe(u,1,1,(()=>{u=null})),je())},i(e){o||(Oe(s),Oe(u),o=!0)},o(e){Fe(s),Fe(u),o=!1},d(e){e&&ce(t),s&&s.d(),c.d(),u&&u.d()}}}function wi(e,t,n){let a,r,o,s,i,l,c,u
ft(e,xs,(e=>n(2,a=e))),ft(e,ni,(e=>n(3,r=e))),ft(e,ai,(e=>n(4,o=e))),ft(e,ri,(e=>n(5,s=e))),ft(e,si,(e=>n(6,i=e))),ft(e,oi,(e=>n(7,l=e))),ft(e,li,(e=>n(8,c=e))),ft(e,ci,(e=>n(9,u=e)))
let{relicData:f={}}=t
const d=f.defenders.map((e=>e.player_name))
let p=!1
return dt((()=>{n(1,p=!1),Ms.set(0),Ss.set([]),Gs.set(0),Qs.set([])})),e.$$set=e=>{"relicData"in e&&n(0,f=e.relicData)},[f,p,a,r,o,s,i,l,c,u,d,function(e){m("relic",e.detail)},function(){m("relic","fetchStats"),n(1,p=!0),Ms.set(f.controlled_by.guild_id),Ss.set(d),Gs.set(GameData.player().hasGroup),Qs.set(GameData.player().buffs)}]}class yi extends re{constructor(e){super(),oe(this,e,wi,ki,se,{relicData:0})}}let Ci=0
function $i(e,t){var n,r
t?.response?.data?.defenders?.length>0&&(n=a("dialog-relic"),r=t.response.data,Ci&&Ci.$destroy(),Ci=new yi({props:{relicData:r},target:n}))}function Li(e,t){"ACT_REPAIR"===t&&GameData.fetch(ht+h+gt+bt)}let Vi=!1
function Di(e,t,n,a,r,o,s,i,l){return e.beginPath(),e.arc(o+i/2,s+l/2,i/6,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.lineWidth=1,e.strokeStyle="black",e.stroke(),!0}function xi(){if(!Vi){const e=GameController.Realm.footprintTexture
e.color=L("footprintColor"),e.Draw=Di,Vi=!0}}function Mi(){GameController?.Realm?.footprintTexture&&(xi(),$.unsubscribe("fixed.realm",Mi))}let Ai=0
function Si(e){$("#statbar-gold").css("background-color",e)}function Ni(){$("#HelperSendTotal").html(Bt(L("currentGoldSentTotal"))),Number(GameData.player().gold)>Ai?Si("red"):Si("inherit")}function Hi(){Ai=L("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${L("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${Bt(Ai)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${Bt(L("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",wt),Ni(),$.subscribe(yt,Ni)}let Bi=0,Ti=0,Ei=0,Gi=0,Pi=0,Ri=0
async function _i(){const e=await Da({a:14,d:0,id:Bi.id,item_id:Bi.itemId}),t=e.response.response,n=e.response.msg
let a=n
if(0!==t){const e=n.indexOf("<");-1!==e&&(a=n.substring(0,e))}else a=`You purchased ${e.response.data.name} for ${Bt(e.response.data.cost)} gold.`
u(Ri,`${a}<br>`)}async function Fi(){const e=Zt(Pi.value)
e&&(m("NewMap","quickBuy"),await et(Jt(e,_i)),GameData.doAction(14,3,{id:Bi.id,item_id:Bi.itemId},0),Ei.close())}function Oi(){Gi?o("",Ri):function(){Gi=n({className:"fshClear",textContent:"Select how many to quick-buy:"}),Pi=Gt({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),i(Gi,Pi)
const e=f({textContent:"Quick-buy"})
d(e,Fi),i(Gi,e),Ri=n(),i(Gi,Ri),i(Ti,Gi)}()}function Ii(e,t){Bi=t,Ti=Ti||a("shopDialogConfirm"),Ti&&(Ei=Ei||$(Ti).data("hcsWorldDialogShopConfirm"),Ei&&Oi())}function ji(e){let t,n
return{c(){t=he("div"),n=ge(e[0]),ye(t,"id","tp-overlay"),ye(t,"class","svelte-1lrosbw")},m(e,a){fe(e,t,a),pe(t,n)},p(e,t){1&t&&me(n,e[0])},d(e){e&&ce(t)}}}function Wi(e){let t,n=e[1]&&ji(e)
return{c(){n&&n.c(),t=de()},m(e,a){n&&n.m(e,a),fe(e,t,a)},p(e,[a]){e[1]?n?n.p(e,a):(n=ji(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:le,o:le,d(e){e&&ce(t),n&&n.d(e)}}}function qi(e,t,n){let{tpButton:a}=t,r=0,o=0,s=!1
function i(){const e=GameData.player().teleportCooldown
n(0,r=e-Lt()+o),r>0||(clearInterval(s),n(1,s=!1),a.classList.remove("cooldown"))}return window.$.subscribe("stats.player",i),window.$.subscribe($t,(function(e,t){o=Lt(),i(),s||0!==t.response.response||n(1,s=setInterval((()=>{i()}),1e3))})),e.$$set=e=>{"tpButton"in e&&n(2,a=e.tpButton)},[r,s,a]}class Ki extends re{constructor(e){super(),oe(this,e,qi,Wi,se,{tpButton:2})}}function Yi(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}function zi(e,t){return"-"===t?e:"-"===e||e>t?"-":e}const Ui=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${Yi(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${Yi(e)}`]]
function Qi(e,t){return t[0](e)}function Xi(e){e.playerHits=zi(e.numberOfHitsRequired,e.numberOfCreatureHitsTillDead),e.creatureHits=zi(e.numberOfCreatureHitsTillDead,e.numberOfHitsRequired),e.fightStatus=function(e){const t=Ui.find(c(Qi,e))
return t?t[1](e):"Unknown"}(e)}function Ji(e,t,n){return e.callback.groupExists?t:n}function Zi(e,t,n,a){t>0&&(e.extraNotes+=`${n} = ${Math.floor(a*t*.001)}<br>`)}const el=e=>Ji(e,e.callback.groupArmorValue,e.player.armorValue)
function tl(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function nl(e){!function(e){const t=el(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}(e),function(e){Zi(e,e.player.sanctuaryLevel,"Sanc Bonus Armor",e.player.armorValue)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),tl(e)}const al=e=>Ji(e,e.callback.groupAttackValue,e.player.attackValue)
function rl(e){return Math.floor(e.creature.defense*e.player.darkCurseLevel*ot)}function ol(e){const t=al(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${rl(e)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-rl(e)
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}const sl=(e,t,n)=>Math.max(Math.ceil((e-t+1)/n/.0025),0)
function il(e){e.lowestCALevelToStillHit=sl(e.counterAttackBonusAttack,e.hitByHowMuch,e.player.attackValue),e.lowestCALevelToStillKill=sl(e.counterAttackBonusDamage,e.damageDone,e.player.damageValue)}function ll(e){il(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function cl(e,t,n){e[t]>203?e.extraNotes+=`Even with CA203 you cannot ${n} this creature<br>`:0!==e[t]&&(e.extraNotes+=`You need a minimum of CA${e[t]} to ${n} this creature<br>`)}function ul(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&ll(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){il(e),cl(e,"lowestCALevelToStillHit","hit"),cl(e,"lowestCALevelToStillKill","1-hit kill")}(e)}const fl=e=>Ji(e,e.callback.groupHPValue,e.player.hpValue)
const dl=e=>Ji(e,e.callback.groupDamageValue,e.player.damageValue)+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage,ml=e=>Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp))
function pl(e){if(function(e){const t=fl(e),{fortitudeLevel:n}=e.player
e.fortitudeExtraHPs=Math.floor(t*n*.001),n>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e),e.overallDamageValue=dl(e),e.damageDone=ml(e),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}const hl=e=>Ji(e,e.callback.groupDefenseValue,e.player.defenseValue),gl=e=>Math.floor(hl(e)*e.player.constitutionLevel*.001)
const bl=e=>e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue
function vl(e){e.overallDefenseValue=hl(e)+gl(e)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${gl(e)}<br>`)}(e),function(e){Zi(e,e.player.flinchLevel,"Flinch Bonus Attack Reduction",e.creature.attack)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*bl(e)),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(bl(e)-50))}function kl(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}const wl=e=>e.creatureHitByHowMuch>=0?"Yes":"No",yl=e=>e.hitByHowMuch>0?"Yes":"No",Cl=e=>`<span style="color:#333333">${e}</span>`,$l=e=>`<tr>${e}</tr>`,Ll=(e,t)=>`<td${t%2?"":' class="fshRight"'}>${e}</td>`,Vl=e=>$l(e.map(Ll).join("")),Dl=e=>$l(`<td bgcolor="#CD9E4B" colspan="4" align="center">${(e=>e.callback.groupExists?"Group ":"")(e)}Combat Evaluation</td>`),xl=e=>Vl([Cl("Will I hit it?"),yl(e),Cl("Extra Attack:"),`( ${e.hitByHowMuch} )`]),Ml=e=>Vl([Cl("# Hits to kill it?"),e.numberOfHitsRequired,Cl("Extra Damage:"),`( ${e.damageDone} )`]),Al=e=>Vl([Cl("Will I be hit?"),wl(e),Cl("Extra Defense:"),`( ${-1*e.creatureHitByHowMuch} )`]),Sl=e=>Vl([Cl("# Hits to kill me?"),e.numberOfCreatureHitsTillDead,Cl("Extra Armor + HP:"),`( ${-1*e.creatureDamageDone} )`]),Nl=e=>Vl([Cl("# Player Hits?"),e.playerHits,Cl("# Creature Hits?"),e.creatureHits]),Hl=e=>$l(`${Ll(Cl("Fight Status:"),0)}<td colspan="3"><span>${e.fightStatus}</span></td>`),Bl=e=>$l(`${Ll(Cl("Notes:"),0)}<td colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td>`)
let Tl=0,El=0,Gl=0
function Pl(){return or(El)?"Remove from do not kill list":"Add to the do not kill list"}function Rl(){o(Pl(),Gl)}function _l(){m("NewMap","doNotKillLink")
const e=t.doNotKillList.indexOf(El);-1===e?t.doNotKillList.push(El):t.doNotKillList.splice(e,1),Rl(),N("doNotKillList",t.doNotKillList.join()),ir()}function Fl(){Gl?Rl():function(){Gl=f({className:"fshBl",textContent:Pl()})
const e=n({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
i(e,Gl),i(Tl,e),d(Gl,_l)}()}function Ol(e,t){!function(e){if(!Tl){const t=j("body",e)
1===t.length&&([Tl]=t)}}(t),Tl&&(El=Q(e),Fl())}let Il=0,jl=0,Wl=0,ql=0
function Kl(){Wl||(jl||(jl=n(),i(Il,jl),i(Il,n({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Wl=n(),i(jl,Wl))}function Yl(e){Kl(),Be(e,Wl)}function zl(e){ql||(Kl(),ql=n(),i(jl,ql)),Be(e,ql)}function Ul(e,t){const n={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,n){3===n&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,n,e.type),n}function Ql(e,n,a){const r={}
r.callback=a,r.player=Ls(n),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(r),r.creature=Ul(e.response.data,r.player.superEliteSlayerMultiplier),function(e){var t
t=e,[kl,ol,pl,vl,nl,Xi,ul].forEach((e=>e(t)))}(r),r.evaluatorHTML=function(e){return`<table width="100%"><tbody>${Dl(e)}${xl(e)}${Ml(e)}${Al(e)}${Sl(e)}${Nl(e)}${Hl(e)}${Bl(e)}</tbody></table>`}(r),a.groupExists?zl(r.evaluatorHTML):Yl(r.evaluatorHTML)}function Xl(e){return e.members[0].name===p()}async function Jl(e,t,n){if(n){!function(e,t,n){if(!n.r?.attributes)return
const a=n.r.attributes
Ql(e,t,{groupExists:!0,groupAttackValue:a[0].value,groupDefenseValue:a[1].value,groupArmorValue:a[2].value,groupDamageValue:a[3].value,groupHPValue:a[4].value})}(e,t,await zt(n))}}async function Zl(e,t){const n=function(e){if(g(e.r))return e.r.find(Xl)?.id}(await at())
Jl(e,t,n)}async function ec(e,t){if(Il||(Il=a("dialog-viewcreature")),Il&&(Yl(""),zl(""),t?.response?.data)){Ol(t.response.data.name,Il)
const e=await Dt(!0)
e?._skills&&function(e,t){e.player.hasGroup&&Zl(e,t),Ql(e,t,{groupExists:!1})}(t,e)}}let tc=0
function nc(e){const t=j("verbs",e)
1===t.length&&xt(t[0])}function ac(){if(!tc)return
const e=a("actionList")
X("player",e).forEach(nc)}const rc="showHuntingBuffs"
function oc(){return`${en(rc)} ${tn("enabledHuntingMode")}<select name="enabledHuntingMode"><option value="1"${nn(t.enabledHuntingMode,"1")}>${t.buffsName}</option><option value="2"${nn(t.enabledHuntingMode,"2")}>${t.buffs2Name}</option><option value="3"${nn(t.enabledHuntingMode,"3")}>${t.buffs3Name}</option></select>`}let sc=0,ic=""
const lc=()=>sc,cc=()=>ic
function uc(){const e=[null,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
g(e)&&([sc,ic]=e)}function fc(e){"enabledHuntingMode"===e.target.name&&(m("NewMap","toggleEnabledHuntingMode"),t.enabledHuntingMode=e.target.value,N("enabledHuntingMode",t.enabledHuntingMode),uc(),GameData.fetch(h))}function dc(e){m("NewMap","togglePref"),t[e]=!t[e],N(e,t[e])}const mc={hideSubLvlCreature:function(){dc("hideSubLvlCreature"),GameData.fetch(bt)},hidePlayerActions:function(){m("NewMap","toggleHidePlayerActions"),tc=!tc,N("hidePlayerActions",tc),GameData.fetch(bt)},showCreatureInfo:()=>dc("showCreatureInfo"),showHuntingBuffs:function(){dc("showHuntingBuffs"),GameData.fetch(h)},showMonsterLog:()=>dc("showMonsterLog"),showTitanInfo:function(){dc("showTitanInfo"),us(GameData.realm().dynamic)},showBuffInfo:function(){dc("showBuffInfo"),In()}}
function pc(e){const t=mc[e.target.name]
Z(t)&&(e.target.blur(),t(e))}function hc(){const e=a("worldPage")
if(!e)return
const t=n({className:"fshCenter fshFten"}),r=n({id:"fshWorldPrefs",innerHTML:`${en("showCreatureInfo")}&nbsp;&nbsp;${en("showMonsterLog")}&nbsp;&nbsp;${en("showTitanInfo")}&nbsp;&nbsp;${en("showBuffInfo")}<br>${en("hideSubLvlCreature")}&nbsp;&nbsp;${en("hidePlayerActions")}&nbsp;&nbsp;${oc()}`})
d(r,pc),C(r,"change",fc),i(t,r)
const o=n()
return i(t,o),i(e,t),o}const gc=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function bc(){var e
t.combatEvaluatorBias=L("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,gc[e]?gc[e].generalVariable:1.1053),t.hpVariable=function(e){return gc[e]?gc[e].hpVariable:1.1}(t.combatEvaluatorBias)}function vc(e,t){return e[t.name]=!0,e}function kc(e,t,n){return e[Q(n)]||t.push(n),t}function wc(e){Be("",e)}function yc(e,t){const n=t.b.reduce(vc,{}),a=lc().reduce(c(kc,n),[])
a.length>0?function(e,t){Be(`You are missing some ${cc()} hunting buffs<br>(${t.join(", ")})`,e)}(e,a):wc(e)}function Cc(e,n,a){lc()&&function(e,n){t.showHuntingBuffs?yc(e,n):wc(e)}(e,a)}function $c(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function Lc(e){const t=F(e)
return t?.actions?.length?(t.actions=t.actions.filter(c($c,function(e){return e.realm?.minlevel||GameData.realm().minlevel}(t))),Mt(t)):e}function Vc(e,n){t.hideSubLvlCreature&&function(e){return e.data?.d&&an(e.data.d,bt)}(n)&&(e.dataFilter=Lc)}function Dc(e){t[e[0]]=At(e[1])}function xc(e){t[e]=At(e)}function Mc(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Dc),["doNotKillList"].forEach(xc)}function Ac(e){t[e[0]]=L(e[1])}function Sc(e){t[e]=L(e)}function Nc(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showHuntingBuffs","showHuntingBuffs"]].forEach(Ac),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(Sc)}const Hc=[function(){let e=0
window.requestAnimationFrame=t=>{const n=window.performance.now(),a=Math.max(e+16,n)
return e=a,setTimeout((()=>{t(e)}),a-n)},window.cancelAnimationFrame=clearTimeout},function(){bc(),Mc(),Nc()
const e=hc()
$.ajaxPrefilter("JSON",Vc),t.hideSubLvlCreature&&GameData.fetch(bt),function(e){uc()
const n=c(Cc,e)
$.subscribe(b,n),t.showHuntingBuffs&&window.initialGameData&&n(null,{b:window.initialGameData.player.buffs})}(e),tc=L("hidePlayerActions"),$.subscribe(te,ac),ac()},function(){vt(),kt()&&Hi()},function(){$.subscribe(Vt,ec)},function(){Mr.forEach(Ar)},function(){L("enableCreatureColoring")&&i(document.body,Ft("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(te,ir),ir(),function(){const e=GameData.doAction
GameData.doAction=ur(e)}()},function(){Wr(),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",Ur),Ur()},function(){$.subscribe(pt,Li)},function(){L("keepLogs")&&$.subscribe(G,La)},function(){window.initialGameData&&ds(0,window.initialGameData),$.subscribe(`${Pe} ${Re}`,ds)},function(){$.subscribe(Ct,Ii)},function(){$.subscribe(mt,$i)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){V("#mapTooltip")},function(){fa(),$.subscribe(k,da),$.subscribe(w,ma)},function(){In(),$.subscribe(`${b} ${v}`,In)},function(){C(a("actionList"),"mouseover",rr)},function(){const{body:e}=document
C(e,"keydown",Ca),C(e,"keyup",$a)},function(){const e=$("#world-event-badge")
e.length&&(e.off(),d(e[0],Dr))},function(){const e=T(".actionListHeaderButton.teleport")
!function(e,t){new Ki({target:e,props:t})}(e,{tpButton:e})},function(){var e
L("messageStack")&&(e=a("messageCenter"),new Er({target:e}))},function(){GameController?.Realm?.footprintTexture?xi():$.subscribe("fixed.realm",Mi)}]
function Bc(){e(Hc)}export{Bc as default}
//# sourceMappingURL=newMap-DcaQVYxi.js.map
