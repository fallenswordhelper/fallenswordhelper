import daSettingsFlags from '../_dataAccess/daSettingsFlags';
import daSettingsView from '../_dataAccess/daSettingsView';
import isArray from '../common/isArray';
import querySelector from '../common/querySelector';
import getValue from '../system/getValue';
import OptIn from './OptIn.svelte';

let myFlags = 0;

async function isOnLadder() {
  const response = await daSettingsView();
  myFlags = response.r?.flags;
  return myFlags?.[0];
}

function toggleLadder(o) {
  if (isArray(myFlags)) {
    myFlags[0] = o;
    return daSettingsFlags(myFlags);
  }
}

function startApp(target) {
  return new OptIn({
    props: { toggleLadder, isOnLadder },
    target,
  });
}

export default function optInWidget() {
  if (getValue('optInOnLadderPage')) {
    const target = querySelector('#pCC table tbody');
    startApp(target);
  }
}
