import getElementById from '../common/getElementById';
import calf from '../support/calf';
import { pcc } from '../support/layout';
import task from '../support/task';
import oneByOne from './oneByOne';
import Trade from './Trade.svelte';

const startTrade = () => new Trade({ target: pcc() });

export default function trade() {
  const tradeItems = getElementById('trade-items');
  if (!tradeItems) return;
  if (calf.userIsDev) task(3, oneByOne);
  startTrade();
}
