import{d as t}from"./dialogMsg-227939ed.js"
import{bw as e,y as s,B as o,bd as n,z as a,ah as r,aY as i,t as c,I as l,p as u,Z as d}from"./calfSystem-a8d582b6.js"
function f(t,e){d(e,t[e])}function g(){const e=n(a("HelperfshSettings").value)
if(r(e)){const s=e
i(s).forEach(c(f,s)),t("Settings loaded successfully!")}}function p(t,e){return t[e]=l(e),t}function h(){if(s())return
const t=function(){const t=[],s=new RegExp(`^${e}`)
for(let o=0,n=window.localStorage.length;o<n;o+=1){const n=window.localStorage.key(o)
n.match(s)&&t.push(n.replace(e,""))}return t}().reduce(p,{})
!function(t,e){o(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${JSON.stringify(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}(u,t),$("#HelperLoadSettings").on("click",g)}export default h
//# sourceMappingURL=load-c7a8dcb6.js.map
