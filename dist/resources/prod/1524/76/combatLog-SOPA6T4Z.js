import{a as i}from"./chunk-HJJ7OT46.js";import"./chunk-LEMC2L2I.js";import"./chunk-UEOABNNM.js";import"./chunk-F2QNPXG3.js";import"./chunk-S3MA7IJF.js";import{a as s}from"./chunk-EW7XMHN6.js";import"./chunk-RNWAALFB.js";import{a as g}from"./chunk-WOUGPMQ4.js";import{b as l}from"./chunk-5YL45SUV.js";import{a as m}from"./chunk-JW3IW67J.js";import{a as o}from"./chunk-T5HQ7FPX.js";import"./chunk-SON5T5EI.js";import"./chunk-CQJA6XZZ.js";import"./chunk-J55DBM2B.js";import{a as u,b as f}from"./chunk-5KIRUYW3.js";import"./chunk-QGP7DAK6.js";import"./chunk-VQ4XLJED.js";import"./chunk-LTD25OUX.js";import"./chunk-YXCGOJCF.js";import"./chunk-GQZRPO65.js";import{a as c}from"./chunk-T2BL2V55.js";import{a as n}from"./chunk-IIWUY4RG.js";import"./chunk-IRX7VNA6.js";import"./chunk-ZOSLBUG4.js";import"./chunk-INHQR3KU.js";import"./chunk-6DZWFVI7.js";import"./chunk-O5WVQXEQ.js";import"./chunk-KIM4IHFF.js";import"./chunk-AQ577ZPT.js";var e=[],r;function b(){r.focus(),r.select()}function L(){e=[],r.value="[]",f("fsh_combatLog",e)}function d(){i("Clear Combat Log","Are you sure you want to clear your log?",L)}function y(a,t){t&&(e=t),m(`<h1>Combat Logs</h1><br><div align="center"><textarea class="fshCombatLog" readonly id="combatLog" name="logs">${s(e)}</textarea><br><br><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr></table></div>`,a),r=o("combatLog"),n(o("copyLog"),b),n(o("clearLog"),d)}async function C(a){if(g())return;let t=await u("fsh_combatLog");y(a||l,t),c("ui-dialog-titlebar-close").forEach(p=>p.blur())}export{C as default};
//# sourceMappingURL=combatLog-SOPA6T4Z.js.map