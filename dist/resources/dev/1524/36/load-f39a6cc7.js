import{d as t}from"./dialogMsg-716cf657.js"
import{bu as e,y as s,B as o,b6 as n,z as a,ag as r,aS as i,t as c,I as l,p as u,a0 as f}from"./calfSystem-eeb1d862.js"
function g(t,e){f(e,t[e])}function d(){const e=n(a("HelperfshSettings").value)
if(r(e)){const s=e
i(s).forEach(c(g,s)),t("Settings loaded successfully!")}}function p(t,e){return t[e]=l(e),t}function h(){if(s())return
const t=function(){const t=[],s=new RegExp(`^${e}`)
for(let o=0,n=window.localStorage.length;o<n;o+=1){const n=window.localStorage.key(o)
n.match(s)&&t.push(n.replace(e,""))}return t}().reduce(p,{})
!function(t,e){o(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${JSON.stringify(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}(u,t),$("#HelperLoadSettings").on("click",d)}export default h
//# sourceMappingURL=load-f39a6cc7.js.map
