import{a as B,b as T}from"./chunk-BIPFMK2A.js";import{a as w}from"./chunk-J6G65PXY.js";import{a as v}from"./chunk-BFYDO37H.js";import"./chunk-VOQGUQNO.js";import"./chunk-HVLB52CM.js";import{a as c}from"./chunk-JQAELPMM.js";import"./chunk-K6RV6BG4.js";import{a as p}from"./chunk-7WQ5UNSS.js";import"./chunk-4IQVGLAY.js";import{a as n}from"./chunk-RK5HVFU5.js";import"./chunk-JOI2Z4NP.js";import{a as i}from"./chunk-DSQHKKZ4.js";import"./chunk-IETC7J5T.js";import"./chunk-R63U7AZ3.js";import"./chunk-NZDFBLRQ.js";import"./chunk-IH6ZKMJ6.js";import{b as l}from"./chunk-DLFJWHV6.js";import{a as h}from"./chunk-MT75LODT.js";import{a as u}from"./chunk-6SYTCZ5G.js";import"./chunk-W52WF52M.js";import"./chunk-7J7MQQGS.js";import"./chunk-KU5JAIEB.js";import"./chunk-N7M4WPYO.js";import"./chunk-ZOICBMHG.js";import"./chunk-EL33JOKC.js";import"./chunk-EOP2LXLP.js";import{a as g}from"./chunk-MK3UHL4H.js";import"./chunk-PCHFEFT4.js";import"./chunk-CEFYYGFM.js";import"./chunk-ARPRWHND.js";import"./chunk-SASH6XDT.js";import"./chunk-3E53RUR7.js";import{a}from"./chunk-TTNOFDP6.js";import{c as d}from"./chunk-5D3DZNMD.js";import"./chunk-B3TUML6P.js";import"./chunk-U2JBD6QP.js";import{a as b}from"./chunk-KXXSC5XL.js";import{a as r}from"./chunk-VVTHM3UH.js";import"./chunk-34VPQFZA.js";var s=0,o=0,m=0,f=0,x=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(?<type>\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],E=[[/\[(?<type>\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](?<line>[^[]*)/g,"<li>$1</li>"]];function N(e,t){return e.replace(t[0],t[1])}function H(e,t){return t.reduce(N,e)}function L(e){let t=H(e,x);return r.cmd==="guild"&&(t=H(t,E)),t}function I(){let e="fshBioProfile";r.cmd==="guild"&&(e=r.subcmd==="hall"?"fshBioHall":"fshBioGuild");let t=n({className:`fshBioContainer ${e}`}),k=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"});i(t,k),m=n({className:"fshBioPreview fshBioInner"}),i(t,m),i(o.parentNode,t)}function C(){r.cmd==="profile"&&p(l(),'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>')}function P(){let e=w(f.value);e&&(s=e,g("bioEditLines",e),o.rows=s)}function S(){let e=n({innerHTML:"<br>Display "});f=c({min:1,max:99,type:"number",value:s}),i(e,f),v(e," Lines ");let t=c({className:"custombutton",value:"Update Rows To Show",type:"button"});a(t,P),i(e,t),i(l(),e)}function y(){let e=L(o.value),t=T(e);h(t||e,m)}function R(){s=d("bioEditLines"),o=u("textInputBox"),o&&(I(),C(),S(),o.rows=s,r.cmd==="profile"&&a(o.parentNode,B),b(o,"keyup",y),y())}export{R as default};
//# sourceMappingURL=bioWidgets-Q5MJQXMV.js.map
