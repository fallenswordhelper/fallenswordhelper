import{c as e}from"./calfSystem-fe534823.js"
import{h as n}from"./simpleCheckbox-e2f994de.js"
import{i as t}from"./isChecked-6d3ab351.js"
import{i as o}from"./isSelected-deb32a59.js"
function s(){return`Hunting Buffs${n("Hunting Buffs","Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them.")}:`}function i(){return`<input name="showHuntingBuffs" class="fshVMid" type="checkbox" value="on"${t(e.showBuffs)}>`}function u(){return`Enabled Hunting Mode${n("Enabled Hunting Mode","This will determine which list of buffs gets checked on the world screen.")}:<select name="enabledHuntingMode"><option value="1"${o(e.enabledHuntingMode,"1")}>${e.buffsName}</option><option value="2"${o(e.enabledHuntingMode,"2")}>${e.buffs2Name}</option><option value="3"${o(e.enabledHuntingMode,"3")}>${e.buffs3Name}</option></select>`}function f(){return`${s()+i()} ${u()}`}function a(){return`<tr><td class="fshRight">${s()}</td><td colspan="3">${i()} ${u()}</td></tr>`}export{f as a,a as h}
//# sourceMappingURL=huntingBuffs-186f3e7f.js.map
