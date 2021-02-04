import{d as t}from"./dialogMsg-fcad563e.js"
import{bp as e,x as s,A as o,b1 as n,y as a,ad as r,aM as i,t as c,H as l,p as u,Z as f}from"./calfSystem-0708a9bb.js"
function d(t,e){f(e,t[e])}function g(){const e=n(a("HelperfshSettings").value)
if(r(e)){const s=e
i(s).forEach(c(d,s)),t("Settings loaded successfully!")}}function p(t,e){return t[e]=l(e),t}function b(){if(s())return
const t=function(){const t=[],s=new RegExp(`^${e}`)
for(let o=0,n=window.localStorage.length;o<n;o+=1){const n=window.localStorage.key(o)
n.match(s)&&t.push(n.replace(e,""))}return t}().reduce(p,{})
!function(t,e){o(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${JSON.stringify(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}(u,t),$("#HelperLoadSettings").on("click",g)}export default b
//# sourceMappingURL=load-c154f475.js.map
