import closest from '../common/closest';
import on from '../common/on';
import sendEvent from '../analytics/sendEvent';
import { guildLogUrl, newGuildLogUrl } from '../support/constants';

const conditions = [
  (anchor) => anchor,
  (anchor) => anchor.getAttribute('href') === guildLogUrl,
  (anchor) => !anchor.classList.contains('sendLink'),
];

const allConditions = (anchor) => conditions.every((c) => c(anchor));

function handleClick(e) {
  const anchor = closest('a', e.target);
  if (allConditions(anchor)) {
    sendEvent('useNewGuildLog', 'Alter Href');
    anchor.href = newGuildLogUrl;
  }
}

export default function useNewGuildLog() {
  on(document.body, 'click', handleClick);
  on(document.body, 'auxclick', handleClick);
}
