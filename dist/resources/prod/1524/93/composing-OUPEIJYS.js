import{a as z}from"./chunk-FNBP6C74.js";import{a as k,b as M}from"./chunk-COH347O4.js";import{a as O}from"./chunk-YWIS4LSF.js";import{a as G,b as J}from"./chunk-HZ5DKBQV.js";import{a as h}from"./chunk-YUEMMNBE.js";import{a as S}from"./chunk-JLBP6UPB.js";import{a as $}from"./chunk-LJ3W7KBO.js";import"./chunk-IJ76LC2I.js";import{a as g}from"./chunk-MX5TZ7HK.js";import{a as f}from"./chunk-DEEYYK6E.js";import"./chunk-E6TZ5ETX.js";import{a as V}from"./chunk-JVKLZENO.js";import{a as L}from"./chunk-MUG4VEKH.js";import{a as b}from"./chunk-G77K7S5L.js";import"./chunk-NEGYQUFU.js";import"./chunk-N3EXWS22.js";import{a as _}from"./chunk-J6OWEIQO.js";import"./chunk-64W2OSE7.js";import"./chunk-ATELUZSH.js";import"./chunk-GOQRAVSB.js";import{b as i}from"./chunk-PWSQLISA.js";import{a as s}from"./chunk-HPU5ZEP3.js";import{a as E}from"./chunk-5HI4ILOP.js";import{a as Q}from"./chunk-7Z2VPPBD.js";import{a as R}from"./chunk-EGS4CZL3.js";import"./chunk-MI5ERUAI.js";import{a as P}from"./chunk-OX3SBSJB.js";import{a as w}from"./chunk-RDAHQVBW.js";import{a as N}from"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import{a}from"./chunk-66FBRD7Z.js";import"./chunk-GKVMJ4PA.js";import"./chunk-6ME2NWD5.js";import"./chunk-IFV2NFCC.js";import{a as j}from"./chunk-6YW6FXRF.js";import"./chunk-GDLA3KMJ.js";import{a as d}from"./chunk-CRWX7KCS.js";import{a as F}from"./chunk-5TOA36XP.js";import{a as m}from"./chunk-VRYLUPGH.js";import{a as C}from"./chunk-NH6FAU6Q.js";import{a as c}from"./chunk-LEOH7BX4.js";import{a as H}from"./chunk-WFI3HTBS.js";import"./chunk-5RFQSTDG.js";import"./chunk-4MID3VOD.js";import"./chunk-5L4CLVOL.js";import{a as n}from"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import{b as I}from"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import{b as A,f as B,qa as u,ra as q}from"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import{a as T}from"./chunk-3WE6KSRQ.js";function v(e){return w({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:e,fshrnd:M()}})}function U(){return`url(${A}composing/${k(1,11)}_${k(1,51)}.png)`}function W(e,t){s("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=U(),s(`Creating '<span class="fshBold">${t}</span>' Potion`,e.children[2]),s("",e.children[3])}function X(){c('[id|="composing-template"]:not(#composing-template-multi)').length===0&&a(u,!1)}function Y(e){let t=e.parentNode;t&&(s('<div class="fshScs">Success</div>',t),W(t.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),X())}function Z(e,t){let o=e.parentNode;!o||!t||(t.error?s(`<div class="fshScs">${t.error}</div>`,o):Y(e))}function ee(e){v(e.value).then(n(Z,e))}function p(e,t){t.id=`proc-${t.id}`,s("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),ee(t),G("quickcreate")}function D(e,t){e.classList.add(`left-${t.toString()}`)}function te(e){let t=c(".quickCreate .sendLink");D(e,t.length)}function oe(e,t){m("composing","FastComposeButton");let o=c('[id|="composing-template"]:not(#composing-template-multi)');if(!(o.length<e.value))for(let r=0;r<e.value;r+=1)o[r].value=t,p(o[r].nextElementSibling.nextElementSibling,o[r])}function re(e){let t=e.target,{templateId:o}=t.dataset;o&&oe(t,o)}function ne(e,t){return h({className:"awesome orange",dataset:{templateId:t},type:"button",value:e})}function ie(e,t,o,r){return r===0&&V(e[1],t.insertCell(-1)),b(t.insertCell(-1),ne((r+1).toString(),e[0])),t}function se(e,t,o){return e.reduce(n(ie,o),t.insertRow(-1)),t}function me(e,t,o){let r=O({id:"fshFastCompose"});return D(r,o),e.reduce(n(se,t),r)}function ae(e){return[e.value,e.text]}function ce(e,t,o){let r=C("#composing-template-multi option").map(ae),l=me(r,t,o);b(e,l),d(i(),re),J("quickcreate",n(te,l))}function pe(e){m("composing","FastCompose"),f(e,"<br>");let t=g("composing-potion-time",document),o=t.filter(_("ETA: n/a")).length;o>0?ce(e,t,o):f(e,"No open slots!")}function y(){let e=P("#pCC div.centered");f(e,'<span class="fsh-fast-compose">[ <label for="fast-compose"><span class="sendLink">Fast Compose</span></label> ]</span>');let t=L({className:"centered"});S(t,e);let o=h({id:"fast-compose",type:"checkbox"});S(o,e),F(o,"change",n(pe,t))}function le(e){let t=R(B,N(e));if(t){let{h:o,m:r,s:l}=t;return(o*3600+r*60+Number(l))*1e3+H()}return 0}function K(e){a(u,e)}function x(){if(!T.enableComposingAlert)return;let e=g("composing-potion-time",document),t=Math.min(...e.map(le));t===0?K(!0):(K(!1),a(q,t))}function fe(){if(I("moveComposingButtons")){let e=E("composing-error-dialog").previousElementSibling;e.setAttribute("style","text-align: right; padding: 0 38px 0 0");let t=Q("composing-level",i())[0].parentNode;$(e,t)}}function ue(e){z(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function de(e){return e.tagName==="SPAN"&&e.className==="quickCreate"}function ge(e){let t=e.previousElementSibling.previousElementSibling;t&&t.value!=="none"&&(p(e,t),m("composing","QuickCreate"))}function Ce(e){let t=e.target.parentNode;de(t)&&ge(t)}function be(){x(),C("input[id^=create-]:not(#create-multi)",i()).forEach(ue),d(i(),Ce),fe(),y()}function he(){j()&&i()&&be()}export{he as default};
//# sourceMappingURL=composing-OUPEIJYS.js.map
