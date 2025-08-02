import executeAll from '../../common/executeAll';
import runDefault from '../../common/runDefault';
import getValue from '../../system/getValue';
import getIsSelf from '../getIsSelf';
import override from '../backpack/widget/override';
import storeVL from './storeVL';

async function doFastDebuff() {
  const fastDebuff = getValue('fastDebuff');
  const disableDeactivatePrompts = getValue('disableDeactivatePrompts');
  if (fastDebuff || disableDeactivatePrompts) {
    const module = await import('./debuff');
    module.default(fastDebuff, disableDeactivatePrompts);
  }
}

function doAllyEnemy() {
  if (getValue('countAllyEnemy')) {
    runDefault(import('./profileAllyEnemy'));
  }
}

function doFastWear() {
  if (getValue('enableQuickDrink')) {
    runDefault(import('../backpack/fastWear'));
  }
}

function doComponents() {
  if (getValue('componentWidgets')) {
    runDefault(import('../components/components'));
  }
}

function doQuickWearLink() {
  const equipOption = getValue('equipping');
  if(equipOption === 'quickWearLink') {
    runDefault(import('./quickWearLink'));
  }
  else if(equipOption === 'backpackWidget') {
    override();
  }
}

function doSelectAllLink() {
  if (getValue('selectAllLink')) {
    runDefault(import('./selectAllLink'));
  }
}

function doNekidBtn() {
  if (getValue('nekidButton')) {
    runDefault(import('./nekidBtn'));
  }
}

function doAjaxifySections() {
  if (getValue('ajaxifyProfileSections')) {
    runDefault(import('./ajaxifyProfileSections'));
  }
}

export default function ifSelf() {
  if (getIsSelf()) {
    // self inventory
    executeAll([
      doFastDebuff,
      doAllyEnemy,
      doFastWear,
      doComponents,
      doQuickWearLink,
      doSelectAllLink,
      storeVL,
      doNekidBtn,
      doAjaxifySections,
    ]);
  }
}
