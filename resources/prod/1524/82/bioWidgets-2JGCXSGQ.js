import{a as B,b as T}from"./chunk-ZFXTIMHL.js";import{a as w}from"./chunk-332JUH5V.js";import{a as v}from"./chunk-GECH5JSW.js";import"./chunk-FIASRSUQ.js";import"./chunk-N646L25C.js";import{a as c}from"./chunk-IHUUDZVT.js";import"./chunk-7MQGPJ76.js";import{a as p}from"./chunk-YVPYZHJW.js";import"./chunk-SRSFKD6I.js";import"./chunk-VKNAZHSW.js";import{a as n}from"./chunk-QGV7XG72.js";import{a as i}from"./chunk-QPQYH7ZQ.js";import"./chunk-NDSZEOFH.js";import"./chunk-VAQJPTXA.js";import"./chunk-H6PS5VCQ.js";import"./chunk-P7MQW4MV.js";import{b as l}from"./chunk-CBMSPOBL.js";import{a as h}from"./chunk-C4VXH3KO.js";import{a as u}from"./chunk-5E32VBFN.js";import"./chunk-6DMKKUYZ.js";import"./chunk-V2OMBOZU.js";import"./chunk-PNTHXLML.js";import"./chunk-MFXNKIYL.js";import"./chunk-CCHDXXIW.js";import"./chunk-LWLVQTKS.js";import"./chunk-WBTHTD34.js";import{a as g}from"./chunk-FPGEPPZC.js";import"./chunk-IRBVAK7D.js";import"./chunk-PF3P35LS.js";import"./chunk-G34A357Q.js";import"./chunk-EJENCRJV.js";import"./chunk-IWCA3B2P.js";import{a}from"./chunk-HMPLMOXP.js";import{b as d}from"./chunk-EEF6C5L4.js";import"./chunk-SVYRHE6Z.js";import{a as b}from"./chunk-OIO6LGXZ.js";import"./chunk-KWAUBU52.js";import{a as r}from"./chunk-TISVYXYU.js";import"./chunk-S3EM322F.js";var s=0,o=0,m=0,f=0,x=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(?<type>\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],E=[[/\[(?<type>\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](?<line>[^[]*)/g,"<li>$1</li>"]];function N(e,t){return e.replace(t[0],t[1])}function H(e,t){return t.reduce(N,e)}function L(e){let t=H(e,x);return r.cmd==="guild"&&(t=H(t,E)),t}function I(){let e="fshBioProfile";r.cmd==="guild"&&(e=r.subcmd==="hall"?"fshBioHall":"fshBioGuild");let t=n({className:`fshBioContainer ${e}`}),k=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"});i(t,k),m=n({className:"fshBioPreview fshBioInner"}),i(t,m),i(o.parentNode,t)}function C(){r.cmd==="profile"&&p(l(),'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>')}function P(){let e=w(f.value);e&&(s=e,g("bioEditLines",e),o.rows=s)}function S(){let e=n({innerHTML:"<br>Display "});f=c({min:1,max:99,type:"number",value:s}),i(e,f),v(e," Lines ");let t=c({className:"custombutton",value:"Update Rows To Show",type:"button"});a(t,P),i(e,t),i(l(),e)}function y(){let e=L(o.value),t=T(e);h(t||e,m)}function R(){s=d("bioEditLines"),o=u("textInputBox"),o&&(I(),C(),S(),o.rows=s,r.cmd==="profile"&&a(o.parentNode,B),b(o,"keyup",y),y())}export{R as default};
//# sourceMappingURL=bioWidgets-2JGCXSGQ.js.map
