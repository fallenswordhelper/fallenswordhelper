import getElementById from '../common/getElementById';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import { quickBuffSortCheckbox, quickbuffSortStorageName } from './assets';
import setValue from '../system/setValue';
import getValue from '../system/getValue';
import on from '../common/on';

var defaultBuffOrder = [];

function sortBuffs(alphabetically) {
    for (var i = 1; i <= 3; i++) {
        if (alphabetically) {
            sortBuffsHelper("block" + i, alphabetically);
        } else {
            for (var i = 1; i <= 3; i++) {
                var blockId = "block" + i;
                var buffBlock = document.querySelector("#" + blockId);
                for (var j = 0; j < defaultBuffOrder[blockId].length; j++) {
                    buffBlock.appendChild(defaultBuffOrder[blockId][j]);
                }
            }
        }
    }
}

function sortBuffsHelper(parentElementId, alphabetically) {
    var buffs = document.querySelectorAll("#" + parentElementId + " > p");
    var buffsArray = Array.prototype.slice.call(buffs, 0);
    buffsArray.sort((a, b) => a.children[0].dataset.name > b.children[0].dataset.name ? 1 : -1);
    var buffBlock = document.querySelector("#" + parentElementId);
    for (var i = 0; i < buffs.length; i++) {
        buffBlock.appendChild(buffsArray[i]);
    }
}

function onSortBuffsCheckboxChanged() {
    const checked = getElementById('quickbuffSortCheckbox').checked;
    setValue(quickbuffSortStorageName, checked);
    sortBuffs(checked);
}

export default function quickbuffSort() {
    // store the default order of buffs
    for (var i = 1; i <= 3; i++) {
        var block = "block" + i;
        defaultBuffOrder[block] = document.querySelectorAll("#" + block + " > p");
    }
    const quickbuffCheckAllCheckbox = getElementById('check-all');
    insertHtmlAfterEnd(quickbuffCheckAllCheckbox, quickBuffSortCheckbox);
    const quickbuffSortCheckbox = getElementById('quickbuffSortCheckbox');
    let qbSortPref = getValue("qbSortBuffsAlphabetically");
    quickbuffSortCheckbox.checked = qbSortPref;
    sortBuffs(qbSortPref);
    on(quickbuffSortCheckbox, 'change', onSortBuffsCheckboxChanged);
}
