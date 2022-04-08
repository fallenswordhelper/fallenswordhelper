import RecallAll from './RecallAll.svelte';
import calf from '../../../support/calf';
import { pCC } from '../../../support/layout';

function initButtons() {
  return new RecallAll({
    target: pCC,
  });
}

export default function recallAll() {
  if (calf.subcmd === 'guildinvmgr') initButtons();
}
