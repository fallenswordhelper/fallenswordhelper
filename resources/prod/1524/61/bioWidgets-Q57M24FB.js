import{a as v,b as w}from"./chunk-U6V6FBX2.js";import{a as E}from"./chunk-SXK7GCZM.js";import{a as B}from"./chunk-GYLDBTBA.js";import"./chunk-3VTD7Y7G.js";import"./chunk-KMGCVVVJ.js";import{a}from"./chunk-ONHZNTGL.js";import"./chunk-K32J6RS5.js";import{a as b}from"./chunk-DJH7MW43.js";import"./chunk-W5RHDDBD.js";import{a as n}from"./chunk-4JAOIN2Q.js";import"./chunk-NRF5E4NM.js";import{a as i}from"./chunk-EERRLM6T.js";import"./chunk-EFF7KNX2.js";import"./chunk-N35L4X3I.js";import"./chunk-M74LU33Y.js";import"./chunk-3A25HTZJ.js";import"./chunk-SRR4B7GE.js";import"./chunk-RZ3TV2NA.js";import{a as h}from"./chunk-GN5NA7YF.js";import"./chunk-Y4CNOL4E.js";import"./chunk-QCFSLNAO.js";import"./chunk-ISMAARKL.js";import"./chunk-V75REFMA.js";import{b as l}from"./chunk-ZTLAKSAF.js";import{a as g}from"./chunk-BRIPXERW.js";import{a as p}from"./chunk-A5UFVDS4.js";import"./chunk-W4SU7VMV.js";import"./chunk-TBHB36S6.js";import"./chunk-L35RWJ6D.js";import"./chunk-3XARJZUK.js";import"./chunk-ILE2VADS.js";import{a as m}from"./chunk-DOJ57NAO.js";import{b as d}from"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import{a as f}from"./chunk-GWVOQB64.js";import"./chunk-I67LU25W.js";import{a as r}from"./chunk-PH4INCXG.js";var s,o,c,u,k=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],x=[[/\[(\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](.*?)<br>/g,"<li>$1</li>"]];function I(e,t){return e.replace(t[0],t[1])}function H(e,t){return t.reduce(I,e)}function N(e){let t=H(e,k);return r.cmd==="guild"&&(t=H(t,x)),t}function L(){let e="fshBioProfile";r.cmd==="guild"&&(r.subcmd==="hall"?e="fshBioHall":e="fshBioGuild");let t=n({className:`fshBioContainer ${e}`}),y=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"});i(t,y),c=n({className:"fshBioPreview fshBioInner"}),i(t,c),i(o.parentNode,t)}function C(){r.cmd==="profile"&&b(l,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>')}function P(){let e=E(u.value);e&&(s=e,h("bioEditLines",e),o.rows=s)}function S(){let e=n({innerHTML:"<br>Display "});u=a({min:1,max:99,type:"number",value:s}),i(e,u),B(e," Lines ");let t=a({className:"custombutton",value:"Update Rows To Show",type:"button"});m(t,P),i(e,t),i(l,e)}function T(){let e=N(o.value),t=w(e);g(t||e,c)}function V(){s=d("bioEditLines"),o=p("textInputBox"),!!o&&(L(),C(),S(),o.rows=s,r.cmd==="profile"&&m(o.parentNode,v),f(o,"keyup",T),T())}export{V as default};
//# sourceMappingURL=bioWidgets-Q57M24FB.js.map
