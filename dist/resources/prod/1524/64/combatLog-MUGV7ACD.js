import{a as m}from"./chunk-Z2VPU7AG.js";import"./chunk-E3XWNKVY.js";import"./chunk-NFDSTU22.js";import"./chunk-3DWHDW4D.js";import"./chunk-RVEJ4C26.js";import"./chunk-XG256B2T.js";import{a as g}from"./chunk-EUEELQXP.js";import{b as l}from"./chunk-P664PW54.js";import{a as c}from"./chunk-XJ5473QP.js";import{a as o}from"./chunk-WM64FGHN.js";import"./chunk-LXVMDOGR.js";import"./chunk-GX4J242O.js";import"./chunk-X5N7OOVX.js";import{a as s,b as u}from"./chunk-PUT3KB2D.js";import"./chunk-ZZU2SK7K.js";import"./chunk-MKQZLDMS.js";import"./chunk-55RTNKIA.js";import"./chunk-X73J5C7S.js";import"./chunk-5TFX5HF5.js";import{a as i}from"./chunk-SXGAQBQ6.js";import{a as n}from"./chunk-KM25KKJO.js";import"./chunk-NG7LLWFJ.js";import"./chunk-45P77O4Z.js";import"./chunk-6FX7G55Z.js";import"./chunk-O24SBNSZ.js";import"./chunk-DW345X2O.js";import"./chunk-AWEYVB2J.js";import"./chunk-UUU5NSJN.js";var e=[],r;function b(){r.focus(),r.select()}function p(){e=[],r.value="[]",u("fsh_combatLog",e)}function L(){m("Clear Combat Log","Are you sure you want to clear your log?",p)}function d(a,t){t&&(e=t),c(`<h1>Combat Logs</h1><br><div align="center"><textarea class="fshCombatLog" readonly id="combatLog" name="logs">${JSON.stringify(e)}</textarea><br><br><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr></table></div>`,a),r=o("combatLog"),n(o("copyLog"),b),n(o("clearLog"),L)}async function y(a){if(g())return;let t=await s("fsh_combatLog");d(a||l,t),i("ui-dialog-titlebar-close").forEach(f=>f.blur())}export{y as default};
//# sourceMappingURL=combatLog-MUGV7ACD.js.map
