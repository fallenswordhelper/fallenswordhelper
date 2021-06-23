import OptIn from './OptIn.svelte';
import daSettingsFlags from '../_dataAccess/daSettingsFlags';
import daSettingsView from '../_dataAccess/daSettingsView';
import isArray from '../common/isArray';
import querySelector from '../common/querySelector';

let myFlags;

async function isOnLadder() {
  const response = await daSettingsView();
  myFlags = response.r?.flags;
  return myFlags?.[0];
}

async function toggleLadder(o) {
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
  const target = querySelector('#pCC table tbody');
  startApp(target);
}
