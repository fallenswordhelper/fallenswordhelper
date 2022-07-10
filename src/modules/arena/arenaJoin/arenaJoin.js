import getElementById from '../../common/getElementById';
import interceptSubmit from '../../common/interceptSubmit';
import { getPcc } from '../../support/layout';
import arena from '../arena';
import ArenaJoin from './ArenaJoin.svelte';

function startApp(constructor) {
  return new constructor({
    target: getPcc(),
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
