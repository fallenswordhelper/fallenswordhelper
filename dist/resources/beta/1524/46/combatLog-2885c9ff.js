import{y as o,B as t,z as a,o as e,p as n}from"./calfSystem-cbf77dd7.js"
import{j as s}from"./jConfirm-55e22f63.js"
import{g as c,s as r}from"./idb-82a91df1.js"
let l,i=[]
function u(){l.focus(),l.select()}function f(){i=[],l.value="[]",r("fsh_combatLog",i)}function g(){s("Clear Combat Log","Are you sure you want to clear your log?",f)}async function m(s){if(o())return
const r=await c("fsh_combatLog")
!function(o,n){n&&(i=n),t(`<h1>Combat Logs</h1><br><div align="center"><textarea align="center" cols="80" rows="25" readonly style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="combatLog" name="logs">${JSON.stringify(i)}</textarea><br><br><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr></table></div>`,o),l=a("combatLog"),e(a("copyLog"),u),e(a("clearLog"),g)}(s||n,r)}export default m
//# sourceMappingURL=combatLog-2885c9ff.js.map
