import{y as o,B as t,z as a,o as e,p as n}from"./calfSystem-d3f0a380.js"
import{j as s}from"./jConfirm-3e117d77.js"
import{g as r,s as c}from"./idb-13440348.js"
let l,i=[]
function u(){l.focus(),l.select()}function f(){i=[],l.value="[]",c("fsh_combatLog",i)}function g(){s("Clear Combat Log","Are you sure you want to clear your log?",f)}async function m(s){if(o())return
const c=await r("fsh_combatLog")
!function(o,n){n&&(i=n),t(`<h1>Combat Logs</h1><br><div align="center"><textarea align="center" cols="80" rows="25" readonly style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="combatLog" name="logs">${JSON.stringify(i)}</textarea><br><br><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr></table></div>`,o),l=a("combatLog"),e(a("copyLog"),u),e(a("clearLog"),g)}(s||n,c)}export default m
//# sourceMappingURL=combatLog-213d2373.js.map
