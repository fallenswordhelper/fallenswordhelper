import{w as t,a4 as o,z as e,x as a,o as n,p as r,a6 as s}from"./calfSystem-740ec4d2.js"
import{j as l}from"./jConfirm-bbb6e556.js"
let i,c,u=[]
function p(){c.focus(),c.select()}function g(){u=[],c.value="[]",s("fsh_combatLog",u)}function b(){l("Clear Combat Log","Are you sure you want to clear your log?",g)}function d(t){t&&(u=t),e(`<h1>Combat Logs</h1><br /><form action="http://evolutions.yvong.com/fshlogparser.php" method="post" target="_blank"><div align="center"><textarea align="center" cols="80" rows="25" readonly style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="combatLog" name="logs">${JSON.stringify(u)}</textarea></div><br /><br /><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr><tr><td align="center" colspan="4"><b>Log Parser</b></td></tr><tr><td colspan="4" align="center">WARNING: this links to an external site not related to HCS.<br />If you wish to visit site directly URL is: http://evolutions.yvong.com/fshlogparser.php<br /><tr><td colspan=4 align="center"><input type="hidden" value="true" name="submit"><input type="submit" value="Analyze!"></td></tr></table></div></form>`,i),c=a("combatLog"),n(a("copyLog"),p),n(a("clearLog"),b)}export default function(e){t()||(i=e||r,o("fsh_combatLog").then(d))}
//# sourceMappingURL=combatLog-5692b933.js.map
