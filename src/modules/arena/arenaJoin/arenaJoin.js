import getElementById from '../../common/getElementById';
import interceptSubmit from '../../common/interceptSubmit';
import { pcc } from '../../support/layout';
import arena from '../arena';
import ArenaJoin from './ArenaJoin.svelte';

function startApp() {
  return new ArenaJoin({ target: pcc() });
}

export default function arenaJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    arena();
  } else {
    interceptSubmit();
    startApp();
  }
}
