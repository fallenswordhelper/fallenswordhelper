import { mount } from 'svelte';
import getElementById from '../../common/getElementById';
import interceptSubmit from '../../common/interceptSubmit';
import { pcc } from '../../support/layout';
import arena from '../arena';
import ArenaJoin from './ArenaJoin.svelte';

export default function arenaJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    arena();
  } else {
    interceptSubmit();
    mount(ArenaJoin, { target: pcc() });
  }
}
