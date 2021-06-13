import{c as e}from"./calfSystem-d3f0a380.js"
import{h as n}from"./simpleCheckbox-7afb7f1a.js"
import{i as t}from"./isChecked-e1880947.js"
import{i as o}from"./isSelected-c1b89a16.js"
function s(){return`Hunting Buffs${n("Hunting Buffs","Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them.")}:`}function i(){return`<input name="showHuntingBuffs" class="fshVMid" type="checkbox" value="on"${t(e.showBuffs)}>`}function a(){return`Enabled Hunting Mode${n("Enabled Hunting Mode","This will determine which list of buffs gets checked on the world screen.")}:<select name="enabledHuntingMode"><option value="1"${o(e.enabledHuntingMode,"1")}>${e.buffsName}</option><option value="2"${o(e.enabledHuntingMode,"2")}>${e.buffs2Name}</option><option value="3"${o(e.enabledHuntingMode,"3")}>${e.buffs3Name}</option></select>`}function f(){return`${s()+i()} ${a()}`}function u(){return`<tr><td class="fshRight">${s()}</td><td colspan="3">${i()} ${a()}</td></tr>`}export{f as a,u as h}
//# sourceMappingURL=huntingBuffs-27de14c3.js.map
