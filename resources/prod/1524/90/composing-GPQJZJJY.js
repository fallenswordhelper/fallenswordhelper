import{a as v,b as O}from"./chunk-IX7V66WY.js";import{a as z}from"./chunk-MGMTY5BQ.js";import{a as J,b as M}from"./chunk-VPKTTRTR.js";import{a as S}from"./chunk-4T4V2C3U.js";import{a as C}from"./chunk-PNPL7U5S.js";import{a as k}from"./chunk-UDMMQ2YX.js";import{a as j}from"./chunk-YM7LMH37.js";import"./chunk-KW3WKMBG.js";import{a as d}from"./chunk-4MVMG2S4.js";import{a as b}from"./chunk-AYJMSZTJ.js";import"./chunk-343LUOT5.js";import{a as V}from"./chunk-R3HP63GC.js";import{a as $}from"./chunk-YADORND2.js";import{a as h}from"./chunk-OPQD2S4Z.js";import"./chunk-XOOBRZTW.js";import"./chunk-SKVK5WKF.js";import{a as G}from"./chunk-KZGBB27Q.js";import"./chunk-6Y5I6GKP.js";import"./chunk-MJQR7DVR.js";import"./chunk-4DD6XIWS.js";import{b as i}from"./chunk-HWIYLISZ.js";import{a as m}from"./chunk-73375NDG.js";import{a as N}from"./chunk-3MHFN2TP.js";import{a as H}from"./chunk-4RHFJVDQ.js";import{a as _}from"./chunk-U4GOJLCR.js";import"./chunk-IVSPKQAF.js";import{a as L}from"./chunk-Z6NEFCOZ.js";import{a as w}from"./chunk-U3JOWR4W.js";import{a as T}from"./chunk-NPK42VJ3.js";import"./chunk-NCJHTPUM.js";import"./chunk-VH2S7CSB.js";import"./chunk-3LPJKV5E.js";import{a}from"./chunk-CR72M4ZA.js";import"./chunk-R2ELQJ5E.js";import"./chunk-RBX575YR.js";import{a as Q}from"./chunk-KY6XDBV6.js";import"./chunk-5JFQS7E5.js";import{a as u}from"./chunk-YM2P45BP.js";import{a as F}from"./chunk-KMHV5Q3X.js";import{a as s}from"./chunk-C63WRB4G.js";import{a as g}from"./chunk-E34NE2SS.js";import{a as c}from"./chunk-LFPNA5UZ.js";import{a as R}from"./chunk-U6A4VQTL.js";import"./chunk-IGXYBCKR.js";import"./chunk-65QZT3K7.js";import"./chunk-MVFZMXTS.js";import{a as n}from"./chunk-LHP5V3M7.js";import"./chunk-57B6SJJP.js";import"./chunk-5BQ45OC2.js";import"./chunk-PJNUKY76.js";import{b as P}from"./chunk-7BHYTCY7.js";import"./chunk-QXT6DFLJ.js";import"./chunk-DCMPLE27.js";import{b as B,f as q,qa as f,ra as I}from"./chunk-SHG4I62I.js";import"./chunk-MA33RQLF.js";import{a as A}from"./chunk-CHNXGBZZ.js";function y(e){return w({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:e,fshrnd:O()}})}function U(){return`url(${B}composing/${v(1,11)}_${v(1,51)}.png)`}function W(e,t){m("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=U(),m(`Creating '<span class="fshBold">${t}</span>' Potion`,e.children[2]),m("",e.children[3])}function X(){c('[id|="composing-template"]:not(#composing-template-multi)').length===0&&a(f,!1)}function Y(e){let t=e.parentNode;!t||(m('<div class="fshScs">Success</div>',t),W(t.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),X())}function Z(e,t){let o=e.parentNode;!o||!t||(t.error?m(`<div class="fshScs">${t.error}</div>`,o):Y(e))}function ee(e){y(e.value).then(n(Z,e))}function p(e,t){t.id=`proc-${t.id}`,m("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),ee(t),J("quickcreate")}function D(e,t){e.classList.add(`left-${t.toString()}`)}function te(e){let t=c(".quickCreate .sendLink");D(e,t.length)}function oe(e,t){s("composing","FastComposeButton");let o=c('[id|="composing-template"]:not(#composing-template-multi)');if(!(o.length<e.value))for(let r=0;r<e.value;r+=1)o[r].value=t,p(o[r].nextElementSibling.nextElementSibling,o[r])}function re(e){let t=e.target,{templateId:o}=t.dataset;o&&oe(t,o)}function ne(e,t){return S({className:"awesome orange",dataset:{templateId:t},type:"button",value:e})}function ie(e,t,o,r){return r===0&&V(e[1],t.insertCell(-1)),h(t.insertCell(-1),ne((r+1).toString(),e[0])),t}function me(e,t,o){return e.reduce(n(ie,o),t.insertRow(-1)),t}function se(e,t,o){let r=z({id:"fshFastCompose"});return D(r,o),e.reduce(n(me,t),r)}function ae(e){return[e.value,e.text]}function ce(e,t,o){let r=g("#composing-template-multi option").map(ae),l=se(r,t,o);h(e,l),u(i(),re),M("quickcreate",n(te,l))}function pe(e){s("composing","FastCompose"),b(e,"<br>");let t=d("composing-potion-time",document),o=t.filter(G("ETA: n/a")).length;o>0?ce(e,t,o):b(e,"No open slots!")}function E(){let e=L("#pCC div.centered");C(e.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>');let t=$({className:"centered"});k(t,e);let o=S({id:"fast-compose",type:"checkbox"});k(o,e),F(o,"change",n(pe,t))}function le(e){let t=_(q,T(e));if(t){let{h:o,m:r,s:l}=t;return(o*3600+r*60+Number(l))*1e3+R()}return 0}function K(e){a(f,e)}function x(){if(!A.enableComposingAlert)return;let e=d("composing-potion-time",document),t=Math.min(...e.map(le));t===0?K(!0):(K(!1),a(I,t))}function fe(){if(P("moveComposingButtons")){let e=N("composing-error-dialog").previousElementSibling;e.setAttribute("style","text-align: right; padding: 0 38px 0 0");let t=H("composing-level",i())[0].parentNode;j(e,t)}}function ue(e){C(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function de(e){return e.tagName==="SPAN"&&e.className==="quickCreate"}function ge(e){let t=e.previousElementSibling.previousElementSibling;t&&t.value!=="none"&&(p(e,t),s("composing","QuickCreate"))}function Ce(e){let t=e.target.parentNode;de(t)&&ge(t)}function be(){x(),g("input[id^=create-]:not(#create-multi)",i()).forEach(ue),u(i(),Ce),fe(),E()}function he(){Q()&&i()&&be()}export{he as default};
//# sourceMappingURL=composing-GPQJZJJY.js.map
