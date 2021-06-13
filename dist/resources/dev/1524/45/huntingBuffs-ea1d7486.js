import{c as e}from"./calfSystem-6a3c85e0.js"
import{h as n}from"./simpleCheckbox-9a762acc.js"
import{i as t}from"./isChecked-1aa3d1a2.js"
import{i as o}from"./isSelected-f063e2cb.js"
function s(){return`Hunting Buffs${n("Hunting Buffs","Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them.")}:`}function a(){return`<input name="showHuntingBuffs" class="fshVMid" type="checkbox" value="on"${t(e.showBuffs)}>`}function i(){return`Enabled Hunting Mode${n("Enabled Hunting Mode","This will determine which list of buffs gets checked on the world screen.")}:<select name="enabledHuntingMode"><option value="1"${o(e.enabledHuntingMode,"1")}>${e.buffsName}</option><option value="2"${o(e.enabledHuntingMode,"2")}>${e.buffs2Name}</option><option value="3"${o(e.enabledHuntingMode,"3")}>${e.buffs3Name}</option></select>`}function u(){return`${s()+a()} ${i()}`}function f(){return`<tr><td class="fshRight">${s()}</td><td colspan="3">${a()} ${i()}</td></tr>`}export{u as a,f as h}
//# sourceMappingURL=huntingBuffs-ea1d7486.js.map
