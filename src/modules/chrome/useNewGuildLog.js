import sendEvent from '../analytics/sendEvent';
import closest from '../common/closest';
import getElementById from '../common/getElementById';
import hideElement from '../common/hideElement';
import hrefIs from '../common/hrefIs';
import on from '../common/on';
import { guildLogUrl } from '../support/constants';
import guildLog from './pageSwitcher/loader/guildLog';

const isGuildLogLink = hrefIs(guildLogUrl);

function handleClick(e) {
  const anchor = closest('a', e.target);
  if (isGuildLogLink(anchor)) {
    sendEvent('useNewGuildLog', 'Alter Href');
    e.preventDefault();
    guildLog();
    hideElement(getElementById('notification-guild-log'));
  }
}

export default function useNewGuildLog() {
  on(document.body, 'click', handleClick);
  on(document.body, 'auxclick', handleClick);
}
