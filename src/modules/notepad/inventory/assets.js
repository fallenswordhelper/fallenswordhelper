export const defaultOptions = {
  checkedElements: {
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    100: 1,
    101: 1,
    102: 1,
    103: 1,
    104: 1,
    105: 1,
    106: 1,
  },
  fshMinLvl: 1,
  fshMaxLvl: 9999,
};
export const invManFilter = '<table class="fshInvFilter">'
  + '<tr><th colspan="14">@@reportTitle@@</th>'
  + '<th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr>'
  + '<tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td>'
  + '<td class="fshRight">&nbsp;Helmet:</td>'
  + '<td><input id="fshHelmet" type="checkbox" item="0"/></td>'
  + '<td class="fshRight">&nbsp;Armor:</td>'
  + '<td><input id="fshArmor" type="checkbox" item="1"/></td>'
  + '<td class="fshRight">&nbsp;Gloves:</td>'
  + '<td><input id="fshGloves" type="checkbox" item="2"/></td>'
  + '<td class="fshRight">&nbsp;Boots:</td>'
  + '<td><input id="fshBoots" type="checkbox" item="3"/></td>'
  + '<td class="fshRight">&nbsp;Weapon:</td>'
  + '<td><input id="fshWeapon" type="checkbox" item="4"/></td>'
  + '<td></td>'
  + '<td class="fshRight">&nbsp;Min lvl:</td>'
  + '<td rowspan="2">'
  + '<input id="fshMinLvl" class="fshNumberInput" type="number" value="1"/><br>'
  + '<input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999"/>'
  + '</td>'
  + '</tr><tr>'
  + '<td class="fshRight">&nbsp;Shield:</td>'
  + '<td><input id="fshShield" type="checkbox" item="5"/></td>'
  + '<td class="fshRight">&nbsp;Ring:</td>'
  + '<td><input id="fshRing" type="checkbox" item="6"/></td>'
  + '<td class="fshRight">&nbsp;Amulet:</td>'
  + '<td><input id="fshAmulet" type="checkbox" item="7"/></td>'
  + '<td class="fshRight">&nbsp;Rune:</td>'
  + '<td><input id="fshRune" type="checkbox" item="8"/></td>'
  + '<td class="fshRight">&nbsp;Sets Only:</td>'
  + '<td><input id="fshSets" item="-1" type="checkbox"/></td>'
  + '<td></td>'
  + '<td class="fshRight">&nbsp;Max lvl:</td>'
  + '</tr><tr>'
  + '<td colspan="2">'
  + '&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td>'
  + '<td colspan="2">'
  + '&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td>'
  + '<td colspan="2">'
  + '&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td>'
  + '<td colspan="6"></td>'
  + '<td><input id="fshReset" type="button" value="Reset"/></td>'
  + '</tr>'
  + '<tr>'
  + '<td class="fshRight">&nbsp;Quest Item:</td>'
  + '<td><input id="fshQuest" item="9" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Potion:</td>'
  + '<td><input id="fshPotion" item="10" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Resource:</td>'
  + '<td><input id="fshResource" item="12" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Recipe:</td>'
  + '<td><input id="fshRecipe" item="13" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Container:</td>'
  + '<td><input id="fshContainer" item="14" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Frag Stash:</td>'
  + '<td><input id="fshStash" item="16" type="checkbox"/></td>'
  + '<td class="fshRight">&nbsp;Composed:</td>'
  + '<td><input id="fshComposed" item="15" type="checkbox"/></td>'
  + '<td></td></tr>'
  + '<tr>'
  + '<td class="fshRight">&nbsp;Common:</td>'
  + '<td><input id="fshCommon" item="100" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Rare:</td>'
  + '<td><input id="fshRare" item="101" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Unique:</td>'
  + '<td><input id="fshUnique" item="102" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Legendary:</td>'
  + '<td><input id="fshLegendary" item="103" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Super Elite:</td>'
  + '<td><input id="fshSuperElite" item="104" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Crystalline:</td>'
  + '<td><input id="fshCrystalline" item="105" type="checkbox" checked/></td>'
  + '<td class="fshRight">&nbsp;Epic:</td>'
  + '<td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/>'
  + '</td>'
  + '</tr>'
  + '</table>';
export const inventoryCheckAll = {
  0: 1,
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
  11: 1,
  12: 1,
  13: 1,
  14: 1,
  15: 1,
  16: 1,
  100: 1,
  101: 1,
  102: 1,
  103: 1,
  104: 1,
  105: 1,
  106: 1,
};
export const craftHash = {
  Perfect: { abbr: 'Perf', colour: '#00b600', index: 8 },
  Excellent: { abbr: 'Exc', colour: '#f6ed00', index: 7 },
  'Very Good': { abbr: 'VG', colour: '#f67a00', index: 6 },
  Good: { abbr: 'Good', colour: '#f65d00', index: 5 },
  Average: { abbr: 'Ave', colour: '#f64500', index: 4 },
  Poor: { abbr: 'Poor', colour: '#f61d00', index: 3 },
  'Very Poor': { abbr: 'VPr', colour: '#b21500', index: 2 },
  Uncrafted: { abbr: 'Unc', colour: '#666666', index: 1 },
};
