import{a as v,b as B}from"./chunk-BUEJE5AU.js";import{a as T}from"./chunk-E65F43EJ.js";import{a as w}from"./chunk-GDKPRDHC.js";import"./chunk-YDF2ZUKO.js";import"./chunk-A3RMIMQB.js";import{a as c}from"./chunk-NSIE2BGX.js";import"./chunk-PEST2X2S.js";import{a as b}from"./chunk-W5TZOL5W.js";import"./chunk-NT4STL35.js";import{a as n}from"./chunk-MFU3L6UV.js";import{a as i}from"./chunk-NZDRUEQ7.js";import"./chunk-NTMW32IA.js";import"./chunk-7UPVBJI2.js";import"./chunk-WDKM7RFE.js";import"./chunk-NBGTZWFP.js";import"./chunk-ZCYTQ2UF.js";import"./chunk-2MNOMCC3.js";import"./chunk-WFSZD2EF.js";import{a as g}from"./chunk-ROGCWJM3.js";import"./chunk-PPVZKS76.js";import"./chunk-MVK2MUWC.js";import"./chunk-J27NFZBK.js";import"./chunk-Z4DLYK4X.js";import{b as l}from"./chunk-Q224JHGT.js";import{a as h}from"./chunk-EKJRFQUL.js";import{a as p}from"./chunk-7KZSXEZV.js";import"./chunk-LQUQAOOA.js";import"./chunk-Y6VKRV7H.js";import"./chunk-QTXZJQPG.js";import"./chunk-NSORKVUP.js";import"./chunk-BBWJJBGA.js";import{a}from"./chunk-6KVKWMOW.js";import{b as d}from"./chunk-ILOP54SQ.js";import"./chunk-AGGFW4LO.js";import{a as u}from"./chunk-XGNI62R7.js";import"./chunk-QFVOKILJ.js";import{a as r}from"./chunk-6ZU7XATI.js";var s=0,o=0,m=0,f=0,x=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(?<type>\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],E=[[/\[(?<type>\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](?<line>[^[]*)/g,"<li>$1</li>"]];function N(e,t){return e.replace(t[0],t[1])}function H(e,t){return t.reduce(N,e)}function L(e){let t=H(e,x);return r.cmd==="guild"&&(t=H(t,E)),t}function C(){let e="fshBioProfile";r.cmd==="guild"&&(e=r.subcmd==="hall"?"fshBioHall":"fshBioGuild");let t=n({className:`fshBioContainer ${e}`}),k=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"});i(t,k),m=n({className:"fshBioPreview fshBioInner"}),i(t,m),i(o.parentNode,t)}function I(){r.cmd==="profile"&&b(l,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>')}function P(){let e=T(f.value);e&&(s=e,g("bioEditLines",e),o.rows=s)}function S(){let e=n({innerHTML:"<br>Display "});f=c({min:1,max:99,type:"number",value:s}),i(e,f),w(e," Lines ");let t=c({className:"custombutton",value:"Update Rows To Show",type:"button"});a(t,P),i(e,t),i(l,e)}function y(){let e=L(o.value),t=B(e);h(t||e,m)}function R(){s=d("bioEditLines"),o=p("textInputBox"),o&&(C(),I(),S(),o.rows=s,r.cmd==="profile"&&a(o.parentNode,v),u(o,"keyup",y),y())}export{R as default};
//# sourceMappingURL=bioWidgets-5GL7FMYH.js.map
