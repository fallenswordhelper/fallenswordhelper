import getValue from '../../system/getValue';
import { newGuildLogUrl, notepadBlankUrl, playerIdUrl } from '../../support/constants';

const betaSection = '<h3>Beta Features</h3><ul>'
  + `<li><a href="${notepadBlankUrl}reliclist">Relic List</a><sup class="fshRed">beta</sup></li>`
  + '</ul>';

export default function getHelperMenuBlob() {
  return '<div class="column"><h3>Character</h3><ul>'
    + '<li><span class="fshLink">Buff Log</span></li>'
    + '<li><span class="fshLink">Combat Log</span></li>'
    + '<li><span class="fshLink">Creature Log</span></li>'
    + '<li><span class="fshLink">Recipe Manager</span></li>'
    + '<li><span class="fshLink">Quick Links</span></li>'
    + `<li><a href="${notepadBlankUrl}invmanagernew">Inventory Manager</a></li>`
    + '</ul><h3>Actions</h3><ul>'
    + '<li><span class="fshLink">Find Buffs</span></li>'
    + '<li><span class="fshLink">Find Other</span></li>'
    + '<li><span class="fshLink">Online Players</span></li>'
    + '<li><span class="fshLink">AH Quick Search</span></li>'
    + '</ul><h3>Guild</h3><ul>'
    + `<li><a href="${notepadBlankUrl}guildinvmgr">Guild Inventory</a></li>`
    + `<li><a href="${newGuildLogUrl}">New Guild Log</a></li>`
    + '</ul><h3>Extra</h3><ul>'
    + '<li><span class="fshLink">Quick Extract</span></li>'
    + '<li><span class="fshLink">Quick Wear</span></li>'
    + '<li><span class="fshLink">FS Box Log</span></li></ul>'
    + `${getValue('betaOptIn') ? betaSection : ''}`
    + '<h3>FSH developer quick links</h3><ul>'
    + '<li><span class="a-reply" target_player="PointyHair">PM</span> '
    + `<a href="${playerIdUrl}1963510">PointyHair</a></li>`
    + '</ul></div>';
}
