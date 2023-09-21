import calf from '../../../support/calf';
import { pcc } from '../../../support/layout';
import RecallAll from './RecallAll.svelte';

function initButtons() {
  return new RecallAll({
    target: pcc(),
  });
}

export default function recallAll() {
  if (calf.subcmd === 'guildinvmgr') initButtons();
}
