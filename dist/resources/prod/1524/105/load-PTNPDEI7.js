import{a as y}from"./chunk-TLXK3DYW.js";import{a as p}from"./chunk-LMBPY5RI.js";import{a}from"./chunk-MHWHHESW.js";import{a as c}from"./chunk-DLFQE7QF.js";import{a as d}from"./chunk-NT4BD23Z.js";import"./chunk-E3BH7XBT.js";import"./chunk-IUVEXKRJ.js";import{a as l}from"./chunk-6ZCA6D63.js";import{b as m}from"./chunk-Q3ULPWYK.js";import{a as u}from"./chunk-SSAI4GAC.js";import{a as i}from"./chunk-SY4ES3W2.js";import{a as g}from"./chunk-S7AF3SZF.js";import"./chunk-TFKKNJKY.js";import"./chunk-ZFTJPJLX.js";import{c as n}from"./chunk-R7J7NY4A.js";import{Ia as o}from"./chunk-5ELKH2XV.js";import"./chunk-BRQN5OZB.js";import{a as f}from"./chunk-BZJZQFW2.js";import"./chunk-QCTVAEOV.js";function r(){let t=[];for(let e=0,h=window.localStorage.length;e<h;e++){let s=window.localStorage.key(e);s.startsWith(o)&&t.push(s.replace(o,""))}return t}function S(t,e){u(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${c(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}function b(t,e){g(e,t[e])}function w(){let t=a(i("HelperfshSettings").value);if(l(t)){let e=t;p(e).forEach(f(b,e)),y("Settings loaded successfully!")}}function H(t,e){return t[e]=n(e),t}function x(){if(d())return;let t=r().reduce(H,{});S(m(),t),$("#HelperLoadSettings").on("click",w)}export{x as default};
//# sourceMappingURL=load-PTNPDEI7.js.map