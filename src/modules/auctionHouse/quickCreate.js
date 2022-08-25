import getElementById from '../common/getElementById';
import { pcc } from '../support/layout';
import QuickCreate from './QuickCreate.svelte';

const injectQuickCreate = () => new QuickCreate({ target: pcc() });

export default function quickCreate() {
  const auctionItems = getElementById('auction-items');
  if (auctionItems) injectQuickCreate();
}
