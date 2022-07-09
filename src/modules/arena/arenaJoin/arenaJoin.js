import ArenaJoin from './ArenaJoin.svelte';
import arena from '../arena';
import getElementById from '../../common/getElementById';
import { getPcc } from '../../support/layout';
import interceptSubmit from '../../common/interceptSubmit';

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
