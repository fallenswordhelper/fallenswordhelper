import{a as y}from"./chunk-UUYIHBBF.js";import{a}from"./chunk-3E5GTXFM.js";import{a as p}from"./chunk-OTHBOUSV.js";import{b as f}from"./chunk-RAYQVTAM.js";import{a as m}from"./chunk-D3KDK55I.js";import{a as i}from"./chunk-H7PVPP5R.js";import{a as d}from"./chunk-Y4DXEYJJ.js";import{a as l}from"./chunk-IOZYQ6RN.js";import{a as g}from"./chunk-5LR3A42B.js";import"./chunk-33ZGTI4J.js";import{a as u}from"./chunk-NMGFN2IA.js";import"./chunk-LLG4LHHP.js";import"./chunk-QTGPIERC.js";import"./chunk-XSYT53R5.js";import{a as c}from"./chunk-SHQZDRQN.js";import{b as n}from"./chunk-BS7QT2XM.js";import"./chunk-E6LZ7VE5.js";import{Ha as o}from"./chunk-6NXGNKYF.js";import"./chunk-EWKMCZCJ.js";function r(){let t=[];for(let e=0,h=window.localStorage.length;e<h;e++){let s=window.localStorage.key(e);s.startsWith(o)&&t.push(s.replace(o,""))}return t}function S(t,e){m(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${p(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}function b(t,e){g(e,t[e])}function w(){let t=a(i("HelperfshSettings").value);if(l(t)){let e=t;d(e).forEach(c(b,e)),y("Settings loaded successfully!")}}function H(t,e){return t[e]=n(e),t}function x(){if(u())return;let t=r().reduce(H,{});S(f(),t),$("#HelperLoadSettings").on("click",w)}export{x as default};
//# sourceMappingURL=load-U7FMLRAB.js.map