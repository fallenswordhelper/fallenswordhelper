import calf from '../../../support/calf';
import { getPcc } from '../../../support/layout';
import RecallAll from './RecallAll.svelte';

function initButtons() {
  return new RecallAll({
    target: getPcc(),
  });
}

export default function recallAll() {
  if (calf.subcmd === 'guildinvmgr') initButtons();
}
