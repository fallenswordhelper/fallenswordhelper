import RecallAll from './RecallAll.svelte';
import calf from '../../../support/calf';
import { getPcc } from '../../../support/layout';

function initButtons() {
  return new RecallAll({
    target: getPcc(),
  });
}

export default function recallAll() {
  if (calf.subcmd === 'guildinvmgr') initButtons();
}
