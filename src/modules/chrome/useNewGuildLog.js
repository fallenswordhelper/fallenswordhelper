import sendEvent from '../analytics/sendEvent';
import closest from '../common/closest';
import on from '../common/on';
import { guildLogUrl } from '../support/constants';
import guildLog from './pageSwitcher/loader/guildLog';

function handleClick(e) {
  const anchor = closest('a', e.target);
  if (anchor?.getAttribute('href') === guildLogUrl) {
    sendEvent('useNewGuildLog', 'Alter Href');
    e.preventDefault();
    guildLog();
  }
}

export default function useNewGuildLog() {
  on(document.body, 'click', handleClick);
  on(document.body, 'auxclick', handleClick);
}
