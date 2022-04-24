import ArenaJoin from './ArenaJoin.svelte';
import arena from '../arena';
import getElementById from '../../common/getElementById';
import interceptSubmit from '../../common/interceptSubmit';
import { pCC } from '../../support/layout';

function startApp(constructor) {
  return new constructor({
    target: pCC,
  });
}

export default function arenaJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    arena();
  } else {
    interceptSubmit();
    startApp(ArenaJoin);
  }
}
